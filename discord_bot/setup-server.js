require('dotenv').config();
const { Client, GatewayIntentBits, ChannelType, PermissionFlagsBits, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const template = require('./discord-server-template.json');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('ready', async () => {
  console.log(`✅ Bot logged in as ${client.user.tag}`);
  
  // Get the guild - you'll need to specify the guild ID
  const guildId = process.env.DISCORD_GUILD_ID;
  if (!guildId) {
    console.error('❌ DISCORD_GUILD_ID not set in .env file');
    process.exit(1);
  }

  const guild = await client.guilds.fetch(guildId);
  console.log(`📍 Setting up server: ${guild.name}`);

  try {
    // Step 1: Create Roles
    console.log('\n📝 Creating roles...');
    const roleMap = {};
    for (const roleData of template.roles) {
      const permissions = permissionStringToFlags(roleData.permissions);
      const role = await guild.roles.create({
        name: roleData.name,
        color: roleData.color,
        hoist: roleData.hoist,
        permissions: permissions,
        reason: 'Nullforge Expanse template setup',
      });
      roleMap[roleData.id] = role;
      console.log(`✅ Created role: ${role.name}`);
    }

    // Step 2: Create Categories and Channels
    console.log('\n🏗️  Creating categories and channels...');
    for (const category of template.categories) {
      const categoryChannel = await guild.channels.create({
        name: category.name,
        type: ChannelType.GuildCategory,
        reason: 'Nullforge Expanse template setup',
      });
      console.log(`✅ Created category: ${category.name}`);

      for (const channel of category.channels) {
        const createdChannel = await guild.channels.create({
          name: channel.name,
          type: channel.type === 'text' ? ChannelType.GuildText : ChannelType.GuildVoice,
          parent: categoryChannel,
          topic: channel.topic || null,
          nsfw: channel.nsfw || false,
          reason: 'Nullforge Expanse template setup',
        });
        console.log(`   ✅ Created ${channel.type} channel: #${channel.name}`);
      }
    }

    // Step 3: Send Welcome Message
    console.log('\n📢 Sending welcome message...');
    const welcomeChannel = guild.channels.cache.find(ch => ch.name === 'welcome');
    if (welcomeChannel) {
      const welcomeEmbed = new EmbedBuilder()
        .setTitle(template.welcomeMessage.title)
        .setDescription(template.welcomeMessage.content)
        .setColor(template.welcomeMessage.color)
        .setThumbnail('https://i.imgur.com/placeholder.png'); // Replace with actual icon URL

      await welcomeChannel.send({ embeds: [welcomeEmbed] });
      console.log('✅ Welcome message sent');
    }

    // Step 4: Send Rules Message
    console.log('\n📋 Sending rules message...');
    const rulesChannel = guild.channels.cache.find(ch => ch.name === 'rules');
    if (rulesChannel) {
      const rulesText = template.rulesMessage.rules
        .map((rule, i) => `${i + 1}. ${rule}`)
        .join('\n');

      const rulesEmbed = new EmbedBuilder()
        .setTitle(template.rulesMessage.title)
        .setDescription(rulesText)
        .setColor(template.rulesMessage.color);

      await rulesChannel.send({ embeds: [rulesEmbed] });
      console.log('✅ Rules message sent');
    }

    console.log('\n🎉 Server setup complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during setup:', error);
    process.exit(1);
  }
});

function permissionStringToFlags(permissionStrings) {
  const permissionMap = {
    'ADMINISTRATOR': PermissionFlagsBits.Administrator,
    'MANAGE_GUILD': PermissionFlagsBits.ManageGuild,
    'MANAGE_CHANNELS': PermissionFlagsBits.ManageChannels,
    'MANAGE_ROLES': PermissionFlagsBits.ManageRoles,
    'MANAGE_MESSAGES': PermissionFlagsBits.ManageMessages,
    'MANAGE_MEMBERS': PermissionFlagsBits.ManageMembers,
    'KICK_MEMBERS': PermissionFlagsBits.KickMembers,
    'BAN_MEMBERS': PermissionFlagsBits.BanMembers,
    'MANAGE_WEBHOOKS': PermissionFlagsBits.ManageWebhooks,
  };

  let flags = 0n;
  for (const perm of permissionStrings) {
    if (permissionMap[perm]) {
      flags |= permissionMap[perm];
    }
  }
  return flags;
}

client.login(process.env.DISCORD_TOKEN);

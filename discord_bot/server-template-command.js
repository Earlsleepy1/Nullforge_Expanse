// Discord.js Command for importing server template
// Add this to your command handler in index.js

const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const template = require('./discord-server-template.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setup-template')
    .setDescription('Setup the Nullforge Expanse server template')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addBooleanOption(option =>
      option.setName('confirm')
        .setDescription('Confirm you want to create all channels and roles')
        .setRequired(true)
    ),
  
  async execute(interaction) {
    const confirmed = interaction.options.getBoolean('confirm');

    if (!confirmed) {
      return interaction.reply({
        content: '❌ Setup cancelled. Use `/setup-template confirm:true` to proceed.',
        ephemeral: true,
      });
    }

    await interaction.deferReply({ ephemeral: true });

    try {
      const guild = interaction.guild;
      let createdItems = {
        roles: 0,
        channels: 0,
        messages: 0,
      };

      // Create Roles
      for (const roleData of template.roles) {
        const existingRole = guild.roles.cache.find(r => r.name === roleData.name);
        if (!existingRole) {
          const permissions = permissionStringToFlags(roleData.permissions);
          await guild.roles.create({
            name: roleData.name,
            color: roleData.color,
            hoist: roleData.hoist,
            permissions: permissions,
          });
          createdItems.roles++;
        }
      }

      // Create Categories and Channels
      for (const category of template.categories) {
        const categoryChannel = await guild.channels.create({
          name: category.name,
          type: 4, // GUILD_CATEGORY
        });

        for (const channel of category.channels) {
          const channelType = channel.type === 'text' ? 0 : 2; // GUILD_TEXT or GUILD_VOICE
          await guild.channels.create({
            name: channel.name,
            type: channelType,
            parent: categoryChannel,
            topic: channel.topic || null,
            nsfw: channel.nsfw || false,
          });
          createdItems.channels++;
        }
      }

      // Send Welcome Message
      const welcomeChannel = guild.channels.cache.find(ch => ch.name === 'welcome');
      if (welcomeChannel) {
        const welcomeEmbed = new EmbedBuilder()
          .setTitle(template.welcomeMessage.title)
          .setDescription(template.welcomeMessage.content)
          .setColor(template.welcomeMessage.color);

        await welcomeChannel.send({ embeds: [welcomeEmbed] });
        createdItems.messages++;
      }

      // Send Rules Message
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
        createdItems.messages++;
      }

      // Send Summary
      const summaryEmbed = new EmbedBuilder()
        .setTitle('✅ Server Setup Complete!')
        .setDescription('Nullforge Expanse template has been applied.')
        .addFields(
          { name: '👥 Roles Created', value: `${createdItems.roles}`, inline: true },
          { name: '📝 Channels Created', value: `${createdItems.channels}`, inline: true },
          { name: '📢 Messages Sent', value: `${createdItems.messages}`, inline: true },
        )
        .setColor('#6A0DAD');

      await interaction.editReply({ embeds: [summaryEmbed] });
    } catch (error) {
      console.error('Setup error:', error);
      await interaction.editReply({
        content: `❌ Error during setup: ${error.message}`,
        ephemeral: true,
      });
    }
  },
};

function permissionStringToFlags(permissionStrings) {
  const { PermissionFlagsBits } = require('discord.js');
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

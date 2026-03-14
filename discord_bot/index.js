require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { OpenAI } = require('openai');
const mc = require('minecraft-protocol');
const fs = require('fs');

// Logging function
function logToFile(message) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}\n`;
  fs.appendFileSync('chat_log.txt', logEntry);
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Create Minecraft bot
const mcBotOptions = {
  host: process.env.MINECRAFT_REALM_HOST || process.env.MINECRAFT_HOST,
  port: parseInt(process.env.MINECRAFT_REALM_PORT || process.env.MINECRAFT_PORT),
  username: process.env.MINECRAFT_USERNAME,
  version: false,  // Auto-detect Bedrock
};

if (process.env.MICROSOFT_EMAIL && process.env.MICROSOFT_PASSWORD) {
  mcBotOptions.auth = 'microsoft';
  mcBotOptions.username = process.env.MICROSOFT_EMAIL;
  mcBotOptions.password = process.env.MICROSOFT_PASSWORD;
}

let mcBot;
try {
  mcBot = mc.createClient(mcBotOptions);
} catch (error) {
  console.log('Failed to create Minecraft client:', error);
  logToFile('Failed to create Minecraft client: ' + error.message);
}

let currentPosition = { x: 0, y: 0, z: 0 };
let yaw = 0;
let runtime_id = 0;

if (mcBot) {
  mcBot.on('login', () => {
    console.log('Minecraft bot logged in');
    logToFile('Minecraft bot logged in');
  });

  mcBot.on('start_game', (packet) => {
    runtime_id = packet.runtime_entity_id;
  });

  mcBot.on('position', (position) => {
    currentPosition = position;
  });

  mcBot.on('error', (err) => {
    console.log('Minecraft bot error:', err);
    logToFile('Minecraft bot error: ' + err.message);
  });
}

// Function to move the bot in Bedrock
function moveDirection(direction) {
  let dx = 0, dz = 0;
  switch (direction) {
    case 'forward': dz = -1; break;
    case 'back': dz = 1; break;
    case 'left': dx = -1; break;
    case 'right': dx = 1; break;
  }
  const newPos = {
    x: currentPosition.x + dx,
    y: currentPosition.y,
    z: currentPosition.z + dz
  };
  if (mcBot) {
    mcBot.write('move_player', {
      runtime_id: runtime_id,
      position: newPos,
      pitch: 0,
      yaw: yaw,
      head_yaw: yaw,
      mode: 0,
      on_ground: true
    });
  }
}

client.once('ready', () => {
  console.log(`Discord bot logged in as ${client.user.tag}!`);
  logToFile(`Discord bot logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  logToFile(`Message from ${message.author.username}: ${message.content}`);

  const content = message.content.toLowerCase();

  if (content === '!ping') {
    message.reply('Pong!');
    logToFile('Bot replied: Pong!');
  }

  if (content === '!nullforge') {
    message.reply('Welcome to Nullforge Expanse! Explore the cosmic void and ancient mechanical civilizations in Minecraft.');
    logToFile('Bot replied: Welcome to Nullforge Expanse...');
  }

  if (content.startsWith('!ask ')) {
    const question = message.content.slice(5);
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: question }],
        max_tokens: 150,
      });
      const aiReply = response.choices[0].message.content;
      message.reply(aiReply);
      logToFile(`AI replied: ${aiReply}`);
    } catch (error) {
      console.error(error);
      message.reply('Sorry, I couldn\'t process that request.');
      logToFile('Bot replied: Sorry, I couldn\'t process that request.');
    }
  }

  if (content.startsWith('!move ')) {
    const direction = content.slice(6);
    if (mcBot) {
      try {
        switch (direction) {
          case 'forward':
            moveDirection('forward');
            message.reply('Moving forward in Minecraft!');
            logToFile('Minecraft bot moved forward');
            break;
          case 'back':
            moveDirection('back');
            message.reply('Moving backward in Minecraft!');
            logToFile('Minecraft bot moved backward');
            break;
          case 'left':
            moveDirection('left');
            message.reply('Moving left in Minecraft!');
            logToFile('Minecraft bot moved left');
            break;
          case 'right':
            moveDirection('right');
            message.reply('Moving right in Minecraft!');
            logToFile('Minecraft bot moved right');
            break;
          default:
            message.reply('Invalid direction. Use: forward, back, left, right');
            logToFile('Invalid move direction attempted');
        }
      } catch (error) {
        message.reply('Minecraft bot not connected or error occurred.');
        logToFile('Minecraft bot error: not connected or error occurred');
      }
    } else {
      message.reply('Minecraft bot not available.');
      logToFile('Minecraft bot not available');
    }
  }

  // AI response to mentions
  if (message.mentions.has(client.user)) {
    const prompt = message.content.replace(`<@${client.user.id}>`, '').trim();
    if (prompt) {
      try {
        const response = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 150,
        });
        const aiReply = response.choices[0].message.content;
        message.reply(aiReply);
        logToFile(`AI replied to mention: ${aiReply}`);
      } catch (error) {
        message.reply('Sorry, I couldn\'t respond.');
        logToFile('Bot replied: Sorry, I couldn\'t respond.');
      }
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
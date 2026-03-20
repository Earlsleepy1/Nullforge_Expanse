# Nullforge Expanse Discord Server Template Setup Guide

This guide will help you create a Discord server using the Nullforge Expanse template.

## Prerequisites

- Node.js and npm installed
- A Discord bot token
- A Discord server (guild) to apply the template to
- Admin permissions in the Discord server

## Setup Instructions

### Step 1: Environment Configuration

Create a `.env` file in the `discord_bot` directory with the following variables:

```env
DISCORD_TOKEN=your_bot_token_here
DISCORD_GUILD_ID=your_guild_id_here
```

**How to get these values:**

1. **DISCORD_TOKEN**: 
   - Go to [Discord Developer Portal](https://discord.com/developers/applications)
   - Create or select your application
   - Navigate to "Bot" section
   - Copy the token under "TOKEN"
   - ⚠️ Keep this secret! Never share it.

2. **DISCORD_GUILD_ID**:
   - Enable Developer Mode in Discord (User Settings → Advanced)
   - Right-click your server and select "Copy Server ID"

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Run the Setup Script

```bash
node setup-server.js
```

The script will:
- ✅ Create all roles with proper permissions
- ✅ Create categories and channels
- ✅ Send welcome and rules messages
- ✅ Configure channel permissions

### Step 4: Verify Setup

Check your Discord server to ensure:
- [ ] All roles are created with correct colors and hierarchy
- [ ] All categories and channels are organized properly
- [ ] Welcome and rules messages are posted
- [ ] Voice channels are ready for use

## Server Structure

### Roles
- **👑 Admins** - Full server control
- **⚔️ Moderators** - Message and member management
- **⚙️ Developers** - Channel and webhook management
- **✅ Verified** - Verified community members
- **🗺️ Explorers** - Regular players
- **🤖 Bots** - Bot accounts

### Channels

**📋 INFORMATION**
- `#welcome` - Server introduction
- `#rules` - Community guidelines
- `#announcements` - Updates and news
- `#changelog` - Version updates

**💬 COMMUNITY**
- `#general` - General discussion
- `#showcase` - Share creations and adventures
- `#introductions` - Introduce yourself
- `#off-topic` - Non-Minecraft chat

**🎮 GAMEPLAY**
- `#guides-tutorials` - How-to guides and tips
- `#builds-creations` - Show off your builds
- `#combat-strategies` - Combat tips and discussions
- `#gear-crafting` - Recipes and optimization

**⚙️ TECHNICAL**
- `#installation-support` - Installation help
- `#bug-reports` - Report issues
- `#feature-requests` - Suggest improvements
- `#mod-development` - Development discussions

**🎙️ VOICE**
- `voice-general` - General voice channel
- `voice-gaming` - Gaming voice channel
- `voice-chill-lounge` - Relaxed hangout

## Customization

To customize the server template:

1. Edit `discord-server-template.json`:
   - Modify channel names, descriptions, and order
   - Change role colors and permissions
   - Update welcome and rules messages
   - Add new categories and channels

2. Re-run the setup script:
   ```bash
   node setup-server.js
   ```

### Template Structure

```json
{
  "serverName": "Nullforge Expanse",
  "serverDescription": "...",
  "roles": [...],
  "categories": [...],
  "welcomeMessage": {...},
  "rulesMessage": {...}
}
```

## Troubleshooting

### Bot doesn't have permission to create channels
- Ensure the bot has "Manage Channels" permission
- Check the role hierarchy - bot role must be high enough

### Missing DISCORD_GUILD_ID error
- Make sure you added `DISCORD_GUILD_ID` to your `.env` file
- Verify the guild ID is correct (numbers only)

### Channels already exist
- The script will fail if channels already exist
- Delete duplicate channels manually or adjust the template

### Bot token is invalid
- Double-check the token in your `.env` file
- Create a new token in Discord Developer Portal if needed

## Additional Configuration

### Setting Channel Permissions

After running the setup script, you may want to:

1. **Restrict #bug-reports**: Only allow specific roles
2. **Lock #announcements**: Only admins can post
3. **Hide #mod-development**: Only developers can see it

Do this through Discord's channel settings.

### Adding a Verification Bot

For member verification, consider integrating:
- UnbelievaBoat
- Reaction Roles Bot
- Custom verification commands

## Support

For issues or questions:
- Check the [Nullforge Expanse GitHub](https://github.com/Earlsleepy1/Nullforge_Expanse)
- Open an issue in the repository
- Join the Discord community and ask

---

**Last Updated:** March 2026  
**Template Version:** 1.0

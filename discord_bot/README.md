# Nullforge Expanse Discord Bot

A Discord bot for the Nullforge Expanse Minecraft addon with AI chat and Minecraft control capabilities.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a Discord application at https://discord.com/developers/applications

3. Copy the bot token and paste it in `.env` file, replacing `YOUR_BOT_TOKEN_HERE`

4. Get an OpenAI API key from https://platform.openai.com/api-keys and add it to `.env`

5. For Minecraft control, ensure you have a Minecraft server running and update the host/port/username in `.env`
   **For Minecraft Realms:**
   - Now supports both Java and Bedrock Edition Realms
   - For Bedrock, uses port 19132 and Bedrock protocol
   - Uncomment and fill in the Realm-specific variables in `.env`
   - Get your Realm's address from the Minecraft client (join the Realm and check the server address)
   - Provide your Microsoft account email and password for authentication
   - Note: The bot needs to be invited to the Realm or have access
   - **Security Warning:** Storing Microsoft credentials in plain text is insecure. Consider using environment variables or a secure method for production.
6. Invite the bot to your server using the OAuth2 URL from the Discord developer portal.

7. Run the bot:
   ```
   npm start
   ```

## Commands

- `!ping` - Replies with "Pong!"
- `!nullforge` - Provides information about Nullforge Expanse
- `!ask <question>` - Ask the AI anything
- `!move <direction>` - Move the Minecraft bot (directions: forward, back, left, right)
- Mention the bot with a message - Get an AI response

## Features

- AI-powered chat using OpenAI GPT-3.5
- Minecraft bot control for basic movement in both Java and Bedrock Edition
- Nullforge Expanse themed responses
- Automatic logging of all interactions to `chat_log.txt`
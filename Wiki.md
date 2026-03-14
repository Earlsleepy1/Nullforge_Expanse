# Nullforge Expanse Wiki

## Overview

**Nullforge Expanse** is a biome-driven expansion for Minecraft Bedrock Edition that blends cosmic void energy with ancient mechanical civilizations. The world is a fractured dimension where floating islands, crystal formations, and ancient mechanical structures exist in a corrupted void landscape. Players explore ruins, activate forgotten machines, and eventually confront the Endforged Automaton.

This addon introduces new biomes, hostile mobs, a powerful boss, custom equipment, and interactive elements including AI-powered chat bots and Discord integration.

## Biome: Nullforge Expanse

### Environment Features
- Floating stone islands
- Glowing blue void crystals (representing concentrated Void Energy)
- Mechanical ruins with gear-embedded structures
- Corrupted void fog

### Atmosphere
The biome feels mysterious, ancient, and dangerous. Players hear distant metallic echoes and strange mechanical sounds beneath the terrain.

### Access
- **Before defeating the Ender Dragon**: Unstable portals allow temporary exploration.
- **After defeating the Ender Dragon**: A permanent gateway opens, making the full biome accessible.

Use `/locate biome nullforge:nullforge_expanse` to find the biome in-game.

## Hostile Mobs

### Scraplings
Small corrupted mechanical creatures built from ancient machines.
- **Behavior**: Aggressive, spawn in structures.
- **Drops**: Null Shards.

### Chrono-Stalkers
Void phantoms that manipulate time when players make eye contact.
- **Behavior**: Time-manipulating abilities.
- **Drops**: Null Shards.

### Void Sentries
Ancient automated defense turrets guarding structures.
- **Behavior**: Turret-like defense.
- **Drops**: Void Gear Cores.

## Boss: Endforged Automaton

A massive void-powered mechanical construct guarding the core of the biome.

### Phases
1. **Phase 1**: Mechanical slam attacks and spinning blades.
2. **Phase 2**: Gravity distortions and projectile barrages.
3. **Final Phase**: Core exposed, arena collapses.

### Drops
- Void Gear Core
- Automaton Plating
- Null Shards

## Equipment and Items

### Voidforged Armor
Upgradeable armor crafted from Automaton Plating with modular attachments:
- Auto-repair module
- Glide booster
- Void dash ability
- Piston punch

**Crafting**: Helmets, chestplates, leggings, and boots using Automaton Plating.

### Weapons
- **Nullblade**: Void energy sword with sweeping attacks. Crafted from Null Shards + Void Gear Core.
- **Gearhammer**: Heavy mechanical hammer causing shockwaves and knockback. Crafted from Automaton Plating + Void Gear Core.
- **Chrono Bow**: Slows enemies on hit. Crafted from String + Void Gear Core.

### Other Items
- **Null Shards**: Dropped by Scraplings and Chrono-Stalkers.
- **Void Gear Cores**: Dropped by Void Sentries and the Endforged Automaton.
- **Automaton Plating**: Dropped by the Endforged Automaton.
- **Nullforge Music Disc**: Special item for ambiance.
- **Bot Summoner**: Item to spawn bots directly.

## Structures

### Nullforge Temple
Ancient structure with golden mechanical patterns and glowing blue crystals.
- **Features**:
  - Hidden mechanical doors
  - Puzzle chambers
  - Void energy reactors
  - Scrapling spawns
- **Purpose**: Gateway/dungeon entrance for discovering Nullforge technology and activating biome cores.

## Interactive Elements

### Minecraft Bots
- **Minecraft Bot** (`nullforge:minecraft_bot`): Combat bot with equipment, inventory, and drop logic.
- **Chat Bot** (`nullforge:chat_bot`): Interactable bot with keyword-based chat responses.

Use `/summon nullforge:scrapling` to spawn test mobs, or use the Bot Summoner item.

### Chat AI System
The addon includes functions for AI chat interactions:
- `nullforge_expanse_chat_ai.mcfunction`: Handles AI responses.
- `nullforge_expanse_chat_clear.mcfunction`: Clears chat.
- `nullforge_expanse_chat_help.mcfunction`: Provides help.
- `nullforge_expanse_chat_hi.mcfunction`: Greeting responses.
- `nullforge_expanse_chat_lore.mcfunction`: Lore information.

### Portal Mechanics
- `nullforge_expanse_portal_after_dragon.mcfunction`: Post-dragon portal logic.
- `nullforge_expanse_portal_check.mcfunction`: Portal checks.
- `nullforge_expanse_portal_corrupted.mcfunction`: Corrupted portal handling.

## Discord Bot Integration

A companion Discord bot provides additional interaction:
- AI-powered chat using OpenAI GPT-3.5
- Minecraft bot control for basic movement
- Nullforge Expanse themed responses
- Commands: `!ping`, `!nullforge`, `!ask <question>`, `!move <direction>`

See the `discord_bot/` folder for setup instructions.

## Installation

1. Download the `Nullforge_Expanse.mcaddon` file.
2. Open Minecraft Bedrock Edition.
3. Go to Settings > Global Resources > Import.
4. Select the .mcaddon file to import.
5. Create a new world or edit an existing one.
6. In World Settings > Add-ons, enable "Nullforge Expanse Behavior" and "Nullforge Expanse Resource".
7. Start playing!

## Crafting Recipes

- **Voidforged Helmet**: Automaton Plating in armor shape.
- **Voidforged Chestplate**: Automaton Plating in armor shape.
- **Voidforged Leggings**: Automaton Plating in armor shape.
- **Voidforged Boots**: Automaton Plating in armor shape.
- **Nullblade**: Null Shards + Void Gear Core.
- **Gearhammer**: Automaton Plating + Void Gear Core.
- **Chrono Bow**: String + Void Gear Core.
- **Bot Summoner**: Special recipe for spawning bots.

## Setup and Commands

- **Setup**: Run `/function nullforge_expanse_setup` to initialize.
- **Reset**: Run `/function nullforge_expanse_reset` to reset the world.
- **Give Recipes**: `/function give_voidforged_recipes` to unlock crafting.

## Tips for Players

- Explore the void carefully—mobs are aggressive and the environment is hazardous.
- Defeat the Ender Dragon to unlock full access to the biome.
- Collect Null Shards and Void Gear Cores to craft powerful equipment.
- Use the Chat Bot for lore and assistance.
- The biome's atmosphere enhances immersion with mechanical sounds and visuals.

## License and Credits

This project is licensed under a proprietary "All Rights Reserved" license. See `LICENSE` for details.

- **Creator**: earlsleepy
- **Repository**: https://github.com/Earlsleepy1/Nullforge_Expanse
- **Concept**: Blends cosmic void energy with ancient mechanical civilizations.

For more information, visit the repository or join the community discussions.
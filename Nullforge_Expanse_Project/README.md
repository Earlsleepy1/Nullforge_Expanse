# Nullforge Expanse — Minecraft Bedrock Add-on

Nullforge Expanse is a cosmic-void adventure add-on by **earlsleepy**. It adds hostile machines, a boss with phases, Voidforged armor, weapons, crafting materials, custom item icons, entity visuals, and setup functions.

## Install

1. Open `Nullforge_Expanse.mcaddon` with Minecraft Bedrock Edition.
2. Create or edit a world and enable both **Nullforge Expanse Behavior** and **Nullforge Expanse Resource** under Add-Ons.
3. For a quick start, run:

   ```mcfunction
   /function nullforge_expanse_setup
   ```

The `.mcpack` file is the resource pack only. Most players should use the `.mcaddon` file.

## Gameplay

- **Mobs:** Scrapling, Chrono-Stalker, Void Sentry, Minecraft Bot, and Nullforge Chat Bot.
- **Boss:** Endforged Automaton with escalating attack phases.
- **Materials:** Null Shard, Void Gear Core, and Automaton Plating.
- **Equipment:** Nullblade, Gearhammer, Chrono Bow, Bot Summoner, and a full Voidforged armor set.
- **Portal tools:** Run `/function nullforge_expanse_portal_corrupted` for the unstable portal frame, or `/function nullforge_expanse_portal_after_dragon` for the post-dragon gateway platform. Stand on the pressure plate and run `/function nullforge_expanse_portal_check` to teleport to the Nullforge coordinates.
- **Chat bot:** Run `/function nullforge_expanse_chat_help` for the scripted lore commands.

## Testing commands

```mcfunction
/summon nullforge:scrapling
/summon nullforge:chrono_stalker
/summon nullforge:void_sentry
/summon nullforge:endforged_automaton
/give @s nullforge:voidforged_chestplate
/function nullforge_expanse_reset
```

## Notes

The add-on uses stable Bedrock custom-item formats and includes generated placeholder textures so items and entities render immediately. The visual assets are designed to be replaced or refined in Blockbench without changing identifiers or recipes.

Minecraft Bedrock does not use the empty `Nullforge Expanse java` path; the playable add-on is in `Nullforge_Expanse_Project/`.

## License

Personal, non-commercial use only. See `LICENSE` for the full terms.

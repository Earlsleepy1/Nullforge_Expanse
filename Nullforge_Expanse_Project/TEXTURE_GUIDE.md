# Nullforge Expanse Texture Guide

The project includes working placeholder textures so the Bedrock packs load without missing-texture references. Replace them with final pixel art or Blockbench exports while keeping the same paths and identifiers.

## Item icons

Item icons are 16×16 PNGs under `resource_pack/textures/items/` and are mapped in `resource_pack/textures/item_texture.json`.

| Item | File |
|---|---|
| Null Shard | `null_shard.png` |
| Void Gear Core | `void_gear_core.png` |
| Automaton Plating | `automaton_plating.png` |
| Nullblade | `nullblade.png` |
| Gearhammer | `gearhammer.png` |
| Chrono Bow | `chrono_bow.png` |
| Voidforged armor | `voidforged_helmet.png`, `voidforged_chestplate.png`, `voidforged_leggings.png`, `voidforged_boots.png` |

## Entity textures

Entity placeholder textures are under `resource_pack/textures/entity/`. Each client entity currently uses vanilla humanoid geometry so the add-on remains functional without custom models. Replace the textures and later swap in Blockbench geometry if desired.

## Armor textures

Voidforged armor uses the standard Bedrock humanoid armor attachables:

- `resource_pack/textures/models/armor/voidforged_1.png` for helmet, chestplate, and boots.
- `resource_pack/textures/models/armor/voidforged_2.png` for leggings.
- `resource_pack/attachables/voidforged_*.json` connects the worn items to the vanilla armor geometry.

Keep the armor atlas in a Bedrock-compatible layout and preserve the filenames.

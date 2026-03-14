# Creates the corrupted Nether-like portal "seed" frame near the player
# Usage: /function nullforge_expanse_portal_corrupted
# Call at world spawn / creeper ruin area where you want the portal to be.
setblock ~1 ~ ~ nether_portal
setblock ~2 ~ ~ nether_portal
setblock ~3 ~ ~ nether_portal
setblock ~1 ~1 ~ nether_portal
setblock ~3 ~1 ~ nether_portal
setblock ~1 ~2 ~ nether_portal
setblock ~2 ~2 ~ nether_portal
setblock ~3 ~2 ~ nether_portal
say Corrupted portal structure created. Build it up with obsidian / crying obsidian to activate.
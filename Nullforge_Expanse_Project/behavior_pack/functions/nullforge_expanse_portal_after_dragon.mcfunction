# Creates the Nullforge Expanse portal after the Ender Dragon dies
# Usage: run manually when Ender Dragon has been defeated, or call from auto function triggers
# Unique frame so it doesn't conflict with vanilla nether portal.
# Built as a custom portal pad: stand on the plate and run /function nullforge_expanse_portal_check.

# frame around the trigger platform
setblock ~1 ~ ~ polished_blackstone
setblock ~2 ~ ~ polished_blackstone
setblock ~3 ~ ~ polished_blackstone
setblock ~1 ~1 ~ polished_blackstone
setblock ~3 ~1 ~ polished_blackstone
setblock ~1 ~2 ~ polished_blackstone
setblock ~2 ~2 ~ polished_blackstone
setblock ~3 ~2 ~ polished_blackstone
setblock ~1 ~3 ~ crying_obsidian
setblock ~2 ~3 ~ crying_obsidian
setblock ~3 ~3 ~ crying_obsidian
# trigger platform
setblock ~2 ~0 ~ polished_blackstone_pressure_plate
# Teleport arrival target marker (for walking in)
setblock ~2 ~1 ~ glass
say Nullforge Expanse portal created. Stand on the pressure plate and run /function nullforge_expanse_portal_check to teleport.
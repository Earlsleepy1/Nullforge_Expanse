# Teleport through the Nullforge Expanse portal when standing on the custom plate.
# Place this on a repeating command block: /function nullforge_expanse_portal_check

execute as @a[distance=..3] at @s if block ~ ~-1 ~ polished_blackstone_pressure_plate run tp @s 1000 70 0
execute as @a[distance=..3] at @s if block ~ ~-1 ~ polished_blackstone_pressure_plate run say [Nullforge Portal] Welcome to the Nullforge Expanse! (1000 70 0)
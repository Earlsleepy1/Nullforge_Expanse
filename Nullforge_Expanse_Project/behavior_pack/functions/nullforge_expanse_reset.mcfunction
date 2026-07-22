kill @e[type=nullforge:minecraft_bot]
kill @e[type=nullforge:chat_bot]
kill @e[type=nullforge:void_sentry]
kill @e[type=nullforge:chrono_stalker]
kill @e[type=nullforge:endforged_automaton]
scoreboard objectives remove nullforgeChat
scoreboard objectives add nullforgeChat dummy
tellraw @a {"rawtext":[{"text":"§5Nullforge Expanse reset complete. Run /function nullforge_expanse_setup to rebuild."}]}

# Reset Nullforge Expanse entities and environment scaffolding
# run: /function nullforge_expanse_reset
kill @e[type=nullforge:minecraft_bot]
kill @e[type=nullforge:chat_bot]
kill @e[type=nullforge:void_sentry]
kill @e[type=nullforge:chrono_stalker]
kill @e[type=nullforge:endforged_automaton]
# Reset if there is a scoreboard in use
scoreboard objectives remove nullforgeChat 2>/dev/null
scoreboard objectives add nullforgeChat dummy
say Nullforge Expanse reset complete. Run /function nullforge_expanse_setup to rebuild.
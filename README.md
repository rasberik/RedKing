Red King Project
===========================================
This is an auxillary discord bot project in Node.JS for BattleHand mobile game.

If you want to invite the bot to your server, use [this link](https://discord.com/api/oauth2/authorize?client_id=819491368174485515&permissions=67584&scope=bot), you will need Administrator access to your discord channel.

Change Logs
-------------------------------------------

__To do:__ _@NonPensavo_
- Improve assets for: `Wyrmslayer`
- Add card `Karmic Blessing` 

__March 14, 2021__ _@NonPensavo_
- Updated Cure All status to cure Bleed
- Updated to work as secondary bot named Red King

__January 18, 2021__ _@NonPensavo_
- Added `-warlist` command for quick reference about upcoming wars.
- Updated some emjois to match with source channel

__January 15, 2021__ _@NonPensavo_
- Pack module output styling change per line and include emojis

__January 7, 2021__ _@NonPensavo_
- Reorganized imports into singletons to avoid new inits
- Added Events module with Christmas, Valentines and Halloween to automatically trigger every year
- Added `war reward` and `war brag` commands
- Added `war N` by order, so its possible to request any Nth war from now, `-war` is equivalent to `-war 0` and vice versa.
- Added `war N reward` and `war N brag` as well
- Added possibility for war `N` to be negative to see previous wars

__January 6, 2021__ _@NonPensavo_
- War Module added and can be requested by `-war` for current or upcoming war
- War schedule filled only with first 5 wars to test functionality, full list and more request variations to be done
- UPD: Packs data moved to `modulepackdb.js` singleton exports (i believe its kinda singleton) in order to access them from different modules without `new` inits

__December 15, 2020__ _@NonPensavo_
- Multiple options found for `-ice`, `-salamander` and related changes
- Redesigned output of `-listing heroname` commands to make more eye friendly

__December 3, 2020__ _@NonPensavo_
- Added custom server emoji to module info heroes description

__December 2, 2020__ _@NonPensavo_
- Added emoji module to try custom emoji out later. There is huge downside due to embed limitations

__December 1, 2020__ _@NonPensavo_
- Added asset for `Sharp Tongue SR`
- *Christmas Color* mode! Card embeds now will have random green color generated!
- All Card Star emoji and maxed level emojis are replaced with Santa and Chrismas)

__November 28, 2020__ _@NonPensavo_
- Reorganized `infomodule` & `datamodule`
- Removed `datamodule`
- Added `moduleeffects`
- Added `modulepack`
- Moved silver & bronze & gold & diamond packs to `modulepack`, added count value

__November 27, 2020__ _@NonPensavo_
- Updated asset for `Rain of Fire L`
- Added neutral cards listing for `-diamond neutral`

__November 26, 2020__ _@NonPensavo_
- Updated missing data for `Poisonous Currents` SR Evo 2&3 (and min values on hud sheet)

__November 25, 2020__ _@NonPensavo_
- Added all rewards embed message command that fit all 53 currently known cards in a single embed message
- Added common command `-rewards` for the message above, available for everyone. Disabled previous `all 1-3` commands
- Added all OP cards list containing 24 static elements, with their details and generated string value containing all of them using .map.reduce
- Added command `-op` that shows all OP cards list in the game 

__November 24, 2020__ _@NonPensavo_
- Added Rewards module and filled Monthly rewards cards list
- Added few beta commands to test on my channel `-rewards all 1` & `-rewards all 2` & `-rewards all 3` temporarily in order to fit embed limitation.

__November 23, 2020__ _@NonPensavo_
- Updated Assets for: `Poisonous Currents`
- Added missing data (``????``) for: `Poisonous Currents`, `Espresso Shot`, `Fairy Shield`, `Firestorm`, `Holy Shower`, `Hot Chestnuts`, `Ice Queen Protector`, `Night Cap`, `Out of Sight`, `Pumpkin Field`, `Rain of Fire`, `Rejuvenate All`, `Safeguard`, `Shadow Steps`, `Sharp Tongue`, `Sky Piercer`, `Sorcerer's Gift`, `Spiked Trap`

__November 22, 2020__ _@NonPensavo_
- Updated Assets for: `Peace Pipe`, `Poisonous Currents L`, `Green Ray`, `Frost Ray`, `Justicar`, `Bearded Hatchet`, `Vigilant Shield`, `The Spice`, `Salamander Ale` 
- Fixed several assets size/dpi and match with common assets
- Added all missing cards for everyone
- Fixed null pointer crashes for `message.member.user`, with null pointer check and pass (needed for silly comment), actual fix requires nodejs / discordjs updates
- Fixed non existing methods invocation bugs
- Fixed some cards descriptions, aka, `Slow Dart`
- Added author info command
- Added beta guild module and sample message pattern 
- Changed hardcoded embed message color to variable, and set to red (Red Queen)
- Join message for one more discord channel: `714495330481078383`
- Added missing data (``????``) values for: `Peace Pipe`, `Poisonous Currents L`, `Green Ray`, `Frost Ray`, `Justicar`, `Bearded Hatchet`, `Vigilant Shield`, `The Spice`, `Salamander Ale`, `Voodoo Ritual`, `Wind Talker`, `Wyrmslayer`, `Ascetic Lesson`, `Blazefury`, `Bloodthirster`, `Candy Cauldron`, `Charm of Making`, `Clay Shower`, `Deep Breath`, etc

__Future Ideas:__  _@NonPensavo_
- Add war schedule and request them by `-next`,`-next N` or `-last` 

Project Info
-------------------------------------------

Original idea of the project code belong to M1RAGE.
On the back-end
- add frameworks and packages in `package.json`
- safely store app secrets in `.env` (nobody can see this but you and people you invite)


\ ゜o゜)ノ

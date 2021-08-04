let Pack = require('./modulepackdb.js');
let Emoji = require('./moduleemoji.js');

let PackManager = function (){    
//Diamond card packs database and effects. All cards. //Sorted L to R Air-Earth-Fire-Neutral-Spirit-Water
//Filters rar-pak-efcts-elmnt // Maps rar-card

this.PackDiamond = function (message) {
	message.reply("```2000 characters limit exceeded.```" + 
		"Sorry can\'t list all cards that are available in Diamond packs, there are total " + (Pack.Diamond.length) + " cards.\n" + 
		"Please use elemental Diamond commands to filter them further.\n" + 
		"Use: -Diamond **Element**, e.g. `-diamond neutral`").catch(console.error);
}
this.PackGold = function (message) {
	message.reply("```2000 characters limit exceeded.```" + 
		"Sorry can\'t list all cards that are available in Gold packs, there are total " + Pack.Gold.length + " cards.\n" + 
		"Please use elemental Pack commands to filter them further.\n"+
		"Use: -Pack **Element**, e.g. `-pack neutral`").catch(console.error);
}
this.PackSilver = function (message) {
	message.channel.send("```These are overall bad card packs. It is the general consensus among most players in Battlehand.```" +
		"**TIP:** *Don\'t waste resources in these. If you\'re looking to improve your decks get better Rare cards try Bronze or Gold packs.*").catch(console.error);
}
this.PackBronze = function (message) {
	message.channel.send("```Rare cards are available in these packs with a very small chance.```" +
		"Get your decks up to rare cards by cycling these packs almost for free by reselling Common & Uncommon cards for Fragments and rebuy more packs. "+
		"Make sure to change currency to Fragments instead of Gems in the shop window.\n" +
		"`Bronze pack costs 650 Fragments`\n" +
		"*Worst case scenario:* `3 Commons = 390 Fragments`\n" +
		"*Best case scenario:* `3 Uncommons = 780 Fragments`").catch(console.error);
}

this.DiamondEffectCards = function (message, request){
	const FilterEffect = Pack.Diamond
	.filter(event => event.efct === request || event.efct1 === request || event.efct2 === request || event.efct3 === request || event.perk === request)
	.sort((a,b) => (a.card > b.card) ? 1 : (b.card > a.card) ? -1 : 0)
	.map(event => event.rar + " `" + event.card + "` " + "\n")
	.reduce((prev, FilterEffect) => (prev) + FilterEffect, "")
	message.channel.send("Cards with requested effect are:\n" + FilterEffect);
}

this.DiamondElement = function (message, request){

	const SortDiamond = Pack.Diamond
	.filter(event => event.pak === "Y")
	.filter(event => event.elmnt === request)
	.filter(event => event.rar === "4:star:" || event.rar === "5:star:")
	.map(event => event.rar + " `" + event.card + "` " + "\n")
	.reduce((prev, SortDiamond) => (prev) + SortDiamond, "")

	const SortDiamondRare = Pack.Diamond
	.filter(event => event.pak === "Y")
	.filter(event => event.elmnt === request)
	.filter(event => event.rar === "3:star:")
	.map(event => event.rar + " `" + event.card + "` " + "\n")
	.reduce((prev, SortDiamondRare) => (prev) + SortDiamondRare, "")

	if (request === "air") {
		message.channel.send(Emoji.DefaultMinus + "\n" +  
                         "All available " + Emoji.CrystalAir + " **Air** cards in *Diamond packs*." + "\n" +  
                         SortDiamond) + 
		message.channel.send(Emoji.DefaultMinus + "\n" +  
                         SortDiamondRare + 
                         "```Diamond packs are the only ones that have a chance to drop Legendary cards. ```").catch(console.error);
	} else
	if (request === "earth") {
		message.channel.send(Emoji.DefaultMinus + "\n" +  
                         "All available " + Emoji.CrystalEarth + " **Earth** cards in *Diamond packs*." + "\n" +  
                         SortDiamond) + 
		message.channel.send(Emoji.DefaultMinus + "\n" +  
                         SortDiamondRare + 
                          "```Diamond packs are the only ones that have a chance to drop Legendary cards. ```").catch(console.error);
	} else
	if (request === "fire") {
		message.channel.send(Emoji.DefaultMinus + "\n" +
                         "All available " + Emoji.CrystalFire + " **Fire** cards in *Diamond packs*." + "\n" +  
                         SortDiamond) + 
		message.channel.send(Emoji.DefaultMinus + "\n" +  
                         SortDiamondRare + 
                         "```Diamond packs are the only ones that have a chance to drop Legendary cards. ```").catch(console.error);
	} else
	if (request === "spirit") {
		message.channel.send(Emoji.DefaultMinus + "\n" +
                         "All available " + Emoji.CrystalSpirit + " **Spirit** cards in *Diamond packs*." + "\n" +  
                         SortDiamond) + 
		message.channel.send(Emoji.DefaultMinus + "\n" +
                         SortDiamondRare + 
                         "```Diamond packs are the only ones that have a chance to drop Legendary cards. ```").catch(console.error);
	} else
	if (request === "water") {
		message.channel.send(Emoji.DefaultMinus + "\n" +
                         "All available " + Emoji.CrystalWater + " **Water** cards in *Diamond packs*." + "\n" +  
                         SortDiamond) + 
		message.channel.send(Emoji.DefaultMinus + "\n" +
                         SortDiamondRare + 
                         "```Diamond packs are the only ones that have a chance to drop Legendary cards. ```").catch(console.error);
	} else 
	if (request === "neutral") {
		message.channel.send(Emoji.DefaultMinus + "\n" +
                         "All available " + Emoji.CrystalNeutral + " **Neutral** cards in *Diamond packs*." + "\n" +  
                         SortDiamond) + 
		message.channel.send(Emoji.DefaultMinus + "\n" +
                         SortDiamondRare + 
                        "```Diamond packs are the only ones that have a chance to drop Legendary cards. ```").catch(console.error);
	}
}
  
// **************************
// ** Hero specific cards  **
// **************************
  
const SortMontyElement = Pack.Gold
.filter(event => event.cls === "magic")
.filter(event => event.elmnt === "fire")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortMontyElement) => (prev) + SortMontyElement, "")
this.SortMontyElement = function (message) {
	message.channel.send("Element specific cards **Monty** " + Emoji.HFMonty + " can use:\n" + SortMontyElement)
}
  
const SortMontyListing = Pack.Gold
.filter(event => event.cls === "magic")
.filter(event => event.elmnt === "fire" || event.elmnt === "neutral")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortMontyListing) => (prev) + SortMontyListing, "")
this.SortMontyListing = function (message) {
	message.channel.send("All cards **Monty** " + Emoji.HFMonty + " can use:\n" + SortMontyListing)
}
  
const SortFergusElement = Pack.Gold
.filter(event => event.cls === "might")
.filter(event => event.elmnt === "fire")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortFergusElement) => (prev) + SortFergusElement, "")
this.SortFergusElement = function (message) {
	message.channel.send("Element specific cards **Fergus** " + Emoji.HFFergus + " can use:\n" + SortFergusElement)
}
  
const SortFergusListing = Pack.Gold
.filter(event => event.cls === "might")
.filter(event => event.elmnt === "fire" || event.elmnt === "neutral")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortFergusListing) => (prev) + SortFergusListing, "")
this.SortFergusListing = function (message) {
	message.channel.send("All cards **Fergus** " + Emoji.HFFergus + " can use:\n" + SortFergusListing)
}
  
  
const SortRedElement = Pack.Gold
.filter(event => event.cls === "skill")
.filter(event => event.elmnt === "fire")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortRedElement) => (prev) + SortRedElement, "")
this.SortRedElement = function (message) {
	message.channel.send("Element specific cards **Red** " + Emoji.HFRed + " can use:\n" + SortRedElement)
}
  
const SortRedListing = Pack.Gold
.filter(event => event.cls === "skill")
.filter(event => event.elmnt === "fire" || event.elmnt === "neutral")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortRedListing) => (prev) + SortRedListing, "")
this.SortRedListing = function (message) {
	message.channel.send("All cards **Red** " + Emoji.HFRed + " can use:\n" + SortRedListing)
}
  
const SortTrixElement = Pack.Gold
.filter(event => event.cls === "magic")
.filter(event => event.elmnt === "earth")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortTrixElement) => (prev) + SortTrixElement, "")
this.SortTrixElement = function (message) {
	message.channel.send("Element specific cards **Trix** " + Emoji.HETrix + " can use:\n" + SortTrixElement)
}
  
const SortTrixListing = Pack.Gold
.filter(event => event.cls === "magic")
.filter(event => event.elmnt === "earth" || event.elmnt === "neutral")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortTrixListing) => (prev) + SortTrixListing, "");
  
this.SortTrixListing = function (message) {
	message.channel.send("All cards **Trix** " + Emoji.HETrix + " can use:\n" + SortTrixListing)
}

const SortThruddElement = Pack.Gold
.filter(event => event.cls === "might")
.filter(event => event.elmnt === "earth")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortThruddElement) => (prev) + SortThruddElement, "")
this.SortThruddElement = function (message) {
	message.channel.send("Element specific cards **Thrudd** " + Emoji.HEThrudd + " can use:\n" + SortThruddElement)
}
  
const SortThruddListing = Pack.Gold
.filter(event => event.cls === "might")
.filter(event => event.elmnt === "earth" || event.elmnt === "neutral")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortThrudListing) => (prev) + SortThrudListing, "")
this.SortThruddListing = function (message) {
	message.channel.send("All cards **Thrudd** " + Emoji.HEThrudd + " can use:\n" + SortThruddListing)
}

const SortBreeElement = Pack.Gold
.filter(event => event.cls === "skill")
.filter(event => event.elmnt === "earth")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortBreeElement) => (prev) + SortBreeElement, "")
this.SortBreeElement = function (message) {
	message.channel.send("Element specific cards **Bree** " + Emoji.HEBree + " can use:\n" + SortBreeElement)
}
const SortBreeListing = Pack.Gold
.filter(event => event.cls === "skill")
.filter(event => event.elmnt === "earth" || event.elmnt === "neutral")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortBreeListing) => (prev) + SortBreeListing, "")
this.SortBreeListing = function (message) {
	message.channel.send("All cards **Bree** " + Emoji.HEBree + " can use:\n" + SortBreeListing)
}

const SortBromElement = Pack.Gold
.filter(event => event.cls === "might")
.filter(event => event.elmnt === "air")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortBromElement) => (prev) + SortBromElement, "")
this.SortBromElement = function (message) {
	message.channel.send("Element specific cards **Brom** " + Emoji.HABrom + " can use:\n" + SortBromElement)
}
  
const SortBromListing = Pack.Gold
.filter(event => event.cls === "might")
.filter(event => event.elmnt === "air" || event.elmnt === "neutral")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortBromListing) => (prev) + SortBromListing, "")
this.SortBromListing = function (message) {
	message.channel.send("All cards **Brom** " + Emoji.HABrom + " can use:\n" + SortBromListing)
}

const SortHawkElement = Pack.Gold
.filter(event => event.cls === "skill")
.filter(event => event.elmnt === "air")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortHawkElement) => (prev) + SortHawkElement, "")
this.SortHawkElement = function (message) {
	message.channel.send("Element specific cards **Hawkeye** " + Emoji.HAHawkeye + " can use:\n" + SortHawkElement)
}
  
const SortHawkListing = Pack.Gold
.filter(event => event.cls === "skill")
.filter(event => event.elmnt === "air" || event.elmnt === "neutral")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortHawkListing) => (prev) + SortHawkListing, "")
this.SortHawkListing = function (message) {
	message.channel.send("All cards **Hawkeye** " + Emoji.HAHawkeye + " can use:\n" + SortHawkListing)
}
  
const SortKrellElement = Pack.Gold
.filter(event => event.cls === "magic")
.filter(event => event.elmnt === "spirit")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortKrellElement) => (prev) + SortKrellElement, "")
this.SortKrellElement = function (message) {
	message.channel.send("Element specific cards **Krell** " + Emoji.HSKrell + " can use:\n" + SortKrellElement)
}
  
const SortKrellListing = Pack.Gold
.filter(event => event.cls === "magic")
.filter(event => event.elmnt === "spirit" || event.elmnt === "neutral")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortKrellListing) => (prev) + SortKrellListing, "")
this.SortKrellListing = function (message) {
	message.channel.send("All cards **Krell** " + Emoji.HSKrell + " can use:\n" + SortKrellListing)
}

const SortJinxElement = Pack.Gold
.filter(event => event.cls === "skill")
.filter(event => event.elmnt === "spirit")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortJinxElement) => (prev) + SortJinxElement, "")
this.SortJinxElement = function (message) {
	message.channel.send("Element specific cards **Jinx** " + Emoji.HSJinx + " can use:\n" + SortJinxElement)
}
  
const SortJinxListing = Pack.Gold
.filter(event => event.cls === "skill")
.filter(event => event.elmnt === "spirit" || event.elmnt === "neutral")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortJinxListing) => (prev) + SortJinxListing, "")
this.SortJinxListing = function (message) {
	message.channel.send("All cards **Jinx** " + Emoji.HSJinx + " can use:\n" + SortJinxListing)
}
  
const SortLoganElement = Pack.Gold
.filter(event => event.cls === "magic")
.filter(event => event.elmnt === "water")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortLoganElement) => (prev) + SortLoganElement, "")
this.SortLoganElement = function (message) {
	message.channel.send("Element specific cards **Logan** " + Emoji.HWLogan + " can use:\n" + SortLoganElement)
}
  
const SortLoganListing = Pack.Gold
.filter(event => event.cls === "magic")
.filter(event => event.elmnt === "water" || event.elmnt === "neutral")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortLoganListing) => (prev) + SortLoganListing, "")
this.SortLoganListing = function (message) {
	message.channel.send("All cards **Logan** " + Emoji.HWLogan + " can use:\n" + SortLoganListing)
}
  
const SortGildaElement = Pack.Gold
.filter(event => event.cls === "might")
.filter(event => event.elmnt === "water")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortGildaElement) => (prev) + SortGildaElement, "")
this.SortGildaElement = function (message) {
	message.channel.send("Element specific cards **Gilda** " + Emoji.HWGilda + " can use:\n" + SortGildaElement)
}
  
const SortGildaListing = Pack.Gold
.filter(event => event.cls === "might")
.filter(event => event.elmnt === "water" || event.elmnt === "neutral")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortGildaListing) => (prev) + SortGildaListing, "")
this.SortGildaListing = function (message) {
	message.channel.send("All cards **Gilda** " + Emoji.HWGilda + " can use:\n" + SortGildaListing)
}

const SortPegElement = Pack.Gold
.filter(event => event.cls === "skill")
.filter(event => event.elmnt === "water")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortPegElement) => (prev) + SortPegElement, "")
this.SortPegElement = function (message) {
	message.channel.send("Element specific cards **Peg** " + Emoji.HWPeg + " can use:\n" + SortPegElement)
}
  
const SortPegListing = Pack.Gold
.filter(event => event.cls === "skill")
.filter(event => event.elmnt === "water" || event.elmnt === "neutral")
.map(event => event.rar + " `" + event.card + "` " + event.rarl + "\n")
.reduce((prev, SortPegListing) => (prev) + SortPegListing, "")
this.SortPegListing = function (message) {
	message.channel.send("All cards **Peg** " + Emoji.HWPeg + " can use:\n" + SortPegListing)
}
  
//Gold packs filter
///////////////////////////////////////////////
const SortAirPack = Pack.Gold
.filter(event => event.pak === "Y")
.filter(event => event.elmnt === "air")
.filter(event => event.rar === "3:star:" || event.rar === "4:star:")
.map(event => event.rar + " `" + event.card + "` " + "\n")
.reduce((prev, SortAirPack) => (prev) + SortAirPack, "")
this.SortAirElement = function (message) {
	message.channel.send(Emoji.DefaultMinus + "\n" + 
                       "**Cards available in " + Emoji.CrystalAir + " Air Elemental pack:** " + "\n"  +                       
                       SortAirPack + 
                       "```You can only buy 1 Elemental pack per week.```" +
                       "```bash\nThese cards are available on all other card packs. \n```").catch(console.error);
}
  
const SortEarthPack = Pack.Gold
.filter(event => event.pak === "Y")
.filter(event => event.elmnt === "earth")
.filter(event => event.rar === "3:star:" || event.rar === "4:star:")
.map(event => event.rar + " `" + event.card + "` " + "\n")
.reduce((prev, SortEarthPack) => (prev) + SortEarthPack, "")
this.SortEarthElement = function (message) {
	message.channel.send(Emoji.DefaultMinus + "\n" + 
                       "**Cards available in " + Emoji.CrystalEarth + " Earth Elemental pack:** " + "\n"  +
                       SortEarthPack + 
                       "```You can only buy 1 Elemental pack per week.```" +
                       "```css\n\"These cards are available on all other card packs.\"\n```").catch(console.error);
}
  
const SortFirePack = Pack.Gold
.filter(event => event.pak === "Y")
.filter(event => event.elmnt === "fire")
.filter(event => event.rar === "3:star:" || event.rar === "4:star:")
.map(event => event.rar + " `" + event.card + "` " + "\n")
.reduce((prev, SortFirePack) => (prev) + SortFirePack, "")
this.SortFireElement = function (message) {
	message.channel.send(Emoji.DefaultMinus + "\n" + 
                       "**Cards available in " + Emoji.CrystalFire + " Fire Elemental pack:** " + "\n"  +
                       SortFirePack + 
                       "```You can only buy 1 Elemental pack per week.```" +
                       "```diff\n-These cards are available on all other card packs.\n```").catch(console.error);
}
  
const SortSpiritPack = Pack.Gold
.filter(event => event.pak === "Y")
.filter(event => event.elmnt === "spirit")
.filter(event => event.rar === "3:star:" || event.rar === "4:star:")
.map(event => event.rar + " `" + event.card + "` " + "\n")
.reduce((prev, SortSpiritPack) => (prev) + SortSpiritPack, "")
this.SortSpiritElement = function (message) {
	message.channel.send(Emoji.DefaultMinus + "\n" + 
                       "**Cards available in " + Emoji.CrystalSpirit + " Spirit Elemental pack:** " + "\n"  +
                       SortSpiritPack + 
                       "```You can only buy 1 Elemental pack per week.```" +
                       "```json\n\"These cards are available on all other card packs.\"\n```").catch(console.error);
}
  
const SortWaterPack = Pack.Gold
.filter(event => event.pak === "Y")
.filter(event => event.elmnt === "water")
.filter(event => event.rar === "3:star:" || event.rar === "4:star:")
.map(event => event.rar + " `" + event.card + "` " + "\n")
.reduce((prev, SortWaterPack) => (prev) + SortWaterPack, "")
this.SortWaterElement = function (message) {
	message.channel.send(Emoji.DefaultMinus + "\n" + 
                       "**Cards available in " + Emoji.CrystalWater + " Water Elemental pack:** " + "\n"  + 
                       SortWaterPack + 
                       "```You can only buy 1 Elemental pack per week.```" +
                       "```ini\n[These cards are available on all other card packs.]\n```").catch(console.error);
}
  
const SortNeutralPack = Pack.Gold
.filter(event => event.pak === "Y")
.filter(event => event.elmnt === "neutral")
.filter(event => event.rar === "3:star:" || event.rar === "4:star:")
.map(event => event.rar + " `" + event.card + "` " +  "\n")
.reduce((prev, SortNeutralPack) => (prev) + SortNeutralPack, "")
this.SortNeutralElement = function (message) {
	message.channel.send(Emoji.DefaultMinus + "\n" + 
                       "**Cards available in " + Emoji.CrystalNeutral + " Neutral Elemental pack:** " + "\n"  + 
                       SortNeutralPack + 
                       "```You can only buy 1 Elemental pack per week.```" +
                       "```fix\nThese cards are available on all other card packs.```").catch(console.error);
}
}
let PackReplies = new PackManager();
module.exports = PackReplies;

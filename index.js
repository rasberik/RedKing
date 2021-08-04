
//Essentials for login and connect.
const discord = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const client = new discord.Client();


//const express = require('express');
//const http = require('http');

const prefix = "-";
const efctfix = "-effect";
const diafix = "-diamond";

client.login(process.env.DISCORD_TOKEN).catch(console.error);
//Glitch regular pinging.
//It is banned so be careful
//const alive = express();
//alive.get("/", (_request, response) => {
//  response.sendStatus(200);
//});
//alive.listen(process.env.PORT);
//setInterval(() => {
//  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
//}, 4900);


//Modules for organization.
//let InfoManager = require('./moduleinfo.js');
//let InfoReplies = new InfoManager(client);
//let CardManager = require('./modulecard.js');
//let CardReplies = new CardManager(client);
//let PackManager = require('./modulepack.js');
//let PackReplies = new PackManager(client);
//let EffectManager = require('./moduleeffect.js');
//let EffectReplies = new EffectManager(client);
//let GuildManager = require('./moduleguild.js');
//let GuildReplies = new GuildManager(client);
//let RewardManager = require('./modulereward.js');
//let RewardReplies = new RewardManager(client);
//let WarManager = require('./modulewar.js');
//let WarReplies = new WarManager();

let InfoReplies = require('./moduleinfo.js');
let CardReplies = require('./modulecard.js');
let Request = require('./modulecardrequest.js');

let PackReplies = require('./modulepack.js');
let EffectReplies = require('./moduleeffect.js');
let GuildReplies = require('./moduleguild.js');
let RewardReplies = require('./modulereward.js');
let WarReplies = require('./modulewar.js');

let Emoji = require('./moduleemoji.js');
let Const = require('./moduleconst.js');
let Events = require('./moduleevent.js');

client.on('error', (err) => console.error(err));
client.on('debug', console.log)
//Basics.
client.on("ready", () => {
  client.user.setActivity("your fate", { type: 'WATCHING' });
  console.log("Ready!")  
  //This one is to check what channels are using the bot, just for informative purposes.
  //console.log(client.guilds.map(guild => guild.name + "\n").reduce((prev, guildname) => (prev) + guildname))	
  //This line is to to keep up to date emoji used in server. All of them are uploaded to discord channel by myself *(c) NonPensavo
  //client.guilds.get('714495330481078383').emojis.forEach(emoji => console.log(emoji.animated ? '<a:' + emoji.name + ':' + emoji.id + '>' : '<:' + emoji.name + ':' + emoji.id + '>'));
});
client.on("disconnect", () => {
    console.log(`Mecia disconnected at ${new Date()}`);
});
client.on("reconnecting", () => {
    console.log(`Mecia reconnected at ${new Date()}`);
});
client.on("guildCreate", guild => {
    console.log("Joined a new server: "+ guild.name);
});
client.on("guildMemberAdd", member => {
    console.log("New member joined: "+ member.user.username +" on "+ member.guild.name);
    //if (member.guild.id === "245331373794000897") {
    //        member.guild.channels.get("245331373794000897").send("Ahoy "+ member.user +", and welcome aboard The Black Flag! Tell our Old Salt which galleon ye be sailin’ with and they will git ye proper settled.\n"+
    //        "If ye seek advice on yer cannon fire, fair lady Siren will guide your hand.")
    //} else
	if (member.guild.id === "714495330481078383") {
		member.guild.channels.get("736096001290534952").send("Welcome " + member.user + " aboard Redbird Raiders flagship!")
    } 
	//else      
    //if (member.guild.id === "410094738985713665") {
    //        member.guild.channels.get("410094739489292288").send(`**Hello ${member.user}! Welcome to Ûmbrella Corp __recruting server__ the @Welcome Wagon will be with you shortly to direct you forward to Ûmbrella.**\n`+
    //        "In order for us to properly assign you in one of our guilds please provide us with __some information first__.\n"+
    //        "*Tell us your current **__fame level__** and the **__desired tier__** you're aiming to achieve in GWs and which guild you belong to currently if any?*")
    //} 
	else return;
});
client.on("guildMemberRemove", member => {
    if (member.guild.id === "245331373794000897") {
        console.log("A member left: "+ member.user.username +" from "+ member.guild.name);
        member.guild.channels.get("245331373794000897").send("Fare thee well, "+ member.user.username +", ye scurvy dog. May ye be keel hauled and yer gizzards hung from the yard arm for desertin’ the fleet.");
    } else return;
});
client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;
  if (message.guild === null) return;
  if (message.channel.type === "dm") return;
  let command = message.content.toLowerCase().replace(/ /g, "");
  let request = command.replace(efctfix, "").replace(diafix, "");  
  /*
  var nickname = "_username";
  var uid = "_uid";
  var guild = message.guild.name;
  if (message.author !== null){ nickname = message.author.username;  uid = message.author.id; } 
  
  //Redbird Raiders
  if (message.guild.id === "714495330481078383") {
    if (message.author.id == "714629806750171178"){
      GuildReplies.greetingLeader(message);
    }
    
    if (command === (prefix+"us")) { 
      GuildReplies.redbirdRaiders(message);
      return;
    }
  }*/
  Events.apply(message);
  
  /// Info commands
  if (command === (prefix+"info") || command === (prefix+"help")) {
    InfoReplies.info(message);
  } else 
  if (command === (prefix+"author")) {
    InfoReplies.author(message);
  } else  
  if (command === (prefix+"ping")) {
    InfoReplies.ping(message);
  } else
  if (command === (prefix+"cards") || command === (prefix+"card")) {
    InfoReplies.cards(message)
    CardReplies.cardexample(message);
  } else
  if (command === (prefix+"packs")) {
    InfoReplies.packs(message);
  } else
  if (command === (prefix+"heroes")) {
    InfoReplies.heroes(message);
  } else
  if (command === (prefix+"about")) {
    InfoReplies.author(message);
  } else
  //war commands
  if (command === (prefix+"war")) {
    WarReplies.war(message, 0);
  } else
  if (command.startsWith(prefix+"war")) {
    let remainder = command.slice(4);
    var order = parseInt(remainder);
    if (order === undefined || order === null || isNaN(order)) { order = 0; }
    
    if (remainder.endsWith("reward") || remainder.endsWith("card")) {      
      WarReplies.reward(message, order);
    } else 
    if (remainder.endsWith("brag")) {
      WarReplies.brag(message, order);
    } else
    if (remainder.endsWith("list")) {
      WarReplies.upcoming(message);
    } else {
      WarReplies.war(message, order);
    }
  } else
  ///effect 
  if (command === (prefix+"effects")) { 
    EffectReplies.ListEffects(message); 
  } else 
  ///monthly rewards commands
  if (command === (prefix+"rewards")) { 
    RewardReplies.showAll(message);
  } else

  ///Guild commands
  if (command === (prefix+"redbirds") || command === (prefix+"redbirdraiders")) {
    GuildReplies.redbirdRaiders(message);
  } else 
  
  //All card searches are here
  if (Request.CardReply(command,prefix,message)){ } else
//Heroes filtering options.
/////////////////////////////////////////////////////
if (command.includes (prefix+"elementtrix")) {
    PackReplies.SortTrixElement(message);
} else
if (command.includes (prefix+"listingtrix")) {
    PackReplies.SortTrixListing(message);
} else
if (command.includes (prefix+"trix")) {
    InfoReplies.trix(message);
} else
if (command.includes (prefix+"elementmonty")) {
    PackReplies.SortMontyElement(message);
} else
if (command.includes (prefix+"listingmonty")) {
    PackReplies.SortMontyListing(message);
} else
if (command.includes (prefix+"monty")) {
    InfoReplies.monty(message);
} else
if (command.includes (prefix+"elementkrell")) {
    PackReplies.SortKrellElement(message);
} else
if (command.includes (prefix+"listingkrell")) {
    PackReplies.SortKrellListing(message);
} else
if (command.includes (prefix+"krell")) {
    InfoReplies.krell(message);
} else
if (command.includes (prefix+"elementlogan")) {
    PackReplies.SortLoganElement(message);
} else
if (command.includes (prefix+"listinglogan")) {
    PackReplies.SortLoganListing(message);
} else
if (command.includes (prefix+"logan")) {
    InfoReplies.logan(message);
} else
if (command.includes (prefix+"elementbrom")) {
    PackReplies.SortBromElement(message);
} else
if (command.includes (prefix+"listingbrom")) {
    PackReplies.SortBromListing(message);
} else
if (command.includes (prefix+"brom")) {
    InfoReplies.brom(message);
} else
if (command.includes (prefix+"elementthrud")) {
    PackReplies.SortThruddElement(message);
} else
if (command.includes (prefix+"listingthrud")) {
    PackReplies.SortThruddListing(message);
} else
if (command.includes (prefix+"thrudd")) {
    InfoReplies.thrudd(message);
} else
if (command.includes (prefix+"elementfergus")) {
    PackReplies.SortFergusElement(message);
} else
if (command.includes (prefix+"listingfergus")) {
    PackReplies.SortFergusListing(message);
} else
if (command.includes (prefix+"fergus")) {
    InfoReplies.fergus(message);
} else
if (command.includes (prefix+"elementgilda")) {
    PackReplies.SortGildaElement(message);
} else
if (command.includes (prefix+"listinggilda")) {
    PackReplies.SortGildaListing(message);
} else
if (command.includes (prefix+"gilda")) {
    InfoReplies.gilda(message);
} else
if (command.includes (prefix+"elementhawk")) {
    PackReplies.SortHawkElement(message);
} else
if (command.includes (prefix+"listinghawk")) {
    PackReplies.SortHawkListing(message);
} else
if (command.includes (prefix+"hawk")) {
    InfoReplies.hawkeye(message);
} else
if (command.includes (prefix+"elementbree")) {
    PackReplies.SortBreeElement(message);
} else
if (command.includes (prefix+"listingbree")) {
    PackReplies.SortBreeListing(message);
} else
if (command.includes (prefix+"bree")) {
    InfoReplies.bree(message);
} else
if (command.includes (prefix+"elementred")) {
    PackReplies.SortRedElement(message);
} else
if (command.includes (prefix+"listingred")) {
    PackReplies.SortRedListing(message);
} else
if (command.includes (prefix+"red")) {
    InfoReplies.red(message);
} else
if (command.includes (prefix+"elementjinx")) {
    PackReplies.SortJinxElement(message);
} else
if (command.includes (prefix+"listingjinx")) {
    PackReplies.SortJinxListing(message);
} else
if (command.includes (prefix+"jinx")) {
    InfoReplies.jinx(message);
} else
if (command.includes (prefix+"elementpeg")) {
    PackReplies.SortPegElement(message);
} else
if (command.includes (prefix+"listingpeg")) {
    PackReplies.SortPegListing(message);
} else
if (command.includes (prefix+"peg")) {
    InfoReplies.peg(message);
} else

//Conflicting cards below this line.
/////////////////////////////////////////////////////
if (command.includes (prefix+"wyrm")) {
    message.reply("*Multiple options found...* Specify request:\n-Wyrmslayer\n-Wyrm's Blood");
} else
if (command.includes (prefix+"witch")) {
    message.reply("*Multiple options found...* Specify request:\n-Witchcraft\n-Witch's Brew /-Brew");
} else
if (command.includes (prefix+"wind")) {
    message.reply("*Multiple options found...* Specify request:\n-Wind Barrier\n-Wind Dart\n-Wind Talker /-Talker");
} else
if (command.includes (prefix+"venge")) {
    message.reply("*Multiple options found...* Specify request:\n-Mark of Vengeance/ -MoV\n-Toxic Vengeance/ -Toxic");
} else
if (command.includes (prefix+"vampir")) {
    message.reply("*Multiple options found...* Specify request:\n-Vampiric Bats/ -Vampire Bats/ -Bats\n-Vampiric Lord/ -Vampire Lord/ -Lord");
} else
if (command.includes (prefix+"toxic")) {
    message.reply("*Multiple options found...* Specify request:\n-Toxic Bolt\n-Toxic Vengeance");
} else
if (command.includes (prefix+"turkey")) {
    message.reply("*Multiple options found...* Specify request:\n-Turkey Arrow\n-Turkey Sagitta/ -Sagitta");
} else
if (command.includes (prefix+"terra")) {
    message.reply("*Multiple options found...* Specify request:\n-Terra Missile\n-Terra Sword\n-Terra Tip");
} else
if (command.includes (prefix+"karmic")) {
    message.reply("*Multiple options found...* Specify request:\n-Karmic Blessing\n-Karmic Protection\n-Karmick Kick");
} else
if (command.includes (prefix+"mead")) {
    message.reply("*Multiple options found...* Specify request:\n-Mead Gulp/ -Gulp\n-Mead Sip/ -Sip");
} else
if (command.includes (prefix+"missile")) {
    message.reply("*Multiple options found...* Specify request:\n-Arcane Missile\n-Burning Missile\n-Chill Missile\n-Darken Missile\n-Terra Missile\n-Wet Missile");
} else
if (command.includes (prefix+"lightning")) {
    message.reply("*Multiple options found...* Specify request:\n-Lightning Strike\n-Lightning Spear");
} else
if (command.includes (prefix+"salamander")) {
   message.reply("*Multiple options found...* Specify request:\n-Salamander Ale\n-Salamander Skin");
} else
if (command.includes (prefix+"splash")) {
    message.reply("*Multiple options found...* Specify request:\n-Acid Splash/ -Acid\n-Healing Splash/ -Heal Splash");
} else
if (command.includes (prefix+"shower")) {
    message.reply("*Multiple options found...* Specify request:\n-Rum Shower/ -Rum\n-Clay Shower/ -Clay\n-Holy Shower/ -Holy");
} else
if (command.includes (prefix+"stab")) {
    message.reply("*Multiple options found...* Specify request:\n-Backstab\n-Perfect Stab");
} else
if (command.includes (prefix+"shard")) {
    message.reply("*Multiple options found...* Specify request:\n-Chilling Shards\n-Silverlake Shards\n-Ice Shard\n-Piercing Shard");
} else
if (command.includes (prefix+"spike")) {
    message.reply("*Multiple options found...* Specify request:\n-Darkness Spike\n-Diverting Spike\n-Spike Barrage\n-Spiked Trap/ -Spiked");
} else
if (command.includes (prefix+"strike")) {
    message.reply("*Multiple options found...* Specify request:\n-Defensive Strike/ -Defensive\n-Lightning Strike\n-Mistral Strike/ -Mistral\n-Pyroclastic Strike");
} else
if (command.includes (prefix+"pin")) {
    message.reply("*Multiple options found...* Specify request:\n-Diverting Pin\n-Pin Barrage\n-Shocking Pin");
} else
if (command.includes (prefix+"tip")) {
    message.reply("*Multiple options found...* Specify request:\n-Diverting Tip\n-Poisonous Tip/ -Poison Tip\n-Terra Tip\n-Tip Barrage");
} else
if (command.includes (prefix+"slayer")) {
    message.reply("*Multiple options found...* Specify request:\n-Dragonslayer\n-Wyrmslayer/ -Wyrm");
} else
if (command.includes (prefix+"shield")) {
    message.reply("*Multiple options found...* Specify request:\n-Byson Shield/ -Byson\n-Charged Shield/ -Charged\n-Drop Shield/ -Drop\n-Fairy Shield\n-Frostbite Shield/ -Frost\n-Impale Shield/ -Impale\n-Magnet Shield/ -Magnet\n-Mammoth Shield/ -Mammoth\n-Power Shield/ -Power\n-Shield of The Nature/ -Nature Shield/ -SotN\n-Shielding Light/ -Shielding\n-Valkyries(\'s) Shield/ -Valkyries(\'s)");
} else
if (command.includes (prefix+"heal")) {
    message.reply("*Multiple options found...* Specify request:\n-Healing Light/ Heal Light\n-Healing Oils/ -Heal Oils\n-Healing Soul/ -Soul\n-Healing Splash/ -Heal Splash");
} else
if (command.includes (prefix+"heart")) {
    message.reply("*Multiple options found...* Specify request:\n-Bleeding Heart\n-Heart Breaker/ -Heart\n-Pierced Heart/ -Pierced");
} else
if (command.includes (prefix+"hot")) {
    message.reply("*Multiple options found...* Specify request:\n-Hot Boulder\n-Hot Chestnuts/ -Hot Chest/ -Chestnuts/ -Chest/ -Nuts");
} else
if (command.includes (prefix+"fairy")) {
    message.reply("*Multiple options found...* Specify request:\n-Fairy Blessing/ -Blessing\n-Fairy Shield");
} else
if (command.includes (prefix+"feed")) {
    message.reply("*Multiple options found...* Specify request:\n-Feed the Flames/ -FtF\n-Feed the Toxins/ -FtT");
} else
if (command.includes (prefix+"fiery")) {
    message.reply("*Multiple options found...* Specify request:\n-Fiery Axe\n-Fiery Stars/ -Stars");
} else
if (command.includes (prefix+"interrupt")) {
    message.reply("*Multiple options found...* Specify request:\n-Interrupt Arrow\n-Interrupt Sword");
} else
if (command.includes (prefix+"sword")) {
    message.reply("*Multiple options found...* Specify request:\n-Interrupt Sword\n-Shocking Sword/ -Shock Sword\n-Silverlake Sword/ -Silver Sword\n-Sword of Justice/ -Justice/ -SoJ\n-Terra Sword\n-Sword of Light");
} else

if (command.includes (prefix+"pierce")||(command.includes (prefix+"piercing"))) {
    message.reply("*Multiple options found...* Specify request:\n-Ivywood Piercer\n-Sky Piercer/ -Sky\n-Pierced Heart/-Pierced\n-Piercing Hellfire/ -Hellfire \n-Piercing Shard\n-Piercing Spear");
} else
if (command.includes (prefix+"pyro")) {
    message.reply("*Multiple options found...* Specify request:\n-Pyroclastic Strike\n-Pyroclastic Sphere\n-Pyro Dagger");
} else
if (command.includes (prefix+"poisonous")) {
    message.reply("*Multiple options found...* Specify request:\n-Poisonous Tip\n-Poisonous Dung\n-Poisonous Dart\n-Poisonous Currents");
} else
if (command.includes (prefix+"perfect")) {
    message.reply("*Multiple options found...* Specify request:\n-Perfect Slash\n-Perfect Cut\n-Perfect Stab\n-Perfect Dart\n-Perfect Sight");
} else
if (command.includes (prefix+"oil")) {
    message.reply("*Multiple options found...* Specify request:\n-Healing Oils/ -Heal Oils\n-Oil Bag\n-Oil Dart\n-Oil Spill/ -Spill");
} else
if (command.includes (prefix+"sleep")) {
    message.reply("*Multiple options found...* Specify request:\n-Sleeping Dust/ Dust\n-Sleeping Sceptre/ -Sceptre");
} else
if (command.includes (prefix+"storm")) {
    message.reply("*Multiple options found...* Specify request:\n-Firestorm\n-Storm Dagger\n-Storm Dart\n-Storm Edge\n-Storms End/ -Storms");
} else
if (command.includes (prefix+"stunning")) {
    message.reply("*Multiple options found...* Specify request:\n-Stunning Boulder\n-Stunning Earth\n-Stunning Heat\n-Stunning Staff");
} else
if (command.includes (prefix+"shockin")) {
    message.reply("*Multiple options found...* Specify request:\n-Shocking Dart/ -Shock Dart\n-Shocking Pin/ Shock Pin\n-Shocking Sword/ -Shock Sword\n-Shocking Bag/ -Shock Bag");
} else
if (command.includes (prefix+"silver")) {
    message.reply("*Multiple options found...* Specify request:\n-Silver Dart\n-Silverlake Sword/ -Silver Sword\n-Silverlake Shards/ -Silver Shards\n-Quicksilver/ -Quick");
} else
if (command.includes (prefix+"ray")) {
    message.reply("*Multiple options found...* Specify request:\n-Frost Ray\n-Green Ray\n-Blazing Ray\n-Discharging Ray");
} else
if (command.includes (prefix+"ivywood")) {
    message.reply("*Multiple options found...* Specify request:\n-Ivywood Amulet\n-Ivywood Piercer");
} else
if (command.includes (prefix+"ice")) {
    message.reply("*Multiple options found...* Specify request:\n-Ice Bolt\n-Ice Shard\n-Ice Queen Protector / Ice Queen / Protector");
} else
if (command.includes (prefix+"grenade")) {
    message.reply("*Multiple options found...* Specify request:\n-Arcane Grenade\n-Burning Grenade\n-Chill Grenade\n-Confuse Grenade\n-Poison Grenade\n-Ninja Grenade/ -Ninja");
} else
if (command.includes (prefix+"flame")) {
    message.reply("*Multiple options found...* Specify request:\n-Blinding Flame\n-Cloak of Flames/ -CoF\n-Feed the Flames/ -FtF\n-Flame On\n-Scorching Flames/ -Scorching");
} else
if (command.includes (prefix+"frost")) {
    message.reply("*Multiple options found...* Specify request:\n-Frost Ray\n-Frostbite Shield");
} else
if (command.includes (prefix+"earth")) {
    message.reply("*Multiple options found...* Specify request:\n-Earth Quake\n-Stunning Earth");
} else
if (command.includes (prefix+"explosiv")) {
    message.reply("*Multiple options found...* Specify request:\n-Explosive Bag\n-Explosive Gadget/ -Gadget");
} else
if (command.includes (prefix+"dagger")) {
    message.reply("*Multiple options found...* Specify request:\n-Bleeding Dagger\n-Burning Dagger\n-Storm Dagger\n-Pyro Dagger\n-Wet Dagger");
} else
if (command.includes (prefix+"disc")) {
    message.reply("*Multiple options found...* Specify request:\n-Burning Disc\n-Diverting Disc");
} else
if (command.includes (prefix+"dragon")) {
    message.reply("*Multiple options found...* Specify request:\n-Dragonslayer\n-Dragon Skin");
} else
if (command.includes (prefix+"dart")) {
    message.reply("*Multiple options found...* Specify request:\n-Confuse Dart\n-Diverting Dart\n-Oil Dart\n-Poisonous Dart/ -Poison Dart\n-Shocking Dart/ Shock Dart\n-Silver Dart\n-Stingray Dart/ -Stingray\n-Storm Dart\n-Perfect Dart\n-Wind Dart\n-Slow Dart");
} else
if (command.includes (prefix+"divert")) {
    message.reply("*Multiple options found...* Specify request:\n-Diverting Arrow\n-Diverting Dart\n-Diverting Disc\n-Diverting Pin\n-Diverting Spike\n-Diverting Tip");
} else
if (command.includes (prefix+"divine")) {
    message.reply("*Multiple options found...* Specify request:\n-Divine Storm\n-Divine Thunder");
} else
if (command.includes (prefix+"crippling")) {
    message.reply("*Multiple options found...* Specify request:\n-Crippling Bolt/ -Cripp Bolt\n-Crippling Spell/ -Cripp Spell");
} else
if (command.includes (prefix+"corn")) {
    message.reply("*Multiple options found...* Specify request:\n-Cornholio\n-Uber Cornholio/ -Uber\n-Sweet Corn");
} else
if (command.includes (prefix+"confuse")) {
    message.reply("*Multiple options found...* Specify request:\n-Confuse Cloud\n-Confuse Dart\n-Confuse Grenade");
} else
if (command.includes (prefix+"club")) {
    message.reply("*Multiple options found...* Specify request:\n-Burning Club\n-Chill Club");
} else
if (command.includes (prefix+"cloak")) {
    message.reply("*Multiple options found...* Specify request:\n-Cloak of Flames/ -CoF\n-Cloak Party\n-Cloaked\n-Phoenix Cloak / -Phoenix");
} else
if (command.includes (prefix+"cloud")) {
    message.reply("*Multiple options found...* Specify request:\n-Confuse Cloud\n-Poison Cloud");
} else
if (command.includes (prefix+"chill")) {
    message.reply("*Multiple options found...* Specify request:\n-Chill Axe\n-Chill Blade\n-Chill Club\n-Chill Grenade\n-Chill Missile\n-Chill Stones\n-Chilling Jab/ -Jab\n-Chilling Shards");
} else
if (command.includes (prefix+"burning")) {
    message.reply("*Multiple options found...* Specify request:\n-Burning Blade\n-Burning Blast\n-Burning Club\n-Burning Dagger\n-Burning Disc\n-Burning Grenade\n-Burning Missile");
} else
if (command.includes (prefix+"boulder")) {
    message.reply("*Multiple options found...* Specify request:\n-Hot Boulder\n-Stunning Boulder");
} else
if (command.includes (prefix+"bomb")) {
    message.reply("*Multiple options found...* Specify request:\n-Dirty Bomb\n-Smoke Bomb");
} else
if (command.includes (prefix+"bolt")) {
    message.reply("*Multiple options found...* Specify request:\n-Combustibolt\n-Crippling Bolt\n-Fire Bolt\n-Ice Bolt\n-Toxic Bolt");
} else
if (command.includes (prefix+"blood")) {
    message.reply("*Multiple options found...* Specify request:\n-Wyrm\'s Blood\n-Bloodthirster/ -Thirster");
} else
if (command.includes (prefix+"blinding")) {
    message.reply("*Multiple options found...* Specify request:\n-Blinding Flame\n-Blinding Spirit");
} else
if (command.includes (prefix+"bleeding")) {
    message.reply("*Multiple options found...* Specify request:\n-Bleeding Dagger\n-Bleeding Edge\n-Bleeding Heart\n-Bleeding Thorn");
} else
if (command.includes (prefix+"blade")) {
    message.reply("*Multiple options found...* Specify request:\n-Burning Blade\n-Chill Blade\n-Whispering Blade/ -Whisper");
} else
if (command.includes (prefix+"barrier")) {
    message.reply("*Multiple options found...* Specify request:\n-Barrier Crusher/ -Crusher\n-Forest Barrier/ -Forest\n-Hurricane Barrier/ -Hurricane\n-Wind Barrier/ -Wind");
} else
if (command.includes (prefix+"barrage")) {
    message.reply("*Multiple options found...* Specify request:\n-Pin Barrage\n-Spike Barrage\n-Tip Barrage");
} else
if (command.includes (prefix+"bag")) {
    message.reply("*Multiple options found...* Specify request:\n-Explosive Bag\n-Oil Bag\n-Shocking Bag/ -Shock Bag\n-Wet Bag");
} else
if (command.includes (prefix+"arrow")) {
    message.reply("*Multiple options found...* Specify request:\n-Apollo's Arrow/ -Apollo\n-Destructive Arrow/ Destructive\n-Diverting Arrow\n-Hasty Arrow/ -Hasty\n-Interrupt Arrow\n-Rooster Arrow/ -Rooster\n-Turkey Arrow\n-Root Arrow/ -Root");
} else
if (command.includes (prefix+"arcane")) {
    message.reply("*Multiple options found...* Specify request:\n-Arcane Grenade\n-Arcane Missile");
} else
if (command.includes (prefix+"amulet")) {
    message.reply("*Multiple options found...* Specify request:\n-Defrost Amulet/ -Defrost\n-Faraday Amulet/ -Faraday\n-Ivywood Amulet\n-Tempest Amulet/ -Tempest");
} else
if (command.includes (prefix+"axe")) {
    message.reply("*Multiple options found...* Specify request:\n-Chill Axe\n-Fiery Axe\n-Shocking Axe/ Shock Axe\n-War Axe");
} else

//Card packs and effect filtering options.
///////////////////////////////////////////////////////////
if (command.includes (prefix+"packair")) {
    PackReplies.SortAirElement(message);
} else
if (command.includes (prefix+"packearth")) {
    PackReplies.SortEarthElement(message);
} else
if (command.includes (prefix+"packfire")) {
    PackReplies.SortFireElement(message);
} else
if (command.includes (prefix+"packspirit")) {
    PackReplies.SortSpiritElement(message);
} else
if (command.includes (prefix+"packwater")) {
  PackReplies.SortWaterElement(message);
} else
if (command.includes (prefix+"packneutral")) {
  PackReplies.SortNeutralElement(message);
} else
if (command === (prefix+"packdiamond")) {
  PackReplies.PackDiamond(message); 
} else
if (command === (prefix+"packgold")) {
  PackReplies.PackGold(message);  
} else
if (command === (prefix+"packsilver")) {
  PackReplies.PackSilver(message);
} else
if (command === (prefix+"packbronze")) {
  PackReplies.PackBronze(message);    
} else  
if (request.length >= (1)) {
    if (command.includes(efctfix)) {
        if (request === ("afterburn")) {
          EffectReplies.effectafterburn(message);
        } else
        if (request === ("bleedout")) {
          EffectReplies.effectbleedout(message);
        } else
        if (request === ("defrost")) {
          EffectReplies.effectdefrost(message);
        } else
        if (request === ("douse")) {
          EffectReplies.effectdouse(message);
        } else
        if (request === ("electrocute")) {
          EffectReplies.effectelectrocute(message);
        } else
        if (request === ("accuracydown")) {
          EffectReplies.effectaccuracydown(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("accuracyup")) {
          EffectReplies.effectaccuracyup(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("attackdown")) {
          EffectReplies.effectattackdown(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("attackup")) {
          EffectReplies.effectattackup(message); 
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("defencedown")) {
          EffectReplies.effectdefencedown(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("defenceup")) {
          EffectReplies.effectdefenceup(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("hpdown")) {
          EffectReplies.effecthealthdown(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("hpup")) {
          EffectReplies.effecthealthup(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("luckdown")) {
          EffectReplies.effectluckdown(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("luckup")) {
          EffectReplies.effectluckup(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("chargetrait")) {
          EffectReplies.effecttraitcharge(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("draintrait")) {
          EffectReplies.effecttraitdrain(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("haste") || (request === ("speedup"))) {
          EffectReplies.effecthaste(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("chill")) {
          EffectReplies.effectchill(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("slow")) {
          EffectReplies.effectslow(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("preventhaste")) {
          EffectReplies.effectpreventhaste(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("awaken")) {
          EffectReplies.effectawaken(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("bamboozle")) {
          EffectReplies.effectbamboozle(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("confuse")) {
          EffectReplies.effectconfuse(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("sleep")) {
          EffectReplies.effectsleep(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("stun")) {
          EffectReplies.effectstun(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("break")) {
          EffectReplies.effectbreak(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("charm")) {
          EffectReplies.effectcharm(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("taunt")) {
          EffectReplies.effecttaunt(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("counter")) {
          EffectReplies.effectcounter(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("critical")) {
            EffectReplies.effectcritical(message);// + message.channel.send("Cards with requested effect are:\n" + FilterEffect);
        } else
        if (request === ("crush")) {
          EffectReplies.effectcrush(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("cure")) {
          EffectReplies.effectcure(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("mark")) {
          EffectReplies.effectmark(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("evade")) {
          EffectReplies.effectevade(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("flurry")) {
          EffectReplies.effectflurry(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("immunity")) {
          EffectReplies.effectimmunity(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("interrupt")) {
          EffectReplies.effectinterrupt(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("leech")) {
          EffectReplies.effectleech(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("multitarget")) {
          EffectReplies.effectmultitarget(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("pierce")) {
          EffectReplies.effectpierce(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("random")) {
          EffectReplies.effectrandom(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("recoil")) {
          EffectReplies.effectrecoil(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("regen")) {
          EffectReplies.effectregen(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("reset")) {
          EffectReplies.effectreset(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("sap")) {            
          EffectReplies.effectsap(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("splash")) {
          EffectReplies.effectsplash(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("warp")||(request === ("warped"))) {
          EffectReplies.effectwarp(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("unaware")||(request === ("surprise"))) {
          EffectReplies.effectunaware(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("perfectshot")) {
          EffectReplies.effectperfectshot(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("shieldbind")) {
          EffectReplies.effectshieldbind(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("burn")) {
          EffectReplies.effectburn(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("poison")) {
          EffectReplies.effectpoison(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("shock")) {
          EffectReplies.effectshock(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("bleed")) {
          EffectReplies.effectbleed(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("drown")) {
          EffectReplies.effectdrown(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("extendburn")) {
          EffectReplies.effectextendburn(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("extendpoison")) {
          EffectReplies.effectextendpoison(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("extendshock")) {
          EffectReplies.effectextendshock(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("extendbleed")) {
          EffectReplies.effectextendbleed(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("weakfire")) {
          EffectReplies.effectweakfire(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("weakearth")) {
          EffectReplies.effectweakearth(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("weakair")) {
          EffectReplies.effectweakair(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("weakspirit")) {
          EffectReplies.effectweakspirit(message);
          PackReplies.DiamondEffectCards(message, request);
        } else
        if (request === ("weakwater")) {
          EffectReplies.effectweakwater(message);
          PackReplies.DiamondEffectCards(message, request);
        }
    } else
    if (command.includes(diafix)) {
      PackReplies.DiamondElement(message, request);      
    } 
}
});
client.on('warn', e => { console.log(e); });
client.on('error', e => { console.log(e); });

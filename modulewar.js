let Emoji = require('./moduleemoji.js');
let Pack = require('./modulepackdb.js');
let Request = require('./modulecardrequest.js');
let Const = require('./moduleconst.js');

let WarManager = function(){
  const zeroTimestamp = 1609459200000;
  const weekDuration = 604800000;
  const warDuration = 259200000;
  
  const Conditions = {
    1: "Win in less than **10 turns**",
    2: "Win in less than **20 turns**",
    
    3: "Win by defeating at least one hero with **Burn**",
    4: "Win by defeating at least one hero with **Shock**",
    5: "Win by defeating at least one hero with **Bleed**",
    6: "Win by defeating at least one hero with **Poison**",
    
    7: "Win dealing only **Air** elemental damage",
    8: "Win dealing only **Earth** elemental damage",
    9: "Win dealing only **Fire** elemental damage",
    10: "Win dealing only **Spirit** elemental damage",
    11: "Win dealing only **Water** elemental damage",
    
    12: "Win using only **Magic** heroes",
    13: "Win using only **Might** heroes",
    14: "Win using only **Skill** heroes",
    
    15: "Win using only **Single Target** attacks",
    16: "Win using only **Multi-Target** or **Splash** attacks",
    
    17: "Win without using **Heal Cards**",
    18: "Win without using **Shield Cards**",
    
    
    19: "Win with your heroes' **Health Above 80%**",
    20: "Win with **No Duplicates** in your deck",
    21: "Win by picking both heroes **Elementally Weak** to the opponents"
  };
  
  const Elements = {
    "fire": "Fire " + Emoji.ElementFire,
    "earth": "Earth "+ Emoji.ElementEarth,
    "air": "Air "+ Emoji.ElementAir,
    "spirit": "Spirit "+ Emoji.ElementSpirit,
    "water": "Water "+ Emoji.ElementWater
  };  
  
  const Schedule = [
    {order: 0, condition: 1, card: "Dragon Skin", reward: "Guiding Star" },
    {order: 1, condition: 20, card: "Obscuring Explode", reward: "Safeguard" },    
    {order: 2, condition: 15, card: "Turkey Sagitta", reward: "Song of Nature" },
    {order: 3, condition: 19, card: "Puck's Grace", reward: "Charged Shield" },
    {order: 4, condition: 4, card: "Divine Storm", reward: "Hoist the Colours" },
    {order: 5, condition: 1, card: "Ice Queen Protector", reward: "Dragonslayer" },    
    {order: 6, condition: 20, card: "Pierced Heart", reward: "Backstab" },    
    {order: 7, condition: 21, card: "Poseidon's Will", reward: "Deep Breath" },    
    {order: 8, condition: 10, card: "Retribution Curse", reward: "Fairy Shield" },
    {order: 9, condition: 17, card: "Clay Shower", reward: "Snake Charmer" },
    {order: 10, condition: 1, card: "Fire Bolt", reward: "Sword of Light" },
    {order: 11, condition: 19, card: "Wind Barrier", reward: "The Kraken" },
    {order: 12, condition: 21, card: "Ancient Mariner", reward: "Flame On" },
    {order: 13, condition: 9, card: "Fuel the Fire", reward: "Shadow Steps" },
    {order: 14, condition: 12, card: "Crippling Bolt", reward: "Silverlake Sword" },
    {order: 15, condition: 12, card: "Vampiric Lord", reward: "Acid Splash" },
    {order: 16, condition: 17, card: "Uber Cornholio", reward: "Nightmare" },
    {order: 17, condition: 8, card: "Elven Precision", reward: "Firestorm" },
    {order: 18, condition: 15, card: "Ice Bolt", reward: "Healing Light" },
    {order: 19, condition: 3, card: "Scorching Flames", reward: "Vine Wrap" },
    {order: 20, condition: 14, card: "Shield of The Nature", reward: "Quivering Sole" },
    {order: 21, condition: 2, card: "Monster Juice", reward: "Piercing Hellfire" },
    {order: 22, condition: 16, card: "Ninja Grenade", reward: "Sweet Corn" },
    {order: 23, condition: 20, card: "Pyro Dagger", reward: "Hammer of God" },
    {order: 24, condition: 1, card: "Dagger of Truth", reward: "Megalodon Tooth" },
    {order: 25, condition: 13, card: "Fafnir's Blood", reward: "Blazefury" },
    {order: 26, condition: 3, card: "Pyroclastic Strike", reward: "Out of Sight" },
    {order: 27, condition: 19, card: "Toxic Bolt", reward: "Kelpies Call" },
    {order: 28, condition: 21, card: "Hex", reward: "Root Arrow" },
    {order: 29, condition: 7, card: "Wind Dart", reward: "Moonbeam" },
    {order: 30, condition: 15, card: "Witchcraft", reward: "Healing Oils" },
    {order: 31, condition: 12, card: "Ascetic Lesson", reward: "Slow Dart" },
    {order: 32, condition: 17, card: "Blazing Ray", reward: "Witch's Brew" },
    {order: 33, condition: 8, card: "Cornholio", reward: "Channeling Chi" },
    {order: 34, condition: 1, card: "Salamander Skin", reward: "Rain Of Fire" },
    {order: 35, condition: 14, card: "Whispering Blade", reward: "The Spice" },
    {order: 36, condition: 3, card: "Great Ball Of Fire", reward: "Holy Shower" },
    {order: 37, condition: 1, card: "Vigilant Shield", reward: "Sharp Tongue" },
    {order: 38, condition: 15, card: "Mark of Vengeance", reward: "Bearded Hatchet" },
    {order: 39, condition: 20, card: "Perfect Cut", reward: "Hard Luck" },
    {order: 40, condition: 2, card: "Necropower", reward: "Wet Kiss" },
    {order: 41, condition: 17, card: "Dragon Skin", reward: "Peace Pipe" },
    {order: 42, condition: 18, card: "Triton's Will", reward: "Spent Force" },
    {order: 43, condition: 8, card: "Perfect Sight", reward: "Hot Chestnuts" },
    {order: 44, condition: 1, card: "Mead Gulp", reward: "Wind Talker" },
    {order: 45, condition: 21, card: "Cloak of Flames", reward: "Poisonous Currents" },
    {order: 46, condition: 15, card: "Green Ray", reward: "Monk-Fu" },
    {order: 47, condition: 9, card: "Salamander Ale", reward: "Quad Slash" },
    {order: 48, condition: 19, card: "Explosive Gadget", reward: "Voodoo Ritual" },
    {order: 49, condition: 8, card: "Christmas Tree", reward: "Charged Shield" },
    {order: 50, condition: 15, card: "Justicar", reward: "Annoying Elves" },
    {order: 51, condition: 12, card: "Frost Ray", reward: "Blazefury" }
  ]
  
  const ReverseRarity = {
    "5:star:": 5,
    "4:star:": 4,
    "3:star:": 3,
    "2:star:": 2,
    "1:star:": 1
  }
  
  function getBragInfo(cardname){    
    var rar = "";
    var cls = "";
    var elm = "";
    //{cls:"skill", rar:"4:star:", rarl:":star2:", trn:"2", pak:"Y", brag:"N", card:"Bullseye", elmnt:"air"},
    var card = Pack.Gold.find(card => card.card.toLowerCase() == cardname.toLowerCase());
    if (card != null && card != undefined){      
      var rarityInt = ReverseRarity[card.rar];
      rar = Emoji.RarityMap[rarityInt];
      cls = Emoji.ClassMap[card.elmnt][card.cls];
      elm = card.elmnt;
    }
    return { element: elm, rarityemoji: rar, classemoji: cls }
  }
  
  function getRewardInfo(cardname){
    var cls = "";
    //{cls:"skill", rar:"4:star:", rarl:":star2:", trn:"2", pak:"Y", brag:"N", card:"Bullseye", elmnt:"air"},
    var card = Pack.Gold.find(card => card.card.toLowerCase() == cardname.toLowerCase());
    if (card != null && card != undefined){
      cls = Emoji.ClassMap[card.elmnt][card.cls];
    }
    return { classemoji: cls }
  }
    
  function secondsToTime(seconds) {
    var remainder = seconds;
    const d = Math.floor(remainder / (3600 * 24));
    remainder -= d * 3600 * 24;
    const h = Math.floor(remainder / 3600);
    remainder -= h * 3600;
    const m = Math.floor(remainder / 60);
    remainder -= m * 60;
    remainder = Math.floor(remainder);
    const tmp = [];
    (d) && tmp.push(d + 'd');
    (d || h) && tmp.push(h + 'h');
    (d || h || m) && tmp.push(m + 'm');
    //tmp.push(remainder + 's');
    return tmp.join(' ');
  }
  
  function formatDate(date) {
    var d = date.getUTCDate();
    var m = date.getUTCMonth() + 1; //Month from 0 to 11
    var y = date.getUTCFullYear();
    return '' + y + '.' + (m <= 9 ? '0' + m : m) + '.' + (d <= 9 ? '0' + d : d);
  }
  
  this.upcoming = function (message, order = 0) {
    //Single embed field can hold up to 1024 characters, where most of it taken by Emoji. Dont exceed limit. 
    //16 shows 915/740 and 10: 569/465 characters (for that moments order)
    var totalShow = 16;
    
    var warCount = Schedule.length;
    var diff = message.createdTimestamp - zeroTimestamp;
    var weeksPassed = Math.floor((diff+weekDuration-warDuration) / weekDuration);    
    var startOrder = ((weeksPassed % warCount) + warCount + (totalShow * order)) % warCount;
    
    var upcomingWars = Schedule.filter(war => ((war.order - startOrder) + warCount) % warCount < totalShow)
    
    var newline = "\n";
    
    var firstHalf = upcomingWars.map(war => "`" + ((war.order - startOrder) + warCount) % warCount + (totalShow * order) + ".` " + getRewardInfo(war.reward).classemoji + "**`" + war.reward + "`** " + newline).reduce((prev, warInfo) => (prev) + warInfo)    
    var secondHalf = upcomingWars.map(war => getRewardInfo(war.card).classemoji + "`" + war.card  + "`" + newline).reduce((prev, bragInfo) => (prev) + bragInfo)
    //console.log(firstHalf.length)
    //console.log(secondHalf.length)
    
    message.channel.send(
       {
         "embed":  
         {
           "title": "**Upcoming Wars**",
           "color": Const.ColorEmbed,
           //"description": "Rewards for monthly activity, to see specific months card details, use `-reward 1` where 1 is month of your choice",
           "description": "Upcoming War list from current moment, where 0 is this weeks war. \nFor detailed information, use `-war N (reward|brag)`, where N is its order.",
           //"thumbnail": {"url": "https://i.postimg.cc/tCR8QJg7/Attack-Up.png"},"image": {"url": ""},
           "fields": [  
             {"name" : "Order & "+ Emoji.CardBattle + " Reward card" , "value": firstHalf, inline: true },
             {"name" : Emoji.CardBrag + " Brag card", "value": secondHalf, inline: true }
           ]
         }
       }); 
  }
 
  this.war = function (message, order){
    var warCount = Schedule.length;
    var diff = message.createdTimestamp - zeroTimestamp;
    var weeksPassed = Math.floor((diff+weekDuration-warDuration) / weekDuration) + order;
    var startTimestamp = weeksPassed * weekDuration + zeroTimestamp;
    var startDate = new Date(startTimestamp);    
    var daysLeft = Math.abs(startTimestamp - message.createdTimestamp);    
    var isStarted = message.createdTimestamp > startTimestamp ;
    var isEnded = startTimestamp + warDuration < message.createdTimestamp;
    var remains = isStarted ? (isEnded ? daysLeft - warDuration : warDuration - daysLeft) : daysLeft;
    var remainderString = "**" + (isStarted ? (isEnded ? "Ended" : "Ends") : "Starts") + " in:** " + secondsToTime(remains/1000);
    var warOrder = ((weeksPassed % warCount) + warCount) % warCount;
    var warItem =  Schedule.find(war => war.order == warOrder);
    if (warItem == null || warItem == undefined) return;
    var bragInfo = getBragInfo(warItem.card);
    var rewardInfo = getRewardInfo(warItem.reward);
    var title = (isStarted ? (isEnded ? "Previous" : "Current") : "Upcoming") + " War";
    var description = "";
    //var embedName = "Legendary: " + warItem.reward;
    var embedName = Conditions[warItem.condition];
    var embedValue = 
       // "**War Order:** " + (warItem.order+1) + "\n" + 
        "**Date:** " + formatDate(startDate) + "\n" + 
        remainderString  + "\n" + 
        "**Battleground effect:** 10% " + Elements[bragInfo.element] + "\n" + 
       //"**Brag condition:** " + Conditions[warItem.condition] + "\n" + 
        "**Brag card:** " + bragInfo.rarityemoji + " " + warItem.card + " " + bragInfo.classemoji + "\n" + 
        "**Legendary reward:** " + warItem.reward + " " + rewardInfo.classemoji;
    
    message.channel.send({
      embed: {
        title: title,
        //description: description,
        color: Const.ColorEmbed,
        fields: [
          { 
            name: embedName, 
            value: embedValue,
          }
        ]
      }
    });
  }  
  
  this.reward = function (message, order){    
    var warCount = Schedule.length;
    var diff = message.createdTimestamp - zeroTimestamp;
    var weeksPassed = Math.floor((diff+weekDuration-warDuration) / weekDuration) + order;
    var warOrder = ((weeksPassed % warCount) + warCount) % warCount;
    var warItem =  Schedule.find(war => war.order == warOrder);    
    if (warItem == null || warItem == undefined) return;    
    var prefix = "-";
    var command = prefix + warItem.reward.toLowerCase().replace(/ /g, "")
    Request.CardReply(command, prefix, message);    
  }  
  
  this.brag = function (message, order){
    var warCount = Schedule.length;
    var diff = message.createdTimestamp - zeroTimestamp;
    var weeksPassed = Math.floor((diff+weekDuration-warDuration) / weekDuration) + order;        
    var warOrder = ((weeksPassed % warCount) + warCount) % warCount;
    var warItem =  Schedule.find(war => war.order == warOrder);    
    if (warItem == null || warItem == undefined) return;
    var prefix = "-";
    var command = prefix + warItem.card.toLowerCase().replace(/ /g, "")
    Request.CardReply(command, prefix, message);  
  }
}
let WarReplies = new WarManager();
module.exports = WarReplies;

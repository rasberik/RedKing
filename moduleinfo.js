let botVersion = "3.7.1";
let botStartTime = new Date();

let Emoji = require('./moduleemoji.js');

let InfoManager = function (){
  this.embedColorCode = 15944039;
  this.colorEarth = 1948928;
  this.colorAir = 13948116;
  this.colorFire = 14155778;
  this.colorSpirit = 9568714;
  this.colorWater = 936447;
  
  this.ping = function (message){
    message.channel.send(`I Pong in \`${Date.now() - message.createdTimestamp} ms\``);
  }
  this.author = function(message) {
    message.channel.send({
      embed: {
        title: "Red Queen's Original Creator",
        color: this.embedColorCode,
        fields: [
          { 
            name: "Author:", 
            value: "M1RAG3#3091", 
            inline: true 
          },
          { 
            name: "Donations are also welcome and appreciated:", 
            value: "[paypal.me/EduardoFFBastos](https://paypal.me/EduardoFFBastos)"
          }
        ]
      }
    });
  };
  this.info = function(message) {
    message.channel.send({
      embed: {
        title: "Red Queen",
        color: this.embedColorCode,
        fields: [
          {
            name: "-Cards",
            value: "Explanation on how to look up a __specific card__ and card tutorial."
          },
          {
            name: "-Packs",
            value: "Explanation on how to look for __available cards__ in Packs."
          },
          {
            name: "-Effects",
            value: "List of all card effects with an explanation on them and cards with specified effect."
          },
          {
            name: "-Heroes",
            value: "List of all heroes. Fullmeat (TAP) values and usable cards by each of them."
          },
          {
            name: "-Rewards",
            value: "Monthly reward cards known until now."
          },
          {
            name: "-OP",
            value: "List of cards defined as OP in a HUD, for informational purposes."
          },
          {
            name: "-Warlist",
            value: "Upcoming wars and their reward & cards list"
          },
          {
            name: "-War (optional) N",
            value: "Current or Nth Upcoming war info. Add ` brag` or ` reward` to get corresponding card information. E.g: `-war`, `-war 1`, `-war reward`, `-war 0 brag`, `-war 7 reward`"
          }
        ]
      }
    });
  };
  
  this.cards = function (message){
    message.channel.send(
      "```I am Red Queen. Shall we play a game?" + "\n" + 
      "Type - followed by a card name and i will find it for you." + "\n" + 
      "You can use just one word for some cards with UNIQUE names such as Annoying Elves```" +      
      "**Examples** -Pumpkin Field / -Pumpkin / -Annoying / -elves" + "\n" + 
      "```Some cards allow shortcuts to be used or acronyms for cards with more than three words```" + 
      "**Examples**: -HoG / -SoL / -RotV"+
      "```diff\n- Discord Link Preview setting MUST BE ENABLED to view cards. Go to your Discord-> Settings-> Text & Image\n```").catch(console.error);
  }
  this.packs = function (message){
    message.channel.send(
      "```These commands show some basic information about card packs.```-Pack Bronze /-Pack Silver /-Pack Gold"+
      "```diff\n+Use the combination of commands below to see which cards are available in card packs.\n```"+
      "Pack/Diamond are the initial coomand then combine with one secondary command Air/Earth/Fire/Spirit/Water/Neutral"+
      "```ini\n[The end result should be something like this:]\n```**-Pack X /-Diamond X (Where X is an element)**").catch(console.error);
  }
  this.heroes = function (message){
    message.channel.send(":heavy_minus_sign:\n" +
      Emoji.ElementFire + " **Fire**" + "```-Monty, -Red, -Fergus```" +
      Emoji.ElementEarth + " **Earth**" + "```-Bree, -Trix, -Thrudd```" +
      Emoji.ElementAir + " **Air**" + "```-Brom, -Hawkeye```" +
      Emoji.ElementSpirit + " **Spirit** " + "```-Krell, -Jinx```" +
      Emoji.ElementWater + " **Water** " + "```-Peg, -Gilda, -Logan```").catch(console.error);
  }
  
  //Heroes information.
  ///////////////////////////////////////////////////////////////////////////////////////////
  this.monty = function (message){
      message.channel.send({"embed": {"title": Emoji.HFMonty + " **Monty**",
          "description": 
                                      "*The old pervert... Seriously have you seen his eyes?*" + "\n\n" + 
                                      "***Type:** Magic* " + Emoji.ClassMagic + " :heavy_minus_sign: " +
                                      "***Element:** Fire* " + Emoji.ElementFire, "color": this.colorFire,
          "image": {"url": "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FMonty.jpg?v=1561758342209"},
          "fields": [
            {"name":"`-Listing Monty`","value": "List of __all cards__ for this hero.","inline":true},
            {"name": "`-Element Monty`","value": "Lists __element cards__ for this hero.","inline":true}]}
    });
  }
  this.red = function (message){
      message.channel.send({"embed": {"title": Emoji.HFRed + " **Red**",
          "description": 
                                      "*The Sexy dancer :dancer: she does backflips and everything*" + "\n\n" +
                                      "***Type:** Skill* " + Emoji.ClassSkill + " :heavy_minus_sign: " +
                                      "***Element:** Fire* " + Emoji.ElementFire, "color": this.colorFire,
          "image": {"url": "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FRed.jpg?v=1561758341439"},
          "fields": [
            
            {"name":"`-Listing Red`","value": "List of __all cards__ for this hero.","inline":true},
            {"name": "`-Element Red`","value": "Lists __element cards__ for this hero.","inline":true}]}
    });
  }
  this.fergus = function (message){
      message.channel.send({"embed": {"title": Emoji.HFFergus + " **Fergus**",
          "description": 
                                      "*The dumb crazy raging beserker*" + "\n\n" + 
                                      "***Type:** Might* " + Emoji.ClassMight  + " :heavy_minus_sign: " +
                                      "***Element:** Fire* " + Emoji.ElementFire, "color": this.colorFire,
          "image": {"url": "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FFergus.jpg?v=1561758339002"},
          "fields": [
            {"name":"`-Listing Fergus`","value": "List of __all cards__ for this hero.","inline":true},
            {"name": "`-Element Fergus`","value": "Lists __element cards__ for this hero.","inline":true}]}
    });
  }
  
  this.bree = function (message){
      message.channel.send({"embed": {"title": Emoji.HEBree + " **Bree**",
          "description": 
                                      "*The annoying AF queen of elves*" + "\n\n" + 
                                      "***Type:** Skill* " + Emoji.ClassSkill  + " :heavy_minus_sign: " +
                                      "***Element:** Earth* " + Emoji.ElementEarth, "color": this.colorEarth,
          "image": {"url": "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBree.jpg?v=1561758340147"},
          "fields": [
            {"name":"`-Listing Bree`","value": "List of __all cards__ for this hero.","inline":true},
            {"name": "`-Element Bree`","value": "Lists __element cards__ for this hero.","inline":true}]}
      });
  }
  
  this.thrudd = function (message){
      message.channel.send({"embed": {"title": Emoji.HEThrudd + " **Thrudd**",
          "description": 
                                      "*The lazy smelly hippie vegan*" + "\n\n" + 
                                      "***Type:** Might* " + Emoji.ClassMight  + " :heavy_minus_sign: " +
                                      "***Element:** Earth* " + Emoji.ElementEarth, "color": this.colorEarth,
          "image": {"url": "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FThrudd.jpg?v=1561758341910"},
          "fields": [
            {"name":"`-Listing Thrudd`","value": "List of __all cards__ for this hero.","inline":true},
            {"name": "`-Element Thrudd`","value": "Lists __element cards__ for this hero.","inline":true}]}
    });
  }
  this.trix = function (message){
      message.channel.send({"embed": {"title": Emoji.HETrix + " **Trix**",
          "description": 
                                      "*BEWARE here lives a witch*" + "\n\n" + 
                                      "***Type:** Magic* " + Emoji.ClassMagic + " :heavy_minus_sign: " +
                                      "***Element:** Earth* " + Emoji.ElementEarth, "color": this.colorEarth,
          "image": {"url": "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FTrix.jpg?v=1561758342553"},
          "fields": [
            {"name":"`-Listing Trix`","value": "List of __all cards__ for this hero.","inline":true},
            {"name": "`-Element Trix`","value": "Lists __element cards__ for this hero.","inline":true}]}
    });
  }
  
  this.hawkeye = function (message){
      message.channel.send({"embed": {"title": Emoji.HAHawkeye + " **Hawkeye**",
          "description": 
                                      "*The brainless elusive ultra rare bird*" + "\n\n" + 
                                      "***Type:** Skill* " + Emoji.ClassSkill  + " :heavy_minus_sign: " +
                                      "***Element:** Air* " + Emoji.ElementAir, "color": this.colorAir,
          "image": {"url": "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FHawk.jpg?v=1561758338671"},
          "fields": [
            {"name":"`-Listing Hawkeye`","value": "List of __all cards__ for this hero.","inline":true},
            {"name": "`-Element Hawkeye`","value": "Lists __element cards__ for this hero.","inline":true}]}
    });
  }
  this.brom = function (message){
    message.channel.send({"embed": {"title": Emoji.HABrom + " **Brom**",
        "description": 
                                    "*The useless pile of meat paladin*" + "\n\n" + 
                                    "***Type:** Might* " + Emoji.ClassMight  + " :heavy_minus_sign: " +
                                    "***Element:** Air* " + Emoji.ElementAir, "color": this.colorAir,
        "image": {"url": "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBrom.jpg?v=1561758341685"},
        "fields": [
          {"name":"`-Listing Brom`","value": "List of __all cards__ for this hero.","inline":true},
          {"name": "`-Element Brom`","value": "Lists __element cards__ for this hero.","inline":true}]}
    });
  }
  
  this.jinx = function (message){
      message.channel.send({"embed": {"title": Emoji.HSJinx + " **Jinx**",
          "description": 
                                      "*The clumsy stealth master assassin*" + "\n\n" + 
                                      "***Type:** Skill* " + Emoji.ClassSkill  + " :heavy_minus_sign: " +
                                      "***Element:** Spirit* " + Emoji.ElementSpirit, "color": this.colorSpirit,
          "image": {"url": "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FJinx.jpg?v=1561758339618"},
          "fields": [
            {"name":"`-Listing Jinx`","value": "List of __all cards__ for this hero.","inline":true},
            {"name": "`-Element Jinx`","value": "Lists __element cards__ for this hero.","inline":true}]}
    });
  }
  this.krell = function (message){
      message.channel.send({"embed": {"title": Emoji.HSKrell + " **Krell** ",
          "description": 
                                      "*LOL don't even get me started*" + "\n\n" + 
                                      "***Type:** Magic* " + Emoji.ClassMagic  + " :heavy_minus_sign: " +
                                      "***Element:** Spirit* " + Emoji.ElementSpirit, "color": this.colorSpirit,
          "image": {"url": "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FKrell.jpg?v=1561758339902"},
          "fields": [{"name":"-Listing Krell","value": "List of __all cards__ for this hero.","inline":true},
          {"name": "-Element Krell","value": "Lists __element cards__ for this hero.","inline":true}]}
    });
  }
  this.logan = function (message){
      message.channel.send({"embed": {"title": Emoji.HWLogan + " **Logan** ",
          "description": 
                                      "*The cool bearded wizard healer*" + "\n\n" + 
                                      "***Type:** Magic* " + Emoji.ClassMagic  + " :heavy_minus_sign: " +
                                      "***Element:** Water* " + Emoji.ElementWater, "color": this.colorWater,
          "image": {"url": "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FLogan.jpg?v=1561758340891"},
          "fields": [
            {"name":"`-Listing Logan`","value": "List of __all cards__ for this hero.","inline":true},
            {"name": "`-Element Logan`","value": "Lists __element cards__ for this hero.","inline":true}]}
    });
  }
  this.gilda = function (message){
      message.channel.send({"embed": {"title": Emoji.HWGilda + " **Gilda** ",
          "description": 
                                      "*The PITA shield maiden*" + "\n\n" + 
                                      "***Type:** Might* " + Emoji.ClassMight  + " :heavy_minus_sign: " +
                                      "***Element:** Water* " + Emoji.ElementWater, "color": this.colorWater,
          "image": {"url": "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FGilda.jpg?v=1561758339340"},
          "fields": [
            {"name":"`-Listing Gilda`","value": "List of __all cards__ for this hero.","inline":true},
            {"name": "`-Element Gilda`","value": "Lists __element cards__ for this hero.","inline":true}]}
    });
  }
  this.peg = function (message){
      message.channel.send({"embed": {"title": Emoji.HWPeg + " **Peg** ",
          "description": 
                                      "*The party pirate... Shake that booty girl*" + "\n\n" + 
                                      "***Type:** Skill* " + Emoji.ClassSkill  + " :heavy_minus_sign: " +
                                      "***Element:** Water* " + Emoji.ElementWater, "color": this.colorWater,
          "image": {"url": "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPeg.jpg?v=1561758341160"},
          "fields": [
            {"name":"`-Listing Peg`","value": "List of __all cards__ for this hero.","inline":true},
            {"name": "`-Element Peg`","value": "Lists __element cards__ for this hero.","inline":true}]}
    });
  }
}
let InfoReplies = new InfoManager();

module.exports = InfoReplies;
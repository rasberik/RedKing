let GuildManager = function() {
  this.messageRedColor = 15944039;
  this.whiteColor = 16711422;
  
  this.greetingLeader= function(message) {
    message.channel.send("Greetings, Guild Leader").catch(er => console.log(er.message));
  };
  
  this.redbirdRaiders = function(message) {
    message.channel.send({
      embed: {
        title: "__Redbird Raiders__",
        color: this.whiteColor,
        description: "",
        image: {
          url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FRedbird%20Raiders.png?v=1606441393804"
        },
        fields: [
          {
            name: "Guild",
            value:
              "*Leader:* **Cainein** \n *Tier:* :gem:\n`discord.gg/3uFTXFs`",
            inline: true
          
          },
          {
            name: "Alliance",
            value:
              "**The Black Flag** \n`discord.gg/F8hjach`",
              
            inline: true
          }
        ]
      }
    }).catch(er => console.log(er.message));
  };
};
let GuildReplies = new GuildManager();
module.exports = GuildReplies;

// East side daycare
// BH-ElderBlood
// Battlehandlers
// 🐘 Zoson's Zone 🐘
// Robin Hood
// BH - Secret Identity
// Orbis Tertius
// Bot list
// Redbird Raiders
// Necro lounge
// Fatalis
// Shadows of Immor
// Outrage Clan
// {__AK12__}
// Mystery Inc.
// BattleHand Heroes Fr
// Acheron
// The Hacking Dayz
// Test teki
// real
// War 24-7
// Quaker oats guy
// The βrain
// TryAngle
// CR Code Red
// Guild War
// Underdogs
// DeathTrap
// DCWISHERE
// Spring Field Middle School
// BH Erranti
// BH players
// BH Francophone
// LostLineage
// Hyrule
// GAMINGAREA
// BattleHand Italia
// Gray Soldiers
// Knighthood
// The Black Flag
// Enigma & Elder Blood
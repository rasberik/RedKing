let RewardManager = function() {
  this.messageRedColor = 15944039;
  this.whiteColor = 16711422;
  
  const MonthlyRewardList = [
        {month: 1, cls:"magic", rar:"4:star:", lex:"Y", war: "N", trn:"1", pak:"Y", brag:"N", card:"Fuming Bunny", elmnt:"fire"},
        {month: 2, cls:"skill", rar:"4:star:", lex:"Y", war: "Y", trn:"3", pak:"Y", brag:"N", card:"Acid Splash", elmnt:"earth"},
        {month: 3, cls:"might", rar:"4:star:", lex:"Y", war: "Y", trn:"2", pak:"Y", brag:"N", card:"Charged Shield", elmnt:"air"},
        {month: 4, cls:"skill", rar:"4:star:", lex:"Y", war: "Y", trn:"1", pak:"Y", brag:"N", card:"Out of Sight",   elmnt:"spirit"},
        {month: 5, cls:"magic", rar:"4:star:", lex:"Y", war: "N", trn:"2", pak:"Y", brag:"N", card:"Smelling Salts", elmnt:"water"},
        {month: 6, cls:"might", rar:"4:star:", lex:"Y", war: "N", trn:"2", pak:"Y", brag:"N", card:"Magnet Shield", elmnt:"neutral"},
        {month: 7, cls:"skill", rar:"4:star:", lex:"Y", war: "Y", trn:"2", pak:"Y", brag:"N", card:"Quad Slash", elmnt:"fire"},
        {month: 8, cls:"might", rar:"4:star:", lex:"Y", war: "N", trn:"5", pak:"Y", brag:"N", card:"Rocking Roll", elmnt:"earth"},
        {month: 9, cls:"skill", rar:"4:star:", lex:"Y", war: "N", trn:"3", pak:"Y", brag:"N", card:"Lightning Strike", elmnt:"air"},
        {month: 10, cls:"magic", rar:"4:star:", lex:"Y", war: "Y", trn:"4", pak:"Y", brag:"N", card:"Nightmare", elmnt:"spirit"},
        {month: 11, cls:"might", rar:"4:star:", lex:"Y", war: "Y", trn:"5", pak:"Y", brag:"N", card:"Deep Breath", elmnt:"water"},
        {month: 12, cls:"magic", rar:"4:star:", lex:"Y", war: "N", trn:"1", pak:"Y", brag:"N", card:"Rejuvenate All", elmnt:"neutral"},
        {month: 13, cls:"might", rar:"4:star:", lex:"Y", war: "N", trn:"3", pak:"Y", brag:"N", card:"Caber Toss", elmnt:"fire"},
        {month: 14, cls:"magic", rar:"4:star:", lex:"Y", war: "Y", trn:"2", pak:"Y", brag:"N", card:"Vine Wrap", elmnt:"earth"},
        {month: 15, cls:"might", rar:"4:star:", lex:"Y", war: "N", trn:"5", pak:"Y", brag:"N", card:"Wrath of God", elmnt:"air"},
        {month: 16, cls:"skill", rar:"4:star:", lex:"Y", war: "N", trn:"2", pak:"Y", brag:"N", card:"Heart Breaker", elmnt:"spirit"},
        {month: 17, cls:"skill", rar:"4:star:", lex:"Y", war: "N", trn:"3", pak:"Y", brag:"N", card:"Shark Cannon", elmnt:"water"},
        {month: 18, cls:"magic", rar:"4:star:", lex:"Y", war: "N", trn:"2", pak:"Y", brag:"N", card:"Iron Break", elmnt:"fire"},
        {month: 19, cls:"might", rar:"4:star:", lex:"Y", war: "N", trn:"3", pak:"Y", brag:"N", card:"Ride of the Valkyries", elmnt:"water"},
        {month: 20, cls:"might", rar:"4:star:", lex:"Y", war: "N", trn:"1", pak:"Y", brag:"N", card:"Ethereal Guardian", elmnt:"air"},
        {month: 21, cls:"skill", rar:"4:star:", lex:"Y", war: "Y", trn:"3", pak:"Y", brag:"N", card:"Piercing Hellfire", elmnt:"fire"},
        {month: 22, cls:"magic", rar:"4:star:", lex:"Y", war: "N", trn:"1", pak:"Y", brag:"N", card:"Night Cap", elmnt:"spirit"},
        {month: 23, cls:"skill", rar:"4:star:", lex:"Y", war: "N", trn:"2", pak:"Y", brag:"N", card:"Bullseye", elmnt:"air"},
        {month: 24, cls:"might", rar:"4:star:", lex:"Y", war: "N", trn:"1", pak:"Y", brag:"N", card:"Firewall", elmnt:"fire"},
        {month: 25, cls:"skill", rar:"4:star:", lex:"Y", war: "N", trn:"2", pak:"Y", brag:"N", card:"Speed of Light", elmnt:"fire"},
        {month: 26, cls:"magic", rar:"4:star:", lex:"Y", war: "N", trn:"4", pak:"Y", brag:"N", card:"Box of Frogs", elmnt:"earth"},
        {month: 27, cls:"might", rar:"4:star:", lex:"Y", war: "N", trn:"2", pak:"Y", brag:"N", card:"Ice Shard", elmnt:"water"},
        {month: 28, cls:"magic", rar:"4:star:", lex:"Y", war: "Y", trn:"3", pak:"Y", brag:"N", card:"Snake Charmer", elmnt:"spirit"},
        {month: 29, cls:"magic", rar:"4:star:", lex:"Y", war: "Y", trn:"2", pak:"Y", brag:"N", card:"Channeling Chi", elmnt:"water"},
        {month: 30, cls:"might", rar:"4:star:", lex:"Y", war: "Y", trn:"4", pak:"Y", brag:"N", card:"Flame On", elmnt:"fire"},
        {month: 31, cls:"skill", rar:"4:star:", lex:"Y", war: "Y", trn:"1", pak:"Y", brag:"N", card:"Healing Light", elmnt:"air"},
        {month: 32, cls:"might", rar:"4:star:", lex:"Y", war: "Y", trn:"2", pak:"Y", brag:"N", card:"Wet Kiss", elmnt:"water"},
        {month: 33, cls:"magic", rar:"4:star:", lex:"Y", war: "Y", trn:"2", pak:"Y", brag:"N", card:"Healing Oils", elmnt:"fire"},
        {month: 34, cls:"might", rar:"4:star:", lex:"Y", war: "Y", trn:"1", pak:"Y", brag:"N", card:"Sweet Corn", elmnt:"earth"},
        {month: 35, cls:"magic", rar:"4:star:", lex:"Y", war: "Y", trn:"1", pak:"Y", brag:"N", card:"Moonbeam", elmnt:"spirit"},
        {month: 36, cls:"skill", rar:"4:star:", lex:"Y", war: "N", trn:"1", pak:"Y", brag:"N", card:"Ivywood Piercer", elmnt:"earth"},
        {month: 37, cls:"magic", rar:"4:star:", lex:"Y", war: "N", trn:"5", pak:"Y", brag:"N", card:"Avalanche", elmnt:"water"},
        {month: 38, cls:"skill", rar:"4:star:", lex:"Y", war: "N", trn:"2", pak:"Y", brag:"N", card:"Sky Piercer", elmnt:"air"},
        {month: 39, cls:"might", rar:"4:star:", lex:"Y", war: "Y", trn:"1", pak:"Y", brag:"N", card:"Peace Pipe", elmnt:"earth"},
        {month: 40, cls:"skill", rar:"4:star:", lex:"Y", war: "Y", trn:"4", pak:"Y", brag:"N", card:"The Kraken", elmnt:"water"},
        {month: 41, cls:"might", rar:"4:star:", lex:"Y", war: "N", trn:"1", pak:"Y", brag:"N", card:"Cleansing Chalice", elmnt:"air"},
        {month: 42, cls:"skill", rar:"4:star:", lex:"Y", war: "N", trn:"1", pak:"Y", brag:"N", card:"Healing Splash", elmnt:"earth"},
        {month: 43, cls:"skill", rar:"4:star:", lex:"Y", war: "Y", trn:"2", pak:"Y", brag:"N", card:"Hard Luck", elmnt:"spirit"},
        {month: 44, cls:"might", rar:"4:star:", lex:"Y", war: "N", trn:"3", pak:"Y", brag:"N", card:"Fellcrest Lullaby", elmnt:"earth"},
        {month: 45, cls:"skill", rar:"4:star:", lex:"Y", war: "Y", trn:"4", pak:"Y", brag:"N", card:"Rain of Fire", elmnt:"fire"},
        {month: 46, cls:"magic", rar:"4:star:", lex:"Y", war: "Y", trn:"3", pak:"Y", brag:"N", card:"Monk-Fu", elmnt:"water"},
        {month: 47, cls:"skill", rar:"4:star:", lex:"Y", war: "N", trn:"1", pak:"Y", brag:"N", card:"Espresso Shot", elmnt:"fire"},
        {month: 48, cls:"skill", rar:"4:star:", lex:"Y", war: "Y", trn:"2", pak:"Y", brag:"N", card:"Fairy Shield", elmnt:"earth"},
        {month: 49, cls:"magic", rar:"4:star:", lex:"Y", war: "N", trn:"2", pak:"Y", brag:"N", card:"Pumpkin Field", elmnt:"spirit"},
        {month: 50, cls:"magic", rar:"4:star:", lex:"Y", war: "N", trn:"3", pak:"Y", brag:"N", card:"Candy Cauldron", elmnt:"earth"},
        {month: 51, cls:"skill", rar:"4:star:", lex:"Y", war: "Y", trn:"2", pak:"Y", brag:"N", card:"Hoist the Colours", elmnt:"water"},
        {month: 52, cls:"might", rar:"4:star:", lex:"Y", war: "Y", trn:"6", pak:"Y", brag:"N", card:"Dragonslayer", elmnt:"fire"},
        {month: 53, cls:"skill", rar:"4:star:", lex:"Y", war: "Y", trn:"1", pak:"Y", brag:"N", card:"Backstab", elmnt:"spirit"},
        {month: 54, cls:"magic", rar:"4:star:", lex:"Y", war: "N", trn:"4", pak:"Y", brag:"N", card:"Lava Wave", elmnt:"fire"},
  ]

  const FirstHalf = MonthlyRewardList.filter(card => card.month <= Math.ceil(MonthlyRewardList.length/2)).map(reward => reward.month + ": " + reward.card + " \n").reduce((output, reward) => (output) + reward, "")
  const SecondHalf = MonthlyRewardList.filter(card => card.month > Math.ceil(MonthlyRewardList.length/2)).map(reward => reward.month + ": " + reward.card + " \n").reduce((output, reward) => (output) + reward, "")
  
  
  this.showAll = function (message) {
    message.channel.send(
       {
         "embed":  
         {
           "title": "**Monthly Reward Cards**",
           "color": this.whiteColor,
           //"description": "Rewards for monthly activity, to see specific months card details, use `-reward 1` where 1 is month of your choice",
           "description": "Rewards for monthly activity, all cards are **Super Rare** and there is **No Brag** card",
           //"thumbnail": {"url": "https://i.postimg.cc/tCR8QJg7/Attack-Up.png"},"image": {"url": ""},
           "fields": [  
             {"name" : "Total months: " + MonthlyRewardList.length, "value": FirstHalf, inline: true },
             {"name" : ":heavy_minus_sign:", "value": SecondHalf, inline: true }
           ]
         }
       }); 
  }
};
let RewardReplies = new RewardManager();
module.exports = RewardReplies;
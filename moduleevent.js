let Emoji = require('./moduleemoji.js');
let Const = require('./moduleconst.js');

let Apply = function(message) {
  
  let messageTimestamp = message.createdTimestamp;  
  let messageDate = new Date(messageTimestamp);
  let month = messageDate.getUTCMonth() + 1;
  let day = messageDate.getUTCDate();
  
  // December ~ Christmas
  if (month == 12) {    
    Const.ColorEmbed = Const.ColorRandomGreen();    
    Emoji.Star = Emoji.ChristmasTree;
    Emoji.Up = Emoji.Santa;
  }
  
  //Halloween
  if ((month == 10 && day>=15) || (month == 11 && day <=5)) {
    Const.ColorEmbed = Const.ColorRandomOrange();    
    Emoji.Star = Emoji.Pumpkin;
    Emoji.Up = Emoji.Skull;
  }
  
  // Valentines Day
  if ((month === 2) && (day >= 3) && (day <= 16)) {
    Const.ColorEmbed = Const.ColorRandomPink();    
    Emoji.Star = Emoji.Cupid;
    Emoji.Up = Emoji.Love;
  }  
}

module.exports = { apply: Apply }
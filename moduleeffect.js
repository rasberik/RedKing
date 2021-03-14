let EffectManager = function (){
  this.embedColorCode = 15944039;
  //Effects database.
  ////////////////////////////////////////////////////////////////////////////  
  const EffectList = [
      {sufx:"", efct:"Afterburn"},
      {sufx:"", efct:"Bleedout"},
      {sufx:"", efct:"Defrost"},
      {sufx:"", efct:"Douse"},
      {sufx:"", efct:"Electrocute"},
      {sufx:"", efct:"Accuracy Down"},
      {sufx:"", efct:"Accuracy Up"},
      {sufx:"", efct:"Attack Down"},
      {sufx:"", efct:"Attack Up"},
      {sufx:"", efct:"Defence Down"},
      {sufx:"", efct:"Defence Up"},
      {sufx:"", efct:"HP Down"},
      {sufx:"", efct:"HP Up"},
      {sufx:"", efct:"Luck Down"},
      {sufx:"", efct:"Luck Up"},
      {sufx:"", efct:"Charge Trait"},
      {sufx:"", efct:"Drain Trait"},
      {sufx:"", efct:"Haste"},        
      {sufx:"", efct:"Speed Up"},
      {sufx:"", efct:"Chill"},
      {sufx:"", efct:"Slow"},
      {sufx:"", efct:"Prevent Haste"},
      {sufx:"", efct:"Awaken"},
      {sufx:"", efct:"Bamboozle"},
      {sufx:"", efct:"Confuse"},
      {sufx:"", efct:"Sleep"},
      {sufx:"", efct:"Stun"},
      {sufx:"", efct:"Break"},
      {sufx:"", efct:"Charm"},
      {sufx:"", efct:"Taunt"}, 
      {sufx:"", efct:"Counter"},
      {sufx:"", efct:"Critical"},        
      {sufx:"", efct:"Crush"},
      {sufx:"", efct:"Cure"},
      {sufx:"", efct:"Mark"},
      {sufx:"", efct:"Evade"},
      {sufx:"", efct:"Flurry"},
      {sufx:"", efct:"Immunity"},
      {sufx:"", efct:"Interrupt"},        
      {sufx:"", efct:"Leech"},
      {sufx:"", efct:"Multitarget"},
      {sufx:"", efct:"Pierce"},
      {sufx:"", efct:"Random"},
      {sufx:"", efct:"Recoil"},
      {sufx:"", efct:"Regen"},
      {sufx:"", efct:"Reset"},
      {sufx:"", efct:"Sap"},
      {sufx:"", efct:"Splash"},
      {sufx:"", efct:"Warp"},
      {sufx:"", efct:"Unaware"},
      {sufx:"", efct:"Perfect Shot"},
      {sufx:"", efct:"Shield Bind"},
      {sufx:"", efct:"Burn"},        
      {sufx:"", efct:"Poison"},
      {sufx:"", efct:"Shock"},
      {sufx:"", efct:"Bleed"},
      {sufx:"", efct:"Drown"},
      {sufx:"", efct:"Extend Burn"},
      {sufx:"", efct:"Extend Poison"},
      {sufx:"", efct:"Extend Shock"},
      {sufx:"", efct:"Extend Bleed"},
      {sufx:"", efct:"Weak Fire"},
      {sufx:"", efct:"Weak Earth"},
      {sufx:"", efct:"Weak Air"},
      {sufx:"", efct:"Weak Spirit"},
      {sufx:"", efct:"Weak Water"},
    ]
    
  //All effects list.
  const ListEffects = EffectList.sort((a,b) => (a.efct > b.efct) ?1 : (b.efct > a.efct) ?-1 : 0).map(event => event.efct).reduce((prev, ListEffects) => (prev) +" *|* "+ ListEffects)
  this.ListEffects = function (message){
    message.channel.send("```Rule of thumb: Beneficial effects will always apply to your heroes and detrimental effects to your opponents.```" +
    ListEffects+"```diff\n-Effect commands require a prefix like this: -Effect X\n```").catch(console.error);
  }
  
  //Combo effects
  ///////////////////////////////////////////////////////////////
  this.effectafterburn = function (message){
    message.channel.send({"embed": {"title": "**Afterburn**",
    "description": "This is a combo effect that will occur when you hit a Poisoned target with a Fire attack.",
    "thumbnail": {"url": "https://i.postimg.cc/6p7wCLyx/Afterburn.png"},"image": {"url": ""},
    "fields": [{"name":"Notice","value": "Poison DoT is dealt and ends","inline":true}]}
  });
  }
  this.effectbleedout = function (message){
    message.channel.send({"embed": {"title": "**Bleedout**",
    "description": "This is a combo effect that will occur when you hit a Bleeding target with a Leech effect.",
    "thumbnail": {"url": "https://i.postimg.cc/gktmwBcK/Bleedout.png"},"image": {"url": ""},
    "fields": [{"name":"Notice","value": "Bleed DoT is dealt and ends","inline":true}]}
  });
  }
  this.effectdefrost = function (message){
    message.channel.send({"embed": {"title": "**Defrost**",
    "description": "This is a combo effect that will occur when you hit a Chilled target with a Fire attack.",
    "thumbnail": {"url": "https://i.postimg.cc/zDjJNG96/Defrost.png"},"image": {"url": ""},
    "fields": [{"name":"Notice","value": "Chill effect ends","inline":true}]}
  });
  }
  this.effectdouse = function (message){
    message.channel.send({"embed": {"title": "**Douse**",
    "description": "This is a combo effect that will occur when you hit Burning target with a Water attack.",
    "thumbnail": {"url": "https://i.postimg.cc/K8dbfkMk/Douse.png"},"image": {"url": ""},
    "fields": [{"name":"Notice","value": "Burn effect ends","inline":true}]}
  });
  }
  this.effectelectrocute = function (message){
    message.channel.send({"embed": {"title": "**Electrocute**",
    "description": "This is a combo effect that will occur when you hit Shocked target with Drown effect.",
    "thumbnail": {"url": "https://i.postimg.cc/wTj9jdzv/Electrocute.png"},"image": {"url": ""},
    "fields": [{"name":"Notice","value": "Shock DoT is dealt and ends","inline":true},{"name":"Notice","value": "Drown continues","inline":true}]}
  });
  }
  //Opposite effects
  /////////////////////////////////////////////////////////////////////
  this.effectaccuracydown = function (message){
    message.channel.send({"embed": {"title": "**Accuracy Down**",
    "description": "Attack cards that __would hit__ inside the duration of this effect will have their chance to hit reduced by XX%.",
    "thumbnail": {"url": "https://i.postimg.cc/Nj5sP6y4/Accuracy-Down.png"},"image": {"url": ""},
    "fields": [{"name":"Traits","value": "Unaffected","inline":true},{"name":"Counters","value": "Accuracy Up/Perfect Shot","inline":true}]}
  });
  }
  this.effectaccuracyup = function (message){
    message.channel.send({"embed": {"title": "**Accuracy Up**",
    "description": "Attack cards hitting inside the duration of this effect will have their chance to hit increased by XX%.",
    "thumbnail": {"url": "https://i.postimg.cc/vZkKVvt6/Accuracy-Up.png"},"image": {"url": ""},
    "fields": [{"name":"Traits","value": "Unaffected","inline":true},{"name":"Notice","value": "Effect applys __before__ attack hits.","inline":true}]}
  });
  }
  this.effectattackdown = function (message){
    message.channel.send({"embed": {"title": "**Attack Down**",
    "description": "Attack cards __played during__ this effect will have their damage reduced by 50% unless specified otherwise.",
    "thumbnail": {"url": "https://i.postimg.cc/VsW2Vnm3/Attack-Down.png"},"image": {"url": ""},
    "fields": [{"name":"Traits","value": "Affected","inline":true},{"name":"Counters","value": "Attack Up","inline":true}]}
  });
  }
  this.effectattackup = function (message){
    message.channel.send({"embed": {"title": "**Attack Up**",
    "description": "Attacks that __hit inside the duration__ will have their damage increased 50% unless specified otherwise.",
    "thumbnail": {"url": "https://i.postimg.cc/tCR8QJg7/Attack-Up.png"},"image": {"url": ""},
    "fields": [{"name":"Traits","value": "Affected","inline":true},{"name":"Counters","value": "Attack Down","inline":true}]}
  });
  }
  this.effectdefencedown = function (message){
    message.channel.send({"embed": {"title": "**Defence Down**",
    "description": "Target defence will decrease by X or (50% unless specified) any attacks hitting will deal XX% increased damage for the duration of the effect.",
    "thumbnail": {"url": "https://i.postimg.cc/X7XxkCJK/Defence-Down.png"},"image": {"url": ""},
    "fields": [{"name":"Traits","value": "Affected","inline":true},{"name":"X value","value": "Krell Active","inline":true}]}
  });
  }
  this.effectdefenceup = function (message){
    message.channel.send({"embed": {"title": "**Defence Up**",
    "description": "Target defence will increase by (25% unless specified otherwise) any attacks hitting will deal XX% reduced damage for the duration of the effect.",
    "thumbnail": {"url": "https://i.postimg.cc/28JGcSbs/Defence-Up.png"},"image": {"url": ""},
    "fields": [{"name":"Traits","value": "Affected","inline":true}]}
  });
  }
  this.effecthealthdown = function (message){
    message.channel.send({"embed": {"title": "**Health Down**",
    "description": "Affected targets maximum possible health will decrease by X value or (25% unless specified otherwise) for the duration.",
    "thumbnail": {"url": "https://i.postimg.cc/j2nwLtxf/Max-Health-Down.png"},"image": {"url": ""},
    "fields": [{"name":"X value","value": "Krell Passive is permanent","inline":true}]}
  });
  }
  this.effecthealthup = function (message){
    message.channel.send({"embed": {"title": "**Health Up**",
    "description": "Affected targets maximum possible health will increase by X value or (25% unless specified otherwise) for the duration.",
    "thumbnail": {"url": "https://i.postimg.cc/s1FBWqxN/Max-Health-Up.png"},"image": {"url": ""},
    "fields": [{"name":"X value","value": "Bree Passive is permanent","inline":true}]}
  });
  }
  this.effectluckdown = function (message){
    message.channel.send({"embed": {"title": "**Luck Down**",
    "description": "After being hit with this effect and for the duration of it all cards that are __newly drawn to hand will not have__ their perk effect active.",
    "thumbnail": {"url": "https://i.postimg.cc/LXXZFjGN/Luck-Down.png"},"image": {"url": ""},
    "fields": [{"name":"Notice","value": "Unless Perk value is 100%?","inline":true},{"name":"Counter","value": "Luck Up","inline":true}]}
  });
  }
  this.effectluckup = function (message){
    message.channel.send({"embed": {"title": "**Luck Up**",
    "description": "After being hit with this effect and for the duration of it all cards that are __newly drawn to hand will have__ their perk effect active.",
    "thumbnail": {"url": "https://i.postimg.cc/V6V0fd81/Luck-Up.png"},"image": {"url": ""},
    "fields": [{"name":"Counter","value": "Luck Down","inline":true}]}
  });
  }
  this.effecttraitcharge = function (message){
    message.channel.send({"embed": {"title": "**Charge Trait**",
    "description": "Attack cards with this effect will increase caster trait bar. / Heal cards with this effect will increase __targeted__ hero trait bar",
    "thumbnail": {"url": "https://i.postimg.cc/JhdjnTN9/Trait-Up.png"},"image": {"url": ""},
    "fields": [{"name":"Charge value","value": "17%","inline":true},{"name":"Counter","value": "Drain Trait","inline":true}]}
  });
  }
  this.effecttraitdrain = function (message){
    message.channel.send({"embed": {"title": "**Drain Trait**",
    "description": "This effect will decrease the __targeted__ opponent trait bar charge.",
    "thumbnail": {"url": "https://i.postimg.cc/FKbxHbWv/Drain-Trait.png"},"image": {"url": ""},
    "fields": [{"name":"Drain Value","value": "21%??? think its more","inline":true},{"name":"Counter","value": "Trait Charge","inline":true}]}
  });
  }
  //Speed effects
  ///////////////////////////////////////////////////////////////
  this.effecthaste = function (message){
    message.channel.send({"embed": {"title": "**Haste**",
    "description": "Target will have the cast time of all cards reduced by 1 turn for X number of card plays. \n(Including partner card currently being casted at time of cast (2 times max).",
    "thumbnail": {"url": "https://i.postimg.cc/j5s4wWm7/Haste.png"},"image": {"url": ""},
    "fields": [{"name":"Counter","value": "Prevent Haste","inline":true}]}
  });
  }
  this.effectchill = function (message){
    message.channel.send({"embed": {"title": "**Chill**",
    "description": "Target will have the cast time of all cards increased by 1 turn for X turn duration. \n(Including currently being casted at time of hit unless already under effect).",
    "thumbnail": {"url": "https://i.postimg.cc/MH9PK0GH/Chill.png"},"image": {"url": ""},
    "fields": [{"name":"Combo","value": "Effect Defrost","inline":true}]}
  });
  }
  this.effectslow = function (message){
    message.channel.send({"embed": {"title": "**Slow**",
    "description": "Target will have the cast time of all cards increased by 1 turn for Xnumber of card plays. \n(Including currently being casted at time of hit unless already under effect).",
    "thumbnail": {"url": "https://i.postimg.cc/5yzBDwFD/Slow.png"},"image": {"url": ""},
    "fields": [{"name":"____","value": "___","inline":true}]}
  });
  }
  this.effectpreventhaste = function (message){
    message.channel.send({"embed": {"title": "**Prevent Haste**",
    "description": "Cards with this effect will __block the target from benefitting__ any Haste effects cast on him for the duration.",
    "thumbnail": {"url": "https://i.postimg.cc/Qd0r1Kdr/Prevent-Haste.png"},"image": {"url": ""},
    "fields": [{"name":"____","value": "___","inline":true}]}
  });
  }
  //Effects
  ////////////////////////////////////////////////////////////
  this.effectawaken = function (message){
    message.channel.send({"embed": {"title": "**Awaken**",
    "description": "Awakes the target if they are under sleep effect and prevents them from going to sleep for the duration.",
    "thumbnail": {"url": "https://i.postimg.cc/mDG6d2qL/Awaken.png"},"image": {"url": ""},
    "fields": [{"name":"Raging Bull","value": "Red Bull injection in your hero's veins.","inline":true}]}
  });
  }
  this.effectbamboozle = function (message){
    message.channel.send({"embed": {"title": "**Bamboozled**",
    "description": "Bamboozle will make your __attacks__ target a random opponent and a 10% chance to miss.",
    "thumbnail": {"url": "https://i.postimg.cc/CK8QHfcr/Bamboozled.png"},"image": {"url": ""},
    "fields": [{"name":"Notice","value": "Multi/Splash checks every target","inline":true},{"name":"Combo","value": "Unaware","inline":true}]}
  });
  }
  this.effectconfuse = function (message){
    message.channel.send({"embed": {"title": "**Confuse**",
    "description": "The affected target will have its accuracy lowered by 20%.",
    "thumbnail": {"url": "https://i.postimg.cc/Xqj1b14t/Confuse.png"},"image": {"url": ""},
    "fields": [{"name":"Notice","value": "Multi/Splash checks every target","inline":true},{"name":"Combo","value": "Unaware","inline":true}]}
  });
  }
  this.effectsleep = function (message){
    message.channel.send({"embed": {"title": "**Sleep**",
    "description": "Puts the target in a sleep state during which any card its casting stops. Will be awoken if attacked. (Except Flurry?)",
    "thumbnail": {"url": "https://i.postimg.cc/9MKPxxzG/Sleep.png"},"image": {"url": ""},
    "fields": [{"name":"Counters","value": "-Effect Awaken","inline":true},{"name":"Combo","value": "Unaware","inline":true}]}
  });
  }
  this.effectstun = function (message){
    message.channel.send({"embed": {"title": "**Stun**",
    "description": "The affected target will have its accuracy lowered by 20%.",
    "thumbnail": {"url": "https://i.postimg.cc/7Yg1Vn42/Stun.png"},"image": {"url": ""},
    "fields": [{"name":"Notice","value": "Multi/Splash checks every target","inline":true},{"name":"Combo","value": "Unaware","inline":true}]}
  });
  }
  this.effectbreak = function (message){
    message.channel.send({"embed": {"title": "**Break**",
    "description": "This effect will remove any Regeneration effect from the target.",
    "thumbnail": {"url": "https://i.postimg.cc/26F9gNR4/Break.png"},"image": {"url": ""},
    "fields": [{"name":"____","value": "___","inline":true}]}
  });
  }
  this.effectcharm = function (message){
    message.channel.send({"embed": {"title": "**Charm**",
    "description": "This effect forces enemy opponents to __immediately and for the duration__ target the effect caster and also reduces their attack by 50% unless specified otherwise.",
    "thumbnail": {"url": "https://i.postimg.cc/v8hSzyvy/Charm.png"},"image": {"url": ""},
    "fields": [{"name":"Traits","value": "Affected","inline":true}]}
  });
  }
  this.effecttaunt = function (message){
    message.channel.send({"embed": {"title": "**Taunt**",
    "description": "This effect will force enemy opponents to __immediately and for the duration__ target the effect caster.",
    "thumbnail": {"url": "https://i.postimg.cc/DwnrY4fY/Taunt.png"},"image": {"url": ""},
    "fields": [{"name":"____","value": "___","inline":true}]}
  });
  }
  this.effectcounter = function (message){
    message.channel.send({"embed": {"title": "**Counter**",
    "description": "This effect will deal X damage to the attacker __before damage is dealt to you__.",
    "thumbnail": {"url": "https://i.postimg.cc/8PCXXYy6/Counter.png"},"image": {"url": ""},
    "fields": [{"name":"Notice","value": "Only applies to Melee attacks","inline":true},{"name":"Counter","value": "Not using melee attacks :wink:","inline":true}]}
  });
  }
  this.effectcritical = function (message){
    message.channel.send({"embed": {"title": "**Critical**",
    "description": "This effect increases the card original attack/heal/shield value by 50%.",
    "thumbnail": {"url": "https://i.postimg.cc/rFYnB9bY/Critical.png"},"image": {"url": ""},
    "fields": [{"name":"____","value": "___","inline":true}]}
  });
  }
  this.effectcrush = function (message){
    message.channel.send({"embed": {"title": "**Crush**",
    "description": "This effect will deal double damage to shields. Spare damage will not pass to target HP)",
    "thumbnail": {"url": "https://i.postimg.cc/13kWt3yG/Crush.png"},"image": {"url": ""},
    "fields": [{"name":"____","value": "___","inline":true}]}
  });
  }
  this.effectcure = function (message){
    message.channel.send({"embed": {"title": "**Cure All**",
    "description": "This effect removes __any and all__ of the following status effects - Shock/Burn/Bleed/Chill/Poison/Confuse.",
    "thumbnail": {"url": "https://i.postimg.cc/zGgj9YTV/Cure.png"},"image": {"url": ""},
    "fields": [{"name":"Variants","value": "Cure X","inline":true}]}
  });
  }
  this.effectmark = function (message){
    message.channel.send({"embed": {"title": "**Mark**",
    "description": "The affected target suffers __double damage__ from all attacks for the duration.",
    "thumbnail": {"url": "https://i.postimg.cc/GpnQRgjz/Double-Damage.png"},"image": {"url": ""},
    "fields": [{"name":"Traits","value": "Affected","inline":true},{"name":"Usefull","value": "DoT is increased by this","inline":true}]}
  });
  }
  this.effectevade = function (message){
    message.channel.send({"embed": {"title": "**Evade**",
    "description": "The target has XX% chance to evade any __damage and effects__ from incoming attacks.",
    "thumbnail": {"url": "https://i.postimg.cc/vTT7hJQ8/Evade.png"},"image": {"url": ""},
    "fields": [{"name":"Traits","value": "Unaffected","inline":true},{"name":"Counters","value": "Perfect Shot/Accuracy Up","inline":true}]}
  });
  }
  this.effectflurry = function (message){
    message.channel.send({"embed": {"title": "**Flurry**",
    "description": "Attack/Heal value is divided in X number of Flurry hits each with 25% chance to miss.",
    "thumbnail": {"url": "https://i.postimg.cc/MKcbQJPd/Flurry.png"},"image": {"url": ""},
    "fields": [{"name":"Usefull","value": "-Effect Accuracy Up","inline":true}]}
  });
  }
  this.effectimmunity = function (message){
    message.channel.send({"embed": {"title": "**Immunity**",
    "description": "Gives target an immunity to X effect for the duration of the immunity effect. \n(X = Shock/Burn/Chill/Poison/Bleed/Confuse/Stun/Charm)",
    "thumbnail": {"url": "https://i.postimg.cc/8CbhSpcP/Immunity-to-Charm.png"},"image": {"url": ""},
    "fields": [{"name":"Traits","value": "Affected","inline":true},{"name":"Notice","value": "Immunity does not cure an effect","inline":true}]}
  });
  }
  this.effectinterrupt = function (message){
    message.channel.send({"embed": {"title": "**Interrupt**",
    "description": "On hit Interrupt will increase the target current casting card by +1 up to initial cast value.",
    "thumbnail": {"url": "https://i.postimg.cc/nLxvgjHP/Interrupt.png"},"image": {"url": ""},
    "fields": [{"name":"Notice","value": "Affected by Haste/Slow/Chill effects","inline":true}]}
  });
  }
  this.effectleech = function (message){
    message.channel.send({"embed": {"title": "**Leech**",
    "description": "All the damage dealt to target opponent heals the caster.",
    "thumbnail": {"url": "https://i.postimg.cc/fLTYWGS7/Leech.png"},"image": {"url": ""},
    "fields": [{"name":"Combo","value": "-Effect Bleedout","inline":true}]}
  });
  }
  this.effectmultitarget = function (message){
    message.channel.send({"embed": {"title": "**Multi-Target**",
    "description": "Card will deal its full value damage to __all enemies__. / Card will heal all its value equally to both your heroes.",
    "thumbnail": {"url": "https://i.postimg.cc/4NP0Skk6/Multi-Target.png "},"image": {"url": ""},
    "fields": [{"name":"____","value": "___","inline":true}]}
  });
  }
  this.effectpierce = function (message){
    message.channel.send({"embed": {"title": "**Pierce**",
    "description": "The attack will completely bypass any shield target opponent has and deal damage directly to HP.",
    "thumbnail": {"url": "https://i.postimg.cc/xjXtKmqv/Pierce.png"},"image": {"url": ""},
    "fields": [{"name":"____","value": "___","inline":true}]}
  });
  }
  this.effectrandom = function (message){
    message.channel.send({"embed": {"title": "**Random-Target**",
    "description": "Regardless of who you target with a single/splash attack you have a XX% chance of hitting other target opponent instead.",
    "thumbnail": {"url": "https://i.postimg.cc/6pXcJ1cc/Random-Target.png"},"image": {"url": ""},
    "fields": [{"name":"____","value": "___","inline":true}]}
  });
  }
  this.effectrecoil = function (message){
    message.channel.send({"embed": {"title": "**Recoil**",
    "description": "The caster will deal X damage to itself when attacking.",
    "thumbnail": {"url": "https://i.postimg.cc/s2fJ1QtZ/Recoil.png"},"image": {"url": ""},
    "fields": [{"name":"____","value": "___","inline":true}]}
  });
  }
  this.effectregen = function (message){
    message.channel.send({"embed": {"title": "**Regen**",
    "description": "Card heal value is divided by the effect turn duration and then regenerates X amount of health every turn.",
    "thumbnail": {"url": "https://i.postimg.cc/KvLfWyP4/Regen.png"},"image": {"url": ""},
    "fields": [{"name":"Counter","value": "Break","inline":true}]}
  });
  }
  this.effectreset = function (message){
    message.channel.send({"embed": {"title": "**Reset**",
    "description": "On hit will reset the target currently casting card count to its __original turn count__ value.",
    "thumbnail": {"url": "https://i.postimg.cc/6pf09L1X/Reset.png"},"image": {"url": ""},
    "fields": [{"name":"Notice","value": "Affected by Haste/Slow/Chill effects","inline":true}]}
  });
  }
  this.effectsap = function (message){
    message.channel.send({"embed": {"title": "**Sap**",
    "description": "All the damage dealt to target is divided by the duration of the effect and then regenerates the caster by X amount every turn.",
    "thumbnail": {"url": "https://i.postimg.cc/pd0JjVHc/Sap.png"},"image": {"url": ""},
    "fields": [{"name":"____","value": "___","inline":true}]}
  });
  }
  this.effectsplash = function (message){
    message.channel.send({"embed": {"title": "**Splash**",
    "description": "Card will deal its full value damage to target enemy and 50% to side enemies. / Card will heal its full value to target hero and 50% to the other hero.",
    "thumbnail": {"url": "https://i.postimg.cc/y63yJzrn/Splash-Damage.png"},"image": {"url": ""},
    "fields": [{"name":"____","value": "___","inline":true}]}
  });
  }
  this.effectwarp = function (message){
    message.channel.send({"embed": {"title": "**Warp**",
    "description": "The __cards on hand__ of the affected target will Haste/Slow randomly within a range of +/-3?.",
    "thumbnail": {"url": "https://i.postimg.cc/gJX86v4r/Warp.png"},"image": {"url": ""},
    "fields": [{"name":"____","value": "___","inline":true}]}
  });
  }
  this.effectunaware = function (message){
    message.channel.send({"embed": {"title": "**Unaware/Surprised**",
    "description": "Attack will deal double damage to __Unaware targets__. Targets that are under the following effects are __considered Unaware Confuse/Sleep/Stun/Bamboozle__",
    "thumbnail": {"url": "https://i.postimg.cc/GpnQRgjz/Double-Damage.png"},"image": {"url": ""},
    "fields": [{"name":"____","value": "___","inline":true}]}
  });
  }
  this.effectperfectshot = function (message){
    message.channel.send({"embed": {"title": "**Perfect Shot**",
    "description": "Cards with this effect will __always hit a target__ completely ignoring any accuracy/agility effects the target has.",
    "thumbnail": {"url": "https://i.postimg.cc/P5tjCQh4/Perfect-Shot.png"},"image": {"url": ""},
    "fields": [{"name":"Usefull","value": "VS Accuracy Down/Evade effects","inline":true}]}
  });
  }
  this.effectshieldbind = function (message){
    message.channel.send({"embed": {"title": "**Shield Bind**",
    "description": "Cards with this effect will add 50% of __any shield value the caster has__ at time of hit to the original attack value.",
    "thumbnail": {"url": "https://i.postimg.cc/g0jbDcxL/Shield-Bind.png"},"image": {"url": ""},
    "fields": [{"name":"____","value": "___","inline":true}]}
  });
  }
  //DoT and weakness effects.
  /////////////////////////////////////////////////////////
  this.effectburn = function (message){
    message.channel.send({"embed": {"title": "**Burn**",
    "description": "This effect will deal 60% of damage dealt by the attack to the target as DoT for the duration. \n(Burn is a __decreasing DoT__ every turn will deal less damage)",
    "thumbnail": {"url": "https://i.postimg.cc/cLrjCzwS/Burn.png"},"image": {"url": ""},
    "fields": [{"name":"Combo","value": "-Effect Douse","inline":true}]}
  });
  }
  this.effectpoison = function (message){
    message.channel.send({"embed": {"title": "**Poison**",
    "description": "This effect will deal 60% of damage dealt by the attack to the target as DoT for the duration. \n(Poison is a flat value DoT deals the same damage every turn)",
    "thumbnail": {"url": "https://i.postimg.cc/Y2T88SmJ/Poison.png"},"image": {"url": ""},
    "fields": [{"name":"Combo","value": "-Effect Afterburn","inline":true}]}
  });
  }
  this.effectshock = function (message){
    message.channel.send({"embed": {"title": "**Shock**",
    "description": "This effect will deal 60% of damage dealt by the attack to the target as DoT for the duration. \n(Shock is a flat value DoT deals the same damage every turn)",
    "thumbnail": {"url": "https://i.postimg.cc/d1LmjMQs/Shock.png"},"image": {"url": ""},
    "fields": [{"name":"Combo","value": "-Effect Electrocute","inline":true}]}
  });
  }
  this.effectbleed = function (message){
    message.channel.send({"embed": {"title": "**Bleed**",
    "description": "This effect will deal 60% of damage dealt by the attack to the target as DoT for the duration. \n(Bleed is an __increasing DoT__ every turn will increase its damage)",
    "thumbnail": {"url": "https://i.postimg.cc/jd8msTWc/Bleed.png"},"image": {"url": ""},
    "fields": [{"name":"Combo","value": "-Effect Bleedout","inline":true}]}
  });
  }
  this.effectdrown = function (message){
    message.channel.send({"embed": {"title": "**Drown**",
    "description": "This effect will deal an additional 100% of damage dealt by the attack to target the __after X number of turns pass__.",
    "thumbnail": {"url": "https://i.postimg.cc/JnPcbrCd/Drown.png"},"image": {"url": ""},
    "fields": [{"name":"Combo","value": "-Effect Electrocute","inline":true}]}
  });
  }
  this.effectextendburn = function (message){
    message.channel.send({"embed": {"title": "**Extend Burn**",
    "description": "This effect wil increase the Burn effect __DoT and duration__ by + 100% \n(Burn being a decreasing DoT effect extending it does less damage every turn)",
    "thumbnail": {"url": "https://i.postimg.cc/4y06SWd6/Extend-Burn.png"},"image": {"url": ""},
    "fields": [{"name":"Combo","value": "-Effect Defrost","inline":true}]}
  });
  }
  this.effectextendpoison = function (message){
    message.channel.send({"embed": {"title": "**Extend Poison**",
    "description": "This effect wil increase the Poison effect __DoT and duration__ by + 100%",
    "thumbnail": {"url": "https://i.postimg.cc/mZpykgwP/Extend-Poison.png"},"image": {"url": ""},
    "fields": [{"name":"Combo","value": "-Effect Afterburn","inline":true}]}
  });
  }
  this.effectextendshock = function (message){
    message.channel.send({"embed": {"title": "**Extend Shock**",
    "description": "This effect wil increase the Shock effect __DoT and duration__ by + 100%",
    "thumbnail": {"url": "https://i.postimg.cc/fT2bhR65/Extend-Shock.png "},"image": {"url": ""},
    "fields": [{"name":"Combo","value": "-Effect Electrocute","inline":true}]}
  });
  }
  this.effectextendbleed = function (message){
    message.channel.send({"embed": {"title": "**Extend Bleed**",
    "description": "This effect wil increase the Bleed effect __DoT and duration__ by + 100% \n(Bleed being an increasing DoT effect extending it leads to unlimited damage)",
    "thumbnail": {"url": "https://i.postimg.cc/L66s710n/Extend-Bleed.png"},"image": {"url": ""},
    "fields": [{"name":"Combo","value": "-Effect Bleedout","inline":true}]}
  });
  }
  this.effectweakfire = function (message){
    message.channel.send({"embed": {"title": "**Weak to Fire/Oil**",
    "description": "Effect will increase __all damage taken from Fire sources__ by 50%. \n(If hit by Fire element __attack__ the effect ends)",
    "thumbnail": {"url": "https://i.postimg.cc/25CZTsGp/Oil.png"},"image": {"url": ""},
    "fields": [{"name":"Traits","value": "Affected","inline":true},{"name":"Usefull","value": "Burn DoT is increased by this","inline":true}]}
  });
  }
  this.effectweakearth = function (message){
    message.channel.send({"embed": {"title": "**Weak to Earth/Terra**",
    "description": "Effect will increase __all damage taken from Earth sources__ by 50%. \n(If hit by Earth element __attack__ the effect ends)",
    "thumbnail": {"url": "https://i.postimg.cc/Dw6rVf8f/Terra.png"},"image": {"url": ""},
    "fields": [{"name":"Traits","value": "Affected","inline":true},{"name":"Usefull","value": "Poison DoT is increased by this","inline":true}]}
  });
  }
  this.effectweakair = function (message){
    message.channel.send({"embed": {"title": "**Weak to Air/Storm**",
    "description": "Effect will increase __all damage taken from Air sources__ by 50%. \n(If hit by Air element __attack__ the effect ends)",
    "thumbnail": {"url": "https://i.postimg.cc/qMfXyZPr/Storm.png"},"image": {"url": ""},
    "fields": [{"name":"Traits","value": "Affected","inline":true},{"name":"Usefull","value": "Shock DoT is increased by this","inline":true}]}
  });
  }
  this.effectweakspirit = function (message){
    message.channel.send({"embed": {"title": "**Weak to Spirit/Darken**",
    "description": "Effect will increase __all damage taken from Spirit sources__ by 50%. \n(If hit by Spirit element __attack__ the effect ends)",
    "thumbnail": {"url": "https://i.postimg.cc/7PKmzVxY/Darken.png"},"image": {"url": ""},
    "fields": [{"name":"Traits","value": "Affected","inline":true}]}
  });
  }
  this.effectweakwater = function (message){
    message.channel.send({"embed": {"title": "**Weak to Water/Wet**",
    "description": "Effect will increase __all damage taken from Water sources__ by 50%. \n(If hit by Water element __attack__ the effect ends)",
    "thumbnail": {"url": "https://i.postimg.cc/FKKjhtLy/Wet.png"},"image": {"url": ""},
    "fields": [{"name":"Traits","value": "Affected","inline":true},{"name":"Usefull","value": "Water DaT is increased by this","inline":true}]}
  });
  }
  
}
let EffectReplies = new EffectManager();
module.exports = EffectReplies;

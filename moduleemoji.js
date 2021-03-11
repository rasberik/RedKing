var Up = ":arrow_double_up:";
var Star = ":star:";

var DefaultStar = ":star:";
var DefaultUp = ":arrow_double_up:";
var DefaultMinus = ":heavy_minus_sign:";

var ChristmasTree = ":christmas_tree:";
var Santa = ":mrs_claus:";

var Pumpkin = ":jack_o_lantern:";
var Skull = ":skull:";

var Cupid = ":cupid:";
var Love = ":gift_heart:";

var CrystalNeutral = "<:CrystalNeutral:743390656428507136>";
var CrystalFire = "<:CrystalFire:743390656755531887>";
var CrystalEarth = "<:CrystalEarth:743390657002864660>";
var CrystalSpirit = "<:CrystalSpirit:743390657045069895>";
var CrystalAir = "<:CrystalAir:743390657241940008>";
var CrystalWater = "<:CrystalWater:743390657355186216>";

var ElementAir = "<:ElementAir:743390719800115252>";
var ElementSpirit = "<:ElementSpirit:743390719992922113>";
var ElementEarth = "<:ElementEarth:743390720118751293>";
var ElementFire = "<:ElementFire:743390720316145684>";
var ElementWater = "<:ElementWater:743390720567672894>";

var ClassMight = "<:ClassMight:743391581540843530>";
var ClassMagic = "<:ClassMagic:743391581557751868>";
var ClassSkill = "<:ClassSkill:743391581834575873>";

var HFMonty = "<:HFMonty:743390945105412196>";
var HFFergus = "<:HFFergus:743390944136790076>";
var HFRed = "<:HFRed:743390944568541275>";
var HETrix = "<:HETrix:743390943905841274>";
var HEThrudd = "<:HEThrudd:743390944270745700>";
var HEBree = "<:HEBree:743390944245841970>";
var HABrom = "<:HABrom:743390944254230631>";
var HAHawkeye = "<:HAHawkeye:743390944916930640>";
var HSKrell = "<:HSKrell:743390944380059779>";
var HSJinx = "<:HSJinx:743390945311195136>";
var HWLogan = "<:HWLogan:743390944006766652>";
var HWGilda = "<:HWGilda:743390944325533746>";
var HWPeg = "<:HWPeg:743390944417546260>";

var ItemGem = "<:ItemGem:743391061069791253>";
var ItemCoin = "<:ItemCoin:743391060654424126>";
var ItemFragments = "<:ItemFragments:743391060834910301>";
var ItemFame = "<:ItemFame:743391060956282911>";
var ItemSandsOfTime = "<:ItemSandsOfTime:755284903829962762>";
var ItemJar = "<:ItemJar:800700713444442113>";
//var RaidTicket = "<:RaidTicket:743391699996246110>";

var Rank1Member = "<:Rank1Member:743391061174386739>";
var Rank2Elder = "<:Rank2Elder:743391061053014068>";
var Rank3General = "<:Rank3General:743391061145288754>";
var Rank4Leader = "<:Rank4Leader:743391060994031616>";

var CardWildSuperRare = "<:CardWildSuperRare:743391416692244581>";
var CardWildLegendary = "<:CardWildLegendary:743391416868143185>";

var KeyRuby = "<:KeyRuby:743391700298235905>";
var KeySilver = "<:KeySilver:743391700541636649>";
var KeyGold = "<:KeyGold:743391700872986624>";
var KeyWar = "<:KeyWar:800697932667420743>";
var KeyFury = "<:KeyFury:800697932914360360>";

var Snowballs = "<:XPSnowballs:800698347911512115>";
var Robin = "<:XPRobin:800698348067487755>";
var Crystal = "<:XPCrystal:800698641248682004>";

var CardBattle = "<:CardBattle:755285291287314432>";
var CardWild = "<:CardWild:755285291375263785>";
var CardBrag = "<:CardBrag:757400142050492507>";

module.exports = {
  
  Up,
  Star,
  
  DefaultStar,
  DefaultUp,
  DefaultMinus,
  
  ChristmasTree,
  Santa,
  
  Pumpkin,
  Skull,
  
  Cupid,
  Love,
  
  Snowballs,
  Robin,
  Crystal,
  
  CrystalNeutral,
  CrystalFire,
  CrystalEarth,
  CrystalSpirit,
  CrystalAir,
  CrystalWater,
  
  ElementAir,
  ElementSpirit,
  ElementEarth,
  ElementFire,
  ElementWater,
  
  ClassMight,
  ClassMagic,  
  ClassSkill,
  
  HETrix,
  HWLogan,
  HFFergus,
  HEBree,
  HABrom,
  HEThrudd,
  HWGilda,
  HSKrell,
  HWPeg,
  HFRed,
  HAHawkeye,
  HFMonty,
  HSJinx,
  
  ItemGem,
  ItemCoin,
  ItemFragments,
  ItemFame,
  ItemSandsOfTime,
  ItemJar,
  
  Rank1Member,
  Rank2Elder,
  Rank3General,
  Rank4Leader,
  
  CardWildSuperRare,
  CardWildLegendary,
  
  KeyRuby,
  KeySilver,
  KeyGold,
  KeyWar,
  KeyFury,
  
  CardBattle,
  CardWild,  
  CardBrag,
  
  ClassMap: {
    "fire": {
        "magic": HFMonty,
        "skill": HFRed,
        "might": HFFergus
    },
    "earth": {
        "magic": HETrix,
        "skill": HEBree,
        "might": HEThrudd
    },
    "water": {
        "magic": HWLogan,
        "skill": HWPeg,
        "might": HWGilda
    },
    "spirit": {
        "magic": HSKrell,
        "skill": HSJinx,
        "might": ""
    },
    "air": {
        "magic": "",
        "skill": HAHawkeye,
        "might": HABrom
    },
    "neutral": {
        "magic": ClassMagic,
        "skill": ClassSkill,
        "might": ClassMight
    },
  },
  
  RarityMap: {
    1: Rank1Member,
    2: Rank2Elder,
    3: Rank3General,
    4: Rank4Leader     
  }
  
}
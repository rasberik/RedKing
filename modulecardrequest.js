let CardReplies = require('./modulecard.js');
let searchCardReply = function(command, prefix, message) {
  //console.log(command)
  //console.log(prefix)
  if (command === (prefix+"op")) {
    CardReplies.opcards(message);
  } else
  
  if (command.includes (prefix+"cardoriginal")) {
    CardReplies.cardoriginal(message);
  } else
  if (command.includes (prefix+"acidsplash")||(command.includes (prefix+"acid"))) {
      CardReplies.acidsplash(message);
  } else
  if (command.includes (prefix+"bearded")) {
      CardReplies.beardedhatchet(message);
  } else
  if (command.includes (prefix+"spice")) {
      CardReplies.thespice(message);
  } else
  if (command.includes (prefix+"vigilant")) {
      CardReplies.vigilantshield(message);
  } else
  if (command.includes (prefix+"apollosarrow")||(command.includes (prefix+"apollo"))) {
      CardReplies.apollosarrow(message);
  } else
  if (command.includes (prefix+"adorablepugs")||(command.includes (prefix+"adorable")||(command.includes (prefix+"pugs")))) {
      CardReplies.adorablepugs(message);
  } else
  if (command.includes (prefix+"annoyingelves")||(command.includes (prefix+"annoying")||(command.includes (prefix+"elves")))) {
      CardReplies.annoyingelves(message);
  } else
  if (command.includes (prefix+"ancientmariner")||(command.includes (prefix+"ancient")||(command.includes (prefix+"mariner")))) {
      CardReplies.ancientmariner(message);
  } else
  if (command.includes (prefix+"apnoea")) {
      CardReplies.apnoea(message);
  } else
  if (command.includes (prefix+"asceticlesson")||(command.includes (prefix+"ascetic")||(command.includes("lesson")))) {
       CardReplies.asceticlesson(message);
  } else
  if (command.includes (prefix+"arcanegrenade")) {
      CardReplies.arcanegrenade(message);
  } else
  if (command.includes (prefix+"arcanemissile")) {
      CardReplies.arcanemissile(message);
  } else
  if (command.includes (prefix+"avalanche")) {
      CardReplies.avalanche(message);
  } else
  if (command.includes (prefix+"backstab")) {
      CardReplies.backstab(message);
  } else
  if (command.includes (prefix+"barriercrusher")||(command.includes (prefix+"crusher"))) {
      CardReplies.barriercrusher(message);
  } else
  if (command.includes (prefix+"blackspot")||(command.includes (prefix+"black")||(command.includes (prefix+"spot")))) {
      CardReplies.blackspot(message);
  } else
  if (command.includes (prefix+"blazefury")||(command.includes (prefix+"blaze"))) {
      CardReplies.blazefury(message);
  } else
  if (command.includes (prefix+"blazingray")||(command.includes (prefix+"blazing"))) {
      CardReplies.blazingray(message);
  } else
  if (command.includes (prefix+"bleedingdagger")) {
      CardReplies.bleedingdagger(message);
  } else
  if (command.includes (prefix+"bleedingedge")) {
      CardReplies.bleedingedge(message);
  } else
  if (command.includes (prefix+"bleedingheart")) {
      CardReplies.bleedingheart(message);
  } else
  if (command.includes (prefix+"bleedingthorn")||(command.includes (prefix+"thorn"))) {
      CardReplies.bleedingthorn(message);
  } else
  if (command.includes (prefix+"blindingflame")) {
      CardReplies.blindingflame(message);
  } else
  if (command.includes (prefix+"blindingspirit")) {
      CardReplies.blindingspirit(message);
  } else
  if (command.includes (prefix+"bloodthirster")||(command.includes (prefix+"thirster"))) {
      CardReplies.bloodthirster(message);
  } else
  if (command.includes (prefix+"boilingcoffee")||(command.includes (prefix+"boiling")||(command.includes (prefix+"coffee")))) {
      CardReplies.boilingcoffee(message);
  } else
  if (command.includes (prefix+"boxoffrogs")||(command.includes (prefix+"box")||(command.includes (prefix+"frogs")||(command.includes (prefix+"bof"))))) {
      CardReplies.boxoffrogs(message);
  } else
  if (command.includes (prefix+"breakingchakra")||(command.includes (prefix+"breaking")||(command.includes (prefix+"chakra")))) {
      CardReplies.breakingchakra(message);
  } else
  if (command.includes (prefix+"bullseye")||(command.includes (prefix+"bull"))) {
      CardReplies.bullseye(message);
  } else
  if (command.includes (prefix+"burningblade")) {
      CardReplies.burningblade(message);
  } else
  if (command.includes (prefix+"burningblast")||(command.includes (prefix+"blast"))) {
      CardReplies.burningblast(message);
  } else
  if (command.includes (prefix+"burningclub")) {
      CardReplies.burningclub(message);
  } else
  if (command.includes (prefix+"burningdagger")) {
      CardReplies.burningdagger(message);
  } else
  if (command.includes (prefix+"burningdisc")) {
      CardReplies.burningdisc(message);
  } else
  if (command.includes (prefix+"burninggrenade")) {
      CardReplies.burninggrenade(message);
  } else
  if (command.includes (prefix+"burningmissile")) {
      CardReplies.burningmissile(message);
  } else
  if (command.includes (prefix+"bysonshield")||(command.includes (prefix+"byson"))) {
      CardReplies.bysonshield(message);
  } else
  if (command.includes (prefix+"cabertoss")||(command.includes (prefix+"caber")||(command.includes (prefix+"toss")))) {
      CardReplies.cabertoss(message);
  } else
  if (command.includes (prefix+"candycauldron")||(command.includes (prefix+"candy")||(command.includes (prefix+"cauldron")))) {
      CardReplies.candycauldron(message);
  } else
  if (command.includes (prefix+"caribbeancocktail")||(command.includes (prefix+"caribbean")||(command.includes (prefix+"cocktail")))) {
      CardReplies.caribbeancocktail(message);
  } else
  if (command.includes (prefix+"channelingchi")||(command.includes (prefix+"channel")||command === (prefix+"chi"))) {
      CardReplies.channelingchi(message);
  } else
  if (command.includes (prefix+"charmofmaking")||(command.includes (prefix+"charm")||(command.includes (prefix+"making")))) {
      CardReplies.charmofmaking(message);
  } else
  if (command.includes (prefix+"chargedshield")||(command.includes (prefix+"charged"))) {
      CardReplies.chargedshield(message);
  } else
  if (command.includes (prefix+"chillaxe")) {
      CardReplies.chillaxe(message);
  } else
  if (command.includes (prefix+"chillblade")) {
      CardReplies.chillblade(message);
  } else
  if (command.includes (prefix+"chillclub")) {
      CardReplies.chillclub(message);
  } else
  if (command.includes (prefix+"chillgrenade")) {
      CardReplies.chillgrenade(message);
  } else
  if (command.includes (prefix+"chillmissile")) {
      CardReplies.chillmissile(message);
  } else
  if (command.includes (prefix+"chillstone")||(command.includes (prefix+"stone"))) {
      CardReplies.chillstones(message);
  } else
  if (command.includes (prefix+"chillingjab")||(command.includes (prefix+"chilljab")||(command.includes (prefix+"jab")))) {
      CardReplies.chillingjab(message);
  } else
  if (command.includes (prefix+"chillingshard")||(command.includes (prefix+"chillshard"))) {
      CardReplies.chillingshards(message);
  } else
  if (command.includes (prefix+"christmastree")||(command.includes (prefix+"christmas")||(command.includes (prefix+"tree")))) {
      CardReplies.christmastree(message);
  } else
  if (command.includes (prefix+"clayshower")||(command.includes (prefix+"clay"))) {
      CardReplies.clayshower(message);
  } else
  if (command.includes (prefix+"cleansingchalice")||(command.includes (prefix+"cleansing")||(command.includes (prefix+"chalice")))) {
      CardReplies.cleansingchalice(message);
  } else
  if (command.includes (prefix+"cloakofflames")||(command.includes (prefix+"cof"))) {
      CardReplies.cloakofflames(message);
  } else
  if (command.includes (prefix+"cloakparty")) {
      CardReplies.cloakparty(message);
  } else
  if (command.includes (prefix+"cloaked")) {
      CardReplies.cloaked(message);
  } else
  if (command.includes (prefix+"combustibolt")||(command.includes("combust"))) {
      CardReplies.combustibolt(message);
  } else
  if (command.includes (prefix+"confusecloud")) {
      CardReplies.confusecloud(message);
  } else
  if (command.includes (prefix+"confusedart")) {
      CardReplies.confusedart(message);
  } else
  if (command.includes (prefix+"confusegrenade")) {
      CardReplies.confusegrenade(message);
  } else
  if (command.includes (prefix+"cornholio")) {
      CardReplies.cornholio(message);
  } else
  if (command.includes (prefix+"cripplingbolt")||(command.includes (prefix+"crippbolt"))) {
      CardReplies.cripplingbolt(message);
  } else
  if (command.includes (prefix+"cripplingspell")||(command.includes (prefix+"crippspell"))) {
      CardReplies.cripplingspell(message);
  } else
  if (command.includes (prefix+"daggeroftruth")||(command.includes (prefix+"truth"))) {
      CardReplies.daggeroftruth(message);
  } else
  if (command.includes (prefix+"darkenmissile")||(command.includes (prefix+"darken"))) {
      CardReplies.darkenmissile(message);
  } else
  if (command.includes (prefix+"darknessspike")||(command.includes (prefix+"darkness"))) {
      CardReplies.darknessspike(message);
  } else
  if (command.includes (prefix+"deadlyvenom")||(command.includes (prefix+"deadly"))) {
      CardReplies.deadlyvenom(message);
  } else
  if (command.includes (prefix+"deepbreath")||(command.includes (prefix+"deep")||(command.includes (prefix+"breath")))) {
      CardReplies.deepbreath(message);
  } else
  if (command.includes (prefix+"defensivestrike")||(command.includes (prefix+"defensive"))) {
      CardReplies.defensivestrike(message);
  } else
  if (command.includes (prefix+"defrostamulet")||(command.includes (prefix+"defrost"))) {
      CardReplies.defrostamulet(message);
  } else
  if (command.includes (prefix+"destructivearrow")||(command.includes (prefix+"destructive"))) {
      CardReplies.destructivearrow(message);
  } else
  if (command.includes (prefix+"dirtybomb")||(command.includes (prefix+"dirty"))) {
      CardReplies.dirtybomb(message);
  } else
  if (command.includes (prefix+"dischargingray")||(command.includes (prefix+"discharg"))) {
      CardReplies.dischargingray(message);
  } else
  if (command.includes (prefix+"divertingarrow")) {
      CardReplies.divertingarrow(message);
  } else
  if (command.includes (prefix+"divertingdart")) {
      CardReplies.divertingdart(message);
  } else
  if (command.includes (prefix+"divertingdisc")) {
      CardReplies.divertingdisc(message);
  } else
  if (command.includes (prefix+"divertingpin")) {
      CardReplies.divertingpin(message);
  } else
  if (command.includes (prefix+"divertingspike")) {
      CardReplies.divertingspike(message);
  } else
  if (command.includes (prefix+"divertingtip")) {
      CardReplies.divertingtip(message);
  } else
  if (command.includes (prefix+"divinestorm")) {
      CardReplies.divinestorm(message);
  } else
  if (command.includes (prefix+"divinethunder")) {
      CardReplies.divinethunder(message);
  } else
  if (command.includes (prefix+"dragonslayer")||(command.includes (prefix+"dragonslay"))) {
      CardReplies.dragonslayer(message);
  } else
  if (command.includes (prefix+"dragonskin")) {
      CardReplies.dragonskin(message);
  } else
  if (command.includes (prefix+"dropshield")||(command.includes (prefix+"drop"))) {
      CardReplies.dropshield(message);
  } else
  if (command.includes (prefix+"earthquake")) {
      CardReplies.earthquake(message);
  } else
  if (command.includes (prefix+"eastereggs")||(command.includes (prefix+"easter")||(command.includes (prefix+"eggs")))) {
      CardReplies.eastereggs(message);
  } else
  if (command.includes (prefix+"electricshot")||(command.includes (prefix+"electric"))) {
      CardReplies.electricshot(message);
  } else
  if (command.includes (prefix+"elvenprecision")||(command.includes("elven"))) {
      CardReplies.elvenprecision(message);
  } else
  if (command.includes (prefix+"epicentre")||(command.includes("epicen"))) {
      CardReplies.epicentre(message);
  } else
  if (command.includes (prefix+"espressoshot")||(command.includes (prefix+"espresso"))) {
      CardReplies.espressoshot(message);
  } else
  if (command.includes (prefix+"etherealguardian")||(command.includes (prefix+"ethereal")||(command.includes (prefix+"guardian")))) {
      CardReplies.etherealguardian(message);
  } else
  if (command.includes (prefix+"explosivebag")) {
      CardReplies.explosivebag(message);
  } else
  if (command.includes (prefix+"explosivegadget")||(command.includes (prefix+"gadget"))) {
      CardReplies.explosivegadget(message);
  } else
  if (command.includes (prefix+"fairyblessing")||(command.includes (prefix+"blessing"))) {
      CardReplies.fairyblessing(message);
  } else
  if (command.includes (prefix+"fairyshield")) {
      CardReplies.fairyshield(message);
  } else
  if (command.includes (prefix+"fafnirsblood")||(command.includes (prefix+"fafnir"))) {
      CardReplies.fafnirsblood(message);
  } else
  if (command.includes (prefix+"faradayamulet")||(command.includes (prefix+"faraday"))) {
      CardReplies.faradayamulet(message);
  } else
  if (command.includes (prefix+"feedtheflames")||(command.includes (prefix+"ftf"))) {
      CardReplies.feedtheflames(message);
  } else
  if (command.includes (prefix+"feedthetoxins")||(command.includes (prefix+"ftt"))) {
      CardReplies.feedthetoxins(message);
  } else
  if (command.includes (prefix+"fellcrestlullaby")||(command.includes (prefix+"fellcrest")||(command.includes (prefix+"lulla")))) {
      CardReplies.fellcrestlullaby(message);
  } else
  if (command.includes (prefix+"fieryaxe")) {
      CardReplies.fieryaxe(message);
  } else
  if (command.includes (prefix+"fierystars")) {
      CardReplies.fierystars(message);
  } else
  if (command.includes (prefix+"firebolt")) {
      CardReplies.firebolt(message);
  } else
  if (command.includes (prefix+"firestorm")) {
      CardReplies.firestorm(message);
  } else
  if (command.includes (prefix+"firewall")||(command.includes (prefix+"wall"))) {
      CardReplies.firewall(message);
  } else
  if (command.includes (prefix+"flameon")) {
      CardReplies.flameon(message);
  } else
  if (command.includes (prefix+"flashoflightning")||(command.includes (prefix+"flash"))) {
      CardReplies.flashoflightning(message);
  } else
  if (command.includes (prefix+"flaredup")||(command.includes (prefix+"flared"))) {
      CardReplies.flaredup(message);
  } else
  if (command.includes (prefix+"forestbarrier")||(command.includes (prefix+"forest"))) {
      CardReplies.forestbarrier(message);
  } else
  if (command.includes (prefix+"frostbiteshield")||(command.includes (prefix+"frostbite"))) {
      CardReplies.frostbiteshield(message);
  } else
  if (command.includes (prefix+"frostray")) {
      CardReplies.frostray(message);
  } else
  if (command.includes (prefix+"fuelthefire")||(command.includes("fuel"))) {
      CardReplies.fuelthefire(message);
  } else
  if (command.includes (prefix+"fumingbunny")||(command.includes (prefix+"fuming")||(command.includes (prefix+"bunny")))) {
      CardReplies.fumingbunny(message);
  } else
  if (command.includes (prefix+"furiousfist")||(command.includes (prefix+"furious")||(command.includes (prefix+"fist")))) {
      CardReplies.furiousfist(message);
  } else
  if (command.includes (prefix+"glacier")) {
      CardReplies.glacier(message);
  } else
  if (command.includes (prefix+"gravybarrel")||(command.includes (prefix+"gravy")||(command.includes("barrel")))) {
      CardReplies.gravybarrel(message);
  } else
  if (command.includes (prefix+"greatballoffire")||(command.includes (prefix+"greatball")||(command.includes("fireball")||(command.includes (prefix+"gbof"))))) {
      CardReplies.greatballoffire(message);
  } else
  if (command.includes (prefix+"greenray") || command.includes (prefix+"green")){
      CardReplies.greenray(message);
  } else
  if (command.includes (prefix+"grogbottle")||(command.includes (prefix+"grog")||(command.includes("bottle")))) {
      CardReplies.grogbottle(message);
  } else
  if (command.includes (prefix+"guidedog")||(command.includes (prefix+"guide")||(command.includes("dog")))) {
      CardReplies.guidedog(message);
  } else
  if (command.includes (prefix+"guidingstar")||(command.includes (prefix+"guiding"))) {
      CardReplies.guidingstar(message);
  } else
  if (command.includes (prefix+"hammerofgod")||(command.includes (prefix+"hammer")||(command.includes (prefix+"hog")))) {
      CardReplies.hammerofgod(message);
  } else
  if (command.includes (prefix+"hardluck")||(command.includes (prefix+"hard"))) {
      CardReplies.hardluck(message);
  } else
  if (command.includes (prefix+"hastyarrow")||(command.includes (prefix+"hasty"))) {
      CardReplies.hastyarrow(message);
  } else
  if (command.includes (prefix+"healinglight")||(command.includes (prefix+"heallight"))) {
      CardReplies.healinglight(message);
  } else
  if (command.includes (prefix+"healingoil")||(command.includes (prefix+"healoil"))) {
      CardReplies.healingoils(message);
  } else
  if (command.includes (prefix+"healingsoul")||(command.includes (prefix+"healsoul")||(command.includes (prefix+"soul")))) {
      CardReplies.healingsoul(message);
  } else
  if (command.includes (prefix+"healingsplash")||(command.includes (prefix+"healsplash"))) {
      CardReplies.healingsplash(message);
  } else
  if (command.includes (prefix+"heartbreaker")||(command.includes (prefix+"heart"))) {
      CardReplies.heartbreaker(message);
  } else
  if (command.includes (prefix+"hex")) {
      CardReplies.hex(message);
  } else
  if (command.includes (prefix+"hoistthecolours")||(command.includes (prefix+"hoist")||(command.includes (prefix+"colours")||(command.includes (prefix+"htc"))))) {
      CardReplies.hoistthecolours(message);
  } else
  if (command.includes (prefix+"holyshower")||(command.includes (prefix+"holy"))) {
      CardReplies.holyshower(message);
  } else
  if (command.includes (prefix+"hotboulder")) {
      CardReplies.hotboulder(message);
  } else
  if (command.includes (prefix+"hotchestnuts")||(command.includes (prefix+"hotchest")||(command.includes (prefix+"chest")||(command.includes (prefix+"nuts"))))) {
      CardReplies.hotchestnuts(message);
  } else
  if (command.includes (prefix+"hurricanebarrier")||(command.includes (prefix+"hurricane"))) {
      CardReplies.hurricanebarrier(message);
  } else
  if (command.includes (prefix+"icebolt")) {
      CardReplies.icebolt(message);
  } else
  if (command.includes (prefix+"iceshard")) {
      CardReplies.iceshard(message);
  } else
  if (command.includes (prefix+"icequeenprotector")||(command.includes (prefix+"icequeen")||(command.includes (prefix+"protector")))) {
      CardReplies.icequeen(message);
  } else
  if (command.includes (prefix+"igniferroque")||(command.includes (prefix+"igni")||(command.includes (prefix+"ferroq")))) {
      CardReplies.igniferroque(message);
  } else
  if (command.includes (prefix+"impaleshield")||(command.includes (prefix+"impale"))) {
      CardReplies.impaleshield(message);
  } else
  if (command.includes (prefix+"interruptarrow")) {
      CardReplies.interruptarrow(message);
  } else
  if (command.includes (prefix+"interruptsword")) {
      CardReplies.interruptsword(message);
  } else
  if (command.includes (prefix+"ironbreak")||(command.includes (prefix+"iron"))) {
      CardReplies.ironbreak(message);
  } else
  if (command.includes (prefix+"ivywoodamulet")) {
      CardReplies.ivywoodamulet(message);
  } else
  if (command.includes (prefix+"ivywoodpiercer")) {
      CardReplies.ivywoodpiercer(message);
  } else
  if (command.includes (prefix+"justicar")) {
      CardReplies.justicar(message);
  } else
  if (command.includes (prefix+"karmicblessing")) {
      CardReplies.karmicblessing(message);
  } else
  if (command.includes (prefix+"karmicprotection")) {
      CardReplies.karmicprotection(message);
  } else
  if (command.includes (prefix+"karmickkick")) {
      CardReplies.karmickkick(message);
  } else
  if (command.includes (prefix+"kelpiescall")||(command.includes (prefix+"kelpie"))) {
      CardReplies.kelpiescall(message);
  } else
  if (command.includes (prefix+"lavawave")||(command.includes (prefix+"lava")||(command.includes (prefix+"wave")))) {
      CardReplies.lavawave(message);
  } else
  if (command.includes (prefix+"leechboomerang")||(command.includes (prefix+"boomerang"))) {
      CardReplies.leechboomerang(message);
  } else
  if (command.includes (prefix+"lentilsoup")||(command.includes (prefix+"lentil")||(command.includes (prefix+"soup")))) {
      CardReplies.lentilsoup(message);
  } else
  if (command.includes (prefix+"lifeleecher")||(command.includes (prefix+"life")||(command.includes (prefix+"leecher")))) {
      CardReplies.lifeleecher(message);
  } else
  if (command.includes (prefix+"lightningspear")) {
      CardReplies.lightningspear(message);
  } else
  if (command.includes (prefix+"lightningstrike")) {
      CardReplies.lightningstrike(message);
  } else
  if (command.includes (prefix+"magmaticrocks")||(command.includes (prefix+"magmatic"))) {
      CardReplies.magmaticrocks(message);
  } else
  if (command.includes (prefix+"magnetshield")||(command.includes (prefix+"magnet"))) {
      CardReplies.magnetshield(message);
  } else
  if (command.includes (prefix+"malefix")) {
      CardReplies.malefix(message);
  } else
  if (command.includes (prefix+"mammothshield")||(command.includes (prefix+"mammoth"))) {
      CardReplies.mammothshield(message);
  } else
  if (command.includes (prefix+"markofvengeance")||(command.includes ("markofvenge")||(command.includes (prefix+"mov")))) {
      CardReplies.markofvengeance(message);
  } else
  if (command.includes (prefix+"meadgulp")||(command.includes (prefix+"gulp"))) {
      CardReplies.meadgulp(message);
  } else
  if (command.includes (prefix+"meadsip")||(command.includes (prefix+"sip"))) {
      CardReplies.meadsip(message);
  } else
  if (command.includes (prefix+"meditation")||(command.includes (prefix+"meditat"))) {
      CardReplies.meditation(message);
  } else
  if (command.includes (prefix+"megalodontooth")||(command.includes (prefix+"megalo")||(command.includes (prefix+"tooth")))) {
      CardReplies.megalodontooth(message);
  } else
  if (command.includes (prefix+"menacinggloom")||(command.includes (prefix+"menacing")||(command.includes (prefix+"gloom")))) {
      CardReplies.menacinggloom(message);
  } else
  if (command.includes (prefix+"merrychristmas")||(command.includes (prefix+"merry"))) {
      CardReplies.merrychristmas(message);
  } else
  if (command.includes (prefix+"mischievousbreaker")||(command.includes (prefix+"mischiev"))) {
      CardReplies.mischievousbreaker(message);
  } else
  if (command.includes (prefix+"mistralstrike")||(command.includes (prefix+"mistral"))) {
      CardReplies.mistralstrike(message);
  } else
  if (command.includes (prefix+"monk-fu")||(command.includes (prefix+"monkfu")||(command.includes (prefix+"monk")))) {
      CardReplies.monkfu(message);
  } else
  if (command.includes (prefix+"monsterjuice")||(command.includes (prefix+"monster")||(command.includes (prefix+"juice")))) {
      CardReplies.monsterjuice(message);
  } else
  if (command.includes (prefix+"moonbeam")||(command.includes (prefix+"moon")||(command.includes (prefix+"beam")))) {
      CardReplies.moonbeam(message);
  } else
  if (command.includes (prefix+"muttonchops")||(command.includes (prefix+"mutton")||(command.includes (prefix+"chops")))) {
      CardReplies.muttonchops(message);
  } else
  if (command.includes (prefix+"necropower")||(command.includes("necro"))) {
      CardReplies.necropower(message);
  } else
  if (command.includes (prefix+"nightcap")) {
      CardReplies.nightcap(message);
  } else
  if (command.includes (prefix+"nightmare")) {
      CardReplies.nightmare(message);
  } else
  if (command.includes (prefix+"ninjagrenade")||(command.includes (prefix+"ninja"))) {
      CardReplies.ninjagrenade(message);
  } else
  if (command.includes (prefix+"obscuringexplode")||(command.includes (prefix+"obscuring")||(command.includes("explode")))) {
      CardReplies.obscuringexplode(message);
  } else
  if (command.includes (prefix+"oilbag")) {
      CardReplies.oilbag(message);
  } else
  if (command.includes (prefix+"oildart")) {
      CardReplies.oildart(message);
  } else
  if (command.includes (prefix+"oilspill")||(command.includes (prefix+"spill"))) {
      CardReplies.oilspill(message);
  } else
  if (command.includes (prefix+"outofsight")||(command.includes (prefix+"out")||(command.includes (prefix+"sight")||(command.includes (prefix+"oos"))))) {
      CardReplies.outofsight(message);
  } else
  if (command.includes (prefix+"oysterblunderbuss")||(command.includes (prefix+"oyster")||(command.includes (prefix+"blunder")))) {
      CardReplies.oysterblunderbuss(message);
  } else
  if (command.includes (prefix+"partybubble")||(command.includes (prefix+"bubble"))) {
      CardReplies.partybubble(message);
  } else
  if (command.includes (prefix+"peacepipe")||(command.includes (prefix+"peace")||(command.includes (prefix+"pipe")))) {
      CardReplies.peacepipe(message);
  } else
  if (command.includes (prefix+"perfectcut")) {
      CardReplies.perfectcut(message);
  } else
  if (command.includes (prefix+"perfectdart")) {
      CardReplies.perfectdart(message);
  } else
  if (command.includes (prefix+"perfectsight")) {
      CardReplies.perfectsight(message);
  } else
  if (command.includes (prefix+"perfectslash")) {
      CardReplies.perfectslash(message);
  } else
  if (command.includes (prefix+"perfectstab")) {
      CardReplies.perfectstab(message);
  } else
  if (command.includes (prefix+"piercedheart")||(command.includes (prefix+"pierced"))) {
      CardReplies.piercedheart(message);
  } else
  if (command.includes (prefix+"piercinghellfire")||(command.includes (prefix+"hellfire"))) {
      CardReplies.piercinghellfire(message);
  } else
  if (command.includes (prefix+"piercingshard")) {
      CardReplies.piercingshard(message);
  } else
  if (command.includes (prefix+"piercingspear")) {
      CardReplies.piercingspear(message);
  } else
  if (command.includes (prefix+"pinbarrage")) {
      CardReplies.pinbarrage(message);
  } else
  if (command.includes (prefix+"piranhapistol")||(command.includes (prefix+"piranha")||(command.includes (prefix+"pistol")))) {
      CardReplies.piranhapistol(message);
  } else
  if (command.includes (prefix+"poseidonswill")||(command.includes (prefix+"poseidon"))) {
      CardReplies.poseidonswill(message);
  } else
  if (command.includes (prefix+"poisoncloud")) {
      CardReplies.poisoncloud(message);
  } else
  if (command.includes (prefix+"poisonouscurrents") || (command.includes (prefix+"current"))) {
    CardReplies.poisonouscurrents(message);
  } else
  if (command.includes (prefix+"phoenixcloak")||(command.includes (prefix+"phoenix"))) {
      CardReplies.phoenixcloak(message);
  } else
  if (command.includes (prefix+"poisongrenade")) {
      CardReplies.poisongrenade(message);
  } else
  if (command.includes (prefix+"poisonousdart")||(command.includes (prefix+"poisondart"))) {
      CardReplies.poisonousdart(message);
  } else
  if (command.includes (prefix+"poisonousdung")||(command.includes (prefix+"poisondung")||(command.includes (prefix+"dung")))) {
      CardReplies.poisonousdung(message);
  } else
  if (command.includes (prefix+"poisonoustip")||(command.includes (prefix+"poisontip"))) {
      CardReplies.poisonoustip(message);
  } else
  if (command.includes (prefix+"powershield")||(command.includes (prefix+"power"))) {
      CardReplies.powershield(message);
  } else
  if (command.includes (prefix+"pucksgrace")||(command.includes (prefix+"puck")||(command.includes (prefix+"grace")))) {
      CardReplies.pucksgrace(message);
  } else
  if (command.includes (prefix+"pumpkinfield")||(command.includes (prefix+"pumpkin")||(command.includes (prefix+"field")))) {
      CardReplies.pumpkinfield(message);
  } else
  if (command.includes (prefix+"pyroclasticsphere")||(command.includes (prefix+"pyrosphere")||(command.includes (prefix+"sphere")))) {
      CardReplies.pyroclasticsphere(message);
  } else
  if (command.includes (prefix+"pyroclasticstrike")||(command.includes (prefix+"pyrostrike"))) {
      CardReplies.pyroclasticstrike(message);
  } else
  if (command.includes (prefix+"pyrodagger")) {
      CardReplies.pyrodagger(message);
  } else
  if (command.includes (prefix+"quadslash")||(command.includes (prefix+"quad"))) {
      CardReplies.quadslash(message);
  } else
  if (command.includes (prefix+"quartzstone")||(command.includes (prefix+"quartz"))) {
      CardReplies.quartzstone(message);
  } else
  if (command.includes (prefix+"quicksilver")||(command.includes (prefix+"quick"))) {
      CardReplies.quicksilver(message);
  } else
  if (command.includes (prefix+"quiveringsole")||(command.includes (prefix+"quiver")||(command.includes (prefix+"sole")))) {
      CardReplies.quiveringsole(message);
  } else
  if (command.includes (prefix+"rainoffire")||(command.includes (prefix+"rain")||(command.includes (prefix+"rof")))) {
      CardReplies.rainoffire(message);
  } else
  if (command.includes (prefix+"rejuvenateall")||(command.includes (prefix+"rejuve"))) {
      CardReplies.rejuvenateall(message);
  } else
  if (command.includes (prefix+"retributioncurse")||(command.includes (prefix+"retribution"))) {
      CardReplies.retributioncurse(message);
  } else
  if (command.includes (prefix+"rideofthevalkyries")||(command.includes (prefix+"ride")||(command.includes (prefix+"rotv")))) {
      CardReplies.rideofthevalkyries(message);
  } else
  if (command.includes (prefix+"rockingroll")||(command.includes (prefix+"rocking")||(command.includes (prefix+"rnr")))) {
      CardReplies.rockingroll(message);
  } else
  if (command.includes (prefix+"roosterarrow")||(command.includes (prefix+"rooster"))) {
      CardReplies.roosterarrow(message);
  } else
  if (command.includes (prefix+"rootarrow")||(command.includes (prefix+"root"))) {
      CardReplies.rootarrow(message);
  } else
  if (command.includes (prefix+"rumshower")||(command.includes (prefix+"rum"))) {
      CardReplies.rumshower(message);
  } else
  if (command.includes (prefix+"safeguard")||(command.includes (prefix+"safe"))) {
      CardReplies.safeguard(message);
  } else
  if (command.includes (prefix+"salamanderale")) {
      CardReplies.salamanderale(message);
  } else
  if (command.includes (prefix+"salamanderskin")) {
      CardReplies.salamanderskin(message);
  } else
  if (command.includes (prefix+"scorchingflames")||(command.includes (prefix+"scorching"))) {
      CardReplies.scorchingflames(message);
  } else
  if (command.includes (prefix+"setback")) {
      CardReplies.setback(message);
  } else
  if (command.includes (prefix+"shadowsteps")||(command.includes (prefix+"shadow")||(command.includes (prefix+"step")))) {
      CardReplies.shadowsteps(message);
  } else
  if (command.includes (prefix+"sharkcannon")||(command.includes (prefix+"shark")||(command.includes (prefix+"cannon")))) {
      CardReplies.sharkcannon(message);
  } else
  if (command.includes (prefix+"sharptongue")||(command.includes (prefix+"sharp")||(command.includes (prefix+"tongue")))) {
      CardReplies.sharptongue(message);
  } else
  if (command.includes (prefix+"spikedtrap")||(command.includes (prefix+"spiked"))) {
      CardReplies.spikedtrap(message);
  } else
  if (command.includes (prefix+"shieldofthenature")||(command.includes (prefix+"shieldofnature")||(command.includes (prefix+"nature")||(command.includes (prefix+"sotn"))))) {
      CardReplies.shieldofthenature(message);
  } else
  if (command.includes (prefix+"shieldinglight")||(command.includes (prefix+"shieldlight")||(command.includes (prefix+"shielding")))) {
      CardReplies.shieldinglight(message);
  } else
  if (command.includes (prefix+"shockingaxe")||(command.includes (prefix+"shockaxe"))) {
      CardReplies.shockingaxe(message);
  } else
  if (command.includes (prefix+"shockingbag")||(command.includes (prefix+"shockbag"))) {
      CardReplies.shockingbag(message);
  } else
  if (command.includes (prefix+"shockingdart")||(command.includes (prefix+"shockdart"))) {
      CardReplies.shockingdart(message);
  } else
  if (command.includes (prefix+"shockingpin")||(command.includes (prefix+"shockpin"))) {
      CardReplies.shockingpin(message);
  } else
  if (command.includes (prefix+"shockingsword")||(command.includes (prefix+"shocksword"))) {
      CardReplies.shockingsword(message);
  } else
  if (command.includes (prefix+"silverdart")) {
      CardReplies.silverdart(message);
  } else
  if (command.includes (prefix+"silverlakeshards")||(command.includes (prefix+"silvershards"))) {
      CardReplies.silverlakeshards(message);
  } else
  if (command.includes (prefix+"silverlakesword")||(command.includes (prefix+"silversword"))) {
      CardReplies.silverlakesword(message);
  } else
  if (command.includes (prefix+"skypiercer")||(command.includes (prefix+"sky"))) {
      CardReplies.skypiercer(message);
  } else
  if (command.includes (prefix+"sleepingdust")||(command.includes (prefix+"sleepdust")||(command.includes (prefix+"dust")))) {
      CardReplies.sleepingdust(message);
  } else
  if (command.includes (prefix+"sleepingsceptre")||(command.includes (prefix+"sleepsceptre")||(command.includes (prefix+"sceptre")))) {
      CardReplies.sleepingsceptre(message);
  } else
  if (command.includes (prefix+"slowdart")||(command.includes (prefix+"retarded"))) {
      CardReplies.slowdart(message);
  } else
  if (command.includes (prefix+"smellingsalts")||(command.includes (prefix+"smell")||(command.includes (prefix+"salt")))) {
      CardReplies.smellingsalts(message);
  } else
  if (command.includes (prefix+"smokebomb")||(command.includes (prefix+"smoke"))) {
      CardReplies.smokebomb(message);
  } else
  if (command.includes (prefix+"snakecharmer")||(command.includes (prefix+"snake")||(command.includes (prefix+"charmer")))) {
      CardReplies.snakecharmer(message);
  } else
  if (command.includes (prefix+"snowballssquall")||(command.includes (prefix+"snowball")||(command.includes (prefix+"squall")))) {
      CardReplies.snowballssquall(message);
  } else
  if (command.includes(prefix+"songofnature")||(command.includes (prefix+"song"))) {
      CardReplies.songofnature(message);
  } else
  if (command.includes (prefix+"sorcerer\'sgift")||(command.includes (prefix+"sorcerer")||(command.includes (prefix+"gift")))) {
      CardReplies.sorcerersgift(message);
  } else
  if (command.includes (prefix+"spectralprotection")||(command.includes (prefix+"spectral"))) {
      CardReplies.spectralprotection(message);
  } else
  if (command.includes (prefix+"speedoflight")||(command.includes (prefix+"speed")||(command.includes (prefix+"sol")))) {
      CardReplies.speedoflight(message);
  } else
  if (command.includes (prefix+"spentforce")||(command.includes (prefix+"spent")||(command.includes (prefix+"force")))) {
      CardReplies.spentforce(message);
  } else
  if (command.includes (prefix+"spikebarrage")) {
      CardReplies.spikebarrage(message);
  } else
  if (command.includes (prefix+"stingraydart")||(command.includes (prefix+"stingray"))) {
      CardReplies.stingraydart(message);
  } else
  if (command.includes (prefix+"stormdagger")) {
      CardReplies.stormdagger(message);
  } else
  if (command.includes (prefix+"stormdart")) {
      CardReplies.stormdart(message);
  } else
  if (command.includes (prefix+"stormedge")) {
      CardReplies.stormedge(message);
  } else
  if (command.includes (prefix+"stormsend")||(command.includes (prefix+"storms"))) {
      CardReplies.stormsend(message);
  } else
  if (command.includes (prefix+"stunningboulder")) {
      CardReplies.stunningboulder(message);
  } else
  if (command.includes (prefix+"stunningearth")) {
      CardReplies.stunningearth(message);
  } else
  if (command.includes (prefix+"stunningheat")) {
      CardReplies.stunningheat(message);
  } else
  if (command.includes (prefix+"stunningstaff")) {
      CardReplies.stunningstaff(message);
  } else
  if (command.includes (prefix+"sunderedrocks")||(command.includes (prefix+"sundered"))) {
      CardReplies.sunderedrocks(message);
  } else
  if (command.includes (prefix+"sweetcorn")||(command.includes (prefix+"sweet"))) {
      CardReplies.sweetcorn(message);
  } else
  if (command.includes (prefix+"swordoflight")||(command.includes (prefix+"swordlight"))) {
      CardReplies.swordoflight(message);
  } else
  if (command.includes (prefix+"swordofjustice")||(command.includes (prefix+"justice")||(command.includes (prefix+"soj")))) {
      CardReplies.swordofjustice(message);
  } else
  if (command.includes (prefix+"tempestamulet")||(command.includes (prefix+"tempest"))) {
      CardReplies.tempestamulet(message);
  } else
  if (command.includes (prefix+"terramissile")) {
      CardReplies.terramissile(message);
  } else
  if (command.includes (prefix+"terrasword")) {
      CardReplies.terrasword(message);
  } else
  if (command.includes (prefix+"terratip")) {
      CardReplies.terratip(message);
  } else
  if (command.includes (prefix+"theequalizer")||(command.includes (prefix+"equalize"))) {
      CardReplies.theequalizer(message);
  } else
  if (command.includes (prefix+"thekraken")||(command.includes (prefix+"kraken"))) {
      CardReplies.thekraken(message);
  } else
  if (command.includes (prefix+"thescabber")||(command.includes (prefix+"scabber"))) {
      CardReplies.thescabber(message);
  } else
  if (command.includes (prefix+"tidalkick")||(command.includes (prefix+"tidal"))) {
      CardReplies.tidalkick(message);
  } else
  if (command.includes (prefix+"tidescontrol")||(command.includes (prefix+"tides"))) {
      CardReplies.tidescontrol(message);
  } else
  if (command.includes (prefix+"tipbarrage")) {
      CardReplies.tipbarrage(message);
  } else
  if (command.includes (prefix+"toxicbolt")) {
      CardReplies.toxicbolt(message);
  } else
  if (command.includes (prefix+"toxicvengeance")) {
      CardReplies.toxicvengeance(message);
  } else
  if (command.includes (prefix+"tritons will")||(command.includes (prefix+"triton"))) {
      CardReplies.tritonswill(message);
  } else
  if (command.includes (prefix+"tropicaljuice")||(command.includes (prefix+"tropic")||(command.includes (prefix+"juice")))) {
      CardReplies.tropicaljuice(message);
  } else
  if (command.includes (prefix+"turkeyarrow")) {
      CardReplies.turkeyarrow(message);
  } else
  if (command.includes (prefix+"turkeysagitta")||(command.includes (prefix+"sagitta"))) {
      CardReplies.turkeysagitta(message);
  } else
  if (command.includes (prefix+"ubercornholio")||(command.includes (prefix+"ubercorn")||(command.includes (prefix+"uber")))) {
      CardReplies.ubercornholio(message);
  } else
  if (command.includes (prefix+"valkyriesshield")||(command.includes (prefix+"valkyrie"))) {
      CardReplies.valkyriesshield(message);
  } else
  if (command.includes (prefix+"vampiricbat")||(command.includes (prefix+"vampirebat")||(command.includes (prefix+"bats")))) {
      CardReplies.vampiricbats(message);
  } else
  if (command.includes (prefix+"vampiriclord")||(command.includes (prefix+"vampirelord")||(command.includes (prefix+"lord")))) {
      CardReplies.vampiriclord(message);
  } else
  if (command.includes (prefix+"veggieskewer")||(command.includes (prefix+"veggie")||(command.includes (prefix+"skewer")))) {
      CardReplies.veggieskewer(message);
  } else
  if (command.includes (prefix+"vinewrap")||(command.includes (prefix+"vine")||(command.includes (prefix+"wrap")))) {
      CardReplies.vinewrap(message);
  } else
  if (command.includes (prefix+"volcano")) {
      CardReplies.volcano(message);
  } else
  if (command.includes (prefix+"voodooritual")||(command.includes (prefix+"voodoo")||(command.includes (prefix+"ritual")))) {
      CardReplies.voodooritual(message);
  } else
  if (command.includes (prefix+"waraxe")) {
      CardReplies.waraxe(message);
  } else
  if (command.includes (prefix+"warpedseed")||(command.includes (prefix+"warp")||(command.includes (prefix+"seed")))) {
      CardReplies.warpedseeds(message);
  } else
  if (command.includes (prefix+"wetbag")) {
      CardReplies.wetbag(message);
  } else
  if (command.includes (prefix+"wetdagger")) {
      CardReplies.wetdagger(message);
  } else
  if (command.includes (prefix+"wetkiss")||(command.includes (prefix+"kiss"))) {
      CardReplies.wetkiss(message);
  } else
  if (command.includes (prefix+"wetmissile")) {
      CardReplies.wetmissile(message);
  } else
  if (command.includes (prefix+"whisperingblade")||(command.includes (prefix+"whisper"))) {
      CardReplies.whisperingblade(message);
  } else
  if (command.includes (prefix+"windbarrier")) {
      CardReplies.windbarrier(message);
  } else
  if (command.includes (prefix+"winddart")) {
      CardReplies.winddart(message);
  } else
  if (command.includes (prefix+"windtalker")||(command.includes (prefix+"talker"))) {
      CardReplies.windtalker(message);
  } else
  if (command.includes (prefix+"witch'sbrew")||(command.includes (prefix+"witchs")||(command.includes (prefix+"brew")))) {
      CardReplies.witchsbrew(message);
  } else
  if (command.includes (prefix+"witchcraft")||(command.includes (prefix+"craft"))) {
      CardReplies.witchcraft(message);
  } else
  if (command.includes (prefix+"wrathofgod")||(command.includes (prefix+"wrath")||(command.includes (prefix+"wog")))) {
      CardReplies.wrathofgod(message);
  } else
  if (command.includes (prefix+"wyrm'sblood")||(command.includes (prefix+"wyrmsblood"))) {
      CardReplies.wyrmsblood(message);
  } else
  if (command.includes (prefix+"wyrmslayer")) {
      CardReplies.wyrmslayer(message);
  } else { return false }
  return true;
}
module.exports = { CardReply: searchCardReply }
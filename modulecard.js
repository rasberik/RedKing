let Emoji = require('./moduleemoji.js');
let Const = require('./moduleconst.js');

let CardManager = function() {  
    //Card functions.
    this.cardexample = function(message) {
        message.channel.send({
            embed: {
                title: "__Card Example__",
                color: Const.ColorEmbed,
                description: "Card tutorial.",
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FCardExample.png?1550487004689"
                }
            }
        });
    };

    this.cardoriginal = function(message) {
        message.channel.send({
            embed: {
                title: "__Card Original MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://www.youtube.com/watch?v=Y0Vg38cKVSc"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=????-??% \n" + Emoji.Star + "=????-??% \n" + Emoji.Star + Emoji.Star + "=????-??% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=????-??%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=????-??% \n" + Emoji.Star + "=????-??% \n" + Emoji.Star + Emoji.Star + "=????-??% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=????-??% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=????-??%",
                    inline: true
                }]
            }
        });
    };

    //Cards in alphabetical order.
    this.acidsplash = function(message) {
        message.channel.send({
            embed: {
                title: "__Acid Splash MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FAcidSplash.png?1508176951698"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1185-30% \n" + Emoji.Star + "=2091-40% \n" + Emoji.Star + Emoji.Star + "=2920-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3713-60%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1515-35% \n" + Emoji.Star + "=2682-45% \n" + Emoji.Star + Emoji.Star + "=3749-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=4769-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=5762-75%",
                    inline: true
                }]
            }
        });
    };
    this.adorablepugs = function(message) {
        message.channel.send({
            embed: {
                title: "__Adorable Pugs MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FAdorablePugs.png?1552167201900"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=929-30% \n" + Emoji.Star + "=1623-40% \n" + Emoji.Star + Emoji.Star + "=2259-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2867-60%",
                    inline: true
                }]
            }
        });
    };
    this.annoyingelves = function(message) {
        message.channel.send({
            embed: {
                title: "__Annoying Elves MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FAnnoyingElves.png?1513702482350"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1467-15% \n" + Emoji.Star + "=2589-25% \n" + Emoji.Star + Emoji.Star + "=3616-35% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=4597-45%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=2129-20% \n" + Emoji.Star + "=3712-30% \n" + Emoji.Star + Emoji.Star + "=5164-40% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6553-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=7907-60%",
                    inline: true
                }]
            }
        });
    };
    this.ancientmariner = function(message) {
        message.channel.send({
            embed: {
                title: "__Ancient Mariner MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FAncientMariner.png?1553051126910"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=853-35% \n" + Emoji.Star + "=1495-45% \n" + Emoji.Star + Emoji.Star + "=2084-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2647-65%",
                    inline: true
                }]
            }
        });
    };
    this.apnoea = function(message) {
        message.channel.send({
            embed: {
                title: "__Apnoea MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FApnoea.png?1508176938735"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=514/514-25% \n" + Emoji.Star + "=893/893-35% \n" + Emoji.Star + Emoji.Star + "=1242/1242-45%",
                    inline: true
                }]
            }
        });
    };
    this.apollosarrow = function(message) {
        message.channel.send({
            embed: {
                title: "__Apollo's Arrow MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FApollosArrow.png?1552167201489"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=726-30% \n" + Emoji.Star + "=1266-40% \n" + Emoji.Star + Emoji.Star + "=1762-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2237-60%",
                    inline: true
                }]
            }
        });
    };
    this.asceticlesson = function(message) {
        message.channel.send({
            embed: {
                title: "__Ascetic Lesson MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FAsceticLesson.png?1552804992877"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=966-60% \n" + Emoji.Star + "=1703-70% \n" + Emoji.Star + Emoji.Star + "=2379-80% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3024-90%",
                    inline: true
                }]
            }
        });
    };
    this.arcanegrenade = function(message) {
        message.channel.send({
            embed: {
                title: "__Arcane Grenade MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FArcaneGrenade.png?1508176922219"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=692-40% \n" + Emoji.Star + "=1203-50% \n" + Emoji.Star + Emoji.Star + "=1672-60%",
                    inline: true
                }]
            }
        });
    };
    this.arcanemissile = function(message) {
        message.channel.send({
            embed: {
                title: "__Arcane Missile MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FArcaneMissile.png?1508176903080"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=290-20% \n" + Emoji.Star + "=504-30% \n" + Emoji.Star + Emoji.Star + "=700-40%",
                    inline: true
                }]
            }
        });
    };
    this.avalanche = function(message) {
        message.channel.send({
            embed: {
                title: "__Avalanche MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FAvalanche.png?1552960202631"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1721-40% \n" + Emoji.Star + "=3037-50% \n" + Emoji.Star + Emoji.Star + "=4242-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5393-70%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=2138-40% \n" + Emoji.Star + "=3758-50% \n" + Emoji.Star + Emoji.Star + "=5242-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6661-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=8043-80%",
                    inline: true
                }]
            }
        });
    };
    this.backstab = function(message) {
        message.channel.send({
            embed: {
                title: "__Backstab MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBackstab.png?1552627534529"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=379-25% \n" + Emoji.Star + "=670-35% \n" + Emoji.Star + Emoji.Star + "=937-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1192-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=774-30% \n" + Emoji.Star + "=1370-40% \n" + Emoji.Star + Emoji.Star + "=1916-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2437-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=2945-70%",
                    inline: true
                }]
            }
        });
    };
    this.barriercrusher = function(message) {
        message.channel.send({
            embed: {
                title: "__Barrier Crusher MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBarrierCrusher.png?1508176929250"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=1578-25% \n" + Emoji.Star + "=2743-35% \n" + Emoji.Star + Emoji.Star + "=3812-45%",
                    inline: true
                }]
            }
        });
    };
    this.beardedhatchet = function(message) {
        message.channel.send({
            embed: {
                title: "__Bearded Hatchet MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBeardedHatchet.png?v=1606059503072"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=868-35% \n" + Emoji.Star + "=1507-45% \n" + Emoji.Star + Emoji.Star + "=2095-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2657-65%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=887-50% \n" + Emoji.Star + "=1542-60% \n" + Emoji.Star + Emoji.Star + "=2143-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2719-80% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=3280-90%",
                    inline: true
                }]
            }
        });
    };
    this.blackspot = function(message) {
        message.channel.send({
            embed: {
                title: "__Blackspot MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBlackSpot.png?1508176929574"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=292-10% \n" + Emoji.Star + "=505-20% \n" + Emoji.Star + Emoji.Star + "=701-30%",
                    inline: true
                }]
            }
        });
    };
    this.blazefury = function(message) {
        message.channel.send({
            embed: {
                title: "__Blazefury MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBlazefury.png?1552812684098"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1927-30% \n" + Emoji.Star + "=3403-40% \n" + Emoji.Star + Emoji.Star + "=4755-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6046-60%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=2280-50% \n" + Emoji.Star + "=4004-60% \n" + Emoji.Star + Emoji.Star + "=5584-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=7094-80% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=8565-90%",
                    inline: true
                }]
            }
        });
    };
    this.blazingray = function(message) {
        message.channel.send({
            embed: {
                title: "__Blazing Ray MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBlazingRay.png?v=1561576936508"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=448-40% \n" + Emoji.Star + "=784-50% \n" + Emoji.Star + Emoji.Star + "=1093-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1388-70%",
                    inline: true
                }]
            }
        });
    };
    this.bleedingdagger = function(message) {
        message.channel.send({
            embed: {
                title: "__Bleeding Dagger MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBleedingDagger.png?1508176918526"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=193-10% \n" + Emoji.Star + "=335-20% \n" + Emoji.Star + Emoji.Star + "=466-30%",
                    inline: true
                }]
            }
        });
    };
    this.bleedingedge = function(message) {
        message.channel.send({
            embed: {
                title: "__Bleeding Edge MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBleedingEdge.png?1508176904411"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=418-15% \n" + Emoji.Star + "=727-25% \n" + Emoji.Star + Emoji.Star + "=1010-35%",
                    inline: true
                }]
            }
        });
    };
    this.bleedingheart = function(message) {
        message.channel.send({
            embed: {
                title: "__Bleeding Heart MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBleedingHeart.png?1508176961565"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=290-25% \n" + Emoji.Star + "=504-35% \n" + Emoji.Star + Emoji.Star + "=700-45%",
                    inline: true
                }]
            }
        });
    };
    this.bleedingthorn = function(message) {
        message.channel.send({
            embed: {
                title: "__Bleeding Thorn MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBleedingThorn.png?1508443776187"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=773-15% \n" + Emoji.Star + "=1343-25% \n" + Emoji.Star + Emoji.Star + "=1867-35%",
                    inline: true
                }]
            }
        });
    };
    this.blindingflame = function(message) {
        message.channel.send({
            embed: {
                title: "__Blinding Flame MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBlindingFlame.png?1508443826042"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=934-20% \n" + Emoji.Star + "=1623-30% \n" + Emoji.Star + Emoji.Star + "=2256-40%",
                    inline: true
                }]
            }
        });
    };
    this.blindingspirit = function(message) {
        message.channel.send({
            embed: {
                title: "__Blinding Spirit MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBlindingSpirit.png?1508443893180"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=563-15% \n" + Emoji.Star + "=979-25% \n" + Emoji.Star + Emoji.Star + "=1361-35%",
                    inline: true
                }]
            }
        });
    };
    this.bloodthirster = function(message) {
        message.channel.send({
            embed: {
                title: "__Bloodthirster MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBloodthirster.png?1552641656417"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=843-30% \n" + Emoji.Star + "=1477-40% \n" + Emoji.Star + Emoji.Star + "=2059-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2616-60%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=990-30% \n" + Emoji.Star + "=1723-40% \n" + Emoji.Star + Emoji.Star + "=2395-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3039-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=3666-70%",
                    inline: true
                }]
            }
        });
    };
    this.boilingcoffee = function(message) {
        message.channel.send({
            embed: {
                title: "__Boiling Coffee MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBoilingCoffee.png?1508443935868"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=725-30% \n" + Emoji.Star + "=1260-40% \n" + Emoji.Star + Emoji.Star + "=1751-50%",
                    inline: true
                }]
            }
        });
    };
    this.boxoffrogs = function(message) {
        message.channel.send({
            embed: {
                title: "__Box of Frogs MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBoxofFrogs.png?1508176976878"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1749-35% \n" + Emoji.Star + "=3086-45% \n" + Emoji.Star + Emoji.Star + "=4311-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5481-65%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=2222-40% \n" + Emoji.Star + "=3933-50% \n" + Emoji.Star + Emoji.Star + "=5499-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6995-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=8452-80%",
                    inline: true
                }]
            }
        });
    };
    this.breakingchakra = function(message) {
        message.channel.send({
            embed: {
                title: "__Breaking Chakra MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBreakingChakra.png?1508443972820"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=643-15% \n" + Emoji.Star + "=1118-25% \n" + Emoji.Star + Emoji.Star + "=1554-35%",
                    inline: true
                }]
            }
        });
    };
    this.bullseye = function(message) {
        message.channel.send({
            embed: {
                title: "__Bullseye MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBullseye.png?1508176961247"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1128-25% \n" + Emoji.Star + "=1991-35% \n" + Emoji.Star + Emoji.Star + "=2781-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3536-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1414-30% \n" + Emoji.Star + "=2503-40% \n" + Emoji.Star + Emoji.Star + "=3499-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=4451-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=5378-70%",
                    inline: true
                }]
            }
        });
    };
    this.burningblade = function(message) {
        message.channel.send({
            embed: {
                title: "__Burning Blade MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBurningBlade.png?1508176892787"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=1337-25% \n" + Emoji.Star + "=2323-35% \n" + Emoji.Star + Emoji.Star + "=3229-45%",
                    inline: true
                }]
            }
        });
    };
    this.burningblast = function(message) {
        message.channel.send({
            embed: {
                title: "__Burning Blast MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBurningBlast.png?1508176892987"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=805-25% \n" + Emoji.Star + "=1399-35% \n" + Emoji.Star + Emoji.Star + "=1944-45%",
                    inline: true
                }]
            }
        });
    };
    this.burningclub = function(message) {
        message.channel.send({
            embed: {
                title: "__Burning Club MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBurningClub.png?1508444020961"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=563-15% \n" + Emoji.Star + "=979-25% \n" + Emoji.Star + Emoji.Star + "=1361-35%",
                    inline: true
                }]
            }
        });
    };
    this.burningdagger = function(message) {
        message.channel.send({
            embed: {
                title: "__Burning Dagger MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBurningDagger.png?1508444052434"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=563-15% \n" + Emoji.Star + "=979-25% \n" + Emoji.Star + Emoji.Star + "=1361-35%",
                    inline: true
                }]
            }
        });
    };
    this.burningdisc = function(message) {
        message.channel.send({
            embed: {
                title: "__Burning Disc MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBurningDisc.png?1508176891469"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=982-20% \n" + Emoji.Star + "=1707-30% \n" + Emoji.Star + Emoji.Star + "=2372-40%",
                    inline: true
                }]
            }
        });
    };
    this.burninggrenade = function(message) {
        message.channel.send({
            embed: {
                title: "__Burning Grenade MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBurningGrenade.png?1508444088499"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=612-30% \n" + Emoji.Star + "=1063-40% \n" + Emoji.Star + Emoji.Star + "=1478-50%",
                    inline: true
                }]
            }
        });
    };
    this.burningmissile = function(message) {
        message.channel.send({
            embed: {
                title: "__Burning Missile MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBurningMissile.png?1508444124495"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=934-20% \n" + Emoji.Star + "=1623-30% \n" + Emoji.Star + Emoji.Star + "=2256-40%",
                    inline: true
                }]
            }
        });
    };
    this.bysonshield = function(message) {
        message.channel.send({
            embed: {
                title: "__Byson Shield MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FBysonShield.png?1552960201335"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=722-45% \n" + Emoji.Star + "=1257-55% \n" + Emoji.Star + Emoji.Star + "=1748-65%",
                    inline: true
                }]
            }
        });
    };
    this.cabertoss = function(message) {
        message.channel.send({
            embed: {
                title: "__Caber Toss MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FCaberToss.png?1508176957735"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1749-30% \n" + Emoji.Star + "=3086-40% \n" + Emoji.Star + Emoji.Star + "=4311-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5481-60%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=2481-40% \n" + Emoji.Star + "=4385-50% \n" + Emoji.Star + Emoji.Star + "=6128-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=7794-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=9416-80%",
                    inline: true
                }]
            }
        });
    };
    this.candycauldron = function(message) {
        message.channel.send({
            embed: {
                title: "__Candy Cauldron MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FCandyCauldron.png?1552716752708"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=3414-20% \n" + Emoji.Star + "=6024-30% \n" + Emoji.Star + Emoji.Star + "=8414-40% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=10698-50%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=3270-25% \n" + Emoji.Star + "=5749-35% \n" + Emoji.Star + Emoji.Star + "=8020-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=10192-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=12307-65%",
                    inline: true
                }]
            }
        });
    };
    this.channelingchi = function(message) {
        message.channel.send({
            embed: {
                title: "__Channeling Chi MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FChannelingChi.png?1508267902950"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1100-25% \n" + Emoji.Star + "=1941-35% \n" + Emoji.Star + Emoji.Star + "=2711-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3448-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1226-30% \n" + Emoji.Star + "=2156-40% \n" + Emoji.Star + Emoji.Star + "=3009-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3824-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=4617-70%",
                    inline: true
                }]
            }
        });
    };
    this.charmofmaking = function(message) {
        message.channel.send({
            embed: {
                title: "__Charm of Making MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FCharmofMaking.png?1552641654227"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=428-30% \n" + Emoji.Star + "=751-40% \n" + Emoji.Star + Emoji.Star + "=1046-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1329-60%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=515-35% \n" + Emoji.Star + "=902-45% \n" + Emoji.Star + Emoji.Star + "=1257-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1596-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=1926-75%",
                    inline: true
                }]
            }
        });
    };
    this.caribbeancocktail = function(message) {
        message.channel.send({
            embed: {
                title: "__Caribbean Cocktail MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FCaribbeanCocktail.png?1508444199690"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1780-20% \n" + Emoji.Star + "=3139-30% \n" + Emoji.Star + Emoji.Star + "=4383-40% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5572-50%",
                    inline: true
                }]
            }
        });
    };
    this.chargedshield = function(message) {
        message.channel.send({
            embed: {
                title: "__Charged Shield MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FChargedShield.png?1555460050853"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1636/261-25% \n" + Emoji.Star + "=2887/448-35% \n" + Emoji.Star + Emoji.Star + "=4033/620-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5127/785-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=2020/1010-30% \n" + Emoji.Star + "=3576/1733-40% \n" + Emoji.Star + Emoji.Star + "=4999/2398-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6359/3036-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=7683/3658-70%",
                    inline: true
                }]
            }
        });
    };
    this.chillaxe = function(message) {
        message.channel.send({
            embed: {
                title: "__Chill Axe MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FChillAxe.png?1508444311052"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=676-40% \n" + Emoji.Star + "=1175-50% \n" + Emoji.Star + Emoji.Star + "=1633-60%",
                    inline: true
                }]
            }
        });
    };
    this.chillblade = function(message) {
        message.channel.send({
            embed: {
                title: "__Chill Blade MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FChillBlade.png?1508444344449"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=998-25% \n" + Emoji.Star + "=1735-35% \n" + Emoji.Star + Emoji.Star + "=2411-45%",
                    inline: true
                }]
            }
        });
    };
    this.chillclub = function(message) {
        message.channel.send({
            embed: {
                title: "__Chill Club MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FChillClub.png?1508444381064"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=418-15% \n" + Emoji.Star + "=727-25% \n" + Emoji.Star + Emoji.Star + "=1010-35%",
                    inline: true
                }]
            }
        });
    };
    this.chillgrenade = function(message) {
        message.channel.send({
            embed: {
                title: "__Chill Grenade MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FChillGrenade.png?1508444407629"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=467-20% \n" + Emoji.Star + "=811-30% \n" + Emoji.Star + Emoji.Star + "=1128-40%",
                    inline: true
                }]
            }
        });
    };
    this.chillmissile = function(message) {
        message.channel.send({
            embed: {
                title: "__Chill Missile MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FChillMissile.png?1508444437766"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=418-25% \n" + Emoji.Star + "=727-35% \n" + Emoji.Star + Emoji.Star + "=1010-45%",
                    inline: true
                }]
            }
        });
    };
    this.chillstones = function(message) {
        message.channel.send({
            embed: {
                title: "__Chill Stones MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FChillStones.png?1508176891429"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=596-25% \n" + Emoji.Star + "=1035-35% \n" + Emoji.Star + Emoji.Star + "=1439-45%",
                    inline: true
                }]
            }
        });
    };
    this.chillingjab = function(message) {
        message.channel.send({
            embed: {
                title: "__Chilling Jab MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FChillingJab.png?1508444473497"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=290-20% \n" + Emoji.Star + "=504-30% \n" + Emoji.Star + Emoji.Star + "=700-40%",
                    inline: true
                }]
            }
        });
    };
    this.chillingshards = function(message) {
        message.channel.send({
            embed: {
                title: "__Chilling Shards MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FChillingShards.png?1518533916588"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=472-20% \n" + Emoji.Star + "=819-30% \n" + Emoji.Star + Emoji.Star + "=1138-40%",
                    inline: true
                }]
            }
        });
    };
    this.christmastree = function(message) {
        message.channel.send({
            embed: {
                title: "__Christmas Tree MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FChristmasTree.png?1508444580426"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=1417-25% \n" + Emoji.Star + "=2463-35% \n" + Emoji.Star + Emoji.Star + "=3423-45%",
                    inline: true
                }]
            }
        });
    };
    this.clayshower = function(message) {
        message.channel.send({
            embed: {
                title: "__Clay Shower MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FClayShower.png?1552627534251"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1116-60% \n" + Emoji.Star + "=1960-70% \n" + Emoji.Star + Emoji.Star + "=2733-80% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3472-90%",
                    inline: true
                }]
            }
        });
    };
    this.cleansingchalice = function(message) {
        message.channel.send({
            embed: {
                title: "__Cleansing Chalice MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FCleansingChalice.png?1552960200935"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=2196-20% \n" + Emoji.Star + "=3873-30% \n" + Emoji.Star + Emoji.Star + "=5409-40% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6876-50%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1128-25% \n" + Emoji.Star + "=1980-35% \n" + Emoji.Star + Emoji.Star + "=2761-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3507-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=4235-65%",
                    inline: true
                }]
            }
        });
    };
    this.cloakofflames = function(message) {
        message.channel.send({
            embed: {
                title: "__Cloak of Flames MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FCloakofFlames.png?1552960201210"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=659-25% \n" + Emoji.Star + "=1156-35% \n" + Emoji.Star + Emoji.Star + "=1611-45%",
                    inline: true
                }]
            }
        });
    };
    this.cloakparty = function(message) {
        message.channel.send({
            embed: {
                title: "__Cloak Party MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FCloakParty.png?1508444633504"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=741-15% \n" + Emoji.Star + "=1287-25% \n" + Emoji.Star + Emoji.Star + "=1789-35%",
                    inline: true
                }]
            }
        });
    };
    this.cloaked = function(message) {
        message.channel.send({
            embed: {
                title: "__Cloaked MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FCloaked.png?1508444669176"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=563-20% \n" + Emoji.Star + "=979-30% \n" + Emoji.Star + Emoji.Star + "=1361-40%",
                    inline: true
                }]
            }
        });
    };
    this.combustibolt = function(message) {
        message.channel.send({
            embed: {
                title: "__Combustibolt MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FCombustibolt.png?1508444697158"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=789-20% \n" + Emoji.Star + "=1371-30% \n" + Emoji.Star + Emoji.Star + "=1906-40%",
                    inline: true
                }]
            }
        });
    };
    this.confusecloud = function(message) {
        message.channel.send({
            embed: {
                title: "__Confuse Cloud MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FConfuseCloud.png?1508444735423"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=853-25% \n" + Emoji.Star + "=1483-35% \n" + Emoji.Star + Emoji.Star + "=2061-45%",
                    inline: true
                }]
            }
        });
    };
    this.confusedart = function(message) {
        message.channel.send({
            embed: {
                title: "__Confuse Dart MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FConfuseDart.png?1508444766913"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=596-15% \n" + Emoji.Star + "=1035-25% \n" + Emoji.Star + Emoji.Star + "=1439-35%",
                    inline: true
                }]
            }
        });
    };
    this.confusegrenade = function(message) {
        message.channel.send({
            embed: {
                title: "__Confuse Grenade MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FConfuseGrenade.png?1508444796203"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=660-30% \n" + Emoji.Star + "=1147-40% \n" + Emoji.Star + Emoji.Star + "=1594-50%",
                    inline: true
                }]
            }
        });
    };
    this.cornholio = function(message) {
        message.channel.send({
            embed: {
                title: "__Cornholio MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FCornholio.png?1508444830140"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=472/472-25% \n" + Emoji.Star + "=819/819-35% \n" + Emoji.Star + Emoji.Star + "=1138/1138-45%",
                    inline: true
                }]
            }
        });
    };
    this.cripplingbolt = function(message) {
        message.channel.send({
            embed: {
                title: "__Crippling Bolt MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FCripplingBolt.png?1553051126750"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=931-35% \n" + Emoji.Star + "=1621-45% \n" + Emoji.Star + Emoji.Star + "=2254-55%",
                    inline: true
                }]
            }
        });
    };
    this.cripplingspell = function(message) {
        message.channel.send({
            embed: {
                title: "__Crippling Spell MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FCripplingSpell.png?1512756666660"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=926-45% \n" + Emoji.Star + "=1622-55% \n" + Emoji.Star + Emoji.Star + "=2261-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2872-75%",
                    inline: true
                }]
            }
        });
    };
    this.daggeroftruth = function(message) {
        message.channel.send({
            embed: {
                title: "__Dagger of Truth MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FDaggerofTruth.png?1559003419624"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=676-25% \n" + Emoji.Star + "=1175-35% \n" + Emoji.Star + Emoji.Star + "=1633-45%",
                    inline: true
                }]
            }
        });
    };
    this.darkenmissile = function(message) {
        message.channel.send({
            embed: {
                title: "__Darken Missile MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FDarkenMissile.png?1508444892113"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=644-25% \n" + Emoji.Star + "=1119-35% \n" + Emoji.Star + Emoji.Star + "=1556-45%",
                    inline: true
                }]
            }
        });
    };
    this.darknessspike = function(message) {
        message.channel.send({
            embed: {
                title: "__Darkness Spike MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FDarknessSpike.png?1508444922428"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=870-20% \n" + Emoji.Star + "=1512-30% \n" + Emoji.Star + Emoji.Star + "=2101-40%",
                    inline: true
                }]
            }
        });
    };
    this.deadlyvenom = function(message) {
        message.channel.send({
            embed: {
                title: "__Deadly Venom MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FDeadlyVenom.png?1508444956434"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=413-60% \n" + Emoji.Star + "=722-70% \n" + Emoji.Star + Emoji.Star + "=1006-80% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1277-90%",
                    inline: true
                }]
            }
        });
    };
    this.deepbreath = function(message) {
        message.channel.send({
            embed: {
                title: "__Deep Breath MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FDeepBreath.png?1555460051484"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1552-40% \n" + Emoji.Star + "=2738-50% \n" + Emoji.Star + Emoji.Star + "=3825-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=4863-70%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=2138-50% \n" + Emoji.Star + "=3768-60% \n" + Emoji.Star + Emoji.Star + "=5261-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6688-80% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=8077-90%",
                    inline: true
                }]
            }
        });
    };
    this.defensivestrike = function(message) {
        message.channel.send({
            embed: {
                title: "__Defensive Strike MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FDefensiveStrike.png?1508445020730"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=773-20% \n" + Emoji.Star + "=1343-30% \n" + Emoji.Star + Emoji.Star + "=1867-40%",
                    inline: true
                }]
            }
        });
    };
    this.defrostamulet = function(message) {
        message.channel.send({
            embed: {
                title: "__Defrost Amulet MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FDefrostAmulet.png?1508445052171"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=789-15% \n" + Emoji.Star + "=1371-25% \n" + Emoji.Star + Emoji.Star + "=1906-35%",
                    inline: true
                }]
            }
        });
    };
    this.destructivearrow = function(message) {
        message.channel.send({
            embed: {
                title: "__Destructive Arrow MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FDestructiveArrow.png?1508445080322"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=902-25% \n" + Emoji.Star + "=1567-35% \n" + Emoji.Star + Emoji.Star + "=2178-45%",
                    inline: true
                }]
            }
        });
    };
    this.dirtybomb = function(message) {
        message.channel.send({
            embed: {
                title: "__Dirty Bomb MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FDirtyBomb.png?1552812683045"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=789-20% \n" + Emoji.Star + "=1371-30% \n" + Emoji.Star + Emoji.Star + "=1906-40%",
                    inline: true
                }]
            }
        });
    };
    this.dischargingray = function(message) {
        message.channel.send({
            embed: {
                title: "__Discharging Ray MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FDischargingRay.png?1508445146035"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=499-25% \n" + Emoji.Star + "=867-35% \n" + Emoji.Star + Emoji.Star + "=1205-45%",
                    inline: true
                }]
            }
        });
    };
    this.divertingarrow = function(message) {
        message.channel.send({
            embed: {
                title: "__Diverting Arrow MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FDivertingArrow.png?1508445183012"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=692-40% \n" + Emoji.Star + "=1203-50% \n" + Emoji.Star + Emoji.Star + "=1672-60%",
                    inline: true
                }]
            }
        });
    };
    this.divertingdart = function(message) {
        message.channel.send({
            embed: {
                title: "__Diverting Dart MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FDivertingDart.png?1508445222713"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=193-20% \n" + Emoji.Star + "=335-30% \n" + Emoji.Star + Emoji.Star + "=466-40%",
                    inline: true
                }]
            }
        });
    };
    this.divertingdisc = function(message) {
        message.channel.send({
            embed: {
                title: "__Diverting Disc MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FDivertingDisc.png?1508445255174"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=789-20% \n" + Emoji.Star + "=1371-30% \n" + Emoji.Star + Emoji.Star + "=1906-40%",
                    inline: true
                }]
            }
        });
    };
    this.divertingpin = function(message) {
        message.channel.send({
            embed: {
                title: "__Diverting Pin MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FDivertingPin.png?1508445302545"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=773-40% \n" + Emoji.Star + "=1343-50% \n" + Emoji.Star + Emoji.Star + "=1867-60%",
                    inline: true
                }]
            }
        });
    };
    this.divertingspike = function(message) {
        message.channel.send({
            embed: {
                title: "__Diverting Spike MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FDivertingSpike.png?1508445338086"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=773-40% \n" + Emoji.Star + "=1343-50% \n" + Emoji.Star + Emoji.Star + "=1867-60%",
                    inline: true
                }]
            }
        });
    };
    this.divertingtip = function(message) {
        message.channel.send({
            embed: {
                title: "__Diverting Tip MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FDivertingTip.png?1508445389142"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=773-40% \n" + Emoji.Star + "=1343-50% \n" + Emoji.Star + Emoji.Star + "=1867-60%",
                    inline: true
                }]
            }
        });
    };
    this.divinestorm = function(message) {
        message.channel.send({
            embed: {
                title: "__Divine Storm MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FDivineStorm.png?1552627535687"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1070-50% \n" + Emoji.Star + "=1879-60% \n" + Emoji.Star + Emoji.Star + "=2621-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3329-80%",
                    inline: true
                }]
            }
        });
    };
    this.divinethunder = function(message) {
        message.channel.send({
            embed: {
                title: "__Divine Thunder MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FDivineThunder.png?1508445455816"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=757-40% \n" + Emoji.Star + "=1315-50% \n" + Emoji.Star + Emoji.Star + "=1828-60%",
                    inline: true
                }]
            }
        });
    };
    this.dragonslayer = function(message) {
        message.channel.send({
            embed: {
                title: "__Dragonslayer MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FDragonslayer.png?1508176936864"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=5885-40% \n" + Emoji.Star + "=10343-50% \n" + Emoji.Star + Emoji.Star + "=14426-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=18330-70%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=5519-45% \n" + Emoji.Star + "=9584-55% \n" + Emoji.Star + Emoji.Star + "=13316-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=16887-75% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=20368-85%",
                    inline: true
                }]
            }
        });
    };
    this.dragonskin = function(message) {
        message.channel.send({
            embed: {
                title: "__Dragonskin MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FDragonSkin.png?1552641653925"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=888-45% \n" + Emoji.Star + "=1543-55% \n" + Emoji.Star + Emoji.Star + "=2144-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2720-75%",
                    inline: true
                }]
            }
        });
    };
    this.dropshield = function(message) {
        message.channel.send({
            embed: {
                title: "__Drop Shield MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FDropShield.png?1508519452328"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=644-20% \n" + Emoji.Star + "=1119-30% \n" + Emoji.Star + Emoji.Star + "=1556-40%",
                    inline: true
                }]
            }
        });
    };
    this.earthquake = function(message) {
        message.channel.send({
            embed: {
                title: "__Earth Quake MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FEarthQuake.png?1508519490447"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=902-35% \n" + Emoji.Star + "=1567-45% \n" + Emoji.Star + Emoji.Star + "=2178-55%",
                    inline: true
                }]
            }
        });
    };
    this.eastereggs = function(message) {
        message.channel.send({
            embed: {
                title: "__Easter Eggs MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FEasterEggs.png?1524213926588"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=576-15% \n" + Emoji.Star + "=977-25% \n" + Emoji.Star + Emoji.Star + "=1348-35% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1703-45%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=649-15% \n" + Emoji.Star + "=1146-25% \n" + Emoji.Star + Emoji.Star + "=1601-35% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2036-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=2460-55%",
                    inline: true
                }]
            }
        });
    };
    this.electricshot = function(message) {
        message.channel.send({
            embed: {
                title: "__Electric Shot MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FElectricShot.png?1508519557062"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=356-25% \n" + Emoji.Star + "=621-35% \n" + Emoji.Star + Emoji.Star + "=864-45%",
                    inline: true
                }]
            }
        });
    };
    this.elvenprecision = function(message) {
        message.channel.send({
            embed: {
                title: "__Elven Precision MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FElvenPrecision.png?1552804994082"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=846-40% \n" + Emoji.Star + "=1485-50% \n" + Emoji.Star + Emoji.Star + "=2070-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2630-70%",
                    inline: true
                }]
            }
        });
    };
    this.epicentre = function(message) {
        message.channel.send({
            embed: {
                title: "__Epicentre MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FEpicentre.png?1508519595982"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=805-25% \n" + Emoji.Star + "=1399-35% \n" + Emoji.Star + Emoji.Star + "=1944-45%",
                    inline: true
                }]
            }
        });
    };
    this.espressoshot = function(message) {
        message.channel.send({
            embed: {
                title: "__Espresso Shot MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FEspressoShot.png?1516129834987"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1039-20% \n" + Emoji.Star + "=1825-30% \n" + Emoji.Star + Emoji.Star + "=2546-40% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3235-50%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1783-25% \n" + Emoji.Star + "=3141-35% \n" + Emoji.Star + Emoji.Star + "=4385-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5573-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=6731-65%",
                    inline: true
                }]
            }
        });
    };
    this.etherealguardian = function(message) {
        message.channel.send({
            embed: {
                title: "__Ethereal Guardian MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FEtherealGuardian.png?1508176933505"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1130-20% \n" + Emoji.Star + "=1992-30% \n" + Emoji.Star + Emoji.Star + "=2782-40% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3537-50%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=2158-30% \n" + Emoji.Star + "=3784-40% \n" + Emoji.Star + Emoji.Star + "=5274-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6699-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=8087-70%",
                    inline: true
                }]
            }
        });
    };
    this.explosivebag = function(message) {
        message.channel.send({
            embed: {
                title: "__Explosive Bag MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FExplosiveBag.png?1508519650339"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=692-40% \n" + Emoji.Star + "=1203-50% \n" + Emoji.Star + Emoji.Star + "=1672-60%",
                    inline: true
                }]
            }
        });
    };
    this.explosivegadget = function(message) {
        message.channel.send({
            embed: {
                title: "__Explosive Gadget MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FExplosiveGadget.png?1508519675705"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=563-30% \n" + Emoji.Star + "=979-40% \n" + Emoji.Star + Emoji.Star + "=1361-50%",
                    inline: true
                }]
            }
        });
    };
    this.fafnirsblood = function(message) {
        message.channel.send({
            embed: {
                title: "__Fafnir's Blood MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FFafnirsBlood.png?v=1561576934053"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1118-50% \n" + Emoji.Star + "=1972-60% \n" + Emoji.Star + Emoji.Star + "=2754-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3501-80%",
                    inline: true
                }]
            }
        });
    };
    this.fairyblessing = function(message) {
        message.channel.send({
            embed: {
                title: "__Fairy Blessing MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FFairyBlessing.png?1508519704583"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=821-25% \n" + Emoji.Star + "=1427-35% \n" + Emoji.Star + Emoji.Star + "=1983-45%",
                    inline: true
                }]
            }
        });
    };
    this.fairyshield = function(message) {
        message.channel.send({
            embed: {
                title: "__Fairy Shield MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FFairyShield.png?1552627534940"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=2050/1326-25% \n" + Emoji.Star + "=3600/2340-35% \n" + Emoji.Star + Emoji.Star + "=5020/3268-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6377/4155-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=2070/1540-30% \n" + Emoji.Star + "=3606/2702-40% \n" + Emoji.Star + Emoji.Star + "=5015/3767-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6363/4785-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=7677/5776-70%",
                    inline: true
                }]
            }
        });
    };
    this.faradayamulet = function(message) {
        message.channel.send({
            embed: {
                title: "__Faraday Amulet MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FFaradayAmulet.png?1508519763878"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=789-15% \n" + Emoji.Star + "=1371-25% \n" + Emoji.Star + Emoji.Star + "=1906-35%",
                    inline: true
                }]
            }
        });
    };
    this.feedtheflames = function(message) {
        message.channel.send({
            embed: {
                title: "__Feed the Flames MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FFeedtheFlames.png?1508519788840"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=290-25% \n" + Emoji.Star + "=504-35% \n" + Emoji.Star + Emoji.Star + "=700-45%",
                    inline: true
                }]
            }
        });
    };
    this.feedthetoxins = function(message) {
        message.channel.send({
            embed: {
                title: "__Feed the Toxins MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FFeedtheToxins.png?1508519819196"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=290-25% \n" + Emoji.Star + "=504-35% \n" + Emoji.Star + Emoji.Star + "=700-45%",
                    inline: true
                }]
            }
        });
    };
    this.fellcrestlullaby = function(message) {
        message.channel.send({
            embed: {
                title: "__Fellcrest Lullaby MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FFellcrestLullaby.png?1552960201063"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=987-30% \n" + Emoji.Star + "=1742-40% \n" + Emoji.Star + Emoji.Star + "=2433-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3094-60%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1068-35% \n" + Emoji.Star + "=1888-45% \n" + Emoji.Star + Emoji.Star + "=2638-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3355-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=4054-75%",
                    inline: true
                }]
            }
        });
    };
    this.fieryaxe = function(message) {
        message.channel.send({
            embed: {
                title: "__Fiery Axe MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FFieryAxe.png?1508519858691"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=1127-40% \n" + Emoji.Star + "=1959-50% \n" + Emoji.Star + Emoji.Star + "=2722-60%",
                    inline: true
                }]
            }
        });
    };
    this.fierystars = function(message) {
        message.channel.send({
            embed: {
                title: "__Fiery Stars MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FFieryStars.png?1508519884676"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=982-15% \n" + Emoji.Star + "=1707-25% \n" + Emoji.Star + Emoji.Star + "=2372-35%",
                    inline: true
                }]
            }
        });
    };
    this.firebolt = function(message) {
        message.channel.send({
            embed: {
                title: "__Fire Bolt MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FFireBolt.png?1552488533902"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=295-40% \n" + Emoji.Star + "=511-50% \n" + Emoji.Star + Emoji.Star + "=709-60%",
                    inline: true
                }]
            }
        });
    };
    this.firestorm = function(message) {
        message.channel.send({
            embed: {
                title: "__Firestorm MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FFirestorm.png?1555459552253"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1628-35% \n" + Emoji.Star + "=2870-45% \n" + Emoji.Star + Emoji.Star + "=4008-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5095-65%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1786-35% \n" + Emoji.Star + "=3095-45% \n" + Emoji.Star + Emoji.Star + "=4296-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5447-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=6568-75%",
                    inline: true
                }]
            }
        });
    };
    this.firewall = function(message) {
        message.channel.send({
            embed: {
                title: "__Firewall MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FFirewall.png?1508176994354"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1185-20% \n" + Emoji.Star + "=2091-30% \n" + Emoji.Star + Emoji.Star + "=2920-40% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3713-50%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1927-25% \n" + Emoji.Star + "=3403-35% \n" + Emoji.Star + Emoji.Star + "=4755-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6046-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=7303-65%",
                    inline: true
                }]
            }
        });
    };
    this.flameon = function(message) {
        message.channel.send({
            embed: {
                title: "__Flame On MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FFlameOn.png?1552960201478"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=3838-35% \n" + Emoji.Star + "=6772-45% \n" + Emoji.Star + Emoji.Star + "=9458-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=12026-65%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=4296-40% \n" + Emoji.Star + "=7552-50% \n" + Emoji.Star + Emoji.Star + "=10535-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=13387-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=16164-80%",
                    inline: true
                }]
            }
        });
    };
    this.flashoflightning = function(message) {
        message.channel.send({
            embed: {
                title: "__Flash of Lightning MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FFlashofLightning.png?1552716751375"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1605-30% \n" + Emoji.Star + "=2809-40% \n" + Emoji.Star + Emoji.Star + "=3911-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=4964-60%",
                    inline: true
                }]
            }
        });
    };
    this.flaredup = function(message) {
        message.channel.send({
            embed: {
                title: "__Flared Up MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FFlaredUp.png?1508177004706"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1608-35% \n" + Emoji.Star + "=2837-45% \n" + Emoji.Star + Emoji.Star + "=3963-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5039-65%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=2060-40% \n" + Emoji.Star + "=3608-50% \n" + Emoji.Star + Emoji.Star + "=5026-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6383-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=7705-80%",
                    inline: true
                }]
            }
        });
    };
    this.forestbarrier = function(message) {
        message.channel.send({
            embed: {
                title: "__Forest Barrier MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FForestBarrier.png?1508519916306"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=1031-15% \n" + Emoji.Star + "=1791-25% \n" + Emoji.Star + Emoji.Star + "=2490-35%",
                    inline: true
                }]
            }
        });
    };
    this.frostbiteshield = function(message) {
        message.channel.send({
            embed: {
                title: "__Frostbite Shield MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FFrostbiteShield.png?1508519963107"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=620/103-15% \n" + Emoji.Star + "=1081/170-25% \n" + Emoji.Star + Emoji.Star + "=1504/233-35%",
                    inline: true
                }]
            }
        });
    };
    this.frostray = function(message) {
        message.channel.send({
            embed: {
                title: "__Frost Ray MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FFrostRay.png?v=1606059503110"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=446-40% \n" + Emoji.Star + "=783-50% \n" + Emoji.Star + Emoji.Star + "=1092-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1387-70%",
                    inline: true
                }]
            }
        });
    };
    this.fuelthefire = function(message) {
        message.channel.send({
            embed: {
                title: "__Fuel the Fire MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FFueltheFire.png?1508520001948"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=789-20% \n" + Emoji.Star + "=1371-30% \n" + Emoji.Star + Emoji.Star + "=1906-40%",
                    inline: true
                }]
            }
        }); //fuelthefire.png'});
    };
    this.fumingbunny = function(message) {
        message.channel.send({
            embed: {
                title: "__Fuming Bunny MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FFumingBunny.png?1508177001224"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=536-20% \n" + Emoji.Star + "=945-30% \n" + Emoji.Star + Emoji.Star + "=1321-40% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1679-50%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=639-25% \n" + Emoji.Star + "=1131-35% \n" + Emoji.Star + Emoji.Star + "=1582-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2013-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=2432-65%",
                    inline: true
                }]
            }
        }); //fumingbunny.png'});
    };
    this.furiousfist = function(message) {
        message.channel.send({
            embed: {
                title: "__Furious Fist MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FFuriousFist.png?1508520033012"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=870-20% \n" + Emoji.Star + "=1512-30% \n" + Emoji.Star + Emoji.Star + "=2101-40%",
                    inline: true
                }]
            }
        }); //furiousfist.png'});
    };
    this.glacier = function(message) {
        message.channel.send({
            embed: {
                title: "__Glacier MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FGlacier.png?1508520057965"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=660-30% \n" + Emoji.Star + "=1147-40% \n" + Emoji.Star + Emoji.Star + "=1594-50%",
                    inline: true
                }]
            }
        }); //glacier.png'});
    };
    this.gravybarrel = function(message) {
        message.channel.send({
            embed: {
                title: "__Gravy Barrel MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FGravyBarrel.png?1508520080406"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=692-20% \n" + Emoji.Star + "=1203-30% \n" + Emoji.Star + Emoji.Star + "=1672-40%",
                    inline: true
                }]
            }
        }); //gravybarrel.png'});
    };
    this.greatballoffire = function(message) {
        message.channel.send({
            embed: {
                title: "__Great Ball of Fire MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FGreatBallofFire.png?1508520109215"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=612-25% \n" + Emoji.Star + "=1063-35% \n" + Emoji.Star + Emoji.Star + "=1478-45%",
                    inline: true
                }]
            }
        }); //greatballoffire.png'});
    };
    this.greenray = function(message) {
        message.channel.send({
            embed: {
                title: "__Green Ray MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FGreenRay.png?v=1606059501651"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=448-40% \n" + Emoji.Star + "=785-50% \n" + Emoji.Star + Emoji.Star + "=1093-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1388-70%",
                    inline: true
                }]
            }
        });
    };
    this.grogbottle = function(message) {
        message.channel.send({
            embed: {
                title: "__Grog Bottle MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FGrogBottle.png?1508520134117"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=708-10% \n" + Emoji.Star + "=1231-20% \n" + Emoji.Star + Emoji.Star + "=1711-30%",
                    inline: true
                }]
            }
        }); //grogbottle.png'});
    };
    this.guidedog = function(message) {
        message.channel.send({
            embed: {
                title: "__Guide Dog MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FGuideDog.png?1552167201762"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=631-35% \n" + Emoji.Star + "=1082-45% \n" + Emoji.Star + Emoji.Star + "=1496-55%",
                    inline: true
                }]
            }
        }); //guidedog.png'});
    };
    this.guidingstar = function(message) {
        message.channel.send({
            embed: {
                title: "__Guiding Star MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FGuidingStar.png?1552641654779"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=2025-25% \n" + Emoji.Star + "=3580-35% \n" + Emoji.Star + Emoji.Star + "=5003-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6362-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=2240-30% \n" + Emoji.Star + "=3957-40% \n" + Emoji.Star + Emoji.Star + "=5529-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=7031-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=8494-70%",
                    inline: true
                }]
            }
        }); //guidingstar.png'});
    };
    this.hammerofgod = function(message) {
        message.channel.send({
            embed: {
                title: "__Hammer of God MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FHammerofGod.png?v=1561576933519"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=2935-40% \n" + Emoji.Star + "=5179-50% \n" + Emoji.Star + Emoji.Star + "=7233-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=9196-70%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=3669-45% \n" + Emoji.Star + "=6495-55% \n" + Emoji.Star + Emoji.Star + "=9081-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=11552-75% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=13958-85%",
                    inline: true
                }]
            }
        }); //hammerofgod.png'});
    };
    this.hardluck = function(message) {
        message.channel.send({
            embed: {
                title: "__Hard Luck MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FHardLuck.png?1512760565529"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1144-25% \n" + Emoji.Star + "=2003-35% \n" + Emoji.Star + Emoji.Star + "=2792-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3545-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1520-10% \n" + Emoji.Star + "=2686-20% \n" + Emoji.Star + Emoji.Star + "=3753-30% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=4772-40% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=5765-50%",
                    inline: true
                }]
            }
        }); //hardluck.png'});
    };
    this.hastyarrow = function(message) {
        message.channel.send({
            embed: {
                title: "__Hasty Arrow MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FHastyArrow.png?1508520237034"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=982-40% \n" + Emoji.Star + "=1707-50% \n" + Emoji.Star + Emoji.Star + "=2372-60%",
                    inline: true
                }]
            }
        }); //hastyarrow.png'});
    };
    this.healinglight = function(message) {
        message.channel.send({
            embed: {
                title: "__Healing Light MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FHealingLight.png?1552960203431"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=620/620-20% \n" + Emoji.Star + "=1094/1094-30% \n" + Emoji.Star + Emoji.Star + "=1529/1529-40% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1944/1944-50%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1010/1010-25% \n" + Emoji.Star + "=1733/1733-35% \n" + Emoji.Star + Emoji.Star + "=2398/2398-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3036/3036-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=3658/3658-65%",
                    inline: true
                }]
            }
        }); //healinglight.png'});
    };
    this.healingoils = function(message) {
        message.channel.send({
            embed: {
                title: "__Healing Oils MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FHealingOils.png?v=1561576936813"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=2511-25% \n" + Emoji.Star + "=4431-35% \n" + Emoji.Star + Emoji.Star + "=6189-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=7869-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1486-30% \n" + Emoji.Star + "=2565-40% \n" + Emoji.Star + Emoji.Star + "=3557-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=4507-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=5433-70%",
                    inline: true
                }]
            }
        }); //healingoils.png'});
    };
    this.healingsoul = function(message) {
        message.channel.send({
            embed: {
                title: "__Healing Soul MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FHealingSoul.png?1508520576121"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=805-20% \n" + Emoji.Star + "=1399-30% \n" + Emoji.Star + Emoji.Star + "=1944-40%",
                    inline: true
                }]
            }
        }); //healingsoul.png'});
    };
    this.healingsplash = function(message) {
        message.channel.send({
            embed: {
                title: "__Healing Splash MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FHealingSplash.png?1552812685127"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1044-30% \n" + Emoji.Star + "=1842-40% \n" + Emoji.Star + Emoji.Star + "=2573-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3271-60%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1108-35% \n" + Emoji.Star + "=1944-45% \n" + Emoji.Star + Emoji.Star + "=2711-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3444-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=4158-75%",
                    inline: true
                }]
            }
        }); //healingsplash.png'});
    };
    this.heartbreaker = function(message) {
        message.channel.send({
            embed: {
                title: "__Heart Breaker MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FHeartBreaker.png?1508176938974"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1354-25% \n" + Emoji.Star + "=2389-35% \n" + Emoji.Star + Emoji.Star + "=3337-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=4243-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1196-30% \n" + Emoji.Star + "=2093-40% \n" + Emoji.Star + Emoji.Star + "=2916-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3702-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=4469-70%",
                    inline: true
                }]
            }
        }); //heartbreaker.png'});
    };
    this.hex = function(message) {
        message.channel.send({
            embed: {
                title: "__Hex MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FHex.png?1508176908156"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=400-20% \n" + Emoji.Star + "=694-30% \n" + Emoji.Star + Emoji.Star + "=963-40%",
                    inline: true
                }]
            }
        }); //hex.png'});
    };
    this.hoistthecolours = function(message) {
        message.channel.send({
            embed: {
                title: "__Hoist the Colours MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FHoisttheColours.png?1552627535425"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1947-30% \n" + Emoji.Star + "=3435-40% \n" + Emoji.Star + Emoji.Star + "=4798-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6101-60%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=2355-30% \n" + Emoji.Star + "=4089-40% \n" + Emoji.Star + Emoji.Star + "=5680-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=7203-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=8688-70%",
                    inline: true
                }]
            }
        }); //hoistthecolours.png'});
    };
    this.holyshower = function(message) {
        message.channel.send({
            embed: {
                title: "__Holy Shower MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FHolyShower.png?1552812684995"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=716-25% \n" + Emoji.Star + "=1258-35% \n" + Emoji.Star + Emoji.Star + "=1756-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2231-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=750-25% \n" + Emoji.Star + "=1310-35% \n" + Emoji.Star + Emoji.Star + "=1824-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2315-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=2794-65%",
                    inline: true
                }]
            }
        });
    };
    this.hotboulder = function(message) {
        message.channel.send({
            embed: {
                title: "__Hot Boulder MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FHotBoulder.png?1508520780234"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=982-30% \n" + Emoji.Star + "=1707-40% \n" + Emoji.Star + Emoji.Star + "=2372-50%",
                    inline: true
                }]
            }
        }); //hotboulder.png'});
    };
    this.hotchestnuts = function(message) {
        message.channel.send({
            embed: {
                title: "__Hot Chestnuts MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FHotChestnuts.png?1516129835398"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1167/1167-25% \n" + Emoji.Star + "=2060/2060-35% \n" + Emoji.Star + Emoji.Star + "=2878/2878-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3660/3660-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=2060/1030-20% \n" + Emoji.Star + "=3607/1803-30% \n" + Emoji.Star + Emoji.Star + "=5026/2513-40% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6383/3191-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=7705/3852-60%",
                    inline: true
                }]
            }
        }); //hotchestnuts.png'});
    };
    this.hurricanebarrier = function(message) {
        message.channel.send({
            embed: {
                title: "__Hurricane Barrier MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FHurricaneBarrier.png?1508520835488"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1040/413-15% \n" + Emoji.Star + "=1812/722-25% \n" + Emoji.Star + Emoji.Star + "=2520/1006-35% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3197/1277-45%",
                    inline: true
                }]
            }
        }); //hurricanebarrier.png'});
    };
    this.icebolt = function(message) {
        message.channel.send({
            embed: {
                title: "__Ice Bolt MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FIceBolt.png?1555459551948"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=295-40% \n" + Emoji.Star + "=511-50% \n" + Emoji.Star + Emoji.Star + "=709-60%",
                    inline: true
                }]
            }
        });
    };
    this.iceshard = function(message) {
        message.channel.send({
            embed: {
                title: "__Ice Shard MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FIceShard.png?1508176941789"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=846-25% \n" + Emoji.Star + "=1493-35% \n" + Emoji.Star + Emoji.Star + "=2085-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2652-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=846-30% \n" + Emoji.Star + "=1493-40% \n" + Emoji.Star + Emoji.Star + "=2085-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2652-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=3203-70%",
                    inline: true
                }]
            }
        }); //iceshard.png'});
    };
    this.icequeen = function(message) {
        message.channel.send({
            embed: {
                title: "__Ice Queen Protector MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FIceQueenProtector.png?1552627534807"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1677-30% \n" + Emoji.Star + "=2958-40% \n" + Emoji.Star + Emoji.Star + "=4131-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5252-60%",
                    inline: true
                }]
            }
        }); //icequeen.png'});
    };
    this.igniferroque = function(message) {
        message.channel.send({
            embed: {
                title: "__Igni Ferroque MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FIgniFerroque.png?1508520864876"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1025-60% \n" + Emoji.Star + "=1800-70% \n" + Emoji.Star + Emoji.Star + "=2510-80% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3188-90%",
                    inline: true
                }]
            }
        }); //igniferroque.png'});
    };
    this.impaleshield = function(message) {
        message.channel.send({
            embed: {
                title: "__Impale Shield MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FImpaleShield.png?1508520888045"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=918/144-30% \n" + Emoji.Star + "=1595/247-40% \n" + Emoji.Star + Emoji.Star + "=2217/343-50%",
                    inline: true
                }]
            }
        }); //impaleshield.png'});
    };
    this.interruptarrow = function(message) {
        message.channel.send({
            embed: {
                title: "__Interrupt Arrow MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FInterruptArrow.png?1508520912460"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=934-20% \n" + Emoji.Star + "=1623-30% \n" + Emoji.Star + Emoji.Star + "=2256-40%",
                    inline: true
                }]
            }
        }); //interruptarrow.png'});
    };
    this.interruptsword = function(message) {
        message.channel.send({
            embed: {
                title: "__Interrupt Sword MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FInterruptSword.png?1508520942729"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=1353-25% \n" + Emoji.Star + "=2351-35% \n" + Emoji.Star + Emoji.Star + "=3268-45%",
                    inline: true
                }]
            }
        }); //interruptsword.png'});
    };
    this.ironbreak = function(message) {
        message.channel.send({
            embed: {
                title: "__Iron Break MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FIronBreak.png?1508176946959"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1185-25% \n" + Emoji.Star + "=2091-35% \n" + Emoji.Star + Emoji.Star + "=2920-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3713-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1074-30% \n" + Emoji.Star + "=1878-40% \n" + Emoji.Star + Emoji.Star + "=2615-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3321-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=4008-70%",
                    inline: true
                }]
            }
        }); //ironbreak.png'});
    };
    this.ivywoodamulet = function(message) {
        message.channel.send({
            embed: {
                title: "__Ivywood Amulet MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FIvywoodAmulet.png?1508520970068"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=1433-15% \n" + Emoji.Star + "=2491-25% \n" + Emoji.Star + Emoji.Star + "=3462-35%",
                    inline: true
                }]
            }
        }); //ivywoodamulet.png'});
    };
    this.ivywoodpiercer = function(message) {
        message.channel.send({
            embed: {
                title: "__Ivywood Piercer MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FIvywoodPiercer.png?1508176954264"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=395-20% \n" + Emoji.Star + "=697-30% \n" + Emoji.Star + Emoji.Star + "=973-40% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1237-50%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=451-25% \n" + Emoji.Star + "=787-35% \n" + Emoji.Star + Emoji.Star + "=1095-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1390-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=1677-65%",
                    inline: true
                }]
            }
        }); //ivywoodpiercer.png'});
    };
    this.justicar = function(message) {
        message.channel.send({
            embed: {
                title: "__Justicar MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FJusticar.png?v=1606059502857"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=835-25% \n" + Emoji.Star + "=1461-35% \n" + Emoji.Star + Emoji.Star + "=2036-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2585-55%",
                    inline: true
                }]
            }
        });
    };
    this.karmicblessing = function(message) {
        message.channel.send({
            embed: {
                title: "__Karmic Blessing MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FKarmicBlessing.png?1552624893538"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=863-50% \n" + Emoji.Star + "=1513-60% \n" + Emoji.Star + Emoji.Star + "=2109-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2679-80%",
                    inline: true
                }]
            }
        });
    };
    this.karmickkick = function(message) {
        message.channel.send({
            embed: {
                title: "__Karmick Kick MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FKarmicKick.png?1521756515054"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=800-40% \n" + Emoji.Star + "=1395-50% \n" + Emoji.Star + Emoji.Star + "=1941-60%",
                    inline: true
                }]
            }
        }); //karmickkick.png'});
    };
    this.karmicprotection = function(message) {
        message.channel.send({
            embed: {
                title: "__Karmic Protection MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FKarmicProtection.png?1508520998542"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=871-30% \n" + Emoji.Star + "=1512-40% \n" + Emoji.Star + Emoji.Star + "=2101-50%",
                    inline: true
                }]
            }
        }); //karmicprotection.png'});
    };
    this.kelpiescall = function(message) {
        message.channel.send({
            embed: {
                title: "__Kelpies Call MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FKelpiesCall.png?v=1561576934647"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=973-30% \n" + Emoji.Star + "=1719-40% \n" + Emoji.Star + Emoji.Star + "=2401-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3054-60%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1062-35% \n" + Emoji.Star + "=1878-45% \n" + Emoji.Star + Emoji.Star + "=2625-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3339-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=4034-75%",
                    inline: true
                }]
            }
        });
    };
    this.lavawave = function(message) {
        message.channel.send({
            embed: {
                title: "__Lava Wave MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FLavaWave.png?1512760559264"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1451-35% \n" + Emoji.Star + "=2557-45% \n" + Emoji.Star + Emoji.Star + "=3570-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=4538-65%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=2140-40% \n" + Emoji.Star + "=3770-50% \n" + Emoji.Star + Emoji.Star + "=5262-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6689-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=8078-80%",
                    inline: true
                }]
            }
        }); //lavawave.png'});
    };
    this.leechboomerang = function(message) {
        message.channel.send({
            embed: {
                title: "__Leech Boomerang MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FLeechBoomerang.png?1508521051767"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=306-15% \n" + Emoji.Star + "=531-25% \n" + Emoji.Star + Emoji.Star + "=739-35%",
                    inline: true
                }]
            }
        }); //leechboomerang.png'});
    };
    this.lentilsoup = function(message) {
        message.channel.send({
            embed: {
                title: "__Lentil Soup MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FLentilSoup.png?1508521079787"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=773-30% \n" + Emoji.Star + "=1343-40% \n" + Emoji.Star + Emoji.Star + "=1867-50%",
                    inline: true
                }]
            }
        }); //lentilsoup.png'});
    };
    this.lifeleecher = function(message) {
        message.channel.send({
            embed: {
                title: "__Life Leecher MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FLifeLeecher.png?1508521106289"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=853-20% \n" + Emoji.Star + "=1483-30% \n" + Emoji.Star + Emoji.Star + "=2061-40%",
                    inline: true
                }]
            }
        }); //lifeleecher.png'});
    };
    this.lightningspear = function(message) {
        message.channel.send({
            embed: {
                title: "__Lightning Spear MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FLightningSpear.png?1552960205431"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=903-30% \n" + Emoji.Star + "=1575-40% \n" + Emoji.Star + Emoji.Star + "=2192-50%",
                    inline: true
                }]
            }
        }); //lightningspear.png'});
    };
    this.lightningstrike = function(message) {
        message.channel.send({
            embed: {
                title: "__Lightning Strike MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FLightningStrike.png?1508176941789"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1241-30% \n" + Emoji.Star + "=2190-40% \n" + Emoji.Star + Emoji.Star + "=3059-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3890-60%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1628-35% \n" + Emoji.Star + "=2870-45% \n" + Emoji.Star + Emoji.Star + "=4007-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5094-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=6153-75%",
                    inline: true
                }]
            }
        }); //lightningstrike.png'});
    };
    this.magmaticrocks = function(message) {
        message.channel.send({
            embed: {
                title: "__Magmatic Rocks MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FMagmaticRocks.png?1508521163356"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=563-30% \n" + Emoji.Star + "=979-40% \n" + Emoji.Star + Emoji.Star + "=1361-50%",
                    inline: true
                }]
            }
        }); //magmaticrocks.png'});
    };
    this.magnetshield = function(message) {
        message.channel.send({
            embed: {
                title: "__Magnet Shield MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FMagnetShield.png?1552812684413"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1834-25% \n" + Emoji.Star + "=3236-35% \n" + Emoji.Star + Emoji.Star + "=4520-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5747-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1834-30% \n" + Emoji.Star + "=3236-40% \n" + Emoji.Star + Emoji.Star + "=4520-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5747-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=6942-70%",
                    inline: true
                }]
            }
        }); //magnetshield.png'});
    };
    this.malefix = function(message) {
        message.channel.send({
            embed: {
                title: "__Malefix MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FMalefix.png?1552804993266"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=578-35% \n" + Emoji.Star + "=1006-45% \n" + Emoji.Star + Emoji.Star + "=1368-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1774-65%",
                    inline: true
                }]
            }
        }); //malefix.png'});
    };
    this.mammothshield = function(message) {
        message.channel.send({
            embed: {
                title: "__Mammoth Shield MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FMammothShield.png?1508521247627"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=722-45% \n" + Emoji.Star + "=1257-55% \n" + Emoji.Star + Emoji.Star + "=1748-65%",
                    inline: true
                }]
            }
        }); //mammothshield.png'});
    };
    this.markofvengeance = function(message) {
        message.channel.send({
            embed: {
                title: "__Mark of Vengeance MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FMarkofVengeance.png?1508176911972"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=410-25% \n" + Emoji.Star + "=710-35% \n" + Emoji.Star + Emoji.Star + "=985-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1249-55%",
                    inline: true
                }]
            }
        }); //markofvengeance.png'});
    };
    this.meadgulp = function(message) {
        message.channel.send({
            embed: {
                title: "__Mead Gulp MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FMeadGulp.png?1552641654087"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1185-30% \n" + Emoji.Star + "=2091-40% \n" + Emoji.Star + Emoji.Star + "=2920-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3713-60%",
                    inline: true
                }]
            }
        }); //meadgulp.png'});
    };
    this.meadsip = function(message) {
        message.channel.send({
            embed: {
                title: "__Mead Sip MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FMeadSip.png?1508521297075"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=982-30% \n" + Emoji.Star + "=1707-40% \n" + Emoji.Star + Emoji.Star + "=2372-50%",
                    inline: true
                }]
            }
        }); //meadsip.png'});
    };
    this.meditation = function(message) {
        message.channel.send({
            embed: {
                title: "__Meditation MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FMeditation.png?1508176946959"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=4572-20% \n" + Emoji.Star + "=8067-30% \n" + Emoji.Star + Emoji.Star + "=11267-40% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=14325-50%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=5723-25% \n" + Emoji.Star + "=10131-35% \n" + Emoji.Star + Emoji.Star + "=14165-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=18018-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=21770-65%",
                    inline: true
                }]
            }
        }); //meditation.png'});
    };
    this.megalodontooth = function(message) {
        message.channel.send({
            embed: {
                title: "__Megalodon Tooth MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FMegalodonTooth.png?1559003420482"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=413-30% \n" + Emoji.Star + "=722-40% \n" + Emoji.Star + Emoji.Star + "=1006-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1277-60%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=413-50% \n" + Emoji.Star + "=722-60% \n" + Emoji.Star + Emoji.Star + "=1006-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1277-80% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=1451-90%",
                    inline: true
                }]
            }
        });
    };
    this.menacinggloom = function(message) {
        message.channel.send({
            embed: {
                title: "__Menacing Gloom MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FMenacingGloom.png?1508176913276"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=853/433-15% \n" + Emoji.Star + "=1483/754-25% \n" + Emoji.Star + Emoji.Star + "=2061/1049-35%",
                    inline: true
                }]
            }
        }); //menacinggloom.png'});
    };
    this.merrychristmas = function(message) {
        message.channel.send({
            embed: {
                title: "__Merry Christmas MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FMerryChristmas.png?1552641654502"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=2050/1025-25% \n" + Emoji.Star + "=3600/1800-35% \n" + Emoji.Star + Emoji.Star + "=5020/2510-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6377/3188-55%",
                    inline: true
                }]
            }
        }); //merrychristmas.png'});
    };
    this.mischievousbreaker = function(message) {
        message.channel.send({
            embed: {
                title: "__Mischievous Breaker MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FMischievousBreaker.png?1508176910016"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=644-15% \n" + Emoji.Star + "=1119-25% \n" + Emoji.Star + Emoji.Star + "=1556-35%",
                    inline: true
                }]
            }
        }); //mischievusbreaker.png'});
    };
    this.mistralstrike = function(message) {
        message.channel.send({
            embed: {
                title: "__Mistral Strike MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FMistralStrike.png?1508521326503"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=470-10% \n" + Emoji.Star + "=818-20% \n" + Emoji.Star + Emoji.Star + "=1137-30%",
                    inline: true
                }]
            }
        }); //mistralstrike.png'});
    };
    this.monkfu = function(message) {
        message.channel.send({
            embed: {
                title: "__Monk-Fu MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FMonkFu.png?1512760565819"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1665-40% \n" + Emoji.Star + "=2938-50% \n" + Emoji.Star + Emoji.Star + "=4103-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5217-70%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1913-45% \n" + Emoji.Star + "=3333-55% \n" + Emoji.Star + Emoji.Star + "=4636-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5883-75% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=7098-85%",
                    inline: true
                }]
            }
        }); //monk-fu.png'});
    };
    this.monsterjuice = function(message) {
        message.channel.send({
            embed: {
                title: "__Monster Juice MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FMonsterJuice.png?1555459551777"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=939-25% \n" + Emoji.Star + "=1635-35% \n" + Emoji.Star + Emoji.Star + "=2273-45%",
                    inline: true
                }]
            }
        });
    };
    this.moonbeam = function(message) {
        message.channel.send({
            embed: {
                title: "__Moonbeam MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FMoonbeam.png?v=1561576936026"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=423-20% \n" + Emoji.Star + "=746-30% \n" + Emoji.Star + Emoji.Star + "=1042-40% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1326-50%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=431-15% \n" + Emoji.Star + "=756-25% \n" + Emoji.Star + Emoji.Star + "=1054-35% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1339-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=1616-55%",
                    inline: true
                }]
            }
        }); //moonbeam.png'});
    };
    this.muttonchops = function(message) {
        message.channel.send({
            embed: {
                title: "__Mutton Chops MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FMuttonChops.png?1508176914560"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=241/241-10% \n" + Emoji.Star + "=419/419-20% \n" + Emoji.Star + Emoji.Star + "=583/583-30%",
                    inline: true
                }]
            }
        }); //muttonchops.png'});
    };
    this.necropower = function(message) {
        message.channel.send({
            embed: {
                title: "__Necropower MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FNecropower.png?1552812682886"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1226-35% \n" + Emoji.Star + "=2156-45% \n" + Emoji.Star + Emoji.Star + "=3009-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3824-65%",
                    inline: true
                }]
            }
        });
    };
    this.nightcap = function(message) {
        message.channel.send({
            embed: {
                title: "__Night Cap MAXED __",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FNightCap.png?1519824656326"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=2201-20% \n" + Emoji.Star + "=3884-30% \n" + Emoji.Star + Emoji.Star + "=5424-40% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6897-50%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=2207-25% \n" + Emoji.Star + "=3888-35% \n" + Emoji.Star + Emoji.Star + "=5427-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6898-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=8330-65%",
                    inline: true
                }]
            }
        });
    };
    this.nightmare = function(message) {
        message.channel.send({
            embed: {
                title: "__Nightmare MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FNightmare.png?1508176960348"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=2709-35% \n" + Emoji.Star + "=4780-45% \n" + Emoji.Star + Emoji.Star + "=6676-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=8488-65%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=2709-40% \n" + Emoji.Star + "=4780-50% \n" + Emoji.Star + Emoji.Star + "=6676-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=8488-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=10253-80%",
                    inline: true
                }]
            }
        }); //nightmare.png'});
    };
    this.ninjagrenade = function(message) {
        message.channel.send({
            embed: {
                title: "__Ninja Grenade MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FNinjaGrenade.png?v=1561576934361"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=795?-60% \n" + Emoji.Star + "=1359-70% \n" + Emoji.Star + Emoji.Star + "=1890-80% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2398-90%",
                    inline: true
                }]
            }
        }); //ninjagrenade.png'});
    };
    this.obscuringexplode = function(message) {
        message.channel.send({
            embed: {
                title: "__Obscuring Explode MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FObscuringExplode.png?1508176908786"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=915-30% \n" + Emoji.Star + "=1603-40% \n" + Emoji.Star + Emoji.Star + "=2233-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2836-60%",
                    inline: true
                }]
            }
        }); //obscuringexplode.png'});
    };
    this.oilbag = function(message) {
        message.channel.send({
            embed: {
                title: "__Oil Bag MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FOilBag.png?1508521480125"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=692-20% \n" + Emoji.Star + "=1203-30% \n" + Emoji.Star + Emoji.Star + "=1672-40%",
                    inline: true
                }]
            }
        }); //oilbag.png'});
    };
    this.oildart = function(message) {
        message.channel.send({
            embed: {
                title: "__Oil Dart MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FOilDart.png?1508521502178"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=306-10% \n" + Emoji.Star + "=531-20% \n" + Emoji.Star + Emoji.Star + "=739-30%",
                    inline: true
                }]
            }
        }); //oildart.png'});
    };
    this.oilspill = function(message) {
        message.channel.send({
            embed: {
                title: "__Oil Spill MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FOilSpill.png?1508521526382"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=386-15% \n" + Emoji.Star + "=671-25% \n" + Emoji.Star + Emoji.Star + "=933-35%",
                    inline: true
                }]
            }
        }); //oilspill.png'});
    };
    this.outofsight = function(message) {
        message.channel.send({
            embed: {
                title: "__Out of Sight MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FOutofSight.png?v=1561576934925"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=903-20% \n" + Emoji.Star + "=1593-30% \n" + Emoji.Star + Emoji.Star + "=2225-40% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2829-50%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1731-25% \n" + Emoji.Star + "=3051-35% \n" + Emoji.Star + Emoji.Star + "=4259-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5414-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=6539-65%",
                    inline: true
                }]
            }
        }); //outofsight.png'});
    };
    this.oysterblunderbuss = function(message) {
        message.channel.send({
            embed: {
                title: "__Oyster Blunderbuss MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FOysterBlunderbuss.png?1508521577225"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=692-20% \n" + Emoji.Star + "=1203-30% \n" + Emoji.Star + Emoji.Star + "=1672-40%",
                    inline: true
                }]
            }
        }); //oysterblunderbuss.png'});
    };
    this.partybubble = function(message) {
        message.channel.send({
            embed: {
                title: "__Party Bubble MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPartyBubble.png?1508521601619"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=370-30% \n" + Emoji.Star + "=643-40% \n" + Emoji.Star + Emoji.Star + "=894-50%",
                    inline: true
                }]
            }
        }); //partybubble.png'});
    };
    this.peacepipe = function(message) {
        message.channel.send({
            embed: {
                title: "__Peace Pipe MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPeacePipe2.png?v=1606058310999"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1326-20% \n" + Emoji.Star + "=2340-30% \n" + Emoji.Star + Emoji.Star + "=3268-40% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=4155-50%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1305-35% \n" + Emoji.Star + "=2269-45% \n" + Emoji.Star + Emoji.Star + "=3153-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=4000-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=4825-75%",
                    inline: true
                }]
            }
        }); //peacepipe.png'});
    };
    this.perfectdart = function(message) {
        message.channel.send({
            embed: {
                title: "__Perfect Dart MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPerfectDart.png?1552812682759"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=258-25% \n" + Emoji.Star + "=444-35% \n" + Emoji.Star + Emoji.Star + "=615-45%",
                    inline: true
                }]
            }
        }); //perfectdart.png'});
    };
    this.perfectsight = function(message) {
        message.channel.send({
            embed: {
                title: "__Perfect Sight MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2Fperfectsight.png?1516127923235"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=615-40% \n" + Emoji.Star + "=1056-50% \n" + Emoji.Star + Emoji.Star + "=1460-60%",
                    inline: true
                }]
            }
        }); //perfectsight.png'});
    };
    this.perfectslash = function(message) {
        message.channel.send({
            embed: {
                title: "__Perfect Slash MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPerfectSlash.png?1552960201995"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=599-25% \n" + Emoji.Star + "=1040-35% \n" + Emoji.Star + Emoji.Star + "=1445-45%",
                    inline: true
                }]
            }
        }); //perfectslash.png'});
    };
    this.perfectstab = function(message) {
        message.channel.send({
            embed: {
                title: "__Perfect Stab MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPerfectStab.png?1508523557362"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=599-25% \n" + Emoji.Star + "=1040-35% \n" + Emoji.Star + Emoji.Star + "=1445-45%",
                    inline: true
                }]
            }
        }); //perfectslash.png'});
    };
    this.perfectcut = function(message) {
        message.channel.send({
            embed: {
                title: "__Perfect Cut MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPerfectCut.png?1508523666725"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=599-25% \n" + Emoji.Star + "=1040-35% \n" + Emoji.Star + Emoji.Star + "=1445-45%",
                    inline: true
                }]
            }
        }); //perfectslash.png'});
    };
    this.phoenixcloak = function(message) {
        message.channel.send({
            embed: {
                title: "__Phoenix Cloak MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPhoenixCloak.png?1552624893701"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=863-40% \n" + Emoji.Star + "=1513-50% \n" + Emoji.Star + Emoji.Star + "=2109-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2679-70%",
                    inline: true
                }]
            }
        });
    };
    this.piercedheart = function(message) {
        message.channel.send({
            embed: {
                title: "__Pierced Heart MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPiercedHeart.png?1508521750706"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=412-25% \n" + Emoji.Star + "=721-35% \n" + Emoji.Star + Emoji.Star + "=1005-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1276-55%",
                    inline: true
                }]
            }
        }); //piercedheart.png'});
    };
    this.piercinghellfire = function(message) {
        message.channel.send({
            embed: {
                title: "__Piercing Hellfire MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPiercingHellfire.png?1552960203782"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1778-30% \n" + Emoji.Star + "=3137-40% \n" + Emoji.Star + Emoji.Star + "=4381-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5570-60%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=2148-35% \n" + Emoji.Star + "=3766-45% \n" + Emoji.Star + Emoji.Star + "=5249-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6667-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=8049-75%",
                    inline: true
                }]
            }
        }); //piercinghellfire.png'});
    };
    this.piercingshard = function(message) {
        message.channel.send({
            embed: {
                title: "__Piercing Shard MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPiercingShard.png?1508521780199"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=418-15% \n" + Emoji.Star + "=727-25% \n" + Emoji.Star + Emoji.Star + "=1010-35%",
                    inline: true
                }]
            }
        }); //piercingshard.png'});
    };
    this.piercingspear = function(message) {
        message.channel.send({
            embed: {
                title: "__Piercing Spear MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPiercingSpear.png?1508521804863"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=531-40% \n" + Emoji.Star + "=923-50% \n" + Emoji.Star + Emoji.Star + "=1283-60%",
                    inline: true
                }]
            }
        }); //piercingspear.png'});
    };
    this.pinbarrage = function(message) {
        message.channel.send({
            embed: {
                title: "__Pin Barrage MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPinBarrage.png?1508521830673"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=998-25% \n" + Emoji.Star + "=1735-35% \n" + Emoji.Star + Emoji.Star + "=2411-45%",
                    inline: true
                }]
            }
        }); //pinbarrage.png'});
    };
    this.piranhapistol = function(message) {
        message.channel.send({
            embed: {
                title: "__Piranha Pistol MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPiranhaPistol.png?1508521856251"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=531-15% \n" + Emoji.Star + "=923-25% \n" + Emoji.Star + Emoji.Star + "=1283-35%",
                    inline: true
                }]
            }
        }); //piranhapistol.png'});
    };
    this.poseidonswill = function(message) {
        message.channel.send({
            embed: {
                title: "__Poseidon's Will MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPoseidonsWill.png?1552627535271"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1051-40% \n" + Emoji.Star + "=1830-50% \n" + Emoji.Star + Emoji.Star + "=2545-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3229-70%",
                    inline: true
                }]
            }
        }); //poseidonswill.png'});
    };
    this.poisoncloud = function(message) {
        message.channel.send({
            embed: {
                title: "__Poison Cloud MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPoisonCloud.png?1508176911476"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=805-25% \n" + Emoji.Star + "=1399-35% \n" + Emoji.Star + Emoji.Star + "=1944-45%",
                    inline: true
                }]
            }
        }); //poisoncloud.png'});
    };
    this.poisongrenade = function(message) {
        message.channel.send({
            embed: {
                title: "__Poison Grenade MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPoisonGrenade.png?1508176916130"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=612-30% \n" + Emoji.Star + "=1063-40% \n" + Emoji.Star + Emoji.Star + "=1478-50%",
                    inline: true
                }]
            }
        }); //poisongrenade.png'});
    };
    this.poisonouscurrents = function(message) {
        message.channel.send({
            embed: {
                title: "__Poisonous Currents MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPoisonousCurrents.png?v=1606132949654"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1569-25% \n" + Emoji.Star + "=2774-35% \n" + Emoji.Star + Emoji.Star + "=3877-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=4930-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=2108-25% \n" + Emoji.Star + "=3744-35% \n" + Emoji.Star + Emoji.Star + "=5240-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6669-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=8060-65%",
                    inline: true
                }]
            }
        });
    };
    this.poisonousdart = function(message) {
        message.channel.send({
            embed: {
                title: "__Poisonous Dart MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPoisonousDart.png?1508176912290"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=209-10% \n" + Emoji.Star + "=363-20% \n" + Emoji.Star + Emoji.Star + "=505-30%",
                    inline: true
                }]
            }
        }); //poisonous dart.png'});
    };
    this.poisonousdung = function(message) {
        message.channel.send({
            embed: {
                title: "__Poisonous Dung MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPoisonousDung.png?1508176915479"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=870-20% \n" + Emoji.Star + "=1512-30% \n" + Emoji.Star + Emoji.Star + "=2101-40%",
                    inline: true
                }]
            }
        }); //poisonous dung.png'});
    };
    this.poisonoustip = function(message) {
        message.channel.send({
            embed: {
                title: "__Poisonous Tip MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPoisonousTip.png?1508176909662"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=934-20% \n" + Emoji.Star + "=1623-30% \n" + Emoji.Star + Emoji.Star + "=2256-40%",
                    inline: true
                }]
            }
        }); //poisonoustip.png'});
    };
    this.powershield = function(message) {
        message.channel.send({
            embed: {
                title: "__Power Shield MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPowerShield.png?1508521885358"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=596-40% \n" + Emoji.Star + "=1035-50% \n" + Emoji.Star + Emoji.Star + "=1439-60%",
                    inline: true
                }]
            }
        }); //powershield.png'});
    };
    this.pucksgrace = function(message) {
        message.channel.send({
            embed: {
                title: "__Puck's Grace MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPucksGrace.png?1552627535141"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1185-30% \n" + Emoji.Star + "=2091-40% \n" + Emoji.Star + Emoji.Star + "=2920-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3713-60%",
                    inline: true
                }]
            }
        }); //pucksgrace.png'});
    };
    this.pumpkinfield = function(message) {
        message.channel.send({
            embed: {
                title: "__Pumpkin Field MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPumpkinField.png?1533422860944"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1025-40% \n" + Emoji.Star + "=1800-50% \n" + Emoji.Star + Emoji.Star + "=2510-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3188-70%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1442-35% \n" + Emoji.Star + "=2545-45% \n" + Emoji.Star + Emoji.Star + "=3554-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=4519-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=5459-75%",
                    inline: true
                }]
            }
        }); //pumpkinfield.png'});
    };
    this.pyroclasticsphere = function(message) {
        message.channel.send({
            embed: {
                title: "__Pyroclastic Sphere MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPyroclasticSphere.png?1552804992731"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1118-60% \n" + Emoji.Star + "=1972-70% \n" + Emoji.Star + Emoji.Star + "=2754-80% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3501-90%",
                    inline: true
                }]
            }
        }); //pyroclasticsphere.png'});
    };
    this.pyroclasticstrike = function(message) {
        message.channel.send({
            embed: {
                title: "__Pyroclastic Strike MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPyroclasticStrike.png?1508522040536"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1183-60% \n" + Emoji.Star + "=2089-70% \n" + Emoji.Star + Emoji.Star + "=2919-80% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3712-90%",
                    inline: true
                }]
            }
        }); //pyroclasticstrike.png'});
    };
    this.pyrodagger = function(message) {
        message.channel.send({
            embed: {
                title: "__Pyro Dagger MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FPyroDagger.png?1552804992452"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=846-60% \n" + Emoji.Star + "=1485-70% \n" + Emoji.Star + Emoji.Star + "=2630-80% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3176-90%",
                    inline: true
                }]
            }
        });
    };
    this.quadslash = function(message) {
        message.channel.send({
            embed: {
                title: "__Quad Slash MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FQuadSlash.png?1524212642227"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=959-25% \n" + Emoji.Star + "=1692-35% \n" + Emoji.Star + Emoji.Star + "=2364-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3006-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1128-30% \n" + Emoji.Star + "=1970-40% \n" + Emoji.Star + Emoji.Star + "=2743-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3482-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=4202-70%",
                    inline: true
                }]
            }
        }); //quadslash.png'});
    };
    this.quartzstone = function(message) {
        message.channel.send({
            embed: {
                title: "__Quartzstone MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FQuartzstone.png?1508522322762"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=982-40% \n" + Emoji.Star + "=1707-50% \n" + Emoji.Star + Emoji.Star + "=2372-60%",
                    inline: true
                }]
            }
        }); //quartzstone.png'});
    };
    this.quicksilver = function(message) {
        message.channel.send({
            embed: {
                title: "__Quicksilver MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FQuicksilver.png?1552804992331"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=384-20% \n" + Emoji.Star + "=676-30% \n" + Emoji.Star + Emoji.Star + "=945-40% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1201-50%",
                    inline: true
                }]
            }
        }); //quicksilver.png'});
    };
    this.quiveringsole = function(message) {
        message.channel.send({
            embed: {
                title: "__Quivering Sole MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FQuiveringSole.png?1555459552762"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1667-45% \n" + Emoji.Star + "=2940-55% \n" + Emoji.Star + Emoji.Star + "=4106-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5221-75%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1667-30% \n" + Emoji.Star + "=2940-40% \n" + Emoji.Star + Emoji.Star + "=4106-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5221-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=6306-70%",
                    inline: true
                }]
            }
        });
    };
    this.rainoffire = function(message) {
        message.channel.send({
            embed: {
                title: "__Rain of Fire MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FRainOfFire.png?v=1606571642647"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1580-15% \n" + Emoji.Star + "=2788-25% \n" + Emoji.Star + Emoji.Star + "=3894-35% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=4951-45%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1899-30% \n" + Emoji.Star + "=3361-40% \n" + Emoji.Star + Emoji.Star + "=4699-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5978-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=7222-70%",
                    inline: true
                }]
            }
        }); //rainoffire.png'});
    };
    this.rejuvenateall = function(message) {
        message.channel.send({
            embed: {
                title: "__Rejuvenate All MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FRejuvenateAll.png?1552716731843"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=903-20% \n" + Emoji.Star + "=1593-30% \n" + Emoji.Star + Emoji.Star + "=2225-40% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2829-50%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1029-25% \n" + Emoji.Star + "=1803-35% \n" + Emoji.Star + Emoji.Star + "=2512-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3191-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=3852-65%",
                    inline: true
                }]
            }
        }); //rejuvenateall.png'});
    };
    this.retributioncurse = function(message) {
        message.channel.send({
            embed: {
                title: "__Retribution Curse MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FRetributionCurse.png?1552627535562"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1628-40% \n" + Emoji.Star + "=2870-50% \n" + Emoji.Star + Emoji.Star + "=4007-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5094-70%",
                    inline: true
                }]
            }
        });
    };
    this.rideofthevalkyries = function(message) {
        message.channel.send({
            embed: {
                title: "__Ride of the Valkyries MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FRideoftheValkyries.png?1552641654378"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=931-30% \n" + Emoji.Star + "=1643-40% \n" + Emoji.Star + Emoji.Star + "=2294-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2917-60%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1143-35% \n" + Emoji.Star + "=1992-45% \n" + Emoji.Star + Emoji.Star + "=2771-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3516-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=4243-75%",
                    inline: true
                }]
            }
        }); //rideofthevalkyries.png'});
    };
    this.rockingroll = function(message) {
        message.channel.send({
            embed: {
                title: "__Rocking Roll MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FRockingRoll.png?1508176962013"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=4261-40% \n" + Emoji.Star + "=7519-50% \n" + Emoji.Star + Emoji.Star + "=10501-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=13352-70%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=4365-45% \n" + Emoji.Star + "=7657-55% \n" + Emoji.Star + Emoji.Star + "=10673-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=13557-75% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=16366-85%",
                    inline: true
                }]
            }
        }); //rockingroll.png'});
    };
    this.rootarrow = function(message) {
        message.channel.send({
            embed: {
                title: "__Root Arrow MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FRootArrow.png?v=1561576936263"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=395-40% \n" + Emoji.Star + "=697-50% \n" + Emoji.Star + Emoji.Star + "=973-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1237-70%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=395-25% \n" + Emoji.Star + "=697-35% \n" + Emoji.Star + Emoji.Star + "=973-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1237-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=1495-65%",
                    inline: true
                }]
            }
        });
    };
    this.roosterarrow = function(message) {
        message.channel.send({
            embed: {
                title: "__Rooster Arrow MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FRoosterArrow.png?1508522523976"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=370/370-30% \n" + Emoji.Star + "=642/642-40% \n" + Emoji.Star + Emoji.Star + "=892/892-50%",
                    inline: true
                }]
            }
        }); //roosterarrow.png'});
    };
    this.rumshower = function(message) {
        message.channel.send({
            embed: {
                title: "__Rum Shower MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FRumShower.png?1508522555989"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=714-15% \n" + Emoji.Star + "=1240-25% \n" + Emoji.Star + Emoji.Star + "=1724-35%",
                    inline: true
                }]
            }
        }); //rumshower.png'});
    };
    this.safeguard = function(message) {
        message.channel.send({
            embed: {
                title: "__Safeguard MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSafeguard.png?1552641655563"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1326/1326-25% \n" + Emoji.Star + "=2340/2340-35% \n" + Emoji.Star + Emoji.Star + "=3268/3268-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=4155/4155-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1525/1525-50% \n" + Emoji.Star + "=2690/2690-60% \n" + Emoji.Star + Emoji.Star + "=3757/3757-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=4776/4776-80% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=5768/5768-90%",
                    inline: true
                }]
            }
        }); //safeguard.png'});
    };
    this.salamanderale = function(message) {
        message.channel.send({
            embed: {
                title: "__Salamander Ale MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSalamanderAle.png?v=1606059501864"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1191-60% \n" + Emoji.Star + "=2089-70% \n" + Emoji.Star + Emoji.Star + "=2912-80% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3699-90%",
                    inline: true
                }]
            }
        });
    };
    this.salamanderskin = function(message) {
        message.channel.send({
            embed: {
                title: "__Salamander Skin MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSalamanderSkin.png?1552960204908"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=596-45% \n" + Emoji.Star + "=1035-55% \n" + Emoji.Star + Emoji.Star + "=1439-65%",
                    inline: true
                }]
            }
        }); //salamanderskin.png'});
    };
    this.scorchingflames = function(message) {
        message.channel.send({
            embed: {
                title: "__Scorching Flames MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FScorchingFlames.png?1518534067524"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=413-60% \n" + Emoji.Star + "=722-70% \n" + Emoji.Star + Emoji.Star + "=1006-80% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1277-90%",
                    inline: true
                }]
            }
        }); //scorchingflames.png'});
    };
    this.setback = function(message) {
        message.channel.send({
            embed: {
                title: "__Setback MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSetback.png?1512756666665"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=804-15% \n" + Emoji.Star + "=1397-25% \n" + Emoji.Star + Emoji.Star + "=1942-35%",
                    inline: true
                }]
            }
        }); //setback.png'});
    };
    this.sharkcannon = function(message) {
        message.channel.send({
            embed: {
                title: "__Shark Cannon MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSharkCannon.png?1508176949564"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1024-30% \n" + Emoji.Star + "=1803-40% \n" + Emoji.Star + Emoji.Star + "=2518-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3200-60%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1414-35% \n" + Emoji.Star + "=2503-45% \n" + Emoji.Star + Emoji.Star + "=3499-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=4451-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=5378-75%",
                    inline: true
                }]
            }
        }); //sharkcannon.png'});
    };
    this.shadowsteps = function(message) {
        message.channel.send({
            embed: {
                title: "__Shadow Steps MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FvW63Z49.png?1553051127035"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1677-30% \n" + Emoji.Star + "=2958-40% \n" + Emoji.Star + Emoji.Star + "=4132-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5253-60%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1677-35% \n" + Emoji.Star + "=2958-45% \n" + Emoji.Star + Emoji.Star + "=4132-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5253-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=6344-75%",
                    inline: true
                }]
            }
        });
    };
    this.sharptongue = function(message) {
        message.channel.send({
            embed: {
                title: "__Sharp Tongue MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSharpTongue.png?v=1606843338459"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=932-40% \n" + Emoji.Star + "=1627-50% \n" + Emoji.Star + Emoji.Star + "=2265-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2875-70%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=932-45% \n" + Emoji.Star + "=1627-55% \n" + Emoji.Star + Emoji.Star + "=2265-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2875-75% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=3470-85%",
                    inline: true
                }]
            }
        });
    };
    this.shieldofthenature = function(message) {
        message.channel.send({
            embed: {
                title: "__Shield of The Nature MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FShieldofTheNature.png?1552960203004"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1040/413-15% \n" + Emoji.Star + "=1812/722-25% \n" + Emoji.Star + Emoji.Star + "=2520/1006-35% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3197/1277-45%",
                    inline: true
                }]
            }
        }); //shieldofthenature.png'});
    };
    this.shieldinglight = function(message) {
        message.channel.send({
            embed: {
                title: "__Shielding Light MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FShieldingLight.png?1508522696089"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=580-20% \n" + Emoji.Star + "=1008-30% \n" + Emoji.Star + Emoji.Star + "=1400-40%",
                    inline: true
                }]
            }
        }); //shieldinglight.png'});
    };
    this.shockingaxe = function(message) {
        message.channel.send({
            embed: {
                title: "__Shocking Axe MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FShockingAxe.png?1508522721327"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=1079-30% \n" + Emoji.Star + "=1875-40% \n" + Emoji.Star + Emoji.Star + "=2606-50%",
                    inline: true
                }]
            }
        }); //shockingaxe.png'});
    };
    this.shockingbag = function(message) {
        message.channel.send({
            embed: {
                title: "__Shocking Bag MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FShockingBag.png?1508522748026"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=467-30% \n" + Emoji.Star + "=811-40% \n" + Emoji.Star + Emoji.Star + "=1128-50%",
                    inline: true
                }]
            }
        }); //shockingbag.png'});
    };
    this.shockingdart = function(message) {
        message.channel.send({
            embed: {
                title: "__Shocking Dart MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FShockingDart.png?1508176970084"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=209-20% \n" + Emoji.Star + "=363-30% \n" + Emoji.Star + Emoji.Star + "=505-40%",
                    inline: true
                }]
            }
        }); //shockingdart.png'});
    };
    this.shockingpin = function(message) {
        message.channel.send({
            embed: {
                title: "__Shocking Pin MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FShockingPin.png?1508176914793"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=934-20% \n" + Emoji.Star + "=1623-30% \n" + Emoji.Star + Emoji.Star + "=2256-40%",
                    inline: true
                }]
            }
        }); //shockingpin.png'});
    };
    this.shockingsword = function(message) {
        message.channel.send({
            embed: {
                title: "__Shocking Sword MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FShockingSword.png?1508176910960"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=1337-25% \n" + Emoji.Star + "=2323-35% \n" + Emoji.Star + Emoji.Star + "=3229-45%",
                    inline: true
                }]
            }
        }); //shockingsword.png'});
    };
    this.silverdart = function(message) {
        message.channel.send({
            embed: {
                title: "__Silver Dart MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSilverDart.png?1508176916577"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=241-30% \n" + Emoji.Star + "=419-40% \n" + Emoji.Star + Emoji.Star + "=583-50%",
                    inline: true
                }]
            }
        }); //silverdart.png'});
    };
    this.silverlakeshards = function(message) {
        message.channel.send({
            embed: {
                title: "__Silverlake Shards MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSilverlakeShards.png?1552960204782"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=667-25% \n" + Emoji.Star + "=1170-35% \n" + Emoji.Star + Emoji.Star + "=1632-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2073-55%",
                    inline: true
                }]
            }
        }); //silverlakeshards.png'});
    };
    this.silverlakesword = function(message) {
        message.channel.send({
            embed: {
                title: "__Silverlake Sword MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSilverlakeSword.png?1553051128296"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=2032-35% \n" + Emoji.Star + "=3585-45% \n" + Emoji.Star + Emoji.Star + "=5007-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6366-65%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1979-40% \n" + Emoji.Star + "=3412-50% \n" + Emoji.Star + Emoji.Star + "=4729-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5991-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=7221-80%",
                    inline: true
                }]
            }
        }); //silverlakesword.png'});
    };
    this.skypiercer = function(message) {
        message.channel.send({
            embed: {
                title: "__Sky Piercer MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSkyPiercer.png?1516129835763"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1072-25% \n" + Emoji.Star + "=1891-35% \n" + Emoji.Star + Emoji.Star + "=2642-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3359-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1241-30% \n" + Emoji.Star + "=2178-40% \n" + Emoji.Star + Emoji.Star + "=3037-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3858-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=4658-70%",
                    inline: true
                }]
            }
        }); //skypiercer.png'});
    };
    this.sleepingdust = function(message) {
        message.channel.send({
            embed: {
                title: "__Sleeping Dust MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSleepingDust.png?1508176968194"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=322-15% \n" + Emoji.Star + "=559-25% \n" + Emoji.Star + Emoji.Star + "=778-35%",
                    inline: true
                }]
            }
        }); //sleepingdust.png'});
    };
    this.sleepingsceptre = function(message) {
        message.channel.send({
            embed: {
                title: "__Sleeping Sceptre MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSleepingSceptre.png?1508176968615"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=789-20% \n" + Emoji.Star + "=1371-30% \n" + Emoji.Star + Emoji.Star + "=1906-40%",
                    inline: true
                }]
            }
        }); //sleepingspectre.png'});
    };
    this.slowdart = function(message) {
        message.channel.send({
            embed: {
                title: "__Slow Dart MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSlowDart.png?v=1561576937364"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=384-30% \n" + Emoji.Star + "=676-40% \n" + Emoji.Star + Emoji.Star + "=945-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1201-60%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=456-35% \n" + Emoji.Star + "=805-45% \n" + Emoji.Star + Emoji.Star + "=1125-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1431-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=1729-75%",
                    inline: true
                }]
            }
        });
    };
    this.smellingsalts = function(message) {
        message.channel.send({
            embed: {
                title: "__Smelling Salts MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSmellingSalts.png?1552804993126"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=4007-25% \n" + Emoji.Star + "=7071-35% \n" + Emoji.Star + Emoji.Star + "=9875-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=12556-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=5016-30% \n" + Emoji.Star + "=8880-40% \n" + Emoji.Star + Emoji.Star + "=12415-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=15792-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=19080-70%",
                    inline: true
                }]
            }
        }); //smellingsalts.png'});
    };
    this.smokebomb = function(message) {
        message.channel.send({
            embed: {
                title: "__Smoke Bomb MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSmokeBomb.png?1508176966025"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=525-30% \n" + Emoji.Star + "=913-40% \n" + Emoji.Star + Emoji.Star + "=1269-50%",
                    inline: true
                }]
            }
        }); //smokebomb.png'});
    };
    this.snakecharmer = function(message) {
        message.channel.send({
            embed: {
                title: "__Snake Charmer MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSnakeCharmer.png?1508176949564"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1185-30% \n" + Emoji.Star + "=2091-40% \n" + Emoji.Star + Emoji.Star + "=2920-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3713-60%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1515-35% \n" + Emoji.Star + "=2682-45% \n" + Emoji.Star + Emoji.Star + "=3749-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=4769-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=5762-75%",
                    inline: true
                }]
            }
        }); //snakecharmer.png'});
    };
    this.snowballssquall = function(message) {
        message.channel.send({
            embed: {
                title: "__Snowball Squall MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSnowballsSquall.png?1508522846136"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=547-25% \n" + Emoji.Star + "=951-35% \n" + Emoji.Star + Emoji.Star + "=1322-45%",
                    inline: true
                }]
            }
        }); //snowballssquall.png'});
    };
    this.sorcerersgift = function(message) {
        message.channel.send({
            embed: {
                title: "__Sorcerer's Gift MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSorcerersGift.png?1519824359254"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=981/374-30% \n" + Emoji.Star + "=1704/955-40% \n" + Emoji.Star + Emoji.Star + "=2368/1488-50%",
                    inline: true
                }]
            }
        }); //sorcerersgift.png'});
    };
    this.songofnature = function(message) {
        message.channel.send({
            embed: {
                title: "__Song of Nature MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSongofNature.png?1552641657156"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=451-35% \n" + Emoji.Star + "=787-45% \n" + Emoji.Star + Emoji.Star + "=1095-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1390-65%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=476-30% \n" + Emoji.Star + "=821-40% \n" + Emoji.Star + Emoji.Star + "=1131-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1443-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=1740-70%",
                    inline: true
                }]
            }
        });
    };
    this.spectralprotection = function(message) {
        message.channel.send({
            embed: {
                title: "__Spectral Protection MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSpectralProtection.png?1508176972356"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=1562-20% \n" + Emoji.Star + "=2715-30% \n" + Emoji.Star + Emoji.Star + "=3773-40%",
                    inline: true
                }]
            }
        }); //spectralprotection.png'});
    };
    this.speedoflight = function(message) {
        message.channel.send({
            embed: {
                title: "__Speed of Light MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSpeedofLight.png?1552804993001"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=2624-25% \n" + Emoji.Star + "=4630-35% \n" + Emoji.Star + Emoji.Star + "=6467-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=8223-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=3299-30% \n" + Emoji.Star + "=5840-40% \n" + Emoji.Star + Emoji.Star + "=8165-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=10387-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=12549-70%",
                    inline: true
                }]
            }
        }); //speedoflight.png'});
    };
    this.spentforce = function(message) {
        message.channel.send({
            embed: {
                title: "__Spent Force MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSpentForce.png?1552960202118"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=2229-35% \n" + Emoji.Star + "=3933-45% \n" + Emoji.Star + Emoji.Star + "=5494-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6985-65%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1584-40% \n" + Emoji.Star + "=2795-50% \n" + Emoji.Star + Emoji.Star + "=3905-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=4965-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=5997-80%",
                    inline: true
                }]
            }
        }); //spentforce.png'});
    };
    this.spikebarrage = function(message) {
        message.channel.send({
            embed: {
                title: "__Spike Barrage MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSpikeBarrage.png?1508176973697"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=998-25% \n" + Emoji.Star + "=1735-35% \n" + Emoji.Star + Emoji.Star + "=2411-45%",
                    inline: true
                }]
            }
        }); //spikebarrage.png'});
    };
    this.spikedtrap = function(message) {
        message.channel.send({
            embed: {
                title: "__Spiked Trap MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSpikedTrap.png?1552960203301"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1180/867-25% \n" + Emoji.Star + "=2080/1536-35% \n" + Emoji.Star + Emoji.Star + "=2905/2148-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3693/2733-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1105/1105-30% \n" + Emoji.Star + "=1947/1947-40% \n" + Emoji.Star + Emoji.Star + "=2718/2718-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3455/3455-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=4173/4173-70%",
                    inline: true
                }]
            }
        });
    };
    this.stingraydart = function(message) {
        message.channel.send({
            embed: {
                title: "__Stingray Dart MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FStingrayDart.png?1508176998073"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=257-10% \n" + Emoji.Star + "=447-20% \n" + Emoji.Star + Emoji.Star + "=621-30%",
                    inline: true
                }]
            }
        }); //stingraydart.png'});
    };
    this.stormdagger = function(message) {
        message.channel.send({
            embed: {
                title: "__Storm Dagger MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FStormDagger.png?1552960204042"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=676-25% \n" + Emoji.Star + "=1175-35% \n" + Emoji.Star + Emoji.Star + "=1633-45%",
                    inline: true
                }]
            }
        });
    };
    this.stormdart = function(message) {
        message.channel.send({
            embed: {
                title: "__Storm Dart MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FStormDart.png?1508176974448"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=241-40% \n" + Emoji.Star + "=419-50% \n" + Emoji.Star + Emoji.Star + "=583-60%",
                    inline: true
                }]
            }
        }); //stormdart.png'});
    };
    this.stormedge = function(message) {
        message.channel.send({
            embed: {
                title: "__Storm Edge MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FStormEdge.png?1508176978001"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=676-25% \n" + Emoji.Star + "=1175-35% \n" + Emoji.Star + Emoji.Star + "=1633-45%",
                    inline: true
                }]
            }
        }); //stormedge.png'});
    };
    this.stormsend = function(message) {
        message.channel.send({
            embed: {
                title: "__Storm's End MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FStormsEnd.png?1508176954264"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1241-20% \n" + Emoji.Star + "=2190-30% \n" + Emoji.Star + Emoji.Star + "=3059-40% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3890-50%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1236-25% \n" + Emoji.Star + "=2164-35% \n" + Emoji.Star + Emoji.Star + "=3016-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3830-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=4623-65%",
                    inline: true
                }]
            }
        }); //stormsend.png'});
    };
    this.stunningboulder = function(message) {
        message.channel.send({
            embed: {
                title: "__Stunning Boulder MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FStunningBoulder.png?1508176982645"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=886-20% \n" + Emoji.Star + "=1539-30% \n" + Emoji.Star + Emoji.Star + "=2139-40%",
                    inline: true
                }]
            }
        }); //stunningboulder.png'});
    };
    this.stunningearth = function(message) {
        message.channel.send({
            embed: {
                title: "__Stunning Earth MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FStunningEarth.png?1508177009294"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=982-20% \n" + Emoji.Star + "=1707-30% \n" + Emoji.Star + Emoji.Star + "=2372-40%",
                    inline: true
                }]
            }
        }); //stunningearth.png'});
    };
    this.stunningheat = function(message) {
        message.channel.send({
            embed: {
                title: "__Stunning Heat MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FStunningHeat.png?1508177001822"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=982-30% \n" + Emoji.Star + "=1707-40% \n" + Emoji.Star + Emoji.Star + "=2372-50%",
                    inline: true
                }]
            }
        }); //stunningheat.png'});
    };
    this.stunningstaff = function(message) {
        message.channel.send({
            embed: {
                title: "__Stunning Staff MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FStunningStaff.png?1508177009048"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=547-15% \n" + Emoji.Star + "=951-25% \n" + Emoji.Star + Emoji.Star + "=1322-35%",
                    inline: true
                }]
            }
        }); //stunningstaff.png'});
    };
    this.sunderedrocks = function(message) {
        message.channel.send({
            embed: {
                title: "__Sundered Rocks MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSunderedRocks.png?1508176986266"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=692-20% \n" + Emoji.Star + "=1203-30% \n" + Emoji.Star + Emoji.Star + "=1672-40%",
                    inline: true
                }]
            }
        }); //sunderedrocks.png'});
    };
    this.sweetcorn = function(message) {
        message.channel.send({
            embed: {
                title: "__Sweet Corn MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSweetCorn.png?v=1561576937045"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=2032-20% \n" + Emoji.Star + "=3585-30% \n" + Emoji.Star + Emoji.Star + "=5007-40% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6366-50%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=2045-40% \n" + Emoji.Star + "=3596-50% \n" + Emoji.Star + Emoji.Star + "=5016-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6374-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=7697-80%",
                    inline: true
                }]
            }
        }); //sweetcorn.png'});
    };
    this.swordofjustice = function(message) {
        message.channel.send({
            embed: {
                title: "__Sword of Justice MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSwordofJustice.png?1508176994521"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=584/584-25% \n" + Emoji.Star + "=1011/1011-35% \n" + Emoji.Star + Emoji.Star + "=1403/1403-45%",
                    inline: true
                }]
            }
        }); //swordofjustice.png'});
    };
    this.swordoflight = function(message) {
        message.channel.send({
            embed: {
                title: "__Sword of Light MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FSwordofLight.png?1552925710157"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1745-25% \n" + Emoji.Star + "=3076-35% \n" + Emoji.Star + Emoji.Star + "=4295-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5460-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1745-30% \n" + Emoji.Star + "=3076-40% \n" + Emoji.Star + Emoji.Star + "=4295-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5460-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=6595-70%",
                    inline: true
                }]
            }
        });
    };
    this.tempestamulet = function(message) {
        message.channel.send({
            embed: {
                title: "__Tempest Amulet MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FTempestAmulet.png?1508176992328"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=1433-15% \n" + Emoji.Star + "=2491-25% \n" + Emoji.Star + Emoji.Star + "=3462-35%",
                    inline: true
                }]
            }
        }); //tempestamulet.png'});
    };
    this.terramissile = function(message) {
        message.channel.send({
            embed: {
                title: "__Terra Missile MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FTerraMissile.png?1508176984567"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=644-25% \n" + Emoji.Star + "=1119-35% \n" + Emoji.Star + Emoji.Star + "=1556-45%",
                    inline: true
                }]
            }
        }); //terramissile.png'});
    };
    this.terrasword = function(message) {
        message.channel.send({
            embed: {
                title: "__Terra Sword MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FTerraSword.png?1508177000311"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=1498-25% \n" + Emoji.Star + "=2603-35% \n" + Emoji.Star + Emoji.Star + "=3618-45%",
                    inline: true
                }]
            }
        }); //terrasword.png'});
    };
    this.terratip = function(message) {
        message.channel.send({
            embed: {
                title: "__Terra Tip MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FTerraTip.png?1508177005150"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=531-25% \n" + Emoji.Star + "=923-35% \n" + Emoji.Star + Emoji.Star + "=1283-45%",
                    inline: true
                }]
            }
        }); //terratip.png'});
    };
    this.theequalizer = function(message) {
        message.channel.send({
            embed: {
                title: "__The Equalizer MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FTheEqualizer.png?1518533834946"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1343/1343-60% \n" + Emoji.Star + "=2353/2353-70% \n" + Emoji.Star + Emoji.Star + "=3278/3278-80% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=4164/4164-90%",
                    inline: true
                }]
            }
        }); //theequalizer.png'});
    };
    this.thekraken = function(message) {
        message.channel.send({
            embed: {
                title: "__The Kraken MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FTheKraken.png?1553051128423"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=903-35% \n" + Emoji.Star + "=1593-45% \n" + Emoji.Star + Emoji.Star + "=2225-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2829-65%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1021-40% \n" + Emoji.Star + "=1747-50% \n" + Emoji.Star + Emoji.Star + "=2416-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3057-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=3682-80%",
                    inline: true
                }]
            }
        }); //thekraken.png'});
    };
    this.thescabber = function(message) {
        message.channel.send({
            embed: {
                title: "__The Scabber MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FTheScabber.png?1508176960348"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=821-15% \n" + Emoji.Star + "=1427-25% \n" + Emoji.Star + Emoji.Star + "=1983-35%",
                    inline: true
                }]
            }
        }); //thescabber.png'});
    };
    this.thespice = function(message) {
        message.channel.send({
            embed: {
                title: "__The Spice MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FTheSpice.png?v=1606059502143"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=2795-30% \n" + Emoji.Star + "=4930-40% \n" + Emoji.Star + Emoji.Star + "=6886-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=8754-60%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=2795-50% \n" + Emoji.Star + "=4930-60% \n" + Emoji.Star + Emoji.Star + "=6886-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=8754-80% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=10574-90%",
                    inline: true
                }]
            }
        });
    };
    this.tidalkick = function(message) {
        message.channel.send({
            embed: {
                title: "__Tidal Kick MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FTidalKick.png?1508176979637"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=1417-25% \n" + Emoji.Star + "=2463-35% \n" + Emoji.Star + Emoji.Star + "=3423-45%",
                    inline: true
                }]
            }
        }); //tidalkick.png'});
    };
    this.tidescontrol = function(message) {
        message.channel.send({
            embed: {
                title: "__Tides Control MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FTidesControl.png?1508176990209"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=663/663-30% \n" + Emoji.Star + "=1164/1164-40% \n" + Emoji.Star + Emoji.Star + "=1624/1624-50%",
                    inline: true
                }]
            }
        }); //tidescontrol.png'});
    };
    this.tipbarrage = function(message) {
        message.channel.send({
            embed: {
                title: "__Tip Barrage MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FTipBarrage.png?1508176993272"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=998-25% \n" + Emoji.Star + "=1735-35% \n" + Emoji.Star + Emoji.Star + "=2411-45%",
                    inline: true
                }]
            }
        }); //tipbarrage.png'});
    };
    this.toxicbolt = function(message) {
        message.channel.send({
            embed: {
                title: "__Toxic Bolt MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FToxicBolt.png?v=1561576935431"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=295-40% \n" + Emoji.Star + "=511-50% \n" + Emoji.Star + Emoji.Star + "=709-60%",
                    inline: true
                }]
            }
        });
    };
    this.toxicvengeance = function(message) {
        message.channel.send({
            embed: {
                title: "__Toxic Vengeance MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FToxicVengeance.png?1552804992584"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=706-60% \n" + Emoji.Star + "=1239-70% \n" + Emoji.Star + Emoji.Star + "=1729-80% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2196-90%",
                    inline: true
                }]
            }
        }); //toxicvengeance.png'});
    };
    this.tritonswill = function(message) {
        message.channel.send({
            embed: {
                title: "__Triton's Will MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2Ftritonswill.png?1516127923492"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=690-25% \n" + Emoji.Star + "=1201-35% \n" + Emoji.Star + Emoji.Star + "=1669-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2117-55%",
                    inline: true
                }]
            }
        }); //tritonswill.png'});
    };
    this.tropicaljuice = function(message) {
        message.channel.send({
            embed: {
                title: "__Tropical Juice MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FTropicalJuice.png?1508176929716"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=1288-30% \n" + Emoji.Star + "=2239-40% \n" + Emoji.Star + Emoji.Star + "=3112-50%",
                    inline: true
                }]
            }
        }); //tropicaljuice.png'});
    };
    this.turkeyarrow = function(message) {
        message.channel.send({
            embed: {
                title: "__Turkey Arrow MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FTurkeyArrow.png?1508177009048"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=370/370-30% \n" + Emoji.Star + "=642/642-40% \n" + Emoji.Star + Emoji.Star + "=892/892-50%",
                    inline: true
                }]
            }
        }); //turkeyarrow.png'});
    };
    this.turkeysagitta = function(message) {
        message.channel.send({
            embed: {
                title: "__Turkey Sagitta MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FTurkeySagitta.png?1552641653751"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=410/410-30% \n" + Emoji.Star + "=720/720-40% \n" + Emoji.Star + Emoji.Star + "=1004/1004-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1275/1275-60%",
                    inline: true
                }]
            }
        }); //turkeysagitta.png'});
    };
    this.ubercornholio = function(message) {
        message.channel.send({
            embed: {
                title: "__Uber Cornholio MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FUberCornholio.png?1552960202387"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=2187/2187-25% \n" + Emoji.Star + "=3856/3856-35% \n" + Emoji.Star + Emoji.Star + "=5385/5385-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6845/6845-55%",
                    inline: true
                }]
            }
        }); //ubercornholio.png'});
    };
    this.valkyriesshield = function(message) {
        message.channel.send({
            embed: {
                title: "__Valkyries Shield MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FValkyriesShield.png?1508523298991"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=921-30% \n" + Emoji.Star + "=1598-40% \n" + Emoji.Star + Emoji.Star + "=2219-50%",
                    inline: true
                }]
            }
        }); //valkyriesshield.png'});
    };
    this.vampiricbats = function(message) {
        message.channel.send({
            embed: {
                title: "__Vampiric Bats MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FVampiricBats.png?1508177011704"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=757-15% \n" + Emoji.Star + "=1315-25% \n" + Emoji.Star + Emoji.Star + "=1828-35%",
                    inline: true
                }]
            }
        }); //vampiricbats.png'});
    };
    this.vampiriclord = function(message) {
        message.channel.send({
            embed: {
                title: "__Vampiric Lord MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FVampiricLord.png?1553051126618"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1070-30% \n" + Emoji.Star + "=1879-40% \n" + Emoji.Star + Emoji.Star + "=2621-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3329-60%",
                    inline: true
                }]
            }
        }); //vampiriclord.png'});
    };
    this.veggieskewer = function(message) {
        message.channel.send({
            embed: {
                title: "__Veggie Skewer MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FVeggieSkewer.png?1552716757509"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=902-40% \n" + Emoji.Star + "=1588-50% \n" + Emoji.Star + Emoji.Star + "=2217-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2818-70%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=981-50% \n" + Emoji.Star + "=1715-60% \n" + Emoji.Star + Emoji.Star + "=2389-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3033-80% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=3661-90%",
                    inline: true
                }]
            }
        });
    };
    this.vigilantshield = function(message) {
        message.channel.send({
            embed: {
                title: "__Vigilant Shield MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FVigilant%20Shield.png?v=1567105283046"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=717-40% \n" + Emoji.Star + "=1253-50% \n" + Emoji.Star + Emoji.Star + "=1745-60%",
                    inline: true
                }]
            }
        });
    };
    this.vinewrap = function(message) {
        message.channel.send({
            embed: {
                title: "__Vine Wrap MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FVineWrap.png?1552960202518"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=987-25% \n" + Emoji.Star + "=1742-35% \n" + Emoji.Star + Emoji.Star + "=2433-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3094-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=974-30% \n" + Emoji.Star + "=1705-40% \n" + Emoji.Star + Emoji.Star + "=2375-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3016-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=3641-70%",
                    inline: true
                }]
            }
        }); //vinewrap.png'});
    };
    this.volcano = function(message) {
        message.channel.send({
            embed: {
                title: "__Volcano MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FVolcano.png?1552641654645"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1226-35% \n" + Emoji.Star + "=2156-45% \n" + Emoji.Star + Emoji.Star + "=3009-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3824-65%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1270-40% \n" + Emoji.Star + "=2226-50% \n" + Emoji.Star + Emoji.Star + "=3102-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3940-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=4756-80%",
                    inline: true
                }]
            }
        }); //volcano.png'});
    };
    this.voodooritual = function(message) {
        message.channel.send({
            embed: {
                title: "__Voodoo Ritual MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FVoodooRitual.png?1516129836943"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=468-40% \n" + Emoji.Star + "=825-50% \n" + Emoji.Star + Emoji.Star + "=1151-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1464-70%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=638-45% \n" + Emoji.Star + "=1127-55% \n" + Emoji.Star + Emoji.Star + "=1575-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2003-75% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=2420-85%",
                    inline: true
                }]
            }
        }); //voodooritual.png'});
    };
    this.waraxe = function(message) {
        message.channel.send({
            embed: {
                title: "__War Axe MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-a07f-8e6db475835f%2FWarAxe.png?1508176976701"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=1015-30% \n" + Emoji.Star + "=1764-40% \n" + Emoji.Star + Emoji.Star + "=2451-50%",
                    inline: true
                }]
            }
        }); //waraxe.png'});
    };
    this.warpedseeds = function(message) {
        message.channel.send({
            embed: {
                title: "__Warped Seeds MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FWarpedSeeds.png?1508177000433"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=1192-15% \n" + Emoji.Star + "=2071-25% \n" + Emoji.Star + Emoji.Star + "=2879-35%",
                    inline: true
                }]
            }
        }); //warpedseeds.png'});
    };
    this.wetbag = function(message) {
        message.channel.send({
            embed: {
                title: "__Wet Bag MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FWetBag.png?1508177009048"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=692-30% \n" + Emoji.Star + "=1203-40% \n" + Emoji.Star + Emoji.Star + "=1672-50%",
                    inline: true
                }]
            }
        }); //wetbag.png'});
    };
    this.wetdagger = function(message) {
        message.channel.send({
            embed: {
                title: "__Wet Dagger MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FWetDagger.png?1508176985164"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=531-15% \n" + Emoji.Star + "=923-25% \n" + Emoji.Star + Emoji.Star + "=1283-35%",
                    inline: true
                }]
            }
        }); //wetdagger.png'});
    };
    this.wetkiss = function(message) {
        message.channel.send({
            embed: {
                title: "__Wet Kiss MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FWetKiss.png?1521756515678"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1947-25% \n" + Emoji.Star + "=3435-35% \n" + Emoji.Star + Emoji.Star + "=4798-45% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6101-55%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=2424-30% \n" + Emoji.Star + "=4291-40% \n" + Emoji.Star + Emoji.Star + "=5999-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=7631-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=9220-70%",
                    inline: true
                }]
            }
        }); //wetkiss.png'});
    };
    this.wetmissile = function(message) {
        message.channel.send({
            embed: {
                title: "__Wet Missile MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FWetMissile.png?1508176997717"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=644-25% \n" + Emoji.Star + "=1119-35% \n" + Emoji.Star + Emoji.Star + "=1556-45%",
                    inline: true
                }]
            }
        }); //wetmissile.png'});
    };
    this.whisperingblade = function(message) {
        message.channel.send({
            embed: {
                title: "__Whispering Blade MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FWhisperingBlade.png?1521756525467"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=846-40% \n" + Emoji.Star + "=1485-50% \n" + Emoji.Star + Emoji.Star + "=2070-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=2630-70%",
                    inline: true
                }]
            }
        }); //whisperingblade.png'});
    };
    this.windbarrier = function(message) {
        message.channel.send({
            embed: {
                title: "__Wind Barrier MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FWindBarrier.png?1508176934285"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=1031-15% \n" + Emoji.Star + "=1791-25% \n" + Emoji.Star + Emoji.Star + "=2490-35%",
                    inline: true
                }]
            }
        }); //windbarrier.png'});
    };
    this.winddart = function(message) {
        message.channel.send({
            embed: {
                title: "__Wind Dart MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FWindDart.png?v=1561576933809"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=384-30% \n" + Emoji.Star + "=676-40% \n" + Emoji.Star + Emoji.Star + "=945-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=1201-60%",
                    inline: true
                }]
            }
        }); //winddart.png'});
    };
    this.windtalker = function(message) {
        message.channel.send({
            embed: {
                title: "__Wind Talker MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FWindTalker.png?1552716757186"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1079-30% \n" + Emoji.Star + "=1892-40% \n" + Emoji.Star + Emoji.Star + "=2637-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3349-60%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1309-30% \n" + Emoji.Star + "=2272-40% \n" + Emoji.Star + Emoji.Star + "=3156-50% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=4002-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=4827-70%",
                    inline: true
                }]
            }
        });
    };
    this.witchsbrew = function(message) {
        message.channel.send({
            embed: {
                title: "__Witch's Brew MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FWitchsBrew.png?v=1561576935144"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1951-35% \n" + Emoji.Star + "=3442-45% \n" + Emoji.Star + Emoji.Star + "=4807-55% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=6112-65%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1486-40% \n" + Emoji.Star + "=2565-50% \n" + Emoji.Star + Emoji.Star + "=3557-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=4507-70% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=5433-80%",
                    inline: true
                }]
            }
        }); //witchsbrew.png'});
    };
    this.witchcraft = function(message) {
        message.channel.send({
            embed: {
                title: "__Witchcraft MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FWitchcraft.png?1508176934571"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=499-15% \n" + Emoji.Star + "=867-25% \n" + Emoji.Star + Emoji.Star + "=1205-35%",
                    inline: true
                }]
            }
        }); //witchcraft.png'});
    };
    this.wrathofgod = function(message) {
        message.channel.send({
            embed: {
                title: "__Wrath of God MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FWrathofGod.png?1508176954338"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=2963-40% \n" + Emoji.Star + "=5228-50% \n" + Emoji.Star + Emoji.Star + "=7302-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=9284-70%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=2963-45% \n" + Emoji.Star + "=5228-55% \n" + Emoji.Star + Emoji.Star + "=7302-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=9284-75% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=11214-85%",
                    inline: true
                }]
            }
        }); //wrathofgod.png'});
    };
    this.wyrmsblood = function(message) {
        message.channel.send({
            embed: {
                title: "__Wyrm's Blood MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2Fwyrmsblood.png?1516127922978"
                },
                fields: [{
                    name: "Rare",
                    value: Emoji.Up + "=516-45% \n" + Emoji.Star + "=888-55% \n" + Emoji.Star + Emoji.Star + "=1231-65%",
                    inline: true
                }]
            }
        }); //wyrmsblood.png'});
    };
    this.wyrmslayer = function(message) {
        message.channel.send({
            embed: {
                title: "__Wyrmslayer MAXED__",
                color: Const.ColorEmbed,
                image: {
                    url: "https://cdn.glitch.com/c76df7c9-d06c-4f54-a07f-8e6db475835f%2FWyrmslayer.png?1524213475430"
                },
                fields: [{
                    name: "Super Rare",
                    value: Emoji.Up + "=1069-40% \n" + Emoji.Star + "=1884-50% \n" + Emoji.Star + Emoji.Star + "=2630-60% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=3343-70%",
                    inline: true
                }, {
                    name: "Legendary",
                    value: Emoji.Up + "=1608-45% \n" + Emoji.Star + "=2854-55% \n" + Emoji.Star + Emoji.Star + "=3994-65% \n" + Emoji.Star + Emoji.Star + Emoji.Star + "=5082-75% \n" + Emoji.Star + Emoji.Star + Emoji.Star + Emoji.Star + "=6142-85%",
                    inline: true
                }]
            }
        }); //wyrmslayer.png'});
    };

    //Console command in jai's hud card library to get op cards
    //bh.data.BattleCardRepo.all.map((card) => { if (new bh.PlayerBattleCard({ configId: card.guid, evolutionLevel: card.rarityType, level: (card.rarityType===2 ? 35 : (card.rarityType>2 ? 50 : card.rarityType * 10)) - 1 }).isOP === true) { console.log("{cls:\"" + card.klassType + "\", rar:\"" + (card.rarityType+1)+ "\", trn:\"" + card.turns+  "\", pak:\"" + card.packs + "\", brag:\""+ card.brag +"\", card:\""+card.name + "\", elmnt:\"" +  card.elementType +"\" }" ); } } );

    const OPCardList = [{cls:"Skill",rar:5,trn:2,pak:0,brag:0,card:"Annoying Elves",elmnt:"Earth"},
                        {cls:"Magic",rar:4,trn:3,pak:1,brag:0,card:"Candy Cauldron",elmnt:"Earth"},
                        {cls:"Magic",rar:5,trn:3,pak:1,brag:0,card:"Candy Cauldron",elmnt:"Earth"},
                        {cls:"Magic",rar:5,trn:2,pak:1,brag:0,card:"Easter Eggs",elmnt:"Water"},
                        {cls:"Skill",rar:5,trn:1,pak:1,brag:0,card:"Espresso Shot",elmnt:"Fire"},
                        {cls:"Might",rar:4,trn:3,pak:1,brag:0,card:"Fellcrest Lullaby",elmnt:"Earth"},
                        {cls:"Might",rar:5,trn:3,pak:1,brag:0,card:"Fellcrest Lullaby",elmnt:"Earth"},
                        {cls:"Skill",rar:4,trn:2,pak:1,brag:0,card:"Hoist the Colours",elmnt:"Water"},
                        {cls:"Skill",rar:5,trn:2,pak:1,brag:0,card:"Hoist the Colours",elmnt:"Water"},
                        {cls:"Magic",rar:4,trn:1,pak:1,brag:0,card:"Moonbeam",elmnt:"Spirit"},
                        {cls:"Magic",rar:5,trn:1,pak:1,brag:0,card:"Moonbeam",elmnt:"Spirit"},
                        {cls:"Magic",rar:4,trn:1,pak:1,brag:0,card:"Night Cap",elmnt:"Spirit"},
                        {cls:"Magic",rar:5,trn:1,pak:1,brag:0,card:"Night Cap",elmnt:"Spirit"},
                        {cls:"Magic",rar:4,trn:4,pak:1,brag:0,card:"Nightmare",elmnt:"Spirit"},
                        {cls:"Magic",rar:5,trn:4,pak:1,brag:0,card:"Nightmare",elmnt:"Spirit"},
                        {cls:"Magic",rar:5,trn:2,pak:1,brag:0,card:"Pumpkin Field",elmnt:"Spirit"},
                        {cls:"Might",rar:4,trn:3,pak:1,brag:0,card:"Ride of the Valkyries",elmnt:"Water"},
                        {cls:"Might",rar:5,trn:3,pak:1,brag:0,card:"Ride of the Valkyries",elmnt:"Water"},
                        {cls:"Skill",rar:5,trn:1,pak:0,brag:0,card:"Slow Dart",elmnt:"Air"},
                        {cls:"Skill",rar:4,trn:2,pak:0,brag:0,card:"Song of Nature",elmnt:"Earth"},
                        {cls:"Skill",rar:5,trn:2,pak:0,brag:0,card:"Song of Nature",elmnt:"Earth"},
                        {cls:"Might",rar:5,trn:1,pak:1,brag:0,card:"Sweet Corn",elmnt:"Earth"},
                        {cls:"Might",rar:5,trn:3,pak:0,brag:0,card:"Sword of Light",elmnt:"Air"},
                        {cls:"Magic",rar:5,trn:2,pak:1,brag:0,card:"Witch's Brew",elmnt:"Earth"}];

    const HeroesByClassAndElement = {
        "Fire": {
            "Magic": "Monty",
            "Skill": "Red",
            "Might": "Fergus"
        },
        "Earth": {
            "Magic": "Trix",
            "Skill": "Bree",
            "Might": "Thrudd"
        },
        "Water": {
            "Magic": "Logan",
            "Skill": "Peg",
            "Might": "Gilda"
        },
        "Spirit": {
            "Magic": "Krell",
            "Skill": "Jinx",
            "Might": "_"
        },
        "Air": {
            "Magic": "_",
            "Skill": "Hawkeye",
            "Might": "Brom"
        }
    };
    const Rarity = {
        1: " C",
        2: " U",
        3: " R",
        4: "SR",
        5: " L"
    };

    //More than 1024 characters
    const OPCardsField = OPCardList.map((card, index) => "`" + (index < 9 ? " " : "") + (index + 1) + ":` `" + Rarity[card.rar] + "` **" + card.card + "** *" + HeroesByClassAndElement[card.elmnt][card.cls] + "*, " + card.trn + "T\n").reduce((output, card) => (output) + card, "");
    //const OPCardsField = OPCardList.map((card, index) => (index+1) + ": **" + card.card + "** " + card.rar + Emoji.Star + " (" + card.trn + "T) " +" \n").reduce((output, card) => (output) + card, "");

    this.opcards = function(message) {
        message.channel.send({
            "embed": {
                "title": "**Overpowered Cards**",
                "color": this.whiteColor,
                //"description": "Rewards for monthly activity, to see specific months card details, use `-reward 1` where 1 is month of your choice",
                "description": "OP cards are mathematically defined by players for simplification of HUD scouting, there are many cards that are situationally more useful or much stronger, but not OP. Some OP cards are actually bad. This list follows Jai's HUD logic, for informational purposes.",
                //"thumbnail": {"url": "https://i.postimg.cc/tCR8QJg7/Attack-Up.png"},"image": {"url": ""},
                "fields": [{
                    "name": "List:",
                    "value": OPCardsField
                }]
            }
        });
    }

};
let CardReplies = new CardManager();

module.exports = CardReplies; 
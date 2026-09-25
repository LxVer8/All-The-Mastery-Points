//    { value: 'na1', label: 'NA' },
//    { value: 'euw1', label: 'EUW' },
//    { value: 'eun1', label: 'EUNE' },
//    { value: 'kr', label: 'KR' },
//    { value: 'jp1', label: 'JP' },
//    { value: 'br1', label: 'BR' },
//    { value: 'la1', label: 'LAN' },
//    { value: 'la2', label: 'LAS' },
//    { value: 'oc1', label: 'OCE' },
//    { value: 'tr1', label: 'TR' },
//    { value: 'ru', label: 'RU' },
//    { value: 'pbe1', label: 'PBE' }

//     https://flagicons.lipis.dev/

const PLAYERS = [
    {
        id: 'p1',
        name: 'Makkro',
        country: 'al',
        verified: 'yes',
        image: 'images/makkro.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Makkor#EUW' },
            { region: 'euw1', riotId: 'Detdert ornn acc#ORNNY' },
            { region: 'euw1', riotId: 'Feel The Wall#Ornn' },
            { region: 'euw1', riotId: 'Makkro#EUW' },
            { region: 'kr', riotId: 'Hide on forge#KR1' }, // second korean account
            { region: 'kr', riotId: 'HotBacon#KR1' }, // first korean account
            { region: 'pbe1', riotId: 'Makkro0#PBE' },
        ]
    },
/*     {
        id: 'p165',
        name: 'Manuela#Sexy',
        country: 'eu',
        verified: 'no',
        image: 'images/manuela-sexy.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Manuela#Sexy' },
        ]
    },
    {
        id: 'p166',
        name: 'Vınh Teemo#10394',
        country: 'vn',
        verified: 'no',
        image: 'images/thatoneteemo.webp',
        accounts: [
            { region: 'vn2', riotId: 'Vınh T e e m o #10394' },
        ]
    },
    {
        id: 'p167',
        name: 'Maaylen',
        country: 'ar',
        verified: 'no',
        image: 'images/maaylen.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Maylen#owo' },
            { region: 'euw1', riotId: 'DoFlaminga#SQC' },
        ]
    }, */
    {
        id: 'p2',
        name: 'XYZ',
        country: 'at',
        verified: 'yes',
        image: 'images/xyz.jpg',
        accounts: [
            { region: 'euw1', riotId: 'STREAMERMONTH#LiMiT' }, // mains
            { region: 'euw1', riotId: 'MLG420FiSTER#420' }, // mains
            { region: 'euw1', riotId: 'XYZ#NR001' }, // mains
            { region: 'euw1', riotId: 'XYZ#NR002' }, // mains
            { region: 'euw1', riotId: 'buh e er erm #erm' },
            { region: 'euw1', riotId: 'youtube EUWXYZ#yt77' },
            { region: 'euw1', riotId: 'KiMMiCH MENTALi#TY77' },
            { region: 'euw1', riotId: 'VE XY7#EUW' },
            { region: 'euw1', riotId: 'XYZ#iLL' },
            { region: 'euw1', riotId: 'XYZ chill acc#EUW' },
            { region: 'euw1', riotId: '2sin#EUW' },
            { region: 'euw1', riotId: 'TwTv EUWXYZ#777' },
            { region: 'euw1', riotId: 'XÜZ#27087' },
            { region: 'euw1', riotId: 'Sarcasm#EUW' },
            { region: 'euw1', riotId: 'dont know me#EUW' },
            { region: 'euw1', riotId: 'PERMAPAiNVEiN#EUW' },
            { region: 'euw1', riotId: 'FULL AD DARIUS#CRiT' },
            { region: 'euw1', riotId: 'HEXFLASH DARIUS#H3XER' },
            { region: 'euw1', riotId: 'expanding limits#lookz' },
            { region: 'euw1', riotId: 'PERMAPAiNVEiN#SANE' },
            { region: 'euw1', riotId: 'PERMAPAiNVEiN#RERUN' },
            { region: 'tr1', riotId: 'OGLUM XYZ#PAiN' },
            { region: 'euw1', riotId: 'DUNKLOWMASTA#MASTA' },
            { region: 'euw1', riotId: 'XYZ#buh ' },
            { region: 'euw1', riotId: 'TwTv EUWXYZ#EUW' },
            { region: 'euw1', riotId: 'TwTv EUWXYZ#1v9' },
            { region: 'euw1', riotId: 'TwTv EUWXYZ#S77' },
            { region: 'euw1', riotId: 'TwTv EUWXYZ#EDUCA' },
            { region: 'euw1', riotId: 'TwTv EUWXYZ#iLL' },
            { region: 'euw1', riotId: 'TwTv EUWXYZ#EUXYZ' },
            { region: 'euw1', riotId: 'TwTv EUWXYZ#God' },
            { region: 'euw1', riotId: 'TwTv EUWXYZ#71717' },
            { region: 'euw1', riotId: 'TwTv EUWXYZ#XYZ' },
            { region: 'euw1', riotId: 'TwTv EUWXYZ#XY7' },
            { region: 'euw1', riotId: 'TwTv EUWXYZ#R7LE' },
            { region: 'euw1', riotId: 'TwTv EUWXYZ#AGONY' },
//            { region: 'euw1', riotId: 'Primeleague 2#div2' }, // lost
        ]
    },
    {
        id: 'p3',
        name: 'EkkotheNeeko',
        country: 'es',
        verified: 'yes',
        image: 'images/ekkotheneeko.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Ekko the Neeko#EUW' }, 
            { region: 'euw1', riotId: 'FirstPickEnjoyer#EUW' }, // smurf
            { region: 'euw1', riotId: 'Made in Heaven#Sofía' }, // soloq challenge 2026
            { region: 'euw1', riotId: 'kebablover#DUOQ' }, // duoq challenge 2025
            { region: 'euw1', riotId: 'VIPI Ekko#CATHY' }, // first to challenger 2025
            { region: 'euw1', riotId: 'TheBoySavior 69#EUW' }, // soloq challenge 2022
            { region: 'euw1', riotId: 'Kitty mochi#EUW' } // old account
        ]
    },
    {
        id: 'p4',
        name: 'SloppyWalrus',
        country: 'nl',
        verified: 'yes',
        image: 'images/sloppywalrus.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Sloppy#BOMB' },
            { region: 'euw1', riotId: 'Buy Bomba Energy#BOMBA' },
            { region: 'euw1', riotId: '你将被煮在汤里#SOUP' },
            { region: 'euw1', riotId: 'poffor#EUW' },
            { region: 'euw1', riotId: 'John Poffor#FART' },
            { region: 'kr', riotId: 'Sloppy Walrus#KR1' }, // korean account
            { region: 'na1', riotId: 'SloppyWalrusX#NA2' }, // na account
            { region: 'euw1', riotId: 'SloppyWalrusx#4066' }, // permabanned account 2019
        ]
    },
    {
        id: 'p5',
        name: 'DesperateNasus',
        country: 'gr',
        verified: 'yes',
        image: 'images/desperatenasus.jpg',
        accounts: [
            { region: 'eun1', riotId: 'Δ Desperate#adi' },
            { region: 'euw1', riotId: 'DesperateNasus#TWTV1' },
            { region: 'euw1', riotId: 'DesperateNasus#C N' },
            { region: 'euw1', riotId: 'DesperateNasus#TWTV' },
            { region: 'euw1', riotId: 'DesperateNasus#N A' },
            { region: 'euw1', riotId: 'DesperateNasus#TTV' },
            { region: 'euw1', riotId: 'DesperateNasus#EUW' },
            { region: 'eun1', riotId: 'DesperateNasus#K R' },
            { region: 'kr', riotId: '죽기 아니면 살기#0305' }, // korean account 2026
//            { region: 'kr', riotId: 'DesperateNasus#TTV0' } // old korean account. cant be found anymore DesperateNasus#TTV1 exists though
        ]
    },
    {
        id: 'p6',
        name: 'PinkWard',
        country: 'us',
        verified: 'yes',
        image: 'images/pinkward.jpg',
        accounts: [
            { region: 'na1', riotId: 'PinkWard#Laugh' },
            { region: 'na1', riotId: 'Spilled Milk#Cry' },
            { region: 'na1', riotId: 'Taco Shop#Shaco' },
            { region: 'na1', riotId: 'The Best Mistake#Cute' },
            { region: 'na1', riotId: 'PinkWard#6669' },
//            { region: 'na1', riotId: 'Pinkward#pink0' } // european account. cant be found anymore
        ]
    },
    {
        id: 'p7',
        name: 'LxVer',
        country: 'ar',
        verified: 'yes',
        image: 'images/lxver.png',
        accounts: [
            { region: 'la2',  riotId: 'LxVer#LAS' },
            { region: 'la2',  riotId: 'LxVer#Shaco' }, // permabanned account
            { region: 'la2',  riotId: 'man i love kORNN#LAS' },
            { region: 'la2',  riotId: 'Big Fat Red Ram#LxVer' },
            { region: 'la2',  riotId: 'if i speak#LxVer' },
            { region: 'la2',  riotId: 'shacobong#LxVer' },
            { region: 'la2',  riotId: 'Aram Spammer#LxVer' },
            { region: 'la2',  riotId: 'shacobongDeluxe#clone' },
            { region: 'la2',  riotId: 'Not an Ornn OTP#LxVer' },
            { region: 'la2',  riotId: 'New Acc New Me#LxVer' },
            { region: 'la2',  riotId: 'im new at league#LxVer' },
            { region: 'la2',  riotId: '2 Pentas 1 Game#LxVer' },
            { region: 'br1',  riotId: 'im not brazilian#LxVer' }, // br account 1
            { region: 'br1',  riotId: 'AP Shaco is OP#LxVer' }, // br account 2
            { region: 'la1',  riotId: 'Pink Ward in LAN#LAN' }, // lan account 1
            { region: 'la1',  riotId: 'shacobongClone#clone' }, // lan account 2
            { region: 'na1',  riotId: '170ms can win#LxVer' }, // na account 1
            { region: 'na1',  riotId: '650g for anvil#LxVer' }, // na accoutn 2
            { region: 'euw1', riotId: 'At least 240ms#EUW' },
            { region: 'eun1', riotId: 'Makkro you Bozo#EUNE' },
            { region: 'pbe1', riotId: 'el papu shaco#LxVer' }
        ]
    },
    {
        id: 'p8',
        name: 'XikHyper',
        country: 'pl',
        verified: 'yes',
        image: 'images/xikhyper.png',
        accounts: [
            { region: 'eun1', riotId: '1263715263626171#SBP' },
            { region: 'eun1', riotId: 'KanyeEast83#EUNE' },
            { region: 'eun1', riotId: 'XikHyper#Bdass' },
            { region: 'eun1', riotId: 'TomásYodelero#sigma' },
            { region: 'eun1', riotId: 'muszyn#black' },
            { region: 'euw1', riotId: 'An IQ too High#Smart' },
            { region: 'euw1', riotId: 'Only for Genius#Heim' },
            { region: 'euw1', riotId: 'halasliwablanka3#EUW' }
        ]
    },
    {
        id: 'p9',
        name: 'Urpog',
        country: 'gb',
        verified: 'yes',
        image: 'images/urpog.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Urpog#URGOT' },
            { region: 'euw1', riotId: 'Urpog#Urpog' },
            { region: 'euw1', riotId: '不屈的捍卫者#URGOT' },
            { region: 'euw1', riotId: 'burgerman1#burg' },
            { region: 'euw1', riotId: 'Pyrosen#EUW' }, // permabanned account 2018
            { region: 'na1', riotId: '100pingtyrant#urpog' },
        ]
    },
    {
        id: 'p10',
        name: 'Detdert',
        country: 'dk',
        verified: 'no',
        image: 'images/detdert.png',
        accounts: [
            { region: 'euw1', riotId: 'GENERAL detdert#R1GX' },
            { region: 'euw1', riotId: 'Times Ticking#Goals' },
            { region: 'kr', riotId: 'DETDERT IS HERE#TRNUP' } // korean account 2025
        ]
    },
    {
        id: 'p11',
        name: 'Naayil',
        country: 'at',
        verified: 'no',
        image: 'images/naayil.png',
        accounts: [
            { region: 'euw1', riotId: 'SLAAVE#AA26' },
            { region: 'euw1', riotId: 'I LIKE TO WATCH#CLM' },
            { region: 'euw1', riotId: 'Little Issa #EUW' },
            { region: 'euw1', riotId: 'SAAINT JHINGLE#AAA' },
            { region: 'euw1', riotId: 'NAAYIL#S67' },
            { region: 'kr', riotId: 'NAAYIL#KOREA' }, // korean account 2024 + 2025
        ]
    },
    {
        id: 'p12',
        name: 'BROHAN',
        country: 'de',
        verified: 'no',
        image: 'images/brohan.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Troll of Jom#dream' },
            { region: 'euw1', riotId: 'Hide on wind#bro' },
            { region: 'euw1', riotId: 'bro#han' },
            { region: 'kr', riotId: 'BROHAN#Haki' }, // korean account 2025
        ]
    },
    {
        id: 'p13',
        name: 'YamatosDeath',
        country: 'de',
        verified: 'no',
        image: 'images/yamatosdeath.png',
        accounts: [
            { region: 'euw1', riotId: 'XxXXXxXXxXXxXXxX#5622' },
            { region: 'euw1', riotId: 'OMNiPRESENCE#PRIDE' },
            { region: 'euw1', riotId: 'ＰｕｔｒｅｓｃｅｎｔＫｎｉｇｈｔ#crazy' },
            { region: 'euw1', riotId: 'Sagittarius A#uknwn' },
            { region: 'kr', riotId: 'Jordan Barrett#KR1' }, // korean account 2023
//            { region: 'kr', riotId: 'Dung Eater zz' } // old korean account
//            { region: 'br1', riotId: 'ｓｏｌ ｓＥＭＰＥＲ ｏＲｉｅｎ#sun' }, // linked as brazilian account, but seems to be owned by someone else now
        ]
    },
    {
        id: 'p14',
        name: 'Phantasm',
        country: 'de',
        verified: 'no',
        image: 'images/phantasm.png',
        accounts: [
            { region: 'euw1', riotId: 'Phantasmasm#EUW' },
            { region: 'euw1', riotId: 'focus#102' },
            { region: 'euw1', riotId: 'Phantasm#TWTV0' },
            { region: 'euw1', riotId: 'TwTv Phantasm#101' },
            { region: 'euw1', riotId: 'Phanta#107' },
            { region: 'euw1', riotId: 'Phantasm#TWTV1' },
//            { region: 'kr', riotId: 'Phantasm#RANK1' } // old korean account. cant be found anymore
        ]
    },
    {
        id: 'p15',
        name: 'Doublelift',
        country: 'us',
        verified: 'no',
        image: 'images/doublelift.jpg',
        accounts: [
            { region: 'na1', riotId: 'Doublelift#NA01' },
            { region: 'na1', riotId: 'Peng Yiliang#NA1' },
        ]
    },
    {
        id: 'p16',
        name: 'Azzapp',
        country: 'ba',
        verified: 'no',
        image: 'images/azzapp.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Azzapp#31415' },
            { region: 'euw1', riotId: 'Zap Zap#nvrff' } // adc race 2026
//            { region: 'kr', riotId: 'Pasta La Vista#31415' } // old korean account. cant be found anymore
        ]
    },
    {
        id: 'p17',
        name: 'Spear Shot',
        country: 'gb',
        verified: 'no',
        image: 'images/spearshot.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Spear Shot#EUW2' },
            { region: 'euw1', riotId: 'Spear Shot#1111' },
            { region: 'euw1', riotId: 'Speartan#EUW' },
            { region: 'euw1', riotId: 'JingleDingle#EUW' },
            { region: 'euw1', riotId: 'Korean Dragon#EUW2' },
            { region: 'euw1', riotId: 'Spear Shop#1111' },
            { region: 'euw1', riotId: 'Anonymous2752#77777' },
            { region: 'kr', riotId: 'Anywhos #KR1' }, // korean account 2023 + 2024
            { region: 'kr', riotId: 'El Capitan #Spear' }, // korean account 2025
//            { region: 'euw1', riotId: 'Spear Shop #EUW' }, // old account. no trace of it exists
//            { region: 'euw1', riotId: 'Cold Ankles' } // old account. no trace of it exists
        ]
    },
    {
        id: 'p18',
        name: 'TheBausffs',
        country: 'se',
        verified: 'no',
        image: 'images/baus.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Thebausffs#COOL' },
            { region: 'euw1', riotId: 'Streaming Badboy#INT' },
            { region: 'euw1', riotId: 'Thebausffs#3710' },
            { region: 'euw1', riotId: 'Bosch Drill#EUW' },
            { region: 'euw1', riotId: 'Mollusca Slime#Yummy' },
            { region: 'euw1', riotId: 'Silly Snail#Öga' },
            { region: 'euw1', riotId: 'Demon Simon#0000' }
//            { region: 'euw1', riotId: 'RhinoBelly#mmfgh' }, // account deleted by riot
//            { region: 'euw1', riotId: 'Dangerous Dork#Lick' }, // lost trace
//            whatever this was its now gone https://op.gg/lol/summoners/euw/e7c3c0fd-cee3-4399-877b-baf89c9f6f46-EUW
//            and this korean account https://www.onetricks.gg/players/1gwyE9txGLhdQ7mZa3crxF_W30cbA7cZVGgheC3rJHYonzPk7nBiw9MHzHUg9fBCxtJcEwgnErjoMg
        ]
    },
    {
        id: 'p19',
        name: 'Potent',
        country: 'dz',
        verified: 'no',
        image: 'images/potent.png',
        accounts: [
            { region: 'euw1', riotId: 'Rank 1#POT' },
            { region: 'euw1', riotId: 'Potent#Focus' },
            { region: 'euw1', riotId: 'JL Potent#POT' },
            { region: 'euw1', riotId: 'Potent#SoloQ' },
        ]
    },
    {
        id: 'p20',
        name: 'kagaroo',
        country: 'gb',
        verified: 'no',
        image: 'images/kagaroo.jpg',
        accounts: [
            { region: 'euw1', riotId: 'TWTV KAAGAROO#EUW11' },
            { region: 'euw1', riotId: 'TWITCHTV KAGAROO#kag' },
        ]
    },
    {
        id: 'p21',
        name: 'Send0o',
        // helper: mari2402 - 621110279408975872
        country: 'es',
        verified: 'yes',
        image: 'images/sendo.png',
        accounts: [
            { region: 'euw1', riotId: 'Madres Enjoyer#MILK' },
            { region: 'euw1', riotId: 'El Gallegoaleman#EUNR1' },
            { region: 'euw1', riotId: 'Sendo de Nazaret#EUW' }, // soloq challenge 2020?
            { region: 'euw1', riotId: 'Madres Enjoyer#69696' }, // soloq challenge 2021?
            { region: 'euw1', riotId: 'no tiene sendito#EUW' }, // soloq challenge 2022?
            { region: 'euw1', riotId: 'maullame#meowo' }, // duoq challenge 2024?
            { region: 'euw1', riotId: 'TanguitaDePoppy#enana' }, // soloq challenge 2026
        ]
    },
    {
        id: 'p22',
        name: 'FckngDraven',
        country: 'ar',
        verified: 'yes',
        image: 'images/fckngdraven.png',
        accounts: [
            { region: 'la2', riotId: 'Srta Candy#LAS' },
            { region: 'la2', riotId: '3rdR3ichDr4v3n#1933' },
            { region: 'la2', riotId: 'kenichi2011#LAS' },
            { region: 'la2', riotId: 'DravenDravennn#LAS' },
            { region: 'la2', riotId: 'DeIiríum#LAS' },
            { region: 'la2', riotId: 'advincula#LAS' },
            { region: 'la2', riotId: 'YellowSuperCar34#LAS' },
            { region: 'la2', riotId: 'Beqa#LAS' },
            { region: 'la2', riotId: 'N4UTlSM0#LULE' },
            { region: 'la2', riotId: 'Mod De FerNasus#LAS' },
            { region: 'la2', riotId: 'firmax#LAS' },
            { region: 'la2', riotId: 'NoSoySancar20#LAS' },
            { region: 'la2', riotId: 'FckngDraven#LAS' },
            { region: 'la2', riotId: 'INCLANSKY#LAS' },
            { region: 'la2', riotId: 'Selûne Lover#1995' },
            { region: 'la2', riotId: 'PibeLibertario#LAS' },
            { region: 'br1', riotId: 'PLS GANK BOTLINE#BR1' },
//            { region: 'la2', riotId: 'ASHEEEEX#LAS' }, // gone
//            { region: 'la2', riotId: 'I Love Lukata#LAS' }, // gone
//            { region: 'la2', riotId: 'ByElleryJr#Gming' }, // gone
        ]
    },
    {
        id: 'p23',
        name: 'loltyler1',
        country: 'us',
        verified: 'no',
        image: 'images/loltyler1.png',
        accounts: [
            { region: 'na1', riotId: 'MAMMOTHMAN65#NA1' },
            { region: 'na1', riotId: 'COOKIEMONSTER123#NA1' },
            { region: 'na1', riotId: 'HULKSMASH1337#NA1' },
            { region: 'na1', riotId: '1T1T1T1T1T1#NA1' },
            { region: 'na1', riotId: 'T1 OK GOOD YES#NA1' },
            { region: 'na1', riotId: 'S8 IS SO FUN#NA1' },
            { region: 'na1', riotId: 'legitness99#NA1' },
//            { region: 'kr', riotId: 'BIG TONKA T#KR1' } // old korean account. cant be found anymore
//            { region: 'euw1', riotId: 'FREEDOMFIGHTER28#na1' },
        ]
    },
    {
        id: 'p24',
        name: 'Dantes',
        country: 'ca',
        verified: 'no',
        image: 'images/dantes.jpg',
        accounts: [
            { region: 'na1', riotId: '2 ANGEL 2 ARC 2#NA1' },
            { region: 'na1', riotId: 'Doaenel#NA1' },
            { region: 'euw1', riotId: 'tw1tter mirskill#EUW' },
            { region: 'na1', riotId: 'Dantes#NA1' },
            { region: 'kr', riotId: 'Dantes#Korea' },
            { region: 'na1', riotId: 'Doaenel 1 Dantes #NA1' },
            { region: 'na1', riotId: 'End of an Era #Guts' },
            { region: 'na1', riotId: 'Dantes #Laura' },
            { region: 'na1', riotId: 'Dantes #Aevum' },
            { region: 'na1', riotId: 'Dantes #Zaahn' },
            { region: 'na1', riotId: 'Dantes #arise' },
            { region: 'na1', riotId: 'IIIllIlIIllI#IIIII' },
            { region: 'na1', riotId: 'PizzaDestroyer#FOOD' },
            { region: 'na1', riotId: 'October 19#TURKE' },
            { region: 'na1', riotId: 'Cornflake#JORKN' },
            { region: 'na1', riotId: 'BEAR WITNESS#222' },
            { region: 'na1', riotId: 'SLiCEMYTHR0AT#666' },
            { region: 'br1', riotId: 'Dantes#Venom' }
//            "ugaVr8Dv5u4" seems to be banned
//            { region: 'kr', riotId: 'Return of Dantes#KR' },
//            { region: 'na1', riotId: 'Dantes #vsNA' },
        ]
    },
    {
        id: 'p25',
        name: 'Severin002',
        country: 'ch',
        verified: 'yes',
        image: 'images/severin002.png',
        accounts: [
            { region: 'euw1', riotId: 'BudgetMakkro0 #Ornn' },
            { region: 'euw1', riotId: 'Wristymat#5547' },
            { region: 'euw1', riotId: 'SevitheForgeGod #ORNN' },
            { region: 'pbe1', riotId: 'Seviornno#Ornn' }
        ]
    },
    {
        id: 'p26',
        name: 'SirKledington',
        country: 'at',
        verified: 'yes',
        image: 'images/sirkledington.png',
        accounts: [
            { region: 'euw1', riotId: 'Kleddy#1337' },
            { region: 'euw1', riotId: 'Sir Kledington#1337' },
            { region: 'euw1', riotId: 'WhereIsSkaarl#1337' },
            { region: 'na1', riotId: 'Sir Kledington#TwTv' },
            { region: 'euw1', riotId: 'GreenKyuubi#EUW' }
        ]
    },
    {
        id: 'p27',
        name: 'Dun',
        country: 'ca',
        verified: 'no',
        image: 'images/dun.jpg',
        accounts: [
            { region: 'na1', riotId: 'Dun#NA1' },
            { region: 'na1', riotId: 'cupcakes29#NA1' },
            { region: 'euw1', riotId: 'clamp merchant#dun' },
//            { region: 'na1', riotId: 'ilostcustody08#na1' }, // old account. cant be found anymore
        ]
    },
    {
        id: 'p28',
        name: 'Horkos',
        country: 'us',
        verified: 'yes',
        image: 'images/horkos.png',
        accounts: [
            { region: 'na1', riotId: 'Horkos#forge' },
            { region: 'na1', riotId: 'horkos#1234' },
            { region: 'na1', riotId: 'Ysera#drag' },
            { region: 'na1', riotId: 'Ornnlyforge#hrkos' },
            { region: 'pbe1', riotId: 'horkosPBE#forge' }
        ]
    },
    {
        id: 'p29',
        name: 'konradosj',
        country: 'pl',
        verified: 'yes',
        image: 'images/konradosj.png',
        accounts: [
            { region: 'eun1', riotId: 'konradosj#YAS' },
            { region: 'euw1', riotId: 'konradosj#EUW' },
            { region: 'eun1', riotId: 'PlaceMaker#EUNE' },
            { region: 'eun1', riotId: 'BoczekGaming#EUNE' },
            { region: 'pbe1', riotId: 'konradosj#PBE' }
        ]
    },
    {
        id: 'p30',
        name: 'Jankos',
        country: 'pl',
        verified: 'no',
        image: 'images/jankos.png',
        accounts: [
            { region: 'euw1', riotId: 'G2 Jankos#unc2' },
            { region: 'euw1', riotId: 'TheJankosEffect#MissQ' },
            { region: 'euw1', riotId: 'Sx9zyyQgA9qLRhdf#EUW' },
            { region: 'euw1', riotId: 'KNkBBKlTip8Mcgtb#EUW' },
//            { region: 'euw1', riotId: 'Jankos#LCKGL' },
//            { region: 'euw1', riotId: 'PlaceMaker#EUNE' },
        ]
    },
    {
        id: 'p31',
        name: 'MrBeast',
        country: 'us',
        verified: 'no',
        image: 'images/mrbeast.jpg',
        accounts: [
            { region: 'na1', riotId: 'MrBeast#NA1' },
        ]
    },
    {
        id: 'p32',
        name: 'MidBeast',
        country: 'au',
        verified: 'no',
        image: 'images/midbeast.png',
        accounts: [
            { region: 'na1', riotId: 'HamburgerEater59#NA1' },
            { region: 'euw1', riotId: 'MidBruvInnit#EUW' },
            { region: 'oc1', riotId: 'Midbeast 4#OC' },
            { region: 'oc1', riotId: 'MIDBEAST#LION' },
            { region: 'oc1', riotId: 'WASHED STREAMER#7777' },
//            { region: 'euw1', riotId: 'kapsalon lover22#HEHE' },
//            { region: 'kr', riotId: 'TL Midbeast' }, // missing #
//            { region: 'kr', riotId: 'SojuSipper22' }, // missing #
        ]
    },
    {
        id: 'p33',
        name: 'Spine Breaker',
        country: 'us',
        verified: 'no',
        image: 'images/spinebreaker.webp',
        accounts: [
            { region: 'na1', riotId: 'Spine Breaker#NOXUS' },
        ]
    },
    {
        id: 'p34',
        name: 'Solarbacca',
        country: 'us',
        verified: 'no',
        image: 'images/solarbacca.jpg',
        accounts: [
            { region: 'na1', riotId: 'Solarbacca#NA1' },
            { region: 'euw1', riotId: 'the pebble#EUW' },
            { region: 'na1', riotId: 'baccaKEGW#NA1' },
            { region: 'kr', riotId: 'SolarbaccaKR#GPQ' },
            { region: 'euw1', riotId: 'MickeyMouseRole#EUPU' },
            { region: 'euw1', riotId: 'Solarbacca#EUW10' },
            { region: 'kr', riotId: 'NotChallenger#MOD' },
            { region: 'na1', riotId: 'AP GP#bBALD' },
            { region: 'na1', riotId: 'KogNBardTorture#NA1' },
            { region: 'na1', riotId: 'Lunarbacca#NA1' },
            { region: 'na1', riotId: 'MlNUS 7 MlNUS 8#NA1' },
            { region: 'na1', riotId: 'ZeusBin369Solar#BALD' },
            { region: 'na1', riotId: 'Monako#NA1' },
        ]
    },
    {
        id: 'p35',
        name: 'Sol1XD',
        country: 'es',
        verified: 'no',
        image: 'images/sol1xd.png',
        accounts: [
            { region: 'euw1', riotId: 'FROM ZERO TO 6XX#S1XD' },
            { region: 'euw1', riotId: 'Claret Flint M6#ZZZ' },
            { region: 'euw1', riotId: 'SUPER SONIC#6XX' },
            { region: 'euw1', riotId: 'GODOFHYPERDEATH#6XX' },
            { region: 'kr', riotId: 'EYES OF LIES#6XX' },
            { region: 'euw1', riotId: 'depredador ápice#6XX' },
            { region: 'euw1', riotId: 'NEO METAL SONIC#6XX' },
            { region: 'euw1', riotId: '3cm of Power#3CM' },
            { region: 'euw1', riotId: 'TONY MONTANA#6XX' },
//            { region: 'euw1', riotId: 'Miralis Funesto#MH3U' },
//            { region: 'euw1', riotId: 'cyberpsycotic' },
        ]
    },
    {
        id: 'p36',
        name: 'ElmilloR',
        country: 'es',
        verified: 'no',
        image: 'images/elmillor.png',
        accounts: [
            { region: 'euw1', riotId: 'DogHouseMEGAWAYS#GAMDO' },
            { region: 'euw1', riotId: 'LA CUMBRE#ELM' },
            { region: 'euw1', riotId: 'Mauro Netangarih#FRAUD' },
            { region: 'euw1', riotId: 'f1ddle abuser#000' },
            { region: 'euw1', riotId: 'Emilio Erre#EUW' },
            { region: 'euw1', riotId: 'fUcSpCOPCBbhoVzQ#EUW' },
            { region: 'euw1', riotId: 'LA BRUIXA SNIPER#78869' },
            { region: 'euw1', riotId: 'elmillor11#EUW' },
            { region: 'euw1', riotId: 'Elyøya Fangirl#EUW' },
            { region: 'euw1', riotId: 'ELMILLOR IS BACK#EUW' },
            { region: 'euw1', riotId: 'ElmilloR INTACC#GORDO' },
            { region: 'euw1', riotId: 'elmiillor03#EUW' },
            { region: 'euw1', riotId: 'Pecorina Poppea #EUW' },
            { region: 'euw1', riotId: 'ElmiilloR11#GORDO' },
            { region: 'kr', riotId: 'GatesOfOlympus#KR2' },
            { region: 'euw1', riotId: 'ELMILLOR#NASHE' },
        ]
    },
    {
        id: 'p37',
        name: 'Drututt',
        country: 'pl',
        verified: 'no',
        image: 'images/drututt.jpg',
        accounts: [
            { region: 'euw1', riotId: 'I DOND DOG#DOG' },
            { region: 'euw1', riotId: 'GIRLS H4TE ME#INTEL' },
            { region: 'eun1', riotId: 'Drutut#EUNE' },
            { region: 'euw1', riotId: 'Forsen Top Acc#BAJ' },
            { region: 'euw1', riotId: 'Drututt#MAKS' },
            { region: 'euw1', riotId: 'LOOK OUTSIDE#SYBIL' },
            { region: 'euw1', riotId: 'Incredible Gassy#PAGE' },
            { region: 'euw1', riotId: 'Artorias#109' },
            { region: 'euw1', riotId: 'Tume#7825' },
            { region: 'euw1', riotId: 'TvcrU8OXsFmRDXyI#EUW' },
            { region: 'euw1', riotId: 'Gwens Futa Milk#EUW' },
            { region: 'euw1', riotId: 'TwitchTv Zy0xxx#31272' },
            { region: 'euw1', riotId: 'CHUNGUS CLUEGI#DELUX' },
            { region: 'euw1', riotId: 'FLAT EARTHER#ARIBO' },
            { region: 'euw1', riotId: 'LIKE THE VIDEO#PLS' },
            { region: 'euw1', riotId: 'I SAY GG 5 TIMES#BAND' },
//            { region: 'kr', riotId: 'Chinese Spy' }, // korean accounts, cant find
//            { region: 'kr', riotId: 'Polish Spy' }, // korean accounts, cant find
//            { region: 'kr', riotId: 'MarksPrzychodzien' }, // korean accounts, cant find
//            { region: 'kr', riotId: 'ENGLISH PLS' }, // korean accounts, cant find
        ]
    },
    {
        id: 'p38',
        name: 'AloisNL',
        country: 'nl',
        verified: 'no',
        image: 'images/alois.png',
        accounts: [
            { region: 'euw1', riotId: 'Victimmaxxing#Yuumi' },
            { region: 'euw1', riotId: 'Victimmaxxing#ADC' },
            { region: 'euw1', riotId: 'AloisNL#EUW' },
            { region: 'na1', riotId: 'AloisNL#NALUL' },
            { region: 'euw1', riotId: 'Adc pig#piggy' },
            { region: 'euw1', riotId: 'IFJROML#lock' },
            { region: 'euw1', riotId: 'MACHINE GUN MUND#KELLY' },
            { region: 'euw1', riotId: 'Mundo#PIGGY' },
            { region: 'euw1', riotId: 'Riven PhD#EUW' },
            { region: 'euw1', riotId: 'Fundthementals#riven' },
            { region: 'euw1', riotId: 'TAOTAO#focus' },
            { region: 'euw1', riotId: 'btats mhamara#EUW' },
            { region: 'euw1', riotId: 'FndamntalsTeachr#EUW' },
            { region: 'euw1', riotId: 'PiglordEmperor#piggy' },
//            { region: 'kr', riotId: 'Clark Fent' }, // korean accounts, cant find
//            { region: 'euw1', riotId: 'AloisNL#TLA' }, // no idea why this ones doesnt exist
//            { region: 'kr', riotId: 'Alois#Mundo' },
        ]
    },
    {
        id: 'p39',
        name: 'NoArmWhatley',
        country: 'gb',
        verified: 'no',
        image: 'images/no arm whatley.png',
        accounts: [
            { region: 'euw1', riotId: 'PeppaPigFan31#PIGS' },
            { region: 'euw1', riotId: 'Krug Lord#Krugz' },
            { region: 'euw1', riotId: 'ENORMOUS NORMAN#OBESE' },
            { region: 'euw1', riotId: 'No Arm Whatley#EUW' },
            { region: 'euw1', riotId: 'Mentalist#EUW9' },
            { region: 'euw1', riotId: 'No Arm Whatley#FROG' },
            { region: 'euw1', riotId: 'NO COMA WHATLEY#ncW' },
            { region: 'euw1', riotId: 'Gucci Belt Tahm#0001' },
            { region: 'euw1', riotId: 'NO COMA WHATLEY#YUUMI' },
            { region: 'euw1', riotId: 'No Tahm Whatley#TOAD' },
            { region: 'na1', riotId: 'No Arms Whatley#NA1' },
//            { region: 'eun1', riotId: 'NO ARM WHATLEY#TOAD' },
//            { region: 'euw1', riotId: 'Frog Wizard#TOAD' },
        ]
    },
    {
        id: 'p40',
        name: 'xDavemon',
        country: 'us',
        verified: 'no',
        image: 'images/xdavemon.png',
        accounts: [
            { region: 'na1', riotId: 'Davemon#NA1' },
            { region: 'na1', riotId: 'pizzaman007#NA1' },
            { region: 'na1', riotId: 'dmoney#401K' },
            { region: 'euw1', riotId: 'Davemon130#EUW' },
            { region: 'na1', riotId: 'pyke420#NA1' },
            { region: 'na1', riotId: 'Businessman#003' },
            { region: 'kr', riotId: '탈모 진행중#KR2' },
            { region: 'na1', riotId: 'Wump#NA1' },
        ]
    },
    {
        id: 'p41',
        name: 'NattyNatt',
        country: 'se',
        verified: 'no',
        image: 'images/nattynatt.jpg',
        accounts: [
            { region: 'euw1', riotId: 'NattyNatt#2005' },
            { region: 'euw1', riotId: 'EZ ROLE LOOLAY#EASY' },
            { region: 'euw1', riotId: 'EZ ROLE LOOLAY#EZPZ' },
            { region: 'euw1', riotId: 'Bolemtin#2005' },
            { region: 'euw1', riotId: 'Bannan8#EUW' },
            { region: 'euw1', riotId: 'NattyNatt#RANK1' },
            { region: 'euw1', riotId: 'KOREA TEST ACC#RANK1' },
        ]
    },
    {
        id: 'p42',
        name: 'Kesha',
        country: 'se',
        verified: 'no',
        image: 'images/kesha.jpg',
        accounts: [
            { region: 'euw1', riotId: 'im in bread#unc' },
            { region: 'euw1', riotId: 'lime bike nunu#4skin' },
            { region: 'euw1', riotId: 'im ape#banan' },
        ]
    },
    {
        id: 'p43',
        name: 'Geishu',
        country: 'eg',
        verified: 'no',
        image: 'images/geishu.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Geishu#TTV' },
            { region: 'euw1', riotId: 'Geishu#Geish' },
            { region: 'euw1', riotId: 'SETT FR33K#boss' },
        ]
    },
    {
        id: 'p44',
        name: 'TryhardEkko',
        country: 'gr',
        verified: 'no',
        image: 'images/tryhardekko.png',
        accounts: [
            { region: 'euw1', riotId: 'TryhardEkko#0407' },
            { region: 'euw1', riotId: 'TryhardEkko#TWTV' },
            { region: 'euw1', riotId: 'TryhardEkko#000' },
            { region: 'eun1', riotId: 'TryhardEkko#Ekko' },
//            { region: 'eun1', riotId: 'cxy#000' },
        ]
    },
    {
        id: 'p45',
        name: 'Faker',
        country: 'kr',
        verified: 'no',
        image: 'images/faker.jpg',
        accounts: [
            { region: 'kr', riotId: 'Hide on bush#KR1' },
            { region: 'euw1', riotId: 'Hide on bush#61151' },
            { region: 'euw1', riotId: 'THmCX8U4yahp39sz#EUW' },
            { region: 'euw1', riotId: 'wincg#84926' },
            { region: 'euw1', riotId: 'silent silence#08022' },
//            { region: 'na1', riotId: 'Hide on bush#canad' }, // na bootcamp account. seems lost
        ]
    },
    {
        id: 'p46',
        name: 'Elosanta',
        country: 'lt',
        verified: 'no',
        image: 'images/elosanta.png',
        accounts: [
            { region: 'kr', riotId: 'ELO FKIN SANTA#KR1' },
            { region: 'euw1', riotId: 'pepito3#EUW' },
            { region: 'euw1', riotId: 'TWITCH ELOSANTA#1111' },
            { region: 'euw1', riotId: 'XLFQA15127APQ17P#EV1' },
            { region: 'na1', riotId: 'TWITCH ELOSANTA #1111' },
//            { region: 'euw1', riotId: '712 Elosanta FNC' },
        ]
    },
    {
        id: 'p47',
        name: 'KarasMai',
        country: 'us',
        verified: 'no',
        image: 'images/karasmai.jpg',
        accounts: [
            { region: 'na1', riotId: 'KarasmaiGOD#171XO' },
            { region: 'na1', riotId: 'Karasmai#171XO' },
            { region: 'na1', riotId: 'Rahyne#NA1' },
            { region: 'na1', riotId: 'Karasmai v9#95057' },
            { region: 'na1', riotId: 'Karasmai kayn#na1' },
            { region: 'na1', riotId: 'Karasmai Rhaast #na1' },
            { region: 'na1', riotId: 'Goneinyourwake#kayn' },
            { region: 'na1', riotId: 'Dark Signs#NA1' },
            { region: 'na1', riotId: 'Devil Karasmai#NA1' },
        ]
    },
    {
        id: 'p48',
        name: 'MoistCr1TiKaL',
        country: 'us',
        verified: 'no',
        image: 'images/moistcr1tikal.jpg',
        accounts: [
            { region: 'na1', riotId: 'moistcr1tikal#NA1' },
        ]
    },
    {
        id: 'p49',
        name: 'Sinerias',
        country: 'at',
        verified: 'yes',
        image: 'images/sinerias.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Sinerias#EUW' },
            { region: 'euw1', riotId: 'SineriasCoaching#EUW' },
            { region: 'na1', riotId: 'Austrian Yi#EUW' },
            { region: 'euw1', riotId: '100T v1ruZ#EUW' },
            { region: 'euw1', riotId: 'nice yi player#EUW' },
            { region: 'euw1', riotId: 'Sinerias#9811' },
            { region: 'euw1', riotId: '武士道のラスロー#JP1' },
            { region: 'euw1', riotId: 'DMJGLCOACHING#LOVE' },
            { region: 'euw1', riotId: 'Try to stop us#EUW' },
            { region: 'kr', riotId: 'MN Monk#Love' },
            { region: 'kr', riotId: '엄마를 위해서#KR1' },
            { region: 'euw1', riotId: 'Twitch Sinerias#EUW' },
            { region: 'euw1', riotId: 'TheReturn of God#Love' },
            { region: 'br1', riotId: '162ms Sinerias#BR1' },
//            { region: 'euw1', riotId: 'Don Sinerias#EUW' }, // cant be found
//            { region: 'euw1', riotId: 'fKing Sinerias#EUW' }, // cant be found
//            { region: 'kr', riotId: 'Coach Sinerias #ART' }, // korean riot account, eliminated
        ]
    },
    {
        id: 'p50',
        name: 'Jynxzi',
        country: 'us',
        verified: 'no',
        image: 'images/jynxzi.jpg',
        accounts: [
            { region: 'na1', riotId: 'jynxzi#mvp' },
        ]
    },
    {
        id: 'p51',
        name: 'Detention',
        country: 'ca',
        verified: 'no',
        image: 'images/detention.jpg',
        accounts: [
            { region: 'br1', riotId: 'BREAK DOWN#DDR' },
            { region: 'na1', riotId: 'fofoca#owo' },
            { region: 'kr', riotId: '캐나다인 페이커#미드차이' },
            { region: 'na1', riotId: 'Detention TikTok#Tktk' },
            { region: 'na1', riotId: 'Detention#NA1' },
            { region: 'na1', riotId: 'Detention#DDR' },
            { region: 'kr', riotId: 'Detention 한국#KR1' },
//            { region: 'na1', riotId: 'ワカ ラカ#DDR' },
        ]
    },
    {
        id: 'p52',
        name: 'KiNG Nidhogg',
        country: 'ca',
        verified: 'no',
        image: 'images/nidhogg.jpg',
        accounts: [
            { region: 'na1', riotId: 'KiNG Nidhogg#NA1' },
            { region: 'na1', riotId: 'Rienfleche#NA1' },
            { region: 'pbe1', riotId: 'KiNG Nidhogg#PBE' },
        ]
    },
    {
        id: 'p53',
        name: 'xPetu',
        country: 'fi',
        verified: 'no',
        image: 'images/xpetu.png',
        accounts: [
            { region: 'euw1', riotId: 'xPetu#River' },
            { region: 'euw1', riotId: 'xPetu#Zero' },
            { region: 'euw1', riotId: 'Twilight Glaive#ZSHN' },
            { region: 'euw1', riotId: 'Data Enjoyer#Petu' },
        ]
    },
    {
        id: 'p54',
        name: 'TFBlade',
        country: 'ca',
        verified: 'no',
        image: 'images/tfblade.png',
        accounts: [
            { region: 'na1', riotId: 'deadpool#133' },
            { region: 'na1', riotId: 'punisher#144' },
            { region: 'na1', riotId: 'DARKSEID#133' },
            { region: 'na1', riotId: 'SUPP KINGDOM#133' },
            { region: 'na1', riotId: 'Lil Ruu#155' },
            { region: 'euw1', riotId: 'TFBlade#122' },
            { region: 'na1', riotId: 'MORNING GAMER#133' },
            { region: 'na1', riotId: 'IRONMAN#133' },
            { region: 'na1', riotId: 'Island Gamer#133' },
            { region: 'na1', riotId: 'doomsday#133' },
            { region: 'na1', riotId: 'TF Blade#133' },
            { region: 'na1', riotId: 'BABA YAGA#144' },
            { region: 'na1', riotId: 'HOMELANDER#133' },
            { region: 'na1', riotId: 'jungler99#na1' },
            { region: 'na1', riotId: 'TF Blade#155' },
            { region: 'na1', riotId: 'Duo Abuse#123' },
            { region: 'na1', riotId: 'BABA YAGA#133' },
            { region: 'na1', riotId: 'Smoke#144' },
            { region: 'na1', riotId: 'THANOS11#NA1' },
            { region: 'na1', riotId: 'FOCUS GAME#123' },
            { region: 'na1', riotId: 'Alfie Solomons#133' },
            { region: 'na1', riotId: 'TURKEY INCIDENT#133' },
            { region: 'na1', riotId: 'SPIDERMAN#133' },
            { region: 'na1', riotId: 'TopLaner99#NA1' },
            { region: 'na1', riotId: 'TF Blade#NA1' },
            { region: 'na1', riotId: 'JAJA Blade#123' },
            { region: 'kr', riotId: 'TF Blade2#KR1' },
            { region: 'euw1', riotId: 'fight with brain#EUW' },
            { region: 'euw1', riotId: 'edaIB FT#EU1' },
            { region: 'na1', riotId: 'TOPJUNGKING#NA1' },
//            { region: 'kr', riotId: 'Last day in KR' },
//            { region: 'euw1', riotId: 'forsenCDKEKW' },
        ]
    },
    {
        id: 'p55',
        name: 'Odysseus',
        country: 'nl',
        verified: 'no',
        image: 'images/odysseus.png',
        accounts: [
            { region: 'euw1', riotId: 'LAMINE YAMAL#131' },
            { region: 'euw1', riotId: 'Imma touch you#131' },
            { region: 'euw1', riotId: 'Rias Megami#EUW' },
            { region: 'euw1', riotId: 'Odysseus#131' },
            { region: 'kr', riotId: 'Odysseus#KR131' },
            { region: 'euw1', riotId: 'Sorry#131' },
        ]
    },
    {
        id: 'p56',
        name: 'Caedrel',
        country: 'gb',
        verified: 'no',
        image: 'images/caedrel.jpg',
        accounts: [
            { region: 'euw1', riotId: 'SOVEREIGN33#QWE' },
            { region: 'euw1', riotId: 'cuh drel#fraud' },
            { region: 'euw1', riotId: 'SOVREIGN33#RAT' },
            { region: 'euw1', riotId: 'Tunahan Kuzu#EUW' },
            { region: 'euw1', riotId: 'G3H1weuZSwamGVbF#EUW' },
            { region: 'euw1', riotId: 'CRACKED CAEDREL#EUW' },
            { region: 'euw1', riotId: 'KpoBDQztiZPNw95z#EUW' },
            { region: 'euw1', riotId: 'TNAC I#EUW' },
            { region: 'euw1', riotId: 'RATLORD#xtd' },
            { region: 'euw1', riotId: 'Caedrel#sally' },
//            { region: 'kr', riotId: 'Caedrel#sally' },
//            { region: 'euw1', riotId: 'LEGOPIECE28125#toe' },
//            { region: 'euw1', riotId: 'CHUDREL12#LARP' },
//            { region: 'euw1', riotId: 'SPARKIE12#FRAUD' },
        ]
    },
    {
        id: 'p57',
        name: 'ohnePixel',
        country: 'de',
        verified: 'no',
        image: 'images/ohnepixel.jpg',
        accounts: [
            { region: 'euw1', riotId: 'ohnePixel#EUW' },
            { region: 'na1', riotId: 'ZIMMERMANN#REAL' },
//            { region: 'euw1', riotId: 'ohnePixel#3541' },
        ]
    },
    {
        id: 'p58',
        name: 'VeigarV2',
        country: 'no',
        verified: 'no',
        image: 'images/veigarv2.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Veigar v2#0000' },
            { region: 'euw1', riotId: 'VeigarV2SmurfAcc#123' },
            { region: 'euw1', riotId: 'C9 Loki#VV2' },
            { region: 'euw1', riotId: 'KFC Vladi#KCORP' },
            { region: 'euw1', riotId: 'C9L9#EUW' },
            { region: 'euw1', riotId: 'MakerMoney#EUW' },
            { region: 'euw1', riotId: 'veigarv2#0000' },
            { region: 'na1', riotId: 'Veigarv2Coaching#NA1' },
        ]
    },
    {
        id: 'p59',
        name: 'xQc',
        country: 'ca',
        verified: 'no',
        image: 'images/xqc.jpg',
        accounts: [
            { region: 'na1', riotId: 'XXQQCC#NA1' },
        ]
    },
    {
        id: 'p60',
        name: 'Sanchovies',
        country: 'ca',
        verified: 'no',
        image: 'images/sanchovies.png',
        accounts: [
            { region: 'euw1', riotId: 'drowsy fever#111' },
            { region: 'euw1', riotId: 'WHEEL#gunga' },
            { region: 'na1', riotId: 'WHEEL#gunga' },
            { region: 'na1', riotId: 'drowsy fever#111' },
            { region: 'na1', riotId: 'drowsy fever#000' },
            { region: 'na1', riotId: 'Dr Backshots MD#123' },
            { region: 'na1', riotId: 'Peter Buttermilk#NA2' },
//            { region: 'na1', riotId: 'IIIIIIIIIIlll#NA2' },
//            { region: 'kr', riotId: 'Nemesis#MOG' },
        ]
    },
    {
        id: 'p61',
        name: 'Humzh',
        country: 'us',
        verified: 'no',
        image: 'images/humzh.png',
        accounts: [
            { region: 'euw1', riotId: 'RAT IS WASHED#EUW' },
            { region: 'euw1', riotId: 'Brooklyn Prodigy#EUW' },
            { region: 'kr', riotId: 'humzh#KR1' },
            { region: 'na1', riotId: 'FREE PALESTINE#humzh' },
            { region: 'na1', riotId: 'NEW ERA#humzh' },
            { region: 'na1', riotId: 'humzh#boshy' },
            { region: 'na1', riotId: 'freepalestine#humzh' },
            { region: 'na1', riotId: 'Pastry#Killa' },
//            { region: 'na1', riotId: 'UwU Kitten#humzh' },
//            { region: 'kr', riotId: 'A D#KR0' },
//            { region: 'kr', riotId: '무적해병김관형#나는무적' },
        ]
    },
    {
        id: 'p62',
        name: 'lightrocket2',
        country: 'us',
        verified: 'no',
        image: 'images/lightrocket.jpg',
        accounts: [
            { region: 'na1', riotId: 'lightrocket2#NA1' },
            { region: 'na1', riotId: 'TLC Lightrocket#NA1' },
        ]
    },
    {
        id: 'p63',
        name: 'alimentacionchino',
        country: 'cn',
        verified: 'no',
        image: 'images/alimentacionchino.png',
        accounts: [
            { region: 'euw1', riotId: 'ttv alimentacion#kar' },
            { region: 'euw1', riotId: 'BingChiLingg#EUW' },
            { region: 'euw1', riotId: 'Alimentacion#chino' },
        ]
    },
    {
        id: 'p64',
        name: 'Sungod',
        country: 'fr',
        verified: 'no',
        image: 'images/sungod.jpg',
        accounts: [
            { region: 'kr', riotId: 'Sungod#KR2' },
            { region: 'euw1', riotId: 'Sungod#39015' },
            { region: 'euw1', riotId: 'Sungod#23280' },
        ]
    },
    {
        id: 'p65',
        name: 'ioki',
        country: 'us',
        verified: 'no',
        image: 'images/ioki.jpg',
        accounts: [
            { region: 'na1', riotId: 'ioki#NA1' },
            { region: 'na1', riotId: 'DovahkiinGaia#UwU' },
            { region: 'na1', riotId: 'Anceriek#NA1' },
            { region: 'na1', riotId: 'Jazzyfox#hah' },
// he problable has more, i just cant find them anywhere
        ]
    },
    {
        id: 'p66',
        name: 'huncho',
        country: 'ca',
        verified: 'no',
        image: 'images/huncho.jpg',
        accounts: [
            { region: 'euw1', riotId: 'The Dentist#FEAR' },
            { region: 'na1', riotId: 'Хунчо Хекарим#Джунг' },
            { region: 'na1', riotId: 'huncho#RANK1' },
            { region: 'na1', riotId: 'evil tarzaned#jolly' },
            { region: 'na1', riotId: 'HUNCHO HECAKING#HECA' },
            { region: 'na1', riotId: 'eviltarzaned#jolly' },
            { region: 'na1', riotId: 'хунчохекарим#джунг' },
            { region: 'na1', riotId: 'hunchohecaking#heca' },
            { region: 'na1', riotId: 'huncho#rank1' },
            { region: 'na1', riotId: 'gooneryusi#nut1' },
            { region: 'na1', riotId: 'eneskanter#wnba' },
//            { region: 'kr', riotId: 'Son of Chasik#헌쵸헤카림' },
        ]
    },
    {
        id: 'p67',
        name: 'Elite500',
        country: 'ch',
        verified: 'no',
        image: 'images/elite500.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Elite500#E500' },
            { region: 'euw1', riotId: 'ADC IS EASY#E500' },
            { region: 'euw1', riotId: 'Baalvin#E500' },
            { region: 'euw1', riotId: 'HOD RIDAAAAH#EUW' },
            { region: 'euw1', riotId: 'iudex#EUW' },
            { region: 'euw1', riotId: 'ttv Elite500#E500' },
            { region: 'kr', riotId: 'MAGEBLOOD#E500' },
//            { region: 'euw1', riotId: 'Elit5#EUW' },
        ]
    },
    {
        id: 'p68',
        name: 'PopstarGwen',
        country: 'fr',
        verified: 'no',
        image: 'images/popstargwen.jpg',
        accounts: [
            { region: 'euw1', riotId: 'PopstarGwen#4444' },
        ]
    },
    {
        id: 'p69',
        name: 'Trick2g',
        country: 'us',
        verified: 'no',
        image: 'images/trick2g.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Kram#UM6P' },
            { region: 'na1', riotId: 'Trick2g#NA1' },
            { region: 'na1', riotId: 'JUNG DIFFFF#NA1' },
            { region: 'na1', riotId: 'trick2g#na1' },
            { region: 'na1', riotId: 'LASTGATEBENDER#42837' },
            { region: 'na1', riotId: 'TeamDiffy#0420' },
            { region: 'na1', riotId: 'Drop Top R#NA1' },
        ]
    },
    {
        id: 'p70',
        name: 'Alicopter',
        country: 'ca',
        verified: 'no',
        image: 'images/alicopter.png',
        accounts: [
            { region: 'euw1', riotId: 'Ali Morrisane#EUWRS' },
            { region: 'euw1', riotId: 'alistarlolcom#euw12' },
            { region: 'kr', riotId: '불빠따출격#KR1' },
            { region: 'na1', riotId: 'Alicopter#NA321' },
            { region: 'na1', riotId: 'Pop#ALI1' },
            { region: 'na1', riotId: 'loltyler1#lol69' },
            { region: 'na1', riotId: 'Alicopter#NA1' },
            { region: 'na1', riotId: 'Agent Copter#NA123' },
            { region: 'na1', riotId: 'BusinessMan47#NA1' },
            { region: 'na1', riotId: 'God of Supports#NA1' },
            { region: 'na1', riotId: 'Retpocila#NA69' },
            { region: 'na1', riotId: 'Alicopter#GOAT' },
            { region: 'na1', riotId: 'BULLISH BULL#BULL' },
            { region: 'na1', riotId: 'Get Good In#Coptr' },
//            { region: 'na1', riotId: 'TWITCH ALICOPTER' },
//            { region: 'na1', riotId: 'Biceps Triceps' },
        ]
    },
    {
        id: 'p71',
        name: 'SirhcEz',
        country: 'us',
        verified: 'no',
        image: 'images/sirhcez.png',
        accounts: [
            { region: 'na1', riotId: 'StacksAddiction#NA1' },
            { region: 'na1', riotId: 'Just A Nub IRL#NA1' },
            { region: 'na1', riotId: 'DefinitelyNotAP#6242' },
            { region: 'na1', riotId: 'REEEEEEÈ#NA1' },
            { region: 'na1', riotId: 'FamousOneDay#NA1' },
            { region: 'na1', riotId: 'DefinitelyBadxD#NA1' },
            { region: 'na1', riotId: 'CherrySingedxD#NA1' },
            { region: 'na1', riotId: 'FeedSpecialist#NA1' },
            { region: 'na1', riotId: 'HiHelloSupLUL#NA1' },
            { region: 'na1', riotId: 'Plusss12#NA1' },
        ]
    },
    {
        id: 'p72',
        name: 'Carnarius_v2',
        country: 'pl',
        verified: 'no',
        image: 'images/carnarius.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Carnarius v2#EUW' },
            { region: 'euw1', riotId: 'Carnarastafarius #EUW' },
        ]
    },
    {
        id: 'p73',
        name: 'Feedaboi',
        country: 'ca',
        verified: 'no',
        image: 'images/feedaboi.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Cant Afford Trip#EUW' },
            { region: 'na1', riotId: 'IS THAT FEEDABOI#FEEDA' },
            { region: 'na1', riotId: 'FeedaBoi#NA1' },
            { region: 'na1', riotId: 'RatWBike#KLED' },
            { region: 'na1', riotId: 'RatWAxe#KLED' },
        ]
    },
    {
        id: 'p74',
        name: 'DirtyMobs',
        country: 'us',
        verified: 'no',
        image: 'images/dirtymobs.png',
        accounts: [
            { region: 'na1', riotId: 'DirtyMobs#Mobs' },
            { region: 'na1', riotId: 'TheMobs#NA1' },
            { region: 'na1', riotId: 'YouTubeDirtyMobs#Mobs2' },
        ]
    },
    {
        id: 'p75',
        name: 'ShowMaker',
        country: 'kr',
        verified: 'no',
        image: 'images/showmaker.jpg',
        accounts: [
            { region: 'euw1', riotId: 'nAbB2nYlLKMy2cJA#EUW' },
            { region: 'euw1', riotId: 'good bye iceland#EUW' },
            { region: 'euw1', riotId: 'dntmdgkrhtlvdjdy#EUW' },
            { region: 'euw1', riotId: 'Syndra#0722' },
            { region: 'kr', riotId: 'MIDKING#asd' },
            { region: 'kr', riotId: 'DK ShowMaker#KR1' },
            { region: 'kr', riotId: 'dwgkia#kr1' },
        ]
    },
    {
        id: 'p76',
        name: 'SoloRenektonOnly',
        country: 'us',
        verified: 'no',
        image: 'images/solorenektononly.png',
        accounts: [
            { region: 'na1', riotId: 'Big MuteAll Guy#NA1' },
            { region: 'na1', riotId: 'solorenektononly#na1' },
            { region: 'na1', riotId: 'SoloRenektonOnly#SRO' },
            { region: 'na1', riotId: 'MacBook Gamér#NA1' },
        ]
    },
    {
        id: 'p77',
        name: 'Pusi',
        country: 'de',
        verified: 'no',
        image: 'images/pusipuu.png',
        accounts: [
            { region: 'euw1', riotId: 'Pusi Puu#EUW' },
            { region: 'euw1', riotId: 'Big P#SILLY' },
            { region: 'euw1', riotId: 'kGVdb4d2V6SSAvgR#EUW' },
            { region: 'euw1', riotId: 'ls for me#EUW' },
            { region: 'euw1', riotId: 'EAT RAW ASS#SILLY' },
            { region: 'euw1', riotId: 'L9 Alphonzo#EUW' },
            { region: 'euw1', riotId: 'L9 Jimmy#EUW' },
//            { region: 'euw1', riotId: '푸시푸' }, // old lost korean account
//            { region: 'euw1', riotId: 'CEXKING IS HERE' }, // dont know the #
        ]
    },
    {
        id: 'p78',
        name: 'Fay31',
        country: 'xx',
        verified: 'yes',
        image: 'images/fay31.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Poppy31#778' },
            { region: 'euw1', riotId: '31poppi31#777' },
            { region: 'euw1', riotId: 'güçtapar31#popi' },
            { region: 'euw1', riotId: 'şako poppi31#777' },
            { region: 'na1', riotId: 'Dumbledoge#fan31' },
// they have more accounts that got banned, but also dont remember the ign
        ]
    },
    {
        id: 'p79',
        name: 'BrokenBlade',
        country: 'de',
        verified: 'no',
        image: 'images/brokenblade.png',
        accounts: [
            { region: 'euw1', riotId: 'G2 BrokenBlade#1918' },
            { region: 'euw1', riotId: 'brokenblade22#EUW' },
            { region: 'euw1', riotId: 'brokenblade12#EUW' },
//            { region: 'na1', riotId: 'G2 BrokenBlade#1819' }, // na account
//            { region: 'br1', riotId: 'G2 Fogo de Chão#1918' }, // lost brazilian account
//            { region: 'kr', riotId: 'Vasco Shot#12345' }, // korean account
        ]
    },
    {
        id: 'p80',
        name: 'Yassuo',
        country: 'us',
        verified: 'no',
        image: 'images/yassuo.png',
        accounts: [
            { region: 'kr', riotId: 'Yassuo#KR111' },
            { region: 'kr', riotId: 'Yassuo#KR11' },
            { region: 'na1', riotId: 'Yassuo#991' },
            { region: 'na1', riotId: '100T 100T 100T#EUW' },
        ]
    },
    {
        id: 'p81',
        name: 'ZED99',
        country: 'kr',
        verified: 'no',
        image: 'images/zed99.jpg',
        accounts: [
            { region: 'kr', riotId: 'zed99#kr1' },
            { region: 'kr', riotId: '261013전역최현우#kr123' },
            { region: 'kr', riotId: 'ZED99#KR1' },
        ]
    },
    {
        id: 'p82',
        name: '이렐킹 (IRELKING)',
        country: 'kr',
        verified: 'no',
        image: 'images/irelking.png',
        accounts: [
            { region: 'kr', riotId: 'Aileri#KR1' },
            { region: 'kr', riotId: 'IRELKlNG#KR1' },
            { region: 'kr', riotId: '이렐아칼리#KR2' },
            { region: 'kr', riotId: 'Kasumi#1899' },
        ]
    },
    {
        id: 'p83',
        name: 'Quantum',
        country: 'us',
        verified: 'no',
        image: 'images/quantum.png',
        accounts: [
            { region: 'na1', riotId: 'quantum#uwu' },
        ]
    },
    {
        id: 'p84',
        name: 'iPav999',
        country: 'us',
        verified: 'no',
        image: 'images/ipav999.png',
        accounts: [
            { region: 'euw1', riotId: 'Togo#Benin' },
            { region: 'na1', riotId: 'TrashChampool#NA1' },
            { region: 'na1', riotId: 'Farming Machine#NA1' },
            { region: 'na1', riotId: '55ms#normi' },
            { region: 'na1', riotId: 'SiSenor#Mo9' },
// may have more than these
        ]
    },
    {
        id: 'p85',
        name: 'Lourlo',
        country: 'us',
        verified: 'no',
        image: 'images/lourlo.png',
        accounts: [
            { region: 'euw1', riotId: 'hide on rock#EUW' },
            { region: 'na1', riotId: 'Lourlo#NA1' },
            { region: 'na1', riotId: 'fredPls#lolo' },
            { region: 'na1', riotId: 'Lourlo#NA11' },
            { region: 'na1', riotId: 'The Lo#NA1' },
            { region: 'na1', riotId: 'olruol#NA1' },
        ]
    },
    {
        id: 'p86',
        name: 'Elekktro',
        country: 'us',
        verified: 'no',
        image: 'images/elekktro.jpg',
        accounts: [
            { region: 'na1', riotId: 'Elekktro#NA1' },
        ]
    },
    {
        id: 'p87',
        name: 'Dumbs',
        country: 'fi',
        verified: 'no',
        image: 'images/dumbs.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Dumbs#2405' },
            { region: 'euw1', riotId: 'Dumbs is a furry#furry' },
            { region: 'na1', riotId: 'Dumbs x Lillia#NA1' },
        ]
    },
    {
        id: 'p88',
        name: 'Rule',
        country: 'hr',
        verified: 'no',
        image: 'images/rule.png',
        accounts: [
            { region: 'euw1', riotId: 'rule test acc#777' },
            { region: 'euw1', riotId: 'RED LiGHT 0NLY#F1ST' },
            { region: 'euw1', riotId: 'ULTRA#f1st' },
            { region: 'euw1', riotId: 'rule tiktok acc#clips' },
            { region: 'euw1', riotId: 'rxle#777' },
            { region: 'euw1', riotId: 'RULE OFFSTREAM#777' },
        ]
    },
    {
        id: 'p89',
        name: 'Manolito',
        country: 'cl',
        verified: 'no',
        image: 'images/manolito.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Huevito rey#soych' },
            { region: 'br1', riotId: 'waton lolero#gordo' },
            { region: 'la2', riotId: 'KICK Manolito#Prime' },
            { region: 'euw1', riotId: 'Kick Manolito#SB4' },
//            CAMP BOT ES WIN // soloboomchallenge. doesnt exist anymore?
//            Manolito // soloboomchallenge. doesnt exist anymore?
        ]
    },
    {
        id: 'p90',
        name: 'Rakyz',
        country: 'cl',
        verified: 'no',
        image: 'images/rakyz.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Niño Maravilla#SQC' },
            { region: 'br1', riotId: 'the kid is back#br1' },
            { region: 'la2', riotId: 'Rakyz#SBM' },
//            { region: 'la2', riotId: 'INSANO 3000' }, // soloboomchallenge
        ]
    },
    {
        id: 'p91',
        name: 'Josedeodo',
        country: 'ar',
        verified: 'no',
        image: 'images/josedeodo.jpg',
        accounts: [
            { region: 'br1', riotId: 'Josedeodo2#BR1' },
            { region: 'br1', riotId: 'josedeodo#na12' },
            { region: 'kr', riotId: 'Josedeodo#2929' },
            { region: 'na1', riotId: 'Josedeodo#NA12' },
            { region: 'na1', riotId: 'odev#123' },
            { region: 'la2', riotId: 'THE GATEKÉEPER#LAS' }, // soloboomchallenge
//            { region: 'na1', riotId: 'Jose#1129' },
//            { region: 'kr', riotId: 'Lionel Messi#TL10' },
//            { region: 'kr', riotId: '목련 재스민#123' },
        ]
    },
    {
        id: 'p92',
        name: 'Ackerman',
        country: 'ar',
        verified: 'no',
        image: 'images/ackerman.jpg',
        accounts: [
            { region: 'na1', riotId: 'ACKÈRMAN#NA1' },
            { region: 'euw1', riotId: 'seventy thirty#EUW' },
            { region: 'euw1', riotId: 'ACKERMÁN#91217' },
            { region: 'br1', riotId: 'GUXIX GANKK#123' },
            { region: 'br1', riotId: 'ÁCK#br01' },
        ]
    },
    {
        id: 'p93',
        name: 'Enga',
        country: 'ar',
        verified: 'no',
        image: 'images/enga.jpg',
        accounts: [
            { region: 'br1', riotId: 'Enga#PUNGA' },
        ]
    },
    {
        id: 'p94',
        name: 'VladSuo',
        country: 'uy',
        verified: 'yes',
        image: 'images/vladsuo.png',
        accounts: [
            { region: 'br1', riotId: 'VladSuo#Yasuo' },
            { region: 'la2', riotId: 'VlaDzukill#ISLAค' },
            { region: 'la2', riotId: 'vladsuo 2#CR7' },
            { region: 'la2', riotId: 'VladSuo#CR7' },
            { region: 'la2', riotId: 'Unforgiven Manu #LAS' },
            { region: 'la2', riotId: 'vladsuo3#cr7' },
/*             { region: 'la2', riotId: 'lRovii#ISLAค' }, // friends accounts that he boosted over the years
            { region: 'la2', riotId: 'Nastels#KaiSa' }, // friends accounts that he boosted over the years
            { region: 'la2', riotId: 'Zwux#ISLA' }, // friends accounts that he boosted over the years
            { region: 'la2', riotId: 'EsElKarma#GGEZ' }, // friends accounts that he boosted over the years
            { region: 'la2', riotId: 'heraldodelcaos1#CaOs' }, // friends accounts that he boosted over the years */
        ]
    },
    {
        id: 'p95',
        name: 'Doni',
        country: 'ar',
        verified: 'no',
        image: 'images/doni.jpg',
        accounts: [
            { region: 'br1', riotId: 'ZEN Doni#LAS1' },
            { region: 'br1', riotId: 'Doйi#BR1' },
        ]
    },
    {
        id: 'p96',
        name: 'six10',
        country: 'se',
        verified: 'no',
        image: 'images/six10.jpg',
        accounts: [
            { region: 'euw1', riotId: 'twitch Sixten#Bosse' },
            { region: 'euw1', riotId: 'twitch Sixten#EUW3' },
            { region: 'euw1', riotId: 'twitchsixten#bosse' },
            { region: 'euw1', riotId: 'twitchsixten#euw3' },
        ]
    },
    {
        id: 'p97',
        name: 'Peng',
        country: 'se',
        verified: 'no',
        image: 'images/peng.jpg',
        accounts: [
            { region: 'euw1', riotId: 'twtv Peng04#NMIXX' },
            { region: 'euw1', riotId: 'TWTV Peng04#Yuqi' },
            { region: 'euw1', riotId: 'TWTV Peng04#Hanni' },
            { region: 'euw1', riotId: 'twtv Peng04#Aespa' },
        ]
    },
    {
        id: 'p98',
        name: 'RaiderGO',
        country: 'ba',
        verified: 'no',
        image: 'images/raider.jpg',
        accounts: [
            { region: 'eun1', riotId: 'RaiderGO#2004' },
            { region: 'euw1', riotId: 'RaiderGO#TWTV1' },
            { region: 'euw1', riotId: 'RaiderGO#TWTV3' },
            { region: 'euw1', riotId: 'twtv raideru#ACC1' },
            { region: 'kr', riotId: 'RaiderGO#TWTV0' },
            { region: 'kr', riotId: 'RaiderGO#TWTV2' },
//            { region: 'euw1', riotId: 'twtv raideru#ACC2' },
        ]
    },
    {
        id: 'p99',
        name: 'Topete',
        country: 'es',
        verified: 'no',
        image: 'images/topete.jpg',
        accounts: [
            { region: 'eun1', riotId: 'cuanta razón#KAT' },
            { region: 'euw1', riotId: 'Topete#EUW' },
            { region: 'euw1', riotId: 'con razón#KAT' },
        ]
    },
    {
        id: 'p100',
        name: '6pek',
        country: 'bg',
        verified: 'no',
        image: 'images/6pek.jpg',
        accounts: [
            { region: 'euw1', riotId: '6pek#6pekk' },
        ]
    },
    {
        id: 'p101',
        name: 'Bearded Shepherd',
        country: 'us',
        verified: 'yes',
        image: 'images/beardedshepherd.jpg',
        accounts: [
            { region: 'na1', riotId: 'Bearded Shepherd#Shep' },
            { region: 'na1', riotId: 'Bearded Katarina#NA1' },
        ]
    },
    {
        id: 'p102',
        name: 'BZ',
        country: 'gb',
        verified: 'no',
        image: 'images/bz.jpg',
        accounts: [
            { region: 'euw1', riotId: 'TwTv BZ EUW#INSHL' },
            { region: 'euw1', riotId: 'test acc#shhhh' },
            { region: 'euw1', riotId: 'B Z#ZED' },
            { region: 'euw1', riotId: 'TwTv BZ EUW#NOJAW' },
            { region: 'euw1', riotId: 'twtvbzeuw#inshl' },
            { region: 'euw1', riotId: 'bz#zed' },
            { region: 'euw1', riotId: 'twtvbzeuw#nojaw' },
//            { region: 'euw1', riotId: 'B Z#TWTV' },
        ]
    },
    {
        id: 'p103',
        name: 'kaitania',
        country: 'se',
        verified: 'no',
        image: 'images/kaitania.png',
        accounts: [
            { region: 'euw1', riotId: 'twtv kaiitania#kait' },
            { region: 'euw1', riotId: 'kaitania#chill' },
            { region: 'euw1', riotId: 'KAITANlA#EUW' },
            { region: 'euw1', riotId: 'TWTV KAIITANIA#MASTA' },
            { region: 'euw1', riotId: 'twtvkaiitania#kait' },
        ]
    },
    {
        id: 'p104',
        name: 'V222',
        country: 'kr',
        verified: 'no',
        image: 'images/v222.png',
        accounts: [
            { region: 'euw1', riotId: 'Malone Lam#BLUE' },
            { region: 'euw1', riotId: 'TWTV V222LOL#000' },
            { region: 'euw1', riotId: 'CN7#HIM' },
            { region: 'euw1', riotId: '222#911' },
            { region: 'na1', riotId: 'TWITCHTV V222#1774' },
//            { region: 'euw1', riotId: 'V222 #GRIND' },
//            { region: 'euw1', riotId: 'HelloIAmFierce15#Meow' },
//            { region: 'euw1', riotId: 'V222#EUW' },
        ]
    },
    {
        id: 'p105',
        name: 'EkkoSuna',
        country: 'fr',
        verified: 'no',
        image: 'images/ekkosuna.png',
        accounts: [
            { region: 'euw1', riotId: 'EkkoSuna#SUNA' },
            { region: 'euw1', riotId: 'Suna#Ekko' },
            { region: 'euw1', riotId: 'Ekkorea#SUNA' },
//            { region: 'euw1', riotId: 'EgoSuna#GOD' },
//            { region: 'kr', riotId: 'Ekkoppa#Gran' },
        ]
    },
    {
        id: 'p106',
        name: 'Agurin',
        country: 'de',
        verified: 'no',
        image: 'images/agurin.png',
        accounts: [
            { region: 'eun1', riotId: 'Bgurin#4000' },
            { region: 'euw1', riotId: 'EMPEROR AGURIN#ROYAL' },
            { region: 'euw1', riotId: 'Bgurin#4000' },
            { region: 'euw1', riotId: 'P0ST LEEMONT#EUW' },
            { region: 'euw1', riotId: 'Wufo#xdd' },
            { region: 'kr', riotId: '모모Agurin#KR1' },
            { region: 'na1', riotId: 'NAgurin#EU1' },
        ]
    },
    {
        id: 'p107',
        name: 'V1per',
        country: 'ca',
        verified: 'no',
        image: 'images/v1per.png',
        accounts: [
            { region: 'euw1', riotId: 'never type#old' },
            { region: 'na1', riotId: 'never type#1998' },
            { region: 'na1', riotId: 'cant type#1998' },
            { region: 'na1', riotId: 'will type#1998' },
            { region: 'na1', riotId: 'old#1998' },
            { region: 'na1', riotId: 'Viper#RvVn' },
            { region: 'na1', riotId: 'Been you#NA2' },
            { region: 'na1', riotId: 'good but grandpa#NA2' },
            { region: 'na1', riotId: 'Abuse Duo#123' },
            { region: 'na1', riotId: 'Splitting#NA1' },
        ]
    },
    {
        id: 'p108',
        name: 'kadeem',
        country: 'us',
        verified: 'no',
        image: 'images/kadeem.jpg',
        accounts: [
            { region: 'na1', riotId: 'kadeem718#135' },
        ]
    },
    {
        id: 'p109',
        name: 'BarbaKahn',
        country: 'ar',
        verified: 'no',
        image: 'images/barbakahn.jpg',
        accounts: [
            { region: 'la2', riotId: 'Yo soy el Lobo#Kahn' },
            { region: 'la2', riotId: 'El Rey Lag#1933' },
            { region: 'la1', riotId: 'No Shaco no win#LAN' },
            { region: 'la1', riotId: 'El Rey Baiteo#57534' },
            { region: 'na1', riotId: 'BarbaKahn#NA1' },
//            { region: 'la2', riotId: 'Sir Lancelot21#LAS' }, // doesnt seem like the same acc from videos
//            { region: 'na1', riotId: 'I Am The Laggg' }, // missing #
// THIS ONE IS A FUCKING RABIT HOLE
        ]
    },
    {
        id: 'p110',
        name: 'Veigarciano',
        country: 'ar',
        verified: 'yes',
        image: 'images/veigarciano.jpg',
        accounts: [
            { region: 'la2', riotId: 'Veigarciano#Nico' },
            { region: 'la2', riotId: 'MiniBoss#Chall' },
// had one named darklegendary, but it was renamed and lost track
        ]
    },
    {
        id: 'p111',
        name: 'caresapo',
        country: 'co',
        verified: 'no',
        image: 'images/caresapo.png',
        accounts: [
            { region: 'la1', riotId: 'xCaresapo#5598' },
            { region: 'euw1', riotId: 'Careindio#COL' },
            { region: 'la2', riotId: 'Isabela#iiisa' },
            { region: 'na1', riotId: 'Gaymerdinger#SAPO' },
            { region: 'euw1', riotId: 'Caresapo#LATAM' },
            { region: 'la1', riotId: 'Caresapo#SAPO' },
//            PerdíTodoConBTC#7522
//            Cálculo Dif
//            Carepene
        ]
    },
    {
        id: 'p112',
        name: 'Macdemac',
        country: 'ar',
        verified: 'yes',
        image: 'images/macdemac.png',
        accounts: [
            { region: 'br1', riotId: 'QTKuro#BR1' },
            { region: 'br1', riotId: 'teresa fidalgo#unu' },
            { region: 'br1', riotId: 'falling for you#mac' },
            { region: 'br1', riotId: 'velkers#macdm' },
            { region: 'la2', riotId: 'Doomed#mac3' },
            { region: 'la2', riotId: 'Nutshell#mac' },
            { region: 'la2', riotId: 'macdemac#unu' },
//            { region: 'br1', riotId: 'macdemac#mac' },
//            { region: 'br1', riotId: 'macdemac#666' },
//            { region: 'la2', riotId: 'falling for you#macdm' },
// said they may or may not have more
        ]
    },
    {
        id: 'p113',
        name: 'grafo',
        country: 'ar',
        verified: 'no',
        image: 'images/grafo.png',
        accounts: [
            { region: 'br1', riotId: 'moko#BR1' },
            { region: 'br1', riotId: 'ANTEZANA#BR1' },
            { region: 'euw1', riotId: 'Malo#PROTO' },
            { region: 'br1', riotId: 'malo#43993' },
            { region: 'la2', riotId: 'KILLUMINATI#las' },
            { region: 'la2', riotId: 'nico#VGB0' },
            { region: 'na1', riotId: 'grafo#na2' },
            { region: 'br1', riotId: 'GORDO#br3' },
//            { region: 'la2', riotId: 'its a bg' },
//            { region: 'la2', riotId: 'grafatness' },
        ]
    },
    {
        id: 'p114',
        name: 'Nissaxter',
        country: 'es',
        verified: 'no',
        image: 'images/nissaxter.png',
        accounts: [
            { region: 'euw1', riotId: 'MocoConSangre#KEKW' },
            { region: 'euw1', riotId: '屁股上有粪便#666' },
            { region: 'euw1', riotId: 'Skinny Platita#KEKW' },
            { region: 'euw1', riotId: 'KOI PacoSanz#EUW' },
            { region: 'euw1', riotId: 'LaKinliMeDuerme#ZZZ' },
            { region: 'euw1', riotId: 'ChicaDeBarrio#UWU' },
        ]
    },
    {
        id: 'p115',
        name: 'Stepz',
        country: 've',
        verified: 'no',
        image: 'images/stepz.jpg',
        accounts: [
            { region: 'br1', riotId: 'STEPZ#asd' },
            { region: 'br1', riotId: 'Hïde õn Bush#BR1' },
            { region: 'kr', riotId: 'stepz#krrrr' },
            { region: 'na1', riotId: 'Valeria#NA6' },
        ]
    },
    {
        id: 'p116',
        name: 'Rekkles',
        country: 'se',
        verified: 'no',
        image: 'images/rekkles.png',
        accounts: [
            { region: 'euw1', riotId: 'Rekkles#1996' },
            { region: 'euw1', riotId: 'Rekkles#ADC96' },
            { region: 'euw1', riotId: 'Rekkles#SUP96' },
            { region: 'kr', riotId: 'Rekkles#KR96' },
//            { region: 'euw1', riotId: 'Doma#SUP' },
//            { region: 'euw1', riotId: 'Latias#SUP' },
        ]
    },
    {
        id: 'p117',
        name: 'Razork',
        country: 'es',
        verified: 'no',
        image: 'images/razork.png',
        accounts: [
            { region: 'euw1', riotId: 'Razørk Activoo#razzz' },
            { region: 'euw1', riotId: 'Cachorro Alpha#razzz' },
            { region: 'euw1', riotId: 'Golfilla#EUW' },
            { region: 'euw1', riotId: 'G2 Argøs#EUW' },
            { region: 'euw1', riotId: 'NavikrozaR#EUW' },
//            { region: 'euw1', riotId: 'Mu Yanling#Sky' },
        ]
    },
    {
        id: 'p118',
        name: 'Elyoya',
        country: 'es',
        verified: 'no',
        image: 'images/elyoya.jpg',
        accounts: [
            { region: 'euw1', riotId: 'komanche uchiha#elite' },
            { region: 'euw1', riotId: 'domyos#mchla' },
            { region: 'euw1', riotId: 'Ratón calvo#EUW' },
            { region: 'euw1', riotId: 'Andrew Laedis#EUW' },
            { region: 'euw1', riotId: 'gg fructis#EUW' },
//            { region: 'na1', riotId: 'Dani Flow#myrwn' },
        ]
    },
    {
        id: 'p119',
        name: 'Jesskiu',
        country: 'es',
        verified: 'no',
        image: 'images/jesskiu.png',
        accounts: [
            { region: 'euw1', riotId: 'GỌLFA Nokia#Jess' },
            { region: 'euw1', riotId: 'Gorzycka#EUW' },
            { region: 'euw1', riotId: 'Εspaña#EUW' },
            { region: 'euw1', riotId: 'Tetones#EUW' },
        ]
    },
    {
        id: 'p120',
        name: 'Kaos_Angel',
        country: 'gb',
        verified: 'no',
        image: 'images/kaosangel.png',
        accounts: [
            { region: 'euw1', riotId: 'Gacha Gamer#EUW' },
            { region: 'euw1', riotId: 'Acheron IX#K405' },
            { region: 'euw1', riotId: 'Cuddle Cat Kaos#EUW' },
            { region: 'euw1', riotId: 'HoYoverse Slave#K405' },
            { region: 'euw1', riotId: 'K405#K405' },
            { region: 'euw1', riotId: 'gachabate#guuna' },
            { region: 'euw1', riotId: 'John Wick 5#KEANU' },
            { region: 'euw1', riotId: 'Kaostanza TFF#K405' },
            { region: 'euw1', riotId: 'Acheron E4#K405' },
            { region: 'euw1', riotId: 'Kaos Angel#K405' },
            { region: 'euw1', riotId: 'Kaostanza#Angel' },
        ]
    },
    {
        id: 'p121',
        name: 'Deftsu',
        country: 'ar',
        verified: 'yes',
        image: 'images/deftsu.jpg',
        accounts: [
            { region: 'la2', riotId: 'KICK DEFTSULOL#BLG' },
            { region: 'la2', riotId: 'twtv Deftsu1#BLG' },
            { region: 'la2', riotId: 'Deftsu#000' },
            { region: 'br1', riotId: 'love me not#BLG' },
            { region: 'la2', riotId: 'banatroll2027#SB3' }, // soloboom challenge 2023
//            { region: 'la2', riotId: 'GETGROOMED#SB5' }, // soloboom challenge 2025
//            { region: 'br1', riotId: 'Viper#BR7' }, // sold to someone a while ago

        ]
    },
    {
        id: 'p122',
        name: 'Hans Sama',
        country: 'fr',
        verified: 'no',
        image: 'images/hanssama.jpg',
        accounts: [
            { region: 'euw1', riotId: 'G2 Hans Sama#12838' },
            { region: 'euw1', riotId: '02170216#EUW' },
            { region: 'euw1', riotId: 'RGE Hαns sαmα#EUW' },
            { region: 'euw1', riotId: 'Tαng sαn#EUW' },
            { region: 'euw1', riotId: 'G2ThreeEyeDraven#EUW' },
            { region: 'euw1', riotId: 'Hans AYAYA#EUW' },
            { region: 'euw1', riotId: '2021Worlds0052#EUW' },
            { region: 'euw1', riotId: '1ADCADC#EUW' },
            { region: 'euw1', riotId: 'ADCADCSAMA#EUW' },
            { region: 'na1', riotId: 'FZQFSFSF#NA1' },
            { region: 'na1', riotId: 'EDFDSUH#NA1' },
//            { region: 'br1', riotId: 'G2G2G2#32235' },
//            { region: 'kr', riotId: '12838712#123' },
//            { region: 'na1', riotId: 'G2 12838712#1234' },
        ]
    },
    {
        id: 'p123',
        name: 'Manco',
        country: 'us',
        verified: 'no',
        image: 'images/manco.png',
        accounts: [
            { region: 'na1', riotId: 'Teemo Top#Fill' },
            { region: 'na1', riotId: 'Teemo ADC#Fill' },
            { region: 'na1', riotId: 'Mid Teemo#Man1' },
            { region: 'na1', riotId: 'Teemo ADC#Man1' },
            { region: 'na1', riotId: 'Support Teemo#Man1' },
        ]
    },
    {
        id: 'p124',
        name: 'Alan234',
        country: 'de',
        verified: 'no',
        image: 'images/alan234.png',
        accounts: [
            { region: 'euw1', riotId: 'Alan234#EUW' },
            { region: 'euw1', riotId: 'OneTwoTrickFour#EUW' },
        ]
    },
    {
        id: 'p125',
        name: 'JavierLoL',
        country: 'es',
        verified: 'no',
        image: 'images/javierlol.png',
        accounts: [
            { region: 'euw1', riotId: 'Javier#RITO' }, // main
            { region: 'euw1', riotId: 'Pompers#EUW' },
            { region: 'euw1', riotId: 'JavierrVAL#RITO' },
            { region: 'euw1', riotId: 'Look My Bubble#EUW' },
            { region: 'euw1', riotId: 'ChicoRebelde#EUW' }, // soloq challenge 2022
            { region: 'euw1', riotId: 'eMonkeyz Run#514' },
//            Jαvier // main before namechange. the a is a little different than the normal a
//            { region: 'euw1', riotId: 'DianaAliciaWLD' }, // soloboom challenge 2025?
//            { region: 'euw1', riotId: 'JavierrLoL#420' }, // namechanged
//            { region: 'euw1', riotId: 'SpeedRunChall#rito' }, // namechanged

        ]
    },
    {
        id: 'p126',
        name: 'Dahvys',
        country: 'es',
        verified: 'no',
        image: 'images/dahvys.png',
        accounts: [
            { region: 'euw1', riotId: 'Inde Navarrette#WlFE' },
            { region: 'euw1', riotId: 'Bigby WoIf#EUW' },
            { region: 'euw1', riotId: 'eYTiIqP8Ifzaf4c8#EUW' },
            { region: 'euw1', riotId: 'nW1WrLya7hRaouqm#EUW' },
            { region: 'euw1', riotId: 'Bigby Wøøf#EUW' },
            { region: 'euw1', riotId: 'DHVS999#EUW' },
            { region: 'euw1', riotId: 'LcƒrMrnngstr#EUW' },
            { region: 'euw1', riotId: 'KeyboardWRLD999#EUW' },
            { region: 'euw1', riotId: 'DHVS67676767#FIX' },
        ]
    },
    {
        id: 'p127',
        name: 'Attila',
        country: 'pt',
        verified: 'no',
        image: 'images/attila.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Attila#SUP' },
            { region: 'euw1', riotId: 'Attila#ADC4' },
            { region: 'euw1', riotId: 'Pride#9032' },
            { region: 'euw1', riotId: 'Attila#JGL' },
            { region: 'euw1', riotId: 'Attila#MID' },
            { region: 'euw1', riotId: 'Me gustan rubias#EUW' },
            { region: 'euw1', riotId: 'CEO de los Hunos#EUW' },
            { region: 'euw1', riotId: 'Amadeu Carvalho#EUW' },
            { region: 'euw1', riotId: 'GXI Dictator#30K' },
        ]
    },
    {
        id: 'p128',
        name: 'Jesuscpev',
        country: 'es',
        verified: 'yes',
        image: 'images/jesuscpev.png',
        accounts: [
            { region: 'euw1', riotId: 'EL BAIFO#cpev' },
            { region: 'euw1', riotId: 'Quevedo#cpev' },
            { region: 'euw1', riotId: 'Fun Cycle#Abner' },
            { region: 'euw1', riotId: 'LA BRUIXA SNIPER#skain' },
        ]
    },
    {
        id: 'p129',
        name: 'NotOtakuu',
        country: 'es',
        verified: 'no',
        image: 'images/nototakuu.png',
        accounts: [
            { region: 'euw1', riotId: 'NotOtakuu #RAWR' },
            { region: 'euw1', riotId: 'NotOtakuu com#PEREZ' },
        ]
    },
    {
        id: 'p130',
        name: 'Charolon',
        country: 've',
        verified: 'no',
        image: 'images/charolon.png',
        accounts: [
            { region: 'euw1', riotId: 'Charolon#LATAM' },
            { region: 'la1', riotId: 'Charolon#Frog' },
            { region: 'na1', riotId: 'Charolon#NA3' },
            { region: 'na1', riotId: 'Charolon#NA2' },
            { region: 'euw1', riotId: '150ms#LATAM' }
        ]
    },
    {
        id: 'p131',
        name: 'Willyrex Fanboy',
        country: 'es',
        verified: 'no',
        image: 'images/willyrexfanboy.png',
        accounts: [
            { region: 'euw1', riotId: 'WiIIyrex Fanboy#EUW' },
            { region: 'euw1', riotId: 'ojitos lindos#Willy' },
            { region: 'euw1', riotId: 'elmi uwu69#EUW' },
            { region: 'euw1', riotId: 'SUPERESTRELLA#Willy' },
        ]
    },
    {
        id: 'p132',
        name: 'XadowAsol',
        country: 'es',
        verified: 'no',
        image: 'images/xadowasol.png',
        accounts: [
            { region: 'euw1', riotId: 'El10#XADOW' },
            { region: 'kr', riotId: 'El10#2007' },
            { region: 'euw1', riotId: 'TTV XadowAsol #ASOL' },
        ]
    },
    {
        id: 'p133',
        name: 'Siler',
        country: 'es',
        verified: 'no',
        image: 'images/siler.png',
        accounts: [
            { region: 'euw1', riotId: 'JNOGALES CORTI#SOL' },
            { region: 'euw1', riotId: 'SALAHUECA#CANNA' },
            { region: 'euw1', riotId: 'OhnoItsADragon#023' },
            { region: 'euw1', riotId: 'LladosFitYoutube#EUW' },
            { region: 'euw1', riotId: 'CHALLORBALD#CANAS' },
            { region: 'euw1', riotId: 'GuerreroLola#EUW' },
            { region: 'euw1', riotId: 'TROPHY HOLDER#EUW' },
            { region: 'euw1', riotId: 'Castañaman#EUW' },
            { region: 'euw1', riotId: 'LACCEK#EUW' },
        ]
    },
    {
        id: 'p134',
        name: 'Th3Antonio',
        country: 'es',
        verified: 'no',
        image: 'images/th3antonio.jpg',
        accounts: [
            { region: 'euw1', riotId: 'GX TH3#TH3' },
            { region: 'euw1', riotId: 'Th3Antonio#Uwu' },
            { region: 'euw1', riotId: 'Th3Antonio uwu#EUW' },
            { region: 'euw1', riotId: 'Th3Antonio#TH3' },
            { region: 'euw1', riotId: 'marinated pork#EUW' },
            { region: 'euw1', riotId: 'Th3Mushroom#EUW' },
            { region: 'euw1', riotId: 'spanish potterrr#EUW' },
            { region: 'euw1', riotId: 'PELUK1NG#EUW' },
            { region: 'euw1', riotId: 'PEŁUK1NG#EUW' },
            { region: 'euw1', riotId: 'TH3PLAN#TH3' },
            { region: 'euw1', riotId: 'Tarzan Hondureño#TH3' },
        ]
    },
    {
        id: 'p135',
        name: 'ElOjoNinja',
        country: 'es',
        verified: 'no',
        image: 'images/elojoninja.png',
        accounts: [
            { region: 'euw1', riotId: '0jete#WOW' },
            { region: 'euw1', riotId: 'EIOjoNinja#EUW' },
            { region: 'euw1', riotId: 'ElHoyoNinja#EUW' },
            { region: 'euw1', riotId: 'Ladguillos69#EUW' },
        ]
    },
    {
        id: 'p136',
        name: 'Kerios',
        country: 'es',
        verified: 'yes',
        image: 'images/kerios.png',
        accounts: [
            { region: 'euw1', riotId: 'elhombrepala#7777' },
            { region: 'euw1', riotId: 'Domador De Mamis#jeje' },
            { region: 'kr', riotId: 'DOPAdor de Monos#Papi' },
            { region: 'euw1', riotId: 'Cristobal Qlon#6767' },
            { region: 'euw1', riotId: 'CatadorDeYayas#papi' }, // first to challenger 2025
            { region: 'euw1', riotId: 'Dalai Kerios#EUW' }, // soloq challenge 2020
            { region: 'euw1', riotId: 'Kulerios#EUW' }, // soloq challenge 2021
            { region: 'euw1', riotId: 'Cabeza de Huevo#EUW' }, // soloq challenge 2022
//            { region: 'pbe1', riotId: 'KeriosYT' },
//            { region: 'pbe1', riotId: 'KatangaPBE' },
//            Laurita04#AAAAA // old permabanned account?
//            Kerios Combo
//            kerios // tournament realm account
        ]
    },
    {
        id: 'p137',
        name: 'Xixauxas',
        country: 'es',
        verified: 'no',
        image: 'images/xixauxas.png',
        accounts: [
            { region: 'euw1', riotId: 'Xixauxas#POLLO' },
            { region: 'euw1', riotId: 'ElBolso de Carla#3547' },
            { region: 'euw1', riotId: 'AbueloSeductor69#EUW' },
            { region: 'euw1', riotId: 'Cafè amb llet#EUW' },
            { region: 'euw1', riotId: 'Logii Hacendado#EUW' },
            { region: 'euw1', riotId: 'Xixarras#EUW' },
            { region: 'euw1', riotId: 'Pyke Wazowskii#EUW' },
            { region: 'euw1', riotId: 'Xinxejas#CEJA' },
        ]
    },
    {
        id: 'p138',
        name: 'Palkiogre',
        country: 'es',
        verified: 'no',
        image: 'images/palkiogre.jpg',
        accounts: [
            { region: 'euw1', riotId: 'PALKIOGRE2#PK2' },
            { region: 'euw1', riotId: 'PALKIOGRE2#IR3N3' },
        ]
    },
    {
        id: 'p139',
        name: 'AdcShiiro',
        country: 'es',
        verified: 'no',
        image: 'images/adcshiiro.png',
        accounts: [
            { region: 'euw1', riotId: 'Gor D Roger#2016' },
            { region: 'euw1', riotId: 'Rocks D Xebec#91919' },
            { region: 'euw1', riotId: 'Lord Gordemort#FAT' },
            { region: 'euw1', riotId: 'PogOrdo#1999' },
            { region: 'euw1', riotId: 'RøaD2ban#EUW' },
            { region: 'euw1', riotId: 'Barriga Humana#EUW' },
        ]
    },
    {
        id: 'p140',
        name: 'PapiSosa',
        country: 'mx',
        verified: 'no',
        image: 'images/papisosa.jpg',
        accounts: [
            { region: 'euw1', riotId: 'PapiDeXokas#LATAM' },
            { region: 'la1', riotId: 'EL TINTINTAN#LAN' },
            { region: 'na1', riotId: 'Papi Sosa#NA1' },
        ]
    },
    {
        id: 'p141',
        name: 'Dalvenger',
        country: 'es',
        verified: 'no',
        image: 'images/dalvenger.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Soy Poppy entro#ANHQV' },
            { region: 'euw1', riotId: 'Dalvenger#EUW' },
        ]
    },
    {
        id: 'p142',
        name: 'Skain',
        country: 'es',
        verified: 'no',
        image: 'images/skain.jpg',
        accounts: [
            { region: 'euw1', riotId: 'skain#2424' },
            { region: 'euw1', riotId: 'keria nightmare#EUW' },
            { region: 'euw1', riotId: 'S K X X N#EUW' },
            { region: 'euw1', riotId: '2K4IN#EUW' },
            { region: 'euw1', riotId: 'egirls above all#EUW' },
            { region: 'euw1', riotId: 'COI Skain#COI' },
            { region: 'euw1', riotId: 'Clαrk Kent#0024' },
        ]
    },
    {
        id: 'p143',
        name: 'Werlyb',
        country: 'es',
        verified: 'no',
        image: 'images/werlyb.jpg',
        accounts: [
            { region: 'euw1', riotId: 'JorgeCazalobas#ddeo' },
            { region: 'euw1', riotId: 'illo wely#EUW' },
            { region: 'euw1', riotId: 'lllIlIIIIlIll#EUW' },
            { region: 'euw1', riotId: 'El Casanovas#ano' },
            { region: 'euw1', riotId: 'El Casanovas#EUW' },
            { region: 'euw1', riotId: 'George Casanovas#EUW' },
            { region: 'euw1', riotId: 'IreliaCosplayer#EUW' },
            { region: 'euw1', riotId: 'TheShy Gitano#PAYO' },
        ]
    },
    {
        id: 'p144',
        name: 'MissPolaroid',
        country: 'es',
        verified: 'no',
        image: 'images/misspolaroid.jpg',
        accounts: [
            { region: 'euw1', riotId: 'dοiphιnρμssy#mara' },
            { region: 'euw1', riotId: 'Nena con antena#0000' },
            { region: 'euw1', riotId: 'Mara#9090' },
            { region: 'euw1', riotId: 'Meka Gonsima#SOLOQ' },
        ]
    },
    {
        id: 'p145',
        name: 'ADERTYH',
        country: 'es',
        verified: 'no',
        image: 'images/adertyh.png',
        accounts: [
            { region: 'euw1', riotId: 'King#UFC' },
            { region: 'euw1', riotId: 'PirotsAbuser#ARG' },
        ]
    },
    {
        id: 'p146',
        name: 'Yonna',
        country: 'es',
        verified: 'no',
        image: 'images/yonna.png',
        accounts: [
            { region: 'euw1', riotId: 'Cachivache#SQC' },
            { region: 'euw1', riotId: 'Yonna#000' },
            { region: 'euw1', riotId: 'Lapin#EUW01' },
            { region: 'euw1', riotId: 'Devyluke#EUW' },
            { region: 'euw1', riotId: 'Yoronna#EUW' },
            { region: 'euw1', riotId: 'oye papi#EUW' },
            { region: 'euw1', riotId: 'heyy olviyonna#EUW' },
        ]
    },
    {
        id: 'p147',
        name: 'Jade',
        country: 'es',
        verified: 'no',
        image: 'images/jade.png',
        accounts: [
            { region: 'euw1', riotId: 'kickjade#bratz' },
            { region: 'euw1', riotId: 'jademaforo#jade' },
            { region: 'euw1', riotId: 'ISRAELIA#JADE' },
//            BRATZ IRL#JADE
//            StarlightPrinces#JADE
        ]
    },
    {
        id: 'p148',
        name: 'Reven',
        country: 'es',
        verified: 'no',
        image: 'images/reven.jpg',
        accounts: [
            { region: 'euw1', riotId: 'KNOWEATS#AD1' },
            { region: 'euw1', riotId: 'reventxz#5507' },
            { region: 'euw1', riotId: 'MKOI Reven#KOI' },
            { region: 'euw1', riotId: 'Lionheartzz#EUW' },
            { region: 'euw1', riotId: 'COI Reven#COI' },
            { region: 'na1', riotId: 'ReventXz NA#NA1' },
//            { region: 'euw1', riotId: 'EL EKOINOMISTA#EUW' },
//            { region: 'pbe1', riotId: 'RaventXzPBE' },
        ]
    },
    {
        id: 'p149',
        name: 'HoldemHammers',
        country: 'es',
        verified: 'no',
        image: 'images/holdemhammers.jpg',
        accounts: [
            { region: 'euw1', riotId: 'HAIL HOLDEM#JAYCE' },
            { region: 'euw1', riotId: 'Holdem#OTP' },
            { region: 'euw1', riotId: 'Holdem Hammers#EUW' },
            { region: 'euw1', riotId: 'Holdem Hammers#Jayce' },
            { region: 'euw1', riotId: 'HH Style#Jayce' },
//            { region: 'pbe1', riotId: 'Holdem' },
        ]
    },
    {
        id: 'p150',
        name: 'CarmenSandwich',
        country: 'es',
        verified: 'no',
        image: 'images/carmensandwich.png',
        accounts: [
            { region: 'euw1', riotId: 'Motonami#nami' },
            { region: 'euw1', riotId: 'Fresca#UWU' },
        ]
    },
    {
        id: 'p151',
        name: 'Candela',
        country: 'es',
        verified: 'no',
        image: 'images/damnastrid.png',
        accounts: [
            { region: 'euw1', riotId: 'Contxita Tsunoda#Yuki' },
            { region: 'euw1', riotId: 'cαndelα#EUW' },
        ]
    },
    {
        id: 'p152',
        name: 'PochiPoom',
        country: 'es',
        verified: 'no',
        image: 'images/pochipoom.png',
        accounts: [
            { region: 'euw1', riotId: 'PochiPoom#POOM' },
            { region: 'euw1', riotId: 'PapaPoom#UCAM' },
            { region: 'euw1', riotId: 'MeLaShacoooo#EUW' },
        ]
    },
    {
        id: 'p153',
        name: 'AlvaroStorm',
        country: 'es',
        verified: 'no',
        image: 'images/alvarostorm.png',
        accounts: [
            { region: 'euw1', riotId: 'TORMENTITAS#EUW' },
            { region: 'euw1', riotId: 'I wiII faiI it#EUW' },
            { region: 'euw1', riotId: 'StormÁlvaro#EUW' },
            { region: 'euw1', riotId: 'AlvaroTormentas#EUW' },
            { region: 'euw1', riotId: 'I will get it#EUW' },
            { region: 'euw1', riotId: 'EstoyCansadoJefe#3419' },
            { region: 'euw1', riotId: 'I will get it#soon' },
            { region: 'euw1', riotId: 'Tormentitas#SQC' },
        ]
    },
    {
        id: 'p154',
        name: 'Fahhhkies',
        country: 'es',
        verified: 'no',
        image: 'images/fahhkies.png',
        accounts: [
            { region: 'euw1', riotId: 'Fahhkies#EUW' },
            { region: 'euw1', riotId: 'Vakis#MeAso' },
            { region: 'euw1', riotId: 'Tak#keek' },
        ]
    },
    {
        id: 'p155',
        name: 'Maiiser',
        country: 'es',
        verified: 'no',
        image: 'images/maiiser.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Jabon de Hamster#WIWI' },
            { region: 'euw1', riotId: 'Vaayser#Jabo' },
        ]
    },
    {
        id: 'p156',
        name: 'HolaSoySergio1',
        country: 'es',
        verified: 'no',
        image: 'images/holasoysergio1.png',
        accounts: [
            { region: 'euw1', riotId: 'CR9mm#EUW' },
            { region: 'euw1', riotId: 'I love FUMAR#humo' },
            { region: 'euw1', riotId: 'hola soc sergi#euw' },
        ]
    },
    {
        id: 'p157',
        name: 'Karchez',
        country: 'es',
        verified: 'no',
        image: 'images/karchez.png',
        accounts: [
            { region: 'euw1', riotId: '챔피언#KR11' },
            { region: 'euw1', riotId: 'COI Karchez#COI' },
//            { region: 'euw1', riotId: 'DrHuevoDerecho#EGO' },
        ]
    },
    {
        id: 'p158',
        name: 'PauSenpaii',
        country: 'es',
        verified: 'no',
        image: 'images/pausenpaii.png',
        accounts: [
            { region: 'euw1', riotId: 'pepo#miau' },
            { region: 'euw1', riotId: 'pop#snp' },
//            { region: 'euw1', riotId: 'Cute af#EUW' },
        ]
    },
    {
        id: 'p159',
        name: 'Mahria',
        country: 'es',
        verified: 'no',
        image: 'images/mahriaa.png',
        accounts: [
            { region: 'euw1', riotId: 'lucky charm#ahri' },
            { region: 'euw1', riotId: 'bloody mary#πriod' },
            { region: 'euw1', riotId: 'kyubi#telo' },
        ]
    },
    {
        id: 'p160',
        name: 'Zeling',
        country: 'es',
        verified: 'no',
        image: 'images/zeling.png',
        accounts: [
            { region: 'euw1', riotId: 'CiberMendiga#ESP' },
            { region: 'euw1', riotId: 'Altaria Lyns#EUW' },
            { region: 'euw1', riotId: 'Mofetilla#EUW' },
            { region: 'euw1', riotId: 'Ginnyng#EUW' },
            { region: 'euw1', riotId: 'Laqtecuento#49406' },
            { region: 'euw1', riotId: 'Amouranth Sister#EUW' },
            { region: 'euw1', riotId: 'escalopendra#jdddd' },
            { region: 'euw1', riotId: 'Snypi#uwu' },
        ]
    },
    {
        id: 'p161',
        name: 'elxokas',
        country: 'es',
        verified: 'no',
        image: 'images/elxokas.png',
        accounts: [
            { region: 'euw1', riotId: 'XOKAS THE KING#KEKY' },
            { region: 'euw1', riotId: 'YO 10 TU 6#KEK' },
        ]
    },
    {
        id: 'p162',
        name: 'ElTioBarry',
        country: 'es',
        verified: 'no',
        image: 'images/eltiobarry.jpg',
        accounts: [
            { region: 'euw1', riotId: 'IL VECCHIO MONO#LOL' },
            { region: 'euw1', riotId: 'Vi ejita RANK 1#EUW' },
            { region: 'euw1', riotId: 'eldelabarrapan#EUW' },
            { region: 'euw1', riotId: 'Trapico viejo#7442' },
        ]
    },
    {
        id: 'p163',
        name: 'Anuj',
        country: 'es',
        verified: 'no',
        image: 'images/anuj.png',
        accounts: [
            { region: 'euw1', riotId: 'Ábalos Butanero#PSOE' },
// no accounts nor league games played on stream at all
        ]
    },
    {
        id: 'p164',
        name: 'Abby',
        country: 'es',
        verified: 'no',
        image: 'images/abby.jpg',
        accounts: [
            { region: 'euw1', riotId: 'toto de loca#WLW' },
            { region: 'euw1', riotId: 'もののけ姫#bae' },
//            { region: 'kr', riotId: 'Gangnam girl#soju' },
//            { region: 'euw1', riotId: 'AFC Abby#eProd' }, // tournament account
        ]
    },
    {
        id: 'p168',
        name: 'BarbeQ',
        country: 'es',
        verified: 'no',
        image: 'images/barbeq.png',
        accounts: [
            { region: 'euw1', riotId: 'Calvondish#calvo' },
            { region: 'euw1', riotId: 'BarbeQ#EUW' },
        ]
    },
    {
        id: 'p169',
        name: 'Ahre',
        country: 'ar',
        verified: 'yes',
        image: 'images/ahre.png',
        accounts: [
            { region: 'la2', riotId: 'Ahre#ISLAค' },
            { region: 'la2', riotId: 'Reah#xddd' },
            { region: 'br1', riotId: 'Ahre6#ISLAค' },
        ]
    },
    {
        id: 'p170',
        name: 'francis',
        country: 'uy',
        verified: 'yes',
        image: 'images/francis.jpg',
        accounts: [
            { region: 'la2', riotId: 'qwsrz0mk #synk' },
            { region: 'la2', riotId: 'fyrz #synk' },
            { region: 'la2', riotId: 'Betrayal #ISLAค' },
            { region: 'la2', riotId: '010101 #synk' },
//            Fykzar // banned a while ago, no tag
        ]
    },
    {
        id: 'p171',
        name: 'Champi',
        country: 'es',
        verified: 'no',
        image: 'images/champi.jpg',
        accounts: [
            { region: 'euw1', riotId: 'NGABO RUDASINWA#WNTED' },
            { region: 'euw1', riotId: 'Keria Cubano#CH14' },
            { region: 'euw1', riotId: 'MANGΟ LOCO#EUW' },
        ]
    },
    {
        id: 'p172',
        name: 'Grekko',
        country: 'ec',
        verified: 'no',
        image: 'images/grekko.jpg',
        accounts: [
            { region: 'euw1', riotId: 'El Sultán#NEXO' },
            { region: 'euw1', riotId: 'PirataDeCuliacan#vwa' },
            { region: 'euw1', riotId: 'The Boy Savior#GOD' },
            { region: 'euw1', riotId: 'AURI#DOGGI' },
            { region: 'euw1', riotId: 'Reformed Guy#CHILL' },
        ]
    },
    {
        id: 'p173',
        name: 'Marquez',
        country: 'es',
        verified: 'no',
        image: 'images/marquez.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Manquez25#PLATA' },
            { region: 'euw1', riotId: 'viEGOplayer#SB5' },
// check stream to find more accounts
        ]
    },
    {
        id: 'p174',
        name: 'Katth',
        country: 'es',
        verified: 'no',
        image: 'images/katth.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Katthchonda#miu' },
// check stream to find more accounts
        ]
    },
    {
        id: 'p175',
        name: 'Tamara',
        country: 'es',
        verified: 'no',
        image: 'images/tamara.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Tami Kench#DOC' },
// check stream to find more accounts
        ]
    },
    {
        id: 'p176',
        name: 'Ander',
        country: 'es',
        verified: 'no',
        image: 'images/ander.jpg',
        accounts: [
            { region: 'euw1', riotId: 'スペクトラム#017' },
            { region: 'euw1', riotId: 'ANDERTAKER#EUW' },
            { region: 'euw1', riotId: 'Viper Tuvaluano#PSOE' },
        ]
    },
    {
        id: 'p177',
        name: 'MFreak',
        country: 'es',
        verified: 'no',
        image: 'images/mfreak.jpg',
        accounts: [
            { region: 'euw1', riotId: 'KOI Socio 002#AEAT' },
            { region: 'euw1', riotId: 'DWG Nuguri#LPL01' },
// check stream to find more accounts
        ]
    },
    {
        id: 'p178',
        name: 'Kuentin',
        country: 'es',
        verified: 'no',
        image: 'images/kuentin.jpg',
        accounts: [
            { region: 'euw1', riotId: 'KC Kuentin#MKOI' },
            { region: 'euw1', riotId: 'Anti Hero#KOI' },
        ]
    },
    {
        id: 'p179',
        name: 'Mellado',
        country: 'es',
        verified: 'no',
        image: 'images/mellado.jpg',
        accounts: [
            { region: 'euw1', riotId: 'FlequilloAusente#MKOI' },
// check stream to find more accounts
        ]
    },
    {
        id: 'p180',
        name: 'Peraltone',
        country: 'es',
        verified: 'no',
        image: 'images/peraltone.jpg',
        accounts: [
            { region: 'euw1', riotId: 'MINIPEKKA#SOLOQ' },
// check stream to find more accounts
        ]
    },
    {
        id: 'p181',
        name: 'ToadAmarillo',
        country: 'es',
        verified: 'no',
        image: 'images/toadamarillo.jpg',
        accounts: [
            { region: 'euw1', riotId: 'LYON Tabe#PANDA' },
            { region: 'euw1', riotId: 'TOAD AMARILLO#TOAD' },
            { region: 'euw1', riotId: 'TOAD AMARILLO#123' },
// check stream to find more accounts
        ]
    },
    {
        id: 'p182',
        name: 'Future',
        country: 'es',
        verified: 'no',
        image: 'images/future.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Tatiana Kaer#PAN' },
// check stream to find more accounts
        ]
    },
    {
        id: 'p183',
        name: 'Toñonen',
        country: 'es',
        verified: 'no',
        image: 'images/toñonen.jpg',
        accounts: [
            { region: 'euw1', riotId: 'ToñoNenISBACK#AND' },
// check stream to find more accounts
        ]
    },
    {
        id: 'p184',
        name: 'IreneRawr',
        country: 'es',
        verified: 'yes',
        image: 'images/irenerawr.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Miss Funas#KERIA' },
            { region: 'euw1', riotId: 'Matahari#RAWR' },
        ]
    },
    {
        id: 'p185',
        name: 'JuanCaravaca',
        country: 'es',
        verified: 'no',
        image: 'images/juancaravaca.jpg',
        accounts: [
            { region: 'euw1', riotId: 'ElPitjor#OLD' },
            { region: 'euw1', riotId: 'juankax99#9912' },
// check stream to find more accounts
        ]
    },
    {
        id: 'p186',
        name: 'Princesita',
        country: 'es',
        verified: 'no',
        image: 'images/princesita.jpg',
        accounts: [
            { region: 'euw1', riotId: 'pochipocrita#1331' },
// check stream to find more accounts
        ]
    },
    {
        id: 'p187',
        name: 'Galandarx',
        country: 've',
        verified: 'no',
        image: 'images/galandarx.jpg',
        accounts: [
            { region: 'euw1', riotId: 'FreeContent#Galan' },
            { region: 'kr', riotId: 'galandarx#BRIAR' },
// check stream to find more accounts
        ]
    },
//    
//
//
// EVERYTHING FROM HERE WAS TAKEN FROM SOLOBOOMCHALLENGE
// 
//
/*    
    },
    {
        id: 'p189',
        name: 'Deadlymarkkk',
        country: 'ar',
        verified: 'no',
        image: 'images/deadlymarkkk.jpg',
        accounts: [
            { region: 'la2', riotId: 'Nejire Hado#SB5' },
        ]
    },
    {
        id: 'p190',
        name: 'Mitsheep',
        country: 'ar',
        verified: 'no',
        image: 'images/mitsheep.jpg',
        accounts: [
            { region: 'la2', riotId: 'Just For Now#SB5' },
            { region: 'euw1', riotId: 'Same Ol Thing#SB4' },
        ]
    },
    {
        id: 'p191',
        name: 'Xipssj',
        country: 'mx',
        verified: 'no',
        image: 'images/xipssj.jpg',
        accounts: [
            { region: 'la1', riotId: 'xip#SB5' },
        ]
    },
    {
        id: 'p192',
        name: 'Meguitan',
        country: 'mx',
        verified: 'no',
        image: 'images/meguitan.jpg',
        accounts: [
            { region: 'la1', riotId: 'Meguitan#SB5' },
        ]
    },
    {
        id: 'p193',
        name: 'Kerfazzz',
        country: 'mx',
        verified: 'no',
        image: 'images/kerfazzz.jpg',
        accounts: [
            { region: 'la1', riotId: 'La Pampara#SB5' },
        ]
    },
    {
        id: 'p194',
        name: 'Raiakihito',
        country: 'br',
        verified: 'no',
        image: 'images/raiakihito.jpg',
        accounts: [
            { region: 'br1', riotId: 'Tsuki Himari#SB5' },
        ]
    },
    {
        id: 'p195',
        name: 'Zerik1ng',
        country: 'br',
        verified: 'no',
        image: 'images/zerik1ng.jpg',
        accounts: [
            { region: 'br1', riotId: 'false ranker#SB5' },
        ]
    },
    {
        id: 'p196',
        name: 'Alluklol',
        country: 'br',
        verified: 'no',
        image: 'images/alluklol.jpg',
        accounts: [
            { region: 'br1', riotId: 'lokete#SB5' },
        ]
    },
    {
        id: 'p197',
        name: 'Syunko',
        country: 'es',
        verified: 'no',
        image: 'images/syunko.jpg',
        accounts: [
            { region: 'euw1', riotId: 'LUIS SUÁREZ#SB5' },
        ]
    },
    {
        id: 'p198',
        name: 'Xarebalo',
        country: 'es',
        verified: 'no',
        image: 'images/xarebalo.jpg',
        accounts: [
            { region: 'euw1', riotId: 'xArebalo#SB5' },
        ]
    },
    {
        id: 'p199',
        name: 'Karccass',
        country: 'es',
        verified: 'no',
        image: 'images/karccass.jpg',
        accounts: [
            { region: 'euw1', riotId: 'DIEGO FORLÁN#SB5' },
        ]
    },
    {
        id: 'p200',
        name: 'Kase',
        country: 'us',
        verified: 'no',
        image: 'images/kase.jpg',
        accounts: [
            { region: 'na1', riotId: 'Rock Lee#SB5' },
        ]
    },
    {
        id: 'p201',
        name: 'Bejjaniii',
        country: 'us',
        verified: 'no',
        image: 'images/bejjaniii.jpg',
        accounts: [
            { region: 'na1', riotId: 'bxjjaniil#SB5' },
        ]
    },
    {
        id: 'p202',
        name: 'inoriblol',
        country: 'us',
        verified: 'no',
        image: 'images/inoriblol.jpg',
        accounts: [
            { region: 'na1', riotId: 'Jeremy Lin#SB5' },
        ]
    },
    {
        id: 'p203',
        name: 'Engruesado',
        country: 'ar',
        verified: 'no',
        image: 'images/engruesado.jpg',
        accounts: [
            { region: 'la2', riotId: 'アンディ愛してるよ#SB5' },
        ]
    },
    {
        id: 'p204',
        name: 'Rellibach',
        country: 'ar',
        verified: 'no',
        image: 'images/rellibach.jpg',
        accounts: [
            { region: 'la2', riotId: 'Rellimada#SB5' },
        ]
    },
    {
        id: 'p205',
        name: 'Fernasus145',
        country: 'ar',
        verified: 'no',
        image: 'images/fernasus145.jpg',
        accounts: [
            { region: 'la2', riotId: 'i am a good boy#SB5' },
        ]
    },
    {
        id: 'p206',
        name: 'ElGuayacoNois',
        country: 'mx',
        verified: 'no',
        image: 'images/elguayaconois.jpg',
        accounts: [
            { region: 'la1', riotId: 'Kirby#SB5' },
        ]
    },
    {
        id: 'p207',
        name: 'Saitamachallenge_',
        country: 'mx',
        verified: 'no',
        image: 'images/saitamachallenge_.jpg',
        accounts: [
            { region: 'la1', riotId: 'Poro bélico#SB5' },
        ]
    },
    {
        id: 'p208',
        name: 'Neribyte',
        country: 'mx',
        verified: 'no',
        image: 'images/neribyte.jpg',
        accounts: [
            { region: 'la1', riotId: 'Neribyte#SB5' },
        ]
    },
    {
        id: 'p209',
        name: 'Doble_gun',
        country: 'es',
        verified: 'no',
        image: 'images/doble_gun.jpg',
        accounts: [
            { region: 'euw1', riotId: 'ShadowOfVayne#SB5' },
        ]
    },
    {
        id: 'p211',
        name: 'uristylin',
        country: 'es',
        verified: 'no',
        image: 'images/uristylin.jpg',
        accounts: [
            { region: 'euw1', riotId: 'StylinDaSB5#SB5' },
        ]
    },
    {
        id: 'p213',
        name: 'JumpingQQQ',
        country: 'es',
        verified: 'no',
        image: 'images/jumpingqqq.jpg',
        accounts: [
            { region: 'euw1', riotId: 'JumpingQQQ#SB4' },
        ]
    },
    {
        id: 'p214',
        name: 'TThompson',
        country: 'es',
        verified: 'no',
        image: 'images/tthompson.jpg',
        accounts: [
            { region: 'euw1', riotId: 't t h#sb4' },
        ]
    },
    {
        id: 'p216',
        name: 'Zhaher',
        country: 'es',
        verified: 'no',
        image: 'images/zhaher.jpg',
        accounts: [
            { region: 'euw1', riotId: 'SANJUANINO#SB4' },
        ]
    },
    {
        id: 'p217',
        name: 'Camilonicolau',
        country: 'es',
        verified: 'no',
        image: 'images/camilonicolau.jpg',
        accounts: [
            { region: 'euw1', riotId: 'NICOLAULA#SB4' },
        ]
    },
    {
        id: 'p218',
        name: 'Puminhalol',
        country: 'br',
        verified: 'no',
        image: 'images/puminhalol.jpg',
        accounts: [
            { region: 'br1', riotId: 'puminhalol#SB4' },
        ]
    },
    {
        id: 'p219',
        name: 'Booki',
        country: 'es',
        verified: 'no',
        image: 'images/booki.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Booking#sb4' },
            { region: 'la2', riotId: 'Twtv BookiLol#SB5' },
        ]
    },
    {
        id: 'p220',
        name: 'Nvillada',
        country: 'es',
        verified: 'no',
        image: 'images/nvillada.jpg',
        accounts: [
            { region: 'euw1', riotId: 'nvillada#SB4' },
        ]
    },
    {
        id: 'p221',
        name: 'Naitz',
        country: 'es',
        verified: 'no',
        image: 'images/naitz.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Ryota Kise#SB4' },
        ]
    },
    {
        id: 'p222',
        name: 'Mataz',
        country: 'es',
        verified: 'no',
        image: 'images/mataz.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Mataz#sb4' },
        ]
    },
    {
        id: 'p223',
        name: 'Demy',
        country: 'es',
        verified: 'no',
        image: 'images/demy.jpg',
        accounts: [
            { region: 'euw1', riotId: 'kick demygd#sb4' },
        ]
    },
    {
        id: 'p225',
        name: 'Fayonix',
        country: 'es',
        verified: 'no',
        image: 'images/fayonix.jpg',
        accounts: [
            { region: 'euw1', riotId: 'FXYX#SB4' },
        ]
    },
    {
        id: 'p226',
        name: 'Skyy',
        country: 'es',
        verified: 'no',
        image: 'images/skyy.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Croketita#SB4' },
        ]
    },
    {
        id: 'p227',
        name: 'Duelista',
        country: 'br',
        verified: 'no',
        image: 'images/duelista.jpg',
        accounts: [
            { region: 'br1', riotId: '123edf5rff55f#SB3' },
        ]
    },
    {
        id: 'p228',
        name: 'winterxls',
        country: 'br',
        verified: 'no',
        image: 'images/winterxls.jpg',
        accounts: [
            { region: 'br1', riotId: '1kite#SB3' },
        ]
    },
    {
        id: 'p229',
        name: 'Kanaxi',
        country: 'br',
        verified: 'no',
        image: 'images/kanaxi.jpg',
        accounts: [
            { region: 'br1', riotId: 'BIEN DE VIVO#SB3' },
        ]
    },
    {
        id: 'p230',
        name: 'Arlon',
        country: 'br',
        verified: 'no',
        image: 'images/arlon.jpg',
        accounts: [
            { region: 'br1', riotId: 'TiWTVMarlon547#SB3' },
        ]
    },
    {
        id: 'p231',
        name: 'Martote',
        country: 'br',
        verified: 'no',
        image: 'images/martote.jpg',
        accounts: [
            { region: 'br1', riotId: 'md437d43#SB3' },
        ]
    },
    {
        id: 'p232',
        name: '1Neadz',
        country: 'ar',
        verified: 'no',
        image: 'images/1neadz.jpg',
        accounts: [
            { region: 'la2', riotId: '1Neadz#SB3' },
        ]
    },
    {
        id: 'p233',
        name: 'Zeypherlol',
        country: 'ar',
        verified: 'no',
        image: 'images/zeypherlol.jpg',
        accounts: [
            { region: 'la2', riotId: 'COLOMBIAPARCE#SB3' },
        ]
    },
    {
        id: 'p234',
        name: 'Yasikof_',
        country: 'ar',
        verified: 'no',
        image: 'images/yasikof_.jpg',
        accounts: [
            { region: 'la2', riotId: 'Yasikof#SB3' },
            { region: 'euw1', riotId: 'Teacherkof#sb4' },
        ]
    },
    {
        id: 'p236',
        name: 'Fix',
        country: 'ar',
        verified: 'no',
        image: 'images/fix.jpg',
        accounts: [
            { region: 'la2', riotId: '2mundiales1msi#SB3' },
//            { region: 'la2', riotId: 'MERCENARY1' }, // soloboomchallenge
        ]
    },
    {
        id: 'p237',
        name: 'FrixterADC',
        country: 'ar',
        verified: 'no',
        image: 'images/frixteradc.jpg',
        accounts: [
            { region: 'la2', riotId: 'GORDITO COMUN#SB3' },
        ]
    },
    {
        id: 'p238',
        name: 'Ezequielduartte',
        country: 'ar',
        verified: 'no',
        image: 'images/ezequielduartte.jpg',
        accounts: [
            { region: 'la2', riotId: '140KG BENCHPRESS#SB3' },
        ]
    },
    {
        id: 'p240',
        name: 'Pishey1',
        country: 'ar',
        verified: 'no',
        image: 'images/pishey1.jpg',
        accounts: [
            { region: 'la2', riotId: 'Pájo#SB3' },
        ]
    },
    {
        id: 'p242',
        name: 'Shookz',
        country: 'gb',
        verified: 'no',
        image: 'images/shookz.jpg',
        accounts: [
//            { region: 'euw1', riotId: 'Flower Garden' },
            { region: 'la2', riotId: 'Flower Garden#SB4' },
//            Flower Garden#LAS // soloboomchallenge?
        ]
    },
    {
        id: 'p245',
        name: 'Tomnam',
        country: 'es',
        verified: 'no',
        image: 'images/tomnam.jpg',
        accounts: [
            { region: 'la2', riotId: 'hARAkiRi1#LAS' },
        ]
    },
    {
        id: 'p246',
        name: 'Ustanaak',
        country: 'es',
        verified: 'no',
        image: 'images/ustanaak.jpg',
        accounts: [
//            { region: 'euw1', riotId: 'TILTEANAK' },
        ]
    },
    {
        id: 'p248',
        name: 'Sonykyyy',
        country: 'ar',
        verified: 'no',
        image: 'images/sonykyyy.jpg',
        accounts: [
            { region: 'la2', riotId: 'Malcorra#LAS' },
        ]
    },
    {
        id: 'p249',
        name: 'Adalis',
        country: 'ar',
        verified: 'no',
        image: 'images/adalis.jpg',
        accounts: [
            { region: 'la2', riotId: 'Va x ti Azherit#LAS' },
        ]
    },
    {
        id: 'p250',
        name: 'Lechigg',
        country: 'ar',
        verified: 'no',
        image: 'images/lechigg.jpg',
        accounts: [
            { region: 'la2', riotId: 'LAS 0 macro#LAS' },
        ]
    },
    {
        id: 'p251',
        name: 'Octatoxic',
        country: 'ar',
        verified: 'no',
        image: 'images/octatoxic.jpg',
        accounts: [
            { region: 'la2', riotId: 'Octatoxic Punk#LAS' },
        ]
    },
    {
        id: 'p257',
        name: 'Eminatr1x',
        country: 'ar',
        verified: 'no',
        image: 'images/eminatr1x.jpg',
        accounts: [
            { region: 'la2', riotId: 'Nefelibata1#SB3' },
//            { region: 'la2', riotId: 'Jane Birkin' }, // soloboomchallenge
        ]
    },
    {
        id: 'p262',
        name: 'Kaze',
        country: 'ar',
        verified: 'no',
        image: 'images/kaze.jpg',
        accounts: [
            { region: 'br1', riotId: 'nbayoungkaze' },
//            { region: 'la2', riotId: 'GLASSY SMILEy' },
        ]
    },
    {
        id: 'p264',
        name: 'Kz',
        country: 'ar',
        verified: 'no',
        image: 'images/kz.jpg',
        accounts: [
            { region: 'br1', riotId: 'Ryuk me leva pfv#br1' },
        ]
    },
    {
        id: 'p265',
        name: 'Ude',
        country: 'ar',
        verified: 'no',
        image: 'images/ude.jpg',
        accounts: [
            { region: 'br1', riotId: 'kitemachine69#BR1' },
        ]
    },
    {
        id: 'p266',
        name: 'Pancake',
        country: 'ar',
        verified: 'no',
        image: 'images/pancake.jpg',
        accounts: [
            { region: 'br1', riotId: 'Pankk1#BR1' },
            { region: 'la2', riotId: 'bingzi#SB3' },
        ]
    },
    {
        id: 'p267',
        name: 'Godeto',
        country: 'ar',
        verified: 'no',
        image: 'images/godeto.jpg',
        accounts: [
//            { region: 'la2', riotId: 'jaeneung' },
        ]
    },
    {
        id: 'p268',
        name: 'Trashy',
        country: 'ar',
        verified: 'no',
        image: 'images/trashy.jpg',
        accounts: [
            { region: 'br1', riotId: 'zzzzzzx1#BR1' },
        ]
    },
    {
        id: 'p269',
        name: 'Cabez00n',
        country: 'ar',
        verified: 'no',
        image: 'images/cabez00n.jpg',
        accounts: [
//            { region: 'la2', riotId: 'KB ZN' },
        ]
    },
    {
        id: 'p270',
        name: 'Kimi',
        country: 'ar',
        verified: 'no',
        image: 'images/kimi.jpg',
        accounts: [
            { region: 'br1', riotId: 'FAN DE COLACAO' },
//            { region: 'la2', riotId: 'KINGMI' },
//            { region: 'la2', riotId: '23 KIMI 777' },
        ]
    },
    {
        id: 'p271',
        name: 'Sufukato',
        country: 'ar',
        verified: 'no',
        image: 'images/sufukato.jpg',
        accounts: [
//            { region: 'la2', riotId: 'Pikachu Watôn' },
        ]
    },
    {
        id: 'p272',
        name: 'Malendario',
        country: 'ar',
        verified: 'no',
        image: 'images/malendario.jpg',
        accounts: [
//            { region: 'la2', riotId: 'Don Cangrejo' },
        ]
    },
    {
        id: 'p273',
        name: 'Imsalem',
        country: 'ar',
        verified: 'no',
        image: 'images/imsalem.jpg',
        accounts: [
            { region: 'br1', riotId: 'COMPRE WINRAR#79390' },
        ]
    },
    {
        id: 'p274',
        name: 'Xypher',
        country: 'ar',
        verified: 'no',
        image: 'images/xypher.jpg',
        accounts: [
//            { region: 'la2', riotId: 'chilpa1' },
        ]
    },
    {
        id: 'p275',
        name: 'Slow',
        country: 'ar',
        verified: 'no',
        image: 'images/slow.jpg',
        accounts: [
//            { region: 'la2', riotId: 'idk what to do' },
        ]
    },
    {
        id: 'p276',
        name: 'qlyana001',
        country: 'ar',
        verified: 'no',
        image: 'images/qlyana001.jpg',
        accounts: [
//            { region: 'la2', riotId: 'qlyana001' },
        ]
    },
    {
        id: 'p277',
        name: 'Gveze',
        country: 'ar',
        verified: 'no',
        image: 'images/gveze.jpg',
        accounts: [
//            { region: 'la2', riotId: 'iGveze' },
        ]
    },
    {
        id: 'p278',
        name: 'Ivanwake',
        country: 'ar',
        verified: 'no',
        image: 'images/ivanwake.jpg',
        accounts: [
//            { region: 'la2', riotId: 'kyubi' },
        ]
    },
    {
        id: 'p279',
        name: 'windsito',
        country: 'ar',
        verified: 'no',
        image: 'images/windsito.jpg',
        accounts: [
            { region: 'br1', riotId: 'WindsitoAbuser#BR1' },
        ]
    },
    {
        id: 'p280',
        name: 'Meno',
        country: 'ar',
        verified: 'no',
        image: 'images/meno.jpg',
        accounts: [
            { region: 'br1', riotId: 'AMENOOOO#BR1' },
        ]
    },
    {
        id: 'p282',
        name: 'sir tiki',
        country: 'ar',
        verified: 'no',
        image: 'images/sir tiki.jpg',
        accounts: [
            { region: 'br1', riotId: 'Tiki Top#br1' },
        ]
    },
    {
        id: 'p283',
        name: 'Colacao',
        country: 'ar',
        verified: 'no',
        image: 'images/colacao.jpg',
        accounts: [
//            { region: 'la2', riotId: 'VUYAH INDUSTRIES' },
        ]
    },
    {
        id: 'p284',
        name: 'Soul',
        country: 'ar',
        verified: 'no',
        image: 'images/soul.jpg',
        accounts: [
            { region: 'br1', riotId: 'mpeso#BR1' },
        ]
    },
    {
        id: 'p285',
        name: 'd1nastian',
        country: 'ar',
        verified: 'no',
        image: 'images/d1nastian.jpg',
        accounts: [
            { region: 'br1', riotId: 'LA HORA FELIZ#br1' },
        ]
    },
    {
        id: 'p286',
        name: 'loifalcon02',
        country: 'ar',
        verified: 'no',
        image: 'images/loifalcon02.jpg',
        accounts: [
            { region: 'la2', riotId: 'Aghanim Scepter#LAS' },
        ]
    },
    {
        id: 'p287',
        name: 'volcanicdog',
        country: 'ar',
        verified: 'no',
        image: 'images/volcanicdog.jpg',
        accounts: [
//            { region: 'la2', riotId: 'EL COCHE BOMBA' },
        ]
    },
    {
        id: 'p288',
        name: 'Mantarraya',
        country: 'ar',
        verified: 'no',
        image: 'images/mantarraya.jpg',
        accounts: [
//            { region: 'la2', riotId: 'ME ANOTO 1 AMIGO' },
        ]
    },
    {
        id: 'p289',
        name: 'nonolol',
        country: 'ar',
        verified: 'no',
        image: 'images/nonolol.jpg',
        accounts: [
            { region: 'br1', riotId: 'NonoooNonooo' },
        ]
    },
    {
        id: 'p290',
        name: 'thistarrr',
        country: 'ar',
        verified: 'no',
        image: 'images/thistarrr.jpg',
        accounts: [
//            { region: 'la2', riotId: 'CORASON DE SEDA' },
        ]
    },
    {
        id: 'p291',
        name: 'hikoses',
        country: 'ar',
        verified: 'no',
        image: 'images/hikoses.jpg',
        accounts: [
            { region: 'br1', riotId: 'McDonalds adc#BR1' },
        ]
    },
    {
        id: 'p292',
        name: 'tinarg',
        country: 'ar',
        verified: 'no',
        image: 'images/tinarg.jpg',
        accounts: [
            { region: 'la2', riotId: 'SBM tinargxd' },
        ]
    },
    {
        id: 'p294',
        name: '1pinku',
        country: 'ar',
        verified: 'no',
        image: 'images/1pinku.jpg',
        accounts: [
//            { region: 'la2', riotId: 'larviha' },
        ]
    },
    {
        id: 'p295',
        name: 'rengarsitoo',
        country: 'ar',
        verified: 'no',
        image: 'images/rengarsitoo.jpg',
        accounts: [
//            { region: 'la2', riotId: 'Renmlausito' },
        ]
    },
    {
        id: 'p296',
        name: 'Nobody',
        country: 'ar',
        verified: 'no',
        image: 'images/nobody.jpg',
        accounts: [
            { region: 'br1', riotId: 'DWG KIAA#BR1' },
        ]
    },
    {
        id: 'p297',
        name: 'ninochaudron',
        country: 'ar',
        verified: 'no',
        image: 'images/ninochaudron.jpg',
        accounts: [
            { region: 'br1', riotId: 'NicoChauBoom#BR1' },
        ]
    },
    {
        id: 'p298',
        name: 'wesker',
        country: 'ar',
        verified: 'no',
        image: 'images/wesker.jpg',
        accounts: [
            { region: 'br1', riotId: 'Weskerinho#BR1' },
        ]
    },
    {
        id: 'p299',
        name: 'frozenkreiger',
        country: 'ar',
        verified: 'no',
        image: 'images/frozenkreiger.jpg',
        accounts: [
            { region: 'br1', riotId: 'Frozzono#BR1' },
        ]
    },
    {
        id: 'p300',
        name: 'Hooded',
        country: 'ar',
        verified: 'no',
        image: 'images/hooded.jpg',
        accounts: [
            { region: 'br1', riotId: 'mind prison#BR1' },
        ]
    },
    {
        id: 'p301',
        name: 'Longinius',
        country: 'ar',
        verified: 'no',
        image: 'images/longinius.jpg',
        accounts: [
            { region: 'br1', riotId: 'Longaniza#BR1' },
            { region: 'la2', riotId: 'Longitech#SB3' },
        ]
    },
    {
        id: 'p303',
        name: 'vichox009xd',
        country: 'ar',
        verified: 'no',
        image: 'images/vichox009xd.jpg',
        accounts: [
            { region: 'br1', riotId: '2005 Power#BR1' },
        ]
    },
    {
        id: 'p305',
        name: 'Baneadou',
        country: 'ar',
        verified: 'no',
        image: 'images/baneadou.jpg',
        accounts: [
//            { region: 'la2', riotId: 'GorDOUtlius' },
        ]
    },
    {
        id: 'p306',
        name: '1sickz',
        country: 'ar',
        verified: 'no',
        image: 'images/1sickz.jpg',
        accounts: [
            { region: 'br1', riotId: '1SICKZ#BR1' },
        ]
    },
    {
        id: 'p307',
        name: 'Akaai Army',
        country: 'ar',
        verified: 'no',
        image: 'images/akaai army.jpg',
        accounts: [
            { region: 'br1', riotId: 'SillaArmy#BR1' },
        ]
    },
    {
        id: 'p308',
        name: 'linsweet',
        country: 'ar',
        verified: 'no',
        image: 'images/linsweet.jpg',
        accounts: [
            { region: 'br1', riotId: 'pathing#BR1' },
        ]
    },
    {
        id: 'p309',
        name: 'Ghetoblaster',
        country: 'ar',
        verified: 'no',
        image: 'images/ghetoblaster.jpg',
        accounts: [
            { region: 'br1', riotId: 'Bolivian Surfer#BR1' },
        ]
    },
    {
        id: 'p310',
        name: 'lefed',
        country: 'ar',
        verified: 'no',
        image: 'images/lefed.jpg',
        accounts: [
//            { region: 'la2', riotId: 'LêFeeder' },
        ]
    },
    {
        id: 'p311',
        name: 'Joker Was Here',
        country: 'ar',
        verified: 'no',
        image: 'images/joker was here.jpg',
        accounts: [
            { region: 'br1', riotId: 'Joker was Pyke#BR1' },
        ]
    },
    {
        id: 'p312',
        name: 'Juansha',
        country: 'ar',
        verified: 'no',
        image: 'images/juansha.jpg',
        accounts: [
//            { region: 'la2', riotId: 'Juancha OFF Drug' },
        ]
    },
    {
        id: 'p313',
        name: 'Hachi',
        country: 'ar',
        verified: 'no',
        image: 'images/hachi.jpg',
        accounts: [
            { region: 'br1', riotId: 'Memory Lane#BR1' },
        ]
    },
    {
        id: 'p314',
        name: 'ZyLar',
        country: 'ar',
        verified: 'no',
        image: 'images/zylar.jpg',
        accounts: [
            { region: 'br1', riotId: 'ZyLar#BR1' },
        ]
    },
    {
        id: 'p315',
        name: 'valuxltax',
        country: 'ar',
        verified: 'no',
        image: 'images/valuxltax.jpg',
        accounts: [
            { region: 'br1', riotId: 'bashe#BR1' },
        ]
    },
    {
        id: 'p316',
        name: 'zatoroo',
        country: 'ar',
        verified: 'no',
        image: 'images/zatoroo.jpg',
        accounts: [
            { region: 'br1', riotId: 'Zatorquinho#BR1' },
        ]
    },
    {
        id: 'p317',
        name: 'TalonAbuser1',
        country: 'ar',
        verified: 'no',
        image: 'images/talonabuser1.jpg',
        accounts: [
//            { region: 'la2', riotId: 'TalonAbuser1' },
        ]
    },
    {
        id: 'p318',
        name: 'daybeats',
        country: 'ar',
        verified: 'no',
        image: 'images/daybeats.jpg',
        accounts: [
            { region: 'br1', riotId: 'LDM ESPORTS#BR1' },
        ]
    },
    {
        id: 'p319',
        name: 'skr',
        country: 'ar',
        verified: 'no',
        image: 'images/skr.jpg',
        accounts: [
//            { region: 'la2', riotId: 'Paige Spora' },
        ]
    },
    {
        id: 'p320',
        name: 'kikn',
        country: 'ar',
        verified: 'no',
        image: 'images/kikn.jpg',
        accounts: [
//            { region: 'la2', riotId: 'kikoN' },
        ]
    },
    {
        id: 'p321',
        name: 'skdam',
        country: 'ar',
        verified: 'no',
        image: 'images/skdam.jpg',
        accounts: [
            { region: 'br1', riotId: 'ELANGELITO XAM#BR1' },
        ]
    },
    {
        id: 'p322',
        name: 'Brunaldo',
        country: 'ar',
        verified: 'no',
        image: 'images/brunaldo.jpg',
        accounts: [
//            { region: 'la2', riotId: 'Brunaldoo' },
        ]
    },
    {
        id: 'p323',
        name: 'Hugrock',
        country: 'ar',
        verified: 'no',
        image: 'images/hugrock.jpg',
        accounts: [
            { region: 'br1', riotId: 'SOS COLOMBIA#BR1' },
        ]
    },
    {
        id: 'p324',
        name: 'wildrengar',
        country: 'ar',
        verified: 'no',
        image: 'images/wildrengar.jpg',
        accounts: [
            { region: 'br1', riotId: 'all pain#BR1' },
        ]
    },
    {
        id: 'p325',
        name: 'Slune36',
        country: 'ar',
        verified: 'no',
        image: 'images/slune36.jpg',
        accounts: [
//            { region: 'la2', riotId: 'YouTubeSlune' },
        ]
    },
    {
        id: 'p326',
        name: 'fekklesuy',
        country: 'ar',
        verified: 'no',
        image: 'images/fekklesuy.jpg',
        accounts: [
            { region: 'br1', riotId: 'twitchfekklesuy#BR1' },
        ] 
//            
//
//
// ALL SOLOBOOM CHALLENGE ACCOUNTS
//
//
//
*/
    {
        id: 'p327',
        name: 'TELLIER50',
        country: 'uy',
        verified: 'no',
        image: 'images/tellier.jpg',
        accounts: [
            { region: 'la2', riotId: 'TELLIER#TLR' },
        ]
    },
    {
        id: 'p328',
        name: 'NeckoLol',
        country: 'ar',
        verified: 'no',
        image: 'images/neckolol.jpg',
        accounts: [
            { region: 'la2', riotId: 'NeckoJGAZ#LA2' }, // challenge a-z jungle
            { region: 'la2', riotId: 'Necko#1994' },
            { region: 'euw1', riotId: 'Aguante Maradona#EUW' },
//            { region: 'euw1', riotId: 'NECKUM' }, // dont know the id
//            Sr Guanaco
//            El Neckoide
        ]
    },
    {
        id: 'p329',
        name: 'Arktheos (Aribo)',
        country: 'ro',
        verified: 'no',
        image: 'images/arktheos.png',
        accounts: [
            { region: 'euw1', riotId: 'FULLCLEAR DELUXE#PUSH' },
            { region: 'euw1', riotId: 'z33D0lVc0hbsNT2a#EUW' },
            { region: 'euw1', riotId: 'Anagenesis#2222' },
            { region: 'euw1', riotId: 'Hardstuck Emote#EUW' },
            { region: 'euw1', riotId: 'eatandlive#BLOOD' },
            { region: 'euw1', riotId: 'Oblivion Blade#EUW' },
            { region: 'euw1', riotId: 'LBsFinest#76514' },
            { region: 'euw1', riotId: 'Necrotic Sword#EUW' },
            { region: 'euw1', riotId: 'dell1337#60795' },
            { region: 'euw1', riotId: 'Purified#333' },
        ]
    },
    {
        id: 'p330',
        name: 'Tabor',
        country: 'it',
        verified: 'yes',
        image: 'images/tabor.jpg',
        accounts: [
            { region: 'euw1', riotId: 'Tabor#EUW' },
            { region: 'euw1', riotId: 'Iro Bong#FILL' },
// has a pbe account that he doesnt remember
        ]
    },
    {
        id: 'p331',
        name: 'Nemesis',
        country: 'si',
        verified: 'no',
        image: 'images/nemesis.png',
        accounts: [
            { region: 'euw1', riotId: 'Dzukill#KISS' },
            { region: 'euw1', riotId: 'LR Nemesis#LRAT' },
            { region: 'euw1', riotId: 'the inescapable#RAT' },
            { region: 'euw1', riotId: 'tehgeokiller#EUW' },
            { region: 'euw1', riotId: 'Mr Ascendant#EUW' },
//            { region: 'euw1', riotId: 'Alexander Duggan#Red' }, namechanged?
//            { region: 'euw1', riotId: 'Caedrel#ADS' }, // namechanged?
//            { region: 'kr', riotId: 'Sanchovies#MOG' }, // used to own it, maybe he doesnt anymore. the original account doesnt exist, but it seems to have changed its id to KR01. the masteries doesnt line up with the champiosn that nemesis plays though
        ]
    },
    {
        id: 'p332',
        name: 'Zoeasyy',
        country: 'uy',
        verified: 'yes',
        image: 'images/zoeasyy.png',
        accounts: [
            { region: 'la2', riotId: 'Zoeasyy#easyy' },
            { region: 'la2', riotId: 'Zoeasyy#Zoe' },
            { region: 'la2', riotId: 'Zoeasyy 2#ISLAค' },
            { region: 'la2', riotId: 'Zoeasyy#ISLAค' },
            { region: 'la2', riotId: '조이 개섹시 개핫 개맛있음#WPPDF' },
            { region: 'la1', riotId: 'Zoeasyy#Cyan' },
            { region: 'la1', riotId: 'Zoeasyy#Zoe5' },
        ]
    },
]

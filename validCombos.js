const standardSet = [
    'https://github.com/IciStorm/VPBingo/blob/main/images/awards/UI_Icon_VisitRibbon.PNG?raw=true',
    'https://github.com/IciStorm/VPBingo/blob/main/images/awards/UI_Icon_VariantRibbon.PNG?raw=true',
    'https://github.com/IciStorm/VPBingo/blob/main/images/awards/UI_Icon_VariantRibbon1.PNG?raw=true',
    'https://github.com/IciStorm/VPBingo/blob/main/images/awards/UI_Icon_VariantRibbon2.PNG?raw=true',
    'https://github.com/IciStorm/VPBingo/blob/main/images/awards/UI_Icon_VariantRibbon3.PNG?raw=true',
    'https://github.com/IciStorm/VPBingo/blob/main/images/awards/UI_Icon_ResideRibbon.PNG?raw=true',
    'https://github.com/IciStorm/VPBingo/blob/main/images/awards/UI_Icon_RomanceRibbon.PNG?raw=true'
];

const sourSet = [
    'https://github.com/IciStorm/VPBingo/blob/main/images/awards/UI_Icon_VisitRibbon.PNG?raw=true'
];

const petSet = [
    'https://github.com/IciStorm/VPBingo/blob/main/images/awards/UI_Icon_VariantRibbon.PNG?raw=true',
    'https://github.com/IciStorm/VPBingo/blob/main/images/awards/UI_Icon_VariantRibbon1.PNG?raw=true',
    'https://github.com/IciStorm/VPBingo/blob/main/images/awards/UI_Icon_VariantRibbon2.PNG?raw=true',
    'https://github.com/IciStorm/VPBingo/blob/main/images/awards/UI_Icon_VariantRibbon3.PNG?raw=true',
    'https://github.com/IciStorm/VPBingo/blob/main/images/awards/UI_Icon_ResideRibbon.PNG?raw=true',
    'https://github.com/IciStorm/VPBingo/blob/main/images/awards/UI_Icon_RomanceRibbon.PNG?raw=true'
];

const scotchSet = [
    'https://github.com/IciStorm/VPBingo/blob/main/images/awards/UI_Icon_ResideRibbon.PNG?raw=true',
    'https://github.com/IciStorm/VPBingo/blob/main/images/awards/UI_Icon_RomanceRibbon.PNG?raw=true'
];

const whiteScotchSet = [
    'https://github.com/IciStorm/VPBingo/blob/main/images/awards/UI_Icon_VisitRibbon.PNG?raw=true',
    'https://github.com/IciStorm/VPBingo/blob/main/images/awards/UI_Icon_ResideRibbon.PNG?raw=true',
    'https://github.com/IciStorm/VPBingo/blob/main/images/awards/UI_Icon_RomanceRibbon.PNG?raw=true'
];

const validCombos = {
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Arocknid.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Badgesicie.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Barkbark.PNG?raw=true' : petSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Bonboon.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Bunnycomb.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Buzzenge.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Buzzlegum.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Candary.PNG?raw=true' : petSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Chewnicorn.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Chippopotamus.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Cinnamonkey.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Cluckies.PNG?raw=true' : petSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Cocoadile.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Crowla.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Doenut.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Dragumfly.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Eglair.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Elephanilla.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Fizzlybear.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Flutterscotch_Black.PNG?raw=true' : scotchSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Flutterscotch_Blue.PNG?raw=true' : scotchSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Flutterscotch_Brown.PNG?raw=true' : scotchSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Flutterscotch_Green.PNG?raw=true' : scotchSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Flutterscotch_Orange.PNG?raw=true' : scotchSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Flutterscotch_Pink.PNG?raw=true' : scotchSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Flutterscotch_Purple.PNG?raw=true' : scotchSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Flutterscotch_Red.PNG?raw=true' : scotchSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Flutterscotch_White.PNG?raw=true' : whiteScotchSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Fourheads.PNG?raw=true' : petSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Fudgehog.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Galagoogoo.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_GooBaa.PNG?raw=true' : petSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Horstachio.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Jameleon.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Juicygoose.PNG?raw=true' : petSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Kittyfloss.PNG?raw=true' : petSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Lackatoad.PNG?raw=true' : petSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Lickatoad.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Macaracoon.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Mallowolf.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Moozipan.PNG?raw=true' : petSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Mothdrop.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Mousemellow.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Newtgat.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Panocky.PNG?raw=true' : petSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Parrybo.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Pigxie.PNG?raw=true' : petSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Preztail.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Profitamole.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Pudgeon.PNG?raw=true' : petSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Quackberry.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Raisant.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Rashberry.PNG?raw=true' : petSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Reddhott.PNG?raw=true' : petSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Roario.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Salamango.PNG?raw=true' : petSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_ShellyBean.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Sherbat.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Sour_Bonboon.PNG?raw=true' : sourSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Sour_Carwla.PNG?raw=true' : sourSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Sour_Cocoadile.PNG?raw=true' : sourSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Sour_Macaracoon.PNG?raw=true' : sourSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Sour_Mallowolf.PNG?raw=true' : sourSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Sour_Profitamole.PNG?raw=true' : sourSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Sour_Shellybean.PNG?raw=true' : sourSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Sour_Sherbat.PNG?raw=true' : sourSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Sparrowmint.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Squazzil.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Swanana.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Sweetooth.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Syrupent.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Taffly.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Twingersnap.PNG?raw=true' : petSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Whirlm.PNG?raw=true' : standardSet,
    'https://github.com/IciStorm/VPBingo/blob/main/images/UI_Icon_Pinata_Zumbug.PNG?raw=true' : petSet
};

const EMOTES = [
  'PogChamp',
  'CollarTug',
  'EZga',
  'HYPERS',
  'Hahaa',
  'KEKW',
  'LULW',
  'OMEGALUL',
  'OMEGAPOG',
  'POGGERS',
  'PagChomp',
  'PauseChamp',
  'PauseU',
  'PepegaU',
  'Pog',
  'PogChimp',
  'PogU',
  'PogYou',
  'PogMe',
  'Pogey',
  'Shhh',
  'YEPW',
  'fellowKids',
  'monkaW',
  'smoochU',
  'unPog',
  'DELIVERY',
  'EZ',
  'Clap',
  'HACKERMANS',
  'monkaTOS',
  'monkeyDriving',
  'CatHm',
  'CatShake',
  'BoneZone',
  'DogDance',
  'DOOOT',
  'PogTasty',
  'Gsmart',
  'sadCat',
  'HYPERDCOLON',
  'PepeLaugh',
  ':)',
  'LUL',
  'NotLikeThis',
  'OhMyDog',
  'pastaThat',
]
function getEmote () {
  return emote = EMOTES[Math.floor((Math.random()*EMOTES.length))];
}
exports.getEmote = getEmote;
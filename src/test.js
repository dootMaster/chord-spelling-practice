const notesInGivenKey = (tonic, modeName='ionian') => {

  const mode = (name, scale) => {
    let str = name.toLowerCase();
    let i;
    switch(str) {
      case 'ionian':
        return scale;
      case 'dorian':
        i = 6;
      case 'phrygian':
        i = 5;
      case 'lydian':
        i = 4;
      case 'mixolydian':
        i = 3;
      case 'aeolian':
        i = 2;
      case 'locrian':
        i = 1;
    }

    return scale.slice(i, 7).concat(scale.slice(0, i));
  }

  const tonicOffsetTable = {
    'c': 0, 'c#': 1, 'db': 1, 'd': 2, 'eb': 3, 'e': 4, 'f': 5, 'f#': 6,
    'gb': 6, 'g': 7, 'ab': 8, 'a': 9, 'bb': 10, 'b':11, 'cb': 11,
  }

  const sharpKeys = ['g', 'd', 'a', 'e', 'b', 'f#', 'c#',];
  const flatKeys = ['f', 'bb', 'eb', 'ab', 'db', 'gb', 'cb'];

  const flats = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];
  const sharps = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];

  let scale = [0, 2, 4, 5, 7, 9, 11];

  let notes;
  let result = [];

  if(sharpKeys.includes(tonic.toLowerCase())) {
    notes = sharps;
  } else {
    notes = flats;
  }

  for(let i = 0; i < scale.length; i++) {
      result.push(notes[scale[i] + tonicOffsetTable[tonic.toLowerCase()]]);
  }

  return mode(modeName, result);
}

console.log(notesInGivenKey('E', 'ionian'));

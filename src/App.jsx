import React, { useState } from 'react';

const App = () => {

  const notesInGivenKey = (root) => {
    const rootOffsetTable = {
      'C': 0, 'C#': 1, 'Db': 1, 'D': 2, 'Eb': 3, 'E': 4, 'F': 5, 'F#': 6,
      'Gb': 6, 'G': 7, 'Ab': 8, 'A': 9, 'Bb': 10, 'B':11, 'Cb': 11,
    }

    const flats = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];
    const sharps = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
    let notes;

    if(root[1] === '#') {
      notes = sharps;
    } else {
      notes = flats;
    }

    let result = [];

    let offset = [0, 2, 4, 5, 7, 9, 11];

    for(let i = 0; i < offset.length; i++) {
      result.push(notes[offset[i] + rootOffsetTable[root]]);
    }
    return result;
  }

  return (
    <>hi</>
  )
}

export default App;
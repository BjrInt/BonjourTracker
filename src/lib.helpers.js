export const TRACK_LENGTH = 16
export const MAX_TRACKS = 4

const NOTE_FREQUENCIES = {
  'c': 16.35,
  'c#': 17.32,
  'd': 18.35,
  'd#': 19.45,
  'e': 20.60,
  'f': 21.83,
  'f#': 23.12,
  'g': 24.50,
  'g#': 25.96,
  'a': 27.50,
  'a#': 29.14,
  'b': 30.87
}

const NOTE_KEYS = Object.keys(NOTE_FREQUENCIES)

export const colorizeNote = (note, octave) => {
  const index = NOTE_KEYS.findIndex(k => note == k)

  if(index != -1){
    let hsl = []

    hsl[0] = (360 / NOTE_KEYS.length) * index
    hsl[1] = 85 - (octave * 2) + '%'
    hsl[2] = 30 + (octave * 3) + '%'

    return 'hsl('+ hsl.join(', ')  +')'
  }
  else {
    return '#000000'
  }
}

export const BPM2ms = (bpm) => ( (bpm >= 1) ? 15000 / bpm : null )

export const getClosestMultiple = (input, m=5) => ( input - (input % m) )

export const initTrack = (l=TRACK_LENGTH) => {
  const t = {
    note: null,
    octave: 0,
    volume: null
  }

  let ret = []
  let i
  for(i=0;i<l;i++)
    ret.push(t)

  return ret
}

export const initRandomTrack = (l=TRACK_LENGTH) => {
  let ret = []
  let i

  let keyLen = NOTE_KEYS.length

  for(i=0;i<l;i++){
    ret.push({
      note: NOTE_KEYS[ Math.floor(Math.random() * keyLen) ],
      volume: getClosestMultiple(Math.random() * 100, 5),
      octave: Math.ceil(Math.random() * 5)
    })
  }

  return ret
}

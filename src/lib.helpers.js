export const TRACK_LENGTH = 16
export const MAX_TRACKS = 6

export const NOTE_FREQUENCIES = {
  'C': 16.35,
  'C#': 17.32,
  'D': 18.35,
  'D#': 19.45,
  'E': 20.60,
  'F': 21.83,
  'F#': 23.12,
  'G': 24.50,
  'G#': 25.96,
  'A': 27.50,
  'A#': 29.14,
  'B': 30.87
}

export const NULL_NOTE = {
  note: '-',
  octave: 4,
  volume: 80
}

const NOTE_KEYS = Object.keys(NOTE_FREQUENCIES)

export const colorizeNote = (note, octave) => {
  const index = NOTE_KEYS.findIndex(k => note === k)

  if(index !== -1){
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

export const BPM2ms = bpm => bpm >= 1 ? (15000 / bpm) : null

export const getClosestMultiple = (input, m=5) => input - (input % m)

export const getIterableArray = len => Array.apply(0, Array(len))

export const initTrack = (l=TRACK_LENGTH) => (
  getIterableArray(l).map(() => NULL_NOTE)
)

export const onESCkey = (e, cb) => {
  if(e.which === 27)
    cb()
}

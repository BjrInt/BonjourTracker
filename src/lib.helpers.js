export const TRACK_LENGTH = 16
export const MAX_TRACKS = 4

export const BPM2ms = (bpm) => ( (bpm >= 1) ? 60000 / bpm : null )

export const initTrack = (l=TRACK_LENGTH) => {
  const t = {
    note: null,
    volume: null
  }

  let ret = []
  let i
  for(i=0;i<l;i++)
    ret.push(t)

  return ret
}

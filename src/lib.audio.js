export const context = new (window.AudioContext || window.webkitAudioContext)()

export const OSC_TYPES = ['sine', 'square', 'sawtooth', 'triangle']

export const createOscillator = (type='sine', volume=1) => {
  const osc = context.createOscillator()
  const gain = context.createGain()

  osc.type = type
  gain.gain.value = volume

  osc.connect(gain)
  gain.connect(context.destination)

  return osc
}

export const playNote = (osc, value=440) => {
  osc.frequency.value = value
  osc.start(context.currentTime)
}

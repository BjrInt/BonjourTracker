export const context = new (window.AudioContext || window.webkitAudioContext)()

const getRandomPCMInt = () => Math.random() * 2 - 1

const createMonoAudioBuffer = (len=2) => context.createBuffer(1, context.sampleRate * len, context.sampleRate)

export const OSC_TYPES = ['sine', 'square', 'sawtooth', 'triangle']

export const CUSTOM_WAVEFORMS = {
  // white_noise: (() => {
  //   const arBuf = createMonoAudioBuffer()
  //   arBuf.getChannelData(1).forEach((x, i, t) => { t[i] = getRandomPCMInt() })
  //
  //   return arBuf
  // })(),
  //
  // sine_tri: (() => {
  //   const arBuf = createMonoAudioBuffer()
  //   arBuf.getChannelData(1).forEach((x, i, t) => {
  //     if(i <= t.length / 2)
  //       t[i] = Math.sin(i / t.length * Math.PI) * 2 - 1
  //     else
  //       t[i] = 1 - (i / t.length) * 2
  //   })
  // })(),

  white_noise: null,
  sine_tri: null
}

export const createOscillator = (type='sine', volume=100) => {
  const osc = context.createOscillator()
  const gain = context.createGain()

  osc.type = type
  gain.gain.value = volume / 100

  osc.connect(gain)
  gain.connect(context.destination)

  return osc
}

export const playNote = (osc, value=440) => {
  osc.frequency.value = value
  osc.start(context.currentTime)
  osc.stop(context.currentTime + 0.2)
}

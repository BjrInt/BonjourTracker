export const context = new (window.AudioContext || window.webkitAudioContext)()

const getRandomPCMInt = () => Math.random() * 2 - 1

const createMonoAudioBuffer = (len=2) => context.createBuffer(1, context.sampleRate * len, context.sampleRate)

export const OSC_TYPES = ['sine', 'square', 'sawtooth', 'triangle']

export const CUSTOM_WAVEFORMS = {
  white_noise: (() => {
    const arBuf = createMonoAudioBuffer()
    arBuf.getChannelData(0).forEach((x, i, t) => { t[i] = getRandomPCMInt() })

    return arBuf
  })()
}

export const createOscillator = (type='sine', volume=100) => {
  const gain = context.createGain()
  gain.gain.value = volume / 100

  if(OSC_TYPES.includes(type)){
    const osc = context.createOscillator()
    osc.type = type

    osc.connect(gain)
    gain.connect(context.destination)

    return osc
  }
  else if(CUSTOM_WAVEFORMS.hasOwnProperty(type)){
    const source = context.createBufferSource()
          source.buffer = CUSTOM_WAVEFORMS[type]

    source.connect(gain)
    gain.connect(context.destination)

    return source
  }
}

export const playNote = (osc, value=440) => {
  if(osc.__proto__.hasOwnProperty('frequency'))
    osc.frequency.value = value

  osc.start(context.currentTime)
  osc.stop(context.currentTime + 0.2)
}

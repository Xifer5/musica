import {keyPlaybackPlan} from './key-signature-domain.js?v=46'
import {midiFrequency} from './music-domain.js?v=46'
let context
function playNote({midi,delay}){context||=new AudioContext();const oscillator=context.createOscillator(),gain=context.createGain(),time=context.currentTime+delay;oscillator.type='sine';oscillator.frequency.value=midiFrequency(midi);gain.gain.setValueAtTime(.001,time);gain.gain.exponentialRampToValueAtTime(.09,time+.015);gain.gain.exponentialRampToValueAtTime(.001,time+.42);oscillator.connect(gain).connect(context.destination);oscillator.start(time);oscillator.stop(time+.46)}
document.querySelector('#play-relative-scale').onclick=()=>keyPlaybackPlan(Number(document.querySelector('#key-select').value),'minor').forEach(playNote)

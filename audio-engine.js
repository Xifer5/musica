import {midiFrequency,midiForChord} from './music-domain.js';
let context;
function audioContext(){context||=new AudioContext();if(context.state==='suspended')context.resume();return context}
export function playMidi(midi,{delay=0,duration=.72,gain=.06,wave='triangle'}={}){const ctx=audioContext(),oscillator=ctx.createOscillator(),volume=ctx.createGain(),start=ctx.currentTime+delay;oscillator.type=wave;oscillator.frequency.value=midiFrequency(midi);volume.gain.setValueAtTime(.001,start);volume.gain.exponentialRampToValueAtTime(gain,start+.018);volume.gain.exponentialRampToValueAtTime(.001,start+duration);oscillator.connect(volume).connect(ctx.destination);oscillator.start(start);oscillator.stop(start+duration+.04)}
export function playbackPlan(midis=[],mode='full'){const notes=midis.filter(Number.isFinite);return notes.map((midi,index)=>({midi,delay:mode==='arpeggio'?index*.2:index*.028,duration:mode==='arpeggio'?.82:.95,gain:notes.length>4?.045:.055}))}
export function playMidis(midis=[],mode='full'){const plan=playbackPlan(midis,mode);plan.forEach(({midi,...options})=>playMidi(midi,options));return plan.map(item=>item.midi)}
export function playChord(root,type='major',mode='full'){const notes=midiForChord(root,type);notes.forEach((midi,index)=>playMidi(midi,{delay:mode==='arpeggio'?index*.2:index*.025,duration:mode==='arpeggio'?.8:.9,gain:.055}));return notes}

export const CHROMATIC_SHARPS=['Do','Do♯','Re','Re♯','Mi','Fa','Fa♯','Sol','Sol♯','La','La♯','Si']
export const CHROMATIC_FLATS=['Do','Re♭','Re','Mi♭','Mi','Fa','Sol♭','Sol','La♭','La','Si♭','Si']

export function chromaticName(pitchClass,notation='sharp'){
 const names=notation==='flat'?CHROMATIC_FLATS:CHROMATIC_SHARPS
 return names[((pitchClass%12)+12)%12]
}

export function semitoneDistance(start=0,steps=0,notation='sharp'){
 const safeSteps=Math.max(0,Math.min(12,Number(steps)||0))
 const startPitch=((Number(start)||0)%12+12)%12
 const endPitch=(startPitch+safeSteps)%12
 const kind=safeSteps===0?'Tónica':safeSteps===1?'Semitono':safeSteps===2?'Tono':safeSteps===12?'Octava':`${safeSteps} semitonos`
 return {startPitch,endPitch,steps:safeSteps,startName:chromaticName(startPitch,notation),endName:chromaticName(endPitch,notation),kind,frets:safeSteps}
}

export function chromaticWalk(start=0,notation='sharp'){
 return Array.from({length:13},(_,steps)=>semitoneDistance(start,steps,notation))
}


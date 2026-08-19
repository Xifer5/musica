export const TREBLE_C4_TO_B4_Y=[210,198,186,174,162,150,138]
export function trebleNotePosition(noteIndex=0){const index=Math.max(0,Math.min(6,Number(noteIndex)||0));return{index,y:TREBLE_C4_TO_B4_Y[index],ledgerYs:index===0?[210]:[]}}
export function nextReadingNote(current=-1,random=Math.random){const candidate=Math.floor(Math.max(0,Math.min(.999999,random()))*7);return candidate===current?(candidate+1)%7:candidate}
export function evaluateReadingAnswer(target,answer,score={correct:0,total:0}){const isCorrect=Number(target)===Number(answer);return{isCorrect,correct:score.correct+(isCorrect?1:0),total:score.total+1}}
export const ENHARMONIC_PAIRS=[
 {id:'cs-db',sharp:'Do♯',sharpIntl:'C♯',sharpIndex:0,flat:'Re♭',flatIntl:'D♭',flatIndex:1,midi:61},
 {id:'ds-eb',sharp:'Re♯',sharpIntl:'D♯',sharpIndex:1,flat:'Mi♭',flatIntl:'E♭',flatIndex:2,midi:63},
 {id:'fs-gb',sharp:'Fa♯',sharpIntl:'F♯',sharpIndex:3,flat:'Sol♭',flatIntl:'G♭',flatIndex:4,midi:66},
 {id:'gs-ab',sharp:'Sol♯',sharpIntl:'G♯',sharpIndex:4,flat:'La♭',flatIntl:'A♭',flatIndex:5,midi:68},
 {id:'as-bb',sharp:'La♯',sharpIntl:'A♯',sharpIndex:5,flat:'Si♭',flatIntl:'B♭',flatIndex:6,midi:70}
]
export function enharmonicPair(id='cs-db'){return ENHARMONIC_PAIRS.find(pair=>pair.id===id)||ENHARMONIC_PAIRS[0]}
export function enharmonicSpelling(pair,kind='sharp'){const sharp=kind!=='flat';return{name:sharp?pair.sharp:pair.flat,intl:sharp?pair.sharpIntl:pair.flatIntl,noteIndex:sharp?pair.sharpIndex:pair.flatIndex,accidental:sharp?'♯':'♭',midi:pair.midi}}

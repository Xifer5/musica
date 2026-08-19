const SHARPS=['Fa♯','Do♯','Sol♯','Re♯','La♯','Mi♯','Si♯'],FLATS=['Si♭','Mi♭','La♭','Re♭','Sol♭','Do♭','Fa♭'];
const DATA=[
 {fifths:-7,majorLatin:'Do♭',majorIntl:'C♭',root:11,minorLatin:'La♭ menor',minorIntl:'A♭ minor',scale:['Do♭','Re♭','Mi♭','Fa♭','Sol♭','La♭','Si♭']},
 {fifths:-6,majorLatin:'Sol♭',majorIntl:'G♭',root:6,minorLatin:'Mi♭ menor',minorIntl:'E♭ minor',scale:['Sol♭','La♭','Si♭','Do♭','Re♭','Mi♭','Fa']},
 {fifths:-5,majorLatin:'Re♭',majorIntl:'D♭',root:1,minorLatin:'Si♭ menor',minorIntl:'B♭ minor',scale:['Re♭','Mi♭','Fa','Sol♭','La♭','Si♭','Do']},
 {fifths:-4,majorLatin:'La♭',majorIntl:'A♭',root:8,minorLatin:'Fa menor',minorIntl:'F minor',scale:['La♭','Si♭','Do','Re♭','Mi♭','Fa','Sol']},
 {fifths:-3,majorLatin:'Mi♭',majorIntl:'E♭',root:3,minorLatin:'Do menor',minorIntl:'C minor',scale:['Mi♭','Fa','Sol','La♭','Si♭','Do','Re']},
 {fifths:-2,majorLatin:'Si♭',majorIntl:'B♭',root:10,minorLatin:'Sol menor',minorIntl:'G minor',scale:['Si♭','Do','Re','Mi♭','Fa','Sol','La']},
 {fifths:-1,majorLatin:'Fa',majorIntl:'F',root:5,minorLatin:'Re menor',minorIntl:'D minor',scale:['Fa','Sol','La','Si♭','Do','Re','Mi']},
 {fifths:0,majorLatin:'Do',majorIntl:'C',root:0,minorLatin:'La menor',minorIntl:'A minor',scale:['Do','Re','Mi','Fa','Sol','La','Si']},
 {fifths:1,majorLatin:'Sol',majorIntl:'G',root:7,minorLatin:'Mi menor',minorIntl:'E minor',scale:['Sol','La','Si','Do','Re','Mi','Fa♯']},
 {fifths:2,majorLatin:'Re',majorIntl:'D',root:2,minorLatin:'Si menor',minorIntl:'B minor',scale:['Re','Mi','Fa♯','Sol','La','Si','Do♯']},
 {fifths:3,majorLatin:'La',majorIntl:'A',root:9,minorLatin:'Fa♯ menor',minorIntl:'F♯ minor',scale:['La','Si','Do♯','Re','Mi','Fa♯','Sol♯']},
 {fifths:4,majorLatin:'Mi',majorIntl:'E',root:4,minorLatin:'Do♯ menor',minorIntl:'C♯ minor',scale:['Mi','Fa♯','Sol♯','La','Si','Do♯','Re♯']},
 {fifths:5,majorLatin:'Si',majorIntl:'B',root:11,minorLatin:'Sol♯ menor',minorIntl:'G♯ minor',scale:['Si','Do♯','Re♯','Mi','Fa♯','Sol♯','La♯']},
 {fifths:6,majorLatin:'Fa♯',majorIntl:'F♯',root:6,minorLatin:'Re♯ menor',minorIntl:'D♯ minor',scale:['Fa♯','Sol♯','La♯','Si','Do♯','Re♯','Mi♯']},
 {fifths:7,majorLatin:'Do♯',majorIntl:'C♯',root:1,minorLatin:'La♯ menor',minorIntl:'A♯ minor',scale:['Do♯','Re♯','Mi♯','Fa♯','Sol♯','La♯','Si♯']}
];
const clamp=value=>Math.max(-7,Math.min(7,Number(value)||0));
export function circleOfFifths(){return DATA.map(key=>({...key,scale:[...key.scale]}))}
export function keySignature(fifths=0){const safe=clamp(fifths),key=DATA[safe+7],kind=safe>0?'sharps':safe<0?'flats':'natural',accidentals=safe>0?SHARPS.slice(0,safe):safe<0?FLATS.slice(0,-safe):[];return {...key,kind,accidentals}}
export function keyScale(fifths=0){return [...keySignature(fifths).scale]}
export function relativeMinor(fifths=0){const key=keySignature(fifths);return {latin:key.minorLatin,intl:key.minorIntl,root:(key.root+9)%12}}
export function keyPlaybackPlan(fifths=0,mode='major'){
 const key=keySignature(fifths),relative=relativeMinor(fifths),root=mode==='minor'?relative.root:key.root,intervals=mode==='minor'?[0,2,3,5,7,8,10,12]:[0,2,4,5,7,9,11,12]
 return intervals.map((interval,index)=>({midi:60+root+interval,delay:index*.22,degree:index===7?'8':String(index+1)}))
}
export function relativeRelationship(fifths=0){const key=keySignature(fifths),minor=relativeMinor(fifths);return {major:key.majorLatin,minor:minor.latin,sharedSignature:key.accidentals.length?key.accidentals.join(' · '):'sin alteraciones'}}

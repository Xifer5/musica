export const STRUM_PATTERNS=[
 {id:'quarters',name:'Pulso estable',level:'Inicial',beats:['D','D','D','D'],count:['1','2','3','4'],accent:[true,false,true,false],hint:'Baja la mano en cada pulso y acentúa 1 y 3.'},
 {id:'eighths',name:'Corcheas continuas',level:'Inicial',beats:['D','U','D','U','D','U','D','U'],count:['1','y','2','y','3','y','4','y'],accent:[true,false,false,false,true,false,false,false],hint:'La mano baja en los números y sube en cada “y”.'},
 {id:'pop',name:'Patrón popular',level:'Intermedio',beats:['D','','D','U','','U','D','U'],count:['1','y','2','y','3','y','4','y'],accent:[true,false,false,false,false,false,true,false],hint:'Mantén el movimiento incluso cuando no golpeas las cuerdas.'}
];
export const RHYTHM_CHORDS=['Em','C','G','D'];
export function strumPattern(id='quarters'){return STRUM_PATTERNS.find(item=>item.id===id)||STRUM_PATTERNS[0]}
export function beatDuration(bpm=80,subdivision=1){const safe=Math.min(160,Math.max(40,Number(bpm)||80));return 60000/safe/subdivision}
export function practiceBar(patternId='quarters',chords=RHYTHM_CHORDS){const pattern=strumPattern(patternId);return pattern.beats.map((stroke,index)=>({index,count:pattern.count[index],stroke,accent:pattern.accent[index],chord:chords[Math.min(chords.length-1,Math.floor(index/(pattern.beats.length/chords.length)))]}))}

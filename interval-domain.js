export const INTERVALS=[
 {semitones:0,name:'Unísono justo',short:'1J',family:'Justo',character:'La misma altura'},
 {semitones:1,name:'Segunda menor',short:'2m',family:'Menor',character:'Máxima tensión cercana'},
 {semitones:2,name:'Segunda mayor',short:'2M',family:'Mayor',character:'Un tono completo'},
 {semitones:3,name:'Tercera menor',short:'3m',family:'Menor',character:'Color menor'},
 {semitones:4,name:'Tercera mayor',short:'3M',family:'Mayor',character:'Color mayor'},
 {semitones:5,name:'Cuarta justa',short:'4J',family:'Justo',character:'Intervalo estable'},
 {semitones:6,name:'Tritono',short:'TT',family:'Aumentado',character:'Tensión central de la octava'},
 {semitones:7,name:'Quinta justa',short:'5J',family:'Justo',character:'Consonancia fuerte'},
 {semitones:8,name:'Sexta menor',short:'6m',family:'Menor',character:'Amplitud de color menor'},
 {semitones:9,name:'Sexta mayor',short:'6M',family:'Mayor',character:'Amplitud de color mayor'},
 {semitones:10,name:'Séptima menor',short:'7m',family:'Menor',character:'Tensión de dominante'},
 {semitones:11,name:'Séptima mayor',short:'7M',family:'Mayor',character:'Tensión hacia la octava'},
 {semitones:12,name:'Octava justa',short:'8J',family:'Justo',character:'La misma nota, registro superior'}
]
export function interval(value=0){const steps=Math.max(0,Math.min(12,Number(value)||0));return INTERVALS[steps]}
export function intervalJourney(value=0){const item=interval(value);return Array.from({length:item.semitones+1},(_,index)=>({step:index,isStart:index===0,isTarget:index===item.semitones}))}
export function intervalSummary(value=0){const item=interval(value);return `${item.name} · ${item.semitones} ${item.semitones===1?'semitono':'semitonos'} · ${item.semitones} ${item.semitones===1?'traste':'trastes'}`}

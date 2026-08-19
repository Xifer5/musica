export const RHYTHM_VALUES=[
 {id:'whole',name:'Redonda',noteSymbol:'𝅝',restSymbol:'𝄻',beats:4},
 {id:'half',name:'Blanca',noteSymbol:'𝅗𝅥',restSymbol:'𝄼',beats:2},
 {id:'quarter',name:'Negra',noteSymbol:'♩',restSymbol:'𝄽',beats:1},
 {id:'eighth',name:'Corchea',noteSymbol:'♪',restSymbol:'𝄾',beats:.5}
]
export function rhythmValue(id='quarter'){return RHYTHM_VALUES.find(value=>value.id===id)||RHYTHM_VALUES[2]}
export function rhythmBar(value,mode='note'){const item=typeof value==='string'?rhythmValue(value):value,count=Math.round(4/item.beats);return Array.from({length:count},(_,index)=>({index,start:index*item.beats,beats:item.beats,symbol:mode==='rest'?item.restSymbol:item.noteSymbol,sound:mode!=='rest'}))}
export function rhythmSummary(value,mode='note'){const item=typeof value==='string'?rhythmValue(value):value,count=Math.round(4/item.beats),kind=mode==='rest'?(count===1?'silencio':'silencios'):(count===1?item.name.toLowerCase():'figuras');return`${count} ${kind} ${count===1?'completa':'completan'} 4 pulsos`}

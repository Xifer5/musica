export const METERS=[
 {id:'2-4',label:'2/4',numerator:2,denominator:4,type:'Binario simple',unit:'Negra',grouping:'1 + 1',accents:['strong','weak']},
 {id:'3-4',label:'3/4',numerator:3,denominator:4,type:'Ternario simple',unit:'Negra',grouping:'1 + 1 + 1',accents:['strong','weak','weak']},
 {id:'4-4',label:'4/4',numerator:4,denominator:4,type:'Cuaternario simple',unit:'Negra',grouping:'2 + 2',accents:['strong','weak','medium','weak']},
 {id:'6-8',label:'6/8',numerator:6,denominator:8,type:'Binario compuesto',unit:'Corchea',grouping:'3 + 3',accents:['strong','weak','weak','medium','weak','weak']}
]
export function meter(id='3-4'){return METERS.find(item=>item.id===id)||METERS[1]}
export function meterPulsePlan(value){const item=typeof value==='string'?meter(value):value;return item.accents.map((accent,index)=>({index:index+1,accent,groupStart:accent==='strong'||accent==='medium'}))}
export function meterExplanation(value){const item=typeof value==='string'?meter(value):value;return item.id==='6-8'?'6 corcheas agrupadas 3 + 3: se sienten 2 pulsos grandes.':`${item.numerator} pulsos de negra por compás · agrupación ${item.grouping}.`}

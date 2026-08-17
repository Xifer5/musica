const VOICINGS={
 C:{root:0,type:'major',name:'Do mayor',frets:['x',3,2,0,1,0],fingers:[0,3,2,0,1,0]},G:{root:7,type:'major',name:'Sol mayor',frets:[3,2,0,0,0,3],fingers:[2,1,0,0,0,3]},Am:{root:9,type:'minor',name:'La menor',frets:['x',0,2,2,1,0],fingers:[0,0,2,3,1,0]},F:{root:5,type:'major',name:'Fa mayor',frets:[1,3,3,2,1,1],fingers:[1,3,4,2,1,1]},D:{root:2,type:'major',name:'Re mayor',frets:['x','x',0,2,3,2],fingers:[0,0,0,1,3,2]},Em:{root:4,type:'minor',name:'Mi menor',frets:[0,2,2,0,0,0],fingers:[0,2,3,0,0,0]},A:{root:9,type:'major',name:'La mayor',frets:['x',0,2,2,2,0],fingers:[0,0,1,2,3,0]},Bm:{root:11,type:'minor',name:'Si menor',frets:['x',2,4,4,3,2],fingers:[0,1,3,4,2,1]}
};
export const GUITAR_KEYS=[{id:'c',name:'Do mayor',progression:['C','G','Am','F']},{id:'g',name:'Sol mayor',progression:['G','D','Em','C']},{id:'d',name:'Re mayor',progression:['D','A','Bm','G']}];
const FUNCTIONS=['Tónica','Dominante','Tónica relativa','Predominante'];
export function guitarKey(id='g'){return GUITAR_KEYS.find(item=>item.id===id)||GUITAR_KEYS[1]}
export function appliedProgression(id='g'){const key=guitarKey(id);return{...key,chords:key.progression.map((symbol,index)=>({symbol,...VOICINGS[symbol],degree:['I','V','vi','IV'][index],function:FUNCTIONS[index]}))}}
export function voicing(symbol='G'){return VOICINGS[symbol]||VOICINGS.G}
export function practiceOrder(id='g',repeats=2){const chords=appliedProgression(id).chords;return Array.from({length:Math.max(1,Math.min(4,Number(repeats)||2))},()=>chords).flat()}

export function voicingKey(root,type,frets=[]){return`${Number(root)}:${type}:${frets.join('-')}`}
export function notebookItem(root,type,voicing,{symbol,name}={}){return{id:voicingKey(root,type,voicing.frets),root:Number(root),type,frets:[...voicing.frets],fingers:[...(voicing.fingers||[])],startFret:voicing.startFret||1,rootBass:Boolean(voicing.rootBass),symbol:symbol||'',name:name||symbol||'Acorde'}}
export function parseNotebook(value){try{const parsed=JSON.parse(value||'[]');return Array.isArray(parsed)?parsed.filter(item=>item&&typeof item.id==='string'&&Array.isArray(item.frets)&&item.frets.length===6).slice(0,24):[]}catch{return[]}}
export function toggleNotebook(items=[],item){return items.some(saved=>saved.id===item.id)?items.filter(saved=>saved.id!==item.id):[item,...items].slice(0,24)}
export function isSaved(items=[],item){return items.some(saved=>saved.id===item.id)}

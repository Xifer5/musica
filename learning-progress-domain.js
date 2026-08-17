export function lessonProgressKey(lesson){return `la-clave:course:${lesson.route}:${lesson.order}`}
export function isLessonComplete(lesson,values={}){
 if(lesson.route==='principiante'){
  const beginnerIds=['pulso','pentagrama','alteraciones','figuras','compases','tonos','intervalos','acorde-mayor'];
  const id=beginnerIds[lesson.order-1];
  return values[`la-clave:${id}`]==='complete'||(id==='acorde-mayor'&&values['la-clave:lesson-1']==='complete');
 }
 return values[lessonProgressKey(lesson)]==='complete';
}
export function lessonForPath(lessons,path){const file=String(path||'').split('/').pop()||'';return lessons.find(lesson=>lesson.href&&!lesson.href.includes('?')&&lesson.href===file)||null}
export function lessonNeighbors(lessons,current){if(!current)return{previous:null,next:null};const route=lessons.filter(item=>item.route===current.route&&item.href&&item.href!=='#').sort((a,b)=>a.order-b.order),index=route.findIndex(item=>item.order===current.order);return{previous:index>0?route[index-1]:null,next:index>=0&&index<route.length-1?route[index+1]:null}}
export function courseProgress(lessons,values={}){return[...new Set(lessons.map(item=>item.route))].map(route=>{const routeLessons=lessons.filter(item=>item.route===route),completed=routeLessons.filter(item=>isLessonComplete(item,values)).length;return{route,completed,total:routeLessons.length,percent:routeLessons.length?Math.round(completed/routeLessons.length*100):0}})}

export function lessonProgressKey(lesson){return `la-clave:course:${lesson.route}:${lesson.order}`}
export function isLessonComplete(lesson,values={}){
 if(lesson.route==='principiante'){
  const beginnerIds=['pulso','pentagrama','alteraciones','figuras','compases','tonos','intervalos','acorde-mayor','acorde-menor'];
  const id=beginnerIds[lesson.order-1];
  return values[`la-clave:${id}`]==='complete'||(id==='acorde-mayor'&&values['la-clave:lesson-1']==='complete');
 }
 return values[lessonProgressKey(lesson)]==='complete';
}
export function lessonForPath(lessons,path){const file=String(path||'').split('/').pop()||'';return lessons.find(lesson=>lesson.href&&!lesson.href.includes('?')&&lesson.href===file)||null}
export function lessonNeighbors(lessons,current){if(!current)return{previous:null,next:null};const route=lessons.filter(item=>item.route===current.route&&item.href&&item.href!=='#').sort((a,b)=>a.order-b.order),index=route.findIndex(item=>item.order===current.order);return{previous:index>0?route[index-1]:null,next:index>=0&&index<route.length-1?route[index+1]:null}}
export function courseProgress(lessons,values={}){return[...new Set(lessons.map(item=>item.route))].map(route=>{const routeLessons=lessons.filter(item=>item.route===route),completed=routeLessons.filter(item=>isLessonComplete(item,values)).length;return{route,completed,total:routeLessons.length,percent:routeLessons.length?Math.round(completed/routeLessons.length*100):0}})}
export function isLessonStarted(lesson,values={}){
 if(lesson.route==='principiante'){
  const beginnerIds=['pulso','pentagrama','alteraciones','figuras','compases','tonos','intervalos','acorde-mayor','acorde-menor'];
  return values[`la-clave:${beginnerIds[lesson.order-1]}`]==='started';
 }
 return values[lessonProgressKey(lesson)]==='started';
}
export function continueLesson(lessons,values={}){
 const available=lessons.filter(lesson=>lesson.href&&lesson.href!=='#');
 const started=available.filter(lesson=>isLessonStarted(lesson,values));
 let lesson=started.at(-1);
 if(!lesson){
  const progress=courseProgress(available,values).filter(route=>route.completed<route.total).sort((a,b)=>b.completed-a.completed);
  const activeRoute=progress.find(route=>route.completed>0)?.route||available[0]?.route;
  lesson=available.find(item=>item.route===activeRoute&&!isLessonComplete(item,values));
 }
 lesson||=available.at(-1);
 if(!lesson)return null;
 const routeLessons=available.filter(item=>item.route===lesson.route).sort((a,b)=>a.order-b.order),completed=routeLessons.filter(item=>isLessonComplete(item,values)).length;
 return{lesson,position:routeLessons.findIndex(item=>item===lesson)+1,total:routeLessons.length,completed,percent:Math.round(completed/routeLessons.length*100)};
}
export function routeContinuation(lessons,route,values={}){
 const routeLessons=lessons.filter(lesson=>lesson.route===route&&lesson.href&&lesson.href!=='#').sort((a,b)=>a.order-b.order);
 const lesson=routeLessons.find(item=>isLessonStarted(item,values))||routeLessons.find(item=>!isLessonComplete(item,values))||routeLessons.at(-1);
 if(!lesson)return null;
 const completed=routeLessons.filter(item=>isLessonComplete(item,values)).length;
 return{lesson,completed,total:routeLessons.length,percent:Math.round(completed/routeLessons.length*100),complete:completed===routeLessons.length};
}

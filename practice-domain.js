export const PRACTICE_SETS={
 beginner:[
  {id:'b1',concept:'Lectura',prompt:'¿Qué nombre internacional corresponde a Do?',visual:'Do = ?',answers:['A','B','C','D'],correct:2,explanation:'En el cifrado internacional, Do se representa con la letra C.'},
  {id:'b2',concept:'Distancias',prompt:'¿Cuántos semitonos forman un tono?',visual:'S + S = ?',answers:['1','2','3','4'],correct:1,explanation:'Un tono está formado por dos semitonos; en guitarra equivale a dos trastes.'},
  {id:'b3',concept:'Intervalos',prompt:'¿Qué intervalo forman Do y Sol?',visual:'Do → Sol',answers:['3ª mayor','4ª justa','5ª justa','6ª mayor'],correct:2,explanation:'Contamos Do–Re–Mi–Fa–Sol: cinco nombres. La distancia es una quinta justa.'},
  {id:'b4',concept:'Acordes',prompt:'¿Qué fórmula construye una tríada mayor?',visual:'Acorde mayor',answers:['1 · ♭3 · 5','1 · 3 · 5','1 · 4 · 5','1 · 3 · ♯5'],correct:1,explanation:'Una tríada mayor combina tónica, tercera mayor y quinta justa: 1–3–5.'},
  {id:'b5',concept:'Ritmo',prompt:'¿Cuántos pulsos dura una blanca en 4/4?',visual:'𝅗𝅥',answers:['½ pulso','1 pulso','2 pulsos','4 pulsos'],correct:2,explanation:'La blanca equivale a dos negras, por eso ocupa dos pulsos.'}
 ],
 intermediate:[
  {id:'i1',concept:'Escalas',prompt:'¿Qué notas forman la escala de Sol mayor?',visual:'Sol mayor',answers:['Sol La Si Do Re Mi Fa♯','Sol La♭ Si Do Re Mi Fa','Sol La Si♭ Do Re Mi Fa','Sol La Si Do♯ Re Mi Fa♯'],correct:0,explanation:'Sol mayor conserva el patrón T–T–S–T–T–T–S y requiere Fa♯.'},
  {id:'i2',concept:'Campo armónico',prompt:'¿Cuál es el acorde V de Do mayor?',visual:'I · ii · iii · IV · V',answers:['Fa','Sol','La menor','Si disminuido'],correct:1,explanation:'El quinto grado de Do mayor es Sol y su tríada es Sol mayor.'},
  {id:'i3',concept:'Funciones',prompt:'¿Qué función suele crear tensión y buscar la tónica?',visual:'? → I',answers:['Tónica','Predominante','Dominante','Relativa'],correct:2,explanation:'La dominante contiene la tensión principal de la tonalidad y tiende a resolver en la tónica.'},
  {id:'i4',concept:'Acordes',prompt:'¿Qué notas forman Re menor?',visual:'Dm',answers:['Re Fa La','Re Fa♯ La','Re Sol La','Re Fa La♭'],correct:0,explanation:'Re menor contiene Re, Fa y La: 1–♭3–5.'},
  {id:'i5',concept:'Progresiones',prompt:'¿Qué acordes representa ii–V–I en Do mayor?',visual:'ii → V → I',answers:['Dm · G · C','Em · G · C','Dm · F · C','Am · G · C'],correct:0,explanation:'En Do mayor, ii es Dm, V es G e I es C.'}
 ],
 guitar:[
  {id:'g1',concept:'Afinación',prompt:'¿Qué nota produce la sexta cuerda al aire?',visual:'6.ª cuerda · aire',audio:{midi:40},answers:['Re / D','Mi / E','Sol / G','La / A'],correct:1,explanation:'La sexta cuerda en afinación estándar es Mi grave, E2.'},
  {id:'g2',concept:'Diapasón',prompt:'¿Qué nota está en la quinta cuerda, traste 3?',visual:'5.ª cuerda · traste 3',audio:{midi:48},answers:['Do / C','Re / D','Mi / E','Fa / F'],correct:0,explanation:'La quinta cuerda es La; tres semitonos arriba encontramos Do.'},
  {id:'g3',concept:'Acordes',prompt:'¿Cuál de estas notas pertenece a Mi menor?',visual:'Em',audio:{root:4,type:'minor'},answers:['Do','Fa','Sol','La♯'],correct:2,explanation:'Mi menor contiene Mi, Sol y Si. Sol es su tercera menor.'},
  {id:'g4',concept:'Rasgueo',prompt:'En corcheas continuas, ¿cuándo sube la mano?',visual:'1 y 2 y 3 y 4 y',answers:['En los números','En cada “y”','Solo en 2 y 4','Nunca'],correct:1,explanation:'La mano baja en los números y sube en cada “y”, manteniendo movimiento constante.'},
  {id:'g5',concept:'Armonía aplicada',prompt:'En Sol mayor, ¿qué acordes forman I–V–vi–IV?',visual:'I → V → vi → IV',audio:{progression:[{root:7,type:'major'},{root:2,type:'major'},{root:4,type:'minor'},{root:0,type:'major'}]},answers:['G · D · Em · C','G · C · D · Em','D · A · Bm · G','C · G · Am · F'],correct:0,explanation:'En Sol mayor, la progresión I–V–vi–IV corresponde a G–D–Em–C.'}
 ]
};
export function getPracticeSet(level='beginner'){return PRACTICE_SETS[level]||PRACTICE_SETS.beginner}
export function practiceLevel(value='beginner'){return Object.hasOwn(PRACTICE_SETS,value)?value:'beginner'}
export function practiceBestKey(level='beginner'){return practiceLevel(level)==='guitar'?'la-clave:practice-best:guitar':'la-clave:practice-best'}
export function evaluateAnswer(question,index){return {correct:Number(index)===question.correct,explanation:question.explanation}}
export function summarize(results=[]){const correct=results.filter(Boolean).length,total=results.length;return {correct,total,percent:total?Math.round(correct/total*100):0}}

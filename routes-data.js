export const ROUTES=[
 {id:'principiante',number:'I',level:'Principiante',title:'Fundamentos',subtitle:'Aprende a leer, escuchar y construir música desde cero.',outcome:'Lees símbolos básicos, mantienes el pulso y construyes tus primeras tríadas.',duration:'9 lecciones · 2 h 05 min',color:'teal',lessons:['Sonido, pulso y ritmo','Pentagrama y claves','Notas y alteraciones','Figuras y silencios','Compases','Tonos y semitonos','Intervalos','Acordes mayores','Acordes menores']},
 {id:'intermedio',number:'II',level:'Intermedio',title:'Armonía aplicada',subtitle:'Conecta escalas, acordes y funciones para comprender canciones.',outcome:'Analizas tonalidades, inviertes acordes y explicas la dirección armónica de una progresión.',competencies:['Analizar tonalidades','Construir inversiones','Oír funciones'],duration:'6 lecciones · 1 h 43 min',color:'clay',lessons:['Escalas mayores y menores','Armaduras de clave','Tríadas e inversiones','Acordes con séptima','Campo armónico','Funciones armónicas']},
 {id:'avanzado',number:'III',level:'Avanzado',title:'Lenguaje y creación',subtitle:'Profundiza en improvisación, análisis, arreglo y reharmonización.',outcome:'Creas tensión y contraste con recursos modales, dominantes y reharmonización.',competencies:['Crear tensión','Reharmonizar','Improvisar con intención'],duration:'6 lecciones · 2 h 29 min',color:'gold',lessons:['Modos griegos','Dominantes secundarios','Intercambio modal','Sustitución tritonal','Rearmonización','Arreglo e improvisación']},
 {id:'guitarra',number:'IV',level:'Instrumento',title:'Guitarra',subtitle:'Conoce el instrumento y conecta técnica, diapasón, armonía y sonido.',duration:'7 módulos · práctica interactiva',color:'clay',lessons:['Anatomía y afinación','Primeros acordes','Ritmo y acompañamiento','Mapa del diapasón','Escalas y arpegios','Armonía aplicada','Biblioteca de acordes']}
];
export const LESSONS=[
 {route:'principiante',order:1,title:'Sonido, pulso y ritmo',desc:'Distingue altura, duración, intensidad y timbre.',time:'9 min',status:'available',href:'lesson.html?id=pulso'},
 {route:'principiante',order:2,title:'Pentagrama y claves',desc:'Ubica las notas sobre líneas y espacios.',time:'12 min',status:'available',href:'lesson.html?id=pentagrama'},
 {route:'principiante',order:3,title:'Notas y alteraciones',desc:'Comprende sostenidos, bemoles y becuadros.',time:'11 min',status:'available',href:'lesson.html?id=alteraciones'},
 {route:'principiante',order:4,title:'Figuras y silencios',desc:'Relaciona símbolos con duraciones y pausas.',time:'13 min',status:'available',href:'lesson.html?id=figuras'},
 {route:'principiante',order:5,title:'Compases',desc:'Agrupa pulsos y reconoce acentos métricos.',time:'14 min',status:'available',href:'lesson.html?id=compases'},
 {route:'principiante',order:6,title:'Tonos y semitonos',desc:'Mide distancias en el sistema cromático.',time:'12 min',status:'available',href:'lesson.html?id=tonos'},
 {route:'principiante',order:7,title:'Intervalos',desc:'Nombra y escucha distancias entre notas.',time:'16 min',status:'available',href:'lesson.html?id=intervalos'},
 {route:'principiante',order:8,title:'Cómo se forma un acorde mayor',desc:'Relaciona fórmula, sonido, pentagrama y guitarra.',time:'8 min',status:'current',href:'lesson.html?id=acorde-mayor'},
 {route:'principiante',order:9,title:'Cómo se forma un acorde menor',desc:'Baja la tercera y compara el nuevo color en tres instrumentos.',time:'10 min',status:'current',href:'lesson.html?id=acorde-menor'},
 {route:'intermedio',order:1,title:'Escalas mayores y menores',desc:'Compara patrones y sonoridades esenciales.',time:'16 min',status:'current',href:'lesson.html?id=escalas'},
 {route:'intermedio',order:2,title:'Armaduras de clave',desc:'Lee sostenidos y bemoles mediante el círculo de quintas.',time:'15 min',status:'current',href:'key-signatures.html'},
 {route:'intermedio',order:3,title:'Tríadas e inversiones',desc:'Cambia la nota del bajo sin alterar la identidad del acorde.',time:'17 min',status:'current',href:'inversions.html'},
 {route:'intermedio',order:4,title:'Acordes con séptima',desc:'Añade una cuarta voz y compara sus colores armónicos.',time:'19 min',status:'current',href:'sevenths.html'},
 {route:'intermedio',order:5,title:'Campo armónico',desc:'Construye los acordes de una tonalidad.',time:'18 min',status:'current',href:'harmony.html'},
 {route:'intermedio',order:6,title:'Funciones armónicas',desc:'Conecta reposo, impulso y tensión en una progresión.',time:'18 min',status:'current',href:'functions.html'},
 {route:'avanzado',order:1,title:'Modos griegos',desc:'Explora colores modales y sus aplicaciones.',time:'22 min',status:'current',href:'modes.html'},
 {route:'avanzado',order:2,title:'Dominantes secundarios',desc:'Crea tensión temporal hacia un acorde diatónico.',time:'24 min',status:'current',href:'secondary-dominants.html'},
 {route:'avanzado',order:3,title:'Intercambio modal',desc:'Toma acordes del menor paralelo para transformar el color.',time:'24 min',status:'current',href:'modal-interchange.html'},
 {route:'avanzado',order:4,title:'Sustitución tritonal',desc:'Reemplaza una dominante conservando sus notas guía.',time:'25 min',status:'current',href:'tritone.html'},
 {route:'avanzado',order:5,title:'Rearmonización',desc:'Transforma una progresión preservando su dirección.',time:'26 min',status:'current',href:'reharmonization.html'},
 {route:'avanzado',order:6,title:'Arreglo e improvisación',desc:'Da textura a una progresión y crea frases con notas objetivo.',time:'28 min',status:'current',href:'arrangement.html'},
 {route:'guitarra',order:1,title:'Anatomía y afinación',desc:'Reconoce las partes de la guitarra y escucha sus seis cuerdas.',time:'15 min',status:'current',href:'guitar-foundations.html'},
 {route:'guitarra',order:2,title:'Primeros acordes',desc:'Forma acordes abiertos y practica cambios limpios.',time:'18 min',status:'current',href:'guitar-first-chords.html'},
 {route:'guitarra',order:3,title:'Ritmo y acompañamiento',desc:'Coordina pulso, rasgueo y acentos.',time:'20 min',status:'current',href:'guitar-rhythm.html'},
 {route:'guitarra',order:4,title:'Mapa del diapasón',desc:'Localiza notas y patrones a lo largo del mástil.',time:'22 min',status:'current',href:'guitar-fretboard.html'},
 {route:'guitarra',order:5,title:'Escalas y arpegios',desc:'Conecta posiciones para crear melodías.',time:'24 min',status:'current',href:'guitar-scales.html'},
 {route:'guitarra',order:6,title:'Armonía aplicada',desc:'Construye voicings y acompaña progresiones.',time:'26 min',status:'current',href:'guitar-harmony.html'},
 {route:'guitarra',order:7,title:'Biblioteca de acordes',desc:'Compara posiciones abiertas, móviles y acordes extendidos.',time:'Exploración libre',status:'current',href:'chord-library.html'}
];
function searchable(value){return value.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
export function filterLessons(lessons,term){const q=searchable(term.trim());return q?lessons.filter(x=>searchable(x.title+' '+x.desc).includes(q)):lessons;}

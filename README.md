# La Clave — prototipo funcional

Primer corte vertical de una aplicación pública y gratuita de teoría musical.

## Ejecutar

Desde esta carpeta:

```powershell
python -m http.server 8812 --bind localhost
```

Abrir `http://localhost:8812/index.html`.

No conviene abrir `index.html` directamente porque el navegador debe cargar los módulos JavaScript mediante HTTP.

## Funciones incluidas

- Lección introductoria sobre tríadas mayores.
- Nomenclatura latina e internacional.
- Selector de las doce tónicas.
- Pentagrama SVG generado desde el modelo musical.
- Diagramas de guitarra para posiciones abiertas y cejillas.
- Reproducción de acordes y arpegios con Web Audio.
- Transposición por semitonos.
- Vistas combinada, pentagrama y guitarra.
- Ejercicio rápido con retroalimentación.
- Progreso y tema persistidos en almacenamiento local.
- Tema claro/oscuro, navegación por teclado y layout responsive.
- Pantalla de rutas para los niveles Principiante, Intermedio y Avanzado.
- Catálogo filtrable y buscador de lecciones.
- Primeras cinco lecciones en Markdown estructurado.
- Tres lecciones completas con plantilla reutilizable: pulso, pentagrama y alteraciones.
- Metrónomo, notas audibles y comparación enarmónica interactiva.
- Ruta inicial completa hasta acordes: figuras, compases, tonos e intervalos.
- Biblioteca con nueve familias de acordes y digitaciones calculadas para guitarra.
- Diapasón de 15 trastes con seis escalas, grados, enarmonía y reproducción.
- Laboratorios intermedios de campo armónico, tríadas e inversiones y acordes con séptima.
- Comparación de acordes `maj7`, `7`, `m7` y `m7♭5` en pentagrama y guitarra.
- Laboratorio de funciones armónicas con sustituciones, tensión, pentagrama y recorrido de guitarra.
- Círculo de quintas y armaduras desde siete bemoles hasta siete sostenidos.
- Laboratorio avanzado de dominantes secundarios con tonicización y resolución aplicada.
- Intercambio modal con acordes prestados del menor paralelo y comparación auditiva.
- Sustitución tritonal con notas guía compartidas y resolución cromática.
- Laboratorio de rearmonización con comparación de dominantes secundarias, intercambio modal y sustitución tritonal.
- Laboratorio de arreglo e improvisación con texturas, mapas por compás, paletas melódicas, frase guiada y guitarra.
- Cierre reutilizable de lecciones intermedias y avanzadas con progreso local y navegación anterior/siguiente.
- Ruta Guitarra completa con anatomía, afinación, acordes, ritmo, diapasón, escalas, arpegios y armonía aplicada con audio interactivo.
- Sesión de práctica específica para guitarra con ejemplos sonoros y retroalimentación inmediata.
- Panel de progreso de guitarra con seis habilidades, porcentaje, estados y recomendación de la siguiente lección.
- Acceso directo a la práctica de guitarra con selección automática y mejor resultado independiente.
- Biblioteca sonora con 22 tipos de acorde y múltiples voicings abiertos y móviles por todo el mástil.
- Pentagrama por voicing con alturas reales y desglose de nota, traste y estado de las seis cuerdas.
- Reproducción exacta de cada voicing, rasgueo, arpegio y escucha independiente cuerda por cuerda.
- Cuaderno local de digitaciones favoritas con apertura, deduplicación y eliminación de posiciones guardadas.
- Escucha individual y reproducción secuencial del cuaderno usando las alturas reales de cada digitación.
- Lección de primeros acordes con cinco posiciones abiertas, digitación validada y entrenador de cambios.
- Diagramas de guitarra compartidos entre laboratorios y pentagramas comparativos calculados por altura real.
- Sistema visual M3 compartido con tipografía legible, tokens semánticos, estados, áreas táctiles y breakpoints comunes.
- Capa de contenido Markdown estructurado integrada a las lecciones con objetivos pedagógicos y respaldo offline.
- Entrenador de lectura en clave de sol con notas aleatorias, retroalimentación y marcador de aciertos.
- Comparador de cinco parejas enarmónicas con escritura contextual en pentagrama y reproducción común.
- Laboratorio de figuras y silencios con equivalencias visuales en 4/4, pulso audible y reproducción diferenciada.
- Comparador métrico de 2/4, 3/4, 4/4 y 6/8 con agrupaciones y jerarquía audible de acentos.

## Pruebas

```powershell
node tests.mjs
```

Las 259 pruebas cubren el dominio cromático, escalas, armaduras, armonía, funciones, guitarra, afinación, acordes abiertos, figuras, silencios, ritmo, compases simples y compuestos, acompañamiento, diapasón, escalas, arpegios, armonía aplicada, biblioteca de acordes extendidos, escritura y comparación enarmónica, voicings reales, reproducción, cuaderno local, contenido Markdown estructurado, posición y entrenamiento de notas en clave de sol, evaluación y progreso de guitarra, dominantes secundarios, intercambio modal, sustitución tritonal, rearmonización, arreglo, improvisación, navegación educativa, progreso, altura y octavas en pentagrama, sistema M3, inversiones, acordes con séptima, práctica, ajustes y digitaciones de guitarra.

## Próxima iteración sugerida

Completar la migración editorial de las lecciones intermedias y avanzadas al catálogo Markdown y ampliar las digitaciones validadas.

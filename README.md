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
- Lección de primeros acordes con cinco posiciones abiertas, digitación validada y entrenador de cambios.
- Diagramas de guitarra compartidos entre laboratorios y pentagramas comparativos calculados por altura real.
- Sistema visual M3 compartido con tipografía legible, tokens semánticos, estados, áreas táctiles y breakpoints comunes.

## Pruebas

```powershell
node tests.mjs
```

Las 218 pruebas cubren el dominio cromático, escalas, armaduras, armonía, funciones, guitarra, afinación, acordes abiertos, ritmo, acompañamiento, diapasón, escalas, arpegios, armonía aplicada, biblioteca de acordes extendidos, escritura enarmónica, voicings reales, reproducción y cuaderno local, evaluación y progreso de guitarra, dominantes secundarios, intercambio modal, sustitución tritonal, rearmonización, arreglo, improvisación, navegación educativa, progreso, altura y octavas en pentagrama, sistema M3, inversiones, acordes con séptima, práctica, ajustes y digitaciones de guitarra.

## Próxima iteración sugerida

Extraer las lecciones a Markdown estructurado, ampliar las digitaciones validadas y construir la pantalla de rutas para los niveles principiante, intermedio y avanzado.

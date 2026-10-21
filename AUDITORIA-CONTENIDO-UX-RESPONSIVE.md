# Auditoría de contenido, funcionalidad y responsive — La Clave

Fecha: 19 de octubre de 2026  
Alcance: contenido musical, arquitectura pedagógica, experiencia web y móvil, accesibilidad, PWA y calidad funcional.

## 1. Resumen ejecutivo

La Clave ya es un prototipo educativo amplio y funcional: contiene 25 páginas HTML, 28 experiencias o lecciones catalogadas, laboratorios sonoros, pentagrama, piano, guitarra, progreso local, práctica y 340 pruebas de dominio. La identidad visual es consistente y la estructura responsive evita desbordamiento horizontal en las páginas móviles revisadas.

La prioridad inmediata no es añadir más pantallas aisladas, sino consolidar el producto:

- **P0:** corregir actualización PWA, enlaces/versiones servidas y coherencia del catálogo.
- **P0:** elevar objetivos táctiles y textos pequeños para accesibilidad móvil.
- **P1:** completar la arquitectura curricular prometida y convertir el contenido inline a un formato editorial común.
- **P1:** crear evaluaciones acumulativas, entrenamiento auditivo y aprendizaje adaptativo.
- **P1:** añadir pruebas E2E responsive y accesibilidad; las 340 pruebas actuales se concentran en dominio.

Estimación del estado actual respecto de una primera versión pública sólida:

| Área | Estado estimado | Lectura |
|---|---:|---|
| Cobertura curricular | 62% | Buena base, faltan bloques esenciales y profundidad progresiva |
| Laboratorios interactivos | 82% | Es el punto más fuerte del producto |
| Coherencia editorial | 48% | Solo 10 unidades tienen Markdown estructurado |
| Funcionalidad web | 76% | Amplia, pero con deuda de caché, estados y pruebas integrales |
| Responsive móvil | 78% | Sin overflow en la muestra; persisten controles y textos pequeños |
| Accesibilidad | 66% | Buen inicio semántico; falta auditoría WCAG completa |
| Preparación para publicación | 68% | Requiere estabilización antes de ampliar contenido |

## 2. Evidencia observada

- [x] 25 páginas HTML.
- [x] 28 elementos catalogados: 9 de Fundamentos, 6 intermedios, 6 avanzados y 7 de guitarra.
- [x] 340 pruebas de dominio y producto superadas.
- [x] No se detectó desbordamiento horizontal a 390 px en Rutas, Biblioteca de acordes, Mapa del diapasón, Arreglo e improvisación y Progreso.
- [x] La portada mantiene texto mínimo de 14 px en la medición de escritorio.
- [x] Existen preferencias de tema, texto grande, movimiento reducido, sonido y nomenclatura.
- [ ] La versión servida en el navegador coincide con el código actual: la PWA mostró rutas y enlaces anteriores, y la nueva lección menor no fue alcanzable en la sesión auditada.
- [ ] Los metadatos del catálogo coinciden con la oferta real: Intermedio declara 14 lecciones pero contiene 6; Avanzado declara 16 pero contiene 6.
- [ ] Todas las lecciones utilizan contenido editorial estructurado: solo existen 10 archivos Markdown.
- [ ] Todos los controles móviles cumplen un mínimo de 44×44 px: se midieron objetivos de 18, 19, 23, 25, 38, 40 y 42 px.
- [ ] Todo texto funcional cumple el mínimo recomendado de 14 px: se encontraron textos de 9–13.33 px.

## 3. Checklist completo de contenido

### P0 — Coherencia antes de crecer

- [ ] Corregir cifras de duración y cantidad de lecciones en todas las rutas.
- [ ] Confirmar que cada elemento del catálogo conduce a la pantalla correcta.
- [ ] Añadir la lección menor al contenido editorial, caché, progreso y navegación real servida.
- [ ] Definir una única taxonomía: lección, módulo, laboratorio, práctica y herramienta.
- [ ] Homogeneizar nomenclatura latina/internacional y alteraciones según contexto tonal.
- [ ] Revisar enarmonía en acordes, escalas, armaduras y pentagramas; no elegir sostenidos por defecto cuando la función exige bemoles.
- [ ] Añadir autoría, fuentes y bibliografía por módulo; distinguir material original de referencias.
- [ ] Revisar derechos de uso del PDF y evitar reproducir texto o diagramas protegidos literalmente.

### Fundamentos — faltantes recomendados

- [x] Pulso, pentagrama, alteraciones, figuras, compases, tonos, intervalos y tríadas mayor/menor.
- [ ] Clave de fa y lectura básica en dos claves.
- [ ] Líneas adicionales, octavas y registro real de instrumentos.
- [ ] Becuadro, dobles alteraciones y alteraciones de cortesía.
- [ ] Ligadura de unión, puntillo, calderón y anacrusa.
- [ ] Subdivisión binaria/ternaria, síncopa y contratiempo.
- [ ] Tresillos y figuras irregulares introductorias.
- [ ] Signos de repetición, casillas, Da Capo, Dal Segno y Coda.
- [ ] Dinámicas, articulaciones, tempo y carácter.
- [ ] Entrenamiento auditivo inicial: grave/agudo, tono/semitono, mayor/menor.
- [ ] Dictado rítmico y melódico corto.
- [ ] Lectura cantada o solfeo con referencia sonora.

### Intermedio — faltantes recomendados

- [x] Escalas mayor/menor natural, armaduras, inversiones, séptimas, campo y funciones.
- [ ] Menor armónica y menor melódica, con comparación auditiva.
- [ ] Círculo de quintas aplicado a transposición y composición.
- [ ] Cadencias auténtica, plagal, semicadencia y rota.
- [ ] Conducción de voces: notas comunes, movimiento contrario y duplicaciones.
- [ ] Acordes disminuidos, aumentados, suspendidos, sexta y add9 dentro de progresiones.
- [ ] Dominantes y sensibles en tonalidad menor.
- [ ] Modulación a tonalidades vecinas y acorde pivote.
- [ ] Ritmo armónico y análisis por números romanos.
- [ ] Forma musical: motivo, frase, período, binaria, ternaria, rondó y canción.
- [ ] Melodía: notas de paso, bordaduras, anticipaciones, retardos y apoyaturas.
- [ ] Transposición para instrumentos y cambio de tonalidad práctico.

### Avanzado — faltantes recomendados

- [x] Modos, dominantes secundarios, intercambio modal, tritono, reharmonización y arreglo.
- [ ] Extensiones 9, 11 y 13 con tensiones disponibles y evitadas.
- [ ] Acordes alterados, dominante alterada y escala disminuida.
- [ ] Sustituciones diatónicas y cromáticas más allá del tritono.
- [ ] Modulación directa, cromática, enarmónica y por secuencia.
- [ ] Conducción de voces a cuatro partes y resolución de tendencias.
- [ ] Contrapunto básico y líneas independientes.
- [ ] Armonía modal aplicada y acordes característicos por modo.
- [ ] Escalas simétricas, bebop, blues y pentatónicas avanzadas.
- [ ] Análisis formal y armónico de repertorio completo.
- [ ] Composición: desarrollo motívico, clímax, textura y forma.
- [ ] Arreglo por instrumentación, registro, densidad y espacio.
- [ ] Improvisación: guía por terceras/séptimas, approach notes y desarrollo rítmico.

### Ruta de guitarra — faltantes recomendados

- [x] Anatomía, afinación, acordes abiertos, ritmo, diapasón, escalas, arpegios, armonía y biblioteca.
- [ ] Postura, relajación, ergonomía y prevención de lesiones.
- [ ] Técnica de mano izquierda: independencia, ligados, cejilla y cambios eficientes.
- [ ] Técnica de mano derecha: púa alternada, fingerstyle, apoyando/tirando y control dinámico.
- [ ] Tablatura, diagramas, digitación y relación TAB–pentagrama.
- [ ] Acordes con cejilla basados en formas E y A; sistema CAGED completo.
- [ ] Power chords y control de cuerdas silenciadas.
- [ ] Capotraste y transposición práctica.
- [ ] Bends, slides, hammer-ons, pull-offs y vibrato.
- [ ] Palm mute, apagados, acentos y articulación rítmica.
- [ ] Triadas en grupos de tres cuerdas e inversiones por el mástil.
- [ ] Drop 2, shell voicings y conducción de voces en guitarra.
- [ ] Pentatónica mayor/menor, blues y conexión horizontal de posiciones.
- [ ] Lectura por posiciones y reconocimiento de notas sin depender de patrones.
- [ ] Afinaciones alternativas, armónicos y mantenimiento básico.
- [ ] Planes de práctica con tempo objetivo y registro de consistencia.

### Evaluación y pedagogía

- [ ] Prueba diagnóstica inicial para recomendar una ruta.
- [ ] Objetivos observables en el 100% de las lecciones.
- [ ] Práctica guiada antes de la evaluación final.
- [ ] Evaluación acumulativa al cerrar cada ruta.
- [ ] Banco de preguntas variable; evitar una única respuesta memorizable.
- [ ] Preguntas auditivas, visuales y de ejecución, no solo conceptuales.
- [ ] Retroalimentación que explique por qué una respuesta es incorrecta.
- [ ] Repetición espaciada de conceptos débiles.
- [ ] Recomendación automática de la siguiente actividad según desempeño.
- [ ] Glosario enlazado y buscador por conceptos, símbolos y sinónimos.
- [ ] Repertorio o ejemplos musicales contextualizados y legalmente utilizables.
- [ ] Certificado local o resumen de competencias por ruta, sin convertirlo en barrera de acceso.

## 4. Checklist de funcionalidad web

### P0 — Estabilidad

- [ ] Implementar aviso “Nueva versión disponible” y botón de actualización controlada del service worker.
- [ ] Evitar acumular todas las versiones históricas dentro de `CORE`; generar una lista única de activos vigente.
- [ ] Añadir una página offline real en lugar de devolver siempre `routes.html` para cualquier fallo.
- [ ] Verificar que HTML, JS y datos usen la misma versión de caché.
- [ ] Mostrar errores de carga de módulos/contenido en lugar de fallar silenciosamente.
- [ ] Cancelar o limitar sonidos superpuestos al cambiar rápidamente de nota.
- [ ] Centralizar Web Audio en un único motor con volumen maestro y función detener.
- [ ] Hacer que “sonido desactivado” intercepte todos los controles actuales y futuros sin mantener una lista manual de selectores.

### Navegación e intuición

- [ ] Mantener una barra de navegación y jerarquía consistentes en las 25 páginas.
- [ ] Añadir breadcrumb y posición de ruta en todas las lecciones.
- [ ] Mostrar claramente anterior, siguiente y volver a ruta en todas las experiencias.
- [ ] Marcar en el catálogo Completada, En curso y Por comenzar usando la versión realmente servida.
- [ ] Conservar filtros y búsqueda al volver desde una lección.
- [ ] Permitir compartir enlaces con tónica, acorde, modo o ejercicio mediante parámetros URL.
- [ ] Añadir historial local de actividades recientes.
- [ ] Evitar que “Explorar”, “Biblioteca” y “Laboratorio” parezcan áreas distintas cuando comparten funciones; clarificar arquitectura.

### Estados y recuperación

- [ ] Diseñar estados loading, empty, error, offline y success para cada laboratorio.
- [ ] Confirmar antes de reiniciar progreso y ofrecer deshacer cuando sea posible.
- [ ] Exportar/importar progreso local en JSON para no perderlo al limpiar el navegador.
- [ ] Definir migración de claves de `localStorage` cuando cambien rutas u órdenes.
- [ ] Mostrar cuándo y dónde se guarda el progreso.
- [ ] Detectar AudioContext suspendido y guiar al usuario con una acción clara.
- [ ] Gestionar pestaña en segundo plano y detener metrónomos/reproducciones largas.

### Accesibilidad WCAG

- [x] Existe skip-link y foco visible en la base visual.
- [x] Existen preferencias de texto grande y movimiento reducido.
- [ ] Garantizar 44×44 px mínimos para todos los objetivos táctiles.
- [ ] Elevar texto funcional a 14 px; reservar 12 px solo para notación auxiliar no crítica.
- [ ] Comprobar contraste AA en tema claro y oscuro, incluidos estados selected/disabled.
- [ ] Añadir nombres accesibles completos a SVG de pentagrama, guitarra y diagramas.
- [ ] Anunciar cambios de nota, acorde, puntuación y reproducción con `aria-live` sin exceso.
- [ ] Asegurar orden de foco lógico en laboratorios que se redibujan.
- [ ] Implementar navegación de teclado tipo roving tabindex en piano, opciones cromáticas y fretboard.
- [ ] No comunicar tónica/destino/acierto únicamente mediante color.
- [ ] Validar zoom a 200% y reflow a 320 CSS px.
- [ ] Probar lectores de pantalla NVDA y VoiceOver.
- [ ] Revisar semántica de tabs, radio groups, switches y botones toggle.

### Calidad técnica y pruebas

- [x] 340 pruebas de dominio superadas.
- [ ] Añadir pruebas E2E de los recorridos principales.
- [ ] Añadir pruebas visuales a 320, 390, 768, 1024 y 1440 px.
- [ ] Añadir axe-core o equivalente a CI.
- [ ] Probar navegación solo con teclado.
- [ ] Probar actualización y uso offline de la PWA.
- [ ] Probar preferencias en todas las páginas, no solo en Ajustes.
- [ ] Probar persistencia y migración de progreso.
- [ ] Añadir lint HTML/CSS/JS y detección de enlaces rotos.
- [ ] Automatizar verificación de discrepancias entre catálogo, rutas, duraciones y contenido real.

## 5. Checklist específico para móvil

### P0

- [ ] Elevar a 44 px las flechas de ruta de 40 px, iconos de cabecera de 42 px y enlaces de cierre de lección de 18–25 px.
- [ ] Corregir selects cuya altura calculada es 18 px en Mapa del diapasón.
- [ ] Elevar etiquetas de 9–13 px a 14 px cuando transmiten estado, navegación o instrucción.
- [ ] Asegurar que la barra inferior no tape snackbars, diálogos, botones ni el último bloque.
- [ ] Considerar `env(safe-area-inset-bottom)` para iPhone.

### Layout e interacción

- [x] No hubo overflow horizontal global en las cinco páginas móviles medidas.
- [ ] Señalizar claramente que filtros, diapasones y tiras cromáticas tienen desplazamiento horizontal.
- [ ] Añadir sombras/fades laterales o texto “Desliza” solo cuando exista contenido oculto.
- [ ] Mantener acciones primarias visibles después de interactuar con diagramas largos.
- [ ] Evaluar barra de acción sticky para reproducir/detener en laboratorios extensos.
- [ ] Evitar teclados verticales de pantalla completa que obliguen a perder el contexto; usar modo expandible/colapsable.
- [ ] Mantener nombres de nota y función visibles en orientación horizontal y vertical.
- [ ] Probar orientación landscape, especialmente piano, pentagrama y fretboard.
- [ ] Evitar dependencia de hover; toda ayuda debe ser accesible por toque y foco.
- [ ] Añadir respuesta visual inmediata al tocar nota/cuerda/tecla, además del sonido.
- [ ] Revisar teclado virtual en búsqueda y selects para que no cubra resultados.
- [ ] Comprobar scroll restoration al volver de una lección.

### Rendimiento móvil

- [ ] Medir Lighthouse en equipo móvil medio.
- [ ] Reducir CSS duplicado y breakpoints inconsistentes; existen cortes en 390, 420, 430, 460, 480, 500, 520, 560, 600, 620, 650, 680, 700, 720, 760, 820, 900, 1000, 1050, 1100, 1150 y 1300 px.
- [ ] Consolidar breakpoints en un sistema estable, por ejemplo 600 / 840 / 1200.
- [ ] Cargar código y estilos por ruta, evitando enviar laboratorios no utilizados.
- [ ] Revisar costo de SVG y regeneración completa del DOM en cada nota.
- [ ] Respetar ahorro de batería: detener animación y audio cuando la página no está visible.

## 6. Orden recomendado de ejecución

### Sprint 1 — Estabilización pública

1. Service worker, actualización de versión y enlaces rotos.
2. Sincronización catálogo–contenido–progreso–duraciones.
3. Auditoría de targets táctiles, texto mínimo y contraste.
4. Pruebas E2E de rutas, lección, audio, progreso y preferencias.

### Sprint 2 — Sistema editorial y pedagógico

1. Migrar todas las lecciones a Markdown/JSON estructurado.
2. Plantilla única: objetivos, explicación, ejemplo, práctica, evaluación y resumen.
3. Banco de evaluaciones y entrenamiento auditivo.
4. Glosario y búsqueda conceptual.

### Sprint 3 — Contenido esencial faltante

1. Ritmo avanzado básico: subdivisión, síncopa, tresillos y signos de repetición.
2. Menor armónica/melódica, cadencias y conducción de voces.
3. Técnica de guitarra, TAB, cejillas/CAGED y articulaciones.
4. Evaluación acumulativa por ruta.

### Sprint 4 — Profundidad y personalización

1. Modulación, extensiones/tensiones y composición.
2. Práctica adaptativa y repetición espaciada.
3. Exportación/importación de progreso.
4. Métricas de uso respetuosas de privacidad, solo si se decide medir aprendizaje.

## 7. Criterio de “100% responsive e intuitiva”

No significa que cada pantalla se vea igual, sino que cada tarea pueda completarse de 320 a 1440 px, con teclado, tacto y lector de pantalla, sin pérdida de información ni controles ocultos. La versión puede considerarse lista cuando:

- [ ] No hay overflow global ni contenido cortado en la matriz de viewports.
- [ ] Todos los objetivos táctiles alcanzan 44×44 px.
- [ ] El texto funcional es legible sin activar texto grande.
- [ ] Los laboratorios conservan contexto, estado y acción principal en móvil.
- [ ] Todos los flujos críticos pasan E2E, teclado y axe sin errores graves.
- [ ] La versión servida coincide siempre con el catálogo actual.
- [ ] Un usuario nuevo entiende en menos de un minuto dónde empezar, cómo practicar y cómo continuar.


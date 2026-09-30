# Guia rapida del codigo - Version final de cinco clases

Esta versión reúne únicamente las cinco clases realmente realizadas. Las clases 4 y 5 tienen el mismo encabezado visual y una secuencia numerada; el cierre muestra el sistema de inventario de una tienda como proyecto final del curso.

## Archivos principales

- `index.html`: estructura de la página. Contiene la portada, las clases 1 a 5 y el proyecto final.
- `styles.css`: apariencia visual y animaciones. Busca comentarios como `Primera pantalla` para ubicar el hero.
- `app.js`: datos de los temas, cambio de pestanas, scroll automatico, tarjetas interactivas de clases y animaciones controladas con JavaScript.

## Primera pantalla

- HTML: empieza en `course-hero`.
- Titulo animado: `#page-title`.
- Tarjeta unificada de identidad y Behance: `.identity-card`.
- Imagen interactiva del curso: `.course-image` y `.course-card`.

## Animaciones importantes

- `initHeroIntro()` en `app.js`: controla el orden de aparicion de la primera pantalla.
- `introTiming` en `app.js`: permite ajustar velocidades sin buscar por todo el archivo.
- `courseCardSlideFromRight` en `styles.css`: entrada de la imagen del curso desde la derecha.
- `titleMicroWave` en `styles.css`: movimiento sutil del titulo.

## Navegacion por scroll

El bloque `screenTargets` en `app.js` define las pantallas donde el scroll hacia abajo se acomoda automaticamente:

1. Primera pantalla.
2. Encabezado de Clase 1.
3. Temas vistos en clase.

Cuando se hace scroll hacia arriba, el comportamiento queda normal.

## Clase 2

- Boton de acceso: menu `Iniciar con el curso`, opcion `Clase 2`.
- Encabezado: seccion `#clase-2`.
- Barra activa de clase: `.class-two-tabs`. Cuando Clase 2 entra en pantalla, el body recibe `is-class-two-active` para ocultar la barra sticky de Clase 1.
- Temas interactivos: `classTwoTopics` en `app.js`, con lista `#class-two-topic-list` y detalle `.class-two-detail-panel`.
- Codigo principal: calculadora de figuras con menu para `Circulo` y `Ovalo`.
- Pendiente documentado: el 3 de julio de 2026 se continua con funcion retorno, escribir CSV, leer CSV y procesar CSV.

## Clase 3

- Boton de acceso: menu `Iniciar con el curso`, opcion `Clase 3`.
- Encabezado: seccion `#clase-3`.
- Barra activa de clase: `.class-three-tabs`. Cuando Clase 3 entra en pantalla, el body recibe `is-class-three-active` para ocultar la barra sticky de Clase 2.
- Temas interactivos: `classThreeTopics` en `app.js`, con lista `#class-three-topic-list` y detalle `.class-three-detail-panel`.
- Contenido integrado: IMC, listas, NumPy, matrices, muestra aleatoria, pandas, DataFrame, nomina, SQLite, memoria, tipos de datos, CSV y practica integradora.
- Codigo principal: ejemplos cortos por tema, con boton `#copy-class-three-code` para copiar el fragmento activo.

## Clase 4

- Boton de acceso: menu `Iniciar con el curso`, opcion `Clase 4`.
- Encabezado: seccion `#clase-4`.
- Estado: sesion registrada del 8 de julio de 2026.
- Contenido: pandas, graficos, diccionarios, conjuntos, SQLite y ejercicios relacionados.
- Barra activa de clase: `.class-four-tabs`.
- Secuencia numerada: `.class-four-board` y `.lesson-step-card`.
- Resultados: medallas olímpicas, datos con SQLite y biblioteca con diccionarios y conjuntos.

## Clase 5

- Boton de acceso: menu `Iniciar con el curso`, opcion `Clase 5`.
- Encabezado: seccion `#clase-5`.
- Barra activa de clase: `.class-five-tabs`.
- Secuencia numerada: `.class-five-board`, con ocho temas explicados y conectados.
- Documento enlazado: `Apuntes/Clase_5_Matplotlib_Simena_Dias.docx`.
- Contenido: Matplotlib, Ciencia de Datos, bibliotecas cientificas, Machine Learning, PLN, vision artificial y visualizacion interactiva.

## Proyecto final

- Contenedor: `#proyecto-final` y `.final-project-showcase`.
- Programa descargable: `proyectos/inventario_pandemoniio.py`.
- Demuestra variables, constantes, entrada y salida, ciclo `while`, decisiones con `if / elif / else`, cálculos, carrito, stock, IVA y método de pago.
- El menú del curso termina en la Clase 5; no se muestran clases futuras o no realizadas.

## Abrir el proyecto completo

- Doble clic en `Abrir_Proyecto_en_Visual_Studio_Code.cmd`.
- El acceso abre `Curso_Programacion_IA.code-workspace`, que incluye toda la carpeta del curso.

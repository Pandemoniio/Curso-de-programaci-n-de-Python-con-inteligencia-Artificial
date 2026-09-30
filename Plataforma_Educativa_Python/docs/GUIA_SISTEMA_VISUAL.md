# Guia del sistema visual - Bitacora de clases

Esta guia resume el sistema visual usado en `DashboardClase_Version_1_2`.
Sirve como referencia para trasladar el estilo, animaciones, jerarquias y componentes a otro proyecto propio.

## Rutas principales

Proyecto base:

```text
C:\03 Archivos Daniel 2026 II\04 Clases de programacion con IA\01 Curso con Codex\DashboardClase_Version_1_2
```

Archivos que debe revisar la otra persona:

```text
DashboardClase_Version_1_2\index.html
DashboardClase_Version_1_2\styles.css
DashboardClase_Version_1_2\app.js
DashboardClase_Version_1_2\assets\Curso.png
DashboardClase_Version_1_2\assets\pandemoniio-logo.svg
```

El sistema visual vive principalmente en `styles.css`.
Las animaciones de entrada, scroll, inclinacion de tarjeta y cambios de estado se coordinan desde `app.js`.

## Personalidad visual

El proyecto mezcla una estetica academica, tecnologica y editorial:

- Fondo claro con degradados frios.
- Azul electrico como color principal.
- Cian, violeta y azul profundo como acentos.
- Tarjetas blancas con bordes suaves y sombras azules.
- Jerarquias tipograficas fuertes, especialmente en titulos.
- Bloques de codigo oscuros para contraste.
- Animaciones de entrada suaves, con sensacion de presentacion interactiva.

El sistema se siente como una bitacora visual de aprendizaje, no como una pagina corporativa tradicional.

## Tokens principales

Estos tokens estan definidos en `:root` dentro de `styles.css`.
Son el corazon del sistema visual.

```css
:root {
  --bg: #f4f8ff;
  --paper: #ffffff;
  --surface: #ffffff;
  --surface-soft: #eef5ff;
  --surface-strong: #dbe8ff;

  --ink: #111b3f;
  --muted: #637092;
  --line: #d7e3ff;
  --line-strong: #aebfff;

  --teal: #18c3df;
  --blue: #315bff;
  --deep-blue: #152b8c;
  --navy: #09144a;
  --sky: #3f8cff;
  --blue-soft: #e6efff;
  --ice: #f7fbff;
  --accent: #315bff;
  --amber: #6f7dff;
  --violet: #7657ff;
  --lime: #00d4b8;
  --success: #18a46f;

  --category-color: #315bff;
  --category-strong: #152b8c;
  --category-rgb: 49, 91, 255;

  --code-bg: #07133a;
  --code-panel: #0c1d50;
  --code-ink: #eef6ff;

  --shadow: 0 24px 58px rgba(35, 79, 199, 0.13);
  --shadow-soft: 0 14px 34px rgba(35, 79, 199, 0.1);

  --title-font: "Arial Black", "Arial Narrow", Impact, Arial, Helvetica, sans-serif;
  --mono-font: "Cascadia Mono", "SFMono-Regular", Consolas, "Courier New", monospace;
}
```

## Paleta de color

### Base

- Fondo general: `#f4f8ff`, `#f7fbff`, `#eef5ff`.
- Superficies: `#ffffff`.
- Texto principal: `#111b3f`.
- Texto secundario: `#637092`.
- Lineas suaves: `#d7e3ff`.

### Acentos

- Azul principal: `#315bff`.
- Azul profundo: `#152b8c`.
- Navy: `#09144a`.
- Cian: `#18c3df`.
- Violeta: `#7657ff`.
- Sky blue: `#3f8cff`.
- Exito: `#18a46f`.

### Codigo

- Fondo codigo: `#07133a`.
- Panel codigo: `#0c1d50`.
- Texto codigo: `#eef6ff`.

## Degradados principales

### Fondo de pagina

```css
background:
  radial-gradient(circle at 12% 8%, rgba(63, 140, 255, 0.16), transparent 30%),
  radial-gradient(circle at 86% 14%, rgba(24, 195, 223, 0.14), transparent 28%),
  linear-gradient(135deg, #f9fcff 0%, #eef5ff 48%, #f7fbff 100%);
```

### Hero principal

```css
background:
  linear-gradient(145deg, #ffffff 0%, #f8fbff 54%, #edf4ff 100%);
```

### Barra de titulo animada

```css
background:
  linear-gradient(90deg, var(--blue), var(--teal), var(--violet), var(--deep-blue), var(--sky), var(--blue));
background-size: 420% 100%;
```

### Botones principales

```css
background: linear-gradient(135deg, var(--blue), var(--deep-blue));
```

### Tarjetas de contenido

```css
background:
  linear-gradient(180deg, #ffffff, rgba(238, 245, 255, 0.9));
```

### Bloques de codigo

```css
background:
  linear-gradient(180deg, #0c1d50, #07133a);
```

## Tipografias

### Fuente base

```css
font-family: Arial, Helvetica, sans-serif;
```

Se usa para parrafos, botones, detalles y textos informativos.

### Titulos principales

```css
font-family: "Arial Black", "Arial Narrow", Impact, Arial, Helvetica, sans-serif;
font-weight: 900;
text-transform: uppercase;
letter-spacing: 0;
```

Los titulos son pesados, compactos y en mayuscula.
Esto crea una identidad fuerte de cartel, portada o presentacion.

### Codigo

```css
font-family: "Cascadia Mono", "SFMono-Regular", Consolas, "Courier New", monospace;
```

## Jerarquia tipografica

### H1

```css
h1 {
  font-family: var(--title-font);
  color: var(--navy);
  font-size: clamp(30px, 2.9vw, 42px);
  font-weight: 900;
  line-height: 0.98;
  text-transform: uppercase;
}
```

### H2

```css
h2 {
  font-family: var(--title-font);
  font-size: 24px;
  font-weight: 900;
  line-height: 1.05;
  text-transform: uppercase;
}
```

### H3

```css
h3 {
  font-size: 18px;
  font-weight: 900;
  line-height: 1.25;
}
```

### Texto secundario

```css
color: var(--muted);
font-size: 16px;
line-height: 1.58;
```

## Contenedores principales

### Shell general

```css
.app-shell {
  width: min(1500px, calc(100% - 28px));
  margin: 0 auto;
  padding: 16px 0 48px;
}
```

### Tarjetas y paneles

Los contenedores principales comparten:

```css
border: 1px solid rgba(174, 191, 255, 0.74);
border-radius: 18px;
box-shadow: var(--shadow);
```

Componentes que usan esta familia:

- `.course-hero`
- `.class-header`
- `.context-grid`
- `.tabs`
- `.topic-panel`
- `.detail-panel`
- `.category-panel`
- `.python-library`
- `.conclusion-panel`
- `.next-class-placeholder`

## Botones

Los botones comparten:

```css
min-height: 44px;
border-radius: 999px;
font-weight: 900;
transition:
  transform 160ms ease,
  box-shadow 160ms ease,
  border-color 160ms ease,
  background 160ms ease;
```

Tipos de botones:

- `.primary-link`: accion principal.
- `.file-link`: accion fuerte, usualmente azul.
- `.secondary-action`: accion secundaria en blanco.
- `.filter-button`: filtros por categoria.
- `.tab-button`: navegacion por tabs.
- `.icon-button`: acciones pequenas como copiar codigo.

Hover tipico:

```css
transform: translateY(-2px);
box-shadow: 0 16px 30px rgba(49, 91, 255, 0.18);
```

## Componentes clave

### Hero

Clases principales:

```text
.course-hero
.hero-copy
.hero-label
#page-title
.hero-title-rule
.subtitle
.hero-actions
.course-image
.course-card
.course-card-inner
```

Comportamiento:

- Entrada escalonada.
- Titulo animado letra por letra.
- Barra de titulo con degradado animado.
- Imagen entra desde la derecha.
- Tarjeta visual flota despues de la intro.
- Tarjeta responde al mouse con inclinacion 3D.

### Tarjeta de identidad

Clase principal:

```text
.identity-card
```

Rasgos:

- Borde izquierdo azul.
- Fondo blanco con blur.
- Logo a la derecha en bloque degradado.
- Hover con elevacion.
- Sombra azul suave.

### Tabs

Clases principales:

```text
.tabs
.tab-button
.tab-panel
.is-active
.is-step-complete
```

Rasgos:

- Tabs tipo control de avance.
- Estado activo.
- Estado completado.
- Entrada del panel con `tabPanelEnter`.

### Tarjetas de temas

Clases principales:

```text
.topic-list
.topic-card
.topic-index
.topic-title
.topic-tags
.tag
```

Rasgos:

- Tarjetas compactas.
- Indice numerado.
- Tags pequenos.
- Hover con elevacion.
- Estado seleccionado.
- Estado completado en verde.
- Secuencia inicial de brillo.

### Panel de detalle

Clases principales:

```text
.detail-panel
.detail-topline
.level-pill
.concept-strip
.concept-chip
.code-layout
.code-panel
.output-panel
.visual-note
```

Rasgos:

- Borde lateral dinamico segun categoria.
- Titular grande.
- Chips de conceptos.
- Layout dividido codigo / salida.
- Animacion `detailReveal` al cambiar contenido.

### Bloques de codigo

Clases principales:

```text
.code-layout
.code-panel
.output-panel
pre code
```

Rasgos:

- Fondo azul noche.
- Texto claro.
- Bordes redondeados.
- Panel de codigo y salida.
- Boton de copiar.

## Animaciones CSS

Animaciones definidas en `styles.css`:

```text
heroRevealUp
heroDecorFloat
imageDecorDrift
imageOrbDrift
heroRuleReveal
heroRuleFlow
heroCharDrop
titleMicroWave
iaColorFlow
heroImageStageReveal
courseCardSlideFromRight
courseCardFloat
buttonShine
buttonPulse
tabPanelEnter
topicSequenceGlow
topicTrackSweep
detailReveal
modalRise
```

## Animaciones principales explicadas

### Intro del hero

La funcion responsable esta en `app.js`:

```text
initHeroIntro()
```

Hace esto:

1. Detecta el hero y el titulo.
2. Divide el titulo en letras.
3. Asigna un indice a cada letra.
4. Calcula tiempos de entrada.
5. Activa clases como:

```text
is-intro-pending
is-intro-ready
is-title-complete
is-intro-complete
```

Claves CSS relacionadas:

```css
.hero-char {
  display: inline-block;
}

.js .course-hero.is-intro-ready .hero-char {
  opacity: 0;
  transform: translateY(-0.82em);
  filter: blur(8px);
  animation: heroCharDrop 640ms cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: calc(var(--intro-title-start, 520ms) + (var(--char-index, 0) * var(--intro-char-step, 44ms)));
}
```

### Palabra IA con degradado animado

Cuando termina la intro, las letras de IA reciben un degradado animado:

```css
.js .course-hero.is-title-complete .hero-ia-char {
  color: transparent;
  background:
    linear-gradient(90deg, var(--blue), var(--teal), var(--violet), var(--deep-blue), var(--sky), var(--blue));
  background-size: 520% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  animation: iaColorFlow 13.5s linear infinite;
}
```

### Tarjeta inclinable

La funcion responsable esta en `app.js`:

```text
initCourseCardTilt()
```

Usa variables CSS:

```css
--tilt-x
--tilt-y
--card-lift
--glow-x
--glow-y
```

La posicion del mouse modifica la rotacion de la tarjeta.
Cuando el puntero sale, la tarjeta vuelve a su estado inicial.

### Revelado por scroll

La funcion responsable:

```text
initScrollReveals()
```

Usa `IntersectionObserver` para agregar:

```text
reveal-on-scroll
reveal-from-left
reveal-from-right
is-revealed
```

Patron CSS:

```css
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 720ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 720ms cubic-bezier(0.16, 1, 0.3, 1),
    filter 720ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

### Secuencia de temas

Funcion:

```text
runTopicIntroSequence()
```

Activa cada tarjeta en orden con:

```text
is-sequence-running
is-sequence-active
```

Animaciones:

```text
topicSequenceGlow
topicTrackSweep
```

### Scroll animado

Funciones:

```text
animatedScrollTo()
animatedScrollToDocumentTop()
easeInOutCubic()
```

Se usan para navegar entre hero, tabs, detalle y clases.

## Easing y tiempos

Easing principal:

```css
cubic-bezier(0.16, 1, 0.3, 1)
```

Tambien se usa:

```css
cubic-bezier(0.19, 1, 0.22, 1)
```

Tiempos frecuentes:

```text
160ms: microinteracciones rapidas.
220ms: hover y cambios suaves.
260ms: estados de UI.
620ms: reveal de paneles.
720ms: reveal por scroll.
820ms: entrada de tab.
880ms: entrada hero secundaria.
2200ms: entrada de tarjeta del curso.
7.2s: flotacion de tarjeta.
13.5s: flujo de color en IA.
18s - 22s: decoracion flotante.
```

## Responsivo

Breakpoints principales:

```css
@media (max-width: 1080px) { ... }
@media (max-width: 780px) { ... }
@media (max-width: 520px) { ... }
```

Reglas generales:

- En desktop se usan grids de dos columnas.
- En tablet y mobile todo baja a una columna.
- Los botones ocupan ancho completo en pantallas pequenas.
- Las tarjetas de tema permiten scroll horizontal en mobile.
- El hero baja su altura y reorganiza imagen/texto.

## Accesibilidad y control de movimiento

El proyecto incluye:

```css
button:focus-visible,
a:focus-visible,
summary:focus-visible {
  outline: 3px solid rgba(49, 91, 255, 0.32);
  outline-offset: 3px;
}
```

Tambien respeta usuarios con reduccion de movimiento:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
    scroll-snap-type: none;
  }

  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

## Funciones JS que conviene migrar

Si el otro proyecto quiere tener interactividad similar, revisar estas funciones en `app.js`:

```text
initHeroIntro()
initCourseCardTilt()
initScrollReveals()
runTopicIntroSequence()
animatedScrollTo()
animatedScrollToDocumentTop()
copyTextWithFeedback()
renderTopicList()
renderDetail()
setTab()
```

No hace falta copiar todo el `app.js` si el otro proyecto no usa clases, temas o tabs.
Se puede migrar por partes:

1. `initHeroIntro()` para intro del hero.
2. `initCourseCardTilt()` para tarjeta 3D.
3. `initScrollReveals()` para apariciones al hacer scroll.
4. `animatedScrollTo()` para navegacion suave.
5. `copyTextWithFeedback()` para botones de copiar codigo.

## Kit minimo para copiar a otro proyecto

Para trasladar la identidad visual sin copiar toda la app, copiar primero:

1. Variables `:root`.
2. Estilos base de `body`, `a`, `button`, `focus-visible`.
3. `.app-shell`.
4. Sistema de tarjetas:

```text
.course-hero
.class-header
.context-card
.topic-card
.detail-panel
.code-layout
.code-panel
.output-panel
```

5. Botones:

```text
.primary-link
.file-link
.secondary-action
.filter-button
.tab-button
.icon-button
```

6. Animaciones:

```text
heroRevealUp
heroCharDrop
heroRuleFlow
iaColorFlow
courseCardSlideFromRight
courseCardFloat
detailReveal
tabPanelEnter
modalRise
```

7. Funciones JS segun necesidad.

## Guia rapida de implementacion en otro proyecto

1. Copiar los tokens `:root`.
2. Definir el fondo global con los degradados.
3. Crear un contenedor `.app-shell`.
4. Crear una primera pantalla tipo `.course-hero`.
5. Aplicar jerarquia de titulos con `var(--title-font)`.
6. Usar tarjetas blancas con borde azul suave y `var(--shadow)`.
7. Reservar fondos oscuros solo para codigo o zonas tecnicas.
8. Agregar animaciones con clases de estado, no directamente con JS inline.
9. Agregar `prefers-reduced-motion`.
10. Revisar responsive en 1080px, 780px y 520px.

## Ruta para entregar a otra persona

Si alguien quiere entender el sistema completo, pasarle esta carpeta:

```text
C:\03 Archivos Daniel 2026 II\04 Clases de programacion con IA\01 Curso con Codex\DashboardClase_Version_1_2
```

Y pedirle que revise en este orden:

1. `index.html`: estructura de componentes.
2. `styles.css`: sistema visual, tokens, responsive y animaciones.
3. `app.js`: estados, interacciones y animaciones coordinadas.
4. `assets`: imagenes y marca.

## Recomendacion final

Para otro proyecto, no conviene copiar todo sin filtrar.
Lo mejor es extraer el lenguaje visual:

- Paleta.
- Tipografia.
- Bordes.
- Sombras.
- Tarjetas.
- Botones.
- Animaciones de entrada.
- Bloques de codigo.

Luego adaptar nombres de clases y estructura al nuevo contenido.

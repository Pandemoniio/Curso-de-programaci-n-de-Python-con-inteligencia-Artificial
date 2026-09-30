# Guía Maestra de Ubicación, Frames y Arquitectura de la Plataforma

Esta guía detalla la correspondencia exacta entre **lo que se ve en la pantalla** (frames, tarjetas, paneles, posiciones) y los **archivos de código** en los diferentes lenguajes (HTML, CSS, JavaScript, Python y SQL). Está escrita especialmente para facilitar la navegación y comprensión del proyecto.

---

## 🧭 Mapa General de la Arquitectura

```text
Plataforma_Educativa_Python/
├── 01_Abrir_Plataforma_Web.cmd         -> Acceso directo para abrir index.html
├── 02_Iniciar_Servidor_Backend.cmd     -> Servidor API REST local en Python (Puerto 8000)
├── index.html                          -> Estructura HTML5 maestra con comentarios por Frame
│
├── assets/
│   ├── css/styles.css                  -> Hojas de estilo CSS3 con comentarios de diseño y layout
│   ├── js/app.js                       -> Lógica interactiva ES6+ con comentarios de estado y eventos
│   ├── images/                         -> Imágenes del curso (Curso.png, clase-1-programacion.png)
│   └── icons/                          -> Vectores e iconografía SVG (pandemoniio-logo.svg, concept-map.svg)
│
├── backend/                            -> Capa de Servicios y Servidor Web (Python)
│   ├── api_server.py                   -> Servidor HTTP REST nativo con endpoints JSON
│   └── database_manager.py             -> Conexión y gestión de base de datos SQLite
│
├── database/                           -> Persistencia Relacional y Archivos de Datos (SQL & CSV)
│   ├── schema.sql                      -> Definición de tablas relacionales comentada en español
│   ├── seed_data.sql                   -> Datos de prueba iniciales para las 5 clases e inventario
│   ├── estudiantes.csv                 -> Censo y calificaciones de estudiantes trabajadas en clase
│   └── plataforma.db                   -> Base de datos SQLite generada
│
├── data/                               -> Datos Estructurados en JSON para consumo desacoplado
│   ├── clases_data.json                -> Metadatos y temario de las 5 clases
│   └── inventario_data.json            -> Catálogo, precios y stock de la Tienda del Caos
│
├── proyectos_python/                   -> Código de las 5 Clases y Proyecto Final en Python
│   ├── clase_1_fundamentos.py          -> Variables, condicionales y ciclos
│   ├── clase_2_figuras_funciones.py    -> Funciones modulares, áreas geométricas y CSV
│   ├── clase_3_numpy_sqlite.py         -> Arrays NumPy, cálculo de IMC masivo y SQLite
│   ├── clase_4_pandas_medallas.py      -> Análisis de medallas olímpicas con Pandas y diccionarios
│   ├── clase_5_matplotlib_ia.py        -> Visualización gráfica con Matplotlib y nociones de IA
│   └── proyecto_final_inventario.py    -> Sistema completo de compras, stock e IVA de la tienda
│
└── docs/                               -> Documentación Pedagógica y Guías de Diseño
    ├── GUIA_DE_UBICACION_Y_FRAMES.md   -> Esta guía detallada
    ├── GUIA_SISTEMA_VISUAL.md          -> Tokens de color, tipografía y componentes
    ├── GUIA_CODIGO.md                  -> Resumen rápido del código de las 5 clases
    └── Clase_5_Matplotlib_Simena_Dias.docx -> Documento de apuntes de la Clase 5
```

---

## 🖥️ Mapeo Visual: De la Pantalla al Código

### [FRAME 01] Hero / Primera Pantalla Principal
* **Qué se ve en pantalla:**
  * Al abrir la bitácora, ocupa el 100% de la ventana (`100vh`).
  * **Izquierda:** Título animado *"Programación, Datos, Visualización e IA"*, subtítulo con mención a la docente Simena Dinas, tarjeta personal de Daniel Pantoja con enlace a su portafolio de Behance, y menú desplegable para saltar a cualquier clase.
  * **Derecha:** Tarjeta visual 3D interactiva (`.course-card`) que gira y tiene sombra en tiempo real al mover el ratón.
* **Archivos y selectores que lo controlan:**
  * **HTML:** Líneas con comentarios `<!-- [FRAME 01 - PORTADA / HERO PRINCIPAL] -->`.
  * **CSS:** En `assets/css/styles.css`, bloque `[FRAME 01] HERO / PORTADA` (`.course-hero`, `.identity-card`, `.course-card`).
  * **JavaScript:** En `assets/js/app.js`, funciones `initHeroIntro()` (animación de entrada) y `initCourseCardTilt()` (giro 3D).

---

### [FRAME 02] Encabezado de Clase 1 y Contexto Metodológico
* **Qué se ve en pantalla:**
  * Al hacer scroll hacia abajo, aparece la cabecera de la Clase 1.
  * Muestra fecha (1 de julio de 2026), docente (Simena Dinas), modalidad virtual y contador de temas.
  * Debajo, una cuadrícula de 3 columnas (`.context-grid`) con las tarjetas teóricas: *Idea base (Algoritmo)*, *Pensamiento Computacional (Descomponer para diseñar)* y *Línea de tiempo histórica*.
* **Archivos y selectores que lo controlan:**
  * **HTML:** `<section id="clase-1" class="class-header">` y `<section class="context-grid">`.
  * **CSS:** `.class-header` y `.context-grid` (con ilustración de fondo `concept-map.svg`).

---

### [FRAME 03] Barra de Navegación Sticky (Pestañas)
* **Qué se ve en pantalla:**
  * Una barra horizontal fija que se 'ancla' a la parte superior de la ventana al deslizar.
  * Contiene el indicador de la sesión actual y tres botones de pestañas: **Temas**, **Python** y **Conclusión**.
* **Archivos y selectores que lo controlan:**
  * **HTML:** `<section class="tabs class-one-tabs">`.
  * **CSS:** `.tabs`, `.tab-button`, `.is-active`.
  * **JavaScript:** Función `setTab(nextTab)` que conmuta qué panel está visible.

---

### [FRAME 04] Panel Dual Interactivo de Temas (Clase 1)
* **Qué se ve en pantalla:**
  * **Columna Izquierda (`.topic-panel`):** Lista interactiva numerada con los 15 temas de la clase. Permite filtrar por categorías.
  * **Columna Derecha (`.detail-panel`):** Visor que cambia en tiempo real al hacer clic en un tema. Muestra el título, nivel de dificultad, resumen explicativo, snippet de código Python con resaltado de sintaxis, botón para copiar y consola con la salida esperada.
* **Archivos y selectores que lo controlan:**
  * **HTML:** `<section class="tab-panel is-active" id="tab-temas">`.
  * **JavaScript:** Arreglo de datos `topics`, funciones `renderTopicList()` y `renderDetail()`.
  * **CSS:** `.topic-panel`, `.detail-panel`, `.code-panel`.

---

### [FRAME 05] Repositorio de Código Python
* **Qué se ve en pantalla:**
  * Al hacer clic en la pestaña "Python", se despliega la librería de ejemplos y ejercicios trabajados en la sesión, listos para estudiar y copiar.
* **Archivos y selectores que lo controlan:**
  * **HTML:** `<section class="tab-panel" id="tab-python">`.
  * **CSS:** `.python-library`.

---

### [FRAME 06] Cierre y Síntesis Pedagógica
* **Qué se ve en pantalla:**
  * La pestaña "Conclusión" recopila las lecciones aprendidas, el puente conceptual hacia la siguiente clase y un botón para avanzar.
* **Archivos y selectores que lo controlan:**
  * **HTML:** `<section class="tab-panel" id="tab-conclusion">`.
  * **CSS:** `.conclusion-panel`.

---

### [FRAMES 07 A 10] Clases 2 a 5
* **Clase 2 (`#clase-2`):** Funciones con `def`, retorno de valores, cálculo de áreas de círculo y óvalo, y manejo de archivos CSV.
* **Clase 3 (`#clase-3`):** Cálculo de IMC, arreglos matriciales con NumPy, DataFrames de Pandas y bases de datos relacionales con SQLite.
* **Clase 4 (`#clase-4`):** Análisis de medallas olímpicas con Pandas, estructuras de datos avanzadas (diccionarios `dict` y conjuntos `set`).
* **Clase 5 (`#clase-5`):** Visualización científica con Matplotlib, introducción a Data Science, Machine Learning y Procesamiento de Lenguaje Natural (PLN).
* **Archivos correspondientes:**
  * Cada clase cuenta con su script independiente y comentado en la carpeta `proyectos_python/`.

---

### [FRAME 11] Proyecto Final: La Tienda del Caos
* **Qué se ve en pantalla:**
  * Bloque de cierre que presenta el software final desarrollado: un sistema completo de compras e inventario para la tienda Pandemoniio.
  * Contiene el código fuente completo desplegable y el enlace directo para descargar el archivo `.py`.
* **Archivo fuente ejecutable:**
  * `proyectos_python/proyecto_final_inventario.py`.

---

### [FRAME 12] Ventana Modal de Felicitaciones
* **Qué se ve en pantalla:**
  * Cuadro de diálogo emergente centrado que aparece al completar la navegación de la Clase 1, con un mensaje motivacional y acceso directo a la Clase 2.
* **Archivos y selectores que lo controlan:**
  * **HTML:** `<div id="completion-modal" class="completion-modal">`.
  * **CSS:** `.completion-modal`, `.completion-card`.
  * **JavaScript:** Funciones `openCompletionModal()` y `closeCompletionModal()`.

---

## 🚀 Cómo Ejecutar la Plataforma

1. **Modo Web Directo (Recomendado para visualización):**
   * Doble clic en `01_Abrir_Plataforma_Web.cmd` (o en el acceso directo de tu Escritorio `Plataforma Educativa Python`).
   * No requiere servidores ni instalaciones previas; abre de inmediato en cualquier navegador.

2. **Modo Full-Stack con Servidor Backend Python:**
   * Doble clic en `02_Iniciar_Servidor_Backend.cmd`.
   * El servidor levantará en `http://localhost:8000` y podrás consumir tanto la página web como los endpoints JSON en `/api/clases`, `/api/inventario` y `/api/estudiantes`.

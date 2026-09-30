# Plataforma Educativa: Bitácora Visual de Programación, Datos e Inteligencia Artificial

- **Estudiante y Desarrollador:** Eivar Daniel Pantoja Carvajal (Diseñador Gráfico & Desarrollador)
- **Docente del Curso:** Simena Dinas
- **Institución:** Fundación Universitaria de Popayán (FUP)

---

## 🌟 Resumen del Proyecto

Esta plataforma reúne en una interfaz pedagógica e interactiva todos los conocimientos, ejercicios prácticos y proyectos desarrollados durante el curso de programación. 

Ha sido estructurada con una **arquitectura modular multi-lenguaje**, pensada para una futura implementación escalable (frontend web, API backend en Python, base de datos relacional SQL y datasets JSON/CSV), donde cada archivo incluye **comentarios didácticos en español** que detallan la función de cada frame, posición y componente visual.

---

## 📂 Organización de Carpetas

| Carpeta / Archivo | Lenguaje | Propósito y Contenido |
| :--- | :--- | :--- |
| [`index.html`](./index.html) | HTML5 | Estructura web maestra comentada por cada **FRAME** visual (del Frame 01 al 12). |
| [`assets/css/styles.css`](./assets/css/styles.css) | CSS3 | Hojas de estilo organizadas con tokens de diseño, layout grid/flex y animaciones 3D. |
| [`assets/js/app.js`](./assets/js/app.js) | JavaScript ES6+ | Lógica interactiva: animación del hero, giro 3D de la tarjeta, pestañas y visor dinámico. |
| [`backend/`](./backend/) | Python | Servidor API REST nativo (`api_server.py`) y gestor de base de datos (`database_manager.py`). |
| [`database/`](./database/) | SQL / CSV | Modelo relacional de tablas (`schema.sql`), datos de prueba (`seed_data.sql`) y CSV. |
| [`data/`](./data/) | JSON | Datos estructurados desacoplados para clases (`clases_data.json`) e inventario. |
| [`proyectos_python/`](./proyectos_python/) | Python | Scripts independientes y comentados de cada una de las 5 clases y el proyecto final. |
| [`docs/`](./docs/) | Markdown / Docx | Guía maestra de frames y posiciones, guías visuales y de código, y apuntes de clase. |

---

## 🚀 Opciones de Ejecución

1. **Abrir la plataforma web de inmediato:**
   * Haz doble clic en [`01_Abrir_Plataforma_Web.cmd`](./01_Abrir_Plataforma_Web.cmd) o en el acceso directo de tu Escritorio **Plataforma Educativa Python**.
2. **Iniciar el servidor API local (Python):**
   * Haz doble clic en [`02_Iniciar_Servidor_Backend.cmd`](./02_Iniciar_Servidor_Backend.cmd). Accede en tu navegador a `http://localhost:8000`.

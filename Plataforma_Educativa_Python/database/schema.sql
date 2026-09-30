-- =============================================================================
-- ESQUEMA RELACIONAL DE BASE DE DATOS (SQLITE / POSTGRESQL COMPATIBLE)
-- Plataforma Educativa de Programación con Python e Inteligencia Artificial
-- Estudiante: Eivar Daniel Pantoja Carvajal | Docente: Simena Dinas
-- =============================================================================

-- TABLA 1: CURSOS GENERALES
-- Almacena la información institucional del programa educativo.
CREATE TABLE IF NOT EXISTS cursos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre VARCHAR(150) NOT NULL,
    codigo VARCHAR(50) UNIQUE NOT NULL,
    descripcion TEXT,
    institucion VARCHAR(100) DEFAULT 'Fundación Universitaria de Popayán (FUP)'
);

-- TABLA 2: CLASES / SESIONES DEL CURSO
-- Representa cada una de las 5 sesiones desarrolladas en la bitácora.
CREATE TABLE IF NOT EXISTS clases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    curso_id INTEGER REFERENCES cursos(id) ON DELETE CASCADE,
    numero_clase INTEGER NOT NULL,
    titulo VARCHAR(200) NOT NULL,
    docente VARCHAR(100) NOT NULL,
    fecha DATE NOT NULL,
    modalidad VARCHAR(50) DEFAULT 'Virtual',
    resumen_pedagogico TEXT
);

-- TABLA 3: TEMAS Y LECCIONES POR CLASE
-- Contiene cada uno de los conceptos explicados, con su código y nivel de dificultad.
CREATE TABLE IF NOT EXISTS temas_leccion (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    clase_id INTEGER REFERENCES clases(id) ON DELETE CASCADE,
    categoria VARCHAR(50) NOT NULL,
    titulo VARCHAR(150) NOT NULL,
    nivel_dificultad VARCHAR(20) CHECK (nivel_dificultad IN ('Esencial', 'Intermedio', 'Avanzado')),
    resumen TEXT NOT NULL,
    codigo_ejemplo TEXT,
    salida_consola TEXT
);

-- TABLA 4: ESTUDIANTES REGISTRADOS
-- Almacena el censo de estudiantes que participan en la plataforma.
CREATE TABLE IF NOT EXISTS estudiantes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre_completo VARCHAR(120) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    carrera VARCHAR(100) DEFAULT 'Diseño Gráfico',
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TABLA 5: PRODUCTOS DEL PROYECTO FINAL (TIENDA DEL CAOS)
-- Modelo relacional para los artículos de merchandising, ropa y arte digital.
CREATE TABLE IF NOT EXISTS productos_inventario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    codigo_producto INTEGER UNIQUE NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    nombre VARCHAR(150) NOT NULL,
    precio INTEGER NOT NULL CHECK (precio >= 0),
    stock INTEGER NOT NULL CHECK (stock >= 0),
    alerta_stock_minimo INTEGER DEFAULT 2
);

-- ÍNDICES PARA OPTIMIZAR BÚSQUEDAS RÁPIDAS
CREATE INDEX IF NOT EXISTS idx_clases_numero ON clases(numero_clase);
CREATE INDEX IF NOT EXISTS idx_temas_categoria ON temas_leccion(categoria);
CREATE INDEX IF NOT EXISTS idx_productos_codigo ON productos_inventario(codigo_producto);

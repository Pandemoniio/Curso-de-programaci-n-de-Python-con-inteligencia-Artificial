-- =============================================================================
-- DATOS INICIALES DE PRUEBA (SEED DATA)
-- Carga inicial con los datos de las 5 clases y el inventario del proyecto.
-- =============================================================================

INSERT OR IGNORE INTO cursos (id, nombre, codigo, descripcion) VALUES 
(1, 'Programacion, Datos, Visualizacion e Inteligencia Artificial', 'FUP-PYTHON-2026', 'Curso introductorio y practico de desarrollo computacional y ciencia de datos.');

INSERT OR IGNORE INTO clases (id, curso_id, numero_clase, titulo, docente, fecha, modalidad, resumen_pedagogico) VALUES
(1, 1, 1, 'Fundamentos de pensamiento computacional y Python', 'Simena Dinas', '2026-07-01', 'Virtual', 'Recetas de instrucciones, variables, condicionales y ciclos.'),
(2, 1, 2, 'Funciones: area y perimetro de circulo y ovalo', 'Simena Dinas', '2026-07-02', 'Virtual', 'Funciones reutilizables con retorno y manejo de archivos CSV.'),
(3, 1, 3, 'IMC, NumPy, pandas, DataFrame y bases de datos', 'Simena Dinas', '2026-07-03', 'Virtual', 'Arreglos matriciales, tablas con Pandas y consultas relacionales.'),
(4, 1, 4, 'Pandas, graficos, diccionarios y conjuntos', 'Simena Dinas', '2026-07-08', 'Virtual', 'Medallero olimpico, analisis de datos y colecciones avanzadas.'),
(5, 1, 5, 'Matplotlib, Ciencia de Datos e introduccion a IA', 'Simena Dinas', '2026-07-10', 'Virtual', 'Graficacion cientifica, Machine Learning y procesamiento de lenguaje natural.');

INSERT OR IGNORE INTO productos_inventario (codigo_producto, categoria, nombre, precio, stock, alerta_stock_minimo) VALUES
(1, 'Papeleria', 'Sticker individual con diseno aleatorio', 3000, 10, 2),
(2, 'Papeleria', 'Pack de stickers mini x5', 12000, 8, 2),
(3, 'Papeleria', 'Libreta de bolsillo para bocetos', 18000, 5, 2),
(4, 'Ropa', 'Camiseta con estampado Pandemoniio', 65000, 4, 2),
(5, 'Ropa', 'Hoodie oversize edicion limitada', 140000, 3, 2),
(6, 'Escritorio', 'Pad mouse con ilustracion', 32000, 5, 2),
(7, 'Escritorio', 'Taza ceramica con ilustracion del caos', 26000, 7, 2),
(8, 'Accesorios', 'Tote bag para llevar ideas y caos', 38000, 6, 2),
(9, 'Especiales', 'Caja Taller del Caos', 120000, 2, 2),
(10, 'Digital', 'Overlay digital para Twitch modo rojo', 120000, 6, 2);

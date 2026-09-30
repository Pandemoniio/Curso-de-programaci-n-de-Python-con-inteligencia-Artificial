# =============================================================================
# GESTOR DE BASE DE DATOS (SQLITE 3) - PLATAFORMA EDUCATIVA
# Autor: Eivar Daniel Pantoja Carvajal | Docente: Simena Dinas
#
# DESCRIPCIÓN:
# Módulo que automatiza la creación, inicialización y consultas de la base de datos
# relacional para la plataforma del curso.
# =============================================================================

import sqlite3
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DB_PATH = os.path.join(BASE_DIR, "database", "plataforma.db")
SCHEMA_PATH = os.path.join(BASE_DIR, "database", "schema.sql")
SEED_PATH = os.path.join(BASE_DIR, "database", "seed_data.sql")

def inicializar_base_de_datos():
    '''Crea la base de datos SQLite y ejecuta los scripts de esquema y datos.'''
    print(f"Conectando a base de datos en: {DB_PATH}")
    conexion = sqlite3.connect(DB_PATH)
    cursor = conexion.cursor()

    # Ejecutar esquema de tablas
    if os.path.exists(SCHEMA_PATH):
        with open(SCHEMA_PATH, "r", encoding="utf-8") as f:
            cursor.executescript(f.read())
        print("-> Tablas y relaciones creadas exitosamente.")

    # Insertar datos de prueba
    if os.path.exists(SEED_PATH):
        with open(SEED_PATH, "r", encoding="utf-8") as f:
            cursor.executescript(f.read())
        print("-> Datos iniciales cargados exitosamente.")

    conexion.commit()
    conexion.close()
    print("Base de datos lista para su uso.")

def consultar_clases():
    '''Consulta y lista todas las clases registradas en el sistema.'''
    conexion = sqlite3.connect(DB_PATH)
    cursor = conexion.cursor()
    cursor.execute("SELECT numero_clase, titulo, docente, modalidad FROM clases ORDER BY numero_clase ASC")
    filas = cursor.fetchall()
    conexion.close()
    return filas

def consultar_clases_dict():
    '''Consulta y retorna todas las clases en formato diccionario serializable para la API.'''
    conexion = sqlite3.connect(DB_PATH)
    conexion.row_factory = sqlite3.Row
    cursor = conexion.cursor()
    cursor.execute("SELECT id, numero_clase, titulo, docente, fecha, modalidad, resumen_pedagogico FROM clases ORDER BY numero_clase ASC")
    filas = [dict(fila) for fila in cursor.fetchall()]
    conexion.close()
    return filas

def consultar_productos():
    '''Consulta el inventario de la Tienda del Caos.'''
    conexion = sqlite3.connect(DB_PATH)
    cursor = conexion.cursor()
    cursor.execute("SELECT codigo_producto, nombre, categoria, precio, stock FROM productos_inventario ORDER BY codigo_producto ASC")
    filas = cursor.fetchall()
    conexion.close()
    return filas

def consultar_productos_dict():
    '''Consulta y retorna el catálogo de productos en formato diccionario para la API.'''
    conexion = sqlite3.connect(DB_PATH)
    conexion.row_factory = sqlite3.Row
    cursor = conexion.cursor()
    cursor.execute("SELECT id, codigo_producto, categoria, nombre, precio, stock, alerta_stock_minimo FROM productos_inventario ORDER BY codigo_producto ASC")
    filas = [dict(fila) for fila in cursor.fetchall()]
    conexion.close()
    return filas

def consultar_estudiantes_dict():
    '''Consulta los estudiantes registrados en la base de datos.'''
    conexion = sqlite3.connect(DB_PATH)
    conexion.row_factory = sqlite3.Row
    cursor = conexion.cursor()
    cursor.execute("SELECT id, nombre_completo, correo, carrera, fecha_registro FROM estudiantes ORDER BY id ASC")
    filas = [dict(fila) for fila in cursor.fetchall()]
    conexion.close()
    return filas

if __name__ == "__main__":
    inicializar_base_de_datos()
    print("\n--- Listado de Clases Registradas ---")
    for clase in consultar_clases():
        print(f"Clase {clase[0]}: {clase[1]} | Docente: {clase[2]} ({clase[3]})")
    print("\n--- Inventario Disponible ---")
    for prod in consultar_productos():
        print(f"[{prod[0]}] {prod[1]} ({prod[2]}) - ${prod[3]} | Stock: {prod[4]}")

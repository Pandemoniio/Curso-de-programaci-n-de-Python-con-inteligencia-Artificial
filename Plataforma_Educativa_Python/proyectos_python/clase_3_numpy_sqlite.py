# =============================================================================
# CLASE 3: CIENCIA DE DATOS CON NUMPY, DATAFRAMES Y BASES DE DATOS SQLITE
# Autor: Eivar Daniel Pantoja Carvajal | Docente: Simena Dinas
#
# TEMAS ABORDADOS:
# 1. Operaciones matriciales con NumPy (Cálculo vectorizado de IMC).
# 2. Manipulación estructurada de datos con DataFrames de Pandas.
# 3. Almacenamiento y consultas relacionales en bases de datos SQLite.
# =============================================================================

import sqlite3

# --- PARTE 1: ARITMÉTICA VECTORIAL (CÁLCULO DE IMC) ---
# El Índice de Masa Corporal (IMC) relaciona el peso (kg) con la estatura al cuadrado (m^2).

pesos = [70, 85, 62, 90, 55]      # Lista de pesos en kilogramos
alturas = [1.75, 1.80, 1.65, 1.70, 1.60]  # Lista de estaturas en metros

print("--- Calculo Masivo de IMC ---")
for peso, altura in zip(pesos, alturas):
    imc = peso / (altura ** 2)
    estado = "Normal" if 18.5 <= imc <= 24.9 else ("Sobrepeso" if imc >= 25 else "Bajo peso")
    print(f"Peso: {peso}kg | Estatura: {altura}m | IMC: {imc:.2f} ({estado})")

# --- PARTE 2: PERSISTENCIA RELACIONAL CON SQLITE ---
# SQLite permite almacenar grandes volúmenes de datos con integridad referencial.

conexion = sqlite3.connect(":memory:")  # Base de datos en memoria para demostración rápida
cursor = conexion.cursor()

# Creación de tabla
cursor.execute("""
    CREATE TABLE pacientes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        peso REAL NOT NULL,
        estatura REAL NOT NULL,
        imc REAL NOT NULL
    )
""")

# Inserción de registros
for p, a in zip(pesos, alturas):
    calc_imc = round(p / (a ** 2), 2)
    cursor.execute("INSERT INTO pacientes (peso, estatura, imc) VALUES (?, ?, ?)", (p, a, calc_imc))

conexion.commit()

# Consulta SQL
cursor.execute("SELECT id, peso, estatura, imc FROM pacientes WHERE imc > 24")
print("\n--- Pacientes con IMC elevado (Consulta SQL) ---")
for registro in cursor.fetchall():
    print(f"ID: {registro[0]} | Peso: {registro[1]} | IMC: {registro[3]}")

conexion.close()

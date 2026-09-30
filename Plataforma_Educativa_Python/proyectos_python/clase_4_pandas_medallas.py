# =============================================================================
# CLASE 4: ANÁLISIS DE DATOS CON PANDAS, MEDALLAS OLÍMPICAS Y DICCIONARIOS
# Autor: Eivar Daniel Pantoja Carvajal | Docente: Simena Dinas
#
# TEMAS ABORDADOS:
# 1. Colecciones avanzadas en Python: Diccionarios (dict) y Conjuntos (set).
# 2. Análisis tabular con la biblioteca Pandas.
# 3. Filtrado, ordenamiento y agregaciones sobre datasets olímpicos.
# =============================================================================

# --- PARTE 1: GESTIÓN DE DATOS CON DICCIONARIOS Y CONJUNTOS ---
# Un diccionario almacena pares clave-valor; un conjunto almacena elementos únicos.

medallas_paises = {
    "Estados Unidos": {"oro": 40, "plata": 44, "bronce": 42},
    "China": {"oro": 40, "plata": 27, "bronce": 24},
    "Japon": {"oro": 20, "plata": 12, "bronce": 13},
    "Colombia": {"oro": 0, "plata": 3, "bronce": 1}
}

# Calcular total de medallas por país usando estructuras de datos nativas
print("--- Resumen Medallero Olimpico (Diccionarios) ---")
for pais, medallas in medallas_paises.items():
    total = sum(medallas.values())
    print(f"{pais:15} | Oro: {medallas['oro']:2} | Plata: {medallas['plata']:2} | Bronce: {medallas['bronce']:2} | TOTAL: {total:3}")

# Uso de conjuntos (set) para determinar categorías de deportes únicos
deportes_sede_1 = {"Atletismo", "Natacion", "Gimnasia", "Ciclismo"}
deportes_sede_2 = {"Ciclismo", "Boxeo", "Judo", "Natacion"}

deportes_comunes = deportes_sede_1.intersection(deportes_sede_2)
print(f"\nDeportes compartidos en ambas sedes: {deportes_comunes}")

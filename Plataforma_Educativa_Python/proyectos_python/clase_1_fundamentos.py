# =============================================================================
# CLASE 1: FUNDAMENTOS DE PENSAMIENTO COMPUTACIONAL Y PYTHON
# Autor: Eivar Daniel Pantoja Carvajal | Docente: Simena Dinas
#
# TEMAS ABORDADOS:
# 1. Pensamiento computacional: Descomposición, reconocimiento de patrones y algoritmos.
# 2. Variables y tipos de datos: int, float, str, bool.
# 3. Operadores matemáticos y lógicos.
# 4. Estructuras de control condicional: if, elif, else.
# 5. Estructuras repetitivas: ciclos while y for.
# =============================================================================

# --- PARTE 1: DEFINICIÓN DE VARIABLES Y TIPOS DE DATOS ---
nombre_estudiante = "Daniel Pantoja"  # str: Texto o cadena de caracteres
edad = 25                             # int: Número entero
estatura = 1.75                       # float: Número decimal
es_matriculado = True                 # bool: Booleano (Verdadero o Falso)

print(f"Estudiante: {nombre_estudiante} | Edad: {edad} | Activo: {es_matriculado}")

# --- PARTE 2: CONDICIONALES (TOMA DE DECISIONES) ---
# Un algoritmo no es más que una serie de decisiones lógicas basadas en condiciones.
nota_final = 4.5

if nota_final >= 4.0:
    clasificacion = "Excelente desempeno academico"
elif nota_final >= 3.0:
    clasificacion = "Aprobado satisfactoriamente"
else:
    clasificacion = "Requiere refuerzo pedagogico"

print(f"Resultado de la evaluacion: {clasificacion}")

# --- PARTE 3: CICLOS Y COLECCIONES (REPETICIÓN AUTOMATIZADA) ---
# Automatizar tareas repetitivas es la base de la computación eficiente.
lenguajes = ["Python", "HTML5", "CSS3", "SQL", "JavaScript"]

print("\n--- Herramientas del Curso ---")
for i, lenguaje in enumerate(lenguajes, start=1):
    print(f"Modulo {i}: {lenguaje}")

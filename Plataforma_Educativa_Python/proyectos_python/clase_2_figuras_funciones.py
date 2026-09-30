# =============================================================================
# CLASE 2: FUNCIONES MODULARES, CÁLCULO GEOMÉTRICO Y ARCHIVOS CSV
# Autor: Eivar Daniel Pantoja Carvajal | Docente: Simena Dinas
#
# TEMAS ABORDADOS:
# 1. Definición de funciones reutilizables con 'def'.
# 2. Paso de parámetros y retorno de resultados con 'return'.
# 3. Cálculo de área y perímetro para círculo y óvalo.
# 4. Manejo de archivos de datos: Escritura y lectura de archivos CSV.
# =============================================================================

import math
import csv
import os

# --- PARTE 1: FUNCIONES MATEMÁTICAS PURAS ---

def calcular_circulo(radio: float):
    """
    Calcula el área y perímetro de un círculo dado su radio.
    Fórmula de Área: pi * r^2
    Fórmula de Perímetro: 2 * pi * r
    """
    area = math.pi * (radio ** 2)
    perimetro = 2 * math.pi * radio
    return round(area, 2), round(perimetro, 2)

def calcular_ovalo(semi_eje_mayor: float, semi_eje_menor: float):
    """
    Calcula el área y una aproximación del perímetro (fórmula de Ramanujan) de un óvalo / elipse.
    Fórmula de Área: pi * a * b
    """
    a, b = semi_eje_mayor, semi_eje_menor
    area = math.pi * a * b
    perimetro_aprox = math.pi * (3 * (a + b) - math.sqrt((3 * a + b) * (a + 3 * b)))
    return round(area, 2), round(perimetro_aprox, 2)

# Prueba de las funciones
area_c, perim_c = calcular_circulo(5.0)
print(f"Circulo (radio 5) -> Area: {area_c} cm2 | Perimetro: {perim_c} cm")

# --- PARTE 2: PERSISTENCIA EN ARCHIVOS CSV ---
# Las funciones nos permiten guardar y procesar registros masivos en formato tabular.

def guardar_reporte_csv(nombre_archivo: str, datos: list):
    """Guarda una lista de diccionarios en un archivo CSV legible por Excel."""
    with open(nombre_archivo, mode="w", newline="", encoding="utf-8") as archivo:
        escritor = csv.writer(archivo)
        escritor.writerow(["Figura", "Parametro_1", "Parametro_2", "Area", "Perimetro"])
        for fila in datos:
            escritor.writerow(fila)
    print(f"Reporte guardado exitosamente en: {nombre_archivo}")

# Ejemplo de uso
figuras_datos = [
    ["Circulo", 5.0, 0, area_c, perim_c],
    ["Circulo", 10.0, 0, 314.16, 62.83],
    ["Ovalo", 8.0, 4.0, 100.53, 39.06]
]

guardar_reporte_csv("reporte_figuras.csv", figuras_datos)

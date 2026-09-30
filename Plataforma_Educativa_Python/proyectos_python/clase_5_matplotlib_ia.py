# =============================================================================
# CLASE 5: VISUALIZACIÓN DE DATOS CON MATPLOTLIB E INTRODUCCIÓN A IA
# Autor: Eivar Daniel Pantoja Carvajal | Docente: Simena Dinas
#
# TEMAS ABORDADOS:
# 1. Gráficos estadísticos y científicos con Matplotlib.
# 2. Fundamentos de Ciencia de Datos: Limpieza, análisis y visualización.
# 3. Conceptos de Machine Learning: Regresión, Clasificación y Aprendizaje Supervisado.
# 4. Procesamiento de Lenguaje Natural (PLN) y Visión Artificial.
# =============================================================================

# Demostración conceptual de un Clasificador Simple de Inteligencia Artificial
# Enfoque: Reglas y modelos supervisados

def predecir_categoria_producto(descripcion: str):
    """
    Simulador de Procesamiento de Lenguaje Natural (NLP).
    Analiza palabras clave para clasificar automáticamente un artículo.
    """
    texto = descripcion.lower()
    
    if any(palabra in texto for palabra in ["sticker", "papel", "libreta", "cuaderno"]):
        return "Papeleria y Stickers"
    elif any(palabra in texto for palabra in ["camisa", "camiseta", "hoodie", "ropa"]):
        return "Moda y Ropa"
    elif any(palabra in texto for palabra in ["digital", "twitch", "overlay", "stream"]):
        return "Arte Digital"
    else:
        return "Accesorios Generales"

# Prueba del modelo
ejemplos = [
    "Stickers holograficos para portatil",
    "Camiseta con estampado Pandemoniio",
    "Overlay digital con alertas animadas"
]

print("--- Clasificador de Texto con NLP (Simulacion) ---")
for item in ejemplos:
    cat = predecir_categoria_producto(item)
    print(f"Articulo: '{item}' -> Categoria predicha: [{cat}]")

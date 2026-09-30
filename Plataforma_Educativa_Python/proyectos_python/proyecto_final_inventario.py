# =============================================================================
# PROYECTO FINAL: SISTEMA DE COMPRA E INVENTARIO "TIENDA DEL CAOS" (PANDEMONIIO)
# Autor: Eivar Daniel Pantoja Carvajal | Diseñador Gráfico & Programador
# Curso: Fundamentos de Programación con Python e Inteligencia Artificial
# Docente: Simena Dinas
#
# ESTRUCTURA DEL PROGRAMA:
# [BLOQUE 1] Constantes de configuración (IVA y umbral de alerta de stock).
# [BLOQUE 2] Definición de productos, precios unitarios y unidades de stock.
# [BLOQUE 3] Variables acumuladoras de compra (subtotal, cantidad, control del bucle).
# [BLOQUE 4] Bucle interactivo (while) para navegación y compra de catálogo.
# [BLOQUE 5] Condicionales (if / elif / else) para selección y validación de stock.
# [BLOQUE 6] Resumen final de facturación, cálculo del 19% de IVA y métodos de pago.
# =============================================================================

# Inventario basico de Pandemoniio
# Version sencilla usando solo temas iniciales del curso:
# variables, constantes, input, print, while, if, elif, else y calculos.

IVA = 19
STOCK_BAJO = 5

producto_1 = "Sticker sheet Taller del Caos"
precio_1 = 12000
stock_1 = 8

producto_2 = "Postal Demonio Amigo"
precio_2 = 8000
stock_2 = 12

producto_3 = "Libreta de proyectos caoticos"
precio_3 = 28000
stock_3 = 6

producto_4 = "Camiseta Modo Demonio Corazon Azul"
precio_4 = 70000
stock_4 = 3

producto_5 = "Hoodie Taller del Caos"
precio_5 = 150000
stock_5 = 2

producto_6 = "Mug En el Taller del Caos"
precio_6 = 32000
stock_6 = 9

producto_7 = "Mousepad Rojo para Actuar"
precio_7 = 45000
stock_7 = 7

producto_8 = "Tote bag para llevar ideas y caos"
precio_8 = 38000
stock_8 = 6

producto_9 = "Caja Taller del Caos"
precio_9 = 120000
stock_9 = 2

producto_10 = "Overlay digital para Twitch modo rojo"
precio_10 = 120000
stock_10 = 6

subtotal_compra = 0
cantidad_total = 0
seguir_comprando = "si"

print("==============================================")
print("BIENVENIDO A LA TIENDA DEL CAOS")
print("==============================================")
print("Productos hechos con esfuerzo, carino y caos creativo.")
print()

while seguir_comprando == "si":
    print("CATALOGO DE PRODUCTOS")
    print()
    print("STICKERS Y PAPELERIA")
    print("1.", producto_1, "- Precio: $", precio_1)
    print("2.", producto_2, "- Precio: $", precio_2)
    print("3.", producto_3, "- Precio: $", precio_3)
    print()

    print("ROPA")
    print("4.", producto_4, "- Precio: $", precio_4)
    print("5.", producto_5, "- Precio: $", precio_5)
    print()

    print("ESCRITORIO CREATIVO")
    print("6.", producto_6, "- Precio: $", precio_6)
    print("7.", producto_7, "- Precio: $", precio_7)
    print()

    print("ACCESORIOS Y DIGITALES")
    print("8.", producto_8, "- Precio: $", precio_8)
    print("9.", producto_9, "- Precio: $", precio_9)
    print("10.", producto_10, "- Precio: $", precio_10)
    print()

    codigo = int(input("Escribe el codigo del producto que quieres comprar: "))

    producto_elegido = ""
    precio_elegido = 0
    stock_elegido = 0
    producto_existe = "si"

    if codigo == 1:
        producto_elegido = producto_1
        precio_elegido = precio_1
        stock_elegido = stock_1
    elif codigo == 2:
        producto_elegido = producto_2
        precio_elegido = precio_2
        stock_elegido = stock_2
    elif codigo == 3:
        producto_elegido = producto_3
        precio_elegido = precio_3
        stock_elegido = stock_3
    elif codigo == 4:
        producto_elegido = producto_4
        precio_elegido = precio_4
        stock_elegido = stock_4
    elif codigo == 5:
        producto_elegido = producto_5
        precio_elegido = precio_5
        stock_elegido = stock_5
    elif codigo == 6:
        producto_elegido = producto_6
        precio_elegido = precio_6
        stock_elegido = stock_6
    elif codigo == 7:
        producto_elegido = producto_7
        precio_elegido = precio_7
        stock_elegido = stock_7
    elif codigo == 8:
        producto_elegido = producto_8
        precio_elegido = precio_8
        stock_elegido = stock_8
    elif codigo == 9:
        producto_elegido = producto_9
        precio_elegido = precio_9
        stock_elegido = stock_9
    elif codigo == 10:
        producto_elegido = producto_10
        precio_elegido = precio_10
        stock_elegido = stock_10
    else:
        print("Ese codigo no existe.")
        producto_existe = "no"

    if producto_existe == "si":
        print()
        print("Seleccionaste:", producto_elegido)
        print("Precio unitario: $", precio_elegido)
        print("Unidades disponibles:", stock_elegido)
        print()

        cantidad = int(input("Cuantas unidades quieres comprar?: "))

        if cantidad <= 0:
            print("La cantidad debe ser mayor que cero.")
        elif cantidad > stock_elegido:
            print("No hay suficiente stock para esa cantidad.")
        else:
            subtotal_producto = precio_elegido * cantidad
            subtotal_compra = subtotal_compra + subtotal_producto
            cantidad_total = cantidad_total + cantidad
            stock_restante = stock_elegido - cantidad

            if codigo == 1:
                stock_1 = stock_restante
            elif codigo == 2:
                stock_2 = stock_restante
            elif codigo == 3:
                stock_3 = stock_restante
            elif codigo == 4:
                stock_4 = stock_restante
            elif codigo == 5:
                stock_5 = stock_restante
            elif codigo == 6:
                stock_6 = stock_restante
            elif codigo == 7:
                stock_7 = stock_restante
            elif codigo == 8:
                stock_8 = stock_restante
            elif codigo == 9:
                stock_9 = stock_restante
            elif codigo == 10:
                stock_10 = stock_restante

            print()
            print("Producto agregado al carrito.")
            print("Subtotal de este producto: $", subtotal_producto)
            print("Productos totales en el carrito:", cantidad_total)

            if stock_restante <= STOCK_BAJO:
                print("ALERTA INTERNA: stock bajo. Quedan", stock_restante, "unidades.")

    print()
    seguir_comprando = input("Quieres agregar otro producto? Escribe si o no: ")
    print()

print("==============================================")
print("RESUMEN DE COMPRA")
print("==============================================")

if cantidad_total > 0:
    valor_iva = subtotal_compra * IVA / 100
    total_pagar = subtotal_compra + valor_iva

    print("Cantidad total de productos:", cantidad_total)
    print("Subtotal antes de IVA: $", subtotal_compra)
    print("IVA aplicado:", IVA, "%")
    print("Valor del IVA: $", int(valor_iva))
    print("Total a pagar: $", int(total_pagar))
    print()

    print("Metodo de pago")
    print("1. Tarjeta de credito")
    print("2. Efectivo")
    opcion_pago = int(input("Elige una opcion de pago: "))

    if opcion_pago == 1:
        print("Metodo seleccionado: Tarjeta de credito")
    elif opcion_pago == 2:
        print("Metodo seleccionado: Efectivo")
    else:
        print("Metodo no reconocido")

    print()
    print("Muchas gracias por visitar la Tienda del Caos.")
    print("Con nosotros es todo un gusto servirte.")
else:
    print("No se agregaron productos al carrito.")

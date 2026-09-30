// =============================================================================
// CONTROLADOR INTERACTIVO (JavaScript ES6+) - PLATAFORMA EDUCATIVA
// Autor: Eivar Daniel Pantoja Carvajal | Docente: Simena Dinas
//
// ARQUITECTURA DE MÓDULOS EN ESTE ARCHIVO:
// 1. [DATOS EN MEMORIA] Contenido pedagógico de cada clase (temas, código, salidas).
// 2. [ESTADO DE LA APLICACIÓN] Objeto `state` para controlar filtros y selección activa.
// 3. [FRAME 01 - HERO & 3D] Animación de entrada escalonada y giro según el mouse.
// 4. [FRAME 03 - NAVEGACIÓN STICKY] Conmutación entre pestañas (Temas / Python / Cierre).
// 5. [FRAME 04 - PANEL DUAL] Renderizado dinámico de temas y visor de código.
// 6. [FRAMES 07-10 - CLASES 2 A 5] Renderizado de lecciones, NumPy, Pandas y Matplotlib.
// 7. [FRAME 12 - ACCIONES Y COPIADO] Copiado al portapapeles y ventanas emergentes.
// =============================================================================

const finalPythonCode = `# Muestra de lo aprendido en clase
# Curso: Programacion, Datos, Visualizacion e IA
# Clase 1: fundamentos de pensamiento computacional y Python
# Estudiante: Daniel Pantoja

print("==============================================")
print("MUESTRA DE LO APRENDIDO EN PYTHON")
print("==============================================")
print("Clase 1: fundamentos de pensamiento computacional y Python")
print("Docente: Simena Dias")
print("Modalidad: virtual")

# 0. Concepto inicial: algoritmo
print("\\n0. Concepto inicial: algoritmo")
print("Un algoritmo es como una receta: una secuencia de pasos claros.")
print("1. Entender el problema")
print("2. Dividirlo en partes")
print("3. Reconocer patrones")
print("4. Crear instrucciones")

# 0.1 Breve linea de tiempo
print("\\n0.1 Breve historia de la programacion")

historia = [
    "1843 - Ada Lovelace publica el primer algoritmo para una maquina.",
    "1936 - Alan Turing plantea ideas clave sobre computacion.",
    "1957 - Fortran impulsa la programacion cientifica.",
    "1991 - Guido van Rossum publica Python."
]

for evento in historia:
    print(evento)

# 0.2 Tipos de datos
print("\\n0.2 Tipos de datos")

entero = 25
flotante = 19.99
cadena = "Hola"
booleano = True

print("Entero:", entero)
print("Flotante:", flotante)
print("Cadena:", cadena)
print("Booleano:", booleano)

# 1. Variables y constantes
NOMBRE_CURSO = "Programacion, Datos, Visualizacion e IA"
NOTA_EXCELENTE = 90
NOTA_APROBADO = 70

nombre_estudiante = "Daniel Pantoja"
edad = 32
nota = 85

print("\\n1. Variables y constantes")
print("Curso:", NOMBRE_CURSO)
print("Estudiante:", nombre_estudiante)
print("Edad:", edad)
print("Nota:", nota)
print("Regla: usar nombres descriptivos y snake_case.")
print("Regla: una variable no debe empezar con numero.")
print("Python usa tipado dinamico: el tipo depende del valor guardado.")

# 2. Condicional if / elif / else
print("\\n2. Condicional if / elif / else")

if nota >= NOTA_EXCELENTE:
    print(nombre_estudiante, "tiene un resultado excelente.")
elif nota >= NOTA_APROBADO:
    print(nombre_estudiante, "aprobo la actividad.")
else:
    print(nombre_estudiante, "debe reforzar el tema.")

# 3. Ciclo while
print("\\n3. Ciclo while: contador de 5 a 0")

contador = 5

while contador >= 0:
    print(contador)
    contador = contador - 1

print("Terminado")

# 4. Listas e indices
print("\\n4. Listas e indices")

food = ["Spaguetti", "Meat", "Rice", "Salad", "Fruits", "Desert", "Chicken"]

print("Lista completa:", food)
print("Primer elemento:", food[0])
print("Tercer elemento:", food[2])
print("Ultimo elemento:", food[-1])

# 5. Listas anidadas
print("\\n5. Listas anidadas")

breakfast = ["eggs", "bacon", "coffee", "cheese"]
lunch = ["rice", "chicken", "juice"]
dinner = ["chocolate", "arepa", "cheese"]

meals = [breakfast, lunch, dinner]

print("Todas las comidas:", meals)
print("Desayuno:", meals[0])
print("Cena:", meals[2])
print("Segundo elemento del desayuno:", meals[0][1])

# 6. Bucle for
print("\\n6. Bucle for: recorrer una lista")

frutas = ["Manzana", "Pera", "Uva", "Fresa"]

for fruta in frutas:
    print("Me gusta la", fruta)

# 7. break y continue
print("\\n7. break y continue")

personas = [
    ["Simena Dias", 42, 95],
    ["Daniel Pantoja", 32, 85],
    ["Carlos Lozano", 17, 68],
    ["Beatriz Vela", 28, 74]
]

print("\\nUso de continue: saltar personas que no aprobaron")

for persona in personas:
    nombre = persona[0]
    nota_persona = persona[2]

    if nota_persona < NOTA_APROBADO:
        print(nombre, "no aprobo, se salta en esta lista.")
        continue

    print(nombre, "aparece como persona aprobada.")

print("\\nUso de break: detener la busqueda al encontrar a Beatriz Vela")

for persona in personas:
    nombre = persona[0]

    print("Revisando:", nombre)

    if nombre == "Beatriz Vela":
        print("Encontramos a", nombre)
        break

# 8. Logica anidada
print("\\n8. Logica anidada")
print("Revisamos si cada persona es mayor de edad y luego su resultado.")

for persona in personas:
    nombre = persona[0]
    edad_persona = persona[1]
    nota_persona = persona[2]

    if edad_persona >= 18:
        print()
        print(nombre, "es mayor de edad.")

        if nota_persona >= NOTA_EXCELENTE:
            print("Resultado: excelente.")
        elif nota_persona >= NOTA_APROBADO:
            print("Resultado: aprobado.")
        else:
            print("Resultado: necesita refuerzo.")
    else:
        print()
        print(nombre, "es menor de edad.")

# 9. Logica anidada con numeros pares
print("\\n9. Logica anidada con numeros pares")

for n in range(1, 11):
    if n % 2 == 0:
        print(n, "es par")

print("\\nFin de la muestra.")`;

// -----------------------------------------------------------------------------
// [DATOS CLASE 1] Listado estructurado de los 15 temas de la Clase 1.
// Cada objeto incluye: id, categoría, título, resumen, nivel, código y salida.
// -----------------------------------------------------------------------------
const topics = [
  {
    id: "algoritmo",
    title: "Algoritmo como receta",
    category: "fundamentos",
    tags: ["algoritmo", "receta", "pasos"],
    summary:
      "Un algoritmo es una secuencia de instrucciones claras para resolver un problema. La docente lo explico como una receta de cocina: cada paso debe tener orden y sentido.",
    concepts: ["pasos ordenados", "entrada", "proceso", "resultado"],
    code: `print("1. Elegir los ingredientes")
print("2. Seguir los pasos")
print("3. Obtener un resultado")`,
    output: `1. Elegir los ingredientes
2. Seguir los pasos
3. Obtener un resultado`,
    visual:
      "Como en diseno, primero defines el objetivo, luego organizas piezas y finalmente produces una salida clara.",
    question: "Que pasos tendria un algoritmo para preparar una pieza grafica?"
  },
  {
    id: "pensamiento",
    title: "Pensamiento computacional",
    category: "fundamentos",
    tags: ["descomposicion", "patrones", "reglas"],
    summary:
      "Pensar computacionalmente es descomponer un problema, encontrar patrones y crear reglas para resolverlo de forma ordenada.",
    concepts: ["descomponer", "reconocer patrones", "abstraer", "crear instrucciones"],
    code: `problema = "organizar una clase"
partes = ["tema", "ejemplo", "practica", "cierre"]

print(problema)
print(partes)`,
    output: `organizar una clase
['tema', 'ejemplo', 'practica', 'cierre']`,
    visual:
      "Es como separar una infografia compleja en titulo, datos, jerarquia, iconos y cierre visual.",
    question: "Que parte de un proyecto visual se puede convertir en pasos?"
  },
  {
    id: "historia-python",
    title: "Breve historia de la programacion",
    category: "fundamentos",
    tags: ["Ada", "Turing", "Fortran", "Python"],
    summary:
      "La clase ubico algunos hitos: Ada Lovelace en 1843, Alan Turing en 1936, Fortran en 1957 y Python con Guido van Rossum en 1991.",
    concepts: ["1843 Ada Lovelace", "1936 Alan Turing", "1957 Fortran", "1991 Python"],
    code: `historia = [
    "1843 - Ada Lovelace",
    "1936 - Alan Turing",
    "1957 - Fortran",
    "1991 - Python"
]

for evento in historia:
    print(evento)`,
    output: `1843 - Ada Lovelace
1936 - Alan Turing
1957 - Fortran
1991 - Python`,
    visual:
      "Una linea de tiempo ayuda a entender que Python no aparece solo: hace parte de una historia de ideas sobre instrucciones, maquinas y lenguajes.",
    question: "Por que una linea de tiempo ayuda a entender mejor un tema tecnico?"
  },
  {
    id: "python-lenguaje",
    title: "Python como lenguaje",
    category: "fundamentos",
    tags: ["Python", "legible", "versatil"],
    summary:
      "Python es facil de leer, versatil y tiene una comunidad grande. Una idea asociada a su filosofia es: simple es mejor que complejo.",
    concepts: ["legibilidad", "versatilidad", "comunidad", "simple mejor que complejo"],
    code: `mensaje = "Python busca ser claro"
print(mensaje)`,
    output: `Python busca ser claro`,
    visual:
      "Para un traductor visual, Python funciona bien porque el codigo puede leerse casi como instrucciones escritas.",
    question: "Que hace que una instruccion sea clara para otra persona?"
  },
  {
    id: "tipos-datos",
    title: "Tipos de datos",
    category: "fundamentos",
    tags: ["int", "float", "string", "boolean"],
    summary:
      "Los datos pueden ser enteros, flotantes, cadenas de texto o booleanos. Cada tipo representa una forma distinta de informacion.",
    concepts: ["entero", "flotante", "cadena", "booleano"],
    code: `edad = 25
precio = 19.99
mensaje = "Hola"
es_valido = True

print(edad)
print(precio)
print(mensaje)
print(es_valido)`,
    output: `25
19.99
Hola
True`,
    visual:
      "Son materiales distintos: numero entero, numero con decimales, texto y una respuesta de verdadero o falso.",
    question: "Que tipo de dato usarias para guardar el nombre de una marca?"
  },
  {
    id: "variables",
    title: "Variables y constantes",
    category: "fundamentos",
    tags: ["datos", "nombres", "memoria"],
    summary:
      "Una variable guarda un valor que puede cambiar. Conviene usar nombres descriptivos, snake_case y evitar iniciar nombres con numeros.",
    concepts: ["nombre = valor", "snake_case", "tipado dinamico", "MAYUSCULAS para constantes"],
    code: `nombre_estudiante = "Daniel"
edad = 32
NOMBRE_CURSO = "Programacion, Datos, Visualizacion e IA"

print(nombre_estudiante)
print(edad)
print(NOMBRE_CURSO)`,
    output: `Daniel
32
Programacion, Datos, Visualizacion e IA`,
    visual:
      "Piensa en variables como cajas con etiqueta. El nombre de la caja debe describir bien lo que guarda.",
    question: "Que nombre en snake_case usarias para guardar la nota final?"
  },
  {
    id: "if-else",
    title: "Condicional if / else",
    category: "decision",
    tags: ["decision", "condicion", "edad"],
    summary:
      "Un condicional permite que el programa tome una decision segun una pregunta que puede ser verdadera o falsa.",
    concepts: ["if", "else", "condicion booleana"],
    code: `nombre = "Alejandro"
edad = 58

if edad >= 18:
    print(nombre, "es mayor de edad...")
else:
    print(nombre, "es menor de edad...")`,
    output: `Alejandro es mayor de edad...`,
    visual:
      "Es como un cruce con dos caminos: si la regla se cumple, tomas una ruta; si no se cumple, tomas la otra.",
    question: "Que condicion escribirias para saber si una persona puede entrar a un evento?"
  },
  {
    id: "elif",
    title: "Multiples opciones con elif",
    category: "decision",
    tags: ["elif", "notas", "clasificacion"],
    summary:
      "elif permite revisar otra condicion solo cuando el if anterior fue falso. Sirve para clasificar resultados en varios niveles.",
    concepts: ["if", "elif", "else", "orden de reglas"],
    code: `nombre = "Daniel Pantoja"
nota = 82

if nota >= 90:
    print(nombre, "Excelente")
elif nota >= 70:
    print(nombre, "Aprobado")
else:
    print(nombre, "Reprobado")`,
    output: `Daniel Pantoja Aprobado`,
    visual:
      "Imagina tres puertas: Excelente, Aprobado y Reprobado. El programa prueba una puerta a la vez, de arriba hacia abajo.",
    question: "Por que conviene revisar primero la nota mayor, como 90, antes que la nota de 70?"
  },
  {
    id: "while",
    title: "While: contador de 5 a 0",
    category: "repeticion",
    tags: ["while", "contador", "ciclo"],
    summary:
      "while repite un bloque de codigo mientras una condicion siga siendo verdadera. El contador cambia en cada vuelta.",
    concepts: ["condicion", "contador", "actualizacion"],
    code: `contador = 5

while contador >= 0:
    print(contador)
    contador = contador - 1

print("Terminado")`,
    output: `5
4
3
2
1
0
Terminado`,
    visual:
      "Funciona como una cuenta regresiva: miras el numero actual, lo muestras, bajas un nivel y repites.",
    question: "Que pasaria si borramos la linea contador = contador - 1?"
  },
  {
    id: "listas",
    title: "Listas e indices",
    category: "listas",
    tags: ["lista", "indices", "posiciones"],
    summary:
      "Una lista guarda varios elementos en una sola variable. Podemos entrar a una posicion usando corchetes.",
    concepts: ["food[0]", "food[-1]", "Python cuenta desde 0"],
    code: `food = ["Spaguetti", "Meat", "Rice", "Salad", "Fruits",
        "Desert", "Chicken"]

print(food)
print(food[0])
print(food[2])
print(food[4])
print(food[-1])
print(food[-6])`,
    output: `['Spaguetti', 'Meat', 'Rice', 'Salad', 'Fruits', 'Desert', 'Chicken']
Spaguetti
Rice
Fruits
Chicken
Meat`,
    visual:
      "Una lista es una fila de cajas. De izquierda a derecha cuentas 0, 1, 2. Desde el final cuentas -1, -2, -3.",
    question: "Si food[-1] trae el ultimo elemento, que traeria food[-2]?"
  },
  {
    id: "listas-anidadas",
    title: "Listas anidadas",
    category: "listas",
    tags: ["listas", "grupos", "coordenadas"],
    summary:
      "Una lista puede guardar otras listas. Para llegar a un elemento interno usamos dos posiciones.",
    concepts: ["food[0]", "food[0][1]", "grupo + elemento"],
    code: `breakfast = ["eggs", "bacon", "coffee", "cheese"]
lunch = ["rice", "chicken", "juice"]
dinner = ["chocolate", "arepa", "cheese"]

food = [breakfast, lunch, dinner]

print(food[0])
print(food[2])
print(food[0][1])
print(food[1][2])`,
    output: `['eggs', 'bacon', 'coffee', 'cheese']
['chocolate', 'arepa', 'cheese']
bacon
juice`,
    visual:
      "Es una carpeta que contiene otras carpetas. Primero eliges el grupo, luego eliges el elemento dentro del grupo.",
    question: "En food[1][2], cual numero elige el grupo y cual elige el elemento?"
  },
  {
    id: "for",
    title: "Bucle for",
    category: "repeticion",
    tags: ["for", "secuencias", "recorrido"],
    summary:
      "for recorre elementos de una lista, cadena o rango de forma ordenada. Es natural cuando ya tenemos una coleccion.",
    concepts: ["for item in lista", "iteracion", "coleccion"],
    code: `frutas = ["Manzana", "Pera"]

for f in frutas:
    print("Me gusta la", f)`,
    output: `Me gusta la Manzana
Me gusta la Pera`,
    visual:
      "Es caminar por una fila de elementos. Tomas uno, haces algo con el, pasas al siguiente y sigues hasta terminar.",
    question: "Cuando seria mas natural usar for en vez de while?"
  },
  {
    id: "break-continue",
    title: "Break y continue",
    category: "flujo",
    tags: ["break", "continue", "control"],
    summary:
      "break corta un ciclo. continue salta la vuelta actual y sigue con la siguiente iteracion.",
    concepts: ["break = parar", "continue = saltar", "control de flujo"],
    code: `numeros = [1, 2, -1, 3, 0, 4]

for numero in numeros:
    if numero < 0:
        continue
    if numero == 0:
        break
    print(numero)

print("Revision terminada")`,
    output: `1
2
3
Revision terminada`,
    visual:
      "continue es como decir: este elemento no sirve, pasemos al siguiente. break es como decir: aqui termina el recorrido.",
    question: "Que diferencia visual hay entre saltar un paso y detener todo el camino?"
  },
  {
    id: "logica-anidada",
    title: "Logica anidada",
    category: "flujo",
    tags: ["for", "if", "filtro"],
    summary:
      "La logica anidada permite colocar una estructura dentro de otra. En este ejemplo usamos for para recorrer numeros e if para filtrar solo los pares.",
    concepts: ["for + if", "n % 2 == 0", "filtrar mientras iteramos"],
    code: `for n in range(1, 11):
    if n % 2 == 0:
        print(n, "es par")`,
    output: `2 es par
4 es par
6 es par
8 es par
10 es par`,
    visual:
      "Imagina una fila de numeros. El for camina por cada numero y el if actua como filtro: solo deja pasar los que cumplen la regla.",
    question: "Que pasaria si cambiamos la condicion a n % 2 != 0?"
  },
  {
    id: "integrado",
    title: "Ejemplo integrado",
    category: "flujo",
    tags: ["if", "while", "for", "break", "continue"],
    summary:
      "Un ejercicio que junta decisiones, ciclos, recorrido de listas y control de flujo con estudiantes y notas.",
    concepts: ["while con contador", "if / elif / else", "break", "continue", "for final"],
    code: `estudiantes = ["Daniel", "Carlos", "Beatriz", "SALIR", "Simena"]
notas = [85, 45, -1, 95, 70]

contador = 0

while contador < len(estudiantes):
    nombre = estudiantes[contador]
    nota = notas[contador]

    if nombre == "SALIR":
        print("Se encontro SALIR. Terminamos.")
        break

    if nota < 0:
        print(nombre, "tiene una nota invalida.")
        contador = contador + 1
        continue

    if nota >= 90:
        print(nombre, "Excelente")
    elif nota >= 70:
        print(nombre, "Aprobado")
    else:
        print(nombre, "Reprobado")

    contador = contador + 1

print("Resumen:")

for estudiante in estudiantes:
    print(estudiante)`,
    output: `Daniel Aprobado
Carlos Reprobado
Beatriz tiene una nota invalida.
Se encontro SALIR. Terminamos.
Resumen:
Daniel
Carlos
Beatriz
SALIR
Simena`,
    visual:
      "Es una mesa de revision: while avanza por filas, if decide la etiqueta, continue salta datos invalidos, break detiene el proceso y for hace un barrido final.",
    question: "Como cambiaria el resultado si quitamos la palabra SALIR de la lista?"
  }
];

// -----------------------------------------------------------------------------
// [DATOS CLASE 2] Temas de la Clase 2: Funciones, figuras y archivos CSV.
// -----------------------------------------------------------------------------
const classTwoTopics = [
  {
    id: "funcion-def",
    title: "Funcion con def",
    category: "Funciones",
    color: "#18c3df",
    strong: "#08708f",
    rgb: "24, 195, 223",
    summary:
      "La funcion guarda una tarea bajo un nombre. En clase se uso def para crear bloques de codigo reutilizables.",
    concepts: ["def", "nombre de funcion", "bloque reutilizable"],
    code: `def saludar():
    print("Hola Daniel")

saludar()`,
    output: `Hola Daniel`,
    visual:
      "Una funcion es como una pieza guardada en una biblioteca: cuando la necesitas, la llamas por su nombre."
  },
  {
    id: "parametros",
    title: "Parametros de entrada",
    category: "Funciones",
    color: "#315bff",
    strong: "#152b8c",
    rgb: "49, 91, 255",
    summary:
      "Los parametros son datos que entran a la funcion. Permiten usar la misma formula con valores diferentes.",
    concepts: ["radio", "radio1", "radio2", "argumentos"],
    code: `def mostrar_radio(radio):
    print("El radio es:", radio)

mostrar_radio(7)
mostrar_radio(45)`,
    output: `El radio es: 7
El radio es: 45`,
    visual:
      "El parametro es el espacio vacio que la funcion espera llenar para poder trabajar."
  },
  {
    id: "constante-pi",
    title: "Constante PI",
    category: "Calculos",
    color: "#7657ff",
    strong: "#4c1d95",
    rgb: "118, 87, 255",
    summary:
      "PI se deja como constante porque su valor se reutiliza en todos los calculos de circulo y ovalo.",
    concepts: ["PI", "constante", "reutilizacion"],
    code: `PI = 3.1415

print("Valor de PI:", PI)`,
    output: `Valor de PI: 3.1415`,
    visual:
      "Una constante es una referencia estable: se escribe una vez y se usa en muchas formulas."
  },
  {
    id: "area-circulo",
    title: "Area del circulo",
    category: "Calculos",
    color: "#0ea5e9",
    strong: "#075985",
    rgb: "14, 165, 233",
    summary:
      "El area del circulo se calcula multiplicando PI por el radio dos veces.",
    concepts: ["area", "circulo", "PI * radio * radio"],
    code: `PI = 3.1415

def areaCircle(radio):
    area = PI * radio * radio
    return area

print(areaCircle(7))`,
    output: `153.9335`,
    visual:
      "La funcion recibe un radio, aplica la formula y devuelve el resultado calculado."
  },
  {
    id: "perimetro-circulo",
    title: "Perimetro del circulo",
    category: "Calculos",
    color: "#f47b20",
    strong: "#a64300",
    rgb: "244, 123, 32",
    summary:
      "El perimetro del circulo se calcula con 2 por PI por radio.",
    concepts: ["perimetro", "circulo", "2 * PI * radio"],
    code: `PI = 3.1415

def perimeterCircle(radio):
    perimetro = 2 * PI * radio
    return perimetro

print(perimeterCircle(7))`,
    output: `43.981`,
    visual:
      "Area mira la superficie; perimetro mira el borde de la figura."
  },
  {
    id: "ovalo",
    title: "Area y perimetro del ovalo",
    category: "Calculos",
    color: "#d946ef",
    strong: "#86198f",
    rgb: "217, 70, 239",
    summary:
      "El ovalo usa dos radios. Por eso sus funciones reciben radio1 y radio2.",
    concepts: ["ovalo", "radio1", "radio2", "dos parametros"],
    code: `PI = 3.1415

def areaEllipse(radio1, radio2):
    area = PI * radio1 * radio2
    return area

def perimeterEllipse(radio1, radio2):
    perimetro = PI * (radio1 + radio2)
    return perimetro

print(areaEllipse(3, 4))
print(perimeterEllipse(3, 4))`,
    output: `37.698
21.9905`,
    visual:
      "El ovalo necesita dos medidas porque no tiene el mismo radio en todas las direcciones."
  },
  {
    id: "menu-figuras",
    title: "Menu para elegir figura",
    category: "Menu",
    color: "#18a46f",
    strong: "#0f6b49",
    rgb: "24, 164, 111",
    summary:
      "El menu pregunta que se desea calcular. La opcion elegida decide que funciones se llaman.",
    concepts: ["input", "if", "elif", "llamar funciones"],
    code: `opcion = input("Que deseas calcular?: ")

if opcion == "1":
    print("Calcular circulo")
elif opcion == "2":
    print("Calcular ovalo")
else:
    print("Opcion no valida")`,
    output: `Que deseas calcular?: 2
Calcular ovalo`,
    visual:
      "El menu funciona como una puerta de entrada: segun la opcion, el programa toma una ruta."
  },
  {
    id: "codigo-final",
    title: "Ejercicio final de la clase",
    category: "Integracion",
    color: "#ef4444",
    strong: "#991b1b",
    rgb: "239, 68, 68",
    summary:
      "El cierre integra funciones, parametros, constantes, input, condicionales y calculos en un solo programa.",
    concepts: ["funciones", "menu", "return", "circulo", "ovalo"],
    code: `PI = 3.1415

def areaCircle(radio):
    area = PI * radio * radio
    return area

def perimeterCircle(radio):
    perimetro = 2 * PI * radio
    return perimetro

def areaEllipse(radio1, radio2):
    area = PI * radio1 * radio2
    return area

def perimeterEllipse(radio1, radio2):
    perimetro = PI * (radio1 + radio2)
    return perimetro

print("1. Circulo")
print("2. Ovalo")
print("3. Salir")

opcion = input("Que deseas calcular?: ")

if opcion == "1":
    radio_circulo = float(input("Digita el radio del circulo: "))
    print("Area:", areaCircle(radio_circulo))
    print("Perimetro:", perimeterCircle(radio_circulo))
elif opcion == "2":
    radio1_ovalo = float(input("Digita el radio 1 del ovalo: "))
    radio2_ovalo = float(input("Digita el radio 2 del ovalo: "))
    print("Area:", areaEllipse(radio1_ovalo, radio2_ovalo))
    print("Perimetro:", perimeterEllipse(radio1_ovalo, radio2_ovalo))
elif opcion == "3":
    print("Programa finalizado")
else:
    print("Opcion no valida")`,
    output: `1. Circulo
2. Ovalo
3. Salir
Que deseas calcular?: 1
Digita el radio del circulo: 5
Area: 78.53750000000001
Perimetro: 31.415000000000003`,
    visual:
      "Este es el punto exacto donde cerro la clase: un menu que decide que calculo ejecutar."
  }
];

// -----------------------------------------------------------------------------
// [DATOS CLASE 3] Temas de la Clase 3: IMC, NumPy, Pandas y bases de datos.
// -----------------------------------------------------------------------------
const classThreeTopics = [
  {
    id: "imc-condicionales",
    title: "Repaso con IMC",
    category: "Funciones y decision",
    color: "#18c3df",
    strong: "#08708f",
    rgb: "24, 195, 223",
    summary:
      "La clase comenzo repasando funciones, parametros, operaciones, return y condicionales con un ejemplo de Indice de Masa Corporal.",
    concepts: ["def", "return", "if", "elif", "IMC"],
    code: `def funcion_imc(nombre, edad, altura, peso):
    imc = peso / (altura * altura)
    print("Hola", nombre, "con", edad, "anos y altura", altura, "y peso", peso, "tiene un IMC de:", imc)
    return imc

def imprimir_mensaje(mi_imc):
    if mi_imc < 18.5:
        print("Tienes un peso inferior al normal")
    elif mi_imc >= 18.5 and mi_imc < 24.9:
        print("Tienes un peso normal")
    elif mi_imc >= 24.9 and mi_imc < 29.9:
        print("Tienes un peso superior al normal")
    else:
        print("Tienes obesidad")

mi_imc = funcion_imc("Simena Dinas", 46, 1.60, 68)
imprimir_mensaje(mi_imc)`,
    output: `Hola Simena Dinas con 46 anos y altura 1.6 y peso 68 tiene un IMC de: 26.5625
Tienes un peso superior al normal`,
    visual:
      "El IMC conecta calculo y decision: primero se obtiene un numero y despues el programa escoge el mensaje correcto."
  },
  {
    id: "listas-python",
    title: "Listas y posiciones",
    category: "Listas",
    color: "#315bff",
    strong: "#152b8c",
    rgb: "49, 91, 255",
    summary:
      "Antes de entrar a NumPy, se repasaron listas de Python, rangos, slicing, append e insert.",
    concepts: ["list", "range", "slicing", "append", "insert"],
    code: `print(list("Python"))
print(list(range(10)))

lista = [2, 4, 5, 7, 3, 4, 5, -9, 4, 5, 7, -3]
print(lista)
print(lista[3:8])

lista.append(34)
print(lista)

lista.insert(3, 33)
print(lista)`,
    output: `['P', 'y', 't', 'h', 'o', 'n']
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
[2, 4, 5, 7, 3, 4, 5, -9, 4, 5, 7, -3]
[7, 3, 4, 5, -9]
[2, 4, 5, 7, 3, 4, 5, -9, 4, 5, 7, -3, 34]
[2, 4, 5, 33, 7, 3, 4, 5, -9, 4, 5, 7, -3, 34]`,
    visual:
      "La lista es una fila ordenada: cada valor tiene una posicion, se puede cortar por tramos y se le pueden agregar elementos."
  },
  {
    id: "numpy-ndarray",
    title: "NumPy y ndarray",
    category: "NumPy",
    color: "#7657ff",
    strong: "#4c1d95",
    rgb: "118, 87, 255",
    summary:
      "NumPy permite trabajar con datos numericos de forma rapida y eficiente usando el objeto ndarray.",
    concepts: ["import numpy", "np.array", "ndarray", "homogeneo"],
    code: `import numpy as np

edades = np.array([35, 33, 42, 10, 14, 19, 27, 44, 26, 31])

print(edades)
print(type(edades))`,
    output: `[35 33 42 10 14 19 27 44 26 31]
<class 'numpy.ndarray'>`,
    visual:
      "Un ndarray se parece a una lista, pero esta pensado para calculos mas rapidos y datos del mismo tipo."
  },
  {
    id: "matrices-numpy",
    title: "Matrices: size, shape, ndim y dtype",
    category: "NumPy",
    color: "#0ea5e9",
    strong: "#075985",
    rgb: "14, 165, 233",
    summary:
      "Con una matriz de NumPy revisamos dimensiones, cantidad de datos, forma y tipo de dato.",
    concepts: ["matrix", "ndim", "size", "shape", "dtype"],
    code: `import numpy as np

matrix = np.array([
    [1, 2, 3, 10, 33],
    [4, 5, 6, 20, 44],
    [7, 8, 9, 90, 55],
    [10, 11, 12, 30, 44]
])

print(matrix)
print("n-dimension:", matrix.ndim)
print("size:", matrix.size)
print("shape:", matrix.shape)
print("dtype:", matrix.dtype)`,
    output: `[[ 1  2  3 10 33]
 [ 4  5  6 20 44]
 [ 7  8  9 90 55]
 [10 11 12 30 44]]
n-dimension: 2
size: 20
shape: (4, 5)
dtype: int64`,
    visual:
      "Shape cuenta filas y columnas; size cuenta todas las celdas; ndim dice cuantas dimensiones tiene la estructura."
  },
  {
    id: "muestra-aleatoria",
    title: "Muestra aleatoria",
    category: "NumPy",
    color: "#18a46f",
    strong: "#0f6b49",
    rgb: "24, 164, 111",
    summary:
      "Se uso una simulacion de moneda para entender como NumPy genera muestras grandes y permite contar condiciones.",
    concepts: ["np.random.choice", "size", "condicion", "sum"],
    code: `import numpy as np

coins = np.random.choice(["head", "tail"], size=1_000_000)

print(coins)
print(sum(coins == "head"))
print(sum(coins == "tail"))`,
    output: `['tail' 'head' 'tail' ... 'tail' 'head' 'tail']
499874
500126`,
    visual:
      "La comparacion coins == 'head' produce muchos True y False; sum cuenta los True como resultados encontrados."
  },
  {
    id: "pandas-dataframe",
    title: "Pandas y DataFrame",
    category: "Pandas",
    color: "#d946ef",
    strong: "#86198f",
    rgb: "217, 70, 239",
    summary:
      "Pandas permite organizar datos en tablas llamadas DataFrame, con filas, columnas e indice.",
    concepts: ["import pandas", "DataFrame", "filas", "columnas"],
    code: `import pandas as pd

datos = {
    "empleado": ["Ana", "Luis", "Marta"],
    "area": ["Ventas", "Soporte", "Datos"],
    "salario": [1800000, 2200000, 2600000]
}

df = pd.DataFrame(datos)
print(df)`,
    output: `  empleado     area  salario
0      Ana   Ventas  1800000
1     Luis  Soporte  2200000
2    Marta    Datos  2600000`,
    visual:
      "Un DataFrame se lee como una hoja de calculo dentro de Python: filas como registros y columnas como caracteristicas."
  },
  {
    id: "nomina-empleados",
    title: "Nomina de empleados",
    category: "Pandas",
    color: "#f47b20",
    strong: "#a64300",
    rgb: "244, 123, 32",
    summary:
      "El ejercicio de empleados permite contar registros, sumar la nomina total y calcular la media salarial.",
    concepts: ["len", "sum", "mean", "salario"],
    code: `import pandas as pd

datos = {
    "empleado": ["Ana", "Luis", "Marta", "Carlos", "Sofia"],
    "area": ["Ventas", "Soporte", "Datos", "Ventas", "Administracion"],
    "salario": [1800000, 2200000, 2600000, 2000000, 2400000]
}

df = pd.DataFrame(datos)

cantidad_empleados = len(df)
nomina_total = df["salario"].sum()
media_salario = df["salario"].mean()

print("Cantidad de empleados:", cantidad_empleados)
print("Nomina total pagada:", nomina_total)
print("Media salarial:", media_salario)`,
    output: `Cantidad de empleados: 5
Nomina total pagada: 11000000
Media salarial: 2200000.0`,
    visual:
      "Pandas evita sumar a mano: se selecciona una columna completa y se aplican operaciones sobre todos sus valores."
  },
  {
    id: "base-datos-sqlite",
    title: "Base de datos con SQLite",
    category: "Bases de datos",
    color: "#ef4444",
    strong: "#991b1b",
    rgb: "239, 68, 68",
    summary:
      "Se introdujo la idea de guardar informacion de forma permanente usando una base de datos y consultas SQL.",
    concepts: ["sqlite3", "CREATE TABLE", "INSERT", "SELECT", "commit"],
    code: `import sqlite3

conexion = sqlite3.connect("empresa.db")
cursor = conexion.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS empleados (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    area TEXT NOT NULL,
    salario REAL NOT NULL
)
""")

cursor.execute("""
INSERT INTO empleados (nombre, area, salario)
VALUES (?, ?, ?)
""", ("Ana", "Ventas", 1800000))

conexion.commit()

cursor.execute("SELECT * FROM empleados")
print(cursor.fetchall())

conexion.close()`,
    output: `[(1, 'Ana', 'Ventas', 1800000.0)]`,
    visual:
      "El DataFrame vive en memoria; la base de datos guarda informacion para poder consultarla despues."
  },
  {
    id: "memoria-datos",
    title: "Memoria y tipos de datos",
    category: "Pandas",
    color: "#00d4b8",
    strong: "#04756f",
    rgb: "0, 212, 184",
    summary:
      "Antes de analizar datos conviene revisar memoria usada, tipos de datos, shape, size y ndim.",
    concepts: ["info", "dtypes", "memory_usage", "shape", "ndim"],
    code: `import pandas as pd

datos = {
    "empleado": ["Ana", "Luis", "Marta", "Carlos", "Sofia"],
    "area": ["Ventas", "Soporte", "Datos", "Ventas", "Administracion"],
    "salario": [1800000, 2200000, 2600000, 2000000, 2400000]
}

df = pd.DataFrame(datos)

print(df.dtypes)
print(df.memory_usage(deep=True))
print("Size:", df.size)
print("Shape:", df.shape)
print("Ndim:", df.ndim)`,
    output: `empleado    object
area        object
salario      int64
dtype: object
Index       132
empleado    307
area        318
salario      40
dtype: int64
Size: 15
Shape: (5, 3)
Ndim: 2`,
    visual:
      "Revisar la estructura es mirar el mapa antes del viaje: permite saber cuantas filas hay, que columnas existen y cuanto pesa el DataFrame."
  },
  {
    id: "practica-csv",
    title: "Practica integradora con CSV",
    category: "Practica",
    color: "#6f7dff",
    strong: "#152b8c",
    rgb: "111, 125, 255",
    summary:
      "El cierre de semana propone escoger un dataset CSV, cargarlo con pandas y crear ejercicios con apoyo de IA.",
    concepts: ["CSV", "read_csv", "groupby", "Matplotlib", "IA"],
    code: `import pandas as pd

def cargar_datos(ruta):
    df = pd.read_csv(ruta)
    return df

def revisar_dataframe(df):
    print(df.head())
    print("Shape:", df.shape)
    print("Size:", df.size)
    print("Ndim:", df.ndim)
    print(df.dtypes)
    print(df.memory_usage(deep=True))

url = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/tips.csv"
datos = cargar_datos(url)
revisar_dataframe(datos)`,
    output: `   total_bill   tip     sex smoker  day    time  size
0       16.99  1.01  Female     No  Sun  Dinner     2
1       10.34  1.66    Male     No  Sun  Dinner     3
Shape: (244, 7)
Size: 1708
Ndim: 2`,
    visual:
      "La practica une lo aprendido: cargar datos, revisarlos, crear funciones, calcular resultados y preparar futuros graficos."
  }
];

// -----------------------------------------------------------------------------
// [ESTADO GLOBAL] Mantiene la sincronización de la interfaz en tiempo real.
// activeTopicId: Tema seleccionado actualmente.
// activeTab: Pestaña visible ("temas", "python", "conclusion").
// filter: Filtro conceptual aplicado ("todos", "algoritmo", etc.).
// -----------------------------------------------------------------------------
const state = {
  filter: "todos",
  search: "",
  selectedId: topics[0].id,
  tab: "temas",
  completionModalShown: false,
  classTwoSelectedId: classTwoTopics[0].id,
  classThreeSelectedId: classThreeTopics[0].id
};

const categoryLabels = {
  fundamentos: "Fundamentos",
  decision: "Decision",
  repeticion: "Repeticion",
  listas: "Listas",
  flujo: "Flujo"
};

const categoryMeta = {
  todos: {
    label: "Todos",
    color: "#315bff",
    strong: "#152b8c",
    rgb: "49, 91, 255",
    summary: "Recorrido completo"
  },
  fundamentos: {
    label: "Fundamentos",
    color: "#f47b20",
    strong: "#a64300",
    rgb: "244, 123, 32",
    summary: "Bases, datos y Python"
  },
  decision: {
    label: "Decision",
    color: "#d946ef",
    strong: "#86198f",
    rgb: "217, 70, 239",
    summary: "Condiciones y rutas"
  },
  repeticion: {
    label: "Repeticion",
    color: "#8b5cf6",
    strong: "#4c1d95",
    rgb: "139, 92, 246",
    summary: "Ciclos y recorridos"
  },
  listas: {
    label: "Listas",
    color: "#0ea5e9",
    strong: "#075985",
    rgb: "14, 165, 233",
    summary: "Indices y grupos"
  },
  flujo: {
    label: "Flujo",
    color: "#ef4444",
    strong: "#991b1b",
    rgb: "239, 68, 68",
    summary: "Control e integracion"
  }
};

const tabOrder = ["temas", "python", "conclusion"];

const topicList = document.querySelector("#topic-list");
const topicCount = document.querySelector("#topic-count");
const topicProgressSummary = document.querySelector("#topic-progress-summary");
const filterButtons = document.querySelectorAll(".filter-button");
const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");
const classesDropdown = document.querySelector(".classes-dropdown");
const heroJumpButtons = document.querySelectorAll(".hero-jump");
const courseImage = document.querySelector(".course-image");
const courseCard = document.querySelector(".course-card");
const pythonExampleList = document.querySelector("#python-example-list");
const finalCodeBlock = document.querySelector("#final-code-block");
const copyFullPython = document.querySelector("#copy-full-python");
const copyFinalCode = document.querySelector("#copy-final-code");

const detailCategory = document.querySelector("#detail-category");
const detailTitle = document.querySelector("#detail-title");
const detailLevel = document.querySelector("#detail-level");
const detailSummary = document.querySelector("#detail-summary");
const conceptStrip = document.querySelector("#concept-strip");
const codeBlock = document.querySelector("#code-block");
const outputBlock = document.querySelector("#output-block");
const visualNote = document.querySelector("#visual-note-text");
const copyCode = document.querySelector("#copy-code");
const detailPanel = document.querySelector(".detail-panel");
const topicPanel = document.querySelector(".topic-panel");
const topicScrollAnchor = document.querySelector("#topics-scroll-anchor");
const finishClassButton = document.querySelector("#finish-class");
const classOneTabs = document.querySelector(".class-one-tabs");
const classTwoTabs = document.querySelector(".class-two-tabs");
const classTwoTopicList = document.querySelector("#class-two-topic-list");
const classTwoProgressSummary = document.querySelector("#class-two-progress-summary");
const classTwoDetailPanel = document.querySelector(".class-two-detail-panel");
const classTwoDetailCategory = document.querySelector("#class-two-detail-category");
const classTwoDetailTitle = document.querySelector("#class-two-detail-title");
const classTwoDetailLevel = document.querySelector("#class-two-detail-level");
const classTwoDetailSummary = document.querySelector("#class-two-detail-summary");
const classTwoConceptStrip = document.querySelector("#class-two-concept-strip");
const classTwoCodeBlock = document.querySelector("#class-two-code-block");
const classTwoOutputBlock = document.querySelector("#class-two-output-block");
const classTwoVisualNote = document.querySelector("#class-two-visual-note-text");
const copyClassTwoCode = document.querySelector("#copy-class-two-code");
const classThreeTabs = document.querySelector(".class-three-tabs");
const classThreeTopicList = document.querySelector("#class-three-topic-list");
const classThreeProgressSummary = document.querySelector("#class-three-progress-summary");
const classThreeDetailPanel = document.querySelector(".class-three-detail-panel");
const classThreeDetailCategory = document.querySelector("#class-three-detail-category");
const classThreeDetailTitle = document.querySelector("#class-three-detail-title");
const classThreeDetailLevel = document.querySelector("#class-three-detail-level");
const classThreeDetailSummary = document.querySelector("#class-three-detail-summary");
const classThreeConceptStrip = document.querySelector("#class-three-concept-strip");
const classThreeCodeBlock = document.querySelector("#class-three-code-block");
const classThreeOutputBlock = document.querySelector("#class-three-output-block");
const classThreeVisualNote = document.querySelector("#class-three-visual-note-text");
const copyClassThreeCode = document.querySelector("#copy-class-three-code");
const copyStoreCode = document.querySelector("#copy-store-code");
const storeCodeBlock = document.querySelector("#store-code-block");
const completionModal = document.querySelector("#completion-modal");
const closeCompletion = document.querySelector("#close-completion");
const continueClassTwo = document.querySelector("#continue-class-two");
const classTwoPlaceholder = document.querySelector("#clase-2");
const classThreePlaceholder = document.querySelector("#clase-3");
const classFourPlaceholder = document.querySelector("#clase-4");
const classFivePlaceholder = document.querySelector("#clase-5");
// Navegacion principal:
// Al bajar con la rueda del mouse, el dashboard se acomoda en estas tres pantallas.
// Al subir, dejamos el scroll normal para que la lectura se sienta natural.
const screenTargets = [
  document.querySelector(".course-hero"),
  document.querySelector("#clase-1"),
  document.querySelector(".topic-panel"),
].filter(Boolean);
let isScreenSnapping = false;
let lastWheelTime = 0;
const wheelSnapCooldown = 1350;

topicCount.textContent = topics.length;
finalCodeBlock.textContent = finalPythonCode;

function getCategoryCount(categoryKey) {
  return categoryKey === "todos"
    ? topics.length
    : topics.filter((topic) => topic.category === categoryKey).length;
}

function getCategoryMeta(categoryKey) {
  return categoryMeta[categoryKey] || categoryMeta.todos;
}

function applyCategoryTheme(categoryKey, filterKey = state.filter) {
  const meta = getCategoryMeta(categoryKey);
  const root = document.documentElement;

  root.style.setProperty("--category-color", meta.color);
  root.style.setProperty("--category-strong", meta.strong);
  root.style.setProperty("--category-rgb", meta.rgb);
  document.body.dataset.activeCategory = categoryKey;
  document.body.dataset.activeFilter = filterKey;
}

function initCategoryCards() {
  filterButtons.forEach((button) => {
    const key = button.dataset.filter;
    const meta = getCategoryMeta(key);
    const count = getCategoryCount(key);
    const countLabel = count === 1 ? "01 tema" : `${String(count).padStart(2, "0")} temas`;

    button.style.setProperty("--filter-color", meta.color);
    button.style.setProperty("--filter-strong", meta.strong);
    button.style.setProperty("--filter-rgb", meta.rgb);
    button.setAttribute("aria-pressed", String(button.classList.contains("is-active")));
    button.innerHTML = `
      <span class="filter-kicker">${countLabel}</span>
      <strong>${meta.label}</strong>
      <span class="filter-note">${meta.summary}</span>
    `;
  });
}

function normalize(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function getFilteredTopics() {
  return topics.filter((topic) => {
    const matchesFilter = state.filter === "todos" || topic.category === state.filter;
    return matchesFilter;
  });
}

function getFirstTopicForFilter(filterKey) {
  if (filterKey === "todos") {
    return topics[0];
  }

  return topics.find((topic) => topic.category === filterKey) || topics[0];
}

// -----------------------------------------------------------------------------
// [FRAME 04 - LÓGICA: IZQUIERDA] RENDERIZADO DE LA LISTA DE TEMAS
// Construye los botones de la lista lateral según el filtro de categoría activo.
// -----------------------------------------------------------------------------
function renderTopicList() {
  const filtered = getFilteredTopics();
  topicList.innerHTML = "";

  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No encontre temas con ese filtro.";
    topicList.appendChild(empty);
    return;
  }

  if (!filtered.some((topic) => topic.id === state.selectedId)) {
    state.selectedId = filtered[0].id;
  }

  const selectedIndex = filtered.findIndex((topic) => topic.id === state.selectedId);
  const selectedTopic = filtered[selectedIndex];
  const filterMeta = getCategoryMeta(state.filter);
  const isClassComplete = state.filter === "todos" && selectedTopic?.id === topics[topics.length - 1].id;
  const progress = filtered.length > 1 ? (selectedIndex + 0.25) / (filtered.length - 1) : 1;
  const progressRatio = Math.min(Math.max(progress, 0), 1);
  const progressTrack = Math.max(topicList.clientWidth - 60, 0);

  applyCategoryTheme(isClassComplete ? "todos" : selectedTopic?.category, state.filter);
  topicList.style.setProperty("--progress-width", `${progressTrack * progressRatio}px`);
  topicList.style.setProperty("--topic-count", filtered.length);
  topicList.classList.toggle("is-complete", isClassComplete);
  topicPanel.classList.toggle("is-complete", isClassComplete);
  topicProgressSummary.classList.toggle("is-complete", isClassComplete);
  topicProgressSummary.textContent = isClassComplete
    ? "Clase completada"
    : `${filterMeta.label} - ${String(selectedIndex + 1).padStart(2, "0")} / ${String(filtered.length).padStart(2, "0")}`;
  finishClassButton.hidden = !isClassComplete;

  if (!isClassComplete) {
    state.completionModalShown = false;
  }

  filtered.forEach((topic, index) => {
    const meta = getCategoryMeta(topic.category);
    const card = document.createElement("button");
    card.type = "button";
    card.className = `topic-card${index <= selectedIndex ? " is-complete" : ""}${topic.id === state.selectedId ? " is-selected" : ""}`;
    card.dataset.id = topic.id;
    card.dataset.category = topic.category;
    card.style.setProperty("--topic-theme-color", meta.color);
    card.style.setProperty("--topic-theme-strong", meta.strong);
    card.style.setProperty("--topic-theme-rgb", meta.rgb);
    card.setAttribute("aria-label", `Tema ${String(index + 1).padStart(2, "0")}: ${topic.title}. Categoria ${meta.label}`);

    card.innerHTML = `
      <span class="topic-index"><span>${String(index + 1).padStart(2, "0")}</span></span>
    `;

    card.addEventListener("click", () => {
      state.selectedId = topic.id;
      render();
      window.requestAnimationFrame(() => {
        animatedScrollTo(detailPanel, 960, 330);
      });
    });

    topicList.appendChild(card);
  });
}

// -----------------------------------------------------------------------------
// [FRAME 04 - LÓGICA: DERECHA] VISOR DE CÓDIGO Y DETALLE DEL TEMA SELECCIONADO
// Inyecta en el DOM el título, badge de nivel, código Python de ejemplo y salida.
// -----------------------------------------------------------------------------
function renderDetail() {
  const topic = topics.find((item) => item.id === state.selectedId) || topics[0];
  const topicNumber = String(topics.findIndex((item) => item.id === topic.id) + 1).padStart(2, "0");
  const topicMeta = getCategoryMeta(topic.category);
  detailPanel.classList.remove("is-changing");
  void detailPanel.offsetWidth;
  detailPanel.classList.add("is-changing");
  detailCategory.textContent = topicMeta.label;
  detailTitle.textContent = topic.title;
  detailLevel.textContent = topicNumber;
  detailLevel.setAttribute("aria-label", `Tema ${topicNumber}`);
  detailSummary.textContent = topic.summary;
  codeBlock.textContent = topic.code;
  outputBlock.textContent = topic.output;
  visualNote.textContent = topic.visual;

  conceptStrip.innerHTML = "";
  topic.concepts.forEach((concept) => {
    const chip = document.createElement("span");
    chip.className = "concept-chip";
    chip.textContent = concept;
    conceptStrip.appendChild(chip);
  });
}

function renderPythonList() {
  pythonExampleList.innerHTML = "";
  topics.forEach((topic, index) => {
    const card = document.createElement("article");
    card.className = "python-example-card";
    card.innerHTML = `
      <span class="topic-index">${String(index + 1).padStart(2, "0")}</span>
      <span class="topic-meta">
        <span class="python-card-category">${categoryLabels[topic.category] || "Tema"}</span>
        <span class="topic-title">${topic.title}</span>
        <p>${topic.summary}</p>
      </span>
    `;
    pythonExampleList.appendChild(card);
  });
}

function getClassTwoTopic() {
  return classTwoTopics.find((item) => item.id === state.classTwoSelectedId) || classTwoTopics[0];
}

function applyClassTwoTheme(topic) {
  if (!classTwoDetailPanel) {
    return;
  }

  classTwoDetailPanel.style.setProperty("--category-color", topic.color);
  classTwoDetailPanel.style.setProperty("--category-strong", topic.strong);
  classTwoDetailPanel.style.setProperty("--category-rgb", topic.rgb);
}

function renderClassTwoTopicList() {
  if (!classTwoTopicList) {
    return;
  }

  classTwoTopicList.innerHTML = "";
  const selectedIndex = Math.max(
    classTwoTopics.findIndex((topic) => topic.id === state.classTwoSelectedId),
    0
  );
  const progress = classTwoTopics.length > 1 ? (selectedIndex + 0.25) / (classTwoTopics.length - 1) : 1;
  const progressRatio = Math.min(Math.max(progress, 0), 1);
  const progressTrack = Math.max(classTwoTopicList.clientWidth - 60, 0);

  classTwoTopicList.style.setProperty("--progress-width", `${progressTrack * progressRatio}px`);
  classTwoTopicList.style.setProperty("--topic-count", classTwoTopics.length);
  classTwoProgressSummary.textContent = `Clase 2 - ${String(selectedIndex + 1).padStart(2, "0")} / ${String(classTwoTopics.length).padStart(2, "0")}`;

  classTwoTopics.forEach((topic, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `topic-card${index <= selectedIndex ? " is-complete" : ""}${topic.id === state.classTwoSelectedId ? " is-selected" : ""}`;
    card.dataset.id = topic.id;
    card.style.setProperty("--topic-theme-color", topic.color);
    card.style.setProperty("--topic-theme-strong", topic.strong);
    card.style.setProperty("--topic-theme-rgb", topic.rgb);
    card.setAttribute("aria-label", `Clase 2 tema ${String(index + 1).padStart(2, "0")}: ${topic.title}`);
    card.innerHTML = `
      <span class="topic-index"><span>${String(index + 1).padStart(2, "0")}</span></span>
    `;

    card.addEventListener("click", () => {
      state.classTwoSelectedId = topic.id;
      renderClassTwoTopicList();
      renderClassTwoDetail();
      window.requestAnimationFrame(() => {
        animatedScrollTo(classTwoDetailPanel, 900, 156);
      });
    });

    classTwoTopicList.appendChild(card);
  });
}

function renderClassTwoDetail() {
  if (!classTwoDetailPanel) {
    return;
  }

  const topic = getClassTwoTopic();
  const topicNumber = String(classTwoTopics.findIndex((item) => item.id === topic.id) + 1).padStart(2, "0");
  applyClassTwoTheme(topic);

  classTwoDetailPanel.classList.remove("is-changing");
  void classTwoDetailPanel.offsetWidth;
  classTwoDetailPanel.classList.add("is-changing");
  classTwoDetailCategory.textContent = topic.category;
  classTwoDetailTitle.textContent = topic.title;
  classTwoDetailLevel.textContent = topicNumber;
  classTwoDetailSummary.textContent = topic.summary;
  classTwoCodeBlock.textContent = topic.code;
  classTwoOutputBlock.textContent = topic.output;
  classTwoVisualNote.textContent = topic.visual;

  classTwoConceptStrip.innerHTML = "";
  topic.concepts.forEach((concept) => {
    const chip = document.createElement("span");
    chip.className = "concept-chip";
    chip.textContent = concept;
    classTwoConceptStrip.appendChild(chip);
  });
}

function getClassThreeTopic() {
  return classThreeTopics.find((item) => item.id === state.classThreeSelectedId) || classThreeTopics[0];
}

function applyClassThreeTheme(topic) {
  if (!classThreeDetailPanel) {
    return;
  }

  classThreeDetailPanel.style.setProperty("--category-color", topic.color);
  classThreeDetailPanel.style.setProperty("--category-strong", topic.strong);
  classThreeDetailPanel.style.setProperty("--category-rgb", topic.rgb);
}

function renderClassThreeTopicList() {
  if (!classThreeTopicList) {
    return;
  }

  classThreeTopicList.innerHTML = "";
  const selectedIndex = Math.max(
    classThreeTopics.findIndex((topic) => topic.id === state.classThreeSelectedId),
    0
  );
  const progress = classThreeTopics.length > 1 ? (selectedIndex + 0.25) / (classThreeTopics.length - 1) : 1;
  const progressRatio = Math.min(Math.max(progress, 0), 1);
  const progressTrack = Math.max(classThreeTopicList.clientWidth - 60, 0);

  classThreeTopicList.style.setProperty("--progress-width", `${progressTrack * progressRatio}px`);
  classThreeTopicList.style.setProperty("--topic-count", classThreeTopics.length);
  classThreeProgressSummary.textContent = `Clase 3 - ${String(selectedIndex + 1).padStart(2, "0")} / ${String(classThreeTopics.length).padStart(2, "0")}`;

  classThreeTopics.forEach((topic, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `topic-card${index <= selectedIndex ? " is-complete" : ""}${topic.id === state.classThreeSelectedId ? " is-selected" : ""}`;
    card.dataset.id = topic.id;
    card.style.setProperty("--topic-theme-color", topic.color);
    card.style.setProperty("--topic-theme-strong", topic.strong);
    card.style.setProperty("--topic-theme-rgb", topic.rgb);
    card.setAttribute("aria-label", `Clase 3 tema ${String(index + 1).padStart(2, "0")}: ${topic.title}`);
    card.innerHTML = `
      <span class="topic-index"><span>${String(index + 1).padStart(2, "0")}</span></span>
    `;

    card.addEventListener("click", () => {
      state.classThreeSelectedId = topic.id;
      renderClassThreeTopicList();
      renderClassThreeDetail();
      window.requestAnimationFrame(() => {
        animatedScrollTo(classThreeDetailPanel, 900, 156);
      });
    });

    classThreeTopicList.appendChild(card);
  });
}

function renderClassThreeDetail() {
  if (!classThreeDetailPanel) {
    return;
  }

  const topic = getClassThreeTopic();
  const topicNumber = String(classThreeTopics.findIndex((item) => item.id === topic.id) + 1).padStart(2, "0");
  applyClassThreeTheme(topic);

  classThreeDetailPanel.classList.remove("is-changing");
  void classThreeDetailPanel.offsetWidth;
  classThreeDetailPanel.classList.add("is-changing");
  classThreeDetailCategory.textContent = topic.category;
  classThreeDetailTitle.textContent = topic.title;
  classThreeDetailLevel.textContent = topicNumber;
  classThreeDetailSummary.textContent = topic.summary;
  classThreeCodeBlock.textContent = topic.code;
  classThreeOutputBlock.textContent = topic.output;
  classThreeVisualNote.textContent = topic.visual;

  classThreeConceptStrip.innerHTML = "";
  topic.concepts.forEach((concept) => {
    const chip = document.createElement("span");
    chip.className = "concept-chip";
    chip.textContent = concept;
    classThreeConceptStrip.appendChild(chip);
  });
}

// -----------------------------------------------------------------------------
// [FRAME 03 - LÓGICA] GESTOR DE PESTAÑAS STICKY (CLASE 1)
// Alterna la visibilidad de los paneles: "temas", "python" o "conclusion",
// actualizando las clases activas y los atributos de accesibilidad ARIA.
// -----------------------------------------------------------------------------
function setTab(nextTab, options = {}) {
  state.tab = nextTab;
  const activeTabIndex = tabOrder.indexOf(state.tab);

  tabButtons.forEach((button) => {
    const buttonIndex = tabOrder.indexOf(button.dataset.tab);
    button.classList.toggle("is-active", button.dataset.tab === state.tab);
    button.classList.toggle("is-step-complete", buttonIndex >= 0 && buttonIndex < activeTabIndex);
  });

  tabPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `tab-${state.tab}`);
  });

  if (options.scrollToPanel) {
    window.requestAnimationFrame(() => {
      const tabs = document.querySelector(".tabs");
      if (tabs) {
        animatedScrollTo(tabs, 980, 0);
      }
    });
  }
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function animatedScrollTo(target, duration = 850, offset = 16) {
  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + window.scrollY - offset;
  const distance = end - start;
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, start + distance * eased);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

function getDocumentTop(target) {
  let top = 0;
  let node = target;

  while (node) {
    top += node.offsetTop || 0;
    node = node.offsetParent;
  }

  return top;
}

function animatedScrollToDocumentTop(target, duration = 850, offset = 16) {
  const start = window.scrollY;
  const end = getDocumentTop(target) - offset;
  const distance = end - start;
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, start + distance * eased);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

function openCompletionModal() {
  completionModal.hidden = false;
  closeCompletion.focus();
}

function closeCompletionModal() {
  completionModal.hidden = true;
}

function getNearestScreenIndex() {
  const currentY = window.scrollY;
  return screenTargets.reduce((nearestIndex, target, index) => {
    const nearestDistance = Math.abs(getScreenSnapTop(nearestIndex) - currentY);
    const nextDistance = Math.abs(getScreenSnapTop(index) - currentY);
    return nextDistance < nearestDistance ? index : nearestIndex;
  }, 0);
}

function getScreenSnapOffset(index) {
  if (index === 0) {
    return 8;
  }

  if (index === 1) {
    return 36;
  }

  return 154;
}

function getScreenSnapTop(index) {
  return getDocumentTop(screenTargets[index]) - getScreenSnapOffset(index);
}

function getNextDownScreenIndex() {
  const currentY = window.scrollY;
  return screenTargets.findIndex((target, index) => {
    if (!target) {
      return false;
    }

    return getScreenSnapTop(index) > currentY + 72;
  });
}

function shouldUseScreenSnap(event) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || window.innerWidth <= 1080 || screenTargets.length < 3 || isScreenSnapping) {
    return false;
  }

  if (event.ctrlKey || event.shiftKey || Math.abs(event.deltaY) < 18) {
    return false;
  }

  const thirdScreenTop = getScreenSnapTop(2);

  if (event.deltaY < 0) {
    return false;
  }

  return window.scrollY < thirdScreenTop - 8 && getNextDownScreenIndex() !== -1;
}

window.addEventListener("wheel", (event) => {
  if (!shouldUseScreenSnap(event)) {
    return;
  }

  const direction = event.deltaY > 0 ? 1 : -1;
  const now = performance.now();
  const nextIndex = direction > 0 ? getNextDownScreenIndex() : getNearestScreenIndex() + direction;

  if (nextIndex < 0 || nextIndex >= screenTargets.length) {
    return;
  }

  if (nextIndex === -1) {
    return;
  }

  if (now - lastWheelTime < wheelSnapCooldown) {
    return;
  }

  lastWheelTime = now;

  event.preventDefault();
  isScreenSnapping = true;
  const nextOffset = getScreenSnapOffset(nextIndex);
  animatedScrollTo(screenTargets[nextIndex], 980, nextOffset);

  window.setTimeout(() => {
    isScreenSnapping = false;
    lastWheelTime = performance.now();
  }, 1040);
}, { passive: false });

window.addEventListener("resize", () => {
  renderTopicList();
  renderClassTwoTopicList();
  renderClassThreeTopicList();
});

function render() {
  renderTopicList();
  renderDetail();
  renderPythonList();
  renderClassTwoTopicList();
  renderClassTwoDetail();
  renderClassThreeTopicList();
  renderClassThreeDetail();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextFilter = button.dataset.filter;
    const firstTopic = getFirstTopicForFilter(nextFilter);

    filterButtons.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");
    state.filter = nextFilter;
    state.selectedId = firstTopic.id;
    render();

    window.requestAnimationFrame(() => {
      const offset = window.innerWidth <= 780 ? 20 : 154;
      animatedScrollTo(topicScrollAnchor || topicPanel, 980, offset);
    });
  });
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setTab(button.dataset.tab, { scrollToPanel: true });
  });
});

function closeClassesMenu() {
  classesDropdown.removeAttribute("open");
}

classesDropdown.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", () => {
  closeClassesMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeClassesMenu();
    closeCompletionModal();
    classesDropdown.querySelector("summary").focus();
  }
});

closeCompletion.addEventListener("click", closeCompletionModal);

finishClassButton.addEventListener("click", () => {
  state.completionModalShown = true;
  openCompletionModal();
});

completionModal.addEventListener("click", (event) => {
  if (event.target === completionModal) {
    closeCompletionModal();
  }
});

continueClassTwo.addEventListener("click", () => {
  closeCompletionModal();
  if (classTwoPlaceholder) {
    animatedScrollTo(classTwoPlaceholder, 850, 118);
  }
});

function updateActiveClassHeader() {
  const activationPoint = Math.min(420, window.innerHeight * 0.48);
  const isClassFiveActive = Boolean(
    classFivePlaceholder && classFivePlaceholder.getBoundingClientRect().top <= activationPoint
  );
  const isClassFourActive = Boolean(
    classFourPlaceholder &&
      classFourPlaceholder.getBoundingClientRect().top <= activationPoint &&
      !isClassFiveActive
  );
  const isClassThreeActive = Boolean(
    classThreePlaceholder && classThreePlaceholder.getBoundingClientRect().top <= activationPoint && !isClassFourActive
  );
  const isClassTwoActive = Boolean(
    classTwoPlaceholder &&
      classTwoPlaceholder.getBoundingClientRect().top <= activationPoint &&
      !isClassThreeActive &&
      !isClassFourActive
  );

  document.body.classList.toggle("is-class-two-active", isClassTwoActive);
  document.body.classList.toggle("is-class-three-active", isClassThreeActive);
  document.body.classList.toggle("is-class-four-active", isClassFourActive);
  document.body.classList.toggle("is-class-five-active", isClassFiveActive);
}

window.addEventListener("scroll", updateActiveClassHeader, { passive: true });
window.addEventListener("resize", updateActiveClassHeader);
updateActiveClassHeader();

heroJumpButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    const tabId = button.dataset.tab;

    closeClassesMenu();

    if (tabId) {
      setTab(tabId);
    }

    window.requestAnimationFrame(() => {
      const target = document.getElementById(targetId);
      if (target) {
        animatedScrollTo(target, 850, 18);
      }
    });
  });
});

async function copyTextWithFeedback(button, text, copiedLabel = "Copiado") {
  try {
    await navigator.clipboard.writeText(text);
    button.textContent = copiedLabel;
  } catch {
    const range = document.createRange();
    const holder = document.createElement("pre");
    holder.textContent = text;
    holder.style.position = "fixed";
    holder.style.left = "-9999px";
    document.body.appendChild(holder);
    range.selectNodeContents(holder);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    button.textContent = "Seleccionado";
    window.setTimeout(() => {
      holder.remove();
    }, 0);
  }

  window.setTimeout(() => {
    button.textContent = button.dataset.defaultLabel || "Copiar";
  }, 1400);
}

copyCode.dataset.defaultLabel = copyCode.textContent;
copyCode.addEventListener("click", async () => {
  await copyTextWithFeedback(copyCode, codeBlock.textContent);
});

copyFullPython.dataset.defaultLabel = copyFullPython.textContent;
copyFullPython.addEventListener("click", async () => {
  await copyTextWithFeedback(copyFullPython, finalPythonCode, "Codigo copiado");
});

copyFinalCode.dataset.defaultLabel = copyFinalCode.textContent;
copyFinalCode.addEventListener("click", async () => {
  await copyTextWithFeedback(copyFinalCode, finalPythonCode);
});

if (copyClassTwoCode) {
  copyClassTwoCode.dataset.defaultLabel = copyClassTwoCode.textContent;
  copyClassTwoCode.addEventListener("click", async () => {
    await copyTextWithFeedback(copyClassTwoCode, classTwoCodeBlock.textContent);
  });
}

if (copyClassThreeCode) {
  copyClassThreeCode.dataset.defaultLabel = copyClassThreeCode.textContent;
  copyClassThreeCode.addEventListener("click", async () => {
    await copyTextWithFeedback(copyClassThreeCode, classThreeCodeBlock.textContent);
  });
}

if (copyStoreCode && storeCodeBlock) {
  copyStoreCode.dataset.defaultLabel = copyStoreCode.textContent;
  copyStoreCode.addEventListener("click", async () => {
    await copyTextWithFeedback(copyStoreCode, storeCodeBlock.textContent, "Código copiado");
  });
}

// -----------------------------------------------------------------------------
// [FRAME 01 - LÓGICA] EFECTO 3D DE INCLINACIÓN EN LA TARJETA DEL CURSO
// Calcula las coordenadas del cursor del mouse respecto al centro de la tarjeta
// y aplica transformaciones CSS 3D (rotateX, rotateY) para dar sensación de volumen.
// -----------------------------------------------------------------------------
function initCourseCardTilt() {
  if (!courseCard || !courseImage) {
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    return;
  }

  let animationFrame = 0;
  let lastPointerEvent = null;

  function resetCardTilt() {
    courseCard.classList.remove("is-pointer-active");
    courseCard.style.setProperty("--tilt-x", "0deg");
    courseCard.style.setProperty("--tilt-y", "0deg");
    courseCard.style.setProperty("--card-lift", "0px");
    courseCard.style.setProperty("--glow-x", "50%");
    courseCard.style.setProperty("--glow-y", "50%");
  }

  // La tarjeta se inclina usando todo el panel derecho como area sensible.
  // Por eso usamos courseImage para leer la posicion del mouse, no solo courseCard.
  function updateCardTilt(event) {
    const rect = courseImage.getBoundingClientRect();
    const relativeX = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const relativeY = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
    const centeredX = Math.max(-0.5, Math.min(0.5, relativeX - 0.5));
    const centeredY = Math.max(-0.5, Math.min(0.5, relativeY - 0.5));
    const tiltX = centeredY * -11;
    const tiltY = centeredX * 14;

    courseCard.classList.add("is-pointer-active");
    courseCard.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
    courseCard.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
    courseCard.style.setProperty("--card-lift", "-8px");
    courseCard.style.setProperty("--glow-x", `${Math.round(relativeX * 100)}%`);
    courseCard.style.setProperty("--glow-y", `${Math.round(relativeY * 100)}%`);
  }

  courseImage.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") {
      return;
    }

    lastPointerEvent = event;

    if (animationFrame) {
      return;
    }

    animationFrame = window.requestAnimationFrame(() => {
      animationFrame = 0;

      if (lastPointerEvent) {
        updateCardTilt(lastPointerEvent);
      }
    });
  });

  courseImage.addEventListener("pointerleave", resetCardTilt);
  courseImage.addEventListener("pointercancel", resetCardTilt);
}

// -----------------------------------------------------------------------------
// [FRAME 01 - LÓGICA] ANIMACIÓN DE ENTRADA ESCALONADA DEL HERO
// Añade clases CSS en momentos controlados para que el título, los botones y la
// tarjeta 3D aparezcan con una coreografía fluida y natural al cargar la página.
// -----------------------------------------------------------------------------
function initHeroIntro() {
  const hero = document.querySelector(".course-hero");
  const title = document.querySelector("#page-title");
  const calloutButton = document.querySelector(".classes-toggle");

  if (!hero || !title) {
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    hero.classList.remove("is-intro-pending");
    hero.classList.add("is-title-complete");
    hero.classList.add("is-intro-complete");
    calloutButton?.classList.add("is-callout-ready");
    return;
  }

  let charCount = 0;

  // Convertimos el titulo en letras individuales para animarlo letra por letra.
  // El aria-label conserva el texto completo para lectores de pantalla.
  if (!title.dataset.introSplit) {
    const titleLines = Array.from(title.children)
      .filter((child) => child.tagName === "SPAN")
      .map((line) => line.textContent);
    const sourceLines = titleLines.length ? titleLines : [title.textContent];

    title.setAttribute("aria-label", sourceLines.join(" ").replace(/\s+/g, " ").trim());
    title.textContent = "";

    sourceLines.forEach((lineText) => {
      const line = document.createElement("span");
      line.className = "hero-line";
      line.setAttribute("aria-hidden", "true");
      const wordParts = lineText.match(/\S+\s*/g) || [];

      wordParts.forEach((part) => {
        const wordText = part.trimEnd();
        const hasTrailingSpace = part.length > wordText.length;
        const isIaWord = wordText.toUpperCase() === "IA";
        const word = document.createElement("span");
        word.className = isIaWord ? "hero-word hero-ia-word" : "hero-word";

        Array.from(wordText).forEach((character) => {
          const glyph = document.createElement("span");
          glyph.className = isIaWord ? "hero-char hero-ia-char" : "hero-char";
          glyph.style.setProperty("--char-index", charCount);
          glyph.textContent = character;
          word.appendChild(glyph);
          charCount += 1;
        });

        line.appendChild(word);

        if (hasTrailingSpace) {
          const space = document.createElement("span");
          space.className = "hero-space";
          space.textContent = "\u00a0";
          line.appendChild(space);
        }
      });

      title.appendChild(line);
    });

    title.dataset.introSplit = "true";
  } else {
    charCount = title.querySelectorAll(".hero-char").length;
  }

  // Tiempos de la primera pantalla.
  // Puedes leerlos como una secuencia: sello, titulo, linea, texto, tarjetas y boton.
  // Si quieres hacer el titulo mas lento, sube charStep. Si quieres hacerlo mas rapido, bajalo.
  const introTiming = {
    titleStart: 520,
    charStep: 44,
    titleAnimation: 640,
    pauseAfterTitle: 220,
    ruleAnimation: 720,
    pauseAfterRule: 240,
    pauseAfterSubtitle: 220,
    imageSlide: 2200,
    buttonAfterImage: 260
  };

  const titleEnd = introTiming.titleStart + Math.max(charCount - 1, 0) * introTiming.charStep + introTiming.titleAnimation;
  const ruleDelay = titleEnd + introTiming.pauseAfterTitle;
  const subtitleDelay = ruleDelay + introTiming.ruleAnimation + introTiming.pauseAfterRule;
  const cardDelay = subtitleDelay + introTiming.pauseAfterSubtitle;
  const imageDelay = titleEnd + 180;
  const actionsDelay = imageDelay + introTiming.imageSlide + introTiming.buttonAfterImage;

  hero.style.setProperty("--intro-title-start", `${introTiming.titleStart}ms`);
  hero.style.setProperty("--intro-char-step", `${introTiming.charStep}ms`);
  hero.style.setProperty("--intro-rule-delay", `${ruleDelay}ms`);
  hero.style.setProperty("--intro-subtitle-delay", `${subtitleDelay}ms`);
  hero.style.setProperty("--intro-card-delay", `${cardDelay}ms`);
  hero.style.setProperty("--intro-image-delay", `${imageDelay}ms`);
  hero.style.setProperty("--intro-card-slide-duration", `${introTiming.imageSlide}ms`);
  hero.style.setProperty("--intro-actions-delay", `${actionsDelay}ms`);

  window.requestAnimationFrame(() => {
    hero.classList.remove("is-intro-pending");
    hero.classList.add("is-intro-ready");
  });

  window.setTimeout(() => {
    hero.classList.add("is-title-complete");
  }, titleEnd + 80);

  window.setTimeout(() => {
    hero.classList.add("is-intro-complete");
  }, actionsDelay + 900);

  if (calloutButton) {
    window.setTimeout(() => {
      calloutButton.classList.add("is-callout-ready");
    }, actionsDelay + 5000);

    ["pointerenter", "focus", "click"].forEach((eventName) => {
      calloutButton.addEventListener(eventName, () => {
        calloutButton.classList.remove("is-callout-ready");
      }, { once: true });
    });
  }
}

initHeroIntro();
initCourseCardTilt();
initCategoryCards();
render();

function runTopicIntroSequence() {
  const cards = Array.from(topicList.querySelectorAll(".topic-card"));

  if (!cards.length || topicList.dataset.sequencePlayed === "true") {
    return;
  }

  topicList.dataset.sequencePlayed = "true";
  topicList.classList.add("is-sequence-running");

  cards.forEach((card, index) => {
    window.setTimeout(() => {
      card.classList.add("is-sequence-active");
    }, index * 115);

    window.setTimeout(() => {
      card.classList.remove("is-sequence-active");
    }, index * 115 + 720);
  });

  window.setTimeout(() => {
    topicList.classList.remove("is-sequence-running");
  }, cards.length * 115 + 900);
}

function initScrollReveals() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = [
    ...Array.from(document.querySelectorAll(".class-header")).map((element, index) => ({
      element,
      variant: "reveal-from-left",
      delay: index * 120
    })),
    ...Array.from(document.querySelectorAll(".context-card")).map((element, index) => ({
      element,
      variant: index % 2 === 0 ? "reveal-from-left" : "reveal-from-right",
      delay: index * 180
    })),
    ...Array.from(document.querySelectorAll(".tabs")).map((element, index) => ({
      element,
      variant: "reveal-from-left",
      delay: 120 + index * 120
    })),
    ...Array.from(document.querySelectorAll(".lesson-step-card")).map((element, index) => ({
      element,
      variant: index % 2 === 0 ? "reveal-from-left" : "reveal-from-right",
      delay: (index % 4) * 80
    })),
    { element: topicPanel, variant: "reveal-from-right", delay: 260, onReveal: runTopicIntroSequence },
    { element: detailPanel, variant: "reveal-from-left", delay: 420 },
    { element: document.querySelector(".category-panel"), variant: "reveal-from-right", delay: 360 },
    { element: document.querySelector(".class-two-board"), variant: "reveal-from-right", delay: 260 },
    { element: document.querySelector(".class-two-next"), variant: "reveal-from-left", delay: 360 },
    { element: document.querySelector(".class-three-board"), variant: "reveal-from-right", delay: 260 },
    { element: document.querySelector(".class-three-next"), variant: "reveal-from-left", delay: 360 },
    { element: document.querySelector(".class-four-board"), variant: "reveal-from-right", delay: 260 },
    { element: document.querySelector(".class-five-board"), variant: "reveal-from-right", delay: 260 },
    { element: document.querySelector(".class-five-document"), variant: "reveal-from-left", delay: 220 },
    { element: document.querySelector(".final-project-showcase"), variant: "reveal-from-right", delay: 180 }
  ].filter((item) => item.element);

  revealItems.forEach(({ element, variant, delay }) => {
    element.classList.add("reveal-on-scroll", variant);
    element.style.setProperty("--reveal-delay", `${delay}ms`);
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(({ element, onReveal }) => {
      element.classList.add("is-revealed");
      onReveal?.();
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const match = revealItems.find((item) => item.element === entry.target);
      entry.target.classList.add("is-revealed");
      match?.onReveal?.();
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.16,
    rootMargin: "0px 0px -12% 0px"
  });

  revealItems.forEach(({ element }) => observer.observe(element));
}

initScrollReveals();

# Title: Tipos de datos en Python
numeros = 5
cadenas = "Hola"
booleanos = True
flotantes = 3.1416
listas = [1, 2, 3, 4, 5]
tuplas = (1, 2, 3, 4, 5)
diccionarios = {"nombre": "Horacio", "edad": 21}
conjuntos = {1, 2, 3, 4, 5}

# Métodos de los tipos de datos
miTexto = "Hola, soy un texto"  # Definimos una variable de tipo texto
miTexto.capitalize()  # Devuelve el texto con la primera letra en mayúsculas
miTexto.title()  # Devuelve el texto con la primera letra de cada palabra en mayúsculas
miTexto.lower()  # Devuelve el texto en minúsculas
miTexto.upper()  # Devuelve el texto en mayúsculas
miTexto.replace("Hola", "Adios")  # Reemplaza la palabra Hola por Adios
miTexto.find("texto")  # Devuelve la posición de la primera letra del texto

# Devuelve una lista con los elementos separados por la coma
miTexto.split(",")

# Combinados
miTexto.replace(",", "").lower().lower().split()

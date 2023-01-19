import pprint
import operaciones as op

# Creación de alias para funciones
p = pprint.pprint

# Inicialización de variables
a = 170
b = 12

# Impresión de resultados
# Suma
p(f"La suma de {a} y {b} es: {op.sumar(a, b)}")
# Resta
p(f"La resta de {a} y {b} es: {op.restar(a, b)}")
# Multiplicación
p(f"La multiplicación de {a} y {b} es: {op.multiplicar(a, b)}")
# División
p(f"La división de {a} y {b} es: {op.dividir(a, b):.2f}")

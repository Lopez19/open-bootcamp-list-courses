print("Ingrese su pero (en Kg): ")
peso = float(input())
print("Ingrese su estatura (en metros): ")
estatura = float(input())

# Indice de masa corporal
imc = peso / (estatura ** 2)
resultado = f"Tu índice de masa coporal es {imc:.2f}"

# Impresión de resultados
print(resultado)

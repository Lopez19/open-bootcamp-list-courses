class Vehiculo:
    color = "Rojo"
    ruedas = 4
    puertas = 2


class coche(Vehiculo):
    velocidad = 300
    cilindrada = 5000


super_deportivo = coche()
print(
    f"El color del coche es {super_deportivo.color}, tiene {super_deportivo.ruedas} ruedas, {super_deportivo.puertas} puertas, una velocidad de {super_deportivo.velocidad} km/h y una cilindrada de {super_deportivo.cilindrada} cc."
)

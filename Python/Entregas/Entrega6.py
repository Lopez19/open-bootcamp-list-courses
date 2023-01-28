# Inicializamos la clase Vehiculo
class Vehiculo():
    # Inicializamos los atributos de la clase
    def __init__(self, color, ruedas, puertas):
        self.color = color
        self.ruedas = ruedas
        self.puertas = puertas

    def __str__(self) -> str:
        return f"El color del coche es {self.color}, posee {self.ruedas} ruedas, tiene {self.puertas} puertas"


class coche(Vehiculo):
    def __init__(self, color, ruedas, puertas, velocidad, cilindrada):
        self.color = color
        self.ruedas = ruedas
        self.puertas = puertas
        self.velocidad = velocidad
        self.cilindrada = cilindrada

    def __str__(self) -> str:
        return super().__str__() + f", su velocidad es de {self.velocidad} Km/h y su cilindrada es de {self.cilindrada} cc."


# Creamos un objeto de la clase Vehiculo
# y le pasamos los parametros
# despues lo imprimimos
super_deportivo = coche("Rojo", 4, 2, 300, 5000)
print(super_deportivo)

import json


class Vehiculo:
    def __init__(self, color, puertas):
        self.color = color
        self.puertas = puertas

    def __str__(self):
        return f"Color: {self.color} - Puertas: {self.puertas}"


lamborgini = Vehiculo("Rojo", "4")
print(lamborgini)

# Abre el archivo en modo escritura binaria
f = open('lamborgini_objeto.txt', 'w+b')

# Serializa el objeto
# __dict__ devuelve un diccionario con los atributos del objeto
serializado = json.dumps(lamborgini.__dict__)

# Escribe el objeto serializado en el archivo
f.write(serializado.encode().capitalize())

f.seek(0)
print(f.read().decode())
f.close()

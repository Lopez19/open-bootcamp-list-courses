# inicializamos la clase Alumno
class Alumno():
    # inicializamos los atributos de la clase
    def __init__(self, nombre, nota) -> None:
        self.nombre = nombre
        self.nota = nota

    # creamos el metodo imprimir
    def imprimir(self) -> None:
        print(f"Nombre: {self.nombre} - Nota: {self.nota}")

    # creamos el metodo obtener resultado
    def resultado(self) -> None:
        if self.nota > 5:
            print(f"El alumno {self.nombre} ha aprobado")
        else:
            print(f"El alumno {self.nombre} ha reprobado")


# Programa principal
alumno_1 = Alumno("Horacio", 10)
alumno_2 = Alumno("Andrea", 5)

# Impriminos los resultados de los alumnos
alumno_1.imprimir()
alumno_1.resultado()

alumno_2.imprimir()
alumno_2.resultado()

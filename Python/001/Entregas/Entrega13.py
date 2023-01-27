import sqlite3

# Crear la conexión
connection = sqlite3.connect('ejercicio13.db', isolation_level=None)
# Crear el cursor
cursor = connection.cursor()

# Crear la tabla
cursor.execute("CREATE TABLE Alumnos(Id INT, Nombre TEXT, Apellido TEXT)")

# Insertar datos
cursor.execute("INSERT INTO Alumnos VALUES(1,'Horacio', 'Lopez')")
cursor.execute("INSERT INTO Alumnos VALUES(2,'Andrea', 'Perez')")
cursor.execute("INSERT INTO Alumnos VALUES(3,'Angela', 'Lopez')")
cursor.execute("INSERT INTO Alumnos VALUES(4,'Camilo', 'Martinez')")
cursor.execute("INSERT INTO Alumnos VALUES(5,'Martha', 'Garcia')")
cursor.execute("INSERT INTO Alumnos VALUES(6,'Ivonne', 'Alvarez')")
cursor.execute("INSERT INTO Alumnos VALUES(7,'Laura', 'Tovar')")
cursor.execute("INSERT INTO Alumnos VALUES(8,'Fausto', 'Carrillo')")

# Ejecutar una consulta
cursor.execute("SELECT * FROM Alumnos WHERE Nombre = 'Horacio'")

# Obtener los resultados
filas = cursor.fetchall()

# Imprimir los resultados
print(filas)

# Cerrar la conexión
connection.close()

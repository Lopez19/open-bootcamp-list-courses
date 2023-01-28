f = open('archivo.txt', 'w')
f.write("Mi primer archivo en Python.\n")
f.close()

f = open('archivo.txt', 'r+')
f.readline()
f.write("He vuelto a escribir en el archivo.\n")

f.seek(0)
print(f.read())
f.close()

standard_input = "Colombia, Argentina, Jamaica"
items = input("introduce los nombres separados por coma: ")
paises = [pais for pais in items.split(",")]

print(",".join(sorted(list(set(paises)))))

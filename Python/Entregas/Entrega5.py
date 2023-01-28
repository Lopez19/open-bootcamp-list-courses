# Si (año es divisible por 4) entonces es bisiesto, excepto si (año es divisible por 100) entonces no es bisiesto, excepto si (año es divisible por 400) entonces sí es bisiesto.
def is_bisiesto(year):
    return "Es bisiesto" if (year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)) else "No es bisiesto"


print(is_bisiesto(2001))

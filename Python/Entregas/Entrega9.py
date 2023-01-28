# importamos el modulo time
import time

# inicializamos la variable y ajustamos el formato de la fecha
get_hour = int(time.strftime("%H"))
get_minutes = int(time.strftime("%M"))

# realizamos la condicion para que nos de el mensaje
if get_hour >= 19:
    print(
        f"Es hora de irse a la casa son las {get_hour}:{get_minutes} horas."
    )
else:
    print(
        f"Quedan {19 - get_hour} horas y {59 - get_minutes} para irse a la casa."
    )

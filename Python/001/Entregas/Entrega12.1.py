import tkinter as tk

app = tk.Tk()
app.geometry("300x500")
app.title("Entrega 12.1 - Listbox")

# Variables
items = ["Lunes", "Martes", "Miercoles",
         "Jueves", "Viernes", "Sabado", "Domingo"]
lista = tk.Listbox(app, selectmode=tk.SINGLE)

# Dia de la Semana Label
tk.Label(
    app,
    text="Dias de la Semana",
).pack()

# Agregar Items a la Lista
for elemento in items:
    lista.insert(tk.END, elemento)

lista.pack()

# Ventana Principal
app.mainloop()

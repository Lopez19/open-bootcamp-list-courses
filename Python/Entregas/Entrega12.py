import tkinter as tk

app = tk.Tk()
app.geometry("300x500")
app.title("Entrega 12 - RadioButtons")


def seleccion():
    mostrarOpcion.config(text=f"Opcion seleccionada: {opcion.get()}")


def reiniciar():
    opcion.set(str(None))
    mostrarOpcion.config(text="")


# Opcion
opcion = tk.StringVar()
opcion.set(str(None))

# RadioButtons
tk.Radiobutton(
    app,
    text="Lunes",
    variable=opcion,
    value="Lunes",
    command=seleccion
).pack(
    anchor=tk.W
)

tk.Radiobutton(
    app,
    text="Martes",
    variable=opcion,
    value="Martes",
    command=seleccion
).pack(
    anchor=tk.W
)

tk.Radiobutton(
    app,
    text="Miercoles",
    variable=opcion,
    value="Miercoles",
    command=seleccion
).pack(
    anchor=tk.W
)


# Mostrar Seleccion en Ventana
mostrarOpcion = tk.Label(app)
mostrarOpcion.pack()

# Reiniciar
tk.Button(
    app,
    text="Reiniciar",
    command=reiniciar
).pack()

# Ventana principal
app.mainloop()

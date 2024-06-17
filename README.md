# Desafío - Veterinaria Js

Este proyecto es una pequeña aplicación backend desarrollada en Node.js que registra las horas de atención en una veterinaria.

## Archivos

- `index.js`: Archivo principal que se ejecuta para interactuar con la aplicación.
- `operaciones.js`: Contiene las funciones para registrar y leer citas de atención veterinaria.
- `citas.json`: Archivo JSON que almacena un arreglo de citas registradas.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener Node.js instalado en tu sistema.

## Uso

1. Abre una terminal y navega hasta el directorio del proyecto.
2. Para registrar una nueva cita, ejecuta el siguiente comando:

node index.js registrar <nombre_animal> <edad> <tipo_animal> <color> <enfermedad>

Reemplaza `<nombre_animal>`, `<edad>`, `<tipo_animal>`, `<color>` y `<enfermedad>` con los valores correspondientes a la cita que deseas registrar.

3. Para mostrar todas las citas registradas, ejecuta el siguiente comando:

node index.js leer

## Funcionalidades

- `registrar`: Agrega una nueva cita de atención veterinaria al archivo `citas.json`. La cita debe incluir el nombre del animal, la edad, el tipo de animal, el color y la enfermedad.
- `leer`: Muestra por consola todas las citas registradas en el archivo `citas.json`.

## Contribución

Si deseas contribuir a este proyecto, puedes seguir los siguientes pasos:

1. Haz un fork de este repositorio.
2. Crea una nueva rama con una descripción clara de la funcionalidad que deseas agregar: `git checkout -b nueva-funcionalidad`
3. Realiza los cambios necesarios y commit tus modificaciones: `git commit -m 'Agrega nueva funcionalidad'`
4. Sube tus cambios a la rama remota: `git push origin nueva-funcionalidad`
5. Crea un nuevo Pull Request en este repositorio.

## Licencia

Este proyecto está es parte del modulo Node Js del Bootcamp Full Stack de Desafio Latam

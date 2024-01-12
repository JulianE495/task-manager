# 🚀 Task Manager

Task Manager es una aplicación de gestión de tareas diseñada para ayudarte a organizar y realizar un seguimiento de tus tareas diarias de manera eficiente. 

## Tecnologías utilizadas

- React
- Laravel

# ⚙ Configuración del Entorno

Asegúrate de tener tu entorno configurado correctamente. Necesitarás tener instalados los siguientes:

- PHP 8.1
- Composer
- Node.js

## Descargar y Configurar el Proyecto

1. Descarga el proyecto o clónalo utilizando Git.
2. Copia el archivo `.env.example` a `.env` y configura las credenciales de la base de datos en este archivo.

## Instalación de Dependencias de PHP
Navega al directorio raíz del proyecto y ejecuta:

1. `composer install`

## Generar la Clave de Encriptación
Ejecuta el siguiente comando para generar y establecer la clave de encriptación:

1. `php artisan key:generate --ansi`

## Migraciones de la Base de Datos
Ejecuta las migraciones y siembra la base de datos con datos iniciales:

1. `php artisan migrate --seed`

## Iniciar el Servidor Local de Laravel
Ejecuta el siguiente comando para iniciar el servidor local de Laravel:

1. `php artisan serve`

## Configuración y Ejecución de React

1. En una nueva terminal, navega al directorio react dentro del proyecto.
2. Copia el archivo `react/.env.example` a `.env` y ajusta el parámetro `VITE_API_BASE_URL=http://localhost:8000`.

## Instalación de Dependencias de React
Ejecuta el siguiente comando para instalar las dependencias de Node.js:

1. `npm install`

## Iniciar el Servidor Vite para React
Ejecuta el siguiente comando para iniciar el servidor Vite para React:

1. `npm run dev`

## Iniciar Ambos Servidores
Abre una nueva terminal y ejecuta ambos comandos simultáneamente para iniciar tanto el servidor local de Laravel como el servidor Vite para React:

1. `php artisan serve`
2. `npm run dev`

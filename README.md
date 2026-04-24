# CursoJavascriptFE

## Dependencias

- **underscore** - Librería de utilidades funcionales para JavaScript

## Instalación

1. Clonar el repositorio:
```bash
git clone <tu-repo-url>
cd CursoJavascriptFE
```

2. Instalar las dependencias:
```bash
npm install
```

3. Abrir el proyecto en tu navegador:
   - Para **01-Fundamentos**: abre `01-Fundamentos/index.html`
   - Para **02-ProyectoBlackjack**: abre `02-ProyectoBlackjack/index.html`
   - Para **03-ViteApp**: ejecuta `npm run dev` en `03-ViteApp/`
   - Para **04-blackjack-vite**: ejecuta `npm run dev` en `04-blackjack-vite/`
   - Para **05-ToDoApp**: ejecuta `npm run dev` en `05-ToDoApp/`
   - Para **06-CallbacksPromisesGenerators**: ejecuta `npm run dev` en `06-CallbacksPromisesGenerators/`
   - Para **07-PeticionesHttp**: ejecuta `npm run dev` en `07-PeticionesHttp/`
   - Para **08-APPCRUD**: ejecuta `npm run dev` en `08-APPCRUD/` (y opcionalmente `npm run server` para el backend simulado)

## 01-Fundamentos - Conceptos Básicos

En esta sección se cubren los fundamentos esenciales de JavaScript:

- **Tipos primitivos** - Números, strings, booleanos, etc.
- **Operadores y lógica booleana** - Operaciones aritméticas, comparaciones y lógicas
- **Estructuras de control** - if-else, switch, operadores ternarios
- **Arreglos y objetos** - Manipulación de arrays y objetos literales
- **Funciones** - Declaración, parámetros, retorno y prototipos
- **Ciclos** - for, while, do-while
- **Clases y constructores** - Introducción a clases en JavaScript

## feat/module-pattern - Implementación

En esta sección tocaremos los siguientes temas:

- **Patrón módulo** - Implementación del patrón de diseño módulo para organizar mejor el código
- **Minimizar el código de forma manual** - Técnicas de minificación manual del código (posteriormente se realizará de forma automática)
- **Optimizaciones y protección de código** - Mejoras de rendimiento y técnicas para proteger el código

## feat/clases-esnext - Implementación

En esta sección tocaremos los siguientes temas:

- **Problemática de prototipos**
- **Clases**
- **Sets**
- **Gets**
- **Métodos estáticos**
- **Gets estáticos**
- **ESNext: Propiedades privadas (aún no soportado completamente)**
- **Singletons**
- **Múltiples constructores**

## 03-ViteApp - Introducción a Vite

En esta sección se introduce el uso de Vite para desarrollo moderno de JavaScript:

- **Configuración de Vite** - Setup básico de un proyecto con Vite
- **Módulos ES6** - Importación y exportación de módulos
- **Hot Module Replacement (HMR)** - Recarga automática durante desarrollo
- **Assets y estilos** - Manejo de imágenes, CSS y otros recursos
- **Componentes básicos** - Creación de componentes simples con JavaScript

## feat/To Do App - Implementación

En esta sección tocaremos los siguientes temas:

- **Modelo de datos** - Construcción del modelo `Todo` y gestión del estado de las tareas
- **Renderizado dinámico** - Generación de la lista de tareas en el DOM
- **Eventos del usuario** - Creación, eliminación y marcado de tareas como completadas
- **Separación de responsabilidades** - Uso de módulos y patrones para organizar lógica de UI y negocio
- **Persistencia** - Almacenamiento y recuperación de tareas en el navegador

## 04-blackjack-vite - Blackjack con Módulos

En esta sección se implementa el juego de Blackjack utilizando módulos ES6 y Vite:

- **Módulos y separación de responsabilidades** - Organización del código en módulos independientes
- **Creación de deck de cartas** - Generación y manejo del mazo de cartas
- **Lógica del juego** - Reglas de Blackjack, puntuación y turnos
- **Interfaz de usuario** - Renderizado de cartas y controles en el DOM
- **Eventos y estado** - Manejo de eventos de usuario y estado del juego

## feat/peticiones-http - Implementación

En esta sección tocaremos los siguientes temas:

- **Fetch API** - Consumo de APIs externas usando `fetch`
- **Async / await** - Manejo de promesas para operaciones asíncronas
- **Renderizado dinámico** - Actualización del DOM con datos recibidos de la API
- **Eventos de usuario** - Recarga de contenido mediante botones y listeners
- **Manejo de estado de carga** - Mostrar estado de carga mientras se espera la respuesta

## feat/callbacks

En esta sección se exploran conceptos avanzados de JavaScript asíncrono:

- **Variables de entorno** - Configuración y uso de variables de entorno
- **Callbacks y callback hell** - Funciones de callback y sus problemas de anidación
- **Promises y promise hell** - Promesas para manejo asíncrono y sus complicaciones
- **Async / await** - Sintaxis moderna para código asíncrono
- **Evitar los callback o promise hells** - Patrones para escribir código asíncrono mantenible
- **Funciones generadoras** - Generadores para control de flujo asíncrono
- **Funciones generadoras asíncronas** - Combinación de generadores con async/await


## feat/app-no-frameworks - Implementación

En esta sección se construye una aplicación CRUD completa sin frameworks de frontend:

- **Arquitectura limpia** - Separación en capas: store, presentation, use-cases
- **Gestión de estado** - Store centralizado para manejo de datos de usuarios
- **Operaciones CRUD** - Crear, leer, actualizar y eliminar usuarios
- **Paginación** - Navegación entre páginas de datos
- **Interfaz de usuario** - Componentes modulares para tabla, botones y modales
- **Simulación de backend** - Uso de json-server para API REST local
- **Manejo de formularios** - Validación y envío de datos de usuario

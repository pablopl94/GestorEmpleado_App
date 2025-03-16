# 🚀 Gestor de Empleados - Aplicación Completa (Angular 19 + Spring Boot + MySQL)

Este es un proyecto full stack desarrollado con **Angular 19** para el frontend y **Spring Boot** para el backend, con **MySQL** como base de datos. Permite la gestión de empleados a través de una interfaz moderna y una API REST.

🔗 **Repositorio del Frontend (Angular 19):** [GitHub - GestorEmpleado_App](https://github.com/pablopl94/GestorEmpleado_App)

🔗 **Repositorio del Backend (Spring Boot + MySQL):** [GitHub - GestorEmpleados_API](https://github.com/pablopl94/GestorEmpleados_API)

---

## 🌟 Características de la Aplicación

✅ **Frontend desarrollado con Angular 19** y Bootstrap.  
✅ **Consumo de la API REST con HttpClientModule.**  
✅ **Gestión de empleados con operaciones CRUD (Crear, Leer, Actualizar, Eliminar).**  
✅ **Diseño responsivo con Bootstrap para una mejor experiencia de usuario.**  
✅ **Navegación con Angular Router y parametrización de rutas.**  
✅ **Manejo de errores en las peticiones HTTP.**  
✅ **Integración con la API de Spring Boot.**  

---

## 🛠️ Tecnologías Utilizadas en la Aplicación

- **Angular 19**
- **TypeScript**
- **Bootstrap 5**
- **Angular Router**
- **RxJS** para manejo de datos asíncronos
- **HttpClientModule** para peticiones a la API
- **Spring Boot 3** (Backend)
- **MySQL** como base de datos

---

## 📂 Estructura del Proyecto (Frontend - Angular 19)

```
GestorEmpleado_App/
│── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── empleado-navBar/ # Componente del navegador reutilizable
│   │   │   ├── empleado-navBar/ # Componente del navegador reutilizable
│   │   ├── pages/
│   │   │   ├── empleado-list/    # Lista de empleados
│   │   │   ├── empleado-form/    # Formulario para crear/editar empleados
│   │   │   ├── empleado-details/ # Detalles del empleado
│   │   │   ├── empleado-buttons/ # Componente reutilizable
│   │   ├── services/
│   │   │   ├── empleado.service.ts # Servicio para la API
│   │   ├── app-routing.module.ts  # Configuración de rutas
│   │   ├── app.module.ts          # Configuración principal del módulo
│   ├── assets/
│   ├── index.html
│   ├── styles.css
│── angular.json  # Configuración de Angular
│── package.json  # Dependencias del proyecto
│── README.md  # Documentación del proyecto
```

---

## 📆 Instalación y Configuración

### **1️⃣ Clonar los Repositorios**
```bash
git clone https://github.com/pablopl94/GestorEmpleado_App.git
cd GestorEmpleado_App
```
```bash
git clone https://github.com/pablopl94/GestorEmpleados_API.git
cd GestorEmpleados_API
```

### **2️⃣ Instalar Dependencias en el Frontend**
```bash
npm install
```

### **3️⃣ Configurar la Conexión con la API**
Abre el archivo `src/environments/environment.ts` y asegúrate de que la URL de la API es correcta:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:9002/api/empleados'
};
```

### **4️⃣ Ejecutar el Backend (Spring Boot)**
```bash
mvn spring-boot:run
```
La API estará disponible en:  
📍 `http://localhost:8080/api/empleados`

### **5️⃣ Ejecutar el Frontend (Angular)**
```bash
ng serve
```
La aplicación estará disponible en:  
📍 `http://localhost:4200/`

---

## 🔥 Funcionalidades de la Aplicación

- **📋 Listado de empleados:** Se muestra la lista de empleados registrados en la base de datos.
- **➕ Agregar empleados:** Formulario para añadir un nuevo empleado.
- **✏️ Editar empleados:** Posibilidad de modificar la información de un empleado existente.
- **🗑️ Eliminar empleados:** Opción para borrar empleados de la base de datos.
- **🔍 Ver detalles de un empleado:** Página con información detallada de un empleado.

---

## ⚠️ Manejo de Errores en Angular

El frontend maneja los errores de la API REST para brindar una mejor experiencia al usuario.
Ejemplos:

| Código | Descripción |
|--------|------------|
| `404 Not Found` | Se muestra un mensaje cuando el empleado no existe. |
| `400 Bad Request` | Se valida la información antes de enviarla a la API. |
| `500 Internal Server Error` | Manejo de errores internos en la API. |

---
## 👨‍💻 Autor
**Pablo Prieto López**  
📧 Contacto: [pablopl94@gmail.com](mailto:pabloprietolopez94@outlook.es)  
🔗 GitHub: [github.com/pablopl94](https://github.com/pablopl94)

---

## 🚀 Conclusión
Este proyecto es una de mis primeras pruebas en el desarrollo de aplicaciones completas con **Angular 19 + Spring Boot + MySQL**. Me ha permitido aprender sobre la integración entre frontend y backend, el consumo de APIs REST, y la gestión de datos de una manera estructurada. En futuras versiones, me gustaría mejorar la validación de formularios y agregar autenticación con JWT.


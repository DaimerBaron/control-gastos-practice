# Control de Gastos Practice

¡Bienvenido/a al proyecto **Control de Gastos Practice**!  
Este proyecto es una aplicación web para gestionar y visualizar tus gastos personales, desarrollada con tecnologías modernas y pensada para aprender y practicar conceptos clave de desarrollo frontend y React.

---

## 🚀 Tecnologías Utilizadas

- **React**: Biblioteca principal para construir interfaces de usuario.
- **TypeScript**: Tipado estático para mayor robustez y mantenibilidad.
- **Tailwind CSS**: Framework de estilos utilitario para diseño responsivo y moderno.
- **React Swipeable List**: Para listas con acciones de swipe (actualizar y eliminar gastos).
- **Headless UI & Heroicons**: Componentes accesibles y bonitos iconos SVG.
- **Netlify**: Despliegue automático y hosting en la nube.
- **LocalStorage**: Persistencia de datos en el navegador.

---

## 📚 ¿Qué se aprende con este proyecto?

- **Gestión de estado global con hooks personalizados** (`useBudget`).
- **Uso de reducers para manejar acciones complejas** (agregar, editar, eliminar, filtrar gastos).
- **Diseño responsivo y mobile-first** con Tailwind.
- **Integración de componentes de terceros** (Swipeable List, Heroicons).
- **Persistencia de datos en LocalStorage**.
- **Despliegue continuo con Netlify y GitHub**.
- **Buenas prácticas de estructura y organización de carpetas en React + TypeScript**.

---

## 🗂️ Estructura del Proyecto

```
src/
│
├── components/        # Componentes reutilizables (modales, formularios, listas)
├── data/              # Datos estáticos (categorías)
├── helpers/           # Funciones utilitarias (formateo de fechas, etc.)
├── hooks/             # Hooks personalizados (useBudget)
├── reducers/          # Reducers para el manejo de estado
├── types/             # Tipos y interfaces TypeScript
├── index.css          # Estilos globales y Tailwind
└── App.tsx            # Componente principal
public/
│   └── icono_*.svg    # Iconos de categorías
```

---

## 💡 ¿De qué se trata la app?

La aplicación permite:

- **Agregar gastos** con nombre, cantidad, fecha y categoría.
- **Editar y eliminar gastos** fácilmente con gestos de swipe.
- **Filtrar gastos por categoría**.
- **Visualizar el presupuesto disponible y gastado**.
- **Persistir los datos aunque cierres el navegador**.

---

## 👩‍💻 Para quienes quieren practicar

Este proyecto es ideal para quienes desean:

- Aprender React y TypeScript desde cero.
- Practicar el uso de Tailwind CSS y diseño responsivo.
- Entender cómo manejar el estado global en React sin Redux.
- Ver ejemplos reales de integración de componentes externos.
- Mejorar la organización y estructura de proyectos frontend.

Puedes clonar el repositorio, modificarlo, agregar nuevas funcionalidades o cambiar el diseño para seguir aprendiendo.

---

## 🛠️ ¿Cómo ejecutar el proyecto?

1. Clona el repositorio:
   ```bash
   git clone https://github.com/BaronDls/control-gastos-practice.git
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Ejecuta en modo desarrollo:
   ```bash
   npm run dev
   ```
4. Para desplegar, ejecuta:
   ```bash
   npm run build
   ```

---

## 🌐 Demo

Puedes ver la versión desplegada en Netlify [aquí](https://control-gastos-practice.netlify.app/)

---

## 📢 ¡Explora, aprende y comparte!

Este proyecto está pensado para que lo uses como base, lo modifiques y lo compartas con otros estudiantes.  
¡No dudes en abrir issues, sugerencias o pull requests para mejorar la app!

---

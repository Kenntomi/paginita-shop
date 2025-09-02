# Paginita Shop - Tienda Virtual en React

## Descripción General

Paginita Shop es una moderna tienda virtual construida con React y Material-UI. Cuenta con un diseño responsive, galería de productos con filtrado por categorías, detalles de producto con selección de cantidad, funcionalidad de carrito de compras, proceso de pago con simulación, y un botón flotante de contacto.

## Características

- **Diseño Responsive**: Optimizado para dispositivos móviles, tablets y escritorio
- **Galería de Productos**: Navega por productos con filtrado por categorías y paginación
- **Detalles de Producto**: Visualiza información detallada del producto con imagen, descripción, precio y estado de stock
- **Carrito de Compras**: Añade productos al carrito, actualiza cantidades y elimina artículos
- **Proceso de Pago**: Checkout de múltiples pasos con información de envío, selección de método de pago y resumen del pedido
- **Simulación de Pago**: Procesamiento de pago simulado con confirmación de pedido
- **Modal de Contacto**: Botón flotante de contacto que abre un formulario para consultas de clientes
- **Navegación**: Barra de navegación amigable con enlaces a categorías e icono de carrito
- **Pie de Página**: Footer completo con enlaces rápidos, información de contacto e iconos de redes sociales

## Tecnologías Utilizadas

- **React**: Biblioteca frontend para construir interfaces de usuario
- **React Router**: Para navegación y enrutamiento
- **Material-UI**: Biblioteca de componentes para un diseño consistente y responsive
- **CSS**: Estilos personalizados con principios de diseño responsive
- **Vite**: Herramienta de construcción rápida y servidor de desarrollo

## Comenzando

### Requisitos Previos

- Node.js (v14 o superior)
- npm (v6 o superior)

### Instalación

1. Clonar el repositorio
2. Instalar dependencias:
   ```
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```
   npm run dev
   ```
4. Abrir el navegador y navegar a `http://localhost:5173`

## Estructura del Proyecto

```
src/
├── assets/         # Imágenes y recursos estáticos
├── components/     # Componentes reutilizables
│   ├── layout/     # Componentes de estructura (Navbar, Footer)
│   └── ui/         # Componentes de interfaz (ProductCard, etc.)
├── context/        # Contextos de React (carrito, etc.)
├── pages/          # Páginas principales de la aplicación
├── utils/          # Utilidades y datos simulados
├── App.css         # Estilos CSS principales
├── index.css       # Estilos CSS globales
└── App.jsx         # Componente principal de la aplicación
```

## Despliegue

### GitHub

1. Crea un nuevo repositorio en GitHub
2. Inicializa Git en tu proyecto local (si aún no lo has hecho):
   ```
   git init
   git add .
   git commit -m "Primer commit"
   ```
3. Conecta tu repositorio local con el remoto:
   ```
   git remote add origin https://github.com/tu-usuario/nombre-del-repo.git
   git branch -M main
   git push -u origin main
   ```

### Vercel

1. Crea una cuenta en [Vercel](https://vercel.com) si aún no tienes una
2. Importa tu repositorio de GitHub
3. Configura las opciones de despliegue (el archivo vercel.json ya está incluido)
4. Haz clic en "Deploy"

## Características Adicionales

- **Moneda en Soles (S/)**: Todos los precios se muestran en Soles peruanos
- **IGV (18%)**: Cálculo automático del Impuesto General a las Ventas del 18%
- **Diseño Mejorado**: Interfaz de usuario moderna y atractiva
- **Completamente Responsive**: Adaptable a todos los tamaños de pantalla
│   ├── layout/     # Componentes de diseño (Navbar, Footer, Layout)
│   └── ui/         # Componentes de interfaz (ProductCard, ContactButton, etc.)
├── context/        # Contexto de React para gestión de estado
├── pages/          # Componentes de páginas (Home, ProductDetail, Cart, Checkout)
├── utils/          # Funciones de utilidad y datos simulados
├── App.jsx         # Componente principal de la aplicación con enrutamiento
├── App.css         # Estilos globales
├── index.css       # Estilos raíz
├── main.jsx        # Punto de entrada
└── theme.js        # Configuración del tema de Material-UI
```

## Características a Añadir en el Futuro

- Autenticación de usuario y gestión de cuentas
- Funcionalidad de lista de deseos
- Reseñas y valoraciones de productos
- Opciones avanzadas de filtrado y ordenación
- Integración con una API backend para datos reales de productos
- Integración de pasarela de pago
- Historial y seguimiento de pedidos
- Panel de administración para gestión de productos

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulte el archivo LICENSE para más detalles.

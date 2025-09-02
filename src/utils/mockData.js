// Mock data for products
export const products = [
  {
    id: 1,
    name: 'Smartphone Galaxy Ultra',
    description: 'El último smartphone con pantalla AMOLED de 6.8", cámara profesional de 108MP, batería de 5000mAh y procesador de última generación. Incluye cargador rápido y funda protectora de regalo.',
    price: 599.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3',
    stock: 15
  },
  {
    id: 2,
    name: 'Laptop ProBook Elite',
    description: 'Laptop ultradelgada con procesador Intel i9, 32GB de RAM, 1TB SSD, tarjeta gráfica NVIDIA RTX 4080 y pantalla 4K de 15.6". Ideal para profesionales, diseñadores y gamers exigentes.',
    price: 1299.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3',
    stock: 8
  },
  {
    id: 3,
    name: 'Auriculares SoundMax Pro',
    description: 'Auriculares premium con cancelación activa de ruido, sonido envolvente 3D, conexión Bluetooth 5.2, batería de 40 horas y micrófono con reducción de ruido ambiental. Diseño ergonómico para máxima comodidad.',
    price: 149.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
    stock: 20
  },
  {
    id: 4,
    name: 'Camiseta Eco-Friendly',
    description: 'Camiseta de algodón orgánico 100% con certificación ecológica. Diseño exclusivo, corte moderno y disponible en varios colores. Tejido transpirable y suave al tacto que mantiene su forma lavado tras lavado.',
    price: 24.99,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2880&auto=format&fit=crop&ixlib=rb-4.0.3',
    stock: 50
  },
  {
    id: 5,
    name: 'Jeans Premium Comfort',
    description: 'Jeans de alta calidad con 2% de elastano para un ajuste perfecto. Fabricados con técnicas sostenibles, estos jeans ofrecen estilo, durabilidad y comodidad durante todo el día. Disponibles en varios tonos de azul.',
    price: 79.99,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=2926&auto=format&fit=crop&ixlib=rb-4.0.3',
    stock: 30
  },
  {
    id: 6,
    name: 'Zapatillas AeroFlex Runner',
    description: 'Zapatillas deportivas con tecnología de amortiguación avanzada, suela antideslizante y tejido transpirable. Diseñadas para corredores profesionales y aficionados que buscan rendimiento y estilo en cada paso.',
    price: 89.99,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
    stock: 25
  },
  {
    id: 7,
    name: 'Sofá Modular Elegance',
    description: 'Sofá modular con tapizado premium resistente a manchas y mascotas. Estructura de madera maciza, cojines de espuma viscoelástica y patas de metal. Personalizable en módulos para adaptarse a cualquier espacio.',
    price: 899.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
    stock: 5
  },
  {
    id: 8,
    name: 'Juego de Sábanas Luxury',
    description: 'Sábanas de algodón egipcio de 1000 hilos con acabado satinado. Incluye sábana bajera, encimera y dos fundas de almohada. Suavidad excepcional, transpirables y disponibles en colores elegantes para transformar tu dormitorio.',
    price: 49.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3',
    stock: 40
  },
  {
    id: 9,
    name: 'Lámpara Nórdica Ambient',
    description: 'Lámpara de diseño escandinavo con base de madera natural y pantalla de lino. Luz LED regulable con tres tonalidades para crear el ambiente perfecto. Ideal para dormitorio, oficina o sala de estar.',
    price: 39.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3',
    stock: 15
  },
  {
    id: 10,
    name: 'Set de Construcción Creativa',
    description: 'Set de 250 piezas de construcción compatibles con las principales marcas. Incluye bloques especiales, figuras y manual de ideas. Estimula la creatividad, la coordinación y el pensamiento espacial en niños a partir de 4 años.',
    price: 29.99,
    category: 'toys',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
    stock: 20
  },
  {
    id: 11,
    name: 'Muñeca Interactiva Sofia',
    description: 'Muñeca interactiva con más de 100 frases y respuestas, reconocimiento de voz y sensores táctiles. Incluye accesorios, ropa adicional y aplicación para personalizar la experiencia de juego. Ideal para fomentar el juego imaginativo.',
    price: 34.99,
    category: 'toys',
    image: 'https://images.unsplash.com/photo-1598465185929-242eeb70d5f9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
    stock: 12
  },
  {
    id: 12,
    name: 'Coche de Control Remoto',
    description: 'Coche a escala con control remoto, alta velocidad y batería recargable.',
    price: 59.99,
    category: 'toys',
    image: 'https://via.placeholder.com/300x300?text=RCCar',
    stock: 18
  }
];

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  if (!category || category === 'all') {
    return products;
  }
  return products.filter(product => product.category === category);
};

// Helper function to get a product by ID
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};
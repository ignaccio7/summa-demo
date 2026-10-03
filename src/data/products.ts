// src/data/products.ts
// Catálogo centralizado de productos y gestión de estado para Summa Demo

export interface EscalaPrecio {
  tramo: string;
  precio: string; // ej. 'Bs 68'
  highlight?: boolean;
}

export interface Producto {
  id: string;
  nombre: string;
  sku: string;
  categoria: string; // 'aceites' | 'granos' | 'azucar' | 'pastas' | 'lacteos' | 'limpieza' | 'bebidas' | 'pescados'
  categoriaLabel: string;
  proveedor: string; // 'Distribuidora Andina' | 'Mayorista El Sol' | 'Importadora Titicaca'
  tile: string; // Emoji
  tileCls: string; // 't1' | 't2' | 't3' | 't4' | 't5' | 't6'
  presentacion: string;
  stock: number;
  unidad: string; // 'cajas' | 'quintales' | 'fardos' | 'packs' | 'paquetes'
  stockStatus?: 'ok' | 'low';
  escalas: EscalaPrecio[];
  rating: number;
  publicado: boolean;
  grupo?: {
    tieneGrupo: boolean;
    texto: string;
    badgeCls: string; // 'b-ok' | 'b-warn' | 'b-tint' | 'b-o'
    progreso?: string;
    link?: string;
  };
}

export const INITIAL_PRODUCTS: Producto[] = [
  {
    id: 'prod-1',
    nombre: 'Aceite Fino 800 ml, caja x12',
    sku: 'ACE-FIN-800',
    categoria: 'aceites',
    categoriaLabel: 'Aceites y Grasas',
    proveedor: 'Distribuidora Andina',
    tile: '🛢️',
    tileCls: 't2',
    presentacion: 'Caja x 12 botellas (800 ml)',
    stock: 420,
    unidad: 'cajas',
    stockStatus: 'ok',
    rating: 4.8,
    publicado: true,
    escalas: [
      { tramo: '1 a 49 cajas', precio: 'Bs 80' },
      { tramo: '50 a 99 cajas', precio: 'Bs 74' },
      { tramo: '100 o más', precio: 'Bs 68', highlight: true },
    ],
    grupo: {
      tieneGrupo: true,
      texto: '1 grupo abierto: 100 de 100',
      badgeCls: 'b-ok',
      link: '/comerciante/grupo'
    }
  },
  {
    id: 'prod-2',
    nombre: 'Arroz Grano de Oro, quintal 50 kg',
    sku: 'ARR-GDO-50K',
    categoria: 'granos',
    categoriaLabel: 'Granos y Harinas',
    proveedor: 'Distribuidora Andina',
    tile: '🍚',
    tileCls: 't1',
    presentacion: 'Bolsa / Quintal 50 kg',
    stock: 180,
    unidad: 'bolsas',
    stockStatus: 'ok',
    rating: 4.6,
    publicado: true,
    escalas: [
      { tramo: '1 a 49 bolsas', precio: 'Bs 305' },
      { tramo: '50 a 99 bolsas', precio: 'Bs 292' },
      { tramo: '100 o más', precio: 'Bs 279', highlight: true },
    ],
    grupo: {
      tieneGrupo: true,
      texto: '1 grupo abierto: 62 de 100',
      badgeCls: 'b-warn',
      link: '/comerciante/grupo'
    }
  },
  {
    id: 'prod-3',
    nombre: 'Azúcar Guabirá, quintal 50 kg',
    sku: 'AZU-GUA-50K',
    categoria: 'azucar',
    categoriaLabel: 'Azúcar y Endulzantes',
    proveedor: 'Distribuidora Andina',
    tile: '🍬',
    tileCls: 't6',
    presentacion: 'Quintal 50 kg refinada',
    stock: 250,
    unidad: 'quintales',
    stockStatus: 'ok',
    rating: 4.8,
    publicado: true,
    escalas: [
      { tramo: '1 a 49 quintales', precio: 'Bs 410' },
      { tramo: '50 a 99 quintales', precio: 'Bs 395' },
      { tramo: '100 o más', precio: 'Bs 385', highlight: true },
    ],
    grupo: {
      tieneGrupo: false,
      texto: 'Sin grupo abierto todavía',
      badgeCls: 'b-tint',
      link: '#'
    }
  },
  {
    id: 'prod-4',
    nombre: 'Harina Princesa 000, quintal 50 kg',
    sku: 'HAR-PRI-50K',
    categoria: 'granos',
    categoriaLabel: 'Granos y Harinas',
    proveedor: 'Distribuidora Andina',
    tile: '🌾',
    tileCls: 't4',
    presentacion: 'Quintal 50 kg fortificada',
    stock: 310,
    unidad: 'quintales',
    stockStatus: 'ok',
    rating: 4.7,
    publicado: true,
    escalas: [
      { tramo: '1 a 49 quintales', precio: 'Bs 245' },
      { tramo: '50 a 99 quintales', precio: 'Bs 235' },
      { tramo: '100 o más', precio: 'Bs 220', highlight: true },
    ],
    grupo: {
      tieneGrupo: true,
      texto: '1 grupo abierto: 45 de 100',
      badgeCls: 'b-warn',
      link: '/comerciante/grupo'
    }
  },
  {
    id: 'prod-5',
    nombre: 'Detergente Ola 1 kg, caja x20',
    sku: 'DET-OLA-20U',
    categoria: 'limpieza',
    categoriaLabel: 'Limpieza',
    proveedor: 'Mayorista El Sol',
    tile: '🧴',
    tileCls: 't3',
    presentacion: 'Caja x20 bolsas de 1 kg',
    stock: 160,
    unidad: 'cajas',
    stockStatus: 'ok',
    rating: 4.6,
    publicado: true,
    escalas: [
      { tramo: '1 a 29 cajas', precio: 'Bs 190' },
      { tramo: '30 a 59 cajas', precio: 'Bs 178' },
      { tramo: '60 o más', precio: 'Bs 169', highlight: true },
    ],
    grupo: {
      tieneGrupo: true,
      texto: '1 grupo abierto: 38 de 60',
      badgeCls: 'b-warn',
      link: '/comerciante/grupo'
    }
  },
  {
    id: 'prod-6',
    nombre: 'Atún Sardimar en aceite, caja x48',
    sku: 'ATU-SAR-48U',
    categoria: 'pescados',
    categoriaLabel: 'Abarrotes y Enlatados',
    proveedor: 'Importadora Titicaca',
    tile: '🥫',
    tileCls: 't5',
    presentacion: 'Caja x 48 latas (170g)',
    stock: 90,
    unidad: 'cajas',
    stockStatus: 'ok',
    rating: 4.3,
    publicado: true,
    escalas: [
      { tramo: '1 a 24 cajas', precio: 'Bs 336' },
      { tramo: '25 a 49 cajas', precio: 'Bs 318' },
      { tramo: '50 o más', precio: 'Bs 299', highlight: true },
    ],
    grupo: {
      tieneGrupo: true,
      texto: '1 grupo abierto: 21 de 50',
      badgeCls: 'b-tint',
      link: '/comerciante/grupo'
    }
  },
  {
    id: 'prod-7',
    nombre: 'Refresco Cielo 2 litros, pack x8',
    sku: 'REF-CIE-8PK',
    categoria: 'bebidas',
    categoriaLabel: 'Bebidas',
    proveedor: 'Mayorista El Sol',
    tile: '🥤',
    tileCls: 't4',
    presentacion: 'Paquete x 8 botellas 2L',
    stock: 140,
    unidad: 'paquetes',
    stockStatus: 'ok',
    rating: 4.6,
    publicado: true,
    escalas: [
      { tramo: '1 a 39 paquetes', precio: 'Bs 74' },
      { tramo: '40 a 79 paquetes', precio: 'Bs 69' },
      { tramo: '80 o más', precio: 'Bs 64', highlight: true },
    ],
    grupo: {
      tieneGrupo: false,
      texto: 'Sin grupo abierto todavía',
      badgeCls: 'b-tint',
      link: '#'
    }
  },
  {
    id: 'prod-8',
    nombre: 'Fideos Famosa Surtido, caja x20',
    sku: 'FID-FAM-20U',
    categoria: 'pastas',
    categoriaLabel: 'Pastas y Fideos',
    proveedor: 'Distribuidora Andina',
    tile: '🍝',
    tileCls: 't5',
    presentacion: 'Caja x 20 paquetes (400g c/u)',
    stock: 560,
    unidad: 'cajas',
    stockStatus: 'ok',
    rating: 4.7,
    publicado: true,
    escalas: [
      { tramo: '1 a 49 cajas', precio: 'Bs 95' },
      { tramo: '50 a 99 cajas', precio: 'Bs 89' },
      { tramo: '100 o más', precio: 'Bs 82', highlight: true },
    ],
    grupo: {
      tieneGrupo: false,
      texto: 'Sin grupo abierto todavía',
      badgeCls: 'b-tint',
      link: '#'
    }
  },
  {
    id: 'prod-9',
    nombre: 'Leche Gloria Entera, pack x24 latas',
    sku: 'LEC-GLO-24L',
    categoria: 'lacteos',
    categoriaLabel: 'Lácteos',
    proveedor: 'Distribuidora Andina',
    tile: '🥛',
    tileCls: 't3',
    presentacion: 'Pack x 24 latas (410g)',
    stock: 28,
    unidad: 'packs',
    stockStatus: 'low',
    rating: 4.9,
    publicado: true,
    escalas: [
      { tramo: '1 a 29 packs', precio: 'Bs 195' },
      { tramo: '30 a 59 packs', precio: 'Bs 188' },
      { tramo: '60 o más', precio: 'Bs 179', highlight: true },
    ],
    grupo: {
      tieneGrupo: true,
      texto: '1 grupo abierto: 30 de 60',
      badgeCls: 'b-warn',
      link: '/comerciante/grupo'
    }
  }
];

export const STORAGE_KEY = 'summa_products_catalog_v2';

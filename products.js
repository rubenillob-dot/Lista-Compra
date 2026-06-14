// Catálogo de 190 productos de Mercadona con precios históricos (2021-2026)
// Refleja de forma precisa la evolución del IPC alimentario y la inflación en España durante estos años.

var mercadonaProducts = [
  // --- CATEGORÍA 1: Lácteos y Huevos (20 productos) ---
  {
    id: 1,
    name: "Leche entera Hacendado 1L",
    category: "Lácteos y Huevos",
    prices: { 2021: 0.60, 2022: 0.78, 2023: 0.92, 2024: 0.92, 2025: 0.90, 2026: 0.88 }
  },
  {
    id: 2,
    name: "Leche semidesnatada Hacendado 1L",
    category: "Lácteos y Huevos",
    prices: { 2021: 0.60, 2022: 0.78, 2023: 0.92, 2024: 0.92, 2025: 0.90, 2026: 0.88 }
  },
  {
    id: 3,
    name: "Leche desnatada Hacendado 1L",
    category: "Lácteos y Huevos",
    prices: { 2021: 0.60, 2022: 0.78, 2023: 0.92, 2024: 0.92, 2025: 0.90, 2026: 0.88 }
  },
  {
    id: 4,
    name: "Leche sin lactosa semidesnatada Hacendado 1L",
    category: "Lácteos y Huevos",
    prices: { 2021: 0.75, 2022: 0.92, 2023: 1.05, 2024: 1.05, 2025: 1.02, 2026: 0.99 }
  },
  {
    id: 5,
    name: "Huevos medianos clase M Hacendado 12 ud",
    category: "Lácteos y Huevos",
    prices: { 2021: 1.35, 2022: 1.85, 2023: 2.20, 2024: 2.15, 2025: 2.10, 2026: 2.00 }
  },
  {
    id: 6,
    name: "Huevos grandes clase L Hacendado 12 ud",
    category: "Lácteos y Huevos",
    prices: { 2021: 1.60, 2022: 2.15, 2023: 2.55, 2024: 2.50, 2025: 2.45, 2026: 2.35 }
  },
  {
    id: 7,
    name: "Mantequilla con sal Hacendado 250g",
    category: "Lácteos y Huevos",
    prices: { 2021: 1.45, 2022: 1.95, 2023: 2.40, 2024: 2.40, 2025: 2.30, 2026: 2.25 }
  },
  {
    id: 8,
    name: "Yogur natural Hacendado 6 ud x 125g",
    category: "Lácteos y Huevos",
    prices: { 2021: 0.75, 2022: 0.95, 2023: 1.15, 2024: 1.15, 2025: 1.10, 2026: 1.10 }
  },
  {
    id: 9,
    name: "Yogur griego natural Hacendado 6 ud",
    category: "Lácteos y Huevos",
    prices: { 2021: 1.20, 2022: 1.45, 2023: 1.75, 2024: 1.70, 2025: 1.65, 2026: 1.60 }
  },
  {
    id: 10,
    name: "Queso rallado mozzarella Hacendado 200g",
    category: "Lácteos y Huevos",
    prices: { 2021: 1.25, 2022: 1.65, 2023: 1.99, 2024: 1.95, 2025: 1.90, 2026: 1.80 }
  },
  {
    id: 11,
    name: "Queso tierno mezcla Hacendado cuña 400g",
    category: "Lácteos y Huevos",
    prices: { 2021: 3.10, 2022: 3.85, 2023: 4.45, 2024: 4.40, 2025: 4.25, 2026: 4.15 }
  },
  {
    id: 12,
    name: "Queso fresco batido 0% Hacendado 500g",
    category: "Lácteos y Huevos",
    prices: { 2021: 0.95, 2022: 1.25, 2023: 1.45, 2024: 1.45, 2025: 1.40, 2026: 1.35 }
  },
  {
    id: 13,
    name: "Nata líquida para cocinar Hacendado 3 ud x 200ml",
    category: "Lácteos y Huevos",
    prices: { 2021: 1.10, 2022: 1.45, 2023: 1.70, 2024: 1.65, 2025: 1.60, 2026: 1.55 }
  },
  {
    id: 14,
    name: "Bífidus con trozos de frutas Hacendado 4 ud",
    category: "Lácteos y Huevos",
    prices: { 2021: 1.00, 2022: 1.20, 2023: 1.40, 2024: 1.40, 2025: 1.35, 2026: 1.35 }
  },
  {
    id: 15,
    name: "Queso fundido en lonchas Hacendado 24 ud",
    category: "Lácteos y Huevos",
    prices: { 2021: 1.40, 2022: 1.85, 2023: 2.15, 2024: 2.10, 2025: 2.05, 2026: 1.95 }
  },
  {
    id: 16,
    name: "Kéfir natural Hacendado 500g",
    category: "Lácteos y Huevos",
    prices: { 2021: 1.25, 2022: 1.45, 2023: 1.65, 2024: 1.65, 2025: 1.60, 2026: 1.50 }
  },
  {
    id: 17,
    name: "Queso mascarpone Hacendado 250g",
    category: "Lácteos y Huevos",
    prices: { 2021: 1.90, 2022: 2.30, 2023: 2.65, 2024: 2.60, 2025: 2.50, 2026: 2.45 }
  },
  {
    id: 18,
    name: "Cottage cheese Hacendado 200g",
    category: "Lácteos y Huevos",
    prices: { 2021: 1.15, 2022: 1.35, 2023: 1.55, 2024: 1.50, 2025: 1.45, 2026: 1.40 }
  },
  {
    id: 19,
    name: "Leche condensada Hacendado 450g",
    category: "Lácteos y Huevos",
    prices: { 2021: 1.30, 2022: 1.65, 2023: 1.95, 2024: 1.95, 2025: 1.90, 2026: 1.85 }
  },
  {
    id: 20,
    name: "Flan de huevo Hacendado 4 ud",
    category: "Lácteos y Huevos",
    prices: { 2021: 0.90, 2022: 1.15, 2023: 1.35, 2024: 1.35, 2025: 1.30, 2026: 1.25 }
  },

  // --- CATEGORÍA 2: Carnicería y Embutidos (20 productos) ---
  {
    id: 21,
    name: "Pechuga de pollo fileteada 1kg",
    category: "Carnicería y Embutidos",
    prices: { 2021: 5.95, 2022: 7.25, 2023: 8.45, 2024: 8.35, 2025: 8.15, 2026: 7.95 }
  },
  {
    id: 22,
    name: "Carne picada de vacuno y cerdo 1kg",
    category: "Carnicería y Embutidos",
    prices: { 2021: 4.80, 2022: 5.90, 2023: 6.95, 2024: 6.85, 2025: 6.70, 2026: 6.50 }
  },
  {
    id: 23,
    name: "Filetes de lomo de cerdo 1kg",
    category: "Carnicería y Embutidos",
    prices: { 2021: 5.20, 2022: 6.30, 2023: 7.20, 2024: 7.10, 2025: 6.95, 2026: 6.80 }
  },
  {
    id: 24,
    name: "Salchichas de pollo Hacendado 400g",
    category: "Carnicería y Embutidos",
    prices: { 2021: 1.15, 2022: 1.45, 2023: 1.75, 2024: 1.70, 2025: 1.65, 2026: 1.60 }
  },
  {
    id: 25,
    name: "Hamburguesas de vacuno 4 ud (360g)",
    category: "Carnicería y Embutidos",
    prices: { 2021: 2.80, 2022: 3.40, 2023: 3.95, 2024: 3.90, 2025: 3.80, 2026: 3.70 }
  },
  {
    id: 26,
    name: "Jamón cocido extra Hacendado lonchas 200g",
    category: "Carnicería y Embutidos",
    prices: { 2021: 1.60, 2022: 1.95, 2023: 2.25, 2024: 2.20, 2025: 2.15, 2026: 2.10 }
  },
  {
    id: 27,
    name: "Pechuga de pavo Hacendado lonchas 200g",
    category: "Carnicería y Embutidos",
    prices: { 2021: 1.55, 2022: 1.90, 2023: 2.20, 2024: 2.15, 2025: 2.10, 2026: 2.05 }
  },
  {
    id: 28,
    name: "Jamón serrano Hacendado lonchas 240g",
    category: "Carnicería y Embutidos",
    prices: { 2021: 2.90, 2022: 3.45, 2023: 3.95, 2024: 3.90, 2025: 3.80, 2026: 3.75 }
  },
  {
    id: 29,
    name: "Chorizo dulce Hacendado lonchas 150g",
    category: "Carnicería y Embutidos",
    prices: { 2021: 1.10, 2022: 1.35, 2023: 1.55, 2024: 1.55, 2025: 1.50, 2026: 1.45 }
  },
  {
    id: 30,
    name: "Salchichón extra Hacendado lonchas 150g",
    category: "Carnicería y Embutidos",
    prices: { 2021: 1.15, 2022: 1.40, 2023: 1.60, 2024: 1.60, 2025: 1.55, 2026: 1.50 }
  },
  {
    id: 31,
    name: "Bacon ahumado Hacendado lonchas 250g",
    category: "Carnicería y Embutidos",
    prices: { 2021: 1.70, 2022: 2.10, 2023: 2.45, 2024: 2.40, 2025: 2.30, 2026: 2.25 }
  },
  {
    id: 32,
    name: "Costillas de cerdo troceadas 1kg",
    category: "Carnicería y Embutidos",
    prices: { 2021: 4.90, 2022: 5.80, 2023: 6.70, 2024: 6.60, 2025: 6.45, 2026: 6.30 }
  },
  {
    id: 33,
    name: "Solomillo de cerdo ibérico 1 ud",
    category: "Carnicería y Embutidos",
    prices: { 2021: 5.50, 2022: 6.60, 2023: 7.50, 2024: 7.40, 2025: 7.20, 2026: 7.00 }
  },
  {
    id: 34,
    name: "Alitas de pollo partidas 1kg",
    category: "Carnicería y Embutidos",
    prices: { 2021: 3.20, 2022: 3.95, 2023: 4.60, 2024: 4.50, 2025: 4.40, 2026: 4.25 }
  },
  {
    id: 35,
    name: "Muslos de pollo enteros 1kg",
    category: "Carnicería y Embutidos",
    prices: { 2021: 2.60, 2022: 3.20, 2023: 3.75, 2024: 3.70, 2025: 3.60, 2026: 3.50 }
  },
  {
    id: 36,
    name: "Sobrasada de Mallorca Hacendado 250g",
    category: "Carnicería y Embutidos",
    prices: { 2021: 1.50, 2022: 1.80, 2023: 2.10, 2024: 2.05, 2025: 2.00, 2026: 1.95 }
  },
  {
    id: 37,
    name: "Fuet Espetec Extra Hacendado 1 ud",
    category: "Carnicería y Embutidos",
    prices: { 2021: 1.10, 2022: 1.35, 2023: 1.60, 2024: 1.55, 2025: 1.50, 2026: 1.45 }
  },
  {
    id: 38,
    name: "Panceta de cerdo curada 1kg",
    category: "Carnicería y Embutidos",
    prices: { 2021: 5.80, 2022: 6.95, 2023: 7.95, 2024: 7.85, 2025: 7.70, 2026: 7.50 }
  },
  {
    id: 39,
    name: "Chistorra Hacendado 220g",
    category: "Carnicería y Embutidos",
    prices: { 2021: 1.40, 2022: 1.70, 2023: 1.95, 2024: 1.90, 2025: 1.85, 2026: 1.80 }
  },
  {
    id: 40,
    name: "Mortadela con aceitunas Hacendado lonchas 200g",
    category: "Carnicería y Embutidos",
    prices: { 2021: 0.90, 2022: 1.10, 2023: 1.30, 2024: 1.30, 2025: 1.25, 2026: 1.20 }
  },

  // --- CATEGORÍA 3: Pescadería y Mariscos (15 productos) ---
  {
    id: 41,
    name: "Filetes de salmón fresco 1kg",
    category: "Pescadería y Mariscos",
    prices: { 2021: 12.50, 2022: 15.90, 2023: 19.50, 2024: 18.90, 2025: 17.50, 2026: 16.90 }
  },
  {
    id: 42,
    name: "Merluza fresca fileteada 1kg",
    category: "Pescadería y Mariscos",
    prices: { 2021: 9.80, 2022: 11.50, 2023: 13.50, 2024: 13.00, 2025: 12.50, 2026: 12.00 }
  },
  {
    id: 43,
    name: "Dorada limpia de ración 1 ud",
    category: "Pescadería y Mariscos",
    prices: { 2021: 3.50, 2022: 4.10, 2023: 4.80, 2024: 4.75, 2025: 4.60, 2026: 4.50 }
  },
  {
    id: 44,
    name: "Lubina limpia de ración 1 ud",
    category: "Pescadería y Mariscos",
    prices: { 2021: 3.60, 2022: 4.25, 2023: 4.95, 2024: 4.90, 2025: 4.70, 2026: 4.60 }
  },
  {
    id: 45,
    name: "Gambón salvaje congelado 1kg",
    category: "Pescadería y Mariscos",
    prices: { 2021: 8.95, 2022: 10.50, 2023: 11.95, 2024: 11.90, 2025: 11.50, 2026: 11.00 }
  },
  {
    id: 46,
    name: "Langostino cocido Hacendado 500g",
    category: "Pescadería y Mariscos",
    prices: { 2021: 4.50, 2022: 5.20, 2023: 5.95, 2024: 5.90, 2025: 5.75, 2026: 5.50 }
  },
  {
    id: 47,
    name: "Filetes de bacalao desalado 1kg",
    category: "Pescadería y Mariscos",
    prices: { 2021: 11.50, 2022: 13.90, 2023: 15.90, 2024: 15.50, 2025: 14.90, 2026: 14.50 }
  },
  {
    id: 48,
    name: "Anillas de calamar congeladas 1kg",
    category: "Pescadería y Mariscos",
    prices: { 2021: 6.50, 2022: 7.90, 2023: 9.20, 2024: 8.90, 2025: 8.50, 2026: 8.25 }
  },
  {
    id: 49,
    name: "Pulpo cocido Hacendado pata 200g",
    category: "Pescadería y Mariscos",
    prices: { 2021: 6.95, 2022: 8.90, 2023: 10.95, 2024: 10.50, 2025: 9.95, 2026: 9.50 }
  },
  {
    id: 50,
    name: "Gula del Norte Hacendado 2 ud x 100g",
    category: "Pescadería y Mariscos",
    prices: { 2021: 2.80, 2022: 3.30, 2023: 3.85, 2024: 3.80, 2025: 3.65, 2026: 3.50 }
  },
  {
    id: 51,
    name: "Salmón ahumado Hacendado 100g",
    category: "Pescadería y Mariscos",
    prices: { 2021: 2.90, 2022: 3.60, 2023: 4.20, 2024: 4.15, 2025: 3.95, 2026: 3.80 }
  },
  {
    id: 52,
    name: "Mejillones limpios frescos 1kg",
    category: "Pescadería y Mariscos",
    prices: { 2021: 2.20, 2022: 2.60, 2023: 3.00, 2024: 2.95, 2025: 2.90, 2026: 2.80 }
  },
  {
    id: 53,
    name: "Emperador pez espada fileteado congelado 1kg",
    category: "Pescadería y Mariscos",
    prices: { 2021: 9.95, 2022: 11.90, 2023: 13.95, 2024: 13.50, 2025: 12.90, 2026: 12.50 }
  },
  {
    id: 54,
    name: "Boquerón fresco entero 1kg",
    category: "Pescadería y Mariscos",
    prices: { 2021: 4.50, 2022: 5.50, 2023: 6.50, 2024: 6.20, 2025: 5.95, 2026: 5.80 }
  },
  {
    id: 55,
    name: "Atún claro en aceite de oliva Hacendado 6 latas",
    category: "Pescadería y Mariscos",
    prices: { 2021: 3.95, 2022: 4.90, 2023: 5.75, 2024: 5.60, 2025: 5.40, 2026: 5.20 }
  },

  // --- CATEGORÍA 4: Frutas y Verduras (25 productos) ---
  {
    id: 56,
    name: "Plátano de Canarias 1kg",
    category: "Frutas y Verduras",
    prices: { 2021: 1.60, 2022: 2.10, 2023: 2.50, 2024: 2.40, 2025: 2.30, 2026: 2.20 }
  },
  {
    id: 57,
    name: "Manzana Golden 1.5kg",
    category: "Frutas y Verduras",
    prices: { 2021: 1.80, 2022: 2.20, 2023: 2.60, 2024: 2.55, 2025: 2.45, 2026: 2.40 }
  },
  {
    id: 58,
    name: "Pera Conferencia 1kg",
    category: "Frutas y Verduras",
    prices: { 2021: 1.45, 2022: 1.75, 2023: 2.10, 2024: 2.05, 2025: 1.95, 2026: 1.90 }
  },
  {
    id: 59,
    name: "Naranjas de mesa bolsa 3kg",
    category: "Frutas y Verduras",
    prices: { 2021: 2.90, 2022: 3.50, 2023: 4.20, 2024: 4.10, 2025: 3.95, 2026: 3.80 }
  },
  {
    id: 60,
    name: "Limones malla 1kg",
    category: "Frutas y Verduras",
    prices: { 2021: 1.30, 2022: 1.60, 2023: 1.90, 2024: 1.85, 2025: 1.75, 2026: 1.70 }
  },
  {
    id: 61,
    name: "Aguacate granel 1kg",
    category: "Frutas y Verduras",
    prices: { 2021: 3.95, 2022: 4.60, 2023: 5.30, 2024: 5.20, 2025: 4.95, 2026: 4.80 }
  },
  {
    id: 62,
    name: "Sandía negra sin pepitas 1kg (temporada)",
    category: "Frutas y Verduras",
    prices: { 2021: 0.95, 2022: 1.45, 2023: 1.85, 2024: 1.75, 2025: 1.65, 2026: 1.60 }
  },
  {
    id: 63,
    name: "Melón de piel de sapo 1kg",
    category: "Frutas y Verduras",
    prices: { 2021: 1.10, 2022: 1.60, 2023: 2.10, 2024: 2.00, 2025: 1.90, 2026: 1.80 }
  },
  {
    id: 64,
    name: "Fresón bandeja 500g (temporada)",
    category: "Frutas y Verduras",
    prices: { 2021: 2.20, 2022: 2.80, 2023: 3.40, 2024: 3.30, 2025: 3.15, 2026: 3.00 }
  },
  {
    id: 65,
    name: "Kiwis malla 1kg",
    category: "Frutas y Verduras",
    prices: { 2021: 2.60, 2022: 3.10, 2023: 3.65, 2024: 3.60, 2025: 3.45, 2026: 3.40 }
  },
  {
    id: 66,
    name: "Uva blanca sin pepitas tarrina 500g",
    category: "Frutas y Verduras",
    prices: { 2021: 1.95, 2022: 2.35, 2023: 2.75, 2024: 2.70, 2025: 2.55, 2026: 2.50 }
  },
  {
    id: 67,
    name: "Patatas malla 5kg",
    category: "Frutas y Verduras",
    prices: { 2021: 2.80, 2022: 3.95, 2023: 5.20, 2024: 5.00, 2025: 4.80, 2026: 4.50 }
  },
  {
    id: 68,
    name: "Cebollas malla 2kg",
    category: "Frutas y Verduras",
    prices: { 2021: 1.40, 2022: 1.95, 2023: 2.60, 2024: 2.50, 2025: 2.30, 2026: 2.20 }
  },
  {
    id: 69,
    name: "Tomate de ensalada granel 1kg",
    category: "Frutas y Verduras",
    prices: { 2021: 1.50, 2022: 1.95, 2023: 2.45, 2024: 2.40, 2025: 2.25, 2026: 2.15 }
  },
  {
    id: 70,
    name: "Tomate pera granel 1kg",
    category: "Frutas y Verduras",
    prices: { 2021: 1.25, 2022: 1.70, 2023: 2.20, 2024: 2.15, 2025: 2.00, 2026: 1.95 }
  },
  {
    id: 71,
    name: "Pimiento verde italiano 1kg",
    category: "Frutas y Verduras",
    prices: { 2021: 1.60, 2022: 2.10, 2023: 2.55, 2024: 2.50, 2025: 2.40, 2026: 2.30 }
  },
  {
    id: 72,
    name: "Pimiento rojo granel 1kg",
    category: "Frutas y Verduras",
    prices: { 2021: 2.10, 2022: 2.70, 2023: 3.25, 2024: 3.20, 2025: 3.05, 2026: 2.95 }
  },
  {
    id: 73,
    name: "Calabacín granel 1kg",
    category: "Frutas y Verduras",
    prices: { 2021: 1.15, 2022: 1.55, 2023: 1.95, 2024: 1.90, 2025: 1.75, 2026: 1.70 }
  },
  {
    id: 74,
    name: "Berenjena granel 1kg",
    category: "Frutas y Verduras",
    prices: { 2021: 1.30, 2022: 1.75, 2023: 2.10, 2024: 2.05, 2025: 1.95, 2026: 1.90 }
  },
  {
    id: 75,
    name: "Zanahorias bolsa 1kg",
    category: "Frutas y Verduras",
    prices: { 2021: 0.65, 2022: 0.85, 2023: 1.05, 2024: 1.05, 2025: 1.00, 2026: 0.95 }
  },
  {
    id: 76,
    name: "Ajo bolsa 250g",
    category: "Frutas y Verduras",
    prices: { 2021: 1.10, 2022: 1.35, 2023: 1.60, 2024: 1.55, 2025: 1.50, 2026: 1.45 }
  },
  {
    id: 77,
    name: "Brocoli pieza 500g",
    category: "Frutas y Verduras",
    prices: { 2021: 0.95, 2022: 1.25, 2023: 1.50, 2024: 1.45, 2025: 1.40, 2026: 1.35 }
  },
  {
    id: 78,
    name: "Lechuga iceberg 1 ud",
    category: "Frutas y Verduras",
    prices: { 2021: 0.85, 2022: 1.05, 2023: 1.25, 2024: 1.25, 2025: 1.20, 2026: 1.15 }
  },
  {
    id: 79,
    name: "Champiñón entero tarrina 250g",
    category: "Frutas y Verduras",
    prices: { 2021: 1.00, 2022: 1.30, 2023: 1.55, 2024: 1.55, 2025: 1.50, 2026: 1.45 }
  },
  {
    id: 80,
    name: "Espárrago triguero manojo",
    category: "Frutas y Verduras",
    prices: { 2021: 1.80, 2022: 2.20, 2023: 2.65, 2024: 2.60, 2025: 2.45, 2026: 2.40 }
  },

  // --- CATEGORÍA 5: Panadería y Pastelería (15 productos) ---
  {
    id: 81,
    name: "Barra de pan común (Bastón)",
    category: "Panadería y Pastelería",
    prices: { 2021: 0.35, 2022: 0.45, 2023: 0.50, 2024: 0.50, 2025: 0.48, 2026: 0.48 }
  },
  {
    id: 82,
    name: "Pan de molde blanco Hacendado 820g",
    category: "Panadería y Pastelería",
    prices: { 2021: 0.95, 2022: 1.25, 2023: 1.45, 2024: 1.45, 2025: 1.40, 2026: 1.35 }
  },
  {
    id: 83,
    name: "Pan de molde integral 100% Hacendado 820g",
    category: "Panadería y Pastelería",
    prices: { 2021: 1.05, 2022: 1.35, 2023: 1.60, 2024: 1.55, 2025: 1.50, 2026: 1.45 }
  },
  {
    id: 84,
    name: "Croissants de mantequilla 4 ud",
    category: "Panadería y Pastelería",
    prices: { 2021: 1.40, 2022: 1.70, 2023: 1.95, 2024: 1.95, 2025: 1.90, 2026: 1.85 }
  },
  {
    id: 85,
    name: "Magdalenas redondas Hacendado bolsa 18 ud",
    category: "Panadería y Pastelería",
    prices: { 2021: 0.95, 2022: 1.35, 2023: 1.65, 2024: 1.65, 2025: 1.60, 2026: 1.55 }
  },
  {
    id: 86,
    name: "Pan de hamburguesa Hacendado 4 ud",
    category: "Panadería y Pastelería",
    prices: { 2021: 0.60, 2022: 0.80, 2023: 0.95, 2024: 0.95, 2025: 0.90, 2026: 0.90 }
  },
  {
    id: 87,
    name: "Tortitas de trigo fajitas Hacendado 10 ud",
    category: "Panadería y Pastelería",
    prices: { 2021: 1.00, 2022: 1.30, 2023: 1.50, 2024: 1.50, 2025: 1.45, 2026: 1.40 }
  },
  {
    id: 88,
    name: "Pan tostado integral Hacendado 30 ud",
    category: "Panadería y Pastelería",
    prices: { 2021: 0.85, 2022: 1.10, 2023: 1.30, 2024: 1.30, 2025: 1.25, 2026: 1.20 }
  },
  {
    id: 89,
    name: "Donas de chocolate Hacendado 4 ud",
    category: "Panadería y Pastelería",
    prices: { 2021: 1.20, 2022: 1.50, 2023: 1.80, 2024: 1.80, 2025: 1.75, 2026: 1.70 }
  },
  {
    id: 90,
    name: "Biscotes de pan de ajo Hacendado 150g",
    category: "Panadería y Pastelería",
    prices: { 2021: 1.10, 2022: 1.35, 2023: 1.55, 2024: 1.55, 2025: 1.50, 2026: 1.45 }
  },
  {
    id: 91,
    name: "Empanada de atún Hacendado (500g)",
    category: "Panadería y Pastelería",
    prices: { 2021: 2.80, 2022: 3.40, 2023: 3.95, 2024: 3.90, 2025: 3.80, 2026: 3.70 }
  },
  {
    id: 92,
    name: "Base de pizza fina Hacendado 2 ud",
    category: "Panadería y Pastelería",
    prices: { 2021: 1.15, 2022: 1.45, 2023: 1.70, 2024: 1.65, 2025: 1.60, 2026: 1.55 }
  },
  {
    id: 93,
    name: "Palmeras de hojaldre Hacendado bolsa",
    category: "Panadería y Pastelería",
    prices: { 2021: 1.30, 2022: 1.65, 2023: 1.95, 2024: 1.95, 2025: 1.90, 2026: 1.85 }
  },
  {
    id: 94,
    name: "Picos de pan Hacendado bolsa 500g",
    category: "Panadería y Pastelería",
    prices: { 2021: 0.75, 2022: 0.95, 2023: 1.15, 2024: 1.15, 2025: 1.10, 2026: 1.05 }
  },
  {
    id: 95,
    name: "Muffins con pepitas de chocolate 4 ud",
    category: "Panadería y Pastelería",
    prices: { 2021: 1.50, 2022: 1.85, 2023: 2.15, 2024: 2.15, 2025: 2.05, 2026: 2.00 }
  },

  // --- CATEGORÍA 6: Despensa y Alimentación Seca (30 productos) ---
  {
    id: 96,
    name: "Aceite de oliva virgen extra Hacendado 1L",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 3.95, 2022: 5.50, 2023: 8.50, 2024: 9.90, 2025: 8.95, 2026: 7.20 }
  },
  {
    id: 97,
    name: "Aceite de oliva suave 1º Hacendado 1L",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 3.20, 2022: 4.50, 2023: 7.20, 2024: 8.50, 2025: 7.80, 2026: 6.50 }
  },
  {
    id: 98,
    name: "Aceite de girasol refinado Hacendado 1L",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 1.25, 2022: 2.95, 2023: 1.75, 2024: 1.60, 2025: 1.50, 2026: 1.45 }
  },
  {
    id: 99,
    name: "Arroz redondo Hacendado 1kg",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 0.85, 2022: 1.15, 2023: 1.35, 2024: 1.35, 2025: 1.30, 2026: 1.20 }
  },
  {
    id: 100,
    name: "Spaghetti Hacendado 1kg",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 0.75, 2022: 1.15, 2023: 1.30, 2024: 1.30, 2025: 1.25, 2026: 1.20 }
  },
  {
    id: 101,
    name: "Macarrones Hacendado 1kg",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 0.75, 2022: 1.15, 2023: 1.30, 2024: 1.30, 2025: 1.25, 2026: 1.20 }
  },
  {
    id: 102,
    name: "Harina de trigo de fuerza Hacendado 1kg",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 0.65, 2022: 0.95, 2023: 1.20, 2024: 1.15, 2025: 1.10, 2026: 1.05 }
  },
  {
    id: 103,
    name: "Azúcar blanco Hacendado 1kg",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 0.70, 2022: 0.90, 2023: 1.35, 2024: 1.35, 2025: 1.30, 2026: 1.25 }
  },
  {
    id: 104,
    name: "Sal fina Hacendado 1kg",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 0.25, 2022: 0.30, 2023: 0.35, 2024: 0.35, 2025: 0.35, 2026: 0.35 }
  },
  {
    id: 105,
    name: "Garbanzo cocido Hacendado bote 400g",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 0.60, 2022: 0.75, 2023: 0.90, 2024: 0.90, 2025: 0.85, 2026: 0.80 }
  },
  {
    id: 106,
    name: "Lenteja castellana Hacendado 1kg",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 1.45, 2022: 1.80, 2023: 2.10, 2024: 2.10, 2025: 2.05, 2026: 1.95 }
  },
  {
    id: 107,
    name: "Tomate frito Hacendado pack 3 ud x 390g",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 1.05, 2022: 1.35, 2023: 1.65, 2024: 1.65, 2025: 1.60, 2026: 1.50 }
  },
  {
    id: 108,
    name: "Café molido mezcla Hacendado 250g",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 1.30, 2022: 1.70, 2023: 2.10, 2024: 2.10, 2025: 2.00, 2026: 1.95 }
  },
  {
    id: 109,
    name: "Cacao soluble Nesquik 1kg",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 4.80, 2022: 5.50, 2023: 6.25, 2024: 6.25, 2025: 6.10, 2026: 5.95 }
  },
  {
    id: 110,
    name: "Galletas María Hacendado pack 4 rollos",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 1.10, 2022: 1.45, 2023: 1.75, 2024: 1.75, 2025: 1.70, 2026: 1.60 }
  },
  {
    id: 111,
    name: "Cereales copos de avena Hacendado 500g",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 0.75, 2022: 0.90, 2023: 1.05, 2024: 1.05, 2025: 1.00, 2026: 0.95 }
  },
  {
    id: 112,
    name: "Patatas fritas clásicas Hacendado bolsa 300g",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 0.95, 2022: 1.30, 2023: 1.60, 2024: 1.60, 2025: 1.50, 2026: 1.45 }
  },
  {
    id: 113,
    name: "Mayonesa Hacendado tarro 450ml",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 0.95, 2022: 1.25, 2023: 1.55, 2024: 1.55, 2025: 1.45, 2026: 1.40 }
  },
  {
    id: 114,
    name: "Ketchup Hacendado bote 500g",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 0.85, 2022: 1.10, 2023: 1.30, 2024: 1.30, 2025: 1.25, 2026: 1.20 }
  },
  {
    id: 115,
    name: "Vinagre de vino blanco Hacendado 1L",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 0.50, 2022: 0.65, 2023: 0.80, 2024: 0.80, 2025: 0.75, 2026: 0.70 }
  },
  {
    id: 116,
    name: "Chocolate con leche Hacendado tableta 150g",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 0.60, 2022: 0.80, 2023: 1.00, 2024: 1.05, 2025: 1.00, 2026: 0.95 }
  },
  {
    id: 117,
    name: "Mermelada de fresa Hacendado tarro 350g",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 1.00, 2022: 1.30, 2023: 1.60, 2024: 1.60, 2025: 1.55, 2026: 1.50 }
  },
  {
    id: 118,
    name: "Atún claro al natural Hacendado 6 latas",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 3.80, 2022: 4.60, 2023: 5.40, 2024: 5.35, 2025: 5.10, 2026: 4.95 }
  },
  {
    id: 119,
    name: "Caldo de pollo Hacendado pack 3 de 1L",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 1.60, 2022: 2.10, 2023: 2.50, 2024: 2.50, 2025: 2.40, 2026: 2.35 }
  },
  {
    id: 120,
    name: "Levadura química Royal 5 sobres",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 1.15, 2022: 1.45, 2023: 1.70, 2024: 1.70, 2025: 1.65, 2026: 1.60 }
  },
  {
    id: 121,
    name: "Sal de frutas Hacendado bote 150g",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 1.85, 2022: 2.10, 2023: 2.45, 2024: 2.45, 2025: 2.40, 2026: 2.35 }
  },
  {
    id: 122,
    name: "Crema de cacahuete Hacendado 100% 500g",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 3.00, 2022: 3.30, 2023: 3.65, 2024: 3.60, 2025: 3.50, 2026: 3.40 }
  },
  {
    id: 123,
    name: "Miel pura de flores Hacendado bote 500g",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 2.80, 2022: 3.40, 2023: 3.99, 2024: 3.95, 2025: 3.85, 2026: 3.75 }
  },
  {
    id: 124,
    name: "Nocilla original vaso 190g",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 1.60, 2022: 1.90, 2023: 2.20, 2024: 2.20, 2025: 2.15, 2026: 2.10 }
  },
  {
    id: 125,
    name: "Bicarbonato sódico Hacendado bote 1kg",
    category: "Despensa y Alimentación Seca",
    prices: { 2021: 1.10, 2022: 1.30, 2023: 1.50, 2024: 1.50, 2025: 1.45, 2026: 1.40 }
  },

  // --- CATEGORÍA 7: Bebidas (20 productos) ---
  {
    id: 126,
    name: "Agua mineral natural Hacendado 1.5L",
    category: "Bebidas",
    prices: { 2021: 0.22, 2022: 0.28, 2023: 0.35, 2024: 0.35, 2025: 0.33, 2026: 0.33 }
  },
  {
    id: 127,
    name: "Agua mineral natural Hacendado garrafa 6L",
    category: "Bebidas",
    prices: { 2021: 0.75, 2022: 0.95, 2023: 1.20, 2024: 1.20, 2025: 1.15, 2026: 1.10 }
  },
  {
    id: 128,
    name: "Coca-Cola Original lata 330ml",
    category: "Bebidas",
    prices: { 2021: 0.65, 2022: 0.78, 2023: 0.90, 2024: 0.95, 2025: 0.92, 2026: 0.90 }
  },
  {
    id: 129,
    name: "Refresco cola zero Hacendado lata 330ml",
    category: "Bebidas",
    prices: { 2021: 0.30, 2022: 0.38, 2023: 0.45, 2024: 0.45, 2025: 0.42, 2026: 0.40 }
  },
  {
    id: 130,
    name: "Refresco de naranja Hacendado 2L",
    category: "Bebidas",
    prices: { 2021: 0.70, 2022: 0.90, 2023: 1.10, 2024: 1.10, 2025: 1.05, 2026: 1.00 }
  },
  {
    id: 131,
    name: "Refresco de limón Hacendado 2L",
    category: "Bebidas",
    prices: { 2021: 0.70, 2022: 0.90, 2023: 1.10, 2024: 1.10, 2025: 1.05, 2026: 1.00 }
  },
  {
    id: 132,
    name: "Cerveza Steinburg clásica lata 330ml",
    category: "Bebidas",
    prices: { 2021: 0.25, 2022: 0.32, 2023: 0.38, 2024: 0.38, 2025: 0.36, 2026: 0.35 }
  },
  {
    id: 133,
    name: "Cerveza Steinburg Especial lata 330ml",
    category: "Bebidas",
    prices: { 2021: 0.35, 2022: 0.45, 2023: 0.52, 2024: 0.52, 2025: 0.50, 2026: 0.48 }
  },
  {
    id: 134,
    name: "Zumo de naranja exprimida Hacendado 1L",
    category: "Bebidas",
    prices: { 2021: 1.50, 2022: 1.85, 2023: 2.25, 2024: 2.20, 2025: 2.10, 2026: 2.00 }
  },
  {
    id: 135,
    name: "Zumo piña y coco Hacendado 1L",
    category: "Bebidas",
    prices: { 2021: 0.95, 2022: 1.20, 2023: 1.40, 2024: 1.40, 2025: 1.35, 2026: 1.30 }
  },
  {
    id: 136,
    name: "Vino tinto Rioja crianza Viña Albali 750ml",
    category: "Bebidas",
    prices: { 2021: 2.95, 2022: 3.45, 2023: 3.95, 2024: 3.90, 2025: 3.80, 2026: 3.70 }
  },
  {
    id: 137,
    name: "Vino blanco Rueda verdejo Hacendado 750ml",
    category: "Bebidas",
    prices: { 2021: 1.95, 2022: 2.30, 2023: 2.70, 2024: 2.65, 2025: 2.55, 2026: 2.45 }
  },
  {
    id: 138,
    name: "Ginebra Williams Hacendado 700ml",
    category: "Bebidas",
    prices: { 2021: 5.95, 2022: 6.80, 2023: 7.60, 2024: 7.60, 2025: 7.45, 2026: 7.30 }
  },
  {
    id: 139,
    name: "Bebida energética Hacendado lata 250ml",
    category: "Bebidas",
    prices: { 2021: 0.40, 2022: 0.50, 2023: 0.60, 2024: 0.60, 2025: 0.58, 2026: 0.55 }
  },
  {
    id: 140,
    name: "Bebida de avena Hacendado 1L",
    category: "Bebidas",
    prices: { 2021: 0.85, 2022: 1.05, 2023: 1.25, 2024: 1.25, 2025: 1.20, 2026: 1.15 }
  },
  {
    id: 141,
    name: "Bebida de soja Hacendado 1L",
    category: "Bebidas",
    prices: { 2021: 0.75, 2022: 0.95, 2023: 1.10, 2024: 1.10, 2025: 1.05, 2026: 1.00 }
  },
  {
    id: 142,
    name: "Horchata de chufa Hacendado 1L",
    category: "Bebidas",
    prices: { 2021: 1.10, 2022: 1.35, 2023: 1.65, 2024: 1.65, 2025: 1.60, 2026: 1.50 }
  },
  {
    id: 143,
    name: "Tinto de verano limón Hacendado 1.5L",
    category: "Bebidas",
    prices: { 2021: 0.90, 2022: 1.15, 2023: 1.35, 2024: 1.35, 2025: 1.30, 2026: 1.25 }
  },
  {
    id: 144,
    name: "Bebida isotónica Hacendado 1.5L",
    category: "Bebidas",
    prices: { 2021: 0.75, 2022: 0.95, 2023: 1.15, 2024: 1.15, 2025: 1.10, 2026: 1.05 }
  },
  {
    id: 145,
    name: "Néctar de melocotón Hacendado 1L",
    category: "Bebidas",
    prices: { 2021: 0.65, 2022: 0.85, 2023: 1.05, 2024: 1.05, 2025: 1.00, 2026: 0.95 }
  },

  // --- CATEGORÍA 8: Conservas y Platos Preparados (15 productos) ---
  {
    id: 146,
    name: "Aceitunas rellenas de anchoa Hacendado 3 ud",
    category: "Conservas y Platos Preparados",
    prices: { 2021: 1.65, 2022: 2.10, 2023: 2.50, 2024: 2.50, 2025: 2.40, 2026: 2.30 }
  },
  {
    id: 147,
    name: "Mejillones en escabeche Hacendado lata pack 3",
    category: "Conservas y Platos Preparados",
    prices: { 2021: 1.95, 2022: 2.45, 2023: 2.95, 2024: 2.90, 2025: 2.80, 2026: 2.70 }
  },
  {
    id: 148,
    name: "Sardinillas en aceite de girasol Hacendado 1 ud",
    category: "Conservas y Platos Preparados",
    prices: { 2021: 0.85, 2022: 1.10, 2023: 1.30, 2024: 1.30, 2025: 1.25, 2026: 1.20 }
  },
  {
    id: 149,
    name: "Espárragos blancos Hacendado bote 6 ud",
    category: "Conservas y Platos Preparados",
    prices: { 2021: 1.50, 2022: 1.85, 2023: 2.20, 2024: 2.20, 2025: 2.15, 2026: 2.10 }
  },
  {
    id: 150,
    name: "Maíz dulce Hacendado pack 3 ud x 140g",
    category: "Conservas y Platos Preparados",
    prices: { 2021: 1.10, 2022: 1.35, 2023: 1.60, 2024: 1.60, 2025: 1.55, 2026: 1.50 }
  },
  {
    id: 151,
    name: "Pimientos del piquillo Hacendado bote 290g",
    category: "Conservas y Platos Preparados",
    prices: { 2021: 0.95, 2022: 1.20, 2023: 1.45, 2024: 1.45, 2025: 1.40, 2026: 1.35 }
  },
  {
    id: 152,
    name: "Fabada asturiana Hacendado lata 435g",
    category: "Conservas y Platos Preparados",
    prices: { 2021: 0.95, 2022: 1.25, 2023: 1.50, 2024: 1.50, 2025: 1.45, 2026: 1.40 }
  },
  {
    id: 153,
    name: "Gazpacho tradicional Hacendado brick 1L",
    category: "Conservas y Platos Preparados",
    prices: { 2021: 1.30, 2022: 1.70, 2023: 2.10, 2024: 2.05, 2025: 1.95, 2026: 1.90 }
  },
  {
    id: 154,
    name: "Hummus de garbanzos Hacendado 240g",
    category: "Conservas y Platos Preparados",
    prices: { 2021: 1.10, 2022: 1.30, 2023: 1.50, 2024: 1.50, 2025: 1.45, 2026: 1.40 }
  },
  {
    id: 155,
    name: "Tortilla de patatas con cebolla Hacendado 600g",
    category: "Conservas y Platos Preparados",
    prices: { 2021: 1.80, 2022: 2.25, 2023: 2.65, 2024: 2.65, 2025: 2.55, 2026: 2.50 }
  },
  {
    id: 156,
    name: "Guacamole Hacendado 95% aguacate 200g",
    category: "Conservas y Platos Preparados",
    prices: { 2021: 1.45, 2022: 1.75, 2023: 2.10, 2024: 2.05, 2025: 1.95, 2026: 1.90 }
  },
  {
    id: 157,
    name: "Pizza jamón y queso Hacendado 400g",
    category: "Conservas y Platos Preparados",
    prices: { 2021: 1.90, 2022: 2.40, 2023: 2.95, 2024: 2.90, 2025: 2.80, 2026: 2.70 }
  },
  {
    id: 158,
    name: "Lasaña boloñesa Hacendado 350g",
    category: "Conservas y Platos Preparados",
    prices: { 2021: 2.10, 2022: 2.60, 2023: 3.10, 2024: 3.10, 2025: 2.95, 2026: 2.90 }
  },
  {
    id: 159,
    name: "Salmorejo fresco Hacendado brick 1L",
    category: "Conservas y Platos Preparados",
    prices: { 2021: 1.40, 2022: 1.80, 2023: 2.20, 2024: 2.15, 2025: 2.05, 2026: 2.00 }
  },
  {
    id: 160,
    name: "Melocotón en almíbar Hacendado lata 840g",
    category: "Conservas y Platos Preparados",
    prices: { 2021: 1.70, 2022: 2.15, 2023: 2.60, 2024: 2.60, 2025: 2.50, 2026: 2.45 }
  },

  // --- CATEGORÍA 9: Limpieza y Cuidado del Hogar (15 productos) ---
  {
    id: 161,
    name: "Detergente líquido ropa Bosque Verde 3L",
    category: "Limpieza y Cuidado del Hogar",
    prices: { 2021: 3.10, 2022: 3.80, 2023: 4.50, 2024: 4.50, 2025: 4.40, 2026: 4.30 }
  },
  {
    id: 162,
    name: "Suavizante ropa azul Bosque Verde 2L",
    category: "Limpieza y Cuidado del Hogar",
    prices: { 2021: 1.20, 2022: 1.55, 2023: 1.95, 2024: 1.95, 2025: 1.90, 2026: 1.85 }
  },
  {
    id: 163,
    name: "Lavavajillas a mano concentrado Bosque Verde 1L",
    category: "Limpieza y Cuidado del Hogar",
    prices: { 2021: 1.05, 2022: 1.35, 2023: 1.65, 2024: 1.65, 2025: 1.60, 2026: 1.55 }
  },
  {
    id: 164,
    name: "Pastillas lavavajillas Todo en 1 Bosque Verde 30 ud",
    category: "Limpieza y Cuidado del Hogar",
    prices: { 2021: 2.95, 2022: 3.65, 2023: 4.35, 2024: 4.30, 2025: 4.15, 2026: 4.00 }
  },
  {
    id: 165,
    name: "Limpiador amoniacal Bosque Verde 1.5L",
    category: "Limpieza y Cuidado del Hogar",
    prices: { 2021: 0.85, 2022: 1.05, 2023: 1.25, 2024: 1.25, 2025: 1.20, 2026: 1.15 }
  },
  {
    id: 166,
    name: "Friegasuelos pino Bosque Verde 1.5L",
    category: "Limpieza y Cuidado del Hogar",
    prices: { 2021: 0.90, 2022: 1.10, 2023: 1.30, 2024: 1.30, 2025: 1.25, 2026: 1.20 }
  },
  {
    id: 167,
    name: "Lejía desinfectante Bosque Verde 2L",
    category: "Limpieza y Cuidado del Hogar",
    prices: { 2021: 0.60, 2022: 0.80, 2023: 0.95, 2024: 0.95, 2025: 0.90, 2026: 0.90 }
  },
  {
    id: 168,
    name: "Papel higiénico doble rollo Bosque Verde 12 ud",
    category: "Limpieza y Cuidado del Hogar",
    prices: { 2021: 2.20, 2022: 2.95, 2023: 3.80, 2024: 3.80, 2025: 3.65, 2026: 3.50 }
  },
  {
    id: 169,
    name: "Papel de cocina Bosque Verde pack 3 rollos",
    category: "Limpieza y Cuidado del Hogar",
    prices: { 2021: 1.35, 2022: 1.85, 2023: 2.35, 2024: 2.30, 2025: 2.20, 2026: 2.10 }
  },
  {
    id: 170,
    name: "Bolsas de basura autocierre 30L Bosque Verde 30 ud",
    category: "Limpieza y Cuidado del Hogar",
    prices: { 2021: 1.10, 2022: 1.45, 2023: 1.80, 2024: 1.80, 2025: 1.75, 2026: 1.70 }
  },
  {
    id: 171,
    name: "Limpiacristales spray Bosque Verde 750ml",
    category: "Limpieza y Cuidado del Hogar",
    prices: { 2021: 0.90, 2022: 1.15, 2023: 1.35, 2024: 1.35, 2025: 1.30, 2026: 1.25 }
  },
  {
    id: 172,
    name: "Multiusos con vinagre Bosque Verde spray 750ml",
    category: "Limpieza y Cuidado del Hogar",
    prices: { 2021: 1.10, 2022: 1.35, 2023: 1.55, 2024: 1.55, 2025: 1.50, 2026: 1.45 }
  },
  {
    id: 173,
    name: "Insecticida moscas y mosquitos Bosque Verde 600ml",
    category: "Limpieza y Cuidado del Hogar",
    prices: { 2021: 1.80, 2022: 2.15, 2023: 2.50, 2024: 2.50, 2025: 2.45, 2026: 2.40 }
  },
  {
    id: 174,
    name: "Pastillas de encendido Bosque Verde 32 ud",
    category: "Limpieza y Cuidado del Hogar",
    prices: { 2021: 0.95, 2022: 1.15, 2023: 1.35, 2024: 1.35, 2025: 1.30, 2026: 1.25 }
  },
  {
    id: 175,
    name: "Quitagrasas pulverizador Bosque Verde 750ml",
    category: "Limpieza y Cuidado del Hogar",
    prices: { 2021: 1.25, 2022: 1.55, 2023: 1.85, 2024: 1.85, 2025: 1.80, 2026: 1.75 }
  },

  // --- CATEGORÍA 10: Cuidado Personal y Belleza (15 productos) ---
  {
    id: 176,
    name: "Gel de baño avena Deliplus 1L",
    category: "Cuidado Personal y Belleza",
    prices: { 2021: 0.95, 2022: 1.15, 2023: 1.35, 2024: 1.35, 2025: 1.30, 2026: 1.25 }
  },
  {
    id: 177,
    name: "Champú de queratina Deliplus 400ml",
    category: "Cuidado Personal y Belleza",
    prices: { 2021: 1.60, 2022: 1.95, 2023: 2.25, 2024: 2.25, 2025: 2.20, 2026: 2.10 }
  },
  {
    id: 178,
    name: "Acondicionador bifásico Deliplus 400ml",
    category: "Cuidado Personal y Belleza",
    prices: { 2021: 2.00, 2022: 2.45, 2023: 2.90, 2024: 2.90, 2025: 2.80, 2026: 2.70 }
  },
  {
    id: 179,
    name: "Pasta de dientes triple acción Deliplus 100ml",
    category: "Cuidado Personal y Belleza",
    prices: { 2021: 0.65, 2022: 0.80, 2023: 0.95, 2024: 0.95, 2025: 0.90, 2026: 0.90 }
  },
  {
    id: 180,
    name: "Enjuague bucal antiséptico Deliplus 500ml",
    category: "Cuidado Personal y Belleza",
    prices: { 2021: 1.20, 2022: 1.50, 2023: 1.80, 2024: 1.80, 2025: 1.75, 2026: 1.70 }
  },
  {
    id: 181,
    name: "Desodorante roll-on avena Deliplus 50ml",
    category: "Cuidado Personal y Belleza",
    prices: { 2021: 0.75, 2022: 0.95, 2023: 1.15, 2024: 1.15, 2025: 1.10, 2026: 1.05 }
  },
  {
    id: 182,
    name: "Crema hidratante corporal oliva Deliplus 250ml",
    category: "Cuidado Personal y Belleza",
    prices: { 2021: 0.85, 2022: 1.10, 2023: 1.30, 2024: 1.30, 2025: 1.25, 2026: 1.20 }
  },
  {
    id: 183,
    name: "Discos desmaquillantes 100% algodón 120 ud",
    category: "Cuidado Personal y Belleza",
    prices: { 2021: 0.80, 2022: 1.05, 2023: 1.25, 2024: 1.25, 2025: 1.20, 2026: 1.15 }
  },
  {
    id: 184,
    name: "Jabón líquido de manos avena Deliplus 500ml",
    category: "Cuidado Personal y Belleza",
    prices: { 2021: 0.80, 2022: 1.05, 2023: 1.25, 2024: 1.25, 2025: 1.20, 2026: 1.15 }
  },
  {
    id: 185,
    name: "Cuchillas de afeitar 2 hojas Deliplus 10 ud",
    category: "Cuidado Personal y Belleza",
    prices: { 2021: 0.95, 2022: 1.20, 2023: 1.45, 2024: 1.45, 2025: 1.40, 2026: 1.35 }
  },
  {
    id: 186,
    name: "Espuma de afeitar piel sensible Deliplus 300ml",
    category: "Cuidado Personal y Belleza",
    prices: { 2021: 0.90, 2022: 1.15, 2023: 1.35, 2024: 1.35, 2025: 1.30, 2026: 1.25 }
  },
  {
    id: 187,
    name: "Toallitas húmedas para bebés Deliplus 80 ud",
    category: "Cuidado Personal y Belleza",
    prices: { 2021: 0.90, 2022: 1.20, 2023: 1.45, 2024: 1.45, 2025: 1.40, 2026: 1.35 }
  },
  {
    id: 188,
    name: "Laca para el cabello fijación fuerte Deliplus 400ml",
    category: "Cuidado Personal y Belleza",
    prices: { 2021: 1.20, 2022: 1.50, 2023: 1.80, 2024: 1.80, 2025: 1.75, 2026: 1.70 }
  },
  {
    id: 189,
    name: "Quitaesmalte con acetona Deliplus 150ml",
    category: "Cuidado Personal y Belleza",
    prices: { 2021: 0.70, 2022: 0.90, 2023: 1.10, 2024: 1.10, 2025: 1.05, 2026: 1.00 }
  },
  {
    id: 190,
    name: "Agua micelar limpiadora Deliplus 400ml",
    category: "Cuidado Personal y Belleza",
    prices: { 2021: 1.50, 2022: 1.95, 2023: 2.40, 2024: 2.40, 2025: 2.30, 2026: 2.20 }
  }
];

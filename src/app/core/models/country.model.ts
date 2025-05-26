export interface Name {
    common: string;
    official: string;
    nativeName?: { // El '?' indica que esta propiedad es opcional
      [key: string]: { // Esto permite múltiples idiomas nativos, ej. nativeName['fra'], nativeName['spa']
        official: string;
        common: string;
      }
    };
  }
  
  export interface Flags {
    png: string;
    svg: string;
    alt?: string; // Texto alternativo para la imagen de la bandera
  }
  
  export interface CoatOfArms {
    png?: string;
    svg?: string;
  }
  
  export interface CurrencyInfo { // Renombrado de 'Currency' para evitar conflicto si Angular tiene una clase Currency
    name: string;
    symbol: string;
  }
  
  export interface Languages {
    [key: string]: string; // Ej: { "spa": "Spanish", "eng": "English" }
  }
  
  // Esta es la interfaz principal para un país
  export interface Country {
    name: Name;
    cca3: string; // Un código de 3 letras que puede ser útil como ID único
    currencies?: { [key: string]: CurrencyInfo }; // Ej: { "USD": { name: "United States dollar", symbol: "$" } }
    capital?: string[]; // Puede tener múltiples capitales o ninguna
    region: string;    // Requerido para el filtro de la Parte 3
    subregion?: string;
    languages?: Languages;
    population: number;
    flags: Flags;        // Objeto con URLs para las imágenes de las banderas
    coatOfArms?: CoatOfArms; // Escudo, es opcional
    // Otros campos que podríamos necesitar para el modal (añadir según sea necesario):
    continents: string[];
    timezones: string[];
    idd?: { root?: string; suffixes?: string[] }; // Prefijo telefónico internacional
    maps: { googleMaps: string; openStreetMaps: string; };
  }
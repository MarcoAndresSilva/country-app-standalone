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
    cca3: string;
    currencies: { [key: string]: CurrencyInfo };
    capital: string[];
    region: string;
    languages: Languages;
    population: number;
    flags: Flags;
    coatOfArms: CoatOfArms;
    continents: string[];
  }
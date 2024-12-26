export interface Image {
    id: string;
    alt_description: string;
    urls: {
      small: string;
      full: string;
      regular?: string; 
    };
    user?: {
      name: string;
    };
  }
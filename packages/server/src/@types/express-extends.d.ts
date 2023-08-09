declare module 'express-serve-static-core' {
  export interface Request {
    user?: {
      id: number;
      email: string;
      login: string | null;
      first_name: string;
      second_name: string;
      display_name: string | null;
      phone: string;
      avatar: string | null;
    };
  }
}

export {};

declare module 'express-serve-static-core' {
  export interface Request {
    user?: {
      id: number;
      email: string | null;
      login: string | null;
      first_name: string | null;
      second_name: string | null;
      display_name: string | null;
      phone: string | null;
      avatar: string | null;
    };
  }
}

export {};

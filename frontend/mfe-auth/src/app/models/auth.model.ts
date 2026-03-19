export type UserType = 'candidate' | 'company';

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  userType: UserType;
}

export interface LoginRequest {
  email: string;
  password: string;
  userType: UserType;
}

export interface AuthResponse {
  token: string;
  expiresAtUtc: string;
  userType: UserType;
  name: string;
  email: string;
}

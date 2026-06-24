export type User = {
    handle: string;
    email: string;
    name: string;
    id: string;
}

export type RegisterData = Pick<User, "name" | "email" | "handle"> & {
    password: string;
    password_confirmation: string;
}

export type LoginData = Pick<User, "email"> & {
    password: string;
}
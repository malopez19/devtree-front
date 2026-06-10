export type User = {
    handle: string;
    email: string;
    name: string;
}

export type RegisterData = Pick<User, "name" | "email" | "handle"> & {
    password: string;
    password_confirmation: string;
}
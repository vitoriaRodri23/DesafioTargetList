export interface IUser {
    email?: string;
    token?: string;
}

export interface IContext extends IUser {
    user?: IUser;
    login: (email: string, password: string) => Promise<void>;
    cadastro: (email: string, password: string, name: string) => Promise<void>;
}

export interface IAuthProvider {
    children: JSX.Element;
}

export interface IClient {
    name: string;
    id: number;
    address: IAddress;
    email: string;
}

export interface IAddress {
    address1: string;
    address2: string;
    tel: string;
}
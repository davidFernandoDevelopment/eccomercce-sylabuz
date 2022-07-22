export interface User {
    id: number;
    email: string;
    username: string;
    password: string;
    name?: Name;
    phone?: string;
    address?: Address;
}

interface Name {
    firstname: string;
    lastname: string;
}
interface Address {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
        lat: string,
        long: string;
    };
}
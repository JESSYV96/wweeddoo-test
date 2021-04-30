import axios from 'axios';
import { LoginDTO } from '../dto/auth/auth.dto';
import { headers } from './config/headers';

export class AuthAPI {
    public static async login({ email, password }: LoginDTO): Promise<any> {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`,
            {
                email,
                password
            },
            {
                headers
            }
        );

        return response.data;
    }

    public static async fetchCurrentUser(): Promise<any> {
        return await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/current`);
    }

}
import { LoginDTO } from "../dto/auth.dto";
import { UserDTO } from "../dto/user.dto";

export class AuthAPI {

    public static async login({ email, password }: LoginDTO): Promise<UserDTO> {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/auth/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'unsafe-url',
            body: JSON.stringify({email, password})
        });
        const data = await response.json()

        return data;
    }
}
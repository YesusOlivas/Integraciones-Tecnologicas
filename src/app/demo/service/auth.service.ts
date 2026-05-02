import { Injectable } from "@angular/core";
import { USUARIOS } from "../data/user_data";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    login(username: string, password: string): boolean {
        const user = USUARIOS.find(
            u => u.usuario === username && 
            u.contrasenia === password
        );

        if (user) {
            const fakeToken = this.generateFakeTokenJWT(user);
            localStorage.setItem('token', fakeToken);
            return true;
        }
        return false;
    }

    logout(){
        localStorage.removeItem('token');
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
    }

    private generateFakeTokenJWT(user: any):string{
        const payload = {
            id: user.id,
            sub: user.usuario,
            exp: Date.now() + (60 * 60 * 1000)
        }
        return btoa(JSON.stringify(payload));
    }

    getUser(){
        const token = localStorage.getItem('token');
        if(!token) return null;

        return JSON.parse(atob(token));
    }
}
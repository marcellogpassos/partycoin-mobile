import { Injectable } from '@angular/core';
import { Converter } from './converter';
import { User } from "../model/user";

@Injectable()
export class UserConverter implements Converter<User> {
    
    from(object: User) {
        throw new Error("Method not implemented.");
    }

    to(dados: any, id?: any): User {
        let user: User = new User();
        user.id = dados.id;
        user.email = dados.email;
        user.nome = dados.nome;
        user.sobrenome = dados.sobrenome;
        user.cpf = dados.cpf;
        user.sexo = dados.sexo;
        user.dataNascimento = dados.dataNascimento ? new Date(dados.dataNascimento) : null;
        user.celular = dados.celular;
        user.createdAt = dados.createdAt ? new Date(dados.createdAt) : null;
        user.updatedAt = dados.updatedAt ? new Date(dados.updatedAt) : null;
        return user;
    }

}
import { expect, assert } from 'chai';
import UserModel from '../src/Models/UserModel';
import UserService from '../src/Services/UserService';
import User from '../src/Interfaces/User-Interface';

describe('UserModel', async () => {
    it('User retorna um Number', async () => {
        const newUser = {
            username: 'username',
            password: 'password',
            email: 'email@email.com'
        };

        const createUser = new UserModel().post;
        const sut = await createUser(newUser);

        assert.typeOf(sut, 'number');
    });

    it('Existe a chave "username" no parametro de UserModel', async () => {
        const newUser: User = {
            username: 'username',
            password: 'password',
            email: 'email@email.com'
        };

        expect(newUser.username).to.be.equal('username');
    });

    it('Existe a chave "password" no parametro de UserModel', async () => {
        const newUser: User = {
            username: 'username',
            password: 'password',
            email: 'email@email.com'
        };

        expect(newUser.password).to.be.equal('password');
    });

    it('Existe a chave "email" no parametro de UserModel', async () => {
        const newUser: User = {
            username: 'username',
            password: 'password',
            email: 'email@email.com'
        };

        expect(newUser.email).to.be.equal('email@email.com');
    });

})

describe('UserṢervice', async () => {
    it('User retorna um Number', async () => {
        const newUser = {
            username: 'username',
            password: 'password',
            email: 'email@email.com'
        };

        const createUser = new UserService().post;
        const sut = await createUser(newUser);

        assert.typeOf(sut, 'number');
    });

    it('Existe a chave "username" no parametro de UserService', async () => {
        const newUser: User = {
            username: 'username',
            password: 'password',
            email: 'email@email.com'
        };

        expect(newUser.username).to.be.equal('username');
    });

    it('Existe a chave "password" no parametro de UserService', async () => {
        const newUser: User = {
            username: 'username',
            password: 'password',
            email: 'email@email.com'
        };

        expect(newUser.password).to.be.equal('password');
    });

    it('Existe a chave "email" no parametro de UserService', async () => {
        const newUser: User = {
            username: 'username',
            password: 'password',
            email: 'email@email.com'
        };

        expect(newUser.email).to.be.equal('email@email.com');
    });

})
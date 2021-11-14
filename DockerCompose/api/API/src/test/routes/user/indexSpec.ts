import request from 'supertest';
import app from '../../../server';
import { ModelUser, User } from '../../../models/user';
import { loginToken } from '../../../routes/user';
import { create } from 'domain';

// User
describe('Test suite for /user', () => {

    const adminuser: User = {
        id: -1, // -1 if not assigned in DB
        name: 'admintest',
        email: 'admin@test.test',
        passwd: 'password',
    };
    let user: User;
    const testuser: User = {
        id: -1, // -1 if not assigned in DB
        name: 'test',
        email: 'test@test.test',
        passwd: 'password',
    };

    let createdUser: User;
    let token: string;
    let credential: loginToken

    const req = request(app);

    beforeAll(async () => {
        // create a test user
        user = await ModelUser.create(adminuser);
    });

    afterAll(async () => {
        await ModelUser.delete(user.id);
    });

    it('/user/login', async () => {
        await req
            .post('/user/login')
            .send({email: adminuser.email, password: adminuser.passwd})
            .expect(200)
            .expect((res) => {
                credential = res.body as loginToken;
                token = credential.token;
            });
    });

    it('/user/create', async () => {
        await req
            .post('/user/create')
            .auth(token, {type: 'bearer'})
            .send(testuser)
            .expect(200)
            .expect ( (response) => {
                createdUser = response.body as User;
                expect(createdUser.email).toBe(testuser.email);
                expect(createdUser.name).toBe(testuser.name);
                testuser.id = createdUser.id;
            });
    });

    it('/user/list', async () => {
        await req
            .get('/user/list')
            .auth(token, {type: 'bearer'})
            .expect(200)
            .expect ( (response) => {
                const users = response.body as User[];
                expect(users.length).toEqual(2);
            });
    });

    it(`/user/show/${createdUser.id}`, async () => {
        await req
            .get(`/user/show/${createdUser.id}`)
            .auth(token, {type: 'bearer'})
            .expect(200)
            .expect ( (response) => {
                const user = response.body as User;
                expect(user.email).toBe(createdUser.email);
                expect(user.name).toBe(createdUser.name);
                console.log(user);
            });
    });
});
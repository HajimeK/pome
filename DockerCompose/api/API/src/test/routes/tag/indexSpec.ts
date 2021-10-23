import request from 'supertest';
import app from '../../../server';
import { ModelTag, Tag } from '../../../models/tag';
import { ModelUser, User } from '../../../models/user';
import { loginToken } from '../../../routes/user';

describe('Test Suite for /api/tag', () => {

    const req = request(app);

    let token: string;
    const tags: Tag[] = [
        {
            id: -1, // -1 if not assigned in DB
            tag: "tag0"
        }
    ];
    let user:User = {
        id: -1, // -1 if not assigned in DB
        name: "User",
        email: "email@test.dev",
        passwd: "test_password"
    }

    beforeAll(async () => {
        user = await ModelUser.create(user);
        // login to get auth token
        const login = await req.post('/user/login').send({email: user.email, password: user.passwd});
        token = (login.body as loginToken).token;
    });

    afterAll(async () => {
        await ModelUser.delete(user.id);
    });

    // - Create [token required]
    it(`POST /api/tag/${tags[0].tag} should add a tag`, async () => {
        await req
            .post('/api/tag/create')
            .auth(token, {type: 'bearer'})
            .send(tags[0])
            .expect(200)
            .expect((response) => {
                const tag = response.body as Tag;
                expect(tag.tag).toBe(tags[0].tag);
                tags[0].id = tag.id;
            });
    });

    // - Inex
    // - [OPTIONAL] Top 5 most popular products
    // - [OPTIONAL] Products by category (args: product category)
    it('/api/tag/list', async () => {
        await req
            .get('/api/tag/list')
            .expect(200)
            .expect((response) => {
                const products = response.body as Tag[];
                expect(products.length).toBe(2);
            });
    });

    // - Show
    it(`/api/tag/get/${tag[0].id}`, async () => {
        await req
            .get(`/api/tag/show/${product1id}`)
            .expect(200)
            .expect ( (response) => {
                expect(response.body)
                .toEqual(
                    {
                        id: product1id,
                        product_name: 'product1',
                        price: 123456,
                        category: category1.id
                    }
                );
            });
    });

    // - Delete
    it('/api/tag/delete', async () => {
        await req
            .delete(`/api/tag/${product1id}`)
            .auth(token, {type: 'bearer'})
            .expect(200);
        await req
            .delete(`/api/tag/${product2id}`)
            .auth(token, {type: 'bearer'})
            .expect(200);
        await req
            .get('/api/tag/index')
            .expect(200)
            .expect ( (response) => {
                expect(response.body)
                .toEqual([]);
            });
    });
});
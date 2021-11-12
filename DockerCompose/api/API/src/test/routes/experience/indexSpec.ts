import request from 'supertest';
import app from '../../../server';
import { ModelTag, Tag } from '../../../models/tag';
import { ModelUser, User } from '../../../models/user';
import { loginToken } from '../../../routes/user';

// Order
describe('Test suite for /order', () => {

    let user: User;
    let token: string;
    let orderid = 0;

    const req = request(app);

    beforeAll(async () => {

        // create a user
        user = await ModelUser.create({
            id: 0,
            name: 'hajime',
            email: 'email@something.com',
            passwd: 'Pass'
        });

        // login to get auth token
        const login = await req.post('/user/login').send({email: 'email@something.com', password: 'Pass'});
        token = (login.body as loginToken).token;
    })

    afterAll(async () => {
        // delete a user
        await ModelUser.delete(user.id);
    })

    it('POST /api/experience (token requied) should add an experience', async () => {
        await req.post('/api/experience')
            .auth(token, {type: 'bearer'})
            .send(
                {
                    id: 0,
                    appuser: user.id,
                    order_status: order_status.id
                }
            )
            .expect(200)
            .expect((response) => {
                const order = response.body as Order;
                expect(order.appuser).toBe(user.id);
                expect(order.order_status).toBe(order_status.id);
                orderid = order.id;
            });
    });

    it(`/order/index/userid index method should return a list of order for user`, async () => {
        await req.get(`/order/index/${user.id}`)
            .auth(token, {type: 'bearer'})
            .expect(200)
            .expect((response) => {
                const orders = response.body as Order[];
                expect(orders.length).toBe(1);
            });
    });

    it('/order/index/1?status=2 index method should return a list of order for user with completed', async () => {
        await req.get(`/order/index/${user.id}?status=${order_status.id}`)
            .auth(token, {type: 'bearer'})
            .expect(200)
            .expect((response) => {
                const order = response.body as Order[];
                expect(order[0].appuser).toBe(user.id);
                expect(order[0].order_status).toBe(order_status.id);
            });
    });

    it(`/order/show/${orderid} show method should return the correct order`, async () => {
        await req.get(`/order/show/${orderid}`)
            .auth(token, {type: 'bearer'})
            .expect(200)
            .expect((response) => {
                const order = response.body as Order;
                expect(order.appuser).toBe(user.id);
                expect(order.order_status).toBe(order_status.id);
            });
    });

    it('/order/delete delete method should remove the order', async () => {
        await req
            .delete(`/order/${orderid}`)
            .auth(token, {type: 'bearer'})
            .expect(200);
    });
});
import express, { Request, Response }  from 'express';
import { ModelExpericne, Experience } from '../../models/Experience';
import { verifyAuthToken } from '../util/auth';

const experience =  express.Router();
experience.use(
    express.urlencoded({
        extended: true
    })
)
experience.use(express.json());

const model = new ModelExpericne();

experience.get('/list', (request: Request, response: Response) => {
    if (typeof request.query.tag !== 'undefined') {
        model.list(parseInt(request.query.tag as string))
        .then(experiences => {
            return response.status(200).send(experiences);
        })
        .catch(error => {
            return response.status(400).send(`Could not get an experiences. Error: ${(error as Error).message}`);
        })
    } else {
        model.list()
        .then(experiences => {
            return response.status(200).send(experiences);
        })
        .catch(error => {
            return response.status(400).send(`Could not get an experiences. Error: ${(error as Error).message}`);
        })
    }
});

experience.get('/:id', (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    model.get(id)
    .then(returned => {
        return response.status(200).send(returned);
    })
    .catch(error => {
        return response.status(400).send(`Could not get an experience ${id}. Error: ${(error as Error).message}`);
    })
});

experience.post('/', verifyAuthToken, async (request: Request, response: Response) => {
    const newExperience = request.body as Experience;
    try {
        const created = await model.create(newExperience);

        return response.status(200).send(created);
    } catch(error) {
        return response.status(400).send(`Could not create an order ${newExperience.title}. Error: ${(error as Error).message}`);
    }
});

experience.put('/', verifyAuthToken, async (request: Request, response: Response) => {
    const updatedExperience = request.body as Experience;
    try {
        const created = await model.create(updatedExperience);

        return response.status(200).send(created);
    } catch(error) {
        return response.status(400).send(`Could not create an experience ${updatedExperience.title}. Error: ${(error as Error).message}`);
    }
});

experience.delete('/:id', verifyAuthToken, async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    try {
        const order = await model.delete(id);

        return response.status(200).send(order);
    } catch(error) {
        return response.status(400).send(`Could not delete order ${id}. Error: ${(error as Error).message}`);
    }
});

export default experience;
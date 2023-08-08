import express, {Request, Response} from 'express';

const PORT = 4000;

const app = express();

app.get('/test', (request: Request, response: Response) => {
    response.send('hello');
});

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
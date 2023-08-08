import express, { Request, Response } from 'express';

const PORT = 4000;

const app = express();
app.get('/*', (request: Request, response: Response) => {
    response.send('ok');
});
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
import express from 'express';
import cors from 'cors';

import Form from "./models/form.js";

const app = express();
const port = 4000;

app.use(cors())
app.use(express.json());

app.post('/api/forms', async (req, res) => {
    await Form.create({
        type: 0,
        status: 0,
        data: req.body,
    });

    res.json({message: `Сообщение от ${req.body.name}: отправлено успешно!`});
})

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});

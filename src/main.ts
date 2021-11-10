import express from 'express';

let app = express();
app.use(express.static(__dirname + '/../public'));

app.listen(8282, () => console.log('🚀 rodando na porta 8282'));

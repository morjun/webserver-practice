const { response } = require('express');
const express = require('express');
const port = 3000;
const app = express();
app.set('views', `${__dirname}/views`);
//view engine을 사용하여 생성되는 템플릿 파일 저장 위치
app.set('view engine', 'pug');
app.get('/', (req, res) => {
    return res.render('index.pug') // views 밑 상대 경로
});
app.get('/page', (req, res) => {
    const { page } = req.query;
    return res.render('board.pug', { page: page, });
});
app.get('/posts', (req, res) => {});
app.listen(port, () => console.log(`Server listening on port ${port}!`));
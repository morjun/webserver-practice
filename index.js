const { response } = require("express");
const express = require("express");
const port = 3000;
const app = express();
const { runQuery } = require("./database");

const getScoreStats = async () => {
    const results = await runQuery("SELECT course, count(*) AS cnt, avg(final) as avg, stddev(final) as stddev from scores group by course");
    return results;
}

const getScoreByIdName = async (id, name) => {
    // const sql = `SELECT * FROM scores WHERE id = ${id} AND student = '${name}'`;
    const sql = `SELECT * FROM scores WHERE id = ? AND student = ?`;
    const results = await runQuery(sql);
    return results[0];
}

const createScore = async (name, course, midterm, final) => {
    const sql = `insert into scores values (DEFAULT,?, ?,?,?)`;
    results = await runQuery(sql);
    return results[0];
}

(async () => {
  const stats = await getScoreStats();
  stats.forEach((stat) => {
    const { course, cnt, avg, stddev } = stat;
    console.log(
      `${course} (${cnt} people): Average ${avg}, Std.Dev. ${stddev}`
    );
  });
  const scoreData = await getScoreByIdName(2, 'Joe');
  const { course, final } = scoreData;
  console.log(`Course: ${course} / Final score: ${final}`);
  console.dir(await getScoreByIdName(9, 'Barack'));
  const newScore = await createScore('Barack', 'Operating Systems', 83, 62);
  console.dir(await getScoreByIdName(9, 'Barack'));
//   console.dir(await getScoreByIdName(newScore.insertId, 'Barack'));
})();

app.set("views", `${__dirname}/views`);
//view engine을 사용하여 생성되는 템플릿 파일 저장 위치
app.set("view engine", "pug");
app.get("/", (req, res) => {
  return res.render("index.pug"); // views 밑 상대 경로
});

app.get("/page", (req, res) => {
  const { page } = req.query;
  return res.render("board.pug", { page: page });
});

app.get("/posts", (req, res) => {});
app.listen(port, () => console.log(`Server listening on port ${port}!`));

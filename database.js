const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'bk0420238K!',
    database: 'kweb_db'
});

const runQuery = async (pstmt, data) => {
    const conn = await pool.getConnection();
    try {
        // const[result] = await conn.query(sql);
        const sql = conn.format(pstmt, data);
        const[result] = await conn.query(sql);
        return result;
    }
    finally {
        conn.release(); // connection close
    }

};

module.exports = {runQuery};
import mysql from 'mysql2/promise'

export default defineEventHandler(async () => {
  const con = await mysql.createConnection({
    host: 'localhost',
    user: 'nuxtowner',
    password: '11111',
    database: 'nuxt_memberdb',
  });
  
  try {
    const [rows] = await con.query("SELECT * FROM user_profile");
    return { data: rows };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      message: 'Database error',
    };
  } finally {
    con.end();
  }
});

const { cache } = require('ejs')
const { Pool } = require('pg')

const pool = new Pool({
  user: 'muhammadbobur',
  database: 'pullo',
  password: '1111',
  port: 5432,
  host: 'localhost'
})

const rows = async (SQL, ...params) => {

  const clint = await pool.connect()

  try {

    const { rows } = await clint.query(SQL, params)

    return rows
  } catch(e) {
    console.log(e);
  } finally{
    clint.release()
  }
}

const row = async (SQL, ...params) => {

  const clint = await pool.connect()

  try {

    const { rows: [row] } = await clint.query(SQL, params)

    return row
  } catch(e) {
    console.log(e);
  } finally{
    clint.release()
  }
}

module.exports.row = row
module.exports.rows = rows
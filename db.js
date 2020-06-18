const pg = require('pg');

const local = {
  user: 'postgres',
  host: '127.0.0.1',
  database: 'sam-dev', //soundalchemymusic inventory management accounting
  port: 5432
};

const awsRDS = {
  user: 'master',
  password: 'testing123',
  host: 'sam-dev.cf6awl3jeoo9.ap-southeast-1.rds.amazonaws.com',
  database: 'samima', //AWS RDS config
  port: 5432
};

const dev = {
  user: 'master',
  password: 'testing123',
  host: 'sam-dev.cf6awl3jeoo9.ap-southeast-1.rds.amazonaws.com',
  database: 'samdev', //AWS RDS config
  port: 5432
};

const pool = new pg.Pool( (process.env.NODE_ENV=='dev') ? dev : awsRDS);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

module.exports = pool;
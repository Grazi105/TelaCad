//ormconfig.js
module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432, 
  username: 'root',
  password: '12343421',
  database: 'UX',
  synchronize: true, 
  entities: [
    'src/Back_AreaInteresse/AreaInteresse.js' 
  ],
};

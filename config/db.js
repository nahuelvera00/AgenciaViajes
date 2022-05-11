import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.BD_NOMBRE)

const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, '', {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        adle: 10000
    },
    operatorAliases: false
})

export default db;
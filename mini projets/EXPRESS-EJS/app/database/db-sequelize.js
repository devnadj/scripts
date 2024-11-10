import { Sequelize } from "sequelize";

const sequelize = new Sequelize('script', 'script', 'script',
{
    host: 'localhost',
    dialect: 'postgres',
    define: { freezeTableName: true, timestamps: false, force: true }
});


export default sequelize;
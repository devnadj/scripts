import sequelize from "../database/db-sequelize.js";
import { DataTypes, Model } from "sequelize";

class User extends Model {}

User.init({
    userid: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstname: { type: DataTypes.STRING, allowNull: false },
    lastname: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false }

}, {
    sequelize,
    modelName: 'User'
});


export default User;
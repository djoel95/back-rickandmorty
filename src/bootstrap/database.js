import { Sequelize } from "sequelize";
import { Favorite as FavoriteModel, User as UserModel } from "../models";
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

export const database = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    { logging: false, native: false }
);

FavoriteModel(sequelize);
UserModel(sequelize);

export const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: 'user_favorite' });
Favorite.belongsToMany(User, { through: 'user_favorite' });

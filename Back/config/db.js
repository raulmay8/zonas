import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
    'proyectoZonas',
    'root',
    '',
    {
    host: 'localhost',
    dialect: 'mysql',
}
); 
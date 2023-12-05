import { DataTypes } from "sequelize";
import {sequelize} from '../config/db.js'
import { Estados } from "./Estados.js";

export const Zonas = sequelize.define('zonas',{
    idZona:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.TEXT
    },
    coordinate:{
        type:DataTypes.STRING
    },
    status:{
        type:DataTypes.STRING
    },
    image:{
        type:DataTypes.STRING
    }},{
        timestamps: false,
})
Estados.hasMany(Zonas, {
    foreignKey: 'idEstadoF',
    sourceKey: 'idEstado'
})
Zonas.belongsTo(Estados,{
    foreignKey: 'idEstadoF',
    targetId: 'idZona'
})
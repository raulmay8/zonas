import { DataTypes } from "sequelize";
import {sequelize} from '../config/db.js'

export const Estados = sequelize.define('estados',{
    
    idEstado:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    },
    image:{
        type:DataTypes.STRING,
    }},{
    timestamps: false,
    
})
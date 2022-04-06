import Sequelize from "sequelize";
import { connection } from "../database/connection.js";

export const jogadores = connection.define("jogadores", {
    id: {   
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,    
        
    },
    nome: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    img: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    anonascimento: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    posicao: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    quantosgols: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    createdAt: false, 
    updatedAt: false,
    timestamps: false
})
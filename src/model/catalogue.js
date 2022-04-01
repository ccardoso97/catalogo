import Sequelize from 'sequelize';
import { conexao } from '../database/connection.js'

export const variados = conexao.define("variados", {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    img:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    ano:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    criador:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    origem:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    teor:{
        type: Sequelize.TEXT,
        allowNull: false
    },
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
})
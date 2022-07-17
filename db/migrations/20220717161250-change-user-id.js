// change-user-id
'use strict';
const { DataTypes } = require('sequelize');

const { CUSTOMER_TABLE} = require('./../models/customer.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id',{
        field:'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true,
        /* references: {
            model: USER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL' */
    
    });
  },

  async down (queryInterface) {
    //await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};
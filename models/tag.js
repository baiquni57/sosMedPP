'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static async cekTag(value) {
      const find = await Tag.findAll({where: {name : value}})
      if (find.length === 0) {
        await Tag.create({name: value})
      }
    }

    static associate(models) {
      // define association here
      Tag.belongsToMany(models.Post, {
        through: models.PostTag
      })
    }
  }
  Tag.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'insert tag'
        },
        notEmpty: {
          msg: 'this field should not be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};
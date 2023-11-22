'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    get formateDate() {
      const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      };
      const date = this.bornDate.toLocaleString('id-ID', options).replace(/\//g, '-')
    return date.split('-').reverse().join('-')
    }

    static associate(models) {
      // define association here
      Profile.belongsTo(models.User)
    }
  }

  Profile.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'insert first name'
        },
        notNull: {
          msg: 'insert first name'
        }
      },
      
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'insert last name'
        },
        notNull: {
          msg: 'insert last name'
        }
      },
      
    },
    dob: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'insert date of birth'
        },
        notNull: {
          msg: 'insert date of birth'
        }
      },
      
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'insert address'
        },
        notNull: {
          msg: 'insert address'
        }
      },
      
    },
    imgProfile: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'insert photo'
        }, 
        notNull: {
          msg:'this field should not be empty'
        }
      }
      
    },
    UserId: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};
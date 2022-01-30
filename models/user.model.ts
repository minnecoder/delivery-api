import { Model, DataTypes, Sequelize } from 'sequelize';
import { User } from '../interfaces/user.interface';

export class Users extends Model<User> implements Users {
  declare id: number;
  declare firstName: string
  declare lastName: string
  declare email: string
  declare password: string
  declare role: string

  static associate(models: any) {
    // define association here
  }
};

export default function (sequelize: Sequelize): typeof Users {

  Users.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'users',
  });
  return Users
}




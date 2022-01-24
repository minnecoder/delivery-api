import { Model, DataTypes, Sequelize } from 'sequelize';
import { User } from '../interfaces/user.interface';

export interface UserAttributes {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
}

export class Users extends Model<User, UserAttributes> implements UserAttributes {
  id!: number;
  first_name!: string
  last_name!: string
  email!: string
  password!: string
  role!: string

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
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
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




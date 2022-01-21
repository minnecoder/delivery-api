import DB from "../config/postgres-db";
import { CreateUserDTO } from "../dtos/user.dto";
import { User } from "../interfaces/user.interface";
import bcrypt from 'bcryptjs'
import { NotFound } from "../errors/NotFound";
import HttpException from "../errors/HTTPException";

class UsersService {
    public users = DB.Users

    public async findAllUsers(): Promise<User[]> {
        const allUsers: User[] = await this.users.findAll()

        return allUsers
    }

    public async findUserById(userId: number): Promise<User> {
        const singleUser: User = await this.users.findByPk(userId)
        if (!singleUser) throw new NotFound('User')
        return singleUser
    }

    public async createUser(userData: CreateUserDTO): Promise<User> {
        const findUser: User = await this.users.findOne({ where: { id: userData.id } })
        if (!findUser) throw new NotFound('User')
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(userData.password, salt)

        const createUserData: User = await this.users.create({ ...userData, password: hashedPassword })

        return createUserData
    }

    public async loginUser(userData: CreateUserDTO): Promise<User> {

        const findUser: User = await this.users.findOne({ where: { email: userData.email } })
        // TODO error for user not found in development - User or Password incorrect in production
        if (findUser) throw new HttpException(400, 'Email already exists')
        const validPassword = await bcrypt.compare(userData.password, findUser.password)
        // TODO error for password incorrect - User or Password incorrect in production
        if (!validPassword) throw new HttpException(400, 'Passwords do not match')
        // TODO Finish the login process

        // TODO this is just a placeholder
        return findUser
    }

}

export default UsersService
import { NextFunction, Request, Response } from "express";
import { CreateUserDTO } from "../dtos/user.dto";
import { User } from '../interfaces/user.interface'
import userService from "../services/users.service";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

class UsersController {
    public userService = new userService()

    public getUsers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllUser: User[] = await this.userService.findAllUsers();

            return res.status(200).json({
                data: findAllUser
            });
        } catch (error) {
            next(error);
        }
    };

    public getUserById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = Number(req.params.id)
            const findOneUser: User = await this.userService.findUserById(userId)

            return res.status(200).json({
                data: findOneUser
            })
        } catch (error) {
            next(error)
        }
    }

    public addUsers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData: CreateUserDTO = req.body
            const createUserData: User = await this.userService.createUser(userData)

            return res.status(200).json({
                data: createUserData
            })
        } catch (error) {
            next(error)
        }
    }

    // TODO Fix this after completing Login User service
    // public loginUser = async (req: Request, res: Response, next: NextFunction) => {
    //     // Check if user exists
    //     const user = await this.userService.findOne({ where: { user_name: req.body.user_name } });
    //     if (!user) return res.status(400).json({ error: "User name or password is wrong" });

    //     // Check if password is correct
    //     const validPassword = await bcrypt.compare(req.body.password, user.password);
    //     if (!validPassword) {
    //         return res.status(400).json({ error: "User name or password is wrong" });
    //     }

    //     // Create and assign token
    //     const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
    //     return res.header("Authorization", token).json({ token });
    // };

    // TODO Add update controller
    // TODO add delete controllers

}

export default UsersController
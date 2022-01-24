import { Router } from "express";
import UserController from '../controllers/users.controller'
import { CreateUserDTO } from "../dtos/user.dto";
import { Route } from '../interfaces/route.interface'
import validationMiddleware from "../middleware/validation.middleware";

class UserRoute implements Route {
    public path = '/users'
    public router = Router()
    public userController = new UserController()

    constructor() {
        this.initializeRoutes()
    }

    // TODO add login user to correct route
    // TODO remove commented routes after adding update and delete users
    //TODO add validationMiddleware to post and put methods - after this.path
    private initializeRoutes() {
        this.router.get(`${this.path}`, this.userController.getUsers)
        this.router.get(`${this.path}/:id`, this.userController.getUserById)
        this.router.post(`${this.path}`, validationMiddleware(CreateUserDTO), this.userController.addUsers)
        // this.router.put(`${this.path}`, validationMiddleware(CreateUserDTO,true), this.userController.updateUser)
        // this.router.delete(`${this.path}`, this.userController.deleteUser)
    }
}

export default UserRoute
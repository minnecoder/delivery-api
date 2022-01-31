import { Router } from "express";
import TeamController from "../controllers/team.controller";
import { CreateTeamDTO } from "../dtos/team.dto";
import { Route } from "../interfaces/route.interface";
import validationMiddleware from "../middleware/validation.middleware";

class TeamsRoute implements Route {
    public path = '/teams'
    public router = Router()
    public teamsController = new TeamController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.teamsController.getTeam)
        this.router.get(`${this.path}/:id`, this.teamsController.getSingleTeam)
        this.router.post(`${this.path}`, validationMiddleware(CreateTeamDTO), this.teamsController.addTeam)
        this.router.put(`${this.path}/:id`, validationMiddleware(CreateTeamDTO, true), this.teamsController.updateTeam)
        this.router.delete(`${this.path}/:id`, this.teamsController.deleteTeam)
    }
}

export default TeamsRoute
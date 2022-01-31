import { NextFunction, Request, Response } from "express";
import { CreateTeamDTO } from "../dtos/team.dto";
import { Team } from '../interfaces/team.interface'
import teamService from '../services/team.service'


class TeamController {
    public teamService = new teamService()

    public getTeam = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllTeamData: Team[] = await this.teamService.findAllTeam();

            return res.status(200).json({
                data: findAllTeamData
            });
        } catch (error) {
            next(error)
        }
    };

    public getSingleTeam = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const teamId = Number(req.params.id)
            const findSingleTeamData = await this.teamService.findTeamById(teamId);

            return res.status(200).json({
                data: findSingleTeamData
            });
        } catch (error) {
            next(error)
        }
    };

    public addTeam = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const teamData: CreateTeamDTO = req.body
            const createTeamData: Team = await this.teamService.createTeam(teamData);

            return res.status(200).json({
                data: createTeamData
            });
        } catch (error) {
            next(error);
        }
    };

    public updateTeam = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const teamId = Number(req.params.id)
            const teamData: CreateTeamDTO = req.body
            const updateTeam: Team = await this.teamService.updateTeam(teamId, teamData)

            return res.status(200).json({
                data: teamData
            });
        } catch (error) {
            next(error);
        }
    };

    public deleteTeam = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const teamId = Number(req.params.id)

            const deleteTeamData = await this.teamService.deleteTeam(teamId);

            return res.status(200).json({
                success: true
            });
        } catch (error) {
            next(error);
        }
    }
}

export default TeamController 
import DB from '../config/postgres-db'
import { CreateTeamDTO } from '../dtos/team.dto'
import { Team } from '../interfaces/team.interface'
import { NotFound } from '../errors/NotFound'


class TeamService {
    public teams = DB.Team

    public async findAllTeam(): Promise<Team[]> {
        const allteams: Team[] = await this.teams.findAll()
        return allteams
    }

    public async findTeamById(teamsId: number): Promise<Team> {
        const singleTeam: Team = await this.teams.findByPk(teamsId)

        if (!singleTeam) throw new NotFound('Team')

        return singleTeam
    }

    public async createTeam(teamsData: CreateTeamDTO): Promise<Team> {
        const findTeam: Team = await this.teams.findOne({ where: { id: teamsData.id } })

        if (!findTeam) throw new NotFound('Team')

        const createdTeamData: Team = await this.teams.create({ ...teamsData })

        return createdTeamData
    }


    public async updateTeam(teamsId: number, teamsData: CreateTeamDTO): Promise<Team> {
        const findTeam: Team = await this.teams.findOne({ where: { id: teamsData.id } })

        if (!findTeam) throw new NotFound('Team')

        await this.teams.update({ ...teamsData }, { where: { id: teamsId } })

        const updatedTeam = await this.teams.findByPk(teamsId)

        return updatedTeam
    }

    public async deleteTeam(teamsId: number): Promise<Team> {
        const findTeam: Team = await this.teams.findByPk(teamsId)

        await this.teams.destroy({ where: { id: teamsId } })

        return findTeam
    }
}

export default TeamService
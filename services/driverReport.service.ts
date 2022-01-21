import DB from '../config/postgres-db'
import { CreateDriverReportDTO } from '../dtos/driverReport.dto'
import { DriverReport } from '../interfaces/driverReport.interface'
import { NotFound } from '../errors/NotFound'
import { Vehicle } from '../interfaces/vehicle.interface'

class DriverReportService {
    public driverReports = DB.DriverReports

    public async findAllDriverReports(): Promise<DriverReport[]> {
        const allDriverReports: DriverReport[] = await this.driverReports.findAll()

        return allDriverReports
    }

    public async findDriverReportsById(driverReportId: number): Promise<DriverReport> {
        const singleDriverReport: DriverReport = await this.driverReports.findByPk(driverReportId)

        if (!singleDriverReport) throw new NotFound('Driver Report')

        return singleDriverReport
    }

    public async createDriverReport(driverReportsData: CreateDriverReportDTO): Promise<DriverReport> {
        const findDriverReport: DriverReport = await this.driverReports.findOne({ where: { id: driverReportsData.id } })

        if (!findDriverReport) throw new NotFound('Driver Report')

        const createdDriverReportsData: DriverReport = await this.driverReports.create({ ...driverReportsData })

        return createdDriverReportsData
    }

    public async updateDriverReport(driverReportsId: number, driverReportsData: CreateDriverReportDTO): Promise<DriverReport> {
        const findDriverReports: DriverReport = await this.driverReports.findByPk(driverReportsId)

        if (!findDriverReports) throw new NotFound('Driver Report')

        await this.driverReports.update({ ...driverReportsData }, { where: { id: driverReportsId } })

        const updatedDriverReport: DriverReport = await this.driverReports.findByPk(driverReportsId)

        return updatedDriverReport
    }

    public async deleteDriverReport(driverReportsId: number): Promise<DriverReport> {
        const findDriverReports: DriverReport = await this.driverReports.findByPk(driverReportsId)

        if (!findDriverReports) throw new NotFound('Driver Report')

        await this.driverReports.destroy({ where: { id: driverReportsId } })

        return findDriverReports
    }
}

export default DriverReportService
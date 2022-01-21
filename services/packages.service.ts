import DB from "../config/postgres-db";
import { CreatePackagesDTO } from "../dtos/packages.dto";
import { Package } from "../interfaces/package.interface";
import { NotFound } from "../errors/NotFound";

class PackagesService {
    public packages = DB.Packages

    public async findAllPackages(): Promise<Package[]> {
        const allPackages: Package[] = await this.packages.findAll()

        return allPackages
    }

    public async findPackageById(packageId: number): Promise<Package> {
        const singlePackage: Package = await this.packages.findByPk(packageId)
        if (!singlePackage) throw new NotFound('Package')
        return singlePackage
    }

    public async createPackage(packageData: CreatePackagesDTO): Promise<Package> {
        const findPackage: Package = await this.packages.findOne({ where: { id: packageData.id } })
        if (!findPackage) throw new NotFound('Package')
        const createdPackageData: Package = await this.packages.create({ ...packageData })

        return createdPackageData
    }

    public async updatePackage(packageId: number, packageData: CreatePackagesDTO): Promise<Package> {
        const findPackage: Package = await this.packages.findByPk(packageId)
        if (!findPackage) throw new NotFound('Package')
        await this.packages.update({ ...packageData }, { where: { id: packageId } })
        const updatedPackage: Package = await this.packages.findByPk(packageId)

        return updatedPackage
    }

    public async deletePackage(packageId: number): Promise<Package> {
        const findPackage: Package = await this.packages.findByPk(packageId)
        if (!findPackage) throw new NotFound('Package')
        await this.packages.destroy({ where: { id: packageId } })

        return findPackage
    }

}

export default PackagesService
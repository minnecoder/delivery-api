export interface DriverReport {
    id: number
    driverId: number
    vehicleId: number
    startMileage: number
    firstStopMileage: number
    lastStopMileage: number
    finalMileage: number
    break1Start: string
    break1End: string
    break2Start: string
    break2End: string
    lunchStart: string
    lunchEnd: string
    stopsCompleted: number
    stopsRemaining: number
    numberSignatureStops: number
}
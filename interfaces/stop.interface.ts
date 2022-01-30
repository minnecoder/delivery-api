export interface Stop {
    id: number
    customerId: number
    orderId: number
    vehicleId: number
    driverId: number
    isDelivered: string
    isSigned: string
    state: string
    reasonCode: string
    signerName: string
    startTime: string
    endTime: string
    averageTime: string
    isReturnStop: boolean
}
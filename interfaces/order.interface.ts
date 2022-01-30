export interface Order {
    id: number
    customerId: number
    orderStatus: string
    orderTotal: number
    isGrouped: string
    previousOrderNumber: number
}
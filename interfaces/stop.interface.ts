export interface Stop {
    id: number
    customer_id: number
    order_id: number
    vehicle_id: number
    driver_id: number
    is_delivered: string
    is_signed: string
    reason_code: string
    signer_name: string
    start_time: string
    stop_time: string
}
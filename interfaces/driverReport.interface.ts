export interface DriverReport {
    id: number
    driver_id: number
    vehicle_id: number
    start_mileage: number
    first_stop_mileage: number
    last_stop_mileage: number
    final_mileage: number
    break1_start: string
    break1_end: string
    break2_start: string
    break2_end: string
    lunch_start: string
    lunch_end: string
    stops_completed: number
    stops_remaining: number
    number_signature_stops: number
}
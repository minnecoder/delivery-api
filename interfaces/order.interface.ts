export interface Order {
    id: number
    customer_id: number
    order_status: string
    order_total: number
    is_grouped: string
    previous_order_number: number
}
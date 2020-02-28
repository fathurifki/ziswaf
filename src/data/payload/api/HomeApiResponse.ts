import { Book } from '@/domain/entities/Home'

export class HomeResponse {
    public success: boolean
    public message: string
    public data?: Book[]

    constructor(success: boolean, message: string, data?: Book[]) {
        this.success = success
        this.message = message
        this.data = data
    }
}
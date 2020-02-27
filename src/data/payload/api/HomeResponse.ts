import { Home } from '@/domain/entities/Home'

export class HomeResponse {
    public success: boolean
    public message: string
    public data?: Home[]

    constructor(success: boolean, message: string, data?: Home[]) {
        this.success = success
        this.message = message
        this.data = data
    }
}
export class Home {
    public success: boolean
    public message: string
    public data?: HomeData[]

    constructor( success: boolean, message: string, data?: HomeData[]) {
        this.success = success
        this.message = message
        this.data = data
    }
}
export class HomeData {
    public id: number
    public name: string
    public age: number

    constructor(id: number, name: string, age: number) {
        this.id = id
        this.name = name
        this.age = age
    }
}
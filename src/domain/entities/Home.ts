import { BaseEntity } from './Base'

export class Home extends BaseEntity {
    public id: number
    public name: string
    public age: number

    constructor(id: number, name: string, age: number) {
        super();
        this.id = id
        this.name = name
        this.age = age
    }
}
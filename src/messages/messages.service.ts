import {Injectable} from '@nestjs/common'
import { MessagesRepositoy } from "./messages.repository";


@Injectable()
export class MessagesService {

    // messagesRepo  : MessagesRepositoy
    // constructor (messagesRepo : MessagesRepositoy ){
    //     this.messagesRepo = messagesRepo
    // }

    constructor( public messagesRepo : MessagesRepositoy){}

    async findOne (id : string){
        return this.messagesRepo.findOne(id)
    }

    async findAll (){
        return this.messagesRepo.findAll()

    }

    async create (message : string){
        return this.messagesRepo.create(message)
    }
}
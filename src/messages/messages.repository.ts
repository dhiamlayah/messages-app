import { Injectable } from "@nestjs/common";
import { readFile ,writeFile } from "fs/promises";

@Injectable()
export class MessagesRepositoy {
    async findOne (id : string){
        const contents = await  readFile("messages.json","utf8")
        const messages = JSON.parse(contents)       //change the forma from string to list of json
        return messages[id]
    }

    async findAll (){
        const contents = await  readFile("messages.json","utf8")
        const messages = JSON.parse(contents)       //change the forma from string to list of json
        return messages
    }

    async create (content : string){
        const contents = await  readFile("messages.json","utf8")
        const messages = JSON.parse(contents)       //change the forma from string to list of json
        const id = Math.floor(Math.random()*999)    
        messages[id]={id , content}
        await writeFile('messages.json',JSON.stringify(messages))

        
    }
}
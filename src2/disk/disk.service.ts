import { PowerService } from './../power/power.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DiskService {
    constructor ( private powerService:PowerService){}

    getData (){
        console.log(" get Data methode from disk service")
        this.powerService.supplyPower(20)
        return "data"
    
    }

}

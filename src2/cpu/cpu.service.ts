import { PowerService } from './../power/power.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CpuService {

    constructor ( private powerService : PowerService ) {}


    compute ( a : number , b : number){
        
        this.powerService.supplyPower(10)
        return a+b
    }
}

import { Injectable } from "@nestjs/common";
import { AppService } from "./app.service";

@Injectable()
export class AppServiceImpl implements AppService {

    getHello(name: string): string {
        return `My name is ${name}`;
    }

}
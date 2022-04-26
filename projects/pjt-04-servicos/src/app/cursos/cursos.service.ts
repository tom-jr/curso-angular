import { Injectable } from "@angular/core";

@Injectable()
export class CursosService {

    constructor() {
console.log('CursoService instanced')
    }
    getCursos(){
        return ['Java','Angular','Spring Boot','Javascript','HTML/CSS','Docker'];
    }
}
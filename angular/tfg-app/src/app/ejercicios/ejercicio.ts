import { Material } from "../materiales/material";

export class Ejercicio {

    id:number;
    nombre:string;
    descripcion: string;
    grupoMuscular: string;
    foto: string;
    materiales: Array<Material>;
}

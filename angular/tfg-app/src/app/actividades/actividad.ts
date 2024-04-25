import { Usuario } from "../usuarios/usuario";

export class Actividad {

    id:number;
    nombre:string;
    descripcion: string;
    sala: string;
    aforo: number;
    fecha: string;
    horario: string;
    usuarios: Array<Usuario>;
}

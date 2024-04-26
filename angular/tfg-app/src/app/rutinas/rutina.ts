import { Diarutina } from "../diasrutinas/diarutina";
import { Usuario } from "../usuarios/usuario";

export class Rutina {

    id: number;
    nombre: string;
    descripcion: string;
    recomendaciones: string;
    diasRutina: Array<Diarutina>;
    usuario: Usuario;

}

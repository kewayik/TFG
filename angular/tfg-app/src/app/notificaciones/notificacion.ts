import { Usuario } from "../usuarios/usuario";

export class Notificacion {
    id: number;
    descripcion: string;
    tipo: string;
    fecha: string;
    horaGeneracion: string;
    usuario: Usuario;
}

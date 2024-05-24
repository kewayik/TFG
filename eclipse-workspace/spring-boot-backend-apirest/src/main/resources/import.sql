INSERT INTO roles (nombre) VALUES ('ROLE_ADMIN');
INSERT INTO roles (nombre) VALUES ('ROLE_USER');
INSERT INTO roles (nombre) VALUES ('ROLE_ENTRENADOR');

INSERT INTO actividades (nombre, descripcion, sala, aforo, fecha, horario) VALUES ('Body Pump', 'Programa de entrenamiento físico intenso que combina actividad aeróbica y trabajo muscular mediante el levantamiento de pesas al ritmo de la música', 'Sala 15', 32, '2022-10-12', '12:00-13:00');
INSERT INTO actividades (nombre, descripcion, sala, aforo, fecha, horario) VALUES ('Entrenamiento por parejas', 'El entrenamiento consiste en un circuito de fuerza y resistencia que incluye estaciones con ejercicios como sentadillas con mancuernas, flexiones de brazos con apoyo en balón medicinal, ejercicios de tracción con bandas de resistencia y planchas laterales con rotación. Cada pareja realiza las estaciones durante 1 minuto antes de pasar a la siguiente. Después, se completa una sesión de cardio en grupo con ejercicios de alta intensidad intercalados con períodos de descanso activo. La sesión concluye con estiramientos estáticos para promover la flexibilidad y la recuperación muscular', 'Sala 1', 4, '2022-10-17', '17:00-18:30');
INSERT INTO actividades (nombre, descripcion, sala, aforo, fecha, horario) VALUES ('Zumba', 'Clase de fitness que combina baile y ejercicios aeróbicos al ritmo de música latina', 'Sala 12', 25, '2022-10-13', '09:00-10:00');
INSERT INTO actividades (nombre, descripcion, sala, aforo, fecha, horario) VALUES ('Zumba', 'Clase de fitness que combina baile y ejercicios aeróbicos al ritmo de música latina', 'Sala 12', 25, '2022-10-13', '18:00-19:00');
INSERT INTO actividades (nombre, descripcion, sala, aforo, fecha, horario) VALUES ('Yoga', 'Práctica física, mental y espiritual originaria de la India que busca el equilibrio y la armonía del cuerpo y la mente', 'Sala 8', 20, '2022-10-14', '10:00-11:00');
INSERT INTO actividades (nombre, descripcion, sala, aforo, fecha, horario) VALUES ('Spinning', 'Clase de ciclismo indoor en la que se realizan ejercicios de intensidad variable al ritmo de la música', 'Sala 3', 30, '2022-10-15', '19:00-20:00');
INSERT INTO actividades (nombre, descripcion, sala, aforo, fecha, horario) VALUES ('Pilates', 'Sistema de entrenamiento físico y mental que se basa en la respiración, el control muscular y la alineación corporal', 'Sala 10', 15, '2022-10-16', '09:00-10:00');
INSERT INTO actividades (nombre, descripcion, sala, aforo, fecha, horario) VALUES ('Kickboxing', 'Combinación de artes marciales y boxeo que se practica mediante golpes de puño y pierna', 'Sala 5', 20, '2022-10-17', '20:00-21:00');
INSERT INTO actividades (nombre, descripcion, sala, aforo, fecha, horario) VALUES ('CrossFit', 'Entrenamiento funcional de alta intensidad que combina ejercicios de fuerza, resistencia y cardio', 'Sala 1', 25, '2022-10-18', '17:00-18:00');

INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('press-de-banca.jpg', 'Press Banca', 'El press de banca es un ejercicio de peso libre que trabaja la fuerza de empuje del tren superior en el plano sagital. Así mismo, este ejercicio es uno de los 3 que se realizan en la disciplina de powerlifting', 'Pecho');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('sentadillas.jpg', 'Sentadillas', 'Las sentadillas son un ejercicio de peso libre que trabaja los músculos de las piernas y glúteos. Es uno de los ejercicios básicos en cualquier rutina de entrenamiento de fuerza.', 'Piernas');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('dominadas.jpg', 'Dominadas', 'Las dominadas son un ejercicio de peso corporal que trabaja principalmente los músculos de la espalda y los brazos. Es excelente para desarrollar fuerza y ​​potencia.', 'Espalda');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('peso-muerto.jpg', 'Peso Muerto', 'El peso muerto es un ejercicio compuesto que trabaja múltiples grupos musculares, incluyendo la espalda baja, glúteos, isquiotibiales y la cadena posterior en general. Es fundamental para desarrollar fuerza funcional.', 'Espalda');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('flexiones.jpg', 'Flexiones de Brazos', 'Las flexiones de brazos son un ejercicio de peso corporal que trabaja principalmente los músculos del pecho, hombros y tríceps. Son versátiles y se pueden realizar en cualquier lugar sin necesidad de equipo.', 'Pecho');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('zancada-lunges.jpg', 'Zancadas', 'Las zancadas son un ejercicio de piernas que trabajan los músculos de las piernas y glúteos. Pueden realizarse con peso corporal o con pesas adicionales para aumentar la intensidad.', 'Piernas');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('dips-o-paralelas-triceps.jpg', 'Fondos en Paralelas', 'Los fondos en paralelas son un ejercicio de peso corporal que se enfoca en los músculos del tríceps y los hombros. También trabajan los músculos del pecho y el core como músculos secundarios.', 'Tríceps');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('remo-con-barra.webp', 'Remo con Barra', 'El remo con barra es un ejercicio de espalda que se centra en los músculos de la espalda media y superior, así como en los músculos del brazo. Es un ejercicio compuesto que ayuda a desarrollar fuerza y tamaño muscular.', 'Espalda');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('press-arnold.jpg', 'Press de Hombros con Mancuernas', 'El press de hombros con mancuernas es un ejercicio para hombros que se realiza levantando una mancuerna desde los hombros hasta la posición sobre la cabeza. Ayuda a desarrollar los deltoides y la fuerza en los hombros.', 'Hombros');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('elevaciones-gemelos.webp', 'Elevaciones de Gemelos en Máquina', 'Las elevaciones de gemelos en máquina son un ejercicio para los músculos de la pantorrilla que se realiza levantando los talones mientras se está de pie en una máquina diseñada para ello. Ayudan a desarrollar fuerza y tamaño en los músculos de la pantorrilla.', 'Pantorrillas');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('curl-biceps-barra.jpg', 'Curl de Bíceps con Barra', 'El curl de bíceps con barra es un ejercicio para bíceps que se realiza levantando una barra desde los muslos hasta los hombros mediante la flexión de los codos. Es uno de los ejercicios básicos para desarrollar fuerza y tamaño en los bíceps.', 'Bíceps');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('flexiones-manos-elevadas.webp', 'Flexiones con Manos Elevadas', 'Las flexiones con manos elevadas son una variación de las flexiones de brazos convencionales en las que las manos se colocan en una superficie elevada, como una caja o un banco. Ayudan a aumentar el rango de movimiento y a trabajar más los músculos del pecho.', 'Pecho');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('deadlift-rumano.jpg', 'Deadlift Rumano', 'El deadlift rumano es una variante del peso muerto en la que las piernas permanecen casi completamente rectas durante todo el movimiento. Se enfoca en trabajar los músculos de la espalda baja, los glúteos y los isquiotibiales.', 'Espalda');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('Press-de-banca-inclinado.jpg', 'Press de Banca Inclinado', 'El press de banca inclinado es una variación del press de banca convencional que se realiza en un banco inclinado. Trabaja principalmente los músculos del pecho y los hombros.', 'Pecho');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('Hip-thrust.jpg', 'Hip Thrust', 'El hip thrust es un ejercicio para glúteos que se realiza apoyando la espalda en un banco y levantando las caderas hasta que estén en línea con el cuerpo. Es excelente para desarrollar fuerza y tamaño en los glúteos.', 'Glúteos');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('pull-up.webp', 'Pull-ups', 'Los pull-ups son un ejercicio de peso corporal que se realiza colgándose de una barra y levantando el cuerpo hasta que la barbilla esté por encima de la barra. Trabajan principalmente los músculos de la espalda y los brazos.', 'Espalda');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('press-militar.png', 'Press Militar', 'El press militar es un ejercicio para hombros que se realiza levantando una barra desde los hombros hasta la posición sobre la cabeza. Es excelente para desarrollar fuerza y tamaño en los deltoides.', 'Hombros');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('elevaciones-laterales.jpg', 'Elevaciones Laterales con Mancuernas', 'Las elevaciones laterales con mancuernas son un ejercicio para los hombros que se realiza levantando las mancuernas hacia los lados hasta que los brazos estén paralelos al suelo. Ayudan a desarrollar los deltoides laterales.', 'Hombros');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('estocadas.gif', 'Estocadas con Mancuernas', 'Las estocadas con mancuernas son un ejercicio para piernas que se realiza sosteniendo una mancuerna en cada mano mientras se hace el movimiento de estocada. Trabajan los músculos de las piernas y glúteos.', 'Piernas');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('fondos-anillas.jpg', 'Fondos en Anillas', 'Los fondos en anillas son un ejercicio de peso corporal que se realiza utilizando anillas suspendidas. Trabajan principalmente los músculos del pecho, tríceps y hombros, así como también los músculos estabilizadores del core.', 'Pecho');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('setadillas-sumo.webp', 'Sentadillas Sumo', 'Las sentadillas sumo son una variación de las sentadillas convencionales en las que se coloca los pies más anchos que la anchura de los hombros y las puntas de los pies ligeramente hacia afuera. Se enfocan en trabajar los músculos internos del muslo y los glúteos.', 'Piernas');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('flexiones-brazo.webp', 'Flexiones de Brazos con una Sola Mano', 'Las flexiones de brazos con una sola mano son un ejercicio avanzado que implica realizar flexiones con el peso del cuerpo apoyado en una sola mano. Es excelente para desarrollar fuerza y estabilidad en los brazos y hombros.', 'Pecho');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('abdominales-piernas.webp', 'Abdominales con Piernas Elevadas', 'Los abdominales con piernas elevadas son un ejercicio de abdominales que se realiza acostado boca arriba con las piernas elevadas en el aire. Ayuda a trabajar los músculos abdominales inferiores.', 'Abdominales');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('extension-triceps.webp', 'Extensiones de Tríceps con Polea Alta', 'Las extensiones de tríceps con polea alta son un ejercicio para el tríceps que se realiza utilizando una máquina de polea alta. Ayuda a aislar y desarrollar los músculos del tríceps.', 'Tríceps');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('flexion-diamante.webp', 'Flexiones de Brazos Diamante', 'Las flexiones de brazos diamante son una variante de las flexiones de brazos convencionales que se enfocan más en los tríceps. Coloca las manos formando un diamante debajo del pecho mientras haces el movimiento.', 'Tríceps');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('plancha.webp', 'Plancha', 'La plancha es un ejercicio de resistencia que fortalece los músculos abdominales, lumbares y del core. Ayuda a mejorar la estabilidad y la postura.', 'Abdominales');
INSERT INTO ejercicios (foto, nombre, descripcion, grupo_muscular) VALUES ('burpees.webp', 'Burpees', 'Los burpees son un ejercicio compuesto que involucra movimientos de flexión, sentadilla, salto y flexiones de brazos. Son excelentes para el entrenamiento de fuerza y cardio.', 'Cuerpo Completo');


INSERT INTO gimnasio (nombre, telefono, direccion, n_identificacion_fiscal) VALUES ('Peso puma', 952695478, 'Calle Diego de Almenguer, 15', '754169854M');

INSERT INTO notificaciones (descripcion, tipo, fecha, hora_generacion) VALUES ('La actividad Crossfit de las 15:00 ha sido atrasada una hora debido a un problema con el entrenador de esta', 'Aviso', '2024-07-12', '10:32');
INSERT INTO notificaciones (descripcion, tipo, fecha, hora_generacion) VALUES ('La clase de Yoga programada para mañana ha sido cancelada debido a problemas de disponibilidad del instructor. Disculpa las molestias.', 'Aviso', '2024-07-11', '16:45');
INSERT INTO notificaciones (descripcion, tipo, fecha, hora_generacion) VALUES ('A partir del próximo lunes, los horarios de apertura del gimnasio se adelantarán una hora. El nuevo horario será de 7:00 a 22:00.', 'Aviso', '2024-07-09', '11:00');
INSERT INTO notificaciones (descripcion, tipo, fecha, hora_generacion) VALUES ('¡No te pierdas nuestra promoción especial de verano! Obtén un descuento del 20% en todas las membresías nuevas durante todo el mes de julio.', 'Anuncio', '2024-07-08', '09:30');
INSERT INTO notificaciones (descripcion, tipo, fecha, hora_generacion) VALUES ('Por motivos de mantenimiento, el gimnasio permanecerá cerrado el próximo sábado 13 de julio. Reanudaremos nuestras actividades el domingo 14 de julio. Disculpa las molestias.', 'Aviso', '2024-07-05', '13:20');
INSERT INTO notificaciones (descripcion, tipo, fecha, hora_generacion) VALUES ('Estamos emocionados de presentarte nuestro nuevo programa de entrenamiento de fuerza y ​​acondicionamiento físico. ¡Sigue con nosotros para alcanzar tus objetivos de fitness!', 'Anuncio', '2024-07-07', '08:00');

INSERT INTO usuarios (username, dado_de_alta, foto, nombre, apellidos, dni, email, domicilio, password, rol, fecha_nacimiento, telefono) VALUES('carlos', true, 'carlos.png', 'Carlos', 'Velasco Hilario', '77191635R', 'carlosv@gmail.com', 'Calle Larios, 123, Centro Histórico, Málaga', '$2a$10$DOMDxjYyfZ/e7RcBfUpzqeaCs8pLgcizuiQWXPkU35nOhZlFcE9MS', 'cliente', '2001-11-12', '123456789');
INSERT INTO usuarios (username, dado_de_alta, foto, nombre, apellidos, dni, email, domicilio, password, rol, fecha_nacimiento, telefono) VALUES('josemi', true, 'josemi.png', 'Jose Miguel', 'Martinez Martin', '74578966Q', 'jmiguel@gmail.com', 'Avenida Andalucía, 456, Cruz de Humilladero, Málaga', '$2a$10$DOMDxjYyfZ/e7RcBfUpzqeaCs8pLgcizuiQWXPkU35nOhZlFcE9MS', 'cliente', '2001-03-16', '987654321');
INSERT INTO usuarios (username, dado_de_alta, foto, nombre, apellidos, dni, email, domicilio, password, rol, fecha_nacimiento, telefono) VALUES('cubo', false, 'cubo.png', 'Juan', 'Cubo Bravo', '99999999J', 'cubojuan@gmail.com', 'Calle Carretería, 789, La Merced, Málaga', '$2a$10$DOMDxjYyfZ/e7RcBfUpzqeaCs8pLgcizuiQWXPkU35nOhZlFcE9MS', 'cliente', '2001-07-22', '654123987');
INSERT INTO usuarios (username, dado_de_alta, foto, nombre, apellidos, dni, email, domicilio, password, rol, fecha_nacimiento, telefono) VALUES('silvia', true, 'silvia.png', 'Silvia', 'Carrasco Miedes', '12345678D', 'silviaacm3@gmail.com', 'Calle Marqués de Larios, 321, El Molinillo, Málaga', '$2a$10$DOMDxjYyfZ/e7RcBfUpzqeaCs8pLgcizuiQWXPkU35nOhZlFcE9MS', 'cliente', '2001-07-09', '741852963');
INSERT INTO usuarios (username, dado_de_alta, foto, nombre, apellidos, dni, email, domicilio, password, rol, fecha_nacimiento, telefono) VALUES('vicente', true, 'vicente.png', 'Vicente', 'Navarro Jurado', '78956412D', 'vnavarro@gmail.com', 'Calle San Agustín, 890, La Trinidad, Málaga', '$2a$10$DOMDxjYyfZ/e7RcBfUpzqeaCs8pLgcizuiQWXPkU35nOhZlFcE9MS', 'cliente', '1967-11-02', '159263478');
INSERT INTO usuarios (username, dado_de_alta, foto, nombre, apellidos, dni, email, domicilio, password, rol, fecha_nacimiento, telefono) VALUES('luli', true, 'luli.png', 'Lucia', 'Riobo Perez', '77885544D', 'luli@gmail.com', 'Calle Granada, 234, La Victoria, Málaga', '$2a$10$DOMDxjYyfZ/e7RcBfUpzqeaCs8pLgcizuiQWXPkU35nOhZlFcE9MS', 'cliente', '1999-11-09', '369852147');
INSERT INTO usuarios (username, dado_de_alta, foto, nombre, apellidos, dni, email, domicilio, password, rol, fecha_nacimiento, telefono) VALUES('tamayo', false, 'tamayo.png', 'Pablo', 'Tamayo Medina', '96857412D', 'tamamedi@gmail.com', 'Paseo del Parque, 567, Centro, Málaga', '$2a$10$DOMDxjYyfZ/e7RcBfUpzqeaCs8pLgcizuiQWXPkU35nOhZlFcE9MS', 'cliente', '2001-02-07', '852741963');
INSERT INTO usuarios (username, dado_de_alta, foto, nombre, apellidos, dni, email, domicilio, password, rol, fecha_nacimiento, telefono) VALUES('maria', true, 'maria.png', 'Maria de la O', 'Bujalance Castilla', '88965412J', 'mdelao@gmail.com', 'Calle Alcazabilla, 222, Centro Histórico, Málaga', '$2a$10$DOMDxjYyfZ/e7RcBfUpzqeaCs8pLgcizuiQWXPkU35nOhZlFcE9MS', 'cliente', '1967-04-25', '456123789');
INSERT INTO usuarios (username, dado_de_alta, foto, nombre, apellidos, dni, email, domicilio, password, rol, fecha_nacimiento, telefono) VALUES('adolfo', true, 'adolfo.png', 'Adolfo', 'Gonzalez Bujalance', '78962222D', 'adolgon@gmail.com', 'Calle Alameda Principal, 333, Centro, Málaga', '$2a$10$DOMDxjYyfZ/e7RcBfUpzqeaCs8pLgcizuiQWXPkU35nOhZlFcE9MS', 'cliente', '2004-04-04', '987456321');
INSERT INTO usuarios (username, dado_de_alta, foto, nombre, apellidos, dni, email, domicilio, password, rol, fecha_nacimiento, telefono) VALUES('enrique', true, 'enrique.png', 'Enrique', 'Navarro Jurado', '78754412E', 'enavarro@gmail.com', 'Plaza de la Constitución, 111, Centro Histórico, Málaga', '$2a$10$DOMDxjYyfZ/e7RcBfUpzqeaCs8pLgcizuiQWXPkU35nOhZlFcE9MS', 'cliente', '1966-05-24', '123987654');
INSERT INTO usuarios (username, dado_de_alta, foto, nombre, apellidos, dni, email, domicilio, password, rol, fecha_nacimiento, telefono) VALUES('natalia', false, 'natalia.png', 'Natalia', 'Paez Marquez', '78965431K', 'nati@gmail.com', 'Calle Compañía, 444, Centro Histórico, Málaga', '$2a$10$DOMDxjYyfZ/e7RcBfUpzqeaCs8pLgcizuiQWXPkU35nOhZlFcE9MS', 'cliente', '2001-08-29', '321987654');
INSERT INTO usuarios (username, dado_de_alta, foto, nombre, apellidos, dni, email, domicilio, password, rol, fecha_nacimiento, telefono) VALUES('dani', true, 'dani.png', 'Daniel', 'Gonzalez Holgado', '78963311L', 'dgon@gmail.com', 'Paseo Marítimo Antonio Banderas, 555, Huelin, Málaga', '$2a$10$DOMDxjYyfZ/e7RcBfUpzqeaCs8pLgcizuiQWXPkU35nOhZlFcE9MS7', 'cliente', '2001-12-15', '987654321');
INSERT INTO usuarios (username, dado_de_alta, foto, nombre, apellidos, dni, email, domicilio, password, rol, fecha_nacimiento, telefono) VALUES('admin', true, 'admin.jpeg', 'Admin', 'Admininstrador', '77963311L', 'admin@gmail.com', 'Calle Banderas, 555, Huelin, Málaga', '$2a$10$DOMDxjYyfZ/e7RcBfUpzqeaCs8pLgcizuiQWXPkU35nOhZlFcE9MS', 'administrador','2001-12-15', '987654321');
INSERT INTO usuarios (username, dado_de_alta, foto, nombre, apellidos, dni, email, domicilio, password, rol, fecha_nacimiento, telefono) VALUES('entrenador', true, 'guille.png', 'Entrenador', 'Guillermo', '87763311L', 'entrenador@gmail.com', 'Calle Antonio, 5, Málaga', '$2a$10$DOMDxjYyfZ/e7RcBfUpzqeaCs8pLgcizuiQWXPkU35nOhZlFcE9MS', 'entrenador', '2001-12-15', '987654321');

INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (17.5, 15, 5, '2024-03-12', 1, 2);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (20.0, 12, 4, '2024-03-13', 2, 3);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (15.0, 10, 3, '2024-03-14', 3, 4);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (22.5, 8, 5, '2024-03-15', 4, 5);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (18.0, 20, 3, '2024-03-16', 5, 6);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (25.0, 10, 4, '2024-03-17', 6, 7);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (12.5, 15, 5, '2024-03-18', 7, 8);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (28.0, 12, 3, '2024-03-19', 8, 9);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (16.5, 10, 4, '2024-03-20', 9, 10);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (30.0, 8, 5, '2024-03-21', 10, 11);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (15.0, 12, 3, '2024-03-22', 11, 12);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (20.0, 15, 4, '2024-03-23', 12, 1);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (17.5, 10, 5, '2024-03-24', 13, 2);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (22.5, 8, 3, '2024-03-25', 14, 3);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (18.0, 20, 4, '2024-03-26', 15, 4);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (25.0, 12, 5, '2024-03-27', 16, 5);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (12.5, 15, 3, '2024-03-28', 17, 6);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (28.0, 10, 4, '2024-03-29', 18, 7);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (16.5, 8, 5, '2024-03-30', 19, 8);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (30.0, 20, 3, '2024-03-31', 20, 9);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (15.0, 12, 4, '2024-04-01', 21, 10);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (20.0, 15, 5, '2024-04-02', 22, 11);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (17.5, 10, 3, '2024-04-03', 23, 12);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (22.5, 8, 4, '2024-04-04', 24, 1);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (18.0, 20, 5, '2024-04-05', 25, 2);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (25.0, 12, 3, '2024-04-06', 26, 3);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (12.5, 15, 4, '2024-04-07', 27, 4);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (28.0, 10, 5, '2024-04-08', 1, 5);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (16.5, 8, 3, '2024-04-09', 2, 6);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (30.0, 20, 4, '2024-04-10', 3, 7);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (15.0, 12, 5, '2024-04-11', 4, 8);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (20.0, 15, 3, '2024-04-12', 5, 9);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (17.5, 10, 4, '2024-04-13', 6, 10);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (22.5, 8, 5, '2024-04-14', 7, 11);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (18.0, 20, 3, '2024-04-15', 8, 12);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (25.0, 12, 4, '2024-04-16', 9, 1);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (12.5, 15, 5, '2024-04-17', 10, 2);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (28.0, 10, 3, '2024-04-18', 11, 3);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (16.5, 8, 4, '2024-04-19', 12, 4);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (30.0, 20, 5, '2024-04-20', 13, 5);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (15.0, 12, 3, '2024-04-21', 14, 6);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (20.0, 15, 4, '2024-04-22', 15, 7);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (17.5, 10, 5, '2024-04-23', 16, 8);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (22.5, 8, 3, '2024-04-24', 17, 9);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (18.0, 20, 4, '2024-04-25', 18, 10);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (25.0, 12, 5, '2024-04-26', 19, 11);
INSERT INTO registros (peso, repeticiones, series, fecha, ejercicio_id, usuario_id) VALUES (12.5, 15, 3, '2024-04-27', 20, 12);


INSERT INTO materiales (foto, nombre, tipo, stock, descripcion) VALUES('mancuernas.jpg', 'Mancuernas', 'Peso Libre', false, 'Mancuernas para realización de diferentes ejercicios');
INSERT INTO materiales (foto, nombre, tipo, stock, descripcion) VALUES('discos.png', 'Discos', 'Peso Libre', false,'Discos para usar tanto en barras como en máquinas');
INSERT INTO materiales (foto, nombre, tipo, stock, descripcion) VALUES('barraz.jpg', 'Barra z', 'Peso Libre', true, 'Barra para añadir discos');
INSERT INTO materiales (foto, nombre, tipo, stock, descripcion) VALUES('banca-recta.jpg', 'Banca recta', 'Apoyo', false,'Banca para realizar diferentes ejercicios, no ajustable');
INSERT INTO materiales (foto, nombre, tipo, stock, descripcion) VALUES('prensa.jpg', 'Prensa', 'Máquina', true,'Máquina para realizar ejercicios de pierna a la cual se le añaden discos');
INSERT INTO materiales (foto, nombre, tipo, stock, descripcion) VALUES('maquina-curl-biceps.jpg', 'Máquina curl biceps', 'Máquina', false,'Máquina para curl de biceps en la cual puedes ajustar los diferentes pesos');
INSERT INTO materiales (foto, nombre, tipo, stock, descripcion) VALUES('maquina-femoral.jpg', 'Máquina extensión femoral', 'Máquina', false,'Máquina para extensión de pierna en la cual puedes ajustar los diferentes pesos');
INSERT INTO materiales (foto, nombre, tipo, stock, descripcion) VALUES('esterilla.jpg', 'Esterilla', 'Apoyo', true,'Esterilla básica para realización de estiramientos y ejercicios');
INSERT INTO materiales (foto, nombre, tipo, stock, descripcion) VALUES('banco-regulable.jpg', 'Banca ajustable', 'Apoyo', true,'Banca para realizar diferentes ejercicos, puedes ajustar la inclinación de esta mediante la palanca');
INSERT INTO materiales (foto, nombre, tipo, stock, descripcion) VALUES('polea.jpg', 'Polea', 'Peso libre', true,'Consiste en una rueda con una cuerda o cable enrollado a su alrededor . La polea proporciona una forma efectiva de trabajar una amplia gama de grupos musculares, incluyendo los brazos, hombros, espalda y pecho');
INSERT INTO materiales (foto, nombre, tipo, stock, descripcion) VALUES('anillas.jpg', 'Anillas', 'Apoyo', true,'Dispositivos en forma de anillo que se cuelgan y se utilizan en ejercicios de calistenia y gimnasia para realizar movimientos como fondos, dominadas, y otras variaciones');
INSERT INTO materiales (foto, nombre, tipo, stock, descripcion) VALUES('barra-recta.jpg', 'Barra recta', 'Apoyo', true,'Barra metálica larga y recta utilizada en ejercicios de levantamiento de pesas y entrenamiento de fuerza para sujetar discos de peso en ambos extremos');


INSERT INTO dias_rutinas (dia, nombre) VALUES ('Lunes', 'Pierna');
INSERT INTO dias_rutinas (dia, nombre) VALUES ('Martes', 'Empuje');
INSERT INTO dias_rutinas (dia, nombre) VALUES ('Miercoles', 'Tiron');
INSERT INTO dias_rutinas (dia, nombre) VALUES ('Jueves', 'Pierna');
INSERT INTO dias_rutinas (dia, nombre) VALUES ('Viernes', 'Tiron');
INSERT INTO dias_rutinas (dia, nombre) VALUES ('Sabado', 'Empuje');
INSERT INTO dias_rutinas (dia, nombre) VALUES ('Lunes', 'Hombro-Triceps');
INSERT INTO dias_rutinas (dia, nombre) VALUES ('Martes', 'Brazo');
INSERT INTO dias_rutinas (dia, nombre) VALUES ('Miercoles', 'Cuadriceps');
INSERT INTO dias_rutinas (dia, nombre) VALUES ('Jueves', 'Pecho');
INSERT INTO dias_rutinas (dia, nombre) VALUES ('Viernes', 'Fullbody');
INSERT INTO dias_rutinas (dia, nombre) VALUES ('Sabado', 'Pierna');
INSERT INTO dias_rutinas (dia, nombre) VALUES ('Lunes', 'Fullbody');
INSERT INTO dias_rutinas (dia, nombre) VALUES ('Martes', 'Fullbody');
INSERT INTO dias_rutinas (dia, nombre) VALUES ('Miercoles', 'Fullbody');
INSERT INTO dias_rutinas (dia, nombre) VALUES ('Jueves', 'Fullbody');


--Rutinas predeterminadas
INSERT INTO rutinas_pred (tipo, usuario_id, descripcion, nombre, recomendaciones) VALUES ('P', null, 'Esta rutina de entrenamiento centrada en la parte superior del cuerpo está diseñada para fortalecer y tonificar tus músculos de la espalda, pecho, hombros y brazos. Con un enfoque en ejercicios compuestos y aislados, esta rutina te ayudará a mejorar tu fuerza y definición muscular en la parte superior del cuerpo.', 'Rutina de Parte Superior del Cuerpo', 'Mantén la consistencia: Para obtener los mejores resultados, es importante seguir el programa de entrenamiento de forma consistente. Intenta no saltarte sesiones y sigue el plan de entrenamiento según lo programado. Escucha a tu cuerpo: Si sientes dolor intenso o fatiga extrema durante el entrenamiento, no dudes en reducir la intensidad o tomarte un día de descanso adicional. Escuchar a tu cuerpo es clave para prevenir lesiones y maximizar la recuperación. Ajusta el peso adecuado: Utiliza pesos que te desafíen pero que te permitan mantener una buena técnica. Es importante no comprometer la forma por levantar demasiado peso. Si es necesario, ajusta el peso durante el entrenamiento para mantener la forma adecuada.');
INSERT INTO rutinas_pred (tipo, usuario_id, descripcion, nombre, recomendaciones) VALUES ('P', null, 'Esta rutina de entrenamiento enfocada en la parte inferior del cuerpo se centra en fortalecer y tonificar tus piernas, glúteos y músculos de la pantorrilla. Incorpora una variedad de ejercicios de peso corporal y con pesas para mejorar tu fuerza y resistencia en la parte inferior del cuerpo.', 'Rutina de Parte Inferior del Cuerpo', 'Mantén la consistencia: Para obtener los mejores resultados, es importante seguir el programa de entrenamiento de forma consistente. Intenta no saltarte sesiones y sigue el plan de entrenamiento según lo programado. Escucha a tu cuerpo: Si sientes dolor intenso o fatiga extrema durante el entrenamiento, no dudes en reducir la intensidad o tomarte un día de descanso adicional. Escuchar a tu cuerpo es clave para prevenir lesiones y maximizar la recuperación. Ajusta el peso adecuado: Utiliza pesos que te desafíen pero que te permitan mantener una buena técnica. Es importante no comprometer la forma por levantar demasiado peso. Si es necesario, ajusta el peso durante el entrenamiento para mantener la forma adecuada.');
INSERT INTO rutinas_pred (tipo, usuario_id, descripcion, nombre, recomendaciones) VALUES ('P', null, 'Esta rutina de entrenamiento de cuerpo completo está diseñada para trabajar todos los grupos musculares principales en una sola sesión de entrenamiento. Incorpora una combinación de ejercicios compuestos y aislados para maximizar tu desarrollo muscular y fuerza en todo el cuerpo.', 'Rutina de Cuerpo Completo', 'Mantén la consistencia: Para obtener los mejores resultados, es importante seguir el programa de entrenamiento de forma consistente. Intenta no saltarte sesiones y sigue el plan de entrenamiento según lo programado. Escucha a tu cuerpo: Si sientes dolor intenso o fatiga extrema durante el entrenamiento, no dudes en reducir la intensidad o tomarte un día de descanso adicional. Escuchar a tu cuerpo es clave para prevenir lesiones y maximizar la recuperación. Ajusta el peso adecuado: Utiliza pesos que te desafíen pero que te permitan mantener una buena técnica. Es importante no comprometer la forma por levantar demasiado peso. Si es necesario, ajusta el peso durante el entrenamiento para mantener la forma adecuada.');
INSERT INTO rutinas_pred (tipo, usuario_id, descripcion, nombre, recomendaciones) VALUES ('P', null, 'Esta rutina de entrenamiento de alta intensidad se centra en maximizar tu rendimiento cardiovascular y mejorar tu resistencia muscular. Incorpora una combinación de ejercicios de cardio y entrenamiento de fuerza para quemar calorías y mejorar tu condición física general.', 'Rutina de Alta Intensidad', 'Mantén la consistencia: Para obtener los mejores resultados, es importante seguir el programa de entrenamiento de forma consistente. Intenta no saltarte sesiones y sigue el plan de entrenamiento según lo programado. Escucha a tu cuerpo: Si sientes dolor intenso o fatiga extrema durante el entrenamiento, no dudes en reducir la intensidad o tomarte un día de descanso adicional. Escuchar a tu cuerpo es clave para prevenir lesiones y maximizar la recuperación. Ajusta el peso adecuado: Utiliza pesos que te desafíen pero que te permitan mantener una buena técnica. Es importante no comprometer la forma por levantar demasiado peso. Si es necesario, ajusta el peso durante el entrenamiento para mantener la forma adecuada.');
INSERT INTO rutinas_pred (tipo, usuario_id, descripcion, nombre, recomendaciones) VALUES ('P', null, 'Esta rutina de entrenamiento de flexibilidad y movilidad se centra en mejorar tu rango de movimiento y reducir el riesgo de lesiones. Incorpora una variedad de ejercicios de estiramiento y movilidad para mejorar la flexibilidad y mantener las articulaciones sanas.', 'Rutina de Flexibilidad y Movilidad', 'Mantén la consistencia: Para obtener los mejores resultados, es importante seguir el programa de entrenamiento de forma consistente. Intenta no saltarte sesiones y sigue el plan de entrenamiento según lo programado. Escucha a tu cuerpo: Si sientes dolor intenso o fatiga extrema durante el entrenamiento, no dudes en reducir la intensidad o tomarte un día de descanso adicional. Escuchar a tu cuerpo es clave para prevenir lesiones y maximizar la recuperación. Ajusta el peso adecuado: Utiliza pesos que te desafíen pero que te permitan mantener una buena técnica. Es importante no comprometer la forma por levantar demasiado peso. Si es necesario, ajusta el peso durante el entrenamiento para mantener la forma adecuada.');

--Rutinas personalizadas
INSERT INTO rutinas_pred (tipo, usuario_id, descripcion, nombre, recomendaciones) VALUES ('U', '1', 'Esta rutina de fullbody, personalizada para ti, está diseñada para maximizar tu progreso en el gimnasio. Se centra en trabajar todos los grupos musculares en cada sesión de entrenamiento, asegurando un enfoque completo en tu desarrollo físico. Cada día de esta rutina está cuidadosamente estructurado para proporcionarte un equilibrio entre intensidad y recuperación, permitiéndote alcanzar tus metas de fuerza y definición muscular de manera efectiva. ¡Prepárate para desafiarte a ti mismo y ver resultados impresionantes con cada sesión de entrenamiento!','Rutina Fullbody', 'Mantén la consistencia: Para obtener los mejores resultados, es importante seguir el programa de entrenamiento de forma consistente. Intenta no saltarte sesiones y sigue el plan de entrenamiento según lo programado. Escucha a tu cuerpo: Si sientes dolor intenso o fatiga extrema durante el entrenamiento, no dudes en reducir la intensidad o tomarte un día de descanso adicional. Escuchar a tu cuerpo es clave para prevenir lesiones y maximizar la recuperación. Ajusta el peso adecuado: Utiliza pesos que te desafíen pero que te permitan mantener una buena técnica. Es importante no comprometer la forma por levantar demasiado peso. Si es necesario, ajusta el peso durante el entrenamiento para mantener la forma adecuada.');
INSERT INTO rutinas_pred (tipo, usuario_id, descripcion, nombre, recomendaciones) VALUES ('U', '2', 'Esta rutina de tiron pierna y empuje, personalizada para ti, está diseñada para optimizar tu desarrollo muscular y fuerza en los grupos musculares principales. Se divide en tres días de entrenamiento: tirón, pierna y empuje. Cada día se enfoca en un conjunto específico de músculos, permitiendo una atención intensiva y una recuperación adecuada. Con esta rutina, podrás trabajar de manera efectiva todos los grupos musculares importantes, mejorando tu fuerza, resistencia y composición corporal.', 'Rutina Tiron Pierna Empuje', 'Mantén la consistencia: Para obtener los mejores resultados, es importante seguir el programa de entrenamiento de forma consistente. Intenta no saltarte sesiones y sigue el plan de entrenamiento según lo programado. Escucha a tu cuerpo: Si sientes dolor intenso o fatiga extrema durante el entrenamiento, no dudes en reducir la intensidad o tomarte un día de descanso adicional. Escuchar a tu cuerpo es clave para prevenir lesiones y maximizar la recuperación. Ajusta el peso adecuado: Utiliza pesos que te desafíen pero que te permitan mantener una buena técnica. Es importante no comprometer la forma por levantar demasiado peso. Si es necesario, ajusta el peso durante el entrenamiento para mantener la forma adecuada.');
INSERT INTO rutinas_pred (tipo, usuario_id, descripcion, nombre, recomendaciones) VALUES ('U', '3', 'Esta rutina de fullbody, personalizada para ti, está diseñada para maximizar tu progreso en el gimnasio. Se centra en trabajar todos los grupos musculares en cada sesión de entrenamiento, asegurando un enfoque completo en tu desarrollo físico. Cada día de esta rutina está cuidadosamente estructurado para proporcionarte un equilibrio entre intensidad y recuperación, permitiéndote alcanzar tus metas de fuerza y definición muscular de manera efectiva. ¡Prepárate para desafiarte a ti mismo y ver resultados impresionantes con cada sesión de entrenamiento!','Rutina Fullbody', 'Mantén la consistencia: Para obtener los mejores resultados, es importante seguir el programa de entrenamiento de forma consistente. Intenta no saltarte sesiones y sigue el plan de entrenamiento según lo programado. Escucha a tu cuerpo: Si sientes dolor intenso o fatiga extrema durante el entrenamiento, no dudes en reducir la intensidad o tomarte un día de descanso adicional. Escuchar a tu cuerpo es clave para prevenir lesiones y maximizar la recuperación. Ajusta el peso adecuado: Utiliza pesos que te desafíen pero que te permitan mantener una buena técnica. Es importante no comprometer la forma por levantar demasiado peso. Si es necesario, ajusta el peso durante el entrenamiento para mantener la forma adecuada.');
INSERT INTO rutinas_pred (tipo, usuario_id, descripcion, nombre, recomendaciones) VALUES ('U', '4', 'Esta rutina de tiron pierna y empuje, personalizada para ti, está diseñada para optimizar tu desarrollo muscular y fuerza en los grupos musculares principales. Se divide en tres días de entrenamiento: tirón, pierna y empuje. Cada día se enfoca en un conjunto específico de músculos, permitiendo una atención intensiva y una recuperación adecuada. Con esta rutina, podrás trabajar de manera efectiva todos los grupos musculares importantes, mejorando tu fuerza, resistencia y composición corporal.', 'Rutina Tiron Pierna Empuje', 'Mantén la consistencia: Para obtener los mejores resultados, es importante seguir el programa de entrenamiento de forma consistente. Intenta no saltarte sesiones y sigue el plan de entrenamiento según lo programado. Escucha a tu cuerpo: Si sientes dolor intenso o fatiga extrema durante el entrenamiento, no dudes en reducir la intensidad o tomarte un día de descanso adicional. Escuchar a tu cuerpo es clave para prevenir lesiones y maximizar la recuperación. Ajusta el peso adecuado: Utiliza pesos que te desafíen pero que te permitan mantener una buena técnica. Es importante no comprometer la forma por levantar demasiado peso. Si es necesario, ajusta el peso durante el entrenamiento para mantener la forma adecuada.');
INSERT INTO rutinas_pred (tipo, usuario_id, descripcion, nombre, recomendaciones) VALUES ('U', '5', 'Esta rutina de fullbody, personalizada para ti, está diseñada para maximizar tu progreso en el gimnasio. Se centra en trabajar todos los grupos musculares en cada sesión de entrenamiento, asegurando un enfoque completo en tu desarrollo físico. Cada día de esta rutina está cuidadosamente estructurado para proporcionarte un equilibrio entre intensidad y recuperación, permitiéndote alcanzar tus metas de fuerza y definición muscular de manera efectiva. ¡Prepárate para desafiarte a ti mismo y ver resultados impresionantes con cada sesión de entrenamiento!','Rutina Fullbody', 'Mantén la consistencia: Para obtener los mejores resultados, es importante seguir el programa de entrenamiento de forma consistente. Intenta no saltarte sesiones y sigue el plan de entrenamiento según lo programado. Escucha a tu cuerpo: Si sientes dolor intenso o fatiga extrema durante el entrenamiento, no dudes en reducir la intensidad o tomarte un día de descanso adicional. Escuchar a tu cuerpo es clave para prevenir lesiones y maximizar la recuperación. Ajusta el peso adecuado: Utiliza pesos que te desafíen pero que te permitan mantener una buena técnica. Es importante no comprometer la forma por levantar demasiado peso. Si es necesario, ajusta el peso durante el entrenamiento para mantener la forma adecuada.');
INSERT INTO rutinas_pred (tipo, usuario_id, descripcion, nombre, recomendaciones) VALUES ('U', '6', 'Esta rutina de tiron pierna y empuje, personalizada para ti, está diseñada para optimizar tu desarrollo muscular y fuerza en los grupos musculares principales. Se divide en tres días de entrenamiento: tirón, pierna y empuje. Cada día se enfoca en un conjunto específico de músculos, permitiendo una atención intensiva y una recuperación adecuada. Con esta rutina, podrás trabajar de manera efectiva todos los grupos musculares importantes, mejorando tu fuerza, resistencia y composición corporal.', 'Rutina Tiron Pierna Empuje', 'Mantén la consistencia: Para obtener los mejores resultados, es importante seguir el programa de entrenamiento de forma consistente. Intenta no saltarte sesiones y sigue el plan de entrenamiento según lo programado. Escucha a tu cuerpo: Si sientes dolor intenso o fatiga extrema durante el entrenamiento, no dudes en reducir la intensidad o tomarte un día de descanso adicional. Escuchar a tu cuerpo es clave para prevenir lesiones y maximizar la recuperación. Ajusta el peso adecuado: Utiliza pesos que te desafíen pero que te permitan mantener una buena técnica. Es importante no comprometer la forma por levantar demasiado peso. Si es necesario, ajusta el peso durante el entrenamiento para mantener la forma adecuada.');
INSERT INTO rutinas_pred (tipo, usuario_id, descripcion, nombre, recomendaciones) VALUES ('U', '7', 'Esta rutina de fullbody, personalizada para ti, está diseñada para maximizar tu progreso en el gimnasio. Se centra en trabajar todos los grupos musculares en cada sesión de entrenamiento, asegurando un enfoque completo en tu desarrollo físico. Cada día de esta rutina está cuidadosamente estructurado para proporcionarte un equilibrio entre intensidad y recuperación, permitiéndote alcanzar tus metas de fuerza y definición muscular de manera efectiva. ¡Prepárate para desafiarte a ti mismo y ver resultados impresionantes con cada sesión de entrenamiento!','Rutina Fullbody', 'Mantén la consistencia: Para obtener los mejores resultados, es importante seguir el programa de entrenamiento de forma consistente. Intenta no saltarte sesiones y sigue el plan de entrenamiento según lo programado. Escucha a tu cuerpo: Si sientes dolor intenso o fatiga extrema durante el entrenamiento, no dudes en reducir la intensidad o tomarte un día de descanso adicional. Escuchar a tu cuerpo es clave para prevenir lesiones y maximizar la recuperación. Ajusta el peso adecuado: Utiliza pesos que te desafíen pero que te permitan mantener una buena técnica. Es importante no comprometer la forma por levantar demasiado peso. Si es necesario, ajusta el peso durante el entrenamiento para mantener la forma adecuada.');
INSERT INTO rutinas_pred (tipo, usuario_id, descripcion, nombre, recomendaciones) VALUES ('U', '8', 'Esta rutina de tiron pierna y empuje, personalizada para ti, está diseñada para optimizar tu desarrollo muscular y fuerza en los grupos musculares principales. Se divide en tres días de entrenamiento: tirón, pierna y empuje. Cada día se enfoca en un conjunto específico de músculos, permitiendo una atención intensiva y una recuperación adecuada. Con esta rutina, podrás trabajar de manera efectiva todos los grupos musculares importantes, mejorando tu fuerza, resistencia y composición corporal.', 'Rutina Tiron Pierna Empuje', 'Mantén la consistencia: Para obtener los mejores resultados, es importante seguir el programa de entrenamiento de forma consistente. Intenta no saltarte sesiones y sigue el plan de entrenamiento según lo programado. Escucha a tu cuerpo: Si sientes dolor intenso o fatiga extrema durante el entrenamiento, no dudes en reducir la intensidad o tomarte un día de descanso adicional. Escuchar a tu cuerpo es clave para prevenir lesiones y maximizar la recuperación. Ajusta el peso adecuado: Utiliza pesos que te desafíen pero que te permitan mantener una buena técnica. Es importante no comprometer la forma por levantar demasiado peso. Si es necesario, ajusta el peso durante el entrenamiento para mantener la forma adecuada.');
INSERT INTO rutinas_pred (tipo, usuario_id, descripcion, nombre, recomendaciones) VALUES ('U', '9', 'Esta rutina de fullbody, personalizada para ti, está diseñada para maximizar tu progreso en el gimnasio. Se centra en trabajar todos los grupos musculares en cada sesión de entrenamiento, asegurando un enfoque completo en tu desarrollo físico. Cada día de esta rutina está cuidadosamente estructurado para proporcionarte un equilibrio entre intensidad y recuperación, permitiéndote alcanzar tus metas de fuerza y definición muscular de manera efectiva. ¡Prepárate para desafiarte a ti mismo y ver resultados impresionantes con cada sesión de entrenamiento!','Rutina Fullbody', 'Mantén la consistencia: Para obtener los mejores resultados, es importante seguir el programa de entrenamiento de forma consistente. Intenta no saltarte sesiones y sigue el plan de entrenamiento según lo programado. Escucha a tu cuerpo: Si sientes dolor intenso o fatiga extrema durante el entrenamiento, no dudes en reducir la intensidad o tomarte un día de descanso adicional. Escuchar a tu cuerpo es clave para prevenir lesiones y maximizar la recuperación. Ajusta el peso adecuado: Utiliza pesos que te desafíen pero que te permitan mantener una buena técnica. Es importante no comprometer la forma por levantar demasiado peso. Si es necesario, ajusta el peso durante el entrenamiento para mantener la forma adecuada.');
INSERT INTO rutinas_pred (tipo, usuario_id, descripcion, nombre, recomendaciones) VALUES ('U', '10', 'Esta rutina de tiron pierna y empuje, personalizada para ti, está diseñada para optimizar tu desarrollo muscular y fuerza en los grupos musculares principales. Se divide en tres días de entrenamiento: tirón, pierna y empuje. Cada día se enfoca en un conjunto específico de músculos, permitiendo una atención intensiva y una recuperación adecuada. Con esta rutina, podrás trabajar de manera efectiva todos los grupos musculares importantes, mejorando tu fuerza, resistencia y composición corporal.', 'Rutina Tiron Pierna Empuje', 'Mantén la consistencia: Para obtener los mejores resultados, es importante seguir el programa de entrenamiento de forma consistente. Intenta no saltarte sesiones y sigue el plan de entrenamiento según lo programado. Escucha a tu cuerpo: Si sientes dolor intenso o fatiga extrema durante el entrenamiento, no dudes en reducir la intensidad o tomarte un día de descanso adicional. Escuchar a tu cuerpo es clave para prevenir lesiones y maximizar la recuperación. Ajusta el peso adecuado: Utiliza pesos que te desafíen pero que te permitan mantener una buena técnica. Es importante no comprometer la forma por levantar demasiado peso. Si es necesario, ajusta el peso durante el entrenamiento para mantener la forma adecuada.');



--#############################Datos de relación################################################################################
INSERT INTO users_roles (role_id, user_id) VALUES (1, 13);
INSERT INTO users_roles (role_id, user_id) VALUES (2, 13);
INSERT INTO users_roles (role_id, user_id) VALUES (3, 13);
INSERT INTO users_roles (role_id, user_id) VALUES (2, 1);
INSERT INTO users_roles (role_id, user_id) VALUES (2, 2);
INSERT INTO users_roles (role_id, user_id) VALUES (2, 3);
INSERT INTO users_roles (role_id, user_id) VALUES (2, 4);
INSERT INTO users_roles (role_id, user_id) VALUES (2, 5);
INSERT INTO users_roles (role_id, user_id) VALUES (2, 6);
INSERT INTO users_roles (role_id, user_id) VALUES (2, 7);
INSERT INTO users_roles (role_id, user_id) VALUES (2, 8);
INSERT INTO users_roles (role_id, user_id) VALUES (2, 9);
INSERT INTO users_roles (role_id, user_id) VALUES (2, 10);
INSERT INTO users_roles (role_id, user_id) VALUES (2, 11);
INSERT INTO users_roles (role_id, user_id) VALUES (2, 12);
INSERT INTO users_roles (role_id, user_id) VALUES (2, 14);
INSERT INTO users_roles (role_id, user_id) VALUES (3, 14);

INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (1, 2);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (2, 3);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (3, 4);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (4, 5);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (5, 6);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (6, 7);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (7, 8);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (8, 9);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (1, 10);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (2, 11);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (3, 12);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (4, 1);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (5, 2);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (6, 3);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (7, 4);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (8, 5);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (1, 6);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (2, 7);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (3, 8);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (4, 9);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (5, 10);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (6, 11);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (7, 12);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (8, 1);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (1, 3);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (2, 4);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (3, 5);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (4, 6);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (5, 7);
INSERT INTO actividadesusuarios (actividades_fk, usuarios_fk) VALUES (6, 8);

-- Relaciones para el ejercicio "Press Banca"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (1, 2); -- Necesita Discos
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (1, 4); -- Necesita Banca recta
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (1, 12); -- Necesita Barra recta
-- Relaciones para el ejercicio "Sentadillas"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (2, 1); -- Necesita Mancuernas
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (2, 2); -- Necesita Discos
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (2, 12); -- Necesita Barra recta
-- Relaciones para el ejercicio "Dominadas"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (3, 1); -- Necesita Mancuernas
-- Relaciones para el ejercicio "Peso Muerto"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (4, 1); -- Necesita Mancuernas
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (4, 2); -- Necesita Discos
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (4, 12); -- Necesita Barra recta
-- Relaciones para el ejercicio "Flexiones de Brazos"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (5, 8); -- Necesita Esterilla
-- Relaciones para el ejercicio "Zancadas"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (6, 1); -- Necesita Mancuernas
-- Relaciones para el ejercicio "Fondos en Paralelas"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (7, 9); -- Necesita Banca ajustable
-- Relaciones para el ejercicio "Remo con Barra"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (8, 2); -- Necesita Discos
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (8, 12); -- Necesita Barra recta
-- Relaciones para el ejercicio "Press de Hombros con Mancuernas"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (9, 1); -- Necesita Mancuernas
-- Relaciones para el ejercicio "Elevaciones de Gemelos en Máquina"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (10, 3); -- Necesita Barra z
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (10, 5); -- Necesita Prensa
-- Relaciones para el ejercicio "Curl de Bíceps con Barra"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (11, 3); -- Necesita Barra z
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (11, 5); -- Necesita Prensa
-- Relaciones para el ejercicio "Flexiones con Manos Elevadas"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (12, 8); -- Necesita Esterilla
-- Relaciones para el ejercicio "Deadlift Rumano"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (13, 1); -- Necesita Mancuernas
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (13, 2); -- Necesita Discos
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (13, 12); -- Necesita Barra recta
-- Relaciones para el ejercicio "Press de Banca Inclinado"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (14, 2); -- Necesita Discos
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (14, 4); -- Necesita Banca recta
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (14, 12); -- Necesita Barra recta
-- Relaciones para el ejercicio "Hip Thrust"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (15, 4); -- Necesita Banca recta
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (15, 1); -- Necesita Mancuernas
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (15, 12); -- Necesita Barra recta
-- Relaciones para el ejercicio "Pull-ups"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (16, 7); -- Necesita Máquina curl biceps
-- Relaciones para el ejercicio "Press Militar"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (17, 3); -- Necesita Barra z
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (17, 5); -- Necesita Prensa
-- Relaciones para el ejercicio "Elevaciones Laterales con Mancuernas"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (18, 1); -- Necesita Mancuernas
-- Relaciones para el ejercicio "Estocadas con Mancuernas"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (19, 1); -- Necesita Mancuernas
-- Relaciones para el ejercicio "Fondos en Anillas"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (20, 11); -- Necesita anillas
-- Relaciones para el ejercicio "Sentadillas Sumo"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (21, 1); -- Necesita Mancuernas
-- Relaciones para el ejercicio "Flexiones de Brazos con una Sola Mano"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (22, 8); -- Necesita Esterilla
-- Relaciones para el ejercicio "Abdominales con Piernas Elevadas"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (23, 8); -- Necesita Esterilla
-- Relaciones para el ejercicio "Extensiones de Tríceps con Polea Alta"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (24, 10); -- Necesita polea
-- Relaciones para el ejercicio "Flexiones de Brazos Diamante"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (25, 8); -- Necesita Esterilla
-- Relaciones para el ejercicio "Plancha"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (26, 8); -- Necesita Esterilla
-- Relaciones para el ejercicio "Burpees"
INSERT INTO ejerciciosmateriales (ejercicios_fk, materiales_fk) VALUES (27, 8); -- Necesita Esterilla

-- Lunes: Pierna
INSERT INTO dias_rutinas_ejercicios (dia_rutina_id, ejercicios_id) VALUES (1, 2), (1, 13), (1, 21);
-- Martes: Empuje
INSERT INTO dias_rutinas_ejercicios (dia_rutina_id, ejercicios_id) VALUES (2, 1), (2, 5), (2, 20), (2, 9), (2, 24);
-- Miércoles: Tiron
INSERT INTO dias_rutinas_ejercicios (dia_rutina_id, ejercicios_id) VALUES (3, 3), (3, 18), (3, 11), (3, 23), (3, 8);
-- Jueves: Pierna
INSERT INTO dias_rutinas_ejercicios (dia_rutina_id, ejercicios_id) VALUES (4, 2), (4, 13), (4, 21);
-- Viernes: Tiron
INSERT INTO dias_rutinas_ejercicios (dia_rutina_id, ejercicios_id) VALUES (5, 3), (5, 18), (5, 11), (5, 23), (5, 8);
-- Sábado: Empuje
INSERT INTO dias_rutinas_ejercicios (dia_rutina_id, ejercicios_id) VALUES (6, 1), (6, 5), (6, 20), (6, 9), (6, 24);
-- Lunes: Hombro-Tríceps
INSERT INTO dias_rutinas_ejercicios (dia_rutina_id, ejercicios_id) VALUES (7, 17), (7, 9), (7, 7), (7, 24);
-- Martes: Brazo
INSERT INTO dias_rutinas_ejercicios (dia_rutina_id, ejercicios_id) VALUES (8, 11), (8, 14), (8, 16), (8, 24);
-- Miércoles: Cuadriceps
INSERT INTO dias_rutinas_ejercicios (dia_rutina_id, ejercicios_id) VALUES (9, 2), (9, 12), (9, 20);
-- Jueves: Pecho
INSERT INTO dias_rutinas_ejercicios (dia_rutina_id, ejercicios_id) VALUES (10, 1), (10, 5), (10, 19), (10, 8), (10, 23);
-- Lunes: Fullbody (id de días de rutina: 11)
INSERT INTO dias_rutinas_ejercicios (dia_rutina_id, ejercicios_id) VALUES (11, 2), (11, 3),  (11, 9), (11, 13),(11, 17), (11, 18), (11, 19), (11, 20);
-- Martes: Fullbody (id de días de rutina: 12)
INSERT INTO dias_rutinas_ejercicios (dia_rutina_id, ejercicios_id) VALUES (12, 1),  (12, 3), (12, 8), (12, 11), (12, 13),  (12, 17),  (12, 19), (12, 21);
-- Miércoles: Fullbody (id de días de rutina: 13)
INSERT INTO dias_rutinas_ejercicios (dia_rutina_id, ejercicios_id) VALUES (13, 16), (13, 17), (13, 18), (13, 19), (13, 20), (13, 21), (13, 23), (13, 24);
-- Jueves: Fullbody (id de días de rutina: 14)
INSERT INTO dias_rutinas_ejercicios (dia_rutina_id, ejercicios_id) VALUES (14, 1),  (14, 3), (14, 5), (14, 8), (14, 9), (14, 11), (14, 12);
-- Viernes: Fullbody (id de días de rutina: 15)
INSERT INTO dias_rutinas_ejercicios (dia_rutina_id, ejercicios_id) VALUES (15, 2), (15, 11), (15, 12), (15, 13), (15, 16), (15, 23), (15, 24);
-- Sábado: Pierna (id de días de rutina: 16)
INSERT INTO dias_rutinas_ejercicios (dia_rutina_id, ejercicios_id) VALUES (16, 2), (16, 12), (16, 21);

-- Rutina de Parte Superior del Cuerpo
INSERT INTO rutinas_pred_dias_rutina (rutina_pred_id, dias_rutina_id) VALUES (1, 7), (1, 2), (1, 3);
-- Rutina de Parte Inferior del Cuerpo
INSERT INTO rutinas_pred_dias_rutina (rutina_pred_id, dias_rutina_id) VALUES (2, 1), (2, 9), (2, 4);
-- Rutina de Cuerpo Completo
INSERT INTO rutinas_pred_dias_rutina (rutina_pred_id, dias_rutina_id) VALUES (3, 1), (3, 2), (3, 3);
-- Rutina de Alta Intensidad
INSERT INTO rutinas_pred_dias_rutina (rutina_pred_id, dias_rutina_id) VALUES (4, 4), (4, 5), (4, 6);
-- Rutina de Flexibilidad y Movilidad
INSERT INTO rutinas_pred_dias_rutina (rutina_pred_id, dias_rutina_id) VALUES (5, 1), (5, 2), (5, 3);

-- Rutinas personalizadas
-- Rutina Fullbody (Usuario 1)
INSERT INTO rutinas_pred_dias_rutina (rutina_pred_id, dias_rutina_id) VALUES (6, 1), (6, 2), (6, 3);
-- Rutina Tiron Pierna Empuje (Usuario 2)
INSERT INTO rutinas_pred_dias_rutina (rutina_pred_id, dias_rutina_id) VALUES (7, 4), (7, 5), (7, 6);
-- Rutina Fullbody (Usuario 3)
INSERT INTO rutinas_pred_dias_rutina (rutina_pred_id, dias_rutina_id) VALUES (8, 13), (8, 14), (8, 15), (8, 16);
-- Rutina Tiron Pierna Empuje (Usuario 4)
INSERT INTO rutinas_pred_dias_rutina (rutina_pred_id, dias_rutina_id) VALUES (9, 4), (9, 5), (9, 6);
-- Rutina Fullbody (Usuario 5)
INSERT INTO rutinas_pred_dias_rutina (rutina_pred_id, dias_rutina_id) VALUES (10, 13), (10, 14), (10, 15), (10, 16);
-- Rutina Tiron Pierna Empuje (Usuario 6)
INSERT INTO rutinas_pred_dias_rutina (rutina_pred_id, dias_rutina_id) VALUES (11, 4), (11, 5), (11, 6);
-- Rutina Fullbody (Usuario 7)
INSERT INTO rutinas_pred_dias_rutina (rutina_pred_id, dias_rutina_id) VALUES (12, 13), (12, 14), (12, 15), (12, 16);
-- Rutina Tiron Pierna Empuje (Usuario 8)
INSERT INTO rutinas_pred_dias_rutina (rutina_pred_id, dias_rutina_id) VALUES (13, 4), (13, 5), (13, 6);
-- Rutina Fullbody (Usuario 9)
INSERT INTO rutinas_pred_dias_rutina (rutina_pred_id, dias_rutina_id) VALUES (14, 13), (14, 14), (14, 15), (14, 16);
-- Rutina Tiron Pierna Empuje (Usuario 10)
INSERT INTO rutinas_pred_dias_rutina (rutina_pred_id, dias_rutina_id) VALUES (15, 4), (15, 5), (15, 6);


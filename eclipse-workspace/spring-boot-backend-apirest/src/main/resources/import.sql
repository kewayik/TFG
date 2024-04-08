INSERT INTO clientes (nombre, apellido, email, create_at) VALUES('Carlos', 'Velasco', 'carlosv@gmail.com', '2022-10-12');
INSERT INTO clientes (nombre, apellido, email, create_at) VALUES('Jose Miguel', 'Martinez', 'jmiguel@gmail.com', '2022-05-12');
INSERT INTO clientes (nombre, apellido, email, create_at) VALUES('Juan', 'Cubo', 'cubojuan@gmail.com', '2022-09-11');
INSERT INTO clientes (nombre, apellido, email, create_at) VALUES('Silvia', 'Carrasco', 'silviaacm3@gmail.com', '2022-07-09');
INSERT INTO clientes (nombre, apellido, email, create_at) VALUES('Alvaro', 'Muñoz', 'muño@gmail.com', '2022-01-20');
INSERT INTO clientes (nombre, apellido, email, create_at) VALUES('Alvaro', 'Olmo', 'aolmo@gmail.com', '2022-06-30');
INSERT INTO clientes (nombre, apellido, email, create_at) VALUES('Vicente', 'Navarro', 'vnavarro@gmail.com', '2022-02-02');
INSERT INTO clientes (nombre, apellido, email, create_at) VALUES('Antonio', 'Bujalance', 'abuja@gmail.com', '2022-10-15');
INSERT INTO clientes (nombre, apellido, email, create_at) VALUES('Maria de la O', 'Castilla', 'mdelao@gmail.com', '2022-06-06');
INSERT INTO clientes (nombre, apellido, email, create_at) VALUES('Adolfo', 'Gonzalez', 'adolgon@gmail.com', '2022-07-25');
INSERT INTO clientes (nombre, apellido, email, create_at) VALUES('Pedro', 'Ximenez', 'pedrox@gmail.com', '2022-12-03');
INSERT INTO clientes (nombre, apellido, email, create_at) VALUES('Daniel', 'Gonzalez', 'dgon@gmail.com', '2022-10-01');

INSERT INTO materiales (nombre, tipo, stock, descripcion) VALUES('Mancuernas', 'Peso Libre', false, 'Mancuernas para realización de diferentes ejercicios');
INSERT INTO materiales (nombre, tipo, stock, descripcion) VALUES('Discos', 'Peso Libre', false,'Discos para usar tanto en barras como en máquinas');
INSERT INTO materiales (nombre, tipo, stock, descripcion) VALUES('Barra z', 'Peso Libre', true, 'Barra para añadir discos');
INSERT INTO materiales (nombre, tipo, stock, descripcion) VALUES('Banca recta', 'Apoyo', false,'Banca para realizar diferentes ejercicios, no ajustable');
INSERT INTO materiales (nombre, tipo, stock, descripcion) VALUES('Prensa', 'Máquina', true,'Máquina para realizar ejercicios de pierna a la cual se le añaden discos');
INSERT INTO materiales (nombre, tipo, stock, descripcion) VALUES('Máquina curl biceps', 'Máquina', false,'Máquina para curl de biceps en la cual puedes ajustar los diferentes pesos');
INSERT INTO materiales (nombre, tipo, stock, descripcion) VALUES('Máquina extensión femoral', 'Máquina', false,'Máquina para extensión de pierna en la cual puedes ajustar los diferentes pesos');
INSERT INTO materiales (nombre, tipo, stock, descripcion) VALUES('Esterilla', 'Apoyo', true,'Esterilla básica para realización de estiramientos y ejercicios');
INSERT INTO materiales (nombre, tipo, stock, descripcion) VALUES('Banca ajustable', 'Apoyo', true,'Banca para realizar diferentes ejercicos, puedes ajustar la inclinación de esta mediante la palanca');

INSERT INTO actividades (nombre, descripcion, sala, aforo, fecha, horario) VALUES ('Body Pump', 'programa de entrenamiento físico intenso que combina actividad aeróbica y trabajo muscular mediante el levantamiento de pesas al ritmo de la música', 'Sala 15', 32, '2022-10-12', '12:00-13:00');
INSERT INTO actividades (nombre, descripcion, sala, aforo, fecha, horario) VALUES ('Zumba', 'clase de fitness que combina baile y ejercicios aeróbicos al ritmo de música latina', 'Sala 12', 25, '2022-10-13', '09:00-10:00');
INSERT INTO actividades (nombre, descripcion, sala, aforo, fecha, horario) VALUES ('Zumba', 'clase de fitness que combina baile y ejercicios aeróbicos al ritmo de música latina', 'Sala 12', 25, '2022-10-13', '18:00-19:00');
INSERT INTO actividades (nombre, descripcion, sala, aforo, fecha, horario) VALUES ('Yoga', 'práctica física, mental y espiritual originaria de la India que busca el equilibrio y la armonía del cuerpo y la mente', 'Sala 8', 20, '2022-10-14', '10:00-11:00');
INSERT INTO actividades (nombre, descripcion, sala, aforo, fecha, horario) VALUES ('Spinning', 'clase de ciclismo indoor en la que se realizan ejercicios de intensidad variable al ritmo de la música', 'Sala 3', 30, '2022-10-15', '19:00-20:00');
INSERT INTO actividades (nombre, descripcion, sala, aforo, fecha, horario) VALUES ('Pilates', 'sistema de entrenamiento físico y mental que se basa en la respiración, el control muscular y la alineación corporal', 'Sala 10', 15, '2022-10-16', '09:00-10:00');
INSERT INTO actividades (nombre, descripcion, sala, aforo, fecha, horario) VALUES ('Kickboxing', 'combinación de artes marciales y boxeo que se practica mediante golpes de puño y pierna', 'Sala 5', 20, '2022-10-17', '20:00-21:00');
INSERT INTO actividades (nombre, descripcion, sala, aforo, fecha, horario) VALUES ('CrossFit', 'entrenamiento funcional de alta intensidad que combina ejercicios de fuerza, resistencia y cardio', 'Sala 1', 25, '2022-10-18', '17:00-18:00');


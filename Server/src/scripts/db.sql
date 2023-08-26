CREATE DATABASE crimeQuito;

USE crimeQuito;

CREATE TABLE reports(
    id INT AUTO_INCREMENT PRIMARY KEY,
    parroquia VARCHAR(255),
    distrito VARCHAR(255),
    circuito VARCHAR(255),
    fecha VARCHAR(255),
    categoria VARCHAR(255),
    latitud VARCHAR(255),
    longitud VARCHAR(255),
    incidencias INT
);


INSERT INTO reports(parroquia,distrito,circuito,fecha,categoria,latitud,longitud,incidencias)
VALUES
('ALANGASI','LOS CHILLOS','ALANGASI','','ROBO','-0.304714','-78.416503',2),
('AMAGUANA','LOS CHILLOS','AMAGUANA','','ROBO CARROS','-0.304714','-78.440097',1),
('AMAGUANA','LOS CHILLOS','EL EJIDO','','TENTATIVA DE ROBO','-0.285853','-78.437043',2);

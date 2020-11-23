# INVERNADERO IOT

## Iniciar Servidor
Ejecular el siguiente comando para iniciar el servidor. Este se encuentra en el puerto 4000.

    npm run dev

##  Generar Base de datos 

Para Generar las tablas y base de datos para ejecular la aplicación ejercutar el siguiente script en la base de datos.

```sql
CREATE DATEBASE database_inverdadero;

USE database_inverdadero

CREATE TABLE usuario (
    id INT(11) NOT NULL AUTO_INCREMENT,
    email VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    nombre VARCHAR(60) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE sensores (
    id INT(11) NOT NULL AUTO_INCREMENT,
    sensor VARCHAR(20) NOT NULL,
    temp VARCHAR(10) NOT NULL,
    hum VARCHAR(10) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE actuadores  (
    id INT(11) NOT NULL AUTO_INCREMENT,
    actuador VARCHAR(20) NOT NULL,
    estado TINYINT(1) NOT NULL,
    PRIMARY KEY (id)
);

```

## API Añadir medida sensor

Para añadir nuevas medidas de sensores utilizar la siguiente notación json.

```json
{
    "sensor": "s4",
    "temp": "26",
    "hum":"20"
}
```

#### HOME
![actuadores](https://i.ibb.co/rpnpp8P/home.png "home")
### SignUp
![actuadores](https://i.ibb.co/dtDM0gw/SignUp.png "SignUp")
### Signin
![actuadores](https://i.ibb.co/Sm0GPkH/signIn.png "signIn")
![actuadores](https://i.ibb.co/tscxWMW/message.png "message")
### Pagina Sesores y actuadores 
![actuadores](https://i.ibb.co/DQc9Jcx/sensores.png "sensores")

![actuadores](https://i.ibb.co/6FqYpC7/actuadores.png "actuadores")
### encriptado 
La aplicación cuenta con cifrado de contraseñas mediante la libreria bcryptjs.

![actuadores](https://i.ibb.co/Dz4YBG0/encriptado.png "encriptado")
### Postman

![actuadores](https://i.ibb.co/7kM7RCf/postman.png "postman")


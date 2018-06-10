# Middleend: wp-cli.jsx

En este presentación veremos una manera de poder administrar nuestros sitios WordPress, y otros recursos en general, en un punto medio ubicado entre el backend y el frontend: el middleend.
Usaremos React, distintas REST APIs para consumo de datos y así implementar en el frontend una CLI que nos permita administrar nuestro sitio como si estuviesemos en el backend; con todo lo que esto implica.


## Por qué?
Por qué implementar una CLI cuando uno tiene acceso a sistemas administrativos de WordPress, como por ejemplo el famoso wp-admin? Porque:

1) Es más rápido
2) Brinda acceso a todas las herramientas o recursos administrativas desde un solo punto.
Cuántas veces ha tenido que hacer

a) wp-admin
b) post list
c) editar post
d) remove imagen?

3) Es cool. Fondo negro, letras verde fluor \m/

## Idea
La idea inicial surgió como necesidad de poder realizar operaciones de administración en nuestro servidor. Como suele sudecer en muchos casos no tenemos acceso directo a servidores de producción si no a servidores de desarrollo. Los servidores de desarrollo no tienen exactamente la misma configuración del sistema de producción, porque justamente este es un sistema de testeo, pruebas, mejoras, correción de errores, etc.
También, la base de datos no suele ser la misma por las mismas razones citadas anteriormente.


# frontcli
Esta es una aplicación y herramienta de desarrollo, escrita en React, que nos permite instalar una interfaz de lína de comandos en el client, específicamente en un browser.

## Cómo funciona?
frontend cuenta con comandos básicos que nos permiten conectarnos a distinas REST APIs. Una vez realizada la conexión, podemos ejecutar los comandos que hemos definido en el desarrollo de nuestra aplicación, o y dependiendo de la estructura de los endpoints de la API, podemos _descubrir_ estos endpoints y agregarlos como comandos a nuestra CLI.

La aplicación está basada en el project `terminal-in-react` (github.com/nitin42/terminal-in-react): A component that renders a terminal http://terminal-in-react.surge.sh/


### Comandos

#### From scratch
Ese modo es el más laborioso, pero sin dudas es la forma en la cual podemos modelar cada comando a nuestro gusto y placer. 

#### Discovery
Hay dos maneras de agregar comandos a la CLI. La primera, la más sencilla y la que no require trabajo de desarrollo, es auto descubrir los endpoints que la REST API tiene definido. Para esto es necesario un endpoint especial que suele ser llamado discovery, el cual nos devuela un listado de todos los endpoints con los que la API cuenta.
Este modo, si bien es más sencillo y más rápido, no siempre será del todo elegante ya que a veces el mapea entre en endpoint y el comando no suele ser transparente, y muchas veces el resultado será algo no práctico. Y si no es práctico, no sirve para una CLI.

#### Auto generación
La generación de comandos es un modo que podríamos considerar entre `Fron Scratch` y `Discovery`. Funciona de la siguiente manera:
1) Descubirmos los endpoints de la REST API, y los mapeamos
2) Generamos modulos de React en nuestro servidor
3) Luego, podemos agregar estos comandos a nuestra aplicación en el desarrollo.
4) Si es necesario ajustar el comando, podemos crear uno nuevo extendiendoló de la clase base del comando.

Este proceso puede ser dispardo desde la propia frontcli. Generará los comandos en nuestro servidor de desarrollo, y si todo sale bien recompila la aplicación con hot-reloading. El framework de desarrollo utiliza next.js.


#### Topologia de un comando

```
<Terminal
  commands={{
    color: {
      method: fn (args, print, runCommand),
      options: [
        {
          name: '<command-name>',
          description: '<command-description>',
          defaultValue: '<default-value>',
        },
      ],
    },
  }}
/>
```



# frontcli como framework de desarrollo

1) Utitiliza next.js
2) Define su propia REST API utilizada para desarrollo a través de node.js
3) La autogeneración de comandos escrive archivos en el directorio sources/generation
4) La autogeneración, y cada modificación que se haga en la aplicación, será auto-recargada con hot-reloading

# fontcli y su propia cli (backend)

frontcli cuenta con su propia cli de desarrollo en el backend cuando las papas queman. Si la recompilación en el cliente falla, podría romper la aplicación y no tendríamos modo de continuar desde ese punto. Para estos casos es que podemos usar la cli en el backend.

# comandos de desarrollo de frontcli

> frontcli help
> frontcli version
> frontcli rest <rest-api-domain> connect
> frontcli rest <rest-api-domain> namespace <namespace>
	mapea la rest con un namespace usado como nombre de comando
	> frontcli https://public-api.wordpress.com/wpcom discover
	> frontcli https://public-api.wordpress.com/wpcom namespace wpcom
> frontcli namespace --discovery
> frontcli namespace --generate
> frontcli compile
> frontcli clean
> frontcli namespace oauth




### A8C
Connection layer: podemos utilizar oauth o proxy connector











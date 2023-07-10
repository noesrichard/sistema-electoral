# Sistema Electoral

Este sistema permite el registro de usaurios y candidatos para realizar un proceso de votacion. 

La base de datos es un archivo json el cual mediante el paquete json-server puede servirse como REST API.
El frontend consiste de una aplicacion desarrollada con Angular y Material Angular.

Ejecutar json-server con la base de datos en db.json
1. `npm install -g json-server`
2. `json-server --watch src/data/db.json`

Ejecutar app angular
Instalar si es necesario el cli de angular 
1. `npm install -g @angular/cli`
2. `npm install` dentro del proyecto para instalar dependencias.
3. `ng serve -o`

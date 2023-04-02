import { Column } from "src/app/components/table/table.component";
import { Curso } from "./curso";

export interface Tarjeton{ 
  id: number; 
  title: string; 
  cursos: number[]; 
}

export const TARJETONES: Tarjeton[] = [
  {id: 1, title: "Presidentes", cursos: [1,2]},
  {id: 2, title: "Secretarios", cursos: [1]},
]

export const VOIDTARJETON: Tarjeton = { 
  id: null, 
  title: null,
  cursos: null,
}

export const TARJETONCOLUMNS: Column[] = [ 
  {label: 'ID', property: 'id'},
  {label: 'Titulo', property: 'title'},
] 

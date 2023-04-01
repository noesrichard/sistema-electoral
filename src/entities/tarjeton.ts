import { Column } from "src/app/components/table/table.component";

export interface Tarjeton{ 
  id: number; 
  title: string; 
}

export const TARJETONES: Tarjeton[] = [
  {id: 1, title: "Presidentes"},
  {id: 2, title: "Secretarios"},
]

export const TARJETONCOLUMNS: Column[] = [ 
  {label: 'ID', property: 'id'},
  {label: 'Titulo', property: 'title'},
] 

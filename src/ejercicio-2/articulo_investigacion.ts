class Articulo_Investigacion {
  titulo: string;
  autor_autores: Array<string>;
  email_emails: string;
  keyworks: Array<string>;
  resumen: string;
  fecha: number;
  editorial: string;
  numero_citas: number;

  apellido_apellidos: Array<string>;
  titulo_revista: string;
  volumen: number;
  numero_volumen: number;
  numero_pagina_s: Array<number>;
  direccion_electronica: string;

  constructor(titulo: string, autor_autores: Array<string>, email_emails: string, keywords: Array<string>, resumen: string, fecha:number, editorial:string, numero_citas:number, 
    ) {
    this.titulo = titulo;
    this.autor_autores = autor_autores;
    this.email_emails = email_emails;
    this.keyworks = keywords;
    this.resumen = resumen;
    this.fecha = fecha;
    this.editorial = editorial;
    this.numero_citas = numero_citas;
  }

  
}

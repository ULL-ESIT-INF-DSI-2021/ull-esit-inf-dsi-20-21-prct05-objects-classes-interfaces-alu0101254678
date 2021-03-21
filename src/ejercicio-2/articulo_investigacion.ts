/**
 * Clase articulo investigacion, unicamente guarda la información para un
 * articulo de investigacion
 */
export class Articulo_Investigacion {
  titulo: string;
  autor_autores: string;
  email_emails: string;
  keyworks: Array<string>;
  resumen: string;
  fecha: number;
  editorial: string;
  numero_citas: number;

  constructor(titulo: string, autor_autores: string, email_emails: string, keywords: Array<string>, resumen: string, fecha:number, editorial:string, numero_citas:number) {
    this.titulo = titulo;
    this.autor_autores = autor_autores;
    this.email_emails = email_emails;
    this.keyworks = keywords;
    this.resumen = resumen;
    this.fecha = fecha;
    this.editorial = editorial;
    this.numero_citas = numero_citas;
  }
  /**
   * Este metodo de la clase, escribe por consola dicho articulo, en formato
   * APA, tiene más atributos, no es exactamente así, pero como no usamos más atributos
   */
  formato_APA() {
    console.log(`${this.autor_autores} ${this.fecha} ${this.titulo}`);
  }
}

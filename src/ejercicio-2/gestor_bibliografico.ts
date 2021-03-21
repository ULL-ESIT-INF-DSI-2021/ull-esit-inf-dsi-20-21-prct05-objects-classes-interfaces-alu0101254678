import {Articulo_Investigacion} from './articulo_investigacion';
/**
 * Clase que representa al gestor bibliografico
 * tiene como unico atributo a un vector de articulos de investigacion
 */
export class Gestor_Bibliografico {
  vector_bibliografico: Array<Articulo_Investigacion>;

  constructor(vector_bibliografico: Array<Articulo_Investigacion>) {
    this.vector_bibliografico = vector_bibliografico;
  }

  /**
   * Metodo que imprime la informacion en formato tabla
   */
  print_informacion() {
    console.table(this.vector_bibliografico);
  }
  /**
   * Método que imprime la informacion en formato apa,
   * para ello, lo que hace es llamar al otro método de la clase
   * articulo_investigacion
   */
  formato_APA_articulos() {
    for (let indice = 0; indice < this.vector_bibliografico.length; indice ++) {
      this.vector_bibliografico[indice].formato_APA();
    }
  }

  /**
   * Método que busca por palabra calve un articulo o mas articulos, 
   * recordemos que pueden haber una o más palabras clave
   * @param keywords es un array de strings
   */
  busqueda_palabra_clave_formato_tabla(keywords: Array<string>) {
    let vector_bibliografico_auxiliar: Array<Articulo_Investigacion> = [];
    for (let indice = 0; indice < keywords.length; indice ++) {
      for (let indice = 0; indice < this.vector_bibliografico.length; indice ++) {
        for (let indice = 0; indice < this.vector_bibliografico[indice].keyworks.length; indice ++) {
          if (keywords[indice] === this.vector_bibliografico[indice].keyworks[indice]) {
            vector_bibliografico_auxiliar.push(this.vector_bibliografico[indice]);
          }
        }
      }
    }
    console.table(vector_bibliografico_auxiliar);
  }
  /**
   * Este método es el mismo que el anterior solo que muestra la información en
   * formato apra
   * @param keywords es un array de strings
   */
  busqueda_palabra_clave_formato_apa(keywords: Array<string>) {
    let vector_bibliografico_auxiliar: Array<Articulo_Investigacion> = [];
    for (let indice = 0; indice < keywords.length; indice ++) {
      for (let indice = 0; indice < this.vector_bibliografico.length; indice ++) {
        for (let indice = 0; indice < this.vector_bibliografico[indice].keyworks.length; indice ++) {
          if (keywords[indice] === this.vector_bibliografico[indice].keyworks[indice]) {
            vector_bibliografico_auxiliar.push(this.vector_bibliografico[indice]);
          }
        }
      }
    }

    for (let indice = 0; indice < vector_bibliografico_auxiliar.length; indice ++) {
      vector_bibliografico_auxiliar[indice].formato_APA();
    }
  }
  /**
   * Método que filtra por el valor de la fecha
   * @param fecha el parametro numérico fecha
   * @returns devuelve el vector auxiliar
   */
  filtrar_fecha(fecha: number) {
    let vector_bibliografico_auxiliar: Array<Articulo_Investigacion> = [];
    for (let indice = 0; indice < this.vector_bibliografico.length; indice ++) {
      if (fecha === this.vector_bibliografico[indice].fecha) {
        vector_bibliografico_auxiliar.push(this.vector_bibliografico[indice]);
      }
    }
    return vector_bibliografico_auxiliar;
  }
  /**
   * Método que filtra por la editorial, en esta ocasión es un nombre
   * @param editorial string que representa a la editorial por la que se esta filtrando
   * @returns devuelve un vector bibliografico auxiliar
   */
  filtrar_editorial(editorial: string) {
    let vector_bibliografico_auxiliar: Array<Articulo_Investigacion> = [];
    for (let indice = 0; indice < this.vector_bibliografico.length; indice ++) {
      if (editorial === this.vector_bibliografico[indice].editorial) {
        vector_bibliografico_auxiliar.push(this.vector_bibliografico[indice]);
      }
    }
    return vector_bibliografico_auxiliar;
  }
  /**
   * Método que filtra por el campo del nombre
   * @param nombre el nombre que se pretende buscar o filtrar
   * @returns devuelve el vector bibliografico auxiliar
   */
  filtrar_nombre(nombre: string) {
    let vector_bibliografico_auxiliar: Array<Articulo_Investigacion> = [];
    for (let indice = 0; indice < this.vector_bibliografico.length; indice ++) {
      if (nombre === this.vector_bibliografico[indice].autor_autores) {
        vector_bibliografico_auxiliar.push(this.vector_bibliografico[indice]);
      }
    }
    return vector_bibliografico_auxiliar;
  }
}


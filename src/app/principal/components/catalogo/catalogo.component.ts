import { Component,  OnInit } from '@angular/core';

interface Book {
  libroFoto: string;
  titulo: string;
  cantidad: number;
  anioPubli: number;
  edicion: string;
  isbn: string;
  idGenero: number;
  nomAutor: string;
  nomEditorial: string;
  idEstadoLibro: number;
  FCre: string;
  FMod: string;
}

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit{
  layout: string = 'grid';
  books: Book[] = [];
  options = ['list', 'grid'];

  ngOnInit() {
    this.books = [
      {
        libroFoto: 'https://i.pinimg.com/736x/b5/0f/9c/b50f9c7c4969883cfa1dfe5a80763529.jpg',
        titulo: 'El Quijote',
        cantidad: 10,
        anioPubli: 1605,
        edicion: '1ª Edición',
        isbn: '9783161484100',
        idGenero: 1,
        nomAutor: 'Miguel de Cervantes',
        nomEditorial: 'Editorial Ejemplo',
        idEstadoLibro: 1,
        FCre: '2023-01-01',
        FMod: '2023-01-15'
      },
      {
        libroFoto: 'https://i.pinimg.com/736x/b5/0f/9c/b50f9c7c4969883cfa1dfe5a80763529.jpg',
        titulo: 'Cien Años de Soledad',
        cantidad: 8,
        anioPubli: 1967,
        edicion: '2ª Edición',
        isbn: '9783161484101',
        idGenero: 2,
        nomAutor: 'Gabriel García Márquez',
        nomEditorial: 'Editorial Macondo',
        idEstadoLibro: 1,
        FCre: '2023-02-01',
        FMod: '2023-02-15'
      },
      // Agrega más libros según necesites...
    ];
  }
}
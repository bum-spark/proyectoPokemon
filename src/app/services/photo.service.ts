import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getImages(): Promise<any[]> {
    return Promise.resolve([
      {
        itemImageSrc: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/FF80/production/_102980456_caballos1.jpg.webp',
        thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
        alt: 'Descripción de la Imagen 1',
        title: 'Título 1'
      },
      {
        itemImageSrc: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/FF80/production/_102980456_caballos1.jpg.webp',
        thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria2s.jpg',
        alt: 'Descripción de la Imagen 2',
        title: 'Título 2'
      },
      {
        itemImageSrc: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/FF80/production/_102980456_caballos1.jpg.webp',
        thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria2s.jpg',
        alt: 'Descripción de la Imagen 2',
        title: 'Título 2'
      },
      {
        itemImageSrc: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/FF80/production/_102980456_caballos1.jpg.webp',
        thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria2s.jpg',
        alt: 'Descripción de la Imagen 2',
        title: 'Título 2'
      },
      {
        itemImageSrc: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/FF80/production/_102980456_caballos1.jpg.webp',
        thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria2s.jpg',
        alt: 'Descripción de la Imagen 2',
        title: 'Título 2'
      },
      {
        itemImageSrc: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/FF80/production/_102980456_caballos1.jpg.webp',
        thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria2s.jpg',
        alt: 'Descripción de la Imagen 2',
        title: 'Título 2'
      }
    ]);
  }
}

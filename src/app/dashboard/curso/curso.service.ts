import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(
    private http: HttpClient
  ) { }

  listarCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>("https://6434883f1c5ed06c95992ed2.mockapi.io/api/v1/curso");
  }
}

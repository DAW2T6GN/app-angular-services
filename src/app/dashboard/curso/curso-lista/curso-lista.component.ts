import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { Curso } from '../curso';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.scss']
})
export class CursoListaComponent implements OnInit {

  cursos: Curso[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'credito', 'estado'];

  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router
  ){

  }

  ngOnInit(): void {
    this.cursoService.listarCursos()
    .subscribe((data) => {
      this.cursos = data
    });
  }

  onNavigateToDetail(id: number): void {
    this.router.navigate([id], {relativeTo: this.route});
  }


}

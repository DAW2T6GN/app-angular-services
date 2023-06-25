import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.component.html',
  styleUrls: ['./curso-detalle.component.scss']
})
export class CursoDetalleComponent implements OnInit {

  cursoId: string | null = "";

  constructor(private router: ActivatedRoute){

  }

  ngOnInit(): void {
    this.cursoId = this.router.snapshot.paramMap.get('id');
  }


}

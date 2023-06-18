import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private route: ActivatedRoute,
    private router: Router){

  }

  irPaginaHome(): void{
    this.router.navigate(['home'], {relativeTo: this.route});
  }

  irPaginaCurso(): void{
    this.router.navigate(['curso'], {relativeTo: this.route});
  }
  irPaginaProducto(): void{
    this.router.navigate(['producto'], {relativeTo: this.route});
  }
}

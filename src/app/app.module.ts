import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { CursoListaComponent } from './dashboard/curso/curso-lista/curso-lista.component';
import { ProductoListaComponent } from './dashboard/producto/producto-lista/producto-lista.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './angular-material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    DashboardComponent,
    HomeComponent,
    CursoListaComponent,
    ProductoListaComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'dashboard', component: DashboardComponent,
        children: [
          {path: 'home', component: HomeComponent},
          {path: 'curso', component: CursoListaComponent},
          {path: 'producto', component: ProductoListaComponent}
        ]
      },
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

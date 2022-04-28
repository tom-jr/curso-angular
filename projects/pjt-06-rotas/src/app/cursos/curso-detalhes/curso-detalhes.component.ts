import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhes',
  templateUrl: './curso-detalhes.component.html',
  styleUrls: ['./curso-detalhes.component.scss']
})
export class CursoDetalhesComponent implements OnInit, OnDestroy {

  id!: number;
  curso?: any;
  subscription?: Subscription;

  constructor(private routeActive: ActivatedRoute, private cursosService: CursosService, private router:Router) { }
  
  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    this.subscription = this.routeActive.params.subscribe((params: any)=>{
      this.id = params['id'];
      this.curso = this.cursosService.getCurso(this.id);
     this.notFound(this.curso);
    });

  }
  
  ngOnDestroy(): void {
  this.subscription?.unsubscribe();
  }
  
  notFound(curso: any){
if(!curso){
  this.router.navigate(['/not-found']);
}
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit, OnDestroy {

  page!: number;
  cursos!: any;
  subscription!: Subscription;
  constructor(private cursosService: CursosService, private activeRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    this.subscription = this.activeRoute.queryParams.subscribe((params: any) => {
      this.page = params['page'];
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('TESTE');
  }

  nextPage() {
    console.log("this.nextPage")
    this.page++;
    console.log(this.page)
    this.router.navigate(['/cursos'], { queryParams: { 'page': this.page } });
  }
}

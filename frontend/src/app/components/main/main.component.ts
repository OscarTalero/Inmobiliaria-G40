import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarHaciaPersonas(){
    this.router.navigate(['/listar-persona'])
  }

  navegarHaciaInmueble(){
    this.router.navigate(['/listar-inmueble'])
  }

}

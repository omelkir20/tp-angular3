import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'rb_seters_creation';
  constructor(private router: Router){}

  ngOnInit(): void {
    
  }
  goToIns(){
    this.router.navigate(["/inscription"])
  }
  goToAcc(){
    this.router.navigate(["/accueil"])
  }
  goToCon(){
    this.router.navigate(["/connexion"])
  }
  
}


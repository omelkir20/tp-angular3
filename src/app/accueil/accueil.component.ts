import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{
  constructor(private router: Router){}
  goToProd(){
    this.router.navigate(["/produits"])
  }
  goToOP(){
    this.router.navigate(["/Opinion"])
  }
  ngOnInit(): void {
  }
}
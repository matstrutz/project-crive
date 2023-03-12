import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-booster-open',
  templateUrl: './booster-open.component.html',
  styleUrls: ['./booster-open.component.scss'],
})
export class BoosterOpenComponent implements OnInit {

  booster: any[] = new Array(10);

  ngOnInit(): void {
    this.calcularDropBasic(this.booster);
  }

  calcularDropBasic(booster: any[]) {
    for (let index = 0; index < booster.length; index++) {
      const element = booster[index];
    }
  }

  primeiroDrop(value: number){
    if(value < 3){

    }
    
    if(value < 10) {

    }

    
  }

  segundoDrop(value: number){

  }

  terceiroQuintoDrop(value: number){

  }

  sextoDecimoDrop(value: number){

  }
}

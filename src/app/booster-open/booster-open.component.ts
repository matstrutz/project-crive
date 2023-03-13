import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-booster-open',
  templateUrl: './booster-open.component.html',
  styleUrls: ['./booster-open.component.scss'],
})
export class BoosterOpenComponent implements OnInit {

  booster: any[] = new Array(10);
  open: boolean = false;

  ngOnInit(): void {
  }

  calcularDropBasic(booster: any[]) {
    for (let i = 0; i < booster.length; i++) {
      let result: number = Math.floor(Math.random() * 100) + 1;

      if (result < 5) {
        booster[i] = "mythic";
      } else if (result < 10) {
        booster[i] = "legendary";
      } else if (result < 20) {
        booster[i] = "epic";
      } else if (result < 50) {
        booster[i] = "rare";
      } else if (result < 60) {
        booster[i] = "uncommon";
      } else {
        booster[i] = "common"
      }
    }
  }

  dealCards(){
    this.open = true;
    this.calcularDropBasic(this.booster);
  }
}

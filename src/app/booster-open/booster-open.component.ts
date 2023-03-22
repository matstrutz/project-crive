import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-booster-open",
  templateUrl: "./booster-open.component.html",
  styleUrls: ["./booster-open.component.scss"],
})
export class BoosterOpenComponent implements OnInit {

  booster: any[] = new Array(10);
  open: boolean = false;

  ngOnInit(): void {
  }

  //TODO Melhorar Logica e ordernar
  calcularDropBasic(booster: any[]) {
    for (let i = 0; i < booster.length; i++) {
      let result: number = Math.floor(Math.random() * 100) + 1;

      if (result < 4) {
        booster[i] = "card mythic";
      } else if (result < 9) {
        booster[i] = "card legendary";
      } else if (result < 15) {
        booster[i] = "card epic";
      } else if (result < 30) {
        booster[i] = "card rare";
      } else if (result < 40) {
        booster[i] = "card uncommon";
      } else {
        booster[i] = "card common"
      }
    }
  }

  abrirBooster() {
    this.open = true;
    this.calcularDropBasic(this.booster);
  }

  removerAnimacao(index: any){
    this.booster[index] = this.booster[index] + "without-animation";
  }
}

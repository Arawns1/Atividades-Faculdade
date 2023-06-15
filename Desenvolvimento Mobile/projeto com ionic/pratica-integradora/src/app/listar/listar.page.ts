import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  items: any;
  constructor() {
    this.items = [

      {
        title: "Posto Cidade",
        subTitle: "Gasolina R$4,80",
        image: "https://images.emojiterra.com/google/android-11/512px/26fd.png"
      },

      {
        title: "Posto Expresso",
        subTitle: "Alcool R$3,80",
        image: "https://images.emojiterra.com/google/android-11/512px/26fd.png"
      },

      {
        title: "Central dos Combustíveis",
        subTitle: "Gasolina Super R$5,30",
        image: "https://images.emojiterra.com/google/android-11/512px/26fd.png"
      },

      {
        title: "Posto Rio",
        subTitle: "Alcool R$3,90",
        image: "https://images.emojiterra.com/google/android-11/512px/26fd.png"
      },

      {
        title: "Posto BH",
        subTitle: "Gas natural R$2,60",
        image: "https://images.emojiterra.com/google/android-11/512px/26fd.png"
      }]
  }

  ngOnInit() {
  }

}

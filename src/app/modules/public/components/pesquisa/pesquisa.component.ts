import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {

  model = {
    left: true,
    middle: false,
    right: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}

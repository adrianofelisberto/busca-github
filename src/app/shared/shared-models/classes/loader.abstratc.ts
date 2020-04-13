import { OnInit } from '@angular/core';

import { Subject } from 'rxjs';

import { LoaderService } from '../../shared-service/services/loader.service';

export abstract class Loader implements OnInit {

  mostrarLoader: Subject<boolean>;

  constructor(protected loaderService: LoaderService) { }

  ngOnInit(): void {
    this.mostrarLoader = this.loaderService.carregar;
  }
}

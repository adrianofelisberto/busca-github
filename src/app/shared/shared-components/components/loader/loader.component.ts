import { Component } from '@angular/core';

import { LoaderService } from 'src/app/shared/shared-service/services/loader.service';
import { Loader } from 'src/app/shared/shared-models/classes/loader.abstratc';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent extends Loader {
  constructor(loaderService: LoaderService) {
    super(loaderService);
  }
}

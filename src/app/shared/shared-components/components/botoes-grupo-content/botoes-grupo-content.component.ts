import { Component } from '@angular/core';

@Component({
  selector: 'app-botoes-grupo-content',
  template: `
  <div class="d-flex flex-column flex-md-row">
    <ng-content></ng-content>
  </div>
  `
})
export class BotoesGrupoContentComponent { }

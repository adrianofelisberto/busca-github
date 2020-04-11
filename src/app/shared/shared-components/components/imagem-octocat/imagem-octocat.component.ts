import { Component, HostBinding, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-imagem-octocat',
  templateUrl: './imagem-octocat.component.html',
  styleUrls: ['./imagem-octocat.component.scss']
})
export class ImagemOctocatComponent {

  @Input() tamanho = 50;

  @HostBinding('attr.style')
  public get valorString(): any {
    return this.sanitizer.bypassSecurityTrustStyle(`--porcentagem-img: ${this.tamanho}%`);
  }

  constructor(private sanitizer: DomSanitizer) {}


}

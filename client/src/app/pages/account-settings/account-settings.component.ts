import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document ) { }

  ngOnInit() {
  }

  mudarCor(tema: string, link: any) {
    // console.log(tema, link);
    this.aplicarCheck(link);
    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href' , url);
  }

  aplicarCheck(link: any) {
    let selector: any = document.getElementsByClassName('selector');

    for ( let ref of selector ) {
      ref.classList.remove('working');
    }
      link.classList.add('working');
  }
}

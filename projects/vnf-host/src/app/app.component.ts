import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MODULE_LOADER } from './app.config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  loadRemoteModule = inject(MODULE_LOADER);

  constructor() {
    this.loadRemoteModule('mfe1', './Component');
    this.loadRemoteModule('mfe2', './Component');
  }
  title = 'vnf-host';
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {FormsModule} from '@angular/forms';
import {} from '@angular/common/http'
import { AppComponent } from './app.component';
import { EmplistComponent } from './elements/epmplistelement/app.emplist.element';
import { EmpDetailsComponent } from './elements/empdetailselement/app.empdetails.element';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    EmpDetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule

  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [EmplistComponent, EmpDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector){
    const empListElement = createCustomElement(EmplistComponent, {injector: this.injector});
    customElements.define('app-emplist-element', empListElement);
    const empDetailsElement = createCustomElement(EmpDetailsComponent, {injector: this.injector});
    customElements.define('app-empdetails-element', empDetailsElement);

  }
 }

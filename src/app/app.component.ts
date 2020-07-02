import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';
  test = ['a', 'b'];

  dummyColumns = ["Voucher Type","Branch","Party Account","Location","GST Transaction Type","GSt Registration Type","Is Inter State",
  "Remarks","Purchase Account","Price List","Division","Remarks"]

  tabs = ["tab1", "tab2", "tab3", "tab4", "tab5"];
  datasource: [] = [];
  datasource1: [] = [];

  closeButtonHandler(content) {
    console.log(content);
  }

}

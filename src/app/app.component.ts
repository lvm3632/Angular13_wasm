import { Component, OnInit } from '@angular/core';
declare const WebAssembly: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {}
  fibonaccifromC : string = '';
  ngOnInit() {
    WebAssembly.instantiateStreaming(fetch('../assets/fibonacci.wasm'))
    .then((obj:any) => {
      this.fibonaccifromC = obj.instance.exports.fibonacci(8).toString();
      console.log("Resultado fibonacci:", this.fibonaccifromC);
    })
    .catch((err:any) => console.log('Error: ', err));
  }
}

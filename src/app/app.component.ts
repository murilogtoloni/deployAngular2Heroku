import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  resposta = '';

  title = 'app';

  constructor(private http: Http) {


  }

  enviarGet() {
    this.http.get('/').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
    });
  }
}

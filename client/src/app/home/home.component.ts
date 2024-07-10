import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  registerMode = false;
  users :any;

  registerToggle(){
    this.registerMode =! this.registerMode;
  }
  constructor(private http: HttpClient){};

  ngOnInit():void{
    this.getUser();
  }

  getUser() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Response has completed')
    })
  }

  cancelRegisterMode(event:boolean){
    this.registerMode = event;
  }

}

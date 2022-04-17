import { Component, OnInit } from '@angular/core';
import { Mascota } from './form.model';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mascotaModel = new Mascota("Ejemplo", "Bulldog", 5);
  empList: Array<Mascota> = [];
  
  constructor() {}

  ngOnInit() {}

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newMascot() {
    this.empList.push(
      new Mascota(
        this.mascotaModel.nombre,
        this.mascotaModel.raza,
        this.mascotaModel.edad
      )
    );
    console.log(this.mascotaModel);
  }
  getMascotsByID(name: String) {
    for(let i =0; i < this.empList.length; i++){
      if(name == this.empList[i].nombre){
        this.mascotaModel = this.empList[i];
      }
    }
    
   
  }

  

  removeUser(name: String) {
    this.empList = this.empList.filter((x) => x.nombre != name);
  }
}

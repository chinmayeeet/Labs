import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../person';

@Component({ //@ is used instead of [], it's a decorator
  selector: 'add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
  public CalculateDogYears(age: number) {
    return age/7;
  }
  public greeting:string=`Welcome to Karnataka People's Forum.
                          Add yourself to this forum here`
  public state:string=``
  public p:Person= new Person("CHBB342167895432","Chinmayee",23)
}
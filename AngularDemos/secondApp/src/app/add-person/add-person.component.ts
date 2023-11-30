import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../person';

@Component({ //@ is used instead of [], it's a decorator
  selector: 'add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
addPerson(aadhar: string, name: string, age: number, alive:boolean) {
var person = new Person(aadhar,name,age);
person.isAlive=alive;
Person.AddPerson(person);
this.status=`${person.name} added successfully `;
}

public handleClick(s: string) {
this.status= `You entered ${s}`;
return `You entered ${s}`;
}
  public CalculateDogYears(age: number) {
    return age/7;
  }
  public greeting:string=`Welcome to Karnataka People's Forum.
                          Add yourself to this forum here`
  public state:string=`Karnataka`;
  public p:Person= new Person("CHBB342167895432","Chinmayee",22);
  public status: string='';
}
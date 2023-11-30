export class Person {

    constructor(pAadhar:string='', pName:string='', pAge:number=0){
        this.aadhar = pAadhar;
        this.name = pName;
        this.age = pAge;
    }

    public aadhar:string = ''; //c# string
    public name:string = '';
    public age:number = 0; //c# int - int32, int64, long, short , decimal
    private secrets:string[] = []; // c# arrays []
    public isAlive:boolean = true; //c# boolean
    protected hobbies:any = []; //c# object (in place of any we can also put unknown)
    protected awardsReceived:any[] = []; //c# array

    public static People:Person[] = [];//static not allowed in js
    public static GetPeople():Person[]{
        if(Person.People.length == 0){
            Person.People.push(new Person("AABB324156757865", "Zach", 28)); //not using this. since people is static
            Person.People.push(new Person("CCBB9241567578995", "Jake", 11));
            Person.People.push(new Person("BVBB324156758365", "Anne", 40));
        }

        return Person.People;
    }

    public static AddPerson(person:Person):boolean{
        //Add him to Person.People array
        if(person==undefined){
            return false;
        }
        Person.People.push(person);
        return true;
    }

}
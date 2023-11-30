"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(pAadhar, pName, pAge) {
        if (pAadhar === void 0) { pAadhar = ''; }
        if (pName === void 0) { pName = ''; }
        if (pAge === void 0) { pAge = 0; }
        this.aadhar = ''; //c# string
        this.name = '';
        this.age = 0; //c# int - int32, int64, long, short , decimal
        this.secrets = []; // c# arrays []
        this.isAlive = true; //c# boolean
        this.hobbies = []; //c# object (in place of any we can also put unknown)
        this.awardsReceived = []; //c# array
        this.aadhar = pAadhar;
        this.name = pName;
        this.age = pAge;
    }
    Person.GetPeople = function () {
        if (Person.People.length == 0) {
            Person.People.push(new Person("AABB324156757865", "Zach", 28)); //not using this. since people is static
            Person.People.push(new Person("CCBB9241567578995", "Jake", 11));
            Person.People.push(new Person("BVBB324156758365", "Anne", 40));
        }
        return Person.People;
    };
    Person.AddPerson = function (person) {
        //Add him to Person.People array
        if (person == undefined) {
            return false;
        }
        Person.People.push(person);
        return true;
    };
    Person.People = []; //static not allowed in js
    return Person;
}());
exports.Person = Person;

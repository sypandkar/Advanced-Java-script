//@@@@@@@@@@@@@@@@@@@@@@@@@@ Class Inheritance @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
class employee{                                              //parent class
    constructor(name){
        console.log("Constructor : Employee " + name);
    }
}
class manager extends employee{                              //derived class
    constructor(name){
        super();                         //super() function is used in class inheritance.
        //it will check that is there any construction method in parent class? if yes then it will be called. without super() function it will show error. (must call super constructor in derived class)
        console.log("Constructor : Manager" + name);
    }
}
let a = new manager(" Yahoo Baba");
*/


/*
class employee{
    constructor(name){
        this.empname = name;
        console.log("Constructor : Employee ");                   //Constructor : Employee
    }
    info(){
        console.log("Employee name : " + this.empname);
    }
}
class manager extends employee{
    info(){
        // super.info();                                            // yah check karega ki upar wale code main kaha info() hain kya ? aur pahele wah run karega.
        console.log("Manager name : " + this.empname);          //Employee name :  Yahoo Baba
        super.info();
    }  
}
let a = new manager(" Yahoo Baba");
a.info();
*/

/*
// +++++++++ class inheritance in practical =>
class employee{
    constructor(name , age , salary){
        this.empname = name;
        this.empage = age;
        this.empsalary = salary;
        console.log("Constructor : Employee ");                   
    }
    info(){
        document.write
            (`<h3>Employee class</h3>
            Name: ${this.empname} <br>
            Age: ${this.empage} <br>
            Salary: ${this.empsalary} <br>`)
    }
}
class manager extends employee{

    info(){
        let ta = 1000; 
        let pa = 300;
        let totalsalary = this.empsalary + ta + pa;
        document.write
            (`<h3>Manager class</h3>
            Name: ${this.empname} <br>
            Age: ${this.empage} <br>
            Salary: ${totalsalary} <br>`)
    }
}
let a = new manager(" Yahoo Baba " , 25 , 20000 );
let b = new employee(" Yahoo Baba " , 23 , 12000 );
a.info();
b.info();
*/



// +++++++++++ Multilevel classinheritance => 
class employee{
    constructor(name , age , salary){
        this.empname = name;
        this.empage = age;
        this.empsalary = salary;
        // console.log("Constructor : Employee ");          //only for testing           
    }
    info(){
        document.write
            (`<h3>Employee class</h3>
            Name: ${this.empname} <br>
            Age: ${this.empage} <br>
            Salary: ${this.empsalary} <br>`)
    }
}
class manager extends employee{

    info(){
        let ta = 1000; 
        let pa = 300;
        let totalsalary = this.empsalary + ta + pa;
        document.write
            (`<h3>Manager class</h3>
            Name: ${this.empname} <br>
            Age: ${this.empage} <br>
            Salary: ${totalsalary} <br>`)
    }
}

class test extends manager {

}
let a = new test(" Yahoo Baba " , 25 , 20000 );
// let b = new employee(" Yahoo Baba " , 23 , 12000 );
a.info();
// b.info();

//Thus by using class inheritance we can use the property of a perticular class into another class.















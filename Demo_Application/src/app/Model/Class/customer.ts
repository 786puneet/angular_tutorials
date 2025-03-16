export class Customer{
    userId:number;
    id:number;
    title:string;
    body?:string;

    constructor()
    {
    this.userId = 1;
    this.id=1;
    this.title='';
    }
}

export class Department
{
    departmentId:number;
    departmentName:string;
    departmentLogo:string;

constructor(){
    this.departmentId=0; 
    this.departmentName='';
    this.departmentLogo='';

}

}


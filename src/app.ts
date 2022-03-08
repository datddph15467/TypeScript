export{};


type Product ={
    id:number,
    name:string
}

const a :number = 20;
const b :number = 30;
const c :number = 30;
const name :string = "Du Dinh Dat";
const status :boolean = true;
const info :object = {};
const arr :string[] = ['a','b','c'];
const Numberarr :number[] = [1,2,3];
const objectArr :Product[] = [ { id: 1 ,name:'Dinh Dat'},{ id : 2 , name:'Dao Thi' }]

function sum(numA:number,numB:number):number{
    return numA+numB;

}
sum(a,b);
console.log(objectArr);

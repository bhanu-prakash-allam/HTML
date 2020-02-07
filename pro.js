
function fun()
{

let name=document.getElementById('name').value;
let age=document.getElementById('age').value;

obj = {
    name:name,
    age:age
}
let array=JSON.parse(localStorage.getItem("test")) || []
array.push(obj);
for(let i=0;i<array.length;i++)
{
let x=document.getElementById('tablebody')
let tr=document.createElement("tr");
let td1=document.createElement("td");
let td2=document.createElement("td");
td1.innerHTML=array[i].name
td2.innerHTML=array[i].age
tr.appendChild(td1);
tr.appendChild(td2);
x.appendChild(tr);
}
let a=localStorage.setItem("test",JSON.stringify(array))


}
function fun2()
{
    let b=JSON.parse(localStorage.getItem("test"))
    let array=b;
for(let i=0;i<array.length;i++)
{
let x=document.getElementById('tablebody')
let tr=document.createElement("tr");
let td1=document.createElement("td");
let td2=document.createElement("td");
td1.innerHTML=array[i].name
td2.innerHTML=array[i].age
tr.appendChild(td1);
tr.appendChild(td2);
x.appendChild(tr);
}
}



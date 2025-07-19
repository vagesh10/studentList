let students=[
    {name:"Vagesh",age:21},
    {name:"Rohit",age:34},
    {name:"Ananth",age:45},
    {name:"Rajesh",age:13}


];

function showStudents(){
    let list=document.getElementById("studentList");
    list.innerHTML=" ";
    students.forEach((item ,index)=>{
        let li = document.createElement("li");
        li.textContent=`${index+1}-${item.name}-age:${item.age}`;
        list.appendChild(li);
        

    })
    
    }
        
function sortName(){
    students.sort((a,b)=>a.name.localeCompare(b.name));
    showStudents();
}


function sortAge(){
    students.sort((a,b)=> a.age-b.age);
    showStudents();

}

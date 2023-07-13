const a=document.getElementById('idcardbtn');
const b=document.getElementById('form');
d=document.getElementById('form2');
e=document.getElementById('form3');
f=document.getElementById('resultbtn');

a.addEventListener("click",function moiz(){
    b.style.display='none';
    d.style.display='inline-block';
    e.style.display='none';


    
});
const c=document.getElementById('newapplication');
c.addEventListener("click",function moiz1(){
    b.style.display='block';
    d.style.display='none';
    e.style.display='none';
    
})
f.addEventListener("click",()=>{
    e.style.display='block';
    b.style.display='none';
    d.style.display='none';
})

    



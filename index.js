console.log('making a good looking manual calculator');
let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('button');
let sValue="";
for(item of buttons)
{
item.addEventListener('click',(e)=>{
    let buttonText=e.target.innerText;
    console.log(buttonText);
    if(buttonText=='X')
    {
      buttonText='*'; 
      sValue+='*';
      screen.value=sValue; 
    }
    else if(buttonText=='C')
    {
     buttonText="";
     sValue="";
     screen.value=sValue;   
    }
    else if(buttonText=='=')
    {
    screen.value=eval(sValue);
    }
    else{
        sValue+=buttonText;
        screen.value=sValue;
    }
})
}
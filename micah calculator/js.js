const numbers=document.getElementsByClassName('numbers');
const operator=document.getElementsByClassName('operator');

function entryValue(num){
    document.getElementById('input-value').innerHTML+=num;
}
function entry(num){
    document.getElementById('input-value').innerHTML=num;
}

for(let i = 0; i < numbers.length; i++){
  
          numbers[i].addEventListener('click',function(){
              entryValue(this.id);
          })
}

for(let x = 0; x < operator.length; x++){
  
    operator[x].addEventListener('click',function(){
            
        if (this.id=="CA")
         entry("");

        else if(this.id=="root"){
        entry(Math.sqrt(document.getElementById('input-value').innerHTML));
        } 
        else if(this.id=="delete"){
        document.getElementById('input-value').innerHTML=
        (document.getElementById('input-value').innerHTML).slice(0,-1);
        }
        else if(this.id=="="){
        var result=eval(document.getElementById('input-value').innerHTML);
        entry(result);
        }
        else{
        entryValue(this.id);
        }
    })
}
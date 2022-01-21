// Creo costante con cui riferirmi a container
const container = document.getElementById('container');

// Creo ciclo di inserimento elementi
for (let i = 1; i <= 1000; i++){
    
    console.log(i);

    if (i % 3 == 0 && i % 5 ==0) {
        container.innerHTML += '<div class="box box-both">fizzbuzz</div>';
    } else if (i % 3 ==0){
        container.innerHTML += '<div class="box box-three"> fizz</div>'; 
    } else if (i % 5 ==0){
        container.innerHTML += '<div class="box box-five">buzz</div>';
    }  else{
        container.innerHTML += `<div class="box box-main">${i}</div>`;
    }
        
     
}
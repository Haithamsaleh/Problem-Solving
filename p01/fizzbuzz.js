const fizzbuzz = (n) =>{
    for(let i = 1 ;i <= 100;i++){
       if (i % 3 == 0){
           console.log("fizz");
           continue;
       }

       if (i % 5 == 0 ){
        console.log("buzz");
        continue;
    }
    
    if (i % 5 == 0 && i % 3 == 0){
        console.log("fizzbuzz");
        continue;
    }
       else{
        console.log(i);

       }

    }
};
fizzbuzz(1);
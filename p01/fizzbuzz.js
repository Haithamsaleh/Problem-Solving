const fizzbuzz = (n) =>{
    for(let i = 1 ;i <= 100;i++){
       if (i % 5 == 0 && i % 3 == 0){
           console.log("fizzbuzz");
           continue;
       }

       else if (i % 5 == 0 ){
        console.log("buzz");
        continue;
    }
    
     else if ( i % 3 == 0){
        console.log("fizz");
        continue;
    }
       else{
        console.log(i);

       }

    }
};
fizzbuzz(1);
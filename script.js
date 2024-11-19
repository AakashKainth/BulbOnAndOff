function factorial(n){
    for (n=1; n<=10; n++ ){
        return n * (factorial -1);
    }
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}
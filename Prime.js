var siPrime = n => {
    c=0
    for(var i = 2; i < Math.sqrt(n); i++)
    { 
        const a = 20;
        if(n % i == 0)
        c++;
    }
    console.log(i);
   
    if(c == 0)
    return true;
return false;
}

console.log(siPrime(13));
console.log(siPrime(91));
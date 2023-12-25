function isPrime(num)
{
    if(num <= 0)
        {
            console.log("0 or negative numbers cannot be prime numbers.")
        }
    else if(num == 1)
    {
        console.log("1 is neither a prime number nor a composite number");
    }
    else if (num == 2)
    {
        console.log("2 is a Prime Number.");
    }
    else
    {
        var i;
        for(i = 2; i <= Math.floor(num/2) ; i ++ )
        {
                if(num%i==0)
                break;
        }
        if(i == Math.floor(num/2)+1)
            console.log(num + " is a Prime Number.");
        else
            console.log(num + " is not a Prime Number.");

    }
}
isPrime(12);
isPrime(13);
isPrime(39);
isPrime(137);
isPrime(1);
isPrime(2);
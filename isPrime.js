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
        console.log("Prime Number");
    }
    else
    {
        var count = 2;
        for(var i = 2; i <= (num/2) ; i ++ )
        {
                if(num%i==0)
                break;
            else{
                count++;
                }
        }
        if(count == num/2)
            console.log("Prime Number");
        else
            console.log("Not a Prime Number.");

    }
}
isPrime(12);
isPrime(13);
isPrime(1);
isPrime(2);
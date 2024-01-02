

document.getElementById("multiply").addEventListener('click',function(){calculate('m')});
document.getElementById("divide").addEventListener('click',function(){calculate('d')} );
document.getElementById("add").addEventListener('click',function(){calculate('a')} );
document.getElementById("sub").addEventListener('click', function() { calculate('s'); });

var op = 'a';
let ans =0;
function calculate(op)
{var num1=document.getElementById("num1").value;

var num2 = document.getElementById("num2").value;

    switch (op)
    {
        case 'm':
            ans = num1*num2;
            break;
        case 'd':
            if(num2!=0)
            ans=num1/num2;
        else
        alert("Error! Division by zero is not allowed.");
            break;
        case 'a':
            ans=parseFloat(num1)+parseFloat(num2);
            break;
        case 's':
            ans = parseFloat(num1)-parseFloat(num2);
            break;
    }  
    document.getElementById('ans').innerText = ans;  
}


import java.util.ArrayList;
import java.util.List;

class PlusOne {
    public List<Integer> static addToArrayForm(int[] num, int k) {
    ArrayList<Integer> answer = new ArrayList<>();
    int arrayCounter = num.length-1;
    int carry =0;

while(arrayCounter>=0 && k>0)
{
    int temp = num[arrayCounter] + k%10 + carry;
    if(temp>=10)
    {
        carry = 1;
        answer.addFirst(temp%10);
        arrayCounter--;
        k=k/10;
    }
    else
    {
        carry = 0;
        answer.addFirst(temp);
        arrayCounter--;
        k=k/10;
    }
    
    
}
if(k>0)
{   
    while(k>0)
    {
        int temp2 = k%10 + carry;
        if(temp2>=10)
        {
            carry =1;
            answer.addFirst(temp2%10);
        }
        else
        {
            carry =0;
            answer.addFirst(temp2);
        }
        
    }
    if(carry==1) answer.addFirst(carry);
}
else
{
    while(arrayCounter>=0)
    {
        int temp2 = num[arrayCounter] + carry;
        if(temp2>=10)
        {
            carry =1;
            answer.addFirst(temp2%10);
        }
        else
        {
            carry =0;
            answer.addFirst(temp2);
        }
    }
    if(carry==1) answer.addFirst(carry);
    }
    return answer;
}

    public static void main(String[] args) {
        int[] digits = { 9, 9, 9, 9, 9, 9, 9, 9, 9, 9 };
        int k = 1;
        for (int i : digits) {
            System.out.print(i + " ");
        }
        ArrayList<Integer> answer = addToArrayForm(digits, k);

        System.out.println("");
        for (int i : answer) {
            System.out.print(i + " ");
        }
    }
}

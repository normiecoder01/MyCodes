
public class HollowDiamond 
{
    public static void main(String[] args) 
    {
      	int n =4;
	for(int i=0; i<n;i++)
	{
		for(int j=0; j<=((n-2)-i);j++)
		{
			System.out.print(" ");
		}
		System.out.print("*");
		if(i!=0)
		{
			for(int k=0;k<=((2*i)-2);k++)
			{
				System.out.print(" ");
			}
			System.out.print("*");
		}
		System.out.println(""); 
    	}

	for(int i=1; i<n;i++)
	{
		for(int j=0; j<i;j++)
		{
			System.out.print(" ");
		}
		System.out.print("*");
		if(i!=(n-1))
		{
			for(int k=0;k<=(n-(2*i));k++)
			{
				System.out.print(" ");
			}
			System.out.print("*");
		}
		System.out.println(""); 
    	}
   }
}
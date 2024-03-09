public class BubbleSort {
    
    public static void bubbleSort(int[] nums)
    {
        
        for(int i =1; i<=nums.length;i++)
        {
            for(int j=0; j<nums.length-i;j++)
            {
                if(nums[j]>nums[j+1])
                {
                    int a=nums[j];
                    nums[j]=nums[j+1];
                    nums[j+1]=a;
                }
            }
        }
        
    }

    public static void main(String[] args) {
        int nums[] = {1,2,4,5,7,4,83,34};
        bubbleSort(nums);
        for(int i:nums)
        {
            System.out.print(i+" ");
        }
    }
}

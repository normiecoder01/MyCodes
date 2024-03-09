import java.util.Arrays;
public class BinarySearch {
    public static int binarySearch(int[] nums, int key)
    {
        Arrays.sort(nums);
        int start = 0; int end = nums.length-1;
        while (start<=end)
        {int mid = ((start+end)/2);
            if (nums[mid]==key) return mid;
            if (nums[mid]>key) end = mid-1; 
            if (nums[mid]<key) start = mid+1;
        }
        return -1;
    }
    public static void main(String[] args) {
        System.out.println("Hello");
        int[] nums = {12,34,264,25,26,42};
        int key = 264;
        int i =binarySearch(nums,key);
        System.out.println(i);
    }
}

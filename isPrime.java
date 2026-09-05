import java.util.Scanner;

public class isPrime {
    public static void main(String[] args) {
        Scanner scn= new Scanner(System.in);

        int n= 5;

        int cnt=0;

        for( int div=1; div<=n; div++){
            if(n%div==0){
                cnt++;
            }
        }

        if(cnt==2){
            System.out.println("Prime");
        }
        else{
            System.out.println("Not Prime");
        }

    }
}

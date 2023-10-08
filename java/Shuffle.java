class Shuffle {
    
    public static void shuffle(int[] array){
        int n = array.length;
        for (int i = n - 1; i > 0; i--) {
            int j = (int) (Math.random() * (i + 1));
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,7};
        shuffle(arr);
        for(int i: arr){
            System.out.println(i+"-");
        }
    }
}
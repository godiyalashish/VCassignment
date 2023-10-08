import java.util.*;
class Panagram {
    public static void main(String[] args){
        String sen = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = isPangram(sen);

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String str) {
        str = str.toLowerCase();
        Set<Character> letterSet = new HashSet<>();
        for (char c : str.toCharArray()) {
            if (Character.isLetter(c)) {
                letterSet.add(c);
            }
        }
        return letterSet.size() == 26;
    }
}
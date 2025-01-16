import java.util.Base64;

public class Base64E {
    public static void main(String[] args) {
        // 인코딩할 원본 문자열
        String originalString = "your-secret-key";

        // Base64로 인코딩
        String encodedString = Base64.getEncoder().encodeToString(originalString.getBytes());

        System.out.println("Base64 인코딩된 값: " + encodedString);
    }
}

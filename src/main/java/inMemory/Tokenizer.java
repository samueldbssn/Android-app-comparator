package inMemory;

import bipartiteGraph.Node;
import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Path;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import com.typesafe.config.Config;
import com.typesafe.config.ConfigFactory;



public class Tokenizer {
    private final Config config = ConfigFactory.load();

    private boolean fileSize;
    private boolean fileHash;
    private boolean fileExtension;

    public Tokenizer() {
        this.fileSize = config.getBoolean("fileSize");
        this.fileHash = config.getBoolean("fileHash");
        this.fileExtension = config.getBoolean("fileExtension");
    }

    public void tokenize(Node node) {
        node.getTokens().clear();
        String tokenFileName = node.getPath().toString().substring(node.getPath().toString().lastIndexOf('/') + 1);
        node.addToken(tokenFileName);
        if (fileSize) {
            int fileSize = getFileSize(node.getPath());
            node.addToken(String.valueOf(fileSize));
        }
        if (fileHash) {
            try {
                byte[] fileBytes = getFileBytes(node.getPath());
                String tokenFileHash = getSHA256(fileBytes);
                node.addToken(tokenFileHash);
            } catch (IOException | NoSuchAlgorithmException e) {
                e.printStackTrace();
            }
        }
        if (fileExtension) {
            int lastIndexOfDot = node.getPath().toString().lastIndexOf('.');
            if (lastIndexOfDot != -1) {
                String tokenFileExtension = node.getPath().toString().substring(lastIndexOfDot + 1);
                System.out.println(tokenFileExtension);
                node.addToken(tokenFileExtension);
            }

        }
    }

    public int getFileSize(Path path) {
        File file = new File(String.valueOf(path));
        return (int) FileUtils.sizeOf(file);
    }

    private static byte[] getFileBytes(Path filePath) throws IOException {
        File file = new File(String.valueOf(filePath));
        if (!file.isFile()) {
            return new byte[0];
        }
        byte[] fileBytes = new byte[(int) file.length()];
        FileInputStream fileInputStream = new FileInputStream(file);
        int readBytes = fileInputStream.read(fileBytes);
        if (readBytes != fileBytes.length) {
            throw new IOException("Cannot read file: " + filePath);
        }
        fileInputStream.close();
        return fileBytes;
    }

    private static String getSHA256(byte[] inputBytes) throws NoSuchAlgorithmException {
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        byte[] hashBytes = digest.digest(inputBytes);
        StringBuilder hexString = new StringBuilder();
        for (byte hashByte : hashBytes) {
            String hex = Integer.toHexString(0xff & hashByte);
            if (hex.length() == 1) hexString.append('0');
            hexString.append(hex);
        }
        return hexString.toString();
    }


}

package bipartiteGraph;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Getter
@AllArgsConstructor
@ToString
public class Node {
    @Getter
    @Setter
    private int id;
    private String name;
    private List<String> tokens;
    @Setter
    private Node parent = null;

    public Node(String name) {
        this.name = name;
        this.tokens = new ArrayList<>();
    }

    public Node(String name, List<String> tokens) {
        this.name = name;
        this.tokens = tokens;
    }

    public void addToken(String token) {
        tokens.add(token);
    }

    public void removeToken(String token) {
        tokens.remove(token);
    }

    public void removeAllTokens() {
        tokens.clear();
    }

    public void tokenize() {
        tokens.clear();
        String[] tokenArray = name.split("/");
        for (String token : tokenArray) {
            tokens.add(token);
        }
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Node node = (Node) obj;
        return name.equals(node.name) && tokens.equals(node.tokens);
    }

    @Override
    public int hashCode() {
        int result = name.hashCode();
        result = 31 * result + tokens.hashCode();
        return result;
    }
}

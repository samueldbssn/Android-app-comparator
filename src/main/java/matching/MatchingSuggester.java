package matching;

import bipartiteGraph.BipartiteGraph;
import bipartiteGraph.Edge;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Random;

public class MatchingSuggester {

    private final double gamma;

    public MatchingSuggester(double gamma) {
        this.gamma = gamma;
    }

    public List<Edge> suggestNewMatching(BipartiteGraph graph, List<Edge> currentMatching) {
        List<Edge> newMatching = new ArrayList<>();
        List<Edge> remainingEdges = new ArrayList<>(graph.getEdges());
        remainingEdges.sort(Comparator.comparingDouble(Edge::getValue)); // sortedEdges(g)
        int toKeep = new Random().nextInt(currentMatching.size() + 1); // randomInt(0, |Mi|)
        for (int j = 0; j < toKeep; j++) {
            if (remainingEdges.isEmpty()) {
                break;
            }
            Edge edge = remainingEdges.remove(0); // remainingEdges.first
            newMatching.add(edge);
            removeConnectedEdges(remainingEdges, edge);
        }
        while (!remainingEdges.isEmpty()) {
            Edge edge = selectEdgeFrom(remainingEdges);
            newMatching.add(edge);
            removeConnectedEdges(remainingEdges, edge);
        }
        return newMatching;
    }

    private Edge selectEdgeFrom(List<Edge> edges) {
        while (true) {
            for (Edge edge : edges) {
                if (new Random().nextDouble() < gamma) {
                    return edge;
                }
            }
        }
    }

    private void removeConnectedEdges(List<Edge> edges, Edge edge) {
        edges.removeIf(e -> e.getSource().equals(edge.getSource()) || e.getTarget().equals(edge.getTarget()));
    }
}
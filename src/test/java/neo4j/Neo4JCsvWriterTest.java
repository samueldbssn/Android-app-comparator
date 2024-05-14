package neo4j;

import neo4j.data.Apk;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class Neo4JCsvWriterTest {

    static String testFileName = "test.csv";

    @BeforeEach
    void setUp() {
        Apk.resetIdCounter();
    }

    @AfterAll
    static void cleanUp() {
        Path testFile = Paths.get(testFileName);
        if (testFile.toFile().exists()) {
            testFile.toFile().delete();
        }
    }

    @Test
    void testWriteCsvNodes() throws IOException {
        //GIVEN
        List<Apk> nodes = List.of(new Apk(Path.of("test1")), new Apk(Path.of("test2")));
        Neo4JCsvWriter writer = new Neo4JCsvWriter();
        Path testFilename = Path.of("test_nodes.csv");

        //WHEN
        writer.writeNodesCsv(testFilename, nodes);

        //THEN
        assertTrue(testFilename.toFile().exists());
        List<String> expectedLines = List.of("id,label", "1,test1", "2,test2");
        byte[] encodedBytes = Files.readAllBytes(Paths.get(testFilename.toString()));
        String actualContent = new String(encodedBytes, StandardCharsets.UTF_8);
        List<String> actualLines = List.of(actualContent.split("\n"));
        assertEquals(expectedLines.get(0), actualLines.get(0));
        for (int i = 1; i < expectedLines.size(); i++) {
            assertTrue(actualLines.contains(expectedLines.get(i)));
        }
    }

    @Test
    void testWriteCsvDistance() throws IOException {
        //GIVEN
        Map<Apk, HashMap<Apk, Float>> distances = new HashMap<>();
        HashMap<Apk, Float> source1Distances = new HashMap<>();
        Apk source1 = new Apk(Path.of("test1"));
        Apk source2 = new Apk(Path.of("test2"));
        Apk source3 = new Apk(Path.of("test3"));
        source1Distances.put(source2, 10.5f);
        source1Distances.put(source3, 15.2f);
        distances.put(source1, source1Distances);
        Neo4JCsvWriter writer = new Neo4JCsvWriter();
        Path testFilename = Path.of("test_distances.csv");

        //WHEN
        writer.writeDistanceCsv(testFilename, distances);

        //THEN
        assertTrue(testFilename.toFile().exists());
        List<String> expectedLines = List.of(":START_ID,:END_ID,weight", "1,3,15.2", "1,2,10.5");
        byte[] encodedBytes = Files.readAllBytes(Paths.get(testFilename.toString()));
        String actualContent = new String(encodedBytes, StandardCharsets.UTF_8);
        List<String> actualLines = List.of(actualContent.split("\n"));
        assertEquals(expectedLines.get(0), actualLines.get(0));
        for (int i = 1; i < expectedLines.size(); i++) {
            assertTrue(actualLines.contains(expectedLines.get(i)));
        }
    }
}
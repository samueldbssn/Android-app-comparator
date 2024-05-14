package integration;

import neo4j.data.Apk;
import algo.AlgoRunner;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.Test;
import utils.AppConfigModifier;

import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Objects;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class AppAlgortihmIntegrationTest {

    static final AppConfigModifier appConfigModifier = new AppConfigModifier();

    @AfterAll
    static void tearDown() throws IOException {
        appConfigModifier.restoreConfig();
    }

    @Test
    void testApp() throws IOException, URISyntaxException {
        //GIVEN
        Path resources = Paths.get(Objects.requireNonNull(Thread.currentThread().getContextClassLoader().getResource("apks")).toURI());

        //WHEN
        var algorithmResults = AlgoRunner.run(resources.toString());

        //THEN
        assertEquals(3, algorithmResults.getApks().size());
        for (Apk apk : algorithmResults.getApks()) {
            assertTrue(apk.getPath().toString().contains("apks"));
            assertTrue(apk.getTotalSize() > 0);
            assertTrue(apk.getNumberOfFiles() > 0);
        }
        assertEquals(2, algorithmResults.getDistances().size());
        Apk chesscomApk = algorithmResults.getApks().get(0);
        Apk lichessApk = algorithmResults.getApks().get(1);
        Apk lichess2021Apk = algorithmResults.getApks().get(2);
        float chesscomToLichess = algorithmResults.getDistances().get(chesscomApk).get(lichessApk);
        float chesscomToLichess2021 = algorithmResults.getDistances().get(chesscomApk).get(lichess2021Apk);
        float lichessToLichess2021 = algorithmResults.getDistances().get(lichessApk).get(lichess2021Apk);
        assertTrue(chesscomToLichess > 0 && chesscomToLichess < 1);
        assertTrue(chesscomToLichess2021 > 0 && chesscomToLichess2021 < 1);
        assertTrue(lichessToLichess2021 > 0 && lichessToLichess2021 < 1);
        assertTrue(lichessToLichess2021 < chesscomToLichess2021);
    }
}
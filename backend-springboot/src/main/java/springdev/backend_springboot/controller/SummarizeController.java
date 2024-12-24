package springdev.backend_springboot.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import springdev.backend_springboot.entity.SummarizeRequest;
import springdev.backend_springboot.entity.SummaryResponse;
import springdev.backend_springboot.service.SummarizeService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*")
public class SummarizeController {

    @Autowired
    private SummarizeService summarizeService;

    private Logger logger = LoggerFactory.getLogger(SummarizeController.class);

    @PostMapping("/summarize")
    public SummaryResponse summarizeText(@RequestBody SummarizeRequest summarizeRequest) {
        String text = summarizeRequest.getText();
        int length = summarizeRequest.getLength();

        logger.info(":> input_text : {}", text);

        // Call service to summarize text
        String summary = summarizeService.summarizeText(text, length);

        // Return the summary response
        return new SummaryResponse(summary);
    }
}

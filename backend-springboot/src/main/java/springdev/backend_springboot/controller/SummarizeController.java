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
        String type = summarizeRequest.getType();

        logger.info(":> input_text : {}, type : {}", text, type);

        String summary = summarizeService.summarizeText(text, length, type);
        
        return new SummaryResponse(summary);
    }
}

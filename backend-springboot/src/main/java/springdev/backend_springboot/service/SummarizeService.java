package springdev.backend_springboot.service;

import org.springframework.stereotype.Service;

@Service
public class SummarizeService {

    public String summarizeText(String text, int length, String type) {
        if (text.length() < length) {
            return text;
        }

        if ("Abstract".equalsIgnoreCase(type)) {
            return "Abstract Summary: " + text.substring(0, length) + "...";
        } else if ("Extractive".equalsIgnoreCase(type)) {
            String[] sentences = text.split("\\. ");
            StringBuilder extractiveSummary = new StringBuilder();
            for (String sentence : sentences) {
                if (extractiveSummary.length() + sentence.length() <= length) {
                    extractiveSummary.append(sentence).append(". ");
                } else {
                    break;
                }
            }
            return "Extractive Summary: " + extractiveSummary.toString().trim();
        } else {
            return "Invalid summarization type provided.";
        }
    }
}

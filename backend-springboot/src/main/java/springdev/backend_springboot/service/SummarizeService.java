package springdev.backend_springboot.service;

import org.springframework.stereotype.Service;

@Service
public class SummarizeService {

    public String summarizeText(String text, int length) {

        if (text.length() < length) {
            return text;
        }

        return text.substring(0, length) + "...";
    }
} 
package springdev.backend_springboot.service;

import org.springframework.stereotype.Service;

@Service
public class SummarizeService {

    public String summarizeText(String text, int length) {
        // Call the AI model or summarize logic here.
        // For now, let's simulate a simple summary for the sake of this example.

        // You can integrate Ollama Llama model or any other summarization logic here.
        if (text.length() < length) {
            return text;  // Return the original text if the length is shorter than the desired summary length
        }

        // Simple dummy summarizer for demonstration purposes
        return text.substring(0, length) + "...";  // Truncate text to desired length
    }
}
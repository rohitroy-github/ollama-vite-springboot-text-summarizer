package springdev.backend_springboot.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SummarizeRequest {
    private String text;
    private int length;
}
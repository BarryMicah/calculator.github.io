package dev.saha.emeka_java_calculator.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Calculator {
    private int input1;

    private int input2;
    private int result;
    private String operationType;

    public Calculator() {
    }

}

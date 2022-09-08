package com.checkpoint.employeemanagement.employee.exception;

public class EmailIsTakenException extends RuntimeException {
    public EmailIsTakenException(String msg) {
        super(msg);
    }
}

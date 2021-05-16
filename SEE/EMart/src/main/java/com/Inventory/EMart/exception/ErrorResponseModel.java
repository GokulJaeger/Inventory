package com.inventory.emart.exception;

import java.util.Calendar;

public class ErrorResponseModel {
    private String message;

    private int code;
    
    private Calendar ts;

    public ErrorResponseModel(String message, int code, Calendar ts) {
		this.message = message;
		this.code = code;
		this.ts = ts;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public Calendar getTs() {
		return ts;
	}

	public void setTs(Calendar ts) {
		this.ts = ts;
	}
}

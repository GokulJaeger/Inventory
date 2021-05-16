package com.inventory.emart.exception;

import java.util.Calendar;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


@ControllerAdvice
public class GlobalExceptionController extends ResponseEntityExceptionHandler {
    @ExceptionHandler(value = {Exception.class})
    public ResponseEntity<ErrorResponseModel> handleGeneralException(Exception ex,WebRequest req)
    {
        ErrorResponseModel errRes = new ErrorResponseModel(null, 0, null);
        errRes.setCode(500);
        errRes.setMessage("System Error Has Occured,Please Try after some time,Ref id="+Math.random() +1000);
        errRes.setTs(Calendar.getInstance());
        ex.printStackTrace();
        return new ResponseEntity<ErrorResponseModel>(errRes,HttpStatus.BAD_GATEWAY);
    }

    @ExceptionHandler(value = {DeliveryException.class})
    public ResponseEntity<ErrorResponseModel> handleException(DeliveryException ex,WebRequest req)
    {
        ErrorResponseModel errRes = new ErrorResponseModel(null, 0, null);
        errRes.setCode(500);
        errRes.setMessage(ex.toString());
        errRes.setTs(Calendar.getInstance());
        ex.printStackTrace();
        return new ResponseEntity<ErrorResponseModel>(errRes,HttpStatus.BAD_GATEWAY);
    }
}

package com.inventory.emart;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EMartApplication {

	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(EMartApplication.class);
    	app.run(args);
		SpringApplication.run(EMartApplication.class, args);
		System.out.println("======SUCCESS==========>");
	}

}
 
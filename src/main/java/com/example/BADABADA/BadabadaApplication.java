package com.example.BADABADA;

import com.example.BADABADA.com.example.BADABADA.model.Artist;
import com.example.BADABADA.com.example.BADABADA.model.Song;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BadabadaApplication {

	public static void main(String[] args) {
		int[ ] ids = {99};
		Long l = Long.valueOf(ids[0]);
		System.out.print(l);
		Artist artist = new Artist();
		for(Song s: artist.getSongs()){
			System.out.print("items");
		}
		SpringApplication.run(BadabadaApplication.class, args);
	}

}


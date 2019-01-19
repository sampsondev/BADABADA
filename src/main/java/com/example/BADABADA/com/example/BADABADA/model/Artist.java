package com.example.BADABADA.com.example.BADABADA.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Data
public class Artist {
    @Id
    @GeneratedValue
//    @Column
    private  Integer artistId;
//    @Column (name = "firstName")
    private String firstName;
//    @Column
    private String lastName;
//    @Column
    private LocalDate dob;
    @OneToMany(mappedBy = "artist", cascade = CascadeType.ALL)
    private List<Song> songs;

    public List<Song> getSongs() {
        return songs;
    }
}

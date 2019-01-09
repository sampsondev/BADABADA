package com.example.BADABADA.com.example.BADABADA.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Song {
    @Id
    @GeneratedValue
    private Integer songId;
    private String songName;
    private Integer runningTime;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn( name = "artistId")
    private Artist artist;
}

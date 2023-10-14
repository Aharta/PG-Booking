package com.murdock.unistay.entity;

import java.io.Serializable;

public class Pg implements Serializable {

    private int pg_id;
    private String pg_Image;
    private String pg_name;
    private String pg_type;
    private String pg_city;
    private String pg_isVacaent;
    private String pg_rent;
    private String pg_address;
    private String pg_foodType;
    private String pg_rating;
    private int owner_id;

    public Pg(){

    }

    public Pg(int pg_id, String pg_Image, String pg_name, String pg_type, String pg_city, String pg_isVacaent, String pg_rent, String pg_address, String pg_foodType, String pg_rating, int owner_id) {
        this.pg_id = pg_id;
        this.pg_Image = pg_Image;
        this.pg_name = pg_name;
        this.pg_type = pg_type;
        this.pg_city = pg_city;
        this.pg_isVacaent = pg_isVacaent;
        this.pg_rent = pg_rent;
        this.pg_address = pg_address;
        this.pg_foodType = pg_foodType;
        this.pg_rating = pg_rating;
        this.owner_id = owner_id;
    }

    public int getPg_id() {
        return pg_id;
    }

    public void setPg_id(int pg_id) {
        this.pg_id = pg_id;
    }

    public String getPg_Image() {
        return pg_Image;
    }

    public void setPg_Image(String pg_Image) {
        this.pg_Image = pg_Image;
    }

    public String getPg_name() {
        return pg_name;
    }

    public void setPg_name(String pg_name) {
        this.pg_name = pg_name;
    }

    public String getPg_type() {
        return pg_type;
    }

    public void setPg_type(String pg_type) {
        this.pg_type = pg_type;
    }

    public String getPg_city() {
        return pg_city;
    }

    public void setPg_city(String pg_city) {
        this.pg_city = pg_city;
    }

    public String getPg_isVacaent() {
        return pg_isVacaent;
    }

    public void setPg_isVacaent(String pg_isVacaent) {
        this.pg_isVacaent = pg_isVacaent;
    }

    public String getPg_rent() {
        return pg_rent;
    }

    public void setPg_rent(String pg_rent) {
        this.pg_rent = pg_rent;
    }

    public String getPg_address() {
        return pg_address;
    }

    public void setPg_address(String pg_address) {
        this.pg_address = pg_address;
    }

    public String getPg_foodType() {
        return pg_foodType;
    }

    public void setPg_foodType(String pg_foodType) {
        this.pg_foodType = pg_foodType;
    }

    public String getPg_rating() {
        return pg_rating;
    }

    public void setPg_rating(String pg_rating) {
        this.pg_rating = pg_rating;
    }

    public int getOwner_id() {
        return owner_id;
    }

    public void setOwner_id(int owner_id) {
        this.owner_id = owner_id;
    }

    @Override
    public String toString() {
        return "Pg{" +
                "pg_id=" + pg_id +
                ", pg_Image='" + pg_Image + '\'' +
                ", pg_name='" + pg_name + '\'' +
                ", pg_type='" + pg_type + '\'' +
                ", pg_city='" + pg_city + '\'' +
                ", pg_isVacaent='" + pg_isVacaent + '\'' +
                ", pg_rent='" + pg_rent + '\'' +
                ", pg_address='" + pg_address + '\'' +
                ", pg_foodType='" + pg_foodType + '\'' +
                ", pg_rating='" + pg_rating + '\'' +
                ", owner_id=" + owner_id +
                '}';
    }
}

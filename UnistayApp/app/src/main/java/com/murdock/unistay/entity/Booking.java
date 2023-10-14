package com.murdock.unistay.entity;

import java.io.Serializable;

public class Booking implements Serializable {


    private int user_id;
    private int owner_id;
    private int pg_id;

    public Booking(){

    }

    public Booking( int user_id, int owner_id, int pg_id) {

        this.user_id = user_id;
        this.owner_id = owner_id;
        this.pg_id = pg_id;
    }



    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getOwner_id() {
        return owner_id;
    }

    public void setOwner_id(int owner_id) {
        this.owner_id = owner_id;
    }

    public int getPg_id() {
        return pg_id;
    }

    public void setPg_id(int pg_id) {
        this.pg_id = pg_id;
    }

    @Override
    public String toString() {
        return "Booking{" +

                ", user_id=" + user_id +
                ", owner_id=" + owner_id +
                ", pg_id=" + pg_id +
                '}';
    }
}

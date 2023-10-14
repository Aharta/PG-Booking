package com.murdock.unistay.entity;

import java.io.Serializable;

public class Owner implements Serializable {
    private int owner_id;
    private String owner_first_name;
    private String owner_last_name;
    private String owner_email;
    private String owner_password;
    private String owner_mobile;
    private String owner_profileImage;

    public Owner(){

    }

    public Owner(int owner_id, String owner_first_name, String owner_last_name, String owner_email, String owner_password, String owner_mobile, String owner_profileImage) {
        this.owner_id = owner_id;
        this.owner_first_name = owner_first_name;
        this.owner_last_name = owner_last_name;
        this.owner_email = owner_email;
        this.owner_password = owner_password;
        this.owner_mobile = owner_mobile;
        this.owner_profileImage = owner_profileImage;
    }

    public int getOwner_id() {
        return owner_id;
    }

    public void setOwner_id(int owner_id) {
        this.owner_id = owner_id;
    }

    public String getOwner_first_name() {
        return owner_first_name;
    }

    public void setOwner_first_name(String owner_first_name) {
        this.owner_first_name = owner_first_name;
    }

    public String getOwner_last_name() {
        return owner_last_name;
    }

    public void setOwner_last_name(String owner_last_name) {
        this.owner_last_name = owner_last_name;
    }

    public String getOwner_email() {
        return owner_email;
    }

    public void setOwner_email(String owner_email) {
        this.owner_email = owner_email;
    }

    public String getOwner_password() {
        return owner_password;
    }

    public void setOwner_password(String owner_password) {
        this.owner_password = owner_password;
    }

    public String getOwner_mobile() {
        return owner_mobile;
    }

    public void setOwner_mobile(String owner_mobile) {
        this.owner_mobile = owner_mobile;
    }

    public String getOwner_profileImage() {
        return owner_profileImage;
    }

    public void setOwner_profileImage(String owner_profileImage) {
        this.owner_profileImage = owner_profileImage;
    }

    @Override
    public String toString() {
        return "Owner{" +
                "owner_id=" + owner_id +
                ", owner_first_name='" + owner_first_name + '\'' +
                ", owner_last_name='" + owner_last_name + '\'' +
                ", owner_email='" + owner_email + '\'' +
                ", owner_password='" + owner_password + '\'' +
                ", owner_mobile='" + owner_mobile + '\'' +
                ", owner_profileImage='" + owner_profileImage + '\'' +
                '}';
    }
}

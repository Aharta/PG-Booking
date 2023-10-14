package com.murdock.unistay.utils;


import com.google.gson.JsonObject;
import com.murdock.unistay.entity.Booking;
import com.murdock.unistay.entity.User;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;

public interface API {
    String BASE_URL ="http://192.168.30.131:5000";

    @POST("/user/register")
    Call<JsonObject> registerUser(@Body User user);

    @POST("/user/userlogin")
    Call<JsonObject> loginUser(@Body User user);

    @GET("/user/viewpgbycity/{id}")
    Call<JsonObject> viewpgbycity(@Path("id") String id);

    @GET("/user/contactowner/{id}")
    Call<JsonObject> getOwner(@Path("id") String id);

    @POST("/user/bookpg")
    Call<JsonObject> bookpg(@Body Booking booking);

    @GET("/user/viewbookings/{id}")
    Call<JsonObject> getBooking(@Path("id") int id);

}

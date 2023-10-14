package com.murdock.unistay.activity;

import android.content.Context;
import android.content.Intent;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import com.bumptech.glide.Glide;
import com.google.gson.JsonObject;
import com.murdock.unistay.R;
import com.murdock.unistay.entity.Booking;
import com.murdock.unistay.entity.Owner;
import com.murdock.unistay.entity.Pg;
import com.murdock.unistay.entity.User;
import com.murdock.unistay.utils.API;
import com.murdock.unistay.utils.RetrofitClient;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class DetailsActivity extends AppCompatActivity implements View.OnClickListener{

    TextView textName, textRating, textAddress, textRent;
    ImageView imgDetails;
    Pg pg;
    Owner owner;
    Button btnContact, btnBook;
    AlertDialog.Builder builder;

    int user_id, owner_id, pg_id;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_details);

        textName = findViewById(R.id.textName);
        textRating = findViewById(R.id.textRating);
        textAddress = findViewById(R.id.textAddress);
        textRent = findViewById(R.id.textRent);
        imgDetails = findViewById(R.id.imgDetails);

        btnContact = findViewById(R.id.btnContact);
        btnBook = findViewById(R.id.btnBook);

        btnContact.setOnClickListener(this);
        btnBook.setOnClickListener(this);


        pg = (Pg) getIntent().getSerializableExtra("pg");

        owner_id = pg.getOwner_id();
        pg_id = pg.getPg_id();
        Toast.makeText(this, "owner"+owner_id+"pg"+pg_id, Toast.LENGTH_SHORT).show();
        getPgDetails();
    }

    private void showSuccessDialog() {

            AlertDialog.Builder builder = new AlertDialog.Builder(DetailsActivity.this);
            View view = LayoutInflater.from(DetailsActivity.this).inflate(
                    R.layout.activity_alert,
                    (LinearLayout) findViewById(R.id.layoutDialogContainer)
            );
            builder.setView(view);


            final AlertDialog alertDialog = builder.create();

            view.findViewById(R.id.buttonAction).setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    alertDialog.dismiss();
                    startActivity(new Intent(DetailsActivity.this, MainActivity.class));
                }
            });

            if (alertDialog.getWindow() != null){
                alertDialog.getWindow().setBackgroundDrawable(new ColorDrawable(0));
            }
            alertDialog.show();
    }

    private void getPgDetails(){

        Glide.with(this).load(API.BASE_URL+"/"+pg.getPg_Image()).into(imgDetails);
        textName.setText("Name: "+pg.getPg_name());
        textRating.setText("Rating: 4.0");
        textAddress.setText("Address: "+pg.getPg_address());
        textRent.setText("Rent: "+pg.getPg_rent());
    }

    @Override
    public void onClick(View v) {
        if(v.getId() == R.id.btnContact){
            Intent intent = new Intent(DetailsActivity.this, ContactOwnerActivity.class);
            intent.putExtra("owner_id",owner_id);
            startActivity(intent);
            //startActivity(new Intent(this, ContactOwnerActivity.class));
        }
        if(v.getId() == R.id.btnBook){
            User user = new User();

            user_id = getSharedPreferences("unistay", Context.MODE_PRIVATE).getInt("user_id",0);
            owner_id = pg.getOwner_id();
            pg_id = pg.getPg_id();
            Booking booking = new Booking();
            booking.setPg_id(pg_id);
            booking.setOwner_id(owner_id);
            booking.setUser_id(user_id);
            Toast.makeText(this, ""+owner_id+pg_id, Toast.LENGTH_SHORT).show();
            RetrofitClient.getInstance().getApi().bookpg(booking).enqueue(new Callback<JsonObject>() {
                @Override
                public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                    Toast.makeText(DetailsActivity.this, ""+booking, Toast.LENGTH_SHORT).show();

                    showSuccessDialog();


                    //startActivity(new Intent(DetailsActivity.this, AlertActivity.class));
                }



                @Override
                public void onFailure(Call<JsonObject> call, Throwable t) {
                    Toast.makeText(DetailsActivity.this, "inside failure", Toast.LENGTH_SHORT).show();
                }
            });
        }
    }
}
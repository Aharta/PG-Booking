package com.murdock.unistay.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.bumptech.glide.Glide;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.murdock.unistay.R;
import com.murdock.unistay.entity.Owner;
import com.murdock.unistay.entity.Pg;
import com.murdock.unistay.utils.API;
import com.murdock.unistay.utils.RetrofitClient;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ContactOwnerActivity extends AppCompatActivity {

    TextView textName, textEmail, textMobile;
    ImageView imageView2;
    int owner_id;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_contact_owner);

        textName = findViewById(R.id.textName);
        textEmail = findViewById(R.id.textEmail);
        textMobile = findViewById(R.id.textMobile);
        imageView2 = findViewById(R.id.imageview2);

        Intent intent = getIntent();
        int owner_id = intent.getIntExtra("owner_id",0);
        Toast.makeText(this, ""+owner_id, Toast.LENGTH_SHORT).show();

        getOwnerDetails();
    }

    private void getOwnerDetails(){
        Intent intent = getIntent();
        int owner_id = intent.getIntExtra("owner_id",0);
        RetrofitClient.getInstance().getApi().getOwner(String.valueOf(owner_id)).enqueue(new Callback<JsonObject>() {
            @Override
            public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                JsonArray jsonArray = response.body().getAsJsonObject().get("data").getAsJsonArray();
                for(JsonElement element: jsonArray){
                    String name = element.getAsJsonObject().get("owner_first_name").getAsString();
                    String email = element.getAsJsonObject().get("owner_email").getAsString();
                    String mobile = element.getAsJsonObject().get("owner_mobile").getAsString();
                    String image = element.getAsJsonObject().get("owner_profileImage").getAsString();

                    textName.setText(name);
                    textEmail.setText(email);
                    textMobile.setText(mobile);


                    Toast.makeText(ContactOwnerActivity.this, ""+name, Toast.LENGTH_SHORT).show();
                }


//                JsonObject object= jsonArray.get(0).getAsJsonObject();
//                Toast.makeText(ContactOwnerActivity.this, ""+object.get("owner_email").getAsString(), Toast.LENGTH_SHORT).show();


            }

            @Override
            public void onFailure(Call<JsonObject> call, Throwable t) {
                Toast.makeText(ContactOwnerActivity.this, "inside Failure", Toast.LENGTH_SHORT).show();
            }
        });


    }
}
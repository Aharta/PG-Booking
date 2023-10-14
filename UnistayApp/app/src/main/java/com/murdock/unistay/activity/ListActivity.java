package com.murdock.unistay.activity;


import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;
import android.widget.Toast;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.murdock.unistay.R;
import com.murdock.unistay.adapter.PgListAdapter;
import com.murdock.unistay.entity.Pg;
import com.murdock.unistay.utils.RetrofitClient;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ListActivity extends AppCompatActivity {
    //in this file we will connect it with recycler view and populate it with data coming
    //from retrofit object which we will write here
    //Retrofit code will write in this file

    TextView textView, textChange;
    RecyclerView recyclerView;
    PgListAdapter pgListAdapter;
    List<Pg> pgList;
    String name;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_list);

        recyclerView = findViewById(R.id.recyclerView);
        pgList = new ArrayList<>();
        pgListAdapter = new PgListAdapter(this,pgList);
        recyclerView.setAdapter(pgListAdapter);
        recyclerView.setLayoutManager(new GridLayoutManager(this,1));


        textView = findViewById(R.id.textView);
        textChange = findViewById(R.id.textChange);
        Intent intent = getIntent();
        name = intent.getStringExtra("pg_name");
        textChange.setText(name);
        getAllPg();
    }

    private void getAllPg(){

        RetrofitClient.getInstance().getApi().viewpgbycity(name).enqueue(new Callback<JsonObject>() {
            @Override
            public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                    if(response.body().getAsJsonObject().get("status").getAsString().equals("success")){
                        Toast.makeText(ListActivity.this, "Data Got", Toast.LENGTH_SHORT).show();
                        JsonArray jsonArray = response.body().getAsJsonObject().get("data").getAsJsonArray();
                        for (JsonElement element :jsonArray) {
                            Pg pg = new Pg();
                            pg.setPg_id(element.getAsJsonObject().get("pg_id").getAsInt());
                            pg.setPg_Image(element.getAsJsonObject().get("pg_Image").getAsString());
                            pg.setPg_name(element.getAsJsonObject().get("pg_name").getAsString());
                            pg.setPg_type(element.getAsJsonObject().get("pg_type").getAsString());
                            pg.setPg_city(element.getAsJsonObject().get("pg_city").getAsString());
                            pg.setPg_isVacaent(element.getAsJsonObject().get("pg_isVacaent").getAsString());
                            pg.setPg_rent(element.getAsJsonObject().get("pg_rent").getAsString());
                            pg.setPg_address(element.getAsJsonObject().get("pg_address").getAsString());
                            pg.setPg_foodType(element.getAsJsonObject().get("pg_foodType").getAsString());
                            // pg.setPg_rating(element.getAsJsonObject().get("pg_rating").getAsString());
                            pg.setOwner_id(element.getAsJsonObject().get("owner_id").getAsInt());

                            getSharedPreferences("unistay",MODE_PRIVATE).edit()
                                    .putInt("owner_id",element.getAsJsonObject().get("owner_id").getAsInt())
                                    .putInt("pg_id",element.getAsJsonObject().get("pg_id").getAsInt()).apply();
                            pgList.add(pg);
                        }
                        pgListAdapter.notifyDataSetChanged();
                    }

            }

            @Override
            public void onFailure(Call<JsonObject> call, Throwable t) {
                Toast.makeText(ListActivity.this, "On Failure", Toast.LENGTH_SHORT).show();
            }
        });
    }
}
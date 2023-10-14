package com.murdock.unistay.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.widget.TextView;
import android.widget.Toast;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.murdock.unistay.R;
import com.murdock.unistay.adapter.BookingListAdapter;
import com.murdock.unistay.adapter.PgListAdapter;
import com.murdock.unistay.entity.Pg;
import com.murdock.unistay.utils.RetrofitClient;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ShowBookingActivity extends AppCompatActivity {

    TextView textChange;
    RecyclerView recyclerView;

    List<Pg> pgList;
    BookingListAdapter bookingListAdapter;

    int id;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_show_booking);

        textChange = findViewById(R.id.textChange);
        recyclerView = findViewById(R.id.recyclerView);

        id = getSharedPreferences("unistay", MODE_PRIVATE).getInt("user_id",0);

        recyclerView = findViewById(R.id.recyclerView);
        pgList = new ArrayList<>();
        bookingListAdapter = new BookingListAdapter(this,pgList);
        recyclerView.setAdapter(bookingListAdapter);
        recyclerView.setLayoutManager(new GridLayoutManager(this,1));
        getAllBookings();
    }

    private void getAllBookings(){

        RetrofitClient.getInstance().getApi().getBooking(id).enqueue(new Callback<JsonObject>() {
            @Override
            public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                if(response.body().getAsJsonObject().get("status").getAsString().equals("success")){
                    JsonArray jsonArray = response.body().getAsJsonObject().get("data").getAsJsonArray();
                    for (JsonElement element :jsonArray) {
                        Toast.makeText(ShowBookingActivity.this, "Inside for loop", Toast.LENGTH_SHORT).show();

                        Pg pg = new Pg();
                        pg.setPg_Image(element.getAsJsonObject().get("pg_Image").getAsString());
                        pg.setPg_name(element.getAsJsonObject().get("pg_name").getAsString());
                        pg.setPg_city(element.getAsJsonObject().get("pg_city").getAsString());
                        pg.setPg_rent(element.getAsJsonObject().get("pg_rent").getAsString());
                        pgList.add(pg);
                    }
                    bookingListAdapter.notifyDataSetChanged();
                }

            }

            @Override
            public void onFailure(Call<JsonObject> call, Throwable t) {
                Toast.makeText(ShowBookingActivity.this, "On Failure", Toast.LENGTH_SHORT).show();
            }
        });
    }
}
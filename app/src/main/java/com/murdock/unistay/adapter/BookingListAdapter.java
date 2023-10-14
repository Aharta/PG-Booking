package com.murdock.unistay.adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.murdock.unistay.R;
import com.murdock.unistay.entity.Pg;
import com.murdock.unistay.utils.API;

import java.util.List;

public class BookingListAdapter extends RecyclerView.Adapter<BookingListAdapter.MyViewHolder> {

    Context context;
    List<Pg> pgList;

    public BookingListAdapter(Context context, List<Pg> pgList) {
        this.context = context;
        this.pgList = pgList;
    }

    @NonNull
    @Override
    public BookingListAdapter.MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view= LayoutInflater.from(context).inflate(R.layout.booking_list,null);
        return new BookingListAdapter.MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull BookingListAdapter.MyViewHolder holder, int position) {
        Pg pg = pgList.get(position);
        holder.textName.setText("Name: "+pg.getPg_name());
        holder.textAddress.setText("Address: "+ pg.getPg_city());
        Glide.with(context).load(API.BASE_URL+"/"+pg.getPg_Image()).into(holder.imgRoom);

    }

    @Override
    public int getItemCount() {
        return pgList.size();
    }

    public class MyViewHolder extends RecyclerView.ViewHolder{

        ImageView imgRoom;
        TextView textName, textAddress;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            imgRoom=itemView.findViewById(R.id.imgRoom);
            textName=itemView.findViewById(R.id.textName);
            textAddress=itemView.findViewById(R.id.textAddress);

        }
    }
}

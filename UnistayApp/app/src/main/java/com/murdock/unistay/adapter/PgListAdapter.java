package com.murdock.unistay.adapter;


import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.murdock.unistay.R;
import com.murdock.unistay.activity.DetailsActivity;
import com.murdock.unistay.entity.Pg;
import com.murdock.unistay.utils.API;

import java.util.List;

public class PgListAdapter extends RecyclerView.Adapter<PgListAdapter.MyViewHolder> {

    Context context;
    List<Pg> pgList;

    public PgListAdapter(Context context, List<Pg> pgList) {
        this.context = context;
        this.pgList = pgList;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view=LayoutInflater.from(context).inflate(R.layout.pg_list,null);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull PgListAdapter.MyViewHolder holder, int position) {
        Pg pg = pgList.get(position);
        holder.textName.setText("Name: "+pg.getPg_name());
        holder.textAddress.setText("Address: "+ pg.getPg_city());
        holder.textRent.setText("₹"+pg.getPg_rent());
        Glide.with(context).load(API.BASE_URL+"/"+pg.getPg_Image()).into(holder.imgRoom);
    }

    @Override
    public int getItemCount() {
        return pgList.size();
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {
        ImageView imgRoom;
        TextView textName,textAddress,textRent;
        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            imgRoom=itemView.findViewById(R.id.imgRoom);
            textName=itemView.findViewById(R.id.textName);
            textAddress=itemView.findViewById(R.id.textAddress);
            textRent= itemView.findViewById(R.id.textRent);

            itemView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    Intent intent = new Intent(context, DetailsActivity.class);
                    intent.putExtra("pg",pgList.get(getAdapterPosition()));
                    context.startActivity(intent);
                }
            });
        }
    }
}

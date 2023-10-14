package com.murdock.unistay.fragment;

import android.content.Intent;
import android.os.Bundle;

import androidx.activity.result.contract.ActivityResultContracts;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.Toast;

import com.murdock.unistay.R;
import com.murdock.unistay.activity.DetailsActivity;
import com.murdock.unistay.activity.ListActivity;
import com.murdock.unistay.activity.LoginActivity;
import com.murdock.unistay.activity.MainActivity;


public class MainFragment extends Fragment implements View.OnClickListener{

    ImageButton btnPune, btnMumbai, btnBanglore, btnHyderabad;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_main, container, false);
    }


    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState){
        super.onViewCreated(view, savedInstanceState);

        btnPune = view.findViewById(R.id.btnPune);
        btnMumbai = view.findViewById(R.id.btnMumbai);
        btnBanglore = view.findViewById(R.id.btnBanglore);
        btnHyderabad = view.findViewById(R.id.btnHyderabad);

        btnPune.setOnClickListener(this);
        btnMumbai.setOnClickListener(this);
        btnBanglore.setOnClickListener(this);
        btnHyderabad.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        if(v.getId() == R.id.btnPune){
            Toast.makeText(getContext(), "Pune clicked", Toast.LENGTH_SHORT).show();
            Intent intent = new Intent(getContext(), ListActivity.class);
            intent.putExtra("pg_name","Pune");
            startActivity(intent);
        }
        if(v.getId() == R.id.btnMumbai){
            Toast.makeText(getContext(), "Mumbai clicked", Toast.LENGTH_SHORT).show();
            Intent intent = new Intent(getContext(), ListActivity.class);
            intent.putExtra("pg_name","Mumbai");
            startActivity(intent);
        }
        if(v.getId() == R.id.btnBanglore){
            Toast.makeText(getContext(), "Banglore clicked", Toast.LENGTH_SHORT).show();
            Intent intent = new Intent(getContext(), ListActivity.class);
            intent.putExtra("pg_name","Banglore");
            startActivity(intent);
        }
        if(v.getId() == R.id.btnHyderabad){
            Toast.makeText(getContext(), "Hyderabad clicked", Toast.LENGTH_SHORT).show();
            Intent intent = new Intent(getContext(), ListActivity.class);
            intent.putExtra("pg_name","Hyderabad");
            startActivity(intent);
        }
    }
}
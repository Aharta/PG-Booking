package com.murdock.unistay.fragment;

import static android.content.Context.MODE_PRIVATE;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.murdock.unistay.R;
import com.murdock.unistay.activity.LoginActivity;
import com.murdock.unistay.activity.ShowBookingActivity;
import com.murdock.unistay.utils.RetrofitClient;

public class ProfileFragment extends Fragment implements View.OnClickListener{

    TextView textName, textEmail, textMobile, tapLogout;
    Button tapBooking;
    int id;
    String user_first_name, user_email, user_mobile;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_profile, container, false);
    }

    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        textName = view.findViewById(R.id.textName);
        textEmail = view.findViewById(R.id.textEmail);
        textMobile = view.findViewById(R.id.textMobile);

        tapBooking = view.findViewById(R.id.tapBooking);
        tapLogout = view.findViewById(R.id.tapLogout);

        tapLogout.setOnClickListener(this);
        tapBooking.setOnClickListener(this);

        getProfileDetails();
    }

    private void getProfileDetails(){
        id = getContext().getSharedPreferences("unistay", MODE_PRIVATE).getInt("user_id",0);
        user_first_name = getContext().getSharedPreferences("unistay", MODE_PRIVATE).getString("user_first_name","NA");
        user_email = getContext().getSharedPreferences("unistay", MODE_PRIVATE).getString("user_email","NA");
        user_mobile = getContext().getSharedPreferences("unistay", MODE_PRIVATE).getString("user_mobile","NA");

        textName.setText("Name: "+user_first_name);
        textEmail.setText("Email: "+user_email);
        textMobile.setText("Mobile: "+user_mobile);

        Toast.makeText(getContext(), ""+id+user_first_name+user_email+user_mobile, Toast.LENGTH_SHORT).show();


    }

    @Override
    public void onClick(View v) {
        if(v.getId() == R.id.tapLogout){
            getContext().getSharedPreferences("unistay",MODE_PRIVATE).edit().putBoolean("login_status",false).apply();
            Toast.makeText(getContext(), "logout successful", Toast.LENGTH_SHORT).show();
            getActivity().finish();
        }
        if(v.getId() == R.id.tapBooking){
            startActivity(new Intent(getContext(), ShowBookingActivity.class));
        }
    }
}
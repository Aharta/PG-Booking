package com.murdock.unistay.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.murdock.unistay.R;

public class AlertActivity extends AppCompatActivity implements View.OnClickListener{

    Button buttonAction;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_alert);

        buttonAction = findViewById(R.id.buttonAction);

        buttonAction.setOnClickListener(this);

    }

    @Override
    public void onClick(View v) {
        if(v.getId() == R.id.buttonAction){
            startActivity(new Intent(AlertActivity.this, MainActivity.class));
        }
    }
}
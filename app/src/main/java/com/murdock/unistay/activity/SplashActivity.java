package com.murdock.unistay.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.view.WindowManager;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;

import com.murdock.unistay.R;

public class SplashActivity extends AppCompatActivity {

    Animation topAnimation, bottomAnimation, middleAnimation;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            getWindow().setFlags(WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS,
                    WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS
            );
        }

        topAnimation = AnimationUtils.loadAnimation(this,R.anim.slide_down);
        middleAnimation = AnimationUtils.loadAnimation(this,R.anim.fade_in);


        final ImageView image1 = findViewById(R.id.image1);
        final ImageView image2 = findViewById(R.id.image2);
        final ImageView image3 = findViewById(R.id.image3);
        final ImageView image4 = findViewById(R.id.image4);
        final ImageView image5 = findViewById(R.id.image5);
        final ImageView image6 = findViewById(R.id.image6);
        final ImageView logo = findViewById(R.id.logo);



        logo.setAnimation(middleAnimation);

        image1.setAnimation(topAnimation);
        image2.setAnimation(topAnimation);
        image3.setAnimation(topAnimation);

        image4.setAnimation(bottomAnimation);
        image5.setAnimation(bottomAnimation);
        image6.setAnimation(bottomAnimation);


        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                try {
                    Thread.sleep(2000);
                    if(getSharedPreferences("unistay",MODE_PRIVATE).getBoolean("login_status",false))
                        startActivity(new Intent(SplashActivity.this, MainActivity.class));
                    else
                        startActivity(new Intent(SplashActivity.this, LoginActivity.class));
                    finish();
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }
        }, 2500);

    }
}

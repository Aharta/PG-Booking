package com.murdock.unistay.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.murdock.unistay.R;
import com.murdock.unistay.entity.User;
import com.murdock.unistay.utils.RetrofitClient;

import org.json.JSONException;
import org.json.JSONObject;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class LoginActivity extends AppCompatActivity implements View.OnClickListener{
    EditText editEmail, editPassword;
    CheckBox checkRemember;
    Button buttonLogin;
    TextView tapRegister;

    JsonElement id;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        editEmail = findViewById(R.id.editEmail);
        editPassword = findViewById(R.id.editPassword);

        checkRemember = findViewById(R.id.checkRemember);

        buttonLogin = findViewById(R.id.buttonLogin);
        tapRegister = findViewById(R.id.tapRegister);

        buttonLogin.setOnClickListener(this);
        tapRegister.setOnClickListener(this);
    }




    @Override
    protected void onStart() {
        super.onStart();
        boolean b = getSharedPreferences("unistay",MODE_PRIVATE).getBoolean("login_status",false);
        if(b){
        startActivity(new Intent(LoginActivity.this, MainActivity.class));
        }
    }

    @Override
    public void onClick(View view) {
        if(view.getId()==R.id.buttonLogin){
            User user = new User();
            user.setUser_email(editEmail.getText().toString());
            user.setUser_password(editPassword.getText().toString());

            RetrofitClient.getInstance().getApi().loginUser(user).enqueue(new Callback<JsonObject>() {
                @Override
                public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {

                    JsonObject object = response.body().getAsJsonObject().get("data").getAsJsonObject();

                    if(object.get("isValid").equals(object.get("isValid"))){
                        Toast.makeText(LoginActivity.this,""+ object.get("user_id").getAsInt(), Toast.LENGTH_SHORT).show();
                        getSharedPreferences("unistay",MODE_PRIVATE).edit()
                               .putInt("user_id",object.get("user_id").getAsInt())
                                .putString("user_first_name",object.get("user_first_name").getAsString())
                                .putString("user_email",object.get("user_email").getAsString())
                                .putString("user_mobile",object.get("user_mobile").getAsString())
                                .apply();
                        if (checkRemember.isChecked()){
                            getSharedPreferences("unistay", MODE_PRIVATE).edit().putBoolean("login_status", true).apply();
                        }
                        Toast.makeText(LoginActivity.this, "Login Successful", Toast.LENGTH_SHORT).show();
                        startActivity(new Intent(LoginActivity.this, MainActivity.class));
                    }
                }

                @Override
                public void onFailure(Call<JsonObject> call, Throwable t) {
                    Toast.makeText(LoginActivity.this, "inside Failure", Toast.LENGTH_SHORT).show();
                }
            });

            //startActivity(new Intent(this, ListActivity.class));
        }

        if(view.getId()==R.id.tapRegister)
            startActivity(new Intent(this, RegisterActivity.class));
    }
}
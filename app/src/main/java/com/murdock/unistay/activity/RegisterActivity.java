package com.murdock.unistay.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.util.Patterns;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.google.gson.JsonObject;
import com.murdock.unistay.R;
import com.murdock.unistay.entity.User;
import com.murdock.unistay.utils.RetrofitClient;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class RegisterActivity extends AppCompatActivity implements View.OnClickListener{
    EditText editFirst,editLast,editEmail,editMobile,editPassword,editConfirmPass;
    Button buttonRegister;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        editFirst = findViewById(R.id.First);
        editLast = findViewById(R.id.Last);
        editEmail = findViewById(R.id.Email);
        editMobile = findViewById(R.id.Mobile);
        editPassword = findViewById(R.id.Password);
        editConfirmPass = findViewById(R.id.ConfirmPass);

        buttonRegister = findViewById(R.id.buttonRegister);

        buttonRegister.setOnClickListener(this);

    }

    private User validateUser(){
        User user = new User();

        String password = editPassword.getText().toString();
        String confirmPassword = editConfirmPass.getText().toString();
        if(password.equals(confirmPassword)){
            user.setUser_first_name(editFirst.getText().toString());
            user.setUser_last_name(editLast.getText().toString());
            user.setUser_email(editEmail.getText().toString());
            user.setUser_mobile(editMobile.getText().toString());
            user.setUser_password(password);
            //return user;
            if(!user.getUser_first_name().equals("")){
                if(!user.getUser_last_name().equals("")){
                    if(!user.getUser_email().equals("")){
                        if(!user.getUser_mobile().equals("")){
                            if(!user.getUser_password().equals("")){
                                return user;
                            }else
                                Toast.makeText(this, "Password Cannot be empty", Toast.LENGTH_SHORT).show();
                                editPassword.setError("Please Enter Password");
                        }else
                            Toast.makeText(this, "Mobile Number Cannot be empty", Toast.LENGTH_SHORT).show();
                            editMobile.setError("Mobile Number cannot be Empty!");
                    }else
                        Toast.makeText(this, "Email Cannot be empty", Toast.LENGTH_SHORT).show();
                        editEmail.setError("Enter Valid Email Address!");
                }else
                    Toast.makeText(this, "Last Name Cannot be empty", Toast.LENGTH_SHORT).show();
                    editLast.setError("Last Name cannot be Empty!");
            }else
                Toast.makeText(this, "First Name Cannot be empty", Toast.LENGTH_SHORT).show();
                editFirst.setError("First Name cannot be Empty!");
        }
        else {
            Toast.makeText(this, "passwords do not match", Toast.LENGTH_SHORT).show();
        }
        return null;
    }


    @Override
    public void onClick(View v) {
        if(v.getId() == R.id.buttonRegister){
            User user = validateUser();
            if(user!=null){
                RetrofitClient.getInstance().getApi().registerUser(user).enqueue(new Callback<JsonObject>() {
                    @Override
                    public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                        if(response.body().getAsJsonObject().get("status").getAsString().equals("success"))
                        {
                            Toast.makeText(RegisterActivity.this, "User Registered Successfully", Toast.LENGTH_SHORT).show();
                            finish();
                        }
                    }

                    @Override
                    public void onFailure(Call<JsonObject> call, Throwable t) {
                        Toast.makeText(RegisterActivity.this, "Something Went Wrong", Toast.LENGTH_SHORT).show();
                    }
                });
            }else{
                Toast.makeText(this, "All fields are Mandatory", Toast.LENGTH_SHORT).show();
            }
        }
    }

//    public void register() {
//        initialize();
//        if(!validate()){
//            Toast.makeText(this, "SignUp has Failed", Toast.LENGTH_SHORT).show();
//        }
//        else {
//            onSuccess();
//        }
//    }
//
//    public boolean validate(){
//        boolean valid = true;
//        if(First.isEmpty()){
//            editFirst.setError("First Name cannot be Empty!");
//            valid = false;
//        }
//        if(Last.isEmpty()){
//            editLast.setError("Last Name cannot be Empty!");
//            valid = false;
//        }
//        if(Email.isEmpty() || !Patterns.EMAIL_ADDRESS.matcher(Email).matches()){
//            editFirst.setError("Enter Valid Email Address!");
//            valid = false;
//        }
//        if(Mobile.isEmpty()){
//            editFirst.setError("Mobile Number cannot be Empty!");
//            valid = false;
//        }
//        if(Password.isEmpty()){
//            editFirst.setError("Please Enter Password");
//            valid = false;
//        }
//        if(ConfirmPass.isEmpty()){
//            editFirst.setError("Please Enter Password");
//            valid = false;
//        }
//        return  valid;
//    }
//
//    public void onSuccess(){
//
//    }
//
//    public void initialize(){
//        First = editFirst.getText().toString();
//        Last = editLast.getText().toString();
//        Email = editEmail.getText().toString();
//        Mobile = editMobile.getText().toString();
//        Password = editPassword.getText().toString();
//        ConfirmPass = editConfirmPass.getText().toString();
//    }
}
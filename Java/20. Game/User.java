package com.example;

public class User {
    private String name;
    private String email;
    private String password;
    private String phone;
    private String address;
    private String role;
    private String status;
    private String created_at;
    private String updated_at;

    public User(String name) {
        this.name = name;
    }

    public User(String name, String email, String password, String phone, String address, String role, String status, String created_at, String updated_at) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.role = role;
        this.status = status;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getPhone() {
        return phone;
    }

    public String getAddress() {
        return address;
    }

    public String getRole() {
        return role;
    }

    public String getStatus() {
        return status;
    }

    public String getCreated_at() {
        return created_at;
    }

    public String getUpdated_at() {
        return updated_at;
    }
}
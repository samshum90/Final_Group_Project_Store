package com.example.codeclan.groupProject.models;


import com.sun.istack.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.GeneratedValue;
import java.util.ArrayList;
import java.util.Collection;

public class User implements UserDetails {

    public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();

    private @Id @GeneratedValue
    String id;

    private Boolean admin;
    @NotNull
    private String userName;
    @NotNull
//    @JsonIgnore
    private String password;
    @NotNull
    private String email;
    private Address address;
    private ArrayList<String> orders;

    public void setPassword(String password) {
        this.password = PASSWORD_ENCODER.encode(password);
    }

    public User() {
    }

    public User(Boolean admin, String userName, String password, String email, Address address) {
        this.admin = admin;
        this.userName = userName;
        this.setPassword(password);
        this.email = email;
        this.address = address;
        this.orders = new ArrayList<>();
    }

    @Override
    public String toString() {
        return String.format(
                "User[id=%s, admin='%s', userName='%s', password='%s', email='%s', address='%s', orders='%s']",
                id, admin, userName, password, email, address, orders);
    }

    public String getId() {
        return id;
    }

    public Boolean getAdmin() {
        return admin;
    }

    public void setAdmin(Boolean admin) {
        this.admin = admin;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return this.userName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public ArrayList<String> getOrders() {
        return orders;
    }

    public void addOrder(String newOrder){
        this.orders.add(newOrder);
    }

    public void setId(String id) {
        this.id = id;
    }
}

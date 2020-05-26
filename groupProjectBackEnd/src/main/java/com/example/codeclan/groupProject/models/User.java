package com.example.codeclan.groupProject.models;

import net.minidev.json.annotate.JsonIgnore;
import org.springframework.data.annotation.Id;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.GeneratedValue;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class User implements UserDetails {

    public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();

    private @Id @GeneratedValue
    String id;

    private Boolean admin;
    @NotNull
    private String username;
    @NotNull
    @JsonIgnore
    private String password;
    @NotNull
    private String email;
    private Address address;
    private ArrayList<String> orders;
    private Collection<? extends GrantedAuthority> authorities;

    public void setPassword(String password) {
        this.password = PASSWORD_ENCODER.encode(password);
    }

    public User() {
    }

    public User(Boolean admin, String username, String password, String email, Address address) {
        this.admin = admin;
        this.username = username;
        this.setPassword(password);
        this.email = email;
        this.address = address;
        this.orders = new ArrayList<>();
        List<SimpleGrantedAuthority> authorities = new ArrayList<SimpleGrantedAuthority>();
        authorities.add(new SimpleGrantedAuthority("user"));

        this.authorities = authorities;
    }

    @Override
    public String toString() {
        return String.format(
                "User[id=%s, admin='%s', username='%s', password='%s', email='%s', address='%s', orders='%s']",
                id, admin, username, password, email, address, orders);
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

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return this.username;
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

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
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

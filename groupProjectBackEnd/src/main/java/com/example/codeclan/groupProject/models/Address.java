package com.example.codeclan.groupProject.models;

public class Address {


    private String title;
    private String firstName;
    private String lastName;
    private String firstLine;
    private String secondLine;
    private String townCity;
    private String county;
    private String postCode;

    public Address( String title, String firstName, String lastName, String firstLine, String secondLine, String townCity, String county, String postCode) {

        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstLine = firstLine;
        this.secondLine = secondLine;
        this.townCity = townCity;
        this.county = county;
        this.postCode = postCode;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstLine() {
        return firstLine;
    }

    public void setFirstLine(String firstLine) {
        this.firstLine = firstLine;
    }

    public String getSecondLine() {
        return secondLine;
    }

    public void setSecondLine(String secondLine) {
        this.secondLine = secondLine;
    }

    public String getTownCity() {
        return townCity;
    }

    public void setTownCity(String townCity) {
        this.townCity = townCity;
    }

    public String getCounty() {
        return county;
    }

    public void setCounty(String county) {
        this.county = county;
    }

    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }
}

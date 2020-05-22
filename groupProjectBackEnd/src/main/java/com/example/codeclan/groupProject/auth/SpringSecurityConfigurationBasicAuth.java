package com.example.codeclan.groupProject.auth;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter{

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors();
        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.GET ,"/items").permitAll()
                .antMatchers(HttpMethod.POST,"/items").permitAll()
                .antMatchers(HttpMethod.PUT,"/items").permitAll()
                .antMatchers(HttpMethod.DELETE,"/items").permitAll()
                .antMatchers("/items/*").permitAll()
                .anyRequest().authenticated()
                .and()
                .httpBasic();
        http.cors();
    }
}
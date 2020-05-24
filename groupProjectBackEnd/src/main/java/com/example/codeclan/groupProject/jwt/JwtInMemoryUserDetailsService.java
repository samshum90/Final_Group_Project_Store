package com.example.codeclan.groupProject.jwt;

import com.example.codeclan.groupProject.models.User;
import com.example.codeclan.groupProject.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

//  private List<JwtUserDetails> inMemoryUserList = new ArrayList<>();
  @Autowired
  UserRepository userRepository;




  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = userRepository.findByUserName(username).get(0);

    if (user.getId() == null) {
      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
    }

    return user;
  }

}



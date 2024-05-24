package com.andyg.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    private long id;
    private String userName;
    private String password;
    private String name;
    private String lastName;
    private String email;
    private int phone;

}

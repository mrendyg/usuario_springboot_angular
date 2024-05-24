package com.andyg.backend.service;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserRequest {
    private long id;
    private String userName;
    private String password;
    private String name;
    private String lastName;
    private String email;
    private int phone;
}

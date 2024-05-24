package com.andyg.backend.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;


@Data
@Builder
@Getter
@Setter
@RequiredArgsConstructor
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users", schema = "public")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NonNull
    @Column
    private String userName;

    @NonNull
    @Column
    private String password;

    @NonNull
    @Column
    private String name;

    @NonNull
    @Column
    private String lastName;

    @NonNull
    @Column
    private String email;
    @NonNull
    @Column
    private int phone;

    @Column
    private LocalDateTime createUser;

    @Enumerated(EnumType.STRING)
    Role role;

}

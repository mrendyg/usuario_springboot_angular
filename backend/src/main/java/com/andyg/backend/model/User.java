package com.andyg.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;


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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
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



}

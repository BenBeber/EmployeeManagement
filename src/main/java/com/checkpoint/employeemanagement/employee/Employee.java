package com.checkpoint.employeemanagement.employee;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "employees")
public class Employee {

    @Setter(AccessLevel.NONE)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;

    @ToString.Include
    @NotBlank
    private String firstName;

    @ToString.Include
    @NotBlank
    @NotNull
    private String lastName;

    @Email
    @NotNull
    @NotBlank
    @Column(nullable = false, unique = true)
    private String email;

}

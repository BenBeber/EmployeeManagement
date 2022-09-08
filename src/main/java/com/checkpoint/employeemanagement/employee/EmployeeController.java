package com.checkpoint.employeemanagement.employee;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/employees")
public class EmployeeController {

    private final EmployeeService service;

    public EmployeeController(EmployeeService service) {
        this.service = service;
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return service.getAllEmployees();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getById(@PathVariable long id) {
        Employee employee = service.getEmployeeById(id);
        return new ResponseEntity<>(employee,HttpStatus.FOUND);
    }

    @GetMapping
    public ResponseEntity<Employee> getEmployeeByEmail(@RequestParam(name = "email") String email) {
        Employee employee = service.getEmployeeByEmail(email);
        return new ResponseEntity<>(employee,HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Employee> addNewEmployee(@Valid @RequestBody Employee employee) {
        Employee newEmployee = service.addEmployee(employee);
        return new ResponseEntity<>(newEmployee,HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id) {
        service.deleteEmployeeById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        Employee updateEmployee = service.updateEmployeeInfo(employee);
        return new ResponseEntity<>(updateEmployee,HttpStatus.OK);
    }

}

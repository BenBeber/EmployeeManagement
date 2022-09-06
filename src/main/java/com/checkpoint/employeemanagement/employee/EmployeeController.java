package com.checkpoint.employeemanagement.employee;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(path ="/")
public class EmployeeController {
    private final EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }


    @GetMapping(path = "/")
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping(path = "/{email}")
    public List<Employee> getEmployeeByEmail(String email) {
        return employeeService.getEmployeeByEmail(email);
    }

    @GetMapping(path =   "/{id}")
    public Employee getEmployeeById(@PathVariable (value = "id") long id) {
        return employeeService.getEmployeeById(id);
    }

    @PostMapping
    public Employee addEmployee(@ModelAttribute("employee") Employee employee) {
        return employeeService.addEmployee(employee);
    }


}

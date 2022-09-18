package com.checkpoint.employeemanagement.employee;

import com.checkpoint.employeemanagement.employee.exception.EmailIsTakenException;
import com.checkpoint.employeemanagement.employee.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
     final EmployeeRepository employeeRepository;
@Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee getEmployeeByEmail(String email) {
        return  employeeRepository.getEmployeeByEmailIsIgnoreCase(email)
                .orElseThrow(()->new UserNotFoundException("Employee with "+email+" Notfound"));
    }

    // TODO: 08/09/2022 add custom exception
    public void deleteEmployeeById(Long id) {
        if (!employeeRepository.existsById(id))
            throw new UserNotFoundException("Employee with id "+id+" not exist");
        employeeRepository.deleteById(id);
    }

    // TODO: 08/09/2022 add custom exception
    public Employee addEmployee(Employee employee) {
        employeeRepository.getEmployeeByEmailIsIgnoreCase(employee.getEmail())
                .ifPresent(s-> {throw new EmailIsTakenException("Email "+employee.getEmail()+" is taken");});
        return employeeRepository.save(employee);
    }

    // TODO: 08/09/2022 adding Custom exception
    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException("Employee with id "+id+" not found"));
    }

    public Employee updateEmployeeInfo(Long id,Employee employee) {
        if (employeeRepository.findById(employee.getId()).isEmpty())
            throw new UserNotFoundException("msg");
        return employeeRepository.save(employee);
    }
}

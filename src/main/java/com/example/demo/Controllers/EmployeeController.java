package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DAO.EmployeeDAO;
import com.example.demo.Models.EmployeeModel;

import java.util.List;


@RestController
public class EmployeeController {
    
    @Autowired
    private EmployeeDAO employeeDAO;
    
    

    @RequestMapping(value = "delete/{id}", method = RequestMethod.DELETE)
    public void eliminar(@PathVariable int id){
        employeeDAO.eliminar(id);
    }

    @RequestMapping(value = "post", method = RequestMethod.POST)
    public void registrarEmpleado(@RequestBody EmployeeModel empleado){
        employeeDAO.registrar(empleado);
        
        }

    @RequestMapping(value = "get", method = RequestMethod.GET)
    public List<EmployeeModel> traerLista(){
        
        return employeeDAO.traerLista();
        }

        @RequestMapping(value = "get/{dato}", method = RequestMethod.GET)
    public List<EmployeeModel> traerListaFiltro(@PathVariable String dato){
        
        return employeeDAO.traerListaFiltro(dato);
        }
        
    

    
}

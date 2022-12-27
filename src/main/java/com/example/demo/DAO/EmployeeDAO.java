package com.example.demo.DAO;

import java.util.List;

import com.example.demo.Models.EmployeeModel;

public interface EmployeeDAO {

    public List<EmployeeModel> traerLista();

    public void eliminar(int id);

    public void registrar(EmployeeModel empleado);

    public List<EmployeeModel> traerListaFiltro(String dato);
}

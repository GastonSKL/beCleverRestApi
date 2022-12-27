package com.example.demo.DAO;


import java.util.ArrayList;
import java.util.List;



import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.example.demo.Models.EmployeeModel;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Repository
@Transactional
public class EmployeeDAOImp implements EmployeeDAO{

    @PersistenceContext
    private EntityManager entitymanager;

    

    @Override
    public List<EmployeeModel> traerLista() {
        String query = "FROM EmployeeModel";
        return entitymanager.createQuery(query).getResultList();
        
    }



    @Override
    public void eliminar(int id) {
        EmployeeModel employee = entitymanager.find(EmployeeModel.class,id);
        entitymanager.remove(employee);
        
    }



    @Override
    public void registrar(EmployeeModel empleado) {
        entitymanager.merge(empleado);
    }



    @Override
    public List<EmployeeModel> traerListaFiltro(String dato) {
        String query = "FROM EmployeeModel WHERE name = :dato OR lastName = :dato";
        List<EmployeeModel> result = entitymanager.createQuery(query).setParameter("dato", dato).getResultList();
        return  result;

        
        
    }

    

    
    
}

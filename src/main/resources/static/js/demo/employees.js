// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarEmpleados();
  $('#employees').DataTable();
});

let newEmployees = [];
const cargarEmpleados = async() =>{
 

    const request = await fetch('get', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const employees = await request.json();
  
    console.log(employees);

    employees.forEach(employee => {
      let botonEliminar = `<a href="#" onClick="eliminarEmpleado(${employee.id})" class="btn btn-sm btn-danger rounded-circle">
                              <i class="fas fa-trash"></i>
                          </a>`
      let setEmployee = `
<tr>
    <td>${employee.id}</td>  
    <td>${employee.name}</td>
    <td>${employee.lastName}</td>
    <td>${employee.location}</td>
    <td>${employee.sex}</td>
    <td>${employee.state}</td>
    <td>${employee.date}</td>
    <td>
        ${botonEliminar}
    </td>
</tr>`;
document.querySelector('#employees tbody').innerHTML += setEmployee;
    });

}


const cargarEmpleadosFiltro = async(dato) =>{
 

  const request = await fetch('get', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  const employees = await request.json();

  let newEmployees = Array.from(employees);
  
  let filteredEmployees = newEmployees.filter(employ => employ.name.toLowerCase().includes(dato.toLowerCase()));
  
  console.log(filteredEmployees);
  

  

  document.querySelector('#employees tbody').innerHTML = null;

  filteredEmployees.forEach(employee => {
    let botonEliminar = `<a href="#" onClick="eliminarEmpleado(${employee.id})" class="btn btn-danger btn-circle btn-sm">
                            <i class="fas fa-trash"></i>
                        </a>`
    let setEmployee = `
<tr>
  <td>${employee.id}</td>
  <td>${employee.name}</td>
  <td>${employee.lastName}</td>
  <td>${employee.location}</td>
  <td>${employee.sex}</td>
  <td>${employee.state}</td>
  <td>${employee.date}</td>
  <td>
      ${botonEliminar}
  </td>
</tr>`;
document.querySelector('#employees tbody').innerHTML += setEmployee;
  });


}

document.querySelector('#filtro').addEventListener('keyup',e=>{
  console.log(e.target.value)
  cargarEmpleadosFiltro(e.target.value);
})

const cargarEmpleadosFiltroFecha = async(startDate, endDate) =>{
 

  const request = await fetch('get', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  const employees = await request.json();

  let newEmployees = Array.from(employees);
  
  let filteredEmployees = newEmployees.filter(employ => employ.date >= startDate && employ.date <= endDate);
  
  console.log(filteredEmployees);
  

  

  document.querySelector('#employees tbody').innerHTML = null;

  filteredEmployees.forEach(employee => {
    let botonEliminar = `<a href="#" onClick="eliminarEmpleado(${employee.id})" class="btn btn-danger btn-circle btn-sm">
                            <i class="fas fa-trash"></i>
                        </a>`
    let setEmployee = `
<tr>
  <td>${employee.id}</td>
  <td>${employee.name}</td>
  <td>${employee.lastName}</td>
  <td>${employee.location}</td>
  <td>${employee.sex}</td>
  <td>${employee.state}</td>
  <td>${employee.date}</td>
  <td>
      ${botonEliminar}
  </td>
</tr>`;
document.querySelector('#employees tbody').innerHTML += setEmployee;
  });


}

const btnFiltrar = document.querySelector('#Filtrar');

btnFiltrar.addEventListener('click', ()=>{

    const startDate = document.querySelector('#from').value;
    const endDate = document.querySelector('#to').value;
    console.log("Fecha de inicio " + startDate);
    console.log("Fecha de final "+endDate)
    cargarEmpleadosFiltroFecha(startDate, endDate);
  
})

const eliminarEmpleado = async(id) =>{
  const request = await fetch('get/' + id, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  location.reload();
}



const registrarEmpleado = async() =>{
   
  let datos = {};
  datos.name = document.querySelector('#name').value;
  datos.lastName= document.querySelector('#last-name').value;
  datos.location = document.querySelector('#location').value;
  if(document.querySelector('#sex').value.toString().toLowerCase()  == "masculino"){
    datos.sex = true;
  }else if(document.querySelector('#sex').value.toString().toLowerCase()  == "femenino"){
    datos.sex = false;
  }
  
  datos.state = true;
  datos.date = document.querySelector('#date').value;

  const request = await fetch('get', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  

  location.reload();

}


const actualizarEmpleado = async() =>{
  
  let data = {};
  data.id = document.querySelector('#IdSelector').value;
  data.name = document.querySelector('#nameAct').value;
  data.lastName= document.querySelector('#last-nameAct').value;
  data.location = document.querySelector('#locationAct').value;
  if(document.querySelector('#sexAct').value.toString().toLowerCase()  == "masculino"){
    data.sex = true;
  }else if(document.querySelector('#sexAct').value.toString().toLowerCase()  == "femenino"){
    data.sex = false;
  }
  if(document.querySelector('#stateAct').value.toString().toLowerCase() == "alta"){
    data.state = true;
  }else if(document.querySelector('#stateAct').value.toString().toLowerCase() == "baja"){
    data.state = false;
  }
  data.date = document.querySelector('#dateAct').value;
  console.log(data);

  const request = await fetch('get', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });


}

const btnBaja = document.querySelector('#Actualizar');
btnBaja.addEventListener('click', ()=>{
  
  actualizarEmpleado();
})


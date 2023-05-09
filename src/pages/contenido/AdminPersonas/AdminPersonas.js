import React, { useEffect, useState } from "react";
import Axios from "../../../services/Axios";
import { Link, useNavigate } from "react-router-dom";

export function AdminPersonas() {
  const [personas, setPersonas] = useState([]);

  //usar la navegación por defecto del react-router-dom
  const navigate = new useNavigate();

  const consultarPersonas = async () => {
    const consultar = await Axios.get("/personas");
    console.log(consultar.data);
    setPersonas(consultar.data);
  };

  const deletePersonas = async (id) => {
    if (window.confirm("¿Esta seguro de eliminar a la persona?")) {
      const eliminar = await Axios.delete("/persona/" + id);
    }
    consultarPersonas();
  };

  useEffect(() => {
    consultarPersonas();
  }, []);

  return (
    <div className="container-fluid">
      <div>
        <h1 align="center">Administración de locatarios</h1>
      </div>

      <div class="container-fluid h-100">
        <div class="row w-100 align-items-center">
          <div class="col text-center">
            <button type="button" class="btn btn-primary">
              <Link class="dropdown-item" to="/formpersona">
                Agregar personas
              </Link>
            </button>
          </div>
        </div>
        <br></br>
        <div class="row row-cols-12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">CURP</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Sexo</th>
                <th scope="col">Telefono</th>
                <th scope="col">Editar</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {personas.map((persona) => {
                return (
                  <tr>
                    <th scope="row">1</th>
                    <td>{persona.curp}</td>
                    <td>{persona.nombre}</td>
                    <td>{persona.apellidos}</td>
                    <td>{persona.sexo}</td>
                    <td>{persona.telefono}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-info"
                        onClick={() => navigate(`/formpersona/${persona._id}`)}
                      >
                        Editar
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => deletePersonas(persona._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

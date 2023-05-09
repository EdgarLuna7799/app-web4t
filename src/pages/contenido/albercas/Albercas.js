import React from "react";
//import Axios from '../../../services/Axios'
//import {useParams} from 'react-router-dom'
import albercauno from "../../img/albercauno.jpg";
import alberca2 from "../../img/alberca2.jpg";
import alberca3 from "../../img/alberca3.jpg";
import alberca4 from "../../img/alberca4.jpg";

export function Albercas() {
  return (
    <div>
      <h1 align="center">Nuestras Albercas</h1>

      <div class="container-fluid h-100">
        <div class="row w-100 align-items-center">
          <div class="col text-center">
            <a class="btn btn-primary" href="/persona" role="button">
              Administración
            </a>
          </div>
        </div>
      </div>

      <br></br>

      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img src={albercauno} class="card-img-top" height={300} alt="..." />
            <div class="card-body">
              <h5 class="card-title">Alberca 1</h5>
              <p class="card-text">
                Disfruta de nuestro servicio de albercada para fiestas o
                cualquier evento que te propongas para mas informacion Nro:
                934-100-00-00.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={alberca2} class="card-img-top" height={300} alt="..." />
            <div class="card-body">
              <h5 class="card-title">Alberca 2</h5>
              <p class="card-text">
                Disfruta de nuestro servicio de albercada para fiestas o
                cualquier evento que te propongas para mas informacion Nro:
                934-100-00-00.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={alberca3} class="card-img-top" height={300} alt="..." />
            <div class="card-body">
              <h5 class="card-title">Alberca 3</h5>
              <p class="card-text">
                Disfruta de nuestro servicio de albercada para fiestas o
                cualquier evento que te propongas para mas informacion Nro:
                934-100-00-00.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={alberca4} class="card-img-top" height={300} alt="..." />
            <div class="card-body">
              <h5 class="card-title">Alberca 4</h5>
              <p class="card-text">
                Disfruta de nuestro servicio de albercada para fiestas o
                cualquier evento que te propongas para mas informacion Nro:
                934-100-00-00.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

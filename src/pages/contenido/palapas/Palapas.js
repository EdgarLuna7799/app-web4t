import React from "react";
//import Axios from '../../../services/Axios'
//import {useParams} from 'react-router-dom'
import palapa1 from "../../img/palapa1.jpg";
import palapa2 from "../../img/palapa2.jpg";
import palapa3 from "../../img/palapa3.jpg";
import palapa4 from "../../img/palapa4.jpg";

export function Palapas() {
  return (
    <div>
      <h1 align="center">Nuestras Palapas</h1>
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
            <img src={palapa1} class="card-img-top" height={300} alt="..." />
            <div class="card-body">
              <h5 class="card-title">Palapa 1</h5>
              <p class="card-text">
                Disfruta de nuestro servicio de palapas para pasarla en familia
                o con amigos y disfrutar del paisaje, para mas informacion Nro:
                934-100-00-00.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={palapa2} class="card-img-top" height={300} alt="..." />
            <div class="card-body">
              <h5 class="card-title">Palapa 2</h5>
              <p class="card-text">
                Disfruta de nuestro servicio de palapas para pasarla en familia
                o con amigos y disfrutar del paisaje, para mas informacion Nro:
                934-100-00-00.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={palapa3} class="card-img-top" height={300} alt="..." />
            <div class="card-body">
              <h5 class="card-title">Palapa 3</h5>
              <p class="card-text">
                Disfruta de nuestro servicio de palapas para pasarla en familia
                o con amigos y disfrutar del paisaje, para mas informacion Nro:
                934-100-00-00.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={palapa4} class="card-img-top" height={300} alt="..." />
            <div class="card-body">
              <h5 class="card-title">Palapa 4</h5>
              <p class="card-text">
                Disfruta de nuestro servicio de palapas para pasarla en familia
                o con amigos y disfrutar del paisaje, para mas informacion Nro:
                934-100-00-00.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

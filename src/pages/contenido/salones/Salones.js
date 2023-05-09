import React from "react";
import salon1 from "../../img/salon1.jpeg";
import salon2 from "../../img/salon2.jpg";
import salon3 from "../../img/salon3.png";
import salon4 from "../../img/salon4.jpeg";

export function Salones() {
  return (
    <div>
      <h1 align="center">Nuestros Salones</h1>
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
            <img src={salon1} class="card-img-top" height={300} alt="..." />
            <div class="card-body">
              <h5 class="card-title">Salon 1</h5>
              <p class="card-text">
                Disfruta de nuestro servicio de salones de fiesta para cualquier
                evento que te propongas para mas informacion Nro: 934-100-00-00.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={salon2} class="card-img-top" height={300} alt="..." />
            <div class="card-body">
              <h5 class="card-title">Salon 2</h5>
              <p class="card-text">
                Disfruta de nuestro servicio de salones de fiesta para cualquier
                evento que te propongas para mas informacion Nro: 934-100-00-00.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={salon3} class="card-img-top" height={300} alt="..." />
            <div class="card-body">
              <h5 class="card-title">Salon 3</h5>
              <p class="card-text">
                Disfruta de nuestro servicio de salones de fiesta para cualquier
                evento que te propongas para mas informacion Nro: 934-100-00-00.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={salon4} class="card-img-top" height={300} alt="..." />
            <div class="card-body">
              <h5 class="card-title">Salon 4</h5>
              <p class="card-text">
                Disfruta de nuestro servicio de salones de fiesta para cualquier
                evento que te propongas para mas informacion Nro: 934-100-00.00.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

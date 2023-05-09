import React from "react";
import ps_lg from "../imagenes/ps_lg.png";
import palapas from "../imagenes/palapas.jpg"
import alberca from "../imagenes/alberca.jpg"
import salon from "../imagenes/salon.png"
import {Link} from "react-router-dom";
//<li><Link class="dropdown-item" to="/persona">Admin personas</Link></li>

export function Menu() {
  return (
    <header data-bs-theme="dark">
      <div class="collapse text-bg-dark" id="navbarHeader">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-md-7 py-4">
              <h4>¿Quienes Somos?</h4>
              <p class="text-body-secondary">
                Somos una pagina web enfocada en dar publicidad a comerciantes
                que proveen servicios de renta de lugares para eventos festivos,
                tales como albercadas, salones de fiesta y palapas para la
                familia.
              </p>
            </div>
            <div class="col-sm-4 offset-md-1 py-4">
              <h4>Desarrolladores</h4>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-white">
                    Angel Alexander Meneses Mendez
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    Mario Jesus Arias Hernandez
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    Carlos Eduardo Miranda Hernandez
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar navbar-dark bg-dark shadow-sm">
        <img src={ps_lg} width="10%" alt="" />
        <div class="container">
          <a href="#" class="navbar-brand d-flex align-items-center">
            <strong>Privada-Space</strong>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>

      

      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">¡Elige tu mejor opción!</h1>
            <p class="lead text-body-secondary">
              Tenemos las mejores opciones para ti, decide cual opción se
              acomode mejor a tu necesidad, donde podras dar click en nuestras 3
              opciones y obtendras todos los detalles.
            </p>
            <p>
              <a href="http://localhost:3000/" class="btn btn-outline-primary">
                Inicio
              </a>{" "}
              &nbsp;
              <a
                href="http://localhost:3000/albercas"
                class="btn btn-outline-info"
              >
                Albercas
              </a>{" "}
              &nbsp;
              <a
                href="http://localhost:3000/salones"
                class="btn btn-outline-primary"
              >
                Salones
              </a>{" "}
              &nbsp;
              <a 
                href="http://localhost:3000/palapas"
                class="btn btn-outline-info"
              >
                Palapas
              </a>
              
            </p>

          </div>
        </div>






        <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={salon}
            class="rounded mx-auto d-block"
            max
            width="35%"
            height="auto"
          />
        </div>
        <div class="carousel-item">
          <img
            src={alberca}
            class="rounded mx-auto d-block"
            max
            width="35%"
            height="auto"
          />
        </div>
        <div class="carousel-item">
          <img
            src={palapas}
            class="rounded mx-auto d-block"
            max
            width="35%"
            height="auto"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      <div class="card-body" />
    </div>

        
      </section>
    </header>
  );
}
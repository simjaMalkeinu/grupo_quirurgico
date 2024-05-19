const productosBodyTherapy = [
  {
    id: 1,
    nombre: "Depilación definitiva rejuveneciendo la piel (No dolorosa)",
  },
  {
    id: 2,
    nombre: "Rejuvenecimiento facial sin cirugía",
  },
  {
    id: 3,
    nombre: "Radiofrecuencia fraccionada",
  },
  {
    id: 4,
    nombre: "Radiofrecuencia",
  },
  {
    id: 5,
    nombre: "Microdermoabrasión",
  },
  {
    id: 6,
    nombre: "Luz pulsada intensa",
  },
  {
    id: 7,
    nombre: "Manchas faciales",
  },
  {
    id: 8,
    nombre: "Limpieza facial profunda (acné, cicatrices faciales)",
  },
  {
    id: 9,
    nombre: "Rosácea",
  },
  {
    id: 10,
    nombre: "Venitas rojas faciales",
  },
  {
    id: 11,
    nombre: "Armonía facial",
  },
  {
    id: 12,
    nombre: "Dermapen",
  },
  {
    id: 13,
    nombre: "Enzimas lipolíticas (Bichectomía enzimática) y perfil facial",
  },
  {
    id: 14,
    nombre: "Eliminación de verrugas con fibroblast (No doloroso)",
  },
  {
    id: 15,
    nombre: "Litting facial",
  },
  {
    id: 16,
    nombre: "Peeling facial",
  },
  {
    id: 17,
    nombre: "Drenaje linfático facial",
  },
  {
    id: 18,
    nombre: "Lesiones musculares (Recupera la movilidad.)",
  },
  {
    id: 19,
    nombre: "Lesiones cutáneas",
  },
  {
    id: 20,
    nombre: "Drenaje linfático corporal",
  },
  {
    id: 21,
    nombre: "Masaje terapéutico descontracturante",
  },
  {
    id: 22,
    nombre: "Masaje antiestrés",
  },
  {
    id: 23,
    nombre: "Masaje de drenaje linfático",
  },
  {
    id: 24,
    nombre: "Reduce células grasas con aparatología",
  },
  {
    id: 25,
    nombre: "Elimina flacidéz, celulitis y estrías",
  },
  {
    id: 26,
    nombre: "Moldeo corporal y tonifica",
  },
  {
    id: 27,
    nombre: "Reducción de medidas",
  },
  {
    id: 28,
    nombre:
      "Terapias postoperatorias (Abdominoplastías, lipoescultura, cesáreas)",
  },
  {
    id: 29,
    nombre: "Calvicie",
  },
  {
    id: 30,
    nombre:
      "Aclara zonas obscuras (Axilas, zona íntima, rodillas, codo, cuello)",
  },
];

const productosMedicinaGeneral = [
  {
    id: 1,
    nombre: "Consulta medica.",
  },
  {
    id: 2,
    nombre: "Certificados escolares.",
  },
  {
    id: 3,
    nombre: "Toma de glucosa.",
  },
  {
    id: 4,
    nombre: "Toma de presión arterial.",
  },
  {
    id: 5,
    nombre: "Nebulizaciones.",
  },
  {
    id: 6,
    nombre: "Inyecciones.",
  },
  {
    id: 7,
    nombre: "Control del niño sano.",
  },
  {
    id: 8,
    nombre: "Planificación familiar.",
  },
  {
    id: 9,
    nombre: "Control prenatal.",
  },
  {
    id: 10,
    nombre: "Lavado de oídos.",
  },
  {
    id: 11,
    nombre: "Teleconsulta.",
  },
  {
    id: 12,
    nombre: "Lavado de oídos.",
  },
];

const productosCirugia = [
  {
    id: 1,
    nombre: "Suturas y retiro de puntos.",
  },
  {
    id: 2,
    nombre: "Curaciones.",
  },
  {
    id: 3,
    nombre: "Colocación, cambio y retiro de sonda foley.",
  },
  {
    id: 4,
    nombre: "Laboratorio clínico.",
  },
  {
    id: 5,
    nombre:
      "Prevención, diagnóstico y tratamiento de enfermedades crónico-degenerativas",
  },
  {
    id: 6,
    nombre: "Cirugía abdominal.",
  },
  {
    id: 7,
    nombre: "Vesícula.",
  },
  {
    id: 8,
    nombre: "Apéndice.",
  },
  {
    id: 9,
    nombre: "Hernias abdominales.",
  },
  {
    id: 10,
    nombre: "Paracentésis.",
  },
];

const listaProductos = document.getElementById("listaProductos");
console.log(listaProductos)

productosMedicinaGeneral.map((product, i) => {
  listaProductos.innerHTML += `<!-- Item -->
                                  <div class="cbp-item generalMedicine">
                                      <a class="cbp-caption" href="index.html">
                                          <div class="bg-white shadow-sm rounded-lg overflow-hidden p-1 m-3">
                                              <div class="cbp-caption-defaultWrap">
                                                  <img src="data:image/gif;base64,R0lGODlhAQABAPAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                                      data-cbp-src="./img/750x600/img1.jpg" width="373" height="298"
                                                      alt="Image Description">
                                              </div>
                                          </div>
                                          <div class="text-center p-3">
                                              <span class="d-block h4 mb-0">${product.nombre} </span>
                                          </div>
                                      </a>
                                  </div>
                                <!-- End Item -->`;
});

productosCirugia.map((product, i) => {
  listaProductos.innerHTML += `<!-- Item -->
                                <div class="cbp-item surgery">
                                    <a class="cbp-caption" href="./landing-onepage-saas.html">
                                        <div class="bg-white shadow-sm rounded-lg overflow-hidden p-1 m-3">
                                            <div class="cbp-caption-defaultWrap">
                                                <img src="data:image/gif;base64,R0lGODlhAQABAPAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                                    data-cbp-src="./img/750x600/img16.jpg" width="373" height="298"
                                                    alt="Image Description">
                                            </div>
                                        </div>
                                        <div class="text-center p-3">
                                            <span class="d-block h4 mb-0">${product.nombre}</span>
                                        </div>
                                    </a>
                                </div>
                                <!-- End Item -->`;
});

productosBodyTherapy.map((product, i) => {
  listaProductos.innerHTML += `<!-- Item -->
                              <div class="cbp-item bodyTherapy">
                                  <a class="cbp-caption" href="./portfolio-grid.html">
                                      <div class="bg-white shadow-sm rounded-lg overflow-hidden p-1 m-3">
                                          <div class="cbp-caption-defaultWrap">
                                              <img src="data:image/gif;base64,R0lGODlhAQABAPAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                                  data-cbp-src="./img/750x600/img32.jpg" width="373" height="298"
                                                  alt="Image Description">
                                          </div>
                                      </div>
                                      <div class="text-center p-3">
                                          <span class="d-block h4 mb-0">${product.nombre}</span>
                                      </div>
                                  </a>
                              </div>
                              <!-- End Item -->`;
});
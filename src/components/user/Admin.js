import React from "react";

export default function Admin() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="text-center">Panel de administración</h2>
          <div className="d-flex flex-column justify-content-around align-items-center">
            <div className="container box-element">
              <h3>Solicitudes</h3>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Usuario</th>
                      <th scope="col">Descripcion</th>
                      <th scope="col">Fecha</th>
                      <th scope="col">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Solicitud Vendedor</td>
                      <td>22/08/2021</td>
                      <td>Activo</td>
                      <td>
                        <a className="btn btn-outline-success btn-xs">
                          Ver Solicitud
                        </a>
                      </td>
                      <td>
                        <button className="btn btn-outline-danger btn-xs">
                          Eliminar
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jesus</td>
                      <td>Solicitud Transportista</td>
                      <td>22/08/2021</td>
                      <td>Activo</td>
                      <td>
                        <a className="btn btn-outline-success btn-xs">
                          Ver Solicitud
                        </a>
                      </td>
                      <td>
                        <button className="btn btn-outline-danger btn-xs">
                          Eliminar
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Roberto</td>
                      <td>Lorem, ipsum.</td>
                      <td>22/08/2021</td>
                      <td>Activo</td>
                      <td>
                        <a className="btn btn-outline-success btn-xs">
                          Ver Solicitud
                        </a>
                      </td>
                      <td>
                        <button className="btn btn-outline-danger btn-xs">
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div claclassNamess="container box-element">
              <h3>Reportes</h3>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Usuario</th>
                      <th scope="col">Descripcion</th>
                      <th scope="col">Fecha</th>
                      <th scope="col">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Error en envio</td>
                      <td>22/08/2021</td>
                      <td>Activo</td>
                      <td>
                        <a className="btn btn-outline-success btn-xs">
                          Ver Reporte
                        </a>
                      </td>
                      <td>
                        <button className="btn btn-outline-danger btn-xs">
                          Eliminar
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jesus</td>
                      <td>Error en envio</td>
                      <td>22/08/2021</td>
                      <td>Activo</td>
                      <td>
                        <a className="btn btn-outline-success btn-xs">
                          Ver Reporte
                        </a>
                      </td>
                      <td>
                        <button className="btn btn-outline-danger btn-xs">
                          Eliminar
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Roberto</td>
                      <td>Lorem, ipsum.</td>
                      <td>22/08/2021</td>
                      <td>Activo</td>
                      <td>
                        <a className="btn btn-outline-success btn-xs">
                          Ver Reporte
                        </a>
                      </td>
                      <td>
                        <button className="btn btn-outline-danger btn-xs">
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

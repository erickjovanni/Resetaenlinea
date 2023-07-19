import React, { Fragment, useRef, useState } from "react";
import {Todoreceta} from "./Todoreceta";


export const TodoList = () => {
  const [favorites, setFavorites] = useState({
    salsa: false,
    pollo: false,
    quesadilla:false,
    sandwich:false,
    torta:false,
    croquetas:false,
    merluza:false,
    chupe:false,
    chips:false,
    tartaletas:false,
    turrón:false,
    pastel:false,
  });

  const toggleFavorite = (receta) => {
    setFavorites({ ...favorites, [receta]: !favorites[receta] });
  };
  return (
    
        <div className="container">
          <header className="border-bottom lh-1 py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
              <div className="col-4 text-center">
                <h1 className="blog-header-logo text-body-emphasis text-decoration-none" href="#">Recetas Locas</h1>
              </div>
              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" className="form-control" placeholder="buscar recetas" aria-label="Search" />
            </form>                
            </div>
          </header>
          <div className="nav-scroller py-1 mb-3 border-bottom">
        <nav className="nav nav-underline justify-content-between">
          <a className="nav-item nav-link link-body-emphasis" href="#">Recetas</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">Planea tu menu</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">Productos destacados</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">Tienda</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">Postres clásicos</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">Guarda tus recetas favoritas</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">Carrito</a>
    </nav>
    </div>
      <main className="container">
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
          <div className="col-lg-6 px-0">
            <h1 className="display-4 fst-italic">Descubre nuestras recetas</h1>
            <p className="lead my-3">Siempre tenemos tiempo para cocinar aquí te traemos recetas fáciles, rápidas que los ayudarán a seguir comiendo rico y saludable con explicaciones detalladas.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
          
            <img class="avatar" src="https://th.bing.com/th/id/OIP.bP0Rre0xSJ765AXxApP52QAAAA?pid=ImgDet&rs=1" width="140px" alt="" className="rounded-circle"></img> 
            <h2 className="fw-normal">Almuerzo</h2>
            <p>Aquí tienes encontrar los mejores almuerzos fácil de hacer y ricos para compartir junto a la familia o amigos</p>
          </div>
          <div className="col-lg-4">
          <img class="avatar" src="https://th.bing.com/th/id/R.f4cd8cd2f8cd977be6e63c63bd00e837?rik=foO9yc8oPxpxpg&riu=http%3a%2f%2fpostresrapidos.net%2fwp-content%2fuploads%2f2014%2f06%2fconsejos-para-preparar-postres.jpg&ehk=KmWFV2kr3AhKz4KvAQgTSXtqRm42ZrPxtyG0LNQIiZU%3d&risl=&pid=ImgRaw&r=0" width="140px" alt="" className="rounded-circle"></img> 
            <h2 className="fw-normal">Postres</h2>
            <p>Aquí encontraras una serie de postres muy fáciles de hacer y ricos para sorprender a alguien con un dulce especial</p>

          </div>
          <div className="col-lg-4">
          <img class="avatar" src="https://th.bing.com/th/id/OIP.KMksGP4enABh6cXilHhQbgHaE8?pid=ImgDet&rs=1" width="140px" alt="" className="rounded-circle"></img> 
            <h2 className="fw-normal">Cena</h2>
            <p>Cenas rápidas para disfrutar de la cocina Para esos momentos que vas con prisa y que no tienes mucho tiempo</p>
        </div>
        </div>

        <br /><br />

        <div className="row g-5">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">
            Recetas para Balancear tu vida
            </h3>

            <article className="blog-post">
              <h2 className="display-5 link-body-emphasis mb-1">¿Qué es la dieta balanceada?</h2>
              
              <br></br>

              <p>Una dieta balanceada es una alimentacion que suministra al cuerpo los nutrientes esenciales en las proporciones adecuadas para mantener un estado de salud optima.</p>
                <p>Esto implica consumir una variedad de alimentos de los grupos principales, como proteínas, carbohidratos, grasas saludables, vitaminas y minerales.</p>
              <hr />
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div className="col">
        <div className="card shadow-sm">
        <img class="avatar" src="https://th.bing.com/th/id/R.eb39452d6ba18cd5e453d38bfc67e89c?rik=v%2fmRPaz06uHaEw&pid=ImgRaw&r=0" width="220px" alt=""></img> 
          <div className="card-body">
          <p className="card-text">SALSA ALIOLI</p>
            <p className="card-text">INGREDIENTES</p>
            <a> 4 cdas de mayonesa,</a>
            <a> 1 cda de Ajo picado, </a>
            <a  >con Aceite de Oliva  o 1 diente de ajo molido,</a>
            <a> Sal  a gusto,</a>
            <a> Mix de Pimientas a gusto</a>
          </div>            
            <button onClick={() => toggleFavorite('salsa')}>{favorites.salsa? 'Quitar de favoritos' : 'Marcar como favorito'}</button>

        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
        <img class="avatar" src="https://th.bing.com/th/id/R.7348cad6bca4211cec4546d1308dc9fd?rik=TqtYxJJcXjo3cQ&pid=ImgRaw&r=0" width="220px" alt=""></img> 
          <div className="card-body">
          <p className="card-text">POLLO AL JUGO</p>
            <p className="card-text">INGREDIENTES</p>
            <a>Aceite vegetal,</a>
            <a> trutos de pollo sin piel,</a>
            <a> Pimienta a gusto,</a>
            <a> cebolla picada finamente,</a>
            <a> cucharada de Ajo Picado con Aceite de Oliva,</a>
            <a> zanahoria en láminas,</a>
            <a> hoja de Laurel</a>
          </div>
          <button onClick={() => toggleFavorite('pollo')}>{favorites.pollo? 'Quitar de favoritos' : 'Marcar como favorito'}</button>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
        <img class="avatar" src="https://i.pinimg.com/originals/c0/0e/0b/c00e0bade6947cc31d42508e39f8bbdb.jpg" width="220px" alt=""></img> 
          <div className="card-body">
          <p className="card-text">QUESADILLAS MEXICANAS</p>
            <p className="card-text">INGREDIENTES</p>
            <a> 50 gr de queso mozzarella rallado,</a>
            <a> 50 gr de queso cheddar rallado, </a>
            <a> 4 láminas de tortilla,</a>
            <a> 1 palta picada,</a>
            <a> Jugo de limón,</a>
            <a> Sal a gusto,</a>
            <a> Pimienta a gusto,</a>
          </div>
          <button onClick={() => toggleFavorite('quesadilla')}>{favorites.quesadilla? 'Quitar de favoritos' : 'Marcar como favorito'}</button>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
        <img class="avatar" src="https://th.bing.com/th/id/OIP.MuXBz08ZITw6ARP4FHoUjgHaHE?pid=ImgDet&rs=1" width="220px" alt=""></img>
          <div className="card-body">
          <p className="card-text">SANDWICH DE HELADO Y GALLETAS</p>
            <p className="card-text">INGREDIENTES</p>
            <a> 60 gr de mantequilla sin sal a temperatura ambiente,</a>
            <a> 160 gr de azúcar rubia, </a>
            <a>1 huevo,</a>
            <a>Esencia de Vainilla,</a>
            <a>220 gr de harina sin polvos de hornear</a>
            <a>sal</a>
            <a>1 1/2 de Polvos de Hornear </a>
            <a>50 gr de Chips de Chocolate</a>
          </div>
          <button onClick={() => toggleFavorite('sandwich')}>{favorites.sandwich? 'Quitar de favoritos' : 'Marcar como favorito'}</button>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
        <img class="avatar" src="https://i.pinimg.com/originals/f8/48/45/f84845257951f7c7e464ba202e730f46.jpg" width="220px" alt=""></img> 
          <div className="card-body">
          <p className="card-text">TORTA DE CUCHUFLÍ</p>
            <p className="card-text">INGREDIENTES</p>
            <a> 220 gr de azúcar granulada,</a>
            <a> 2 huevos, </a>
            <a>sal a gusto,</a>
            <a> 120 ml de leche,</a>
            <a> 60 gr de mantequilla sin sal, derretida</a>
            <a> 1 cdta de Esencia de Vainilla</a>
            <a> 140 gr de harina</a>
            <a> 500 gr de manjar</a>
          </div>
          <button onClick={() => toggleFavorite('torta')}>{favorites.torta? 'Quitar de favoritos' : 'Marcar como favorito'}</button>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
        <img class="avatar" src="https://th.bing.com/th/id/R.2d19c8bab97915bdc9a0421920b8f25e?rik=zJ15ec57d6e2Fw&pid=ImgRaw&r=0" width="220px" alt=""></img>
          <div className="card-body">
          <p className="card-text">CROQUETAS DE ATÚN Y ARROZ</p>
            <p className="card-text">INGREDIENTES</p>
            <a> 425 gr de atún en tarro,</a>
            <a> 1 ½ taza de arroz cocido, </a>
            <a>2 huevos, levemente batidos,</a>
            <a> ½ taza de queso parmesano rallado,</a>
            <a> ½ taza de choclo cocido</a>
            <a> ¼ taza de albahaca fresca picada,</a>
            <a> 1 cucharadita de Sal </a>
            <a> 1 cucharada de Condimento para Pescado,</a>
            <a> 1 diente de ajo picado</a>
            <a> 2 cucharadas de aceite,</a>
            <a> Salsa de tomates para servir</a>
          </div>
          <button onClick={() => toggleFavorite('croquetas')}>{favorites.croquetas? 'Quitar de favoritos' : 'Marcar como favorito'}</button>
        </div>
      </div>
      </div>
              <hr />
              <h2>Componentes claves de una dieta balanceada</h2>
              <p>El desarrollo de una dieta balanceada implica la cuidadosa selección de los alimentos y la planificacion de las comidas.
                Es esencial incluir una amplia gama de alimentos de diferentes grupos para asegurar la ingesta adecuada de nutrientes esenciales.</p>
                <ul>
                <li>Carbohidratos: Fuente principal de energía. Se encuentran en alimentos como arroz, pasta, pan, cereales, granos enteros, frutas y verduras.</li>
                <li>Proteínas: Son esenciales para el crecimiento, mantenimiento y reparación de los tejidos del cuerpo. Se pueden encontrar en alimentos como pescado, huevos, legumbres, carne y productos lácteos bajos en grasa.</li>
                <li>Grasas Saludables: Proporcionan energía, contribuyen al funcionamiento general del cerebro y ayudan a la absorcion de vitaminas y minerales. Se pueden encontrar en alimentos como paltas, semillas, nueces, aceite de oliva y pescados como el salmón.  </li>
                <li>Frutas y Verduras: Ayudan a mantener una buena digestión y promueve la saciedad. Se pueden encontrar al consumir una gran variedad de frutas y verduras.</li>
                <li>Vitaminas y Minerales: Fortalecen el sistema inmunológico, regula el metabolismo y mantiene la salud ósea. Se encuentran en los lácteos, frutas, verduras, carnes y granos enteros.</li>
              </ul>
            </article>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div className="col">
        <div className="card shadow-sm">
        <img class="avatar" src="https://th.bing.com/th/id/R.aae4e2617732e46de00fbfa73860ace0?rik=sFH3eXUdYIlurg&riu=http%3a%2f%2fwww.recetario-cocina.com%2farchivosbd%2fmerluza-al-horno-con-patatas.jpg&ehk=9yWevEgdogagHexoCJR1VIjmnbRJVYUhb3Cp1%2bP%2faFU%3d&risl=&pid=ImgRaw&r=0" width="220px" alt=""></img> 
          <div className="card-body">
          <p className="card-text">MERLUZA AL HORNO</p>
            <p className="card-text">INGREDIENTES</p>
            <a> 800 gr de merluza,</a>
            <a> 1/3 taza de aceite de oliva, </a>
            <a> 1/3 taza de vino blanco,</a>
            <a> 1 ½ cucharadas de perejil picado o ½ cucharadita de Perejil Deshidratado ,</a>
            <a> 1 diente de ajo</a>
            <a> 1 ½ cucharada de Aliños,</a>
          </div>
          <button onClick={() => toggleFavorite('merluza')}>{favorites.merluza? 'Quitar de favoritos' : 'Marcar como favorito'}</button>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
        <img class="avatar" src="https://th.bing.com/th/id/OIP.MNMkaF6AW7AZnrx47dykYAHaF8?pid=ImgDet&rs=1" width="220px" alt=""></img> 
          <div className="card-body">
          <p className="card-text">CHUPE DE MARISCOS</p>
            <p className="card-text">INGREDIENTES</p>
            <a> 8 rebanadas de pan blanco sin orillas,</a>
            <a> 240ml de leche, </a>
            <a> 120ml de crema,</a>
            <a> 1 cebolla,</a>
            <a> 1 pimentón rojo</a>
            <a> 1 pimentón verde,</a>
            <a> 1 diente de ajo picado fino </a>
            <a> 1 de Ají,</a>
            <a> 40ml de aceite</a>
            <a> 2500gr de mariscos</a>
            <a> 100gr de queso mantecoso rallado</a>
          </div>
          <button onClick={() => toggleFavorite('chupe')}>{favorites.chupe? 'Quitar de favoritos' : 'Marcar como favorito'}</button>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
        <img class="avatar" src="https://th.bing.com/th/id/R.b15efce90a62c046bd0abf8e8af5b60a?rik=M2%2fvtsul6WWmFg&riu=http%3a%2f%2frecetasveganas.net%2fwp-content%2fuploads%2f2017%2f05%2fChips-de-verduras-al-horno-veganos.jpg&ehk=mnIBcc9XeoQnA3iHJkEJgbqYu5XpcRLXmjdtxsqSnT4%3d&risl=&pid=ImgRaw&r=0" width="220px" alt=""></img>
          <div className="card-body">
          <p className="card-text">CHIPS DE VEGETALES HORNEADOS</p>
            <p className="card-text">INGREDIENTES</p>
            <a> 1 a 2 betarragas, lavadas y secas,</a>
            <a> 1 a 2 camotes (chileno o peruano), </a>
            <a>2 papas,</a>
            <a>3 cucharadas de aceite de oliva o vegetal,</a>
            <a> Sal de Mar Gourmet</a>
          </div>
          <button onClick={() => toggleFavorite('chips')}>{favorites.chips? 'Quitar de favoritos' : 'Marcar como favorito'}</button>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
        <img class="avatar" src="https://th.bing.com/th/id/OIP.3WQqaqhNTefWKlhHt84m3wHaEb?pid=ImgDet&rs=1" width="220px" alt=""></img> 
          <div className="card-body">
          <p className="card-text">TARTALETAS DE ALBAHACA Y QUESO PARMESANO</p>
            <p className="card-text">INGREDIENTES</p>
            <a> 6  tapas de masa para empanadas de horno,</a>
            <a> 200 gr de ricotta, </a>
            <a>1/2 taza de albahaca fresca,</a>
            <a> 1 cucharada de aceite de oliva,</a>
            <a> 1 huevo</a>
            <a>½ taza de queso parmesano + para espolvorear,</a>
            <a> ½ cucharadita de Pimienta negra  </a>
            <a> Sal a gusto,</a>
            <a> Tomates cherry para decorar</a>
          </div>
          <button onClick={() => toggleFavorite('tartaletas')}>{favorites.tartaletas? 'Quitar de favoritos' : 'Marcar como favorito'}</button>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
        <img class="avatar" src="https://www.chilerecetas.cl/images/fotos/turron_de_vino.jpg" width="220px" alt=""></img>
          <div className="card-body">
          <p className="card-text">TURRÓN DE VINO</p>
            <p className="card-text">INGREDIENTES</p>
            <a> 1 taza de azúcar granulada,</a>
            <a> 3/4 taza de vino tinto, </a>
            <a>3 claras de huevo,</a>
            <a> ½ taza de nueces tostadas y partidas,</a>
          </div>
          <button onClick={() => toggleFavorite('turrón')}>{favorites.turrón? 'Quitar de favoritos' : 'Marcar como favorito'}</button>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
        <img class="avatar" src="https://i.pinimg.com/originals/97/56/09/975609779b502987b35f117f556175e1.jpg" width="220px" alt=""></img> 
          <div className="card-body">
          <p className="card-text">PASTEL DE FRUTILLAS</p>
            <p className="card-text">INGREDIENTES</p>
            <a>  frutillas,</a>
            <a> 1 ½ taza de arroz cocido, </a>
            <a>1 sobre de Crema Pastelera,</a>
            <a> 1 ¼ taza de leche fría,</a>
            <a> 9 cucharaditas de almendras peladas y molidas muy finas tipo polvo,</a>
            <a> 1 cucharadita de Esencia de Almendras ,</a>
            <a> galletas de mantequilla o de vino rectangulares </a>
            <a> Azúcar flor,</a>
            <a> Cobertura de Chocolate</a>
          </div>
          <button onClick={() => toggleFavorite('pastel')}>{favorites.pastel? 'Quitar de favoritos' : 'Marcar como favorito'}</button>
        </div>
      </div>
      </div>
            
            <hr />
            <article className="blog-post">
            <h2>Una vida de amor por la cocina</h2>

              <p>¿De que lugar salen las recetas que publicamos ? Principalmente salen de decenas de libros de cocina y cuadernos con recetas escritas que heredamos de nuestros antepasados.</p>
              <p>Receta que ha estado presentes en nuestras vida, principalmente en las fechas importantes. La recetas fueron transmitida de generación tras generación, por eso ahora estan en la página y ahora todos pueden hacerla. ¡Qué gran satisfacción me da pensar en eso!</p>
            </article>

          </div>

          <div className="col-md-4">
            <div className="position-sticky" style={{ top: "2rem" }}>
              <div className="p-4 mb-3 bg-body-secondary rounded">
                <h4 className="fst-italic">¿NECESITAS INFORMACIÓN?</h4>
                <p className="mb-0">Envíanos tus preguntas sobre nuestros productos o servicios.</p>
              </div>
              <br></br>
              <div class="content">
              <h4 className="fst-italic">Contáctanos</h4>
              <div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item">
              <ul>
              <li>Numero   111-222-333</li>
              <li>Numero   444-555-666</li>
              <li>correo:<a href="Recetaslocas@gmail.com">     Recetaslocas@gmail.com</a></li>
              </ul>
              <a href="/cl" title="Home" rel="home">
            <img src="https://th.bing.com/th/id/R.a5239154a327ebcb1b1c9d3a9798c218?rik=6Ccex4hmbC%2b9KA&riu=http%3a%2f%2fst2.depositphotos.com%2f5624982%2f11566%2fv%2f950%2fdepositphotos_115663160-stock-illustration-kitchenware-icons-vector-set-cartoon.jpg&ehk=dBNAu8E8m12zPuoeXC%2bygyZNEejE7w7WhyoxN01fvpw%3d&risl=&pid=ImgRaw&r=0" width="200px" alt="" class="site-logo"></img>
          </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>

      <footer className="blog-footer">
        <p>
          <a href="#">Back to top</a>
        </p>
      </footer>
    </div>

  );
}
import "./style.css";
import {
  plusPlus,
  writeName,
  equalsMinorMajor,
  parOimpar,
  bucleAll,
  doWhilleM,
  esPar,
  convertirCelsiusAFahrenheit,
  createBook,
  createPerson,
  allDelete,
} from "./TPJS.js";

document.querySelector("#app").innerHTML = `
  <div>
    <section>
    <h1>Actividad 1</h1>    
    <h2>Ejercicio 2</h2>    
    <div class="card">
    <label for="firstN">Escriba el primer numero</label>
    <input type="number" name="numero-a" id="firstN" />
    <label for="secondN">Escriba el segundo numero</label>
    <input type="number" name="numero-b" id="secondN" />
    <button id="suma" type="button"></button>
    </div>
    <h3 id="result"></h3>
    <h2>Ejercicio 3</h2>
    <div class="card">
    <label for="uniqueName">Escriba su nombre</label>
    <input type="text" name="namePerson" id="uniqueName" />
    <button id="nameResult" type="button"></button>
    <h3 id="titleName"/>
    </div>
    </section>
    <section>
      <h1>Actividad 2</h1>    
      <h2>Ejercicio 1</h2>  
      <div class="card">
      <label for="firstA">Escriba el primer numero</label>
      <input type="number" name="numero-a" id="firstA" />
      <label for="secondB">Escriba el segundo numero</label>
      <input type="number" name="numero-b" id="secondB" />
      <label for="threeC">Escriba el Tercer numero</label>
      <input type="number" name="numero-b" id="threeC" />
      <button id="QMM" type="button"></button>
      </div>
    <h3 id="resultQMM"></h3> 
      <h2>Ejercicio 2</h2>  
    </section>
    <section>
    <div class="card">
          <h1>Actividad 3</h1>    
      <h2>Ejercicio 1</h2>  
      <button id="bucleButton" type="button"></button>
      <h2>Ejercicio 2</h2>  
      <button id="doWhileButton" type="button"></button>
    </div>
    </section>
    <section> 
    <div>
      <h1>Actividad 4</h1>    
      <h2>Ejercicio 1</h2>  
      <div class="card">
    <label for="esPar">Escriba su numero</label>
    <input type="number" name="esParTF" id="esPar" />
    <button id="esParResult" type="button"></button>
    <h3 id="tittlePar"/>
    </div>
      <h2>Ejercicio 1</h2>  
    <div class="card">
    <label for="celcius">Escriba su numero a convertir de celcius a fahrenheit</label>
    <input type="number" name="celciusG" id="celcius" />
    <button id="convert" type="button"></button>
    <h3 id="celciusFah"/>
    </div>
    </div">
    </section>
    <section> 
    <div>
      <h1>Actividad 5-6-7-8</h1>    
      <h2>Ejercicio Restantes en uno</h2>  
      <div class="card">
      <p>
        Formulario para crear a un autor de un libro
      </p>
      <form id="formAllPerson" class="form-exercise">
        <label  class="label-form" for="nombre">Nombre</label>
        <input class="input-form" type="text" name="nombre" id="nombre" />

        <label class="label-form" for="edad">Edad</label>
        <input class="input-form" type="number" name="edad" id="edad" />

        <label class="label-form" for="ciudad">Ciudad</label>
        <input class="input-form" type="text" name="ciudad" id="ciudad" />

        <button id="resultPerson" type="submit">Guardar</button>
      </form>
      <p>
      Formulario para crear un libro(recuerda que el nombre del autor, tiene que pertenecer a un nombre de una persona ya creada)
      </p>
      <h4 id="h3Book" class="errorBook"></h4>
      <form id="formAllBook" class="form-exercise" >
      <label class="label-form" for="titulo">Titulo de su libro</label>
      <input class="input-form" type="text" name="titulo" id="titulo" />
      
      <label class="label-form" for="autor">Autor del libro</label>
      <input class="input-form" type="text" name="autor" id="autor" />
      
      <label class="label-form" for="año">Año de publicacion</label>
      <input class="input-form" type="date" name="año" id="año" />
      <button id="resultBook" type="submit">Guardar</button>
      </form>

      <button id="borradoTotal" type"button" class="warningDelete">Borrar Informacion</button>
    </div>
    </div>
    </section> 


  </div>
`;

allDelete(document.querySelector("#borradoTotal"));

plusPlus(
  document.querySelector("#suma"),
  document.querySelector("#firstN"),
  document.querySelector("#secondN"),
  document.querySelector("#result")
);

equalsMinorMajor(
  document.querySelector("#QMM"),
  document.querySelector("#firstA"),
  document.querySelector("#secondB"),
  document.querySelector("#threeC"),
  document.querySelector("#resultQMM")
);

writeName(
  document.querySelector("#nameResult"),
  document.querySelector("#uniqueName"),
  document.querySelector("#titleName"),
  document
);

parOimpar(document);

bucleAll(document.querySelector("#bucleButton"));

doWhilleM(document.querySelector("#doWhileButton"));

esPar(
  document.querySelector("#esParResult"),
  document.querySelector("#esPar"),
  document.querySelector("#tittlePar"),
  document
);

convertirCelsiusAFahrenheit(
  document.querySelector("#convert"),
  document.querySelector("#celcius"),
  document.querySelector("#celciusFah"),
  document
);

createBook(document);
createPerson(document);

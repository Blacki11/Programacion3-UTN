export function plusPlus(button, a, b, result) {
  const setResult = (suma) => {
    console.log(`La suma de a y b es igual a =  ${suma}`);
    //no lei lo de ponerlo en la consola...
    result.innerHTML = `La suma de a y b es igual a =  ${suma}`;
  };
  button.innerHTML = "Sumar";
  button.addEventListener("click", () => setResult(Number(a.value) + Number(b.value)));
}

export function writeName(button, name, title, document) {
  //Intete hacer todo el tp en la misma pagina y era molesto que cada vez que reseteaba me pedia el nombre...
  /*
  const nombre = prompt("Dime tu nombre...");
  const auxH1 = document.createElement("h3");
  if (nombre) {
    auxH1.textContent = `Hola, ${nombre}!`;
  } else {
    auxH1.textContent = "No ingresaste un nombre.";
}
document.body.children[0].appendChild(auxH1);
*/

  const setName = (nameP) => {
    if (!nombre || nombre.length === 0) {
      console.log(nameP);
      title.innerHTML = `Hola, ${nameP}`;
    } else {
      title.innerHTML = "Ya se ingreso un nombre";
    }
  };
  button.innerHTML = "Enter";
  button.addEventListener("click", () => setName(name.value));
}

export function equalsMinorMajor(button, a, b, c, result) {
  const setResult = (a, b, c, resultQMM) => {
    const aux = 0;
    if (a == b && b == c) {
      console.log("Todos los numeros son iguale");
      result.innerHTML = "Todos los numeros son iguales";
    }
    if (a > b && a > c) {
      resultQMM.innerHTML = `El numero mayor de los tres es: ${a}`;
    } else if (b > c) {
      resultQMM.innerHTML = `El numero mayor de los tres es: ${b}`;
    } else if (c > a) {
      resultQMM.innerHTML = `El numero mayor de los tres es: ${c}`;
    }
  };
  button.innerHTML = "QMM";
  button.addEventListener("click", () =>
    setResult(Number(a.value), Number(b.value), Number(c.value), result)
  );
}

//me aburri

export function parOimpar(document) {
  /*
  const numero = prompt("Ingresa un numero y te dire si es par o impar");
  const auxH1 = document.createElement("h3");
  if (numero % 2 == 0) {
    console.log(`El numero: ${numero} es Par`);
    auxH1.textContent = `El numero: ${numero} es Par`;
  } else {
    console.log(`El numero: ${numero} es Impar`);
  auxH1.textContent = `El numero: ${numero} es Impar`;
}
//aca tendriamos que ver la section en la que esta y darle aid...
document.body.children[0].appendChild(auxH1);
*/
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function bucleAll(button) {
  const setResult = async () => {
    console.log("inicia");
    let aux = -1;
    let aux2 = 10;
    while (aux < aux2) {
      console.log("inicia el while");
      console.log(aux2);
      button.innerHTML = `Inicia a restar ${aux2}`;
      aux2--;
      await delay(1000);
    }
  };
  button.innerHTML = "Inicia a restar 10";
  button.addEventListener("click", () => setResult());
}

export function doWhilleM(button) {
  button.innerHTML = "Iniciar bucle dowhile";
  /*
  let numero;
  do {
    const aux = prompt("Ingresa un numero mayor a 100: ");
    numero = Number(aux);
    console.log(numero > 100);
  } while (numero < 100);
  */
  const setResult = () => {
    let numero;
    do {
      const aux = prompt("Ingresa un numero mayor a 100: ");
      numero = Number(aux);
      console.log(aux);
    } while (numero < 100);
  };
  button.addEventListener("click", () => setResult());
}
export function esPar(button, number, title, document) {
  const setnumber = (numberP) => {
    console.log(`El numero: ${numberP} es par: ${numberP % 2 === 0}`);
    title.innerHTML = `El numero: ${numberP} es par: ${numberP % 2 === 0}`;
  };
  button.innerHTML = "¿esPaR?";
  button.addEventListener("click", () => setnumber(Number(number.value)));
}

export function convertirCelsiusAFahrenheit(button, number, title, document) {
  const setnumber = (numberP) => {
    title.innerHTML = `${numberP}°C son equivalentes a: ${numberP * 1.8 + 32}°F`;
    console.log(`${numberP}°C son equivalentes a: ${numberP * 1.8 + 32}°F`);
  };
  button.innerHTML = "convertir";
  button.addEventListener("click", () => setnumber(Number(number.value)));
}

//esto no es correcto, ya que esta informacion deberia guardarse en una bd, pero por practicidad y por demostrar usos del localstorage, lo usaremos como "bd"
export function createPerson(formPerson) {
  const formulario = formPerson.getElementById("formAllPerson");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const ciudad = document.getElementById("ciudad").value;

    const datosFormulario = {
      nombre: nombre,
      edad: edad,
      ciudad: ciudad,
    };

    localStorage.setItem(nombre, JSON.stringify(datosFormulario));
    alert("Datos guardados en localStorage");
    location.reload();
  });
}

export function allDelete(button) {
  //se puede agregar verificaciones
  button.addEventListener("click", () => localStorage.clear());
}

export function createBook(formBook) {
  const formulario = formBook.getElementById("formAllBook");

  if (localStorage.length === 0) {
    formBook.getElementById("resultBook").disabled = true;
    formBook.getElementById("titulo").disabled = true;
    formBook.getElementById("autor").disabled = true;
    formBook.getElementById("año").disabled = true;
  }
  if (formBook.getElementById("año").disabled) {
    const h3ErrorBook = formBook.getElementById("h3Book");
    h3ErrorBook.innerHTML = "Cree una persona antes de crear un libro";
  }
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const año = document.getElementById("año").value;
    let valor;
    let clave;
    let auxArray = [];
    for (let i = 0; i < localStorage.length; i++) {
      clave = localStorage.key(i);
      valor = localStorage.getItem(clave);
      try {
        valor = JSON.parse(valor);
      } catch (e) {
        console.warn(`El valor de la clave "${clave}" no es un JSON válido:`, valor);
      }
      valor !== undefined ? auxArray.push(valor) : "";
    }
    const verify = auxArray.find((e) => e.nombre === autor);
    if (!verify) {
      console.warn("No se encontro ninguna persona registrada con el nombre del autor");
      alert("No se encontro ninguna persona registrada con el nombre del autor");
      return;
    }

    const datosFormulario = {
      titulo: titulo,
      autor: autor,
      año: año,
    };
    //aca podriamos tambien, buscar y borrar con el "titulo"(clave), ya que todos son distintos
    //sumamos 100 a los books, para diferenciarlos de los detalles del "autor"
    localStorage.setItem(titulo, JSON.stringify(datosFormulario));

    alert("Datos guardados en localStorage");
  });
}

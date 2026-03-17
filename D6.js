/* ESERCIZIO 1
         Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
      */

const changeTitle = () => {
  const changedTitle = document.querySelector("h1");
  return (changedTitle.innerText = "Nuovo Titolo!");
};

console.log(changeTitle());

/* ESERCIZIO 2
         Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
      */

/* const addClassToTitle = function () {
  const title = document.getElementsByTagName("h1")[0];
  title.classList.add("myHeading"); 
};*/

const addClassToTile = () => {
  const Title = document.querySelector("h1");
  Title.classList.add("myHeading");
  return Title;
};

console.log(addClassToTile());

/* ESERCIZIO 3
         Scrivi una funzione che cambi il testo dei p figli di un div
        */

const changePcontent = () => {
  const par = document.querySelectorAll("div p");
  par.forEach((p) => {
    p.innerText = "Paragrafo Modificato.";
  });
  return par;
};

console.log(changePcontent());

/* ESERCIZIO 4
         Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
        */

const changeUrls = () => {
  const googleLink = document.querySelectorAll("a:not(footer a)");
  googleLink.forEach((link) => {
    link.href = "https://www.google.com";
  });
  return googleLink;
};

console.log(changeUrls());

/* ESERCIZIO 5
         Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
      */

const addToTheSecond = () => {
  const secondUL = document.querySelectorAll("ul")[1];
  const newUL = document.createElement("li");
  newUL.innerText = "Nuovo elemento della lista.";
  secondUL.appendChild(newUL);
  return newUL;
};

console.log(addToTheSecond());

/* ESERCIZIO 6
         Scrivi una funzione che aggiunga un paragrafo al primo div
      */

const addParagraph = () => {
  const firstDiv = document.querySelector("div");
  const addedPar = document.createElement("p");
  addedPar.innerText = "Nuovo paragrafo nel primo div.";
  firstDiv.appendChild(addedPar);
  return addedPar;
};

console.log(addParagraph());

/* ESERCIZIO 7
         Scrivi una funzione che faccia scomparire la prima lista non ordinata
      */

/* const hideFirstUl = () => {
  const firstUL = document.querySelector("ul");
  firstUL.style.display = "none";
  return firstUL;
}; 

console.log(hideFirstUl()); */

/* ESERCIZIO 8
         Scrivi una funzione che renda verde il background di ogni lista non ordinata
        */

const paintItGreen = () => {
  const ul = document.querySelectorAll("ul");
  ul.forEach((ul) => {
    ul.style.backgroundColor = "green";
  });
  return ul;
};

console.log(paintItGreen());

/* ESERCIZIO 9
         Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
        */

const makeItClickable = () => {
  const changedTitle = document.querySelector("h1");
  changedTitle.onclick = () => {
    changedTitle.innerText = changedTitle.innerText.slice(0, -1);
  };
  return changedTitle;
};

console.log(makeItClickable());

/* ESERCIZIO 10
         Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
        */

const revealFooterLink = () => {
  const footer = document.querySelector("footer");
  const footerLink = document.querySelector("footer a");
  footerLink.onclick = () => {
    alert(footerLink.href);
  };
  return footerLink;
};

console.log(revealFooterLink());

/* ESERCIZIO 11
         Crea una funzione che crei una tabella nell'elemento con id "tableArea".
         La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
      */

const generateTable = function () {};

/* ESERCIZIO 12
         Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
      */

const addRow = function () {};

/* ESERCIZIO 14
        Crea una funzione che nasconda le immagini della tabella quando eseguita
      */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
        Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
      */

const changeColorWithRandom = function () {};

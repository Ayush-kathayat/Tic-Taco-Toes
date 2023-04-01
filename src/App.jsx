import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <p className="head">Tic - Tac - Toe</p>
      </div>

      <div class="container">
        <div class="row row_1">
          <diV class="boxes box_1" onClick={() => main(0)}>
            <h1 className="h_tag"></h1>
          </diV>
          <diV class="boxes box_2" onClick={() => main(1)}>
            <h1 className="h_tag"></h1>
          </diV>
          <diV class="boxes box_3" onClick={() => main(2)}>
            <h1 className="h_tag"></h1>
          </diV>
        </div>

        <div class="row row_2">
          <diV class="boxes box_4" onClick={() => main(3)}>
            <h1 className="h_tag"></h1>
          </diV>
          <diV class="boxes box_5" onClick={() => main(4)}>
            <h1 className="h_tag"></h1>
          </diV>
          <diV class="boxes box_6" onClick={() => main(5)}>
            <h1 className="h_tag"></h1>
          </diV>
        </div>

        <div class="row row_3">
          <diV class="boxes box_7" onClick={() => main(6)}>
            <h1 className="h_tag"></h1>
          </diV>
          <diV class="boxes box_8" onClick={() => main(7)}>
            <h1 className="h_tag"></h1>
          </diV>
          <diV class="boxes box_9" onClick={() => main(8)}>
            <h1 className="h_tag"></h1>
          </diV>
        </div>
      </div>

      <div className="winner">
        <h1 className="winner_tag">Ayush kathayat.</h1>
        <div className="btns">
          <button className="btn_1" onClick = {clear}>play more</button>
          <button className="btn_2" onClick = {close}>Close</button>
        </div>
      </div>
    </>
  );
}

function close(){
  window.close();
}

function clear(){
  const h_tags = document.getElementsByClassName("h_tag");
  for(let i = 0; i < h_tags.length; i++){
    h_tags[i].innerHTML = "";
  }
  const contain = document.querySelector(".container");
  const winner = document.querySelector(".winner");
  winner.classList.remove("visible");
  contain.classList.remove("hidden");
  
}

let temp = true;

function main(index) {
  const h_tags = document.getElementsByClassName("h_tag");

  if (temp && h_tags[index].innerHTML == "") {
    h_tags[index].innerHTML = "X";
    temp = false;
  } else if (!temp && h_tags[index].innerHTML == "") {
    h_tags[index].innerHTML = "O";
    temp = true;
  }

  const contain = document.querySelector(".container");

  const winne = document.querySelector(".winner_tag");

  const winner = document.querySelector(".winner");

  // possible winning combinations

  // possiblitity 1
  if (
    h_tags[0].innerHTML === h_tags[1].innerHTML &&
    h_tags[1].innerHTML === h_tags[2].innerHTML &&
    h_tags[0].innerHTML !== ""
  ) {
    if (h_tags[0].innerHTML === "X") {
      contain.classList.toggle("hidden");
      winne.innerHTML = "X wins";
      winner.classList.toggle("visible");
    } else {
      contain.classList.toggle("hidden");
      winne.innerHTML = "O wins";
      winner.classList.toggle("visible");
    }
  }

  // possiblitity 2
  if (
    h_tags[3].innerHTML === h_tags[4].innerHTML &&
    h_tags[4].innerHTML === h_tags[5].innerHTML &&
    h_tags[3].innerHTML !== ""
  ) {
    if (h_tags[3].innerHTML === "X") {
      contain.classList.toggle("hidden");
      winne.innerHTML = "X wins";
      winner.classList.toggle("visible");
    } else {
      contain.classList.toggle("hidden");
      winne.innerHTML = "O wins";
      winner.classList.toggle("visible");
    }
  }

  // possiblitity 3
  if (
    h_tags[6].innerHTML === h_tags[7].innerHTML &&
    h_tags[7].innerHTML === h_tags[8].innerHTML &&
    h_tags[6].innerHTML !== ""
  ) {
    if (h_tags[6].innerHTML === "X") {
      contain.classList.toggle("hidden");
      winne.innerHTML = "X wins";
      winner.classList.toggle("visible");
    } else {
      contain.classList.toggle("hidden");
      winne.innerHTML = "O wins";
      winner.classList.toggle("visible");
    }
  }

  // possiblitity 4
  if (
    h_tags[0].innerHTML === h_tags[3].innerHTML &&
    h_tags[3].innerHTML === h_tags[6].innerHTML &&
    h_tags[0].innerHTML !== ""
  ) {
    if (h_tags[0].innerHTML === "X") {
      contain.classList.toggle("hidden");
      winne.innerHTML = "X wins";
      winner.classList.toggle("visible");
    } else {
      contain.classList.toggle("hidden");
      winne.innerHTML = "O wins";
      winner.classList.toggle("visible");
    }
  }

  // possiblitity 5
  if (
    h_tags[1].innerHTML === h_tags[4].innerHTML &&
    h_tags[4].innerHTML === h_tags[7].innerHTML &&
    h_tags[1].innerHTML !== ""
  ) {
    if (h_tags[1].innerHTML === "X") {
      contain.classList.toggle("hidden");
      winne.innerHTML = "X wins";
      winner.classList.toggle("visible");
    } else {
      contain.classList.toggle("hidden");
      winne.innerHTML = "O wins";
      winner.classList.toggle("visible");
    }
  }

  // possiblitity 6
  if (
    h_tags[2].innerHTML === h_tags[5].innerHTML &&
    h_tags[5].innerHTML === h_tags[8].innerHTML &&
    h_tags[2].innerHTML !== ""
  ) {
    if (h_tags[2].innerHTML === "X") {
      contain.classList.toggle("hidden");
      winne.innerHTML = "X wins";
      winner.classList.toggle("visible");
    } else {
      contain.classList.toggle("hidden");
      winne.innerHTML = "O wins";
      winner.classList.toggle("visible");
    }
  }

  // possiblitity 7
  if (
    h_tags[0].innerHTML === h_tags[4].innerHTML &&
    h_tags[4].innerHTML === h_tags[8].innerHTML &&
    h_tags[0].innerHTML !== ""
  ) {
    if (h_tags[0].innerHTML === "X") {
      contain.classList.toggle("hidden");
      winne.innerHTML = "X wins";
      winner.classList.toggle("visible");
    } else {
      contain.classList.toggle("hidden");
      winne.innerHTML = "O wins";
      winner.classList.toggle("visible");
    }
  }

  // possiblitity 8
  if (
    h_tags[2].innerHTML === h_tags[4].innerHTML &&
    h_tags[4].innerHTML === h_tags[6].innerHTML &&
    h_tags[2].innerHTML !== ""
  ) {
    if (h_tags[2].innerHTML === "X") {
      contain.classList.toggle("hidden");
      winne.innerHTML = "X wins";
      winner.classList.toggle("visible");
    } else {
      contain.classList.toggle("hidden");
      winne.innerHTML = "O wins";
      winner.classList.toggle("visible");
    }
  }
}



export default App;

const celdas = document.querySelectorAll(".celda");
const estado = document.getElementById("estado");
const botonReset = document.getElementById("botonReset");
let jugadorActual = "X";
let campoJuego = ["", "", "", "", "", "", "", "", ""];
let juegoActivo = true;

const combinacionesGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

celdas.forEach(cell => {
    cell.addEventListener("click", () => {
        const index = cell.getAttribute("data-index");

        if (campoJuego[index] === "" && juegoActivo) {
            campoJuego[index] = jugadorActual;
            cell.textContent = jugadorActual;
            chequearGanador();
            jugadorActual = jugadorActual === "X" ? "O" : "X";
        }
    });
});

botonReset.addEventListener("click", () => {
    campoJuego = ["", "", "", "", "", "", "", "", ""];
    juegoActivo = true;
    jugadorActual = "X";
    estado.textContent = "";
    celdas.forEach(celda => (celda.textContent = ""));
});

function chequearGanador() {
    for (let combination of combinacionesGanadoras) {
        const [a, b, c] = combination;
        if (campoJuego[a] && campoJuego[a] === campoJuego[b] && campoJuego[a] === campoJuego[c]) {
            estado.textContent = `¡${campoJuego[a]} ha ganado!`;
            juegoActivo = false;
            let audioGanador = new Audio('assets/success-audio.mp3');
            audioGanador.play();
            return;
        }
    }

    if (!campoJuego.includes("")) {
        estado.textContent = "¡Es un empate!";
        juegoActivo = false;
        let audioGanador = new Audio('assets/game-over.mp3');
        audioGanador.play();
    }
}

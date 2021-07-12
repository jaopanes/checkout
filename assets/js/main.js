function maskToCep(data) {
    data.target.value = data.target.value.replace(/\D/g, "");
    data.target.value = data.target.value.replace(/(\d{5})(\d{3})$/, "$1-$2");
}

function maskToCredit(data) {
    data.target.value = data.target.value.replace(/\D/g, "");
    data.target.value = data.target.value.replace(/^(\d{4})(\d)/g, "$1 $2");
    data.target.value = data.target.value.replace(
        /^(\d{4})\s(\d{4})(\d)/g,
        "$1 $2 $3"
    );
    data.target.value = data.target.value.replace(
        /^(\d{4})\s(\d{4})\s(\d{4})(\d)/g,
        "$1 $2 $3 $4"
    );
}

function maskToDate(data) {
    data.target.value = data.target.value.replace(/\D/g, "");
    data.target.value = data.target.value.replace(/(\d{2})(\d{4})$/, "$1/$2");
}

const cepInput = document.querySelector("#cep");
cepInput.addEventListener("input", (e) => maskToCep(e));

const creditInput = document.querySelector("#credit");
creditInput.addEventListener("input", (e) => maskToCredit(e));

const dateInput = document.querySelector("#date");
dateInput.addEventListener("input", (e) => maskToDate(e));

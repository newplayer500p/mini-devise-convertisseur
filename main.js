const data = {
  "EUR": [
    "€",
    "🇪🇺",
    1
  ],
  "USD": [
    "$",
    "🇺🇸",
    1.148456
  ],
  "AR": [
    "Ar",
    "🇲🇬",
    5102.575803
  ],
  "GBP": [
    "£",
    "🇬🇧",
    0.847969
  ],
  "JPY": [
    "¥",
    "🇯🇵",
    165.905491
  ],
  "CHF": [
    "Fr",
    "🇨🇭",
    0.941647
  ],
  "CAD": [
    "$",
    "🇨🇦",
    1.569703
  ],
  "AUD": [
    "$",
    "🇦🇺",
    1.761932
  ],
  "CNY": [
    "¥",
    "🇨🇳",
    8.251754
  ],
  "INR": [
    "₹",
    "🇮🇳",
    97.922711
  ],
  "BRL": [
    "R$",
    "🇧🇷",
    6.373505
  ],
  "ZAR": [
    "R",
    "🇿🇦",
    20.351384
  ],
  "RUB": [
    "₽",
    "🇷🇺",
    91.005903
  ],
  "HKD": [
    "$",
    "🇭🇰",
    9.013268
  ],
  "NZD": [
    "$",
    "🇳🇿",
    1.903157
  ],
  "SEK": [
    "kr",
    "🇸🇪",
    10.979246
  ],
  "NOK": [
    "kr",
    "🇳🇴",
    11.562305
  ],
  "DKK": [
    "kr",
    "🇩🇰",
    7.460048
  ],
  "PLN": [
    "zł",
    "🇵🇱",
    4.255462
  ],
  "SGD": [
    "$",
    "🇸🇬",
    1.475243
  ],
  "MXN": [
    "$",
    "🇲🇽",
    21.74099
  ],
  "ILS": [
    "₪",
    "🇮🇱",
    4.025031
  ],
  "KRW": [
    "₩",
    "🇰🇷",
    1572.536458
  ],
  "TRY": [
    "₺",
    "🇹🇷",
    45.013688
  ],
  "AED": [
    "د.إ",
    "🇦🇪",
    4.2176
  ],
  "THB": [
    "฿",
    "🇹🇭",
    37.398925
  ],
  "IDR": [
    "Rp",
    "🇮🇩",
    18662.450487
  ],
  "SAR": [
    "﷼",
    "🇸🇦",
    4.306603
  ],
  "CLP": [
    "$",
    "🇨🇱",
    1074.437473
  ]
}

let selectBalise1 = document.getElementById("symbole-monnaie1");
let selectBalise2 = document.getElementById("symbole-monnaie2");

document.getElementById("container").classList.add("show");

let monnaie1 = "EUR";
let monnaie2 = "USD";
let taux = data[monnaie2][2];

function getTaux(isMonnaie1){
    const monnaie1ToEUR = data[monnaie1][2];
    const monnaie2ToEUR = data[monnaie2][2];
    const monnaie1ToMonnaie2 = (monnaie1ToEUR/monnaie2ToEUR);
    const monnaie2ToMonnaie1 = 1/monnaie1ToMonnaie2;
    if (isMonnaie1){
        return monnaie1ToMonnaie2;
    } else {
        return monnaie2ToMonnaie1;
    }
}

selectBalise1.addEventListener("change", (e) => {
    document.getElementById("symbole1").textContent = data[selectBalise1.value][0];
    monnaie1 = selectBalise1.value;
    taux = getTaux(false);
    document.getElementById("input-monnaie2").value = (parseFloat(document.getElementById("input-monnaie1").value) * taux).toFixed(5);
})


selectBalise2.addEventListener("change", (e) => {
    document.getElementById("symbole2").textContent = data[selectBalise2.value][0];
    monnaie2 = selectBalise2.value;
    taux = getTaux(true);
    document.getElementById("input-monnaie1").value = (parseFloat(document.getElementById("input-monnaie2").value) * taux).toFixed(5);
})

document.getElementById("input-monnaie1").addEventListener("click", (e) => {taux = getTaux(false)});

document.getElementById("input-monnaie2").addEventListener("click", (e) => {taux = getTaux(true)});

document.getElementById("input-monnaie1").addEventListener("input", (e) => {
    document.getElementById("input-monnaie2").value = (parseFloat(document.getElementById("input-monnaie1").value) * taux).toFixed(5);
})

document.getElementById("input-monnaie2").addEventListener("input", (e) => {
    document.getElementById("input-monnaie1").value = (parseFloat(document.getElementById("input-monnaie2").value) * taux).toFixed(5);
})

Object.keys(data).forEach(deviseName => {
    const flag = data[deviseName][1];
    const option =  document.createElement("option");
    option.value = deviseName;
    option.textContent = flag + " " + deviseName;
    document.getElementById("symbole-monnaie1").appendChild(option);
    document.getElementById("input-monnaie1").value = data[monnaie1][2];
});

Object.keys(data).forEach(deviseName => {
    const flag = data[deviseName][1];
    const option =  document.createElement("option");
    option.value = deviseName;
    option.textContent = flag + " " + deviseName;
    if (deviseName == monnaie2){
        option.selected = true;
    }
    document.getElementById("input-monnaie2").value = data[monnaie2][2];
    document.getElementById("symbole-monnaie2").appendChild(option);
});

document.getElementById("symbole1").textContent = data[selectBalise1.value][0];
document.getElementById("symbole2").textContent = data[selectBalise2.value][0];
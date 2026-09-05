const cardDatabase = {

    amexPlatinum: {
        name: "Amex Platinum",
        pointName: "MR Point",

        aumThreshold: 5000000000,

        earningRate: {
            highAUM: 1.5,
            lowAUM: 1.25
        },

        spendingUnit: 2500,

        milesPrograms: {
            asiaMiles: {
                name: "Asia Miles",
                pointsRequired: 9000,
                milesReceived: 1000
            },

            airAsia: {
                name: "AirAsia",
                pointsRequired: 4000,
                milesReceived: 500
            },

            enrich: {
                name: "Enrich",
                pointsRequired: 40000,
                milesReceived: 5000
            },

            garuda: {
                name: "GarudaMiles",
                pointsRequired: 4000,
                milesReceived: 500
            },

            krisFlyer: {
                name: "KrisFlyer",
                pointsRequired: 5000,
                milesReceived: 1000
            },

            hilton: {
                name: "Hilton Honors",
                pointsRequired: 6000,
                milesReceived: 1250
            },

            marriott: {
                name: "Marriott Bonvoy",
                pointsRequired: 5555,
                milesReceived: 990
            }
        }
    },


    amexGold: {
        name: "Amex Gold",
        pointName: "MR Point",

        aumThreshold: 500000000,

        earningRate: {
            highAUM: 1.25,
            lowAUM: 1.1
        },

        spendingUnit: 2500,

        milesPrograms: {
            asiaMiles: {
                name: "Asia Miles",
                pointsRequired: 9000,
                milesReceived: 1000
            },

            airAsia: {
                name: "AirAsia",
                pointsRequired: 5000,
                milesReceived: 500
            },

            enrich: {
                name: "Enrich",
                pointsRequired: 50000,
                milesReceived: 5000
            },

            garuda: {
                name: "GarudaMiles",
                pointsRequired: 4500,
                milesReceived: 500
            },

            krisFlyer: {
                name: "KrisFlyer",
                pointsRequired: 6000,
                milesReceived: 1000
            },

            hilton: {
                name: "Hilton Honors",
                pointsRequired: 7000,
                milesReceived: 1250
            },

            marriott: {
                name: "Marriott Bonvoy",
                pointsRequired: 6250,
                milesReceived: 990
            }
        }
    },


    jcb: {
        name: "JCB Precious",
        pointName: "D-Point",

        aumThreshold: 50000000,

        earningRate: {
            highAUM: 3,
            lowAUM: 2.5
        },

        spendingUnit: 2500,

        minimumMonthlySpending: 1500000,

        additionalPoint: {
            spendingThreshold: 10000000,
            points: 8000
        },

        milesPrograms: {
            asiaMiles: {
                name: "Asia Miles",
                pointsRequired: 10000,
                milesReceived: 500
            },

            airAsia: {
                name: "BIG AirAsia",
                pointsRequired: 5000,
                milesReceived: 500
            },

            enrich: {
                name: "Enrich",
                pointsRequired: 7500,
                milesReceived: 500
            },

            garuda: {
                name: "GarudaMiles",
                pointsRequired: 7500,
                milesReceived: 500
            },

            krisFlyer: {
                name: "KrisFlyer",
                pointsRequired: 10000,
                milesReceived: 500
            },

            jal: {
                name: "JAL",
                pointsRequired: 32000,
                milesReceived: 1000
            }
        }
    },

    worldElite: {

    name: "Mastercard World Elite",

    pointName: "D-Point",

    aumThreshold: 5000000000,

    spendingUnit: 2500,

    earningRate: {

        highAUM: {
            domestic: 6,
            overseas: 8
        },

        lowAUM: {
            domestic: 5,
            overseas: 7
        }

    },

    milesPrograms: {

        krisFlyer: {
            name: "KrisFlyer",
            pointsRequired: 20,
            milesReceived: 1
        },

        garuda: {
            name: "GarudaMiles",
            pointsRequired: 15,
            milesReceived: 1
        },

        asiaMiles: {
            name: "Asia Miles",
            pointsRequired: 20,
            milesReceived: 1
        },

        airAsia: {
            name: "AirAsia",
            pointsRequired: 10,
            milesReceived: 1
        },

        enrich: {
            name: "Enrich",
            pointsRequired: 15,
            milesReceived: 1
        },

        jal: {
            name: "JAL",
            pointsRequired: 32,
            milesReceived: 1
        }

    }

}

};
const cardSelect = document.getElementById("card");
const programSelect = document.getElementById("program");



cardSelect.addEventListener("change", function () {

    const selectedCard = cardSelect.value;
    const transactionTypeSection =
        document.getElementById("transactionTypeSection");

    const cardLimitSection =
        document.getElementById("cardLimitSection");

    const bonusLabel =
        document.getElementById("bonusLabel");

    // Transaction Type only for World Elite
    if (selectedCard === "world-elite") {
        transactionTypeSection.style.display = "block";
    } else {
        transactionTypeSection.style.display = "none";
    }

    // Credit Card Limit only for cards with bonus cap
    if (
        selectedCard === "world-elite" ||
        selectedCard === "amex-platinum" ||
        selectedCard === "amex-gold"
    ) {
        cardLimitSection.style.display = "block";
    } else {
        cardLimitSection.style.display = "none";
    }

    // Dynamic result label
    if (selectedCard === "jcb") {
        bonusLabel.textContent = "Additional Point";
    } else if (
        selectedCard === "world-elite" ||
        selectedCard === "amex-platinum" ||
        selectedCard === "amex-gold"
    ) {
        bonusLabel.textContent = "Bonus / Cap Info";
    } else {
        bonusLabel.textContent = "Bonus / Cap Info";
    }


    programSelect.innerHTML =
        '<option value="">-- Choose miles program --</option>';

    if (selectedCard === "") {
        return;
    }

    let cardData;

    if (selectedCard === "amex-platinum") {
        cardData = cardDatabase.amexPlatinum;
    }

    if (selectedCard === "amex-gold") {
        cardData = cardDatabase.amexGold;
    }

    if (selectedCard === "jcb") {
        cardData = cardDatabase.jcb;
    }

    if (selectedCard === "world-elite") {
    cardData = cardDatabase.worldElite;
    }

    if (!cardData) {
        return;
    }

    const programs = cardData.milesPrograms;

    for (let key in programs) {

        const option = document.createElement("option");

        option.value = key;
        option.textContent = programs[key].name;

        programSelect.appendChild(option);
    }

});
// ===============================
// CALCULATION ENGINE - STEP 1
// Target Miles -> Required Points
// ===============================

const milesInput = document.getElementById("miles");
const calculateButton = document.getElementById("calculateButton");

const targetResult = document.getElementById("targetResult");
const pointsResult = document.getElementById("pointsResult");
const resultBox = document.getElementById("result");


// Menghubungkan value dari HTML dengan database kita
function getSelectedCardData() {

    const selectedCard = cardSelect.value;

    if (selectedCard === "amex-platinum") {
        return cardDatabase.amexPlatinum;
    }

    if (selectedCard === "amex-gold") {
        return cardDatabase.amexGold;
    }

    if (selectedCard === "jcb") {
        return cardDatabase.jcb;
    }

    if (selectedCard === "world-elite") {
    return cardDatabase.worldElite;
    }

    return null;
}


// Fungsi utama saat tombol Calculate diklik
calculateButton.addEventListener("click", function () {

    const cardData = getSelectedCardData();
    const selectedProgram = programSelect.value;
    const targetMiles = Number(milesInput.value);


    // VALIDATION 1
    // User belum memilih kartu
    if (!cardData) {
        alert("Please choose a credit card.");
        return;
    }


    // VALIDATION 2
    // User belum memilih miles program
    if (!selectedProgram) {
        alert("Please choose a miles program.");
        return;
    }


    // VALIDATION 3
    // Target miles kosong / 0 / negatif
    if (!targetMiles || targetMiles <= 0) {
        alert("Please enter a valid target miles.");
        return;
    }


    const programData =
        cardData.milesPrograms[selectedProgram];


    // Minimum redemption berdasarkan tabel
    const minimumMiles =
        programData.milesReceived;


    if (targetMiles < minimumMiles) {

        alert(
            "Minimum redemption for " +
            programData.name +
            " is " +
            minimumMiles.toLocaleString("en-US") +
            "."
        );

        return;
    }


    // Conversion Rate
    //
    // Contoh:
    // Amex Platinum KrisFlyer
    // 5,000 MR / 1,000 Miles
    // = 5 MR per Mile

    const pointPerMile =
        programData.pointsRequired /
        programData.milesReceived;


    // Required Point
    const requiredPoints =
        Math.ceil(targetMiles * pointPerMile);
        // ===============================
// STEP 2
// Required Points -> Required Spending
// ===============================

const aumInput = document.getElementById("aum");
const aum = parseRupiah(document.getElementById("aum").value);

const earningRateResult =
    document.getElementById("earningRateResult");

const bonusResult =
    document.getElementById("bonusResult");

const spendingResult =
    document.getElementById("spendingResult");


// Default
let earningRate = 0;
let requiredSpending = 0;
let additionalPointText = "None";


// ===============================
// AMEX PLATINUM
// ===============================

if (cardSelect.value === "amex-platinum") {

    const cardLimit =
        parseRupiah(document.getElementById("cardLimit").value);

    if (cardLimit <= 0) {
        alert("Please enter the customer's Credit Card Limit.");
        return;
    }

    if (aum >= cardData.aumThreshold) {
        earningRate = cardData.earningRate.highAUM;
    } else {
        earningRate = cardData.earningRate.lowAUM;
    }

    requiredSpending =
        Math.ceil(requiredPoints / earningRate) *
        cardData.spendingUnit;

    const bonusSpendingCap =
        Math.min(cardLimit, 300000000);

    if (requiredSpending <= bonusSpendingCap) {

        additionalPointText =
            "Enhanced MR earning remains within the monthly bonus cap";

    } else {

        additionalPointText =
            "Estimated spending exceeds the monthly bonus cap of Rp" +
            bonusSpendingCap.toLocaleString("en-US") +
            ". Exact MR earning beyond this cap requires base-rate confirmation.";
    }
}

// ===============================
// AMEX GOLD
// ===============================

if (cardSelect.value === "amex-gold") {

    const cardLimit =
        parseRupiah(document.getElementById("cardLimit").value);

    if (cardLimit <= 0) {
        alert("Please enter the customer's Credit Card Limit.");
        return;
    }

    if (aum >= cardData.aumThreshold) {
        earningRate = cardData.earningRate.highAUM;
    } else {
        earningRate = cardData.earningRate.lowAUM;
    }

    requiredSpending =
        Math.ceil(requiredPoints / earningRate) *
        cardData.spendingUnit;

    const bonusSpendingCap =
        Math.min(cardLimit, 300000000);

    if (requiredSpending <= bonusSpendingCap) {

        additionalPointText =
            "Enhanced MR earning remains within the monthly bonus cap";

    } else {

        additionalPointText =
            "Estimated spending exceeds the monthly bonus cap of Rp" +
            bonusSpendingCap.toLocaleString("en-US") +
            ". Exact MR earning beyond this cap requires base-rate confirmation.";
    }
}

// ===============================
// JCB PRECIOUS
// ===============================

if (cardSelect.value === "jcb") {

    // Tentukan earning rate berdasarkan AUM
    if (aum >= cardData.aumThreshold) {
        earningRate = cardData.earningRate.highAUM;
    } else {
        earningRate = cardData.earningRate.lowAUM;
    }


    // Hitung spending jika belum mendapat bonus 8.000 D-Point
    const spendingWithoutBonus =
        Math.ceil(requiredPoints / earningRate) *
        cardData.spendingUnit;


    // SCENARIO 1:
    // Spending masih di bawah Rp10 juta
    if (
        spendingWithoutBonus >= cardData.minimumMonthlySpending &&
        spendingWithoutBonus < cardData.additionalPoint.spendingThreshold
    ) {

        requiredSpending = spendingWithoutBonus;

        additionalPointText = "0 D-Point";

    } else {

        // SCENARIO 2:
        // Spending mencapai Rp10 juta
        // sehingga mendapat tambahan 8.000 D-Point

        const pointsStillNeeded =
            Math.max(
                requiredPoints - cardData.additionalPoint.points,
                0
            );


        const spendingFromRegularPoints =
            Math.ceil(pointsStillNeeded / earningRate) *
            cardData.spendingUnit;


        // Minimal Rp10 juta untuk mendapatkan bonus 8.000
        requiredSpending =
            Math.max(
                spendingFromRegularPoints,
                cardData.additionalPoint.spendingThreshold
            );


        additionalPointText =
            cardData.additionalPoint.points.toLocaleString("en-US") +
            " D-Point";
    }
}


// ===============================
// JCB PRECIOUS
// ===============================

if (cardSelect.value === "jcb") {

    // Tentukan earning rate berdasarkan AUM
    if (aum >= cardData.aumThreshold) {
        earningRate = cardData.earningRate.highAUM;
    } else {
        earningRate = cardData.earningRate.lowAUM;
    }


    // ==========================================
    // SCENARIO 1:
    // Required points bisa dicapai sebelum
    // spending mencapai Rp10 juta
    // sehingga belum mendapat bonus 8.000
    // ==========================================

    const spendingWithoutBonus =
        Math.ceil(requiredPoints / earningRate) *
        cardData.spendingUnit;


    if (
        spendingWithoutBonus >= cardData.minimumMonthlySpending &&
        spendingWithoutBonus < cardData.additionalPoint.spendingThreshold
    ) {

        requiredSpending = spendingWithoutBonus;

        additionalPointText = "0 D-Point";

    } else {

        // ==========================================
        // SCENARIO 2:
        // Spending mencapai minimum Rp10 juta
        // sehingga mendapat additional 8.000 D-Point
        // ==========================================

        const pointsStillNeeded =
            Math.max(
                requiredPoints - cardData.additionalPoint.points,
                0
            );


        const spendingFromRegularPoints =
            Math.ceil(pointsStillNeeded / earningRate) *
            cardData.spendingUnit;


        // Karena bonus 8.000 hanya didapat jika
        // spending minimal Rp10 juta
        requiredSpending =
            Math.max(
                spendingFromRegularPoints,
                cardData.additionalPoint.spendingThreshold
            );


        additionalPointText =
            cardData.additionalPoint.points.toLocaleString("en-US") +
            " D-Point";
    }
}

   // ===============================
// MASTERCARD WORLD ELITE
// Bonus cap:
// smaller of 1x card limit or Rp300,000,000
//
// Total earning rate:
// High AUM  : Domestic 6x | Overseas 8x
// Low AUM   : Domestic 5x | Overseas 7x
//
// After bonus-eligible spending cap is reached,
// earning continues at regular rate = 1 D-Point / Rp2,500
// ===============================

if (cardSelect.value === "world-elite") {

    const transactionType =
        document.getElementById("transactionType").value;

    const cardLimit =
        parseRupiah(document.getElementById("cardLimit").value);

    // World Elite needs card limit
    // because it determines the monthly bonus cap
    if (cardLimit <= 0) {
        alert("Please enter the customer's Credit Card Limit.");
        return;
    }

    // Determine total earning rate
    if (aum >= cardData.aumThreshold) {

        earningRate =
            cardData.earningRate.highAUM[transactionType];

    } else {

        earningRate =
            cardData.earningRate.lowAUM[transactionType];
    }

    const regularRate = 1;

    // Bonus eligible transaction amount:
    // lower of card limit or Rp300 million
    const rawBonusSpendingCap =
        Math.min(cardLimit, 300000000);

    // Only complete Rp2,500 units earn points
    const bonusEligibleUnits =
        Math.floor(
            rawBonusSpendingCap /
            cardData.spendingUnit
        );

    const bonusSpendingCap =
        bonusEligibleUnits *
        cardData.spendingUnit;

    // Maximum D-Point obtainable
    // while enhanced earning rate still applies
    const pointsWithinBonusCap =
        bonusEligibleUnits *
        earningRate;

    // CASE 1:
    // Required points can be earned entirely
    // inside the bonus-eligible spending amount
    if (requiredPoints <= pointsWithinBonusCap) {

        const requiredUnits =
            Math.ceil(
                requiredPoints /
                earningRate
            );

        requiredSpending =
            requiredUnits *
            cardData.spendingUnit;

    }

    // CASE 2:
    // Bonus cap is exhausted.
    // Remaining spending earns regular 1x D-Point.
    else {

        const remainingPoints =
            requiredPoints -
            pointsWithinBonusCap;

        const regularUnitsNeeded =
            Math.ceil(
                remainingPoints /
                regularRate
            );

        const spendingAfterBonusCap =
            regularUnitsNeeded *
            cardData.spendingUnit;

        requiredSpending =
            bonusSpendingCap +
            spendingAfterBonusCap;
    }

    additionalPointText =
        "Enhanced rate applies up to " +
        "Rp" +
        bonusSpendingCap.toLocaleString("en-US") +
        " monthly spending";
}

    // Tampilkan hasil

    targetResult.textContent =
        targetMiles.toLocaleString("en-US") +
        " " +
        programData.name;


    pointsResult.textContent =
        requiredPoints.toLocaleString("en-US") +
        " " +
        cardData.pointName;
        earningRateResult.textContent =
    earningRate +
    " " +
    cardData.pointName +
    " per Rp2,500";

bonusResult.textContent =
    additionalPointText;

spendingResult.textContent =
    "Rp" +
    Math.ceil(requiredSpending).toLocaleString("en-US");


    resultBox.style.display = "block";

});


// ===============================
// RUPIAH INPUT FORMATTER
// ===============================

const rupiahAumInput = document.getElementById("aum");
const rupiahCardLimitInput = document.getElementById("cardLimit");


function formatRupiahInput(input) {

    input.addEventListener("input", function () {

        // Hapus semua karakter selain angka
        const rawValue = this.value.replace(/\D/g, "");

        // Kalau input kosong
        if (rawValue === "") {
            this.value = "";
            return;
        }

        // Format menjadi Rupiah
        this.value =
            "Rp " +
            Number(rawValue).toLocaleString("id-ID");
    });
}


formatRupiahInput(rupiahAumInput);
formatRupiahInput(rupiahCardLimitInput);


// Mengubah "Rp 100.000.000"
// kembali menjadi angka 100000000
function parseRupiah(value) {

    const numericValue =
        value.replace(/\D/g, "");

    return numericValue
        ? Number(numericValue)
        : 0;
}

document.getElementById("transactionTypeSection").style.display = "none";
document.getElementById("cardLimitSection").style.display = "none";

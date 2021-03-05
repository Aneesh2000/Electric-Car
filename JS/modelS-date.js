let data1 = [
  ["Range", "390 miles"],
  ["Acceralation", "1.99sec 0-60mph"],
  ["Top Speed", "200mph"],
];

let data2 = [
  ["Range", "412 miles"],
  ["Acceralation", "3.1sec 0-60mph"],
  ["Top Speed", "155mph"],
];

function divTemplate(dataName, dataValue) {
  return `
  <div class="BLAH">
    <h4>${dataName}</h4>
    <p>${dataValue}</p>
  </div>`;
}

let GenerateData1 = "";
let GenerateData2 = "";

for (let i = 0; i < data1.length; i++) {
  const pieceOfData = data1[i];
  let x = divTemplate(pieceOfData[0], pieceOfData[1]);
  GenerateData1 += x;
}

for (let i = 0; i < data2.length; i++) {
  const pieceOfData = data2[i];
  let x = divTemplate(pieceOfData[0], pieceOfData[1]);
  GenerateData2 += x;
}

//console.log(GenerateData);
let plaidBtn = document.getElementById("carBtn-pla");
let longRanBtn = document.getElementById("carBtn-lr");
let DataDiv = document.getElementById("data-table");

plaidBtn.onclick = () => {
  DataDiv.innerHTML = GenerateData1;
};
longRanBtn.onclick = () => {
  DataDiv.innerHTML = GenerateData2;
};

plaidBtn.click();

//range
//acceralation
//top speed
//peak power
//wheels
//power-train
//weight
//super-charging max

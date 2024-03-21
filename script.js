
const countryList = {
  USD: "US",
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};




let select = document.querySelectorAll(".select")[0];
let select1 = document.querySelectorAll(".select")[1];
const countryName = Object.keys(countryList);
const output = document.getElementById("output")



const selctDetails = () => {

  for (let cCode in countryList) {
    let option = document.createElement("option");
    option.text = cCode;
    option.name = cCode;
    option.value = countryList[cCode];
    select.appendChild(option)

    let op1 = document.createElement("option");
    op1.text = cCode;
    op1.name = cCode;
    op1.value = countryList[cCode];
    select1.appendChild(op1)
    //console.log(op1.value);
  }

}
try {

  selctDetails();
}
catch (error) {
  alert("Some thing wrong try again" + error);
}

const setFlag = (value, flagno) => {
  if (flagno == 0) {
    document.getElementById("from").src = `https://flagsapi.com/${value}/shiny/64.png`;
  }
  else {
    document.getElementById("to").src = `https://flagsapi.com/${value}/shiny/64.png`;
  }
}

let fromSelect = (value) => {
  //console.log(value);
  try {
    setFlag(value, 0);
  } catch (error) {
    alert("Some thing wrong try again" + error);
  }
}
let toSelect = (value) => {
  //console.log(value);
  try {

    setFlag(value, 1);
  } catch (e) {
    alert("Some thing wrong try again")
  }
}
//https://latest.currency-api.pages.dev/v1/currencies/eur.json
const getResult = async (fromName, toName) => {
  console.log("Search Query = " + `https://latest.currency-api.pages.dev/v1/currencies/${fromName}.json`);
  let rs = await fetch(`https://latest.currency-api.pages.dev/v1/currencies/${fromName}.json`);
  let data = await rs.json();
  let fdata = data[fromName];
  console.log(fdata)
  console.log("value = " + fdata[toName]);
  return fdata[toName];


  // rs.then((result) => {
  //   return result.json();
  // })
  //   .then((textResult) => {
  //     console.log(textResult);
  //   })
}





function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}


const getinfo = async () => {
  event.preventDefault(event);
  try {

    getKeyByValue(countryList, select.value);
  }
  catch (error) {
    alert("Some thing Wrong refresh  ");
  }

  let fromName = getKeyByValue(countryList, select.value);
  let toName = getKeyByValue(countryList, select1.value);
  try {

    fromName = fromName.toLowerCase();
    toName = toName.toLowerCase();
    console.log(fromName)
  } catch (e) {
    alert("Some thing Wrong fill all details ");
  }
  try {

    value = await getResult(fromName, toName);
  }
  catch (error) {
    alert("Something Wrong  retry or refresh");
  }

  if (value == "NaN" || value == "undefined") {
    console.log("Cant defiune Right now ")
    alert("Cant defiune Right now ")
  }
  value = await parseFloat(value);
  let amount = document.getElementById("input-amount").value;
  amount = parseInt(amount)
  console.log("amount = " + amount);

  console.log("type of value =" + typeof (value))
  console.log("type of amount =" + typeof (amount))
  let finalConver = await (value * amount);
  console.log("ffinalConver" + finalConver);

  if (finalConver == "NaN") {
    console.log("Cant defiune Right now ")
  }
  output.innerHTML = `Answer is = ${finalConver}`;
}

const form = document.querySelector('.form_main');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  // Prevents the default form submission behavior
  // Your form submission logic here;
})


//getResult("gtq", "inr");


//change sample*N* to sample*N+1* i.e sample0 to sample1 here number is load value

//load
//load
//load
//load

function load1() {
  const inputElement = parseFloat(document.getElementById("a1").value);
  const valar1 = inputElement;
  arrayY2.push(valar1);
  const valar11 = inputElement;
  arrayY3.push(valar11);
  const valar111 = inputElement;
  arrayY4.push(valar111);
  const valar1111 = inputElement;
  arrayY5.push(valar1111);
  const valar11111 = inputElement;
  arrayY6.push(valar11111);
  const valar111111 = inputElement;
  arrayY7.push(valar111111);
  const valar1111111 = inputElement;
  arrayY8.push(valar1111111);
}
function load2() {
  const inputElement = parseFloat(document.getElementById("a2").value);
  const valar2 = inputElement;
  arrayY2.push(valar2);
  const valar22 = inputElement;
  arrayY3.push(valar22);
  const valar222 = inputElement;
  arrayY4.push(valar222);
  const valar2222 = inputElement;
  arrayY5.push(valar2222);
  const valar22222 = inputElement;
  arrayY6.push(valar22222);
  const valar222222 = inputElement;
  arrayY7.push(valar222222);
  const valar2222222 = inputElement;
  arrayY8.push(valar2222222);
}
function load3() {
  const inputElement = parseFloat(document.getElementById("a3").value);
  const valar3 = inputElement;
  arrayY2.push(valar3);
  const valar33 = inputElement;
  arrayY3.push(valar33);
  const valar333 = inputElement;
  arrayY4.push(valar333);
  const valar3333 = inputElement;
  arrayY5.push(valar3333);
  const valar33333 = inputElement;
  arrayY6.push(valar33333);
  const valar333333 = inputElement;
  arrayY7.push(valar333333);
  const valar3333333 = inputElement;
  arrayY8.push(valar3333333);
}
function load4() {
  const inputElement = parseFloat(document.getElementById("a4").value);
  const valar4 = inputElement;
  arrayY2.push(valar4);
  const valar44 = inputElement;
  arrayY3.push(valar44);
  const valar444 = inputElement;
  arrayY4.push(valar444);
  const valar4444 = inputElement;
  arrayY5.push(valar4444);
  const valar44444 = inputElement;
  arrayY6.push(valar44444);
  const valar444444 = inputElement;
  arrayY7.push(valar444444);
  const valar4444444 = inputElement;
  arrayY8.push(valar4444444);
}
function load5() {
  const inputElement = parseFloat(document.getElementById("a5").value);
  const valar5 = inputElement;
  arrayY2.push(valar5);
  const valar55 = inputElement;
  arrayY3.push(valar55);
  const valar555 = inputElement;
  arrayY4.push(valar555);
  const valar5555 = inputElement;
  arrayY5.push(valar5555);
  const valar55555 = inputElement;
  arrayY6.push(valar55555);
  const valar555555 = inputElement;
  arrayY7.push(valar555555);
  const valar5555555 = inputElement;
  arrayY8.push(valar5555555);
}


// Mass flow rate & Torque    
// Mass flow rate & Torque    
// Mass flow rate & Torque    
// Mass flow rate & Torque    

// 0% load
function samp11() {
  const inputElement = parseFloat(document.getElementById("b11").value);
  const preresult0 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const preresult = (preresult0.toExponential()); //getting expo value i.e 10^-4
  const num = preresult0;
  const roundedNum = num.toFixed(7);
  const postresult = roundedNum;
  sample1.innerHTML = postresult;
  const valArrX1 = postresult;
  arrayX.push(valArrX1);
  const valmf1 = postresult;
  arrayX8.push(valmf1);
}

function samp12() {
  const inputElement = parseFloat(document.getElementById("a1").value);
  const preresult0 = inputElement * 9.81 * 0.54;
  const num = preresult0;
  const roundedNum = num.toFixed(4);
  // const preresult = (preresult0.toExponential());
  const postresult = roundedNum;
  sample2.innerHTML = postresult;
}

// 25% load
function samp21() {
  const inputElement = parseFloat(document.getElementById("b12").value);
  const preresult0 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const preresult = (preresult0.toExponential()); //getting expo value i.e 10^-4
  const num = preresult0;
  const roundedNum = num.toFixed(7);
  const postresult = roundedNum;
  sample3.innerHTML = postresult;
  const valArrX2 = postresult;
  arrayX.push(valArrX2);
  const valmf2 = postresult;
  arrayX8.push(valmf2);
}

function samp22() {
  const inputElement = parseFloat(document.getElementById("a2").value);
  const preresult0 = inputElement * 9.81 * 0.54;
  const num = preresult0;
  const roundedNum = num.toFixed(4);
  // const preresult = (preresult0.toExponential());
  const postresult = roundedNum;
  sample4.innerHTML = postresult;
}

// 50% load
function samp31() {
  const inputElement = parseFloat(document.getElementById("b13").value);
  const preresult0 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const preresult = (preresult0.toExponential()); //getting expo value i.e 10^-4
  const num = preresult0;
  const roundedNum = num.toFixed(7);
  const postresult = roundedNum;
  sample5.innerHTML = postresult;
  const valArrX3 = postresult;
  arrayX.push(valArrX3);
  const valmf3 = postresult;
  arrayX8.push(valmf3);
}

function samp32() {
  const inputElement = parseFloat(document.getElementById("a3").value);
  const preresult0 = inputElement * 9.81 * 0.54;
  const num = preresult0;
  const roundedNum = num.toFixed(4);
  // const preresult = (preresult0.toExponential());
  const postresult = roundedNum;
  sample6.innerHTML = postresult;
}

// 75% load
function samp41() {
  const inputElement = parseFloat(document.getElementById("b14").value);
  const preresult0 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const preresult = (preresult0.toExponential()); //getting expo value i.e 10^-4
  const num = preresult0;
  const roundedNum = num.toFixed(7);
  const postresult = roundedNum;
  sample7.innerHTML = postresult;
  const valArrX4 = postresult;
  arrayX.push(valArrX4);
  const valmf4 = postresult;
  arrayX8.push(valmf4);
}

function samp42() {
  const inputElement = parseFloat(document.getElementById("a4").value);
  const preresult0 = inputElement * 9.81 * 0.54;
  const num = preresult0;
  const roundedNum = num.toFixed(4);
  // const preresult = (preresult0.toExponential());
  const postresult = roundedNum;
  sample8.innerHTML = postresult;
}
// 100% load
function samp51() {
  const inputElement = parseFloat(document.getElementById("b15").value);
  const preresult0 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const preresult = (preresult0.toExponential()); //getting expo value i.e 10^-4
  const num = preresult0;
  const roundedNum = num.toFixed(7);
  const postresult = roundedNum;
  sample9.innerHTML = postresult;
  const valArrX5 = postresult;
  arrayX.push(valArrX5);
  const valmf5 = postresult;
  arrayX8.push(valmf5);
}

function samp52() {
  const inputElement = parseFloat(document.getElementById("a5").value);
  const preresult0 = inputElement * 9.81 * 0.54;
  const num = preresult0;
  const roundedNum = num.toFixed(4);
  // const preresult = (preresult0.toExponential());
  const postresult = roundedNum;
  sample10.innerHTML = postresult;
}


//          Brake Power     
//          Brake Power     
//          Brake Power     
//          Brake Power     
//          Brake Power     


function bp1() {
  const inputElement1 = parseFloat(document.getElementById("a1").value);
  const inputElement2 = parseFloat(document.getElementById("a11").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const num = preresult0;
  const roundedNum = num.toFixed(4);
  const postresult = roundedNum;
  obp1.innerHTML = postresult;
  const valArrY1 = postresult;
  arrayY.push(valArrY1);
  const valarrY11 = postresult;
  arrayX2.push(valarrY11);
}
function bp2() {
  const inputElement1 = parseFloat(document.getElementById("a2").value);
  const inputElement2 = parseFloat(document.getElementById("a12").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const num = preresult0;
  const roundedNum = num.toFixed(4);
  const postresult = roundedNum;
  obp2.innerHTML = postresult;
  const valArrY2 = postresult;
  arrayY.push(valArrY2);
  const valarrY22 = postresult;
  arrayX2.push(valarrY22);
}
function bp3() {
  const inputElement1 = parseFloat(document.getElementById("a3").value);
  const inputElement2 = parseFloat(document.getElementById("a13").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const num = preresult0;
  const roundedNum = num.toFixed(4);
  const postresult = roundedNum;
  obp3.innerHTML = postresult;
  const valArrY3 = postresult;
  arrayY.push(valArrY3);
  const valarrY33 = postresult;
  arrayX2.push(valarrY33);
}
function bp4() {
  const inputElement1 = parseFloat(document.getElementById("a4").value);
  const inputElement2 = parseFloat(document.getElementById("a14").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const num = preresult0;
  const roundedNum = num.toFixed(4);
  const postresult = roundedNum;
  obp4.innerHTML = postresult;
  const valArrY4 = postresult;
  arrayY.push(valArrY4);
  const valarrY44 = postresult;
  arrayX2.push(valarrY44);
}
function bp5() {
  const inputElement1 = parseFloat(document.getElementById("a5").value);
  const inputElement2 = parseFloat(document.getElementById("a15").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const num = preresult0;
  const roundedNum = num.toFixed(4);
  const postresult = roundedNum;
  obp5.innerHTML = postresult;
  const valArrY5 = postresult;
  arrayY.push(valArrY5);
  const valarrY55 = postresult;
  arrayX2.push(valarrY55);
  // // trials practice
  // obp6.innerHTML = postresult;
  // // trials practice

}

// INDICATED POWER
// INDICATED POWER
// INDICATED POWER
// INDICATED POWER
// INDICATED POWER


function indi1() {
  const inputElement1 = parseFloat(document.getElementById("a1").value);
  const inputElement2 = parseFloat(document.getElementById("a11").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const postresult = preresult0 + 3.14;
  const roundedNum = postresult.toFixed(4);
  ip1.innerHTML = roundedNum;
  const valip1 = roundedNum;
  arrayX3.push(valip1);
}
function indi2() {
  const inputElement1 = parseFloat(document.getElementById("a2").value);
  const inputElement2 = parseFloat(document.getElementById("a12").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const postresult = preresult0 + 3.14;
  const roundedNum = postresult.toFixed(4);
  ip2.innerHTML = roundedNum;
  const valip2 = roundedNum;
  arrayX3.push(valip2);
}
function indi3() {
  const inputElement1 = parseFloat(document.getElementById("a3").value);
  const inputElement2 = parseFloat(document.getElementById("a13").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const postresult = preresult0 + 3.14;
  const roundedNum = postresult.toFixed(4);
  ip3.innerHTML = roundedNum;
  const valip3 = roundedNum;
  arrayX3.push(valip3);
}
function indi4() {
  const inputElement1 = parseFloat(document.getElementById("a4").value);
  const inputElement2 = parseFloat(document.getElementById("a14").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const postresult = preresult0 + 3.14;
  const roundedNum = postresult.toFixed(4);
  ip4.innerHTML = roundedNum;
  const valip4 = roundedNum;
  arrayX3.push(valip4);
}
function indi5() {
  const inputElement1 = parseFloat(document.getElementById("a5").value);
  const inputElement2 = parseFloat(document.getElementById("a15").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const postresult = preresult0 + 3.14;
  const roundedNum = postresult.toFixed(4);
  ip5.innerHTML = roundedNum;
  const valip5 = roundedNum;
  arrayX3.push(valip5);
}


// IMEP
// IMEP
// IMEP
// IMEP
// IMEP

function imep1() {
  const inputElement1 = parseFloat(document.getElementById("a1").value);
  const inputElement2 = parseFloat(document.getElementById("a11").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const ipchivalue = preresult0 + 3.14;
  const imep0 = ipchivalue * Math.pow(10, -3) * 2;
  const imep01 = (Math.PI / 4) * Math.pow(0.11, 3) * (inputElement2 / 60000);
  const impe_semifinal = imep0 / imep01;
  const imep_final = impe_semifinal.toFixed(4);
  imep_val1.innerHTML = imep_final;
}
function imep2() {
  const inputElement1 = parseFloat(document.getElementById("a2").value);
  const inputElement2 = parseFloat(document.getElementById("a12").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const ipchivalue = preresult0 + 3.14;
  const imep0 = ipchivalue * Math.pow(10, -3) * 2;
  const imep01 = (Math.PI / 4) * Math.pow(0.11, 3) * (inputElement2 / 60000);
  const impe_semifinal = imep0 / imep01;
  const imep_final = impe_semifinal.toFixed(4);
  imep_val2.innerHTML = imep_final;
}
function imep3() {
  const inputElement1 = parseFloat(document.getElementById("a3").value);
  const inputElement2 = parseFloat(document.getElementById("a13").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const ipchivalue = preresult0 + 3.14;
  const imep0 = ipchivalue * Math.pow(10, -3) * 2;
  const imep01 = (Math.PI / 4) * Math.pow(0.11, 3) * (inputElement2 / 60000);
  const impe_semifinal = imep0 / imep01;
  const imep_final = impe_semifinal.toFixed(4);
  imep_val3.innerHTML = imep_final;
}
function imep4() {
  const inputElement1 = parseFloat(document.getElementById("a4").value);
  const inputElement2 = parseFloat(document.getElementById("a14").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const ipchivalue = preresult0 + 3.14;
  const imep0 = ipchivalue * Math.pow(10, -3) * 2;
  const imep01 = (Math.PI / 4) * Math.pow(0.11, 3) * (inputElement2 / 60000);
  const impe_semifinal = imep0 / imep01;
  const imep_final = impe_semifinal.toFixed(4);
  imep_val4.innerHTML = imep_final;
}
function imep5() {
  const inputElement1 = parseFloat(document.getElementById("a5").value);
  const inputElement2 = parseFloat(document.getElementById("a15").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const ipchivalue = preresult0 + 3.14;
  const imep0 = ipchivalue * Math.pow(10, -3) * 2;
  const imep01 = (Math.PI / 4) * Math.pow(0.11, 3) * (inputElement2 / 60000);
  const impe_semifinal = imep0 / imep01;
  const imep_final = impe_semifinal.toFixed(4);
  imep_val5.innerHTML = imep_final;
}

// HEAT SUPPLIED & BRAKE THERMAL EFFECIENCY
// HEAT SUPPLIED & BRAKE THERMAL EFFECIENCY
// HEAT SUPPLIED & BRAKE THERMAL EFFECIENCY
// HEAT SUPPLIED & BRAKE THERMAL EFFECIENCY

function hsnbth1() {
  const inputElement = parseFloat(document.getElementById("b11").value);
  const preresult0 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const ratioresult = preresult0 * 45500; //mf value stored
  const num1 = ratioresult.toFixed(4)  // mf value rounded off
  supplied_1.innerHTML = num1;  // heat supplied printed
  const inputElement1 = parseFloat(document.getElementById("a1").value);
  const inputElement2 = parseFloat(document.getElementById("a11").value);
  const preresult001 = inputElement1 * 9.81 * 0.54;
  const preresult002 = 2 * Math.PI * inputElement2 * preresult001 / 60000;
  const bthresult = preresult002 / ratioresult;
  const num2 = bthresult.toFixed(4);
  const num3 = num2 * 100;
  const num4 = num3.toFixed(2);
  bth_1.innerHTML = num4;
  const valbth1 = num4;
  arrayX5.push(valbth1);
}
function hsnbth2() {
  const inputElement = parseFloat(document.getElementById("b12").value);
  const preresult0 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const ratioresult = preresult0 * 45500; //mf value stored
  const num1 = ratioresult.toFixed(4)  // mf value rounded off
  supplied_2.innerHTML = num1;  // heat supplied printed
  const inputElement1 = parseFloat(document.getElementById("a2").value);
  const inputElement2 = parseFloat(document.getElementById("a12").value);
  const preresult001 = inputElement1 * 9.81 * 0.54;
  const preresult002 = 2 * Math.PI * inputElement2 * preresult001 / 60000;
  const bthresult = preresult002 / ratioresult;
  const num2 = bthresult.toFixed(4);
  const num3 = num2 * 100;
  const num4 = num3.toFixed(2);
  bth_2.innerHTML = num4;
  const valbth2 = num4;
  arrayX5.push(valbth2);
}
function hsnbth3() {
  const inputElement = parseFloat(document.getElementById("b13").value);
  const preresult0 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const ratioresult = preresult0 * 45500; //mf value stored
  const num1 = ratioresult.toFixed(4)  // mf value rounded off
  supplied_3.innerHTML = num1;  // heat supplied printed
  const inputElement1 = parseFloat(document.getElementById("a3").value);
  const inputElement2 = parseFloat(document.getElementById("a13").value);
  const preresult001 = inputElement1 * 9.81 * 0.54;
  const preresult002 = 2 * Math.PI * inputElement2 * preresult001 / 60000;
  const bthresult = preresult002 / ratioresult;
  const num2 = bthresult.toFixed(4);
  const num3 = num2 * 100;
  const num4 = num3.toFixed(2);
  bth_3.innerHTML = num4;
  const valbth3 = num4;
  arrayX5.push(valbth3);
}
function hsnbth4() {
  const inputElement = parseFloat(document.getElementById("b14").value);
  const preresult0 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const ratioresult = preresult0 * 45500; //mf value stored
  const num1 = ratioresult.toFixed(4)  // mf value rounded off
  supplied_4.innerHTML = num1;  // heat supplied printed
  const inputElement1 = parseFloat(document.getElementById("a4").value);
  const inputElement2 = parseFloat(document.getElementById("a14").value);
  const preresult001 = inputElement1 * 9.81 * 0.54;
  const preresult002 = 2 * Math.PI * inputElement2 * preresult001 / 60000;
  const bthresult = preresult002 / ratioresult;
  const num2 = bthresult.toFixed(4);
  const num3 = num2 * 100;
  const num4 = num3.toFixed(2);
  bth_4.innerHTML = num4;
  const valbth4 = num4;
  arrayX5.push(valbth4);
}
function hsnbth5() {
  const inputElement = parseFloat(document.getElementById("b15").value);
  const preresult0 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const ratioresult = preresult0 * 45500; //mf value stored
  const num1 = ratioresult.toFixed(4)  // mf value rounded off
  supplied_5.innerHTML = num1;  // heat supplied printed
  const inputElement1 = parseFloat(document.getElementById("a5").value);
  const inputElement2 = parseFloat(document.getElementById("a15").value);
  const preresult001 = inputElement1 * 9.81 * 0.54;
  const preresult002 = 2 * Math.PI * inputElement2 * preresult001 / 60000;
  const bthresult = preresult002 / ratioresult;
  const num2 = bthresult.toFixed(4);
  const num3 = num2 * 100;
  const num4 = num3.toFixed(2);
  bth_5.innerHTML = num4;
  const valbth5 = num4;
  arrayX5.push(valbth5);
}

// BSFC
// BSFC
// BSFC
// BSFC

function bsfc1() {
  const inputElement = parseFloat(document.getElementById("b51").value);
  const kyare = 50 * Math.pow(10, -6) * 820 / inputElement;
  const postres = kyare * 3600;
  const inputElement1 = parseFloat(document.getElementById("a1").value);
  const inputElement2 = parseFloat(document.getElementById("a11").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult000 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const final = postres / preresult000;
  const num = final.toFixed(4); //4.76744186*10-4    6.7279162
  bsfc_1.innerHTML = num;
  const valbsfc1 = num;
  arrayX7.push(valbsfc1);
}
function bsfc2() {
  const inputElement = parseFloat(document.getElementById("b52").value);
  const kyare = 50 * Math.pow(10, -6) * 820 / inputElement;
  const postres = kyare * 3600;
  const inputElement1 = parseFloat(document.getElementById("a2").value);
  const inputElement2 = parseFloat(document.getElementById("a12").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult000 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const final = postres / preresult000;
  const num = final.toFixed(4); //4.76744186*10-4    6.7279162
  bsfc_2.innerHTML = num;
  const valbsfc2 = num;
  arrayX7.push(valbsfc2);
}
function bsfc3() {
  const inputElement = parseFloat(document.getElementById("b53").value);
  const kyare = 50 * Math.pow(10, -6) * 820 / inputElement;
  const postres = kyare * 3600;
  const inputElement1 = parseFloat(document.getElementById("a3").value);
  const inputElement2 = parseFloat(document.getElementById("a13").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult000 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const final = postres / preresult000;
  const num = final.toFixed(4); //4.76744186*10-4    6.7279162
  bsfc_3.innerHTML = num;
  const valbsfc3 = num;
  arrayX7.push(valbsfc3);
}
function bsfc4() {
  const inputElement = parseFloat(document.getElementById("b54").value);
  const kyare = 50 * Math.pow(10, -6) * 820 / inputElement;
  const postres = kyare * 3600;
  const inputElement1 = parseFloat(document.getElementById("a4").value);
  const inputElement2 = parseFloat(document.getElementById("a14").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult000 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const final = postres / preresult000;
  const num = final.toFixed(4); //4.76744186*10-4    6.7279162
  bsfc_4.innerHTML = num;
  const valbsfc4 = num;
  arrayX7.push(valbsfc4);
}
function bsfc5() {
  const inputElement = parseFloat(document.getElementById("b55").value);
  const kyare = 50 * Math.pow(10, -6) * 820 / inputElement;
  const postres = kyare * 3600;
  const inputElement1 = parseFloat(document.getElementById("a5").value);
  const inputElement2 = parseFloat(document.getElementById("a15").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult000 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const final = postres / preresult000;
  const num = final.toFixed(4);
  bsfc_5.innerHTML = num;
  const valbsfc5 = num;
  arrayX7.push(valbsfc5);
}

//HEAT BALANCE -> HEAT SUPLLED
//HEAT BALANCE -> HEAT SUPLLED
//HEAT BALANCE -> HEAT SUPLLED

function hsmin1() {
  const inputElement = parseFloat(document.getElementById("b11").value);
  const preresult0 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const ratioresult = preresult0 * 45500; //mf value stored
  const min_res = ratioresult * 60;
  const final = min_res.toFixed(2);
  hsmin_1.innerHTML = final;
}
function hsmin2() {
  const inputElement = parseFloat(document.getElementById("b12").value);
  const preresult0 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const ratioresult = preresult0 * 45500; //mf value stored
  const min_res = ratioresult * 60;
  const final = min_res.toFixed(2);
  hsmin_2.innerHTML = final;
}
function hsmin3() {
  const inputElement = parseFloat(document.getElementById("b13").value);
  const preresult0 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const ratioresult = preresult0 * 45500; //mf value stored
  const min_res = ratioresult * 60;
  const final = min_res.toFixed(2);
  hsmin_3.innerHTML = final;
}
function hsmin4() {
  const inputElement = parseFloat(document.getElementById("b14").value);
  const preresult0 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const ratioresult = preresult0 * 45500; //mf value stored
  const min_res = ratioresult * 60;
  const final = min_res.toFixed(2);
  hsmin_4.innerHTML = final;
}
function hsmin5() {
  const inputElement = parseFloat(document.getElementById("b15").value);
  const preresult0 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const ratioresult = preresult0 * 45500; //mf value stored
  const min_res = ratioresult * 60;
  const final = min_res.toFixed(2);
  hsmin_5.innerHTML = final;
}

//BRAKE POWER HEAT
//BRAKE POWER HEAT
//BRAKE POWER HEAT

function bph1() {
  const inputElement1 = parseFloat(document.getElementById("a1").value);
  const inputElement2 = parseFloat(document.getElementById("a11").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const final = preresult0 * 60;
  const num = final.toFixed(2);
  bph_1.innerHTML = num;
}
function bph2() {
  const inputElement1 = parseFloat(document.getElementById("a2").value);
  const inputElement2 = parseFloat(document.getElementById("a12").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const final = preresult0 * 60;
  const num = final.toFixed(2);
  bph_2.innerHTML = num;
}
function bph3() {
  const inputElement1 = parseFloat(document.getElementById("a3").value);
  const inputElement2 = parseFloat(document.getElementById("a13").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const final = preresult0 * 60;
  const num = final.toFixed(2);
  bph_3.innerHTML = num;
}
function bph4() {
  const inputElement1 = parseFloat(document.getElementById("a4").value);
  const inputElement2 = parseFloat(document.getElementById("a14").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const final = preresult0 * 60;
  const num = final.toFixed(2);
  bph_4.innerHTML = num;
}
function bph5() {
  const inputElement1 = parseFloat(document.getElementById("a5").value);
  const inputElement2 = parseFloat(document.getElementById("a15").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000;
  const final = preresult0 * 60;
  const num = final.toFixed(2);
  bph_5.innerHTML = num;
}

//Heat gained by Cooling Jacket
//Heat gained by Cooling Jacket
//Heat gained by Cooling Jacket

function hgc1() {
  const inputElement1 = parseFloat(document.getElementById("b31").value);
  const inputElement2 = parseFloat(document.getElementById("b41").value);
  const inputElement3 = parseFloat(document.getElementById("b51").value);
  const post = (inputElement2 - inputElement1) * 4.18 * 5 * 60 / inputElement3;
  const pre = post.toFixed(2);
  hgc_1.innerHTML = pre;
}
function hgc2() {
  const inputElement1 = parseFloat(document.getElementById("b32").value);
  const inputElement2 = parseFloat(document.getElementById("b42").value);
  const inputElement3 = parseFloat(document.getElementById("b52").value);
  const post = (inputElement2 - inputElement1) * 4.18 * 5 * 60 / inputElement3;
  const pre = post.toFixed(2);
  hgc_2.innerHTML = pre;
}
function hgc3() {
  const inputElement1 = parseFloat(document.getElementById("b33").value);
  const inputElement2 = parseFloat(document.getElementById("b43").value);
  const inputElement3 = parseFloat(document.getElementById("b53").value);
  const post = (inputElement2 - inputElement1) * 4.18 * 5 * 60 / inputElement3;
  const pre = post.toFixed(2);
  hgc_3.innerHTML = pre;
}
function hgc4() {
  const inputElement1 = parseFloat(document.getElementById("b34").value);
  const inputElement2 = parseFloat(document.getElementById("b44").value);
  const inputElement3 = parseFloat(document.getElementById("b54").value);
  const post = (inputElement2 - inputElement1) * 4.18 * 5 * 60 / inputElement3;
  const pre = post.toFixed(2);
  hgc_4.innerHTML = pre;
}
function hgc5() {
  const inputElement1 = parseFloat(document.getElementById("b35").value);
  const inputElement2 = parseFloat(document.getElementById("b45").value);
  const inputElement3 = parseFloat(document.getElementById("b55").value);
  const post = (inputElement2 - inputElement1) * 4.18 * 5 * 60 / inputElement3;
  const pre = post.toFixed(2);
  hgc_5.innerHTML = pre;
}

//Heat in Exhaust Gases
//Heat in Exhaust Gases
//Heat in Exhaust Gases

function heg1() {
  const inputElement1 = parseFloat(document.getElementById("b21").value);
  const exhaust = 0.0192 * 60 * (inputElement1 - 27);
  const result = exhaust.toFixed(2);
  heg_1.innerHTML = result;
}
function heg2() {
  const inputElement1 = parseFloat(document.getElementById("b22").value);
  const exhaust = 0.0192 * 60 * (inputElement1 - 27);
  const result = exhaust.toFixed(2);
  heg_2.innerHTML = result;
}
function heg3() {
  const inputElement1 = parseFloat(document.getElementById("b23").value);
  const exhaust = 0.0192 * 60 * (inputElement1 - 27);
  const result = exhaust.toFixed(2);
  heg_3.innerHTML = result;
}
function heg4() {
  const inputElement1 = parseFloat(document.getElementById("b24").value);
  const exhaust = 0.0192 * 60 * (inputElement1 - 27);
  const result = exhaust.toFixed(2);
  heg_4.innerHTML = result;
}
function heg5() {
  const inputElement1 = parseFloat(document.getElementById("b25").value);
  const exhaust = 0.0192 * 60 * (inputElement1 - 27);
  const result = exhaust.toFixed(2);
  heg_5.innerHTML = result;
}

// Miscellaneous Heat Loss
// Miscellaneous Heat Loss
// Miscellaneous Heat Loss

function mhl1() {
  //heat supplies
  const inputElement = parseFloat(document.getElementById("b11").value);
  const preresult0 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const ratioresult = preresult0 * 45500; //mf value stored
  const min_res = ratioresult * 60;
  // const final = min_res.toFixed(2);
  //brake heat power
  const inputElement11 = parseFloat(document.getElementById("a1").value);
  const inputElement22 = parseFloat(document.getElementById("a11").value);
  const preresult01 = inputElement11 * 9.81 * 0.54;
  const preresult00 = 2 * Math.PI * inputElement22 * preresult01 / 60000;
  const final1 = preresult00 * 60;
  // const num = final1.toFixed(2);
  //cooling water
  const inputElement101 = parseFloat(document.getElementById("b31").value);
  const inputElement2 = parseFloat(document.getElementById("b41").value);
  const inputElement3 = parseFloat(document.getElementById("b51").value);
  const post = (inputElement2 - inputElement101) * 4.18 * 5 * 60 / inputElement3;
  // const pre = post.toFixed(2);
  //Exhaust gas
  const inputElement1 = parseFloat(document.getElementById("b21").value);
  const exhaust = 0.0192 * 60 * (inputElement1 - 27);
  // const result = exhaust.toFixed(2);
  //Now formulae for miscellaneous
  const miss = min_res - (exhaust + post + final1);
  const missfinal = miss.toFixed(2);
  mhl_1.innerHTML = missfinal;
}
function mhl2() {
  //heat supplies
  const inputElement = parseFloat(document.getElementById("b12").value);
  const preresult0 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const ratioresult = preresult0 * 45500; //mf value stored
  const min_res = ratioresult * 60;
  // const final = min_res.toFixed(2);
  //brake heat power
  const inputElement11 = parseFloat(document.getElementById("a2").value);
  const inputElement22 = parseFloat(document.getElementById("a12").value);
  const preresult01 = inputElement11 * 9.81 * 0.54;
  const preresult00 = 2 * Math.PI * inputElement22 * preresult01 / 60000;
  const final1 = preresult00 * 60;
  // const num = final1.toFixed(2);
  //cooling water
  const inputElement101 = parseFloat(document.getElementById("b25").value);
  const inputElement2 = parseFloat(document.getElementById("b42").value);
  const inputElement3 = parseFloat(document.getElementById("b52").value);
  const post = (inputElement2 - inputElement101) * 4.18 * 5 * 60 / inputElement3;
  // const pre = post.toFixed(2);
  //Exhaust gas
  const inputElement1 = parseFloat(document.getElementById("b22").value);
  const exhaust = 0.0192 * 60 * (inputElement1 - 27);
  // const result = exhaust.toFixed(2);
  //Now formulae for miscellaneous
  const miss = min_res - (exhaust + post + final1);
  const missfinal = miss.toFixed(2);
  mhl_2.innerHTML = missfinal;
}
function mhl3() {
  //heat supplies
  const inputElement = parseFloat(document.getElementById("b13").value);
  const preresult0 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const ratioresult = preresult0 * 45500; //mf value stored
  const min_res = ratioresult * 60;
  // const final = min_res.toFixed(2);
  //brake heat power
  const inputElement11 = parseFloat(document.getElementById("a3").value);
  const inputElement22 = parseFloat(document.getElementById("a13").value);
  const preresult01 = inputElement11 * 9.81 * 0.54;
  const preresult00 = 2 * Math.PI * inputElement22 * preresult01 / 60000;
  const final1 = preresult00 * 60;
  // const num = final1.toFixed(2);
  //cooling water
  const inputElement101 = parseFloat(document.getElementById("b33").value);
  const inputElement2 = parseFloat(document.getElementById("b43").value);
  const inputElement3 = parseFloat(document.getElementById("b53").value);
  const post = (inputElement2 - inputElement101) * 4.18 * 5 * 60 / inputElement3;
  // const pre = post.toFixed(2);
  //Exhaust gas
  const inputElement1 = parseFloat(document.getElementById("b23").value);
  const exhaust = 0.0192 * 60 * (inputElement1 - 27);
  // const result = exhaust.toFixed(2);
  //Now formulae for miscellaneous
  const miss = min_res - (exhaust + post + final1);
  const missfinal = miss.toFixed(2);
  mhl_3.innerHTML = missfinal;
}
function mhl4() {
  //heat supplies
  const inputElement = parseFloat(document.getElementById("b14").value);
  const preresult0 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const ratioresult = preresult0 * 45500; //mf value stored
  const min_res = ratioresult * 60;
  // const final = min_res.toFixed(2);
  //brake heat power
  const inputElement11 = parseFloat(document.getElementById("a4").value);
  const inputElement22 = parseFloat(document.getElementById("a14").value);
  const preresult01 = inputElement11 * 9.81 * 0.54;
  const preresult00 = 2 * Math.PI * inputElement22 * preresult01 / 60000;
  const final1 = preresult00 * 60;
  // const num = final1.toFixed(2);
  //cooling water
  const inputElement101 = parseFloat(document.getElementById("b34").value);
  const inputElement2 = parseFloat(document.getElementById("b44").value);
  const inputElement3 = parseFloat(document.getElementById("b54").value);
  const post = (inputElement2 - inputElement101) * 4.18 * 5 * 60 / inputElement3;
  // const pre = post.toFixed(2);
  //Exhaust gas
  const inputElement1 = parseFloat(document.getElementById("b24").value);
  const exhaust = 0.0192 * 60 * (inputElement1 - 27);
  // const result = exhaust.toFixed(2);
  //Now formulae for miscellaneous
  const miss = min_res - (exhaust + post + final1);
  const missfinal = miss.toFixed(2);
  mhl_4.innerHTML = missfinal;
}
function mhl5() {
  //heat supplies
  const inputElement = parseFloat(document.getElementById("b15").value);
  const preresult0 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const ratioresult = preresult0 * 45500; //mf value stored
  const min_res = ratioresult * 60;
  // const final = min_res.toFixed(2);
  //brake heat power
  const inputElement11 = parseFloat(document.getElementById("a5").value);
  const inputElement22 = parseFloat(document.getElementById("a15").value);
  const preresult01 = inputElement11 * 9.81 * 0.54;
  const preresult00 = 2 * Math.PI * inputElement22 * preresult01 / 60000;
  const final1 = preresult00 * 60;
  // const num = final1.toFixed(2);
  //cooling water
  const inputElement101 = parseFloat(document.getElementById("b35").value);
  const inputElement2 = parseFloat(document.getElementById("b45").value);
  const inputElement3 = parseFloat(document.getElementById("b55").value);
  const post = (inputElement2 - inputElement101) * 4.18 * 5 * 60 / inputElement3;
  // const pre = post.toFixed(2);
  //Exhaust gas
  const inputElement1 = parseFloat(document.getElementById("b25").value);
  const exhaust = 0.0192 * 60 * (inputElement1 - 27);
  // const result = exhaust.toFixed(2);
  //Now formulae for miscellaneous
  const miss = min_res - (exhaust + post + final1);
  const missfinal = miss.toFixed(2);
  mhl_5.innerHTML = missfinal;
}

//mechanical effeciency
//mechanical effeciency
//mechanical effeciency

function meff1() {
  const inputElement1 = parseFloat(document.getElementById("a1").value);
  const inputElement2 = parseFloat(document.getElementById("a11").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000; //BP
  const postresult = preresult0 + 3.14; //IP
  const ratio = (preresult0 / postresult) * 100;
  const newratio = ratio.toFixed(2);
  meff_1.innerHTML = newratio;
  const valnmech1 = newratio;
  arrayX4.push(valnmech1);
}
function meff2() {
  const inputElement1 = parseFloat(document.getElementById("a2").value);
  const inputElement2 = parseFloat(document.getElementById("a12").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000; //BP
  const postresult = preresult0 + 3.14; //IP
  const ratio = (preresult0 / postresult) * 100;
  const newratio = ratio.toFixed(2);
  meff_2.innerHTML = newratio;
  const valnmech2 = newratio;
  arrayX4.push(valnmech2);
}
function meff3() {
  const inputElement1 = parseFloat(document.getElementById("a3").value);
  const inputElement2 = parseFloat(document.getElementById("a13").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000; //BP
  const postresult = preresult0 + 3.14; //IP
  const ratio = (preresult0 / postresult) * 100;
  const newratio = ratio.toFixed(2);
  meff_3.innerHTML = newratio;
  const valnmech3 = newratio;
  arrayX4.push(valnmech3);
}
function meff4() {
  const inputElement1 = parseFloat(document.getElementById("a4").value);
  const inputElement2 = parseFloat(document.getElementById("a14").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000; //BP
  const postresult = preresult0 + 3.14; //IP
  const ratio = (preresult0 / postresult) * 100;
  const newratio = ratio.toFixed(2);
  meff_4.innerHTML = newratio;
  const valnmech4 = newratio;
  arrayX4.push(valnmech4);
}
function meff5() {
  const inputElement1 = parseFloat(document.getElementById("a5").value);
  const inputElement2 = parseFloat(document.getElementById("a15").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000; //BP
  const postresult = preresult0 + 3.14; //IP
  const ratio = (preresult0 / postresult) * 100;
  const newratio = ratio.toFixed(2);
  meff_5.innerHTML = newratio;
  const valnmech5 = newratio;
  arrayX4.push(valnmech5);
}

//Indicated Thermal Effeciency
//Indicated Thermal Effeciency
//Indicated Thermal Effeciency

function itf1() {
  const inputElement1 = parseFloat(document.getElementById("a1").value);
  const inputElement2 = parseFloat(document.getElementById("a11").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000; //BP
  const postresult = preresult0 + 3.14; //IP
  const inputElement = parseFloat(document.getElementById("b11").value);
  const preresult000 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const ratioresult = preresult000 * 45500; //mf value stored
  const final = (postresult / ratioresult) * 100;
  const yesfinal = final.toFixed(2);
  itf_1.innerHTML = yesfinal;
  const nit1 = yesfinal;
  arrayX6.push(nit1);
}
function itf2() {
  const inputElement1 = parseFloat(document.getElementById("a2").value);
  const inputElement2 = parseFloat(document.getElementById("a12").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000; //BP
  const postresult = preresult0 + 3.14; //IP
  const inputElement = parseFloat(document.getElementById("b12").value);
  const preresult000 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const ratioresult = preresult000 * 45500; //mf value stored
  const final = (postresult / ratioresult) * 100;
  const yesfinal = final.toFixed(2);
  itf_2.innerHTML = yesfinal;
  const nit2 = yesfinal;
  arrayX6.push(nit2);
}
function itf3() {
  const inputElement1 = parseFloat(document.getElementById("a3").value);
  const inputElement2 = parseFloat(document.getElementById("a13").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000; //BP
  const postresult = preresult0 + 3.14; //IP
  const inputElement = parseFloat(document.getElementById("b13").value);
  const preresult000 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const ratioresult = preresult000 * 45500; //mf value stored
  const final = (postresult / ratioresult) * 100;
  const yesfinal = final.toFixed(2);
  itf_3.innerHTML = yesfinal;
  const nit3 = yesfinal;
  arrayX6.push(nit3);
}
function itf4() {
  const inputElement1 = parseFloat(document.getElementById("a4").value);
  const inputElement2 = parseFloat(document.getElementById("a14").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000; //BP
  const postresult = preresult0 + 3.14; //IP
  const inputElement = parseFloat(document.getElementById("b14").value);
  const preresult000 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const ratioresult = preresult000 * 45500; //mf value stored
  const final = (postresult / ratioresult) * 100;
  const yesfinal = final.toFixed(2);
  itf_4.innerHTML = yesfinal;
  const nit4 = yesfinal;
  arrayX6.push(nit4);
}
function itf5() {
  const inputElement1 = parseFloat(document.getElementById("a5").value);
  const inputElement2 = parseFloat(document.getElementById("a15").value);
  const preresult01 = inputElement1 * 9.81 * 0.54;
  const preresult0 = 2 * Math.PI * inputElement2 * preresult01 / 60000; //BP
  const postresult = preresult0 + 3.14; //IP
  const inputElement = parseFloat(document.getElementById("b15").value);
  const preresult000 = 50 * Math.pow(10, -6) * 820 / inputElement;
  const ratioresult = preresult000 * 45500; //mf value stored
  const final = (postresult / ratioresult) * 100;
  const yesfinal = final.toFixed(2);
  itf_5.innerHTML = yesfinal;
  const nit5 = yesfinal;
  arrayX6.push(nit5);
}







// BUTTON | change btn*N* to btn*N+1* i.e btn1 to btn2
//BUTTON - 1
const btn1 = document.getElementById("btn_Smp_mf");
btn1.addEventListener('click', function () {
  load1(NaN); load2(NaN); load3(NaN); load4(NaN); load5(NaN);
  samp11(NaN); samp12(NaN); samp21(NaN); samp22(NaN); samp31(NaN); samp32(NaN); samp41(NaN); samp42(NaN); samp51(NaN); samp52(NaN); bp1(NaN); bp2(NaN); bp3(NaN); bp4(NaN); bp5(NaN); indi1(NaN); indi2(NaN); indi3(NaN); indi4(NaN); indi5(NaN); imep1(NaN); imep2(NaN); imep3(NaN); imep4(NaN); imep5(NaN); hsnbth1(NaN); hsnbth2(NaN); hsnbth3(NaN); hsnbth4(NaN); hsnbth5(NaN); bsfc1(NaN); bsfc2(NaN); bsfc3(NaN); bsfc4(NaN); bsfc5(NaN); hsmin1(NaN); hsmin2(NaN); hsmin3(NaN); hsmin4(NaN); hsmin5(NaN); bph1(NaN); bph2(NaN); bph3(NaN); bph4(NaN); bph5(NaN); hgc1(NaN); hgc2(NaN); hgc3(NaN); hgc4(NaN); hgc5(NaN); heg1(NaN); heg2(NaN); heg3(NaN); heg4(NaN); heg5(NaN); mhl1(NaN); mhl2(NaN); mhl3(NaN); mhl4(NaN); mhl5(NaN); meff1(NaN); meff2(NaN); meff3(NaN); meff4(NaN); meff5(NaN);
  itf1(NaN); itf2(NaN); itf3(NaN); itf4(NaN); itf5(NaN);
  samp11(NaN); samp12(NaN); samp21(NaN); samp22(NaN); samp31(NaN); samp32(NaN); samp41(NaN); samp42(NaN); samp51(NaN); samp52(NaN); bp1(NaN); bp2(NaN); bp3(NaN); bp4(NaN); bp5(NaN);
  // pushValue();
})




//B.P Vs. Mf button
const btn2 = document.getElementById("bpvsmf");
btn2.addEventListener('click', function () { pushValue(); })
//load vs BP 
const btn3 = document.getElementById("loadvsbp");
btn3.addEventListener('click', function () { pushValue2(); })
//load vs IP
const btn4 = document.getElementById("loadvsip");
btn4.addEventListener('click', function () { pushValue3(); })
//load vs n-mech
const btn5 = document.getElementById("loadvsnmech");
btn5.addEventListener('click', function () { pushValue4(); })
//load vs n-bth
const btn6 = document.getElementById("loadvsnbth");
btn6.addEventListener('click', function () { pushValue5(); })
//load vs n-ith
const btn7 = document.getElementById("loadvsnith");
btn7.addEventListener('click', function () { pushValue6(); })
//load vs bsfc
const btn8 = document.getElementById("loadvsbsfc");
btn8.addEventListener('click', function () { pushValue7(); })
//load vs mf
const btn9 = document.getElementById("loadvsmf");
btn9.addEventListener('click', function () { pushValue8(); })






// GLOBAL VARIBALES
//B.P vs. Mf
const arrayX = [];
const arrayY = [];
//load vs BP 
const arrayX2 = [];
const arrayY2 = [];
//load vs IP
const arrayX3 = [];
const arrayY3 = [];
//load vs n-mech
const arrayX4 = [];
const arrayY4 = [];
//load vs n-bth
const arrayX5 = [];
const arrayY5 = [];
//load vs n-ith
const arrayX6 = [];
const arrayY6 = [];
//load vs bsfc
const arrayX7 = [];
const arrayY7 = [];
//load vs mf
const arrayX8 = [];
const arrayY8 = [];






//B.P vs. Mf


function pushValue() {    //FUNCTION STARTS HERE --1

  const arrayY1 = arrayX.slice();
  const arrayX1 = arrayY.slice();

  const intArray1 = [];

  for (let i = 0; i < arrayX1.length; i++) {
    const num = parseInt(arrayX1[i]);
    if (!isNaN(num)) {
      intArray1.push(num);
    }
  }

  const intArray2 = [];

  for (let i = 0; i < arrayY1.length; i++) {
    const num = parseInt(arrayY1[i]);
    if (!isNaN(num)) {
      intArray2.push(num);
    }
  }


  // Create a new Chart.js chart
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: intArray1, // use arrayX as labels for the X-axis
      datasets: [{
        data: intArray2, // use arrayY as the data for the Y-axis
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderWidth: 1,
        fill: false // set fill to false to remove area fill below the line
      }]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            stepSize: 0.0000001
          }
        }],
        yAxes: [{
          ticks: {
            stepSize: 0.0001
          }
        }]
      }
    }
  });
}               //FUNCTION ENDS HERE --1

//load vs BP

function pushValue2() {    //FUNCTION STARTS HERE --1

  const arrayY1 = arrayX2.slice();
  const arrayX1 = arrayY2.slice();

  const intArray1 = [];

  for (let i = 0; i < arrayX1.length; i++) {
    const num = parseInt(arrayX1[i]);
    if (!isNaN(num)) {
      intArray1.push(num);
    }
  }

  const intArray2 = [];

  for (let i = 0; i < arrayY1.length; i++) {
    const num = parseInt(arrayY1[i]);
    if (!isNaN(num)) {
      intArray2.push(num);
    }
  }


  // Create a new Chart.js chart
  const ctx = document.getElementById('myChart2').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: intArray1, // use arrayX as labels for the X-axis
      datasets: [{
        data: intArray2, // use arrayY as the data for the Y-axis
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderWidth: 1,
        fill: false // set fill to false to remove area fill below the line
      }]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            stepSize: 0.0000001
          }
        }],
        yAxes: [{
          ticks: {
            stepSize: 0.0001
          }
        }]
      }
    }
  });


}


//load vs IP

function pushValue3() {    //FUNCTION STARTS HERE --1

  const arrayY1 = arrayX3.slice();
  const arrayX1 = arrayY3.slice();

  const intArray1 = [];

  for (let i = 0; i < arrayX1.length; i++) {
    const num = parseInt(arrayX1[i]);
    if (!isNaN(num)) {
      intArray1.push(num);
    }
  }

  const intArray2 = [];

  for (let i = 0; i < arrayY1.length; i++) {
    const num = parseInt(arrayY1[i]);
    if (!isNaN(num)) {
      intArray2.push(num);
    }
  }


  // Create a new Chart.js chart
  const ctx = document.getElementById('myChart3').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: intArray1, // use arrayX as labels for the X-axis
      datasets: [{
        data: intArray2, // use arrayY as the data for the Y-axis
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderWidth: 1,
        fill: false // set fill to false to remove area fill below the line
      }]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            stepSize: 0.0000001
          }
        }],
        yAxes: [{
          ticks: {
            stepSize: 0.0001
          }
        }]
      }
    }
  });
}


//load vs n-mech

function pushValue4() {    //FUNCTION STARTS HERE --1

  const arrayY1 = arrayX4.slice();
  const arrayX1 = arrayY4.slice();

  const intArray1 = [];

  for (let i = 0; i < arrayX1.length; i++) {
    const num = parseInt(arrayX1[i]);
    if (!isNaN(num)) {
      intArray1.push(num);
    }
  }

  const intArray2 = [];

  for (let i = 0; i < arrayY1.length; i++) {
    const num = parseInt(arrayY1[i]);
    if (!isNaN(num)) {
      intArray2.push(num);
    }
  }


  // Create a new Chart.js chart
  const ctx = document.getElementById('myChart4').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: intArray1, // use arrayX as labels for the X-axis
      datasets: [{
        data: intArray2, // use arrayY as the data for the Y-axis
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderWidth: 1,
        fill: false // set fill to false to remove area fill below the line
      }]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            stepSize: 0.0000001
          }
        }],
        yAxes: [{
          ticks: {
            stepSize: 0.0001
          }
        }]
      }
    }
  });
}

//load vs n-bth

function pushValue5() {    //FUNCTION STARTS HERE --1

  const arrayY1 = arrayX5.slice();
  const arrayX1 = arrayY5.slice();

  const intArray1 = [];

  for (let i = 0; i < arrayX1.length; i++) {
    const num = parseInt(arrayX1[i]);
    if (!isNaN(num)) {
      intArray1.push(num);
    }
  }

  const intArray2 = [];

  for (let i = 0; i < arrayY1.length; i++) {
    const num = parseInt(arrayY1[i]);
    if (!isNaN(num)) {
      intArray2.push(num);
    }
  }


  // Create a new Chart.js chart
  const ctx = document.getElementById('myChart5').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: intArray1, // use arrayX as labels for the X-axis
      datasets: [{
        data: intArray2, // use arrayY as the data for the Y-axis
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderWidth: 1,
        fill: false // set fill to false to remove area fill below the line
      }]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            stepSize: 0.0000001
          }
        }],
        yAxes: [{
          ticks: {
            stepSize: 0.0001
          }
        }]
      }
    }
  });
}


//load vs n-ith

function pushValue6() {    //FUNCTION STARTS HERE --1

  const arrayY1 = arrayX6.slice();
  const arrayX1 = arrayY6.slice();

  const intArray1 = [];

  for (let i = 0; i < arrayX1.length; i++) {
    const num = parseInt(arrayX1[i]);
    if (!isNaN(num)) {
      intArray1.push(num);
    }
  }

  const intArray2 = [];

  for (let i = 0; i < arrayY1.length; i++) {
    const num = parseInt(arrayY1[i]);
    if (!isNaN(num)) {
      intArray2.push(num);
    }
  }


  // Create a new Chart.js chart
  const ctx = document.getElementById('myChart6').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: intArray1, // use arrayX as labels for the X-axis
      datasets: [{
        data: intArray2, // use arrayY as the data for the Y-axis
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderWidth: 1,
        fill: false // set fill to false to remove area fill below the line
      }]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            stepSize: 0.0000001
          }
        }],
        yAxes: [{
          ticks: {
            stepSize: 0.0001
          }
        }]
      }
    }
  });
}

//load vs bsfc

function pushValue7() {    //FUNCTION STARTS HERE --1

  const arrayY1 = arrayX7.slice();
  const arrayX1 = arrayY7.slice();

  const intArray1 = [];

  for (let i = 0; i < arrayX1.length; i++) {
    const num = parseInt(arrayX1[i]);
    if (!isNaN(num)) {
      intArray1.push(num);
    }
  }

  const intArray2 = [];

  for (let i = 0; i < arrayY1.length; i++) {
    const num = parseInt(arrayY1[i]);
    if (!isNaN(num)) {
      intArray2.push(num);
    }
  }


  // Create a new Chart.js chart
  const ctx = document.getElementById('myChart7').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: intArray1, // use arrayX as labels for the X-axis
      datasets: [{
        data: intArray2, // use arrayY as the data for the Y-axis
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderWidth: 1,
        fill: false // set fill to false to remove area fill below the line
      }]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            stepSize: 0.0000001
          }
        }],
        yAxes: [{
          ticks: {
            stepSize: 0.0001
          }
        }]
      }
    }
  });
}

//load vs mf

function pushValue8() {    //FUNCTION STARTS HERE --1

  const arrayY1 = arrayX8.slice();
  const arrayX1 = arrayY8.slice();

  const intArray1 = [];

  for (let i = 0; i < arrayX1.length; i++) {
    const num = parseInt(arrayX1[i]);
    if (!isNaN(num)) {
      intArray1.push(num);
    }
  }

  const intArray2 = [];

  for (let i = 0; i < arrayY1.length; i++) {
    const num = parseInt(arrayY1[i]);
    if (!isNaN(num)) {
      intArray2.push(num);
    }
  }
  // Create a new Chart.js chart
  const ctx = document.getElementById('myChart8').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: intArray1, // use arrayX as labels for the X-axis
      datasets: [{
        data: intArray2, // use arrayY as the data for the Y-axis
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderWidth: 1,
        fill: false // set fill to false to remove area fill below the line
      }]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            stepSize: 0.0000001
          }
        }],
        yAxes: [{
          ticks: {
            stepSize: 0.0001
          }
        }]
      }
    }
  });
} 
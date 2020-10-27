/**
 * Verkefni 7 – Caesar dulmál
 */

const LETTERS = `AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ`;

/**
 * Byrja forrit.
 */

function start() {
  alert('Halló!');
  promptEncode();
}

function promptstr(action, n) {
  let strengur = prompt(`Gefðu upp strenginn sem á að ${action} með hliðrun ${n}`)
  if (typeof strengur !== 'string') {
    prompt('Þú gafst ekki upp streng. Reyndu aftur.');
    return start();
  } else {
    var invalid = [];
    for (let i = 0; i < strengur.length; i++) {
      if (!LETTERS.includes(strengur[i].toLocaleUpperCase())) {
        invalid.push(strengur[i]);
      }
    }

    if (invalid.length > 0) {
      alert(`Þú gafst upp stafi sem ekki er hægt að ${action}: ${invalid.join(', ')}. Reyndu aftur.`);
      return start();
    } else {
      let answer;
      if (action == "kóða") {
        answer = encode(strengur, n);
      } else if (action == "afkóða") {
        answer = decode(strengur, n);
      }
      alert(answer)
    }
  }
}

function promptNumber(action) {
  let numberStr = prompt('Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]')
  let number = Number.parseInt(numberStr);
  if (Number.isInteger(number) && number > 0 && number < 32) {
    promptstr(action, number);
  } else {
    alert(`${numberStr} er ekki heiltala á bilinu [1, 31]. Reyndu aftur.`);
    return start();
  }
}

function promptEncode() {
  let action = prompt('Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“');
  if (action === "kóða" || action === "afkóða") {
    promptNumber(action);
  } else {
    alert(`Veit ekki hvaða aðgerð „${action}“ er. Reyndu aftur.`);
    return start();
  }
}

start();

/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */
function encode(str, n) {
  str = str.toLocaleUpperCase();
  var encodedStr = '';
  for (let i = 0; i < str.length; i++) {

    let j = 0;
    while (LETTERS[j] !== str[i] && j < LETTERS.length) {
      j++;
    }

    let x = j + n;
    if (x >= 32) {
      x = x - 32;
    }

    encodedStr += LETTERS[x];
  }
  console.log(encodedStr)
  return encodedStr;
}

/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */
function decode(str, n) {
  str = str.toLocaleUpperCase();
  var decodedStr = '';
  for (let i = 0; i < str.length; i++) {

    let j = 0;
    while (LETTERS[j] !== str[i] && j < LETTERS.length) {
      j++;
    }

    let x = (j - n >= 0) ? j - n : j - n + 32;
    decodedStr += LETTERS[x];

  }
  return decodedStr;
}

console.assert(encode('A', 3) === 'D', 'kóðun á A með n=3 er D');
console.assert(decode('D', 3) === 'A', 'afkóðun á D með n=3 er A');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 32) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'kóðun með n=32 er byrjunarstrengur');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 3) === 'DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 'kóðun á stafrófi með n=3');
console.assert(decode('DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 3) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'afkóðun á stafrófi með n=3');
console.assert(decode(encode('HALLÓHEIMUR', 13), 13) === 'HALLÓHEIMUR', 'kóðun og afkóðun eru andhverf');
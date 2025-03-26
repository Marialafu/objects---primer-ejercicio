// El objeto con el que jugarás será este:

const towerData = {
  levelOne: {
    vowels: [] // Vocales extraídas
  },
  levelTwo: {
    consonants: [] // Consonantes extraídas
  },
  levelThree: {
    words: [] // Palabras extraídas en orden normal
  },
  levelFour: {
    wordLengths: [] // Longitud de cada palabra
  },
  levelFive: {
    uppercasedWords: [], // Palabras en mayúsculas
    lowercasedWords: [] // Palabras en minúsculas
  },
  levelSix: {
    secretMessage: '' // Mensaje codificado usando reglas especiales
  },
  levelSeven: {
    totalLength: 0 // Suma total de la longitud de todas las palabras
  },
  levelEight: {
    reversedWords: [] // Palabras invertidas de la frase original
  },
  levelNine: {
    randomCode: '' // Código aleatorio generado en base a toda la información
  },
  levelTen: {
    finalMessage: '' // Código final calculado usando todos los niveles
  }
};
console.log(towerData);

// 🎯 Objetivo General:
// Procesar una frase introducida por el usuario y transformarla siguiendo reglas específicas en cada nivel.

// 🏰 Niveles y Reglas:

// 1️⃣ Nivel Uno: La Cámara de las Voces Perdidas
// Extrae todas las vocales de la frase introducida y almacénalas en towerData.levelOne.vowels.

const vowels = 'AEIOUaeiouáéíóúÁÉÍÓÚ';

const extractVowels = sentence => {
  const extractedVowels = [];
  for (const letter of sentence) {
    if (vowels.includes(letter)) {
      extractedVowels.push(letter);
    }
  }
  towerData.levelOne.vowels = extractedVowels;
  return extractedVowels;
};

// 2️⃣ Nivel Dos: La Biblioteca de Consonantes Prohibidas
// Extrae todas las consonantes de la frase y almacénalas en towerData.levelTwo.consonants.

const extractConsonants = sentence => {
  const extractedConsonants = [];
  for (const letter of sentence) {
    if (!vowels.includes(letter) && letter !== ' ') {
      extractedConsonants.push(letter);
    }
  }
  towerData.levelTwo.consonants = extractedConsonants;
  return extractedConsonants;
};

// 3️⃣ Nivel Tres: El Salón de las Palabras Fragmentadas
// Divide la frase en palabras y guárdalas en towerData.levelThree.words.

const divideSentenceInWords = sentence => {
  const wordsDivided = sentence.split(' ');
  towerData.levelThree.words = wordsDivided;
  return wordsDivided;
};

// 4️⃣ Nivel Cuatro: La Sala de la Longitud Eterna
// Calcula la longitud de cada palabra de towerData.levelThree.words y guárdalas en towerData.levelFour.wordLengths.

const calculateWordsLenght = wordsArray => {
  const allWordsLenght = [];
  for (const word of wordsArray) {
    allWordsLenght.push(word.length);
  }
  towerData.levelFour = allWordsLenght;
  return allWordsLenght;
};

// 5️⃣ Nivel Cinco: El Espejo Dual
// Convierte cada palabra de towerData.levelThree.words a mayúsculas y guárdalas en towerData.levelFive.uppercasedWords.

// Convierte cada palabra de towerData.levelThree.words a minúsculas y guárdalas en towerData.levelFive.lowercasedWords.

const changeWordToUpperCase = wordsArray => {
  const wordsChangedToUpperCase = [];
  for (const word of wordsArray) {
    wordsChangedToUpperCase.push(word.toUpperCase());
  }
  towerData.levelFive.uppercasedWords = wordsChangedToUpperCase;
  return wordsChangedToUpperCase;
};

const changeWordToLowerCase = wordsArray => {
  const wordsChangedToLowerCase = [];
  for (const word of wordsArray) {
    wordsChangedToLowerCase.push(word.toLowerCase());
  }
  towerData.levelFive.lowercasedWords = wordsChangedToLowerCase;
  return wordsChangedToLowerCase;
};

// 6️⃣ Nivel Seis: El Encriptador de Secretos
// Crea un mensaje secreto aplicando las siguientes reglas:

// Vocales se reemplazan por números:

// a → 1, e → 2, i → 3, o → 4, u → 5

// Investiga la función replaceAll y las expresiones regulares

// Consonantes se reemplazan por la consonante anterior en el alfabeto (excepto b -> z).

// Espacios se reemplazan por una letra aleatoria del alfabeto.

// Guarda el resultado en towerData.levelSix.secretMessage.

// string.replaceAll(valorBuscar, valorReemplazar)

const createSecretMessage = (sentence) => {

  const vowelsList = ['a', 'e', 'i', 'o', 'u']
  const numberList = ['1', '2', '3', '4', '5']
  const prueba = ''

  for (const letter of sentence){
    letter.replace(vowelsList, numberList)
  }
  
  console.log(prueba);
  
  for (let i = 0; i < sentence.length; i++){
    sentence.replaceAll(vowelsList[i], numberList[i])

  }
  const secretMessage = 'K1bZ3zk34s2b1dc2hB4mr4m1ms2rtÑq4g3z3c1r'

  towerData.levelSix.secretMessage = secretMessage

 return secretMessage
}




// 7️⃣ Nivel Siete: El Oráculo de la Suma
// Calcula la suma total de las longitudes de todas las palabras obtenidas en el nivel 4 y almacénalo en towerData.levelSeven.totalLength.

const calculateSumOfLength = (wordsLength) => {
  let totalWordsLength = 0
  for (const wordLength of wordsLength){
    totalWordsLength += wordLength 
  }
  towerData.levelSeven.totalLength = totalWordsLength
  return totalWordsLength
}



// 8️⃣ Nivel Ocho: El Reflejo Invertido
// Invierte cada palabra del array towerData.levelThree.words y guárdalas en towerData.levelEight.reversedWords.

const reverseEachWord = (words) => {
  const reversedWordsList = []
  for (const word of words){
    const reversedWord = word.split('').reverse('').join('')
    reversedWordsList.push(reversedWord)
  }
  towerData.levelEight.reversedWords = reversedWordsList
  return reversedWordsList
}

// 9️⃣ Nivel Nueve: La Cámara del Códex Aleatorio
// Genera un código único combinando:

// La primera letra de cada palabra invertida (nivel 8).

// Los suma de los números generados en towerData.levelSeven.totalLength dividido entre 2.

// Un número aleatorio entre 1000 y 9999.

// Almacena el código generado en towerData.levelNine.randomCode.
const aleatoryNumber = Math.floor(Math.random()*(9999-1000)+1000)

const generateAleatoryCode = (revertedWords, numbersLenght) => {
  let lettersCode = ''
  for (const revertedWord of revertedWords){
    lettersCode += revertedWord.charAt(0)
  }
  let numbersCode = numbersLenght / 2

  const aleatoryCode = lettersCode + numbersCode + aleatoryNumber

  towerData.levelNine.randomCode = aleatoryCode
  return aleatoryCode  
}

// 🔟 Nivel Diez: La Prueba Suprema - El Guardián del Código Final
// Usa TODOS los valores obtenidos en los niveles anteriores para generar un código maestro único.

// La fórmula del código maestro será la siguiente:

// finalMessage = (Total de vocales _ Longitud total obtenida en el nivel 7) + (Cantidad de consonantes _ Número aleatorio generado en Nivel 9) - (Número de palabras * Número de caracteres en el mensaje secreto)

const generateMasterCode = (vowels, totalNumbersLenght, consonants, aleatoryNumber, words, sentence) => {

  const totalVowels = vowels.length
  const totalConsonants = consonants.length

  const totalWords = words.length
  const totalCharacters = sentence.length
  
  const masterCode = (totalVowels - totalNumbersLenght) + (totalConsonants - aleatoryNumber) - (totalWords * totalCharacters)

  towerData.levelTen.finalMessage = masterCode
  return masterCode
}

const fillLevels = sentence => {
  const levelOne = extractVowels(sentence);
  const levelTwo = extractConsonants(sentence);
  const levelThree = divideSentenceInWords(sentence);
  const levelFour = calculateWordsLenght(levelThree);
  const levelFiveFirstPart = changeWordToUpperCase(levelThree);
  const levelFiveSecondPart = changeWordToLowerCase(levelFiveFirstPart);
  const levelSix = createSecretMessage(sentence)
  const levelSeven = calculateSumOfLength(levelFour)
  const levelEight = reverseEachWord(levelThree)
  const levelNine = generateAleatoryCode(levelEight, levelSeven)
  const levelTen = generateMasterCode(levelOne, levelSeven, levelTwo, aleatoryNumber, levelThree, sentence)
};

fillLevels('La Biblioteca de Consonantes Prohibidas');
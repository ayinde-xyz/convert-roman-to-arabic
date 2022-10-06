function convertToRoman(num) {
  let split = String(num).split('');
  let unit
  let tens
  let hundreds
  let thousands
   for(let i = 0; i < split.length; i++) {
     if(split.length >= 1) {
         unit = Number(split[split.length - 1])
     } 
   } 
   for(let i = 0; i < split.length; i++) {
     if(split.length >= 2) {
         tens = Number(split[split.length - 2])
         tens *= 10
     } 
   } 
   for(let i = 0; i < split.length; i++) {
     if(split.length >= 1) {
         hundreds = Number(split[split.length - 3])
         hundreds *= 100
     } 
   } 
   for(let i = 0; i < split.length; i++) {
     if(split.length >= 1) {
         thousands = Number(split[split.length - 4])
         thousands *= 1000
     } 
   } 
   
 

  let unitsArray = []
  let tensArray = []
  let hundredsArray = []
  let thousandsArray = []
    if(unit <= 10 && unit >= 1) {
      while(unit / 10 !== 0) {
          unitsArray.push('I')
          unit--
      } 
    } 
    if(tens <= 100) {
        while(tens % 10 === 0  && tens >= 10) {
          tensArray.push('X')
          tens = tens - 10
        }
      } 
    if(hundreds <= 1000) {
        while(hundreds % 100 === 0  && hundreds >= 100) {
          hundredsArray.push('C')
          hundreds = hundreds - 100
        }
      } 
    if(hundreds <= 1000) {
        while(hundreds % 100 === 0  && hundreds >= 100) {
          hundredsArray.push('C')
          hundreds = hundreds - 100
        }
      } 
    if(thousands <= 10000) {
        while(thousands % 1000 === 0  && thousands >= 1000) {
          thousandsArray.push('M')
          thousands = thousands - 1000
        }
      } 

      let one = unitsArray.join('')
      let tensString = tensArray.join('')
      let hundredString = hundredsArray.join('')
      let thousandsString = thousandsArray.join('')
      let finalUnits = ''
      // unitLoop
      for(let j = 0; j < one.length; j++) {
        if(one.length <= 3) {
           finalUnits = one
        } else if(one.length === 4) {
          finalUnits = 'IV'
        } else if(one.length === 5) {
          finalUnits = 'V'
        } else if(one.length >= 6 && one.length <= 8) {
          finalUnits = 'V' + one.slice(5, one.length)
        } else if(one.length === 9) {
          finalUnits = 'IX'
        }
      }

      // tensLoop
      let finalTens = ''
      for(let k = 0; k < tensString.length; k++) {
        if(tensString.length <= 3) {
          finalTens = tensString
        } else if(tensString.length === 4) {
          finalTens = 'XL'
        } else if(tensString.length === 5) {
          finalTens = 'L'
        } else if(tensString.length >= 6 && tensString.length <= 8) {
          finalTens = 'L' + tensString.slice(5, tensString.length)
        } else if(tensString.length === 9) {
          finalTens = 'XC'
        }
      }

      // hundredsLoop
      let finalHundreds = ''
      for(let k = 0; k < hundredString.length; k++) {
         if(hundredString.length <= 3) {
          finalHundreds = hundredString
        } else if(hundredString.length === 4) {
          finalHundreds = 'CD'
        } else if(hundredString.length === 5) {
          finalHundreds = 'D'
        } else if(hundredString.length >= 6 && hundredString.length <= 8) {
          finalHundreds = 'D' + hundredString.slice(5, hundredString.length)
        } else if(hundredString.length === 9) {
          finalHundreds = 'CM'
        }
      }

      // ThousandsLoop
      let finalThousands = ''
      for(let k = 0; k < thousandsString.length; k++) {
         if(thousandsString.length < 10) {
          finalThousands = thousandsString
        } 
      }

      let finalAnswer = finalThousands.concat(finalHundreds, finalTens, finalUnits)
      
  return finalAnswer
   
}

console.log(convertToRoman(3999));

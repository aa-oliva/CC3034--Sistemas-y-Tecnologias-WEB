import Big from 'big.js';

// total: string con el total
// siguiente: string con el numero a operar del total
// operando: string con el simbolo de la operacion

export default function calcular(obj, buttonName) {

  if (buttonName === 'AC') {
    return {
      total: null,
      siguiente: null,
      operando: null,
    };
  }

  // borrar el actual

  if (buttonName === 'Del') {
    const result = obj.siguiente;
    const res = result.substring(0, result.length - 1);
    return {
      siguiente: res,
    };
  }

  if (numero(buttonName)) {
    if (buttonName === '0' && obj.siguiente === '0') {
      return {};
    }
    // si hay una operacion update al siguiente
    if (obj.operando) {
      // console.log(obj);
      if (obj.siguiente) {
        return { siguiente: obj.siguiente + buttonName };
      }
      return { siguiente: buttonName };
    }
    if (obj.siguiente) {
      return {
        siguiente: obj.siguiente + buttonName,
        total: null,
      };
    }

    return {
      siguiente: buttonName,
      total: null,
    };
  }

  if (buttonName === '.') {
    if (obj.siguiente) {
      if (obj.siguiente.includes('.')) {
        return {};
      }
      return { siguiente: obj.siguiente + '.' };
    }
    if (obj.operando) {
      return { siguiente: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }
      return { total: obj.total + '.' };
    }
    return { total: '0.' };
  }
  if (buttonName === '=') {
    if (obj.siguiente && obj.operando) {
      var tot = operar(obj.total, obj.siguiente, obj.operando);
      if (tot > 999999999) {
        return {
          total: 'error',
          siguiente: null,
          operando: null,
        };
      }
      if (tot < 0) {
        return {
          total: 'error',
          siguiente: null,
          operando: null,
        };
      }
      else {
        return {
          total: operar(obj.total, obj.siguiente, obj.operando),
          siguiente: null,
          operando: null,
        };
      }
    } else {
      return {};
    }
  }
  // si se presiona un operador cuando ya hay otro en cola
  if (obj.operando) {
    return {
      total: operar(obj.total, obj.siguiente, obj.operando),
      siguiente: null,
      operando: buttonName,
    };
  }
  // si no se ha puesto ningun numero solo guardar el operando
  if (!obj.siguiente) {
    return { operando: buttonName };
  }
  return {
    total: obj.siguiente,
    siguiente: null,
    operando: buttonName,
  };
}

function operar(x, y, operador) {
  const a = Big(x);
  const b = Big(y);

  if (operador === '+') {
    return a.plus(b).toString();
  }
  if (operador === '-') {
    return a.minus(b).toString();
  }
  if (operador === 'x') {
    return a.times(b).toString();
  }
  if (operador === '÷') {
    return a.div(b).round(9).toString();
  }
  if (operador === '%'){
    return a.mod(b).toString();
  }
  throw Error(`Unknown operation '${operador}'`);
}


function numero(item) {
  return !!item.match(/[0-9]+/);
}
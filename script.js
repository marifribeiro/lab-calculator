document.getElementById('calc').reset();

function operation (button) {

  let name = document.getElementById('name').value;
  let n1 = Number(document.getElementById('n1').value);
  let n2 = Number(document.getElementById('n2').value);

  if (isNaN(n1)) {

    document.getElementById('result').innerHTML = `Digite seu nome e os números a serem calculados!`;
    console.log('ERR: Incorrect element inputed. A name and numbers to calculate');

  } else if (isNaN(n2)) {
  
    document.getElementById('result').innerHTML = `Digite seu nome e os números a serem calculados!`;
    console.log('ERR: Incorrect element inputed. A name and numbers to calculate');

  } else if (name =='') {

    document.getElementById('result').innerHTML = `Digite seu nome e os números a serem calculados!`;
    console.log('ERR: Incorrect element inputed. A name and numbers to calculate');
    
  } else {

    document.getElementById('textName').innerHTML = `Bem vinda, ${name}!`;

    let typeOp = button.id;

    switch (typeOp) {

      case '1':
        document.getElementById('result').innerHTML = `A sua conta é:\n ${n1} + ${n2} = ${(n1 + n2)}`;
        break;
      case '2':
        document.getElementById('result').innerHTML = ` A sua conta é:\n ${n1} - ${n2} = ${(n1 - n2)}`;
        break;
      case '3':
        document.getElementById('result').innerHTML = ` A sua conta é:\n ${n1} x ${n2} = ${(n1 * n2)}`;
        break;
      case '4':
        document.getElementById('result').innerHTML = ` A sua conta é:\n ${n1} ÷ ${n2} = ${(n1 / n2)}`;
        break;
    }
  }
}
 //else {

  //var parent = document.getElementById('types');
  //parent.addEventListener('click', operation(document.getElementsByTagName('button')));

//} // else is number and name is filled

let fazenda = Number(prompt('quantas fazendas existem?'));

console.log('a quantidade é:', fazenda);

let pocilga = Number(prompt('quantas pocilgas tem por fazenda?'));
let pocilgas = fazenda * pocilga;

console.log('o número de pocilgas é:', pocilgas);

let maior = Number.MIN_VALUE;
let menor = Number.MAX_VALUE;
let porcos1 = Number(prompt('Qual a quantidade de porcos que há na possilga 1'));


for ( i = 1; i <= porcos1; ++i) {
  let pesoPorco1 = Number(prompt('diga o peso do porco ' + i + ' na pocilga 1 é:'));
  console.log(' o porco ' + i + ' tem ', pesoPorco1, ' kg');

  if (pesoPorco1 <= 50) {
    console.log(' É prematuro');
  } else if (pesoPorco1 >= 150) {
    console.log('irá para a reprodução');
  } else {
    console.log('irá para a abatedora');
  }

  
  if (pesoPorco1 > maior) {
    maior = pesoPorco1;
  }
  if (pesoPorco1 < menor) {
    menor = pesoPorco1;
  }
}

if (pocilgas >= 2) {
  alert('próxima pocilga');
  console.log(' Próxima Pocilga ');
  let porcos2 = Number(prompt('Qual a quantidade de porcos que há na possilga 2'));

  for (let j = 1; j <= porcos2; ++j) {
    let pesoPorco2 = Number(prompt('diga o peso do porco ' + j + ' na pocilga 2 é:'));
    console.log(' o porco ' + j + ' tem ', pesoPorco2, ' kg');

    if (pesoPorco2 <= 50) {
      console.log(' É prematuro');
    } else if (pesoPorco2 >= 150) {
      console.log('irá para a reprodução');
    } else {
      console.log('irá para a abatedora');
    }

    
    if (pesoPorco2 > maior) {
      maior = pesoPorco2;
    }
    if (pesoPorco2 < menor) {
      menor = pesoPorco2;
    }
  }
}

alert('O maior peso dentre os porcos é de: '+ maior +' kg');
console.log('O maior peso dentre os porcos é de: ',maior, ' kg');
alert('O menor peso dentre os porcos é de: '+ menor + ' kg');
console.log('O menor peso dentre os porcos é de: ',menor, ' kg');

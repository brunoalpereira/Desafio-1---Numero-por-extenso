const numero = document.querySelector('#numero')

const atual = document.querySelector('#atual')

const extenso = document.querySelector('#extenso')

const numeros ={0 : 'Zero',1: 'Um',2 :'Dois',3: 'Três',4:'Quatro',5: 'Cinco',6: 'Seis',7: 'Sete',8:'Oito',9: 'Nove',10: 'Dez', 11: 'Onze',12: 'Doze',13: 'Treze',14: 'Quatorze',
                15: 'Quinze',16:'Dezesseis',17:'Dezessete',18:'Dezoito',19:'Dezenove',20:'Vinte',30:'Trinta',40:'Quarenta',50:'Cinquenta',60:'Sessenta',70:'Setenta',
                80:'Oitenta',90:'Noventa',100:'Cem',101:'Cento',200:'Duzentos',300:'Trezentos',
                400:'Quatrocentos',500:'Quinhentos',600:'Seiscentos',700:'Setecentos',800:'Oitocentos',900:'Novecentos'}
               
                function mudarNumero() {
                    atual.value = numero.value
                  
                    if (numero.value <= 19) {
                      extenso.value = numeros[numero.value];
                    } else if (numero.value >= 20 && numero.value <= 100) {
                      extenso.value = numero.value[1] != 0 ? `${numeros[numero.value[0] + 0]} e ${numeros[numero.value[1]]}` : numeros[numero.value];
                    } else if (numero.value >= 101 && numero.value <= 199) {
                      if (numero.value[1] == 0 && numero.value[2] != 0) {
                       extenso.value = `${numeros[101]} e ${numeros[numero.value[2]]}`;
                      } else if (numero.value[1] != 0 && numero.value[2] == 0) {
                        extenso.value = `${numeros[101]} e ${numeros[numero.value[1] + 0]}`;
                      } else if (numero.value[1] == 1) {
                        extenso.value = `${numeros[101]} e ${numeros[numero.value[1] + numero.value[2]]}`;
                      } else {
                        extenso.value = `${numeros[101]} e ${numeros[numero.value[1] + 0]} e ${numeros[numero.value[2]]}`;
                      }
                    } else if (numero.value >= 200 && numero.value <= 999) {
                      if (numero.value[1] != 0 && numero.value[2] != 0 && numero.value[1] != 1) {
                        extenso.value = `${numeros[numero.value[0] + 0 + 0]} e ${numeros[numero.value[1] + 0]} e ${numeros[numero.value[2]]}`;
                      } else if (numero.value[1] == 1 && numero.value[2] != 0) {
                        extenso.value = `${numeros[numero.value[0] + 0 + 0]} e ${numeros[numero.value[1] + numero.value[2]]}`;
                      } else if (numero.value[1] == 0 && numero.value[2] != 0) {
                        extenso.value = `${numeros[numero.value[0] + 0 + 0]} e ${numero[numero.value[2]]}`;
                      } else if (numero.value[1] != 0 && numero.value[2] == 0) {
                        extenso.value = `${numeros[numero.value[0] + 0 + 0]} e ${numeros[numero.value[1] + 0]}`;
                      } else {
                        extenso.value = numeros[numero.value];
                      }
                  
                    }
                  
                  }
                  
                  mudarNumero();
                  
                  numero.addEventListener('input', mudarNumero);
// teste
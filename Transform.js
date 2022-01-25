async function Transform() {

const dados= await require('./Extract');
console.log("carregado")
console.log("começando a transformar")
//recebe os dados da API
numeros = [];


numeros[0]=dados[0];
//passa o primeiro dado para o array numeros

for(let i=1;i<dados.length;i++)
if(dados[i]>=numeros[i-1])
{
  numeros[i]=dados[i];
}
//para cada número presente na api,
// checa para ver se o número inserido antes dele é menor que ele, se sim,
//ele é inserido normalmente depois desse número
else {
//se não, percorre os números já inseridos em numeros e para cada um em ordem decrescente
//é checado para ver se o número atual é menor que ele, se for,
// o número checado avança  uma posição no array e o numero atual toma a posição dele

      for(let j=i;j>-1;j--)
      {

        if(dados[i]<numeros[j])
        {
            numeros[j+1]=numeros[j];
          if(j==0){numeros[j]=dados[i]}
        }

        if(dados[i]>numeros[j]){
          numeros[j+1]=dados[i];
          break};
      }
}
console.log("tranformado")
return numeros
}
module.exports= Transform();

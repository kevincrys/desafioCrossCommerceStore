const axios= require ('axios')

//Extração dos dados da Api
 async function Extract() {
var result=[];
var quant=-1
var pagina=1
while(quant!=0){

  for(let i=0;i<3;i++)
  {
  try{
      var dados= await axios.get('http://challenge.dienekes.com.br/api/numbers?page='+pagina);

      quant=dados.data.numbers.length;
      result.push(...dados.data.numbers)
      console.log(pagina)
      pagina++
      break
      }
  catch (error) {

  }
}
}




return result;
}


module.exports= Extract();

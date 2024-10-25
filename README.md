# Projeto iChoveu

Foi desenvolvido um site de previsão do tempo que consume dados diretamente de uma API. 


## Acessando a API

<details>
<summary>Como acessar a API</summary><br />

Para isso, será necessário que você crie uma conta no [WeatherAPI](https://www.weatherapi.com/signup.aspx) e gere uma chave de API.

Após acessar sua conta, você verá uma tela como a seguinte:

![image](./images/weatherapi.png)

Nessa página, você deve clicar no botão `Copy` para copiar a chave (ou token) da API. É com ela que você vai se autenticar na API, então guarde-a em um lugar seguro.

Crie um arquivo `.env` na raiz do projeto e adicione a chave de API que você acabou de copiar, como no exemplo a seguir.

```sh
VITE_TOKEN=SEU_TOKEN_AQUI
```

O arquivo `.env` já está configurado no arquivo `.gitignore` para que não seja enviado para o repositório remoto, então seu token será mantido apenas localmente.

Daqui pra frente, você pode acessar o token por meio do objeto `import.meta.env.VITE_TOKEN` dentro de seu código.

Caso queira explorar a API, você poderá acessar a [documentação](https://www.weatherapi.com/docs/) e ver como ela funciona ou acessar o [playground](https://www.weatherapi.com/api-explorer.aspx) para testar as requisições.

</details>


# Requisitos
  * Implementar a função `searchCities`
  
  * Implementar a função `getWeatherByCity`
  
  * Liste as cidades retornadas pela API
  
  * Adicione um botão para ver a previsão de 7 dias de uma cidade
  
Além disso, toda a aplicação foi posteriormente estilizada garantindo um layout moderno e responsivo ao usuário.

# O que já veio pronto da Trybe
   * Utilização do Cypress para garantir o funcionamento dos requisitos e dos testes criados e requisitados pela Trybe.

   * As função já estavam criadas, porém, elas não estavam funcionando, pois ainda não haviam sido implementadas. 


Projeto desenvolvido durante a Formação em Desenvolvimento Web Full-Stack da [Trybe](https://www.betrybe.com/). 
Todos os arquivos de configuração, banco de dados e estrutura são de autoria da Trybe.

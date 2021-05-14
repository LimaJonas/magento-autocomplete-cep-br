## Magento Modulo de Auto Completar CEP - BR

- Simples solução para auto-completar campos ao preencher o CEP no campo de **Checkout**.
- Usando a [Brasil API](https://github.com/BrasilAPI/BrasilAPI "Brasil API"), podendo ser facilmente substituida por uma de sua escolha.
- Testado e criado usando Magento 2.3.6
### Instalação 
- Fazer download do modulo [aqui](https://github.com/LimaJonas/magento-autocomplete-cep-br/releases/tag/1.0 "aqui").
- Em [Magento_Root]/App/Code, criar pastas Jonaslima/Autocomplete.
- Extrair arquivos
- Executar comandos:

```
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy pt_BR -f
php bin/magento cache:flush
```
- Pronto, instalado. Basta ir no checkout, preencher o CEP e testar!

## Alterar API
- Na pasta do modulo, entre em view/frontend/web/js/**setAddress.js** e altere na **linha 10** o link da API. 
- **Lembre-se** de alterar como as variaveis estão obtendo os dados, substituindo pelo vetor gerado com a API.

```javascript
var cep = document.getElementsByName("postcode")[0].value;

// API usada, substituir link
$.getJSON("https://brasilapi.com.br/api/cep/v1/"+ cep, function(data) {
// Substiruir variaveis conforme a API customizada indique
var rua = data.street;
var bairro = data.neighborhood;
var cidade = data.city;
var uf = data.state;
 
```

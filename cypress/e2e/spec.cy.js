import { Login } from "../pageObject/Login"


describe('template ', () => {
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer 3pnHNLOIDH6MLr_Zi4v9jwYufgoTrZfE37LC_t6ut5pr1aRRhhTnal5yrouFyinlKUNIlJz_y_l4DRUKgYcrEJByGm8k5sQtDw8fZ6qY7Ubu1idvX9HoalpvCQ_A_zyg6mzIs1B9wzsUUU16bmKXI_oAbbm-vVmjNj5oEg0S0JxEKx1oazlgP1q4gocjTx18ZKYfxIrwbOExCK20DN2jYN4SW0eAVS1n_ea7WfDr-sFJcD3uLdABOfgk8Y44NQPbp3cXH2-dNP16mDeYknOAMt4Pida2soQOTNBcZGobyLyIP9hl70rHypFY3HUJl3X61K1ydjAC4vx5Lkk1RVC0ZlNu5v1S9-dLW6u9Fwm-EAqOBp0oqFwrl8piczmApzZTUTlz3-cVri-4CJUANcBAbe4hNRuhY8DfHJSQb7HyqB4sz1_lgOQR76VMdbhXL8FtAJ6cp7HIMxNbbiP7Q1CrBjlYSvH39ZH4oIKIRDsAxsCWkg4a954uZuVXt7ddFgz6");

var raw = JSON.stringify({
  "PhoneNumber": "996999888778",
  "FirstName": "Artest",
  "LastName": "Estest",
  "MiddleName": "string",
  "Email": "esenalievtest1@gmail.com",
  "Birthday": "2000-11-03T14:11:26.831Z",
  "RegChannel": "CRM",
  "Sex": "1",
  "Occupation": 0,
  "Children": [],
  "ReferralClientId": 0
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://167.114.201.175:5001/api/Client/Account", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  })






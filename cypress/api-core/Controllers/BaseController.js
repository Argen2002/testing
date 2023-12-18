
export class BaseController{
    constructor() {
    }
    async authorization(){
      var myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      var urlencoded = new URLSearchParams();
      urlencoded.append("grant_type", "password");
      urlencoded.append("username", "Admin");
      urlencoded.append("password", "Admin@Navi");

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      };

      let token= await fetch("http://167.114.201.175:5001/Token", requestOptions)
        .then(response => response.text())
        .then(result => {return result})
        .catch(error => console.log('error', error));
      process.env.token=`Bearer ${token}`
       return  process.env.token;
    }


   async PostCreate(){
       var myHeadersPost = new Headers();
        myHeadersPost.append("Content-Type", "application/json");
        myHeadersPost.append("Authorization", process.env.token);

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

        var requestOptionsPost = {
            method: 'POST',
            headers: myHeadersPost,
            body: raw,
            redirect: 'follow'
        };

        let clients= await fetch("http://167.114.201.175:5001/api/Client/Account", requestOptionsPost)
            .then(response => response.json())
            .then(result => {return result})
            .catch(error => console.log('error', error));
        return clients
   }
}
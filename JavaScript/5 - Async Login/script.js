/////////////////////////
// Ursprünglicher Code
/////////////////////////
/* 
function loginUser(username, password) {
    return new Promise((resolve,reject) => {
        setTimeout ( () => {
            resolve ({userEmail : "kontakt@codingschule.de"});
        }, 1500)
})
}

function getUserDetails(userEmail) {
    return new Promise((resolve,reject) => {
        setTimeout (() => {
            resolve ({userPostcode : "40476"});
        }, 1500)
    })
}

loginUser("Codingschule", "123456")
.then ( user => getUserDetails(user.userEmail))
.then ( profile => console.log(profile))
 */

//////////////////////
// Erster Versuch
//////////////////////
/* 
  async function getUserDetails(userEmail) {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => 
        resolve({userPostcode : "40476"}), 1500);
    });
  
    let user = await promise;
  
    getUserDetails(user.userEmail);
  }

  
  
  async function loginUser(username, password) {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => 
        resolve({userEmail : "kontakt@codingschule.de"}), 1500);
    });
  
    let profile = await promise;
  
    console.log(profile);
  }


loginUser("Codingschule", "123456");
 */

///////////////////
// Beispiel 1
///////////////////
async function getUser() {
    let user = await loginUser("Codingschule", "123456")
    console.log(user);
}

/////////////////
// Beispiel 2
/////////////////
const result = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve({user: "marc"});
    //reject("Fehler");
    }, 2000)
    });
    async function showResult() { console.log(await result);}
    showResult()
  
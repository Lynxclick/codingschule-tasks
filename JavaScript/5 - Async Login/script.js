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
  
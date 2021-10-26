# Asynchrone Programmierung

JavaScript kennt verschieden Methoden um asynchrone Programmabläufe zu verarbeiten.

* **Callbacks**: Die Ausführung eines von der asynchronen Funktion abhängigen Codes erfolgt innerhalb des asynchronen Aufrufs, wodurch sichergestellt ist, dass die asynchrone Funktion abgeschlossen ist.
* **Promises**: Promises sind Objekte, die auf das Ergebnis einer asynchronen Aktion warten. Mit Hilfe der Methoden **.then()** bzw. **.catch()** wird das Ergebnis verarbeite, wenn die asynchrone Funktion abgeschlossen ist.
* **Async/Await**: Durch das Schlüsselwort await wartet eine Funktion auf die Rückmeldung durch ein Promises Object. Await kann nur innerhalb einer async Funktion aufgerufen werden.

## Aufgabe
Beim vorliegenden Programmcode sollen die .then() Methoden durch einen Aufruf von await ersetzt werden.

```js
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
```

1. Erzeuge eine asynchrone Funktion. Innerhalb der Funktion sollen die beiden Funktionen **loginUser()** und **getUserDetails()** mit dem Schlüsselwort **await** aufgerufen werden.

2. Speichere die Rückmeldungen der beiden Funktionen in Variablen und lasse dir das User Profil in der Konsole ausgeben.




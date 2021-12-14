print("Hello World")

print(12.0)

print(False)
print(True)

test = [12, "test", "Apfel", "Birne"]
print(test.pop())

test_dict = {
    "Name":"Kane",
    "Alter": 29
}

print(test_dict["Name"])

range(10) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for zahl in range(10):
    print(zahl)
    print("---")


zahl = 5
if zahl > 5:
    print("Die Zahl ist größer als 5")
elif zahl  > 1:
    print("Die Zahl ist größer als 1")
else:
    print("Else")

print("Ende")

print (5**6)

def meineFunktion(parameter):
    return parameter

# in JS = funktion meineFunktion(parameter) {
#   return parameter  
# }

# import pandas
# from bibliothek import meineFunktion

# in JS = import Funktion from 'react'

name = input("Wie heißt du ?")

print("Hallo " + name)

input()
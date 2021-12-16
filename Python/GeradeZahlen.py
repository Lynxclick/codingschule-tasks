Obergrenze = int(input("Nenne eine Obergrenze = "))


#try:
#    int(Obergrenze)
#    it_is = True
#except ValueError:
#    it_is = False

print (Obergrenze)

Zahlenfolge = range(Obergrenze)
    
for Zahl in Zahlenfolge:
    print(Zahl)

if Zahl % 2 == 0:
    print("Die Zahl " + Zahl + " ist gerade")
else:
    print("Die Zahl " + Zahl + " ist ungerade")


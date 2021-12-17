
import random



try:
        input= int(input("Nenne eine Obergrenze = "))
except ValueError:
        input = random.randint(1, 1000)




for Zahl in range(input):
    if Zahl % 2 == 0:
        print("Die Zahl " + str(Zahl) + " ist gerade")
    else:
        print("Die Zahl " + str(Zahl) + " ist ungerade")


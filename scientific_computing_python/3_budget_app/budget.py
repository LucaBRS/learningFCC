## La funzione "self", in pratica va a prendere le vaiabili che sono state create sotto la classe
# ogni volta che un metodo della classe viene chiamato viene passata anche "se stessa" cosi da poter usare
# le eventuali variabili della classe stessa

from calendar import leapdays
from numpy import dot, integer, outer


class Category:
        
    ## Self defining the name of the function
    def __init__(self,category):
        self.category=""
        self.ledger=[]
        self.ledgerDic={"amount":0,
                "description":""}
        self.category = category   
        
    ## usefull to represent the object in a specific way  
    def __str__(self):
        stopper=0
        number=""
        filler = "******************************"
        filler =  filler[0:15-int(len(self.category)/2)] + self.category + filler
        filler =filler[0:30]    
        output= filler + "\n"
        filler = "                                           "
        
        for operation in self.ledger:
            if len(operation["description"]) > 23 :
                stopper= 23
            else:
                stopper = len(operation["description"])
            
            number = str(operation["amount"])
            
            if number.find(".") == -1:
                number = number + ".00"
            else:
                number = str(operation["amount"])

            output = output + operation["description"][0:stopper] + filler[stopper:30-len(number)] + number + "\n"
            
        output = output + "Total: "  + str(self.get_balance()) 
        return output
    
    ## Deposit methond
    def deposit(self,amount,*description):
        # variabili
        ledgerDic={"amount":0,
                "description":""}
        
        if len(description) != 0:
            ledgerDic["description"] = description[0]
        ledgerDic["amount"]=abs(amount)
        self.ledger.append(ledgerDic)

    ## Withdraw method should use check_founds!!
    def withdraw(self,amount,*description):
        # variabili
        flag = False
        ledgerDic={"amount":0,
                "description":""}
        
        if self.check_funds(amount):
            flag = True
            if len(description) != 0:
                ledgerDic["description"] = description[0]
            ledgerDic["amount"] = 0 - abs(amount)
            self.ledger.append(ledgerDic)
            
        
        return flag
    
    ## Transfer method
    def transfer(self, amount, category):
        text = ""
        if self.withdraw(amount,"Transfer to "+category.category):
            category.deposit(amount,"Transfer from "+self.category)
            return True
        else:
            return False
        
    ## Check found method
    def check_funds(self,amount):
        if self.get_balance() >= abs(amount):
            return True
        else:
            return False
    
    ## Balance
    def get_balance(self):
        budget=0
        for operation in self.ledger:
            budget = budget + (operation["amount"])  

        return budget

    def get_withdrow(self):
        totalWithdrow = 0
        for operation in self.ledger:
            if operation["amount"] < 0 and operation["description"].find("Transfer") == -1:
                totalWithdrow = totalWithdrow + abs(operation["amount"])
        return totalWithdrow

    def stampa(self):
        print("funzione stampa:")
        print(self.ledger)
        print(self.category)
        print(self.get_balance())
        
    
        

def create_spend_chart(categories):
    percList = ['100| ', ' 90| ', ' 80| ', ' 70| ', ' 60| ', ' 50| ', ' 40| ', ' 30| ', ' 20| ', ' 10| ', '  0| ']
    oList = ["   ","   ","   ","   ","   ","   ","   ","   ","   ","   ","   "]
    oLists = []
    dotString= "    "
    moneySpent = []
    total = 0
    output=""
    longhestCategoryName = 0
    output = "Percentage spent by category\n"
    for category in categories:
        
        total = total + category.get_withdrow()
        moneySpent.append(category.get_withdrow())
        
        if longhestCategoryName < len(category.category):
            longhestCategoryName = len(category.category)
            
        dotString = dotString +"---"      
    dotString = dotString + "-\n"
    
    ## creation  of o list
    for money in moneySpent:
        
        oList = ["   ","   ","   ","   ","   ","   ","   ","   ","   ","   ","   "]
        percentage = int(round(10*money/total))
        if percentage == 1:
            percentage=0
        for i in range(percentage+1):
            oList[-i-1] = "o  "
            
        oLists.append(oList)       
    
    ## creation parto of output
    for i in range(11):
        output = output + percList[i]
        
        for y in range(len(categories)):
           output = output + oLists[y][i]
           
        output = output + "\n"
    output = output + dotString 
    
    for i in range(longhestCategoryName):
        output = output + "     "
        
        for category in categories:
            try:
                output = output + category.category[i] + "  " 
            except:
                output = output + " " + "  " 
         
        output = output + "\n"
        
    return output[:len(output)-1]



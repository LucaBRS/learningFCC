from distutils.log import error
from warnings import catch_warnings


def arithmetic_arranger(*problems):

    ## Needed Variable
    flag = False
    arranged_problems = "try"
    result=0
    results=[]
    line1= ""
    line2=""
    line3=""
    line4=""
    finalLine= ""
    
    
    if len(problems) ==2:
        flag = problems[1]
        problems = problems[0]
    else:
        problems = problems[0]
        
    ## Check the number of problem
    if len(problems) >5:
        return "Error: Too many problems."
    
    ## For cycle to take each problem
    for problem in problems:
        
        ## Variable used only in the cycle
        lenFirstNumer=0
        lenSecondNumer=0
        lenResult=0
        theLong=0
        
        ## Split the problem in each components
        components=problem.split()

        ## Save the len of the number
        lenFirstNumer = len(components[0])
        lenSecondNumer = len(components[2])
        
        if (lenFirstNumer>4 or lenSecondNumer>4):
            return "Error: Numbers cannot be more than four digits."
        
        ## check if the operator are the correct one
        if (components[1]!="+" and components[1]!="-"):
            return "Error: Operator must be '+' or '-'."
        
        ## Check if the problem contain ONLY numbers
        try:
            if components[1]=="+":
                result= int(components[0])+int(components[2])
            else:
                result= int(components[0])-int(components[2])
                
            lenResult = len(str(result))    
            results.append(result)
        except:
            print(error)    
            return "Error: Numbers must only contain digits."
        
        ## find the longest number
        if lenFirstNumer>lenSecondNumer:
                theLong=lenFirstNumer
        else:
                theLong=lenSecondNumer
        
        ## Check if there is or not a request for printing results!
        if flag == True :
            if theLong < lenResult:
                theLong = lenResult
            
            
            ## some trick because the problem of not understanding at the start the problem...
            if theLong == 4:
                theLong=3
                line4 = line4 + " "
            elif theLong==5: 
                theLong=4
                line4 = line4 + " " 
            else:
                line4 = line4 + "  "
                
            for i in range(theLong-lenResult):
                line4 = line4 + " "
            line4 = line4 + str(result) + "    "
                       
                     
        ## Composition of the first line dependig on the lenght of the "theLong"
        for i in range(theLong-lenFirstNumer):
            line1 = line1 + " "
        line1 = line1+"  "+str(components[0]) + "    "
        
        ## Composition of the seconf line dependig on the lenght of the "theLong"
        line2 = line2 + components[1] + " "
        for i in range(theLong-lenSecondNumer):
            line2 = line2 + " "
        line2 = line2 + str(components[2]) + "    "
    

        ## Composition of the third line dependig on the lenght of the "theLong"
        line3 = line3 + "--"
        for i in range(theLong):
            line3 = line3 + "-"
        line3 = line3 + "    "
       
            
    
    ## Make it little bit better
    line1 = line1[0:len(line1)-4] 
    line2 = line2[0:len(line2)-4] 
    line3 = line3[0:len(line3)-4] 
    line4 = line4[0:len(line4)-4]   
         
    ## Composition of the line to pass in the return! 
    if flag == True :       
        finalLine = line1 + "\n" + line2 + "\n" + line3 + "\n" + line4
    else:
        finalLine = line1 + "\n" + line2 + "\n" + line3
    
    arranged_problems = finalLine
    return arranged_problems


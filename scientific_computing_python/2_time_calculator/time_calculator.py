
from gettext import find
from posixpath import split


def add_time(start, duration,*day):
    new_time=""

    ## Variables
    startHour=0
    startMinutes=0
    startPeriod=""

    durationHour=0
    durationMinutes=0

    week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    dayNumber = 0
    

    sumHour=0
    sumMinutes=0

    dayPassed=0

   
    ## Division of the string in to numbers for the current day
    startHour = int(start.split(":")[0])
    startMinutes = int(start.split(":")[1].split(" ")[0])
    startPeriod = start.split(":")[1].split(" ")[1]

    ## Conversion to 24 hours
    if startPeriod=="PM":
        startHour +=12 

    
     ## Division of the string in to numbers for the duration to add
    durationHour = int(duration.split(":")[0])
    durationMinutes = int(int(duration.split(":")[1]))

    ## Sum of the respective time
    sumHour = startHour + durationHour
    sumMinutes = startMinutes + durationMinutes

    ## Loop in order to set the proper time starting from minutes 
    while sumMinutes >= 60:
        sumMinutes-=60
        sumHour +=1
    while sumHour >=24:
        sumHour -=24
        dayPassed +=1

    ## Setting period of the day
    if sumHour > 12:
        sumHour -=12
        startPeriod = "PM"
    elif sumHour == 0 :
        sumHour = 12
        startPeriod = "AM"
    elif sumHour == 12:
        startPeriod = "PM"
    else:
        startPeriod = "AM"


    ## Add the hours
    new_time = str(sumHour)


    ## Add :
    new_time = new_time + ":"

    ## Add 0 to minutes if 1 number
    if sumMinutes <10:
        new_time =new_time + "0" + str(sumMinutes)
    else:
        new_time =new_time + str(sumMinutes)


    new_time = new_time + " " + startPeriod

    ## Case of the insertion of the day
    if len(day) != 0:
        ## solving the case sensitivity problem
        day= day[0] 
        day= day[0].upper() + day[1:].lower()
        
        dayNumber = week.index(day) + dayPassed
        ## While to set the proper day
        while dayNumber >6:
            dayNumber -=7
 
        new_time = new_time + ", " + week[dayNumber]

    ## Setting of the number of day passed!
    if dayPassed == 0:
        new_time
    elif dayPassed == 1:
        new_time = new_time + " " + "(next day)"
    else:
        new_time = new_time + " " + "("+ str(dayPassed) + " " + "days later)"

    
    return new_time
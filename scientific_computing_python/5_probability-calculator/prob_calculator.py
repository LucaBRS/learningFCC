import copy
from distutils.log import error
import random
from re import T
# Consider using the modules imported above.

class Hat:

    ## they pass me some key and conver to list
    def __init__(self, **keys):
        self.contents = []
        self.contentsInList = []
       
        for key in keys:
            for i in range(keys[key]):
                self.contentsInList.append(str(key))
        self.contents = self.contentsInList.copy()

        
    ## draw method the bals are not reinserted!
    def draw(self, draws):

        self.contents = self.contentsInList.copy()
        poppedBals = []
        if draws < len(self.contents):
            while draws > 0 :
                draws -=1
                draw = random.randint(0, len(self.contents)-1) 
                poppedBals.append(self.contents[draw])
                self.contents.pop(draw)
        else:
            return self.contents
        
        return poppedBals    
 



   
def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    successNumber = 0
    experiments = 0
    
    ## conversion from list returned to dictionary for easy comparison
    def list_to_dic(list):
        dic = {}
        for element in list:
            try:
                dic[element] +=1 
            except:
                dic[element] = 1         
        return dic   
    
    ## thease compare dictionary.
    ## it chek if dec_1, the element and number of element, are inside dic_2
    def is_equal(dic_1,dic_2):     
        
        try: 
            for key in dic_1:
                if dic_1[key] > dic_2[key]:
                    return False          
            return True   
        except:
            return False
     
    ## thease run the number of experiment   
    while num_experiments > 0:
        num_experiments -=1
        experiments +=1
        if is_equal(expected_balls, list_to_dic(hat.draw(num_balls_drawn))):
            successNumber += 1
            
    
    return (successNumber/experiments)



class Rectangle:
    
    def __init__(self,width , height):
        self.width=0
        self.height=0
        
        self.width =  width
        self.height = height

    def __str__(self):
        return "Rectangle(width=" + str(self.width) + ", height=" + str(self.height) + ")"
    
    def set_width(self, width):
        self.width = width
        return "Done with width"

    def set_height(self, heigth):
        self.height = heigth
        return "Done with height"
    
    def get_area(self):
        return (self.width * self.height)
    
    def get_perimeter(self):
        return (2 * self.width + 2 * self.height)
    
    def get_diagonal(self):
        return ((self.width ** 2 + self.height ** 2) ** .5)
    
    def get_picture(self):
        output = ""
        
        ## if is too big i will not draw it
        if self.height > 50 or self.width > 50:
            return "Too big for picture."
        else:
            ## for cycle to "scan" the column adn put a *, next scan the line to put a \n
            for i in range(self.height):
                for j in range(self.width):
                    output = output + "*"    
                output = output + "\n"  
            
        return output 

    def get_amount_inside(self, shape):
        amount= 0
        ## i need those fo working and "scannig" the height and width of the shape with tha "changing" passed shape
        passedHeight = shape.height
        passedWidth = shape.width
        
        column = True
        line = True
        
        while line:
            while column:
                ## if the difference of the shape with the passed shape id True
                if (self.height - passedHeight) >= 0 and (self.width - passedWidth) >= 0 : 
                    amount +=1
                    ## thease help me to "scan" the shape incrementing the width of the passed shape. 
                    ## basically i consider the with as a block and "move the block" of the passed shape width
                    passedWidth = passedWidth + shape.width
                else:
                    column = False
            ## if is true i reset the column flag and the passedWidth to scan again, BUT incermenting the passedHeight    
            if (self.height - passedHeight) >= 0:
                column = True
                passedWidth = shape.width
                passedHeight = passedHeight + shape.height
            else:
                line = False
                
        return amount
    
            
class Square(Rectangle):
    
    def __init__(self, side):
        super().__init__(side, side)

    def __str__(self):
        return "Square(side=" + str(self.width) + ")"
    
    def set_side(self, side):
        self.width = side
        self.height = side
        return "Done with side"
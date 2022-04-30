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
        
        if self.height > 50 or self.width > 50:
            return "Too big for picture."
        else:
            for i in range(self.height):
                for j in range(self.width):
                    output = output + "*"    
                output = output + "\n"  
            
        return output 

    def get_amount_inside(self, shape):
        amount= 0
        passedHeight = shape.height
        passedWidth = shape.width
        column = True
        line = True
        
        while line:
            while column:
                if (self.height - passedHeight) >= 0 and (self.width - passedWidth) >= 0 : 
                    amount +=1
                    passedWidth = passedWidth + shape.width
                else:
                    column = False
                    
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

class Test:
    
    def __init__(self, *vars, **keys):
        print(vars)
        print(keys)
        for var in vars:
            print(var)
        for key in keys:
            print(key)
            print(keys[key])
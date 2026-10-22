
def calculate_total(amount, discount):
    # ҚАТЕ: discount пайызбен берілген, бірақ 0.10 ретінде есептелмейді
    total = amount * (1 - discount)
    return total


amount = 10000
discount = 10

result = calculate_total(amount, discount)

print("Бастапқы баға:", amount)
print("Жеңілдік:", discount, "%")
print("Жеңілдіктен кейінгі баға:", result)

##################################################

def calculate_total(amount, discount):
    if amount < 0:
        raise ValueError("Баға теріс болмауы керек")

    if discount < 0 or discount > 100:
        raise ValueError("Жеңілдік 0 мен 100 арасында болуы керек")

    total = amount * (1 - discount / 100)
    return total


amount = 10000
discount = 10

result = calculate_total(amount, discount)

print("Бастапқы баға:", amount)
print("Жеңілдік:", discount, "%")
print("Жеңілдіктен кейінгі баға:", result)

###############################################


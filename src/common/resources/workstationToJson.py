import traceback
from string import digits

def writeName(inputText, outputFile, cardStartIndex):
    outputFile.write('        "name": ')
    endOfNameIndex = inputText.find('\n', cardStartIndex)
    name = inputText[cardStartIndex + 11:endOfNameIndex]
    outputFile.write('"' + name + '",\n')
    return (name, endOfNameIndex)

def writeImageName(outputFile, name):
    outputFile.write('        "imageName": ')
    outputFile.write('"' + name.replace(',', '').replace("'", "") + '",\n')
    return

def writeColor(inputText, outputFile, cardStartIndex):
    outputFile.write('        "color": ')
    manaCostStartIndex = inputText.find('Mana Cost:\t', cardStartIndex)
    manaCostEndIndex = inputText.find('\n', manaCostStartIndex)
    manaCost = inputText[manaCostStartIndex + 11:manaCostEndIndex]
    coloredMana = manaCost.translate(None, digits + 'X')
    color = coloredMana.join(sorted(set(coloredMana), key=coloredMana.index))
    outputFile.write('"' + color + '",\n')

def writeCollectorsNumber(inputText, outputFile, cardStartIndex):
    outputFile.write('        "id": ')
    collectorsNumberStartIndex = inputText.find('Card #:\t', cardStartIndex)
    collectorsNumberEndIndex = inputText.find('/', collectorsNumberStartIndex)
    outputFile.write(inputText[collectorsNumberStartIndex + 9:collectorsNumberEndIndex] + ',\n')

def writeRarity(inputText, outputFile, cardStartIndex):
    outputFile.write('        "rarity": ')
    rarityStartIndex = inputText.find('Rarity:', cardStartIndex)
    rarityEndIndex = inputText.find('\n', rarityStartIndex)
    rarity = inputText[rarityStartIndex + 9:rarityEndIndex]
    if (inputText.find('Type & Class:\tOrganization', cardStartIndex, rarityStartIndex) != -1) or (inputText.find('Legendary Device Unit - Battleship', cardStartIndex, rarityStartIndex) != -1):
        outputFile.write('"M"\n')
    else:
        outputFile.write('"' + rarity + '"\n')

try:
    inputFile = open('./cardListWorkstation.txt', 'r')
    inputText = inputFile.read()
    inputFile.close()

    outputFile = open('cardListJson.json', 'w')
    outputFile.write('[\n')

    cardStartIndex = inputText.find('Card Name:\t')
    while cardStartIndex != -1:
        outputFile.write('    {\n')

        endOfNameIndex = 0
        (name, endOfNameIndex) = writeName(inputText, outputFile, cardStartIndex)
        writeImageName(outputFile, name)
        writeColor(inputText, outputFile, cardStartIndex)
        writeCollectorsNumber(inputText, outputFile, cardStartIndex)
        writeRarity(inputText, outputFile, cardStartIndex)

        outputFile.write('    }')
        cardStartIndex = inputText.find('Card Name:\t', endOfNameIndex)
        if cardStartIndex != -1:
            outputFile.write(',\n')

    outputFile.write('\n]\n')
    outputFile.close()
    raw_input('Done')
except Exception as ex:
    traceback.print_exc()
    raw_input()

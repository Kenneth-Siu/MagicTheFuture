import traceback

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

def writeCollectorsNumber(inputText, outputFile, cardStartIndex):
    outputFile.write('        "id": ')
    collectorsNumberStartIndex = inputText.find('Card #:\t', cardStartIndex)
    collectorsNumberEndIndex = inputText.find('/', collectorsNumberStartIndex)
    outputFile.write(inputText[collectorsNumberStartIndex + 9:collectorsNumberEndIndex] + '\n')
    return

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
        writeCollectorsNumber(inputText, outputFile, cardStartIndex)

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

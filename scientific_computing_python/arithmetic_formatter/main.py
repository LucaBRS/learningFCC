# This entrypoint file to be used in development. Start by reading README.md
from pickle import TRUE
from xml.etree.ElementTree import tostring
from pytest import main

from arithmetic_arranger import arithmetic_arranger


print(arithmetic_arranger(['32 - 698', '1 - 3801', '45 + 43', '123 + 49', '988 + 40'], True))

print(arithmetic_arranger(['3 + 855', '988 + 40'], True))


# Run unit tests automatically
main()

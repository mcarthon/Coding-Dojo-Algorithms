import re

def create_acronym(string):

    if len(string) == 0:
        return string

    if len(string) == 1:
        return string[0].upper()

    string_list = string.strip().split(" ")
    string_list = [x for x in string_list if x]
    print(string_list)

    no_whitespace_string = ""
    for string in string_list:
        no_whitespace_string += string + " "

    no_whitespace_string = no_whitespace_string.strip()

    length = len(string_list)
    print(f"length: {length}")

    pattern = r"^"
    repl = r""

    for number in range(length - 1):
        pattern += r"([a-zA-Z]{1})([^\s]*)(\s*)"
    for number in range(length):
        repl += f"\\{number * 3 + 1}"
    
    pattern += r"([a-zA-Z]{1})([^\n]*)$"

    print(f"pattern: {pattern}\nrepl: {repl}")

    no_whitespace_string = re.sub(
        pattern = pattern,
        repl = repl,
        string = no_whitespace_string 
    )

    return no_whitespace_string.upper()

string = "object oriented programming"
print(create_acronym(string) + "\n")

string = "word"
print(create_acronym(string) + "\n")

string = "coding dojo"
print(create_acronym(string) + "\n")

string = "   global     information     tracker   "
print(create_acronym(string) + "\n")
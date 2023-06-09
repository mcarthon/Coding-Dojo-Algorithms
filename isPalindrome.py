def is_palindrome(string: str) -> bool:

    new_string = ""

    for character in string:
        if character != " ":
            new_string += character

    if len(new_string) < 2:
        return True

    for i in range(len(new_string)):
        if new_string[i] == new_string[len(new_string) - 1 - i]:
            continue
        else:
            return False
    return True


print(is_palindrome(""))
print(is_palindrome("a"))
print(is_palindrome("ac"))
print(is_palindrome("a   b   a"))
print(is_palindrome("a   b   g"))
def python_function(keys, values):
    hash = {}

    for i in range(len(keys)):
        hash[keys[i]] = values[i]

    return hash


keys1 = ["abc", 3, "yo"]
vals1 = [42, "wassup", True]
print(python_function(keys1, vals1))

def invert_hash(dictionary):
    keys = list(dictionary.keys())
    values = list(dictionary.values())

    return python_function(values, keys)

print(invert_hash(python_function(keys1, vals1)))
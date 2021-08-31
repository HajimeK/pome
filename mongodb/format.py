import json

experiences = json.load(open("./data.json"))
print(json.dumps(experiences, indent = 4))

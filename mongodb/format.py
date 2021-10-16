import json

experiences = json.load(open("./experiences.json"))
print(json.dumps(experiences, indent = 4))

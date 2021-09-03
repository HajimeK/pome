var user = {
    user: "root",
    pwd: "mongo",
    roles: [
        {
            role: "dbOwner",
            db: "db"
        }
    ]
};

db.createUser(user);
db.createCollection('experiences');
import mysql.connector

def login_user(email, password):
    db = mysql.connector.connect(
        host="localhost", user="root", password="TKssp@4920/TL", database="KriskAI_Databases"
    )
    cursor = db.cursor()
    cursor.execute("SELECT * FROM User_Info WHERE email = %s AND password = %s", (email, password))
    result = cursor.fetchone()
    cursor.close()
    db.close()
    return result is not None

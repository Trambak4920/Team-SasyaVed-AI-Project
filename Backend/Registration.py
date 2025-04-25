import mysql.connector

def register_user(data):
    db = mysql.connector.connect(
        host="localhost", user="root", password="TKssp@4920/TL", database="KriskAI_Databases"
    )
    cursor = db.cursor()
    query = """
        INSERT INTO User_Info (name, email, mobile, occupation, password)
        VALUES (%s, %s, %s, %s, %s)
    """
    values = (data["name"], data["email"], data["mobile"], data["occupation"], data["password"])
    cursor.execute(query, values)
    db.commit()
    cursor.close()
    db.close()
    return True

from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from Login_page import login_user
from Registration import register_user
from CropRecommendation import Recommendations
from DD_from_pic import ImagePrediction
from Knowledge_Hub import query

app = FastAPI()

app.add_middleware(
  CORSMiddleware,
  allow_origins=["http://localhost:3000"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

@app.post("/api/login")
async def login(payload: dict):
    email = payload.get("email")
    password = payload.get("password")
    if login_user(email, password):
        return {"token": "mock-token"} 
    else:
        raise HTTPException(status_code=401, detail="Invalid credentials")

@app.post("/api/register")
async def register(payload: dict):
    success = register_user(payload)
    return {"success": success}

@app.post("/api/recommend")
async def crop(inputs: dict):
    rec = Recommendations(inputs)
    return {"recommendations": rec["choices"][0]["message"]["content"]}

@app.post("/api/detect")
async def detect_image(file: UploadFile = File(...)):
    path = f"/tmp/{file.filename}"
    with open(path, "wb") as f:
        f.write(await file.read())
    cls = ImagePrediction(path)
    return {"diagnosis": "Healthy" if cls == 0 else "Diseased"}

@app.post("/api/knowledge")
async def knowledge(payload: dict):
    ans = query({
        "messages": [{"role": "user", "content": payload["prompt"]}],
        "max_tokens": 512,
        "model": "deepseek-ai/DeepSeek-R1-fast"
    })
    return {"answer": ans["choices"][0]["message"]["content"]}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=5000, reload=True)

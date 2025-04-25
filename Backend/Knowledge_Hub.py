import requests

API_URL = "https://router.huggingface.co/nebius/v1/chat/completions"
headers = {
    "Authorization": "Bearer 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",
}

def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

enteredPrompt = input("Enter your Prompt:")

response = query(
    {
    "messages": [
        {
            "role": "user",
            "content": enteredPrompt
        }
    ],
    "max_tokens": 512,
    "model": "deepseek-ai/DeepSeek-R1-fast"
})

print(response["choices"][0]["message"])
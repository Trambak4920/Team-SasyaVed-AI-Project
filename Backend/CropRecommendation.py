import requests

API_link = "https://router.huggingface.co/nebius/v1/chat/completions"
title = {
    "Authorization": "Bearer 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",
}

def api(input_text):
  warhead = {
      "model": "deepseek-ai/DeepSeek-R1-fast",
      "messages":[
          {
              "role": "user",
              "content": input_text
              }
      ],
      "max_tokens": 2048
      }

  answer = requests.post(
      API_link,
      headers = title,
      json = warhead
      )
  if answer.status_code == 200:
    return answer.json()
  else:
    print("Error:", answer.status_code)
    print(answer.text)
    return None

def PromptInputBuilder(inputText):
  AIfedInput = (
      f"Given the following Conditions:\n"
      f"-Terrain Type: {inputText['T']}\n"
      f"-Temperature: {inputText['C']}\n"
      f"-Soil Type: {inputText['S']}\n"
      f"-Fertilizer Type Used Before: {inputText['F']}\n"
      f"Which crop is the most suitable to grow in these conditions?"
      f"Also, explain why, and suggest best practices for that crop."
  )
  return AIfedInput


def Recommendations(inputs):
  prompt = PromptInputBuilder(inputs)
  answers = api(prompt)
  return answers

inputs = {
    "T": input(),
    "C": input(),
    "S": input(),
    "F": input()
}

output = Recommendations(inputs)
print(output["choices"][0]["message"])
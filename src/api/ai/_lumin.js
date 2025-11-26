import openai

openai.api_key = "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"

def chat_completion(prompt):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ]
    )
    return response.choices[0].message.content

# Example usage
answer = chat_completion("Explain quantum computing in simple terms")
print(answer)

from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np

Krishk = load_model('KrishkAI_Detector.keras')

ImagePath = input("Enter Image Path:")

def ImagePrediction(ImagePath):
    img = image.load_img(ImagePath, 
                          target_size = (244, 244))
    ImageTensor = image.img_to_array(img)/ 255.0
    ImageTensor = np.expand_dims(ImageTensor, 
                                 axis = 0)
    evaluation = Krishk.predict(ImageTensor)
    PredictedCLass = np.argmax(evaluation)
    return PredictedCLass

Detection = ImagePrediction(ImagePath)

if Detection == 0:
    print("Plant is Healthy")
else:
    print("Plant is Diseased")


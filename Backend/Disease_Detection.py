import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.preprocessing.image import ImageDataGenerator

imgen = ImageDataGenerator(rescale = 1./255, validation_split = 0.2)

training = imgen.flow_from_directory(
    'F:\\New folder\\Hack4Bengal\\Datasets\\PLantDoc Dataset',
    target_size = (244, 244),
    batch_size = 32,
    class_mode = 'categorical',
    subset = 'training'
)

testing = imgen.flow_from_directory(
    'F:\\New folder\\Hack4Bengal\\Datasets\\PLantDoc Dataset',
    target_size = (244, 244),
    batch_size = 32,
    class_mode = 'categorical',
    subset = 'validation'
)

extractor = models.Sequential([
    layers.Input(shape = (244, 244, 3)),
    layers.Conv2D(32,(3, 3), activation = 'relu'),
    layers.MaxPooling2D(2, 2),
    layers.Conv2D(64, (3, 3), activation = 'relu'),
    layers.MaxPooling2D(2, 2),
    layers.Flatten(),
    layers.Dense(128, activation = 'relu'),
    layers.Dense(training.num_classes, activation = 'softmax')
])

extractor.compile(
    optimizer = 'adam', 
    loss = 'categorical_crossentropy',
    metrics = ['accuracy']
)
extractor.fit(training, validation_data = testing, epochs = 10)

extractor.save('KrishkAI_Detector.keras')
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.metrics import classification_report, confusion_matrix, mean_absolute_error, mean_squared_error
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.callbacks import EarlyStopping
import os

# Set visual style
sns.set_theme(style="whitegrid")
plt.rcParams['figure.figsize'] = (12, 8)

# Load the dataset
data_path = './public/data/genz_mental_wellness_synthetic_dataset.csv'
df = pd.read_csv(data_path)

# 1. Exploratory Data Analysis (EDA)
# This section generates visual insights to understand relationships between features.
def perform_eda(df):
    """
    Analyzes data distributions and correlations.
    Output: Saves 3 plots in eda_plots/
    - burnout_distribution.png: Shows imbalance in risk levels.
    - correlation_heatmap.png: Identifies which lifestyle factors (like sleep or screen time) link to mental health.
    - sleep_vs_motivation.png: Visualizes the impact of rest on drive.
    """
    print("Performing EDA...")
    os.makedirs('eda_plots', exist_ok=True)
    
    # Distribution of Burnout Risk
    plt.figure()
    sns.countplot(x='Burnout_Risk', data=df, palette='viridis')
    plt.title('Distribution of Burnout Risk')
    plt.savefig('eda_plots/burnout_distribution.png')
    
    # Correlation Heatmap
    # High correlation (>0.7) usually suggests strong predictors for the model.
    plt.figure(figsize=(16, 10))
    numerical_df = df.select_dtypes(include=[np.number])
    sns.heatmap(numerical_df.corr(), annot=True, cmap='coolwarm', fmt='.2f')
    plt.title('Correlation Heatmap of Numerical Features')
    plt.savefig('eda_plots/correlation_heatmap.png')
    
    # Sleep Quality vs Motivation
    plt.figure()
    sns.scatterplot(x='Sleep_Quality_Score', y='Motivation_Level', hue='Burnout_Risk', data=df, alpha=0.6)
    plt.title('Sleep Quality vs Motivation Level (colored by Burnout Risk)')
    plt.savefig('eda_plots/sleep_vs_motivation.png')
    
    print("EDA plots saved in 'eda_plots/' directory.")

# 2. Preprocessing
# This section converts text data to numbers and standardizes scales for the DNN.
def preprocess_data(df):
    """
    Prepares raw data for neural network consumption.
    Output: X_scaled (normalized features), y_class (encoded target), num_classes.
    - Standard Scaling: Ensures features like 'Age' and 'Hours' are on the same 0-1 range.
    - Label Encoding: Converts categories like 'Male/Female' into 0/1.
    """
    print("Preprocessing data...")
    
    df_processed = df.copy()
    
    # Encoding Categorical Variables (Text -> Numbers)
    le = LabelEncoder()
    categorical_cols = ['Gender', 'Country', 'Student_Working_Status', 'Content_Type_Preference']
    for col in categorical_cols:
        df_processed[col] = le.fit_transform(df_processed[col])
    
    # Target encoding for Classification (High/Medium/Low -> 2/1/0)
    df_processed['Burnout_Risk_Encoded'] = le.fit_transform(df_processed['Burnout_Risk'])
    
    # Separation of features and target
    X = df_processed.drop(['Burnout_Risk', 'Burnout_Risk_Encoded'], axis=1)
    y_class = df_processed['Burnout_Risk_Encoded']
    
    num_classes = len(df['Burnout_Risk'].unique())
    
    # Scaling (Crucial for Neural Networks to converge quickly)
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)
    
    return X_scaled, y_class, num_classes

# 3. DNN Modeling - Classification
# This section builds a deep network to predict the CATEGORY of burnout risk.
def build_and_train_dnn(X_train, y_train, X_test, y_test, num_classes):
    """
    Architecture: 4 Layers (64 -> 32 -> 16 -> Softmax).
    Output: Trained model + history (accuracy/loss logs).
    - Dropout: Randomly shuts off neurons to prevent 'memorization' (overfitting).
    - EarlyStopping: Stops training as soon as the model stops improving on validation data.
    """
    print("Building DNN for Classification...")
    
    model = Sequential([
        Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
        Dropout(0.2),
        Dense(32, activation='relu'),
        Dropout(0.1),
        Dense(16, activation='relu'),
        Dense(num_classes, activation='softmax') # Softmax gives probabilities for each class
    ])
    
    model.compile(optimizer='adam', 
                  loss='sparse_categorical_crossentropy', 
                  metrics=['accuracy'])
    
    early_stop = EarlyStopping(monitor='val_loss', mode='min', verbose=1, patience=10)
    
    history = model.fit(X_train, y_train, 
                        validation_data=(X_test, y_test),
                        epochs=100,
                        callbacks=[early_stop],
                        verbose=1)
    
    return model, history

# 4. DNN Modeling - Regression
# This section predicts a continuous numerical 'Wellbeing Index' score.
def build_and_train_regression_dnn(X_train, y_train, X_test, y_test):
    """
    Output: Predicts Wellbeing Index (Value between 0 and 10).
    - Loss: Mean Squared Error (MSE) - penalizes large errors heavily.
    - Metric: Mean Absolute Error (MAE) - shows the average point difference from truth.
    """
    print("\nBuilding DNN for Regression (Wellbeing Index)...")
    
    model = Sequential([
        Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
        Dropout(0.2),
        Dense(32, activation='relu'),
        Dense(16, activation='relu'),
        Dense(1, activation='linear') # Linear activation for continuous number output
    ])
    
    model.compile(optimizer='adam', loss='mse', metrics=['mae'])
    
    early_stop = EarlyStopping(monitor='val_loss', mode='min', verbose=1, patience=10)
    
    history = model.fit(X_train, y_train, 
                        validation_data=(X_test, y_test),
                        epochs=100, 
                        callbacks=[early_stop],
                        verbose=0)
    
    return model, history

# 5. Visualization of DNN Accuracy and Loss
def plot_training_history(history, title_prefix="DNN", is_regression=False):
    """
    Generates plots to see if the model learned effectively or overfit.
    Output: metric and loss png files in model_plots/
    """
    os.makedirs('model_plots', exist_ok=True)
    
    # Plot Performance (Accuracy or MAE)
    plt.figure()
    if not is_regression:
        plt.plot(history.history['accuracy'], label='Train Accuracy')
        plt.plot(history.history['val_accuracy'], label='Val Accuracy')
        plt.ylabel('Accuracy')
    else:
        plt.plot(history.history['mae'], label='Train MAE')
        plt.plot(history.history['val_mae'], label='Val MAE')
        plt.ylabel('MAE')
        
    plt.title(f'{title_prefix} Performance')
    plt.xlabel('Epoch')
    plt.legend()
    plt.savefig(f'model_plots/{title_prefix.lower()}_metrics.png')
    
    # Plot Loss Curve (Should show a smooth downward trend)
    plt.figure()
    plt.plot(history.history['loss'], label='Train Loss')
    plt.plot(history.history['val_loss'], label='Val Loss')
    plt.title(f'{title_prefix} Loss')
    plt.xlabel('Epoch')
    plt.ylabel('Loss')
    plt.legend()
    plt.savefig(f'model_plots/{title_prefix.lower()}_loss.png')

# 6. Main Flow Execution
if __name__ == "__main__":
    # --- Step 1: Visual Research ---
    perform_eda(df)
    
    # --- Step 2: Prep for AI ---
    X_scaled, y_class, num_classes = preprocess_data(df)
    y_reg = df['Wellbeing_Index']
    
    # --- Step 3: Train/Test Split (80% training, 20% validation) ---
    X_train_c, X_test_c, y_train_c, y_test_c = train_test_split(X_scaled, y_class, test_size=0.2, random_state=42)
    X_train_r, X_test_r, y_train_r, y_test_r = train_test_split(X_scaled, y_reg, test_size=0.2, random_state=42)
    
    # --- Step 4: Run Classification AI (Burnout Risk) ---
    model_c, history_c = build_and_train_dnn(X_train_c, y_train_c, X_test_c, y_test_c, num_classes)
    plot_training_history(history_c, "Burnout_Classification")
    
    # --- Step 5: Run Regression AI (Wellbeing Index) ---
    model_r, history_r = build_and_train_regression_dnn(X_train_r, y_train_r, X_test_r, y_test_r)
    plot_training_history(history_r, "Wellbeing_Regression", is_regression=True)
    
    # --- Step 6: Final Evaluation ---
    # Expected Output: Classification accuracy ~99%, Regression MAE ~0.11
    y_pred_c = np.argmax(model_c.predict(X_test_c), axis=1)
    print("\nClassification Report (Burnout Risk):")
    print(classification_report(y_test_c, y_pred_c))
    
    y_pred_r = model_r.predict(X_test_r)
    print("\nRegression Metrics (Wellbeing Index):")
    print(f"MAE: {mean_absolute_error(y_test_r, y_pred_r):.4f}")
    print(f"MSE: {mean_squared_error(y_test_r, y_pred_r):.4f}")
    
    print("\nTraining and Evaluation complete. Visualizations saved.")

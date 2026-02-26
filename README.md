# Gen-Z Mental Wellness & Digital Lifestyle Patterns

This project explores the relationship between digital lifestyle factors and mental wellness among Gen-Z individuals. It uses a synthetic dataset from Kaggle and leverages Deep Neural Networks (DNN) for both classification and regression tasks.

## 📊 About the Dataset
The dataset used is the **Gen-Z Mental Wellness and Digital Lifestyle Patterns Synthetic Dataset**. It contains 10,000 samples describing various aspects of 18–26-year-olds' daily lives.

### Key Features:
- **Demographics**: Age, Gender, Country, Student/Working Status.
- **Digital Habits**: Daily Social Media Hours, Screen Time, Online Gaming Hours.
- **Mental Health Metrics**: Overthinking Score, Anxiety Score, Mood Stability Score, Motivation Level.
- **Physical Health**: Sleep Quality, Exercise Frequency, Caffeine Intake.
- **Targets**: 
  - `Burnout_Risk` (Low, Medium, High) - Used for **Classification**.
  - `Wellbeing_Index` (Score 0–10) - Used for **Regression**.

## 🛠️ What We've Done

### 1. Exploratory Data Analysis (EDA)
We performed a deep dive into the data to identify patterns:
- **Burnout Distribution**: Visualized the frequency of Low, Medium, and High risk levels.
- **Correlation Mapping**: Created a heatmap to see how factors like 'Screen Time' and 'Overthinking' correlate with burnout.
- **Scatter Analysis**: Analyzed the trade-off between Sleep Quality and Motivation Levels.

### 2. Data Preprocessing
- **Encoding**: Categorical text data (e.g., Country, Gender) was converted into numerical format using `LabelEncoder`.
- **Scaling**: Numeric features were standardized using `StandardScaler` to ensure the neural network treats all inputs fairly (e.g., Age vs. Screen Time hours).
- **Train-Test Split**: Divided the data (80% training, 20% validation) to ensure the AI generalizes well to new data.

### 3. Deep Learning Models (DNN)
We built and trained two specialized Deep Neural Networks using **TensorFlow/Keras**:
- **Classification Model**: A 4-layer network designed to predict the category of burnout risk. It includes **Dropout** layers to prevent overfitting and **Early Stopping** to halt training at peak performance.
- **Regression Model**: A specialized network designed to predict the continuous `Wellbeing_Index` score.

## 🏆 Project Outcomes (The Output)

The analysis yielded highly accurate predictive models and clear visual insights:

### Classification Performance (Burnout Risk)
- **Accuracy**: **~99%**
- The model is exceptionally strong at identifying "Low" and "High" risk levels, with slight variation in the "Medium" class due to its rarity in the dataset.

### Regression Performance (Wellbeing Index)
- **Mean Absolute Error (MAE)**: **0.1110**
- On a scale of 0 to 10, the model's predictions are, on average, within 0.11 points of the actual score.

### Visual Insight Assets
The following plots were generated and are stored in the `eda_plots` and `model_plots` directories:
- `burnout_distribution.png`
- `correlation_heatmap.png`
- `wellbeing_regression_metrics.png`
- `burnout_classification_metrics.png`

## 🚀 How to Use

### Prerequisites
Install the required Python libraries:
```bash
pip install pandas numpy matplotlib seaborn scikit-learn tensorflow
```

### Running the Analysis
You can run the full analysis script to generate the plots and train the models:
```bash
python3 genz_analysis.py
```

Or explore the project interactively using the Jupyter Notebook:
Open **`genz_analysis.ipynb`** in VS Code, Jupyter, or Google Colab.

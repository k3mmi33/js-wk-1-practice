# JavaScript Toy Problems

## Project Description
This project contains solutions to various JavaScript challenges. It focuses on helping learners practice foundational concepts like loops, functions, objects, and algorithms. Each solution is designed to tackle a specific problem in a clean and efficient manner, with clear and concise code.

## Challenges and Solutions

### 1. **Student Grade Generator**
- **Problem:** A function that prompts the user to input student marks between 0 and 100. The program then maps the input to the corresponding grade:
  - A > 79
  - B: 60 to 79
  - C: 50 to 59
  - D: 40 to 49
  - E: less than 40

- **Example Input/Output:**
  - **Input:** `85`
  - **Output:** `Grade: A`

- **File:** [student-grade.js](student-grade.js)

### 2. **Speed Detector**
- **Problem:** A function that checks the speed of a car. If the speed is under 70, it returns "Ok". If the speed exceeds 70, it calculates the number of demerit points based on 5 km/h increments above the speed limit. If the driver accumulates more than 12 points, their license is suspended.

- **Example Input/Output:**
  - **Input:** `speed = 80`
  - **Output:** `Points: 2`

- **File:** [speed-detector.js](speed-detector.js)

### 3. **Net Salary Calculator**
- **Problem:** A program that calculates an individual's net salary by considering basic salary, benefits, PAYE tax, NHIF, and NSSF deductions. The program then computes the net salary after deductions.

- **Example Input/Output:**
  - **Input:** `Basic Salary: 50000, Benefits: 10000`
  - **Output:** `Net Salary: 40,000`

- **File:** [net-salary-calculator.js](net-salary-calculator.js)

### 4. **Bubble Sort**
- **Problem:** A function that sorts an array of numbers from lowest to highest using the bubble sort algorithm.

- **Example Input/Output:**
  - **Input:** `[5, 6, 1, 3, 4, 2]`
  - **Output:** `[1, 2, 3, 4, 5, 6]`

- **File:** [bubble-sort.js](bubble-sort.js)

### 5. **Staircase Problem**
- **Problem:** A function that logs a staircase shape using the `#` character, where the number of steps is determined by the integer input.

- **Example Input/Output:**
  - **Input:** `steps(3)`
  - **Output:**
    ```
    #
    ##
    ###
    ```

- **File:** [staircase.js](staircase.js)

### 6. **Cylinder Volume Calculation**
- **Problem:** A class that calculates the volume of a cylinder given its radius and height. The volume is calculated using the formula:
  \[
  V = \pi r^2 h
  \]
  The result is rounded to four decimal places.

- **Example Input/Output:**
  - **Input:** `radius = 5, height = 10`
  - **Output:** `Volume: 785.3982`

- **File:** [cylinder-volume.js](cylinder-volume.js)

## How to Run the Code

1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/YOUR-USERNAME/js-toy-problems.git

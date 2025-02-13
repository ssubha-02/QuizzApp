const quizData = [
    {
        question: "1. Which of the following is a primitive data type in Java?",
        a: "String",
        b: "int",
        c: "Integer",
        d: "Boolean",
        correct: "b",
    },
    {
        question: "2. What is the default value of a boolean variable in Java?",
        a: "true",
        b: "false",
        c: "null",
        d: "0",
        correct: "b",
    },
    {
        question: "3. Which of these is not a valid variable name in Java?",
        a: "int $value;",
        b: "float _value;",
        c: "double 2value;",
        d: "char value2;",
        correct: "c",
    },
    {
        question: "4. What is the size of a float variable in Java?",
        a: "16 bits",
        b: "32 bits",
        c: "64 bits",
        d: "128 bits",
        correct: "b",
    },
    {
        question: "5. Which of the following is used to define a constant variable in Java?",
        a: "final",
        b: "static",
        c: "const",
        d: "immutable",
        correct: "a",
    },
    {
        question: "6. Which method is used to start a thread in Java?",
        a: "run()",
        b: "start()",
        c: "init()",
        d: "execute()",
        correct: "b",
    },
    {
        question: "7. Which of the following is not a valid access modifier in Java?",
        a: "public",
        b: "private",
        c: "protected",
        d: "internal",
        correct: "d",
    },
    {
        question: "8. What is the default value of a reference variable in Java?",
        a: "0",
        b: "null",
        c: "false",
        d: "undefined",
        correct: "b",
    },
    {
        question: "9. Which of these is not a valid loop in Java?",
        a: "for",
        b: "while",
        c: "do-while",
        d: "repeat-until",
        correct: "d",
    },
    {
        question: "10. Which of the following is used to handle exceptions in Java?",
        a: "try-catch",
        b: "throw-catch",
        c: "catch-finally",
        d: "try-finally",
        correct: "a",
    },
    {
        question: "11. What is the purpose of the 'super' keyword in Java?",
        a: "To call a method in the current class",
        b: "To call a method in the superclass",
        c: "To create a new instance of the superclass",
        d: "To access private members of the superclass",
        correct: "b",
    },
    {
        question: "12. Which of the following is not a valid data type in Java?",
        a: "int",
        b: "float",
        c: "double",
        d: "real",
        correct: "d",
    },
    {
        question: "13. Which of these classes are used to handle input in Java?",
        a: "Scanner",
        b: "BufferedReader",
        c: "FileReader",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "14. Which of the following is used to define a method that does not return any value in Java?",
        a: "void",
        b: "null",
        c: "empty",
        d: "undefined",
        correct: "a",
    },
    {
        question: "15. Which of these is not a valid constructor declaration in Java?",
        a: "public MyClass() {}",
        b: "private MyClass() {}",
        c: "protected MyClass() {}",
        d: "public void MyClass() {}",
        correct: "d",
    },
    {
        question: "16. Which of the following is used to create a new thread in Java?",
        a: "Thread t = new Thread();",
        b: "Thread t = new Thread(new Runnable());",
        c: "Thread t = new Runnable();",
        d: "Thread t = new Thread(new MyThread());",
        correct: "b",
    },
    {
        question: "17. Which of these is not a valid method signature in Java?",
        a: "public void myMethod() {}",
        b: "private int myMethod() {}",
        c: "protected void myMethod(int x) {}",
        d: "public void myMethod(int x, int y) {}",
        correct: "d",
    },
    {
        question: "18. Which of the following is used to handle multiple exceptions in a single catch block in Java?",
        a: "Multiple catch blocks",
        b: "Multi-catch syntax",
        c: "Nested try-catch blocks",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "19. Which of these is not a valid way to declare an array in Java?",
        a: "int[] arr;",
        b: "int arr[];",
        c: "int arr[10];",
        d: "int[] arr = new int[10];",
        correct: "c",
    },
    {
        question: "20. Which of the following is used to compare two strings in Java?",
        a: "==",
        b: "equals()",
        c: "compareTo()",
        d: "equalsIgnoreCase()",
        correct: "b",
    },
    {
        question: "21. How do you reverse a string in Java?",
        a: "Use the reverse() method of the StringBuilder class.",
        b: "Use the reverse() method of the StringBuffer class.",
        c: "Use the toCharArray() method and swap characters.",
        d: "All of the above.",
        correct: "d",
    },
    {
        question: "22. How do you check if a string is a palindrome in Java?",
        a: "Reverse the string and compare it with the original.",
        b: "Convert the string to a character array and check if it reads the same forwards and backwards.",
        c: "Use the equals() method to compare the string with its reverse.",
        d: "All of the above.",
        correct: "d",
    },
    {
        question: "23. How do you find the factorial of a number in Java?",
        a: "Use a for loop to multiply numbers from 1 to n.",
        b: "Use recursion to multiply numbers from 1 to n.",
        c: "Use the BigInteger class to handle large numbers.",
        d: "All of the above.",
        correct: "d",
    },
    {
        question: "24. How do you check if a number is prime in Java?",
        a: "Check if the number is divisible by any number from 2 to n-1.",
        b: "Check if the number is divisible by any number from 2 to sqrt(n).",
        c: "Use the isPrime() method of the Math class.",
        d: "All of the above.",
        correct: "b",
    },
    {
        question: "25. How do you find the largest element in an array in Java?",
        a: "Use the max() method of the Arrays class.",
        b: "Iterate through the array and compare each element.",
        c: "Sort the array and return the last element.",
        d: "All of the above.",
        correct: "b",
    },
    {
        question: "26. How do you sort an array in Java?",
        a: "Use the sort() method of the Arrays class.",
        b: "Implement a sorting algorithm like bubble sort or quicksort.",
        c: "Use the Collections.sort() method for arrays of objects.",
        d: "All of the above.",
        correct: "d",
    },
    {
        question: "27. How do you remove duplicates from an array in Java?",
        a: "Use a HashSet to store elements and then convert it back to an array.",
        b: "Sort the array and then remove duplicates.",
        c: "Iterate through the array and remove duplicates manually.",
        d: "All of the above.",
        correct: "a",
    },
    {
        question: "28. How do you find the second largest element in an array in Java?",
        a: "Sort the array and return the second last element.",
        b: "Iterate through the array and keep track of the largest and second largest elements.",
        c: "Use a priority queue to find the second largest element.",
        d: "All of the above.",
        correct: "b",
    },
    {
        question: "29. How do you implement a binary search in Java?",
        a: "Use the binarySearch() method of the Arrays class.",
        b: "Implement the binary search algorithm manually.",
        c: "Use a priority queue to perform binary search.",
        d: "All of the above.",
        correct: "a",
    },
    {
        question: "30. How do you merge two sorted arrays in Java?",
        a: "Use the merge() method of the Arrays class.",
        b: "Iterate through both arrays and merge them manually.",
        c: "Use a priority queue to merge the arrays.",
        d: "All of the above.",
        correct: "b",
    },
    {
        question: "31. How do you find the intersection of two arrays in Java?",
        a: "Use the retainAll() method of the List interface.",
        b: "Iterate through both arrays and find common elements.",
        c: "Use a HashSet to store elements and then find the intersection.",
        d: "All of the above.",
        correct: "d",
    },
    {
        question: "32. How do you implement a stack in Java?",
        a: "Use the Stack class.",
        b: "Use a LinkedList to implement stack operations.",
        c: "Use an ArrayList to implement stack operations.",
        d: "All of the above.",
        correct: "d",
    },
    {
        question: "33. How do you implement a queue in Java?",
        a: "Use the Queue interface and its implementations.",
        b: "Use a LinkedList to implement queue operations.",
        c: "Use a PriorityQueue to implement queue operations.",
        d: "All of the above.",
        correct: "d",
    },
    {
        question: "34. How do you implement a linked list in Java?",
        a: "Use the LinkedList class.",
        b: "Create a custom Node class and implement linked list operations.",
        c: "Use an ArrayList to simulate linked list operations.",
        d: "All of the above.",
        correct: "b",
    },
    {
        question: "35. How do you implement a hash map in Java?",
        a: "Use the HashMap class.",
        b: "Use a Hashtable to implement hash map operations.",
        c: "Create a custom hash map class and implement hash functions.",
        d: "All of the above.",
        correct: "d",
    },
    {
        question: "36. How do you handle exceptions in Java?",
        a: "Use try-catch blocks to handle exceptions.",
        b: "Use throws keyword to declare exceptions.",
        c: "Use custom exception classes to handle specific exceptions.",
        d: "All of the above.",
        correct: "d",
    },
    {
        question: "37. How do you create a thread in Java?",
        a: "Extend the Thread class and override the run() method.",
        b: "Implement the Runnable interface and pass it to a Thread object.",
        c: "Use the Executor framework to manage threads.",
        d: "All of the above.",
        correct: "d",
    },
    {
        question: "38. How do you synchronize methods in Java?",
        a: "Use the synchronized keyword in the method declaration.",
        b: "Use the synchronized block inside the method.",
        c: "Use the ReentrantLock class to synchronize methods.",
        d: "All of the above.",
        correct: "d",
    },
    {
        question: "39. How do you implement a singleton pattern in Java?",
        a: "Use a private static instance and a public static method to access it.",
        b: "Use an enum to implement singleton pattern.",
        c: "Use a static block to initialize the instance.",
        d: "All of the above.",
        correct: "d",
    },
    {
        question: "40. How do you find the factorial of a number in Java?",
        a: "Use a for loop to multiply numbers from 1 to n.",
        b: "Use recursion to multiply numbers from 1 to n.",
        c: "Use the BigInteger class to handle large numbers.",
        d: "All of the above.",
        correct: "d",
    },
    {
        question: "41. How do you check if a number is prime in Java?",
        a: "Check if the number is divisible by any number from 2 to n-1.",
        b: "Check if the number is divisible by any number from 2 to sqrt(n).",
        c: "Use the isPrime() method of the Math class.",
        d: "All of the above.",
        correct: "b",
    },
    {
        question: "42. How do you find the largest element in an array in Java?",
        a: "Use the max() method of the Arrays class.",
        b: "Iterate through the array and compare each element.",
        c: "Sort the array and return the last element.",
        d: "All of the above.",
        correct: "b",
    },
    {
        question: "43. How do you sort an array in Java?",
        a: "Use the sort() method of the Arrays class.",
        b: "Implement a sorting algorithm like bubble sort or quicksort.",
        c: "Use the Collections.sort() method for arrays of objects.",
        d: "All of the above.",
        correct: "d",
    },
    {
        question: "44. How do you remove duplicates from an array in Java?",
        a: "Use a HashSet to store elements and then convert it back to an array.",
        b: "Sort the array and then remove duplicates.",
        c: "Iterate through the array and remove duplicates manually.",
        d: "All of the above.",
        correct: "a",
    },
    {
        question: "45. How do you find the second largest element in an array in Java?",
        a: "Sort the array and return the second last element.",
        b: "Iterate through the array and keep track of the largest and second largest elements.",
        c: "Use a priority queue to find the second largest element.",
        d: "All of the above.",
        correct: "b",
    },
    {
        question: "46. How do you implement a binary search in Java?",
        a: "Use the binarySearch() method of the Arrays class.",
        b: "Implement the binary search algorithm manually.",
        c: "Use a priority queue to perform binary search.",
        d: "All of the above.",
        correct: "a",
    },
    {
        question: "47. How do you merge two sorted arrays in Java?",
        a: "Use the merge() method of the Arrays class.",
        b: "Iterate through both arrays and merge them manually.",
        c: "Use a priority queue to merge the arrays.",
        d: "All of the above.",
        correct: "b",
    },
    {
        question: "48. How do you find the intersection of two arrays in Java?",
        a: "Use the retainAll() method of the List interface.",
        b: "Iterate through both arrays and find common elements.",
        c: "Use a HashSet to store elements and then find the intersection.",
        d: "All of the above.",
        correct: "d",
    },
    {
        question: "49. How do you implement a stack in Java?",
        a: "Use the Stack class.",
        b: "Use a LinkedList to implement stack operations.",
        c: "Use an ArrayList to implement stack operations.",
        d: "All of the above.",
        correct: "d",
    },
    {
        question: "50. How do you implement a queue in Java?",
        a: "Use the Queue interface and its implementations.",
        b: "Use a LinkedList to implement queue operations.",
        c: "Use a PriorityQueue to implement queue operations.",
        d: "All of the above.",
        correct: "d",
    },
];


const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
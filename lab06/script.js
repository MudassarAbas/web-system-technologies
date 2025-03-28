    // Task-1
    
    console.log("Name: John Doe");
    console.log("University: Bahria University, Islamabad");
    console.log("Degree: BS Computer Science");
    console.log("Occupation: Student");

    // Task-2

    const Person = new Object();
    Person ;
    Person.name = "Jhon"
    Person.class = "9th"
    Person.age = "10"
 
    console.log(Object.keys(Person).length);

    // Task-3

    let students = [
        { name: "Alice", age: 22 },
        { name: "Bob", age: 20 },
        { name: "Charlie", age: 19 },
        { name: "Charlies", age: 7 }
    ];
     
    students.sort((a, b) => a.age - b.age)
     
    console.log(students);

    // Task-4

    document.getElementById("demo").style.backgroundColor = "Orange"
    document.getElementById("demo").style.textAlign = "Right"
    document.getElementById("demo").style.fontSize = "30px"
 
    function hide() {
       console.log("Hello hide");
    
    let element = document.getElementById("demo");
       console.log(element);
    
      if (element.classList.contains("hello")) {
        element.classList.remove("hello")
      } else {
        element.classList.add("hello")
     }
    }

    // Task-5

    function calculateGPA() {
        let marks = document.getElementById("marks").value;
        let gpa;
        
        if (marks >= 90) gpa = 4.0;
        else if (marks >= 80) gpa = 3.7;
        else if (marks >= 70) gpa = 3.3;
        else if (marks >= 60) gpa = 3.0;
        else if (marks >= 50) gpa = 2.5;
        else gpa = 0.0;

        document.getElementById("result").innerText = "Your GPA is: " + gpa;
    }


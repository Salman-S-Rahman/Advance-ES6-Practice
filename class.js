class Students {
    constructor(name, id) {
        this.studentName = name;
        this.studentId = id
    }

}

let student1 = new Students("Taskin", 44);
console.log(student1);

// ============ making object by using class ===========


class Student extends Students {
    constructor(subject, major, id, name) {
        super(name, id)
        this.studentSubject = subject;
        this.studentMajor = major;
    }
}

let student2 = new Student("EEE", "Telecommunication", 44, "Salman");
console.log(student2);
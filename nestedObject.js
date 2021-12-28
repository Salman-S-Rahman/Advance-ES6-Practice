var studentInfo = {
    name: "Taskin asghar",
    passion: "MERN Stack Development",
    occupation: {
        study: {
            subject: "EEE",
            uni: "AIUB",
            major: "Telecommunication",
            optional: "Power Engineering"
        },
        job: "No"
    },
    address: "Mohammadpur"

}

// var subjects = studentInfo.occupation.study.subject;
var subjects = studentInfo.occupatio?.study.subject;

// ========= optional chaining ============ 
console.log(subjects);

// =========== without object Destructuring ===========

const { name, passion } = studentInfo;
const { subject, uni, major, optional } = studentInfo.occupation.study;

console.log(name, passion);

console.log(subject, uni, major, optional);

// ============== object Destructuring =================
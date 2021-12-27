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
const { name, passion } = studentInfo
const { subject, uni, major, optional } = studentInfo.occupation.study;
const details = `I am ${name}. I study at ${uni} in BSc ${subject}. My major is ${major} & optional is ${optional}. I am passionate in ${passion}.`
console.log(details);
import inquirer from 'inquirer';
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
;
const persons = new Person();
const startProgram = async (persons) => {
    do {
        console.log("Welcome Geust");
        const ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "who would you like to talk to?",
            choices: ["Student", "Myself"],
        });
        if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                type: "input",
                name: "student",
                message: "which student do you want to talk to?"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`hello i am ${name.name} and im fine.`);
                console.log(persons.students);
            }
            ;
            if (student) {
                console.log(`hello i am ${student.name} and im fine......`);
                console.log(persons.students);
            }
        }
        ;
        if (ans.select == "Myself") {
            console.log("hello my name is sami");
            console.log("And im here to something do");
        }
        ;
    } while (true);
};
startProgram(persons);

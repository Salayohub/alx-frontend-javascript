interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  contract?: boolean;
  [key: string]: any;
}


const teacher1: Teacher = {
  firstName: "Adedamola",
  lastName: "Atinuke",
  fullTimeEmployee: false,
  yearsOfExperience: 5,
  location: "Osun state",
  contract: false
};

const teacher2: Teacher = {
  firstName: "opeyemi",
  lastName: "oluwadesire",
  fullTimeEmployee: true,
  yearsOfExperience: 3,
  location: "ogun state",
  contract: true,
  Subject: "Maths"
};

console.log(teacher1);
console.log(teacher2);
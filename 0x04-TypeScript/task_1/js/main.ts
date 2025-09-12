// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  contract?: boolean;
  [key: string]: any;
}

// Director interface extending Teacher interface
interface Director extends Teacher {
  numberOfReports: number;
}

// Function type interface
interface printTeacherFunction {
  ({ firstName, lastName }: { firstName: string; lastName: string }): string;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Function implementation
const PrintTeacherFunction: printTeacherFunction = ({ firstName, lastName }) => {
  return `${firstName}. ${lastName}`;
};




// Teacher objects
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

// Director objects
const director1: Director = {
  firstName: "Adesewa",
  lastName: "Adegbite",
  fullTimeEmployee: true,
  location: "Lagos",
  numberOfReports: 10
};

const director2: Director = {
  firstName: "Nadia",
  lastName: "Johnson",
  fullTimeEmployee: false,
  yearsOfExperience: 15,
  location: "Abuja",
  numberOfReports: 25, // required
  contract: true, // extra property allowed from Teacher
};



// Testing the objects and function
console.log(teacher1);
console.log(teacher2);
console.log(director1);
console.log(director2);
console.log(printTeacher("Adedamola", "Atinuke")); // Output: A. Atinuke
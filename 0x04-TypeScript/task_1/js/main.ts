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

interface Director extends Teacher {
  numberOfReports: number;
}


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

console.log(teacher1);
console.log(teacher2);
console.log(director1);
console.log(director2);
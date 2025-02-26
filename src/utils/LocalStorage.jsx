

const employees = [
  {
    id: 1,
    firstName: "John",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDescription: "Complete the monthly sales report",
        taskDate: "2025-02-25",
        category: "Sales",
        severity: "high",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDescription: "Update client database",
        taskDate: "2025-02-20",
        category: "CRM",
        severity: "medium",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskDescription: "Resolve customer complaints",
        taskDate: "2025-02-22",
        category: "Support",
        severity: "high",
      },
    ],
  },
  {
    id: 2,
    firstName: "Emma",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDescription: "Prepare financial statement",
        taskDate: "2025-02-26",
        category: "Finance",
        severity: "high",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDescription: "Submit tax documents",
        taskDate: "2025-02-21",
        category: "Finance",
        severity: "medium",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskDescription: "Audit recent transactions",
        taskDate: "2025-02-27",
        category: "Audit",
        severity: "high",
      },
    ],
  },
  {
    id: 3,
    firstName: "Liam",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDescription: "Design new company logo",
        taskDate: "2025-02-28",
        category: "Design",
        severity: "medium",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDescription: "Create marketing banners",
        taskDate: "2025-02-19",
        category: "Marketing",
        severity: "low",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskDescription: "Launch email campaign",
        taskDate: "2025-02-24",
        category: "Marketing",
        severity: "high",
      },
    ],
  },
  {
    id: 4,
    firstName: "Sophia",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskDescription: "Develop new API endpoint",
        taskDate: "2025-02-25",
        category: "Development",
        severity: "high",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDescription: "Fix bug in authentication system",
        taskDate: "2025-02-22",
        category: "Development",
        severity: "medium",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDescription: "Optimize database queries",
        taskDate: "2025-02-26",
        category: "Database",
        severity: "high",
      },
    ],
  },
  {
    id: 5,
    firstName: "Oliver",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDescription: "Schedule job interviews",
        taskDate: "2025-02-29",
        category: "HR",
        severity: "medium",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDescription: "Conduct employee survey",
        taskDate: "2025-02-18",
        category: "HR",
        severity: "low",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskDescription: "Review candidate applications",
        taskDate: "2025-02-23",
        category: "Recruitment",
        severity: "high",
      },
    ],
  },
];


const admin = [
  {
    id: 1,
    firstName: "Michael",
    email: "admin@example.com",
    password: "123",
  },
];


export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};

// --- Application Mock Data ---
export const currentUser = {
  name: "Dr. Eleanor Vance",
  role: "instructor",
  email: "e.vance@school.edu",
  avatar: "https://i.pravatar.cc/150?u=eleanor"
};

export const courses = [
  {
    id: 1,
    title: "Introduction to Data Science",
    instructor: "Dr. Eleanor Vance",
    students: 82,
    progress: 75,
    image: "https://placehold.co/600x400/2563eb/white?text=Data+Science",
    description: "Learn the basics of data analysis and machine learning.",
    modules: [
      { title: "Module 1: Python Basics", type: "video", completed: true },
      { title: "Module 2: Pandas & NumPy", type: "text", completed: true },
      { title: "Module 3: Quiz - Basics", type: "quiz", score: 85, completed: true },
      { title: "Final Essay: AI Ethics", type: "aes", score: null, completed: false }
    ]
  },
  {
    id: 2,
    title: "Advanced Web Development",
    instructor: "Prof. Smith",
    students: 45,
    progress: 30,
    image: "https://placehold.co/600x400/16a34a/white?text=Web+Dev",
    description: "Master front-end and back-end frameworks.",
    modules: [
      { title: "React Hooks", type: "video", completed: false },
      { title: "Node.js API", type: "text", completed: false }
    ]
  },
  {
    id: 3,
    title: "Advanced Web Development",
    instructor: "Prof. Smith",
    students: 45,
    progress: 30,
    image: "https://placehold.co/600x400/16a34a/white?text=Web+Dev",
    description: "Master front-end and back-end frameworks.",
    modules: [
      { title: "React Hooks", type: "video", completed: false },
      { title: "Node.js API", type: "text", completed: false }
    ]
  },
  {
    id: 4,
    title: "Advanced Web Development",
    instructor: "Prof. Smith",
    students: 45,
    progress: 30,
    image: "https://placehold.co/600x400/16a34a/white?text=Web+Dev",
    description: "Master front-end and back-end frameworks.",
    modules: [
      { title: "React Hooks", type: "video", completed: false },
      { title: "Node.js API", type: "text", completed: false }
    ]
  },
  {
    id: 5,
    title: "Advanced Web Development",
    instructor: "Prof. Smith",
    students: 45,
    progress: 30,
    image: "https://placehold.co/600x400/16a34a/white?text=Web+Dev",
    description: "Master front-end and back-end frameworks.",
    modules: [
      { title: "React Hooks", type: "video", completed: false },
      { title: "Node.js API", type: "text", completed: false }
    ]
  },
  {
    id: 6,
    title: "Advanced Web Development",
    instructor: "Prof. Smith",
    students: 45,
    progress: 30,
    image: "https://placehold.co/600x400/16a34a/white?text=Web+Dev",
    description: "Master front-end and back-end frameworks.",
    modules: [
      { title: "React Hooks", type: "video", completed: false },
      { title: "Node.js API", type: "text", completed: false }
    ]
  },
  {
    id: 7,
    title: "Advanced Web Development",
    instructor: "Prof. Smith",
    students: 45,
    progress: 30,
    image: "https://placehold.co/600x400/16a34a/white?text=Web+Dev",
    description: "Master front-end and back-end frameworks.",
    modules: [
      { title: "React Hooks", type: "video", completed: false },
      { title: "Node.js API", type: "text", completed: false }
    ]
  },
  {
    id: 8,
    title: "Advanced Web Development",
    instructor: "Prof. Smith",
    students: 45,
    progress: 30,
    image: "https://placehold.co/600x400/16a34a/white?text=Web+Dev",
    description: "Master front-end and back-end frameworks.",
    modules: [
      { title: "React Hooks", type: "video", completed: false },
      { title: "Node.js API", type: "text", completed: false }
    ]
  }
];

export const stats = {
  student: { completion: 75, avgScore: 88, hours: 14 },
  instructor: { totalStudents: 124, activeCourses: 4, pendingGrading: 12 },
  admin: { totalUsers: 12450, instructors: 850, activeCourses: 1200 }
};

// NOTE: I have enabled the Quiz data here so the Student Dashboard Quiz feature works.
export const nextTasks = [
    { 
      id: 101,
      title: "Module 3: Quiz - Basics", // Updated to Quiz for functionality
      course: "Introduction to Data Science", 
      due: "Today", 
      type: "quiz",
      questions: [
        { 
          id: 1, 
          text: "Which library is primarily used for data manipulation in Python?", 
          options: ["NumPy", "Pandas", "Matplotlib", "Seaborn"] 
        },
        { 
          id: 2, 
          text: "What does CSV stand for?", 
          options: ["Computer Style View", "Comma Separated Values", "Common System Variable", "Code Syntax Value"] 
        },
        { 
          id: 3, 
          text: "In Pandas, what is the primary data structure?", 
          options: ["List", "Dictionary", "DataFrame", "Array"] 
        }
      ]
    },
    { 
      id: 102,
      title: "React Hooks Video", 
      course: "Advanced Web Development", 
      due: "Oct 28", 
      type: "video" 
    },
];

export const studentSubmissions = [
  {
    id: 101,
    studentName: "Alex Johnson",
    avatar: "https://i.pravatar.cc/150?u=alex",
    course: "Introduction to Data Science",
    assignment: "Final Essay: AI Ethics",
    submittedAt: "Oct 28, 2:30 PM",
    content: "Artificial Intelligence presents numerous ethical challenges, primarily concerning bias in algorithms and data privacy. When models are trained on historical data, they often inherit the prejudices of the past...",
    aiScore: null, // Not graded yet
    status: "Pending"
  },
  {
    id: 102,
    studentName: "Sam Smith",
    avatar: "https://i.pravatar.cc/150?u=sam",
    course: "Introduction to Data Science",
    assignment: "Final Essay: AI Ethics",
    submittedAt: "Oct 29, 9:15 AM",
    content: "The ethics of AI are rooted in the alignment problem. How do we ensure that AGI aligns with human values? This paper explores the concept of utility functions...",
    aiScore: 88, // Already graded
    status: "Graded"
  }
];
export const siteConfig = {
  name: "Nathan Snook",
  title: "Aspiring Junior Developer",
  description: "Portfolio website of Nathan Snook",
  primaryColor: "#571f7f",
  accentColor: "#a54c9e",
  textColor: "#000000",
  backgroundColor: "#000000",
  foregroundColor: "#ffffff",
  social: {
    email: "snooknate.ns@gmail.com",
    linkedin: "#",
    twitter: "#",
    github: "https://github.com/w0418773/",
  },
  aboutMe:
    "Hi I’m Nathan, I'm a versatile software developer with a strong background in both technical \
    support and retail management. Equipped with a Computer Programming diploma and hands-on experience \
    in various programming languages, I excel in web development, software design, and systems \
    administration. My leadership experience as a Retail Supervisor has refined my problem-solving, \
    teamwork, and communication skills. Skilled in software development, systems administration, and \
    network security, I combine technical expertise with strong interpersonal skills to deliver effective, \
    user-focused solutions. I’m passionate about leveraging my diverse expertise to develop innovative \
    solutions and contribute to dynamic tech teams.",
  skills: ["Programming and Software Development", "Technical Support and Systems Administration", 
    "Project Management", "Leadership and Team Management", "Problem-Solving and Analytical Thinking", 
    "Communication and Interpersonal Skills", "Adaptability and Multitasking"],
  projects: [
    {
      name: "Recipe Scrapper Bot",
      description:
        "The idea for this project came from the common problem of having a few ingredients on hand but \
        not knowing what to cook. I wanted to create a program where you could simply enter the ingredients \
        you have, and it would suggest a variety of recipes you can make with them.",
      reflection:
        "After developing this program and reflecting on it, I realized that adding a filtering \
        system for the recipe results would be a valuable improvement. For example, sorting recipes by average \
        user reviews could help prioritize higher quality options. Additionally, it would be useful to ensure \
        that the suggested recipes closely match the user's provided ingredients. Ideally, most of the listed \
        ingredients should appear in each recipe. I’d also like to implement error handling, such as checking \
        for invalid or misspelled inputs, to make the program more reliable and user-friendly.",
      link: "https://github.com/w0418773/Recipe-Scrapper-Bot",
      skills: ["Python", "Tkinter", "HTML Requests", "GUI", "Web Scraping", "APIs"],
    },
    {
      name: "Lottery Number Generator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      reflection:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "#",
      skills: ["SKILLS"],
    },
    {
      name: "Wordle Solver",
      description:
        "During the Wordle craze, I developed a program to assist with solving the puzzle more efficiently. \
        The program suggests possible words based on user feedback for each guess. You simply input whether \
        each letter is correct, in the wrong position, or not in the word at all. Using this feedback, the \
        program intelligently narrows down the list of possible words until it finds the solution.",
      reflection:
        "Looking back on the application, I believe incorporating image recognition would be a \
        major enhancement. Automating the process by having AI enter guesses directly into the Wordle \
        interface and visually interpret the feedback (e.g., identifying correct letters, misplaced \
        letters, or incorrect ones) would remove the need for manual input and create a more seamless \
        solving experience.",
      link: "https://github.com/w0418773/Wordle-Solver",
      skills: ["C#", "Event-Driven Programming", "Data Structures", "File I/O"],
    },
    {
      name: "Flight Tracker",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      reflection:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "#",
      skills: ["SKILLS"],
    },
  ],
  experience: [
    {
      company: "Eurekatec",
      title: "Junior Developer",
      dateRange: "April 2022 - September 2022",
      bullets: [
        "Developed a responsive front-end interface and a robust back-end system that continuously ingested 21000 data points per hour from microcontrollers.",
        "Collaborated with the management to analyze production metrics, enabling rapid detection of production errors and improving manufacturing reliability.",
        "Optimized data flow and visualization tools to support quick decision-making and ongoing performance improvements on the factory floor.",
      ],
    },
  ],
  education: [
    {
      school: "Nova Scotia Community College",
      degree: "Computer Programming Diploma",
      dateRange: "2019 - 2022",
      achievements: [
        "Honours Graduate",
      ],
    },
  ],
};

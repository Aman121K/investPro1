export const MenuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Courses",
    submenu: [
      {
        title: "Online",
        submenu: [
          {
            title: "India",
            url: "/OnlineCourses/India",
          },
          {
            title: "Canada",
            url: "/OnlineCourses/Canada",
          },
          // Add more countries as needed
        ],
      },
      {
        title: "Offline",
        submenu: [
          {
            title: "India",
            url: "/OfflineCourses/India",
          },
          {
            title: "Canada",
            url: "/OfflineCourses/Canada",
          },
          // Add more countries as needed
        ],
      },
      {
        title: "Weekend",
        submenu: [
          {
            title: "India",
            url: "/WeekendCourses/India",
          },
          {
            title: "Canada",
            url: "/WeekendCourses/Canada",
          },
          // Add more countries as needed
        ],
      },
    ],
  },
  {
    title: "Feedback",
    url: "/ContactUs",
  },
  {
    title: "About Us",
    url: "/AboutUs",
  },
];

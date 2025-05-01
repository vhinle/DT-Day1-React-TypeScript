import "./style.css";

/* Day 3 Session Examples */
export const HighlightedText = ({ text }) => (
  <p className="highlightedText">{text}</p>
);

const UserCard = ({ name }) => {
  return <div className="userCard">{name}</div>;
};

const AdmiPanel = ({ itHasProfile, profileList }) => {
  return (
    <div>
      <h1>This is Admin Panel</h1>
      {itHasProfile ? (
        <div>
          <p>Admin has profile</p>
          <p>Your profile was created las week</p>
        </div>
      ) : (
        <p>Admin has no profile. Create one?</p>
      )}
      <h2>User Cards</h2>
      <div className="userContainer">
        {profileList.map((profile, index) => (
          <UserCard key={index} name={profile} />
        ))}
      </div>
    </div>
  );
};

export const Dashboard = () => {
  const isAdmin = true;
  const hasProfile = false;
  const profiles = ["Angela", "Cheryl", "Carlos", "Marion"];

  return (
    <div>
      {isAdmin && (
        <AdmiPanel itHasProfile={hasProfile} profileList={profiles} />
      )}
    </div>
  );
};
/* Session 3 Examples */

//* Session 3 Asssignment *//
/*
  Prepartion for assignment: Create a Course Catalog component 
    that displays a list of courses. Each CourseCard component 
    should display the title, instructor, duration, tags, price, and an "enroll" button
*/

//Course tag component
const CourseTag = ({ tag }) => {
  return <span className="course-tag">{tag}</span>;
};

//Course Card component
const CourseCard = ({ courseList }) => {
  // Destructuring the course object
  const { courseTitle, instructor, duration, tags, price } = courseList;

  return (
    <div className={`course-card ${price > 250 && "highlighted"}`}>
      <p className="card-title">COURSE</p>
      <h2>{courseTitle}</h2>
      <p>
        Instructor: <strong>{instructor}</strong>
      </p>
      <p>
        Duration: <strong>{duration}</strong>
      </p>
      <p className="tags">
        Tags:&nbsp;
        {tags.map((tag) => (
          <CourseTag key={tag} tag={tag} />
        ))}
      </p>
      <p>
        Price: <strong>{Number(price).toFixed(2)}</strong>
      </p>
      <button className="enroll-button">Enroll</button>
    </div>
  );
};

//Course Catalog component
const CourseCatalog = () => {
  //list of courses
  const courses = [
    {
      courseId: 1,
      courseTitle: "React for Beginners",
      instructor: "Jane Doe",
      duration: "6 weeks",
      tags: ["React", "Beginner", "Frontend"],
      price: "199",
    },
    {
      courseId: 2,
      courseTitle: "Advanced JavaScript",
      instructor: "John Smith",
      duration: "8 weeks",
      tags: ["JavaScript", "Advanced", "Programming"],
      price: "249",
    },
    {
      courseId: 3,
      courseTitle: "Intro to Web Development",
      instructor: "Emily Johnson",
      duration: "5 weeks",
      tags: ["Web Development", "Beginner", "Frontend"],
      price: "149",
    },
    {
      courseId: 4,
      courseTitle: "UI/UX Design Basics",
      instructor: "Michael Brown",
      duration: "4 weeks",
      tags: ["UI/UX", "Design", "Beginner"],
      price: "179",
    },
    {
      courseId: 5,
      courseTitle: "Backend Development with Node.js",
      instructor: "Sarah Williams",
      duration: "10 weeks",
      tags: ["Node.js", "Backend", "Development"],
      price: "299",
    },
    {
      courseId: 6,
      courseTitle: "Data Structures and Algorithms",
      instructor: "Daniel Martinez",
      duration: "12 weeks",
      tags: ["Algorithms", "Data Structures", "Advanced"],
      price: "349",
    },
  ];

  return (
    <div className="course-catalog">
      <h1>Course Catalog</h1>
      <div className="course-cards">
        {courses.map((course) => (
          <CourseCard key={course.courseId} courseList={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseCatalog;

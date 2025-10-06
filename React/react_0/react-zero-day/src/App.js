import logo from './logo.svg';
import './App.css';
import BioData from './components/BioData';

const bioData = [
  {
    name: "Fuad",
    email: "srsetu@gmail.com",
    phone: "+245456452132452",
    github: "github.com/srsetu",
    skills: ["JS", "WP", "CSS", "REACT", "Next"],
    interests: ["Chess", "Football", "Entrepreneurship"],
    socialLinks: [{ platformName: "FB", handle: "fb/srsetu" }, 
                  { platformName: "Twitter", handle: "x/srsetu" }, 
                  { platformName: "LinkedIn", handle: "linkedin.com/srsetu" }]
  },
  {
    name: "Starlink",
    email: "srsetu@gmail.com",
    phone: "+245456452132452",
    github: "github.com/srsetu",
    skills: ["JS", "WP", "CSS", "REACT", "Next"],
    interests: ["Chess", "Football", "Entrepreneurship"],
    socialLinks: [{ platformName: "FB", handle: "fb/srsetu" }, 
                  { platformName: "Twitter", handle: "x/srsetu" }, 
                  { platformName: "LinkedIn", handle: "linkedin.com/srsetu" }]
  },
  {
    name: "Elon Musk",
    email: "srsetu@gmail.com",
    phone: "+245456452132452",
    github: "github.com/srsetu",
    skills: ["JS", "WP", "CSS", "REACT", "Next"],
    interests: ["Chess", "Football", "Entrepreneurship"],
    socialLinks: [{ platformName: "FB", handle: "fb/srsetu" }, 
                  { platformName: "Twitter", handle: "x/srsetu" }, 
                  { platformName: "LinkedIn", handle: "linkedin.com/srsetu" }]
  }
]

function App() {
  console.log('I am called');
  return (
    <div className="App">
      {bioData.map((data) =>(
        <>
        <BioData
        name={data.name}
        email={data.email}
        phone={data.phone}
        github={data.github}
        skills={data.skills}
        interests={data.interests}
        socialLinks={data.socialLinks}
      />
        <hr />
      </>
      ))}
      

    </div>
  );
}

/* A component must fullfil 3 criteria:
1) A component must be a function
2) That function should return "something"
3) That "something" should be some html-ish code (JSX)
 */

export default App;

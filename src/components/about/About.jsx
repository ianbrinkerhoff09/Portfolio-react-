import "./about.css";
import Me from "../../img/robotics1.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        👋 I'm Ian Brinkerhoff. I am from Fort Luaderdale, FL. I enjoy creating things that live on the internet.
        </p>
        <p className="a-desc">
         My interest in web development started back when I was 9 years old. I taught myself basic HTML5 and CSS to build simple websites. I would make my 'Show-and-Tell' objects my websites I coded and I'd give a brief explaination on how I'd build it. I then started looking into Python and Ruby on Rails. Went into High School and joined the robotics team. Leanred to code in Andriod Studio to program the robot but moved over to the physical designing of the robot and became the team captain for our robotics team. My senior year, we joined the most advanced robotics league 'FRC (First Robotics League)' and qualified for the FIRST World Championship as a rookie team.
        </p>
      </div>
    </div>
  );
};

export default About;

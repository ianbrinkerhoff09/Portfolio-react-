import "./about.css";
import Me from "../../img/robotics1.jpg";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Me} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    👋 I'm Ian Brinkerhoff. I am from Fort Luaderdale, FL. I
                    enjoy creating things that live on the internet.
                </p>
                <p className="a-desc">
                    My interest in web development started back when I was 9
                    years old. I taught myself basic HTML5 and CSS to build
                    simple websites. I would make my 'Show-and-Tell' objects the
                    websites I coded and I'd give a brief explanation of how I'd
                    build them. I then started looking into Python and Ruby on
                    Rails. Went into High School and joined the robotics team.
                    Learned to code in Andriod Studio to program the robot but
                    moved over to the physical designing of the robot and became
                    the team captain for our robotics team. In my senior year,
                    we joined the most advanced robotics league 'FRC (First
                    Robotics League)' and qualified for the FIRST World
                    Championship as a rookie team. After, I went to college to
                    study robotics engineering but felt like that wasn't my real
                    passion. I left and started coding with Colombia University
                    and their Full Stack boot camp. After I finished, I got a
                    job offer to work as a full-time game developer with a small
                    South American studio named "C2 Studio". I worked in level
                    design and game functionality development working in unreal
                    engine 4 & 5 and also in C++. Since then, I've returned to
                    school to continue pursuing a degree in robotics engineering
                    but also code in my free time. I have decided to get back
                    into coding full-time right next to school. Technology is my
                    passion and hope to make it all my future.
                </p>
            </div>
        </div>
    );
};

export default About;

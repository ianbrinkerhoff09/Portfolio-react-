import "./intro.css";
import Me from "../../img/myProfile.jpg";

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Ian Brinkerhoff</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Game Developer</div>
                            <div className="i-title-item">App Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">
                                Robotics Team Mentor
                            </div>
                        </div>
                    </div>
                    <p className="i-desc"></p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    );
};

export default Intro;

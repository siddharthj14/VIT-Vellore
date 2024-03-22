import React, { useRef } from "react";
import "./Testimonials.css";
import Card from "./Card";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.jpg";
import user_2 from "../../assets/user-2.jpg";
import user_3 from "../../assets/user-3.jpg";
import user_4 from "../../assets/user-4.jpg";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} className="next-btn" onClick={slideForward} />
      <img src={back_icon} className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <Card
              userImg={user_1}
              name="Choi Inseok"
              address="B.B.A, Korea"
              text="VIT University has given wings to the dreams I had for my career. VIT provides a lot of programmes, fantastic infrastructure and academic activities. The most important thing is the faculties are willing to help you reach your dreams.
I am proud of myself because I can contribute to the world as a VITian."
            />
          </li>
          <li>
            <Card
              userImg={user_2}
              name="Nabanoba K Juliet"
              address="B.Sc. Multimedia and Animation, Uganda"
              text="Being a part of VIT University opened up a world of opportunities and possibilities for me. I have met so many beautiful and loving people from different parts of the world who have made VIT a home away from home and also taught me so much about different aspects of life. I also learnt so much from my devoted teachers and through seminars."
            />
          </li>
          <li>
            <Card
              userImg={user_3}
              name="Tashi Gyeltshen"
              address="B.Tech Civil Engineering, Bhutan"
              text="Truly a place to learn and grow. Incorporating all the modern needs of students with a sea of opportunities, VIT has nurtured my sense of responsibility and confidence. The faculty is ever ready to help me with studies and personal challenges.
VIT has offered me more than what a student would desire for as his educational accomplishment. I am truly grateful to be part of this outstanding university."
            />
          </li>
          <li>
            <Card
              userImg={user_4}
              name="Toshen M. Thomas"
              address="Master of Computer Applications (MCA), U.S.A."
              text="Ever since I began my life at VIT, I felt like I have entered into a Nano world. Modern, innovative and student friendly campus with sophisticated computer labs will make the better of anyone who opts for their studies here. If 'Sky is the limit', here in VIT, there is no limit as to what one is to become. Various add-on courses, friendly staff and professors all help to make the life at VIT a wonderful experience."
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;

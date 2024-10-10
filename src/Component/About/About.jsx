import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const about = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState (true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIERSITY</h3>
        <h2>Nurturing Tomorroww's Leaders Today</h2>

        <p>
          Atmiya Vidya Mandir is an international residential school, affiliated
          with the CBSE since 2005, located about twenty km away from the
          diamond city of India  Surat. Founded by His Holiness Hariprasad
          Swamiji, the school is spread across a lush green thirty-five acres
          campus, with hundreds of Neem trees. This makes the school environment
          serene and peaceful, which the student community at AVM relishes.
        </p>
        <p>
          While an excellent education is essential, in the long term, quality
          of life is driven by one s inner self for which a strong foundation of
          culture and morality is also very important. The school puts much
          emphasis on the moral and spiritual development of the students as it
          does for academic excellence. The motto of the school is Union of
          Body, Mind and Soul. The teachers and staff of the school strive to
          help students achieve this ideal state.
        </p>
        <p>
          To emphasize the importance of our rich heritage and diversity, the
          school s annual calendar is full of cultural events, celebration of
          festivals and the creative assemblies through which specific values
          and qualities are demonstrated using the medium of dance, drama and
          music, performed by students with guidance from their teachers.
        </p>
      </div>
    </div>
  );
};

export default about;

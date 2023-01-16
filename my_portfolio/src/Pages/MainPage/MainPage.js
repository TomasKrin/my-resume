import TopBar from "../../Components/TopBar/TopBar"
import '../MainPage/MainPage.css';

const MainPage = () => {
  return (
    <div className="container">
        <TopBar/>
        <div className="profile-intro">
          <div className="picture">
            <img src="https://scontent.fvno2-1.fna.fbcdn.net/v/t1.18169-9/19961538_1407690012657362_4972937569277480837_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VAPqhrdFQBAAX85VjEH&_nc_ht=scontent.fvno2-1.fna&oh=00_AfDCYOOy4qfISumaTADLALsyEnOFwR8Noe2OjjgOWOHepw&oe=63ECE958" alt="pic" />
          </div>
          <div>
            <h2>Tomas Krinickas</h2>
            <p>I'm a freshly made Front End developer from Vilnius, Lithuania</p>
          </div>
        </div>
        <div className="aboutMe">
          <h3>About me</h3>
          <p>
            Hi, my Name is Tomas Krinickas, i'm 24 years old, freshly made Front End developer. I finished my studies in Code Academy, where i gained a lot of knowleadge with plain HTML, CSS and JavaScript, as well as working with newer and more advanced, CSS type, language SCSS. In my study period, i've worked with Node JS, on a surface level and using REACT library to full extent. I'm a quick learner, so i can pick up new things fast and get on with the work.
            </p>
        </div>
    </div>
  )
}

export default MainPage

import logo from './logo.svg';
import './App.css';
import ProfileComponent from './modules/profile/ProfileComponent';
import IntroductionComponent from './modules/Introduction/IntroductionComponent';
import SkillSectionComponent from './modules/skillSection/SkillSectionComponent';


function App() {
  return (
    
    <div className="App">
      <ProfileComponent></ProfileComponent>
      <IntroductionComponent></IntroductionComponent>
      <SkillSectionComponent></SkillSectionComponent>
    </div>
  );
}

export default App;

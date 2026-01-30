import CompanyContainer from "./map/basic/CompanyContainer";
import FoodContainer from "./map/basic/FoodContainer";
import SportContainer from "./map/basic/SportsContainer";
import CheckboxContainer from "./map/expert/CheckboxContainer";
import ProductContainer from "./map/expert/ProductContainer";
import AttendanceContainer from "./map/normal/AttendanceContainer";
import Color from "./state/Color";
import Count from "./state/Count";
import Hobby from "./state/Hobby";
import Name from "./state/Name";
import Person from "./state/Person";
import Sound from "./state/Sound";

function App() {
  return (
    <>
      <Count />
      <Sound />
      <Name />
      <Color />
      <Hobby />
      <Person />
      <FoodContainer />
      <CompanyContainer />
      <SportContainer />
      <AttendanceContainer />
      <ProductContainer />
      <CheckboxContainer />
    </>
  );
}

export default App;

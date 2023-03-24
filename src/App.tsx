import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

const App = () => {
  const para =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae magna tristique, euismod orci eget, malesuada mauris. Pellentesque lobortis arcu in mauris varius suscipit. Aliquam ut diam semper, bibendum turpis eget, convallis nulla. Donec lobortis ultricies dolor, ac tempor magna convallis vel.";

  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <h1>Expandable Text Example</h1>
      <ExpandableText para={para} expanded={expanded} onClick={handleClick} />
    </div>
  );
};

export default App;

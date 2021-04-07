import React from "react";
import ReactDOM from "react-dom";

import ProfileInfo from "./component/profile";

const App = () => {
  return (
    <div>
      <ProfileInfo cardTitle="KIMLIK BILGISI" />
      <ProfileInfo name="Ferdi Ates" />

      <ProfileInfo cardTitle="MESLEK BILGISI" />
      <ProfileInfo name="Front-End Developer" />

      <ProfileInfo cardTitle="HOBILER" />
      <ProfileInfo name="Reading,Traveling" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

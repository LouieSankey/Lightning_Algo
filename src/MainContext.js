import React from "react";
const MainContext = React.createContext({
    onNextPressed: () => {},
    onSubmitPressed: () => {}
});
export default MainContext;


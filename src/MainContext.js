import React from "react";
const MainContext = React.createContext({
    onNextPressed: () => {},
    onSubmitPressed: () => {},
    onCheckPressed: () => {},
    setAlgos: () => {},
    setsSelectedTimeComplexity:() => {},
    setAlgosFromLocalStorage: () => {},
    setSelectedSpaceComplexity: () => {}
});
export default MainContext;


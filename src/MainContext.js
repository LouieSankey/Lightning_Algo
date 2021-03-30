import React from "react";
const MainContext = React.createContext({
    onNextPressed: () => {},
    onSubmitPressed: () => {},
    onCheckPressed: () => {},
    setAlgos: () => {}
});
export default MainContext;


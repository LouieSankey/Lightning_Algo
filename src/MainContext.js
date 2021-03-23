import React from "react";
const MainContext = React.createContext({
    onNextPressed: () => {},
    onSubmitPressed: () => {},
    onCheckPressed: () => {}
});
export default MainContext;


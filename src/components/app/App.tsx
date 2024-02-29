import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useDispatch } from "react-redux";
import { down, up } from "./appSlice";

const App = () => {
    const {value, isOk} = useSelector((state:RootState) => state.appState);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(isOk);
    },[isOk])
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={() => {dispatch(up())}}>up</button>
        <button onClick={() => {dispatch(down())}}>down</button>
    </div>
  );
};

export default App;

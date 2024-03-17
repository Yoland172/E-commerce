import React from "react";
import ProfileNavBar from "./ProfileNavBar";
import { Route, Routes, useParams } from "react-router-dom";
import Settings from "./settings/Settings";
import Info from "./info/Info";

const ProfilePageRouting = () => {
    console.log("rendered");
  return (
    <>
      <ProfileNavBar />
      <Routes>
        <Route path="/profile/info" element={<Info />} />
        <Route path="/profile/wishlist" element={<>ffdlkkkk</>} />
        <Route path="/profile/settings" element={<Settings />} />
      </Routes>
    </>
  );
};

export default ProfilePageRouting;

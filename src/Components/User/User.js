import React from "react";
import { Routes, Route } from "react-router";
import UserHeader from "./UserHeader/UserHeader";
import UserPhotoPost from "./UserPhotoPost/UserPhotoPost";
import UserStats from "./UserStats";
import Feed from "../Feed/Feed";

function User() {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
}

export default User;

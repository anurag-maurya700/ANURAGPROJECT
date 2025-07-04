import React from "react";

const Home = () => {
  const backgroundStyle = {
    backgroundImage: "url('https://media.licdn.com/dms/image/v2/D5622AQFBenfTgM1Mog/feedshare-shrink_1280/B56ZfLucJ0HEAk-/0/1751469640638?e=1754524800&v=beta&t=UoEJ8oEAANuMY-1jRiFaD6yfIQBdPPKEf-Cp5lp_kbY')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <div style={backgroundStyle}>
      <h1>Welcome to the Home Page!</h1>
      <p>You have successfully logged in.</p>
    </div>
  );
};

export default Home;
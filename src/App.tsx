import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import HeroBanner from "./components/HeroBanner";
import MainLayout from "./components/MainLayout";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  const [user, setUser] = useState<{ username: string; email: string }>();

  const handleLogin = async () => {
    const postData = { username: "paniekos", password: "panta" };
    const headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    headers.append("GET", "POST");

    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        body: JSON.stringify(postData),
        credentials: "include",
        headers,
      });
      const data = await res.json();
      if (data) {
        const res2 = await fetch("http://localhost:3000/users/1", {
          method: "GET",
          credentials: "include",
          headers,
        });
        const data2 = await res2.json();
        setUser(data2);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-start w-full min-h-screen">
      <button onClick={handleLogin}>PRESS MEE</button>
      <div>
        {user && (
          <div>
            {user.username} {user.email}
          </div>
        )}
      </div>
      <HeroBanner />
      <Technologies />
      <Projects />
      <Contact />
      <MainLayout> </MainLayout>
    </div>
  );
}

export default App;

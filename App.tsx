import { User } from "firebase/auth";
import { Suspense, useEffect, useState } from "react";
import { client } from "./src/client";
import { Login } from "./src/components/Login";
import { Visualizer } from "./src/components/Visualizer";
import { auth } from "./src/firebase/firebaseApp";
import { UserData } from "./src/types/UserData";

export default function App() {
  const [firebaseUser, setFirebaseUser] = useState<User | undefined>();
  const [userData, setUserData] = useState<UserData | undefined>();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setFirebaseUser(user);
        client.login(user).then((result) => {
          setUserData(result.data);
        });
      }
    });
  }, []);

  return (
    <Suspense fallback={null}>
      {!firebaseUser && <Login />}
      <Visualizer />
    </Suspense>
  );
}

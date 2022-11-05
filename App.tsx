import { User } from "firebase/auth";
import { Suspense, useEffect, useState } from "react";
import { client } from "./src/client";
import { InfoPanel } from "./src/components/InfoPanel";
import { Login } from "./src/components/Login";
import { Visualizer } from "./src/components/Visualizer";
import { auth } from "./src/firebase/firebaseApp";
import { UserData } from "./src/types/UserData";

export default function App() {
  const [firebaseUser, setFirebaseUser] = useState<User | undefined>();
  const [userData, setUserData] = useState<UserData | undefined>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setFirebaseUser(user);
        client
          .login(user)
          .then((result) => {
            if (result) {
              setUserData(result.data);
            } else {
              console.error("Unexpected falsy result");
            }
          })
          .catch((e) => {
            console.error(e);
          });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Suspense fallback={null}>
      {!firebaseUser && <Login />}
      {userData && <InfoPanel userData={userData} />}
      <Visualizer />
    </Suspense>
  );
}

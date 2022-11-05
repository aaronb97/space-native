import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";

import * as Application from "expo-application";
import * as WebBrowser from "expo-web-browser";
import { SafeAreaView } from "react-native";
import { auth } from "../../firebase/firebaseApp";

import * as Google from "expo-auth-session/providers/google";
import { Panel } from "../Panel";
import TextButton from "../TextButton/TextButton";

WebBrowser.maybeCompleteAuthSession();

export function Login() {
  const [, , authRequest] = Google.useAuthRequest({
    iosClientId:
      "654827401209-1kah4ba0cmi5ek6l4k4r78ktj136k9qt.apps.googleusercontent.com",
    webClientId:
      "654827401209-9medk78d42ria0qcat5mf53v18mknm0k.apps.googleusercontent.com",
    expoClientId:
      "654827401209-nj412rubqjmmst72uaelbmjihtkbk4g6.apps.googleusercontent.com",
    scopes: ["profile", "email"],
  });

  console.log(Application.applicationId);

  const onClickGoogle = () => {
    authRequest()
      .then((result) => {
        if (result.type === "success") {
          if (result.authentication) {
            const { idToken, accessToken } = result.authentication;
            const credential = GoogleAuthProvider.credential(
              idToken,
              accessToken
            );

            signInWithCredential(auth, credential).catch((e) =>
              console.error(e)
            );
          } else {
            console.error("Unexpected null authentication");
          }
        }
      })
      .catch((e) => console.error(e));
  };

  return (
    <SafeAreaView>
      <Panel>
        <TextButton onPress={onClickGoogle} title="Google Sign-In" />
      </Panel>
    </SafeAreaView>
  );
}

import { SafeAreaView } from "react-native";
import { UserData } from "../../types/UserData";
import { Panel } from "../Panel";
import { PanelText } from "../PanelText";

interface Props {
  userData: UserData;
}

export const InfoPanel = ({ userData }: Props) => {
  return (
    <SafeAreaView>
      <Panel>
        <PanelText>{userData.baseSpeed}</PanelText>
      </Panel>
    </SafeAreaView>
  );
};

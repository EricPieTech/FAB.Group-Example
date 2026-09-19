import * as React from "react";
import { FAB, PaperProvider, Portal } from "react-native-paper";
import colors from "../style/colors";

const FAB_Group = () => {
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  const [moneyCount, setMoneyCount] = React.useState<number>(0);
  return (
    <PaperProvider>
      <Portal>
        <FAB.Group
          open={open}
          visible
          icon={open ? "close" : "eye-outline"}
          actions={[
            {
              icon: "email",
              label: "Fan Mail",
              onPress: () => alert("While Sauron is greatful for your intrest in his campaign, he is currently not accepting fan mail."),
            },
            {
              icon: "plus",
              label: "Votes",
              color: colors.morgulGreen,
              onPress: () => alert("Sauron currently has " + ("Fix") + " votes"),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              console.log("HI");
            }
          }}
        />
      </Portal>
    </PaperProvider>
  );
};

export default FAB_Group;

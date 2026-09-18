import * as React from "react";
import { FAB, PaperProvider, Portal } from "react-native-paper";
import colors from "../style/colors";

const FAB_Group = () => {
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
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
              label: "Cabinet",
              onPress: () => console.log("Shows cabinet"),
            },
            {
              icon: "plus",
              label: "Donate",
              color: colors.morgulGreen,
              onPress: () => console.log("Opens Donate menu"),
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

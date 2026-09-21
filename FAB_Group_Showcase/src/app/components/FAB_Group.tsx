import * as React from "react";
import { FAB, PaperProvider, Portal } from "react-native-paper";
import colors from "../style/colors";

const FAB_Group = () => {
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open }); //Shows error, but works fine
  const { open } = state;
  const [voteCount, setVoteCount] = React.useState<number>(0);
  //loop creation https://react.dev/reference/react/useEffect
  React.useEffect(() => {
    const interval = setInterval(() => {
      //make random number
      const randNum = Math.floor(Math.random() * 100000) + 1;
      //set money count
      setVoteCount((voteCount) => voteCount + randNum);
    }, 1000); // 1000 ms or 1 second
    return () => clearInterval(interval); //clears interval for next loop
  }, []); //stops overflow
  return (
    <PaperProvider>
      <Portal>
        <FAB.Group
          open={open}
          visible
          icon={open ? "close" : "eye-outline"}
          color={colors.textColor}
          rippleColor={colors.primary}
          fabStyle={{ backgroundColor: colors.titleColor }}
          actions={[
            {
              icon: "email",
              label: "Fan Mail",
              labelTextColor: colors.titleColor,
              onPress: () =>
                alert(
                  "While Sauron is pleased with your intrest in his campaign, he is currently not accepting fan mail.",
                ),
            },
            {
              icon: "plus",
              label: "Votes",
              color: colors.morgulGreen,
              onPress: () =>
                alert("Sauron currently has " + voteCount + " votes"),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              console.log("This is what happens when you close the FAB.Group");
            }
          }}
        />
      </Portal>
    </PaperProvider>
  );
};

export default FAB_Group;

import { Image, ScrollView, Text, View } from "react-native";
// import FAB_Group from "./components/FAB_Group";
//npm install react-native-paper
//npm install react-native-safe-area-context
//npm install @react-native-vector-icons/material-design-icons
//https://www.npmjs.com/package/@react-native-vector-icons/evil-icons
//https://www.npmjs.com/package/@react-native-vector-icons/fontawesome5
import { EvilIcons } from "@react-native-vector-icons/evil-icons";
import { FontAwesome5 } from "@react-native-vector-icons/fontawesome5";
import { useEffect, useState } from "react";
import Button from "../app/components/Button";
import CandidateBox from "../app/components/CandidateBox";
import TextField from "../app/components/TextField";
import colors from "../app/style/colors";
import defaultSyles from "../app/style/defaultStyles";

export default function Index() {
  const [showMoney, setShowMoney] = useState<boolean>(false);
  const [showCab, setShowCab] = useState<boolean>(false);
  const [name, changeName] = useState<string>("");
  const [money, changeMoney] = useState<string>("");
  const [pledge, changePledge] = useState<string>("");
  //googled this, https://legacy.reactjs.org/docs/hooks-effect.html for this variable and the function
  const [moneyCount, setMoneyCount] = useState<number>(0);
  //loop creation https://react.dev/reference/react/useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      //make random number
      const randNum = Math.floor(Math.random() * 100000) + 1;
      //set money count
      setMoneyCount((moneyCount) => moneyCount + randNum);
    }, 1000); // 1000 ms or 1 second
    return () => clearInterval(interval); //clears interval for next loop
  }, []); //stops overflow

  function buttonPressed(button: string) {
    if (!showMoney && !showCab) {
      if (button == "1") {
        setShowMoney(true);
      } else {
        setShowCab(true);
      }
    } else {
      if (button == "1" && showMoney) {
        setShowMoney(false);
      } else if (button == "1") {
        setShowCab(false);
        setShowMoney(true);
      } else if (button == "2" && showCab) {
        setShowCab(false);
      } else {
        setShowCab(true);
        setShowMoney(false);
      }
    }
  }

  function generateDonationPledge(name: string, money: string) {
    const newString =
      "Congratulations " +
      name +
      "! You have donated for a more secure and peaceful America. Your donation of " +
      money +
      " currency will aid in Sauron's great effort to save America!";
    changePledge(newString);
  }

  return (
    <View style={defaultSyles.container}>
      <Text style={defaultSyles.title}>Sauron 2028</Text>
      <Image
        source={require("../../assets/images/sauronAndCo/Sauron2.jpg")}
        style={defaultSyles.imageMain}
      ></Image>
      <Text style={defaultSyles.title}>A Visionary and a True Leader</Text>
      {/* main */}
      <View style={defaultSyles.containerMinor}>
        {/* user prompted info */}
        <View style={defaultSyles.containerBox}>
          <TextField placeHolder="Name" value={name} changeData={changeName} />
          <TextField
            placeHolder="Donation (no $)"
            value={money}
            changeData={changeMoney}
          />
          <View style={defaultSyles.containerButtons}>
            <Button
              title="Donate?"
              color={colors.morgulGreen}
              textColor="white"
              fontBig={15}
              onPress={() => {
                buttonPressed("1");
                generateDonationPledge(name, money);
              }}
            />
            <Button
              title="Show Cabinet"
              color={colors.secondary}
              textColor="black"
              fontBig={15}
              onPress={() => buttonPressed("2")}
            />
          </View>
        </View>
        {/* money pladge/ scroll wheel */}
        {showMoney && (
          <View style={defaultSyles.containerBox}>
            <Text style={defaultSyles.pledgeText}>{pledge}</Text>
            <Text style={defaultSyles.moneyCounter}>
              Total Donations:${moneyCount}
            </Text>
            <FontAwesome5
              name="money-bill"
              size={50}
              color={colors.morgulGreen}
              iconStyle="solid"
            />
          </View>
        )}
        {/* candidates */}
        {showCab && (
          <View style={defaultSyles.containerBox}>
            <EvilIcons name="eye" size={50} color={colors.secondary} />
            <ScrollView>
              <CandidateBox
                title="Sauron"
                position="Dark Lord of Mordor"
                imageSrc={require("../../assets/images/sauronAndCo/Sauron2.jpg")}
              />
              <CandidateBox
                title="The Mouth of Sauron"
                position="Chief Diplomat and Vice Dark Lord"
                imageSrc={require("../../assets/images/sauronAndCo/mouth.jpg")}
              />
              <CandidateBox
                title="The Witch-King"
                position="Lord of Minas Morgul and Lord of the Nazgul"
                imageSrc={require("../../assets/images/sauronAndCo/witchKing.jpg")}
              />
              <CandidateBox
                title="Khamul the Eastering"
                position="Lord of Dol Guldur"
                imageSrc={require("../../assets/images/sauronAndCo/khamul2.jpeg")}
              />
              <CandidateBox
                title="GROND"
                position="Gate-Breacher General"
                imageSrc={require("../../assets/images/sauronAndCo/GROND.webp")}
              />
              <CandidateBox
                title="Bryce"
                position="Secretary of Orc Education"
                imageSrc={require("../../assets/images/sauronAndCo/1240.jpg")}
              />
              <CandidateBox
                title="Gothmog"
                position="Secretary of Orc Warfare"
                imageSrc={require("../../assets/images/sauronAndCo/Gothmog.webp")}
              />
              <CandidateBox
                title="Balrog #15"
                position="Secretary of Treasury and Book Cooking"
                imageSrc={require("../../assets/images/sauronAndCo/balrog.webp")}
              />
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
}

import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // Shadow for android
    elevation: 4,
    // Shadow for ios
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

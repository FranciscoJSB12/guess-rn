import { ReactNode } from "react";
import { Text, StyleSheet, TextStyle, StyleProp } from "react-native";
import Colors from "../../constants/colors";

interface Props {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

const InstructionText = ({ children, style }: Props) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});

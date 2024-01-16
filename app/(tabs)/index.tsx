import { StyleSheet, TouchableHighlight } from "react-native";

import { MotiView } from "moti";
import React, { useState } from "react";
import { Text, View } from "../../components/Themed";

export default function TabOneScreen() {
  const [toggle, setToggle] = useState(true);

  return (
    <View style={styles.container}>
      <MotiView
        style={styles.box}
        from={{ opacity: 0, left: 40 }}
        animate={{ opacity: toggle ? 1 : 0, left: 0 }}
      />

      <TouchableHighlight
        style={styles.button}
        onPress={() => setToggle(state => !state)}
      >
        <Text style={styles.buttonText}>PRESS TO TOGGLE ANIMATION</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    backgroundColor: "blue",
    height: 100,
    width: 100,
    marginBottom: 100
  },
  button: {
    backgroundColor: "grey",
    padding: 20,
    borderWidth: 1,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 20,
    color: "white"
  }
});

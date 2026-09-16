import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.logo}>facebook</Text>
        <Text style={styles.topIcons}>➕ 🔍 💬</Text>
      </View>

      <View style={styles.authorRow}>
        <View style={styles.avatar} />
        <View>
          <Text style={styles.name}>
            Marvel Studios ✔️ · <Text style={styles.blue}>Follow</Text>
          </Text>
          <Text style={styles.gray}>2h · 🌐</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 12,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: "#0866FF",
    fontSize: 32,
    fontWeight: "bold",
  },
  topIcons: {
    fontSize: 20,
  },
  authorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "black",
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  blue: {
    color: "#0866FF",
    fontWeight: "normal",
  },
  gray: {
    color: "gray",
  },
});

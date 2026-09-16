import { StyleSheet, Text, View, Alert, Button, Image } from "react-native";

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

      <Text style={styles.caption} numberOfLines={6}>
        "On your left."
        {"\n\n"}
        Relive the experience when Avengers Endgame: Encore returns to theaters
        on September 25. Get tickets now:{" "}
        <Text style={styles.link}>Fandango.com/AvengersEndgameEncore</Text>
      </Text>

      <Image
        source={require("../../assets/images/firstImage.jpeg")}
        style={styles.postImage}
      />

      <Image
        source={require("../../assets/images/secondImage.jpeg")}
        style={styles.postImage}
      />

      <View style={styles.engagementRow}>
        <Text style={styles.engagementText}>👍 388</Text>
        <Text style={styles.engagementText}>💬 Comment</Text>
        <Text style={styles.engagementText}>↗️ 8 Share</Text>
      </View>

      <View style={styles.tabBar}>
        <Text style={[styles.tab, styles.activeTab]}>🏠</Text>
        <Text style={styles.tab}>▶️</Text>
        <Text style={styles.tab}>🏪</Text>
        <Text style={styles.tab}>🤍</Text>
        <Text style={styles.tab}>🔔</Text>
        <Text style={styles.tab}>☰</Text>
      </View>

      <View style={styles.alertButtonWrapper}>
        <Button
          title="Alert"
          onPress={() => Alert.alert("Alert Button pressed")}
        />
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

  caption: {
    marginTop: 8,
    fontSize: 13,
    lineHeight: 17,
    marginBottom: 8,
  },
  link: {
    color: "#0866FF",
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 4,
  },
  engagementRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 4,
  },
  engagementText: {
    fontSize: 13,
    color: "#444",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 12,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 30,
  },
  tab: {
    fontSize: 22,
    paddingHorizontal: 8,
  },
  activeTab: {
    backgroundColor: "#E7F0FF",
    borderRadius: 15,
    overflow: "hidden",
  },

  alertButtonWrapper: {
    marginTop: 12,
    alignItems: "center",
  }
});

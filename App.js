import { StatusBar } from "expo-status-bar";
import { Image, View, StyleSheet, Text, ScrollView } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, }}>
      <StatusBar backgroundColor="#ccc" style="dark" />

      <View style={{flex: 1,  backgroundColor: '#ccc', padding: 20, paddingTop: 30 }}>
        <Image source={require("./assets/1.png")} style={styles.mainImage} />
        <Image source={require("./assets/2.png")} style={styles.mainImage} />
        <Text style={styles.sectionTitle}>Brand</Text>
        <ScrollView horizontal contentContainerStyle={{ alignItems: 'center', marginTop: 15 }}>
          <Image source={require("./assets/9.png")} style={styles.brandImage} />
          <Image source={require("./assets/8.png")} style={styles.brandImage} />
          <Image source={require("./assets/7.png")} style={styles.brandImage} />
          <Image source={require("./assets/9.png")} style={styles.brandImage} />
          <Image source={require("./assets/8.png")} style={styles.brandImage} />
        </ScrollView>

        <View style={{ flexDirection: 'row', marginTop: 32,marginBottom: 10, alignItems: 'center' }}>
          <Text style={styles.sectionTitle}>New</Text>
          <Image source={require('./assets/1.png')} style={{ width: 45, height: 25, marginLeft: 10 }} />
        </View>

        <ScrollView style={{ marginTop: 10 }}>
          <View style={styles.cardView} >
            <Image source={require('./assets/3.png')} style={styles.cardImg} />
            <Text style={{ fontSize: 12, marginTop: 10 }}>Lego Star Wars Terrifying Tal</Text>
          </View>
          <View style={styles.cardView} >
            <Image source={require('./assets/4.png')} style={styles.cardImg} />
            <Text style={{ fontSize: 12, marginTop: 10 }}>Lego Star Wars Terrifying Tal</Text>
          </View>
          <View style={styles.cardView} >
            <Image source={require('./assets/5.png')} style={styles.cardImg} />
            <Text style={{ fontSize: 12, marginTop: 10 }}>Lego Star Wars Terrifying Tal</Text>
          </View>
          <View style={styles.cardView} >
            <Image source={require('./assets/6.jpg')} style={styles.cardImg} />
            <Text style={{ fontSize: 12, marginTop: 10 }}>Lego Star Wars Terrifying Tal</Text>
          </View>
        </ScrollView>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  w100: {
    width: "100%",
  },
  mainImage: {
    resizeMode: "contain",
    width: "100%",

  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  brandImage: {
    marginRight: 20,
    width: 65,
    height: 95,
    resizeMode: 'contain',
  },
  cardView: {
    padding: 12,
    borderRadius: 20,
    backgroundColor: 'white',
    marginBottom: 15
  },
  cardImg: {
    width: '100%', 
    height: 180, 
    borderRadius: 12,
    resizeMode: 'cover'
  }
});

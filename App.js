import * as React from 'react';
import { useState } from 'react';
import { Button, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Slider from '@react-native-community/slider';
import * as listOfImages from "./pokoj/index";

import categories from './consts/categories';
import catList from './consts/catList';
import images from './consts/images';


const DetailsStack = createStackNavigator();

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel libero sed tortor suscipit tempus quis sed purus. Ut id dapibus mauris. Pellentesque pharetra fermentum varius. Sed dui sapien, facilisis a metus at, scelerisque congue ex. Etiam vel eros et est hendrerit luctus. Phasellus molestie magna et lectus commodo, nec ultricies augue auctor. Mauris a ultricies est. Integer vulputate nibh arcu, in tincidunt eros tincidunt nec. Maecenas viverra mauris arcu, a laoreet lacus suscipit sit amet. Aliquam rutrum tellus ac nisi tristique tincidunt sit amet non nibh. Nam ornare consequat varius. Suspendisse potenti. Curabitur nec dapibus risus, in hendrerit quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel libero sed tortor suscipit tempus quis sed purus. Ut id dapibus mauris. Pellentesque pharetra fermentum varius. Sed dui sapien, facilisis a metus at, scelerisque congue ex. Etiam vel eros et est hendrerit luctus. Phasellus molestie magna et lectus commodo, nec ultricies augue auctor. Mauris a ultricies est. Integer vulputate nibh arcu, in tincidunt eros tincidunt nec. Maecenas viverra mauris arcu, a laoreet lacus suscipit sit amet. Aliquam rutrum tellus ac nisi tristique tincidunt sit amet non nibh. Nam ornare consequat varius. Suspendisse potenti. Curabitur nec dapibus risus, in hendrerit quam.';
const cat = categories;
const listCat = catList;
const imgList = images;


function HomeScreen({ navigation }) {
  // const titleData = ['Ksi????ki', 'Filmy', 'P??yty', 'Room'];

  return (
    <SafeAreaView
      style={{
        color: 'black',
        backgroundColor: 'black',
        flex: 1,
      }}>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          color: 'black',
          backgroundColor: 'black',
          flex: 1,
          indicatorStyle: 'white',
        }}>
        <View>
          {cat.map((t, index) => (
            <MenuItem
              navigation={navigation}
              key={t.id}
              title={t.name}
              categoryImg={cat[index]}
            // description={'some random description'}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const MenuItem = ({ navigation, title, categoryImg }): Node => {
  return (
    <View style={styles.background}>
      <TouchableOpacity onPress={() => navigation.navigate(`${title}`, { index: categoryImg.id })}>
        <View style={styles.menuTile}>
          <View style={styles.imageView}>
            <Image source={categoryImg.img} style={styles.image} />
          </View>
          <View style={styles.menuText}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};



function BooksScreen({ navigation, route }) {
  return (
    <>
      {/* <DetailsStack.Navigator>
        <DetailsStack.Screen name="Details" component={Details} />
      </DetailsStack.Navigator> */}
      <SafeAreaView
        style={{
          color: 'black',
          backgroundColor: 'black',
          flex: 1,
        }}>
        <StatusBar />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{
            color: 'black',
            backgroundColor: 'black',
            flex: 1,
            indicatorStyle: 'white',
          }}>
          <View>
            {/* <View style={styles.menuText}>
            <Text style={styles.title}>{listCat[route.params.index - 1].length}</Text>
          </View> */}
            {listCat[0].map(c => (
              <CatItem
                navigation={navigation}
                item={c}
              // description={'some random description'}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const CatItem = ({ navigation, item }) => {
  return (
    <>
      {/* <DetailsStack.Navigator>
        <DetailsStack.Screen name="Details" component={Details} />
      </DetailsStack.Navigator> */}

      <View style={styles.background}>
        <TouchableOpacity onPress={() => navigation.navigate('Details', { title: item.name, itemImg: item.img, description: lorem })}>
          <View style={styles.descTile}>
            <View style={styles.descRow}>
              <View style={{ ...styles.imageView, flex: 0.3 }} >
                <Image source={item.img} style={styles.image} />
              </View>
              <View style={{ ...styles.menuText, flex: 0.7 }}>
                <Text style={styles.title}>{item.name}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View >
    </>
  );
};

const Details = ({ navigation, route }): Node => {
  return (
    <SafeAreaView
      style={{
        color: 'black',
        backgroundColor: 'black',
        flex: 1,
      }}>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          color: 'black',
          backgroundColor: 'black',
          flex: 1,
          indicatorStyle: 'white',
        }}>
        <View>
          <DescItem
            title={route.params.title}
            description={route.params.description}
            img={route.params.itemImg}
            navigation={navigation}
            goBack={route.params.goBack}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const DescItem = ({ title, description, img, navigation, goBack }): Node => {
  return (
    <View style={styles.background}>
      <View style={styles.descTile}>
        <View style={styles.descRow}>
          <View style={{ ...styles.imageView, flex: 0.3 }} >
            <Image source={img} style={styles.image} />
          </View>
          <View style={{ ...styles.menuText, flex: 0.7 }}>
            <Text style={styles.title}>{title}</Text>

          </View>
        </View>
        <Text style={styles.description}>{description}</Text>
        {goBack ?
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.navigate('Pok??j')} title="Go back" />
          </View>
          : null}
      </View>
    </View >
  );
};


function DVDsScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        color: 'black',
        backgroundColor: 'black',
        flex: 1,
      }}>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          color: 'black',
          backgroundColor: 'black',
          flex: 1,
          indicatorStyle: 'white',
        }}>
        <View>
          {/* <View style={styles.menuText}>
            <Text style={styles.title}>{listCat[route.params.index - 1].length}</Text>
          </View> */}
          {listCat[2].map(c => (
            <CatItem
              navigation={navigation}
              item={c}
            // description={'some random description'}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function FilmsScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        color: 'black',
        backgroundColor: 'black',
        flex: 1,
      }}>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          color: 'black',
          backgroundColor: 'black',
          flex: 1,
          indicatorStyle: 'white',
        }}>
        <View>
          {/* <View style={styles.menuText}>
            <Text style={styles.title}>{listCat[route.params.index - 1].length}</Text>
          </View> */}
          {listCat[1].map(c => (
            <CatItem
              navigation={navigation}
              item={c}
            // description={'some random description'}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Essa({ navigation, range }) {
  return (
    <>
      {range <= 16 ? <TouchableOpacity
        onPress={() => navigation.navigate('Details',
          { title: 'TV', itemImg: require('./TV.jpg'), description: lorem, goBack: true })}
        style={{
          position: 'absolute',
          left: 50,
          top: 120,
          width: 280,
          height: 100,
          backgroundColor: 'red',
          opacity: .5,
          zIndex: 100,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}><Text style={{
          color: 'yellow',
        }}>KLIKNIJ ABY PRZEJSC DO SZCZEGOLOW</Text></TouchableOpacity> : null
      }
      {
        range <= 110 && range >= 90 ? <TouchableOpacity
          onPress={() => navigation.navigate('Details',
            { title: 'Regal na ksiazki', itemImg: require('./Regal.jpg'), description: lorem, goBack: true })}
          style={{
            position: 'absolute',
            left: 130,
            top: 60,
            width: 250,
            height: 360,
            backgroundColor: 'red',
            opacity: .5,
            zIndex: 100,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}><Text style={{
            color: 'yellow',
          }}>KLIKNIJ ABY PRZEJSC DO SZCZEGOLOW</Text></TouchableOpacity> : null
      }
      {
        range <= 148 && range >= 126 ? <TouchableOpacity
          onPress={() => navigation.navigate('Details',
            { title: 'Regal na ksiazki', itemImg: require('./Regal.jpg'), description: lorem, goBack: true })}
          style={{
            position: 'absolute',
            left: 130,
            top: 100,
            width: 250,
            height: 200,
            backgroundColor: 'red',
            opacity: .5,
            zIndex: 100,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}><Text style={{
            color: 'yellow',
          }}>KLIKNIJ ABY PRZEJSC DO SZCZEGOLOW</Text></TouchableOpacity> : null
      }


    </>
  );
}


function RoomScreen({ navigation }) {
  const [range, setRange] = useState(0);

  return (
    <>
      <Image source={imgList[range].img} style={{
        // flex: 1,
        flexGrow: 1,
        width: 400,
        alignItems: 'stretch'
      }} />

      <Essa navigation={navigation} range={range} />

      {/* <Text style={{ flex: 1, fontSize: 100, zIndex: 2 }}>{range}</Text> */}
      <Slider

        style={{
          flex: 1, justifyContent: 'flex-end',
          alignItems: 'flex-end',
          width: 400,
          height: 40,
          flexBasis: 100,

        }}
        minimumValue={0}
        maximumValue={200}
        value={1}
        minimumTrackTintColor="#0000FF"
        maximumTrackTintColor="#000000"
        onValueChange={value => setRange(parseInt(value))}
      />

    </>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerPosition="right">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Ksi????ki" component={BooksScreen} />
        <Drawer.Screen name="P??yty" component={DVDsScreen} />
        <Drawer.Screen name="Filmy" component={FilmsScreen} />
        <Drawer.Screen name="Pok??j" component={RoomScreen} />
        <Drawer.Screen name="Details" component={Details} options={{
          drawerItemStyle: { height: 0 }
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
  description: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
    paddingHorizontal: 20,
  },
  highlight: {
    fontWeight: '700',
  },
  menuTile: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: 'blue',
    opacity: 3,
  },
  descRow: {
    flexDirection: 'row',
  },
  descTile: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
    backgroundColor: 'green',
    opacity: 3,
  },
  menuText: {
    color: 'white',
    paddingLeft: 10,
    fontSize: 40,
    fontWeight: '700',
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: 'white',
  },
  imageView: {
    paddingLeft: 20,
    paddingVertical: 10,
  },
  image: {
    alignSelf: 'flex-start',
    width: 100,
    height: 100,
  },
  background: {
    backgroundColor: 'black',
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
});
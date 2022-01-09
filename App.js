import * as React from 'react';
import { Button, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import categories from './consts/categories';
import catList from './consts/catList';


const DetailsStack = createStackNavigator();

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel libero sed tortor suscipit tempus quis sed purus. Ut id dapibus mauris. Pellentesque pharetra fermentum varius. Sed dui sapien, facilisis a metus at, scelerisque congue ex. Etiam vel eros et est hendrerit luctus. Phasellus molestie magna et lectus commodo, nec ultricies augue auctor. Mauris a ultricies est. Integer vulputate nibh arcu, in tincidunt eros tincidunt nec. Maecenas viverra mauris arcu, a laoreet lacus suscipit sit amet. Aliquam rutrum tellus ac nisi tristique tincidunt sit amet non nibh. Nam ornare consequat varius. Suspendisse potenti. Curabitur nec dapibus risus, in hendrerit quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel libero sed tortor suscipit tempus quis sed purus. Ut id dapibus mauris. Pellentesque pharetra fermentum varius. Sed dui sapien, facilisis a metus at, scelerisque congue ex. Etiam vel eros et est hendrerit luctus. Phasellus molestie magna et lectus commodo, nec ultricies augue auctor. Mauris a ultricies est. Integer vulputate nibh arcu, in tincidunt eros tincidunt nec. Maecenas viverra mauris arcu, a laoreet lacus suscipit sit amet. Aliquam rutrum tellus ac nisi tristique tincidunt sit amet non nibh. Nam ornare consequat varius. Suspendisse potenti. Curabitur nec dapibus risus, in hendrerit quam.';
const cat = categories;
const listCat = catList;


function HomeScreen({ navigation }) {
  // const titleData = ['Książki', 'Filmy', 'Płyty', 'Room'];

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
          />
          <Text>essa</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const DescItem = ({ title, description, img }): Node => {
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

function RoomScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerPosition="right">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Książki" component={BooksScreen} />
        <Drawer.Screen name="Płyty" component={DVDsScreen} />
        <Drawer.Screen name="Filmy" component={FilmsScreen} />
        <Drawer.Screen name="Pokój" component={RoomScreen} />
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
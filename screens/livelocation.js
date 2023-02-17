import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SMButton from '../component/SMButton'
import styles from '../styling';
import database from '@react-native-firebase/database';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker} from 'react-native-maps';
import {PROVIDER_GOOGLE} from 'react-native-maps';
function LiveLocation() {
  const [currLatitude, setlatitude] = useState();
  const [currLongitude, setlongitude] = useState();


  let getLocation = () => {
    Geolocation.requestAuthorization()
    Geolocation.getCurrentPosition(info => {
      console.log(info);
      setlatitude(info.coords.latitude);
      setlongitude(info.coords.longitude);
    });
  };
  return (
    <>
      <View style={[styles.h100, styles.bgLight]}>
        <View style={styles.p2}>
          <Text style={[styles.fs2, styles.textPrimary]}>GEO LOCATION API</Text>
        </View>
        <View style={styles.p2}>
          <View style={styles.py1}>
            <SMButton label="Get Location" onPress={getLocation} />
          </View>
        </View>
        {console.log(currLatitude, currLongitude)}

        {currLatitude && currLongitude ? (
          <View style={styles1.container}>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles1.map}
              region={{
                latitude: currLatitude,
                longitude: currLongitude,

                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}>
              <Marker
                title="ABC Title"
                description="ABC"
                coordinate={{
                  latitude: currLatitude,
                  longitude: currLongitude,

                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}></Marker>
            </MapView>
          </View>
        ) : null}
      </View>
    </>
  );
}
export default LiveLocation;

const styles1 = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    marginTop: 200,
    //   justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
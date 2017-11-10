import React, { Component } from 'react';
import Expo from 'expo';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { Alert, StatusBar, View, StyleSheet } from 'react-native';

import { SocialIcon } from 'react-native-elements';

import { Constants } from 'expo';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { Header } from '../components/Header';

import { getDevice } from '../actions/device';

const styles = StyleSheet.create({
  buttons: {
    justifyContent: 'center',
    margin: 20,
    marginBottom: 30,
  },
  separator: {
    marginTop: 30,
  },
});

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    primaryColor: PropTypes.string,
    dispatch: PropTypes.func,
  };

  componentDidMount = () => {
    this.props.dispatch(getDevice(Constants.deviceId, Constants.deviceName));
  };

  handleOptionsPress = () => {
    this.props.navigation.navigate('Options');
  };

  handleShowAthletes = () => {
    this.props.navigation.navigate('AthleteList', { title: 'Athlete List' });
  };

  handleGooglePress = async () => {
    console.log('google pressed');
    const result = await this.signInWithGoogleAsync();
    // if there is no result.error or result.cancelled, the user is logged in
    // do something with the result
  };

  signInWithGoogleAsync = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: '128671708378-bua9a6dfof5ftd9iujmrcco897df10cg.apps.googleusercontent.com',
        iosClientId: '128671708378-v01vb2315sldr447f70molttpp7s1l32.apps.googleusercontent.com',
        scopes: ['profile, email'],
      });

      if (result.type === 'success') {
        return result;
      }
      return { cancelled: true };
    } catch (e) {
      return { error: e };
    }
  };

  handleFacebookPress = async () => {
    console.log('facebook pressed');
    const result = await this.signInWithFacebookAsync();
  };

  signInWithFacebookAsync = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1040565349419419', {
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    }
  };

  render() {
    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo tintColor={this.props.primaryColor} />
        <View style={styles.separator} />
        <View style={styles.buttons}>
          <SocialIcon
            title="Sign In With Facebook"
            button
            onPress={this.handleFacebookPress}
            type="facebook"
          />
          <View style={styles.separator} />
          <SocialIcon
            title="Sign In With Google"
            button
            onPress={this.handleGooglePress}
            type="google-plus-official"
          />
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  primaryColor: state.theme.primaryColor,
});

export default connect(mapStateToProps)(Home);

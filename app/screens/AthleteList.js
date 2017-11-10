import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, View, StatusBar } from 'react-native';

import { ListItem, Separator } from '../components/List';
import { changeAthlete, getInitialAthletes } from '../actions/athletes';

class AthleteList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    primaryColor: PropTypes.string,
    dispatch: PropTypes.func,
    athletes: PropTypes.any,
  };

  componentWillMount() {
    this.props.dispatch(getInitialAthletes());
  }

  handlePress = athlete => {
    this.props.dispatch(changeAthlete(athlete));
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={this.props.athletes}
          renderItem={({ item }) => (
            <ListItem
              text={item.name}
              selected={item === item.selected}
              onPress={() => this.handlePress(item)}
              iconBackground={this.props.primaryColor}
            />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  athletes: state.athletes.athletes,
  primaryColor: state.theme.primaryColor,
});

export default connect(mapStateToProps)(AthleteList);

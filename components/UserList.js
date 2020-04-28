import React, { PureComponent } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    TouchableOpacity
} from 'react-native';

import ListItem from "./ListItem"
import Search from "./Search"
// import console = require('console');
class UserList extends PureComponent {

    handleClick=(item)=>()=>{
        this.props.itemClick(item)
    }
    renderItem = ({ item }) => (
        <TouchableOpacity onPress={this.handleClick({login:item.login,id:item.id})}>
            <ListItem data={item} />
        </TouchableOpacity>
    )

    renderSeparator = () => (
        <View
            style={styles.seperator}
        />
    )


    renderHeader = () => (
        <Search />
    )
    render() {
        return (
            <View >
                <FlatList
                    data={this.props.data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                />
            </View>

        )
    }

}

const styles = StyleSheet.create({
    seperator: {
        marginVertical: 10,
        borderColor: "#e6e6e7",
        borderWidth: 1
    }
})

export default UserList
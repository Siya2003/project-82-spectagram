import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import TabNavigator from "./TabNavigator"
import Profile from "../Screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.screen name = "Home" component = {TabNavigator} />
            <Drawer.screen name = "Profile" component = {Profile}/>


        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
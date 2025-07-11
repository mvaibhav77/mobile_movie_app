import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

interface TabIconProps {
  focused?: boolean;
  name: keyof typeof icons;
  title: string;
}

const TabIcon = (props: TabIconProps) => {
  if (props.focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[90px] min-h-[50px] mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image
          source={icons[props.name]}
          className="size-5"
          tintColor={"#151312"}
        />
        <Text className="text-secondary text-base font-semibold ml-2">
          {props.title}
        </Text>
      </ImageBackground>
    );
  } else
    return (
      <View className="size-full justify-center items-center mt-4 rounded-full">
        <Image
          source={icons[props.name]}
          className="size-5"
          tintColor={"#A8B5DB"}
        />
      </View>
    );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          padding: 0,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 2,
          borderColor: "#0F0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="home" title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="search" title="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="save" title="Saved" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon name="person" focused={focused} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

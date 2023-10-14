import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const Pickup = () => {
  return (
    
    <View className="bg-white w-11/12 mx-auto flex-row justify-between p-6 rounded-xl">
      <View className="items-center">
      <TouchableOpacity>
        <Image
          source={require("./../../../assets/Images/shop.png")}
          className="w-32 h-28"
        />
        <Text className="text-xl ">Store pickup</Text>
        <Text className="text-gray-400">Best quality</Text>
        </TouchableOpacity>
      </View>
      
      <View className="items-center">
      <TouchableOpacity>
        <Image
          source={require("./../../../assets/Images/delivery.webp")}
          className="w-32 h-28"
        />
        <Text className="text-xl ">Delivery</Text>
        <Text className="text-gray-400">Always on Time</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pickup;

const styles = StyleSheet.create({});

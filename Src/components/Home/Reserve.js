import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Reserve = () => {
  return (
    <View className="bg-white w-11/12 mx-auto p-6 rounded-xl mt-4">
      <View className=" flex-row justify-between items-center">
        <View className="mb-8">
          <Text className="text-xl ">Online reservation</Text>
          <Text className="text-gray-500">Table booking</Text>
        </View>
        <View className="items-center">
          <Image
            source={require("./../../../assets/Images/table.jpg")}
            className="w-28 h-24"
          />
        </View>
      </View>
      <View className="flex-row justify-between mt-3">
        <TouchableOpacity className="flex-row border-2 border-primary-100 p-2 rounded-full items-center mr-1">
          <MaterialCommunityIcons name="calendar" size={20} color="#68B3F5" />
          <Text className="text-primary-100 text-base ">
            Reserve a table
          </Text>
          </TouchableOpacity>
        <TouchableOpacity className="border-2 border-primary-100 p-2 rounded-full">
          <Text className="text-primary-100 text-base ">
            My reservations
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Reserve;

import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FinanceManagement from "./finance-management";
import FloatingNavBar from "./floating-nav-bar";
import BoldDeskSupportSDK from "bolddesk_support_sdk";
import BoldDeskChatSDK from "bolddesk_chat_sdk";

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <FinanceManagement />
            <FloatingNavBar
                activeTab="home"
                onChange={(tab: string) => {
                    if (tab === "help") {
                        BoldDeskSupportSDK.showHome()
                    } else if (tab === "profile") {
                        // @ts-ignore - navigation type inferred for simplicity
                        navigation.navigate("Profile");
                    } else if (tab === "chat") {
                        // @ts-ignore - navigation type inferred for simplicity
                        BoldDeskChatSDK.showChat()
                    } 
                    else {
                        console.log("Selected Tab:", tab);
                    }
                }}
            />
        </View>
    );
}

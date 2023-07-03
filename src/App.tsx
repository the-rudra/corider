import React, { useEffect, useState } from "react";
import "./App.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Chatroom from "./components/Chatroom";
import ChatInput from "./components/ChatInput";

function App() {
    interface Data {
        chats: Array<{
            id: string;
            message: string;
            sender: {
                image: string;
                is_kyc_verified: boolean;
                self: boolean;
                user_id: string;
            };
            time: string;
        }>;
        from: string;
        message: string;
        name: string;
        status: string;
        to: string;
    }

    const [fetchedData, setData] = useState<Data>(Object);
    const fetchData = () => {
        fetch("https://qa.corider.in/assignment/chat?page=0")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ChakraProvider>
            <Box
                bg="#faf9f4"
                w="100%"
                h="99vh"
                paddingTop="2"
                paddingBottom="2"
                className=""
            >
                {/* Navbar */}
                <Navbar
                    from={fetchedData.from}
                    to={fetchedData.to}
                    name={fetchedData.name}
                    chats={fetchedData.chats!}
                />
                {/* Chatroom */}
                <Chatroom chats={fetchedData.chats!} />
                {/* Input */}
                <ChatInput />
            </Box>
        </ChakraProvider>
    );
}

export default App;

import { Avatar, Box, Image } from "@chakra-ui/react";
import React from "react";

const ChatMessage = (props: {
    key: string;
    message: string;
    sender: {
        image: string;
        is_kyc_verified: boolean;
        self: boolean;
        user_id: string;
    };
}) => {
    const sent = "bg-blue-700 text-white rounded-l-xl rounded-t-xl shadow-lg";
    return (
        <div
            className={`flex gap-[2px] ml-6 ${
                props.sender.self ? "justify-end mr-6" : ""
            }`}
        >
            <div className={`${props.sender.self ? "hidden" : "flex"}`}>
                <div className="flex">
                    <Avatar
                        name="Segun Adebayo"
                        size="sm"
                        src={props.sender.image}
                    />
                    <Image
                        borderRadius="full"
                        boxSize="12px"
                        src="https://i.imgur.com/KoGmxEA.png"
                        alt="tick"
                        className="relative mt-[20px] right-[10px]"
                    />
                </div>
            </div>
            <Box
                w="75%"
                p="12px"
                className={`align-center ${
                    props.sender.self
                        ? `${sent}`
                        : "bg-white rounded-b-xl rounded-r-xl shadow-lg"
                }`}
            >
                {props.message}
            </Box>
        </div>
    );
};

export default ChatMessage;

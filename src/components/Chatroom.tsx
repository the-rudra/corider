import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react";
import date from "date-and-time";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Chatroom = (props: {
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
}) => {
    interface ChatsEntity {
        id: string;
        message: string;
        sender: {
            image: string;
            is_kyc_verified: boolean;
            self: boolean;
            user_id: string;
        };
        time: string;
    }
    // interface Sender {
    //     image: string;
    //     is_kyc_verified: boolean;
    //     self: boolean;
    //     user_id: string;
    // }
    type Chats = Array<{
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

    const [oldChats, setOldChats] = useState<Chats>(props.chats);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        setOldChats(props.chats);
    }, [props.chats]);
    console.log(oldChats?.length);
    const [numberOfChats, setNumberOfChats] = useState<number>(
        props.chats?.length | 10
    );

    const fetchMoreData = () => {
        setPageNumber(pageNumber + 1);
        setNumberOfChats(numberOfChats + 10);
        const fetchPosts = async () => {
            const res = await axios.get(
                `https://qa.corider.in/assignment/chat?page=${pageNumber}`
            );
            setOldChats(oldChats?.concat(res.data.chats));
        };
        fetchPosts();
    };

    //date conversion
    const msgDate = new Date(props.chats?.[0].time.substring(0, 10));
    const printDate = date.format(msgDate, "D MMM, YYYY");

    return (
        <div
            id="scrollableDiv"
            className="flex w-[100%] h-[80%] flex-col-reverse overflow-y-auto"
        >
            <InfiniteScroll
                dataLength={numberOfChats!}
                next={fetchMoreData}
                style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    gap: "1.5rem",
                    paddingBottom: "1.5rem",
                    paddingTop: "1.5rem",
                }}
                inverse={true}
                hasMore={true}
                loader={<h4 className="text-center">Loading...</h4>}
                scrollableTarget="scrollableDiv"
            >
                {/* put div */}
                {oldChats?.map((chat: ChatsEntity) => (
                    <ChatMessage
                        key={chat.id}
                        message={chat.message}
                        sender={chat.sender}
                    />
                ))}
            </InfiniteScroll>
            <Box position="relative" padding="1">
                <Divider />
                <AbsoluteCenter
                    opacity="70%"
                    px="4"
                    backgroundColor="#faf9f4"
                    textTransform="uppercase"
                >
                    {printDate}
                </AbsoluteCenter>
            </Box>
        </div>
    );
};

export default Chatroom;

import { Divider, IconButton, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

const Navbar = (props: {
    from: string;
    to: string;
    name: string;
    chats: Array<{
        sender: {
            image: string;
        };
    }>;
}) => {
    return (
        <div className="">
            <div className="flex justify-between items-center ml-6 mr-6">
                <div className="flex items-center justify-start">
                    <IconButton
                        variant="transparent"
                        aria-label="Go back"
                        icon={
                            <BiArrowBack className="text-[1.5rem] ml-[-1rem]" />
                        }
                    />
                    <Text fontSize="2xl" as="b">
                        {props.name}
                    </Text>
                </div>
                <IconButton
                    variant="transparent"
                    aria-label="Edit"
                    icon={<FiEdit className="text-[1.5rem]" />}
                />
            </div>
            {/* second row */}
            <div className="mt-4 flex justify-between items-center ml-6 mr-6">
                <div className="flex items-center">
                    <div className="grid grid-cols-2 rounded-full overflow-clip h-[15%] w-[15%]">
                        <Image src={props.chats?.[0].sender.image} />
                        <Image src={props.chats?.[1].sender.image} />
                        <Image src={props.chats?.[2].sender.image} />
                        <Image src={props.chats?.[3].sender.image} />
                    </div>
                    <div className="ml-4">
                        <div className="flex gap-2">
                            <Text fontSize="lg">From</Text>
                            <Text fontSize="lg" as="b">
                                {props.from}
                            </Text>
                        </div>
                        <div className="flex gap-2">
                            <Text fontSize="lg">To</Text>
                            <Text fontSize="lg" as="b">
                                {props.to}
                            </Text>
                        </div>
                    </div>
                </div>
                <IconButton
                    variant="transparent"
                    aria-label="Menu"
                    icon={<BsThreeDotsVertical className="text-[1.5rem]" />}
                />
            </div>
            <Divider className="mt-4 bg-black" />
        </div>
    );
};

export default Navbar;

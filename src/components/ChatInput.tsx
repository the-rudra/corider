import { IconButton, Input } from "@chakra-ui/react";
import React from "react";
import { GoPaperclip } from "react-icons/go";
import { VscSend } from "react-icons/vsc";

const ChatInput = () => {
    return (
        <div className="absolute bottom-0 mb-10 flex text-center left-[5vw]">
            <div className="w-[90vw] bg-white ml-auto mr-auto rounded-lg">
                <Input
                    size="sm"
                    width="75%"
                    variant="transparent"
                    placeholder="Reply to..."
                />
                <IconButton
                    aria-label="attachment"
                    icon={<GoPaperclip className="text-[1.5rem]" />}
                    variant="transparent"
                />
                <IconButton
                    aria-label="attachment"
                    icon={<VscSend className="text-[1.5rem]" />}
                    variant="transparent"
                />
            </div>
        </div>
    );
};

export default ChatInput;

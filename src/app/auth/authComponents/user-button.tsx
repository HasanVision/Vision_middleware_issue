"use client"
import {CircleUser} from "lucide-react"

import {Avatar, Box, DropdownMenu, DropdownMenuContent, DropdownMenuItem, Flex} from "@radix-ui/themes"
import {useCurrentUser} from "@/hooks/use-current-user";
import {LogoutButton} from "@/src/app/auth/authComponents/logout-button";


export const UserButton = () => {

    const user = useCurrentUser();
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Flex gap="2">
                    <Avatar src={user?.image || ""}
                            fallback={
                                <Box width="5" height="5">
                                    <CircleUser/>
                                </Box>
                            }
                    />
                </Flex>
            </DropdownMenu.Trigger>
            <DropdownMenuContent>
                <LogoutButton>
                    <DropdownMenuItem>
                        Logout
                    </DropdownMenuItem>
                </LogoutButton>
            </DropdownMenuContent>
        </DropdownMenu.Root>
    )
}
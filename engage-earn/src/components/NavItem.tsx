// @ts-ignore
import React from "react";
import { Link } from "react-router-dom"
import { Flex, Link as ChakraLink, Icon, Text}  from "@chakra-ui/react";


type NavItemProps = {
    icon: any,
    title: string,
    page: string
}
export default function NavItem({ title, icon, page}: NavItemProps) {
    return (
        <Flex
            flexDir="row"
            justifyContent="center"
            mb={4}
        >
           <Link to={page}><ChakraLink _hover={{textDecor: 'none', color:"#9995dd"}} size="xl">
                <Text><Icon as={icon} fontSize="2xl" mx='2px'/> {title}</Text>
           </ChakraLink></Link>
        </Flex>

    )
}
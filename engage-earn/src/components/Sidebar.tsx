// @ts-ignore
import React, {useState} from "react";
import {Avatar, Flex, Heading, Text} from "@chakra-ui/react";
import NavItem from "./NavItem.tsx";
import {Rocket, Reward} from "@styled-icons/fluentui-system-regular"
import {ShareSocial} from "@styled-icons/ionicons-solid"
 export default function Sidebar() {
     return(
         <Flex
            backgroundColor="#37285E"
            color="#f1f0ea"
            width="15vw"
            flexDir="column"
            alignItems="center"
         >
             <Flex
                 flexDir="column"
                 justifyContent="space-between"
                 height="100vh"
             >
                 <Flex
                     flexDir="column"
                     as="nav"
                 >
                     <Heading
                         mt={50}
                         mb={100}
                         fontSize="4xl"
                         alignSelf="center"
                         letterSpacing="tight"
                     >
                         EngageEarn
                     </Heading>
                     <Flex
                         flexDir="column"
                         align="flex-start"
                         justifyContent="center"
                     >
                            <NavItem title="Engage With Ads" icon={Rocket} page="/"/>
                            <NavItem title="Social Hub" icon={ShareSocial} page="/social"/>
                            <NavItem title="Rewards Hub" icon={Reward} page="/rewards"/>

                     </Flex>

                 </Flex>
                 <Flex
                     flexDir="column"
                     alignItems="center"
                     mb={10}
                     mt={5}
                 >
                     <Avatar my={2} />
                     <Text textAlign="center">Morgan Welch</Text>
                 </Flex>

             </Flex>
         </Flex>
     )
 }
// @ts-ignore
import React from 'react';
import {
    Avatar,
    Box, Button,
    Card,
    CardBody, CardFooter,
    CardHeader,
    Flex,
    Heading,
    Icon, IconButton,
    Stack,
    StackDivider, Stat, StatArrow,
    StatGroup, StatHelpText, StatLabel, StatNumber,
    Text
} from "@chakra-ui/react";
import { Reward } from '@styled-icons/fluentui-system-regular'
import { ThreeDotsVertical, ChatSquare } from '@styled-icons/bootstrap'
import {Like} from '@styled-icons/foundation'
export default function SocialHub() {
    return(
        <Flex
            w="85vw"
            p="3%"
            flexDir="column"
            overflow="auto"
            minH="100vh"
            backgroundColor="#f1f0ea">

            <Heading mb={4} mt={20} letterSpacing="tight">Connect. Compete. Engage.
            </Heading>
            <Flex justifyContent="space-between">
                <Card w="70%" >
                    <CardHeader><Heading size='md'>New Notifications</Heading></CardHeader>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                <Flex flexDir="column">
                                    <Flex alignItems='center' flexDir="row">
                                        <Avatar mr={5} />
                                        <Heading size='xs' textTransform='uppercase'>
                                            Jane Doe
                                        </Heading>
                                    </Flex>
                                    <Text pt='2' fontSize='sm' p={7} mx={9}>Catching up to you!</Text>
                                </Flex>
                                <Flex flexDir="column">
                                    <Flex alignItems='center' flexDir="row">
                                        <Icon as={Reward} w={10} h={10} mr={5} />
                                        <Heading size='xs' textTransform='uppercase'>
                                            You earned points!
                                        </Heading>
                                    </Flex>
                                    <Text pt='2' fontSize='sm' p={7} mx={9}>150 points were added to your bank for interacting with an ad!</Text>
                                </Flex>
                            </Stack>
                        </CardBody>
                </Card>
                <Card w="25%" px={4}>
                    <CardHeader><Heading size='sm'>Your Friends</Heading></CardHeader>
                    <Stack spacing='4'>
                    <Card maxW='md' size='md'>
                        <CardHeader>
                            <Flex spacing='4'>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar />

                                    <Box>
                                        <Heading size='sm'>Jane Doe</Heading>
                                        <Text>AdVenturer Level 4</Text>
                                    </Box>
                                </Flex>
                                <IconButton
                                    variant='ghost'
                                    colorScheme='gray'
                                    aria-label='See menu'
                                    size="xs"
                                    icon={<ThreeDotsVertical />}
                                />
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <StatGroup>
                                <Stat>
                                    <StatLabel fontSize='md'>Points this Week</StatLabel>
                                    <StatNumber fontSize='sm'>645</StatNumber>
                                    <StatHelpText fontSize='xs'>
                                        <StatArrow type='increase' />
                                        42 more than last week
                                    </StatHelpText>
                                </Stat>

                                <Stat>
                                    <StatLabel fontSize='md'>Ad Engagements</StatLabel>
                                    <StatNumber fontSize='sm'>45</StatNumber>
                                    <StatHelpText fontSize='xs'>
                                        <StatArrow type='increase' />
                                        6 more than last week
                                    </StatHelpText>
                                </Stat>
                            </StatGroup>
                        </CardBody>
                        <CardFooter
                            justify='space-between'
                            flexWrap='wrap'
                            sx={{
                                '& > button': {
                                    minW: '80px',
                                },
                            }}
                        >
                            <Button flex='1' variant='ghost' leftIcon={<Icon as={Like} />}>
                                Like
                            </Button>
                            <Button flex='1' variant='ghost' leftIcon={<Icon as={ChatSquare} />}>
                                Message
                            </Button>
                        </CardFooter>
                    </Card>
                        <Card maxW='md' size='md'>
                            <CardHeader>
                                <Flex spacing='4'>
                                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                        <Avatar />

                                        <Box>
                                            <Heading size='sm'>Mark Intosh</Heading>
                                            <Text>Explorer Level 2</Text>
                                        </Box>
                                    </Flex>
                                    <IconButton
                                        variant='ghost'
                                        colorScheme='gray'
                                        aria-label='See menu'
                                        size="xs"
                                        icon={<ThreeDotsVertical />}
                                    />
                                </Flex>
                            </CardHeader>
                            <CardBody>
                                <StatGroup >
                                    <Stat>
                                        <StatLabel fontSize="md">Points this Week</StatLabel>
                                        <StatNumber fontSize="sm">239</StatNumber>
                                        <StatHelpText fontSize="xs">
                                            <StatArrow type='decrease' />
                                            18 less than last week
                                        </StatHelpText>
                                    </Stat>

                                    <Stat>
                                        <StatLabel fontSize="md">Ad Engagements</StatLabel>
                                        <StatNumber fontSize="sm">14</StatNumber>
                                        <StatHelpText fontSize="xs">
                                            <StatArrow type='increase' />
                                            4 more than last week
                                        </StatHelpText>
                                    </Stat>
                                </StatGroup>
                            </CardBody>
                            <CardFooter
                                justify='space-between'
                                flexWrap='wrap'
                                sx={{
                                    '& > button': {
                                        minW: '80px',
                                    },
                                }}
                            >
                                <Button flex='1' variant='ghost' leftIcon={<Icon as={Like} />}>
                                    Like
                                </Button>
                                <Button flex='1' variant='ghost' leftIcon={<Icon as={ChatSquare} />}>
                                    Message
                                </Button>
                            </CardFooter>
                        </Card>
                    </Stack>
                </Card>
            </Flex>
        </Flex>
    )
}
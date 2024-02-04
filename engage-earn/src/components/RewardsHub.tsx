// @ts-ignore
import React from "react";
import {
    Box,
    Card, CardBody,
    CardHeader, Center, Divider,
    Flex,
    Heading, Icon, Progress, SkeletonCircle, SkeletonText, Stack,
    Stat,
    StatGroup,
    StatLabel,
    StatNumber, Text, Wrap, WrapItem
} from "@chakra-ui/react";
import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

import { Gift } from "@styled-icons/fa-solid"

import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

export default function RewardsHub() {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

     const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            customCanvasBackgroundColor: {
              color: '#9995dd'
            },
            title: {
                display: true,
                text: 'Rewards Activity',
            }
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Ads Reviewed',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: '#37285e',
                backgroundColor: '#ae69a0',
                color: '#9300ff',
                tension: 0.5
            },
            {
                label: 'Rewards Received',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: '#9300ff',
                backgroundColor: '#f1f0ea',
                tension: 0.5
            },
        ],
    };
    return (
        <Flex
            p="3%"
            flexDir="row"
            overflow="auto"
            minH="100vh"
            backgroundColor="#f1f0ea"
            justifyContent="space-between"
        >
            <Flex flexDir="column">
                <Heading>Rewards Hub</Heading>
            <Flex
                w="50vw"
                flexDir="column"
                backgroundColor="#f1f0ea"
                p={3}
            >
                <Flex flexDir="row" justifyContent='space-between'>
                    <Card w="60%" bg='#9995dd' gap={6} mr={6}>
                        <Flex flexDir="column" justifyContent='space-between'>
                            <CardHeader fontSize="sm" fontWeight="bold">
                                Total Points
                            </CardHeader>
                            <CardHeader fontSize="30" fontWeight="bold" gap={3}>
                                1000 Points
                            </CardHeader>
                            <StatGroup gap={2} align="center" mb={4}>
                                <Stat>
                                    <StatLabel>Ad Engagement</StatLabel>
                                    <StatNumber>773 points</StatNumber>
                                </Stat>
                                <Center height='50px'>
                                    <Divider orientation='vertical' />
                                </Center>
                                <Stat>
                                    <StatLabel>Challenge Rewards</StatLabel>
                                    <StatNumber>227 Points</StatNumber>
                                </Stat>
                            </StatGroup >
                        </Flex>
                    </Card>
                    <Card w="40%" bg="#9995dd" mr={10}>
                        <CardHeader fontSize="sm" fontWeight="bold">
                            Redeemed Rewards
                        </CardHeader>
                        <CardHeader fontSize="40" fontWeight="bold" gap={3}>
                            300 Points
                        </CardHeader>
                    </Card>
                </Flex>
                    <Card size='lg' mt={6} mr={10} backgroundColor="#f1f0ea">
                        <CardBody>
                            <Line data={data} options={options} />
                        </CardBody>
                    </Card>
                <Flex flexDir="row" justifyContent="space-between" mt={4} pr={8}>
                    <Card size="md" w="50%" mr={4}>
                        <CardHeader fontWeight='bold' fontSize="24px">Goals</CardHeader>
                        <CardBody mb={10}>
                            <Flex flexDir="row" justifyContent="space-between">
                                <Icon as={Gift} fontSize='60' w="15%" />
                                <Flex flexDir="column" w="80%">
                                    <Wrap flexDir="row" justifyContent="space-between" align="center"  mb={3}>
                                        <WrapItem><Text fontSize="8px" w="2.5rem">Next Award</Text></WrapItem>
                                        <WrapItem><Progress w="15.25rem" borderRadius="1rem" value={80} colorScheme='purple'/></WrapItem>
                                    </Wrap>
                                    <Wrap flexDir="row" justifyContent="space-between" align="center"  mb={3}>
                                        <WrapItem><Text fontSize="8px" w="2.5rem">Next Bonus</Text></WrapItem>
                                        <WrapItem><Progress w="15.25rem" borderRadius="1rem" value={40} colorScheme='purple'/></WrapItem>
                                     </Wrap>
                                    <Wrap flexDir="row" justifyContent="space-between" align="center"  mb={3}>
                                        <WrapItem><Text fontSize="8px" w="2.5rem">Next Referral Bonus</Text></WrapItem>
                                        <WrapItem><Progress w="15.25rem" borderRadius="1rem" value={20} colorScheme='purple'/></WrapItem>
                                    </Wrap>
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                    <Card mr={2} size="md" w="50%">
                        <CardHeader fontWeight='bold' fontSize="24px">Rewards Overview</CardHeader>
                        <Box padding='6' boxShadow='lg' bg='white'>
                            <SkeletonCircle size='10' />
                            <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                        </Box>
                    </Card>
                </Flex>
            </Flex>
            </Flex>
            <Flex
                w="50vw"
                p="3%"
                flexDir="column"
                overflow="auto"
                minH="100vh"
                backgroundColor="#f1f0ea"
            >
                <Flex flexDir="column">
                    <Flex flexDir="row" justifyContent="space-between" w="65%">
                        <Heading gap={8}>Ads</Heading>
                        <Text mt={4} fontSize="xs">View All</Text>
                    </Flex>
                    <Flex mt={6}>
                        <Stack>
                            <Box mb={10}>
                                <Flex flexDir="row" alignItems="center" justifyContent="space-between">
                                    <Box w="20vw" gap={5}>
                                        <Heading size='md' textTransform='uppercase'>
                                            Reviewed An Ad
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            Entertainment
                                        </Text>
                                    </Box>
                                    <Box w="15vw" mr={20}>
                                        <Heading size="12">Earned</Heading>
                                    </Box>
                                </Flex>
                            </Box>
                            <Box mb={10}>
                                <Flex flexDir="row" alignItems="center" justifyContent="space-between">
                                    <Box w="20vw" gap={5}>
                                        <Heading size='md' textTransform='uppercase'>
                                            Reviewed An Ad
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            Entertainment
                                        </Text>
                                    </Box>
                                    <Box w="15vw" mr={20}>
                                        <Heading size="12" >Earned</Heading>
                                    </Box>
                                </Flex>
                            </Box>
                            <Box mb={10}>
                                <Flex flexDir="row" alignItems="center" justifyContent="inline-block">
                                    <Box w="20vw" gap={5}>
                                        <Heading size='md' textTransform='uppercase'>
                                            Referral Bonus
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            Referrals
                                        </Text>
                                    </Box>
                                    <Box w="20" mr={20}>
                                        <Heading size="12" >Earned 100 points</Heading>
                                    </Box>
                                </Flex>
                            </Box>
                        </Stack>
                    </Flex>
                </Flex>
            </Flex>

        </Flex>
    )
}
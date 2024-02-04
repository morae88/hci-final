// @ts-ignore
import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading, Progress,
    Stat, StatHelpText,
    StatLabel,
    StatNumber,
} from "@chakra-ui/react";
import {Gallery} from "react-grid-gallery";
import { useNavigate } from "react-router-dom"

export default function LandingScreen() {
    let navigate = useNavigate();

    const navigateToVideo = () => {
        navigate('/viewer')
    }


    const images = [
        {
            src: "https://picsum.photos/400/300?random=1",
            width: 400,
            height:300

        },
        {
            src: "https://picsum.photos/400/300?random=2",
            width: 400,
            height:300
        },{
            src: "https://picsum.photos/400/300?random=3",
            width: 400,
            height:300
        },{
            src: "https://picsum.photos/400/300?random=4",
            width: 400,
            height:300
        },{
            src: "https://picsum.photos/400/300?random=5",
            width: 400,
            height:300
        },{
            src: "https://picsum.photos/400/300?random=6",
            width: 400,
            height:300
        },{
            src: "https://picsum.photos/400/300?random=7",
            width: 400,
            height:300
        },{
            src: "https://picsum.photos/400/300?random=8",
            width: 400,
            height:300
        }
    ]
    return (
        <Flex
            w="85vw"
            p="3%"
            flexDir="column"
            overflow="auto"
            minH="100vh"
            backgroundColor="#f1f0ea"
        >
            <Heading fontWeight="normal" mb={4} letterSpacing="tight">Welcome Back,
                <Flex fontWeight="bold" display="inline-flex"> Morgan.
                </Flex>
            </Heading>
            <Card mb={8}>
                <CardHeader>
                    <Flex justifyContent="space-between" flexDir="row">
                        <Heading size='md'>
                            Reward Progress
                        </Heading>
                        <Flex display="inline-flex">25% Remaining</Flex>
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Stat>
                        <StatLabel>Points</StatLabel>
                        <StatNumber>1000</StatNumber>
                        <StatHelpText>500 until next reward</StatHelpText>
                    </Stat>
                    <Progress value={75} size='xs' colorScheme='purple'  hasStripe={true} isAnimated={true}/>
                </CardBody>
            </Card>
            <Card p={3}>
                <CardHeader>
                    <Heading size='md'>
                        New Ads For You:
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Gallery images={images} rowHeight={300} margin={5} onClick={navigateToVideo}/>
                </CardBody>
            </Card>
        </Flex>
    )
}
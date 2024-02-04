// @ts-ignore
import React from 'react';
import {
    Button,
    Card,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    IconButton,
    Textarea
} from "@chakra-ui/react";
import {ThumbsUp, ThumbsDown} from "@styled-icons/fa-regular"


// @ts-ignore
export default function VideoAd({video}) {
    const videoSrc = `https://www.youtube.com/embed/${video.items[Math.floor(Math.random() * 11)].id.videoId}`
    // @ts-ignore
    return(
        <Flex
            w="85vw"
            p="3%"
            flexDir="column"
            overflow="auto"
            minH="100vh"
            backgroundColor="#f1f0ea"
        >
            <Card alignItems="center" p={30}>
                <iframe src={videoSrc} width={1000} height={500} allowFullScreen title='Video player'/>
                <Flex flexDir="row" m={6}>
                    <IconButton
                        size='md'
                        variant='unstyled'
                        colorScheme='purple'
                        aria-label='dislike'
                        icon={<ThumbsDown />}
                        mr={20}
                    />
                    <IconButton
                        size='md'
                        variant='unstyled'
                        colorScheme='purple'
                        aria-label='like'
                        icon={<ThumbsUp />}
                    />
                </Flex>
                <Flex p={3}>
                    <FormControl align="center">
                        <FormLabel>Review this ad for additional points!</FormLabel>
                        <Textarea placeholder='Tell us what you thought!' />
                        <FormHelperText>You'll earn an extra 100 points for leaving a detailed review. Plus bragging rights.</FormHelperText>
                        <Button colorScheme='purple' mt={5}>Submit</Button>
                    </FormControl>
                </Flex>
            </Card>
        </Flex>
    )
}
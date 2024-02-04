// @ts-ignore
import React, {useEffect, useState} from "react";
import './App.css'
import {
  Flex
} from "@chakra-ui/react";
// @ts-ignore
import LandingScreen from "./components/LandingScreen.tsx";
import Sidebar from "./components/Sidebar.tsx";
import VideoAd from "./components/VideoAd.tsx";
// @ts-ignore
import youtube from "./api/youtube";
import { Route, Routes} from "react-router-dom";
import SocialHub from "./components/SocialHub.tsx";
import RewardsHub from "./components/RewardsHub.tsx";




function App() {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    // @ts-ignore

    youtube.get('/search', {
      params: {
        q: "advertisement|commercial|ad",
        safeSearch: "strict",
      }
    })// @ts-ignore
        .then(res => {
          console.log(res.data)
          setVideo(res.data)
        })
        .catch((err: any) => {
          console.error(err)
        })
  }, []);


  return <div className='App'>
    <Flex
        h="100vh"
        justifyContent="space-between"
        flexDir="row"
        maxW="2000px"
    >
      <Sidebar />
        <Routes>
          <Route path="/" element={<LandingScreen />}/>
          <Route path="/viewer" element={<VideoAd video={video} />} />
          <Route path="/social" element={<SocialHub />} />
          <Route path="/rewards" element={<RewardsHub />} />
        </Routes>

    </Flex>
  </div>
}

export default App

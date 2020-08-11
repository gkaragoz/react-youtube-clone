import React from "react";
import VideoCard from "./VideoCard";

import "./RecommendedVideos.css";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos_videos">
        <VideoCard
          title="Melek Mosso - Vursalar Ölemem (cover)"
          views="88M views"
          timestamp="2 years ago"
          channelImage="https://yt3.ggpht.com/a/AATXAJxp8FBC49G8iqzDKFFm-A0pz9-LZjhfJihrGSr1KA=s88-c-k-c0x00ffffff-no-rj"
          channel="melek mosso"
          image="https://i.ytimg.com/vi/9KioWmxSDWc/hq720.jpg"
        />
        <VideoCard
          title="Arkadaşım Hoşgeldin - 4. Bölüm"
          views="1.2M views"
          timestamp="3 years ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Gh9qwPGdd6RoeKuQ8oTECk-rxsaPJHMckMCZQ=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Beşiktaş Kültür Merkezi (BKM)"
          image="https://i.ytimg.com/vi/V9duBs2M1kk/hq720.jpg"
        />
        <VideoCard
          title="Melis Fis - Dur Diyemem (Official Video)"
          views="4.2M views"
          timestamp="7 months ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Ggyvmd_K--keoa3U06UgEIJlffE-IRj-k3Mnw=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Melis Fis"
          image="https://i.ytimg.com/vi/LDvB8hezaXk/hq720.jpg?"
        />
        <VideoCard
          title="If Programming Was An Anime"
          views="3.7M views"
          timestamp="5 months ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Git2v-jQceuRB3F_T8Fnfu2BvlP9p_9sTnWpA=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Joma Tech"
          image="https://i.ytimg.com/vi/pKO9UjSeLew/hq720.jpg"
        />
        <VideoCard
          title="Didomido - Saydım (Cover)"
          views="396K views"
          timestamp="1 years ago"
          channelImage="https://yt3.ggpht.com/a/AATXAJyufULd7e_9Q8quACmbOr4Qdf9PZTjYszvZDL-R=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="Didem"
          image="https://i.ytimg.com/vi/idqdUopJazc/hq720.jpg"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;

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
          image="https://i.ytimg.com/an_webp/9KioWmxSDWc/mqdefault_6s_480x270.webp?du=3000&sqp=CMb1n_kF&rs=AOn4CLC2927MggM4UmxlIoUDsruHavt_Bw"
        />
        <VideoCard
          title="Arkadaşım Hoşgeldin - 4. Bölüm"
          views="1.2M views"
          timestamp="3 years ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Gh9qwPGdd6RoeKuQ8oTECk-rxsaPJHMckMCZQ=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Beşiktaş Kültür Merkezi (BKM)"
          image="https://i.ytimg.com/an_webp/V9duBs2M1kk/mqdefault_6s_480x270.webp?du=3000&sqp=CL2ooPkF&rs=AOn4CLB1Oh5G8Pra-VpH2UPuj8V_labtKA"
        />
        <VideoCard
          title="Melis Fis - Dur Diyemem (Official Video)"
          views="4.2M views"
          timestamp="7 months ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Ggyvmd_K--keoa3U06UgEIJlffE-IRj-k3Mnw=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Melis Fis"
          image="https://i.ytimg.com/an_webp/LDvB8hezaXk/mqdefault_6s_480x270.webp?du=3000&sqp=CPmsoPkF&rs=AOn4CLAwePK8AGNw002j4XUe5gHBn6bpmg"
        />
        <VideoCard
          title="If Programming Was An Anime"
          views="3.7M views"
          timestamp="5 months ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Git2v-jQceuRB3F_T8Fnfu2BvlP9p_9sTnWpA=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Joma Tech"
          image="https://i.ytimg.com/an_webp/pKO9UjSeLew/mqdefault_6s_480x270.webp?du=3000&sqp=CMyooPkF&rs=AOn4CLCUNpWef19MtQ_tG4KZXCMbiXf0WQ"
        />
        <VideoCard
          title="Didomido - Saydım (Cover)"
          views="396K views"
          timestamp="1 years ago"
          channelImage="https://yt3.ggpht.com/a/AATXAJyufULd7e_9Q8quACmbOr4Qdf9PZTjYszvZDL-R=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="Didem"
          image="https://i.ytimg.com/an_webp/I2oXXHeX6pU/mqdefault_6s.webp?du=3000&sqp=CPGvoPkF&rs=AOn4CLDTeIqauxH2qB3V9sNI_ry6W0V4Uw"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;

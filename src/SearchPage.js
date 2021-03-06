import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJxp8FBC49G8iqzDKFFm-A0pz9-LZjhfJihrGSr1KA=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="melek mosso"
        verified
        subs="436K"
        noOfVideos={20}
        description="Vokal, besteci, müzisyen"
      />

      <hr />

      <VideoRow
        views="38K"
        subs="436K"
        description="Mezunu olduğum bölüm ve flüt hocam Zeynep GERGİN'le birlikte bir şeyler yapabilmiş olmaktan çok mutlu oldum. Üstelik ilk defa .."
        timestamp="3 weeks ago"
        channel="melek mosso"
        title="Melek Mosso ft. ADÜ Güzel Sanatlar - Ederlezi (Goran Bregovic)"
        image="https://i.ytimg.com/vi/8cUHDcTQaNs/hq720.jpg"
      />

      <VideoRow
        views="1M"
        subs="436K"
        description="Arzular Arsız'ı ilk söylediğimde kafamda olan üçlemenin son şarkısıydı ''Yar'' O kadar çok söylüyordum ki ; hem kendi kendime ..."
        timestamp="1 month ago"
        channel="melek mosso"
        title="Melek Mosso - Yar (Yıldız Tilbe Cover)"
        image="https://i.ytimg.com/vi/lxqI3CHqPsE/hq720.jpg"
      />

      <VideoRow
        views="31M"
        subs="436K"
        description="Melek Mosso - Arzular Arsız (Yıldız Tilbe Cover) Ft. Veys Colak Kamera: Fırat Özmüş Video Edit: Veys Colak Mix: Can Ozan ..."
        timestamp="2 years ago"
        channel="melek mosso"
        title="Melek Mosso - Arzular Arsız"
        image="https://i.ytimg.com/vi/vwawFAgVg5M/hq720.jpg"
      />

      <VideoRow
        views="4.1M"
        subs="436K"
        description="Uzun zamandır sizlere dinletmek istediğim şarkım ''Gönül gözü'' sonunda renge ve şekle büründü. Söylediğim her sözün kalbinize konması dileğimle. "
        timestamp="9 months ago"
        channel="melek mosso"
        title="Melek Mosso - Gönül gözü"
        image="https://i.ytimg.com/vi/11I7wrHJDaY/hq720.jpg"
      />
    </div>
  );
}

export default SearchPage;

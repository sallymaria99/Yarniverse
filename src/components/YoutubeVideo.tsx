import { useEffect, useState } from "react";

interface YoutubeVideoProps {
  videoId: string;
}

interface VideoDetails {
  id: string;
  title: string;
  description: string;
  channelTitle: string;
  // thumbnails: ;
}

//Prop: videoId

const YoutubeVideo: React.FC<YoutubeVideoProps> = ({ videoId }) => {
  // videoDetails: detaljer om videon. Null tills datan laddas
  const [videoDetails, setVideoDetails] = useState<VideoDetails>();

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY;
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet, contentDetails, statistics`; // Kan inte få denna, funkar inte

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.items && data.items.length > 0) {
          const videoSnippet = data.items[0].snippet;
          const videoDetails: VideoDetails = {
            id: data.items[0].id,
            title: videoSnippet.title,
            description: videoSnippet.description,
            channelTitle: videoSnippet.channelTitle,
          };
          setVideoDetails(videoDetails);
        } else {
          console.log("ingen video finns");
        }
      });
  }, [videoId]);

  if (!videoDetails) {
    return <div>Laddar video...</div>;
  }

  return (
    <div>
      <h2>{videoDetails.title}</h2>
      <iframe src={`https://www.youtube.com/embed/${videoId}`}></iframe>
    </div>
  );
};

export default YoutubeVideo;

import { useEffect, useState } from "react";

interface YoutubeVideoProps {
  videoId: string;
}

interface VideoDetails {}

//Prop: videoId

// Tror Teams har hängt sig :D eller? Haha ja allt stängdes ner! startar snart igen. Okej :D

const YoutubeVideo: React.FC<YoutubeVideoProps> = ({ videoId }) => {
  // videoDetails: detaljer om videon. Null tills datan laddas
  const [videoDetails, setVideoDetails] = useState<any>();

  useEffect(() => {
    const API_KEY = "AIzaSyAE9jxmi_dE07OQ-J8DYhKnt4tHRW7FarE";
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet, contentDetails, statistics`; // Kan inte få denna, funkar inte

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.items && data.items.length > 0) {
          setVideoDetails(data.items[0]);
        } else {
          console.log("ingen video finns");
        }
      })
      .catch((error) => {
        console.log("fel vid inhämtningen");
      });
  }, [videoId]);

  if (!videoDetails) {
    return <div>Laddar video...</div>;
  }

  return (
    <div>
      <h2>{videoDetails.snippet.title}</h2>
      <p>Video ID: {videoId}</p>
      <iframe src={`https://www.youtube.com/embed/${videoId}`}></iframe>
    </div>
  );
};

export default YoutubeVideo;

import Vimeo from "@u-wave/react-vimeo";
import "./LayVideo.css";
const LayVideo = () => {
  return (
    <div className="container">
      <div className="row row-cols-2 videocont">
        <div className="col">
          <Vimeo
            video="640410907"
            className="video"
            controls="false"
            autoplay
          />
        </div>
        <div className="col">
          <Vimeo video="662222719" className="video" controls="false" />
        </div>
        <div className="col">
          <Vimeo video="640419063" className="video" controls="false" />
        </div>
        <div className="col">
          <Vimeo video="681872308" className="video" controls="false" />
        </div>
        <div className="col">
          <Vimeo video="640404330" className="video" controls="false" />
        </div>
        <div className="col">
          <Vimeo video="640428922" className="video" controls="false" />
        </div>
      </div>
    </div>
  );
};

export default LayVideo;

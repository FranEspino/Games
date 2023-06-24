import React from "react";
import { Player } from "video-react";
import "./Game.css";

const Game = ({image,title,description,studio,publicationYear,video}) => {
  return (
    <div className="game-card">
      <div className="info-game">
        <div className="img-game">
          <img src={image} />
        </div>
        <div className="content-game">
          <span className="title-game">{title}</span>
          <span className="description-game">
           {description}
          </span>
          <div className="studio-game">
            <p className="studio">{studio}</p>
            <p>{publicationYear}</p>
          </div>
        </div>
      </div>

      <div className="video-game">
        <link
          rel="stylesheet"
          href="https://video-react.github.io/assets/video-react.css"
        />
        <Player>
          <source src={video} />
        </Player>
      </div>
    </div>
  );
};

export default Game;

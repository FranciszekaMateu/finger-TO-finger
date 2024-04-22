import React, { useEffect, useRef } from 'react';
import { Player } from 'clappr';
import { Engine } from 'p2p-media-loader-hlsjs';

const VideoPlayer = ({ videoUrl }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const engine = new Engine();

    const player = new Player({
      parentId: '#player',
      source: videoUrl,
      mute: true,
      autoPlay: true,
      playback: {
        hlsjsConfig: {
          liveSyncDurationCount: 7,
          loader: engine.createLoaderClass()
        }
      }
    });

    playerRef.current = player;

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoUrl]);

  return <div id="player" />;
};

export default VideoPlayer;

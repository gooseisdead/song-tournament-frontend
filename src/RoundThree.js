import React from 'react';
import SongCard from './SongCard'


function RoundThree({songs, setSongs }) {

    function handleVotes(updatedSong) {
        const updatedSongs = songs.map((song) =>
          song.id === updatedSong.id ? updatedSong : song
        );
        setSongs(updatedSongs);
      }

    const songChoices = songs
        .map((song) => (song.votes === 2 ? 
                    <div className="song-card-three">
                    <SongCard 
                    key={song.id}
                    id={song.id}
                    title={song.title}
                    artist={song.artist}
                    album={song.album}
                    votes={song.votes}
                    onUpdateSong={handleVotes}
                    /></div> : null)
        )

    return (
        <div>{songChoices}</div>
    )
}

export default RoundThree;
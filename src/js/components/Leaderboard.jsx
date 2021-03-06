import LeaderboardSidebar from './LeaderboardSidebar.jsx';
import LeaderboardContent from './LeaderboardContent.jsx';
import SeedPlayerData from '../data/players.json';
import usePlayersState from '../hooks/usePlayersState.js';
import {useEffect} from 'react';
import ParContext from '../context/parContext.js';

/*
    Component: LeaderBoard

    This is the primary component of the Leaderboard application.
    It manages the state of the Players list and passes the list
    as well as helper functions down to children components.
    This consists of a Sidebar component, and a Content component
*/
const LeaderBoard = () => {
    let [players, addPlayer, deletePlayer, editPlayer, sort] = usePlayersState(SeedPlayerData);

    // Do an initial sort of the players list
    useEffect(() => {
        sort();
    }, []);

    // PGA - Obviously I didn't need to use context for this
    // I just wanted to demonstrate that I could for this interview setting
    return (
        <div className="leaderboard">
            <LeaderboardSidebar addPlayer={addPlayer} />
            <ParContext.Provider value={70}>
                <LeaderboardContent players={players} addPlayer={addPlayer} editPlayer={editPlayer} deletePlayer={deletePlayer}  />
            </ParContext.Provider>
        </div>
    );
};

export default LeaderBoard;
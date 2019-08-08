import React from 'react'
import './Playercard.css'
import hak from './images/hakseity.jpg';
import life from './images/life.png';
import mastery from './images/mastery.png';

const PlayerCard = ({ playerHealth, playerLevel, onButtonAddPower, onButtonMinusPower, onButtonAddLife, onButtonMinusLife }) => {

const playerImage = hak;
    return (
        <div className='player'>
            <img src = {playerImage} alt = "player" />
            <div className = 'playerDetails'>
                <div className='lifeBox'>
                    <img src = {life} alt = 'life' />
                    <div className = 'lifeUpdater'>
                        <button className = 'addLifeButton' onClick = {onButtonAddLife}></button>
                        <h3>{playerHealth}</h3>
                        <button className = 'minusLifeButton' onClick = {onButtonMinusLife}></button>
                    </div>
                </div>

                <div className='powerBox'>
                <img src = {mastery} alt = 'power' />
                    <div className = 'powerUpdater'>
                        <button className = 'addPowerButton' onClick = {onButtonAddPower}></button>
                            <h3>{playerLevel}</h3>
                        <button className = 'minusPowerButton' onClick = {onButtonMinusPower}></button>
                    </div>
                </div>
            </div>
        </div>
    );  
}

export default PlayerCard;
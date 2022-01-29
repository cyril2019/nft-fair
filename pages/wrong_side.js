import React from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import $ from 'jquery';
const wrong_side = () => {
  var carPosition = [0, 1, 0];
  var currentLane = 1;
  var rockPosition = 0;
  var score = 0;
  var valid = 1;
  var gameRunningInterval;
  var gameScoreInterval;
  // round start
  function start() {
    score = 0;
    $('.dl').addClass('road-animation');
    $('.dr').addClass('road-animation');
    gameRunningInterval = setInterval(() => {
      $('.rock').removeClass('start-game');
      rockPosition = Math.floor(Math.random() * 3);
      $('.rock').css('left', 29 + rockPosition * 14 + '%');
      $('.rock').addClass('start-game');
    }, 1500);
    gameScoreInterval = setInterval(() => {
      score++;
      $('.score-text').text(score);
      checkGameOver();
    }, 100);
  }

  // end game
  function endGame() {
    clearInterval(gameRunningInterval);
    clearInterval(gameScoreInterval);
    $('.game-screen').addClass('hide');
    $('.game-over-screen').removeClass('hide');
    $('.final-score').text(score);
  }

  //function to go left
  function goLeft() {
    if (currentLane > 0) {
      carPosition[currentLane] = 0;
      currentLane--;
      carPosition[currentLane] = 1;
    }
    $('.bike').css('left', 29 + currentLane * 14 + '%');
    // console.log(carPosition);
  }

  //function to go right
  function goRight() {
    if (currentLane < 2) {
      carPosition[currentLane] = 0;
      currentLane++;
      carPosition[currentLane] = 1;
    }
    $('.bike').css('left', 29 + currentLane * 14 + '%');
    // console.log(carPosition);
    // console.log(carPosition);
  }

  //check if game over
  function checkGameOver() {
    if (rockPosition == currentLane) {
      var rockTop = parseInt($('.rock').css('top'));
      var bikeTop = parseInt($('.bike').css('top'));
      if (rockTop - bikeTop > -70 && rockTop - bikeTop < 20) {
        $('.dl').removeClass('road-animation');
        $('.dr').removeClass('road-animation');
        endGame();
      }
    }
  }

  //on click listeners
  function onRightBtnClick() {
    goRight();
  }
  function onLeftBtnClick() {
    goLeft();
  }
  function onStartBtnClicked() {
    if (valid) {
      $('.start-screen').addClass('hide');
      $('.game-screen').removeClass('hide');
      start();
    }
  }
  function onRetryBtnClick() {
    start();
    $('.game-screen').removeClass('hide');
    $('.game-over-screen').addClass('hide');
  }

  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full min-h-screen flex justify-center pt-10">
        <div className="content">
          <div className="app-wrapper game-screen hide">
            <div className="road"></div>
            <div className="bike"></div>
            <div className="rock"></div>
            <div className="right" id="btn" onClick={onRightBtnClick}></div>
            <div className="left" id="btn" onClick={onLeftBtnClick}></div>
            <div className="scoreboard">
              <p className="score-title">Score</p>
              <p className="score-text">10</p>
            </div>
            <div className="dl" id="divider">
              <div className="d1"></div>
              <div className="d2"></div>
              <div className="d1"></div>
              <div className="d2"></div>
              <div className="d1"></div>
              <div className="d2"></div>
              <div className="d1"></div>
            </div>
            <div className="dr" id="divider">
              <div className="d1"></div>
              <div className="d2"></div>
              <div className="d1"></div>
              <div className="d2"></div>
              <div className="d1"></div>
              <div className="d2"></div>
              <div className="d1"></div>
            </div>
          </div>
          <div className="app-wrapper start-screen ">
            <div className="start-menu">
              <div className="start-title"></div>
              <div className="start-btn" onClick={onStartBtnClicked}></div>
            </div>
          </div>
          <div className="app-wrapper game-over-screen hide">
            <div className="start-menu">
              <div className="start-title"></div>
              <div className="a-1">
                <p className="final-score">100</p>
                <div className="retry-btn" onClick={onRetryBtnClick}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default wrong_side;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const App = () => {
  const [currentDay, setCurrentDay] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      const day = days[now.getDay()];
      setCurrentDay(day);

      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      const date = now.getDate().toString().padStart(2, '0'); 
      const month = months[now.getMonth()];
      const year = now.getFullYear();
      setCurrentDate(`${month} ${date}, ${year}`); 

      const hours = now.getHours().toString().padStart(2, '0'); 
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    const intervalId = setInterval(updateTime, 1000);

    updateTime();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <AppContainer>
      <ClockContainer>
        <Day id="day">{currentDay}</Day>
        <DateDisplay id="date">{currentDate}</DateDisplay>
        <Time id="time">{currentTime}</Time>
      </ClockContainer>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  background: #000;
  color: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const ClockContainer = styled.div`
  text-align: center;
  padding: 40px 60px;
  border-radius: 30px;
  background: #000000b2;
  box-shadow: 0 0px 30px #002894;
`;

const Day = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #9dff00;
`;

const DateDisplay = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: 400;
  color: #bdc3c7;
  letter-spacing: 1px;
`;

const Time = styled.div`
  font-size: 4rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 30px;
  background: linear-gradient(90deg, #ff1900, #b300ff);
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 3px;
`;

export default App;

"use client"

import styled from 'styled-components';
import { useEffect } from 'react';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #121212;
`;

const TitleBar = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e1e1e;
  color: white;
  position: fixed;
  top: 0;
`;

const Deck = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 10px;
  padding: 60px 20px 20px;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
  justify-content: center;
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #222;
  border-radius: 10px;
  height: 80px;
  color: white;
  cursor: pointer;
  text-align: center;
`;

export default function Home() {
  useEffect(() => {
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape').catch((err) => {
        console.warn('Screen orientation lock failed:', err);
      });
    } else {
      console.warn('Screen orientation lock is not supported.');
    }
  }, []);

  return (
    <AppWrapper>
      <TitleBar>
        <div>StreamDeck</div>
      </TitleBar>
      <Deck>
        <Button>
          <img src="/icon1.png" alt="Icon 1" />
          <span>Icon 1</span>
        </Button>
        <Button>
          <img src="/icon2.png" alt="Icon 2" />
          <span>Icon 2</span>
        </Button>
        {/* Add more buttons as needed */}
      </Deck>
    </AppWrapper>
  );
}

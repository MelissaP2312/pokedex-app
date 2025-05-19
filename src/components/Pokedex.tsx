import {
  IonContent,
  IonPage,
  useIonRouter
} from '@ionic/react';
import React, { useContext } from 'react';

import { EPokedexMenuOption, EPokedexScreen, MenuPokedexContext } from '../contexts/MenuPokedexContext';
import '../theme/variables.css';
import { Cross } from './Buttons/Cross';

const Pokedex: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { menuOption, screen, setMenuOption, setScreen } = useContext(MenuPokedexContext);
  const router = useIonRouter();
  
  const onBigBlueButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (screen === EPokedexScreen.MENU) {
      e.preventDefault();
      const path = EPokedexMenuOption[menuOption].toLowerCase();
      setScreen(menuOption as unknown as EPokedexScreen)
      router.push(`/${path}`);
    }
  }

  const toggleScreen = () => {
    if (screen === EPokedexScreen.EXIT) {
      setScreen(EPokedexScreen.MENU);
      setMenuOption(EPokedexMenuOption.POKEDEX);
      router.push('/home');
    } else {
      setScreen(EPokedexScreen.EXIT);
      router.push('/exit');
    }
  }
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <div id="pokedex">
        
          <div id="left">
            <div id="bg_curve1_left"></div>
            <div id="bg_curve2_left"></div>
            <div id="curve1_left">
              <div id="buttonGlass">
                <div id="reflect"></div>
              </div>
              <div id="miniButtonGlass1"></div>
              <div id="miniButtonGlass2"></div>
              <div id="miniButtonGlass3"></div>
            </div>
            <div id="curve2_left">
              <div id="junction">
                <div id="junction1"></div>
                <div id="junction2"></div>
              </div>
            </div>
            <div id="screen">
              <div id="topPicture">
                <div id="buttontopPicture1"></div>
                <div id="buttontopPicture2"></div>
              </div>
              <div id="picture">
                {children}
              </div>
              <div
                id="buttonbottomPicture"
                className="gameboy-button"
                onClick={toggleScreen}
              >
              </div>
              <div id="speakers">
                <div className="sp"></div>
                <div className="sp"></div>
                <div className="sp"></div>
                <div className="sp"></div>
              </div>
            </div>
            <div
              id="bigbluebutton"
              className="gameboy-button"
              onClick={onBigBlueButtonClick}
            >
            </div>
            <div id="barbutton1" className="gameboy-button"></div>
            <div id="barbutton2" className="gameboy-button"></div>
            <Cross />
          </div>
          <div id="right" style={{
            width: '350px',
            height: '500px',
            position: 'relative',
            backgroundColor: '#c00d0d',
            overflow: 'visible',
            marginLeft: '5px',
            borderTopRightRadius: '30px',
            borderBottomRightRadius: '30px'
          }}>
            {/* Elementos decorativos de fondo */}
            <div id="bg_curve1_right"></div>
            <div id="bg_curve2_right"></div>
            <div id="curve1_right"></div>
            <div id="curve2_right"></div>

            {/* Pantalla verde */}
            <div style={{
              position: 'absolute',
              top: '110px',
              left: '35px',
              backgroundColor: '#30da0c',
              border: '3px solid #000',
              padding: '15px',
              width: '280px',
              height: '100px',
              fontFamily: '"Pokemon GB"',
              fontSize: '12px',
              color: '#000',
              boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)',
              zIndex: 1
            }}>
              <strong>POKéDEX MENU</strong><br />
              <div style={{ marginTop: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>1. POKéDEX</span>
                  <span>▶</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>2. OBJETOS</span>
                  <span> </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>3. SALIR</span>
                  <span> </span>
                </div>
              </div>
            </div>

            {/* Botones azules con números */}
            <div id="blueButtons1" style={{ position: 'absolute', top: '220px', left: '25px', display: 'flex', gap: '8px' }}>
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="blueButton" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  fontFamily: '"Pokemon GB"',
                  fontSize: '16px',
                  lineHeight: '45px',
                  textAlign: 'center'
                }}>{num}</div>
              ))}
            </div>
            <div id="blueButtons2" style={{ position: 'absolute', top: '273px', left: '25px', display: 'flex', gap: '8px' }}>
              {[6, 7, 8, 9, 0].map((num) => (
                <div key={num} className="blueButton" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  fontFamily: '"Pokemon GB"',
                  fontSize: '16px',
                  lineHeight: '45px',
                  textAlign: 'center'
                }}>{num}</div>
              ))}
            </div>

            {/* Tipos - Movidos más arriba */}
            <div style={{
              position: 'absolute',
              top: '320px',
              left: '35px',
              display: 'flex',
              gap: '15px',
              width: '60%'  // Limitamos el ancho para dejar espacio
            }}>
              <div style={{
                width: '80px',
                height: '35px',
                backgroundColor: '#fff',
                border: '2px solid #000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: '"Pokemon GB"',
                fontSize: '10px'
              }}>WATER</div>
              <div style={{
                width: '80px',
                height: '35px',
                backgroundColor: '#fff',
                border: '2px solid #000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: '"Pokemon GB"',
                fontSize: '10px'
              }}>PSYCHIC</div>
            </div>
            
            {/* Barbuttons */}
            <div id="barbutton3" style={{
              marginLeft: '20px',
              position: 'absolute',
              top: '330px',
              right: '25px',  // Ajustado para dar más espacio
              width: '40px',
              height: '10px',
              backgroundColor: '#4dad5b',
              borderRadius: '5px',
              border: '1px solid #025b00'
            }}></div>
            <div id="barbutton4" style={{
              marginLeft: '10px',
              position: 'absolute',
              top: '330px',
              right: '85px',  // Ajustado para dar más espacio
              width: '40px',
              height: '10px',
              backgroundColor: '#ff7b7b',
              borderRadius: '5px',
              border: '1px solid #780000'
            }}></div>

            {/* Mantener los elementos decorativos existentes */}
            <div id="yellowBox1"></div>
            <div id="yellowBox2"></div>
          </div>
          </div>    
      </IonContent>
    </IonPage>
  );
};

export default Pokedex;
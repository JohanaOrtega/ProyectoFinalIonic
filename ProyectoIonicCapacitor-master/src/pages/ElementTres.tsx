import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Toast } from '@capacitor/toast';
import React, { useEffect, useState } from 'react';

const Temporizador: React.FC = () => {
  const [duration, setDuration] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setRemainingTime(prevTime => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            setIsRunning(false);
            showToast('¡Tiempo terminado!');
            return 0;
          }
        });
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isRunning]);

  const startTimer = () => {
    if (duration <= 0) {
      console.log('Por favor, ingresa una duración válida');
      return;
    }

    setRemainingTime(duration);
    setIsRunning(true);
    showToast('Temporizador iniciado');
  };

  const stopTimer = () => {
    setIsRunning(false);
    showToast('Temporizador detenido');
  };

  const showToast = async (message: string) => {
    await Toast.show({
      text: message,
      duration: 'long'
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Temporizador</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="timer-container">
          <h2>Configurar temporizador</h2>
          <IonItem>
            <IonLabel position="floating">Duración en segundos</IonLabel>
            <IonInput type="number" value={duration} onIonChange={e => setDuration(Number(e.detail.value!))}></IonInput>
          </IonItem>
          {!isRunning ? (
            <IonButton onClick={startTimer}>Iniciar</IonButton>
          ) : (
            <IonButton onClick={stopTimer}>Detener</IonButton>
          )}
        </div>

        {isRunning && (
          <div className="remaining-time">
            <h3>Tiempo restante: {remainingTime} segundos</h3>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Temporizador;

import {
  IonButton,
  IonContent,
  IonLabel,
  IonPage,
  IonItem,
} from "@ionic/react";
import React from "react";
import "./style.css";
import panda from "../img/panda_touka.png";

const Home = () => {
  const s = document.getElementById("scroll_off");
  // console.log(s);
  if (s !== null) {
    s.addEventListener(
      "touchmove",
      function (event) {
        event.preventDefault();
        console.log("here");
      },
      { passive: false }
    );
  }

  return (
    <IonPage>
      <IonContent fullscreen id="scroll_off">
        <div className="display-flex">
          <div className="my-2 py-2 bg-white">
            <IonItem
              lines="none"
              className="text-center text-5xl font-semibold"
            >
              <IonLabel className="">パンダの館</IonLabel>
            </IonItem>

            <img
              className="object-contain h-48 w-full "
              alt="パンダの画像"
              src={panda}
            ></img>

            <div className="mt-3 text-center">
              <IonButton
                className="justify-self-center "
                fill="outline"
                color="dark"
                routerLink="/talk"
              >
                パンダとおしゃべり
              </IonButton>
            </div>
            <div className="">
              <IonButton
                className="button2"
                fill="outline"
                color="dark"
                routerLink="/teach"
              >
                パンダ構文講座
              </IonButton>

              <IonButton
                className="button3"
                fill="outline"
                color="dark"
                routerLink="/knife"
              >
                パンダのつぶやき
              </IonButton>
            </div>

            <div className="text-center">
              <IonButton
                className="justify-self-center "
                fill="outline"
                color="dark"
                routerLink="/explanation"
              >
                {window.innerWidth >= 360 ? (
                  <div className="mx-24">
                    <IonLabel>パンダの館って？</IonLabel>
                  </div>
                ) : (
                  <div className="mx-2">
                    <IonLabel>パンダの館って？</IonLabel>
                  </div>
                )}
              </IonButton>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;

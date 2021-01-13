import {
  IonButton,
  IonContent,
  IonLabel,
  IonPage,
  IonItem,
} from "@ionic/react";
import React from "react";
import "./Home.css";
import panda from "../img/panda_touka.png";

const Home = ({ history }) => {
  return (
    <IonPage>
      <IonContent fullscreen color="dark">
        <div className="display-flex">
          <div className="my-2 py-24 bg-white">
            <IonItem
              lines="none"
              className="mt-3 text-center text-5xl font-semibold"
            >
              <IonLabel className="">パンダの館</IonLabel>
            </IonItem>

            <img className="object-contain h-48 w-full " src={panda}></img>

            <div className="mt-8 text-center">
              <IonButton
                className="justify-self-center "
                fill="outline"
                color="dark"
                onClick={() => history.push("/talk")}
              >
                パンダとおしゃべり
              </IonButton>
              {/*<a class="button is-warning" href="/talk">全てのラーメン店を見る</a>*/}
            </div>
            <div className="">
              <IonButton
                className="button2"
                fill="outline"
                color="dark"
                onClick={() => history.push("/teach")}
              >
                パンダ構文講座
                {/*} <IonItem href="/teach"></IonItem>*/}
              </IonButton>

              <IonButton
                className="button3"
                fill="outline"
                color="dark"
                onClick={() => history.push("/knife")}
              >
                パンダに刺される
              </IonButton>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;

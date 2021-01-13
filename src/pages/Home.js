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
      <IonContent fullscreen className="center">
        <IonItem className="title" lines="none">
          <IonLabel>パンダの館</IonLabel>
        </IonItem>

        <img className="panda" src={panda}></img>

        <IonButton
          className="button1"
          fill="outline"
          color="dark"
          onClick={() => history.push("/talk")}
        >
          パンダとおしゃべり
        </IonButton>
        {/*<a class="button is-warning" href="/talk">全てのラーメン店を見る</a>*/}
        <br />
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
      </IonContent>
    </IonPage>
  );
};

export default Home;

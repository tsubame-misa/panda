import {
  IonBackButton,
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import "./Talk.css";
import panda from "../img/panda_touka.png";
import { chevronBackOutline } from "ionicons/icons";

export const request_send_massage = async (item) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/change_panda`,
      {
        method: "PUT",
        body: JSON.stringify(item),
      }
    );
    return await response.json();
  } catch (e) {
    console.error(e);
  }
};

const Talking = () => {
  const [pandaComment, setPandaComment] = useState("");
  const [message, setMessage] = useState();
  const img = panda;

  const sendMessage = () => {
    console.log(message);
    request_send_massage(message)
      .then((data) => {
        setPandaComment(data);
        console.log(pandaComment);
      })
      .then(() => setMessage(null));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonBackButton
            defaultHref="/"
            slot="start"
            color="dark"
            icon={chevronBackOutline}
          />
          <IonTitle>
            <IonLabel>パンダ構文講座</IonLabel>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="center">
        <div className="test">
          <div className="t">
            <img className="panda_img" src={img}></img>
          </div>

          <div className="t">
            {pandaComment === "" ? (
              <div className="h">
                <IonItem lines="none">パンダ構文に変換するよ！</IonItem>
                <IonItem lines="none">何か話しかけてみよう！！</IonItem>
                <IonItem lines="none" className="alert">
                  ※パンダが寝てると返事が遅いことがあるから少し待ってね。
                </IonItem>
              </div>
            ) : (
              <div className="balloonpppp">
                <IonItem lines="none" className="answer">
                  {pandaComment}
                </IonItem>
              </div>
            )}
          </div>
        </div>

        <div className="test">
          <div className="t">
            <div className="textbox">
              <IonTextarea
                value={message}
                //placeholder="何か話しかけてみよう！"
                onIonChange={(e) => {
                  setMessage(e.detail.value);
                }}
              ></IonTextarea>
            </div>
          </div>
          <div className="t">
            {" "}
            <IonButton
              className="talkbutton"
              color="dark"
              fill="outline"
              onClick={() => {
                sendMessage();
              }}
            >
              変換する
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Talking;

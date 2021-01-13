import {
  IonBackButton,
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import panda from "../img/panda_with_bat_touka.png";
import { data } from "./data";
import "./knife.css";
import { chevronBackOutline } from "ionicons/icons";

const Knife = () => {
  const [pandaComment, setPandaComment] = useState("");
  const img = panda;

  const setMsg = () => {
    const a = Math.floor(Math.random() * data.length);
    setPandaComment(data[a]);
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
            <IonLabel>刺される</IonLabel>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="center">
        <div className="test">
          <div className="t">
            <img className="bat_panda_img" src={img}></img>
          </div>

          <div className="t">
            {pandaComment === "" ? (
              <div className="h"></div>
            ) : (
              <div className="balloon_knife">
                <IonItem lines="none" className="answer">
                  {pandaComment}
                </IonItem>
              </div>
            )}
          </div>
        </div>

        {pandaComment === "" ? (
          <IonButton
            className="nextbutton"
            color="dark"
            fill="outline"
            onClick={() => {
              setMsg();
            }}
          >
            気持ちの準備完了！
          </IonButton>
        ) : (
          <IonButton
            className="nextbutton"
            color="dark"
            fill="outline"
            onClick={() => {
              setMsg();
            }}
          >
            次
          </IonButton>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Knife;

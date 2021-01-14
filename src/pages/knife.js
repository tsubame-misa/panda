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
        <IonToolbar color="dark">
          <IonBackButton
            defaultHref="/"
            slot="start"
            color="light"
            icon={chevronBackOutline}
          />
          <IonTitle>
            <IonLabel>刺される</IonLabel>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="display-flex-talk">
          <div className="text-center m-6">
            {pandaComment === "" ? (
              <div className="mb-14 text-xl leading-relaxed">
                <p>パンダの独り言を聞くことができます。</p>
                <p>たまに刺されます。</p>
                <p>覚悟はいいですか？</p>
              </div>
            ) : (
              <div className="h-32">
                <div className="text-center items-center border-black border-2 rounded-lg  px-6 py-2">
                  <p className="text-center inline-block  leading-normal ">
                    {pandaComment}
                  </p>
                </div>
              </div>
            )}
          </div>

          <img className="my-6 object-contain h-48 w-full" src={img}></img>

          <div className="mt-8 text-center  ">
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
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Knife;

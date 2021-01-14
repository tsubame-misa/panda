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
        <IonToolbar color="dark">
          <IonBackButton
            defaultHref="/"
            slot="start"
            color="light"
            icon={chevronBackOutline}
          />
          <IonTitle>
            <IonLabel>パンダ構文講座</IonLabel>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="display-flex-talk">
          <div className="text-center m-4">
            {pandaComment === "" ? (
              <div className="text-center leading-relaxed">
                <p className="text-xl">パンダ構文に変換するよ！</p>
                <p className="text-xl">何か話しかけてみよう！！</p>
                <p className="text-sm">
                  ※パンダが寝てると返事が遅いことがあるから少し待ってね。
                </p>
              </div>
            ) : pandaComment === undefined ? (
              <div className="mt-10 mb-6 text-center inline-block border-black border-2 rounded-lg  px-6 py-2">
                <p className="text-center leading-normal ">
                  何かエラーが起きてるな…
                </p>
              </div>
            ) : (
              <div className="mt-10 mb-6  text-center inline-block border-black border-2 rounded-lg  px-6 py-2">
                <p className="text-center leading-normal ">{pandaComment}</p>
              </div>
            )}
          </div>

          <img className="object-contain h-48 w-full" src={img}></img>

          <div className="mt-6">
            <div className="text-center border-black border-2 rounded-lg mx-4 my-2 p-2">
              <IonTextarea
                value={message}
                placeholder="何か話しかけてみよう！"
                onIonChange={(e) => {
                  setMessage(e.detail.value);
                }}
              ></IonTextarea>
            </div>

            <div className="text-center mt-3">
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
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Talking;

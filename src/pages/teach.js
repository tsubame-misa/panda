import {
  IonBackButton,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import "./style.css";
import panda from "../img/panda_touka.png";
import { chevronBackOutline, logoTwitter } from "ionicons/icons";
import { request_changed_massage } from "./services";
const Talking = () => {
  const [pandaComment, setPandaComment] = useState("");
  const [message, setMessage] = useState();
  const [premessage, setPreMessage] = useState();
  const img = panda;

  const sendMessage = () => {
    console.log(message);
    request_changed_massage(message)
      .then((data) => {
        setPandaComment(data);
        console.log(pandaComment);
      })
      .then(() => {
        setPreMessage(message);
        setMessage(null);
      });
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
            <IonLabel className="text-center">パンダ構文講座</IonLabel>
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
              <div className="mt-10 mb-6 ">
                <div className="balloon">
                  <p>何かエラーが起きてるな…</p>
                  <p>パンダが寝てるのかも</p>
                  <p>少し待ったらもう一回押してみて</p>
                </div>
              </div>
            ) : (
              <div className="mt-10 mb-6 ">
                <p className="balloon ">{pandaComment}</p>
              </div>
            )}
          </div>

          <img
            className="object-contain h-48 w-full"
            alt="パンダの画像"
            src={img}
          ></img>

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

            {premessage !== undefined ? (
              <IonButton
                size="small"
                href={`http://twitter.com/share?url=https://kowai-panda.netlify.app&text=【パンダ構文口座】%0a %0a「${premessage}」をパンダ構文変換すると「${pandaComment}」になりました。%0a %0a 制作者：@Tsubame_misa  %0a %0a %0a ▼みんなもパンダと仲良くなろう！ &count=horizontal&lang=ja`}
              >
                <IonIcon icon={logoTwitter}></IonIcon>
                &ensp;結果をツイートする！
              </IonButton>
            ) : (
              []
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Talking;

import {
  IonBackButton,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
} from "@ionic/react";
import React, { useState } from "react";
import panda from "../img/panda_with_bat_touka.png";
import { data } from "./services";
import { chevronBackOutline, logoTwitter } from "ionicons/icons";

const Knife = () => {
  const [pandaComment, setPandaComment] = useState("");
  const img = panda;

  const setMsg = () => {
    const a = Math.floor(Math.random() * data.length);
    setPandaComment(data[a]);
  };

  const s = document.getElementById("scroll-off_knife");
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
    <IonPage id="scroll-off_knife">
      <IonHeader>
        <IonToolbar color="dark">
          <IonBackButton
            defaultHref="/"
            slot="start"
            color="light"
            icon={chevronBackOutline}
          />
          <IonTitle>
            <IonLabel className="text-center">つぶやき</IonLabel>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="display-flex-talk">
          <div className="text-center m-6">
            {pandaComment === "" ? (
              <div className="mb-14 text-xl leading-relaxed">
                <p className="text-lg">パンダの独り言を聞くことができます。</p>
                <p>たまに刺されます。</p>
                <p>覚悟が良ければパンダをクリック！</p>
              </div>
            ) : (
              <div className="">
                <div className="balloon">
                  <p>{pandaComment}</p>
                </div>
              </div>
            )}
          </div>

          <img
            className="my-6 object-contain h-48 w-full"
            src={img}
            alt="こわいパンダの画像"
            onClick={() => setMsg()}
          ></img>

          {pandaComment !== "" ? (
            <IonButton
              size="small"
              href={`http://twitter.com/share?url=https://kowai-panda.netlify.app&text=【パンダに刺された!!】%0a パンダに刺されて致命傷を負いました　%0a %0a パンダ：${pandaComment} %0a %0a 自分：ｳｯ...ﾊﾞﾀﾘ… %0a %0a  制作者：@Tsubame_misa  %0a %0a %0a ▼みんなもパンダと仲良くなろう！ &count=horizontal&lang=ja`}
            >
              <IonIcon icon={logoTwitter}></IonIcon>
              &ensp;パンダに刺された！！でツイートする
            </IonButton>
          ) : (
            []
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Knife;

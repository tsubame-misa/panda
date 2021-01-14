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
import jk from "../img/jk.png";
import { chevronBackOutline } from "ionicons/icons";

export const request_send_massage = async (item) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/user_message`,
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
  const [img, setImg] = useState(panda);

  const sendMessage = () => {
    console.log(message);
    request_send_massage(message)
      .then((data) => {
        if (data === "データさえあれば非常に簡単にできる") {
          setImg(jk);
        } else {
          setImg(panda);
        }
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
            <IonLabel>おしゃべり</IonLabel>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color>
        <div className="display-flex-talk">
          <div className="text-center m-4">
            {pandaComment === "" ? (
              <div className="text-center leading-relaxed">
                <p className="text-xl">野生のパンダが出てきた！！</p>
                <p className="text-xl ">何か話しかけてみよう！</p>
                <p className="text-sm">
                  ※パンダが寝てると返事が遅いことがあるから少し待ってね。
                </p>
              </div>
            ) : pandaComment === undefined ? (
              <div className="text-center leading-relaxed">
                <p className="text-xl">野生のパンダが出てきた！！</p>
                <p className="text-xl ">何か話しかけてみよう！</p>
                <p className="text-sm">
                  ※パンダが寝てると返事が遅いことがあるから少し待ってね。
                </p>
              </div>
            ) : (
              <div className="text-center inline-block border-black border-2 rounded-lg  px-6 py-2">
                <p className="text-center leading-normal ">{pandaComment}</p>
              </div>
            )}
          </div>
          　<img className="object-contain h-48 w-full" src={img}></img>
          <div className="mt-6">
            <div className="t">
              <div className="text-center border-black border-2 rounded-lg mx-4 my-2 p-2">
                <IonTextarea
                  value={message}
                  placeholder="メッセージをここに書いて「話しかけるボタン」を押そう！"
                  onIonChange={(e) => {
                    setMessage(e.detail.value);
                  }}
                ></IonTextarea>
              </div>
            </div>
            <div className="text-center">
              <IonButton
                className="talkbutton"
                color="dark"
                fill="outline"
                onClick={() => {
                  sendMessage();
                }}
              >
                話しかける
              </IonButton>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Talking;

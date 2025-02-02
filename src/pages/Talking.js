import {
  IonBackButton,
  IonButton,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import "./style.css";
import panda from "../img/panda_touka.png";
import jk from "../img/jk.png";
import { chevronBackOutline } from "ionicons/icons";
import { request_send_massage } from "./services";

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

  const s = document.getElementById("scroll-off-talking");
  if (s !== null) {
    s.addEventListener(
      "touchmove",
      function (event) {
        /*if (btn!==null) {
          event.stopPropagation();
          console.log("textarea");
        } else {
          event.preventDefault();
          console.log("here");
        }**/
        event.preventDefault();

        console.log("here");
      },
      { passive: false }
    );
  }
  /*const btn = document.getElementById("textarea");
  if (btn !== null) {
    window.addEventListener("scroll", () => console.log("textarea"));
  }
  window.onscroll = function () {
    console.log("textarea");
  };*/

  return (
    <IonPage id="scroll-off-talking">
      <IonHeader>
        <IonToolbar color="dark">
          <IonBackButton
            defaultHref="/"
            slot="start"
            color="light"
            icon={chevronBackOutline}
          />
          <IonTitle>
            <IonLabel className="text-center">おしゃべり</IonLabel>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="display-flex-talk">
          <div className="text-center m-4 ">
            {pandaComment === "" ? (
              window.innerHeight >= 570 ? (
                <div className="text-center leading-relaxed">
                  <p className="text-xl">野生のパンダが出てきた！！</p>
                  <p className="text-xl ">何か話しかけてみよう！</p>
                  <p className="text-sm">
                    ※パンダが寝てると返事が遅いことがあるから少し待ってね。
                  </p>
                </div>
              ) : (
                <div className=" text-center leading-relaxed">
                  <br />
                  <p className="text-xl">野生のパンダが出てきた！！</p>
                  <p className="text-xl ">何か話しかけてみよう！</p>
                  <p className="text-sm">
                    ※パンダが寝てると返事が遅いことがあるから少し待ってね。
                  </p>
                </div>
              )
            ) : pandaComment === undefined ? (
              <div className="mt-16 ">
                <div className="balloon">
                  <p>何かエラーが起きてるな…</p>
                  <p>パンダが寝てるのかも</p>
                  <p>少し待ったらもう一回押してみて</p>
                </div>
              </div>
            ) : (
              <div className="mt-16">
                <div className="balloon">
                  <p className="">{pandaComment}</p>
                </div>
              </div>
            )}
          </div>
          　
          <img
            className="object-contain mb-6 h-48 w-full"
            alt="パンダの画像"
            src={img}
          ></img>
          <div>
            <div className="text-center border-black border-2 rounded-lg  p-2 mx-4 sm:mx-32 md:mx-56 lg:mx-60">
              <IonTextarea
                id="textarea"
                value={message}
                placeholder="メッセージをここに書いて「話しかけるボタン」を押そう！"
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

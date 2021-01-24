import {
  IonBackButton,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonGrid,
  IonCol,
  IonRow,
  IonItem,
  IonCardHeader,
  IonCardContent,
} from "@ionic/react";
import React from "react";
import panda from "../img/panda_touka.png";
import panda_b from "../img/panda_with_bat_touka.png";
import panda_s from "../img/no_sleep_panda.png";
import { chevronBackOutline } from "ionicons/icons";

const Exp = () => {
  const s = document.getElementById("scroll-off-header");
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
    <IonPage>
      <IonHeader id="scroll-off-header">
        <IonToolbar color="dark">
          <IonBackButton
            defaultHref="/"
            slot="start"
            color="light"
            icon={chevronBackOutline}
          />
          <IonTitle>
            <IonLabel className="text-center">パンダの館って？</IonLabel>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size-sm="6" size="12">
              <IonCard>
                <IonCardHeader>
                  <IonItem className="font-black trans">パンダの館とは</IonItem>
                </IonCardHeader>
                <IonCardContent>
                  <IonGrid>
                    <IonRow>
                      <IonCol size="4">
                        <div className="display-flex">
                          <img src={panda} alt="パンダの画像" />
                        </div>
                      </IonCol>
                      <IonCol size="8">
                        このアプリは某パンダをテーマにしたネタアプリです。パンダとの会話を楽しむことができます。
                        <br />
                        たまにパンダが寝ていると返事が遅い場合があります。少し待ってから再チャレンジしてみてください。
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size-sm="6" size="12">
              <IonCard>
                <IonCardHeader>
                  <IonItem className="font-black">パンダとおしゃべり</IonItem>
                </IonCardHeader>
                <IonCardContent>
                  <IonGrid>
                    <IonRow>
                      <IonCol size="8">
                        この部屋ではパンダとおしゃべりすることができます。パンダは英語やわけわからない言葉は嫌いなので、そういった言葉は投げないでください。それっぽいワードには反応してちゃんとした返事を返します。色々話しかけてみてください。
                      </IonCol>
                      <IonCol size="4">
                        <div className="display-flex">
                          <img src={panda_s} alt="寝てないパンダの画像" />
                        </div>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size-sm="6" size="12">
              <IonCard>
                <IonCardHeader>
                  <IonItem className="font-black">パンダ構文講座</IonItem>
                </IonCardHeader>
                <IonCardContent>
                  みなさんはパンダ構文をご存知でしょうか？よくTwitterで観測される「ｺﾜｸﾅｲﾖｰ」などの半角カタカナ」＋「否定形」がどうやらパンダ構文と言われてるようです(なお観測範囲)。
                  <br />
                  この部屋では、パンダに言葉を投げかけるとパンダ構文にして返してもらう体験ができます。試しに「怖い」と打ってみてください。例によって英語とかわけわからない言葉は嫌いです。投げないでください。
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size-sm="6" size="12">
              <IonCard>
                <IonCardHeader>
                  <IonItem className="font-black">パンダのつぶやき</IonItem>
                </IonCardHeader>
                <IonCardContent>
                  <IonGrid>
                    <IonRow>
                      <IonCol size="4">
                        <div className="display-flex">
                          <img src={panda_b} alt="こわいパンダの画像" />
                        </div>
                      </IonCol>
                      <IonCol size="8">
                        この部屋ではパンダのつぶやきを聞くことができます。のほほんとしたつぶやきもあれば、グサッと刺される時もあります。刺される覚悟がある方はどうぞこの部屋へ。そして刺された際はぜひ報告を！
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonCard>
            <IonCardHeader>
              <IonItem className="font-black">制作者</IonItem>
            </IonCardHeader>
            <IonCardContent>
              <IonItem lines="none" className="text-gray-700">
                渡邉みさと&ensp;
                <a
                  href="https://twitter.com/Tsubame_misa?ref_src=twsrc%5Etfw"
                  className="twitter-follow-button text-blue-500"
                  data-show-count="false"
                >
                  Twitterアカウント
                </a>
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charSet="utf-8"
                ></script>
              </IonItem>
            </IonCardContent>
          </IonCard>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Exp;

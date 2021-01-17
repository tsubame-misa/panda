import random
import MeCab
import jaconv
import re

dic = {"五段-カ行": "カ", "五段-ガ行": "ガ", "五段-サ行": "サ", "五段-タ行": "タ",
       "五段-ナ行": "ナ", "五段-バ行": "バ", "五段-マ行": "マ", "五段-ラ行": "ラ", "五段-ワア行": "ワ",
       "下一段-ア行": "エ", "下一段-カ行": "ケ", "下一段-ガ行": "ゲ", "下一段-サ行": "セ", "下一段-ザ行": "ゼ", "下一段-タ行": "デ", "下一段-ダ行": "デ", "下一段-ナ行": "ネ", "下一段-バ行": "ベ", "下一段-マ行": "メ", "下一段-ラ行": "レ", "上一段-ア行": "キ", "上一段-カ行": "キ", "上一段-ガ行": "ギ", "上一段-ザ行": "ジ", "上一段-タ行": "チ", "上一段-ナ行": "ニ", "上一段-バ行": "ビ", "上一段-マ行": "ミ", "上一段-ラ行": "リ", "カ行変格": "コ", "サ行変格": "シ"}

#Talkingのレスポンス#######################


def make_response(text):
    if text == "":
        return "何か話して"

    if "何歳" in text:
        return "17才です"

    if text[-1] == "?" or text[-1] == "？":
        return "・・・(ニッコリ)"

    sake = ["お酒", "酒", "おさけ", "さけ", "ビール", "びーる", "ワイン", "わいん"]
    for s in sake:
        if s in text:
            data = ["飲み行こ", "ビール飲みたい"]
            i = random.randint(0, 1)
            return data[i]

    if "Rust" in text:
        return "Rustはいいぞ"

    if "データ" in text:
        return "データさえあれば非常に簡単にできる"

    mecab = MeCab.Tagger()
    # parseToNodeで形態素解析
    node = mecab.parseToNode(text)
    # 各変数の初期化
    keiyoushi_list = []
    doushi_list = []
    keiyoudoushi_list = []
    meishi_list = []
    kandou_list = []

    while node:
        try:
            doushi_list.append(node.feature.split(",")[7])
        except IndexError:
            return "英文とかローマ字やだ"

        if node.feature.split(",")[0] == "形容詞":
            keiyoushi_list.append(node.feature.split(",")[7])
        elif node.feature.split(",")[0] == "動詞":
            doushi_list.append(node.feature.split(",")[7])
        elif node.feature.split(",")[0] == "形状詞":
            keiyoudoushi_list.append(node.feature.split(",")[7])
        elif node.feature.split(",")[0] == "名詞":
            meishi_list.append(node.feature.split(",")[7])
        elif node.feature.split(",")[0] == "感動詞":
            kandou_list.append(node.feature.split(",")[7])
        else:
            pass
        node = node.next

    if "怖い" in keiyoushi_list:
        return "ｺﾜｸﾅｲﾖｰ"

    if "ラーメン-Rahmen" in meishi_list:
        data = ["ラーメン食べたい", "ラーメン食べ行こ"]
        i = random.randint(0, 1)
        return data[i]

    if "さようなら" in kandou_list or "バイバイ" in text or "ばいばい" in text or "またね" in text:
        data = ["おつかれー", "おつー", "ばいばい"]
        i = random.randint(0, len(data)-1)
        return data[i]

    if len(kandou_list) > 0:
        data = ["おはよー", "ひさしぶり"]
        i = random.randint(0, len(data)-1)
        return data[i]

    if "データ" in meishi_list:
        return "データさえあれば非常に簡単にできる"

    aiduti = ["うんうん", "へぇ", "それで？", "なるほど？",
              "草", "寝る寝るねーるね", "おやおや", "こわい", "ﾐｯ"]
    i = random.randint(0, len(aiduti)-1)
    return aiduti[i]

##パンダ構文のレスポンス#######################


def convert(text, kanji, k, p):
    if p == "サ行変格":
        return "シナイヨー"
    if p == "カ行変格":
        return "コナイヨー"
    if k == 1:
        s = text[:-1]
        return s+"クナイヨー"
    elif k >= 3:
        return text+"ジャナイヨー"
    else:
        count = 0
        re_kanji = re.compile(r'^[\u4E00-\u9FD0]+$')
        for i in range(len(kanji)):
            status_kanji = re_kanji.fullmatch(kanji[i])
            if status_kanji != None:
                count += 1
        diff = len(kanji) - count

        diff = len(text) - len(kanji)+1
        s = text[:diff]
        return s+dic[p]+"ナイヨー"


def make_panda(text):
    if text == "":
        return "...?"
    mecab = MeCab.Tagger()
    node = mecab.parseToNode(text)
    data = []
    d = []
    while node:
        k = 0
        try:
            d.append(node.feature.split(",")[7])
        except IndexError:
            return "英語とかローマ字ﾔﾒﾃ"

        if node.feature.split(",")[0] == "形容詞":
            k = 1
        elif node.feature.split(",")[0] == "動詞":
            k = 2
        elif node.feature.split(",")[0] == "形状詞":
            k = 3
        elif node.feature.split(",")[0] == "名詞":
            k = 4
        else:
            pass
        data.append([k, node.feature.split(",")[7], node.feature.split(
            ",")[9], node.feature.split(",")[6], node.feature.split(",")[4]])
        node = node.next

    last = 0
    for i in range(len(data)-1, -1, -1):
        if data[i][0] != 0:
            last = i
            break

    ans = ""

    # if len(data[0]) <= 1:
    #    return "ﾁｮｯﾄﾅﾆｲｯﾃﾙｶﾜｶﾗﾅｲﾅｰ"
    for i in range(1, len(data)-1):
        if i != last:
            ans += data[i][2]
        else:
            ans += convert(data[i][3], data[i][1], data[i][0], data[i][-1])
            break

    res = jaconv.z2h(ans, digit=True, ascii=True)
    return res

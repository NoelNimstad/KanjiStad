// https://github.com/baerrach/wanikani_exporter

const vocabulary = 
[
    {
        "character": "二",
        "kana": "に",
        "meaning": "two",
        "level": 1
    },
    {
        "character": "入る",
        "kana": "はいる",
        "meaning": "to enter",
        "level": 1
    },
    {
        "character": "八",
        "kana": "はち",
        "meaning": "eight",
        "level": 1
    },
    {
        "character": "フランス人",
        "kana": "ふらんすじん, フランスじん",
        "meaning": "frenchman, french person",
        "level": 1
    },
    {
        "character": "十",
        "kana": "じゅう",
        "meaning": "ten",
        "level": 1
    },
    {
        "character": "下さい",
        "kana": "ください",
        "meaning": "please",
        "level": 1
    },
    {
        "character": "大きい",
        "kana": "おおきい",
        "meaning": "big, large",
        "level": 1
    },
    {
        "character": "上る",
        "kana": "のぼる",
        "meaning": "to climb",
        "level": 1
    },
    {
        "character": "大人",
        "kana": "おとな",
        "meaning": "adult",
        "level": 1
    },
    {
        "character": "三",
        "kana": "さん",
        "meaning": "three",
        "level": 1
    },
    {
        "character": "三つ",
        "kana": "みっつ",
        "meaning": "three things",
        "level": 1
    },
    {
        "character": "一",
        "kana": "いち",
        "meaning": "one",
        "level": 1
    },
    {
        "character": "上がる",
        "kana": "あがる",
        "meaning": "to rise",
        "level": 1
    },
    {
        "character": "下",
        "kana": "した",
        "meaning": "down, below, under, beneath",
        "level": 1
    },
    {
        "character": "九",
        "kana": "きゅう, く",
        "meaning": "nine",
        "level": 1
    },
    {
        "character": "二人",
        "kana": "ふたり",
        "meaning": "two people, pair, two persons",
        "level": 1
    },
    {
        "character": "二つ",
        "kana": "ふたつ",
        "meaning": "two things",
        "level": 1
    },
    {
        "character": "アメリカ人",
        "kana": "あめりかじん, アメリカじん",
        "meaning": "american, american person",
        "level": 1
    },
    {
        "character": "人",
        "kana": "ひと",
        "meaning": "person",
        "level": 1
    },
    {
        "character": "入れる",
        "kana": "いれる",
        "meaning": "to insert, to put in",
        "level": 1
    },
    {
        "character": "力",
        "kana": "ちから",
        "meaning": "power, strength",
        "level": 1
    },
    {
        "character": "人口",
        "kana": "じんこう",
        "meaning": "population",
        "level": 1
    },
    {
        "character": "入り口",
        "kana": "いりぐち",
        "meaning": "entrance",
        "level": 1
    },
    {
        "character": "大きさ",
        "kana": "おおきさ",
        "meaning": "size",
        "level": 1
    },
    {
        "character": "大した",
        "kana": "たいした",
        "meaning": "considerable, great, important, big deal",
        "level": 1
    },
    {
        "character": "女",
        "kana": "おんな",
        "meaning": "woman, female",
        "level": 1
    },
    {
        "character": "ふじ山",
        "kana": "ふじさん",
        "meaning": "mt fuji, mount fuji, mt. fuji",
        "level": 1
    },
    {
        "character": "川",
        "kana": "かわ",
        "meaning": "river",
        "level": 1
    },
    {
        "character": "七",
        "kana": "なな, しち",
        "meaning": "seven",
        "level": 1
    },
    {
        "character": "三人",
        "kana": "さんにん",
        "meaning": "three people",
        "level": 1
    },
    {
        "character": "山",
        "kana": "やま",
        "meaning": "mountain",
        "level": 1
    },
    {
        "character": "九つ",
        "kana": "ここのつ",
        "meaning": "nine things",
        "level": 1
    },
    {
        "character": "七つ",
        "kana": "ななつ",
        "meaning": "seven things",
        "level": 1
    },
    {
        "character": "一つ",
        "kana": "ひとつ",
        "meaning": "one thing",
        "level": 1
    },
    {
        "character": "上げる",
        "kana": "あげる",
        "meaning": "to raise, to raise something",
        "level": 1
    },
    {
        "character": "八つ",
        "kana": "やっつ",
        "meaning": "eight things",
        "level": 1
    },
    {
        "character": "口",
        "kana": "くち",
        "meaning": "mouth",
        "level": 1
    },
    {
        "character": "上",
        "kana": "うえ",
        "meaning": "up, above",
        "level": 1
    },
    {
        "character": "下がる",
        "kana": "さがる",
        "meaning": "to hang down, to hang",
        "level": 1
    },
    {
        "character": "下げる",
        "kana": "さげる",
        "meaning": "to hang, to lower, to hang something, to lower something",
        "level": 1
    },
    {
        "character": "一人",
        "kana": "ひとり",
        "meaning": "alone, one person",
        "level": 1
    },
    {
        "character": "六",
        "kana": "ろく",
        "meaning": "six",
        "level": 2
    },
    {
        "character": "石",
        "kana": "いし",
        "meaning": "stone",
        "level": 2
    },
    {
        "character": "五",
        "kana": "ご",
        "meaning": "five",
        "level": 2
    },
    {
        "character": "刀",
        "kana": "かたな",
        "meaning": "katana, sword",
        "level": 2
    },
    {
        "character": "五月",
        "kana": "ごがつ",
        "meaning": "may",
        "level": 2
    },
    {
        "character": "又",
        "kana": "また",
        "meaning": "again",
        "level": 2
    },
    {
        "character": "天才",
        "kana": "てんさい",
        "meaning": "genius",
        "level": 2
    },
    {
        "character": "女王",
        "kana": "じょおう",
        "meaning": "queen",
        "level": 2
    },
    {
        "character": "王",
        "kana": "おう",
        "meaning": "king",
        "level": 2
    },
    {
        "character": "目",
        "kana": "め",
        "meaning": "eye",
        "level": 2
    },
    {
        "character": "立つ",
        "kana": "たつ",
        "meaning": "to stand",
        "level": 2
    },
    {
        "character": "白",
        "kana": "しろ",
        "meaning": "white",
        "level": 2
    },
    {
        "character": "四十",
        "kana": "よんじゅう",
        "meaning": "forty",
        "level": 2
    },
    {
        "character": "左手",
        "kana": "ひだりて",
        "meaning": "left hand",
        "level": 2
    },
    {
        "character": "火",
        "kana": "ひ",
        "meaning": "fire",
        "level": 2
    },
    {
        "character": "犬",
        "kana": "いぬ",
        "meaning": "dog",
        "level": 2
    },
    {
        "character": "玉",
        "kana": "たま",
        "meaning": "ball",
        "level": 2
    },
    {
        "character": "四つ",
        "kana": "よっつ",
        "meaning": "four things",
        "level": 2
    },
    {
        "character": "一千",
        "kana": "いっせん",
        "meaning": "one thousand",
        "level": 2
    },
    {
        "character": "左",
        "kana": "ひだり",
        "meaning": "left direction, left",
        "level": 2
    },
    {
        "character": "手",
        "kana": "て",
        "meaning": "hand",
        "level": 2
    },
    {
        "character": "千",
        "kana": "せん",
        "meaning": "thousand",
        "level": 2
    },
    {
        "character": "十月",
        "kana": "じゅうがつ",
        "meaning": "october",
        "level": 2
    },
    {
        "character": "王子",
        "kana": "おうじ",
        "meaning": "prince",
        "level": 2
    },
    {
        "character": "二月",
        "kana": "にがつ",
        "meaning": "february",
        "level": 2
    },
    {
        "character": "千円",
        "kana": "せんえん",
        "meaning": "1000 yen, one thousand yen, a thousand yen, thousand yen",
        "level": 2
    },
    {
        "character": "六日",
        "kana": "むいか",
        "meaning": "sixth day, day six, six days",
        "level": 2
    },
    {
        "character": "目玉",
        "kana": "めだま",
        "meaning": "eyeball",
        "level": 2
    },
    {
        "character": "丸い",
        "kana": "まるい",
        "meaning": "circular, round, spherical",
        "level": 2
    },
    {
        "character": "中々",
        "kana": "なかなか",
        "meaning": "very, considerably, quite",
        "level": 2
    },
    {
        "character": "六月",
        "kana": "ろくがつ",
        "meaning": "june",
        "level": 2
    },
    {
        "character": "中",
        "kana": "なか",
        "meaning": "middle, in, inside, center",
        "level": 2
    },
    {
        "character": "丸",
        "kana": "まる",
        "meaning": "circle, round, circular",
        "level": 2
    },
    {
        "character": "五十",
        "kana": "ごじゅう",
        "meaning": "fifty",
        "level": 2
    },
    {
        "character": "六つ",
        "kana": "むっつ",
        "meaning": "six things",
        "level": 2
    },
    {
        "character": "十六",
        "kana": "じゅうろく",
        "meaning": "sixteen",
        "level": 2
    },
    {
        "character": "出す",
        "kana": "だす",
        "meaning": "to remove, to hand over, to take out, to reveal",
        "level": 2
    },
    {
        "character": "出口",
        "kana": "でぐち",
        "meaning": "exit",
        "level": 2
    },
    {
        "character": "四十二",
        "kana": "よんじゅうに",
        "meaning": "forty two, the answer",
        "level": 2
    },
    {
        "character": "子犬",
        "kana": "こいぬ",
        "meaning": "puppy",
        "level": 2
    },
    {
        "character": "出る",
        "kana": "でる",
        "meaning": "to exit, to leave",
        "level": 2
    },
    {
        "character": "右",
        "kana": "みぎ",
        "meaning": "right direction, right",
        "level": 2
    },
    {
        "character": "右手",
        "kana": "みぎて",
        "meaning": "right hand",
        "level": 2
    },
    {
        "character": "四",
        "kana": "し, よん",
        "meaning": "four",
        "level": 2
    },
    {
        "character": "四千",
        "kana": "よんせん",
        "meaning": "four thousand",
        "level": 2
    },
    {
        "character": "四月",
        "kana": "しがつ",
        "meaning": "april",
        "level": 2
    },
    {
        "character": "天",
        "kana": "てん",
        "meaning": "heaven",
        "level": 2
    },
    {
        "character": "女の子",
        "kana": "おんなのこ",
        "meaning": "young lady, young woman, young girl, girl",
        "level": 2
    },
    {
        "character": "上手",
        "kana": "じょうず",
        "meaning": "good at, skillful, skilled at, skilled",
        "level": 2
    },
    {
        "character": "下手",
        "kana": "へた",
        "meaning": "unskillful, unskilled, bad at, not good at, not skilled",
        "level": 2
    },
    {
        "character": "文",
        "kana": "ぶん",
        "meaning": "writing, sentence",
        "level": 2
    },
    {
        "character": "一月",
        "kana": "いちがつ",
        "meaning": "january",
        "level": 2
    },
    {
        "character": "才",
        "kana": "さい",
        "meaning": "years old, age",
        "level": 2
    },
    {
        "character": "月",
        "kana": "つき",
        "meaning": "moon, month",
        "level": 2
    },
    {
        "character": "木",
        "kana": "き",
        "meaning": "tree, wood",
        "level": 2
    },
    {
        "character": "日本",
        "kana": "にほん, にっぽん",
        "meaning": "japan",
        "level": 2
    },
    {
        "character": "本",
        "kana": "ほん",
        "meaning": "book, origin, real, main",
        "level": 2
    },
    {
        "character": "正す",
        "kana": "ただす",
        "meaning": "to correct",
        "level": 2
    },
    {
        "character": "水",
        "kana": "みず",
        "meaning": "water",
        "level": 2
    },
    {
        "character": "火山",
        "kana": "かざん",
        "meaning": "volcano",
        "level": 2
    },
    {
        "character": "玉ねぎ",
        "kana": "たまねぎ",
        "meaning": "onion, round onion",
        "level": 2
    },
    {
        "character": "田",
        "kana": "た",
        "meaning": "rice field, rice paddy",
        "level": 2
    },
    {
        "character": "白人",
        "kana": "はくじん",
        "meaning": "caucasian, white person, white people",
        "level": 2
    },
    {
        "character": "女子",
        "kana": "じょし",
        "meaning": "girl",
        "level": 2
    },
    {
        "character": "ビー玉",
        "kana": "びーだま, ビーだま",
        "meaning": "marble",
        "level": 2
    },
    {
        "character": "夕べ",
        "kana": "ゆうべ",
        "meaning": "evening, last night",
        "level": 2
    },
    {
        "character": "日",
        "kana": "ひ",
        "meaning": "sun, day",
        "level": 2
    },
    {
        "character": "円",
        "kana": "えん",
        "meaning": "money, yen",
        "level": 2
    },
    {
        "character": "王女",
        "kana": "おうじょ",
        "meaning": "princess",
        "level": 2
    },
    {
        "character": "土",
        "kana": "つち",
        "meaning": "soil, earth, ground, dirt",
        "level": 2
    },
    {
        "character": "五つ",
        "kana": "いつつ",
        "meaning": "five things",
        "level": 2
    },
    {
        "character": "五日",
        "kana": "いつか",
        "meaning": "fifth day, day five, five days",
        "level": 2
    },
    {
        "character": "四日",
        "kana": "よっか",
        "meaning": "fourth day, day four, four days",
        "level": 2
    },
    {
        "character": "立てる",
        "kana": "たてる",
        "meaning": "to stand up, to stand something up, to erect, to erect something",
        "level": 2
    },
    {
        "character": "円い",
        "kana": "まるい",
        "meaning": "round, circular",
        "level": 2
    },
    {
        "character": "子",
        "kana": "こ",
        "meaning": "kid, child",
        "level": 2
    },
    {
        "character": "小さい",
        "kana": "ちいさい",
        "meaning": "small, little",
        "level": 2
    },
    {
        "character": "正しい",
        "kana": "ただしい",
        "meaning": "correct, true",
        "level": 2
    },
    {
        "character": "川口",
        "kana": "かわぐち",
        "meaning": "river mouth, estuary",
        "level": 2
    },
    {
        "character": "矢",
        "kana": "や",
        "meaning": "arrow",
        "level": 3
    },
    {
        "character": "半分",
        "kana": "はんぶん",
        "meaning": "half",
        "level": 3
    },
    {
        "character": "友人",
        "kana": "ゆうじん",
        "meaning": "friend",
        "level": 3
    },
    {
        "character": "広い",
        "kana": "ひろい",
        "meaning": "wide",
        "level": 3
    },
    {
        "character": "方",
        "kana": "かた, ほう",
        "meaning": "way, direction",
        "level": 3
    },
    {
        "character": "五台",
        "kana": "ごだい",
        "meaning": "five machines",
        "level": 3
    },
    {
        "character": "公用",
        "kana": "こうよう",
        "meaning": "government business, official business",
        "level": 3
    },
    {
        "character": "戸口",
        "kana": "とぐち",
        "meaning": "doorway",
        "level": 3
    },
    {
        "character": "元",
        "kana": "もと",
        "meaning": "origin",
        "level": 3
    },
    {
        "character": "分",
        "kana": "ぶん, ふん",
        "meaning": "minute, part",
        "level": 3
    },
    {
        "character": "市",
        "kana": "し",
        "meaning": "city",
        "level": 3
    },
    {
        "character": "牛",
        "kana": "うし",
        "meaning": "cow",
        "level": 3
    },
    {
        "character": "今",
        "kana": "いま",
        "meaning": "now",
        "level": 3
    },
    {
        "character": "冬",
        "kana": "ふゆ",
        "meaning": "winter",
        "level": 3
    },
    {
        "character": "外",
        "kana": "そと",
        "meaning": "outside",
        "level": 3
    },
    {
        "character": "一台",
        "kana": "いちだい",
        "meaning": "one machine",
        "level": 3
    },
    {
        "character": "外人",
        "kana": "がいじん",
        "meaning": "foreigner, outsider",
        "level": 3
    },
    {
        "character": "十万",
        "kana": "じゅうまん",
        "meaning": "one hundred thousand, hundred thousand, a hundred thousand",
        "level": 3
    },
    {
        "character": "〜人",
        "kana": "にん",
        "meaning": "number of people, people, people counter",
        "level": 3
    },
    {
        "character": "母",
        "kana": "はは",
        "meaning": "mom, mum, ma",
        "level": 3
    },
    {
        "character": "生",
        "kana": "なま",
        "meaning": "fresh, raw",
        "level": 3
    },
    {
        "character": "一万",
        "kana": "いちまん",
        "meaning": "ten thousand",
        "level": 3
    },
    {
        "character": "少ない",
        "kana": "すくない",
        "meaning": "a few, few, scarce",
        "level": 3
    },
    {
        "character": "人生",
        "kana": "じんせい",
        "meaning": "one's life, human life",
        "level": 3
    },
    {
        "character": "久しい",
        "kana": "ひさしい",
        "meaning": "long time",
        "level": 3
    },
    {
        "character": "今日",
        "kana": "きょう",
        "meaning": "today",
        "level": 3
    },
    {
        "character": "兄",
        "kana": "あに",
        "meaning": "older brother, big brother, elder brother",
        "level": 3
    },
    {
        "character": "分かる",
        "kana": "わかる",
        "meaning": "to understand",
        "level": 3
    },
    {
        "character": "中古",
        "kana": "ちゅうこ",
        "meaning": "second hand, used, secondhand",
        "level": 3
    },
    {
        "character": "古い",
        "kana": "ふるい",
        "meaning": "old",
        "level": 3
    },
    {
        "character": "太い",
        "kana": "ふとい",
        "meaning": "fat",
        "level": 3
    },
    {
        "character": "少し",
        "kana": "すこし",
        "meaning": "a little, a few, few",
        "level": 3
    },
    {
        "character": "シアトル市",
        "kana": "しあとるし, シアトルし",
        "meaning": "seattle, city of seattle",
        "level": 3
    },
    {
        "character": "止める",
        "kana": "とめる",
        "meaning": "to stop something, to stop",
        "level": 3
    },
    {
        "character": "お母さん",
        "kana": "おかあさん",
        "meaning": "mother",
        "level": 3
    },
    {
        "character": "毛",
        "kana": "け",
        "meaning": "fur, hair",
        "level": 3
    },
    {
        "character": "父",
        "kana": "ちち",
        "meaning": "dad, pa, papa",
        "level": 3
    },
    {
        "character": "二万",
        "kana": "にまん",
        "meaning": "twenty thousand",
        "level": 3
    },
    {
        "character": "北",
        "kana": "きた",
        "meaning": "north",
        "level": 3
    },
    {
        "character": "十台",
        "kana": "じゅうだい",
        "meaning": "ten machines",
        "level": 3
    },
    {
        "character": "二台",
        "kana": "にだい",
        "meaning": "two machines",
        "level": 3
    },
    {
        "character": "生まれる",
        "kana": "うまれる",
        "meaning": "to be born",
        "level": 3
    },
    {
        "character": "今月",
        "kana": "こんげつ",
        "meaning": "this month, current month",
        "level": 3
    },
    {
        "character": "半",
        "kana": "はん",
        "meaning": "half",
        "level": 3
    },
    {
        "character": "生きる",
        "kana": "いきる",
        "meaning": "to live, to be alive, to exist",
        "level": 3
    },
    {
        "character": "中止",
        "kana": "ちゅうし",
        "meaning": "suspension, stoppage, discontinuance, interruption",
        "level": 3
    },
    {
        "character": "市立",
        "kana": "しりつ",
        "meaning": "municipal, city",
        "level": 3
    },
    {
        "character": "お兄さん",
        "kana": "おにいさん",
        "meaning": "older brother, big brother, elder brother",
        "level": 3
    },
    {
        "character": "久しぶり",
        "kana": "ひさしぶり",
        "meaning": "long time no see",
        "level": 3
    },
    {
        "character": "太る",
        "kana": "ふとる",
        "meaning": "to get fat, to become fat, to grow fat",
        "level": 3
    },
    {
        "character": "心",
        "kana": "こころ",
        "meaning": "heart",
        "level": 3
    },
    {
        "character": "お父さん",
        "kana": "おとうさん",
        "meaning": "father",
        "level": 3
    },
    {
        "character": "用いる",
        "kana": "もちいる",
        "meaning": "to utilize, to use, to utilise",
        "level": 3
    },
    {
        "character": "大切",
        "kana": "たいせつ",
        "meaning": "important, precious, valuable",
        "level": 3
    },
    {
        "character": "切る",
        "kana": "きる",
        "meaning": "to cut",
        "level": 3
    },
    {
        "character": "生む",
        "kana": "うむ",
        "meaning": "to give birth",
        "level": 3
    },
    {
        "character": "分ける",
        "kana": "わける",
        "meaning": "to separate, to divide, to part, to split",
        "level": 3
    },
    {
        "character": "切れる",
        "kana": "きれる",
        "meaning": "to be cut",
        "level": 3
    },
    {
        "character": "引く",
        "kana": "ひく",
        "meaning": "to pull",
        "level": 3
    },
    {
        "character": "止まる",
        "kana": "とまる",
        "meaning": "to stop",
        "level": 3
    },
    {
        "character": "〜台",
        "kana": "だい",
        "meaning": "big machine, big device, machine, device",
        "level": 3
    },
    {
        "character": "外れ",
        "kana": "はずれ",
        "meaning": "extremity, furthest point, end, outskirts, outer limits, edge, miss, failure",
        "level": 3
    },
    {
        "character": "外れる",
        "kana": "はずれる",
        "meaning": "to be disconnected, to come off, to be out, to be off",
        "level": 3
    },
    {
        "character": "内",
        "kana": "うち",
        "meaning": "inside, within",
        "level": 3
    },
    {
        "character": "他人",
        "kana": "たにん",
        "meaning": "another person, other people, stranger",
        "level": 4
    },
    {
        "character": "気",
        "kana": "き",
        "meaning": "spirit, energy",
        "level": 4
    },
    {
        "character": "耳",
        "kana": "みみ",
        "meaning": "ear",
        "level": 4
    },
    {
        "character": "虫",
        "kana": "むし",
        "meaning": "bug, insect",
        "level": 4
    },
    {
        "character": "赤",
        "kana": "あか",
        "meaning": "red",
        "level": 4
    },
    {
        "character": "平気",
        "kana": "へいき",
        "meaning": "calm, cool",
        "level": 4
    },
    {
        "character": "足",
        "kana": "あし",
        "meaning": "foot, leg",
        "level": 4
    },
    {
        "character": "元気",
        "kana": "げんき",
        "meaning": "energy, spirit, health",
        "level": 4
    },
    {
        "character": "早い",
        "kana": "はやい",
        "meaning": "early, fast, quick",
        "level": 4
    },
    {
        "character": "五百",
        "kana": "ごひゃく",
        "meaning": "five hundred",
        "level": 4
    },
    {
        "character": "竹の子",
        "kana": "たけのこ",
        "meaning": "bamboo shoots, bamboo sprouts",
        "level": 4
    },
    {
        "character": "花",
        "kana": "はな",
        "meaning": "flower",
        "level": 4
    },
    {
        "character": "花見",
        "kana": "はなみ",
        "meaning": "viewing cherry blossoms, sakura viewing, cherry blossom viewing",
        "level": 4
    },
    {
        "character": "名人",
        "kana": "めいじん",
        "meaning": "master, expert",
        "level": 4
    },
    {
        "character": "年",
        "kana": "とし",
        "meaning": "year",
        "level": 4
    },
    {
        "character": "月見",
        "kana": "つきみ",
        "meaning": "moon viewing",
        "level": 4
    },
    {
        "character": "号",
        "kana": "ごう",
        "meaning": "number, edition, model",
        "level": 4
    },
    {
        "character": "人気",
        "kana": "にんき",
        "meaning": "popular",
        "level": 4
    },
    {
        "character": "町",
        "kana": "まち",
        "meaning": "town",
        "level": 4
    },
    {
        "character": "お礼",
        "kana": "おれい",
        "meaning": "thanks, gratitude",
        "level": 4
    },
    {
        "character": "糸",
        "kana": "いと",
        "meaning": "thread",
        "level": 4
    },
    {
        "character": "見せる",
        "kana": "みせる",
        "meaning": "to show",
        "level": 4
    },
    {
        "character": "村",
        "kana": "むら",
        "meaning": "village, rural town",
        "level": 4
    },
    {
        "character": "天気",
        "kana": "てんき",
        "meaning": "weather",
        "level": 4
    },
    {
        "character": "かき氷",
        "kana": "かきごおり",
        "meaning": "shaved ice",
        "level": 4
    },
    {
        "character": "他",
        "kana": "ほか",
        "meaning": "other",
        "level": 4
    },
    {
        "character": "仕方",
        "kana": "しかた",
        "meaning": "method, way, way of doing",
        "level": 4
    },
    {
        "character": "申し申し",
        "kana": "もうしもうし, もしもし",
        "meaning": "telephone hello, hello, hello on telephone",
        "level": 4
    },
    {
        "character": "貝",
        "kana": "かい",
        "meaning": "shell, shellfish, clam",
        "level": 4
    },
    {
        "character": "先日",
        "kana": "せんじつ",
        "meaning": "the other day, a few days ago, other day",
        "level": 4
    },
    {
        "character": "先月",
        "kana": "せんげつ",
        "meaning": "last month, previous month",
        "level": 4
    },
    {
        "character": "不正",
        "kana": "ふせい",
        "meaning": "injustice, unfairness",
        "level": 4
    },
    {
        "character": "三世",
        "kana": "さんせい",
        "meaning": "third generation",
        "level": 4
    },
    {
        "character": "世",
        "kana": "よ",
        "meaning": "world, society",
        "level": 4
    },
    {
        "character": "一代",
        "kana": "いちだい",
        "meaning": "one lifetime",
        "level": 4
    },
    {
        "character": "代わる",
        "kana": "かわる",
        "meaning": "to replace, to substitute for, to substitute, to be replaced, to be substituted, to be substituted for",
        "level": 4
    },
    {
        "character": "休み",
        "kana": "やすみ",
        "meaning": "rest, break, vacation, holiday",
        "level": 4
    },
    {
        "character": "先々月",
        "kana": "せんせんげつ",
        "meaning": "month before last, the month before last",
        "level": 4
    },
    {
        "character": "先年",
        "kana": "せんねん",
        "meaning": "former years, formerly, a few years ago, previous years, past years, prior years",
        "level": 4
    },
    {
        "character": "先生",
        "kana": "せんせい",
        "meaning": "teacher, master, doctor",
        "level": 4
    },
    {
        "character": "気分",
        "kana": "きぶん",
        "meaning": "feeling, mood",
        "level": 4
    },
    {
        "character": "去年",
        "kana": "きょねん",
        "meaning": "last year",
        "level": 4
    },
    {
        "character": "一文字",
        "kana": "いちもんじ, いちもじ",
        "meaning": "straight line",
        "level": 4
    },
    {
        "character": "一年生",
        "kana": "いちねんせい",
        "meaning": "first year student",
        "level": 4
    },
    {
        "character": "二百",
        "kana": "にひゃく",
        "meaning": "two hundred",
        "level": 4
    },
    {
        "character": "年中",
        "kana": "ねんじゅう",
        "meaning": "year round, all year, whole year, throughout the year, all year round",
        "level": 4
    },
    {
        "character": "年内",
        "kana": "ねんない",
        "meaning": "within a year, within the year",
        "level": 4
    },
    {
        "character": "一打",
        "kana": "いちだ",
        "meaning": "strike, stroke, blow",
        "level": 4
    },
    {
        "character": "打つ",
        "kana": "うつ",
        "meaning": "to hit, to pound, to type",
        "level": 4
    },
    {
        "character": "一気",
        "kana": "いっき",
        "meaning": "one breath, one go, one sitting",
        "level": 4
    },
    {
        "character": "氷",
        "kana": "こおり",
        "meaning": "ice",
        "level": 4
    },
    {
        "character": "男",
        "kana": "おとこ",
        "meaning": "man",
        "level": 4
    },
    {
        "character": "小皿",
        "kana": "こざら",
        "meaning": "small plate, small dish, little plate, little dish",
        "level": 4
    },
    {
        "character": "皿",
        "kana": "さら",
        "meaning": "plate, dish",
        "level": 4
    },
    {
        "character": "見方",
        "kana": "みかた",
        "meaning": "way of seeing, point of view, perspective, viewpoint",
        "level": 4
    },
    {
        "character": "花火",
        "kana": "はなび",
        "meaning": "fireworks",
        "level": 4
    },
    {
        "character": "見える",
        "kana": "みえる",
        "meaning": "can see, visible, to be visible, to be able to see, able to see",
        "level": 4
    },
    {
        "character": "足りる",
        "kana": "たりる",
        "meaning": "to be enough, to be sufficient, to suffice",
        "level": 4
    },
    {
        "character": "車",
        "kana": "くるま",
        "meaning": "car",
        "level": 4
    },
    {
        "character": "四百",
        "kana": "よんひゃく",
        "meaning": "four hundred",
        "level": 4
    },
    {
        "character": "皮",
        "kana": "かわ",
        "meaning": "skin, hide",
        "level": 4
    },
    {
        "character": "子牛",
        "kana": "こうし",
        "meaning": "calf, baby cow",
        "level": 4
    },
    {
        "character": "引き分け",
        "kana": "ひきわけ",
        "meaning": "tie, draw",
        "level": 4
    },
    {
        "character": "竹",
        "kana": "たけ",
        "meaning": "bamboo",
        "level": 4
    },
    {
        "character": "休日",
        "kana": "きゅうじつ",
        "meaning": "holiday",
        "level": 4
    },
    {
        "character": "主に",
        "kana": "おもに",
        "meaning": "mainly, primarily",
        "level": 4
    },
    {
        "character": "平日",
        "kana": "へいじつ",
        "meaning": "weekdays",
        "level": 4
    },
    {
        "character": "二世",
        "kana": "にせい",
        "meaning": "second generation",
        "level": 4
    },
    {
        "character": "写す",
        "kana": "うつす",
        "meaning": "to copy",
        "level": 4
    },
    {
        "character": "村人",
        "kana": "むらびと",
        "meaning": "villager",
        "level": 4
    },
    {
        "character": "百万",
        "kana": "ひゃくまん",
        "meaning": "million, one million, a million",
        "level": 4
    },
    {
        "character": "先ず",
        "kana": "まず",
        "meaning": "first of all, to start with, firstly, to begin with",
        "level": 4
    },
    {
        "character": "代用",
        "kana": "だいよう",
        "meaning": "substitution",
        "level": 4
    },
    {
        "character": "少年",
        "kana": "しょうねん",
        "meaning": "young boy, juvenile, youth, boy",
        "level": 4
    },
    {
        "character": "主人",
        "kana": "しゅじん",
        "meaning": "head of household, husband, head of a household, head of the household, landlord, master",
        "level": 4
    },
    {
        "character": "不足",
        "kana": "ふそく",
        "meaning": "shortage, physical shortage, insufficient, not sufficient, not enough",
        "level": 4
    },
    {
        "character": "２０１１年",
        "kana": "にせんじゅういちねん",
        "meaning": "year 2011, 2011, the year 2011",
        "level": 4
    },
    {
        "character": "字",
        "kana": "じ",
        "meaning": "character, kanji character, letter, symbol",
        "level": 4
    },
    {
        "character": "休止",
        "kana": "きゅうし",
        "meaning": "pause, rest, break",
        "level": 4
    },
    {
        "character": "太字",
        "kana": "ふとじ",
        "meaning": "bold letter, bold, bold character, bold text, boldface",
        "level": 4
    },
    {
        "character": "休む",
        "kana": "やすむ",
        "meaning": "to rest",
        "level": 4
    },
    {
        "character": "大文字",
        "kana": "おおもじ",
        "meaning": "capital letters, uppercase letters, capital letter, uppercase letter, uppercase, capital",
        "level": 4
    },
    {
        "character": "申す",
        "kana": "もうす",
        "meaning": "to say humbly, to say, to humbly say",
        "level": 4
    },
    {
        "character": "先",
        "kana": "さき",
        "meaning": "previous, ahead, past, former",
        "level": 4
    },
    {
        "character": "名字",
        "kana": "みょうじ",
        "meaning": "surname, last name, family name",
        "level": 4
    },
    {
        "character": "中央",
        "kana": "ちゅうおう",
        "meaning": "center, central, centre",
        "level": 4
    },
    {
        "character": "平ら",
        "kana": "たいら",
        "meaning": "flat",
        "level": 4
    },
    {
        "character": "早々",
        "kana": "そうそう",
        "meaning": "as soon as, just after, immediately after",
        "level": 4
    },
    {
        "character": "一本気",
        "kana": "いっぽんぎ",
        "meaning": "one track mind, single mindedness",
        "level": 4
    },
    {
        "character": "本気",
        "kana": "ほんき",
        "meaning": "serious",
        "level": 4
    },
    {
        "character": "気に入る",
        "kana": "きにいる",
        "meaning": "to be pleased with, to be satisfied with, to be happy with, to be pleased, to be satisfied, to be happy",
        "level": 4
    },
    {
        "character": "耳打ち",
        "kana": "みみうち",
        "meaning": "whisper in ear, whisper in one's ear, whisper in someone's ear",
        "level": 4
    },
    {
        "character": "車内",
        "kana": "しゃない",
        "meaning": "inside the car, in the car, in a car, inside a car, within the car, within a car",
        "level": 4
    },
    {
        "character": "見る",
        "kana": "みる",
        "meaning": "to see, to look",
        "level": 4
    },
    {
        "character": "写る",
        "kana": "うつる",
        "meaning": "to be photographed",
        "level": 4
    },
    {
        "character": "切手",
        "kana": "きって",
        "meaning": "postage stamp, stamp",
        "level": 4
    },
    {
        "character": "名",
        "kana": "な",
        "meaning": "name, reputation",
        "level": 4
    },
    {
        "character": "見分ける",
        "kana": "みわける",
        "meaning": "to distinguish, to tell apart, to differentiate",
        "level": 4
    },
    {
        "character": "文字",
        "kana": "もじ",
        "meaning": "letter (of the alphabet), character, letters, characters, letter",
        "level": 4
    },
    {
        "character": "赤ちゃん",
        "kana": "あかちゃん",
        "meaning": "baby",
        "level": 4
    },
    {
        "character": "今回",
        "kana": "こんかい",
        "meaning": "this time",
        "level": 5
    },
    {
        "character": "大学",
        "kana": "だいがく",
        "meaning": "university, college",
        "level": 5
    },
    {
        "character": "池",
        "kana": "いけ",
        "meaning": "pond",
        "level": 5
    },
    {
        "character": "色",
        "kana": "いろ",
        "meaning": "color, colour",
        "level": 5
    },
    {
        "character": "学生",
        "kana": "がくせい",
        "meaning": "student",
        "level": 5
    },
    {
        "character": "肉",
        "kana": "にく",
        "meaning": "meat",
        "level": 5
    },
    {
        "character": "来る",
        "kana": "くる",
        "meaning": "to come",
        "level": 5
    },
    {
        "character": "草",
        "kana": "くさ",
        "meaning": "grass",
        "level": 5
    },
    {
        "character": "外来",
        "kana": "がいらい",
        "meaning": "imported, foreign",
        "level": 5
    },
    {
        "character": "雨",
        "kana": "あめ",
        "meaning": "rain",
        "level": 5
    },
    {
        "character": "近年",
        "kana": "きんねん",
        "meaning": "recent years",
        "level": 5
    },
    {
        "character": "空気",
        "kana": "くうき",
        "meaning": "atmosphere, air",
        "level": 5
    },
    {
        "character": "北西",
        "kana": "ほくせい",
        "meaning": "northwest",
        "level": 5
    },
    {
        "character": "谷",
        "kana": "たに",
        "meaning": "valley",
        "level": 5
    },
    {
        "character": "今まで",
        "kana": "いままで",
        "meaning": "until now, up to now, so far",
        "level": 5
    },
    {
        "character": "何年",
        "kana": "なんねん",
        "meaning": "what year, how many years",
        "level": 5
    },
    {
        "character": "声",
        "kana": "こえ",
        "meaning": "voice",
        "level": 5
    },
    {
        "character": "何",
        "kana": "なに, なん",
        "meaning": "what",
        "level": 5
    },
    {
        "character": "毛糸",
        "kana": "けいと",
        "meaning": "wool yarn, yarn",
        "level": 5
    },
    {
        "character": "作文",
        "kana": "さくぶん",
        "meaning": "composition, writing, essay",
        "level": 5
    },
    {
        "character": "来月",
        "kana": "らいげつ",
        "meaning": "next month",
        "level": 5
    },
    {
        "character": "来年",
        "kana": "らいねん",
        "meaning": "next year",
        "level": 5
    },
    {
        "character": "回",
        "kana": "かい",
        "meaning": "times, number of times, time",
        "level": 5
    },
    {
        "character": "工学",
        "kana": "こうがく",
        "meaning": "engineering",
        "level": 5
    },
    {
        "character": "毎日",
        "kana": "まいにち",
        "meaning": "every day, daily",
        "level": 5
    },
    {
        "character": "売り上げ",
        "kana": "うりあげ",
        "meaning": "amount sold, sales",
        "level": 5
    },
    {
        "character": "金玉",
        "kana": "きんたま",
        "meaning": "testicles",
        "level": 5
    },
    {
        "character": "近日",
        "kana": "きんじつ",
        "meaning": "soon, in a few days, coming days",
        "level": 5
    },
    {
        "character": "一回",
        "kana": "いっかい",
        "meaning": "one time, once",
        "level": 5
    },
    {
        "character": "麦",
        "kana": "むぎ",
        "meaning": "wheat, barley, oats",
        "level": 5
    },
    {
        "character": "売る",
        "kana": "うる",
        "meaning": "to sell",
        "level": 5
    },
    {
        "character": "体内",
        "kana": "たいない",
        "meaning": "internal, within the body, inside the body",
        "level": 5
    },
    {
        "character": "毎月",
        "kana": "まいげつ, まいつき",
        "meaning": "every month, monthly",
        "level": 5
    },
    {
        "character": "音",
        "kana": "おと",
        "meaning": "sound",
        "level": 5
    },
    {
        "character": "金",
        "kana": "きん, かね",
        "meaning": "gold",
        "level": 5
    },
    {
        "character": "会社",
        "kana": "かいしゃ",
        "meaning": "company, corporation, the office",
        "level": 5
    },
    {
        "character": "大声",
        "kana": "おおごえ",
        "meaning": "large voice, loud voice, big voice",
        "level": 5
    },
    {
        "character": "里心",
        "kana": "さとごころ",
        "meaning": "homesick, homesickness",
        "level": 5
    },
    {
        "character": "自分",
        "kana": "じぶん",
        "meaning": "oneself, myself, self",
        "level": 5
    },
    {
        "character": "本当",
        "kana": "ほんとう",
        "meaning": "reality, truth",
        "level": 5
    },
    {
        "character": "ハート形",
        "kana": "ハートがた, はーとがた",
        "meaning": "heart shaped",
        "level": 5
    },
    {
        "character": "社内",
        "kana": "しゃない",
        "meaning": "within the company, in house, inside the company, inside a company, in the company, within a company",
        "level": 5
    },
    {
        "character": "万人",
        "kana": "ばんにん",
        "meaning": "all people, everybody",
        "level": 5
    },
    {
        "character": "入学",
        "kana": "にゅうがく",
        "meaning": "school admission, entry into school, admission into school, school entry, entering a school",
        "level": 5
    },
    {
        "character": "学年",
        "kana": "がくねん",
        "meaning": "school grade, grade in school, school year, year in school",
        "level": 5
    },
    {
        "character": "空車",
        "kana": "くうしゃ",
        "meaning": "open taxi, free taxi, open cab, free cab, available taxi, vacant taxi, available cab, vacant cab",
        "level": 5
    },
    {
        "character": "本社",
        "kana": "ほんしゃ",
        "meaning": "headquarters, hq, head office, company headquarters",
        "level": 5
    },
    {
        "character": "羽",
        "kana": "はね",
        "meaning": "feathers, feather, wing, wings",
        "level": 5
    },
    {
        "character": "今すぐ",
        "kana": "いますぐ",
        "meaning": "at once, right now, immediately, right away",
        "level": 5
    },
    {
        "character": "男の人",
        "kana": "おとこのひと",
        "meaning": "man",
        "level": 5
    },
    {
        "character": "大会",
        "kana": "たいかい",
        "meaning": "convention, tournament, meetup, event",
        "level": 5
    },
    {
        "character": "体力",
        "kana": "たいりょく",
        "meaning": "physical strength, physical power",
        "level": 5
    },
    {
        "character": "何人",
        "kana": "なんにん",
        "meaning": "how many people",
        "level": 5
    },
    {
        "character": "何回",
        "kana": "なんかい",
        "meaning": "how many times",
        "level": 5
    },
    {
        "character": "何日",
        "kana": "なんにち",
        "meaning": "how many days, what day, which day",
        "level": 5
    },
    {
        "character": "何月",
        "kana": "なんがつ",
        "meaning": "what month, which month",
        "level": 5
    },
    {
        "character": "光",
        "kana": "ひかり",
        "meaning": "light, sunlight",
        "level": 5
    },
    {
        "character": "日光",
        "kana": "にっこう",
        "meaning": "sunlight",
        "level": 5
    },
    {
        "character": "同日",
        "kana": "どうじつ",
        "meaning": "same day, the same day",
        "level": 5
    },
    {
        "character": "図",
        "kana": "ず",
        "meaning": "diagram",
        "level": 5
    },
    {
        "character": "月光",
        "kana": "げっこう",
        "meaning": "moonlight, moonbeam",
        "level": 5
    },
    {
        "character": "光年",
        "kana": "こうねん",
        "meaning": "light year",
        "level": 5
    },
    {
        "character": "何千",
        "kana": "なんぜん",
        "meaning": "thousands",
        "level": 5
    },
    {
        "character": "冬休み",
        "kana": "ふゆやすみ",
        "meaning": "winter holiday, winter break, winter vacation",
        "level": 5
    },
    {
        "character": "林",
        "kana": "はやし",
        "meaning": "forest, woods",
        "level": 5
    },
    {
        "character": "体",
        "kana": "からだ",
        "meaning": "body",
        "level": 5
    },
    {
        "character": "回る",
        "kana": "まわる",
        "meaning": "to revolve, to go around, to rotate",
        "level": 5
    },
    {
        "character": "交ぜる",
        "kana": "まぜる",
        "meaning": "to mix, to mix something",
        "level": 5
    },
    {
        "character": "会う",
        "kana": "あう",
        "meaning": "to meet, to encounter",
        "level": 5
    },
    {
        "character": "作る",
        "kana": "つくる",
        "meaning": "to make, to build, to create",
        "level": 5
    },
    {
        "character": "作用",
        "kana": "さよう",
        "meaning": "action, effect, operation",
        "level": 5
    },
    {
        "character": "工作",
        "kana": "こうさく",
        "meaning": "construction",
        "level": 5
    },
    {
        "character": "売り切れ",
        "kana": "うりきれ",
        "meaning": "sold out, out of stock",
        "level": 5
    },
    {
        "character": "売り手",
        "kana": "うりて",
        "meaning": "seller, vendor",
        "level": 5
    },
    {
        "character": "多い",
        "kana": "おおい",
        "meaning": "many, much, lots of",
        "level": 5
    },
    {
        "character": "多分",
        "kana": "たぶん",
        "meaning": "maybe, perhaps, probably",
        "level": 5
    },
    {
        "character": "小文字",
        "kana": "こもじ",
        "meaning": "lowercase letter, lowercase character, lowercase, lowercase letters, lowercase characters",
        "level": 5
    },
    {
        "character": "学ぶ",
        "kana": "まなぶ",
        "meaning": "to learn, to study in depth, to study",
        "level": 5
    },
    {
        "character": "兄弟",
        "kana": "きょうだい",
        "meaning": "siblings, brothers and sisters",
        "level": 5
    },
    {
        "character": "弟",
        "kana": "おとうと",
        "meaning": "younger brother, little brother",
        "level": 5
    },
    {
        "character": "当たる",
        "kana": "あたる",
        "meaning": "to be on target, to hit, to touch, to guess correctly, to guess right, to be right, to hit the target",
        "level": 5
    },
    {
        "character": "形",
        "kana": "かたち",
        "meaning": "shape, appearance, form",
        "level": 5
    },
    {
        "character": "古来",
        "kana": "こらい",
        "meaning": "ancient",
        "level": 5
    },
    {
        "character": "年来",
        "kana": "ねんらい",
        "meaning": "for some years, for years, longstanding",
        "level": 5
    },
    {
        "character": "毎回",
        "kana": "まいかい",
        "meaning": "every time, each time",
        "level": 5
    },
    {
        "character": "毎年",
        "kana": "まいとし, まいねん",
        "meaning": "every year, yearly, annually, each year",
        "level": 5
    },
    {
        "character": "男の子",
        "kana": "おとこのこ",
        "meaning": "boy",
        "level": 5
    },
    {
        "character": "下町",
        "kana": "したまち",
        "meaning": "downtown",
        "level": 5
    },
    {
        "character": "入社",
        "kana": "にゅうしゃ",
        "meaning": "joining a company, joining the company",
        "level": 5
    },
    {
        "character": "公社",
        "kana": "こうしゃ",
        "meaning": "public corporation, public company",
        "level": 5
    },
    {
        "character": "空",
        "kana": "そら",
        "meaning": "sky",
        "level": 5
    },
    {
        "character": "毛虫",
        "kana": "けむし",
        "meaning": "caterpillar",
        "level": 5
    },
    {
        "character": "米",
        "kana": "こめ",
        "meaning": "rice",
        "level": 5
    },
    {
        "character": "考え",
        "kana": "かんがえ",
        "meaning": "thought, a thought",
        "level": 5
    },
    {
        "character": "考える",
        "kana": "かんがえる",
        "meaning": "to think about, to consider, to give thought",
        "level": 5
    },
    {
        "character": "考え方",
        "kana": "かんがえかた",
        "meaning": "way of thinking, thought process",
        "level": 5
    },
    {
        "character": "牛肉",
        "kana": "ぎゅうにく",
        "meaning": "beef",
        "level": 5
    },
    {
        "character": "皮肉",
        "kana": "ひにく",
        "meaning": "irony, sarcasm",
        "level": 5
    },
    {
        "character": "自立",
        "kana": "じりつ",
        "meaning": "independence",
        "level": 5
    },
    {
        "character": "水色",
        "kana": "みずいろ",
        "meaning": "sky blue, light blue, light blue color, light blue colour, sky blue color, sky blue colour",
        "level": 5
    },
    {
        "character": "色々",
        "kana": "いろいろ",
        "meaning": "various",
        "level": 5
    },
    {
        "character": "行き",
        "kana": "ゆき, いき",
        "meaning": "train direction, bound for",
        "level": 5
    },
    {
        "character": "行く",
        "kana": "いく",
        "meaning": "to go",
        "level": 5
    },
    {
        "character": "西",
        "kana": "にし",
        "meaning": "west",
        "level": 5
    },
    {
        "character": "三角",
        "kana": "さんかく",
        "meaning": "triangle",
        "level": 5
    },
    {
        "character": "四角",
        "kana": "しかく",
        "meaning": "square",
        "level": 5
    },
    {
        "character": "角",
        "kana": "かく, かど",
        "meaning": "angle, corner",
        "level": 5
    },
    {
        "character": "言う",
        "kana": "いう",
        "meaning": "to say",
        "level": 5
    },
    {
        "character": "走行",
        "kana": "そうこう",
        "meaning": "traveling, travelling",
        "level": 5
    },
    {
        "character": "近い",
        "kana": "ちかい",
        "meaning": "close, nearby, near",
        "level": 5
    },
    {
        "character": "里",
        "kana": "さと",
        "meaning": "home village, village, one's parents' home, home town, hometown",
        "level": 5
    },
    {
        "character": "お金",
        "kana": "おかね",
        "meaning": "money",
        "level": 5
    },
    {
        "character": "青い",
        "kana": "あおい",
        "meaning": "blue, unripe",
        "level": 5
    },
    {
        "character": "青年",
        "kana": "せいねん",
        "meaning": "youth, young man",
        "level": 5
    },
    {
        "character": "行う",
        "kana": "おこなう",
        "meaning": "to carry out a task, to carry out, to perform, to perform a task, to do a task",
        "level": 5
    },
    {
        "character": "大作",
        "kana": "たいさく",
        "meaning": "an epic, epic, epic saga, masterpiece, masterwork, magnum opus",
        "level": 5
    },
    {
        "character": "走る",
        "kana": "はしる",
        "meaning": "to run",
        "level": 5
    },
    {
        "character": "休学",
        "kana": "きゅうがく",
        "meaning": "absent from school, absence from school, school absence",
        "level": 5
    },
    {
        "character": "同じ",
        "kana": "おなじ",
        "meaning": "same",
        "level": 5
    },
    {
        "character": "当たり",
        "kana": "あたり",
        "meaning": "a success, success, hit, guess",
        "level": 5
    },
    {
        "character": "両日",
        "kana": "りょうじつ",
        "meaning": "both days",
        "level": 6
    },
    {
        "character": "地",
        "kana": "ち",
        "meaning": "earth, ground",
        "level": 6
    },
    {
        "character": "土地",
        "kana": "とち",
        "meaning": "land",
        "level": 6
    },
    {
        "character": "姉妹",
        "kana": "しまい",
        "meaning": "sisters",
        "level": 6
    },
    {
        "character": "死ぬ",
        "kana": "しぬ",
        "meaning": "to die",
        "level": 6
    },
    {
        "character": "羊毛",
        "kana": "ようもう",
        "meaning": "wool",
        "level": 6
    },
    {
        "character": "天国",
        "kana": "てんごく",
        "meaning": "kingdom of heaven, heaven",
        "level": 6
    },
    {
        "character": "死亡",
        "kana": "しぼう",
        "meaning": "mortality, death",
        "level": 6
    },
    {
        "character": "首",
        "kana": "くび",
        "meaning": "neck",
        "level": 6
    },
    {
        "character": "海外",
        "kana": "かいがい",
        "meaning": "overseas, foreign, abroad",
        "level": 6
    },
    {
        "character": "科学",
        "kana": "かがく",
        "meaning": "science",
        "level": 6
    },
    {
        "character": "お茶",
        "kana": "おちゃ",
        "meaning": "tea",
        "level": 6
    },
    {
        "character": "午後",
        "kana": "ごご",
        "meaning": "pm, afternoon",
        "level": 6
    },
    {
        "character": "今年",
        "kana": "ことし, こんねん",
        "meaning": "this year",
        "level": 6
    },
    {
        "character": "全て",
        "kana": "すべて",
        "meaning": "all, entire",
        "level": 6
    },
    {
        "character": "足首",
        "kana": "あしくび",
        "meaning": "ankle",
        "level": 6
    },
    {
        "character": "全日本",
        "kana": "ぜんにほん",
        "meaning": "all japan, all of japan",
        "level": 6
    },
    {
        "character": "両手",
        "kana": "りょうて",
        "meaning": "both hands",
        "level": 6
    },
    {
        "character": "血",
        "kana": "ち",
        "meaning": "blood",
        "level": 6
    },
    {
        "character": "亡くなる",
        "kana": "なくなる",
        "meaning": "to pass away, to become deceased",
        "level": 6
    },
    {
        "character": "本州",
        "kana": "ほんしゅう",
        "meaning": "honshuu, honshu",
        "level": 6
    },
    {
        "character": "地図",
        "kana": "ちず",
        "meaning": "map",
        "level": 6
    },
    {
        "character": "次",
        "kana": "つぎ",
        "meaning": "next",
        "level": 6
    },
    {
        "character": "中東",
        "kana": "ちゅうとう",
        "meaning": "middle east",
        "level": 6
    },
    {
        "character": "東京",
        "kana": "とうきょう",
        "meaning": "tokyo, toukyou",
        "level": 6
    },
    {
        "character": "安心",
        "kana": "あんしん",
        "meaning": "relief, peace of mind",
        "level": 6
    },
    {
        "character": "正直",
        "kana": "しょうじき",
        "meaning": "honest",
        "level": 6
    },
    {
        "character": "首になる",
        "kana": "くびになる",
        "meaning": "to get fired, to be fired",
        "level": 6
    },
    {
        "character": "長い",
        "kana": "ながい",
        "meaning": "long",
        "level": 6
    },
    {
        "character": "出血",
        "kana": "しゅっけつ",
        "meaning": "bleeding, bleed",
        "level": 6
    },
    {
        "character": "夜",
        "kana": "よる",
        "meaning": "night, evening",
        "level": 6
    },
    {
        "character": "目次",
        "kana": "もくじ",
        "meaning": "table of contents",
        "level": 6
    },
    {
        "character": "南東",
        "kana": "なんとう",
        "meaning": "southeast",
        "level": 6
    },
    {
        "character": "海",
        "kana": "うみ",
        "meaning": "ocean, sea",
        "level": 6
    },
    {
        "character": "羊",
        "kana": "ひつじ",
        "meaning": "sheep",
        "level": 6
    },
    {
        "character": "四国",
        "kana": "しこく",
        "meaning": "shikoku",
        "level": 6
    },
    {
        "character": "星",
        "kana": "ほし",
        "meaning": "star",
        "level": 6
    },
    {
        "character": "直る",
        "kana": "なおる",
        "meaning": "to be fixed, to fix",
        "level": 6
    },
    {
        "character": "足す",
        "kana": "たす",
        "meaning": "to add",
        "level": 6
    },
    {
        "character": "年上",
        "kana": "としうえ",
        "meaning": "older",
        "level": 6
    },
    {
        "character": "車両",
        "kana": "しゃりょう",
        "meaning": "railroad car, vehicle",
        "level": 6
    },
    {
        "character": "中国",
        "kana": "ちゅうごく",
        "meaning": "china",
        "level": 6
    },
    {
        "character": "足りない",
        "kana": "たりない",
        "meaning": "not enough, to not be sufficient, to not be enough, insufficient, not sufficient, to be insufficient",
        "level": 6
    },
    {
        "character": "曲",
        "kana": "きょく",
        "meaning": "tune, piece of music, song, melody",
        "level": 6
    },
    {
        "character": "州",
        "kana": "しゅう",
        "meaning": "state, province, county",
        "level": 6
    },
    {
        "character": "点",
        "kana": "てん",
        "meaning": "point, decimal, decimal point",
        "level": 6
    },
    {
        "character": "全国",
        "kana": "ぜんこく",
        "meaning": "nationwide, national, countrywide",
        "level": 6
    },
    {
        "character": "三百",
        "kana": "さんびゃく",
        "meaning": "three hundred",
        "level": 6
    },
    {
        "character": "一歩",
        "kana": "いっぽ",
        "meaning": "one step",
        "level": 6
    },
    {
        "character": "世の中",
        "kana": "よのなか",
        "meaning": "society, the world",
        "level": 6
    },
    {
        "character": "代える",
        "kana": "かえる",
        "meaning": "to replace, to substitute, to exchange, to replace something, to substitute something, to exchange something",
        "level": 6
    },
    {
        "character": "代わり",
        "kana": "かわり",
        "meaning": "substitute, replacement",
        "level": 6
    },
    {
        "character": "年下",
        "kana": "としした",
        "meaning": "younger",
        "level": 6
    },
    {
        "character": "有名",
        "kana": "ゆうめい",
        "meaning": "famous",
        "level": 6
    },
    {
        "character": "早口",
        "kana": "はやくち, はやぐち",
        "meaning": "fast talker, fast talking, fast speaker, fast speaking, quick talker",
        "level": 6
    },
    {
        "character": "両方",
        "kana": "りょうほう",
        "meaning": "both, both sides, both ways",
        "level": 6
    },
    {
        "character": "手作り",
        "kana": "てづくり",
        "meaning": "handmade",
        "level": 6
    },
    {
        "character": "不安",
        "kana": "ふあん",
        "meaning": "uneasiness, anxiety, unease",
        "level": 6
    },
    {
        "character": "全力",
        "kana": "ぜんりょく",
        "meaning": "full effort, every effort, best effort, full power",
        "level": 6
    },
    {
        "character": "安全",
        "kana": "あんぜん",
        "meaning": "safety",
        "level": 6
    },
    {
        "character": "前",
        "kana": "まえ",
        "meaning": "front, before",
        "level": 6
    },
    {
        "character": "午前",
        "kana": "ごぜん",
        "meaning": "am, morning",
        "level": 6
    },
    {
        "character": "南",
        "kana": "みなみ",
        "meaning": "south",
        "level": 6
    },
    {
        "character": "地下",
        "kana": "ちか",
        "meaning": "underground",
        "level": 6
    },
    {
        "character": "向く",
        "kana": "むく",
        "meaning": "to face, to turn toward",
        "level": 6
    },
    {
        "character": "九州",
        "kana": "きゅうしゅう",
        "meaning": "kyuushuu, kyushu",
        "level": 6
    },
    {
        "character": "方向",
        "kana": "ほうこう",
        "meaning": "direction",
        "level": 6
    },
    {
        "character": "明るい",
        "kana": "あかるい",
        "meaning": "bright",
        "level": 6
    },
    {
        "character": "次回",
        "kana": "じかい",
        "meaning": "next time",
        "level": 6
    },
    {
        "character": "国",
        "kana": "くに",
        "meaning": "country, nation",
        "level": 6
    },
    {
        "character": "外国",
        "kana": "がいこく",
        "meaning": "foreign country",
        "level": 6
    },
    {
        "character": "外国人",
        "kana": "がいこくじん",
        "meaning": "foreign person, foreigner",
        "level": 6
    },
    {
        "character": "米国",
        "kana": "べいこく",
        "meaning": "america, united states, united states of america, usa",
        "level": 6
    },
    {
        "character": "今夜",
        "kana": "こんや",
        "meaning": "tonight, this evening",
        "level": 6
    },
    {
        "character": "妹",
        "kana": "いもうと",
        "meaning": "younger sister, little sister",
        "level": 6
    },
    {
        "character": "安い",
        "kana": "やすい",
        "meaning": "cheap, inexpensive",
        "level": 6
    },
    {
        "character": "お姉さん",
        "kana": "おねえさん",
        "meaning": "older sister, big sister, elder sister",
        "level": 6
    },
    {
        "character": "死体",
        "kana": "したい",
        "meaning": "dead body, corpse, cadaver",
        "level": 6
    },
    {
        "character": "平安",
        "kana": "へいあん",
        "meaning": "peace, tranquility",
        "level": 6
    },
    {
        "character": "人形",
        "kana": "にんぎょう",
        "meaning": "doll, puppet",
        "level": 6
    },
    {
        "character": "後で",
        "kana": "あとで",
        "meaning": "after, afterwards, later",
        "level": 6
    },
    {
        "character": "後ろ",
        "kana": "うしろ",
        "meaning": "behind, back, rear",
        "level": 6
    },
    {
        "character": "思う",
        "kana": "おもう",
        "meaning": "to think",
        "level": 6
    },
    {
        "character": "不明",
        "kana": "ふめい",
        "meaning": "unknown, unclear, uncertain, unsure",
        "level": 6
    },
    {
        "character": "名曲",
        "kana": "めいきょく",
        "meaning": "famous music, famous song, famous tune",
        "level": 6
    },
    {
        "character": "有る",
        "kana": "ある",
        "meaning": "to have, to exist",
        "level": 6
    },
    {
        "character": "出来る",
        "kana": "できる",
        "meaning": "to be able to do",
        "level": 6
    },
    {
        "character": "東北",
        "kana": "とうほく",
        "meaning": "northeast, tohoku, tohoku region, touhoku region, touhoku",
        "level": 6
    },
    {
        "character": "東方",
        "kana": "とうほう",
        "meaning": "eastward, eastern direction",
        "level": 6
    },
    {
        "character": "年次",
        "kana": "ねんじ",
        "meaning": "annual, yearly",
        "level": 6
    },
    {
        "character": "歩く",
        "kana": "あるく",
        "meaning": "to walk",
        "level": 6
    },
    {
        "character": "生活",
        "kana": "せいかつ",
        "meaning": "life, livelihood",
        "level": 6
    },
    {
        "character": "直す",
        "kana": "なおす",
        "meaning": "to fix",
        "level": 6
    },
    {
        "character": "茶色",
        "kana": "ちゃいろ",
        "meaning": "brown, brown colour, brown color, color brown, colour brown",
        "level": 6
    },
    {
        "character": "直行",
        "kana": "ちょっこう",
        "meaning": "nonstop, direct",
        "level": 6
    },
    {
        "character": "知ってる",
        "kana": "しってる",
        "meaning": "to know",
        "level": 6
    },
    {
        "character": "方言",
        "kana": "ほうげん",
        "meaning": "dialect",
        "level": 6
    },
    {
        "character": "社長",
        "kana": "しゃちょう",
        "meaning": "company president, manager, director, president of a company",
        "level": 6
    },
    {
        "character": "食べる",
        "kana": "たべる",
        "meaning": "to eat",
        "level": 6
    },
    {
        "character": "仕方がない",
        "kana": "しかたがない",
        "meaning": "can't be helped, it can't be helped, no use, it's no use, it is no use",
        "level": 6
    },
    {
        "character": "文化",
        "kana": "ぶんか",
        "meaning": "culture",
        "level": 6
    },
    {
        "character": "東",
        "kana": "ひがし",
        "meaning": "east",
        "level": 6
    },
    {
        "character": "店",
        "kana": "みせ",
        "meaning": "shop, store",
        "level": 6
    },
    {
        "character": "国民",
        "kana": "こくみん",
        "meaning": "the people, citizens, nationality",
        "level": 7
    },
    {
        "character": "高校",
        "kana": "こうこう",
        "meaning": "high school",
        "level": 7
    },
    {
        "character": "雪",
        "kana": "ゆき",
        "meaning": "snow",
        "level": 7
    },
    {
        "character": "今週",
        "kana": "こんしゅう",
        "meaning": "this week",
        "level": 7
    },
    {
        "character": "月末",
        "kana": "げつまつ",
        "meaning": "end of the month, month end",
        "level": 7
    },
    {
        "character": "この辺",
        "kana": "このへん",
        "meaning": "around here, this area",
        "level": 7
    },
    {
        "character": "風",
        "kana": "かぜ",
        "meaning": "wind",
        "level": 7
    },
    {
        "character": "学校",
        "kana": "がっこう",
        "meaning": "school",
        "level": 7
    },
    {
        "character": "日記",
        "kana": "にっき",
        "meaning": "diary, journal",
        "level": 7
    },
    {
        "character": "辺り",
        "kana": "あたり",
        "meaning": "area, vicinity",
        "level": 7
    },
    {
        "character": "船",
        "kana": "ふね",
        "meaning": "boat, ship",
        "level": 7
    },
    {
        "character": "先週",
        "kana": "せんしゅう",
        "meaning": "last week",
        "level": 7
    },
    {
        "character": "未来",
        "kana": "みらい",
        "meaning": "future, the future, distant future, the distant future",
        "level": 7
    },
    {
        "character": "魚",
        "kana": "さかな",
        "meaning": "fish",
        "level": 7
    },
    {
        "character": "地理",
        "kana": "ちり",
        "meaning": "geography",
        "level": 7
    },
    {
        "character": "手紙",
        "kana": "てがみ",
        "meaning": "letter",
        "level": 7
    },
    {
        "character": "以前",
        "kana": "いぜん",
        "meaning": "previously, before",
        "level": 7
    },
    {
        "character": "心理学",
        "kana": "しんりがく",
        "meaning": "psychology",
        "level": 7
    },
    {
        "character": "年末",
        "kana": "ねんまつ",
        "meaning": "year end, end of the year, end of year",
        "level": 7
    },
    {
        "character": "弱い",
        "kana": "よわい",
        "meaning": "weak",
        "level": 7
    },
    {
        "character": "週末",
        "kana": "しゅうまつ",
        "meaning": "weekend",
        "level": 7
    },
    {
        "character": "何時",
        "kana": "なんじ",
        "meaning": "what time",
        "level": 7
    },
    {
        "character": "白鳥",
        "kana": "はくちょう",
        "meaning": "swan",
        "level": 7
    },
    {
        "character": "末",
        "kana": "すえ",
        "meaning": "the end, end",
        "level": 7
    },
    {
        "character": "風船",
        "kana": "ふうせん",
        "meaning": "balloon",
        "level": 7
    },
    {
        "character": "鳥",
        "kana": "とり",
        "meaning": "bird",
        "level": 7
    },
    {
        "character": "黄色",
        "kana": "きいろ",
        "meaning": "yellow, yellow colour, yellow color, colour yellow, color yellow",
        "level": 7
    },
    {
        "character": "黒い",
        "kana": "くろい",
        "meaning": "black",
        "level": 7
    },
    {
        "character": "言い方",
        "kana": "いいかた",
        "meaning": "way of saying, way of talking, speaking style",
        "level": 7
    },
    {
        "character": "強い",
        "kana": "つよい",
        "meaning": "strong",
        "level": 7
    },
    {
        "character": "青空",
        "kana": "あおぞら",
        "meaning": "blue sky",
        "level": 7
    },
    {
        "character": "作り方",
        "kana": "つくりかた",
        "meaning": "how to make, way to make, way of making",
        "level": 7
    },
    {
        "character": "作家",
        "kana": "さっか",
        "meaning": "author, writer, novelist",
        "level": 7
    },
    {
        "character": "時代",
        "kana": "じだい",
        "meaning": "period, epoch, era, time period",
        "level": 7
    },
    {
        "character": "千円札",
        "kana": "せんえんさつ",
        "meaning": "thousand yen bill, thousand yen note, one thousand yen note, one thousand yen bill",
        "level": 7
    },
    {
        "character": "札",
        "kana": "ふだ",
        "meaning": "label, bill, note",
        "level": 7
    },
    {
        "character": "失礼",
        "kana": "しつれい",
        "meaning": "rude, rudeness, impoliteness",
        "level": 7
    },
    {
        "character": "欠点",
        "kana": "けってん",
        "meaning": "shortcoming, fault, defect, flaw, weakness, weak point",
        "level": 7
    },
    {
        "character": "強力",
        "kana": "きょうりょく",
        "meaning": "strength, strong, powerful",
        "level": 7
    },
    {
        "character": "不人気",
        "kana": "ふにんき",
        "meaning": "unpopular, not popular",
        "level": 7
    },
    {
        "character": "先回り",
        "kana": "さきまわり",
        "meaning": "anticipation, anticipate",
        "level": 7
    },
    {
        "character": "夏",
        "kana": "なつ",
        "meaning": "summer",
        "level": 7
    },
    {
        "character": "中学生",
        "kana": "ちゅうがくせい",
        "meaning": "middle school student, junior high school student, middle schooler, junior high schooler, junior high student",
        "level": 7
    },
    {
        "character": "小学生",
        "kana": "しょうがくせい",
        "meaning": "elementary school student, primary school student, elementary schooler, primary schooler, grade schooler, grade school student",
        "level": 7
    },
    {
        "character": "夏休み",
        "kana": "なつやすみ",
        "meaning": "summer vacation, summer break, summer holiday",
        "level": 7
    },
    {
        "character": "付ける",
        "kana": "つける",
        "meaning": "to attach",
        "level": 7
    },
    {
        "character": "弱点",
        "kana": "じゃくてん",
        "meaning": "weak point, weakness",
        "level": 7
    },
    {
        "character": "近々",
        "kana": "ちかじか, ちかぢか",
        "meaning": "before long, soon",
        "level": 7
    },
    {
        "character": "以外",
        "kana": "いがい",
        "meaning": "other than, excepting, except for",
        "level": 7
    },
    {
        "character": "以上",
        "kana": "いじょう",
        "meaning": "more than, that's all",
        "level": 7
    },
    {
        "character": "失う",
        "kana": "うしなう",
        "meaning": "to lose, to part with, to lose something, to part with something",
        "level": 7
    },
    {
        "character": "家",
        "kana": "いえ, うち",
        "meaning": "home, house",
        "level": 7
    },
    {
        "character": "同時",
        "kana": "どうじ",
        "meaning": "same time",
        "level": 7
    },
    {
        "character": "必ず",
        "kana": "かならず",
        "meaning": "surely, certainly, without exception, always, definitely",
        "level": 7
    },
    {
        "character": "必死",
        "kana": "ひっし",
        "meaning": "frantic, desperate, certain death, sure death",
        "level": 7
    },
    {
        "character": "教える",
        "kana": "おしえる",
        "meaning": "to teach",
        "level": 7
    },
    {
        "character": "教室",
        "kana": "きょうしつ",
        "meaning": "classroom",
        "level": 7
    },
    {
        "character": "一時",
        "kana": "いちじ",
        "meaning": "one o'clock",
        "level": 7
    },
    {
        "character": "二時半",
        "kana": "にじはん",
        "meaning": "two thirty, half past two, half two",
        "level": 7
    },
    {
        "character": "時",
        "kana": "とき",
        "meaning": "time, o'clock, hour",
        "level": 7
    },
    {
        "character": "未だ",
        "kana": "まだ",
        "meaning": "not yet, still",
        "level": 7
    },
    {
        "character": "氏",
        "kana": "し",
        "meaning": "mister, sir, ma'am, madam, miss",
        "level": 7
    },
    {
        "character": "理由",
        "kana": "りゆう",
        "meaning": "reason",
        "level": 7
    },
    {
        "character": "自由",
        "kana": "じゆう",
        "meaning": "freedom",
        "level": 7
    },
    {
        "character": "社会",
        "kana": "しゃかい",
        "meaning": "society",
        "level": 7
    },
    {
        "character": "組",
        "kana": "くみ",
        "meaning": "group, team, class",
        "level": 7
    },
    {
        "character": "高い",
        "kana": "たかい",
        "meaning": "tall, high, expensive",
        "level": 7
    },
    {
        "character": "紙",
        "kana": "かみ",
        "meaning": "paper",
        "level": 7
    },
    {
        "character": "海魚",
        "kana": "かいぎょ, うみざかな",
        "meaning": "ocean fish, saltwater fish",
        "level": 7
    },
    {
        "character": "金魚",
        "kana": "きんぎょ",
        "meaning": "goldfish",
        "level": 7
    },
    {
        "character": "交通",
        "kana": "こうつう",
        "meaning": "traffic",
        "level": 7
    },
    {
        "character": "通る",
        "kana": "とおる",
        "meaning": "to pass, to pass through",
        "level": 7
    },
    {
        "character": "黒人",
        "kana": "こくじん",
        "meaning": "black person, black people",
        "level": 7
    },
    {
        "character": "大学生",
        "kana": "だいがくせい",
        "meaning": "university student, college student, uni student",
        "level": 7
    },
    {
        "character": "欠ける",
        "kana": "かける",
        "meaning": "to lack, to be lacking",
        "level": 7
    },
    {
        "character": "氏名",
        "kana": "しめい",
        "meaning": "full name, first and last name",
        "level": 7
    },
    {
        "character": "本当に",
        "kana": "ほんとうに",
        "meaning": "really, truly",
        "level": 7
    },
    {
        "character": "丁目",
        "kana": "ちょうめ",
        "meaning": "district of a town, city block, town district, district",
        "level": 7
    },
    {
        "character": "前回",
        "kana": "ぜんかい",
        "meaning": "last time",
        "level": 8
    },
    {
        "character": "電子",
        "kana": "でんし",
        "meaning": "electron, electronic",
        "level": 8
    },
    {
        "character": "電話",
        "kana": "でんわ",
        "meaning": "telephone, phone",
        "level": 8
    },
    {
        "character": "住人",
        "kana": "じゅうにん",
        "meaning": "resident, inhabitant, dweller",
        "level": 8
    },
    {
        "character": "医者",
        "kana": "いしゃ",
        "meaning": "doctor",
        "level": 8
    },
    {
        "character": "名所",
        "kana": "めいしょ",
        "meaning": "famous place",
        "level": 8
    },
    {
        "character": "究明",
        "kana": "きゅうめい",
        "meaning": "investigation",
        "level": 8
    },
    {
        "character": "電気",
        "kana": "でんき",
        "meaning": "electricity",
        "level": 8
    },
    {
        "character": "絵",
        "kana": "え",
        "meaning": "painting, drawing",
        "level": 8
    },
    {
        "character": "身体",
        "kana": "しんたい",
        "meaning": "the body, health, body",
        "level": 8
    },
    {
        "character": "時間",
        "kana": "じかん",
        "meaning": "time",
        "level": 8
    },
    {
        "character": "楽",
        "kana": "らく",
        "meaning": "comfort, ease, pleasure",
        "level": 8
    },
    {
        "character": "南米",
        "kana": "なんべい",
        "meaning": "south america",
        "level": 8
    },
    {
        "character": "住所",
        "kana": "じゅうしょ",
        "meaning": "address",
        "level": 8
    },
    {
        "character": "全米",
        "kana": "ぜんべい",
        "meaning": "all america",
        "level": 8
    },
    {
        "character": "数字",
        "kana": "すうじ",
        "meaning": "numeral, digit",
        "level": 8
    },
    {
        "character": "助言",
        "kana": "じょげん",
        "meaning": "advice",
        "level": 8
    },
    {
        "character": "買う",
        "kana": "かう",
        "meaning": "to buy",
        "level": 8
    },
    {
        "character": "雲",
        "kana": "くも",
        "meaning": "cloud",
        "level": 8
    },
    {
        "character": "大役",
        "kana": "たいやく",
        "meaning": "important task, great duty",
        "level": 8
    },
    {
        "character": "音楽",
        "kana": "おんがく",
        "meaning": "music",
        "level": 8
    },
    {
        "character": "学者",
        "kana": "がくしゃ",
        "meaning": "scholar",
        "level": 8
    },
    {
        "character": "場所",
        "kana": "ばしょ",
        "meaning": "place, location, spot",
        "level": 8
    },
    {
        "character": "研究",
        "kana": "けんきゅう",
        "meaning": "investigation, study, research",
        "level": 8
    },
    {
        "character": "交番",
        "kana": "こうばん",
        "meaning": "police box",
        "level": 8
    },
    {
        "character": "数学",
        "kana": "すうがく",
        "meaning": "mathematics, math, maths",
        "level": 8
    },
    {
        "character": "森",
        "kana": "もり",
        "meaning": "woods, forest",
        "level": 8
    },
    {
        "character": "化ける",
        "kana": "ばける",
        "meaning": "to transform",
        "level": 8
    },
    {
        "character": "電車",
        "kana": "でんしゃ",
        "meaning": "train",
        "level": 8
    },
    {
        "character": "電力",
        "kana": "でんりょく",
        "meaning": "electric power",
        "level": 8
    },
    {
        "character": "楽しい",
        "kana": "たのしい",
        "meaning": "fun",
        "level": 8
    },
    {
        "character": "馬力",
        "kana": "ばりき",
        "meaning": "horsepower",
        "level": 8
    },
    {
        "character": "医学",
        "kana": "いがく",
        "meaning": "medical science, medicine",
        "level": 8
    },
    {
        "character": "走り回る",
        "kana": "はしりまわる",
        "meaning": "to run around",
        "level": 8
    },
    {
        "character": "二番",
        "kana": "にばん",
        "meaning": "number two, second",
        "level": 8
    },
    {
        "character": "両者",
        "kana": "りょうしゃ",
        "meaning": "both people",
        "level": 8
    },
    {
        "character": "心身",
        "kana": "しんしん",
        "meaning": "body and mind, mind and body",
        "level": 8
    },
    {
        "character": "君主国",
        "kana": "くんしゅこく",
        "meaning": "monarchy",
        "level": 8
    },
    {
        "character": "決心",
        "kana": "けっしん",
        "meaning": "determination, resolution, conviction",
        "level": 8
    },
    {
        "character": "明日",
        "kana": "あした, あす",
        "meaning": "tomorrow",
        "level": 8
    },
    {
        "character": "答え",
        "kana": "こたえ",
        "meaning": "answer, reply, response",
        "level": 8
    },
    {
        "character": "答える",
        "kana": "こたえる",
        "meaning": "to answer, to reply, to respond",
        "level": 8
    },
    {
        "character": "対立",
        "kana": "たいりつ",
        "meaning": "confrontation, opposition",
        "level": 8
    },
    {
        "character": "一番",
        "kana": "いちばん",
        "meaning": "number one, the first, first, the best, best, the most, most",
        "level": 8
    },
    {
        "character": "助手",
        "kana": "じょしゅ",
        "meaning": "assistant, helper, aide",
        "level": 8
    },
    {
        "character": "他所",
        "kana": "たしょ, よそ",
        "meaning": "another place, somewhere else, other place, elsewhere",
        "level": 8
    },
    {
        "character": "役人",
        "kana": "やくにん",
        "meaning": "public official, government official, public servant",
        "level": 8
    },
    {
        "character": "役に立つ",
        "kana": "やくにたつ",
        "meaning": "to be useful, to be of use, to be helpful, to be of service",
        "level": 8
    },
    {
        "character": "投げる",
        "kana": "なげる",
        "meaning": "to throw, to throw something",
        "level": 8
    },
    {
        "character": "地上",
        "kana": "ちじょう",
        "meaning": "above ground",
        "level": 8
    },
    {
        "character": "北海道",
        "kana": "ほっかいどう",
        "meaning": "hokkaido, hokkaidou",
        "level": 8
    },
    {
        "character": "工学者",
        "kana": "こうがくしゃ",
        "meaning": "engineer",
        "level": 8
    },
    {
        "character": "交わる",
        "kana": "まじわる",
        "meaning": "to intersect, to cross, to mingle",
        "level": 8
    },
    {
        "character": "全く",
        "kana": "まったく",
        "meaning": "completely, entirely, truly, really, wholly",
        "level": 8
    },
    {
        "character": "この前",
        "kana": "このまえ",
        "meaning": "last time, recently, lately, previous, previously",
        "level": 8
    },
    {
        "character": "南口",
        "kana": "みなみぐち",
        "meaning": "south exit, south entrance, southern exit, southern entrance, south gate",
        "level": 8
    },
    {
        "character": "当てる",
        "kana": "あてる",
        "meaning": "to guess, to guess something",
        "level": 8
    },
    {
        "character": "出来上がる",
        "kana": "できあがる",
        "meaning": "to be finished, to be completed",
        "level": 8
    },
    {
        "character": "見直す",
        "kana": "みなおす",
        "meaning": "to reevaluate, to look again, to reassess",
        "level": 8
    },
    {
        "character": "近づく",
        "kana": "ちかづく",
        "meaning": "to get close, to approach, to draw near, to near, to bring near",
        "level": 8
    },
    {
        "character": "名前",
        "kana": "なまえ",
        "meaning": "name, first name, full name, given name",
        "level": 8
    },
    {
        "character": "工場",
        "kana": "こうじょう, こうば",
        "meaning": "factory",
        "level": 8
    },
    {
        "character": "作者",
        "kana": "さくしゃ",
        "meaning": "author, writer",
        "level": 8
    },
    {
        "character": "交じる",
        "kana": "まじる",
        "meaning": "to be mixed",
        "level": 8
    },
    {
        "character": "住む",
        "kana": "すむ",
        "meaning": "to live, to dwell, to reside",
        "level": 8
    },
    {
        "character": "数",
        "kana": "かず",
        "meaning": "number, count, amount",
        "level": 8
    },
    {
        "character": "助力",
        "kana": "じょりょく",
        "meaning": "assistance, support",
        "level": 8
    },
    {
        "character": "医大",
        "kana": "いだい",
        "meaning": "medical university, medical school, med school",
        "level": 8
    },
    {
        "character": "合う",
        "kana": "あう",
        "meaning": "to suit, to come together, to meet, to match",
        "level": 8
    },
    {
        "character": "所",
        "kana": "ところ",
        "meaning": "place, spot, scene",
        "level": 8
    },
    {
        "character": "向こう",
        "kana": "むこう",
        "meaning": "opposite side, over there, other side, far away",
        "level": 8
    },
    {
        "character": "〜君",
        "kana": "くん",
        "meaning": "boy name ender, male name ender, boy name suffix, male name suffix",
        "level": 8
    },
    {
        "character": "君",
        "kana": "きみ",
        "meaning": "you, buddy",
        "level": 8
    },
    {
        "character": "入場",
        "kana": "にゅうじょう",
        "meaning": "entrance, admission, entering",
        "level": 8
    },
    {
        "character": "場合",
        "kana": "ばあい",
        "meaning": "case, circumstance, situation",
        "level": 8
    },
    {
        "character": "反対",
        "kana": "はんたい",
        "meaning": "opposition, opposite",
        "level": 8
    },
    {
        "character": "会話",
        "kana": "かいわ",
        "meaning": "conversation, dialog",
        "level": 8
    },
    {
        "character": "安売り",
        "kana": "やすうり",
        "meaning": "sell cheaply, discount, bargain sale, sale",
        "level": 8
    },
    {
        "character": "支局",
        "kana": "しきょく",
        "meaning": "branch office",
        "level": 8
    },
    {
        "character": "道",
        "kana": "みち",
        "meaning": "road, street, path, way",
        "level": 8
    },
    {
        "character": "対する",
        "kana": "たいする",
        "meaning": "to compare to, to face each other, to oppose, to compare, to contrast, to contrast to",
        "level": 8
    },
    {
        "character": "対外",
        "kana": "たいがい",
        "meaning": "foreign, overseas",
        "level": 8
    },
    {
        "character": "局",
        "kana": "きょく",
        "meaning": "bureau, department, station",
        "level": 8
    },
    {
        "character": "役",
        "kana": "やく",
        "meaning": "service, duty",
        "level": 8
    },
    {
        "character": "思い出",
        "kana": "おもいで",
        "meaning": "a memory, memories, memory",
        "level": 8
    },
    {
        "character": "思い出す",
        "kana": "おもいだす",
        "meaning": "to remember, to recall",
        "level": 8
    },
    {
        "character": "出所",
        "kana": "しゅっしょ",
        "meaning": "source, origin, place of origin",
        "level": 8
    },
    {
        "character": "入所",
        "kana": "にゅうしょ",
        "meaning": "admission, entrance",
        "level": 8
    },
    {
        "character": "次々",
        "kana": "つぎつぎ",
        "meaning": "one by one, in succession, one after the other",
        "level": 8
    },
    {
        "character": "支店",
        "kana": "してん",
        "meaning": "branch office, branch store",
        "level": 8
    },
    {
        "character": "朝日",
        "kana": "あさひ",
        "meaning": "morning sun, rising sun",
        "level": 8
    },
    {
        "character": "人数",
        "kana": "にんずう",
        "meaning": "the number of people, number of people, the amount of people, amount of people",
        "level": 8
    },
    {
        "character": "曲げる",
        "kana": "まげる",
        "meaning": "to bend, to bend something",
        "level": 8
    },
    {
        "character": "数える",
        "kana": "かぞえる",
        "meaning": "to count",
        "level": 8
    },
    {
        "character": "点数",
        "kana": "てんすう",
        "meaning": "points, score",
        "level": 8
    },
    {
        "character": "曲がる",
        "kana": "まがる",
        "meaning": "to bend, to curve, to turn",
        "level": 8
    },
    {
        "character": "朝",
        "kana": "あさ",
        "meaning": "morning",
        "level": 8
    },
    {
        "character": "決める",
        "kana": "きめる",
        "meaning": "to decide",
        "level": 8
    },
    {
        "character": "朝ごはん",
        "kana": "あさごはん",
        "meaning": "breakfast",
        "level": 8
    },
    {
        "character": "東口",
        "kana": "ひがしぐち",
        "meaning": "east exit, east entrance, eastern exit, eastern entrance, east gate",
        "level": 8
    },
    {
        "character": "未決",
        "kana": "みけつ",
        "meaning": "pending, unsettled, undecided, not yet decided",
        "level": 8
    },
    {
        "character": "決",
        "kana": "けつ",
        "meaning": "decision",
        "level": 8
    },
    {
        "character": "自決",
        "kana": "じけつ",
        "meaning": "self determination, suicide",
        "level": 8
    },
    {
        "character": "身",
        "kana": "み",
        "meaning": "body, oneself",
        "level": 8
    },
    {
        "character": "全身",
        "kana": "ぜんしん",
        "meaning": "whole body, entire body",
        "level": 8
    },
    {
        "character": "〜道",
        "kana": "どう",
        "meaning": "method of, way, style, way of",
        "level": 8
    },
    {
        "character": "歩道",
        "kana": "ほどう",
        "meaning": "sidewalk, footpath, pavement",
        "level": 8
    },
    {
        "character": "長さ",
        "kana": "ながさ",
        "meaning": "length",
        "level": 8
    },
    {
        "character": "〜間",
        "kana": "かん, 〜かん",
        "meaning": "amount of time, interval of time, time interval, period of time",
        "level": 8
    },
    {
        "character": "人間",
        "kana": "にんげん",
        "meaning": "human, human being",
        "level": 8
    },
    {
        "character": "空間",
        "kana": "くうかん",
        "meaning": "space",
        "level": 8
    },
    {
        "character": "間",
        "kana": "あいだ",
        "meaning": "interval, interval of time, time interval, between",
        "level": 8
    },
    {
        "character": "間もなく",
        "kana": "まもなく",
        "meaning": "soon, before long, in a short time, shortly, momentarily",
        "level": 8
    },
    {
        "character": "電池",
        "kana": "でんち",
        "meaning": "battery",
        "level": 8
    },
    {
        "character": "馬",
        "kana": "うま",
        "meaning": "horse",
        "level": 8
    },
    {
        "character": "お知らせ",
        "kana": "おしらせ",
        "meaning": "flyer, leaflet, notice, notification, flier, pamphlet, handbill",
        "level": 8
    },
    {
        "character": "研究室",
        "kana": "けんきゅうしつ",
        "meaning": "laboratory, lab, study room, professor's office, teacher's office",
        "level": 8
    },
    {
        "character": "番号",
        "kana": "ばんごう",
        "meaning": "number, series of digits",
        "level": 8
    },
    {
        "character": "回す",
        "kana": "まわす",
        "meaning": "to turn, to rotate, to turn something, to rotate something",
        "level": 8
    },
    {
        "character": "話す",
        "kana": "はなす",
        "meaning": "to speak, to talk",
        "level": 8
    },
    {
        "character": "助ける",
        "kana": "たすける",
        "meaning": "to help, to save, to rescue",
        "level": 8
    },
    {
        "character": "支える",
        "kana": "ささえる",
        "meaning": "to support",
        "level": 8
    },
    {
        "character": "物",
        "kana": "もの",
        "meaning": "thing",
        "level": 9
    },
    {
        "character": "予定",
        "kana": "よてい",
        "meaning": "a plan, plan",
        "level": 9
    },
    {
        "character": "泳ぐ",
        "kana": "およぐ",
        "meaning": "to swim",
        "level": 9
    },
    {
        "character": "勝負",
        "kana": "しょうぶ",
        "meaning": "match, showdown, contest",
        "level": 9
    },
    {
        "character": "勝者",
        "kana": "しょうしゃ",
        "meaning": "winner, victor",
        "level": 9
    },
    {
        "character": "客室",
        "kana": "きゃくしつ",
        "meaning": "guest room",
        "level": 9
    },
    {
        "character": "和風",
        "kana": "わふう",
        "meaning": "japanese style",
        "level": 9
    },
    {
        "character": "相手",
        "kana": "あいて",
        "meaning": "partner, companion",
        "level": 9
    },
    {
        "character": "必要",
        "kana": "ひつよう",
        "meaning": "necessary, needed, essential",
        "level": 9
    },
    {
        "character": "待つ",
        "kana": "まつ",
        "meaning": "to wait",
        "level": 9
    },
    {
        "character": "住民",
        "kana": "じゅうみん",
        "meaning": "residents",
        "level": 9
    },
    {
        "character": "乗り物",
        "kana": "のりもの",
        "meaning": "vehicle",
        "level": 9
    },
    {
        "character": "乗る",
        "kana": "のる",
        "meaning": "to ride",
        "level": 9
    },
    {
        "character": "美人",
        "kana": "びじん",
        "meaning": "beautiful woman",
        "level": 9
    },
    {
        "character": "体重",
        "kana": "たいじゅう",
        "meaning": "body weight",
        "level": 9
    },
    {
        "character": "仮定",
        "kana": "かてい",
        "meaning": "assumption, hypothesis",
        "level": 9
    },
    {
        "character": "服",
        "kana": "ふく",
        "meaning": "clothes, clothing",
        "level": 9
    },
    {
        "character": "始まる",
        "kana": "はじまる",
        "meaning": "to begin, something begins, to start, something starts",
        "level": 9
    },
    {
        "character": "苦い",
        "kana": "にがい",
        "meaning": "bitter taste, bitter",
        "level": 9
    },
    {
        "character": "楽勝",
        "kana": "らくしょう",
        "meaning": "easy victory, easy win",
        "level": 9
    },
    {
        "character": "用事",
        "kana": "ようじ",
        "meaning": "errand, business",
        "level": 9
    },
    {
        "character": "客さん",
        "kana": "きゃくさん",
        "meaning": "guest, visitor, customer",
        "level": 9
    },
    {
        "character": "中学校",
        "kana": "ちゅうがっこう",
        "meaning": "middle school, junior high school",
        "level": 9
    },
    {
        "character": "平和",
        "kana": "へいわ",
        "meaning": "peace, heiwa, heiwa era, heiwa emperor",
        "level": 9
    },
    {
        "character": "丁度",
        "kana": "ちょうど",
        "meaning": "exactly, just",
        "level": 9
    },
    {
        "character": "事",
        "kana": "こと",
        "meaning": "thing, matter, action",
        "level": 9
    },
    {
        "character": "待たせる",
        "kana": "またせる",
        "meaning": "to make someone wait, to keep someone waiting, to make wait, to keep waiting",
        "level": 9
    },
    {
        "character": "新しい",
        "kana": "あたらしい",
        "meaning": "new",
        "level": 9
    },
    {
        "character": "〜県",
        "kana": "けん",
        "meaning": "prefecture",
        "level": 9
    },
    {
        "character": "事実",
        "kana": "じじつ",
        "meaning": "truth, fact, reality",
        "level": 9
    },
    {
        "character": "和食",
        "kana": "わしょく",
        "meaning": "japanese style food, japanese food",
        "level": 9
    },
    {
        "character": "毎度",
        "kana": "まいど",
        "meaning": "each time, frequently, every time",
        "level": 9
    },
    {
        "character": "仮名",
        "kana": "かな",
        "meaning": "kana",
        "level": 9
    },
    {
        "character": "今度",
        "kana": "こんど",
        "meaning": "this time, next time",
        "level": 9
    },
    {
        "character": "表す",
        "kana": "あらわす",
        "meaning": "to express",
        "level": 9
    },
    {
        "character": "必勝",
        "kana": "ひっしょう",
        "meaning": "sure victory, certain victory, sure win, sure victory, certain win",
        "level": 9
    },
    {
        "character": "出発",
        "kana": "しゅっぱつ",
        "meaning": "departure",
        "level": 9
    },
    {
        "character": "発表",
        "kana": "はっぴょう",
        "meaning": "announcement",
        "level": 9
    },
    {
        "character": "食事",
        "kana": "しょくじ",
        "meaning": "meal",
        "level": 9
    },
    {
        "character": "気を付けて",
        "kana": "きをつけて",
        "meaning": "be careful, take care",
        "level": 9
    },
    {
        "character": "弱々しい",
        "kana": "よわよわしい",
        "meaning": "weak looking, frail, weak seeming, seemingly weak",
        "level": 9
    },
    {
        "character": "仮に",
        "kana": "かりに",
        "meaning": "temporarily, suppose",
        "level": 9
    },
    {
        "character": "相談",
        "kana": "そうだん",
        "meaning": "consultation, discussion, advice",
        "level": 9
    },
    {
        "character": "金持ち",
        "kana": "かねもち",
        "meaning": "rich, wealthy",
        "level": 9
    },
    {
        "character": "高校生",
        "kana": "こうこうせい",
        "meaning": "high school student, high schooler",
        "level": 9
    },
    {
        "character": "本屋",
        "kana": "ほんや",
        "meaning": "bookstore, book shop",
        "level": 9
    },
    {
        "character": "肉屋",
        "kana": "にくや",
        "meaning": "butcher shop, meat shop, meat store",
        "level": 9
    },
    {
        "character": "魚屋",
        "kana": "さかなや",
        "meaning": "fish shop, fish market, fish dealer, fish store, fishmonger",
        "level": 9
    },
    {
        "character": "茶屋",
        "kana": "ちゃや",
        "meaning": "tea shop, tea store, tea house",
        "level": 9
    },
    {
        "character": "大事",
        "kana": "だいじ",
        "meaning": "important, valuable, serious matter",
        "level": 9
    },
    {
        "character": "発売",
        "kana": "はつばい",
        "meaning": "for sale, selling, item for sale, sale",
        "level": 9
    },
    {
        "character": "全部",
        "kana": "ぜんぶ",
        "meaning": "all, entire, whole",
        "level": 9
    },
    {
        "character": "天使",
        "kana": "てんし",
        "meaning": "angel",
        "level": 9
    },
    {
        "character": "新年",
        "kana": "しんねん",
        "meaning": "new year",
        "level": 9
    },
    {
        "character": "要る",
        "kana": "いる",
        "meaning": "to need",
        "level": 9
    },
    {
        "character": "対談",
        "kana": "たいだん",
        "meaning": "conversation, dialogue, talk",
        "level": 9
    },
    {
        "character": "食べ物",
        "kana": "たべもの",
        "meaning": "food",
        "level": 9
    },
    {
        "character": "和室",
        "kana": "わしつ",
        "meaning": "japanese style room",
        "level": 9
    },
    {
        "character": "実",
        "kana": "じつ",
        "meaning": "truth, reality",
        "level": 9
    },
    {
        "character": "返す",
        "kana": "かえす",
        "meaning": "to return, to return something",
        "level": 9
    },
    {
        "character": "乗せる",
        "kana": "のせる",
        "meaning": "to give a ride, to give someone a ride",
        "level": 9
    },
    {
        "character": "工事",
        "kana": "こうじ",
        "meaning": "construction",
        "level": 9
    },
    {
        "character": "返事",
        "kana": "へんじ",
        "meaning": "reply, response",
        "level": 9
    },
    {
        "character": "付く",
        "kana": "つく",
        "meaning": "to be attached",
        "level": 9
    },
    {
        "character": "見付ける",
        "kana": "みつける",
        "meaning": "to find, to find something",
        "level": 9
    },
    {
        "character": "実力",
        "kana": "じつりょく",
        "meaning": "true strength, true ability, true power",
        "level": 9
    },
    {
        "character": "使う",
        "kana": "つかう",
        "meaning": "to use",
        "level": 9
    },
    {
        "character": "家具",
        "kana": "かぐ",
        "meaning": "furniture",
        "level": 9
    },
    {
        "character": "道具",
        "kana": "どうぐ",
        "meaning": "tool",
        "level": 9
    },
    {
        "character": "勝つ",
        "kana": "かつ",
        "meaning": "to win",
        "level": 9
    },
    {
        "character": "受ける",
        "kana": "うける",
        "meaning": "to receive, to accept, to catch",
        "level": 9
    },
    {
        "character": "和服",
        "kana": "わふく",
        "meaning": "japanese style clothes, japanese clothing, japanese style clothing, japanese clothes",
        "level": 9
    },
    {
        "character": "始めに",
        "kana": "はじめに",
        "meaning": "in the beginning, to begin with, to start with",
        "level": 9
    },
    {
        "character": "始める",
        "kana": "はじめる",
        "meaning": "to begin, to start, to begin something, to start something",
        "level": 9
    },
    {
        "character": "〜屋",
        "kana": "や",
        "meaning": "store, shop",
        "level": 9
    },
    {
        "character": "名古屋",
        "kana": "なごや",
        "meaning": "nagoya",
        "level": 9
    },
    {
        "character": "部屋",
        "kana": "へや",
        "meaning": "room",
        "level": 9
    },
    {
        "character": "〜度",
        "kana": "ど",
        "meaning": "degrees",
        "level": 9
    },
    {
        "character": "角度",
        "kana": "かくど",
        "meaning": "angle",
        "level": 9
    },
    {
        "character": "弱虫",
        "kana": "よわむし",
        "meaning": "weakling, coward",
        "level": 9
    },
    {
        "character": "持つ",
        "kana": "もつ",
        "meaning": "to hold, to bring, to carry",
        "level": 9
    },
    {
        "character": "苦しい",
        "kana": "くるしい",
        "meaning": "painful, agonizing",
        "level": 9
    },
    {
        "character": "気持ち",
        "kana": "きもち",
        "meaning": "feeling",
        "level": 9
    },
    {
        "character": "小学校",
        "kana": "しょうがっこう",
        "meaning": "elementary school, primary school, grade school",
        "level": 9
    },
    {
        "character": "名物",
        "kana": "めいぶつ",
        "meaning": "famous product, special product, famous goods, special goods, famous item, special item",
        "level": 9
    },
    {
        "character": "本物",
        "kana": "ほんもの",
        "meaning": "the real thing, real deal, the real deal, real thing, genuine article, the genuine article",
        "level": 9
    },
    {
        "character": "世界",
        "kana": "せかい",
        "meaning": "the world, society, the universe",
        "level": 9
    },
    {
        "character": "発見",
        "kana": "はっけん",
        "meaning": "discovery",
        "level": 9
    },
    {
        "character": "美しい",
        "kana": "うつくしい",
        "meaning": "beautiful",
        "level": 9
    },
    {
        "character": "要点",
        "kana": "ようてん",
        "meaning": "main point, gist, main idea, essence",
        "level": 9
    },
    {
        "character": "重要",
        "kana": "じゅうよう",
        "meaning": "essential, important, necessary",
        "level": 9
    },
    {
        "character": "負ける",
        "kana": "まける",
        "meaning": "to lose, to be defeated",
        "level": 9
    },
    {
        "character": "送る",
        "kana": "おくる",
        "meaning": "to send",
        "level": 9
    },
    {
        "character": "二重",
        "kana": "にじゅう",
        "meaning": "double, dual",
        "level": 9
    },
    {
        "character": "重い",
        "kana": "おもい",
        "meaning": "heavy",
        "level": 9
    },
    {
        "character": "高さ",
        "kana": "たかさ",
        "meaning": "height",
        "level": 9
    },
    {
        "character": "白黒",
        "kana": "しろくろ",
        "meaning": "black and white, white and black",
        "level": 9
    },
    {
        "character": "決定",
        "kana": "けってい",
        "meaning": "decision, determination",
        "level": 9
    },
    {
        "character": "通り",
        "kana": "とおり",
        "meaning": "avenue, street, road, way",
        "level": 9
    },
    {
        "character": "発音",
        "kana": "はつおん",
        "meaning": "pronunciation",
        "level": 9
    },
    {
        "character": "一番目",
        "kana": "いちばんめ",
        "meaning": "first thing, the first",
        "level": 10
    },
    {
        "character": "速度",
        "kana": "そくど",
        "meaning": "speed",
        "level": 10
    },
    {
        "character": "起きる",
        "kana": "おきる",
        "meaning": "to wake up",
        "level": 10
    },
    {
        "character": "進化",
        "kana": "しんか",
        "meaning": "evolution, progress",
        "level": 10
    },
    {
        "character": "顔",
        "kana": "かお",
        "meaning": "face",
        "level": 10
    },
    {
        "character": "頭",
        "kana": "あたま",
        "meaning": "head",
        "level": 10
    },
    {
        "character": "農民",
        "kana": "のうみん",
        "meaning": "peasants, farmers",
        "level": 10
    },
    {
        "character": "横",
        "kana": "よこ",
        "meaning": "side",
        "level": 10
    },
    {
        "character": "算定する",
        "kana": "さんていする",
        "meaning": "to calculate",
        "level": 10
    },
    {
        "character": "飲む",
        "kana": "のむ",
        "meaning": "to drink",
        "level": 10
    },
    {
        "character": "言語",
        "kana": "げんご",
        "meaning": "language, a language",
        "level": 10
    },
    {
        "character": "回転",
        "kana": "かいてん",
        "meaning": "rotation, revolution, revolve, rotate",
        "level": 10
    },
    {
        "character": "買い物",
        "kana": "かいもの",
        "meaning": "shopping",
        "level": 10
    },
    {
        "character": "親しい",
        "kana": "したしい",
        "meaning": "intimate, friendly",
        "level": 10
    },
    {
        "character": "〜病",
        "kana": "びょう",
        "meaning": "disease, sickness, illness",
        "level": 10
    },
    {
        "character": "顔付き",
        "kana": "かおつき",
        "meaning": "expression, facial expression",
        "level": 10
    },
    {
        "character": "開発",
        "kana": "かいはつ",
        "meaning": "development",
        "level": 10
    },
    {
        "character": "運がいい",
        "kana": "うんがいい",
        "meaning": "lucky",
        "level": 10
    },
    {
        "character": "農",
        "kana": "のう",
        "meaning": "farming, agriculture",
        "level": 10
    },
    {
        "character": "曲線",
        "kana": "きょくせん",
        "meaning": "curve, curved line",
        "level": 10
    },
    {
        "character": "公開",
        "kana": "こうかい",
        "meaning": "open to the public",
        "level": 10
    },
    {
        "character": "親",
        "kana": "おや",
        "meaning": "parent",
        "level": 10
    },
    {
        "character": "道路",
        "kana": "どうろ",
        "meaning": "paved road, road, sealed road",
        "level": 10
    },
    {
        "character": "地下鉄",
        "kana": "ちかてつ",
        "meaning": "subway, the underground, the metro, the tube",
        "level": 10
    },
    {
        "character": "歌",
        "kana": "うた",
        "meaning": "song",
        "level": 10
    },
    {
        "character": "決まる",
        "kana": "きまる",
        "meaning": "to be decided, to be settled",
        "level": 10
    },
    {
        "character": "お酒",
        "kana": "おさけ",
        "meaning": "sake, alcohol",
        "level": 10
    },
    {
        "character": "運転する",
        "kana": "うんてんする",
        "meaning": "to drive",
        "level": 10
    },
    {
        "character": "転がる",
        "kana": "ころがる",
        "meaning": "to roll, to tumble",
        "level": 10
    },
    {
        "character": "運ぶ",
        "kana": "はこぶ",
        "meaning": "to carry",
        "level": 10
    },
    {
        "character": "読む",
        "kana": "よむ",
        "meaning": "to read",
        "level": 10
    },
    {
        "character": "知り合い",
        "kana": "しりあい",
        "meaning": "acquaintance",
        "level": 10
    },
    {
        "character": "最終",
        "kana": "さいしゅう",
        "meaning": "last, final, the last, the final",
        "level": 10
    },
    {
        "character": "進行",
        "kana": "しんこう",
        "meaning": "advance, progress",
        "level": 10
    },
    {
        "character": "農業",
        "kana": "のうぎょう",
        "meaning": "agriculture",
        "level": 10
    },
    {
        "character": "病気",
        "kana": "びょうき",
        "meaning": "sick, illness, sickness, disease",
        "level": 10
    },
    {
        "character": "聞く",
        "kana": "きく",
        "meaning": "to hear, to ask, to listen",
        "level": 10
    },
    {
        "character": "話",
        "kana": "はなし",
        "meaning": "story, talk, speech",
        "level": 10
    },
    {
        "character": "近道",
        "kana": "ちかみち",
        "meaning": "shortcut, short way",
        "level": 10
    },
    {
        "character": "工業",
        "kana": "こうぎょう",
        "meaning": "industry",
        "level": 10
    },
    {
        "character": "集中",
        "kana": "しゅうちゅう",
        "meaning": "concentration",
        "level": 10
    },
    {
        "character": "楽しむ",
        "kana": "たのしむ",
        "meaning": "to enjoy, to enjoy oneself, to have fun",
        "level": 10
    },
    {
        "character": "日本語",
        "kana": "にほんご",
        "meaning": "japanese language, japanese",
        "level": 10
    },
    {
        "character": "開業",
        "kana": "かいぎょう",
        "meaning": "opening a business, opening of business, starting a business",
        "level": 10
    },
    {
        "character": "外来語",
        "kana": "がいらいご",
        "meaning": "foreign word, borrowed word, loanword",
        "level": 10
    },
    {
        "character": "心配",
        "kana": "しんぱい",
        "meaning": "a worry, concern, anxiety, worry",
        "level": 10
    },
    {
        "character": "開始",
        "kana": "かいし",
        "meaning": "start, beginning, opening",
        "level": 10
    },
    {
        "character": "スペイン語",
        "kana": "すぺいんご, スペインご",
        "meaning": "spanish language, spanish",
        "level": 10
    },
    {
        "character": "終点",
        "kana": "しゅうてん",
        "meaning": "last stop, final stop",
        "level": 10
    },
    {
        "character": "学院",
        "kana": "がくいん",
        "meaning": "academy, institute",
        "level": 10
    },
    {
        "character": "最後",
        "kana": "さいご",
        "meaning": "last, the last, end, conclusion, final",
        "level": 10
    },
    {
        "character": "親切",
        "kana": "しんせつ",
        "meaning": "kind, kindness",
        "level": 10
    },
    {
        "character": "終わる",
        "kana": "おわる",
        "meaning": "to end, to finish",
        "level": 10
    },
    {
        "character": "日本酒",
        "kana": "にほんしゅ, にっぽんしゅ",
        "meaning": "japanese style alcohol, japanese alcohol, sake",
        "level": 10
    },
    {
        "character": "仕返し",
        "kana": "しかえし",
        "meaning": "get even, retaliation, get back at, revenge, get revenge",
        "level": 10
    },
    {
        "character": "調べる",
        "kana": "しらべる",
        "meaning": "to investigate, to research, to look into, to search",
        "level": 10
    },
    {
        "character": "集める",
        "kana": "あつめる",
        "meaning": "to collect, to gather, to collect something, to gather something",
        "level": 10
    },
    {
        "character": "主語",
        "kana": "しゅご",
        "meaning": "subject",
        "level": 10
    },
    {
        "character": "速い",
        "kana": "はやい",
        "meaning": "fast",
        "level": 10
    },
    {
        "character": "当て字",
        "kana": "あてじ",
        "meaning": "phonetic kanji",
        "level": 10
    },
    {
        "character": "研究所",
        "kana": "けんきゅうしょ, けんきゅうじょ",
        "meaning": "research institute, research laboratory, research establishment, research lab, research facility",
        "level": 10
    },
    {
        "character": "最も",
        "kana": "もっとも",
        "meaning": "the most, most, extremely",
        "level": 10
    },
    {
        "character": "線",
        "kana": "せん",
        "meaning": "line",
        "level": 10
    },
    {
        "character": "最近",
        "kana": "さいきん",
        "meaning": "recently, lately",
        "level": 10
    },
    {
        "character": "助かる",
        "kana": "たすかる",
        "meaning": "to be helped, to be saved, to be rescued",
        "level": 10
    },
    {
        "character": "化かす",
        "kana": "ばかす",
        "meaning": "to bewitch, to enchant",
        "level": 10
    },
    {
        "character": "目医者",
        "kana": "めいしゃ",
        "meaning": "eye doctor, optometrist, oculist",
        "level": 10
    },
    {
        "character": "出合う",
        "kana": "であう",
        "meaning": "to meet by chance, to meet unexpectedly, to come across, to encounter",
        "level": 10
    },
    {
        "character": "投げ付ける",
        "kana": "なげつける",
        "meaning": "to throw against, to throw at",
        "level": 10
    },
    {
        "character": "最高",
        "kana": "さいこう",
        "meaning": "the best, best, supreme, the most, most",
        "level": 10
    },
    {
        "character": "楽しみ",
        "kana": "たのしみ",
        "meaning": "looking forward to, hope, expectation, anticipation, pleasure, enjoyment",
        "level": 10
    },
    {
        "character": "歌手",
        "kana": "かしゅ",
        "meaning": "singer",
        "level": 10
    },
    {
        "character": "算数",
        "kana": "さんすう",
        "meaning": "arithmetic, math, mathematics",
        "level": 10
    },
    {
        "character": "終了",
        "kana": "しゅうりょう",
        "meaning": "end, finish, close",
        "level": 10
    },
    {
        "character": "習う",
        "kana": "ならう",
        "meaning": "to learn",
        "level": 10
    },
    {
        "character": "新聞",
        "kana": "しんぶん",
        "meaning": "newspaper",
        "level": 10
    },
    {
        "character": "落ちる",
        "kana": "おちる",
        "meaning": "to fall down, to drop, to fall",
        "level": 10
    },
    {
        "character": "青葉",
        "kana": "あおば",
        "meaning": "greenery",
        "level": 10
    },
    {
        "character": "親友",
        "kana": "しんゆう",
        "meaning": "close friend, best friend, good friend",
        "level": 10
    },
    {
        "character": "フランス語",
        "kana": "ふらんすご, フランスご",
        "meaning": "french language, french",
        "level": 10
    },
    {
        "character": "物語",
        "kana": "ものがたり",
        "meaning": "tale, story, legend",
        "level": 10
    },
    {
        "character": "読み方",
        "kana": "よみかた",
        "meaning": "reading, pronunciation, way of reading",
        "level": 10
    },
    {
        "character": "強調",
        "kana": "きょうちょう",
        "meaning": "emphasis, highlight, stress",
        "level": 10
    },
    {
        "character": "調子",
        "kana": "ちょうし",
        "meaning": "condition",
        "level": 10
    },
    {
        "character": "路地",
        "kana": "ろじ",
        "meaning": "alley, path, dirt road",
        "level": 10
    },
    {
        "character": "自転車",
        "kana": "じてんしゃ",
        "meaning": "bicycle, bike, pushbike",
        "level": 10
    },
    {
        "character": "転送",
        "kana": "てんそう",
        "meaning": "transfer, transmission, forwarding",
        "level": 10
    },
    {
        "character": "軽い",
        "kana": "かるい",
        "meaning": "lightweight, light, light weight",
        "level": 10
    },
    {
        "character": "返る",
        "kana": "かえる",
        "meaning": "to be returned, to return, to come back",
        "level": 10
    },
    {
        "character": "早速",
        "kana": "さっそく",
        "meaning": "at once, immediately, without delay, right away, right now",
        "level": 10
    },
    {
        "character": "進む",
        "kana": "すすむ",
        "meaning": "to advance, to go forward, to progress",
        "level": 10
    },
    {
        "character": "配る",
        "kana": "くばる",
        "meaning": "to distribute, to pass out, to deliver",
        "level": 10
    },
    {
        "character": "鉄人",
        "kana": "てつじん",
        "meaning": "strong man, badass, iron man, macho man, tough guy",
        "level": 10
    },
    {
        "character": "電鉄",
        "kana": "でんてつ",
        "meaning": "electric railway",
        "level": 10
    },
    {
        "character": "開ける",
        "kana": "あける",
        "meaning": "to open, to open something",
        "level": 10
    },
    {
        "character": "間に合う",
        "kana": "まにあう",
        "meaning": "to be in time for, to make it on time, to be on time for",
        "level": 10
    },
    {
        "character": "病院",
        "kana": "びょういん",
        "meaning": "hospital",
        "level": 10
    },
    {
        "character": "鳴く",
        "kana": "なく",
        "meaning": "to chirp, to bark, to make an animal sound",
        "level": 10
    },
    {
        "character": "向け",
        "kana": "むけ",
        "meaning": "made for, intended for, aimed at",
        "level": 10
    },
    {
        "character": "線路",
        "kana": "せんろ",
        "meaning": "railroad track, train track, railway track, track, line",
        "level": 10
    },
    {
        "character": "漢字",
        "kana": "かんじ",
        "meaning": "kanji, chinese letters, chinese characters",
        "level": 10
    },
    {
        "character": "病人",
        "kana": "びょうにん",
        "meaning": "sick person, patient",
        "level": 10
    },
    {
        "character": "集金",
        "kana": "しゅうきん",
        "meaning": "collecting money, money collection",
        "level": 10
    },
    {
        "character": "共通点",
        "kana": "きょうつうてん",
        "meaning": "common point, common feature",
        "level": 11
    },
    {
        "character": "海岸",
        "kana": "かいがん",
        "meaning": "seashore, coast, seacoast",
        "level": 11
    },
    {
        "character": "高級",
        "kana": "こうきゅう",
        "meaning": "high class, high grade, high level",
        "level": 11
    },
    {
        "character": "命令",
        "kana": "めいれい",
        "meaning": "order, command",
        "level": 11
    },
    {
        "character": "位",
        "kana": "い",
        "meaning": "rank",
        "level": 11
    },
    {
        "character": "作戦",
        "kana": "さくせん",
        "meaning": "tactics, strategy",
        "level": 11
    },
    {
        "character": "洋服",
        "kana": "ようふく",
        "meaning": "western clothing, western style clothes",
        "level": 11
    },
    {
        "character": "追う",
        "kana": "おう",
        "meaning": "to chase, to follow",
        "level": 11
    },
    {
        "character": "気持ちいい",
        "kana": "きもちいい",
        "meaning": "good feeling, feeling good, feels good",
        "level": 11
    },
    {
        "character": "苦しむ",
        "kana": "くるしむ",
        "meaning": "to suffer, to hurt",
        "level": 11
    },
    {
        "character": "特別",
        "kana": "とくべつ",
        "meaning": "special",
        "level": 11
    },
    {
        "character": "初回",
        "kana": "しょかい",
        "meaning": "the first time, first time",
        "level": 11
    },
    {
        "character": "運命",
        "kana": "うんめい",
        "meaning": "fate, destiny",
        "level": 11
    },
    {
        "character": "注意",
        "kana": "ちゅうい",
        "meaning": "caution, attention",
        "level": 11
    },
    {
        "character": "戦車",
        "kana": "せんしゃ",
        "meaning": "tank",
        "level": 11
    },
    {
        "character": "教育",
        "kana": "きょういく",
        "meaning": "education",
        "level": 11
    },
    {
        "character": "仲良く",
        "kana": "なかよく",
        "meaning": "friendly, good terms",
        "level": 11
    },
    {
        "character": "仲",
        "kana": "なか",
        "meaning": "relationship, relation",
        "level": 11
    },
    {
        "character": "不便",
        "kana": "ふべん",
        "meaning": "inconvenient, not convenient",
        "level": 11
    },
    {
        "character": "時々",
        "kana": "ときどき",
        "meaning": "sometimes, at times",
        "level": 11
    },
    {
        "character": "低い",
        "kana": "ひくい",
        "meaning": "low, short",
        "level": 11
    },
    {
        "character": "意見",
        "kana": "いけん",
        "meaning": "opinion, view",
        "level": 11
    },
    {
        "character": "共有",
        "kana": "きょうゆう",
        "meaning": "shared, co ownership, joint ownership, share",
        "level": 11
    },
    {
        "character": "仲直り",
        "kana": "なかなおり",
        "meaning": "reconciliation, make peace with",
        "level": 11
    },
    {
        "character": "神社",
        "kana": "じんじゃ",
        "meaning": "shinto shrine",
        "level": 11
    },
    {
        "character": "洋食",
        "kana": "ようしょく",
        "meaning": "western food, western style food",
        "level": 11
    },
    {
        "character": "洋風",
        "kana": "ようふう",
        "meaning": "western style",
        "level": 11
    },
    {
        "character": "伝える",
        "kana": "つたえる",
        "meaning": "to transmit, to tell",
        "level": 11
    },
    {
        "character": "洋室",
        "kana": "ようしつ",
        "meaning": "western style room",
        "level": 11
    },
    {
        "character": "見送る",
        "kana": "みおくる",
        "meaning": "to see off",
        "level": 11
    },
    {
        "character": "待ちぼうけ",
        "kana": "まちぼうけ",
        "meaning": "stood up, waiting in vain",
        "level": 11
    },
    {
        "character": "老人",
        "kana": "ろうじん",
        "meaning": "old person, elderly person",
        "level": 11
    },
    {
        "character": "集中する",
        "kana": "しゅうちゅうする",
        "meaning": "to concentrate",
        "level": 11
    },
    {
        "character": "命",
        "kana": "いのち",
        "meaning": "life, lifeforce",
        "level": 11
    },
    {
        "character": "戦い",
        "kana": "たたかい",
        "meaning": "battle, fight, conflict",
        "level": 11
    },
    {
        "character": "指",
        "kana": "ゆび",
        "meaning": "finger",
        "level": 11
    },
    {
        "character": "使い方",
        "kana": "つかいかた",
        "meaning": "how to use, way of using",
        "level": 11
    },
    {
        "character": "電波",
        "kana": "でんぱ",
        "meaning": "reception, radio wave, electromagnetic wave",
        "level": 11
    },
    {
        "character": "最低",
        "kana": "さいてい",
        "meaning": "the lowest, the worst, lowest, worst, nasty, terrible",
        "level": 11
    },
    {
        "character": "仕事",
        "kana": "しごと",
        "meaning": "job, work, occupation",
        "level": 11
    },
    {
        "character": "小指",
        "kana": "こゆび",
        "meaning": "little finger, pinky finger, pinky",
        "level": 11
    },
    {
        "character": "注文",
        "kana": "ちゅうもん",
        "meaning": "order, request",
        "level": 11
    },
    {
        "character": "味方",
        "kana": "みかた",
        "meaning": "ally, supporter, friend",
        "level": 11
    },
    {
        "character": "発売中",
        "kana": "はつばいちゅう",
        "meaning": "now on sale, now for sale, currently on sale",
        "level": 11
    },
    {
        "character": "最初",
        "kana": "さいしょ",
        "meaning": "the first, first, beginning, outset",
        "level": 11
    },
    {
        "character": "仲良し",
        "kana": "なかよし",
        "meaning": "good friend, intimate friend, close friend",
        "level": 11
    },
    {
        "character": "争う",
        "kana": "あらそう",
        "meaning": "to quarrel, to compete, to argue",
        "level": 11
    },
    {
        "character": "受付",
        "kana": "うけつけ",
        "meaning": "receptionist, reception",
        "level": 11
    },
    {
        "character": "不良",
        "kana": "ふりょう",
        "meaning": "bad, substandard, delinquent",
        "level": 11
    },
    {
        "character": "勝ち",
        "kana": "かち",
        "meaning": "victory, win, a victory, a win",
        "level": 11
    },
    {
        "character": "決定する",
        "kana": "けっていする",
        "meaning": "to decide, to determine",
        "level": 11
    },
    {
        "character": "合わせる",
        "kana": "あわせる",
        "meaning": "to join together, to unify together, to unite, to match, to unify, to bring together, to join",
        "level": 11
    },
    {
        "character": "波",
        "kana": "なみ",
        "meaning": "wave",
        "level": 11
    },
    {
        "character": "初級",
        "kana": "しょきゅう",
        "meaning": "beginner level, elementary level, beginning level",
        "level": 11
    },
    {
        "character": "労働者",
        "kana": "ろうどうしゃ",
        "meaning": "laborer, blue collar worker, manual laborer, labourer, manual labourer",
        "level": 11
    },
    {
        "character": "味",
        "kana": "あじ",
        "meaning": "taste, flavor, flavour",
        "level": 11
    },
    {
        "character": "良い",
        "kana": "よい, いい",
        "meaning": "good",
        "level": 11
    },
    {
        "character": "注ぐ",
        "kana": "そそぐ, つぐ",
        "meaning": "to pour",
        "level": 11
    },
    {
        "character": "戦場",
        "kana": "せんじょう",
        "meaning": "battlefield, battleground",
        "level": 11
    },
    {
        "character": "別人",
        "kana": "べつじん",
        "meaning": "changed man, different person, different man, changed person, new man",
        "level": 11
    },
    {
        "character": "主位",
        "kana": "しゅい",
        "meaning": "leading person, first place, leading position, first position, head position",
        "level": 11
    },
    {
        "character": "働く",
        "kana": "はたらく",
        "meaning": "to work, to labor, to labour",
        "level": 11
    },
    {
        "character": "仲間",
        "kana": "なかま",
        "meaning": "companion, comrade, associate",
        "level": 11
    },
    {
        "character": "昔",
        "kana": "むかし",
        "meaning": "long ago, long time ago",
        "level": 11
    },
    {
        "character": "別の",
        "kana": "べつの",
        "meaning": "separate, different, another, separate thing, different thing, another thing",
        "level": 11
    },
    {
        "character": "丁度いい",
        "kana": "ちょうどいい",
        "meaning": "just right, exactly right",
        "level": 11
    },
    {
        "character": "戦争",
        "kana": "せんそう",
        "meaning": "war",
        "level": 11
    },
    {
        "character": "放送する",
        "kana": "ほうそうする",
        "meaning": "to broadcast",
        "level": 11
    },
    {
        "character": "苦手",
        "kana": "にがて",
        "meaning": "hard to deal with, weak point, poor at, not very good at, bad at",
        "level": 11
    },
    {
        "character": "負け犬",
        "kana": "まけいぬ",
        "meaning": "loser",
        "level": 11
    },
    {
        "character": "乗り場",
        "kana": "のりば",
        "meaning": "bus stop, taxi stand, train platform, place for boarding vehicles",
        "level": 11
    },
    {
        "character": "競争",
        "kana": "きょうそう",
        "meaning": "competition",
        "level": 11
    },
    {
        "character": "一位",
        "kana": "いちい",
        "meaning": "first place, first ranked",
        "level": 11
    },
    {
        "character": "気付く",
        "kana": "きづく",
        "meaning": "to realize, to notice, to realise",
        "level": 11
    },
    {
        "character": "便利",
        "kana": "べんり",
        "meaning": "convenient, handy",
        "level": 11
    },
    {
        "character": "便所",
        "kana": "べんじょ",
        "meaning": "toilet, lavatory, restroom, bathroom",
        "level": 11
    },
    {
        "character": "共同",
        "kana": "きょうどう",
        "meaning": "cooperation",
        "level": 11
    },
    {
        "character": "開放する",
        "kana": "かいほうする",
        "meaning": "to fling open, to throw open, to liberate",
        "level": 11
    },
    {
        "character": "上級",
        "kana": "じょうきゅう",
        "meaning": "advanced level, high grade, advanced grade, high level",
        "level": 11
    },
    {
        "character": "育つ",
        "kana": "そだつ",
        "meaning": "to be raised",
        "level": 11
    },
    {
        "character": "労働",
        "kana": "ろうどう",
        "meaning": "manual labor, manual labour",
        "level": 11
    },
    {
        "character": "公共",
        "kana": "こうきょう",
        "meaning": "public, community",
        "level": 11
    },
    {
        "character": "意外",
        "kana": "いがい",
        "meaning": "unexpected",
        "level": 11
    },
    {
        "character": "別々",
        "kana": "べつべつ",
        "meaning": "separately, individually",
        "level": 11
    },
    {
        "character": "別に",
        "kana": "べつに",
        "meaning": "not particularly, separately, not really, not exactly",
        "level": 11
    },
    {
        "character": "利く",
        "kana": "きく",
        "meaning": "to be effective, to show effect",
        "level": 11
    },
    {
        "character": "成功",
        "kana": "せいこう",
        "meaning": "success",
        "level": 11
    },
    {
        "character": "苦労",
        "kana": "くろう",
        "meaning": "hardship, troubles",
        "level": 11
    },
    {
        "character": "指す",
        "kana": "さす",
        "meaning": "to point, to point at",
        "level": 11
    },
    {
        "character": "意味",
        "kana": "いみ",
        "meaning": "meaning",
        "level": 11
    },
    {
        "character": "友好",
        "kana": "ゆうこう",
        "meaning": "friendship",
        "level": 11
    },
    {
        "character": "好き",
        "kana": "すき",
        "meaning": "like, fondness, love, to like",
        "level": 11
    },
    {
        "character": "成る",
        "kana": "なる",
        "meaning": "to become",
        "level": 11
    },
    {
        "character": "拾う",
        "kana": "ひろう",
        "meaning": "to pick up, to find, to gather",
        "level": 11
    },
    {
        "character": "指定する",
        "kana": "していする",
        "meaning": "to appoint, to assign, to designate, to specify",
        "level": 11
    },
    {
        "character": "放す",
        "kana": "はなす",
        "meaning": "to release, to let go, to release something, to let go of something",
        "level": 11
    },
    {
        "character": "太平洋",
        "kana": "たいへいよう",
        "meaning": "pacific ocean",
        "level": 11
    },
    {
        "character": "特に",
        "kana": "とくに",
        "meaning": "especially",
        "level": 11
    },
    {
        "character": "神",
        "kana": "かみ",
        "meaning": "god, gods",
        "level": 11
    },
    {
        "character": "神道",
        "kana": "しんとう",
        "meaning": "shinto, shintou",
        "level": 11
    },
    {
        "character": "競う",
        "kana": "きそう",
        "meaning": "to compete",
        "level": 11
    },
    {
        "character": "秒",
        "kana": "びょう",
        "meaning": "second",
        "level": 11
    },
    {
        "character": "中級",
        "kana": "ちゅうきゅう",
        "meaning": "intermediate level, intermediate rank, intermediate grade",
        "level": 11
    },
    {
        "character": "努力",
        "kana": "どりょく",
        "meaning": "great effort, exertion, grueling effort",
        "level": 11
    },
    {
        "character": "文章",
        "kana": "ぶんしょう",
        "meaning": "article, sentence, composition",
        "level": 12
    },
    {
        "character": "空港",
        "kana": "くうこう",
        "meaning": "airport",
        "level": 12
    },
    {
        "character": "動く",
        "kana": "うごく",
        "meaning": "to move, to operate",
        "level": 12
    },
    {
        "character": "根本",
        "kana": "こんぽん",
        "meaning": "root, source, origin, foundation",
        "level": 12
    },
    {
        "character": "会社員",
        "kana": "かいしゃいん",
        "meaning": "company employee",
        "level": 12
    },
    {
        "character": "広島",
        "kana": "ひろしま",
        "meaning": "hiroshima",
        "level": 12
    },
    {
        "character": "登山",
        "kana": "とざん",
        "meaning": "mountain climbing",
        "level": 12
    },
    {
        "character": "社員",
        "kana": "しゃいん",
        "meaning": "employee, staff, company employee, company staff",
        "level": 12
    },
    {
        "character": "二階",
        "kana": "にかい",
        "meaning": "second floor, floor two, second story, second storey",
        "level": 12
    },
    {
        "character": "歯",
        "kana": "は",
        "meaning": "tooth",
        "level": 12
    },
    {
        "character": "心配事",
        "kana": "しんぱいごと",
        "meaning": "cares, worries, troubles",
        "level": 12
    },
    {
        "character": "一流",
        "kana": "いちりゅう",
        "meaning": "first rate, first class, top notch, top grade",
        "level": 12
    },
    {
        "character": "地球",
        "kana": "ちきゅう",
        "meaning": "the earth, the globe, earth",
        "level": 12
    },
    {
        "character": "運",
        "kana": "うん",
        "meaning": "luck",
        "level": 12
    },
    {
        "character": "虫歯",
        "kana": "むしば",
        "meaning": "cavity, decayed tooth",
        "level": 12
    },
    {
        "character": "音読み",
        "kana": "おんよみ",
        "meaning": "chinese reading, on'yomi",
        "level": 12
    },
    {
        "character": "第二章",
        "kana": "だいにしょう",
        "meaning": "chapter two, second chapter",
        "level": 12
    },
    {
        "character": "歯医者",
        "kana": "はいしゃ",
        "meaning": "dentist",
        "level": 12
    },
    {
        "character": "運転手",
        "kana": "うんてんしゅ",
        "meaning": "driver",
        "level": 12
    },
    {
        "character": "運動",
        "kana": "うんどう",
        "meaning": "exercise",
        "level": 12
    },
    {
        "character": "父親",
        "kana": "ちちおや",
        "meaning": "father",
        "level": 12
    },
    {
        "character": "京都",
        "kana": "きょうと",
        "meaning": "kyoto, kyouto",
        "level": 12
    },
    {
        "character": "深夜",
        "kana": "しんや",
        "meaning": "middle of the night, late at night",
        "level": 12
    },
    {
        "character": "根",
        "kana": "ね",
        "meaning": "root",
        "level": 12
    },
    {
        "character": "悲しい",
        "kana": "かなしい",
        "meaning": "sad",
        "level": 12
    },
    {
        "character": "短い",
        "kana": "みじかい",
        "meaning": "short",
        "level": 12
    },
    {
        "character": "短期",
        "kana": "たんき",
        "meaning": "short period, short term",
        "level": 12
    },
    {
        "character": "最深",
        "kana": "さいしん",
        "meaning": "deepest, the deepest",
        "level": 12
    },
    {
        "character": "終わり",
        "kana": "おわり",
        "meaning": "the end, end, the finish, finish",
        "level": 12
    },
    {
        "character": "温泉",
        "kana": "おんせん",
        "meaning": "hot springs, onsen",
        "level": 12
    },
    {
        "character": "下着",
        "kana": "したぎ",
        "meaning": "underwear",
        "level": 12
    },
    {
        "character": "温かい",
        "kana": "あたたかい",
        "meaning": "warm",
        "level": 12
    },
    {
        "character": "泉",
        "kana": "いずみ",
        "meaning": "springs, fountainhead",
        "level": 12
    },
    {
        "character": "三番目",
        "kana": "さんばんめ",
        "meaning": "third thing, the third",
        "level": 12
    },
    {
        "character": "温度",
        "kana": "おんど",
        "meaning": "temperature",
        "level": 12
    },
    {
        "character": "飲み物",
        "kana": "のみもの",
        "meaning": "beverage, drink",
        "level": 12
    },
    {
        "character": "母親",
        "kana": "ははおや",
        "meaning": "mother",
        "level": 12
    },
    {
        "character": "落とす",
        "kana": "おとす",
        "meaning": "to drop something, to let fall, to drop, to fall",
        "level": 12
    },
    {
        "character": "息",
        "kana": "いき",
        "meaning": "breath",
        "level": 12
    },
    {
        "character": "第一位",
        "kana": "だいいちい",
        "meaning": "first place, first rank",
        "level": 12
    },
    {
        "character": "本流",
        "kana": "ほんりゅう",
        "meaning": "mainstream",
        "level": 12
    },
    {
        "character": "悪い",
        "kana": "わるい",
        "meaning": "bad, substandard",
        "level": 12
    },
    {
        "character": "血族",
        "kana": "けつぞく",
        "meaning": "blood relative",
        "level": 12
    },
    {
        "character": "鳴る",
        "kana": "なる",
        "meaning": "to ring",
        "level": 12
    },
    {
        "character": "四十二階",
        "kana": "よんじゅうにかい",
        "meaning": "forty second floor, floor forty two, 42nd floor, floor 42, forty second story, forty second storey",
        "level": 12
    },
    {
        "character": "気温",
        "kana": "きおん",
        "meaning": "temperature",
        "level": 12
    },
    {
        "character": "利息",
        "kana": "りそく",
        "meaning": "interest",
        "level": 12
    },
    {
        "character": "暑い",
        "kana": "あつい",
        "meaning": "hot weather, hot",
        "level": 12
    },
    {
        "character": "期待",
        "kana": "きたい",
        "meaning": "expectation, expect, anticipate",
        "level": 12
    },
    {
        "character": "悪女",
        "kana": "あくじょ",
        "meaning": "evil woman, wicked woman, bad woman",
        "level": 12
    },
    {
        "character": "祭",
        "kana": "まつり",
        "meaning": "festival",
        "level": 12
    },
    {
        "character": "勝手",
        "kana": "かって",
        "meaning": "as one pleases, one's own convenience, one's own way, one's way",
        "level": 12
    },
    {
        "character": "見返る",
        "kana": "みかえる",
        "meaning": "to look back at, to look back on",
        "level": 12
    },
    {
        "character": "太陽",
        "kana": "たいよう",
        "meaning": "sun, the sun, sol",
        "level": 12
    },
    {
        "character": "消化",
        "kana": "しょうか",
        "meaning": "digestion",
        "level": 12
    },
    {
        "character": "流す",
        "kana": "ながす",
        "meaning": "to flow, to flush, to drain, to pour, to float, to wash away, to set afloat",
        "level": 12
    },
    {
        "character": "二倍",
        "kana": "にばい",
        "meaning": "double, two times, twice",
        "level": 12
    },
    {
        "character": "家庭",
        "kana": "かてい",
        "meaning": "family, household",
        "level": 12
    },
    {
        "character": "登る",
        "kana": "のぼる",
        "meaning": "to climb, to ascend",
        "level": 12
    },
    {
        "character": "民族",
        "kana": "みんぞく",
        "meaning": "ethnic group, ethnicity, race",
        "level": 12
    },
    {
        "character": "開く",
        "kana": "あく",
        "meaning": "to open, to be open",
        "level": 12
    },
    {
        "character": "店員",
        "kana": "てんいん",
        "meaning": "shop staff, store staff, store employee, shop employee, clerk, salesperson, shop assistant",
        "level": 12
    },
    {
        "character": "商売",
        "kana": "しょうばい",
        "meaning": "business, commerce",
        "level": 12
    },
    {
        "character": "短刀",
        "kana": "たんとう",
        "meaning": "short sword, dagger, tanto",
        "level": 12
    },
    {
        "character": "聞こえる",
        "kana": "きこえる",
        "meaning": "hearable, audible, to be able to hear, to be heard, to be audible, can hear",
        "level": 12
    },
    {
        "character": "〜階",
        "kana": "かい",
        "meaning": "floor, story, storey",
        "level": 12
    },
    {
        "character": "水着",
        "kana": "みずぎ",
        "meaning": "swim suit, swimsuit, bathing suit, swimwear, swimming suit",
        "level": 12
    },
    {
        "character": "言葉",
        "kana": "ことば",
        "meaning": "word, language, manner of speech",
        "level": 12
    },
    {
        "character": "歌う",
        "kana": "うたう",
        "meaning": "to sing",
        "level": 12
    },
    {
        "character": "終電",
        "kana": "しゅうでん",
        "meaning": "last train, the last train",
        "level": 12
    },
    {
        "character": "落ち葉",
        "kana": "おちば",
        "meaning": "fallen leaves, fallen leaf",
        "level": 12
    },
    {
        "character": "話し方",
        "kana": "はなしかた",
        "meaning": "way of speaking, speaking style, way of talking, talking style",
        "level": 12
    },
    {
        "character": "起こる",
        "kana": "おこる",
        "meaning": "to occur, to happen, to take place",
        "level": 12
    },
    {
        "character": "集まる",
        "kana": "あつまる",
        "meaning": "to come together, to gather, to be gathered",
        "level": 12
    },
    {
        "character": "酒飲み",
        "kana": "さけのみ",
        "meaning": "alcoholic, boozer, drunkard",
        "level": 12
    },
    {
        "character": "〜倍",
        "kana": "ばい",
        "meaning": "times",
        "level": 12
    },
    {
        "character": "勉強",
        "kana": "べんきょう",
        "meaning": "studies, study",
        "level": 12
    },
    {
        "character": "動物",
        "kana": "どうぶつ",
        "meaning": "animal",
        "level": 12
    },
    {
        "character": "全員",
        "kana": "ぜんいん",
        "meaning": "all members, all hands, everyone, everybody",
        "level": 12
    },
    {
        "character": "商人",
        "kana": "しょうにん",
        "meaning": "merchant, trader, shopkeeper",
        "level": 12
    },
    {
        "character": "寒い",
        "kana": "さむい",
        "meaning": "cold",
        "level": 12
    },
    {
        "character": "庭",
        "kana": "にわ",
        "meaning": "garden, yard",
        "level": 12
    },
    {
        "character": "息子",
        "kana": "むすこ",
        "meaning": "son",
        "level": 12
    },
    {
        "character": "悪人",
        "kana": "あくにん",
        "meaning": "bad person, villain, evildoer, bad guy, wicked person, evil person",
        "level": 12
    },
    {
        "character": "最悪",
        "kana": "さいあく",
        "meaning": "the worst, worst",
        "level": 12
    },
    {
        "character": "旅",
        "kana": "たび",
        "meaning": "trip, travel",
        "level": 12
    },
    {
        "character": "旅行",
        "kana": "りょこう",
        "meaning": "trip, travel",
        "level": 12
    },
    {
        "character": "家族",
        "kana": "かぞく",
        "meaning": "family, immediate family",
        "level": 12
    },
    {
        "character": "学期",
        "kana": "がっき",
        "meaning": "school term",
        "level": 12
    },
    {
        "character": "時期",
        "kana": "じき",
        "meaning": "time, season, period, time period, period of time",
        "level": 12
    },
    {
        "character": "大根",
        "kana": "だいこん",
        "meaning": "daikon, japanese radish",
        "level": 12
    },
    {
        "character": "屋根",
        "kana": "やね",
        "meaning": "roof",
        "level": 12
    },
    {
        "character": "根気",
        "kana": "こんき",
        "meaning": "patience, perseverance, persistence",
        "level": 12
    },
    {
        "character": "植物",
        "kana": "しょくぶつ",
        "meaning": "plant, vegetation",
        "level": 12
    },
    {
        "character": "流行",
        "kana": "りゅうこう",
        "meaning": "trend, fad, craze",
        "level": 12
    },
    {
        "character": "消す",
        "kana": "けす",
        "meaning": "to extinguish, to erase, to turn off",
        "level": 12
    },
    {
        "character": "水深",
        "kana": "すいしん",
        "meaning": "water depth, depth of water",
        "level": 12
    },
    {
        "character": "深い",
        "kana": "ふかい",
        "meaning": "deep",
        "level": 12
    },
    {
        "character": "湯気",
        "kana": "ゆげ",
        "meaning": "steam, vapor",
        "level": 12
    },
    {
        "character": "茶の湯",
        "kana": "ちゃのゆ",
        "meaning": "tea ceremony",
        "level": 12
    },
    {
        "character": "球",
        "kana": "たま",
        "meaning": "sphere, ball, sports ball",
        "level": 12
    },
    {
        "character": "野球",
        "kana": "やきゅう",
        "meaning": "baseball",
        "level": 12
    },
    {
        "character": "転ぶ",
        "kana": "ころぶ",
        "meaning": "to fall over, to fall down",
        "level": 12
    },
    {
        "character": "東京都",
        "kana": "とうきょうと",
        "meaning": "tokyo metropolitan area, tokyo metro, tokyo metropolis",
        "level": 12
    },
    {
        "character": "着く",
        "kana": "つく",
        "meaning": "to arrive",
        "level": 12
    },
    {
        "character": "着る",
        "kana": "きる",
        "meaning": "to wear, to put on",
        "level": 12
    },
    {
        "character": "着物",
        "kana": "きもの",
        "meaning": "kimono, clothes",
        "level": 12
    },
    {
        "character": "童話",
        "kana": "どうわ",
        "meaning": "children's story",
        "level": 12
    },
    {
        "character": "第一",
        "kana": "だいいち",
        "meaning": "the first, first, number one, best",
        "level": 12
    },
    {
        "character": "心配する",
        "kana": "しんぱいする",
        "meaning": "to worry, to be concerned, to be anxious",
        "level": 12
    },
    {
        "character": "一階",
        "kana": "いっかい",
        "meaning": "first floor, floor one, first story, first storey",
        "level": 12
    },
    {
        "character": "鳴き声",
        "kana": "なきごえ",
        "meaning": "animal cry, animal sound, animal noise, chirp, tweet, roar, bark, meow",
        "level": 12
    },
    {
        "character": "一億",
        "kana": "いちおく",
        "meaning": "one hundred million",
        "level": 13
    },
    {
        "character": "全然",
        "kana": "ぜんぜん",
        "meaning": "entirely, completely, not at all",
        "level": 13
    },
    {
        "character": "鏡",
        "kana": "かがみ",
        "meaning": "mirror",
        "level": 13
    },
    {
        "character": "話題",
        "kana": "わだい",
        "meaning": "topic, subject",
        "level": 13
    },
    {
        "character": "追い付く",
        "kana": "おいつく",
        "meaning": "to catch up to, to overtake",
        "level": 13
    },
    {
        "character": "銀色",
        "kana": "ぎんいろ",
        "meaning": "silver, silver color, silver colour, colour silver, color silver",
        "level": 13
    },
    {
        "character": "福島",
        "kana": "ふくしま",
        "meaning": "fukushima",
        "level": 13
    },
    {
        "character": "注文する",
        "kana": "ちゅうもんする",
        "meaning": "to order, to request",
        "level": 13
    },
    {
        "character": "殺人",
        "kana": "さつじん",
        "meaning": "murder",
        "level": 13
    },
    {
        "character": "橋",
        "kana": "はし",
        "meaning": "bridge",
        "level": 13
    },
    {
        "character": "共有する",
        "kana": "きょうゆうする",
        "meaning": "to share, to own jointly, to co own",
        "level": 13
    },
    {
        "character": "疑問",
        "kana": "ぎもん",
        "meaning": "doubt",
        "level": 13
    },
    {
        "character": "一億円",
        "kana": "いちおくえん",
        "meaning": "one hundred million yen",
        "level": 13
    },
    {
        "character": "想像する",
        "kana": "そうぞうする",
        "meaning": "to imagine",
        "level": 13
    },
    {
        "character": "緑色",
        "kana": "みどりいろ",
        "meaning": "green, color green, green color, colour green, green colour",
        "level": 13
    },
    {
        "character": "五感",
        "kana": "ごかん",
        "meaning": "the five senses, five senses",
        "level": 13
    },
    {
        "character": "銀",
        "kana": "ぎん",
        "meaning": "silver",
        "level": 13
    },
    {
        "character": "左利き",
        "kana": "ひだりきき",
        "meaning": "left handed",
        "level": 13
    },
    {
        "character": "緑",
        "kana": "みどり",
        "meaning": "green",
        "level": 13
    },
    {
        "character": "宿題",
        "kana": "しゅくだい",
        "meaning": "homework",
        "level": 13
    },
    {
        "character": "人情",
        "kana": "にんじょう",
        "meaning": "humanity, human feelings, empathy, kindness, sympathy",
        "level": 13
    },
    {
        "character": "億",
        "kana": "おく",
        "meaning": "hundred million",
        "level": 13
    },
    {
        "character": "情熱",
        "kana": "じょうねつ",
        "meaning": "passion, enthusiasm",
        "level": 13
    },
    {
        "character": "暗殺",
        "kana": "あんさつ",
        "meaning": "assassination",
        "level": 13
    },
    {
        "character": "感じ",
        "kana": "かんじ",
        "meaning": "feeling",
        "level": 13
    },
    {
        "character": "予想",
        "kana": "よそう",
        "meaning": "expect, anticipate, expectation, anticipation, prediction",
        "level": 13
    },
    {
        "character": "当然",
        "kana": "とうぜん",
        "meaning": "natural, obvious",
        "level": 13
    },
    {
        "character": "回想",
        "kana": "かいそう",
        "meaning": "retrospection, reminiscence",
        "level": 13
    },
    {
        "character": "詩歌",
        "kana": "しか, しいか",
        "meaning": "poetry",
        "level": 13
    },
    {
        "character": "新宿",
        "kana": "しんじゅく",
        "meaning": "shinjuku",
        "level": 13
    },
    {
        "character": "思想",
        "kana": "しそう",
        "meaning": "thought, idea",
        "level": 13
    },
    {
        "character": "車輪",
        "kana": "しゃりん",
        "meaning": "tire, car wheel, tyre",
        "level": 13
    },
    {
        "character": "様々",
        "kana": "さまざま",
        "meaning": "various, many",
        "level": 13
    },
    {
        "character": "謝る",
        "kana": "あやまる",
        "meaning": "to apologize",
        "level": 13
    },
    {
        "character": "伝わる",
        "kana": "つたわる",
        "meaning": "to be transmitted",
        "level": 13
    },
    {
        "character": "養う",
        "kana": "やしなう",
        "meaning": "to foster, to raise, to rear",
        "level": 13
    },
    {
        "character": "練習",
        "kana": "れんしゅう",
        "meaning": "practice",
        "level": 13
    },
    {
        "character": "事情",
        "kana": "じじょう",
        "meaning": "circumstances",
        "level": 13
    },
    {
        "character": "〜様",
        "kana": "さま",
        "meaning": "formal name ender, formal name title, sama, very formal name ender",
        "level": 13
    },
    {
        "character": "駅",
        "kana": "えき",
        "meaning": "station, train station",
        "level": 13
    },
    {
        "character": "映像",
        "kana": "えいぞう",
        "meaning": "reflection, image",
        "level": 13
    },
    {
        "character": "選ぶ",
        "kana": "えらぶ",
        "meaning": "to choose",
        "level": 13
    },
    {
        "character": "感じる",
        "kana": "かんじる",
        "meaning": "to feel",
        "level": 13
    },
    {
        "character": "殺す",
        "kana": "ころす",
        "meaning": "to kill",
        "level": 13
    },
    {
        "character": "神風",
        "kana": "かみかぜ",
        "meaning": "kamikaze, divine winds",
        "level": 13
    },
    {
        "character": "酒好き",
        "kana": "さけずき",
        "meaning": "alcoholic, boozer, drunkard",
        "level": 13
    },
    {
        "character": "手伝う",
        "kana": "てつだう",
        "meaning": "to help, to assist, to lend a hand, to give a hand",
        "level": 13
    },
    {
        "character": "感謝",
        "kana": "かんしゃ",
        "meaning": "thanks, gratitude",
        "level": 13
    },
    {
        "character": "養子",
        "kana": "ようし",
        "meaning": "adopted child, son in law",
        "level": 13
    },
    {
        "character": "感心",
        "kana": "かんしん",
        "meaning": "admiration",
        "level": 13
    },
    {
        "character": "心願",
        "kana": "しんがん",
        "meaning": "heartfelt desire, heartfelt wish, prayer, heart's desire",
        "level": 13
    },
    {
        "character": "入館料",
        "kana": "にゅうかんりょう",
        "meaning": "admission fee, entrance fee, entry fee",
        "level": 13
    },
    {
        "character": "駅長",
        "kana": "えきちょう",
        "meaning": "station master, stationmaster, train station master, train stationmaster",
        "level": 13
    },
    {
        "character": "賞金",
        "kana": "しょうきん",
        "meaning": "cash prize, prize money",
        "level": 13
    },
    {
        "character": "輪",
        "kana": "わ",
        "meaning": "ring, wheel, loop",
        "level": 13
    },
    {
        "character": "旅館",
        "kana": "りょかん",
        "meaning": "japanese inn, japanese hotel, inn, ryokan, japanese style inn, japanese style hotel",
        "level": 13
    },
    {
        "character": "初めに",
        "kana": "はじめに",
        "meaning": "beginning, in the beginning, first of all, to begin with",
        "level": 13
    },
    {
        "character": "初めて",
        "kana": "はじめて",
        "meaning": "for the first time, first time",
        "level": 13
    },
    {
        "character": "整然",
        "kana": "せいぜん",
        "meaning": "orderly, systematic, well organized, natural order",
        "level": 13
    },
    {
        "character": "熱",
        "kana": "ねつ",
        "meaning": "fever, heat",
        "level": 13
    },
    {
        "character": "暗記",
        "kana": "あんき",
        "meaning": "memorization, memorize, memorisation, memorise",
        "level": 13
    },
    {
        "character": "同感",
        "kana": "どうかん",
        "meaning": "sympathy, same sentiment, concurrence",
        "level": 13
    },
    {
        "character": "追いかける",
        "kana": "おいかける",
        "meaning": "to follow, to stalk, to chase, to run after, to pursue",
        "level": 13
    },
    {
        "character": "駅前",
        "kana": "えきまえ",
        "meaning": "front of station, in front of station, front of the station, in front of the station, station front",
        "level": 13
    },
    {
        "character": "駅員",
        "kana": "えきいん",
        "meaning": "train station employee, train station staff, train station attendant, station attendant, station employee",
        "level": 13
    },
    {
        "character": "実感",
        "kana": "じっかん",
        "meaning": "real feeling, actual feeling",
        "level": 13
    },
    {
        "character": "別れる",
        "kana": "わかれる",
        "meaning": "to separate, to be divided, to part from",
        "level": 13
    },
    {
        "character": "整理",
        "kana": "せいり",
        "meaning": "arrangement, sorting, organization, adjustment",
        "level": 13
    },
    {
        "character": "宿",
        "kana": "やど",
        "meaning": "lodging, inn, hotel, lodge",
        "level": 13
    },
    {
        "character": "放れる",
        "kana": "はなれる",
        "meaning": "to be released",
        "level": 13
    },
    {
        "character": "待合室",
        "kana": "まちあいしつ",
        "meaning": "waiting room",
        "level": 13
    },
    {
        "character": "体育",
        "kana": "たいいく",
        "meaning": "pe class, pe, physical education, gym class",
        "level": 13
    },
    {
        "character": "飲み会",
        "kana": "のみかい",
        "meaning": "drinking party",
        "level": 13
    },
    {
        "character": "情け",
        "kana": "なさけ",
        "meaning": "pity, sympathy, mercy, compassion",
        "level": 13
    },
    {
        "character": "感想",
        "kana": "かんそう",
        "meaning": "impressions, one's impressions, thoughts",
        "level": 13
    },
    {
        "character": "楽器",
        "kana": "がっき",
        "meaning": "musical instrument",
        "level": 13
    },
    {
        "character": "画像",
        "kana": "がぞう",
        "meaning": "image, portrait, picture",
        "level": 13
    },
    {
        "character": "右利き",
        "kana": "みぎきき",
        "meaning": "right handed",
        "level": 13
    },
    {
        "character": "暗い",
        "kana": "くらい",
        "meaning": "dark",
        "level": 13
    },
    {
        "character": "問題",
        "kana": "もんだい",
        "meaning": "problem, question",
        "level": 13
    },
    {
        "character": "器",
        "kana": "うつわ",
        "meaning": "container, bowl, vessel",
        "level": 13
    },
    {
        "character": "器用",
        "kana": "きよう",
        "meaning": "dextrous, skillful, dexterous",
        "level": 13
    },
    {
        "character": "食器",
        "kana": "しょっき",
        "meaning": "tableware, eating utensils, utensils",
        "level": 13
    },
    {
        "character": "力士",
        "kana": "りきし",
        "meaning": "sumo wrestler",
        "level": 13
    },
    {
        "character": "大好き",
        "kana": "だいすき",
        "meaning": "really like, to really like, love, to love, like a lot, to like a lot, like very much, to like very much",
        "level": 13
    },
    {
        "character": "感動する",
        "kana": "かんどうする",
        "meaning": "to be emotionally moved, to be moved emotionally, to be moving",
        "level": 13
    },
    {
        "character": "感情",
        "kana": "かんじょう",
        "meaning": "feeling, emotion",
        "level": 13
    },
    {
        "character": "戦う",
        "kana": "たたかう",
        "meaning": "to fight, to battle, to combat",
        "level": 13
    },
    {
        "character": "料金",
        "kana": "りょうきん",
        "meaning": "fee, bills, fees, bill",
        "level": 13
    },
    {
        "character": "映画",
        "kana": "えいが",
        "meaning": "movie, film",
        "level": 13
    },
    {
        "character": "映る",
        "kana": "うつる",
        "meaning": "to be reflected, to be projected",
        "level": 13
    },
    {
        "character": "皆様",
        "kana": "みなさま, みんなさま",
        "meaning": "everyone, all, everybody",
        "level": 13
    },
    {
        "character": "目標",
        "kana": "もくひょう",
        "meaning": "goal, target",
        "level": 13
    },
    {
        "character": "自殺",
        "kana": "じさつ",
        "meaning": "suicide",
        "level": 13
    },
    {
        "character": "自然",
        "kana": "しぜん",
        "meaning": "nature, natural",
        "level": 13
    },
    {
        "character": "熱い",
        "kana": "あつい",
        "meaning": "hot thing, hot",
        "level": 13
    },
    {
        "character": "熱心",
        "kana": "ねっしん",
        "meaning": "enthusiasm, passion, zeal",
        "level": 13
    },
    {
        "character": "皆さん",
        "kana": "みなさん, みんなさん",
        "meaning": "everyone, everybody, all",
        "level": 13
    },
    {
        "character": "育てる",
        "kana": "そだてる",
        "meaning": "to bring up, to raise, to bring something up, to raise something",
        "level": 13
    },
    {
        "character": "詩",
        "kana": "し",
        "meaning": "poem",
        "level": 13
    },
    {
        "character": "詩人",
        "kana": "しじん",
        "meaning": "poet",
        "level": 13
    },
    {
        "character": "課長",
        "kana": "かちょう",
        "meaning": "section manager, section chief",
        "level": 13
    },
    {
        "character": "選手",
        "kana": "せんしゅ",
        "meaning": "pro athlete, sports player, professional athlete",
        "level": 13
    },
    {
        "character": "水銀",
        "kana": "すいぎん",
        "meaning": "mercury, quicksilver",
        "level": 13
    },
    {
        "character": "銀行",
        "kana": "ぎんこう",
        "meaning": "bank",
        "level": 13
    },
    {
        "character": "〜放題",
        "kana": "ほうだい",
        "meaning": "as much as you want, all you can",
        "level": 13
    },
    {
        "character": "お願いします",
        "kana": "おねがいします",
        "meaning": "please help me, please, if you would be so kind",
        "level": 13
    },
    {
        "character": "本館",
        "kana": "ほんかん",
        "meaning": "main building",
        "level": 13
    },
    {
        "character": "材木",
        "kana": "ざいもく",
        "meaning": "lumber, timber, wood",
        "level": 14
    },
    {
        "character": "期待する",
        "kana": "きたいする",
        "meaning": "to expect, to anticipate",
        "level": 14
    },
    {
        "character": "望み",
        "kana": "のぞみ",
        "meaning": "wish, hope, desire",
        "level": 14
    },
    {
        "character": "約",
        "kana": "やく",
        "meaning": "promise, approximately",
        "level": 14
    },
    {
        "character": "残業",
        "kana": "ざんぎょう",
        "meaning": "overtime",
        "level": 14
    },
    {
        "character": "私生活",
        "kana": "しせいかつ",
        "meaning": "personal life, one's personal life, private life, one's private life",
        "level": 14
    },
    {
        "character": "私立",
        "kana": "しりつ",
        "meaning": "private",
        "level": 14
    },
    {
        "character": "約束",
        "kana": "やくそく",
        "meaning": "promise, appointment, pact",
        "level": 14
    },
    {
        "character": "失望",
        "kana": "しつぼう",
        "meaning": "disappointment, despair",
        "level": 14
    },
    {
        "character": "悪気",
        "kana": "わるぎ",
        "meaning": "evil intent, malice",
        "level": 14
    },
    {
        "character": "着ける",
        "kana": "つける",
        "meaning": "to put on, to wear",
        "level": 14
    },
    {
        "character": "料理",
        "kana": "りょうり",
        "meaning": "cooking, cuisine, cookery",
        "level": 14
    },
    {
        "character": "私鉄",
        "kana": "してつ",
        "meaning": "private railway",
        "level": 14
    },
    {
        "character": "予約",
        "kana": "よやく",
        "meaning": "reservation, appointment",
        "level": 14
    },
    {
        "character": "頑固",
        "kana": "がんこ",
        "meaning": "stubborn",
        "level": 14
    },
    {
        "character": "才能",
        "kana": "さいのう",
        "meaning": "talent, ability, genius",
        "level": 14
    },
    {
        "character": "芸者",
        "kana": "げいしゃ",
        "meaning": "geisha",
        "level": 14
    },
    {
        "character": "願望",
        "kana": "がんぼう",
        "meaning": "desire, wish, aspiration",
        "level": 14
    },
    {
        "character": "人格",
        "kana": "じんかく",
        "meaning": "character, personality",
        "level": 14
    },
    {
        "character": "松",
        "kana": "まつ",
        "meaning": "pine, pine tree",
        "level": 14
    },
    {
        "character": "例外",
        "kana": "れいがい",
        "meaning": "exception",
        "level": 14
    },
    {
        "character": "協力",
        "kana": "きょうりょく",
        "meaning": "cooperation",
        "level": 14
    },
    {
        "character": "基本",
        "kana": "きほん",
        "meaning": "foundation, basics",
        "level": 14
    },
    {
        "character": "折る",
        "kana": "おる",
        "meaning": "to fold",
        "level": 14
    },
    {
        "character": "周囲",
        "kana": "しゅうい",
        "meaning": "perimeter, circumference, surroundings, environs",
        "level": 14
    },
    {
        "character": "女性",
        "kana": "じょせい",
        "meaning": "female",
        "level": 14
    },
    {
        "character": "男性",
        "kana": "だんせい",
        "meaning": "male",
        "level": 14
    },
    {
        "character": "技能",
        "kana": "ぎのう",
        "meaning": "skill, ability",
        "level": 14
    },
    {
        "character": "勉強する",
        "kana": "べんきょうする",
        "meaning": "to study",
        "level": 14
    },
    {
        "character": "温める",
        "kana": "あたためる",
        "meaning": "to warm up, to warm, to heat up, to heat",
        "level": 14
    },
    {
        "character": "悲しむ",
        "kana": "かなしむ",
        "meaning": "to be sad",
        "level": 14
    },
    {
        "character": "能力",
        "kana": "のうりょく",
        "meaning": "ability, capability",
        "level": 14
    },
    {
        "character": "木材",
        "kana": "もくざい",
        "meaning": "wood, lumber",
        "level": 14
    },
    {
        "character": "旅行する",
        "kana": "りょこうする",
        "meaning": "to travel, to take a trip",
        "level": 14
    },
    {
        "character": "約する",
        "kana": "やくする",
        "meaning": "to promise",
        "level": 14
    },
    {
        "character": "例文",
        "kana": "れいぶん",
        "meaning": "example sentence, model sentence, sample sentence",
        "level": 14
    },
    {
        "character": "完了",
        "kana": "かんりょう",
        "meaning": "completion, complete, finish, conclusion",
        "level": 14
    },
    {
        "character": "悪例",
        "kana": "あくれい",
        "meaning": "bad example, bad precedent",
        "level": 14
    },
    {
        "character": "美術",
        "kana": "びじゅつ",
        "meaning": "fine art",
        "level": 14
    },
    {
        "character": "念願",
        "kana": "ねんがん",
        "meaning": "heart's desire, earnest wish",
        "level": 14
    },
    {
        "character": "卒業",
        "kana": "そつぎょう",
        "meaning": "graduation",
        "level": 14
    },
    {
        "character": "特技",
        "kana": "とくぎ",
        "meaning": "specialty",
        "level": 14
    },
    {
        "character": "動かす",
        "kana": "うごかす",
        "meaning": "to move something",
        "level": 14
    },
    {
        "character": "旅行者",
        "kana": "りょこうしゃ",
        "meaning": "traveler, tourist",
        "level": 14
    },
    {
        "character": "目的",
        "kana": "もくてき",
        "meaning": "purpose, goal, motive",
        "level": 14
    },
    {
        "character": "流行歌",
        "kana": "りゅうこうか",
        "meaning": "popular song",
        "level": 14
    },
    {
        "character": "芸術",
        "kana": "げいじゅつ",
        "meaning": "art, the arts, fine art",
        "level": 14
    },
    {
        "character": "心理",
        "kana": "しんり",
        "meaning": "mental state, psychology",
        "level": 14
    },
    {
        "character": "例えば",
        "kana": "たとえば",
        "meaning": "for example, for instance",
        "level": 14
    },
    {
        "character": "格好",
        "kana": "かっこう",
        "meaning": "shape, form, posture",
        "level": 14
    },
    {
        "character": "参る",
        "kana": "まいる",
        "meaning": "to come, to go",
        "level": 14
    },
    {
        "character": "流行語",
        "kana": "りゅうこうご",
        "meaning": "popular phrase, catchphrase",
        "level": 14
    },
    {
        "character": "技",
        "kana": "わざ",
        "meaning": "technique, art",
        "level": 14
    },
    {
        "character": "周年",
        "kana": "しゅうねん",
        "meaning": "anniversary",
        "level": 14
    },
    {
        "character": "回転する",
        "kana": "かいてんする",
        "meaning": "to rotate, to revolve",
        "level": 14
    },
    {
        "character": "松葉",
        "kana": "まつば",
        "meaning": "pine needle",
        "level": 14
    },
    {
        "character": "希望",
        "kana": "きぼう",
        "meaning": "hope, wish, aspiration",
        "level": 14
    },
    {
        "character": "消化不良",
        "kana": "しょうかふりょう",
        "meaning": "indigestion",
        "level": 14
    },
    {
        "character": "私",
        "kana": "わたし, わたくし",
        "meaning": "i",
        "level": 14
    },
    {
        "character": "骨折",
        "kana": "こっせつ",
        "meaning": "broken bone, fracture, bone fracture",
        "level": 14
    },
    {
        "character": "残り",
        "kana": "のこり",
        "meaning": "remainder, remnant, leftover, residue",
        "level": 14
    },
    {
        "character": "日本的",
        "kana": "にほんてき",
        "meaning": "very japanese, typically japanese",
        "level": 14
    },
    {
        "character": "性格",
        "kana": "せいかく",
        "meaning": "personality, character",
        "level": 14
    },
    {
        "character": "回転ずし",
        "kana": "かいてんずし",
        "meaning": "rotating sushi, conveyor belt sushi, revolving sushi, sushi train, sushi go round",
        "level": 14
    },
    {
        "character": "完全",
        "kana": "かんぜん",
        "meaning": "complete, perfect, perfection, completeness",
        "level": 14
    },
    {
        "character": "芸人",
        "kana": "げいにん",
        "meaning": "comedian, actor, performer",
        "level": 14
    },
    {
        "character": "雰囲気",
        "kana": "ふんいき",
        "meaning": "atmosphere, ambience, ambiance, mood",
        "level": 14
    },
    {
        "character": "消しゴム",
        "kana": "けしごむ, けしゴム",
        "meaning": "eraser, rubber",
        "level": 14
    },
    {
        "character": "要求",
        "kana": "ようきゅう",
        "meaning": "demand, requirement",
        "level": 14
    },
    {
        "character": "妥協",
        "kana": "だきょう",
        "meaning": "compromise",
        "level": 14
    },
    {
        "character": "性病",
        "kana": "せいびょう",
        "meaning": "sexually transmitted disease, std",
        "level": 14
    },
    {
        "character": "起こす",
        "kana": "おこす",
        "meaning": "to wake someone up, to wake up, to wake someone",
        "level": 14
    },
    {
        "character": "完成",
        "kana": "かんせい",
        "meaning": "completion, accomplishment",
        "level": 14
    },
    {
        "character": "悪口",
        "kana": "わるくち, わるぐち",
        "meaning": "verbal abuse, saying bad things, insult, slander, bad mouth",
        "level": 14
    },
    {
        "character": "気持ち悪い",
        "kana": "きもちわるい",
        "meaning": "to feel terrible, terrible, to feel bad, bad feeling, feeling bad, feeling terrible",
        "level": 14
    },
    {
        "character": "消える",
        "kana": "きえる",
        "meaning": "to disappear, to go out, to turn off",
        "level": 14
    },
    {
        "character": "消化する",
        "kana": "しょうかする",
        "meaning": "to digest",
        "level": 14
    },
    {
        "character": "一例",
        "kana": "いちれい",
        "meaning": "instance, example",
        "level": 14
    },
    {
        "character": "自動",
        "kana": "じどう",
        "meaning": "automatic",
        "level": 14
    },
    {
        "character": "協会",
        "kana": "きょうかい",
        "meaning": "union, association, organization, organisation",
        "level": 14
    },
    {
        "character": "一周",
        "kana": "いっしゅう",
        "meaning": "one time around, once around",
        "level": 14
    },
    {
        "character": "囲む",
        "kana": "かこむ",
        "meaning": "to surround",
        "level": 14
    },
    {
        "character": "固い",
        "kana": "かたい",
        "meaning": "hard",
        "level": 14
    },
    {
        "character": "良好",
        "kana": "りょうこう",
        "meaning": "good, favorable, satisfactory",
        "level": 14
    },
    {
        "character": "四季",
        "kana": "しき",
        "meaning": "the four seasons, four seasons",
        "level": 14
    },
    {
        "character": "残念",
        "kana": "ざんねん",
        "meaning": "too bad, unfortunate",
        "level": 14
    },
    {
        "character": "人性",
        "kana": "じんせい",
        "meaning": "human nature, instinct",
        "level": 14
    },
    {
        "character": "折角",
        "kana": "せっかく",
        "meaning": "with trouble, with difficulty, going through the trouble, trouble with, difficulty with, on purpose, deliberately",
        "level": 14
    },
    {
        "character": "望む",
        "kana": "のぞむ",
        "meaning": "to wish, to desire",
        "level": 14
    },
    {
        "character": "材料",
        "kana": "ざいりょう",
        "meaning": "ingredients, material",
        "level": 14
    },
    {
        "character": "束",
        "kana": "たば",
        "meaning": "bundle",
        "level": 14
    },
    {
        "character": "合格する",
        "kana": "ごうかくする",
        "meaning": "to pass a test, to pass an exam",
        "level": 14
    },
    {
        "character": "残る",
        "kana": "のこる",
        "meaning": "to remain behind, to remain, to stay behind",
        "level": 14
    },
    {
        "character": "求める",
        "kana": "もとめる",
        "meaning": "to want, to request, to demand",
        "level": 14
    },
    {
        "character": "求人",
        "kana": "きゅうじん",
        "meaning": "help wanted, seeking workers",
        "level": 14
    },
    {
        "character": "流れる",
        "kana": "ながれる",
        "meaning": "to stream, to flow",
        "level": 14
    },
    {
        "character": "山登り",
        "kana": "やまのぼり",
        "meaning": "mountain climbing",
        "level": 14
    },
    {
        "character": "〜的",
        "kana": "てき",
        "meaning": "al, like, typical",
        "level": 14
    },
    {
        "character": "芸能界",
        "kana": "げいのうかい",
        "meaning": "showbusiness, showbiz, show business",
        "level": 14
    },
    {
        "character": "落ち着く",
        "kana": "おちつく",
        "meaning": "to calm down",
        "level": 14
    },
    {
        "character": "都合",
        "kana": "つごう",
        "meaning": "at your convenience, circumstance",
        "level": 14
    },
    {
        "character": "骨",
        "kana": "ほね",
        "meaning": "bone",
        "level": 14
    },
    {
        "character": "骨格",
        "kana": "こっかく",
        "meaning": "skeleton",
        "level": 14
    },
    {
        "character": "中毒",
        "kana": "ちゅうどく",
        "meaning": "poisoning, addiction",
        "level": 15
    },
    {
        "character": "変死",
        "kana": "へんし",
        "meaning": "unnatural death, accidental death",
        "level": 15
    },
    {
        "character": "春休み",
        "kana": "はるやすみ",
        "meaning": "spring break, spring vacation, spring holiday",
        "level": 15
    },
    {
        "character": "顔面",
        "kana": "がんめん",
        "meaning": "face of a person, person's face, face",
        "level": 15
    },
    {
        "character": "お願い",
        "kana": "おねがい",
        "meaning": "a request, request, wish, please",
        "level": 15
    },
    {
        "character": "練習する",
        "kana": "れんしゅうする",
        "meaning": "to practice",
        "level": 15
    },
    {
        "character": "暗記する",
        "kana": "あんきする",
        "meaning": "to memorize, to memorise",
        "level": 15
    },
    {
        "character": "信用",
        "kana": "しんよう",
        "meaning": "trust, confidence",
        "level": 15
    },
    {
        "character": "区",
        "kana": "く",
        "meaning": "district, ward",
        "level": 15
    },
    {
        "character": "坂",
        "kana": "さか",
        "meaning": "slope",
        "level": 15
    },
    {
        "character": "変",
        "kana": "へん",
        "meaning": "strange",
        "level": 15
    },
    {
        "character": "寺",
        "kana": "てら",
        "meaning": "temple",
        "level": 15
    },
    {
        "character": "岩",
        "kana": "いわ",
        "meaning": "boulder",
        "level": 15
    },
    {
        "character": "春",
        "kana": "はる",
        "meaning": "spring",
        "level": 15
    },
    {
        "character": "昨日",
        "kana": "きのう",
        "meaning": "yesterday",
        "level": 15
    },
    {
        "character": "晩",
        "kana": "ばん",
        "meaning": "night, evening",
        "level": 15
    },
    {
        "character": "計画",
        "kana": "けいかく",
        "meaning": "plan",
        "level": 15
    },
    {
        "character": "毒ガス",
        "kana": "どくがす, どくガス",
        "meaning": "poison gas",
        "level": 15
    },
    {
        "character": "毒言",
        "kana": "どくげん",
        "meaning": "abusive language",
        "level": 15
    },
    {
        "character": "有毒",
        "kana": "ゆうどく",
        "meaning": "poisonous, toxic",
        "level": 15
    },
    {
        "character": "毒",
        "kana": "どく",
        "meaning": "poison",
        "level": 15
    },
    {
        "character": "事変",
        "kana": "じへん",
        "meaning": "incident",
        "level": 15
    },
    {
        "character": "浅い",
        "kana": "あさい",
        "meaning": "shallow",
        "level": 15
    },
    {
        "character": "変人",
        "kana": "へんじん",
        "meaning": "an eccentric, eccentric, oddball",
        "level": 15
    },
    {
        "character": "英文",
        "kana": "えいぶん",
        "meaning": "english writing, english composition",
        "level": 15
    },
    {
        "character": "軍人",
        "kana": "ぐんじん",
        "meaning": "soldier",
        "level": 15
    },
    {
        "character": "秋",
        "kana": "あき",
        "meaning": "autumn, fall",
        "level": 15
    },
    {
        "character": "飲み放題",
        "kana": "のみほうだい",
        "meaning": "all you can drink",
        "level": 15
    },
    {
        "character": "計算",
        "kana": "けいさん",
        "meaning": "calculation",
        "level": 15
    },
    {
        "character": "不信",
        "kana": "ふしん",
        "meaning": "distrust, unfaithfulness",
        "level": 15
    },
    {
        "character": "仏教",
        "kana": "ぶっきょう",
        "meaning": "buddhism",
        "level": 15
    },
    {
        "character": "仏",
        "kana": "ほとけ",
        "meaning": "buddha",
        "level": 15
    },
    {
        "character": "式",
        "kana": "しき",
        "meaning": "ceremony, ritual, equation",
        "level": 15
    },
    {
        "character": "猫",
        "kana": "ねこ",
        "meaning": "cat",
        "level": 15
    },
    {
        "character": "ご飯",
        "kana": "ごはん",
        "meaning": "meal, cooked rice",
        "level": 15
    },
    {
        "character": "人殺し",
        "kana": "ひとごろし",
        "meaning": "murder",
        "level": 15
    },
    {
        "character": "英会話",
        "kana": "えいかいわ",
        "meaning": "english conversation",
        "level": 15
    },
    {
        "character": "英語",
        "kana": "えいご",
        "meaning": "english language, english",
        "level": 15
    },
    {
        "character": "映す",
        "kana": "うつす",
        "meaning": "to project, to reflect",
        "level": 15
    },
    {
        "character": "食べ放題",
        "kana": "たべほうだい",
        "meaning": "all you can eat",
        "level": 15
    },
    {
        "character": "信心",
        "kana": "しんじん",
        "meaning": "faith, belief",
        "level": 15
    },
    {
        "character": "今晩は",
        "kana": "こんばんは",
        "meaning": "good evening",
        "level": 15
    },
    {
        "character": "昼",
        "kana": "ひる",
        "meaning": "noon",
        "level": 15
    },
    {
        "character": "海軍",
        "kana": "かいぐん",
        "meaning": "navy",
        "level": 15
    },
    {
        "character": "時計",
        "kana": "とけい",
        "meaning": "watch, clock",
        "level": 15
    },
    {
        "character": "建築",
        "kana": "けんちく",
        "meaning": "architecture, construction",
        "level": 15
    },
    {
        "character": "地区",
        "kana": "ちく",
        "meaning": "district, area, zone",
        "level": 15
    },
    {
        "character": "区分",
        "kana": "くぶん",
        "meaning": "division, classification",
        "level": 15
    },
    {
        "character": "方法",
        "kana": "ほうほう",
        "meaning": "method, way",
        "level": 15
    },
    {
        "character": "殺人者",
        "kana": "さつじんしゃ",
        "meaning": "murderer",
        "level": 15
    },
    {
        "character": "丈",
        "kana": "たけ, だけ",
        "meaning": "height, only, just",
        "level": 15
    },
    {
        "character": "不法",
        "kana": "ふほう",
        "meaning": "illegal, unlawful",
        "level": 15
    },
    {
        "character": "同期中",
        "kana": "どうきちゅう",
        "meaning": "syncing, synchronizing",
        "level": 15
    },
    {
        "character": "美味しい",
        "kana": "おいしい",
        "meaning": "tasty, good tasting, delicious",
        "level": 15
    },
    {
        "character": "昨今",
        "kana": "さっこん",
        "meaning": "these days, nowadays",
        "level": 15
    },
    {
        "character": "映画館",
        "kana": "えいがかん",
        "meaning": "movie theater, cinema, movie theatre",
        "level": 15
    },
    {
        "character": "飯",
        "kana": "めし",
        "meaning": "meal, cooked rice, food",
        "level": 15
    },
    {
        "character": "丈夫",
        "kana": "じょうぶ",
        "meaning": "sturdy, firm",
        "level": 15
    },
    {
        "character": "変化",
        "kana": "へんか",
        "meaning": "change, transformation",
        "level": 15
    },
    {
        "character": "信じる",
        "kana": "しんじる",
        "meaning": "to believe, to trust in",
        "level": 15
    },
    {
        "character": "建てる",
        "kana": "たてる",
        "meaning": "to build, to construct",
        "level": 15
    },
    {
        "character": "子猫",
        "kana": "こねこ",
        "meaning": "kitten, kitty",
        "level": 15
    },
    {
        "character": "大変",
        "kana": "たいへん",
        "meaning": "serious, terrible, very, difficult, hard, hectic",
        "level": 15
    },
    {
        "character": "不器用",
        "kana": "ぶきよう",
        "meaning": "clumsy, unskillful",
        "level": 15
    },
    {
        "character": "勇気",
        "kana": "ゆうき",
        "meaning": "courage, bravery, valour, valor",
        "level": 15
    },
    {
        "character": "合計",
        "kana": "ごうけい",
        "meaning": "total, sum",
        "level": 15
    },
    {
        "character": "英国",
        "kana": "えいこく",
        "meaning": "britain, uk, united kingdom, england",
        "level": 15
    },
    {
        "character": "紀元後",
        "kana": "きげんご",
        "meaning": "after death, ad, anno domini, ce, common era",
        "level": 15
    },
    {
        "character": "整理する",
        "kana": "せいりする",
        "meaning": "to arrange, to organize, to sort",
        "level": 15
    },
    {
        "character": "大仏",
        "kana": "だいぶつ",
        "meaning": "giant buddha statue, daibutsu, giant statue of buddha, large buddha statue, large statue of buddha",
        "level": 15
    },
    {
        "character": "自信",
        "kana": "じしん",
        "meaning": "confidence, self confidence",
        "level": 15
    },
    {
        "character": "信号",
        "kana": "しんごう",
        "meaning": "traffic light, signal, traffic signal, stoplight, semaphore",
        "level": 15
    },
    {
        "character": "返信",
        "kana": "へんしん",
        "meaning": "reply",
        "level": 15
    },
    {
        "character": "単に",
        "kana": "たんに",
        "meaning": "simply, merely",
        "level": 15
    },
    {
        "character": "単語",
        "kana": "たんご",
        "meaning": "word, vocabulary",
        "level": 15
    },
    {
        "character": "上司",
        "kana": "じょうし",
        "meaning": "boss, superior",
        "level": 15
    },
    {
        "character": "変事",
        "kana": "へんじ",
        "meaning": "strange incident, unusual incident",
        "level": 15
    },
    {
        "character": "夫",
        "kana": "おっと",
        "meaning": "husband",
        "level": 15
    },
    {
        "character": "好む",
        "kana": "このむ",
        "meaning": "to be fond of, to like",
        "level": 15
    },
    {
        "character": "帰る",
        "kana": "かえる",
        "meaning": "to return home, to return",
        "level": 15
    },
    {
        "character": "毎晩",
        "kana": "まいばん",
        "meaning": "every night, nightly",
        "level": 15
    },
    {
        "character": "晴れる",
        "kana": "はれる",
        "meaning": "to clear up, to become sunny",
        "level": 15
    },
    {
        "character": "食中毒",
        "kana": "しょくちゅうどく",
        "meaning": "food poisoning",
        "level": 15
    },
    {
        "character": "文法",
        "kana": "ぶんぽう",
        "meaning": "grammar",
        "level": 15
    },
    {
        "character": "泣く",
        "kana": "なく",
        "meaning": "to cry",
        "level": 15
    },
    {
        "character": "新築",
        "kana": "しんちく",
        "meaning": "newly built, new building, new construction",
        "level": 15
    },
    {
        "character": "輪ゴム",
        "kana": "わごむ, わゴム",
        "meaning": "rubber band, elastic band",
        "level": 15
    },
    {
        "character": "世紀",
        "kana": "せいき",
        "meaning": "century",
        "level": 15
    },
    {
        "character": "英和",
        "kana": "えいわ",
        "meaning": "english japanese",
        "level": 15
    },
    {
        "character": "指輪",
        "kana": "ゆびわ",
        "meaning": "ring",
        "level": 15
    },
    {
        "character": "箱",
        "kana": "はこ",
        "meaning": "box",
        "level": 16
    },
    {
        "character": "仏典",
        "kana": "ぶってん",
        "meaning": "buddhist scriptures, buddhist writing",
        "level": 16
    },
    {
        "character": "証明",
        "kana": "しょうめい",
        "meaning": "proof, verification",
        "level": 16
    },
    {
        "character": "折り目",
        "kana": "おりめ",
        "meaning": "fold, crease",
        "level": 16
    },
    {
        "character": "外面",
        "kana": "がいめん",
        "meaning": "exterior",
        "level": 16
    },
    {
        "character": "遠い",
        "kana": "とおい",
        "meaning": "far, far away",
        "level": 16
    },
    {
        "character": "不完全",
        "kana": "ふかんぜん",
        "meaning": "incomplete, imperfect",
        "level": 16
    },
    {
        "character": "仏像",
        "kana": "ぶつぞう",
        "meaning": "image of buddha",
        "level": 16
    },
    {
        "character": "折り紙",
        "kana": "おりがみ",
        "meaning": "origami, art of paper folding",
        "level": 16
    },
    {
        "character": "園",
        "kana": "えん",
        "meaning": "garden, park",
        "level": 16
    },
    {
        "character": "保証",
        "kana": "ほしょう",
        "meaning": "guarantee",
        "level": 16
    },
    {
        "character": "阪神",
        "kana": "はんしん",
        "meaning": "hanshin",
        "level": 16
    },
    {
        "character": "保険",
        "kana": "ほけん",
        "meaning": "insurance",
        "level": 16
    },
    {
        "character": "私立大学",
        "kana": "しりつだいがく",
        "meaning": "private college, private university",
        "level": 16
    },
    {
        "character": "画面",
        "kana": "がめん",
        "meaning": "screen, monitor",
        "level": 16
    },
    {
        "character": "商品",
        "kana": "しょうひん",
        "meaning": "merchandise",
        "level": 16
    },
    {
        "character": "不幸",
        "kana": "ふこう",
        "meaning": "unhappiness, misfortune",
        "level": 16
    },
    {
        "character": "〜弁",
        "kana": "べん",
        "meaning": "dialect",
        "level": 16
    },
    {
        "character": "関西",
        "kana": "かんさい",
        "meaning": "kansai",
        "level": 16
    },
    {
        "character": "作品",
        "kana": "さくひん",
        "meaning": "a work, work, production",
        "level": 16
    },
    {
        "character": "冒険",
        "kana": "ぼうけん",
        "meaning": "adventure",
        "level": 16
    },
    {
        "character": "仮面",
        "kana": "かめん",
        "meaning": "mask",
        "level": 16
    },
    {
        "character": "生保",
        "kana": "せいほ",
        "meaning": "life insurance",
        "level": 16
    },
    {
        "character": "証人",
        "kana": "しょうにん",
        "meaning": "witness",
        "level": 16
    },
    {
        "character": "前面",
        "kana": "ぜんめん",
        "meaning": "front, front side",
        "level": 16
    },
    {
        "character": "幸福",
        "kana": "こうふく",
        "meaning": "happiness",
        "level": 16
    },
    {
        "character": "面",
        "kana": "めん",
        "meaning": "surface, face",
        "level": 16
    },
    {
        "character": "笑顔",
        "kana": "えがお",
        "meaning": "smile, smiling face",
        "level": 16
    },
    {
        "character": "急に",
        "kana": "きゅうに",
        "meaning": "suddenly",
        "level": 16
    },
    {
        "character": "残す",
        "kana": "のこす",
        "meaning": "to leave behind, to leave over",
        "level": 16
    },
    {
        "character": "証言",
        "kana": "しょうげん",
        "meaning": "testimony",
        "level": 16
    },
    {
        "character": "希望する",
        "kana": "きぼうする",
        "meaning": "to request, to wish",
        "level": 16
    },
    {
        "character": "要求する",
        "kana": "ようきゅうする",
        "meaning": "to demand",
        "level": 16
    },
    {
        "character": "関する",
        "kana": "かんする",
        "meaning": "to be connected to, to be related",
        "level": 16
    },
    {
        "character": "妥協する",
        "kana": "だきょうする",
        "meaning": "to compromise",
        "level": 16
    },
    {
        "character": "存じる",
        "kana": "ぞんじる",
        "meaning": "to know, to be aware of",
        "level": 16
    },
    {
        "character": "笑う",
        "kana": "わらう",
        "meaning": "to laugh",
        "level": 16
    },
    {
        "character": "真実",
        "kana": "しんじつ",
        "meaning": "truth, reality",
        "level": 16
    },
    {
        "character": "生存",
        "kana": "せいぞん",
        "meaning": "existence, life, survival",
        "level": 16
    },
    {
        "character": "急ぐ",
        "kana": "いそぐ",
        "meaning": "to hurry",
        "level": 16
    },
    {
        "character": "危険",
        "kana": "きけん",
        "meaning": "risky, unsafe, dangerous, danger, peril, hazard",
        "level": 16
    },
    {
        "character": "政治",
        "kana": "せいじ",
        "meaning": "politics, government",
        "level": 16
    },
    {
        "character": "ゴミ箱",
        "kana": "ごみばこ, ゴミばこ",
        "meaning": "garbage can, garbage bin, trash can, trash bin, waste can, waste bin, rubbish bin",
        "level": 16
    },
    {
        "character": "真っ黒",
        "kana": "まっくろ",
        "meaning": "pitch black, pure black",
        "level": 16
    },
    {
        "character": "不合格",
        "kana": "ふごうかく",
        "meaning": "fail a test, failure, fail an exam",
        "level": 16
    },
    {
        "character": "公園",
        "kana": "こうえん",
        "meaning": "public park, park",
        "level": 16
    },
    {
        "character": "保存",
        "kana": "ほぞん",
        "meaning": "preserve, preservation, conservation",
        "level": 16
    },
    {
        "character": "私自身",
        "kana": "わたしじしん",
        "meaning": "personally, as for me, myself",
        "level": 16
    },
    {
        "character": "専門",
        "kana": "せんもん",
        "meaning": "specialty, speciality, area of study, major",
        "level": 16
    },
    {
        "character": "自動車",
        "kana": "じどうしゃ",
        "meaning": "automobile",
        "level": 16
    },
    {
        "character": "座る",
        "kana": "すわる",
        "meaning": "to sit",
        "level": 16
    },
    {
        "character": "料理人",
        "kana": "りょうりにん",
        "meaning": "a cook, cook, chef",
        "level": 16
    },
    {
        "character": "入門",
        "kana": "にゅうもん",
        "meaning": "admission, entrance",
        "level": 16
    },
    {
        "character": "弁当",
        "kana": "べんとう",
        "meaning": "bento, box lunch",
        "level": 16
    },
    {
        "character": "字典",
        "kana": "じてん",
        "meaning": "character dictionary, kanji dictionary",
        "level": 16
    },
    {
        "character": "関係",
        "kana": "かんけい",
        "meaning": "connection, relation",
        "level": 16
    },
    {
        "character": "危ない",
        "kana": "あぶない",
        "meaning": "dangerous",
        "level": 16
    },
    {
        "character": "辞書",
        "kana": "じしょ",
        "meaning": "dictionary",
        "level": 16
    },
    {
        "character": "残品",
        "kana": "ざんぴん",
        "meaning": "unsold merchandise, remaining stock, unsold stock, remaining merchandise, unsold product, remaining product",
        "level": 16
    },
    {
        "character": "取る",
        "kana": "とる",
        "meaning": "to take",
        "level": 16
    },
    {
        "character": "急行",
        "kana": "きゅうこう",
        "meaning": "express",
        "level": 16
    },
    {
        "character": "固める",
        "kana": "かためる",
        "meaning": "to make hard, to harden",
        "level": 16
    },
    {
        "character": "地面",
        "kana": "じめん",
        "meaning": "ground, earth's surface",
        "level": 16
    },
    {
        "character": "不治",
        "kana": "ふじ, ふち ",
        "meaning": "incurability, incurable",
        "level": 16
    },
    {
        "character": "面白い",
        "kana": "おもしろい",
        "meaning": "interesting",
        "level": 16
    },
    {
        "character": "写真",
        "kana": "しゃしん",
        "meaning": "photo, photograph, picture",
        "level": 16
    },
    {
        "character": "日光浴",
        "kana": "にっこうよく",
        "meaning": "sunbathe",
        "level": 16
    },
    {
        "character": "浴びる",
        "kana": "あびる",
        "meaning": "to bathe",
        "level": 16
    },
    {
        "character": "東京弁",
        "kana": "とうきょうべん",
        "meaning": "tokyo dialect",
        "level": 16
    },
    {
        "character": "教科書",
        "kana": "きょうかしょ",
        "meaning": "textbook",
        "level": 16
    },
    {
        "character": "技術",
        "kana": "ぎじゅつ",
        "meaning": "art, craft, technique",
        "level": 16
    },
    {
        "character": "美術館",
        "kana": "びじゅつかん",
        "meaning": "museum, art museum, art gallery",
        "level": 16
    },
    {
        "character": "係わる",
        "kana": "かかわる",
        "meaning": "to be involved with, to be connected with, to be affected, to have to do with",
        "level": 16
    },
    {
        "character": "保守的",
        "kana": "ほしゅてき",
        "meaning": "conservative",
        "level": 16
    },
    {
        "character": "保持",
        "kana": "ほじ",
        "meaning": "retention, maintenance, preservation",
        "level": 16
    },
    {
        "character": "保つ",
        "kana": "たもつ",
        "meaning": "to preserve, to keep, to maintain",
        "level": 16
    },
    {
        "character": "古典的",
        "kana": "こてんてき",
        "meaning": "classical",
        "level": 16
    },
    {
        "character": "事典",
        "kana": "じてん",
        "meaning": "encyclopedia",
        "level": 16
    },
    {
        "character": "冗談",
        "kana": "じょうだん",
        "meaning": "joke",
        "level": 16
    },
    {
        "character": "卒業する",
        "kana": "そつぎょうする",
        "meaning": "to graduate",
        "level": 16
    },
    {
        "character": "卒業式",
        "kana": "そつぎょうしき",
        "meaning": "graduation ceremony, graduation",
        "level": 16
    },
    {
        "character": "下品",
        "kana": "げひん",
        "meaning": "crude, vulgarity",
        "level": 16
    },
    {
        "character": "品",
        "kana": "ひん, しな",
        "meaning": "article, item, goods",
        "level": 16
    },
    {
        "character": "新品",
        "kana": "しんぴん",
        "meaning": "brand new, new item, new product",
        "level": 16
    },
    {
        "character": "喜ぶ",
        "kana": "よろこぶ",
        "meaning": "to rejoice, to become happy",
        "level": 16
    },
    {
        "character": "守る",
        "kana": "まもる",
        "meaning": "to protect, to defend",
        "level": 16
    },
    {
        "character": "幸せ",
        "kana": "しあわせ",
        "meaning": "happiness",
        "level": 16
    },
    {
        "character": "留守",
        "kana": "るす",
        "meaning": "absence, away from home",
        "level": 16
    },
    {
        "character": "政府",
        "kana": "せいふ",
        "meaning": "government",
        "level": 16
    },
    {
        "character": "急死",
        "kana": "きゅうし",
        "meaning": "sudden death",
        "level": 16
    },
    {
        "character": "曜日",
        "kana": "ようび",
        "meaning": "day of the week, weekday",
        "level": 16
    },
    {
        "character": "治す",
        "kana": "なおす",
        "meaning": "to cure, to heal",
        "level": 16
    },
    {
        "character": "全治",
        "kana": "ぜんち",
        "meaning": "complete recovery, healed, fully recovered, fully recover, healed completely, heal completely, completely cured, fully cured, fully healed",
        "level": 16
    },
    {
        "character": "明治",
        "kana": "めいじ",
        "meaning": "meiji era, meiji emperor, meiji",
        "level": 16
    },
    {
        "character": "特急",
        "kana": "とっきゅう",
        "meaning": "limited express train, limited express",
        "level": 16
    },
    {
        "character": "留学",
        "kana": "りゅうがく",
        "meaning": "study abroad, studying abroad",
        "level": 16
    },
    {
        "character": "自動的",
        "kana": "じどうてき",
        "meaning": "automatic",
        "level": 16
    },
    {
        "character": "証",
        "kana": "あかし",
        "meaning": "evidence, proof",
        "level": 16
    },
    {
        "character": "大阪",
        "kana": "おおさか",
        "meaning": "osaka, oosaka",
        "level": 16
    },
    {
        "character": "図書館",
        "kana": "としょかん",
        "meaning": "library",
        "level": 16
    },
    {
        "character": "芸術家",
        "kana": "げいじゅつか",
        "meaning": "artist",
        "level": 16
    },
    {
        "character": "荷物",
        "kana": "にもつ",
        "meaning": "luggage, baggage, load",
        "level": 16
    },
    {
        "character": "辞める",
        "kana": "やめる",
        "meaning": "to quit, to resign",
        "level": 16
    },
    {
        "character": "世辞",
        "kana": "せじ",
        "meaning": "flattery, compliment",
        "level": 16
    },
    {
        "character": "書く",
        "kana": "かく",
        "meaning": "to write",
        "level": 16
    },
    {
        "character": "関心",
        "kana": "かんしん",
        "meaning": "concern, interest",
        "level": 16
    },
    {
        "character": "基本的",
        "kana": "きほんてき",
        "meaning": "fundamentals, basics, fundamental, standard, basic",
        "level": 16
    },
    {
        "character": "愛国心",
        "kana": "あいこくしん",
        "meaning": "patriotism",
        "level": 17
    },
    {
        "character": "愛",
        "kana": "あい",
        "meaning": "love",
        "level": 17
    },
    {
        "character": "署名",
        "kana": "しょめい",
        "meaning": "signature",
        "level": 17
    },
    {
        "character": "泣き虫",
        "kana": "なきむし",
        "meaning": "crybaby",
        "level": 17
    },
    {
        "character": "泣き声",
        "kana": "なきごえ",
        "meaning": "crying, sob",
        "level": 17
    },
    {
        "character": "外交官",
        "kana": "がいこうかん",
        "meaning": "diplomat",
        "level": 17
    },
    {
        "character": "水兵",
        "kana": "すいへい",
        "meaning": "navy soldier, naval soldier, seaman",
        "level": 17
    },
    {
        "character": "左側",
        "kana": "ひだりがわ",
        "meaning": "left side",
        "level": 17
    },
    {
        "character": "昼ご飯",
        "kana": "ひるごはん",
        "meaning": "lunch",
        "level": 17
    },
    {
        "character": "塩",
        "kana": "しお",
        "meaning": "salt",
        "level": 17
    },
    {
        "character": "席",
        "kana": "せき",
        "meaning": "seat",
        "level": 17
    },
    {
        "character": "幻覚",
        "kana": "げんかく",
        "meaning": "hallucination",
        "level": 17
    },
    {
        "character": "干渉",
        "kana": "かんしょう",
        "meaning": "interference, intervention",
        "level": 17
    },
    {
        "character": "結果",
        "kana": "けっか",
        "meaning": "result",
        "level": 17
    },
    {
        "character": "主因",
        "kana": "しゅいん",
        "meaning": "main cause, primary cause",
        "level": 17
    },
    {
        "character": "果物",
        "kana": "くだもの",
        "meaning": "fruit",
        "level": 17
    },
    {
        "character": "性愛",
        "kana": "せいあい",
        "meaning": "sexual love",
        "level": 17
    },
    {
        "character": "意識",
        "kana": "いしき",
        "meaning": "consciously, awareness, consciousness",
        "level": 17
    },
    {
        "character": "仮説",
        "kana": "かせつ",
        "meaning": "hypothesis",
        "level": 17
    },
    {
        "character": "鼻",
        "kana": "はな",
        "meaning": "nose",
        "level": 17
    },
    {
        "character": "両側",
        "kana": "りょうがわ",
        "meaning": "both sides",
        "level": 17
    },
    {
        "character": "是非",
        "kana": "ぜひ",
        "meaning": "absolutely, by all means",
        "level": 17
    },
    {
        "character": "無茶",
        "kana": "むちゃ",
        "meaning": "absurd, rash, excessive",
        "level": 17
    },
    {
        "character": "建つ",
        "kana": "たつ",
        "meaning": "to be erected, to be built",
        "level": 17
    },
    {
        "character": "無名",
        "kana": "むめい",
        "meaning": "anonymous",
        "level": 17
    },
    {
        "character": "底",
        "kana": "そこ",
        "meaning": "bottom",
        "level": 17
    },
    {
        "character": "食堂",
        "kana": "しょくどう",
        "meaning": "cafeteria, dining hall",
        "level": 17
    },
    {
        "character": "非常",
        "kana": "ひじょう",
        "meaning": "emergency",
        "level": 17
    },
    {
        "character": "兵器",
        "kana": "へいき",
        "meaning": "arms, weapons",
        "level": 17
    },
    {
        "character": "悪因悪果",
        "kana": "あくいんあっか",
        "meaning": "evil breeds evil, evil begets evil",
        "level": 17
    },
    {
        "character": "幻想",
        "kana": "げんそう",
        "meaning": "fantasy, illusion",
        "level": 17
    },
    {
        "character": "説明",
        "kana": "せつめい",
        "meaning": "explanation",
        "level": 17
    },
    {
        "character": "栄光",
        "kana": "えいこう",
        "meaning": "glory",
        "level": 17
    },
    {
        "character": "官金",
        "kana": "かんきん",
        "meaning": "government funds, government money",
        "level": 17
    },
    {
        "character": "薬物",
        "kana": "やくぶつ",
        "meaning": "medicines, drugs",
        "level": 17
    },
    {
        "character": "無知",
        "kana": "むち",
        "meaning": "ignorance",
        "level": 17
    },
    {
        "character": "知識",
        "kana": "ちしき",
        "meaning": "knowledge, information",
        "level": 17
    },
    {
        "character": "小説",
        "kana": "しょうせつ",
        "meaning": "novel",
        "level": 17
    },
    {
        "character": "梅酒",
        "kana": "うめしゅ",
        "meaning": "ume wine, plum wine, plum liquor, umeshu",
        "level": 17
    },
    {
        "character": "恋愛",
        "kana": "れんあい",
        "meaning": "love",
        "level": 17
    },
    {
        "character": "察知",
        "kana": "さっち",
        "meaning": "inference, infer, sense",
        "level": 17
    },
    {
        "character": "空席",
        "kana": "くうせき",
        "meaning": "open seat, empty seat, free seat",
        "level": 17
    },
    {
        "character": "交渉",
        "kana": "こうしょう",
        "meaning": "negotiation",
        "level": 17
    },
    {
        "character": "無力",
        "kana": "むりょく",
        "meaning": "powerless, powerlessness, helplessness",
        "level": 17
    },
    {
        "character": "原作",
        "kana": "げんさく",
        "meaning": "original work",
        "level": 17
    },
    {
        "character": "警察",
        "kana": "けいさつ",
        "meaning": "police",
        "level": 17
    },
    {
        "character": "右側",
        "kana": "みぎがわ",
        "meaning": "right side",
        "level": 17
    },
    {
        "character": "塩水",
        "kana": "しおみず",
        "meaning": "salt water",
        "level": 17
    },
    {
        "character": "自愛",
        "kana": "じあい",
        "meaning": "self love, selfishness",
        "level": 17
    },
    {
        "character": "薬方",
        "kana": "やくほう",
        "meaning": "prescription",
        "level": 17
    },
    {
        "character": "感覚",
        "kana": "かんかく",
        "meaning": "senses, the senses",
        "level": 17
    },
    {
        "character": "西側",
        "kana": "にしがわ",
        "meaning": "west side",
        "level": 17
    },
    {
        "character": "察する",
        "kana": "さっする",
        "meaning": "to guess, to sense, to presume",
        "level": 17
    },
    {
        "character": "梅",
        "kana": "うめ",
        "meaning": "ume, japanese plum",
        "level": 17
    },
    {
        "character": "愛知県",
        "kana": "あいちけん",
        "meaning": "aichi prefecture",
        "level": 17
    },
    {
        "character": "伝説",
        "kana": "でんせつ",
        "meaning": "legend",
        "level": 17
    },
    {
        "character": "出席",
        "kana": "しゅっせき",
        "meaning": "attendance",
        "level": 17
    },
    {
        "character": "晩ご飯",
        "kana": "ばんごはん",
        "meaning": "dinner, supper",
        "level": 17
    },
    {
        "character": "勝敗",
        "kana": "しょうはい",
        "meaning": "victory or defeat",
        "level": 17
    },
    {
        "character": "イギリス人",
        "kana": "いぎりすじん, イギリスじん",
        "meaning": "british person, english person",
        "level": 17
    },
    {
        "character": "願い事",
        "kana": "ねがいごと",
        "meaning": "one's wish, prayer, wish",
        "level": 17
    },
    {
        "character": "日常",
        "kana": "にちじょう",
        "meaning": "everyday life, normal life, daily life, ordinary, regular, everyday, usual",
        "level": 17
    },
    {
        "character": "虚弱",
        "kana": "きょじゃく",
        "meaning": "weak, feeble, weakness, feebleness",
        "level": 17
    },
    {
        "character": "結局",
        "kana": "けっきょく",
        "meaning": "after all, eventually, in the end",
        "level": 17
    },
    {
        "character": "失恋",
        "kana": "しつれん",
        "meaning": "heartbreak, broken heart",
        "level": 17
    },
    {
        "character": "鼻くそ",
        "kana": "はなくそ",
        "meaning": "snot, boogers",
        "level": 17
    },
    {
        "character": "原子",
        "kana": "げんし",
        "meaning": "atom",
        "level": 17
    },
    {
        "character": "鼻先",
        "kana": "はなさき",
        "meaning": "tip of the nose, tip of nose, nose tip",
        "level": 17
    },
    {
        "character": "川底",
        "kana": "かわぞこ",
        "meaning": "riverbed, river bottom",
        "level": 17
    },
    {
        "character": "外側",
        "kana": "そとがわ",
        "meaning": "outside",
        "level": 17
    },
    {
        "character": "薬学",
        "kana": "やくがく",
        "meaning": "study of pharmacy, pharmacology, pharmaceutics",
        "level": 17
    },
    {
        "character": "薬",
        "kana": "くすり",
        "meaning": "medicine, drug, drugs",
        "level": 17
    },
    {
        "character": "欠席",
        "kana": "けっせき",
        "meaning": "absence, nonattendance",
        "level": 17
    },
    {
        "character": "干天",
        "kana": "かんてん",
        "meaning": "dry weather, drought",
        "level": 17
    },
    {
        "character": "光栄",
        "kana": "こうえい",
        "meaning": "honor, privilege",
        "level": 17
    },
    {
        "character": "鼻歌",
        "kana": "はなうた",
        "meaning": "humming",
        "level": 17
    },
    {
        "character": "建前",
        "kana": "たてまえ",
        "meaning": "public behavior, public behaviour, official stance, public position, public face, tatemae",
        "level": 17
    },
    {
        "character": "塩味",
        "kana": "しおあじ",
        "meaning": "salty taste, tastes salty, salty, salty flavor",
        "level": 17
    },
    {
        "character": "栄える",
        "kana": "さかえる",
        "meaning": "to flourish, to prosper",
        "level": 17
    },
    {
        "character": "原因",
        "kana": "げんいん",
        "meaning": "cause, origin, source",
        "level": 17
    },
    {
        "character": "内側",
        "kana": "うちがわ",
        "meaning": "inside",
        "level": 17
    },
    {
        "character": "東側",
        "kana": "ひがしがわ",
        "meaning": "east side",
        "level": 17
    },
    {
        "character": "兵員",
        "kana": "へいいん",
        "meaning": "military personnel, military strength",
        "level": 17
    },
    {
        "character": "兵士",
        "kana": "へいし",
        "meaning": "soldier",
        "level": 17
    },
    {
        "character": "米兵",
        "kana": "べいへい",
        "meaning": "us soldier, american soldier",
        "level": 17
    },
    {
        "character": "内因",
        "kana": "ないいん",
        "meaning": "internal cause, actual reason",
        "level": 17
    },
    {
        "character": "常に",
        "kana": "つねに",
        "meaning": "ordinarily, always, usually",
        "level": 17
    },
    {
        "character": "常識",
        "kana": "じょうしき",
        "meaning": "common sense, common knowledge",
        "level": 17
    },
    {
        "character": "干す",
        "kana": "ほす",
        "meaning": "to dry",
        "level": 17
    },
    {
        "character": "幻",
        "kana": "まぼろし",
        "meaning": "illusion, phantom",
        "level": 17
    },
    {
        "character": "心底",
        "kana": "しんそこ",
        "meaning": "bottom of one's heart, bottom of my heart",
        "level": 17
    },
    {
        "character": "建築家",
        "kana": "けんちくか",
        "meaning": "architect",
        "level": 17
    },
    {
        "character": "建物",
        "kana": "たてもの",
        "meaning": "building",
        "level": 17
    },
    {
        "character": "恋",
        "kana": "こい",
        "meaning": "love, lust",
        "level": 17
    },
    {
        "character": "敗れる",
        "kana": "やぶれる",
        "meaning": "to be defeated, to be unsuccessful",
        "level": 17
    },
    {
        "character": "失敗",
        "kana": "しっぱい",
        "meaning": "failure, mistake",
        "level": 17
    },
    {
        "character": "敗者",
        "kana": "はいしゃ",
        "meaning": "loser, the defeated",
        "level": 17
    },
    {
        "character": "無休",
        "kana": "むきゅう",
        "meaning": "no holidays, always open",
        "level": 17
    },
    {
        "character": "無事",
        "kana": "ぶじ",
        "meaning": "safe and sound, safe",
        "level": 17
    },
    {
        "character": "無料",
        "kana": "むりょう",
        "meaning": "free, without charge",
        "level": 17
    },
    {
        "character": "紀元前",
        "kana": "きげんぜん",
        "meaning": "before christ, bc, bce, before common era",
        "level": 17
    },
    {
        "character": "細い",
        "kana": "ほそい",
        "meaning": "thin, slender",
        "level": 17
    },
    {
        "character": "薬用",
        "kana": "やくよう",
        "meaning": "medicinal",
        "level": 17
    },
    {
        "character": "虚栄心",
        "kana": "きょえいしん",
        "meaning": "vanity",
        "level": 17
    },
    {
        "character": "自覚",
        "kana": "じかく",
        "meaning": "consciousness, awareness, realization",
        "level": 17
    },
    {
        "character": "図説",
        "kana": "ずせつ",
        "meaning": "illustration, explanatory diagram",
        "level": 17
    },
    {
        "character": "朝ご飯",
        "kana": "あさごはん",
        "meaning": "breakfast",
        "level": 17
    },
    {
        "character": "鼻血",
        "kana": "はなぢ, はなじ",
        "meaning": "nosebleed, bloody nose",
        "level": 17
    },
    {
        "character": "不味い",
        "kana": "まずい",
        "meaning": "bad tasting, unappetizing, unskillful",
        "level": 17
    },
    {
        "character": "禅僧",
        "kana": "ぜんそう",
        "meaning": "zen priest",
        "level": 18
    },
    {
        "character": "書き方",
        "kana": "かきかた",
        "meaning": "penmanship, way of writing, manner of writing",
        "level": 18
    },
    {
        "character": "夕焼け",
        "kana": "ゆうやけ",
        "meaning": "sunset",
        "level": 18
    },
    {
        "character": "公告",
        "kana": "こうこく",
        "meaning": "public notice, public announcement",
        "level": 18
    },
    {
        "character": "お笑い",
        "kana": "おわらい",
        "meaning": "comedian, comical thing, comical, funny",
        "level": 18
    },
    {
        "character": "落書き",
        "kana": "らくがき",
        "meaning": "graffiti, scribble, sketch",
        "level": 18
    },
    {
        "character": "達人",
        "kana": "たつじん",
        "meaning": "master, expert",
        "level": 18
    },
    {
        "character": "報道",
        "kana": "ほうどう",
        "meaning": "news report",
        "level": 18
    },
    {
        "character": "祈念",
        "kana": "きねん",
        "meaning": "prayer, a prayer",
        "level": 18
    },
    {
        "character": "切り取る",
        "kana": "きりとる",
        "meaning": "to cut off, to cut out",
        "level": 18
    },
    {
        "character": "黒煙",
        "kana": "こくえん",
        "meaning": "black smoke",
        "level": 18
    },
    {
        "character": "保持する",
        "kana": "ほじする",
        "meaning": "to maintain, to preserve",
        "level": 18
    },
    {
        "character": "枚数",
        "kana": "まいすう",
        "meaning": "number of sheets, number of flat objects",
        "level": 18
    },
    {
        "character": "報告",
        "kana": "ほうこく",
        "meaning": "report, information",
        "level": 18
    },
    {
        "character": "借りる",
        "kana": "かりる",
        "meaning": "to borrow",
        "level": 18
    },
    {
        "character": "弓道",
        "kana": "きゅうどう",
        "meaning": "archery, kyudo, kyuudou",
        "level": 18
    },
    {
        "character": "訓読み",
        "kana": "くんよみ",
        "meaning": "kun'yomi, kun reading, japanese reading",
        "level": 18
    },
    {
        "character": "笑い",
        "kana": "わらい",
        "meaning": "a laugh, laugh",
        "level": 18
    },
    {
        "character": "弓",
        "kana": "ゆみ",
        "meaning": "bow",
        "level": 18
    },
    {
        "character": "脳死",
        "kana": "のうし",
        "meaning": "brain death, brain dead",
        "level": 18
    },
    {
        "character": "洗車",
        "kana": "せんしゃ",
        "meaning": "car wash",
        "level": 18
    },
    {
        "character": "借用",
        "kana": "しゃくよう",
        "meaning": "borrowing, loan",
        "level": 18
    },
    {
        "character": "脳",
        "kana": "のう",
        "meaning": "brain",
        "level": 18
    },
    {
        "character": "脳みそ",
        "kana": "のうみそ",
        "meaning": "brains, gray matter",
        "level": 18
    },
    {
        "character": "洗脳",
        "kana": "せんのう",
        "meaning": "brainwashing",
        "level": 18
    },
    {
        "character": "分類",
        "kana": "ぶんるい",
        "meaning": "classification",
        "level": 18
    },
    {
        "character": "文句",
        "kana": "もんく",
        "meaning": "complaint",
        "level": 18
    },
    {
        "character": "上品",
        "kana": "じょうひん",
        "meaning": "elegant",
        "level": 18
    },
    {
        "character": "借金",
        "kana": "しゃっきん",
        "meaning": "debt",
        "level": 18
    },
    {
        "character": "等号",
        "kana": "とうごう",
        "meaning": "equal sign",
        "level": 18
    },
    {
        "character": "留学生",
        "kana": "りゅうがくせい",
        "meaning": "exchange student",
        "level": 18
    },
    {
        "character": "体験",
        "kana": "たいけん",
        "meaning": "experience",
        "level": 18
    },
    {
        "character": "書き入れる",
        "kana": "かきいれる",
        "meaning": "to write in, to fill in",
        "level": 18
    },
    {
        "character": "五枚",
        "kana": "ごまい",
        "meaning": "five flat objects, five sheets",
        "level": 18
    },
    {
        "character": "不可欠",
        "kana": "ふかけつ",
        "meaning": "indispensable, essential",
        "level": 18
    },
    {
        "character": "不等",
        "kana": "ふとう",
        "meaning": "inequality, disparity",
        "level": 18
    },
    {
        "character": "汽船",
        "kana": "きせん",
        "meaning": "steam ship, steam boat",
        "level": 18
    },
    {
        "character": "日曜日",
        "kana": "にちようび",
        "meaning": "sunday",
        "level": 18
    },
    {
        "character": "取り出す",
        "kana": "とりだす",
        "meaning": "to pick out, to take out, to retrieve",
        "level": 18
    },
    {
        "character": "水曜日",
        "kana": "すいようび",
        "meaning": "wednesday",
        "level": 18
    },
    {
        "character": "人種",
        "kana": "じんしゅ",
        "meaning": "race of people, race",
        "level": 18
    },
    {
        "character": "喫煙",
        "kana": "きつえん",
        "meaning": "smoking",
        "level": 18
    },
    {
        "character": "借家",
        "kana": "しゃくや, しゃっか",
        "meaning": "renting a house, house for rent, rented house",
        "level": 18
    },
    {
        "character": "僧院",
        "kana": "そういん",
        "meaning": "temple, monastery",
        "level": 18
    },
    {
        "character": "可能",
        "kana": "かのう",
        "meaning": "possible",
        "level": 18
    },
    {
        "character": "静止",
        "kana": "せいし",
        "meaning": "still, standstill, at rest, stationary",
        "level": 18
    },
    {
        "character": "配達する",
        "kana": "はいたつする",
        "meaning": "to deliver",
        "level": 18
    },
    {
        "character": "忘れる",
        "kana": "わすれる",
        "meaning": "to forget",
        "level": 18
    },
    {
        "character": "訓練",
        "kana": "くんれん",
        "meaning": "training",
        "level": 18
    },
    {
        "character": "報じる",
        "kana": "ほうじる",
        "meaning": "to report on",
        "level": 18
    },
    {
        "character": "試みる",
        "kana": "こころみる",
        "meaning": "to try, to attempt",
        "level": 18
    },
    {
        "character": "日焼け",
        "kana": "ひやけ",
        "meaning": "sunburn",
        "level": 18
    },
    {
        "character": "胸",
        "kana": "むね",
        "meaning": "chest, breasts",
        "level": 18
    },
    {
        "character": "静か",
        "kana": "しずか",
        "meaning": "quiet",
        "level": 18
    },
    {
        "character": "試験",
        "kana": "しけん",
        "meaning": "examination, test, experiment, exam",
        "level": 18
    },
    {
        "character": "忘年会",
        "kana": "ぼうねんかい",
        "meaning": "year end party, end of year party",
        "level": 18
    },
    {
        "character": "焼き鳥",
        "kana": "やきとり",
        "meaning": "roast chicken, cooked chicken, yakitori",
        "level": 18
    },
    {
        "character": "予告",
        "kana": "よこく",
        "meaning": "advance notice, forward notice, prior notice",
        "level": 18
    },
    {
        "character": "焼き肉",
        "kana": "やきにく",
        "meaning": "roast meat, grilled meat, cooked meat, yakiniku",
        "level": 18
    },
    {
        "character": "焼く",
        "kana": "やく",
        "meaning": "to bake, to cook, to burn",
        "level": 18
    },
    {
        "character": "広告",
        "kana": "こうこく",
        "meaning": "advertisement, ad",
        "level": 18
    },
    {
        "character": "皿洗い",
        "kana": "さらあらい",
        "meaning": "dishwashing, dishwasher, washing the dishes, washing dishes",
        "level": 18
    },
    {
        "character": "試食",
        "kana": "ししょく",
        "meaning": "sample, taste, food sample",
        "level": 18
    },
    {
        "character": "木曜日",
        "kana": "もくようび",
        "meaning": "thursday",
        "level": 18
    },
    {
        "character": "何枚",
        "kana": "なんまい",
        "meaning": "how many flat objects, how many sheets",
        "level": 18
    },
    {
        "character": "葉書",
        "kana": "はがき",
        "meaning": "postcard",
        "level": 18
    },
    {
        "character": "関西弁",
        "kana": "かんさいべん",
        "meaning": "kansai dialect",
        "level": 18
    },
    {
        "character": "教訓",
        "kana": "きょうくん",
        "meaning": "lesson, moral",
        "level": 18
    },
    {
        "character": "二枚舌",
        "kana": "にまいじた",
        "meaning": "forked tongue",
        "level": 18
    },
    {
        "character": "〜枚",
        "kana": "まい",
        "meaning": "flat object, clothing items, sheets",
        "level": 18
    },
    {
        "character": "可分",
        "kana": "かぶん",
        "meaning": "divisible, separable",
        "level": 18
    },
    {
        "character": "座席",
        "kana": "ざせき",
        "meaning": "seat",
        "level": 18
    },
    {
        "character": "証明書",
        "kana": "しょうめいしょ",
        "meaning": "certificate, credentials",
        "level": 18
    },
    {
        "character": "取り分け",
        "kana": "とりわけ",
        "meaning": "especially",
        "level": 18
    },
    {
        "character": "予報",
        "kana": "よほう",
        "meaning": "forecast",
        "level": 18
    },
    {
        "character": "試合",
        "kana": "しあい",
        "meaning": "game, match",
        "level": 18
    },
    {
        "character": "情報",
        "kana": "じょうほう",
        "meaning": "information, data",
        "level": 18
    },
    {
        "character": "大阪弁",
        "kana": "おおさかべん",
        "meaning": "osaka dialect",
        "level": 18
    },
    {
        "character": "汽車",
        "kana": "きしゃ",
        "meaning": "steam train, steam engine train, steam engine",
        "level": 18
    },
    {
        "character": "許す",
        "kana": "ゆるす",
        "meaning": "to permit, to forgive, to allow",
        "level": 18
    },
    {
        "character": "禅寺",
        "kana": "ぜんでら, ぜんじ",
        "meaning": "zen temple",
        "level": 18
    },
    {
        "character": "取れる",
        "kana": "とれる",
        "meaning": "to come off, to be removed, to fall off",
        "level": 18
    },
    {
        "character": "受験",
        "kana": "じゅけん",
        "meaning": "take an exam, take an examination, take a test, taking an exam, taking an examination, taking a test",
        "level": 18
    },
    {
        "character": "親類",
        "kana": "しんるい",
        "meaning": "relatives",
        "level": 18
    },
    {
        "character": "祈願",
        "kana": "きがん",
        "meaning": "prayer, a prayer",
        "level": 18
    },
    {
        "character": "私大",
        "kana": "しだい",
        "meaning": "private college, private university, private uni",
        "level": 18
    },
    {
        "character": "取材",
        "kana": "しゅざい",
        "meaning": "covering an event, collecting data, data collection",
        "level": 18
    },
    {
        "character": "正座",
        "kana": "せいざ",
        "meaning": "seiza, traditional japanese sitting",
        "level": 18
    },
    {
        "character": "仏僧",
        "kana": "ぶっそう",
        "meaning": "buddhist priest",
        "level": 18
    },
    {
        "character": "取決め",
        "kana": "とりきめ",
        "meaning": "arrangement, agreement",
        "level": 18
    },
    {
        "character": "禁句",
        "kana": "きんく",
        "meaning": "taboo word, taboo phrase, dirty word, bad word",
        "level": 18
    },
    {
        "character": "可愛い",
        "kana": "かわいい",
        "meaning": "cute",
        "level": 18
    },
    {
        "character": "許可",
        "kana": "きょか",
        "meaning": "permission",
        "level": 18
    },
    {
        "character": "告白",
        "kana": "こくはく",
        "meaning": "confession",
        "level": 18
    },
    {
        "character": "告げる",
        "kana": "つげる",
        "meaning": "to announce, to tell",
        "level": 18
    },
    {
        "character": "喫茶店",
        "kana": "きっさてん",
        "meaning": "tea house, cafe, coffee house, coffee shop",
        "level": 18
    },
    {
        "character": "お守り",
        "kana": "おまもり",
        "meaning": "charm, amulet",
        "level": 18
    },
    {
        "character": "留守番",
        "kana": "るすばん",
        "meaning": "caretaker, housesitting, looking after one's house",
        "level": 18
    },
    {
        "character": "座禅",
        "kana": "ざぜん",
        "meaning": "zen meditation",
        "level": 18
    },
    {
        "character": "銀座",
        "kana": "ぎんざ",
        "meaning": "ginza",
        "level": 18
    },
    {
        "character": "駅弁",
        "kana": "えきべん",
        "meaning": "train station bento, station bento",
        "level": 18
    },
    {
        "character": "金曜日",
        "kana": "きんようび",
        "meaning": "friday",
        "level": 18
    },
    {
        "character": "土曜日",
        "kana": "どようび",
        "meaning": "saturday",
        "level": 18
    },
    {
        "character": "月曜日",
        "kana": "げつようび",
        "meaning": "monday",
        "level": 18
    },
    {
        "character": "火曜日",
        "kana": "かようび",
        "meaning": "tuesday",
        "level": 18
    },
    {
        "character": "下書き",
        "kana": "したがき",
        "meaning": "rough draft",
        "level": 18
    },
    {
        "character": "書き直す",
        "kana": "かきなおす",
        "meaning": "to rewrite",
        "level": 18
    },
    {
        "character": "洗う",
        "kana": "あらう",
        "meaning": "to wash",
        "level": 18
    },
    {
        "character": "洗練",
        "kana": "せんれん",
        "meaning": "refinement, polish",
        "level": 18
    },
    {
        "character": "煙",
        "kana": "けむり",
        "meaning": "smoke",
        "level": 18
    },
    {
        "character": "祈る",
        "kana": "いのる",
        "meaning": "to pray",
        "level": 18
    },
    {
        "character": "禁煙",
        "kana": "きんえん",
        "meaning": "no smoking",
        "level": 18
    },
    {
        "character": "禁止",
        "kana": "きんし",
        "meaning": "forbidden, prohibition, ban",
        "level": 18
    },
    {
        "character": "等しい",
        "kana": "ひとしい",
        "meaning": "equal, similar, equivalent",
        "level": 18
    },
    {
        "character": "一等",
        "kana": "いっとう",
        "meaning": "first class, first rank, the best",
        "level": 18
    },
    {
        "character": "手荷物",
        "kana": "てにもつ",
        "meaning": "hand baggage, hand luggage, cabin baggage, carry on",
        "level": 18
    },
    {
        "character": "試す",
        "kana": "ためす",
        "meaning": "to attempt, to try out, to test, to test the limits, to try",
        "level": 18
    },
    {
        "character": "友達",
        "kana": "ともだち",
        "meaning": "friend, companion",
        "level": 18
    },
    {
        "character": "伝達",
        "kana": "でんたつ",
        "meaning": "transmission, transmit, convey",
        "level": 18
    },
    {
        "character": "平静",
        "kana": "へいせい",
        "meaning": "calm, serene, tranquil",
        "level": 18
    },
    {
        "character": "書類",
        "kana": "しょるい",
        "meaning": "document",
        "level": 18
    },
    {
        "character": "人類",
        "kana": "じんるい",
        "meaning": "mankind, race of people, humanity, humankind",
        "level": 18
    },
    {
        "character": "種類",
        "kana": "しゅるい",
        "meaning": "kind, type",
        "level": 18
    },
    {
        "character": "実験",
        "kana": "じっけん",
        "meaning": "experiment",
        "level": 18
    },
    {
        "character": "大丈夫",
        "kana": "だいじょうぶ",
        "meaning": "safe, all right, okay",
        "level": 18
    },
    {
        "character": "猫舌",
        "kana": "ねこじた",
        "meaning": "aversion to hot foods",
        "level": 19
    },
    {
        "character": "順位",
        "kana": "じゅんい",
        "meaning": "ranking, standing",
        "level": 19
    },
    {
        "character": "細かい",
        "kana": "こまかい",
        "meaning": "detailed, small, fine, trivial",
        "level": 19
    },
    {
        "character": "易しい",
        "kana": "やさしい",
        "meaning": "easy, simple to do",
        "level": 19
    },
    {
        "character": "暴れる",
        "kana": "あばれる",
        "meaning": "to act violently, to rage",
        "level": 19
    },
    {
        "character": "続く",
        "kana": "つづく",
        "meaning": "to continue",
        "level": 19
    },
    {
        "character": "絡む",
        "kana": "からむ",
        "meaning": "to get entangled, to be entangled",
        "level": 19
    },
    {
        "character": "三冊",
        "kana": "さんさつ",
        "meaning": "three books, three volumes",
        "level": 19
    },
    {
        "character": "若者",
        "kana": "わかもの",
        "meaning": "young person",
        "level": 19
    },
    {
        "character": "一冊",
        "kana": "いっさつ",
        "meaning": "one book, one volume",
        "level": 19
    },
    {
        "character": "〜冊",
        "kana": "さつ",
        "meaning": "books counter, counter for books, books",
        "level": 19
    },
    {
        "character": "得",
        "kana": "とく",
        "meaning": "benefit, profit, advantage, gain",
        "level": 19
    },
    {
        "character": "布",
        "kana": "ぬの",
        "meaning": "cloth, fabric",
        "level": 19
    },
    {
        "character": "善悪",
        "kana": "ぜんあく",
        "meaning": "good and evil",
        "level": 19
    },
    {
        "character": "季節",
        "kana": "きせつ",
        "meaning": "season",
        "level": 19
    },
    {
        "character": "毛布",
        "kana": "もうふ",
        "meaning": "blanket",
        "level": 19
    },
    {
        "character": "入団",
        "kana": "にゅうだん",
        "meaning": "join, enlist, enrollment, enlistment",
        "level": 19
    },
    {
        "character": "容疑",
        "kana": "ようぎ",
        "meaning": "suspicion, suspect",
        "level": 19
    },
    {
        "character": "歴史",
        "kana": "れきし",
        "meaning": "history",
        "level": 19
    },
    {
        "character": "容易",
        "kana": "ようい",
        "meaning": "ease, easily, easy, simple",
        "level": 19
    },
    {
        "character": "若い",
        "kana": "わかい",
        "meaning": "young",
        "level": 19
    },
    {
        "character": "借財",
        "kana": "しゃくざい",
        "meaning": "debt",
        "level": 19
    },
    {
        "character": "数詞",
        "kana": "すうし",
        "meaning": "numeral, number word",
        "level": 19
    },
    {
        "character": "席順",
        "kana": "せきじゅん",
        "meaning": "seating order",
        "level": 19
    },
    {
        "character": "集団",
        "kana": "しゅうだん",
        "meaning": "group, crowd",
        "level": 19
    },
    {
        "character": "年代順",
        "kana": "ねんだいじゅん",
        "meaning": "chronological order",
        "level": 19
    },
    {
        "character": "順番",
        "kana": "じゅんばん",
        "meaning": "order, one's turn",
        "level": 19
    },
    {
        "character": "汽笛",
        "kana": "きてき",
        "meaning": "steam whistle",
        "level": 19
    },
    {
        "character": "形容詞",
        "kana": "けいようし",
        "meaning": "adjective",
        "level": 19
    },
    {
        "character": "加える",
        "kana": "くわえる",
        "meaning": "to add",
        "level": 19
    },
    {
        "character": "混乱",
        "kana": "こんらん",
        "meaning": "confusion",
        "level": 19
    },
    {
        "character": "内容",
        "kana": "ないよう",
        "meaning": "contents",
        "level": 19
    },
    {
        "character": "対比",
        "kana": "たいひ",
        "meaning": "contrast, comparison",
        "level": 19
    },
    {
        "character": "非常に",
        "kana": "ひじょうに",
        "meaning": "very, extremely, exceedingly",
        "level": 19
    },
    {
        "character": "助詞",
        "kana": "じょし",
        "meaning": "grammar particle, particle, postposition",
        "level": 19
    },
    {
        "character": "自動詞",
        "kana": "じどうし",
        "meaning": "intransitive verb",
        "level": 19
    },
    {
        "character": "名詞",
        "kana": "めいし",
        "meaning": "noun",
        "level": 19
    },
    {
        "character": "原子力",
        "kana": "げんしりょく",
        "meaning": "nuclear power, nuclear energy, atomic power, atomic energy",
        "level": 19
    },
    {
        "character": "節句",
        "kana": "せっく",
        "meaning": "seasonal festival",
        "level": 19
    },
    {
        "character": "改善",
        "kana": "かいぜん",
        "meaning": "improvement, betterment",
        "level": 19
    },
    {
        "character": "改正",
        "kana": "かいせい",
        "meaning": "revision",
        "level": 19
    },
    {
        "character": "暴走",
        "kana": "ぼうそう",
        "meaning": "run wild, run out of control",
        "level": 19
    },
    {
        "character": "私財",
        "kana": "しざい",
        "meaning": "private funds, own funds, private property, personal funds",
        "level": 19
    },
    {
        "character": "困る",
        "kana": "こまる",
        "meaning": "to be distressed, to be troubled",
        "level": 19
    },
    {
        "character": "連れる",
        "kana": "つれる",
        "meaning": "to take along, to bring with, to bring a person",
        "level": 19
    },
    {
        "character": "財布",
        "kana": "さいふ",
        "meaning": "wallet, purse, handbag",
        "level": 19
    },
    {
        "character": "動詞",
        "kana": "どうし",
        "meaning": "verb",
        "level": 19
    },
    {
        "character": "暴力",
        "kana": "ぼうりょく",
        "meaning": "violence, force",
        "level": 19
    },
    {
        "character": "減法",
        "kana": "げんぽう",
        "meaning": "subtraction",
        "level": 19
    },
    {
        "character": "別冊",
        "kana": "べっさつ",
        "meaning": "separate volume",
        "level": 19
    },
    {
        "character": "小さい順",
        "kana": "ちいさいじゅん",
        "meaning": "increasing order, ascending order, smallest first",
        "level": 19
    },
    {
        "character": "無意識",
        "kana": "むいしき",
        "meaning": "unconsciously, involuntary, unconsciousness",
        "level": 19
    },
    {
        "character": "学歴",
        "kana": "がくれき",
        "meaning": "academic history, academic background, academic record",
        "level": 19
    },
    {
        "character": "警察署",
        "kana": "けいさつしょ",
        "meaning": "police station",
        "level": 19
    },
    {
        "character": "連絡する",
        "kana": "れんらくする",
        "meaning": "to contact, to get in touch, to get in contact",
        "level": 19
    },
    {
        "character": "説明書",
        "kana": "せつめいしょ",
        "meaning": "written explanation, instructions",
        "level": 19
    },
    {
        "character": "八冊",
        "kana": "はっさつ",
        "meaning": "eight books, eight volumes",
        "level": 19
    },
    {
        "character": "続々",
        "kana": "ぞくぞく",
        "meaning": "one after another, successively, in succession",
        "level": 19
    },
    {
        "character": "品詞",
        "kana": "ひんし",
        "meaning": "part of speech",
        "level": 19
    },
    {
        "character": "混ぜる",
        "kana": "まぜる",
        "meaning": "to mix, to mix something, to stir, to stir something, to blend, to blend something",
        "level": 19
    },
    {
        "character": "果たして",
        "kana": "はたして",
        "meaning": "as was expected, just as i thought, as expected",
        "level": 19
    },
    {
        "character": "笛",
        "kana": "ふえ",
        "meaning": "flute, whistle",
        "level": 19
    },
    {
        "character": "舌",
        "kana": "した",
        "meaning": "tongue",
        "level": 19
    },
    {
        "character": "乱れる",
        "kana": "みだれる",
        "meaning": "to be in disorder, to be disordered",
        "level": 19
    },
    {
        "character": "乱戦",
        "kana": "らんせん",
        "meaning": "melee, free for all",
        "level": 19
    },
    {
        "character": "乱交",
        "kana": "らんこう",
        "meaning": "orgy, promiscuity",
        "level": 19
    },
    {
        "character": "参加",
        "kana": "さんか",
        "meaning": "participation",
        "level": 19
    },
    {
        "character": "いい加減",
        "kana": "いいかげん",
        "meaning": "pointless, unfounded",
        "level": 19
    },
    {
        "character": "宇宙",
        "kana": "うちゅう",
        "meaning": "outer space, space, universe",
        "level": 19
    },
    {
        "character": "警官",
        "kana": "けいかん",
        "meaning": "police officer, policeman, cop",
        "level": 19
    },
    {
        "character": "履歴書",
        "kana": "りれきしょ",
        "meaning": "personal history, resume, resumé, curriculum vitae, cv",
        "level": 19
    },
    {
        "character": "履く",
        "kana": "はく",
        "meaning": "to put on shoes, to put on pants, to put on boots",
        "level": 19
    },
    {
        "character": "忙しい",
        "kana": "いそがしい",
        "meaning": "busy",
        "level": 19
    },
    {
        "character": "若布",
        "kana": "わかめ",
        "meaning": "wakame, wakame seaweed",
        "level": 19
    },
    {
        "character": "布団",
        "kana": "ふとん",
        "meaning": "futon, bedding, sleeping mat",
        "level": 19
    },
    {
        "character": "生徒",
        "kana": "せいと",
        "meaning": "follower, pupil, student",
        "level": 19
    },
    {
        "character": "仏徒",
        "kana": "ぶっと",
        "meaning": "buddhist",
        "level": 19
    },
    {
        "character": "信徒",
        "kana": "しんと",
        "meaning": "believer, follower",
        "level": 19
    },
    {
        "character": "得る",
        "kana": "える",
        "meaning": "to acquire, to gain, to obtain",
        "level": 19
    },
    {
        "character": "得意",
        "kana": "とくい",
        "meaning": "good at, skilled at, strong point, specialty, forte",
        "level": 19
    },
    {
        "character": "説得",
        "kana": "せっとく",
        "meaning": "persuasion",
        "level": 19
    },
    {
        "character": "恋人",
        "kana": "こいびと",
        "meaning": "lover",
        "level": 19
    },
    {
        "character": "大失敗",
        "kana": "だいしっぱい",
        "meaning": "total failure, huge mistake, big mistake, debacle, massive failure, epic fail",
        "level": 19
    },
    {
        "character": "昆布",
        "kana": "こんぶ",
        "meaning": "konbu, kombu, konbu seaweed, kombu seaweed",
        "level": 19
    },
    {
        "character": "乱暴",
        "kana": "らんぼう",
        "meaning": "violence",
        "level": 19
    },
    {
        "character": "梅干",
        "kana": "うめぼし",
        "meaning": "pickled plums, pickled ume, umeboshi",
        "level": 19
    },
    {
        "character": "比べる",
        "kana": "くらべる",
        "meaning": "to compare",
        "level": 19
    },
    {
        "character": "比例",
        "kana": "ひれい",
        "meaning": "proportion, ratio",
        "level": 19
    },
    {
        "character": "混ざる",
        "kana": "まざる",
        "meaning": "to get mixed, to be mixed, to be blended with",
        "level": 19
    },
    {
        "character": "減る",
        "kana": "へる",
        "meaning": "to be decreased, to get decreased, to decrease",
        "level": 19
    },
    {
        "character": "若々しい",
        "kana": "わかわかしい",
        "meaning": "youthful",
        "level": 19
    },
    {
        "character": "歌詞",
        "kana": "かし",
        "meaning": "song lyrics, lyrics",
        "level": 19
    },
    {
        "character": "財閥",
        "kana": "ざいばつ",
        "meaning": "plutocrats, financial clique, zaibatsu",
        "level": 19
    },
    {
        "character": "連続",
        "kana": "れんぞく",
        "meaning": "a series, series",
        "level": 19
    },
    {
        "character": "非常口",
        "kana": "ひじょうぐち",
        "meaning": "emergency exit",
        "level": 19
    },
    {
        "character": "大きい順",
        "kana": "おおきいじゅん",
        "meaning": "decreasing order, descending order, largest first",
        "level": 19
    },
    {
        "character": "五十音順",
        "kana": "ごじゅうおんじゅん",
        "meaning": "aiueo order, in aiueo order",
        "level": 19
    },
    {
        "character": "改まる",
        "kana": "あらたまる",
        "meaning": "to be renewed, to be formal",
        "level": 19
    },
    {
        "character": "在留",
        "kana": "ざいりゅう",
        "meaning": "residence",
        "level": 20
    },
    {
        "character": "お尻",
        "kana": "おしり",
        "meaning": "butt",
        "level": 20
    },
    {
        "character": "会議",
        "kana": "かいぎ",
        "meaning": "meeting, conference, assembly",
        "level": 20
    },
    {
        "character": "借り手",
        "kana": "かりて",
        "meaning": "borrower",
        "level": 20
    },
    {
        "character": "飛行機",
        "kana": "ひこうき",
        "meaning": "airplane, aeroplane, aircraft",
        "level": 20
    },
    {
        "character": "穴場",
        "kana": "あなば",
        "meaning": "hole in the wall, little known good place",
        "level": 20
    },
    {
        "character": "嫌疑",
        "kana": "けんぎ",
        "meaning": "suspicion",
        "level": 20
    },
    {
        "character": "議論",
        "kana": "ぎろん",
        "meaning": "argument",
        "level": 20
    },
    {
        "character": "倒産",
        "kana": "とうさん",
        "meaning": "bankruptcy",
        "level": 20
    },
    {
        "character": "留守番電話",
        "kana": "るすばんでんわ",
        "meaning": "answering machine",
        "level": 20
    },
    {
        "character": "嫌",
        "kana": "いや",
        "meaning": "dislike, eww, ew, gross",
        "level": 20
    },
    {
        "character": "立入禁止",
        "kana": "たちいりきんし",
        "meaning": "do not enter, no entry, entry prohibited, no trespassing, trespassing prohibited",
        "level": 20
    },
    {
        "character": "人達",
        "kana": "ひとたち",
        "meaning": "people",
        "level": 20
    },
    {
        "character": "罪",
        "kana": "つみ",
        "meaning": "sin, crime",
        "level": 20
    },
    {
        "character": "弓矢",
        "kana": "ゆみや",
        "meaning": "bow and arrow",
        "level": 20
    },
    {
        "character": "妻子",
        "kana": "さいし",
        "meaning": "wife and kids, wife and children",
        "level": 20
    },
    {
        "character": "防ぐ",
        "kana": "ふせぐ",
        "meaning": "to defend, to protect against, to prevent",
        "level": 20
    },
    {
        "character": "読者",
        "kana": "どくしゃ",
        "meaning": "reader",
        "level": 20
    },
    {
        "character": "災い",
        "kana": "わざわい",
        "meaning": "personal disaster, personal misfortune",
        "level": 20
    },
    {
        "character": "犯人",
        "kana": "はんにん",
        "meaning": "criminal",
        "level": 20
    },
    {
        "character": "尻尾",
        "kana": "しっぽ",
        "meaning": "tail",
        "level": 20
    },
    {
        "character": "非難",
        "kana": "ひなん",
        "meaning": "criticism",
        "level": 20
    },
    {
        "character": "被害",
        "kana": "ひがい",
        "meaning": "damage, harm, injury",
        "level": 20
    },
    {
        "character": "有罪",
        "kana": "ゆうざい",
        "meaning": "guilty",
        "level": 20
    },
    {
        "character": "危機",
        "kana": "きき",
        "meaning": "crisis",
        "level": 20
    },
    {
        "character": "人類学",
        "kana": "じんるいがく",
        "meaning": "anthropology",
        "level": 20
    },
    {
        "character": "血圧",
        "kana": "けつあつ",
        "meaning": "blood pressure",
        "level": 20
    },
    {
        "character": "余震",
        "kana": "よしん",
        "meaning": "aftershock",
        "level": 20
    },
    {
        "character": "鼻の穴",
        "kana": "はなのあな",
        "meaning": "nostril, nose hole",
        "level": 20
    },
    {
        "character": "飛ぶ",
        "kana": "とぶ",
        "meaning": "to fly, to jump",
        "level": 20
    },
    {
        "character": "地震",
        "kana": "じしん",
        "meaning": "earthquake",
        "level": 20
    },
    {
        "character": "経験者",
        "kana": "けいけんしゃ",
        "meaning": "experienced person",
        "level": 20
    },
    {
        "character": "震度",
        "kana": "しんど",
        "meaning": "earthquake intensity, earthquake magnitude, magnitude, earthquake scale",
        "level": 20
    },
    {
        "character": "水害",
        "kana": "すいがい",
        "meaning": "flood damage, water damage",
        "level": 20
    },
    {
        "character": "無害",
        "kana": "むがい",
        "meaning": "harmless",
        "level": 20
    },
    {
        "character": "穴",
        "kana": "あな",
        "meaning": "hole",
        "level": 20
    },
    {
        "character": "経験",
        "kana": "けいけん",
        "meaning": "experience",
        "level": 20
    },
    {
        "character": "火災",
        "kana": "かさい",
        "meaning": "fire disaster",
        "level": 20
    },
    {
        "character": "正確",
        "kana": "せいかく",
        "meaning": "accurate, precise, exact",
        "level": 20
    },
    {
        "character": "忘れ物",
        "kana": "わすれもの",
        "meaning": "forgotten item, something forgotten, forgotten thing, lost property",
        "level": 20
    },
    {
        "character": "夫妻",
        "kana": "ふさい",
        "meaning": "husband and wife",
        "level": 20
    },
    {
        "character": "存在",
        "kana": "そんざい",
        "meaning": "existence",
        "level": 20
    },
    {
        "character": "機械",
        "kana": "きかい",
        "meaning": "machine, mechanism",
        "level": 20
    },
    {
        "character": "煙い",
        "kana": "けむい",
        "meaning": "smoky",
        "level": 20
    },
    {
        "character": "在外",
        "kana": "ざいがい",
        "meaning": "overseas, abroad",
        "level": 20
    },
    {
        "character": "機嫌",
        "kana": "きげん",
        "meaning": "mood",
        "level": 20
    },
    {
        "character": "比率",
        "kana": "ひりつ",
        "meaning": "percentage, ratio",
        "level": 20
    },
    {
        "character": "災難",
        "kana": "さいなん",
        "meaning": "misfortune, calamity, disaster",
        "level": 20
    },
    {
        "character": "悪夢",
        "kana": "あくむ",
        "meaning": "nightmare, bad dream",
        "level": 20
    },
    {
        "character": "一個",
        "kana": "いっこ",
        "meaning": "one small thing, one thing, one small object, one object",
        "level": 20
    },
    {
        "character": "手洗い",
        "kana": "てあらい",
        "meaning": "hand washing, bathroom, restroom, lavatory, washing the hands",
        "level": 20
    },
    {
        "character": "個人",
        "kana": "こじん",
        "meaning": "personal, individual",
        "level": 20
    },
    {
        "character": "個室",
        "kana": "こしつ",
        "meaning": "private room, one's own room",
        "level": 20
    },
    {
        "character": "厚い",
        "kana": "あつい",
        "meaning": "thick",
        "level": 20
    },
    {
        "character": "公害",
        "kana": "こうがい",
        "meaning": "pollution",
        "level": 20
    },
    {
        "character": "一夫多妻",
        "kana": "いっぷたさい",
        "meaning": "polygamy",
        "level": 20
    },
    {
        "character": "予防",
        "kana": "よぼう",
        "meaning": "prevention, prevent",
        "level": 20
    },
    {
        "character": "確率",
        "kana": "かくりつ",
        "meaning": "probability",
        "level": 20
    },
    {
        "character": "実在",
        "kana": "じつざい",
        "meaning": "reality, real existence",
        "level": 20
    },
    {
        "character": "余裕",
        "kana": "よゆう",
        "meaning": "surplus, leeway, room",
        "level": 20
    },
    {
        "character": "文句する",
        "kana": "もんくする",
        "meaning": "to complain",
        "level": 20
    },
    {
        "character": "犯す",
        "kana": "おかす",
        "meaning": "to commit a crime, to perpetrate",
        "level": 20
    },
    {
        "character": "残余",
        "kana": "ざんよ",
        "meaning": "remainder, residual",
        "level": 20
    },
    {
        "character": "経つ",
        "kana": "たつ",
        "meaning": "to pass, to expire",
        "level": 20
    },
    {
        "character": "妨げる",
        "kana": "さまたげる",
        "meaning": "to obstruct, to prevent, to hamper",
        "level": 20
    },
    {
        "character": "妨害",
        "kana": "ぼうがい",
        "meaning": "obstruction, interference",
        "level": 20
    },
    {
        "character": "静々",
        "kana": "しずしず",
        "meaning": "quietly, calmly",
        "level": 20
    },
    {
        "character": "防水",
        "kana": "ぼうすい",
        "meaning": "waterproof, watertight",
        "level": 20
    },
    {
        "character": "裕福",
        "kana": "ゆうふく",
        "meaning": "wealth",
        "level": 20
    },
    {
        "character": "面倒",
        "kana": "めんどう",
        "meaning": "trouble, difficulty",
        "level": 20
    },
    {
        "character": "防火",
        "kana": "ぼうか",
        "meaning": "fire prevention, fire fighting, fire proof",
        "level": 20
    },
    {
        "character": "臭い",
        "kana": "くさい",
        "meaning": "stinky, stinking, to be stinky, smelly, to be smelly",
        "level": 20
    },
    {
        "character": "可能性",
        "kana": "かのうせい",
        "meaning": "possibility",
        "level": 20
    },
    {
        "character": "確かに",
        "kana": "たしかに",
        "meaning": "certain, probable, surely, certainly",
        "level": 20
    },
    {
        "character": "夢中",
        "kana": "むちゅう",
        "meaning": "crazy about, absorption, mad about",
        "level": 20
    },
    {
        "character": "余る",
        "kana": "あまる",
        "meaning": "to be in surplus, to remain left over, to exceed, to surplus, to be in excess",
        "level": 20
    },
    {
        "character": "論文",
        "kana": "ろんぶん",
        "meaning": "essay, thesis",
        "level": 20
    },
    {
        "character": "難しい",
        "kana": "むずかしい",
        "meaning": "difficult, hard",
        "level": 20
    },
    {
        "character": "三個",
        "kana": "さんこ",
        "meaning": "three small things, three things, three objects, three small objects",
        "level": 20
    },
    {
        "character": "困難",
        "kana": "こんなん",
        "meaning": "hardship, difficulty",
        "level": 20
    },
    {
        "character": "焼ける",
        "kana": "やける",
        "meaning": "to be cooked, to burn",
        "level": 20
    },
    {
        "character": "余計",
        "kana": "よけい",
        "meaning": "unneeded, more than enough, too much, excess, unnecessary",
        "level": 20
    },
    {
        "character": "倒す",
        "kana": "たおす",
        "meaning": "to knock over, to knock down, to bring down",
        "level": 20
    },
    {
        "character": "不可分",
        "kana": "ふかぶん",
        "meaning": "indivisible",
        "level": 20
    },
    {
        "character": "圧力",
        "kana": "あつりょく",
        "meaning": "pressure, stress",
        "level": 20
    },
    {
        "character": "指圧",
        "kana": "しあつ",
        "meaning": "shiatsu, finger pressure",
        "level": 20
    },
    {
        "character": "夢",
        "kana": "ゆめ",
        "meaning": "dream",
        "level": 20
    },
    {
        "character": "妻",
        "kana": "つま",
        "meaning": "wife, my wife",
        "level": 20
    },
    {
        "character": "嫌い",
        "kana": "きらい",
        "meaning": "to dislike, to hate, dislike, hate",
        "level": 20
    },
    {
        "character": "電子機器",
        "kana": "でんしきき",
        "meaning": "electronic equipment, electronics",
        "level": 20
    },
    {
        "character": "災害",
        "kana": "さいがい",
        "meaning": "natural disaster, disaster, accident",
        "level": 20
    },
    {
        "character": "震災",
        "kana": "しんさい",
        "meaning": "earthquake disaster",
        "level": 20
    },
    {
        "character": "胸焼け",
        "kana": "むねやけ",
        "meaning": "heartburn",
        "level": 20
    },
    {
        "character": "論理",
        "kana": "ろんり",
        "meaning": "logic",
        "level": 20
    },
    {
        "character": "共犯者",
        "kana": "きょうはんしゃ",
        "meaning": "accomplice",
        "level": 20
    },
    {
        "character": "産む",
        "kana": "うむ",
        "meaning": "to give birth",
        "level": 20
    },
    {
        "character": "穴子",
        "kana": "あなご",
        "meaning": "conger eel, anago",
        "level": 20
    },
    {
        "character": "犯罪",
        "kana": "はんざい",
        "meaning": "crime",
        "level": 20
    },
    {
        "character": "被る",
        "kana": "かぶる",
        "meaning": "to put on a hat, to put on, to wear a hat, to wear, to put a hat on",
        "level": 20
    },
    {
        "character": "音訓",
        "kana": "おんくん",
        "meaning": "on'yomi and kun'yomi, chinese and japanese readings",
        "level": 20
    },
    {
        "character": "理論",
        "kana": "りろん",
        "meaning": "theory",
        "level": 20
    },
    {
        "character": "不思議",
        "kana": "ふしぎ",
        "meaning": "wonder, mystery, marvel",
        "level": 20
    },
    {
        "character": "防止",
        "kana": "ぼうし",
        "meaning": "prevention",
        "level": 20
    },
    {
        "character": "入学試験",
        "kana": "にゅうがくしけん",
        "meaning": "entrance exams, entrance examinations, admission test, admission exam, admission examination, entrance test",
        "level": 20
    },
    {
        "character": "大敵",
        "kana": "たいてき",
        "meaning": "arch enemy, rival, enemy",
        "level": 21
    },
    {
        "character": "混乱する",
        "kana": "こんらんする",
        "meaning": "to be confused",
        "level": 21
    },
    {
        "character": "権利",
        "kana": "けんり",
        "meaning": "a right, right",
        "level": 21
    },
    {
        "character": "敵",
        "kana": "てき",
        "meaning": "enemy",
        "level": 21
    },
    {
        "character": "制服",
        "kana": "せいふく",
        "meaning": "uniform",
        "level": 21
    },
    {
        "character": "総理",
        "kana": "そうり",
        "meaning": "prime minister",
        "level": 21
    },
    {
        "character": "人権",
        "kana": "じんけん",
        "meaning": "human rights",
        "level": 21
    },
    {
        "character": "事件",
        "kana": "じけん",
        "meaning": "incident, case",
        "level": 21
    },
    {
        "character": "派手",
        "kana": "はで",
        "meaning": "showy, flashy, gaudy",
        "level": 21
    },
    {
        "character": "暴力団",
        "kana": "ぼうりょくだん",
        "meaning": "crime syndicate, yakuza, gangster organization, gangster organisation",
        "level": 21
    },
    {
        "character": "解決",
        "kana": "かいけつ",
        "meaning": "solution",
        "level": 21
    },
    {
        "character": "増加",
        "kana": "ぞうか",
        "meaning": "increase, addition, growth",
        "level": 21
    },
    {
        "character": "混む",
        "kana": "こむ",
        "meaning": "to be crowded",
        "level": 21
    },
    {
        "character": "総体的",
        "kana": "そうたいてき",
        "meaning": "as a whole",
        "level": 21
    },
    {
        "character": "資本",
        "kana": "しほん",
        "meaning": "funds, capital",
        "level": 21
    },
    {
        "character": "任務",
        "kana": "にんむ",
        "meaning": "duty, task",
        "level": 21
    },
    {
        "character": "建設",
        "kana": "けんせつ",
        "meaning": "construction",
        "level": 21
    },
    {
        "character": "書評",
        "kana": "しょひょう",
        "meaning": "book review",
        "level": 21
    },
    {
        "character": "実際",
        "kana": "じっさい",
        "meaning": "actually, really",
        "level": 21
    },
    {
        "character": "宇宙人",
        "kana": "うちゅうじん",
        "meaning": "alien",
        "level": 21
    },
    {
        "character": "条件",
        "kana": "じょうけん",
        "meaning": "condition, terms, requirements",
        "level": 21
    },
    {
        "character": "批判",
        "kana": "ひはん",
        "meaning": "criticism",
        "level": 21
    },
    {
        "character": "定義",
        "kana": "ていぎ",
        "meaning": "definition",
        "level": 21
    },
    {
        "character": "選挙",
        "kana": "せんきょ",
        "meaning": "election",
        "level": 21
    },
    {
        "character": "審査",
        "kana": "しんさ",
        "meaning": "examination, inspection",
        "level": 21
    },
    {
        "character": "参加者",
        "kana": "さんかしゃ",
        "meaning": "participant",
        "level": 21
    },
    {
        "character": "手続き",
        "kana": "てつづき",
        "meaning": "procedure",
        "level": 21
    },
    {
        "character": "続ける",
        "kana": "つづける",
        "meaning": "to continue",
        "level": 21
    },
    {
        "character": "他動詞",
        "kana": "たどうし",
        "meaning": "transitive verb",
        "level": 21
    },
    {
        "character": "口笛",
        "kana": "くちぶえ",
        "meaning": "whistling",
        "level": 21
    },
    {
        "character": "容疑者",
        "kana": "ようぎしゃ",
        "meaning": "suspect",
        "level": 21
    },
    {
        "character": "減らす",
        "kana": "へらす",
        "meaning": "to decrease, to decrease something",
        "level": 21
    },
    {
        "character": "説得する",
        "kana": "せっとくする",
        "meaning": "to persuade",
        "level": 21
    },
    {
        "character": "務省",
        "kana": "むしょう",
        "meaning": "ministry of",
        "level": 21
    },
    {
        "character": "増税",
        "kana": "ぞうぜい",
        "meaning": "tax increase, raise taxes, increased taxes",
        "level": 21
    },
    {
        "character": "設ける",
        "kana": "もうける",
        "meaning": "to establish",
        "level": 21
    },
    {
        "character": "検問する",
        "kana": "けんもんする",
        "meaning": "to inspect, to examine, to check",
        "level": 21
    },
    {
        "character": "主義",
        "kana": "しゅぎ",
        "meaning": "ism, principle",
        "level": 21
    },
    {
        "character": "審判",
        "kana": "しんぱん",
        "meaning": "judgement, decision, refereeing",
        "level": 21
    },
    {
        "character": "判断",
        "kana": "はんだん",
        "meaning": "judgement, judgment",
        "level": 21
    },
    {
        "character": "素敵",
        "kana": "すてき",
        "meaning": "lovely, dreamy, beautiful",
        "level": 21
    },
    {
        "character": "義務",
        "kana": "ぎむ",
        "meaning": "obligation, duty",
        "level": 21
    },
    {
        "character": "事務所",
        "kana": "じむしょ",
        "meaning": "office",
        "level": 21
    },
    {
        "character": "自制",
        "kana": "じせい",
        "meaning": "self control, self restraint",
        "level": 21
    },
    {
        "character": "公設",
        "kana": "こうせつ",
        "meaning": "public, public institution",
        "level": 21
    },
    {
        "character": "素材",
        "kana": "そざい",
        "meaning": "raw material",
        "level": 21
    },
    {
        "character": "急増",
        "kana": "きゅうぞう",
        "meaning": "sudden increase, increase suddenly",
        "level": 21
    },
    {
        "character": "立派",
        "kana": "りっぱ",
        "meaning": "high class, splendid, fine",
        "level": 21
    },
    {
        "character": "責める",
        "kana": "せめる",
        "meaning": "to blame",
        "level": 21
    },
    {
        "character": "素晴らしい",
        "kana": "すばらしい",
        "meaning": "wonderful, splendid, the best",
        "level": 21
    },
    {
        "character": "経済",
        "kana": "けいざい",
        "meaning": "economy, economics, the economy",
        "level": 21
    },
    {
        "character": "暴走族",
        "kana": "ぼうそうぞく",
        "meaning": "biker gang, motorcycle gang, japanese bikers, bosozoku",
        "level": 21
    },
    {
        "character": "資金",
        "kana": "しきん",
        "meaning": "funds, capital",
        "level": 21
    },
    {
        "character": "検査",
        "kana": "けんさ",
        "meaning": "checkup, inspection, examination",
        "level": 21
    },
    {
        "character": "岡山県",
        "kana": "おかやまけん",
        "meaning": "okayama prefecture",
        "level": 21
    },
    {
        "character": "企画",
        "kana": "きかく",
        "meaning": "plan, planning",
        "level": 21
    },
    {
        "character": "増える",
        "kana": "ふえる",
        "meaning": "to increase",
        "level": 21
    },
    {
        "character": "警察官",
        "kana": "けいさつかん",
        "meaning": "police officer, policeman",
        "level": 21
    },
    {
        "character": "義理",
        "kana": "ぎり",
        "meaning": "sense of duty, social obligation",
        "level": 21
    },
    {
        "character": "解説",
        "kana": "かいせつ",
        "meaning": "explanation, commentary",
        "level": 21
    },
    {
        "character": "形容動詞",
        "kana": "けいようどうし",
        "meaning": "na adjective",
        "level": 21
    },
    {
        "character": "分解",
        "kana": "ぶんかい",
        "meaning": "analysis, breakdown, disassembly, dismantling",
        "level": 21
    },
    {
        "character": "理解",
        "kana": "りかい",
        "meaning": "comprehension, understanding",
        "level": 21
    },
    {
        "character": "強制",
        "kana": "きょうせい",
        "meaning": "compulsory, obligation, mandatory, obligatory",
        "level": 21
    },
    {
        "character": "保守主義",
        "kana": "ほしゅしゅぎ",
        "meaning": "conservative, conservatism",
        "level": 21
    },
    {
        "character": "いい加減にしろ",
        "kana": "いいかげんにしろ",
        "meaning": "cut it out, cut the bs",
        "level": 21
    },
    {
        "character": "国際",
        "kana": "こくさい",
        "meaning": "international",
        "level": 21
    },
    {
        "character": "資料",
        "kana": "しりょう",
        "meaning": "material, data",
        "level": 21
    },
    {
        "character": "固有名詞",
        "kana": "こゆうめいし",
        "meaning": "proper noun",
        "level": 21
    },
    {
        "character": "無税",
        "kana": "むぜい",
        "meaning": "tax free, no tax",
        "level": 21
    },
    {
        "character": "混じる",
        "kana": "まじる",
        "meaning": "to get mixed up in, to get mixed, to be mixed",
        "level": 21
    },
    {
        "character": "省く",
        "kana": "はぶく",
        "meaning": "to omit, to eliminate, to skip",
        "level": 21
    },
    {
        "character": "断る",
        "kana": "ことわる",
        "meaning": "to refuse, to reject",
        "level": 21
    },
    {
        "character": "条約",
        "kana": "じょうやく",
        "meaning": "treaty",
        "level": 21
    },
    {
        "character": "女権",
        "kana": "じょけん",
        "meaning": "women's rights, woman's rights",
        "level": 21
    },
    {
        "character": "正解",
        "kana": "せいかい",
        "meaning": "correct answer, correct",
        "level": 21
    },
    {
        "character": "務める",
        "kana": "つとめる",
        "meaning": "to work for, to serve at, to be employed at",
        "level": 21
    },
    {
        "character": "評論",
        "kana": "ひょうろん",
        "meaning": "critique, criticism",
        "level": 21
    },
    {
        "character": "乱す",
        "kana": "みだす",
        "meaning": "to put in disorder, to throw out of order",
        "level": 21
    },
    {
        "character": "任意",
        "kana": "にんい",
        "meaning": "optional, voluntary",
        "level": 21
    },
    {
        "character": "企てる",
        "kana": "くわだてる",
        "meaning": "to plan, to scheme",
        "level": 21
    },
    {
        "character": "判子",
        "kana": "はんこ",
        "meaning": "one's seal, seal, personal seal",
        "level": 21
    },
    {
        "character": "評判",
        "kana": "ひょうばん",
        "meaning": "fame, reputation",
        "level": 21
    },
    {
        "character": "制度",
        "kana": "せいど",
        "meaning": "system",
        "level": 21
    },
    {
        "character": "参加する",
        "kana": "さんかする",
        "meaning": "to participate",
        "level": 21
    },
    {
        "character": "委員",
        "kana": "いいん",
        "meaning": "member of a committee, committee member",
        "level": 21
    },
    {
        "character": "正義",
        "kana": "せいぎ",
        "meaning": "justice, righteousness",
        "level": 21
    },
    {
        "character": "宇宙船",
        "kana": "うちゅうせん",
        "meaning": "space ship, space shuttle, starship, star ship, ufo, spacecraft, space craft, flying saucer",
        "level": 21
    },
    {
        "character": "履き物",
        "kana": "はきもの",
        "meaning": "footwear, shoes",
        "level": 21
    },
    {
        "character": "挙がる",
        "kana": "あがる",
        "meaning": "to rise",
        "level": 21
    },
    {
        "character": "無敵",
        "kana": "むてき",
        "meaning": "unrivaled, invincible",
        "level": 21
    },
    {
        "character": "済む",
        "kana": "すむ",
        "meaning": "to come to an end",
        "level": 21
    },
    {
        "character": "反省",
        "kana": "はんせい",
        "meaning": "reconsideration, reflection",
        "level": 21
    },
    {
        "character": "税金",
        "kana": "ぜいきん",
        "meaning": "tax",
        "level": 21
    },
    {
        "character": "総合",
        "kana": "そうごう",
        "meaning": "overall, comprehensive",
        "level": 21
    },
    {
        "character": "解ける",
        "kana": "とける",
        "meaning": "to become untied, to get untied, to come undone, to become undone",
        "level": 21
    },
    {
        "character": "設定する",
        "kana": "せっていする",
        "meaning": "to establish",
        "level": 21
    },
    {
        "character": "評価",
        "kana": "ひょうか",
        "meaning": "appraisal, verdict, valuation, assessment",
        "level": 21
    },
    {
        "character": "認める",
        "kana": "みとめる",
        "meaning": "to recognize, to perceive, to acknowledge",
        "level": 21
    },
    {
        "character": "確認",
        "kana": "かくにん",
        "meaning": "confirmation, verification",
        "level": 21
    },
    {
        "character": "責任",
        "kana": "せきにん",
        "meaning": "responsibility",
        "level": 21
    },
    {
        "character": "投資",
        "kana": "とうし",
        "meaning": "investment",
        "level": 21
    },
    {
        "character": "際",
        "kana": "きわ",
        "meaning": "side, edge, brink",
        "level": 21
    },
    {
        "character": "不可能",
        "kana": "ふかのう",
        "meaning": "impossible, not possible",
        "level": 22
    },
    {
        "character": "高値",
        "kana": "たかね",
        "meaning": "high price, expensive price",
        "level": 22
    },
    {
        "character": "営業",
        "kana": "えいぎょう",
        "meaning": "running a business, managing a business",
        "level": 22
    },
    {
        "character": "産業",
        "kana": "さんぎょう",
        "meaning": "industry, heavy industry",
        "level": 22
    },
    {
        "character": "各自",
        "kana": "かくじ",
        "meaning": "each person, individual",
        "level": 22
    },
    {
        "character": "地価",
        "kana": "ちか",
        "meaning": "land value",
        "level": 22
    },
    {
        "character": "坊さん",
        "kana": "ぼうさん",
        "meaning": "monk",
        "level": 22
    },
    {
        "character": "姿勢",
        "kana": "しせい",
        "meaning": "posture",
        "level": 22
    },
    {
        "character": "私営",
        "kana": "しえい",
        "meaning": "private, privately run, run privately",
        "level": 22
    },
    {
        "character": "罰する",
        "kana": "ばっする",
        "meaning": "to punish, to penalize",
        "level": 22
    },
    {
        "character": "政策",
        "kana": "せいさく",
        "meaning": "policy, a policy",
        "level": 22
    },
    {
        "character": "提案",
        "kana": "ていあん",
        "meaning": "proposition, proposal",
        "level": 22
    },
    {
        "character": "市営",
        "kana": "しえい",
        "meaning": "run by the city, city run",
        "level": 22
    },
    {
        "character": "応じる",
        "kana": "おうじる",
        "meaning": "to respond",
        "level": 22
    },
    {
        "character": "統合",
        "kana": "とうごう",
        "meaning": "unification, integration",
        "level": 22
    },
    {
        "character": "値",
        "kana": "ね",
        "meaning": "value, price",
        "level": 22
    },
    {
        "character": "態度",
        "kana": "たいど",
        "meaning": "attitude, manner, behavior",
        "level": 22
    },
    {
        "character": "副題",
        "kana": "ふくだい",
        "meaning": "subtitle, subheading",
        "level": 22
    },
    {
        "character": "費用",
        "kana": "ひよう",
        "meaning": "expenses, cost",
        "level": 22
    },
    {
        "character": "副詞",
        "kana": "ふくし",
        "meaning": "adverb",
        "level": 22
    },
    {
        "character": "罰金",
        "kana": "ばっきん",
        "meaning": "a fine, fine",
        "level": 22
    },
    {
        "character": "失態",
        "kana": "しったい",
        "meaning": "blunder, disgrace",
        "level": 22
    },
    {
        "character": "区域",
        "kana": "くいき",
        "meaning": "boundary, zone",
        "level": 22
    },
    {
        "character": "坊主",
        "kana": "ぼうず",
        "meaning": "buddhist priest",
        "level": 22
    },
    {
        "character": "防犯",
        "kana": "ぼうはん",
        "meaning": "crime prevention",
        "level": 22
    },
    {
        "character": "社費",
        "kana": "しゃひ",
        "meaning": "company expenses",
        "level": 22
    },
    {
        "character": "消費",
        "kana": "しょうひ",
        "meaning": "consumption, expenditure",
        "level": 22
    },
    {
        "character": "各地",
        "kana": "かくち",
        "meaning": "each area",
        "level": 22
    },
    {
        "character": "脱線",
        "kana": "だっせん",
        "meaning": "digression",
        "level": 22
    },
    {
        "character": "観念",
        "kana": "かんねん",
        "meaning": "idea, notion",
        "level": 22
    },
    {
        "character": "昼寝",
        "kana": "ひるね",
        "meaning": "nap",
        "level": 22
    },
    {
        "character": "脱字",
        "kana": "だつじ",
        "meaning": "omitted character, omitted word",
        "level": 22
    },
    {
        "character": "過去",
        "kana": "かこ",
        "meaning": "past, the past",
        "level": 22
    },
    {
        "character": "位置",
        "kana": "いち",
        "meaning": "position, location, place",
        "level": 22
    },
    {
        "character": "罰",
        "kana": "ばつ",
        "meaning": "penalty, punishment",
        "level": 22
    },
    {
        "character": "公示",
        "kana": "こうじ",
        "meaning": "public announcement",
        "level": 22
    },
    {
        "character": "公営",
        "kana": "こうえい",
        "meaning": "public, government run, run by the government",
        "level": 22
    },
    {
        "character": "地域",
        "kana": "ちいき",
        "meaning": "region, area, zone",
        "level": 22
    },
    {
        "character": "官営",
        "kana": "かんえい",
        "meaning": "run by the government, government run",
        "level": 22
    },
    {
        "character": "観光",
        "kana": "かんこう",
        "meaning": "sightseeing",
        "level": 22
    },
    {
        "character": "支援",
        "kana": "しえん",
        "meaning": "support",
        "level": 22
    },
    {
        "character": "吸う",
        "kana": "すう",
        "meaning": "to smoke, to suck, to inhale",
        "level": 22
    },
    {
        "character": "領土",
        "kana": "りょうど",
        "meaning": "territory",
        "level": 22
    },
    {
        "character": "存在する",
        "kana": "そんざいする",
        "meaning": "to exist",
        "level": 22
    },
    {
        "character": "大嫌い",
        "kana": "だいきらい",
        "meaning": "to hate, to really hate, hate",
        "level": 22
    },
    {
        "character": "伝統",
        "kana": "でんとう",
        "meaning": "tradition",
        "level": 22
    },
    {
        "character": "案外",
        "kana": "あんがい",
        "meaning": "unexpectedly, more than expected",
        "level": 22
    },
    {
        "character": "飛ばす",
        "kana": "とばす",
        "meaning": "to let fly, to send flying",
        "level": 22
    },
    {
        "character": "主観",
        "kana": "しゅかん",
        "meaning": "subjectivity",
        "level": 22
    },
    {
        "character": "賀状",
        "kana": "がじょう",
        "meaning": "greeting card, new year's card",
        "level": 22
    },
    {
        "character": "勢い",
        "kana": "いきおい",
        "meaning": "force, vigor",
        "level": 22
    },
    {
        "character": "営む",
        "kana": "いとなむ",
        "meaning": "to run a business, to manage a business",
        "level": 22
    },
    {
        "character": "姿",
        "kana": "すがた",
        "meaning": "figure, shape, form",
        "level": 22
    },
    {
        "character": "外観",
        "kana": "がいかん",
        "meaning": "external appearance, outward appearance",
        "level": 22
    },
    {
        "character": "高血圧",
        "kana": "こうけつあつ",
        "meaning": "high blood pressure, hypertension",
        "level": 22
    },
    {
        "character": "非難する",
        "kana": "ひなんする",
        "meaning": "to criticize",
        "level": 22
    },
    {
        "character": "面倒臭い",
        "kana": "めんどうくさい",
        "meaning": "troublesome, a bother",
        "level": 22
    },
    {
        "character": "確かめる",
        "kana": "たしかめる",
        "meaning": "to make sure of, to verify, to confirm, to make certain",
        "level": 22
    },
    {
        "character": "寝坊",
        "kana": "ねぼう",
        "meaning": "oversleep",
        "level": 22
    },
    {
        "character": "受領書",
        "kana": "じゅりょうしょ",
        "meaning": "receipt, docket",
        "level": 22
    },
    {
        "character": "圧倒する",
        "kana": "あっとうする",
        "meaning": "to overwhelm",
        "level": 22
    },
    {
        "character": "援助",
        "kana": "えんじょ",
        "meaning": "assistance, aid",
        "level": 22
    },
    {
        "character": "誕生",
        "kana": "たんじょう",
        "meaning": "birth",
        "level": 22
    },
    {
        "character": "宮",
        "kana": "みや",
        "meaning": "palace",
        "level": 22
    },
    {
        "character": "寝る",
        "kana": "ねる",
        "meaning": "to lie down, to go to bed, to sleep",
        "level": 22
    },
    {
        "character": "大勢",
        "kana": "おおぜい",
        "meaning": "crowd",
        "level": 22
    },
    {
        "character": "提出",
        "kana": "ていしゅつ",
        "meaning": "presentation, filing, handing in, turning in",
        "level": 22
    },
    {
        "character": "脱税",
        "kana": "だつぜい",
        "meaning": "tax evasion",
        "level": 22
    },
    {
        "character": "お手洗い",
        "kana": "おてあらい",
        "meaning": "toilet, restroom, bathroom, lavatory",
        "level": 22
    },
    {
        "character": "指示",
        "kana": "しじ",
        "meaning": "instructions, directions",
        "level": 22
    },
    {
        "character": "脱走する",
        "kana": "だっそうする",
        "meaning": "to escape, to flee",
        "level": 22
    },
    {
        "character": "過ぎる",
        "kana": "すぎる",
        "meaning": "to surpass",
        "level": 22
    },
    {
        "character": "脱ぐ",
        "kana": "ぬぐ",
        "meaning": "to undress, to take off clothes",
        "level": 22
    },
    {
        "character": "観る",
        "kana": "みる",
        "meaning": "to view, to spectate",
        "level": 22
    },
    {
        "character": "在留する",
        "kana": "ざいりゅうする",
        "meaning": "to reside, to stay, to remain",
        "level": 22
    },
    {
        "character": "倒れる",
        "kana": "たおれる",
        "meaning": "to get knocked over, to get knocked down, to collapse",
        "level": 22
    },
    {
        "character": "価",
        "kana": "あたい",
        "meaning": "value",
        "level": 22
    },
    {
        "character": "物価",
        "kana": "ぶっか",
        "meaning": "prices",
        "level": 22
    },
    {
        "character": "安値",
        "kana": "やすね",
        "meaning": "low price, cheap price",
        "level": 22
    },
    {
        "character": "価値",
        "kana": "かち",
        "meaning": "value, worth, merit",
        "level": 22
    },
    {
        "character": "副業",
        "kana": "ふくぎょう",
        "meaning": "side business",
        "level": 22
    },
    {
        "character": "勢力",
        "kana": "せいりょく",
        "meaning": "influence, force",
        "level": 22
    },
    {
        "character": "各々",
        "kana": "おのおの",
        "meaning": "each, every, respectively",
        "level": 22
    },
    {
        "character": "各",
        "kana": "かく",
        "meaning": "each, every, various",
        "level": 22
    },
    {
        "character": "県営",
        "kana": "けんえい",
        "meaning": "run by the prefecture, prefecture run",
        "level": 22
    },
    {
        "character": "案内",
        "kana": "あんない",
        "meaning": "guide",
        "level": 22
    },
    {
        "character": "機会",
        "kana": "きかい",
        "meaning": "opportunity, chance",
        "level": 22
    },
    {
        "character": "赤ん坊",
        "kana": "あかんぼう",
        "meaning": "baby",
        "level": 22
    },
    {
        "character": "領域",
        "kana": "りょういき",
        "meaning": "domain, domain name",
        "level": 22
    },
    {
        "character": "嫌味",
        "kana": "いやみ",
        "meaning": "hurtful words, hurtful speech, sarcasm, disagreeableness",
        "level": 22
    },
    {
        "character": "寝不足",
        "kana": "ねぶそく",
        "meaning": "lack of sleep",
        "level": 22
    },
    {
        "character": "一応",
        "kana": "いちおう",
        "meaning": "tentatively, for now",
        "level": 22
    },
    {
        "character": "反応",
        "kana": "はんのう, はんおう",
        "meaning": "a response, response, a reaction, reaction",
        "level": 22
    },
    {
        "character": "応援",
        "kana": "おうえん",
        "meaning": "aid, assistance, root for",
        "level": 22
    },
    {
        "character": "変態",
        "kana": "へんたい",
        "meaning": "pervert, abnormal",
        "level": 22
    },
    {
        "character": "状況",
        "kana": "じょうきょう",
        "meaning": "condition, circumstances",
        "level": 22
    },
    {
        "character": "状態",
        "kana": "じょうたい",
        "meaning": "condition, state",
        "level": 22
    },
    {
        "character": "示す",
        "kana": "しめす",
        "meaning": "to indicate, to show",
        "level": 22
    },
    {
        "character": "策",
        "kana": "さく",
        "meaning": "a plan, plan, scheme",
        "level": 22
    },
    {
        "character": "大統領",
        "kana": "だいとうりょう",
        "meaning": "president",
        "level": 22
    },
    {
        "character": "置く",
        "kana": "おく",
        "meaning": "to put down, to set down, to place",
        "level": 22
    },
    {
        "character": "罰ゲーム",
        "kana": "ばつげーむ, ばつゲーム",
        "meaning": "batsu game, penalty game",
        "level": 22
    },
    {
        "character": "藤",
        "kana": "ふじ",
        "meaning": "wisteria",
        "level": 22
    },
    {
        "character": "被害者",
        "kana": "ひがいしゃ",
        "meaning": "victim, victims",
        "level": 22
    },
    {
        "character": "観客",
        "kana": "かんきゃく",
        "meaning": "audience, spectators",
        "level": 22
    },
    {
        "character": "態と",
        "kana": "わざと",
        "meaning": "on purpose, deliberately, intentionally",
        "level": 22
    },
    {
        "character": "演ずる",
        "kana": "えんずる",
        "meaning": "to perform, to play",
        "level": 23
    },
    {
        "character": "崎",
        "kana": "さき",
        "meaning": "cape, small peninsula",
        "level": 23
    },
    {
        "character": "牛乳",
        "kana": "ぎゅうにゅう",
        "meaning": "milk, cow's milk",
        "level": 23
    },
    {
        "character": "呼ぶ",
        "kana": "よぶ",
        "meaning": "to call, to call out",
        "level": 23
    },
    {
        "character": "張る",
        "kana": "はる",
        "meaning": "to stretch",
        "level": 23
    },
    {
        "character": "裁判",
        "kana": "さいばん",
        "meaning": "trial",
        "level": 23
    },
    {
        "character": "停止",
        "kana": "ていし",
        "meaning": "stoppage, suspension",
        "level": 23
    },
    {
        "character": "年賀状",
        "kana": "ねんがじょう",
        "meaning": "new year's card, new year's greeting card",
        "level": 23
    },
    {
        "character": "医師",
        "kana": "いし",
        "meaning": "doctor",
        "level": 23
    },
    {
        "character": "規則",
        "kana": "きそく",
        "meaning": "rule, regulation",
        "level": 23
    },
    {
        "character": "優勝",
        "kana": "ゆうしょう",
        "meaning": "championship, victory",
        "level": 23
    },
    {
        "character": "宅",
        "kana": "たく",
        "meaning": "home, house",
        "level": 23
    },
    {
        "character": "無職",
        "kana": "むしょく",
        "meaning": "unemployment",
        "level": 23
    },
    {
        "character": "幹",
        "kana": "みき",
        "meaning": "tree trunk",
        "level": 23
    },
    {
        "character": "自宅",
        "kana": "じたく",
        "meaning": "one's home, one's own home",
        "level": 23
    },
    {
        "character": "挙げる",
        "kana": "あげる",
        "meaning": "to raise, to elevate, to bring up",
        "level": 23
    },
    {
        "character": "批判する",
        "kana": "ひはんする",
        "meaning": "to criticize",
        "level": 23
    },
    {
        "character": "贅沢",
        "kana": "ぜいたく",
        "meaning": "extravagant",
        "level": 23
    },
    {
        "character": "経済学",
        "kana": "けいざいがく",
        "meaning": "economics, study of economics",
        "level": 23
    },
    {
        "character": "了解",
        "kana": "りょうかい",
        "meaning": "comprehension, understanding, roger",
        "level": 23
    },
    {
        "character": "領収書",
        "kana": "りょうしゅうしょ",
        "meaning": "receipt",
        "level": 23
    },
    {
        "character": "吸収",
        "kana": "きゅうしゅう",
        "meaning": "absorption",
        "level": 23
    },
    {
        "character": "俳優",
        "kana": "はいゆう",
        "meaning": "actor",
        "level": 23
    },
    {
        "character": "弁護士",
        "kana": "べんごし",
        "meaning": "attorney, lawyer",
        "level": 23
    },
    {
        "character": "バス停",
        "kana": "ばすてい, バスてい",
        "meaning": "bus stop",
        "level": 23
    },
    {
        "character": "基準",
        "kana": "きじゅん",
        "meaning": "standard, a standard",
        "level": 23
    },
    {
        "character": "法律",
        "kana": "ほうりつ",
        "meaning": "law",
        "level": 23
    },
    {
        "character": "俳句",
        "kana": "はいく",
        "meaning": "haiku",
        "level": 23
    },
    {
        "character": "収入",
        "kana": "しゅうにゅう",
        "meaning": "income",
        "level": 23
    },
    {
        "character": "求職",
        "kana": "きゅうしょく",
        "meaning": "job hunting",
        "level": 23
    },
    {
        "character": "川崎",
        "kana": "かわさき",
        "meaning": "kawasaki, kawasaki city",
        "level": 23
    },
    {
        "character": "各駅停車",
        "kana": "かくえきていしゃ",
        "meaning": "local train",
        "level": 23
    },
    {
        "character": "長崎",
        "kana": "ながさき",
        "meaning": "nagasaki",
        "level": 23
    },
    {
        "character": "職業",
        "kana": "しょくぎょう",
        "meaning": "occupation",
        "level": 23
    },
    {
        "character": "判断する",
        "kana": "はんだんする",
        "meaning": "to judge",
        "level": 23
    },
    {
        "character": "優先",
        "kana": "ゆうせん",
        "meaning": "priority",
        "level": 23
    },
    {
        "character": "割合",
        "kana": "わりあい",
        "meaning": "ratio",
        "level": 23
    },
    {
        "character": "責任感",
        "kana": "せきにんかん",
        "meaning": "sense of responsibility",
        "level": 23
    },
    {
        "character": "確認する",
        "kana": "かくにんする",
        "meaning": "to confirm, to verify",
        "level": 23
    },
    {
        "character": "役割",
        "kana": "やくわり",
        "meaning": "role",
        "level": 23
    },
    {
        "character": "規律",
        "kana": "きりつ",
        "meaning": "rules, law, order, discipline",
        "level": 23
    },
    {
        "character": "停電",
        "kana": "ていでん",
        "meaning": "power outage, cutoff of electricity, power cut",
        "level": 23
    },
    {
        "character": "吸血鬼",
        "kana": "きゅうけつき",
        "meaning": "vampire",
        "level": 23
    },
    {
        "character": "男優",
        "kana": "だんゆう",
        "meaning": "actor",
        "level": 23
    },
    {
        "character": "沢",
        "kana": "さわ",
        "meaning": "swamp",
        "level": 23
    },
    {
        "character": "済ます",
        "kana": "すます",
        "meaning": "to finish, to settle",
        "level": 23
    },
    {
        "character": "現在",
        "kana": "げんざい",
        "meaning": "present, now, current",
        "level": 23
    },
    {
        "character": "皮革",
        "kana": "ひかく",
        "meaning": "leather, hides, pelts",
        "level": 23
    },
    {
        "character": "検査する",
        "kana": "けんさする",
        "meaning": "to examine, to inspect, to check",
        "level": 23
    },
    {
        "character": "優秀",
        "kana": "ゆうしゅう",
        "meaning": "superior, superiority",
        "level": 23
    },
    {
        "character": "不文律",
        "kana": "ふぶんりつ",
        "meaning": "unwritten law, unwritten rule, common law",
        "level": 23
    },
    {
        "character": "理解する",
        "kana": "りかいする",
        "meaning": "to understand, to comprehend",
        "level": 23
    },
    {
        "character": "総理府",
        "kana": "そうりふ",
        "meaning": "prime minister's office",
        "level": 23
    },
    {
        "character": "優しい",
        "kana": "やさしい",
        "meaning": "gentle, kind, warm hearted, nice",
        "level": 23
    },
    {
        "character": "新幹線",
        "kana": "しんかんせん",
        "meaning": "bullet train, shinkansen",
        "level": 23
    },
    {
        "character": "委員会",
        "kana": "いいんかい",
        "meaning": "committee",
        "level": 23
    },
    {
        "character": "表現",
        "kana": "ひょうげん",
        "meaning": "expression, figure of speech",
        "level": 23
    },
    {
        "character": "看護師",
        "kana": "かんごし",
        "meaning": "nurse",
        "level": 23
    },
    {
        "character": "現実",
        "kana": "げんじつ",
        "meaning": "reality",
        "level": 23
    },
    {
        "character": "現れる",
        "kana": "あらわれる",
        "meaning": "to appear, to emerge",
        "level": 23
    },
    {
        "character": "施行",
        "kana": "しこう, せこう",
        "meaning": "carry out, enforcement",
        "level": 23
    },
    {
        "character": "秀でる",
        "kana": "ひいでる",
        "meaning": "to excel, to surpass",
        "level": 23
    },
    {
        "character": "演芸",
        "kana": "えんげい",
        "meaning": "performance, entertainment",
        "level": 23
    },
    {
        "character": "一割",
        "kana": "いちわり",
        "meaning": "ten percent",
        "level": 23
    },
    {
        "character": "革命",
        "kana": "かくめい",
        "meaning": "revolution",
        "level": 23
    },
    {
        "character": "演技",
        "kana": "えんぎ",
        "meaning": "acting, performance",
        "level": 23
    },
    {
        "character": "城",
        "kana": "しろ",
        "meaning": "castle",
        "level": 23
    },
    {
        "character": "乳首",
        "kana": "ちくび",
        "meaning": "nipple",
        "level": 23
    },
    {
        "character": "備える",
        "kana": "そなえる",
        "meaning": "to provide, to furnish, to equip, to prepare for",
        "level": 23
    },
    {
        "character": "準備",
        "kana": "じゅんび",
        "meaning": "preparations",
        "level": 23
    },
    {
        "character": "反則",
        "kana": "はんそく",
        "meaning": "foul",
        "level": 23
    },
    {
        "character": "法則",
        "kana": "ほうそく",
        "meaning": "physical law, law",
        "level": 23
    },
    {
        "character": "割る",
        "kana": "わる",
        "meaning": "to divide",
        "level": 23
    },
    {
        "character": "増やす",
        "kana": "ふやす",
        "meaning": "to increase something, to increase",
        "level": 23
    },
    {
        "character": "住宅",
        "kana": "じゅうたく",
        "meaning": "dwelling, residence",
        "level": 23
    },
    {
        "character": "導く",
        "kana": "みちびく",
        "meaning": "to lead, to guide",
        "level": 23
    },
    {
        "character": "指導",
        "kana": "しどう",
        "meaning": "guidance",
        "level": 23
    },
    {
        "character": "教師",
        "kana": "きょうし",
        "meaning": "teacher",
        "level": 23
    },
    {
        "character": "律動",
        "kana": "りつどう",
        "meaning": "rhythm",
        "level": 23
    },
    {
        "character": "施設",
        "kana": "しせつ",
        "meaning": "institution, facilities, facility, establishment",
        "level": 23
    },
    {
        "character": "選挙する",
        "kana": "せんきょする",
        "meaning": "to elect",
        "level": 23
    },
    {
        "character": "断つ",
        "kana": "たつ",
        "meaning": "to cut off",
        "level": 23
    },
    {
        "character": "経済的",
        "kana": "けいざいてき",
        "meaning": "economic, financial, economical",
        "level": 23
    },
    {
        "character": "現場",
        "kana": "げんば",
        "meaning": "current location, current place, actual spot, present location",
        "level": 23
    },
    {
        "character": "職場",
        "kana": "しょくば",
        "meaning": "place of work, workplace, place of employment",
        "level": 23
    },
    {
        "character": "職員",
        "kana": "しょくいん",
        "meaning": "personnel, staff, employee",
        "level": 23
    },
    {
        "character": "有職",
        "kana": "ゆうしょく",
        "meaning": "employed",
        "level": 23
    },
    {
        "character": "辞職",
        "kana": "じしょく",
        "meaning": "resignation, quitting",
        "level": 23
    },
    {
        "character": "裁く",
        "kana": "さばく",
        "meaning": "to judge",
        "level": 23
    },
    {
        "character": "解く",
        "kana": "とく",
        "meaning": "to untie, to untie something",
        "level": 23
    },
    {
        "character": "保護する",
        "kana": "ほごする",
        "meaning": "to conserve, to protect",
        "level": 23
    },
    {
        "character": "革",
        "kana": "かわ",
        "meaning": "leather",
        "level": 23
    },
    {
        "character": "鬼",
        "kana": "おに",
        "meaning": "demon, ogre",
        "level": 23
    },
    {
        "character": "月額",
        "kana": "げつがく",
        "meaning": "monthly amount",
        "level": 24
    },
    {
        "character": "残額",
        "kana": "ざんがく",
        "meaning": "remaining amount",
        "level": 24
    },
    {
        "character": "肩",
        "kana": "かた",
        "meaning": "shoulder",
        "level": 24
    },
    {
        "character": "無視する",
        "kana": "むしする",
        "meaning": "to ignore, to disregard",
        "level": 24
    },
    {
        "character": "特質",
        "kana": "とくしつ",
        "meaning": "characteristic, trait",
        "level": 24
    },
    {
        "character": "質",
        "kana": "しつ",
        "meaning": "quality",
        "level": 24
    },
    {
        "character": "展示会",
        "kana": "てんじかい",
        "meaning": "trade show, exhibition",
        "level": 24
    },
    {
        "character": "時限",
        "kana": "じげん",
        "meaning": "time limit",
        "level": 24
    },
    {
        "character": "木製",
        "kana": "もくせい",
        "meaning": "wooden, made from wood, made of wood",
        "level": 24
    },
    {
        "character": "感触",
        "kana": "かんしょく",
        "meaning": "touch, touch sense, sense of touch",
        "level": 24
    },
    {
        "character": "腕",
        "kana": "うで",
        "meaning": "arm",
        "level": 24
    },
    {
        "character": "定量",
        "kana": "ていりょう",
        "meaning": "fixed quantity, measurement, fixed amount, set quantity, set amount",
        "level": 24
    },
    {
        "character": "年額",
        "kana": "ねんがく",
        "meaning": "annual amount, yearly amount",
        "level": 24
    },
    {
        "character": "担当",
        "kana": "たんとう",
        "meaning": "in charge",
        "level": 24
    },
    {
        "character": "血管",
        "kana": "けっかん",
        "meaning": "blood vessel",
        "level": 24
    },
    {
        "character": "境",
        "kana": "さかい",
        "meaning": "boundary",
        "level": 24
    },
    {
        "character": "境界",
        "kana": "きょうかい",
        "meaning": "boundary",
        "level": 24
    },
    {
        "character": "可燃ゴミ",
        "kana": "かねんごみ, かねんゴミ",
        "meaning": "burnable garbage, burnable trash",
        "level": 24
    },
    {
        "character": "親展",
        "kana": "しんてん",
        "meaning": "confidential",
        "level": 24
    },
    {
        "character": "象",
        "kana": "ぞう",
        "meaning": "elephant",
        "level": 24
    },
    {
        "character": "環境",
        "kana": "かんきょう",
        "meaning": "environment",
        "level": 24
    },
    {
        "character": "官庁",
        "kana": "かんちょう",
        "meaning": "government office, government authorities, government agency",
        "level": 24
    },
    {
        "character": "無限",
        "kana": "むげん",
        "meaning": "infinite, limitless",
        "level": 24
    },
    {
        "character": "交差点",
        "kana": "こうさてん",
        "meaning": "intersection",
        "level": 24
    },
    {
        "character": "遠視",
        "kana": "えんし",
        "meaning": "farsightedness, longsightedness",
        "level": 24
    },
    {
        "character": "大量",
        "kana": "たいりょう",
        "meaning": "large quantity, huge amount",
        "level": 24
    },
    {
        "character": "法規",
        "kana": "ほうき",
        "meaning": "laws, regulations",
        "level": 24
    },
    {
        "character": "〜層",
        "kana": "そう",
        "meaning": "layer of, layer",
        "level": 24
    },
    {
        "character": "限度",
        "kana": "げんど",
        "meaning": "limit",
        "level": 24
    },
    {
        "character": "限界",
        "kana": "げんかい",
        "meaning": "limit, boundary",
        "level": 24
    },
    {
        "character": "中国製",
        "kana": "ちゅうごくせい",
        "meaning": "made in china",
        "level": 24
    },
    {
        "character": "日本製",
        "kana": "にほんせい",
        "meaning": "made in japan",
        "level": 24
    },
    {
        "character": "通販",
        "kana": "つうはん",
        "meaning": "mail order",
        "level": 24
    },
    {
        "character": "製作",
        "kana": "せいさく",
        "meaning": "manufacturing, production",
        "level": 24
    },
    {
        "character": "武道",
        "kana": "ぶどう",
        "meaning": "martial arts",
        "level": 24
    },
    {
        "character": "価値観",
        "kana": "かちかん",
        "meaning": "moral values, sense of values, values",
        "level": 24
    },
    {
        "character": "警察庁",
        "kana": "けいさつちょう",
        "meaning": "national police agency",
        "level": 24
    },
    {
        "character": "近視",
        "kana": "きんし",
        "meaning": "nearsightedness, shortsightedness",
        "level": 24
    },
    {
        "character": "量",
        "kana": "りょう",
        "meaning": "quantity, amount",
        "level": 24
    },
    {
        "character": "過去形",
        "kana": "かこけい",
        "meaning": "past tense",
        "level": 24
    },
    {
        "character": "所載",
        "kana": "しょさい",
        "meaning": "printed, published",
        "level": 24
    },
    {
        "character": "原型",
        "kana": "げんけい",
        "meaning": "prototype, model",
        "level": 24
    },
    {
        "character": "視覚",
        "kana": "しかく",
        "meaning": "sense of sight, sight",
        "level": 24
    },
    {
        "character": "観光客",
        "kana": "かんこうきゃく",
        "meaning": "tourist, sightseer",
        "level": 24
    },
    {
        "character": "製品",
        "kana": "せいひん",
        "meaning": "product, manufactured goods",
        "level": 24
    },
    {
        "character": "期限",
        "kana": "きげん",
        "meaning": "term, period, due date",
        "level": 24
    },
    {
        "character": "質問",
        "kana": "しつもん",
        "meaning": "question",
        "level": 24
    },
    {
        "character": "発展する",
        "kana": "はってんする",
        "meaning": "to develop",
        "level": 24
    },
    {
        "character": "違う",
        "kana": "ちがう",
        "meaning": "to be different, to be wrong, to be mistaken, to vary, to differ",
        "level": 24
    },
    {
        "character": "置き場",
        "kana": "おきば",
        "meaning": "place to put something, place to put down, location to put something, location to put down",
        "level": 24
    },
    {
        "character": "限る",
        "kana": "かぎる",
        "meaning": "to limit",
        "level": 24
    },
    {
        "character": "応援する",
        "kana": "おうえんする",
        "meaning": "to root for, to cheer on, to cheer",
        "level": 24
    },
    {
        "character": "差す",
        "kana": "さす",
        "meaning": "to shine at, to shine on",
        "level": 24
    },
    {
        "character": "支援する",
        "kana": "しえんする",
        "meaning": "to support, to back, to aid",
        "level": 24
    },
    {
        "character": "触る",
        "kana": "さわる",
        "meaning": "to touch",
        "level": 24
    },
    {
        "character": "典型的",
        "kana": "てんけいてき",
        "meaning": "typical",
        "level": 24
    },
    {
        "character": "展開",
        "kana": "てんかい",
        "meaning": "unfolding, development",
        "level": 24
    },
    {
        "character": "主観的",
        "kana": "しゅかんてき",
        "meaning": "subjective",
        "level": 24
    },
    {
        "character": "量る",
        "kana": "はかる",
        "meaning": "to measure, to weigh",
        "level": 24
    },
    {
        "character": "伝統的",
        "kana": "でんとうてき",
        "meaning": "traditional",
        "level": 24
    },
    {
        "character": "副大統領",
        "kana": "ふくだいとうりょう",
        "meaning": "vice president",
        "level": 24
    },
    {
        "character": "管",
        "kana": "くだ",
        "meaning": "pipe, tube",
        "level": 24
    },
    {
        "character": "援助する",
        "kana": "えんじょする",
        "meaning": "to assist, to aid",
        "level": 24
    },
    {
        "character": "提案する",
        "kana": "ていあんする",
        "meaning": "to propose",
        "level": 24
    },
    {
        "character": "気象",
        "kana": "きしょう",
        "meaning": "weather, disposition",
        "level": 24
    },
    {
        "character": "差別",
        "kana": "さべつ",
        "meaning": "discrimination, distinction",
        "level": 24
    },
    {
        "character": "届く",
        "kana": "とどく",
        "meaning": "to be delivered, to arrive, to reach",
        "level": 24
    },
    {
        "character": "過ぎ",
        "kana": "すぎ",
        "meaning": "too much",
        "level": 24
    },
    {
        "character": "供える",
        "kana": "そなえる",
        "meaning": "to make an offering, to offer",
        "level": 24
    },
    {
        "character": "燃やす",
        "kana": "もやす",
        "meaning": "to burn something, to burn",
        "level": 24
    },
    {
        "character": "提供",
        "kana": "ていきょう",
        "meaning": "offer, program sponsoring, programme sponsoring",
        "level": 24
    },
    {
        "character": "腰",
        "kana": "こし",
        "meaning": "waist",
        "level": 24
    },
    {
        "character": "自家製",
        "kana": "じかせい",
        "meaning": "homemade, home brewed, made at home",
        "level": 24
    },
    {
        "character": "朝寝坊",
        "kana": "あさねぼう",
        "meaning": "late riser, oversleep",
        "level": 24
    },
    {
        "character": "不燃ゴミ",
        "kana": "ふねんごみ, ふねんゴミ",
        "meaning": "nonburnable garbage, unburnable garbage, nonburnable trash, unburnable trash",
        "level": 24
    },
    {
        "character": "品質",
        "kana": "ひんしつ",
        "meaning": "material quality, item quality, product quality, quality",
        "level": 24
    },
    {
        "character": "腕時計",
        "kana": "うでどけい",
        "meaning": "wristwatch, watch",
        "level": 24
    },
    {
        "character": "株",
        "kana": "かぶ",
        "meaning": "stock, share",
        "level": 24
    },
    {
        "character": "負担",
        "kana": "ふたん",
        "meaning": "burden, responsibility",
        "level": 24
    },
    {
        "character": "子供",
        "kana": "こども",
        "meaning": "child, kid, children, kids",
        "level": 24
    },
    {
        "character": "記述",
        "kana": "きじゅつ",
        "meaning": "description, account",
        "level": 24
    },
    {
        "character": "輸出",
        "kana": "ゆしゅつ",
        "meaning": "export",
        "level": 24
    },
    {
        "character": "良質",
        "kana": "りょうしつ",
        "meaning": "good quality, high quality, superior quality",
        "level": 24
    },
    {
        "character": "多額",
        "kana": "たがく",
        "meaning": "large amount, large sum",
        "level": 24
    },
    {
        "character": "警視庁",
        "kana": "けいしちょう",
        "meaning": "metropolitan police department, metro police department",
        "level": 24
    },
    {
        "character": "記載",
        "kana": "きさい",
        "meaning": "record, report",
        "level": 24
    },
    {
        "character": "応援団",
        "kana": "おうえんだん",
        "meaning": "rooting section, cheerleaders, cheering section",
        "level": 24
    },
    {
        "character": "販売",
        "kana": "はんばい",
        "meaning": "sales, selling, marketing",
        "level": 24
    },
    {
        "character": "株式",
        "kana": "かぶしき",
        "meaning": "stock company, stock",
        "level": 24
    },
    {
        "character": "国境",
        "kana": "こっきょう",
        "meaning": "national border",
        "level": 24
    },
    {
        "character": "武士",
        "kana": "ぶし",
        "meaning": "samurai",
        "level": 24
    },
    {
        "character": "営業中",
        "kana": "えいぎょうちゅう",
        "meaning": "open for business",
        "level": 24
    },
    {
        "character": "営業する",
        "kana": "えいぎょうする",
        "meaning": "to run a business, to manage a business",
        "level": 24
    },
    {
        "character": "寝坊する",
        "kana": "ねぼうする",
        "meaning": "to oversleep",
        "level": 24
    },
    {
        "character": "型",
        "kana": "かた",
        "meaning": "model, type",
        "level": 24
    },
    {
        "character": "時差",
        "kana": "じさ",
        "meaning": "time difference",
        "level": 24
    },
    {
        "character": "都庁",
        "kana": "とちょう",
        "meaning": "metropolitan government, metro government",
        "level": 24
    },
    {
        "character": "一層",
        "kana": "いっそう",
        "meaning": "much more, all the more",
        "level": 24
    },
    {
        "character": "自動販売機",
        "kana": "じどうはんばいき",
        "meaning": "vending machine",
        "level": 24
    },
    {
        "character": "担ぐ",
        "kana": "かつぐ",
        "meaning": "to carry",
        "level": 24
    },
    {
        "character": "武器",
        "kana": "ぶき",
        "meaning": "weapon",
        "level": 24
    },
    {
        "character": "狭い",
        "kana": "せまい",
        "meaning": "narrow",
        "level": 24
    },
    {
        "character": "祝う",
        "kana": "いわう",
        "meaning": "to celebrate",
        "level": 24
    },
    {
        "character": "祝日",
        "kana": "しゅくじつ",
        "meaning": "holiday",
        "level": 24
    },
    {
        "character": "対策",
        "kana": "たいさく",
        "meaning": "counter plan, counter measure",
        "level": 24
    },
    {
        "character": "管理",
        "kana": "かんり",
        "meaning": "management, administration",
        "level": 24
    },
    {
        "character": "アメリカ製",
        "kana": "あめりかせい, アメリカせい",
        "meaning": "made in america",
        "level": 24
    },
    {
        "character": "規準",
        "kana": "きじゅん",
        "meaning": "standard, criterion",
        "level": 24
    },
    {
        "character": "触角",
        "kana": "しょっかく",
        "meaning": "antenna",
        "level": 24
    },
    {
        "character": "誕生日",
        "kana": "たんじょうび",
        "meaning": "birthday",
        "level": 24
    },
    {
        "character": "対象",
        "kana": "たいしょう",
        "meaning": "target, subject",
        "level": 24
    },
    {
        "character": "現象",
        "kana": "げんしょう",
        "meaning": "phenomenon",
        "level": 24
    },
    {
        "character": "限定",
        "kana": "げんてい",
        "meaning": "limit",
        "level": 24
    },
    {
        "character": "載る",
        "kana": "のる",
        "meaning": "to be published, to be reported, to be printed",
        "level": 24
    },
    {
        "character": "輸血",
        "kana": "ゆけつ",
        "meaning": "blood transfusion",
        "level": 24
    },
    {
        "character": "上述",
        "kana": "じょうじゅつ",
        "meaning": "above mentioned, the above mentioned",
        "level": 24
    },
    {
        "character": "述べる",
        "kana": "のべる",
        "meaning": "to mention, to state, to explain",
        "level": 24
    },
    {
        "character": "違い",
        "kana": "ちがい",
        "meaning": "difference",
        "level": 24
    },
    {
        "character": "半額",
        "kana": "はんがく",
        "meaning": "half price",
        "level": 24
    },
    {
        "character": "定額",
        "kana": "ていがく",
        "meaning": "fixed amount, fixed sum, flat rate, ration",
        "level": 24
    },
    {
        "character": "先輩",
        "kana": "せんぱい",
        "meaning": "senior, older graduate, superior",
        "level": 25
    },
    {
        "character": "準備する",
        "kana": "じゅんびする",
        "meaning": "to prepare",
        "level": 25
    },
    {
        "character": "景観",
        "kana": "けいかん",
        "meaning": "spectacular view, great view",
        "level": 25
    },
    {
        "character": "模型",
        "kana": "もけい",
        "meaning": "plastic model, model, dummy, scale model",
        "level": 25
    },
    {
        "character": "効率",
        "kana": "こうりつ",
        "meaning": "efficiency",
        "level": 25
    },
    {
        "character": "習慣",
        "kana": "しゅうかん",
        "meaning": "custom, habit",
        "level": 25
    },
    {
        "character": "満月",
        "kana": "まんげつ",
        "meaning": "full moon",
        "level": 25
    },
    {
        "character": "上巻",
        "kana": "じょうかん",
        "meaning": "first volume",
        "level": 25
    },
    {
        "character": "絞殺",
        "kana": "こうさつ",
        "meaning": "death by strangling, strangled to death, strangling",
        "level": 25
    },
    {
        "character": "前景",
        "kana": "ぜんけい",
        "meaning": "foreground",
        "level": 25
    },
    {
        "character": "慣れる",
        "kana": "なれる",
        "meaning": "to become accustomed to, to get used to",
        "level": 25
    },
    {
        "character": "効果",
        "kana": "こうか",
        "meaning": "an effect, effect",
        "level": 25
    },
    {
        "character": "賞与金",
        "kana": "しょうよきん",
        "meaning": "bonus",
        "level": 25
    },
    {
        "character": "候補者",
        "kana": "こうほしゃ",
        "meaning": "candidate",
        "level": 25
    },
    {
        "character": "豊か",
        "kana": "ゆたか",
        "meaning": "plentiful, abundant",
        "level": 25
    },
    {
        "character": "新鮮",
        "kana": "しんせん",
        "meaning": "fresh",
        "level": 25
    },
    {
        "character": "鮮魚",
        "kana": "せんぎょ",
        "meaning": "fresh fish",
        "level": 25
    },
    {
        "character": "金属",
        "kana": "きんぞく",
        "meaning": "metal",
        "level": 25
    },
    {
        "character": "肥満",
        "kana": "ひまん",
        "meaning": "obesity",
        "level": 25
    },
    {
        "character": "影",
        "kana": "かげ",
        "meaning": "shadow",
        "level": 25
    },
    {
        "character": "一巻",
        "kana": "いっかん",
        "meaning": "one volume, first volume",
        "level": 25
    },
    {
        "character": "豊満",
        "kana": "ほうまん",
        "meaning": "plump, full figured",
        "level": 25
    },
    {
        "character": "不況",
        "kana": "ふきょう",
        "meaning": "recession",
        "level": 25
    },
    {
        "character": "隠居",
        "kana": "いんきょ",
        "meaning": "retirement",
        "level": 25
    },
    {
        "character": "時候",
        "kana": "じこう",
        "meaning": "season, time of year",
        "level": 25
    },
    {
        "character": "革ジャン",
        "kana": "かわじゃん, かわジャン",
        "meaning": "leather jacket",
        "level": 25
    },
    {
        "character": "長崎県",
        "kana": "ながさきけん",
        "meaning": "nagasaki prefecture",
        "level": 25
    },
    {
        "character": "満員",
        "kana": "まんいん",
        "meaning": "sold out, full house, no vacancy",
        "level": 25
    },
    {
        "character": "天候",
        "kana": "てんこう",
        "meaning": "the weather, weather",
        "level": 25
    },
    {
        "character": "居る",
        "kana": "いる",
        "meaning": "to be alive, to exist",
        "level": 25
    },
    {
        "character": "呼ばれる",
        "kana": "よばれる",
        "meaning": "to be called",
        "level": 25
    },
    {
        "character": "効く",
        "kana": "きく",
        "meaning": "to be effective",
        "level": 25
    },
    {
        "character": "属する",
        "kana": "ぞくする",
        "meaning": "to belong to, to fall under",
        "level": 25
    },
    {
        "character": "渡る",
        "kana": "わたる",
        "meaning": "to cross, to cross over, to go across",
        "level": 25
    },
    {
        "character": "抜く",
        "kana": "ぬく",
        "meaning": "to extract, to pluck",
        "level": 25
    },
    {
        "character": "隠す",
        "kana": "かくす",
        "meaning": "to hide",
        "level": 25
    },
    {
        "character": "替える",
        "kana": "かえる",
        "meaning": "to replace, to substitute, to switch",
        "level": 25
    },
    {
        "character": "現す",
        "kana": "あらわす",
        "meaning": "to show",
        "level": 25
    },
    {
        "character": "女優",
        "kana": "じょゆう",
        "meaning": "actress",
        "level": 25
    },
    {
        "character": "絞る",
        "kana": "しぼる",
        "meaning": "to strangle, to wring out, to squeeze",
        "level": 25
    },
    {
        "character": "光景",
        "kana": "こうけい",
        "meaning": "spectacle, sight",
        "level": 25
    },
    {
        "character": "投票する",
        "kana": "とうひょうする",
        "meaning": "to vote",
        "level": 25
    },
    {
        "character": "後輩",
        "kana": "こうはい",
        "meaning": "junior, one's junior",
        "level": 25
    },
    {
        "character": "模様",
        "kana": "もよう",
        "meaning": "pattern",
        "level": 25
    },
    {
        "character": "効力",
        "kana": "こうりょく",
        "meaning": "effectiveness, in effect",
        "level": 25
    },
    {
        "character": "訴える",
        "kana": "うったえる",
        "meaning": "to sue",
        "level": 25
    },
    {
        "character": "規模",
        "kana": "きぼ",
        "meaning": "scale, scope",
        "level": 25
    },
    {
        "character": "含む",
        "kana": "ふくむ",
        "meaning": "to include",
        "level": 25
    },
    {
        "character": "割引",
        "kana": "わりびき",
        "meaning": "discount",
        "level": 25
    },
    {
        "character": "含意",
        "kana": "がんい",
        "meaning": "implication, hint at, suggestion",
        "level": 25
    },
    {
        "character": "構成",
        "kana": "こうせい",
        "meaning": "organization, configuration",
        "level": 25
    },
    {
        "character": "景色",
        "kana": "けしき",
        "meaning": "scenery, scene, landscape",
        "level": 25
    },
    {
        "character": "二巻",
        "kana": "にかん",
        "meaning": "second volume, two volumes",
        "level": 25
    },
    {
        "character": "満足",
        "kana": "まんぞく",
        "meaning": "satisfied, totally satisfied, satisfaction",
        "level": 25
    },
    {
        "character": "下巻",
        "kana": "げかん",
        "meaning": "last volume, final volume",
        "level": 25
    },
    {
        "character": "割れる",
        "kana": "われる",
        "meaning": "to be divided, to be separated, to break",
        "level": 25
    },
    {
        "character": "結構",
        "kana": "けっこう",
        "meaning": "fine, fairly, alright",
        "level": 25
    },
    {
        "character": "気候",
        "kana": "きこう",
        "meaning": "climate",
        "level": 25
    },
    {
        "character": "全景",
        "kana": "ぜんけい",
        "meaning": "complete view, full view",
        "level": 25
    },
    {
        "character": "満点",
        "kana": "まんてん",
        "meaning": "perfect score",
        "level": 25
    },
    {
        "character": "掛ける",
        "kana": "かける",
        "meaning": "to hang",
        "level": 25
    },
    {
        "character": "革命者",
        "kana": "かくめいしゃ",
        "meaning": "revolutionary, a revolutionary",
        "level": 25
    },
    {
        "character": "律動的",
        "kana": "りつどうてき",
        "meaning": "rhythmical, rhythmic",
        "level": 25
    },
    {
        "character": "渡す",
        "kana": "わたす",
        "meaning": "to hand over",
        "level": 25
    },
    {
        "character": "年輩",
        "kana": "ねんぱい",
        "meaning": "elderly person, old person, elderly",
        "level": 25
    },
    {
        "character": "与える",
        "kana": "あたえる",
        "meaning": "to give, to grant",
        "level": 25
    },
    {
        "character": "吸収する",
        "kana": "きゅうしゅうする",
        "meaning": "to absorb",
        "level": 25
    },
    {
        "character": "所属",
        "kana": "しょぞく",
        "meaning": "attached to, belong to",
        "level": 25
    },
    {
        "character": "巻く",
        "kana": "まく",
        "meaning": "to roll, to roll up",
        "level": 25
    },
    {
        "character": "頑張る",
        "kana": "がんばる",
        "meaning": "to persevere",
        "level": 25
    },
    {
        "character": "捕まる",
        "kana": "つかまる",
        "meaning": "to be caught, to get caught",
        "level": 25
    },
    {
        "character": "捜す",
        "kana": "さがす",
        "meaning": "to search",
        "level": 25
    },
    {
        "character": "捜査",
        "kana": "そうさ",
        "meaning": "criminal investigation",
        "level": 25
    },
    {
        "character": "景況",
        "kana": "けいきょう",
        "meaning": "condition, the situation",
        "level": 25
    },
    {
        "character": "替わる",
        "kana": "かわる",
        "meaning": "to be replaced, to be substituted, to be switched",
        "level": 25
    },
    {
        "character": "補う",
        "kana": "おぎなう",
        "meaning": "to supplement",
        "level": 25
    },
    {
        "character": "構う",
        "kana": "かまう",
        "meaning": "to care about, to mind",
        "level": 25
    },
    {
        "character": "票",
        "kana": "ひょう",
        "meaning": "ballot, a vote, vote",
        "level": 25
    },
    {
        "character": "響く",
        "kana": "ひびく",
        "meaning": "to echo, to reverberate, to resound",
        "level": 25
    },
    {
        "character": "肥料",
        "kana": "ひりょう",
        "meaning": "manure, fertilizer",
        "level": 25
    },
    {
        "character": "訴訟",
        "kana": "そしょう",
        "meaning": "lawsuit, litigation",
        "level": 25
    },
    {
        "character": "告訴",
        "kana": "こくそ",
        "meaning": "accusation, charge",
        "level": 25
    },
    {
        "character": "逮捕",
        "kana": "たいほ",
        "meaning": "arrest, capture",
        "level": 25
    },
    {
        "character": "影響",
        "kana": "えいきょう",
        "meaning": "influence",
        "level": 25
    },
    {
        "character": "鮮やか",
        "kana": "あざやか",
        "meaning": "vivid, splendid",
        "level": 25
    },
    {
        "character": "管理人",
        "kana": "かんりにん",
        "meaning": "manager",
        "level": 26
    },
    {
        "character": "授業",
        "kana": "じゅぎょう",
        "meaning": "lesson, class, teaching",
        "level": 26
    },
    {
        "character": "再来年",
        "kana": "さらいねん",
        "meaning": "year after next",
        "level": 26
    },
    {
        "character": "往復",
        "kana": "おうふく",
        "meaning": "round trip",
        "level": 26
    },
    {
        "character": "比較",
        "kana": "ひかく",
        "meaning": "comparison",
        "level": 26
    },
    {
        "character": "汗",
        "kana": "あせ",
        "meaning": "sweat",
        "level": 26
    },
    {
        "character": "汗臭い",
        "kana": "あせくさい",
        "meaning": "sweaty smell, smell sweaty, sweaty stench",
        "level": 26
    },
    {
        "character": "事故",
        "kana": "じこ",
        "meaning": "accident",
        "level": 26
    },
    {
        "character": "怪獣",
        "kana": "かいじゅう",
        "meaning": "giant monster, kaiju",
        "level": 26
    },
    {
        "character": "突然",
        "kana": "とつぜん",
        "meaning": "suddenly",
        "level": 26
    },
    {
        "character": "河",
        "kana": "かわ",
        "meaning": "river, suffix for rivers, river suffix",
        "level": 26
    },
    {
        "character": "豚肉",
        "kana": "ぶたにく",
        "meaning": "pork, pig meat",
        "level": 26
    },
    {
        "character": "故障",
        "kana": "こしょう",
        "meaning": "malfunction, out of order",
        "level": 26
    },
    {
        "character": "針医",
        "kana": "はりい",
        "meaning": "acupuncturist",
        "level": 26
    },
    {
        "character": "保障",
        "kana": "ほしょう",
        "meaning": "guarantee, warranty, security, safeguard",
        "level": 26
    },
    {
        "character": "気違い",
        "kana": "きちがい",
        "meaning": "crazy",
        "level": 26
    },
    {
        "character": "鉛",
        "kana": "なまり",
        "meaning": "lead",
        "level": 26
    },
    {
        "character": "鉛管",
        "kana": "えんかん",
        "meaning": "lead pipe",
        "level": 26
    },
    {
        "character": "間違い",
        "kana": "まちがい",
        "meaning": "a mistake, mistake",
        "level": 26
    },
    {
        "character": "酒造",
        "kana": "しゅぞう",
        "meaning": "brewing, distilling",
        "level": 26
    },
    {
        "character": "運河",
        "kana": "うんが",
        "meaning": "canal",
        "level": 26
    },
    {
        "character": "獣類",
        "kana": "じゅうるい",
        "meaning": "beasts, animals",
        "level": 26
    },
    {
        "character": "大違い",
        "kana": "おおちがい",
        "meaning": "big difference, major mistake",
        "level": 26
    },
    {
        "character": "名刺",
        "kana": "めいし",
        "meaning": "business card",
        "level": 26
    },
    {
        "character": "特徴",
        "kana": "とくちょう",
        "meaning": "characteristic, distinctive feature",
        "level": 26
    },
    {
        "character": "人造",
        "kana": "じんぞう",
        "meaning": "artificial, synthetic, imitation, man made",
        "level": 26
    },
    {
        "character": "独り",
        "kana": "ひとり",
        "meaning": "alone",
        "level": 26
    },
    {
        "character": "獣",
        "kana": "けもの",
        "meaning": "beast, a beast",
        "level": 26
    },
    {
        "character": "お菓子",
        "kana": "おかし",
        "meaning": "candy, pastry, sweets",
        "level": 26
    },
    {
        "character": "怪談",
        "kana": "かいだん",
        "meaning": "ghost story",
        "level": 26
    },
    {
        "character": "再開",
        "kana": "さいかい",
        "meaning": "reopening",
        "level": 26
    },
    {
        "character": "障子",
        "kana": "しょうじ",
        "meaning": "japanese sliding door, sliding door",
        "level": 26
    },
    {
        "character": "故意",
        "kana": "こい",
        "meaning": "intention, premeditation, purpose, intent",
        "level": 26
    },
    {
        "character": "燃え付く",
        "kana": "もえつく",
        "meaning": "to catch fire, to catch on fire",
        "level": 26
    },
    {
        "character": "創造",
        "kana": "そうぞう",
        "meaning": "creation",
        "level": 26
    },
    {
        "character": "激励",
        "kana": "げきれい",
        "meaning": "encouragement",
        "level": 26
    },
    {
        "character": "輸入",
        "kana": "ゆにゅう",
        "meaning": "import",
        "level": 26
    },
    {
        "character": "造園",
        "kana": "ぞうえん",
        "meaning": "landscape gardening",
        "level": 26
    },
    {
        "character": "読み違い",
        "kana": "よみちがい",
        "meaning": "misreading, misread",
        "level": 26
    },
    {
        "character": "印",
        "kana": "しるし",
        "meaning": "seal, logo, symbol",
        "level": 26
    },
    {
        "character": "構造",
        "kana": "こうぞう",
        "meaning": "structure",
        "level": 26
    },
    {
        "character": "激しい",
        "kana": "はげしい",
        "meaning": "fierce, violent, intense",
        "level": 26
    },
    {
        "character": "製造",
        "kana": "せいぞう",
        "meaning": "manufacturing",
        "level": 26
    },
    {
        "character": "再来月",
        "kana": "さらいげつ",
        "meaning": "month after next, the month after next",
        "level": 26
    },
    {
        "character": "届ける",
        "kana": "とどける",
        "meaning": "to deliver",
        "level": 26
    },
    {
        "character": "燃える",
        "kana": "もえる",
        "meaning": "to get burned, to be burned, to burn",
        "level": 26
    },
    {
        "character": "差し上げる",
        "kana": "さしあげる",
        "meaning": "to give, to raise up",
        "level": 26
    },
    {
        "character": "郵便",
        "kana": "ゆうびん",
        "meaning": "mail",
        "level": 26
    },
    {
        "character": "人違い",
        "kana": "ひとちがい",
        "meaning": "mistaken identity",
        "level": 26
    },
    {
        "character": "独占",
        "kana": "どくせん",
        "meaning": "monopoly",
        "level": 26
    },
    {
        "character": "鉛筆",
        "kana": "えんぴつ",
        "meaning": "pencil",
        "level": 26
    },
    {
        "character": "担う",
        "kana": "になう",
        "meaning": "to carry, to assume responsibility, to take on a burden, to take responsibility",
        "level": 26
    },
    {
        "character": "怪事件",
        "kana": "かいじけん",
        "meaning": "strange mystery, mystery case",
        "level": 26
    },
    {
        "character": "回復",
        "kana": "かいふく",
        "meaning": "recovery",
        "level": 26
    },
    {
        "character": "改造",
        "kana": "かいぞう",
        "meaning": "remodeling, renewal",
        "level": 26
    },
    {
        "character": "貯金",
        "kana": "ちょきん",
        "meaning": "savings",
        "level": 26
    },
    {
        "character": "無我",
        "kana": "むが",
        "meaning": "selflessness",
        "level": 26
    },
    {
        "character": "独学",
        "kana": "どくがく",
        "meaning": "self study",
        "level": 26
    },
    {
        "character": "象徴",
        "kana": "しょうちょう",
        "meaning": "symbol",
        "level": 26
    },
    {
        "character": "教授",
        "kana": "きょうじゅ",
        "meaning": "teaching, professor, pedagogy",
        "level": 26
    },
    {
        "character": "障る",
        "kana": "さわる",
        "meaning": "to hinder",
        "level": 26
    },
    {
        "character": "従う",
        "kana": "したがう",
        "meaning": "to obey",
        "level": 26
    },
    {
        "character": "占める",
        "kana": "しめる",
        "meaning": "to occupy",
        "level": 26
    },
    {
        "character": "刺す",
        "kana": "さす",
        "meaning": "to stab, to pierce, to poke, to sting, to stick, to shank",
        "level": 26
    },
    {
        "character": "独特",
        "kana": "どくとく",
        "meaning": "unique",
        "level": 26
    },
    {
        "character": "振動",
        "kana": "しんどう",
        "meaning": "vibration, oscillation",
        "level": 26
    },
    {
        "character": "野獣",
        "kana": "やじゅう",
        "meaning": "wild beast, wild animal",
        "level": 26
    },
    {
        "character": "独身",
        "kana": "どくしん",
        "meaning": "single, unmarried",
        "level": 26
    },
    {
        "character": "復習",
        "kana": "ふくしゅう",
        "meaning": "review",
        "level": 26
    },
    {
        "character": "独創",
        "kana": "どくそう",
        "meaning": "originality, creativity",
        "level": 26
    },
    {
        "character": "鉛毒",
        "kana": "えんどく",
        "meaning": "lead poisoning",
        "level": 26
    },
    {
        "character": "従来",
        "kana": "じゅうらい",
        "meaning": "up to now, so far",
        "level": 26
    },
    {
        "character": "河豚",
        "kana": "ふぐ, ふく",
        "meaning": "fugu, blowfish, pufferfish",
        "level": 26
    },
    {
        "character": "励ます",
        "kana": "はげます",
        "meaning": "to encourage someone, to cheer up someone, to encourage",
        "level": 26
    },
    {
        "character": "株式会社",
        "kana": "かぶしきがいしゃ, かぶしきかいしゃ",
        "meaning": "corporation",
        "level": 26
    },
    {
        "character": "獣医",
        "kana": "じゅうい",
        "meaning": "veterinarian, vet",
        "level": 26
    },
    {
        "character": "造る",
        "kana": "つくる",
        "meaning": "to mass produce, to produce, to manufacture, to create, to make, to brew, to prepare",
        "level": 26
    },
    {
        "character": "再建",
        "kana": "さいけん",
        "meaning": "rebuilding, reconstruction",
        "level": 26
    },
    {
        "character": "従業",
        "kana": "じゅうぎょう",
        "meaning": "employment",
        "level": 26
    },
    {
        "character": "秒針",
        "kana": "びょうしん",
        "meaning": "seconds hand",
        "level": 26
    },
    {
        "character": "豚",
        "kana": "ぶた",
        "meaning": "pig",
        "level": 26
    },
    {
        "character": "再び",
        "kana": "ふたたび",
        "meaning": "again, once again",
        "level": 26
    },
    {
        "character": "討論",
        "kana": "とうろん",
        "meaning": "debate, discussion",
        "level": 26
    },
    {
        "character": "障害",
        "kana": "しょうがい",
        "meaning": "disability, handicap",
        "level": 26
    },
    {
        "character": "触れる",
        "kana": "ふれる",
        "meaning": "to feel, to perceive",
        "level": 26
    },
    {
        "character": "突く",
        "kana": "つく",
        "meaning": "to stab, to poke, to jab",
        "level": 26
    },
    {
        "character": "故",
        "kana": "ゆえ",
        "meaning": "circumstances, reason",
        "level": 26
    },
    {
        "character": "限定販売",
        "kana": "げんていはんばい",
        "meaning": "limited edition",
        "level": 26
    },
    {
        "character": "再度",
        "kana": "さいど",
        "meaning": "twice, a second time, again",
        "level": 26
    },
    {
        "character": "再来週",
        "kana": "さらいしゅう",
        "meaning": "week after next",
        "level": 26
    },
    {
        "character": "刺激",
        "kana": "しげき",
        "meaning": "stimulation",
        "level": 26
    },
    {
        "character": "創立",
        "kana": "そうりつ",
        "meaning": "establishment, founding",
        "level": 26
    },
    {
        "character": "第一印象",
        "kana": "だいいちいんしょう",
        "meaning": "first impression",
        "level": 26
    },
    {
        "character": "差別する",
        "kana": "さべつする",
        "meaning": "to discriminate",
        "level": 26
    },
    {
        "character": "占い",
        "kana": "うらない",
        "meaning": "fortune telling",
        "level": 26
    },
    {
        "character": "人差し指",
        "kana": "ひとさしゆび",
        "meaning": "index finger, pointer finger",
        "level": 26
    },
    {
        "character": "怪しい",
        "kana": "あやしい",
        "meaning": "suspicious, shady",
        "level": 26
    },
    {
        "character": "我",
        "kana": "われ",
        "meaning": "i, me",
        "level": 26
    },
    {
        "character": "振る",
        "kana": "ふる",
        "meaning": "to shake, to jolt",
        "level": 26
    },
    {
        "character": "不振",
        "kana": "ふしん",
        "meaning": "dullness, slump, stagnation",
        "level": 26
    },
    {
        "character": "直接",
        "kana": "ちょくせつ",
        "meaning": "direct",
        "level": 26
    },
    {
        "character": "間接",
        "kana": "かんせつ",
        "meaning": "indirect",
        "level": 26
    },
    {
        "character": "面接",
        "kana": "めんせつ",
        "meaning": "interview",
        "level": 26
    },
    {
        "character": "株式市場",
        "kana": "かぶしきしじょう",
        "meaning": "stock market",
        "level": 26
    },
    {
        "character": "河童",
        "kana": "かっぱ",
        "meaning": "kappa",
        "level": 26
    },
    {
        "character": "氷河",
        "kana": "ひょうが",
        "meaning": "glacier",
        "level": 26
    },
    {
        "character": "気象庁",
        "kana": "きしょうちょう",
        "meaning": "weather agency, meteorological agency",
        "level": 26
    },
    {
        "character": "自販機",
        "kana": "じはんき",
        "meaning": "vending machine",
        "level": 26
    },
    {
        "character": "独立",
        "kana": "どくりつ",
        "meaning": "independence",
        "level": 26
    },
    {
        "character": "筆",
        "kana": "ふで",
        "meaning": "writing brush, brush",
        "level": 26
    },
    {
        "character": "検討する",
        "kana": "けんとうする",
        "meaning": "to examine, to study, to look into",
        "level": 26
    },
    {
        "character": "お誕生日おめでとう",
        "kana": "おたんじょうびおめでとう",
        "meaning": "happy birthday",
        "level": 26
    },
    {
        "character": "貯える",
        "kana": "たくわえる",
        "meaning": "to save, to put something aside",
        "level": 26
    },
    {
        "character": "載せる",
        "kana": "のせる",
        "meaning": "to publish, to place on top",
        "level": 26
    },
    {
        "character": "輸出する",
        "kana": "ゆしゅつする",
        "meaning": "to export",
        "level": 26
    },
    {
        "character": "過ごす",
        "kana": "すごす",
        "meaning": "to spend time on",
        "level": 26
    },
    {
        "character": "針金",
        "kana": "はりがね",
        "meaning": "wire",
        "level": 26
    },
    {
        "character": "胃痛",
        "kana": "いつう",
        "meaning": "stomachache",
        "level": 27
    },
    {
        "character": "切腹",
        "kana": "せっぷく",
        "meaning": "seppuku, ritual suicide",
        "level": 27
    },
    {
        "character": "巨人",
        "kana": "きょじん",
        "meaning": "a giant, giant",
        "level": 27
    },
    {
        "character": "訪問",
        "kana": "ほうもん",
        "meaning": "a visit, visit",
        "level": 27
    },
    {
        "character": "迫る",
        "kana": "せまる",
        "meaning": "to urge, to coerce, to draw near",
        "level": 27
    },
    {
        "character": "迷信",
        "kana": "めいしん",
        "meaning": "superstition",
        "level": 27
    },
    {
        "character": "退院する",
        "kana": "たいいんする",
        "meaning": "to be discharged, to leave the hospital",
        "level": 27
    },
    {
        "character": "間抜け",
        "kana": "まぬけ",
        "meaning": "idiot",
        "level": 27
    },
    {
        "character": "途中",
        "kana": "とちゅう",
        "meaning": "on the way, en route",
        "level": 27
    },
    {
        "character": "野郎",
        "kana": "やろう",
        "meaning": "bastard, guy, fellow",
        "level": 27
    },
    {
        "character": "結構です",
        "kana": "けっこうです",
        "meaning": "no thank you, no thanks",
        "level": 27
    },
    {
        "character": "眠い",
        "kana": "ねむい",
        "meaning": "sleepy",
        "level": 27
    },
    {
        "character": "睡眠",
        "kana": "すいみん",
        "meaning": "sleep",
        "level": 27
    },
    {
        "character": "靴",
        "kana": "くつ",
        "meaning": "shoes",
        "level": 27
    },
    {
        "character": "早退",
        "kana": "そうたい",
        "meaning": "leave early",
        "level": 27
    },
    {
        "character": "昇給",
        "kana": "しょうきゅう",
        "meaning": "pay raise, salary raise, raise",
        "level": 27
    },
    {
        "character": "健康",
        "kana": "けんこう",
        "meaning": "health",
        "level": 27
    },
    {
        "character": "効果的",
        "kana": "こうかてき",
        "meaning": "effective",
        "level": 27
    },
    {
        "character": "退屈",
        "kana": "たいくつ",
        "meaning": "boring, boredom, tedium",
        "level": 27
    },
    {
        "character": "悪影響",
        "kana": "あくえいきょう",
        "meaning": "bad influence, evil influence",
        "level": 27
    },
    {
        "character": "腰抜け",
        "kana": "こしぬけ",
        "meaning": "coward",
        "level": 27
    },
    {
        "character": "居酒屋",
        "kana": "いざかや",
        "meaning": "izakaya, japanese style bar",
        "level": 27
    },
    {
        "character": "巻きずし",
        "kana": "まきずし",
        "meaning": "rolled sushi, sushi roll, makizushi",
        "level": 27
    },
    {
        "character": "小規模",
        "kana": "しょうきぼ",
        "meaning": "small scale",
        "level": 27
    },
    {
        "character": "南極",
        "kana": "なんきょく",
        "meaning": "antarctica",
        "level": 27
    },
    {
        "character": "悩み",
        "kana": "なやみ",
        "meaning": "a worry, worry, a trouble, trouble",
        "level": 27
    },
    {
        "character": "階段",
        "kana": "かいだん",
        "meaning": "stairs, stairway",
        "level": 27
    },
    {
        "character": "腹",
        "kana": "はら",
        "meaning": "belly, abdomen, stomach",
        "level": 27
    },
    {
        "character": "腹切り",
        "kana": "はらきり",
        "meaning": "harakiri, ritual suicide",
        "level": 27
    },
    {
        "character": "頭痛",
        "kana": "ずつう",
        "meaning": "headache",
        "level": 27
    },
    {
        "character": "迷路",
        "kana": "めいろ",
        "meaning": "maze",
        "level": 27
    },
    {
        "character": "圧迫",
        "kana": "あっぱく",
        "meaning": "pressure",
        "level": 27
    },
    {
        "character": "靴下",
        "kana": "くつした",
        "meaning": "socks",
        "level": 27
    },
    {
        "character": "暇",
        "kana": "ひま",
        "meaning": "spare time, free time",
        "level": 27
    },
    {
        "character": "長靴",
        "kana": "ながぐつ",
        "meaning": "boots",
        "level": 27
    },
    {
        "character": "〜症",
        "kana": "しょう",
        "meaning": "disease, sickness",
        "level": 27
    },
    {
        "character": "端",
        "kana": "はし",
        "meaning": "edge",
        "level": 27
    },
    {
        "character": "就業",
        "kana": "しゅうぎょう",
        "meaning": "employment",
        "level": 27
    },
    {
        "character": "極端",
        "kana": "きょくたん",
        "meaning": "extreme",
        "level": 27
    },
    {
        "character": "段々",
        "kana": "だんだん",
        "meaning": "gradually, steps",
        "level": 27
    },
    {
        "character": "巨大",
        "kana": "きょだい",
        "meaning": "huge, gigantic, enormous",
        "level": 27
    },
    {
        "character": "切迫",
        "kana": "せっぱく",
        "meaning": "urgency, pressure, draw near, be imminent",
        "level": 27
    },
    {
        "character": "迷子",
        "kana": "まいご",
        "meaning": "lost child, lost kid",
        "level": 27
    },
    {
        "character": "極楽",
        "kana": "ごくらく",
        "meaning": "paradise",
        "level": 27
    },
    {
        "character": "供給",
        "kana": "きょうきゅう",
        "meaning": "supply",
        "level": 27
    },
    {
        "character": "症状",
        "kana": "しょうじょう",
        "meaning": "symptom",
        "level": 27
    },
    {
        "character": "就く",
        "kana": "つく",
        "meaning": "to settle in, to take a seat, to take a position",
        "level": 27
    },
    {
        "character": "迫害",
        "kana": "はくがい",
        "meaning": "persecution",
        "level": 27
    },
    {
        "character": "段階",
        "kana": "だんかい",
        "meaning": "stage, phase",
        "level": 27
    },
    {
        "character": "誘惑",
        "kana": "ゆうわく",
        "meaning": "temptation",
        "level": 27
    },
    {
        "character": "先端",
        "kana": "せんたん",
        "meaning": "tip, the latest, advanced technology",
        "level": 27
    },
    {
        "character": "逮捕する",
        "kana": "たいほする",
        "meaning": "to arrest, to capture",
        "level": 27
    },
    {
        "character": "締結する",
        "kana": "ていけつする",
        "meaning": "to conclude, to enter, to execute",
        "level": 27
    },
    {
        "character": "締める",
        "kana": "しめる",
        "meaning": "to tighten, to tie",
        "level": 27
    },
    {
        "character": "退く",
        "kana": "しりぞく",
        "meaning": "to withdraw from, to withdraw, to retreat",
        "level": 27
    },
    {
        "character": "貸す",
        "kana": "かす",
        "meaning": "to lend, to rent",
        "level": 27
    },
    {
        "character": "隠居する",
        "kana": "いんきょする",
        "meaning": "to retire",
        "level": 27
    },
    {
        "character": "織る",
        "kana": "おる",
        "meaning": "to weave, to knit",
        "level": 27
    },
    {
        "character": "訪ねる",
        "kana": "たずねる",
        "meaning": "to visit",
        "level": 27
    },
    {
        "character": "招待する",
        "kana": "しょうたいする",
        "meaning": "to invite, to summon",
        "level": 27
    },
    {
        "character": "誘う",
        "kana": "さそう",
        "meaning": "to invite, to summon",
        "level": 27
    },
    {
        "character": "抜き出す",
        "kana": "ぬきだす",
        "meaning": "to select, to extract",
        "level": 27
    },
    {
        "character": "迷う",
        "kana": "まよう",
        "meaning": "to go astray, to get lost, to be perplexed, to waver, to hesitate",
        "level": 27
    },
    {
        "character": "給料",
        "kana": "きゅうりょう",
        "meaning": "wages, pay, salary, net pay, base wages, base salary",
        "level": 27
    },
    {
        "character": "春巻き",
        "kana": "はるまき",
        "meaning": "spring rolls",
        "level": 27
    },
    {
        "character": "頑張れ",
        "kana": "がんばれ",
        "meaning": "do your best, good luck",
        "level": 27
    },
    {
        "character": "組織",
        "kana": "そしき",
        "meaning": "organization",
        "level": 27
    },
    {
        "character": "靴屋",
        "kana": "くつや",
        "meaning": "shoe store, shoe shop",
        "level": 27
    },
    {
        "character": "手掛かり",
        "kana": "てがかり",
        "meaning": "clue, a clue",
        "level": 27
    },
    {
        "character": "休暇",
        "kana": "きゅうか",
        "meaning": "holiday, time off, day off",
        "level": 27
    },
    {
        "character": "掛かる",
        "kana": "かかる",
        "meaning": "to be hung, to get hung",
        "level": 27
    },
    {
        "character": "腹立つ",
        "kana": "はらだつ",
        "meaning": "to get mad, to get angry",
        "level": 27
    },
    {
        "character": "怒鳴る",
        "kana": "どなる",
        "meaning": "to shout at, to yell at",
        "level": 27
    },
    {
        "character": "健忘症",
        "kana": "けんぼうしょう",
        "meaning": "amnesia, loss of memory",
        "level": 27
    },
    {
        "character": "お腹",
        "kana": "おなか",
        "meaning": "belly, stomach, abdomen",
        "level": 27
    },
    {
        "character": "お構いなく",
        "kana": "おかまいなく",
        "meaning": "don't worry about it, don't worry",
        "level": 27
    },
    {
        "character": "抜ける",
        "kana": "ぬける",
        "meaning": "to be extracted, to get extracted, to be plucked, to get plucked, to come out, to fall out, to be omitted, to leave",
        "level": 27
    },
    {
        "character": "給与",
        "kana": "きゅうよ",
        "meaning": "allowance, wages, pay, salary, gross pay",
        "level": 27
    },
    {
        "character": "貸し切り",
        "kana": "かしきり",
        "meaning": "reserved, reservation",
        "level": 27
    },
    {
        "character": "捕える",
        "kana": "とらえる",
        "meaning": "to grasp an idea, to grasp a concept, to catch the meaning, to sieze, to catch",
        "level": 27
    },
    {
        "character": "悩む",
        "kana": "なやむ",
        "meaning": "to worry, to be troubled",
        "level": 27
    },
    {
        "character": "隠れる",
        "kana": "かくれる",
        "meaning": "to be hidden",
        "level": 27
    },
    {
        "character": "値段",
        "kana": "ねだん",
        "meaning": "price, cost",
        "level": 27
    },
    {
        "character": "就職",
        "kana": "しゅうしょく",
        "meaning": "finding employment, finding a job, getting a job, accepting a job",
        "level": 27
    },
    {
        "character": "怒る",
        "kana": "おこる",
        "meaning": "to get angry, to get mad",
        "level": 27
    },
    {
        "character": "惑う",
        "kana": "まどう",
        "meaning": "to be misguided, to be led astray, to be perplexed, to be puzzled",
        "level": 27
    },
    {
        "character": "迷惑",
        "kana": "めいわく",
        "meaning": "trouble, annoyance, inconvenience, nuisance",
        "level": 27
    },
    {
        "character": "見抜く",
        "kana": "みぬく",
        "meaning": "to see through",
        "level": 27
    },
    {
        "character": "招く",
        "kana": "まねく",
        "meaning": "to beckon, to invite, to summon",
        "level": 27
    },
    {
        "character": "昇る",
        "kana": "のぼる",
        "meaning": "to ascend",
        "level": 27
    },
    {
        "character": "昇進",
        "kana": "しょうしん",
        "meaning": "job promotion, promotion",
        "level": 27
    },
    {
        "character": "両替",
        "kana": "りょうがえ",
        "meaning": "money exchange, make change, currency exchange",
        "level": 27
    },
    {
        "character": "取り替える",
        "kana": "とりかえる",
        "meaning": "to exchange",
        "level": 27
    },
    {
        "character": "着替え",
        "kana": "きがえ",
        "meaning": "change of clothes",
        "level": 27
    },
    {
        "character": "究極",
        "kana": "きゅうきょく",
        "meaning": "ultimate",
        "level": 27
    },
    {
        "character": "極める",
        "kana": "きわめる",
        "meaning": "to carry to extremes, to carry to the extreme, to take to the extreme, to take to an extreme, to carry to an extreme, to take to extremes, to master",
        "level": 27
    },
    {
        "character": "構え",
        "kana": "かまえ",
        "meaning": "stance",
        "level": 27
    },
    {
        "character": "大規模",
        "kana": "だいきぼ",
        "meaning": "large scale",
        "level": 27
    },
    {
        "character": "第一段",
        "kana": "だいいちだん",
        "meaning": "the first step, first step",
        "level": 27
    },
    {
        "character": "濃い",
        "kana": "こい",
        "meaning": "thick, dense, concentrated, deep, strong",
        "level": 27
    },
    {
        "character": "濃度",
        "kana": "のうど",
        "meaning": "density",
        "level": 27
    },
    {
        "character": "不眠症",
        "kana": "ふみんしょう",
        "meaning": "insomnia",
        "level": 27
    },
    {
        "character": "痛い",
        "kana": "いたい",
        "meaning": "painful, ow, it hurts, ouch",
        "level": 27
    },
    {
        "character": "中途半端",
        "kana": "ちゅうとはんぱ",
        "meaning": "half finished, half assed",
        "level": 27
    },
    {
        "character": "減給",
        "kana": "げんきゅう",
        "meaning": "pay cut",
        "level": 27
    },
    {
        "character": "微生物",
        "kana": "びせいぶつ",
        "meaning": "microorganism, microbe",
        "level": 28
    },
    {
        "character": "妙",
        "kana": "みょう",
        "meaning": "odd, unusual, strange",
        "level": 28
    },
    {
        "character": "並",
        "kana": "なみ",
        "meaning": "ordinary, average",
        "level": 28
    },
    {
        "character": "並行",
        "kana": "へいこう",
        "meaning": "parallel",
        "level": 28
    },
    {
        "character": "清い",
        "kana": "きよい",
        "meaning": "pure, clean",
        "level": 28
    },
    {
        "character": "記録",
        "kana": "きろく",
        "meaning": "record",
        "level": 28
    },
    {
        "character": "並ぶ",
        "kana": "ならぶ",
        "meaning": "to be lined up",
        "level": 28
    },
    {
        "character": "研修",
        "kana": "けんしゅう",
        "meaning": "training, in service training, study",
        "level": 28
    },
    {
        "character": "傘立て",
        "kana": "かさたて",
        "meaning": "umbrella stand, umbrella holder",
        "level": 28
    },
    {
        "character": "〜券",
        "kana": "けん",
        "meaning": "ticket",
        "level": 28
    },
    {
        "character": "旅券",
        "kana": "りょけん",
        "meaning": "passport",
        "level": 28
    },
    {
        "character": "創造的",
        "kana": "そうぞうてき",
        "meaning": "creative",
        "level": 28
    },
    {
        "character": "児童",
        "kana": "じどう",
        "meaning": "children",
        "level": 28
    },
    {
        "character": "博物館",
        "kana": "はくぶつかん",
        "meaning": "museum",
        "level": 28
    },
    {
        "character": "博覧会",
        "kana": "はくらんかい",
        "meaning": "exposition, exhibition, fair",
        "level": 28
    },
    {
        "character": "博打",
        "kana": "ばくち",
        "meaning": "gambling",
        "level": 28
    },
    {
        "character": "微妙",
        "kana": "びみょう",
        "meaning": "not so good, not really, delicate, not great, complicated, doubtful",
        "level": 28
    },
    {
        "character": "妙薬",
        "kana": "みょうやく",
        "meaning": "wonder drug",
        "level": 28
    },
    {
        "character": "回復する",
        "kana": "かいふくする",
        "meaning": "to recover",
        "level": 28
    },
    {
        "character": "処分",
        "kana": "しょぶん",
        "meaning": "disposal",
        "level": 28
    },
    {
        "character": "振り仮名",
        "kana": "ふりがな",
        "meaning": "furigana, small kana next to kanji",
        "level": 28
    },
    {
        "character": "面接する",
        "kana": "めんせつする",
        "meaning": "to interview with, to interview",
        "level": 28
    },
    {
        "character": "攻める",
        "kana": "せめる",
        "meaning": "to attack",
        "level": 28
    },
    {
        "character": "専攻",
        "kana": "せんこう",
        "meaning": "major, college major, field of study",
        "level": 28
    },
    {
        "character": "潔い",
        "kana": "いさぎよい",
        "meaning": "pure hearted, pure",
        "level": 28
    },
    {
        "character": "独り言",
        "kana": "ひとりごと",
        "meaning": "talking to yourself",
        "level": 28
    },
    {
        "character": "比較的",
        "kana": "ひかくてき",
        "meaning": "comparatively",
        "level": 28
    },
    {
        "character": "過程",
        "kana": "かてい",
        "meaning": "process, a process",
        "level": 28
    },
    {
        "character": "精度",
        "kana": "せいど",
        "meaning": "precision, accuracy",
        "level": 28
    },
    {
        "character": "絶対",
        "kana": "ぜったい",
        "meaning": "absolutely, without fail, unconditionally",
        "level": 28
    },
    {
        "character": "不潔",
        "kana": "ふけつ",
        "meaning": "filthy, dirty",
        "level": 28
    },
    {
        "character": "絶つ",
        "kana": "たつ",
        "meaning": "to sever, to cut off",
        "level": 28
    },
    {
        "character": "絶望",
        "kana": "ぜつぼう",
        "meaning": "despair",
        "level": 28
    },
    {
        "character": "庫",
        "kana": "くら",
        "meaning": "warehouse, granary",
        "level": 28
    },
    {
        "character": "逆効果",
        "kana": "ぎゃくこうか",
        "meaning": "opposite effect",
        "level": 28
    },
    {
        "character": "夫婦",
        "kana": "ふうふ",
        "meaning": "husband and wife, wife and husband, married couple",
        "level": 28
    },
    {
        "character": "反攻",
        "kana": "はんこう",
        "meaning": "counterattack, counter offensive",
        "level": 28
    },
    {
        "character": "横浜",
        "kana": "よこはま",
        "meaning": "yokohama",
        "level": 28
    },
    {
        "character": "憲法",
        "kana": "けんぽう",
        "meaning": "constitution",
        "level": 28
    },
    {
        "character": "利益",
        "kana": "りえき",
        "meaning": "profit",
        "level": 28
    },
    {
        "character": "公益",
        "kana": "こうえき",
        "meaning": "public benefit",
        "level": 28
    },
    {
        "character": "日程",
        "kana": "にってい",
        "meaning": "schedule, agenda",
        "level": 28
    },
    {
        "character": "移住",
        "kana": "いじゅう",
        "meaning": "migration, immigration",
        "level": 28
    },
    {
        "character": "逆らう",
        "kana": "さからう",
        "meaning": "to go against, to oppose, to be contrary to",
        "level": 28
    },
    {
        "character": "録音",
        "kana": "ろくおん",
        "meaning": "sound recording, audio recording",
        "level": 28
    },
    {
        "character": "大衆",
        "kana": "たいしゅう",
        "meaning": "general public",
        "level": 28
    },
    {
        "character": "逆",
        "kana": "ぎゃく",
        "meaning": "reverse, opposite",
        "level": 28
    },
    {
        "character": "大間違い",
        "kana": "おおまちがい",
        "meaning": "big mistake",
        "level": 28
    },
    {
        "character": "郵便箱",
        "kana": "ゆうびんばこ",
        "meaning": "mailbox, postbox",
        "level": 28
    },
    {
        "character": "凍死",
        "kana": "とうし",
        "meaning": "freeze to death",
        "level": 28
    },
    {
        "character": "凍結",
        "kana": "とうけつ",
        "meaning": "freeze",
        "level": 28
    },
    {
        "character": "浜",
        "kana": "はま",
        "meaning": "beach",
        "level": 28
    },
    {
        "character": "有益",
        "kana": "ゆうえき",
        "meaning": "beneficial",
        "level": 28
    },
    {
        "character": "比較する",
        "kana": "ひかくする",
        "meaning": "to compare",
        "level": 28
    },
    {
        "character": "兵隊",
        "kana": "へいたい",
        "meaning": "soldier, sailor",
        "level": 28
    },
    {
        "character": "国益",
        "kana": "こくえき",
        "meaning": "national benefit, national interests",
        "level": 28
    },
    {
        "character": "移す",
        "kana": "うつす",
        "meaning": "to shift, to transfer",
        "level": 28
    },
    {
        "character": "同僚",
        "kana": "どうりょう",
        "meaning": "colleague, coworker",
        "level": 28
    },
    {
        "character": "診断",
        "kana": "しんだん",
        "meaning": "diagnosis",
        "level": 28
    },
    {
        "character": "我々",
        "kana": "われわれ",
        "meaning": "we, us",
        "level": 28
    },
    {
        "character": "攻撃",
        "kana": "こうげき",
        "meaning": "attack",
        "level": 28
    },
    {
        "character": "回数券",
        "kana": "かいすうけん",
        "meaning": "book of tickets, train tickets, train coupons",
        "level": 28
    },
    {
        "character": "幼児",
        "kana": "ようじ",
        "meaning": "children, child",
        "level": 28
    },
    {
        "character": "軍隊",
        "kana": "ぐんたい",
        "meaning": "army, an army",
        "level": 28
    },
    {
        "character": "前売り券",
        "kana": "まえうりけん",
        "meaning": "advance ticket, ticket sold in advance",
        "level": 28
    },
    {
        "character": "幼年時代",
        "kana": "ようねんじだい",
        "meaning": "childhood",
        "level": 28
    },
    {
        "character": "幼稚",
        "kana": "ようち",
        "meaning": "childish, immature",
        "level": 28
    },
    {
        "character": "金庫",
        "kana": "きんこ",
        "meaning": "a safe, safe",
        "level": 28
    },
    {
        "character": "冷たい",
        "kana": "つめたい",
        "meaning": "cold, cool, cold to the touch",
        "level": 28
    },
    {
        "character": "傘",
        "kana": "かさ",
        "meaning": "umbrella",
        "level": 28
    },
    {
        "character": "矢印",
        "kana": "やじるし",
        "meaning": "arrow",
        "level": 28
    },
    {
        "character": "憲政",
        "kana": "けんせい",
        "meaning": "constitutional government",
        "level": 28
    },
    {
        "character": "処理",
        "kana": "しょり",
        "meaning": "deal with, take care of",
        "level": 28
    },
    {
        "character": "入隊",
        "kana": "にゅうたい",
        "meaning": "enlist in the army, enlist",
        "level": 28
    },
    {
        "character": "程",
        "kana": "ほど",
        "meaning": "extent, an extent",
        "level": 28
    },
    {
        "character": "車庫",
        "kana": "しゃこ",
        "meaning": "garage",
        "level": 28
    },
    {
        "character": "身振り",
        "kana": "みぶり",
        "meaning": "gesture",
        "level": 28
    },
    {
        "character": "並列",
        "kana": "へいれつ",
        "meaning": "in a row, arrange in a row",
        "level": 28
    },
    {
        "character": "婦人",
        "kana": "ふじん",
        "meaning": "lady",
        "level": 28
    },
    {
        "character": "郵便局",
        "kana": "ゆうびんきょく",
        "meaning": "post office",
        "level": 28
    },
    {
        "character": "貯金箱",
        "kana": "ちょきんばこ",
        "meaning": "savings box, piggy bank, bank, money box",
        "level": 28
    },
    {
        "character": "処置",
        "kana": "しょち",
        "meaning": "treatment, measure",
        "level": 28
    },
    {
        "character": "修理",
        "kana": "しゅうり",
        "meaning": "repair",
        "level": 28
    },
    {
        "character": "創造力",
        "kana": "そうぞうりょく",
        "meaning": "creative power, creativity",
        "level": 28
    },
    {
        "character": "修辞学",
        "kana": "しゅうじがく",
        "meaning": "rhetoric",
        "level": 28
    },
    {
        "character": "刺身",
        "kana": "さしみ",
        "meaning": "sashimi",
        "level": 28
    },
    {
        "character": "〜隊",
        "kana": "たい",
        "meaning": "squad",
        "level": 28
    },
    {
        "character": "輸入する",
        "kana": "ゆにゅうする",
        "meaning": "to import",
        "level": 28
    },
    {
        "character": "郵便番号",
        "kana": "ゆうびんばんごう",
        "meaning": "post number, postal code, postcode",
        "level": 28
    },
    {
        "character": "移民",
        "kana": "いみん",
        "meaning": "immigration, emigration, emigrant, immigrant, migration, migrant",
        "level": 28
    },
    {
        "character": "菓子屋",
        "kana": "かしや",
        "meaning": "candy store, candy shop, sweet store, sweet shop",
        "level": 28
    },
    {
        "character": "進撃",
        "kana": "しんげき",
        "meaning": "advance, charge",
        "level": 28
    },
    {
        "character": "星占い",
        "kana": "ほしうらない",
        "meaning": "astrology, horoscope",
        "level": 28
    },
    {
        "character": "程度",
        "kana": "ていど",
        "meaning": "degree, extent, level",
        "level": 28
    },
    {
        "character": "冷凍庫",
        "kana": "れいとうこ",
        "meaning": "freezer",
        "level": 28
    },
    {
        "character": "微か",
        "kana": "かすか",
        "meaning": "delicate, faint, indistinct, dim",
        "level": 28
    },
    {
        "character": "故に",
        "kana": "ゆえに",
        "meaning": "therefore, consequently",
        "level": 28
    },
    {
        "character": "移住者",
        "kana": "いじゅうしゃ",
        "meaning": "emigrant, immigrant, migrant",
        "level": 28
    },
    {
        "character": "官僚",
        "kana": "かんりょう",
        "meaning": "bureaucrat, bureaucracy",
        "level": 28
    },
    {
        "character": "衆議院",
        "kana": "しゅうぎいん",
        "meaning": "house of representatives",
        "level": 28
    },
    {
        "character": "幼い",
        "kana": "おさない",
        "meaning": "childish, very young, immature",
        "level": 28
    },
    {
        "character": "修士",
        "kana": "しゅうし",
        "meaning": "master's degree",
        "level": 28
    },
    {
        "character": "逆説",
        "kana": "ぎゃくせつ",
        "meaning": "paradox",
        "level": 28
    },
    {
        "character": "清潔",
        "kana": "せいけつ",
        "meaning": "pure, clean",
        "level": 28
    },
    {
        "character": "登録",
        "kana": "とうろく",
        "meaning": "registration",
        "level": 28
    },
    {
        "character": "精神",
        "kana": "せいしん",
        "meaning": "spirit, mind, soul",
        "level": 28
    },
    {
        "character": "凍る",
        "kana": "こおる",
        "meaning": "to freeze",
        "level": 28
    },
    {
        "character": "撃つ",
        "kana": "うつ",
        "meaning": "to shoot, to attack, to fire a gun",
        "level": 28
    },
    {
        "character": "絶景",
        "kana": "ぜっけい",
        "meaning": "superb view, splendid view, stunning view, spectacular view, great view",
        "level": 28
    },
    {
        "character": "冷静",
        "kana": "れいせい",
        "meaning": "cool headed",
        "level": 28
    },
    {
        "character": "直接的",
        "kana": "ちょくせつてき",
        "meaning": "directly",
        "level": 28
    },
    {
        "character": "無我夢中",
        "kana": "むがむちゅう",
        "meaning": "total absorption, ecstasy",
        "level": 28
    },
    {
        "character": "主婦",
        "kana": "しゅふ",
        "meaning": "housewife",
        "level": 28
    },
    {
        "character": "訪れる",
        "kana": "おとずれる",
        "meaning": "to visit",
        "level": 29
    },
    {
        "character": "迷惑メール",
        "kana": "めいわくめーる, めいわくメール",
        "meaning": "spam, junk mail, unsolicited mail",
        "level": 29
    },
    {
        "character": "請ける",
        "kana": "うける",
        "meaning": "to receive, to undertake",
        "level": 29
    },
    {
        "character": "禅宗",
        "kana": "ぜんしゅう",
        "meaning": "zen sect",
        "level": 29
    },
    {
        "character": "熱烈",
        "kana": "ねつれつ",
        "meaning": "impassioned, passionate enthusiasm",
        "level": 29
    },
    {
        "character": "大臣",
        "kana": "だいじん",
        "meaning": "minister, cabinet member",
        "level": 29
    },
    {
        "character": "道に迷う",
        "kana": "みちにまよう",
        "meaning": "to get lost, to be lost",
        "level": 29
    },
    {
        "character": "詰める",
        "kana": "つめる",
        "meaning": "to stuff in, to cram in",
        "level": 29
    },
    {
        "character": "誘惑する",
        "kana": "ゆうわくする",
        "meaning": "to tempt",
        "level": 29
    },
    {
        "character": "促す",
        "kana": "うながす",
        "meaning": "to urge, to pressure",
        "level": 29
    },
    {
        "character": "二杯",
        "kana": "にはい",
        "meaning": "two cups, two cups of liquid",
        "level": 29
    },
    {
        "character": "緊急",
        "kana": "きんきゅう",
        "meaning": "urgent, emergency",
        "level": 29
    },
    {
        "character": "綺麗",
        "kana": "きれい",
        "meaning": "pretty, beautiful, clean",
        "level": 29
    },
    {
        "character": "織物",
        "kana": "おりもの",
        "meaning": "cloth, fabric",
        "level": 29
    },
    {
        "character": "乾く",
        "kana": "かわく",
        "meaning": "to get dry, to become dry, to be dried",
        "level": 29
    },
    {
        "character": "乾杯",
        "kana": "かんぱい",
        "meaning": "kanpai, toast, cheers",
        "level": 29
    },
    {
        "character": "催促",
        "kana": "さいそく",
        "meaning": "urge, press for, demand",
        "level": 29
    },
    {
        "character": "壊す",
        "kana": "こわす",
        "meaning": "to break something, to break",
        "level": 29
    },
    {
        "character": "構える",
        "kana": "かまえる",
        "meaning": "to assume a stance, to get ready to fight",
        "level": 29
    },
    {
        "character": "宗派",
        "kana": "しゅうは",
        "meaning": "sect, denomination",
        "level": 29
    },
    {
        "character": "宴",
        "kana": "うたげ",
        "meaning": "banquet, dinner party, party, feast",
        "level": 29
    },
    {
        "character": "不健康",
        "kana": "ふけんこう",
        "meaning": "unhealthy, not healthy",
        "level": 29
    },
    {
        "character": "乾季",
        "kana": "かんき",
        "meaning": "dry season",
        "level": 29
    },
    {
        "character": "一人娘",
        "kana": "ひとりむすめ",
        "meaning": "only daughter",
        "level": 29
    },
    {
        "character": "恐怖",
        "kana": "きょうふ",
        "meaning": "terror, fear",
        "level": 29
    },
    {
        "character": "航空",
        "kana": "こうくう",
        "meaning": "aviation, flight",
        "level": 29
    },
    {
        "character": "一杯",
        "kana": "いっぱい",
        "meaning": "one cup, one cup of liquid, a drink, one drink",
        "level": 29
    },
    {
        "character": "眠る",
        "kana": "ねむる",
        "meaning": "to sleep",
        "level": 29
    },
    {
        "character": "略図",
        "kana": "りゃくず",
        "meaning": "rough sketch",
        "level": 29
    },
    {
        "character": "痛み",
        "kana": "いたみ",
        "meaning": "a pain, pain",
        "level": 29
    },
    {
        "character": "街道",
        "kana": "かいどう",
        "meaning": "highway",
        "level": 29
    },
    {
        "character": "痛む",
        "kana": "いたむ",
        "meaning": "to be painful, to hurt",
        "level": 29
    },
    {
        "character": "貸し",
        "kana": "かし",
        "meaning": "rental",
        "level": 29
    },
    {
        "character": "恐怖症",
        "kana": "きょうふしょう",
        "meaning": "phobia",
        "level": 29
    },
    {
        "character": "閣議",
        "kana": "かくぎ",
        "meaning": "cabinet meeting",
        "level": 29
    },
    {
        "character": "怒気",
        "kana": "どき",
        "meaning": "anger, fit of anger",
        "level": 29
    },
    {
        "character": "略語",
        "kana": "りゃくご",
        "meaning": "abbreviation",
        "level": 29
    },
    {
        "character": "娘",
        "kana": "むすめ",
        "meaning": "daughter",
        "level": 29
    },
    {
        "character": "江戸",
        "kana": "えど",
        "meaning": "edo, tokyo",
        "level": 29
    },
    {
        "character": "宴会",
        "kana": "えんかい",
        "meaning": "banquet, dinner party",
        "level": 29
    },
    {
        "character": "欧米",
        "kana": "おうべい",
        "meaning": "europe and america, america and europe, usa and europe, europe and usa, the west",
        "level": 29
    },
    {
        "character": "閣僚",
        "kana": "かくりょう",
        "meaning": "cabinet ministers",
        "level": 29
    },
    {
        "character": "要請",
        "kana": "ようせい",
        "meaning": "demand, request",
        "level": 29
    },
    {
        "character": "英雄",
        "kana": "えいゆう",
        "meaning": "hero",
        "level": 29
    },
    {
        "character": "中欧",
        "kana": "ちゅうおう",
        "meaning": "central europe",
        "level": 29
    },
    {
        "character": "倒壊",
        "kana": "とうかい",
        "meaning": "collapse, destruction, crumbling",
        "level": 29
    },
    {
        "character": "請求",
        "kana": "せいきゅう",
        "meaning": "demand, claim, request, charge",
        "level": 29
    },
    {
        "character": "検索",
        "kana": "けんさく",
        "meaning": "lookup, internet search",
        "level": 29
    },
    {
        "character": "診察",
        "kana": "しんさつ",
        "meaning": "medical exam",
        "level": 29
    },
    {
        "character": "航法",
        "kana": "こうほう",
        "meaning": "navigation",
        "level": 29
    },
    {
        "character": "直航",
        "kana": "ちょっこう",
        "meaning": "nonstop flight, direct voyage",
        "level": 29
    },
    {
        "character": "催告",
        "kana": "さいこく",
        "meaning": "notification",
        "level": 29
    },
    {
        "character": "宗教",
        "kana": "しゅうきょう",
        "meaning": "religion",
        "level": 29
    },
    {
        "character": "怖い",
        "kana": "こわい",
        "meaning": "scary",
        "level": 29
    },
    {
        "character": "睡眠薬",
        "kana": "すいみんやく",
        "meaning": "sleeping pills, sleeping drugs, sleeping medicine",
        "level": 29
    },
    {
        "character": "韓国",
        "kana": "かんこく",
        "meaning": "south korea, korea",
        "level": 29
    },
    {
        "character": "主催",
        "kana": "しゅさい",
        "meaning": "sponsorship, promotion",
        "level": 29
    },
    {
        "character": "緊張",
        "kana": "きんちょう",
        "meaning": "stress, tension",
        "level": 29
    },
    {
        "character": "看板",
        "kana": "かんばん",
        "meaning": "store sign",
        "level": 29
    },
    {
        "character": "強烈",
        "kana": "きょうれつ",
        "meaning": "strong, intense",
        "level": 29
    },
    {
        "character": "怒り",
        "kana": "いかり",
        "meaning": "anger, wrath",
        "level": 29
    },
    {
        "character": "奇数",
        "kana": "きすう",
        "meaning": "odd number",
        "level": 29
    },
    {
        "character": "大略",
        "kana": "たいりゃく",
        "meaning": "summary, outline",
        "level": 29
    },
    {
        "character": "三杯",
        "kana": "さんばい",
        "meaning": "three cups, three cups of liquid",
        "level": 29
    },
    {
        "character": "締まる",
        "kana": "しまる",
        "meaning": "to tighten, to become tight, to become taut",
        "level": 29
    },
    {
        "character": "奇妙",
        "kana": "きみょう",
        "meaning": "strange, curious, odd",
        "level": 29
    },
    {
        "character": "板",
        "kana": "いた",
        "meaning": "a board, board, a plank, plank",
        "level": 29
    },
    {
        "character": "見極める",
        "kana": "みきわめる",
        "meaning": "to see through, to get to the bottom of",
        "level": 29
    },
    {
        "character": "極めて",
        "kana": "きわめて",
        "meaning": "extremely",
        "level": 29
    },
    {
        "character": "体積",
        "kana": "たいせき",
        "meaning": "volume",
        "level": 29
    },
    {
        "character": "日欧",
        "kana": "にちおう",
        "meaning": "europe and japan, japan and europe",
        "level": 29
    },
    {
        "character": "入江",
        "kana": "いりえ",
        "meaning": "inlet, cove",
        "level": 29
    },
    {
        "character": "添える",
        "kana": "そえる",
        "meaning": "to append, to be included, to garnish",
        "level": 29
    },
    {
        "character": "添付",
        "kana": "てんぷ",
        "meaning": "attachment",
        "level": 29
    },
    {
        "character": "猛烈",
        "kana": "もうれつ",
        "meaning": "fierce, violent, intense",
        "level": 29
    },
    {
        "character": "省略",
        "kana": "しょうりゃく",
        "meaning": "abbreviate, leave out",
        "level": 29
    },
    {
        "character": "略す",
        "kana": "りゃくす",
        "meaning": "to abbreviate",
        "level": 29
    },
    {
        "character": "眠り薬",
        "kana": "ねむりぐすり",
        "meaning": "sleeping pills, sleeping drugs, sleeping medicine",
        "level": 29
    },
    {
        "character": "積もる",
        "kana": "つもる",
        "meaning": "to accumulate, to get piled up",
        "level": 29
    },
    {
        "character": "面積",
        "kana": "めんせき",
        "meaning": "area",
        "level": 29
    },
    {
        "character": "索引",
        "kana": "さくいん",
        "meaning": "index",
        "level": 29
    },
    {
        "character": "締切",
        "kana": "しめきり",
        "meaning": "deadline, closing date",
        "level": 29
    },
    {
        "character": "商店街",
        "kana": "しょうてんがい",
        "meaning": "shopping district",
        "level": 29
    },
    {
        "character": "痛み止め",
        "kana": "いたみどめ",
        "meaning": "painkiller",
        "level": 29
    },
    {
        "character": "請願",
        "kana": "せいがん",
        "meaning": "petition",
        "level": 29
    },
    {
        "character": "日韓",
        "kana": "にっかん",
        "meaning": "japan and south korea, south korea and japan, japan and korea, korea and japan",
        "level": 29
    },
    {
        "character": "好奇心",
        "kana": "こうきしん",
        "meaning": "curiosity",
        "level": 29
    },
    {
        "character": "恐ろしい",
        "kana": "おそろしい",
        "meaning": "scary, fearful",
        "level": 29
    },
    {
        "character": "魅力",
        "kana": "みりょく",
        "meaning": "allure, charm, attraction, appeal",
        "level": 29
    },
    {
        "character": "腹が減った",
        "kana": "はらがへった",
        "meaning": "hungry, to be hungry",
        "level": 29
    },
    {
        "character": "全壊",
        "kana": "ぜんかい",
        "meaning": "complete destruction, total destruction",
        "level": 29
    },
    {
        "character": "黒板",
        "kana": "こくばん",
        "meaning": "blackboard",
        "level": 29
    },
    {
        "character": "詰まる",
        "kana": "つまる",
        "meaning": "to be stuffed, to be crammed full",
        "level": 29
    },
    {
        "character": "猛〜",
        "kana": "もう",
        "meaning": "fierce, energetic",
        "level": 29
    },
    {
        "character": "招き猫",
        "kana": "まねきねこ",
        "meaning": "shop window cat, maneki neko",
        "level": 29
    },
    {
        "character": "診る",
        "kana": "みる",
        "meaning": "to examine a patient, to examine",
        "level": 29
    },
    {
        "character": "貧しい",
        "kana": "まずしい",
        "meaning": "poor",
        "level": 30
    },
    {
        "character": "官僚的",
        "kana": "かんりょうてき",
        "meaning": "bureaucratic",
        "level": 30
    },
    {
        "character": "攻撃する",
        "kana": "こうげきする",
        "meaning": "to attack",
        "level": 30
    },
    {
        "character": "研修生",
        "kana": "けんしゅうせい",
        "meaning": "trainee",
        "level": 30
    },
    {
        "character": "詳細",
        "kana": "しょうさい",
        "meaning": "details",
        "level": 30
    },
    {
        "character": "快速",
        "kana": "かいそく",
        "meaning": "high speed, express",
        "level": 30
    },
    {
        "character": "照らす",
        "kana": "てらす",
        "meaning": "to illuminate",
        "level": 30
    },
    {
        "character": "不詳",
        "kana": "ふしょう",
        "meaning": "unknown",
        "level": 30
    },
    {
        "character": "浮く",
        "kana": "うく",
        "meaning": "to float",
        "level": 30
    },
    {
        "character": "押す",
        "kana": "おす",
        "meaning": "to push",
        "level": 30
    },
    {
        "character": "懐かしい",
        "kana": "なつかしい",
        "meaning": "nostalgic, nostalgia",
        "level": 30
    },
    {
        "character": "枕",
        "kana": "まくら",
        "meaning": "pillow",
        "level": 30
    },
    {
        "character": "白旗",
        "kana": "しらはた, はっき",
        "meaning": "white flag",
        "level": 30
    },
    {
        "character": "背景",
        "kana": "はいけい",
        "meaning": "background",
        "level": 30
    },
    {
        "character": "冷やす",
        "kana": "ひやす",
        "meaning": "to chill something, to chill",
        "level": 30
    },
    {
        "character": "翌日",
        "kana": "よくじつ",
        "meaning": "the next day, next day",
        "level": 30
    },
    {
        "character": "盗む",
        "kana": "ぬすむ",
        "meaning": "to steal",
        "level": 30
    },
    {
        "character": "出版",
        "kana": "しゅっぱん",
        "meaning": "publishing",
        "level": 30
    },
    {
        "character": "遊ぶ",
        "kana": "あそぶ",
        "meaning": "to play",
        "level": 30
    },
    {
        "character": "逆さま",
        "kana": "さかさま",
        "meaning": "upside down",
        "level": 30
    },
    {
        "character": "版権",
        "kana": "はんけん",
        "meaning": "copyright",
        "level": 30
    },
    {
        "character": "精神的",
        "kana": "せいしんてき",
        "meaning": "spiritual",
        "level": 30
    },
    {
        "character": "翌年",
        "kana": "よくねん, よくとし",
        "meaning": "the next year, next year",
        "level": 30
    },
    {
        "character": "越える",
        "kana": "こえる",
        "meaning": "to go beyond, to cross over",
        "level": 30
    },
    {
        "character": "登録する",
        "kana": "とうろくする",
        "meaning": "to register",
        "level": 30
    },
    {
        "character": "観覧",
        "kana": "かんらん",
        "meaning": "viewing, seeing",
        "level": 30
    },
    {
        "character": "初版",
        "kana": "しょはん",
        "meaning": "first edition",
        "level": 30
    },
    {
        "character": "渇く",
        "kana": "かわく",
        "meaning": "to become thirsty, to be thirsty, to become dry",
        "level": 30
    },
    {
        "character": "服飾",
        "kana": "ふくしょく",
        "meaning": "attire",
        "level": 30
    },
    {
        "character": "精神病",
        "kana": "せいしんびょう",
        "meaning": "mental illness, mental disorder",
        "level": 30
    },
    {
        "character": "浮気",
        "kana": "うわき",
        "meaning": "affair, infidelity",
        "level": 30
    },
    {
        "character": "一覧",
        "kana": "いちらん",
        "meaning": "a look, a glance",
        "level": 30
    },
    {
        "character": "遊園地",
        "kana": "ゆうえんち",
        "meaning": "amusement park, theme park",
        "level": 30
    },
    {
        "character": "診断する",
        "kana": "しんだんする",
        "meaning": "to diagnose",
        "level": 30
    },
    {
        "character": "不適",
        "kana": "ふてき",
        "meaning": "unsuitable, inappropriate",
        "level": 30
    },
    {
        "character": "精一杯",
        "kana": "せいいっぱい",
        "meaning": "with all one's might, with all your might",
        "level": 30
    },
    {
        "character": "体系的",
        "kana": "たいけいてき",
        "meaning": "systematic",
        "level": 30
    },
    {
        "character": "未婚",
        "kana": "みこん",
        "meaning": "unmarried",
        "level": 30
    },
    {
        "character": "背",
        "kana": "せ",
        "meaning": "height",
        "level": 30
    },
    {
        "character": "新婚旅行",
        "kana": "しんこんりょこう",
        "meaning": "honeymoon",
        "level": 30
    },
    {
        "character": "照明",
        "kana": "しょうめい",
        "meaning": "illumination",
        "level": 30
    },
    {
        "character": "欠乏",
        "kana": "けつぼう",
        "meaning": "lack, scarcity",
        "level": 30
    },
    {
        "character": "騒音",
        "kana": "そうおん",
        "meaning": "noise, din",
        "level": 30
    },
    {
        "character": "盗作",
        "kana": "とうさく",
        "meaning": "plagiarism",
        "level": 30
    },
    {
        "character": "快感",
        "kana": "かいかん",
        "meaning": "pleasure",
        "level": 30
    },
    {
        "character": "貧乏",
        "kana": "びんぼう",
        "meaning": "poor, poverty",
        "level": 30
    },
    {
        "character": "不快",
        "kana": "ふかい",
        "meaning": "unpleasant, uncomfortable",
        "level": 30
    },
    {
        "character": "騒ぐ",
        "kana": "さわぐ",
        "meaning": "to make noise, to be boisterous, to make a fuss",
        "level": 30
    },
    {
        "character": "〜系",
        "kana": "けい",
        "meaning": "tribe, lineage, group",
        "level": 30
    },
    {
        "character": "ご覧",
        "kana": "ごらん",
        "meaning": "look at, see",
        "level": 30
    },
    {
        "character": "延長",
        "kana": "えんちょう",
        "meaning": "prolonging, extension",
        "level": 30
    },
    {
        "character": "購入",
        "kana": "こうにゅう",
        "meaning": "purchase",
        "level": 30
    },
    {
        "character": "太陽系",
        "kana": "たいようけい",
        "meaning": "solar system",
        "level": 30
    },
    {
        "character": "更生",
        "kana": "こうせい",
        "meaning": "rebirth, resuscitation",
        "level": 30
    },
    {
        "character": "更新",
        "kana": "こうしん",
        "meaning": "renewal, update",
        "level": 30
    },
    {
        "character": "乏しい",
        "kana": "とぼしい",
        "meaning": "scarce, meager",
        "level": 30
    },
    {
        "character": "漏水",
        "kana": "ろうすい",
        "meaning": "water leakage",
        "level": 30
    },
    {
        "character": "購読",
        "kana": "こうどく",
        "meaning": "subscription",
        "level": 30
    },
    {
        "character": "預金",
        "kana": "よきん",
        "meaning": "bank deposit, deposit, bank account",
        "level": 30
    },
    {
        "character": "漏出",
        "kana": "ろうしゅつ",
        "meaning": "leak out, escape, leakage",
        "level": 30
    },
    {
        "character": "主",
        "kana": "ぬし",
        "meaning": "master, head of household, leader",
        "level": 30
    },
    {
        "character": "移る",
        "kana": "うつる",
        "meaning": "to be shifted, to be transferred",
        "level": 30
    },
    {
        "character": "先程",
        "kana": "さきほど",
        "meaning": "a while ago",
        "level": 30
    },
    {
        "character": "並べる",
        "kana": "ならべる",
        "meaning": "to line up, to put in order",
        "level": 30
    },
    {
        "character": "結婚",
        "kana": "けっこん",
        "meaning": "marriage",
        "level": 30
    },
    {
        "character": "延ばす",
        "kana": "のばす",
        "meaning": "to prolong, to lengthen, to extend",
        "level": 30
    },
    {
        "character": "延期する",
        "kana": "えんきする",
        "meaning": "to postpone",
        "level": 30
    },
    {
        "character": "快い",
        "kana": "こころよい",
        "meaning": "pleasant",
        "level": 30
    },
    {
        "character": "盗撮",
        "kana": "とうさつ",
        "meaning": "hidden camera",
        "level": 30
    },
    {
        "character": "旗",
        "kana": "はた",
        "meaning": "flag",
        "level": 30
    },
    {
        "character": "国旗",
        "kana": "こっき",
        "meaning": "national flag",
        "level": 30
    },
    {
        "character": "更に",
        "kana": "さらに",
        "meaning": "again, anew, furthermore",
        "level": 30
    },
    {
        "character": "変更",
        "kana": "へんこう",
        "meaning": "alteration, change",
        "level": 30
    },
    {
        "character": "漏れる",
        "kana": "もれる",
        "meaning": "to leak, to leak out",
        "level": 30
    },
    {
        "character": "照れる",
        "kana": "てれる",
        "meaning": "to feel embarrassed, to be shy, to be embarrassed, to feel shy",
        "level": 30
    },
    {
        "character": "強盗",
        "kana": "ごうとう",
        "meaning": "burglary, robbery",
        "level": 30
    },
    {
        "character": "盗品",
        "kana": "とうひん",
        "meaning": "stolen goods, stolen items",
        "level": 30
    },
    {
        "character": "幼稚園",
        "kana": "ようちえん",
        "meaning": "kindergarten",
        "level": 30
    },
    {
        "character": "切符",
        "kana": "きっぷ",
        "meaning": "ticket",
        "level": 30
    },
    {
        "character": "日系",
        "kana": "にっけい",
        "meaning": "japanese descent, of japanese descent",
        "level": 30
    },
    {
        "character": "絶える",
        "kana": "たえる",
        "meaning": "to die out, to end",
        "level": 30
    },
    {
        "character": "翌月",
        "kana": "よくげつ",
        "meaning": "the next month, next month",
        "level": 30
    },
    {
        "character": "詳しい",
        "kana": "くわしい",
        "meaning": "detailed, expert",
        "level": 30
    },
    {
        "character": "撮る",
        "kana": "とる",
        "meaning": "to take a picture, to take a photograph, to take a photo, to photograph, to take video, to film",
        "level": 30
    },
    {
        "character": "越権",
        "kana": "えっけん",
        "meaning": "overstepping your authority, overstep one's authority, overstepping one's authority",
        "level": 30
    },
    {
        "character": "適当",
        "kana": "てきとう",
        "meaning": "appropriate, proper, irresponsible",
        "level": 30
    },
    {
        "character": "預ける",
        "kana": "あずける",
        "meaning": "to deposit, to deposit money",
        "level": 30
    },
    {
        "character": "浮世絵",
        "kana": "うきよえ",
        "meaning": "woodblock print, ukiyoe",
        "level": 30
    },
    {
        "character": "翌朝",
        "kana": "よくちょう, よくあさ",
        "meaning": "the next morning, next morning",
        "level": 30
    },
    {
        "character": "電飾",
        "kana": "でんしょく",
        "meaning": "decorative lighting",
        "level": 30
    },
    {
        "character": "求婚",
        "kana": "きゅうこん",
        "meaning": "marriage proposal",
        "level": 30
    },
    {
        "character": "飾る",
        "kana": "かざる",
        "meaning": "to decorate",
        "level": 30
    },
    {
        "character": "購買",
        "kana": "こうばい",
        "meaning": "purchasing",
        "level": 30
    },
    {
        "character": "撮影",
        "kana": "さつえい",
        "meaning": "photoshoot, movie shoot, photographing, filming",
        "level": 30
    },
    {
        "character": "嘆息",
        "kana": "たんそく",
        "meaning": "sigh, lament",
        "level": 31
    },
    {
        "character": "緊張する",
        "kana": "きんちょうする",
        "meaning": "to stress, to stress out, to be nervous",
        "level": 31
    },
    {
        "character": "帯",
        "kana": "おび",
        "meaning": "belt",
        "level": 31
    },
    {
        "character": "幾つ",
        "kana": "いくつ",
        "meaning": "how many",
        "level": 31
    },
    {
        "character": "豪華",
        "kana": "ごうか",
        "meaning": "luxurious, splendid",
        "level": 31
    },
    {
        "character": "雄犬",
        "kana": "おすいぬ",
        "meaning": "male dog",
        "level": 31
    },
    {
        "character": "壊れ物",
        "kana": "こわれもの",
        "meaning": "fragile thing, breakables, fragile item",
        "level": 31
    },
    {
        "character": "人脈",
        "kana": "じんみゃく",
        "meaning": "personal connections, network",
        "level": 31
    },
    {
        "character": "粉状",
        "kana": "ふんじょう",
        "meaning": "powdered",
        "level": 31
    },
    {
        "character": "総理大臣",
        "kana": "そうりだいじん",
        "meaning": "prime minister",
        "level": 31
    },
    {
        "character": "富士山",
        "kana": "ふじさん",
        "meaning": "mt fuji, mount fuji",
        "level": 31
    },
    {
        "character": "既決",
        "kana": "きけつ",
        "meaning": "decided, settled",
        "level": 31
    },
    {
        "character": "富裕",
        "kana": "ふゆう",
        "meaning": "wealthy, affluent",
        "level": 31
    },
    {
        "character": "花粉症",
        "kana": "かふんしょう",
        "meaning": "hay fever",
        "level": 31
    },
    {
        "character": "粉",
        "kana": "こな",
        "meaning": "powder, flour",
        "level": 31
    },
    {
        "character": "尋問",
        "kana": "じんもん",
        "meaning": "questioning",
        "level": 31
    },
    {
        "character": "催促する",
        "kana": "さいそくする",
        "meaning": "to urge, to press for, to demand",
        "level": 31
    },
    {
        "character": "探究",
        "kana": "たんきゅう",
        "meaning": "research",
        "level": 31
    },
    {
        "character": "華やか",
        "kana": "はなやか",
        "meaning": "showy",
        "level": 31
    },
    {
        "character": "怖がる",
        "kana": "こわがる",
        "meaning": "to be scared, to be afraid of",
        "level": 31
    },
    {
        "character": "富む",
        "kana": "とむ",
        "meaning": "to be rich, to be wealthy",
        "level": 31
    },
    {
        "character": "壊れる",
        "kana": "こわれる",
        "meaning": "to be broken, to get broken",
        "level": 31
    },
    {
        "character": "菜食",
        "kana": "さいしょく",
        "meaning": "vegetarianism, vegetarian diet",
        "level": 31
    },
    {
        "character": "散る",
        "kana": "ちる",
        "meaning": "to be scattered, to get scattered, to scatter",
        "level": 31
    },
    {
        "character": "思い詰める",
        "kana": "おもいつめる",
        "meaning": "to think hard",
        "level": 31
    },
    {
        "character": "ハチの巣",
        "kana": "はちのす, ハチのす",
        "meaning": "beehive",
        "level": 31
    },
    {
        "character": "平均",
        "kana": "へいきん",
        "meaning": "average, mean",
        "level": 31
    },
    {
        "character": "大陸",
        "kana": "たいりく",
        "meaning": "continent",
        "level": 31
    },
    {
        "character": "墓地",
        "kana": "ぼち",
        "meaning": "graveyard, cemetery",
        "level": 31
    },
    {
        "character": "中華",
        "kana": "ちゅうか",
        "meaning": "chinese",
        "level": 31
    },
    {
        "character": "通貨",
        "kana": "つうか",
        "meaning": "currency",
        "level": 31
    },
    {
        "character": "直径",
        "kana": "ちょっけい",
        "meaning": "diameter",
        "level": 31
    },
    {
        "character": "恐れる",
        "kana": "おそれる",
        "meaning": "to fear, to dread",
        "level": 31
    },
    {
        "character": "陸軍",
        "kana": "りくぐん",
        "meaning": "land army, army",
        "level": 31
    },
    {
        "character": "積む",
        "kana": "つむ",
        "meaning": "to pile things up, to accumulate",
        "level": 31
    },
    {
        "character": "航空券",
        "kana": "こうくうけん",
        "meaning": "airplane ticket",
        "level": 31
    },
    {
        "character": "泥水",
        "kana": "でいすい, どろみず",
        "meaning": "muddy water",
        "level": 31
    },
    {
        "character": "除外",
        "kana": "じょがい",
        "meaning": "exception",
        "level": 31
    },
    {
        "character": "画廊",
        "kana": "がろう",
        "meaning": "picture gallery",
        "level": 31
    },
    {
        "character": "真似",
        "kana": "まね",
        "meaning": "impersonation",
        "level": 31
    },
    {
        "character": "離婚",
        "kana": "りこん",
        "meaning": "divorce",
        "level": 31
    },
    {
        "character": "編者",
        "kana": "へんしゃ",
        "meaning": "editor",
        "level": 31
    },
    {
        "character": "融合",
        "kana": "ゆうごう",
        "meaning": "fusion",
        "level": 31
    },
    {
        "character": "印鑑",
        "kana": "いんかん",
        "meaning": "seal",
        "level": 31
    },
    {
        "character": "監督",
        "kana": "かんとく",
        "meaning": "supervision, direction, director",
        "level": 31
    },
    {
        "character": "普段",
        "kana": "ふだん",
        "meaning": "usual, ordinary, habitual, always, everyday",
        "level": 31
    },
    {
        "character": "血脈",
        "kana": "けつみゃく",
        "meaning": "blood vessel, blood relationship",
        "level": 31
    },
    {
        "character": "孫",
        "kana": "まご",
        "meaning": "grandchild",
        "level": 31
    },
    {
        "character": "墓",
        "kana": "はか",
        "meaning": "grave",
        "level": 31
    },
    {
        "character": "巣",
        "kana": "す",
        "meaning": "nest, habitat",
        "level": 31
    },
    {
        "character": "半径",
        "kana": "はんけい",
        "meaning": "radius",
        "level": 31
    },
    {
        "character": "富",
        "kana": "とみ",
        "meaning": "wealth",
        "level": 31
    },
    {
        "character": "道徳",
        "kana": "どうとく",
        "meaning": "morals, morality",
        "level": 31
    },
    {
        "character": "倉庫",
        "kana": "そうこ",
        "meaning": "storehouse, warehouse",
        "level": 31
    },
    {
        "character": "地帯",
        "kana": "ちたい",
        "meaning": "zone, district",
        "level": 31
    },
    {
        "character": "子孫",
        "kana": "しそん",
        "meaning": "descendant",
        "level": 31
    },
    {
        "character": "解散",
        "kana": "かいさん",
        "meaning": "breakup, dissolution",
        "level": 31
    },
    {
        "character": "棒",
        "kana": "ぼう",
        "meaning": "pole, wooden pole, rod",
        "level": 31
    },
    {
        "character": "既存",
        "kana": "きそん, きぞん",
        "meaning": "existing",
        "level": 31
    },
    {
        "character": "迷わす",
        "kana": "まよわす",
        "meaning": "to lead astray, to perplex",
        "level": 31
    },
    {
        "character": "倉",
        "kana": "くら",
        "meaning": "warehouse",
        "level": 31
    },
    {
        "character": "主催する",
        "kana": "しゅさいする",
        "meaning": "to sponsor, to promote",
        "level": 31
    },
    {
        "character": "鼻詰まり",
        "kana": "はなづまり",
        "meaning": "stuffy nose, blocked nose",
        "level": 31
    },
    {
        "character": "見詰める",
        "kana": "みつめる",
        "meaning": "to stare at",
        "level": 31
    },
    {
        "character": "絶やす",
        "kana": "たやす",
        "meaning": "to kill off, to let die out",
        "level": 31
    },
    {
        "character": "融資",
        "kana": "ゆうし",
        "meaning": "financing, loan",
        "level": 31
    },
    {
        "character": "分離",
        "kana": "ぶんり",
        "meaning": "segregation, separation",
        "level": 31
    },
    {
        "character": "離れる",
        "kana": "はなれる",
        "meaning": "to separate, to leave",
        "level": 31
    },
    {
        "character": "編集",
        "kana": "へんしゅう",
        "meaning": "edit",
        "level": 31
    },
    {
        "character": "既に",
        "kana": "すでに",
        "meaning": "as mentioned before, as mentioned previously, already, previously",
        "level": 31
    },
    {
        "character": "腹減った",
        "kana": "はらへった",
        "meaning": "hungry, to be hungry",
        "level": 31
    },
    {
        "character": "嘆く",
        "kana": "なげく",
        "meaning": "to lament, to grieve",
        "level": 31
    },
    {
        "character": "普通",
        "kana": "ふつう",
        "meaning": "normal, normally",
        "level": 31
    },
    {
        "character": "編む",
        "kana": "あむ",
        "meaning": "to knit",
        "level": 31
    },
    {
        "character": "感嘆符",
        "kana": "かんたんふ",
        "meaning": "exclamation mark, exclamation point",
        "level": 31
    },
    {
        "character": "外務大臣",
        "kana": "がいむだいじん",
        "meaning": "minister of foreign affairs",
        "level": 31
    },
    {
        "character": "地下街",
        "kana": "ちかがい",
        "meaning": "underground shopping mall, underground shopping center, shopping centre",
        "level": 31
    },
    {
        "character": "監視",
        "kana": "かんし",
        "meaning": "observation, monitor, keep watch over",
        "level": 31
    },
    {
        "character": "廊下",
        "kana": "ろうか",
        "meaning": "corridor, hallway",
        "level": 31
    },
    {
        "character": "鑑定",
        "kana": "かんてい",
        "meaning": "expert opinion",
        "level": 31
    },
    {
        "character": "巣立ち",
        "kana": "すだち",
        "meaning": "leave the nest, become independent",
        "level": 31
    },
    {
        "character": "掃除",
        "kana": "そうじ",
        "meaning": "cleaning",
        "level": 31
    },
    {
        "character": "除く",
        "kana": "のぞく",
        "meaning": "to exclude",
        "level": 31
    },
    {
        "character": "尋ねる",
        "kana": "たずねる",
        "meaning": "to inquire, to ask",
        "level": 31
    },
    {
        "character": "幾ら",
        "kana": "いくら",
        "meaning": "how much",
        "level": 31
    },
    {
        "character": "幾何学",
        "kana": "きかがく",
        "meaning": "geometry",
        "level": 31
    },
    {
        "character": "掃く",
        "kana": "はく",
        "meaning": "to sweep",
        "level": 31
    },
    {
        "character": "泥",
        "kana": "どろ",
        "meaning": "mud",
        "level": 31
    },
    {
        "character": "驚く",
        "kana": "おどろく",
        "meaning": "to be surprised, to be shocked",
        "level": 31
    },
    {
        "character": "驚嘆",
        "kana": "きょうたん",
        "meaning": "admiration, wonder",
        "level": 31
    },
    {
        "character": "クモの巣",
        "kana": "くものす, クモのす",
        "meaning": "spiderweb",
        "level": 31
    },
    {
        "character": "経路",
        "kana": "けいろ",
        "meaning": "route, course",
        "level": 31
    },
    {
        "character": "救急車",
        "kana": "きゅうきゅうしゃ",
        "meaning": "ambulance",
        "level": 31
    },
    {
        "character": "救う",
        "kana": "すくう",
        "meaning": "to rescue",
        "level": 31
    },
    {
        "character": "散歩",
        "kana": "さんぽ",
        "meaning": "a stroll, a walk, stroll, walk",
        "level": 31
    },
    {
        "character": "探偵",
        "kana": "たんてい",
        "meaning": "private detective, private investigator, detective, sleuth, investigator",
        "level": 31
    },
    {
        "character": "山脈",
        "kana": "さんみゃく",
        "meaning": "mountain range",
        "level": 31
    },
    {
        "character": "野菜",
        "kana": "やさい",
        "meaning": "vegetable",
        "level": 31
    },
    {
        "character": "探す",
        "kana": "さがす",
        "meaning": "to look for, to search for",
        "level": 31
    },
    {
        "character": "貨物",
        "kana": "かもつ",
        "meaning": "freight, cargo",
        "level": 31
    },
    {
        "character": "似る",
        "kana": "にる",
        "meaning": "to resemble",
        "level": 31
    },
    {
        "character": "均等",
        "kana": "きんとう",
        "meaning": "equality, uniformity, evenness",
        "level": 31
    },
    {
        "character": "均整",
        "kana": "きんせい",
        "meaning": "symmetry, balance",
        "level": 31
    },
    {
        "character": "徳川",
        "kana": "とくがわ",
        "meaning": "tokugawa, tokugawa shogun",
        "level": 31
    },
    {
        "character": "徳島県",
        "kana": "とくしまけん",
        "meaning": "tokushima prefecture",
        "level": 31
    },
    {
        "character": "内偵",
        "kana": "ないてい",
        "meaning": "scouting, reconnaissance, secret investigation",
        "level": 31
    },
    {
        "character": "麦粉",
        "kana": "むぎこ",
        "meaning": "wheat flour",
        "level": 31
    },
    {
        "character": "賛成",
        "kana": "さんせい",
        "meaning": "agreement, approval, support",
        "level": 32
    },
    {
        "character": "採用",
        "kana": "さいよう",
        "meaning": "use, adoption, acceptance",
        "level": 32
    },
    {
        "character": "血液",
        "kana": "けつえき",
        "meaning": "blood",
        "level": 32
    },
    {
        "character": "衛星",
        "kana": "えいせい",
        "meaning": "satellite",
        "level": 32
    },
    {
        "character": "結婚式",
        "kana": "けっこんしき",
        "meaning": "marriage ceremony, wedding",
        "level": 32
    },
    {
        "character": "押しボタン",
        "kana": "おしぼたん, おしボタン",
        "meaning": "push button",
        "level": 32
    },
    {
        "character": "生卵",
        "kana": "なまたまご",
        "meaning": "raw egg",
        "level": 32
    },
    {
        "character": "志望",
        "kana": "しぼう",
        "meaning": "desire, ambition",
        "level": 32
    },
    {
        "character": "眼球",
        "kana": "がんきゅう",
        "meaning": "eyeball",
        "level": 32
    },
    {
        "character": "老眼",
        "kana": "ろうがん",
        "meaning": "farsightedness",
        "level": 32
    },
    {
        "character": "込む",
        "kana": "こむ",
        "meaning": "to be crowded, to be included",
        "level": 32
    },
    {
        "character": "祖母",
        "kana": "そぼ",
        "meaning": "grandmother, grandma",
        "level": 32
    },
    {
        "character": "傷者",
        "kana": "しょうしゃ",
        "meaning": "injured person, wounded person",
        "level": 32
    },
    {
        "character": "自民党",
        "kana": "じみんとう",
        "meaning": "liberal democratic party, ldp",
        "level": 32
    },
    {
        "character": "興味",
        "kana": "きょうみ",
        "meaning": "interest",
        "level": 32
    },
    {
        "character": "通訳",
        "kana": "つうやく",
        "meaning": "interpreting, interpretation",
        "level": 32
    },
    {
        "character": "雑音",
        "kana": "ざつおん",
        "meaning": "noise, static",
        "level": 32
    },
    {
        "character": "温暖",
        "kana": "おんだん",
        "meaning": "warm, mild, warmth",
        "level": 32
    },
    {
        "character": "採算",
        "kana": "さいさん",
        "meaning": "profit",
        "level": 32
    },
    {
        "character": "政党",
        "kana": "せいとう",
        "meaning": "political party",
        "level": 32
    },
    {
        "character": "汚染",
        "kana": "おせん",
        "meaning": "pollution",
        "level": 32
    },
    {
        "character": "迎える",
        "kana": "むかえる",
        "meaning": "to pick someone up, to meet someone",
        "level": 32
    },
    {
        "character": "捨てる",
        "kana": "すてる",
        "meaning": "to throw away, to abandon",
        "level": 32
    },
    {
        "character": "恩賞",
        "kana": "おんしょう",
        "meaning": "reward, a reward",
        "level": 32
    },
    {
        "character": "密会",
        "kana": "みっかい",
        "meaning": "secret meeting, clandestine meeting",
        "level": 32
    },
    {
        "character": "秘める",
        "kana": "ひめる",
        "meaning": "to conceal, to keep secret",
        "level": 32
    },
    {
        "character": "傷める",
        "kana": "いためる",
        "meaning": "to damage",
        "level": 32
    },
    {
        "character": "染める",
        "kana": "そめる",
        "meaning": "to dye",
        "level": 32
    },
    {
        "character": "順序",
        "kana": "じゅんじょ",
        "meaning": "sequence, steps",
        "level": 32
    },
    {
        "character": "簡易",
        "kana": "かんい",
        "meaning": "simple, easy",
        "level": 32
    },
    {
        "character": "密輸",
        "kana": "みつゆ",
        "meaning": "smuggling",
        "level": 32
    },
    {
        "character": "社会党",
        "kana": "しゃかいとう",
        "meaning": "socialist party",
        "level": 32
    },
    {
        "character": "汚点",
        "kana": "おてん",
        "meaning": "stain, smudge",
        "level": 32
    },
    {
        "character": "採る",
        "kana": "とる",
        "meaning": "to gather",
        "level": 32
    },
    {
        "character": "卵",
        "kana": "たまご",
        "meaning": "egg",
        "level": 32
    },
    {
        "character": "桜肉",
        "kana": "さくらにく",
        "meaning": "horse meat",
        "level": 32
    },
    {
        "character": "撮影禁止",
        "kana": "さつえいきんし",
        "meaning": "no photos, no photos allowed",
        "level": 32
    },
    {
        "character": "背中",
        "kana": "せなか",
        "meaning": "one's back, back",
        "level": 32
    },
    {
        "character": "恩人",
        "kana": "おんじん",
        "meaning": "benefactor",
        "level": 32
    },
    {
        "character": "桜んぼ",
        "kana": "さくらんぼ",
        "meaning": "cherry",
        "level": 32
    },
    {
        "character": "銭",
        "kana": "ぜに",
        "meaning": "coin",
        "level": 32
    },
    {
        "character": "桜",
        "kana": "さくら",
        "meaning": "sakura, cherry tree",
        "level": 32
    },
    {
        "character": "購読する",
        "kana": "こうどくする",
        "meaning": "to subscribe",
        "level": 32
    },
    {
        "character": "採決",
        "kana": "さいけつ",
        "meaning": "voting",
        "level": 32
    },
    {
        "character": "先祖",
        "kana": "せんぞ",
        "meaning": "ancestors, one's ancestors",
        "level": 32
    },
    {
        "character": "複雑",
        "kana": "ふくざつ",
        "meaning": "complicated, complex",
        "level": 32
    },
    {
        "character": "液体",
        "kana": "えきたい",
        "meaning": "liquid",
        "level": 32
    },
    {
        "character": "序文",
        "kana": "じょぶん",
        "meaning": "preface",
        "level": 32
    },
    {
        "character": "意志",
        "kana": "いし",
        "meaning": "will, volition",
        "level": 32
    },
    {
        "character": "食欲",
        "kana": "しょくよく",
        "meaning": "appetite",
        "level": 32
    },
    {
        "character": "便秘",
        "kana": "べんぴ",
        "meaning": "constipation",
        "level": 32
    },
    {
        "character": "英訳",
        "kana": "えいやく",
        "meaning": "english translation",
        "level": 32
    },
    {
        "character": "秘密",
        "kana": "ひみつ",
        "meaning": "secret, a secret",
        "level": 32
    },
    {
        "character": "厳しい",
        "kana": "きびしい",
        "meaning": "strict",
        "level": 32
    },
    {
        "character": "訳語",
        "kana": "やくご",
        "meaning": "translated term",
        "level": 32
    },
    {
        "character": "ゆで卵",
        "kana": "ゆでたまご",
        "meaning": "boiled egg",
        "level": 32
    },
    {
        "character": "肉欲",
        "kana": "にくよく",
        "meaning": "carnal desires",
        "level": 32
    },
    {
        "character": "汚水",
        "kana": "おすい",
        "meaning": "dirty water, filthy water, sewage",
        "level": 32
    },
    {
        "character": "傷心",
        "kana": "しょうしん",
        "meaning": "heartbreak",
        "level": 32
    },
    {
        "character": "和訳",
        "kana": "わやく",
        "meaning": "japanese translation",
        "level": 32
    },
    {
        "character": "浮かれる",
        "kana": "うかれる",
        "meaning": "to be happy, to be in high spirits, to feel happy",
        "level": 32
    },
    {
        "character": "越す",
        "kana": "こす",
        "meaning": "to go beyond",
        "level": 32
    },
    {
        "character": "延長する",
        "kana": "えんちょうする",
        "meaning": "to prolong, to extend",
        "level": 32
    },
    {
        "character": "密か",
        "kana": "ひそか",
        "meaning": "secret, private",
        "level": 32
    },
    {
        "character": "訳者",
        "kana": "やくしゃ",
        "meaning": "translator",
        "level": 32
    },
    {
        "character": "貧乏人",
        "kana": "びんぼうにん",
        "meaning": "poor person",
        "level": 32
    },
    {
        "character": "出版する",
        "kana": "しゅっぱんする",
        "meaning": "to publish",
        "level": 32
    },
    {
        "character": "功績",
        "kana": "こうせき",
        "meaning": "achievement, accomplishment",
        "level": 32
    },
    {
        "character": "訳す",
        "kana": "やくす",
        "meaning": "to translate",
        "level": 32
    },
    {
        "character": "暖かい",
        "kana": "あたたかい",
        "meaning": "warm place, warm",
        "level": 32
    },
    {
        "character": "欲求",
        "kana": "よっきゅう",
        "meaning": "wants, desires, personal needs",
        "level": 32
    },
    {
        "character": "飼う",
        "kana": "かう",
        "meaning": "to keep a pet, to raise a pet, to own a pet",
        "level": 32
    },
    {
        "character": "押入れ",
        "kana": "おしいれ",
        "meaning": "closet, wall cubbard, wall cupboard",
        "level": 32
    },
    {
        "character": "背丈",
        "kana": "せたけ",
        "meaning": "stature, height",
        "level": 32
    },
    {
        "character": "意欲",
        "kana": "いよく",
        "meaning": "will, desire, ambition",
        "level": 32
    },
    {
        "character": "火傷",
        "kana": "やけど",
        "meaning": "burn, scald",
        "level": 32
    },
    {
        "character": "今更",
        "kana": "いまさら",
        "meaning": "too late, now",
        "level": 32
    },
    {
        "character": "漏らす",
        "kana": "もらす",
        "meaning": "to leak something, to leak",
        "level": 32
    },
    {
        "character": "出版社",
        "kana": "しゅっぱんしゃ",
        "meaning": "publishing company, publisher",
        "level": 32
    },
    {
        "character": "照り焼き",
        "kana": "てりやき",
        "meaning": "teriyaki",
        "level": 32
    },
    {
        "character": "冷える",
        "kana": "ひえる",
        "meaning": "to be chilled, to get cold",
        "level": 32
    },
    {
        "character": "結婚する",
        "kana": "けっこんする",
        "meaning": "to marry, to get married",
        "level": 32
    },
    {
        "character": "大騒ぎ",
        "kana": "おおさわぎ",
        "meaning": "clamor, uproar, big noise",
        "level": 32
    },
    {
        "character": "志",
        "kana": "こころざし",
        "meaning": "intention, ambition",
        "level": 32
    },
    {
        "character": "桜色",
        "kana": "さくらいろ",
        "meaning": "pink, pink color, pink colour, color pink, colour pink",
        "level": 32
    },
    {
        "character": "永遠",
        "kana": "えいえん",
        "meaning": "forever, eternity, permanence",
        "level": 32
    },
    {
        "character": "永久",
        "kana": "えいきゅう",
        "meaning": "forever, eternity",
        "level": 32
    },
    {
        "character": "眼",
        "kana": "め",
        "meaning": "eyeball",
        "level": 32
    },
    {
        "character": "祖父",
        "kana": "そふ",
        "meaning": "grandfather, grandpa",
        "level": 32
    },
    {
        "character": "成績",
        "kana": "せいせき",
        "meaning": "grades, ranking",
        "level": 32
    },
    {
        "character": "党員",
        "kana": "とういん",
        "meaning": "party member",
        "level": 32
    },
    {
        "character": "自衛",
        "kana": "じえい",
        "meaning": "self defense",
        "level": 32
    },
    {
        "character": "衛生",
        "kana": "えいせい",
        "meaning": "hygiene",
        "level": 32
    },
    {
        "character": "複数",
        "kana": "ふくすう",
        "meaning": "multiple, plural",
        "level": 32
    },
    {
        "character": "複写",
        "kana": "ふくしゃ",
        "meaning": "copying, duplication, copy, duplicate",
        "level": 32
    },
    {
        "character": "雑費",
        "kana": "ざっぴ",
        "meaning": "miscellaneous expenses",
        "level": 32
    },
    {
        "character": "酸っぱい",
        "kana": "すっぱい",
        "meaning": "sour",
        "level": 32
    },
    {
        "character": "酸素",
        "kana": "さんそ",
        "meaning": "oxygen",
        "level": 32
    },
    {
        "character": "銭湯",
        "kana": "せんとう",
        "meaning": "public bath",
        "level": 32
    },
    {
        "character": "傷",
        "kana": "きず",
        "meaning": "wound, damage",
        "level": 32
    },
    {
        "character": "共産党",
        "kana": "きょうさんとう",
        "meaning": "communist party",
        "level": 32
    },
    {
        "character": "厳禁",
        "kana": "げんきん",
        "meaning": "strictly forbidden, strictly prohibited, strict prohibition, ban",
        "level": 32
    },
    {
        "character": "密告",
        "kana": "みっこく",
        "meaning": "secret information",
        "level": 32
    },
    {
        "character": "感染",
        "kana": "かんせん",
        "meaning": "infection, contagion",
        "level": 32
    },
    {
        "character": "伝染病",
        "kana": "でんせんびょう",
        "meaning": "contagious disease",
        "level": 32
    },
    {
        "character": "汚れる",
        "kana": "よごれる",
        "meaning": "to get dirty, to get polluted, to become dirty",
        "level": 32
    },
    {
        "character": "欲しい",
        "kana": "ほしい",
        "meaning": "wanted, to want, desired",
        "level": 32
    },
    {
        "character": "机",
        "kana": "つくえ",
        "meaning": "desk",
        "level": 32
    },
    {
        "character": "訳",
        "kana": "わけ",
        "meaning": "reason",
        "level": 32
    },
    {
        "character": "裏切り",
        "kana": "うらぎり",
        "meaning": "backstab, betrayal",
        "level": 33
    },
    {
        "character": "尊敬",
        "kana": "そんけい",
        "meaning": "respect",
        "level": 33
    },
    {
        "character": "蔵",
        "kana": "くら",
        "meaning": "storehouse",
        "level": 33
    },
    {
        "character": "皇室",
        "kana": "こうしつ",
        "meaning": "imperial palace, imperial household",
        "level": 33
    },
    {
        "character": "拡大",
        "kana": "かくだい",
        "meaning": "zoom, magnification, enlargement, expansion",
        "level": 33
    },
    {
        "character": "服装",
        "kana": "ふくそう",
        "meaning": "attire, dress",
        "level": 33
    },
    {
        "character": "裏",
        "kana": "うら",
        "meaning": "backside",
        "level": 33
    },
    {
        "character": "蒸気",
        "kana": "じょうき",
        "meaning": "steam, vapor",
        "level": 33
    },
    {
        "character": "変装",
        "kana": "へんそう",
        "meaning": "disguise",
        "level": 33
    },
    {
        "character": "雑誌",
        "kana": "ざっし",
        "meaning": "magazine",
        "level": 33
    },
    {
        "character": "果糖",
        "kana": "かとう",
        "meaning": "fructose",
        "level": 33
    },
    {
        "character": "筋肉",
        "kana": "きんにく",
        "meaning": "muscle",
        "level": 33
    },
    {
        "character": "操作",
        "kana": "そうさ",
        "meaning": "operation, handling",
        "level": 33
    },
    {
        "character": "否決",
        "kana": "ひけつ",
        "meaning": "rejection",
        "level": 33
    },
    {
        "character": "冷蔵庫",
        "kana": "れいぞうこ",
        "meaning": "refrigerator, fridge",
        "level": 33
    },
    {
        "character": "尊い",
        "kana": "とうとい",
        "meaning": "revered, noble, precious",
        "level": 33
    },
    {
        "character": "熟語",
        "kana": "じゅくご",
        "meaning": "compound word, compound kanji, jukugo",
        "level": 33
    },
    {
        "character": "暮らす",
        "kana": "くらす",
        "meaning": "to live, to live one's life",
        "level": 33
    },
    {
        "character": "否",
        "kana": "いな",
        "meaning": "no",
        "level": 33
    },
    {
        "character": "異性",
        "kana": "いせい",
        "meaning": "opposite sex, opposite gender",
        "level": 33
    },
    {
        "character": "編集する",
        "kana": "へんしゅうする",
        "meaning": "to edit",
        "level": 33
    },
    {
        "character": "開閉",
        "kana": "かいへい",
        "meaning": "opening and closing, opening and shutting",
        "level": 33
    },
    {
        "character": "著作",
        "kana": "ちょさく",
        "meaning": "writing, authorship",
        "level": 33
    },
    {
        "character": "似合う",
        "kana": "にあう",
        "meaning": "to suit, to match",
        "level": 33
    },
    {
        "character": "窓",
        "kana": "まど",
        "meaning": "window",
        "level": 33
    },
    {
        "character": "驚かす",
        "kana": "おどろかす",
        "meaning": "to surprise, to shock, to astonish",
        "level": 33
    },
    {
        "character": "納入",
        "kana": "のうにゅう",
        "meaning": "payment, supply",
        "level": 33
    },
    {
        "character": "乾かす",
        "kana": "かわかす",
        "meaning": "to dry something, to dry",
        "level": 33
    },
    {
        "character": "離す",
        "kana": "はなす",
        "meaning": "to separate, to keep apart",
        "level": 33
    },
    {
        "character": "宝",
        "kana": "たから",
        "meaning": "treasure",
        "level": 33
    },
    {
        "character": "諸",
        "kana": "しょ",
        "meaning": "various",
        "level": 33
    },
    {
        "character": "野暮",
        "kana": "やぼ",
        "meaning": "unrefined, rustic, stupid",
        "level": 33
    },
    {
        "character": "熟れる",
        "kana": "うれる",
        "meaning": "to ripen",
        "level": 33
    },
    {
        "character": "砂",
        "kana": "すな",
        "meaning": "sand, grains",
        "level": 33
    },
    {
        "character": "異状",
        "kana": "いじょう",
        "meaning": "abnormality, something wrong",
        "level": 33
    },
    {
        "character": "無糖",
        "kana": "むとう",
        "meaning": "sugar free, unsweetened",
        "level": 33
    },
    {
        "character": "裏通り",
        "kana": "うらどおり",
        "meaning": "alley, back street",
        "level": 33
    },
    {
        "character": "灰",
        "kana": "はい",
        "meaning": "ash, ashes",
        "level": 33
    },
    {
        "character": "装置",
        "kana": "そうち",
        "meaning": "equipment, device, apparatus",
        "level": 33
    },
    {
        "character": "盛る",
        "kana": "もる",
        "meaning": "to heap up, to serve food",
        "level": 33
    },
    {
        "character": "灰皿",
        "kana": "はいざら",
        "meaning": "ashtray",
        "level": 33
    },
    {
        "character": "装い",
        "kana": "よそおい",
        "meaning": "attire, dress, garb",
        "level": 33
    },
    {
        "character": "著者",
        "kana": "ちょしゃ",
        "meaning": "author",
        "level": 33
    },
    {
        "character": "裏口",
        "kana": "うらぐち",
        "meaning": "back door, rear entrance",
        "level": 33
    },
    {
        "character": "蒸れる",
        "kana": "むれる",
        "meaning": "to be humid",
        "level": 33
    },
    {
        "character": "操",
        "kana": "みさお",
        "meaning": "chastity, virginity",
        "level": 33
    },
    {
        "character": "皇太子",
        "kana": "こうたいし",
        "meaning": "crown prince",
        "level": 33
    },
    {
        "character": "否定",
        "kana": "ひてい",
        "meaning": "denial",
        "level": 33
    },
    {
        "character": "砂漠",
        "kana": "さばく",
        "meaning": "desert",
        "level": 33
    },
    {
        "character": "裏切る",
        "kana": "うらぎる",
        "meaning": "to backstab, to betray",
        "level": 33
    },
    {
        "character": "物真似",
        "kana": "ものまね",
        "meaning": "impersonation",
        "level": 33
    },
    {
        "character": "除いて",
        "kana": "のぞいて",
        "meaning": "except",
        "level": 33
    },
    {
        "character": "忠実",
        "kana": "ちゅうじつ",
        "meaning": "faithful, devoted, loyal",
        "level": 33
    },
    {
        "character": "垂らす",
        "kana": "たらす",
        "meaning": "to dangle something, to dangle",
        "level": 33
    },
    {
        "character": "小麦粉",
        "kana": "こむぎこ",
        "meaning": "flour",
        "level": 33
    },
    {
        "character": "閉店",
        "kana": "へいてん",
        "meaning": "store closed, closed store",
        "level": 33
    },
    {
        "character": "筋",
        "kana": "すじ",
        "meaning": "tendon",
        "level": 33
    },
    {
        "character": "閉める",
        "kana": "しめる",
        "meaning": "to close, to shut",
        "level": 33
    },
    {
        "character": "垂直",
        "kana": "すいちょく",
        "meaning": "vertical, perpendicular",
        "level": 33
    },
    {
        "character": "敬語",
        "kana": "けいご",
        "meaning": "honorific, term of respect, keigo",
        "level": 33
    },
    {
        "character": "皇族",
        "kana": "こうぞく",
        "meaning": "imperial family, member of the imperial family",
        "level": 33
    },
    {
        "character": "宝石",
        "kana": "ほうせき",
        "meaning": "jewel",
        "level": 33
    },
    {
        "character": "国宝",
        "kana": "こくほう",
        "meaning": "national treasure, nic cage",
        "level": 33
    },
    {
        "character": "異義",
        "kana": "いぎ",
        "meaning": "different meaning",
        "level": 33
    },
    {
        "character": "地蔵",
        "kana": "じぞう",
        "meaning": "jizo, jizou",
        "level": 33
    },
    {
        "character": "成熟",
        "kana": "せいじゅく",
        "meaning": "ripen, mature, ripeness, maturity",
        "level": 33
    },
    {
        "character": "拡張",
        "kana": "かくちょう",
        "meaning": "enlargement, expansion, extension",
        "level": 33
    },
    {
        "character": "編集者",
        "kana": "へんしゅうしゃ",
        "meaning": "editor",
        "level": 33
    },
    {
        "character": "掃除する",
        "kana": "そうじする",
        "meaning": "to clean",
        "level": 33
    },
    {
        "character": "泥棒",
        "kana": "どろぼう",
        "meaning": "robber, burglar",
        "level": 33
    },
    {
        "character": "簡単",
        "kana": "かんたん",
        "meaning": "simple, easy, simply",
        "level": 33
    },
    {
        "character": "散歩する",
        "kana": "さんぽする",
        "meaning": "to go for a walk, to go for a stroll, to take a walk, to take a stroll",
        "level": 33
    },
    {
        "character": "散らかす",
        "kana": "ちらかす",
        "meaning": "to scatter",
        "level": 33
    },
    {
        "character": "貨物船",
        "kana": "かもつせん",
        "meaning": "freighter, freight ship",
        "level": 33
    },
    {
        "character": "掃除機",
        "kana": "そうじき",
        "meaning": "vacuum cleaner",
        "level": 33
    },
    {
        "character": "華々しい",
        "kana": "はなばなしい",
        "meaning": "gorgeous, flamboyant, brilliant, remarkable",
        "level": 33
    },
    {
        "character": "墓場",
        "kana": "はかば",
        "meaning": "graveyard, cemetery",
        "level": 33
    },
    {
        "character": "窓口",
        "kana": "まどぐち",
        "meaning": "ticket window",
        "level": 33
    },
    {
        "character": "宣伝",
        "kana": "せんでん",
        "meaning": "propaganda, advertising",
        "level": 33
    },
    {
        "character": "宣言",
        "kana": "せんげん",
        "meaning": "proclamation, declaration",
        "level": 33
    },
    {
        "character": "拡がる",
        "kana": "ひろがる",
        "meaning": "to extend, to spread",
        "level": 33
    },
    {
        "character": "忠告",
        "kana": "ちゅうこく",
        "meaning": "advice, admonishment",
        "level": 33
    },
    {
        "character": "漠然",
        "kana": "ばくぜん",
        "meaning": "vague",
        "level": 33
    },
    {
        "character": "操る",
        "kana": "あやつる",
        "meaning": "to manipulate",
        "level": 33
    },
    {
        "character": "肺がん",
        "kana": "はいがん",
        "meaning": "lung cancer",
        "level": 33
    },
    {
        "character": "体操",
        "kana": "たいそう",
        "meaning": "calisthenics, gymnastics",
        "level": 33
    },
    {
        "character": "灰色",
        "kana": "はいいろ",
        "meaning": "gray, grey, gray color, grey color, grey colour, gray colour",
        "level": 33
    },
    {
        "character": "未熟",
        "kana": "みじゅく",
        "meaning": "not yet good at, not good at",
        "level": 33
    },
    {
        "character": "異なる",
        "kana": "ことなる",
        "meaning": "to differ",
        "level": 33
    },
    {
        "character": "天皇",
        "kana": "てんのう",
        "meaning": "emperor of japan, emperor",
        "level": 33
    },
    {
        "character": "砂糖",
        "kana": "さとう",
        "meaning": "sugar",
        "level": 33
    },
    {
        "character": "納める",
        "kana": "おさめる",
        "meaning": "to supply, to deliver, to pay",
        "level": 33
    },
    {
        "character": "収納",
        "kana": "しゅうのう",
        "meaning": "storage",
        "level": 33
    },
    {
        "character": "肺",
        "kana": "はい",
        "meaning": "lung",
        "level": 33
    },
    {
        "character": "肺病",
        "kana": "はいびょう",
        "meaning": "lung disease",
        "level": 33
    },
    {
        "character": "著しい",
        "kana": "いちじるしい",
        "meaning": "remarkable, marked",
        "level": 33
    },
    {
        "character": "賃貸",
        "kana": "ちんたい",
        "meaning": "rental",
        "level": 33
    },
    {
        "character": "諸君",
        "kana": "しょくん",
        "meaning": "gentlemen, my friends",
        "level": 33
    },
    {
        "character": "家賃",
        "kana": "やちん",
        "meaning": "house rent, rent",
        "level": 33
    },
    {
        "character": "沿岸",
        "kana": "えんがん",
        "meaning": "coast, shore",
        "level": 34
    },
    {
        "character": "豆",
        "kana": "まめ",
        "meaning": "beans",
        "level": 34
    },
    {
        "character": "悲劇",
        "kana": "ひげき",
        "meaning": "tragedy",
        "level": 34
    },
    {
        "character": "牛丼",
        "kana": "ぎゅうどん",
        "meaning": "beef bowl, beef rice bowl",
        "level": 34
    },
    {
        "character": "劇的",
        "kana": "げきてき",
        "meaning": "dramatic",
        "level": 34
    },
    {
        "character": "通勤",
        "kana": "つうきん",
        "meaning": "commute",
        "level": 34
    },
    {
        "character": "聖書",
        "kana": "せいしょ",
        "meaning": "bible",
        "level": 34
    },
    {
        "character": "聖地",
        "kana": "せいち",
        "meaning": "holy land, holy ground",
        "level": 34
    },
    {
        "character": "肺臓",
        "kana": "はいぞう",
        "meaning": "lung",
        "level": 34
    },
    {
        "character": "内臓",
        "kana": "ないぞう",
        "meaning": "internal organ",
        "level": 34
    },
    {
        "character": "誤算",
        "kana": "ごさん",
        "meaning": "miscalculation",
        "level": 34
    },
    {
        "character": "誤字",
        "kana": "ごじ",
        "meaning": "typo",
        "level": 34
    },
    {
        "character": "じゃが芋",
        "kana": "じゃがいも",
        "meaning": "white potato, irish potato",
        "level": 34
    },
    {
        "character": "劇団",
        "kana": "げきだん",
        "meaning": "drama troupe",
        "level": 34
    },
    {
        "character": "歓迎",
        "kana": "かんげい",
        "meaning": "a welcome, welcome",
        "level": 34
    },
    {
        "character": "小豆",
        "kana": "あずき",
        "meaning": "azuki beans, adzuki beans",
        "level": 34
    },
    {
        "character": "爪",
        "kana": "つめ",
        "meaning": "claw, nail, talon, hoof",
        "level": 34
    },
    {
        "character": "沿海",
        "kana": "えんかい",
        "meaning": "coastal waters, coast",
        "level": 34
    },
    {
        "character": "聖日",
        "kana": "せいじつ",
        "meaning": "holy day",
        "level": 34
    },
    {
        "character": "推薦",
        "kana": "すいせん",
        "meaning": "recommendation",
        "level": 34
    },
    {
        "character": "磁気",
        "kana": "じき",
        "meaning": "magnetism",
        "level": 34
    },
    {
        "character": "爪切り",
        "kana": "つめきり",
        "meaning": "nail clipper",
        "level": 34
    },
    {
        "character": "込める",
        "kana": "こめる",
        "meaning": "to include",
        "level": 34
    },
    {
        "character": "追い越す",
        "kana": "おいこす",
        "meaning": "to overtake",
        "level": 34
    },
    {
        "character": "腐る",
        "kana": "くさる",
        "meaning": "to rot",
        "level": 34
    },
    {
        "character": "幕",
        "kana": "まく",
        "meaning": "curtain",
        "level": 34
    },
    {
        "character": "損",
        "kana": "そん",
        "meaning": "disadvantage, handicap, loss",
        "level": 34
    },
    {
        "character": "字幕",
        "kana": "じまく",
        "meaning": "subtitles",
        "level": 34
    },
    {
        "character": "劇場",
        "kana": "げきじょう",
        "meaning": "theater, theatre",
        "level": 34
    },
    {
        "character": "純毛",
        "kana": "じゅんもう",
        "meaning": "all wool",
        "level": 34
    },
    {
        "character": "複数形",
        "kana": "ふくすうけい",
        "meaning": "plural",
        "level": 34
    },
    {
        "character": "傷つく",
        "kana": "きずつく",
        "meaning": "to get hurt",
        "level": 34
    },
    {
        "character": "兄貴",
        "kana": "あにき",
        "meaning": "older brother, big brother, elder brother, one's senior",
        "level": 34
    },
    {
        "character": "言い訳",
        "kana": "いいわけ",
        "meaning": "excuse, explanation",
        "level": 34
    },
    {
        "character": "誤解",
        "kana": "ごかい",
        "meaning": "misunderstanding",
        "level": 34
    },
    {
        "character": "誤用",
        "kana": "ごよう",
        "meaning": "misuse",
        "level": 34
    },
    {
        "character": "込んでいる",
        "kana": "こんでいる",
        "meaning": "to be crowded",
        "level": 34
    },
    {
        "character": "沿線",
        "kana": "えんせん",
        "meaning": "along the train line",
        "level": 34
    },
    {
        "character": "興味がない",
        "kana": "きょうみがない",
        "meaning": "no interest, not interested",
        "level": 34
    },
    {
        "character": "詰め込む",
        "kana": "つめこむ",
        "meaning": "to stuff, to cram",
        "level": 34
    },
    {
        "character": "降参",
        "kana": "こうさん",
        "meaning": "surrender",
        "level": 34
    },
    {
        "character": "承認",
        "kana": "しょうにん",
        "meaning": "approval",
        "level": 34
    },
    {
        "character": "神聖",
        "kana": "しんせい",
        "meaning": "holiness, holy",
        "level": 34
    },
    {
        "character": "推理",
        "kana": "すいり",
        "meaning": "reasoning, inference",
        "level": 34
    },
    {
        "character": "焼き芋",
        "kana": "やきいも",
        "meaning": "roast potato, baked potato",
        "level": 34
    },
    {
        "character": "拝見する",
        "kana": "はいけんする",
        "meaning": "to have a look at, to see",
        "level": 34
    },
    {
        "character": "芋",
        "kana": "いも",
        "meaning": "potato",
        "level": 34
    },
    {
        "character": "縮まる",
        "kana": "ちぢまる, ちじまる",
        "meaning": "to shrink, to contract",
        "level": 34
    },
    {
        "character": "縮小",
        "kana": "しゅくしょう",
        "meaning": "reduction, cut",
        "level": 34
    },
    {
        "character": "縦",
        "kana": "たて",
        "meaning": "vertical",
        "level": 34
    },
    {
        "character": "粋",
        "kana": "いき",
        "meaning": "stylish",
        "level": 34
    },
    {
        "character": "磁場",
        "kana": "じば",
        "meaning": "magnetic field",
        "level": 34
    },
    {
        "character": "発射する",
        "kana": "はっしゃする",
        "meaning": "to launch, to fire",
        "level": 34
    },
    {
        "character": "祖父母",
        "kana": "そふぼ",
        "meaning": "grandparents",
        "level": 34
    },
    {
        "character": "書き込む",
        "kana": "かきこむ",
        "meaning": "to fill out, to write in",
        "level": 34
    },
    {
        "character": "申し込む",
        "kana": "もうしこむ",
        "meaning": "to apply, to submit an application",
        "level": 34
    },
    {
        "character": "劇",
        "kana": "げき",
        "meaning": "drama, play, show",
        "level": 34
    },
    {
        "character": "奴",
        "kana": "やつ",
        "meaning": "dude, guy",
        "level": 34
    },
    {
        "character": "汚す",
        "kana": "よごす",
        "meaning": "to make dirty, to make something dirty",
        "level": 34
    },
    {
        "character": "投げ捨てる",
        "kana": "なげすてる",
        "meaning": "to throw away",
        "level": 34
    },
    {
        "character": "腐敗",
        "kana": "ふはい",
        "meaning": "decomposition, decay",
        "level": 34
    },
    {
        "character": "常勤",
        "kana": "じょうきん",
        "meaning": "full time employment, full time",
        "level": 34
    },
    {
        "character": "源氏",
        "kana": "げんじ",
        "meaning": "genji",
        "level": 34
    },
    {
        "character": "枝",
        "kana": "えだ",
        "meaning": "branch",
        "level": 34
    },
    {
        "character": "源",
        "kana": "みなもと",
        "meaning": "ground spring, source, origin",
        "level": 34
    },
    {
        "character": "不純",
        "kana": "ふじゅん",
        "meaning": "impure",
        "level": 34
    },
    {
        "character": "納豆",
        "kana": "なっとう",
        "meaning": "natto, fermented soybeans",
        "level": 34
    },
    {
        "character": "染まる",
        "kana": "そまる",
        "meaning": "to be dyed",
        "level": 34
    },
    {
        "character": "発揮する",
        "kana": "はっきする",
        "meaning": "to exhibit, to demonstrate",
        "level": 34
    },
    {
        "character": "降る",
        "kana": "ふる",
        "meaning": "to fall, to come down",
        "level": 34
    },
    {
        "character": "縦書",
        "kana": "たてがき",
        "meaning": "vertical writing, vertical style writing",
        "level": 34
    },
    {
        "character": "黒幕",
        "kana": "くろまく",
        "meaning": "wirepuller, mastermind, black curtain, dick cheney",
        "level": 34
    },
    {
        "character": "貴様",
        "kana": "きさま",
        "meaning": "you",
        "level": 34
    },
    {
        "character": "震源地",
        "kana": "しんげんち",
        "meaning": "epicenter, epicentre",
        "level": 34
    },
    {
        "character": "歓楽街",
        "kana": "かんらくがい",
        "meaning": "pleasure quarter",
        "level": 34
    },
    {
        "character": "丼",
        "kana": "どんぶり",
        "meaning": "rice bowl",
        "level": 34
    },
    {
        "character": "注射",
        "kana": "ちゅうしゃ",
        "meaning": "shot, injection",
        "level": 34
    },
    {
        "character": "単純",
        "kana": "たんじゅん",
        "meaning": "simple",
        "level": 34
    },
    {
        "character": "染み",
        "kana": "しみ",
        "meaning": "stain, a stain",
        "level": 34
    },
    {
        "character": "損なう",
        "kana": "そこなう",
        "meaning": "to harm, to injure",
        "level": 34
    },
    {
        "character": "全損",
        "kana": "ぜんそん",
        "meaning": "total loss",
        "level": 34
    },
    {
        "character": "賛成する",
        "kana": "さんせいする",
        "meaning": "to agree, to support",
        "level": 34
    },
    {
        "character": "血液型",
        "kana": "けつえきがた",
        "meaning": "blood type, blood group",
        "level": 34
    },
    {
        "character": "降車",
        "kana": "こうしゃ",
        "meaning": "getting off a train, get off a train, getting off the train, get off the train",
        "level": 34
    },
    {
        "character": "承知",
        "kana": "しょうち",
        "meaning": "consent, know",
        "level": 34
    },
    {
        "character": "推定",
        "kana": "すいてい",
        "meaning": "estimate, estimation, assumption",
        "level": 34
    },
    {
        "character": "人込み",
        "kana": "ひとごみ",
        "meaning": "crowd of people, crowded, crowded with people",
        "level": 34
    },
    {
        "character": "大損",
        "kana": "おおぞん",
        "meaning": "heavy loss, big loss",
        "level": 34
    },
    {
        "character": "薦める",
        "kana": "すすめる",
        "meaning": "to recommend",
        "level": 34
    },
    {
        "character": "心臓",
        "kana": "しんぞう",
        "meaning": "heart",
        "level": 34
    },
    {
        "character": "反射",
        "kana": "はんしゃ",
        "meaning": "reflection",
        "level": 34
    },
    {
        "character": "引っ越す",
        "kana": "ひっこす",
        "meaning": "to move, to move homes",
        "level": 34
    },
    {
        "character": "飼い主",
        "kana": "かいぬし",
        "meaning": "pet owner",
        "level": 34
    },
    {
        "character": "傷つける",
        "kana": "きずつける",
        "meaning": "to hurt someone, to injure, to wound, to scratch, to damage",
        "level": 34
    },
    {
        "character": "使い捨て",
        "kana": "つかいすて",
        "meaning": "disposable",
        "level": 34
    },
    {
        "character": "飛び込み自殺",
        "kana": "とびこみじさつ",
        "meaning": "suicide by train",
        "level": 34
    },
    {
        "character": "紅",
        "kana": "べに, くれない",
        "meaning": "deep red, dark red",
        "level": 34
    },
    {
        "character": "貴い",
        "kana": "とうとい",
        "meaning": "valuable, sacred",
        "level": 34
    },
    {
        "character": "純粋",
        "kana": "じゅんすい",
        "meaning": "pure, genuine",
        "level": 34
    },
    {
        "character": "貴族",
        "kana": "きぞく",
        "meaning": "the nobility, a noble",
        "level": 34
    },
    {
        "character": "うなぎ丼",
        "kana": "うなぎどん",
        "meaning": "eel bowl, eel rice bowl",
        "level": 34
    },
    {
        "character": "奴隷",
        "kana": "どれい",
        "meaning": "slave",
        "level": 34
    },
    {
        "character": "吐く",
        "kana": "はく",
        "meaning": "to puke, to throw up, to barf",
        "level": 34
    },
    {
        "character": "損害",
        "kana": "そんがい",
        "meaning": "damage, injury",
        "level": 34
    },
    {
        "character": "縦横",
        "kana": "たてよこ, じゅうおう",
        "meaning": "length and width, vertical and horizontal",
        "level": 34
    },
    {
        "character": "磁石",
        "kana": "じしゃく",
        "meaning": "magnet, a magnet",
        "level": 34
    },
    {
        "character": "紅茶",
        "kana": "こうちゃ",
        "meaning": "black tea",
        "level": 34
    },
    {
        "character": "指揮",
        "kana": "しき",
        "meaning": "command, lead",
        "level": 34
    },
    {
        "character": "勤める",
        "kana": "つとめる",
        "meaning": "to be employed at, to work for",
        "level": 34
    },
    {
        "character": "放射",
        "kana": "ほうしゃ",
        "meaning": "radiation",
        "level": 34
    },
    {
        "character": "拝む",
        "kana": "おがむ",
        "meaning": "to worship, to pray to",
        "level": 34
    },
    {
        "character": "自薦",
        "kana": "じせん",
        "meaning": "recommendation",
        "level": 34
    },
    {
        "character": "沿う",
        "kana": "そう",
        "meaning": "to run alongside, to run parallel to",
        "level": 34
    },
    {
        "character": "腐食",
        "kana": "ふしょく",
        "meaning": "corrosion",
        "level": 34
    },
    {
        "character": "電源",
        "kana": "でんげん",
        "meaning": "power source, light socket",
        "level": 34
    },
    {
        "character": "歌劇",
        "kana": "かげき",
        "meaning": "opera",
        "level": 34
    },
    {
        "character": "承る",
        "kana": "うけたまわる",
        "meaning": "to consent, to hear, to be informed, to listen to",
        "level": 34
    },
    {
        "character": "刻む",
        "kana": "きざむ",
        "meaning": "to carve, to cut up",
        "level": 34
    },
    {
        "character": "時刻表",
        "kana": "じこくひょう",
        "meaning": "timetable, schedule",
        "level": 34
    },
    {
        "character": "深刻",
        "kana": "しんこく",
        "meaning": "serious, grave",
        "level": 34
    },
    {
        "character": "喜劇",
        "kana": "きげき",
        "meaning": "comedy",
        "level": 34
    },
    {
        "character": "眼鏡",
        "kana": "めがね",
        "meaning": "glasses, eyeglasses",
        "level": 34
    },
    {
        "character": "汁",
        "kana": "しる",
        "meaning": "soup",
        "level": 35
    },
    {
        "character": "測る",
        "kana": "はかる",
        "meaning": "to measure, to measure scientifically",
        "level": 35
    },
    {
        "character": "講演",
        "kana": "こうえん",
        "meaning": "lecture, address",
        "level": 35
    },
    {
        "character": "遅延",
        "kana": "ちえん",
        "meaning": "delay",
        "level": 35
    },
    {
        "character": "遅れる",
        "kana": "おくれる",
        "meaning": "to be late",
        "level": 35
    },
    {
        "character": "閉じる",
        "kana": "とじる",
        "meaning": "to shut, to close",
        "level": 35
    },
    {
        "character": "滞る",
        "kana": "とどこおる",
        "meaning": "to be overdue",
        "level": 35
    },
    {
        "character": "入獄",
        "kana": "にゅうごく",
        "meaning": "imprisonment",
        "level": 35
    },
    {
        "character": "長寿",
        "kana": "ちょうじゅ",
        "meaning": "long life, longevity",
        "level": 35
    },
    {
        "character": "破船",
        "kana": "はせん",
        "meaning": "shipwreck",
        "level": 35
    },
    {
        "character": "三つ編み",
        "kana": "みつあみ",
        "meaning": "braided hair, hair braid",
        "level": 35
    },
    {
        "character": "蒸し返す",
        "kana": "むしかえす",
        "meaning": "to reheat",
        "level": 35
    },
    {
        "character": "紹介",
        "kana": "しょうかい",
        "meaning": "introduction",
        "level": 35
    },
    {
        "character": "海亀",
        "kana": "うみがめ",
        "meaning": "sea turtle",
        "level": 35
    },
    {
        "character": "互い",
        "kana": "たがい",
        "meaning": "mutual, each other, reciprocal, together",
        "level": 35
    },
    {
        "character": "相互",
        "kana": "そうご",
        "meaning": "mutual, reciprocal",
        "level": 35
    },
    {
        "character": "剣道",
        "kana": "けんどう",
        "meaning": "kendo, japanese fencing, way of the sword",
        "level": 35
    },
    {
        "character": "寿司",
        "kana": "すし",
        "meaning": "sushi",
        "level": 35
    },
    {
        "character": "喜寿",
        "kana": "きじゅ",
        "meaning": "seventy seventh birthday",
        "level": 35
    },
    {
        "character": "彼氏",
        "kana": "かれし",
        "meaning": "boyfriend",
        "level": 35
    },
    {
        "character": "恥",
        "kana": "はじ",
        "meaning": "shame, embarrassment, disgrace",
        "level": 35
    },
    {
        "character": "兵舎",
        "kana": "へいしゃ",
        "meaning": "barracks",
        "level": 35
    },
    {
        "character": "遅滞",
        "kana": "ちたい",
        "meaning": "delay",
        "level": 35
    },
    {
        "character": "為に",
        "kana": "ために",
        "meaning": "for the sake of, sake of",
        "level": 35
    },
    {
        "character": "自己",
        "kana": "じこ",
        "meaning": "self, oneself",
        "level": 35
    },
    {
        "character": "有意",
        "kana": "ゆうい",
        "meaning": "significance",
        "level": 35
    },
    {
        "character": "地獄",
        "kana": "じごく",
        "meaning": "hell",
        "level": 35
    },
    {
        "character": "獄内",
        "kana": "ごくない",
        "meaning": "in prison",
        "level": 35
    },
    {
        "character": "青銅",
        "kana": "せいどう",
        "meaning": "bronze",
        "level": 35
    },
    {
        "character": "銅像",
        "kana": "どうぞう",
        "meaning": "copper statue, bronze statue",
        "level": 35
    },
    {
        "character": "彼",
        "kana": "かれ",
        "meaning": "he",
        "level": 35
    },
    {
        "character": "寿命",
        "kana": "じゅみょう",
        "meaning": "lifespan",
        "level": 35
    },
    {
        "character": "彼ら",
        "kana": "かれら",
        "meaning": "they",
        "level": 35
    },
    {
        "character": "泥酔",
        "kana": "でいすい",
        "meaning": "dead drunk, completely drunk",
        "level": 35
    },
    {
        "character": "果汁",
        "kana": "かじゅう",
        "meaning": "fruit juice",
        "level": 35
    },
    {
        "character": "出獄",
        "kana": "しゅつごく",
        "meaning": "release from prison",
        "level": 35
    },
    {
        "character": "炎症",
        "kana": "えんしょう",
        "meaning": "inflammation",
        "level": 35
    },
    {
        "character": "脱獄",
        "kana": "だつごく",
        "meaning": "jailbreak, escape from prison",
        "level": 35
    },
    {
        "character": "湖",
        "kana": "みずうみ",
        "meaning": "lake",
        "level": 35
    },
    {
        "character": "鍋",
        "kana": "なべ",
        "meaning": "pot, hotpot",
        "level": 35
    },
    {
        "character": "醤油",
        "kana": "しょうゆ",
        "meaning": "shoyu, soy sauce, shouyu",
        "level": 35
    },
    {
        "character": "油断",
        "kana": "ゆだん",
        "meaning": "inattentiveness, let your guard down",
        "level": 35
    },
    {
        "character": "原油",
        "kana": "げんゆ",
        "meaning": "crude oil",
        "level": 35
    },
    {
        "character": "行為",
        "kana": "こうい",
        "meaning": "deed",
        "level": 35
    },
    {
        "character": "熊本県",
        "kana": "くまもとけん",
        "meaning": "kumamoto prefecture",
        "level": 35
    },
    {
        "character": "遅刻",
        "kana": "ちこく",
        "meaning": "be late, be tardy, late, tardy",
        "level": 35
    },
    {
        "character": "介入",
        "kana": "かいにゅう",
        "meaning": "intervention",
        "level": 35
    },
    {
        "character": "山中湖",
        "kana": "やまなかこ",
        "meaning": "lake yamanaka, yamanaka lake",
        "level": 35
    },
    {
        "character": "講義",
        "kana": "こうぎ",
        "meaning": "lecture",
        "level": 35
    },
    {
        "character": "一筋",
        "kana": "ひとすじ",
        "meaning": "single mindedly, intently, earnestly",
        "level": 35
    },
    {
        "character": "熊",
        "kana": "くま",
        "meaning": "bear",
        "level": 35
    },
    {
        "character": "恥ずかしい",
        "kana": "はずかしい",
        "meaning": "embarrassing, embarrassed, ashamed",
        "level": 35
    },
    {
        "character": "酢",
        "kana": "す",
        "meaning": "vinegar",
        "level": 35
    },
    {
        "character": "暮らし",
        "kana": "くらし",
        "meaning": "life, living, daily living",
        "level": 35
    },
    {
        "character": "納得",
        "kana": "なっとく",
        "meaning": "consent",
        "level": 35
    },
    {
        "character": "田舎",
        "kana": "いなか",
        "meaning": "countryside, rural",
        "level": 35
    },
    {
        "character": "給油",
        "kana": "きゅうゆ",
        "meaning": "fueling",
        "level": 35
    },
    {
        "character": "杉",
        "kana": "すぎ",
        "meaning": "cedar",
        "level": 35
    },
    {
        "character": "観測",
        "kana": "かんそく",
        "meaning": "observation",
        "level": 35
    },
    {
        "character": "銅山",
        "kana": "どうざん",
        "meaning": "copper mine",
        "level": 35
    },
    {
        "character": "講師",
        "kana": "こうし",
        "meaning": "lecturer, instructor",
        "level": 35
    },
    {
        "character": "炎",
        "kana": "ほのお",
        "meaning": "big fire, flame",
        "level": 35
    },
    {
        "character": "亀",
        "kana": "かめ",
        "meaning": "turtle",
        "level": 35
    },
    {
        "character": "諸々",
        "kana": "もろもろ",
        "meaning": "various, all kinds of",
        "level": 35
    },
    {
        "character": "酔う",
        "kana": "よう",
        "meaning": "to be drunk",
        "level": 35
    },
    {
        "character": "払う",
        "kana": "はらう",
        "meaning": "to pay",
        "level": 35
    },
    {
        "character": "盛り上げる",
        "kana": "もりあげる",
        "meaning": "to heap up, to pile up",
        "level": 35
    },
    {
        "character": "垂れる",
        "kana": "たれる",
        "meaning": "to dangle, to drip",
        "level": 35
    },
    {
        "character": "納まる",
        "kana": "おさまる",
        "meaning": "to be supplied, to be delivered, to be paid",
        "level": 35
    },
    {
        "character": "尊敬する",
        "kana": "そんけいする",
        "meaning": "to respect",
        "level": 35
    },
    {
        "character": "破る",
        "kana": "やぶる",
        "meaning": "to tear, to rip, to break",
        "level": 35
    },
    {
        "character": "蒸し暑い",
        "kana": "むしあつい",
        "meaning": "humid, hot and humid",
        "level": 35
    },
    {
        "character": "否定形",
        "kana": "ひていけい",
        "meaning": "negative tense, negative sentence, negative",
        "level": 35
    },
    {
        "character": "彫刻",
        "kana": "ちょうこく",
        "meaning": "sculpture",
        "level": 35
    },
    {
        "character": "推測",
        "kana": "すいそく",
        "meaning": "conjecture, speculation",
        "level": 35
    },
    {
        "character": "破壊",
        "kana": "はかい",
        "meaning": "destruction, demolition",
        "level": 35
    },
    {
        "character": "福寿",
        "kana": "ふくじゅ",
        "meaning": "happiness and longevity",
        "level": 35
    },
    {
        "character": "真剣",
        "kana": "しんけん",
        "meaning": "serious",
        "level": 35
    },
    {
        "character": "庁舎",
        "kana": "ちょうしゃ",
        "meaning": "government office building",
        "level": 35
    },
    {
        "character": "味噌",
        "kana": "みそ",
        "meaning": "miso",
        "level": 35
    },
    {
        "character": "予測",
        "kana": "よそく",
        "meaning": "prediction",
        "level": 35
    },
    {
        "character": "油田",
        "kana": "ゆでん",
        "meaning": "oil field",
        "level": 35
    },
    {
        "character": "尊敬語",
        "kana": "そんけいご",
        "meaning": "honorific japanese, honorific language, formal japanese, formal language",
        "level": 35
    },
    {
        "character": "宝くじ",
        "kana": "たからくじ",
        "meaning": "lottery, public lottery",
        "level": 35
    },
    {
        "character": "油",
        "kana": "あぶら",
        "meaning": "oil",
        "level": 35
    },
    {
        "character": "厄介",
        "kana": "やっかい",
        "meaning": "troublesome, burdensome, hard to deal with, trouble, burden, nuisance",
        "level": 35
    },
    {
        "character": "酢の物",
        "kana": "すのもの",
        "meaning": "vinegared food, pickled food",
        "level": 35
    },
    {
        "character": "交互",
        "kana": "こうご",
        "meaning": "alternately",
        "level": 35
    },
    {
        "character": "破産",
        "kana": "はさん",
        "meaning": "bankruptcy",
        "level": 35
    },
    {
        "character": "己",
        "kana": "おのれ",
        "meaning": "oneself, myself, i",
        "level": 35
    },
    {
        "character": "装う",
        "kana": "よそおう",
        "meaning": "to feign, to wear, to pretend",
        "level": 35
    },
    {
        "character": "宣言する",
        "kana": "せんげんする",
        "meaning": "to proclaim",
        "level": 35
    },
    {
        "character": "裏切り者",
        "kana": "うらぎりもの",
        "meaning": "traitor",
        "level": 35
    },
    {
        "character": "閉まる",
        "kana": "しまる",
        "meaning": "to be shut, to be closed",
        "level": 35
    },
    {
        "character": "否定する",
        "kana": "ひていする",
        "meaning": "to deny",
        "level": 35
    },
    {
        "character": "同音異義語",
        "kana": "どうおんいぎご",
        "meaning": "homonym",
        "level": 35
    },
    {
        "character": "著作権",
        "kana": "ちょさくけん",
        "meaning": "copyright",
        "level": 35
    },
    {
        "character": "象牙",
        "kana": "ぞうげ",
        "meaning": "ivory, elephant tusk",
        "level": 36
    },
    {
        "character": "変える",
        "kana": "かえる",
        "meaning": "to change",
        "level": 36
    },
    {
        "character": "伸びる",
        "kana": "のびる",
        "meaning": "to be stretched, to get stretched",
        "level": 36
    },
    {
        "character": "降りる",
        "kana": "おりる",
        "meaning": "to get off",
        "level": 36
    },
    {
        "character": "及ぶ",
        "kana": "およぶ",
        "meaning": "to reach, to amount to",
        "level": 36
    },
    {
        "character": "親子丼",
        "kana": "おやこどんぶり, おやこどん",
        "meaning": "parent and child bowl, parent and child rice bowl",
        "level": 36
    },
    {
        "character": "吐き気",
        "kana": "はきけ",
        "meaning": "nausea",
        "level": 36
    },
    {
        "character": "奴ら",
        "kana": "やつら",
        "meaning": "those dudes, those guys",
        "level": 36
    },
    {
        "character": "電磁場",
        "kana": "でんじば",
        "meaning": "electromagnetic field",
        "level": 36
    },
    {
        "character": "降参する",
        "kana": "こうさんする",
        "meaning": "to surrender",
        "level": 36
    },
    {
        "character": "放射能",
        "kana": "ほうしゃのう",
        "meaning": "radioactivity, radiation",
        "level": 36
    },
    {
        "character": "甘党",
        "kana": "あまとう",
        "meaning": "sweet tooth",
        "level": 36
    },
    {
        "character": "損害する",
        "kana": "そんがいする",
        "meaning": "to damage",
        "level": 36
    },
    {
        "character": "枝豆",
        "kana": "えだまめ",
        "meaning": "edamame, steamed soybeans",
        "level": 36
    },
    {
        "character": "豆腐",
        "kana": "とうふ",
        "meaning": "tofu, toufu",
        "level": 36
    },
    {
        "character": "姓名",
        "kana": "せいめい",
        "meaning": "full name",
        "level": 36
    },
    {
        "character": "縄",
        "kana": "なわ",
        "meaning": "rope",
        "level": 36
    },
    {
        "character": "受諾",
        "kana": "じゅだく",
        "meaning": "acceptance",
        "level": 36
    },
    {
        "character": "債券",
        "kana": "さいけん",
        "meaning": "bond",
        "level": 36
    },
    {
        "character": "許諾",
        "kana": "きょだく",
        "meaning": "consent",
        "level": 36
    },
    {
        "character": "承諾",
        "kana": "しょうだく",
        "meaning": "consent, agreement",
        "level": 36
    },
    {
        "character": "諾否",
        "kana": "だくひ",
        "meaning": "consent or refusal, yes or no",
        "level": 36
    },
    {
        "character": "債権",
        "kana": "さいけん",
        "meaning": "debt, liabilities",
        "level": 36
    },
    {
        "character": "献金",
        "kana": "けんきん",
        "meaning": "donation, offering",
        "level": 36
    },
    {
        "character": "勤め",
        "kana": "つとめ",
        "meaning": "duties",
        "level": 36
    },
    {
        "character": "貿易",
        "kana": "ぼうえき",
        "meaning": "trade, commerce",
        "level": 36
    },
    {
        "character": "甘く見る",
        "kana": "あまくみる",
        "meaning": "to not take seriously, to take lightly",
        "level": 36
    },
    {
        "character": "将来",
        "kana": "しょうらい",
        "meaning": "future",
        "level": 36
    },
    {
        "character": "一般",
        "kana": "いっぱん",
        "meaning": "general, common",
        "level": 36
    },
    {
        "character": "沖合",
        "kana": "おきあい",
        "meaning": "open sea",
        "level": 36
    },
    {
        "character": "将軍",
        "kana": "しょうぐん",
        "meaning": "shogun, general, commander, shougun",
        "level": 36
    },
    {
        "character": "復旧",
        "kana": "ふっきゅう",
        "meaning": "restoration, recovery",
        "level": 36
    },
    {
        "character": "主将",
        "kana": "しゅしょう",
        "meaning": "commander, commander in chief, team captain",
        "level": 36
    },
    {
        "character": "連盟",
        "kana": "れんめい",
        "meaning": "league, federation",
        "level": 36
    },
    {
        "character": "核実験",
        "kana": "かくじっけん",
        "meaning": "nuclear test, nuclear bomb test, nuclear testing",
        "level": 36
    },
    {
        "character": "盟約",
        "kana": "めいやく",
        "meaning": "pledge, pact",
        "level": 36
    },
    {
        "character": "遺産",
        "kana": "いさん",
        "meaning": "inheritance",
        "level": 36
    },
    {
        "character": "薦め",
        "kana": "すすめ",
        "meaning": "recommendation, advice",
        "level": 36
    },
    {
        "character": "歌舞伎",
        "kana": "かぶき",
        "meaning": "kabuki",
        "level": 36
    },
    {
        "character": "甘い",
        "kana": "あまい",
        "meaning": "sweet",
        "level": 36
    },
    {
        "character": "核",
        "kana": "かく",
        "meaning": "nucleus",
        "level": 36
    },
    {
        "character": "国債",
        "kana": "こくさい",
        "meaning": "national debt, bonds",
        "level": 36
    },
    {
        "character": "換える",
        "kana": "かえる",
        "meaning": "to exchange",
        "level": 36
    },
    {
        "character": "継父",
        "kana": "けいふ",
        "meaning": "step father",
        "level": 36
    },
    {
        "character": "換気",
        "kana": "かんき",
        "meaning": "ventilation",
        "level": 36
    },
    {
        "character": "変換",
        "kana": "へんかん",
        "meaning": "conversion, change",
        "level": 36
    },
    {
        "character": "口紅",
        "kana": "くちべに",
        "meaning": "lipstick",
        "level": 36
    },
    {
        "character": "旧姓",
        "kana": "きゅうせい",
        "meaning": "maiden name",
        "level": 36
    },
    {
        "character": "奈良",
        "kana": "なら",
        "meaning": "nara",
        "level": 36
    },
    {
        "character": "摘発する",
        "kana": "てきはつする",
        "meaning": "to unmask, to expose",
        "level": 36
    },
    {
        "character": "津波",
        "kana": "つなみ",
        "meaning": "tsunami, tidal wave",
        "level": 36
    },
    {
        "character": "医療",
        "kana": "いりょう",
        "meaning": "medical treatment",
        "level": 36
    },
    {
        "character": "及第",
        "kana": "きゅうだい",
        "meaning": "passing an exam, make the grade, passing the exam",
        "level": 36
    },
    {
        "character": "治療",
        "kana": "ちりょう",
        "meaning": "medical therapy, medical treatment",
        "level": 36
    },
    {
        "character": "信頼",
        "kana": "しんらい",
        "meaning": "reliance, trust",
        "level": 36
    },
    {
        "character": "継ぐ",
        "kana": "つぐ",
        "meaning": "to inherit",
        "level": 36
    },
    {
        "character": "維持",
        "kana": "いじ",
        "meaning": "maintenance, support",
        "level": 36
    },
    {
        "character": "廃止",
        "kana": "はいし",
        "meaning": "abolition, abolishment",
        "level": 36
    },
    {
        "character": "献血",
        "kana": "けんけつ",
        "meaning": "blood donation",
        "level": 36
    },
    {
        "character": "舞踏",
        "kana": "ぶとう",
        "meaning": "dancing",
        "level": 36
    },
    {
        "character": "大将",
        "kana": "たいしょう",
        "meaning": "general, admiral, head, leader",
        "level": 36
    },
    {
        "character": "馬鹿",
        "kana": "ばか",
        "meaning": "idiot, dumb, fool, stupid, absurd",
        "level": 36
    },
    {
        "character": "吐き出す",
        "kana": "はきだす",
        "meaning": "to spit out, to disgorge, to spew out",
        "level": 36
    },
    {
        "character": "核兵器",
        "kana": "かくへいき",
        "meaning": "nuclear weapons",
        "level": 36
    },
    {
        "character": "指摘",
        "kana": "してき",
        "meaning": "pointing out, identification",
        "level": 36
    },
    {
        "character": "廃れる",
        "kana": "すたれる",
        "meaning": "to become obsolete",
        "level": 36
    },
    {
        "character": "踏む",
        "kana": "ふむ",
        "meaning": "to step on, to tread on",
        "level": 36
    },
    {
        "character": "舞う",
        "kana": "まう",
        "meaning": "to dance, to flutter",
        "level": 36
    },
    {
        "character": "維新",
        "kana": "いしん",
        "meaning": "restoration, meiji restoration",
        "level": 36
    },
    {
        "character": "超〜",
        "kana": "ちょう",
        "meaning": "ultra, super, really",
        "level": 36
    },
    {
        "character": "超音波",
        "kana": "ちょうおんぱ",
        "meaning": "ultrasonic wave",
        "level": 36
    },
    {
        "character": "頼む",
        "kana": "たのむ",
        "meaning": "to ask for, to request, to entrust, to rely on",
        "level": 36
    },
    {
        "character": "依頼",
        "kana": "いらい",
        "meaning": "request, entrust",
        "level": 36
    },
    {
        "character": "鹿児島県",
        "kana": "かごしまけん",
        "meaning": "kagoshima prefecture",
        "level": 36
    },
    {
        "character": "鹿",
        "kana": "しか",
        "meaning": "deer",
        "level": 36
    },
    {
        "character": "牙",
        "kana": "きば",
        "meaning": "fang",
        "level": 36
    },
    {
        "character": "超自然的",
        "kana": "ちょうしぜんてき",
        "meaning": "supernatural",
        "level": 36
    },
    {
        "character": "超音速",
        "kana": "ちょうおんそく",
        "meaning": "supersonic speed",
        "level": 36
    },
    {
        "character": "遺体",
        "kana": "いたい",
        "meaning": "corpse, remains",
        "level": 36
    },
    {
        "character": "普及",
        "kana": "ふきゅう",
        "meaning": "diffusion",
        "level": 36
    },
    {
        "character": "縄文",
        "kana": "じょうもん",
        "meaning": "jomon people, joumon people, joumon, jomon, ancient japanese",
        "level": 36
    },
    {
        "character": "神奈川県",
        "kana": "かながわけん",
        "meaning": "kanagawa prefecture",
        "level": 36
    },
    {
        "character": "継承",
        "kana": "けいしょう",
        "meaning": "succession, inheritance",
        "level": 36
    },
    {
        "character": "同盟",
        "kana": "どうめい",
        "meaning": "alliance",
        "level": 36
    },
    {
        "character": "廃絶",
        "kana": "はいぜつ",
        "meaning": "extinction",
        "level": 36
    },
    {
        "character": "摘む",
        "kana": "つむ",
        "meaning": "to pluck, to pick, to prune",
        "level": 36
    },
    {
        "character": "幅",
        "kana": "はば",
        "meaning": "width",
        "level": 36
    },
    {
        "character": "遺失",
        "kana": "いしつ",
        "meaning": "loss",
        "level": 36
    },
    {
        "character": "指揮者",
        "kana": "しきしゃ",
        "meaning": "commander",
        "level": 36
    },
    {
        "character": "源氏物語",
        "kana": "げんじものがたり",
        "meaning": "tale of genji, the tale of genji",
        "level": 36
    },
    {
        "character": "舞台",
        "kana": "ぶたい",
        "meaning": "stage",
        "level": 36
    },
    {
        "character": "遺伝",
        "kana": "いでん",
        "meaning": "heredity",
        "level": 36
    },
    {
        "character": "汚い",
        "kana": "きたない",
        "meaning": "dirty, filthy, foul, unclean",
        "level": 36
    },
    {
        "character": "依存",
        "kana": "いぞん, いそん",
        "meaning": "dependance, reliance",
        "level": 36
    },
    {
        "character": "刑期",
        "kana": "けいき",
        "meaning": "prison term",
        "level": 37
    },
    {
        "character": "爆弾",
        "kana": "ばくだん",
        "meaning": "bomb",
        "level": 37
    },
    {
        "character": "汁物",
        "kana": "しるもの",
        "meaning": "soups, soup",
        "level": 37
    },
    {
        "character": "二日酔い",
        "kana": "ふつかよい",
        "meaning": "hangover",
        "level": 37
    },
    {
        "character": "死刑",
        "kana": "しけい",
        "meaning": "death penalty",
        "level": 37
    },
    {
        "character": "陣営",
        "kana": "じんえい",
        "meaning": "camp",
        "level": 37
    },
    {
        "character": "抗戦",
        "kana": "こうせん",
        "meaning": "resistance",
        "level": 37
    },
    {
        "character": "爆撃",
        "kana": "ばくげき",
        "meaning": "bombing",
        "level": 37
    },
    {
        "character": "葬式",
        "kana": "そうしき",
        "meaning": "funeral",
        "level": 37
    },
    {
        "character": "知恵",
        "kana": "ちえ",
        "meaning": "knowledge, wisdom",
        "level": 37
    },
    {
        "character": "自己紹介",
        "kana": "じこしょうかい",
        "meaning": "self introduction",
        "level": 37
    },
    {
        "character": "抗体",
        "kana": "こうたい",
        "meaning": "antibody",
        "level": 37
    },
    {
        "character": "患う",
        "kana": "わずらう",
        "meaning": "to be afflicted, to be afflicted with illness, to be sick",
        "level": 37
    },
    {
        "character": "弁償",
        "kana": "べんしょう",
        "meaning": "reimbursement, compensation",
        "level": 37
    },
    {
        "character": "募る",
        "kana": "つのる",
        "meaning": "to appeal for, to invite, to raise",
        "level": 37
    },
    {
        "character": "応募",
        "kana": "おうぼ",
        "meaning": "application, subscription",
        "level": 37
    },
    {
        "character": "遺跡",
        "kana": "いせき",
        "meaning": "ruins, historic ruins, remains, historic remains",
        "level": 37
    },
    {
        "character": "船酔い",
        "kana": "ふなよい",
        "meaning": "sea sickness",
        "level": 37
    },
    {
        "character": "彼女",
        "kana": "かのじょ",
        "meaning": "she, girlfriend",
        "level": 37
    },
    {
        "character": "兆候",
        "kana": "ちょうこう",
        "meaning": "sign, indication",
        "level": 37
    },
    {
        "character": "対向する",
        "kana": "たいこうする",
        "meaning": "to counter",
        "level": 37
    },
    {
        "character": "抱く",
        "kana": "だく",
        "meaning": "to hug, to embrace",
        "level": 37
    },
    {
        "character": "葬る",
        "kana": "ほうむる",
        "meaning": "to bury, to inter",
        "level": 37
    },
    {
        "character": "臨む",
        "kana": "のぞむ",
        "meaning": "to face",
        "level": 37
    },
    {
        "character": "聴く",
        "kana": "きく",
        "meaning": "to listen to, to hear, to listen",
        "level": 37
    },
    {
        "character": "抵抗する",
        "kana": "ていこうする",
        "meaning": "to resist",
        "level": 37
    },
    {
        "character": "戻る",
        "kana": "もどる",
        "meaning": "to return, to be returned",
        "level": 37
    },
    {
        "character": "湾",
        "kana": "わん",
        "meaning": "gulf, bay, inlet",
        "level": 37
    },
    {
        "character": "削る",
        "kana": "けずる",
        "meaning": "to whittle down, to shave off",
        "level": 37
    },
    {
        "character": "派遣",
        "kana": "はけん",
        "meaning": "dispatch, deployment",
        "level": 37
    },
    {
        "character": "狙い",
        "kana": "ねらい",
        "meaning": "aim",
        "level": 37
    },
    {
        "character": "塁",
        "kana": "るい",
        "meaning": "baseball base, base",
        "level": 37
    },
    {
        "character": "患者",
        "kana": "かんじゃ",
        "meaning": "a patient, patient, medical patient",
        "level": 37
    },
    {
        "character": "戦闘",
        "kana": "せんとう",
        "meaning": "battle, a battle",
        "level": 37
    },
    {
        "character": "崩す",
        "kana": "くずす",
        "meaning": "to demolish, to break, to pull down, to crumble",
        "level": 37
    },
    {
        "character": "跡",
        "kana": "あと",
        "meaning": "traces, mark",
        "level": 37
    },
    {
        "character": "弾",
        "kana": "たま",
        "meaning": "bullet",
        "level": 37
    },
    {
        "character": "急患",
        "kana": "きゅうかん",
        "meaning": "emergency patient",
        "level": 37
    },
    {
        "character": "証跡",
        "kana": "しょうせき",
        "meaning": "evidence",
        "level": 37
    },
    {
        "character": "契約",
        "kana": "けいやく",
        "meaning": "contract, agreement",
        "level": 37
    },
    {
        "character": "試験地獄",
        "kana": "しけんじごく",
        "meaning": "entrance exam hell, hell of entrance exams",
        "level": 37
    },
    {
        "character": "崩壊",
        "kana": "ほうかい",
        "meaning": "collapse, crumbling, breaking down",
        "level": 37
    },
    {
        "character": "火葬",
        "kana": "かそう",
        "meaning": "cremation",
        "level": 37
    },
    {
        "character": "酔っ払い",
        "kana": "よっぱらい",
        "meaning": "drunk",
        "level": 37
    },
    {
        "character": "執筆",
        "kana": "しっぴつ",
        "meaning": "writing, write for a magazine",
        "level": 37
    },
    {
        "character": "闘志",
        "kana": "とうし",
        "meaning": "fighting spirit",
        "level": 37
    },
    {
        "character": "漁業",
        "kana": "ぎょぎょう",
        "meaning": "fishing industry, fishery",
        "level": 37
    },
    {
        "character": "香川県",
        "kana": "かがわけん",
        "meaning": "kagawa prefecture",
        "level": 37
    },
    {
        "character": "掲載",
        "kana": "けいさい",
        "meaning": "publication, print",
        "level": 37
    },
    {
        "character": "恥知らず",
        "kana": "はじしらず",
        "meaning": "shameless person",
        "level": 37
    },
    {
        "character": "自爆",
        "kana": "じばく",
        "meaning": "suicide bomb",
        "level": 37
    },
    {
        "character": "下旬",
        "kana": "げじゅん",
        "meaning": "last ten days of the month, end of month, end of the month",
        "level": 37
    },
    {
        "character": "削減",
        "kana": "さくげん",
        "meaning": "reduction, cutback",
        "level": 37
    },
    {
        "character": "狙撃",
        "kana": "そげき",
        "meaning": "shooting, sniping",
        "level": 37
    },
    {
        "character": "臨時",
        "kana": "りんじ",
        "meaning": "temporary, provisional",
        "level": 37
    },
    {
        "character": "大抵",
        "kana": "たいてい",
        "meaning": "generally, usually, in most cases",
        "level": 37
    },
    {
        "character": "前兆",
        "kana": "ぜんちょう",
        "meaning": "omen, sign",
        "level": 37
    },
    {
        "character": "給油所",
        "kana": "きゅうゆしょ",
        "meaning": "gas station, filling station",
        "level": 37
    },
    {
        "character": "香港",
        "kana": "ほんこん",
        "meaning": "hong kong",
        "level": 37
    },
    {
        "character": "旬",
        "kana": "しゅん",
        "meaning": "in season",
        "level": 37
    },
    {
        "character": "終身刑",
        "kana": "しゅうしんけい",
        "meaning": "life sentence",
        "level": 37
    },
    {
        "character": "掲示",
        "kana": "けいじ",
        "meaning": "notice, bulletin",
        "level": 37
    },
    {
        "character": "払い",
        "kana": "はらい",
        "meaning": "payment, a payment",
        "level": 37
    },
    {
        "character": "削除",
        "kana": "さくじょ",
        "meaning": "deletion, elimination",
        "level": 37
    },
    {
        "character": "油絵",
        "kana": "あぶらえ",
        "meaning": "oil painting",
        "level": 37
    },
    {
        "character": "甘酢",
        "kana": "あまず",
        "meaning": "sweet vinegar",
        "level": 37
    },
    {
        "character": "恥ずかしがる",
        "kana": "はずかしがる",
        "meaning": "to be shy, to be bashful",
        "level": 37
    },
    {
        "character": "盛り上がる",
        "kana": "もりあがる",
        "meaning": "to swell, to get excited",
        "level": 37
    },
    {
        "character": "破れる",
        "kana": "やぶれる",
        "meaning": "to get torn, to get broken, to get ripped",
        "level": 37
    },
    {
        "character": "紹介状",
        "kana": "しょうかいじょう",
        "meaning": "letter of introduction",
        "level": 37
    },
    {
        "character": "味噌汁",
        "kana": "みそしる",
        "meaning": "miso soup",
        "level": 37
    },
    {
        "character": "跳ぶ",
        "kana": "とぶ",
        "meaning": "to jump, to hop, to leap",
        "level": 37
    },
    {
        "character": "昭和",
        "kana": "しょうわ",
        "meaning": "showa era, shouwa era, showa, shouwa, showa emperor, shouwa emperor",
        "level": 37
    },
    {
        "character": "漁師",
        "kana": "りょうし",
        "meaning": "fisherman",
        "level": 37
    },
    {
        "character": "漁船",
        "kana": "ぎょせん",
        "meaning": "fishing boat, fishing vessel",
        "level": 37
    },
    {
        "character": "刑務所",
        "kana": "けいむしょ",
        "meaning": "jail, prison",
        "level": 37
    },
    {
        "character": "刑罰",
        "kana": "けいばつ",
        "meaning": "punishment, penalty",
        "level": 37
    },
    {
        "character": "刑事",
        "kana": "けいじ",
        "meaning": "police detective, detective, criminal case",
        "level": 37
    },
    {
        "character": "募金",
        "kana": "ぼきん",
        "meaning": "fundraising",
        "level": 37
    },
    {
        "character": "募集",
        "kana": "ぼしゅう",
        "meaning": "recruiting, solicitation",
        "level": 37
    },
    {
        "character": "執る",
        "kana": "とる",
        "meaning": "to take control, to carry out",
        "level": 37
    },
    {
        "character": "執着",
        "kana": "しゅうちゃく",
        "meaning": "attachment to, tenacity, obsessed with, attachment",
        "level": 37
    },
    {
        "character": "塁打",
        "kana": "るいだ",
        "meaning": "base hit, single",
        "level": 37
    },
    {
        "character": "塁審",
        "kana": "るいしん",
        "meaning": "baseball umpire, umpire",
        "level": 37
    },
    {
        "character": "戻す",
        "kana": "もどす",
        "meaning": "to return, to return something",
        "level": 37
    },
    {
        "character": "反抗する",
        "kana": "はんこうする",
        "meaning": "to rebel",
        "level": 37
    },
    {
        "character": "上旬",
        "kana": "じょうじゅん",
        "meaning": "first ten days of the month, beginning of month, beginning of the month",
        "level": 37
    },
    {
        "character": "中旬",
        "kana": "ちゅうじゅん",
        "meaning": "middle ten days of the month, middle of the month, middle of month",
        "level": 37
    },
    {
        "character": "聴力",
        "kana": "ちょうりょく",
        "meaning": "hearing ability",
        "level": 37
    },
    {
        "character": "台湾",
        "kana": "たいわん",
        "meaning": "taiwan",
        "level": 37
    },
    {
        "character": "爆発",
        "kana": "ばくはつ",
        "meaning": "explosion",
        "level": 37
    },
    {
        "character": "爆笑",
        "kana": "ばくしょう",
        "meaning": "explosive laughter",
        "level": 37
    },
    {
        "character": "弾む",
        "kana": "はずむ",
        "meaning": "to bounce",
        "level": 37
    },
    {
        "character": "聴者",
        "kana": "ちょうしゃ",
        "meaning": "listener",
        "level": 37
    },
    {
        "character": "盗聴",
        "kana": "とうちょう",
        "meaning": "wiretapping, bugging",
        "level": 37
    },
    {
        "character": "奇跡",
        "kana": "きせき",
        "meaning": "miracle",
        "level": 37
    },
    {
        "character": "弾丸",
        "kana": "だんがん",
        "meaning": "bullet",
        "level": 37
    },
    {
        "character": "遣う",
        "kana": "つかう",
        "meaning": "to consider, to make use of",
        "level": 37
    },
    {
        "character": "一人暮らし",
        "kana": "ひとりぐらし",
        "meaning": "living alone",
        "level": 37
    },
    {
        "character": "〜鍋",
        "kana": "なべ",
        "meaning": "pot, stew, hotpot",
        "level": 37
    },
    {
        "character": "遅い",
        "kana": "おそい",
        "meaning": "slow, late",
        "level": 37
    },
    {
        "character": "償う",
        "kana": "つぐなう",
        "meaning": "to compensate for, to make up for",
        "level": 37
    },
    {
        "character": "闘う",
        "kana": "たたかう",
        "meaning": "to struggle, to fight",
        "level": 37
    },
    {
        "character": "陣",
        "kana": "じん",
        "meaning": "army base, army camp",
        "level": 37
    },
    {
        "character": "香り",
        "kana": "かおり",
        "meaning": "fragrance, aroma",
        "level": 37
    },
    {
        "character": "香水",
        "kana": "こうすい",
        "meaning": "perfume",
        "level": 37
    },
    {
        "character": "臨海",
        "kana": "りんかい",
        "meaning": "seaside, coastal",
        "level": 37
    },
    {
        "character": "契機",
        "kana": "けいき",
        "meaning": "chance, opportunity",
        "level": 37
    },
    {
        "character": "恵む",
        "kana": "めぐむ",
        "meaning": "to do a favor, to bless",
        "level": 37
    },
    {
        "character": "掲げる",
        "kana": "かかげる",
        "meaning": "to put up a sign, to put up",
        "level": 37
    },
    {
        "character": "紹介する",
        "kana": "しょうかいする",
        "meaning": "to introduce",
        "level": 37
    },
    {
        "character": "老齢",
        "kana": "ろうれい",
        "meaning": "old age",
        "level": 38
    },
    {
        "character": "夕刊",
        "kana": "ゆうかん",
        "meaning": "evening edition",
        "level": 38
    },
    {
        "character": "奈良県",
        "kana": "ならけん",
        "meaning": "nara prefecture",
        "level": 38
    },
    {
        "character": "避難",
        "kana": "ひなん",
        "meaning": "evacuation",
        "level": 38
    },
    {
        "character": "需要",
        "kana": "じゅよう",
        "meaning": "demand",
        "level": 38
    },
    {
        "character": "傾向",
        "kana": "けいこう",
        "meaning": "tendency",
        "level": 38
    },
    {
        "character": "刊行する",
        "kana": "かんこうする",
        "meaning": "to publish",
        "level": 38
    },
    {
        "character": "抑止",
        "kana": "よくし",
        "meaning": "deter, stave off",
        "level": 38
    },
    {
        "character": "緩やか",
        "kana": "ゆるやか",
        "meaning": "loose, mild, gentle",
        "level": 38
    },
    {
        "character": "抑圧",
        "kana": "よくあつ",
        "meaning": "oppression",
        "level": 38
    },
    {
        "character": "内緒",
        "kana": "ないしょ",
        "meaning": "secret, confidential",
        "level": 38
    },
    {
        "character": "描写",
        "kana": "びょうしゃ",
        "meaning": "depiction",
        "level": 38
    },
    {
        "character": "賄賂",
        "kana": "わいろ",
        "meaning": "bribe",
        "level": 38
    },
    {
        "character": "返還",
        "kana": "へんかん",
        "meaning": "return, restoration",
        "level": 38
    },
    {
        "character": "受託",
        "kana": "じゅたく",
        "meaning": "be entrusted with",
        "level": 38
    },
    {
        "character": "対称",
        "kana": "たいしょう",
        "meaning": "symmetry",
        "level": 38
    },
    {
        "character": "冷房",
        "kana": "れいぼう",
        "meaning": "air conditioning",
        "level": 38
    },
    {
        "character": "併殺",
        "kana": "へいさつ",
        "meaning": "double play",
        "level": 38
    },
    {
        "character": "奏楽",
        "kana": "そうがく",
        "meaning": "instrumental music",
        "level": 38
    },
    {
        "character": "緩い",
        "kana": "ゆるい",
        "meaning": "loose",
        "level": 38
    },
    {
        "character": "一般的",
        "kana": "いっぱんてき",
        "meaning": "ordinary, normal, common",
        "level": 38
    },
    {
        "character": "逃げる",
        "kana": "にげる",
        "meaning": "to escape, to flee, to run away",
        "level": 38
    },
    {
        "character": "頼る",
        "kana": "たよる",
        "meaning": "to rely on, to trust, to depend on",
        "level": 38
    },
    {
        "character": "盤",
        "kana": "ばん",
        "meaning": "tray",
        "level": 38
    },
    {
        "character": "馬鹿らしい",
        "kana": "ばからしい",
        "meaning": "absurd",
        "level": 38
    },
    {
        "character": "頼み",
        "kana": "たのみ",
        "meaning": "a favor, favor, a request, request",
        "level": 38
    },
    {
        "character": "避妊",
        "kana": "ひにん",
        "meaning": "birth control, contraception",
        "level": 38
    },
    {
        "character": "舞踏会",
        "kana": "ぶとうかい",
        "meaning": "ball, dance",
        "level": 38
    },
    {
        "character": "基盤",
        "kana": "きばん",
        "meaning": "base, basis, foundation",
        "level": 38
    },
    {
        "character": "縄張り",
        "kana": "なわばり",
        "meaning": "rope off, turf, territory, domain",
        "level": 38
    },
    {
        "character": "円盤",
        "kana": "えんばん",
        "meaning": "disk, flying saucer",
        "level": 38
    },
    {
        "character": "描画",
        "kana": "びょうが",
        "meaning": "drawing, painting",
        "level": 38
    },
    {
        "character": "逃亡",
        "kana": "とうぼう",
        "meaning": "escape, flight",
        "level": 38
    },
    {
        "character": "傾く",
        "kana": "かたむく",
        "meaning": "to be leaned, to be tilted",
        "level": 38
    },
    {
        "character": "致す",
        "kana": "いたす",
        "meaning": "to do",
        "level": 38
    },
    {
        "character": "妊娠する",
        "kana": "にんしんする",
        "meaning": "to be pregnant",
        "level": 38
    },
    {
        "character": "奥",
        "kana": "おく",
        "meaning": "far back, in the back",
        "level": 38
    },
    {
        "character": "致命的",
        "kana": "ちめいてき",
        "meaning": "fatal",
        "level": 38
    },
    {
        "character": "一人称",
        "kana": "いちにんしょう",
        "meaning": "first person",
        "level": 38
    },
    {
        "character": "全般的",
        "kana": "ぜんぱんてき",
        "meaning": "general, overall, across the board",
        "level": 38
    },
    {
        "character": "遺伝子",
        "kana": "いでんし",
        "meaning": "genes",
        "level": 38
    },
    {
        "character": "宜しい",
        "kana": "よろしい",
        "meaning": "good, okay, all right, fine",
        "level": 38
    },
    {
        "character": "一緒",
        "kana": "いっしょ",
        "meaning": "together",
        "level": 38
    },
    {
        "character": "贈る",
        "kana": "おくる",
        "meaning": "to give a present, to give",
        "level": 38
    },
    {
        "character": "緩む",
        "kana": "ゆるむ",
        "meaning": "to loosen",
        "level": 38
    },
    {
        "character": "指摘する",
        "kana": "してきする",
        "meaning": "to point out, to identify",
        "level": 38
    },
    {
        "character": "踏み込む",
        "kana": "ふみこむ",
        "meaning": "to step into, to rush into",
        "level": 38
    },
    {
        "character": "伸ばす",
        "kana": "のばす",
        "meaning": "to stretch something, to stretch",
        "level": 38
    },
    {
        "character": "乗り換える",
        "kana": "のりかえる",
        "meaning": "to transfer, to change trains, to transfer trains",
        "level": 38
    },
    {
        "character": "仮称",
        "kana": "かしょう",
        "meaning": "working name, tentative name",
        "level": 38
    },
    {
        "character": "年齢",
        "kana": "ねんれい",
        "meaning": "years old, age",
        "level": 38
    },
    {
        "character": "明治維新",
        "kana": "めいじいしん",
        "meaning": "meiji restoration",
        "level": 38
    },
    {
        "character": "朝刊",
        "kana": "ちょうかん",
        "meaning": "morning edition",
        "level": 38
    },
    {
        "character": "演奏",
        "kana": "えんそう",
        "meaning": "musical performance, performance",
        "level": 38
    },
    {
        "character": "生還",
        "kana": "せいかん",
        "meaning": "reaching home plate",
        "level": 38
    },
    {
        "character": "還元",
        "kana": "かんげん",
        "meaning": "return to origins, reduction",
        "level": 38
    },
    {
        "character": "お見舞い",
        "kana": "おみまい",
        "meaning": "sympathy visit",
        "level": 38
    },
    {
        "character": "房",
        "kana": "ふさ",
        "meaning": "cluster, tassel, tuft",
        "level": 38
    },
    {
        "character": "維持する",
        "kana": "いじする",
        "meaning": "to maintain",
        "level": 38
    },
    {
        "character": "懸命",
        "kana": "けんめい",
        "meaning": "eager, eagerness",
        "level": 38
    },
    {
        "character": "懸ける",
        "kana": "かける",
        "meaning": "to hang, to suspend, to stake",
        "level": 38
    },
    {
        "character": "及ぼす",
        "kana": "およぼす",
        "meaning": "to exert, to reach to",
        "level": 38
    },
    {
        "character": "貿易会社",
        "kana": "ぼうえきがいしゃ",
        "meaning": "trading firm",
        "level": 38
    },
    {
        "character": "湯豆腐",
        "kana": "ゆどうふ",
        "meaning": "boiled tofu",
        "level": 38
    },
    {
        "character": "繰る",
        "kana": "くる",
        "meaning": "to spin",
        "level": 38
    },
    {
        "character": "抑制",
        "kana": "よくせい",
        "meaning": "control, restrain",
        "level": 38
    },
    {
        "character": "及び",
        "kana": "および",
        "meaning": "as well as",
        "level": 38
    },
    {
        "character": "超す",
        "kana": "こす",
        "meaning": "to exceed, to go over, to surpass",
        "level": 38
    },
    {
        "character": "廃止する",
        "kana": "はいしする",
        "meaning": "to abolish",
        "level": 38
    },
    {
        "character": "沖縄",
        "kana": "おきなわ",
        "meaning": "okinawa",
        "level": 38
    },
    {
        "character": "依頼人",
        "kana": "いらいにん",
        "meaning": "client",
        "level": 38
    },
    {
        "character": "却下",
        "kana": "きゃっか",
        "meaning": "rejection, dismissal",
        "level": 38
    },
    {
        "character": "必需品",
        "kana": "ひつじゅひん",
        "meaning": "necessities, essentials",
        "level": 38
    },
    {
        "character": "高齢者",
        "kana": "こうれいしゃ",
        "meaning": "elderly person, old person",
        "level": 38
    },
    {
        "character": "一致する",
        "kana": "いっちする",
        "meaning": "to match",
        "level": 38
    },
    {
        "character": "避ける",
        "kana": "さける",
        "meaning": "to dodge",
        "level": 38
    },
    {
        "character": "妊婦",
        "kana": "にんぷ",
        "meaning": "pregnant woman",
        "level": 38
    },
    {
        "character": "月刊",
        "kana": "げっかん",
        "meaning": "monthly edition",
        "level": 38
    },
    {
        "character": "日刊",
        "kana": "にっかん",
        "meaning": "daily edition",
        "level": 38
    },
    {
        "character": "伴う",
        "kana": "ともなう",
        "meaning": "to accompany",
        "level": 38
    },
    {
        "character": "同伴する",
        "kana": "どうはんする",
        "meaning": "to accompany",
        "level": 38
    },
    {
        "character": "併合",
        "kana": "へいごう",
        "meaning": "merger",
        "level": 38
    },
    {
        "character": "却って",
        "kana": "かえって",
        "meaning": "on the contrary, instead",
        "level": 38
    },
    {
        "character": "遠慮",
        "kana": "えんりょ",
        "meaning": "restraint, decline",
        "level": 38
    },
    {
        "character": "配慮",
        "kana": "はいりょ",
        "meaning": "consideration, care",
        "level": 38
    },
    {
        "character": "考慮",
        "kana": "こうりょ",
        "meaning": "consideration",
        "level": 38
    },
    {
        "character": "暖房",
        "kana": "だんぼう",
        "meaning": "heating",
        "level": 38
    },
    {
        "character": "扱う",
        "kana": "あつかう",
        "meaning": "to handle, to treat",
        "level": 38
    },
    {
        "character": "選択",
        "kana": "せんたく",
        "meaning": "selection, choice",
        "level": 38
    },
    {
        "character": "描く",
        "kana": "かく, えがく",
        "meaning": "to draw, to sketch",
        "level": 38
    },
    {
        "character": "贈収賄",
        "kana": "ぞうしゅうわい",
        "meaning": "bribery",
        "level": 38
    },
    {
        "character": "委託",
        "kana": "いたく",
        "meaning": "consign, goods for sale, entrust",
        "level": 38
    },
    {
        "character": "託す",
        "kana": "たくす",
        "meaning": "to entrust",
        "level": 38
    },
    {
        "character": "信託",
        "kana": "しんたく",
        "meaning": "trust, entrusting",
        "level": 38
    },
    {
        "character": "賄う",
        "kana": "まかなう",
        "meaning": "to pay, to cover",
        "level": 38
    },
    {
        "character": "奥さん",
        "kana": "おくさん",
        "meaning": "wife",
        "level": 38
    },
    {
        "character": "崩れる",
        "kana": "くずれる",
        "meaning": "to crumble, to collapse",
        "level": 39
    },
    {
        "character": "削除する",
        "kana": "さくじょする",
        "meaning": "to delete, to eliminate",
        "level": 39
    },
    {
        "character": "補充",
        "kana": "ほじゅう",
        "meaning": "supplement",
        "level": 39
    },
    {
        "character": "片手",
        "kana": "かたて",
        "meaning": "one handed",
        "level": 39
    },
    {
        "character": "枠",
        "kana": "わく",
        "meaning": "frame, limit",
        "level": 39
    },
    {
        "character": "掲載する",
        "kana": "けいさいする",
        "meaning": "to publish, to print",
        "level": 39
    },
    {
        "character": "慎む",
        "kana": "つつしむ",
        "meaning": "to be discreet, to be careful",
        "level": 39
    },
    {
        "character": "雇用",
        "kana": "こよう",
        "meaning": "employment",
        "level": 39
    },
    {
        "character": "仙人",
        "kana": "せんにん",
        "meaning": "hermit, mountain man",
        "level": 39
    },
    {
        "character": "仙台",
        "kana": "せんだい",
        "meaning": "sendai",
        "level": 39
    },
    {
        "character": "跳躍",
        "kana": "ちょうやく",
        "meaning": "jump, leap, bound, skip",
        "level": 39
    },
    {
        "character": "勧める",
        "kana": "すすめる",
        "meaning": "to recommend",
        "level": 39
    },
    {
        "character": "免れる",
        "kana": "まぬかれる",
        "meaning": "to escape from, to avoid",
        "level": 39
    },
    {
        "character": "躍る",
        "kana": "おどる",
        "meaning": "to leap, to jump, to bounce",
        "level": 39
    },
    {
        "character": "小遣い",
        "kana": "こづかい",
        "meaning": "allowance, spending money",
        "level": 39
    },
    {
        "character": "充実",
        "kana": "じゅうじつ",
        "meaning": "fullness, beefing up",
        "level": 39
    },
    {
        "character": "南極圏",
        "kana": "なんきょくけん",
        "meaning": "antarctic circle, antarctica",
        "level": 39
    },
    {
        "character": "片言",
        "kana": "かたこと",
        "meaning": "broken japanese, broken english, broken language",
        "level": 39
    },
    {
        "character": "棋院",
        "kana": "きいん",
        "meaning": "shogi hall, go hall",
        "level": 39
    },
    {
        "character": "雇う",
        "kana": "やとう",
        "meaning": "to employ, to hire",
        "level": 39
    },
    {
        "character": "解雇する",
        "kana": "かいこする",
        "meaning": "to fire someone, to fire",
        "level": 39
    },
    {
        "character": "御覧になる",
        "kana": "ごらんになる",
        "meaning": "to look, to please look",
        "level": 39
    },
    {
        "character": "戻り道",
        "kana": "もどりみち",
        "meaning": "way back, the way back",
        "level": 39
    },
    {
        "character": "鈴",
        "kana": "すず",
        "meaning": "buzzer, small bell",
        "level": 39
    },
    {
        "character": "御飯",
        "kana": "ごはん",
        "meaning": "cooked rice, meal",
        "level": 39
    },
    {
        "character": "水仙",
        "kana": "すいせん",
        "meaning": "daffodil",
        "level": 39
    },
    {
        "character": "銃殺",
        "kana": "じゅうさつ",
        "meaning": "death by shooting",
        "level": 39
    },
    {
        "character": "呼び鈴",
        "kana": "よびりん",
        "meaning": "doorbell",
        "level": 39
    },
    {
        "character": "免状",
        "kana": "めんじょう",
        "meaning": "diploma, license",
        "level": 39
    },
    {
        "character": "鋼",
        "kana": "はがね",
        "meaning": "steel",
        "level": 39
    },
    {
        "character": "甲斐",
        "kana": "かい",
        "meaning": "effect, result, worth",
        "level": 39
    },
    {
        "character": "英語圏",
        "kana": "えいごけん",
        "meaning": "english speaking world",
        "level": 39
    },
    {
        "character": "群れ",
        "kana": "むれ",
        "meaning": "flock",
        "level": 39
    },
    {
        "character": "足跡",
        "kana": "あしあと",
        "meaning": "footprint",
        "level": 39
    },
    {
        "character": "片",
        "kana": "かた",
        "meaning": "fragment",
        "level": 39
    },
    {
        "character": "銃",
        "kana": "じゅう",
        "meaning": "gun, firearm",
        "level": 39
    },
    {
        "character": "本塁打",
        "kana": "ほんるいだ",
        "meaning": "homerun",
        "level": 39
    },
    {
        "character": "要項",
        "kana": "ようこう",
        "meaning": "important points, main points",
        "level": 39
    },
    {
        "character": "跡継ぎ",
        "kana": "あとつぎ",
        "meaning": "heir, heiress, successor",
        "level": 39
    },
    {
        "character": "跳ねる",
        "kana": "はねる",
        "meaning": "to jump, to leap, to hop",
        "level": 39
    },
    {
        "character": "飛躍",
        "kana": "ひやく",
        "meaning": "leaping",
        "level": 39
    },
    {
        "character": "免許",
        "kana": "めんきょ",
        "meaning": "license, certificate, permit",
        "level": 39
    },
    {
        "character": "勧告",
        "kana": "かんこく",
        "meaning": "recommendation",
        "level": 39
    },
    {
        "character": "謙虚",
        "kana": "けんきょ",
        "meaning": "modesty, humility",
        "level": 39
    },
    {
        "character": "稲田",
        "kana": "いなだ",
        "meaning": "rice field, rice paddy, paddy field",
        "level": 39
    },
    {
        "character": "圏外",
        "kana": "けんがい",
        "meaning": "out of range",
        "level": 39
    },
    {
        "character": "埼玉県",
        "kana": "さいたまけん",
        "meaning": "saitama prefecture",
        "level": 39
    },
    {
        "character": "短銃",
        "kana": "たんじゅう",
        "meaning": "pistol, revolver",
        "level": 39
    },
    {
        "character": "隆盛",
        "kana": "りゅうせい",
        "meaning": "prosperity",
        "level": 39
    },
    {
        "character": "充電",
        "kana": "じゅうでん",
        "meaning": "recharge",
        "level": 39
    },
    {
        "character": "稲作",
        "kana": "いなさく",
        "meaning": "rice cultivation, rice crop",
        "level": 39
    },
    {
        "character": "福祉",
        "kana": "ふくし",
        "meaning": "welfare, well being",
        "level": 39
    },
    {
        "character": "払い戻す",
        "kana": "はらいもどす",
        "meaning": "to refund",
        "level": 39
    },
    {
        "character": "稲",
        "kana": "いね",
        "meaning": "rice plant",
        "level": 39
    },
    {
        "character": "銃弾",
        "kana": "じゅうだん",
        "meaning": "rifle bullet, bullet",
        "level": 39
    },
    {
        "character": "製鋼",
        "kana": "せいこう",
        "meaning": "steel manufacture",
        "level": 39
    },
    {
        "character": "免税",
        "kana": "めんぜい",
        "meaning": "tax exemption",
        "level": 39
    },
    {
        "character": "壁紙",
        "kana": "かべがみ",
        "meaning": "wallpaper",
        "level": 39
    },
    {
        "character": "枠組み",
        "kana": "わくぐみ",
        "meaning": "frame, framework",
        "level": 39
    },
    {
        "character": "拒否",
        "kana": "きょひ",
        "meaning": "refusal, rejection",
        "level": 39
    },
    {
        "character": "慎重",
        "kana": "しんちょう",
        "meaning": "discreet, careful",
        "level": 39
    },
    {
        "character": "渋い",
        "kana": "しぶい",
        "meaning": "bitter flavor, bitter",
        "level": 39
    },
    {
        "character": "鋼材",
        "kana": "こうざい",
        "meaning": "steel material",
        "level": 39
    },
    {
        "character": "応募する",
        "kana": "おうぼする",
        "meaning": "to apply for, to enlist, to answer an ad",
        "level": 39
    },
    {
        "character": "縄跳び",
        "kana": "なわとび",
        "meaning": "jump rope",
        "level": 39
    },
    {
        "character": "棋士",
        "kana": "きし",
        "meaning": "shogi player, go player",
        "level": 39
    },
    {
        "character": "岐阜",
        "kana": "ぎふ",
        "meaning": "gifu",
        "level": 39
    },
    {
        "character": "募集中",
        "kana": "ぼしゅうちゅう",
        "meaning": "now hiring, now recruiting",
        "level": 39
    },
    {
        "character": "将棋",
        "kana": "しょうぎ",
        "meaning": "shogi, shougi, japanese chess",
        "level": 39
    },
    {
        "character": "弾く",
        "kana": "ひく",
        "meaning": "to play a stringed instrument, to play",
        "level": 39
    },
    {
        "character": "言葉遣い",
        "kana": "ことばづかい",
        "meaning": "choice of words",
        "level": 39
    },
    {
        "character": "狙う",
        "kana": "ねらう",
        "meaning": "to aim at, to aim",
        "level": 39
    },
    {
        "character": "掲示板",
        "kana": "けいじばん",
        "meaning": "bulletin board",
        "level": 39
    },
    {
        "character": "渋滞",
        "kana": "じゅうたい",
        "meaning": "traffic jam, traffic congestion",
        "level": 39
    },
    {
        "character": "取り戻す",
        "kana": "とりもどす",
        "meaning": "to take back",
        "level": 39
    },
    {
        "character": "原子爆弾",
        "kana": "げんしばくだん",
        "meaning": "atomic bomb",
        "level": 39
    },
    {
        "character": "邦人",
        "kana": "ほうじん",
        "meaning": "fellow countryman, japanese national",
        "level": 39
    },
    {
        "character": "邦訳",
        "kana": "ほうやく",
        "meaning": "translation into japanese, translation to japanese",
        "level": 39
    },
    {
        "character": "隆起",
        "kana": "りゅうき",
        "meaning": "protuberance, bulge",
        "level": 39
    },
    {
        "character": "壁",
        "kana": "かべ",
        "meaning": "wall",
        "level": 39
    },
    {
        "character": "片仮名",
        "kana": "かたかな",
        "meaning": "katakana",
        "level": 39
    },
    {
        "character": "片道",
        "kana": "かたみち",
        "meaning": "one way street, one way",
        "level": 39
    },
    {
        "character": "群馬県",
        "kana": "ぐんまけん",
        "meaning": "gunma prefecture",
        "level": 39
    },
    {
        "character": "群集",
        "kana": "ぐんしゅう",
        "meaning": "crowd, multitude",
        "level": 39
    },
    {
        "character": "御免",
        "kana": "ごめん",
        "meaning": "sorry, i beg your pardon",
        "level": 39
    },
    {
        "character": "免除",
        "kana": "めんじょ",
        "meaning": "exemption, exclusion",
        "level": 39
    },
    {
        "character": "勧誘",
        "kana": "かんゆう",
        "meaning": "solicitation, invitation",
        "level": 39
    },
    {
        "character": "埋める",
        "kana": "うめる",
        "meaning": "to bury",
        "level": 39
    },
    {
        "character": "奪う",
        "kana": "うばう",
        "meaning": "to rob, to steal by force",
        "level": 39
    },
    {
        "character": "連邦",
        "kana": "れんぽう",
        "meaning": "commonwealth, federation",
        "level": 39
    },
    {
        "character": "拒む",
        "kana": "こばむ",
        "meaning": "to refuse, to reject",
        "level": 39
    },
    {
        "character": "甲",
        "kana": "こう",
        "meaning": "turtle shell",
        "level": 39
    },
    {
        "character": "譲る",
        "kana": "ゆずる",
        "meaning": "to concede, to hand over, to turn over",
        "level": 39
    },
    {
        "character": "移譲",
        "kana": "いじょう",
        "meaning": "transfer, assignment",
        "level": 39
    },
    {
        "character": "謙譲語",
        "kana": "けんじょうご",
        "meaning": "humble japanese, humble language",
        "level": 39
    },
    {
        "character": "活躍",
        "kana": "かつやく",
        "meaning": "activity, great efforts",
        "level": 39
    },
    {
        "character": "項目",
        "kana": "こうもく",
        "meaning": "clause, entry, data item",
        "level": 39
    },
    {
        "character": "躍進",
        "kana": "やくしん",
        "meaning": "rush, dash, onslaught",
        "level": 39
    },
    {
        "character": "躍動",
        "kana": "やくどう",
        "meaning": "lively motion, throb",
        "level": 39
    },
    {
        "character": "事項",
        "kana": "じこう",
        "meaning": "matter, item, facts",
        "level": 39
    },
    {
        "character": "薄弱",
        "kana": "はくじゃく",
        "meaning": "weakness, feebleness",
        "level": 40
    },
    {
        "character": "褒賞",
        "kana": "ほうしょう",
        "meaning": "medal, prize, reward",
        "level": 40
    },
    {
        "character": "逃す",
        "kana": "のがす",
        "meaning": "to let go, to let escape, to set free",
        "level": 40
    },
    {
        "character": "隣",
        "kana": "となり",
        "meaning": "neighbor, next door neighbor",
        "level": 40
    },
    {
        "character": "近隣",
        "kana": "きんりん",
        "meaning": "neighborhood",
        "level": 40
    },
    {
        "character": "扱い",
        "kana": "あつかい",
        "meaning": "handling, treatment",
        "level": 40
    },
    {
        "character": "隣国",
        "kana": "りんごく",
        "meaning": "neighboring country",
        "level": 40
    },
    {
        "character": "雅致",
        "kana": "がち",
        "meaning": "artistry, good taste, elegance",
        "level": 40
    },
    {
        "character": "奥様",
        "kana": "おくさま",
        "meaning": "your wife, wife, ma'am",
        "level": 40
    },
    {
        "character": "取り扱う",
        "kana": "とりあつかう",
        "meaning": "to manage, to handle",
        "level": 40
    },
    {
        "character": "兼業",
        "kana": "けんぎょう",
        "meaning": "side business, second job, moonlighting",
        "level": 40
    },
    {
        "character": "外堀",
        "kana": "そとぼり",
        "meaning": "outer moat",
        "level": 40
    },
    {
        "character": "携帯",
        "kana": "けいたい",
        "meaning": "portable, cell phone, mobile phone",
        "level": 40
    },
    {
        "character": "兼用",
        "kana": "けんよう",
        "meaning": "combined use, serving two purposes",
        "level": 40
    },
    {
        "character": "電柱",
        "kana": "でんちゅう",
        "meaning": "telephone pole",
        "level": 40
    },
    {
        "character": "内緒話",
        "kana": "ないしょばなし",
        "meaning": "confidential talk, whispering",
        "level": 40
    },
    {
        "character": "頻繁",
        "kana": "ひんぱん",
        "meaning": "incessant, frequent",
        "level": 40
    },
    {
        "character": "〜殿",
        "kana": "どの",
        "meaning": "lord, master, milord",
        "level": 40
    },
    {
        "character": "柱",
        "kana": "はしら",
        "meaning": "pillar",
        "level": 40
    },
    {
        "character": "独唱",
        "kana": "どくしょう",
        "meaning": "solo",
        "level": 40
    },
    {
        "character": "茂る",
        "kana": "しげる",
        "meaning": "to be luxurious, to grow thickly",
        "level": 40
    },
    {
        "character": "携わる",
        "kana": "たずさわる",
        "meaning": "to engage in, to participate, to take part in",
        "level": 40
    },
    {
        "character": "傾ける",
        "kana": "かたむける",
        "meaning": "to lean, to tilt",
        "level": 40
    },
    {
        "character": "敷く",
        "kana": "しく",
        "meaning": "to spread out, to lay out",
        "level": 40
    },
    {
        "character": "戒める",
        "kana": "いましめる",
        "meaning": "to warn, to caution, to admonish",
        "level": 40
    },
    {
        "character": "警戒",
        "kana": "けいかい",
        "meaning": "vigilance, precaution",
        "level": 40
    },
    {
        "character": "座敷",
        "kana": "ざしき",
        "meaning": "tatami room, tatami mat room",
        "level": 40
    },
    {
        "character": "緩める",
        "kana": "ゆるめる",
        "meaning": "to loosen, to relax",
        "level": 40
    },
    {
        "character": "栄誉",
        "kana": "えいよ",
        "meaning": "honor, honour",
        "level": 40
    },
    {
        "character": "優雅",
        "kana": "ゆうが",
        "meaning": "elegance, grace",
        "level": 40
    },
    {
        "character": "衝撃",
        "kana": "しょうげき",
        "meaning": "shock, crash, impact",
        "level": 40
    },
    {
        "character": "排他",
        "kana": "はいた",
        "meaning": "exclusion",
        "level": 40
    },
    {
        "character": "頻度",
        "kana": "ひんど",
        "meaning": "frequency",
        "level": 40
    },
    {
        "character": "新鋭",
        "kana": "しんえい",
        "meaning": "freshly picked, newly produced",
        "level": 40
    },
    {
        "character": "排気",
        "kana": "はいき",
        "meaning": "exhaust, ventilation",
        "level": 40
    },
    {
        "character": "殿様",
        "kana": "とのさま",
        "meaning": "feudal lord",
        "level": 40
    },
    {
        "character": "頻発",
        "kana": "ひんぱつ",
        "meaning": "frequency, frequent occurance",
        "level": 40
    },
    {
        "character": "雅楽",
        "kana": "ががく",
        "meaning": "japanese court music, gagaku",
        "level": 40
    },
    {
        "character": "過敏",
        "kana": "かびん",
        "meaning": "oversensitivity, nervousness",
        "level": 40
    },
    {
        "character": "逃亡者",
        "kana": "とうぼうしゃ",
        "meaning": "refugee",
        "level": 40
    },
    {
        "character": "防腐剤",
        "kana": "ぼうふざい",
        "meaning": "preservative, antiseptic",
        "level": 40
    },
    {
        "character": "吹く",
        "kana": "ふく",
        "meaning": "to blow",
        "level": 40
    },
    {
        "character": "内堀",
        "kana": "うちぼり",
        "meaning": "inner moat",
        "level": 40
    },
    {
        "character": "巡回",
        "kana": "じゅんかい",
        "meaning": "patrol, going around",
        "level": 40
    },
    {
        "character": "薬剤師",
        "kana": "やくざいし",
        "meaning": "pharmacist",
        "level": 40
    },
    {
        "character": "巡礼",
        "kana": "じゅんれい",
        "meaning": "pilgrimage",
        "level": 40
    },
    {
        "character": "駐日",
        "kana": "ちゅうにち",
        "meaning": "resident of japan, stationed in japan",
        "level": 40
    },
    {
        "character": "生殖",
        "kana": "せいしょく",
        "meaning": "reproduction",
        "level": 40
    },
    {
        "character": "繁栄",
        "kana": "はんえい",
        "meaning": "prospering, prosperity",
        "level": 40
    },
    {
        "character": "宜しく",
        "kana": "よろしく",
        "meaning": "best regards, well, properly, suitably",
        "level": 40
    },
    {
        "character": "〜剤",
        "kana": "ざい",
        "meaning": "medicine, dose",
        "level": 40
    },
    {
        "character": "薬剤",
        "kana": "やくざい",
        "meaning": "medicine, drugs",
        "level": 40
    },
    {
        "character": "隣人",
        "kana": "りんじん",
        "meaning": "neighbor",
        "level": 40
    },
    {
        "character": "透明",
        "kana": "とうめい",
        "meaning": "transparent, transparency",
        "level": 40
    },
    {
        "character": "隣家",
        "kana": "りんか",
        "meaning": "neighboring house",
        "level": 40
    },
    {
        "character": "褒める",
        "kana": "ほめる",
        "meaning": "to praise, to compliment",
        "level": 40
    },
    {
        "character": "鋭敏",
        "kana": "えいびん",
        "meaning": "sharpness, quick witted, keenness",
        "level": 40
    },
    {
        "character": "懸かる",
        "kana": "かかる",
        "meaning": "to hang, to depend on, to be at stake",
        "level": 40
    },
    {
        "character": "鋭利",
        "kana": "えいり",
        "meaning": "sharpness",
        "level": 40
    },
    {
        "character": "繰り返す",
        "kana": "くりかえす",
        "meaning": "to repeat, to repeat over and over",
        "level": 40
    },
    {
        "character": "繁殖",
        "kana": "はんしょく",
        "meaning": "breeding, multiplying",
        "level": 40
    },
    {
        "character": "合唱団",
        "kana": "がっしょうだん",
        "meaning": "chorus, choir",
        "level": 40
    },
    {
        "character": "衝突",
        "kana": "しょうとつ",
        "meaning": "collision, impact, conflict",
        "level": 40
    },
    {
        "character": "獲得",
        "kana": "かくとく",
        "meaning": "acquisition, possession",
        "level": 40
    },
    {
        "character": "戒告",
        "kana": "かいこく",
        "meaning": "admonition",
        "level": 40
    },
    {
        "character": "堀川",
        "kana": "ほりかわ",
        "meaning": "canal",
        "level": 40
    },
    {
        "character": "薄情",
        "kana": "はくじょう",
        "meaning": "cold hearted",
        "level": 40
    },
    {
        "character": "洗剤",
        "kana": "せんざい",
        "meaning": "detergent",
        "level": 40
    },
    {
        "character": "主唱",
        "kana": "しゅしょう",
        "meaning": "advocate",
        "level": 40
    },
    {
        "character": "堀",
        "kana": "ほり",
        "meaning": "ditch, moat, canal",
        "level": 40
    },
    {
        "character": "機敏",
        "kana": "きびん",
        "meaning": "clever, shrewd, smart, quick",
        "level": 40
    },
    {
        "character": "薄い",
        "kana": "うすい",
        "meaning": "dilute, thin, weak",
        "level": 40
    },
    {
        "character": "排水",
        "kana": "はいすい",
        "meaning": "drainage",
        "level": 40
    },
    {
        "character": "犠打",
        "kana": "ぎだ",
        "meaning": "sacrifice fly",
        "level": 40
    },
    {
        "character": "兼ねる",
        "kana": "かねる",
        "meaning": "to combine, to double as, to be unable, to have trouble doing",
        "level": 40
    },
    {
        "character": "唱歌",
        "kana": "しょうか",
        "meaning": "singing, songs",
        "level": 40
    },
    {
        "character": "獲物",
        "kana": "えもの",
        "meaning": "spoils, trophy, game",
        "level": 40
    },
    {
        "character": "排除",
        "kana": "はいじょ",
        "meaning": "exclusion, removal, elimination",
        "level": 40
    },
    {
        "character": "称える",
        "kana": "たたえる, となえる",
        "meaning": "to praise, to give praise, to call oneself",
        "level": 40
    },
    {
        "character": "一生懸命",
        "kana": "いっしょうけんめい",
        "meaning": "with all one's might, all out",
        "level": 40
    },
    {
        "character": "選択する",
        "kana": "せんたくする",
        "meaning": "to select, to choose",
        "level": 40
    },
    {
        "character": "避難する",
        "kana": "ひなんする",
        "meaning": "to evacuate",
        "level": 40
    },
    {
        "character": "遠慮する",
        "kana": "えんりょする",
        "meaning": "to decline, to restrain",
        "level": 40
    },
    {
        "character": "宜しくお願いします",
        "kana": "よろしくおねがいします",
        "meaning": "best regards",
        "level": 40
    },
    {
        "character": "贈り物",
        "kana": "おくりもの",
        "meaning": "a present, present",
        "level": 40
    },
    {
        "character": "沖縄県",
        "kana": "おきなわけん",
        "meaning": "okinawa prefecture",
        "level": 40
    },
    {
        "character": "贈賄",
        "kana": "ぞうわい",
        "meaning": "bribery",
        "level": 40
    },
    {
        "character": "駐在",
        "kana": "ちゅうざい",
        "meaning": "residence, stay",
        "level": 40
    },
    {
        "character": "顧問",
        "kana": "こもん",
        "meaning": "advisor",
        "level": 40
    },
    {
        "character": "顧みる",
        "kana": "かえりみる",
        "meaning": "to look back on, to reflect on",
        "level": 40
    },
    {
        "character": "回顧録",
        "kana": "かいころく",
        "meaning": "memoirs, reminiscences",
        "level": 40
    },
    {
        "character": "唱える",
        "kana": "となえる",
        "meaning": "to chant",
        "level": 40
    },
    {
        "character": "駐車場",
        "kana": "ちゅうしゃじょう",
        "meaning": "parking lot",
        "level": 40
    },
    {
        "character": "駐留軍",
        "kana": "ちゅうりゅうぐん",
        "meaning": "stationed troops, occupying troops",
        "level": 40
    },
    {
        "character": "駆ける",
        "kana": "かける",
        "meaning": "to gallop, to drive, to spur on",
        "level": 40
    },
    {
        "character": "歌唱",
        "kana": "かしょう",
        "meaning": "singing, song",
        "level": 40
    },
    {
        "character": "孝行",
        "kana": "こうこう",
        "meaning": "filial piety",
        "level": 40
    },
    {
        "character": "不孝",
        "kana": "ふこう",
        "meaning": "disobedience to parents, lack of filial piety",
        "level": 40
    },
    {
        "character": "俊才",
        "kana": "しゅんさい",
        "meaning": "genius, person of exceptional talent, exceptionally talented person",
        "level": 40
    },
    {
        "character": "巡る",
        "kana": "めぐる",
        "meaning": "to go around, to return",
        "level": 40
    },
    {
        "character": "巡査",
        "kana": "じゅんさ",
        "meaning": "police, policeman",
        "level": 40
    },
    {
        "character": "捕獲",
        "kana": "ほかく",
        "meaning": "capture, seizure",
        "level": 40
    },
    {
        "character": "名誉",
        "kana": "めいよ",
        "meaning": "honor, prestige, honour",
        "level": 40
    },
    {
        "character": "訓戒",
        "kana": "くんかい",
        "meaning": "warning, admonition",
        "level": 40
    },
    {
        "character": "排出",
        "kana": "はいしゅつ",
        "meaning": "emission",
        "level": 40
    },
    {
        "character": "透ける",
        "kana": "すける",
        "meaning": "to be transparent, to be see through",
        "level": 40
    },
    {
        "character": "敏感",
        "kana": "びんかん",
        "meaning": "sensibility, sensitive to",
        "level": 40
    },
    {
        "character": "鋭い",
        "kana": "するどい",
        "meaning": "sharp",
        "level": 40
    },
    {
        "character": "敷金",
        "kana": "しききん",
        "meaning": "security deposit",
        "level": 40
    },
    {
        "character": "殿堂",
        "kana": "でんどう",
        "meaning": "palace",
        "level": 40
    },
    {
        "character": "屋敷",
        "kana": "やしき",
        "meaning": "residence, estate",
        "level": 40
    },
    {
        "character": "繁茂",
        "kana": "はんも",
        "meaning": "luxuriant growth",
        "level": 40
    },
    {
        "character": "頻りに",
        "kana": "しきりに",
        "meaning": "frequently, repeatedly, often",
        "level": 40
    },
    {
        "character": "褒美",
        "kana": "ほうび",
        "meaning": "reward, prize",
        "level": 40
    },
    {
        "character": "殖える",
        "kana": "ふえる",
        "meaning": "to multiply, to increase",
        "level": 40
    },
    {
        "character": "潜水艦",
        "kana": "せんすいかん",
        "meaning": "submarine",
        "level": 41
    },
    {
        "character": "雇用者",
        "kana": "こようしゃ",
        "meaning": "employer",
        "level": 41
    },
    {
        "character": "炭",
        "kana": "すみ",
        "meaning": "charcoal",
        "level": 41
    },
    {
        "character": "埋め合わせる",
        "kana": "うめあわせる",
        "meaning": "to compensate for",
        "level": 41
    },
    {
        "character": "鉄鉱",
        "kana": "てっこう",
        "meaning": "iron ore",
        "level": 41
    },
    {
        "character": "〜畑",
        "kana": "はたけ",
        "meaning": "field, crop",
        "level": 41
    },
    {
        "character": "思い遣り",
        "kana": "おもいやり",
        "meaning": "consideration, sympathy",
        "level": 41
    },
    {
        "character": "甲斐性",
        "kana": "かいしょう",
        "meaning": "resourcefulness, competence",
        "level": 41
    },
    {
        "character": "生き甲斐",
        "kana": "いきがい",
        "meaning": "reason for living, something worth living for",
        "level": 41
    },
    {
        "character": "伺う",
        "kana": "うかがう",
        "meaning": "to implore, to inquire, to ask",
        "level": 41
    },
    {
        "character": "徹夜",
        "kana": "てつや",
        "meaning": "all night, sleepless night, all nighter",
        "level": 41
    },
    {
        "character": "拠点",
        "kana": "きょてん",
        "meaning": "position, location",
        "level": 41
    },
    {
        "character": "証拠",
        "kana": "しょうこ",
        "meaning": "physical evidence, evidence, proof",
        "level": 41
    },
    {
        "character": "根拠",
        "kana": "こんきょ",
        "meaning": "basis, grounds",
        "level": 41
    },
    {
        "character": "儀式",
        "kana": "ぎしき",
        "meaning": "ceremony",
        "level": 41
    },
    {
        "character": "虎",
        "kana": "とら",
        "meaning": "tiger",
        "level": 41
    },
    {
        "character": "焼酎",
        "kana": "しょうちゅう",
        "meaning": "shochu, shouchuu, japanese liquor",
        "level": 41
    },
    {
        "character": "艦船",
        "kana": "かんせん",
        "meaning": "warship, ocean vessel",
        "level": 41
    },
    {
        "character": "軍艦",
        "kana": "ぐんかん",
        "meaning": "battleship",
        "level": 41
    },
    {
        "character": "破片",
        "kana": "はへん",
        "meaning": "fragment",
        "level": 41
    },
    {
        "character": "包丁",
        "kana": "ほうちょう",
        "meaning": "kitchen knife, cutlery, carving knife",
        "level": 41
    },
    {
        "character": "炭鉱",
        "kana": "たんこう",
        "meaning": "coal mine, coal pit",
        "level": 41
    },
    {
        "character": "果樹",
        "kana": "かじゅ",
        "meaning": "fruit tree",
        "level": 41
    },
    {
        "character": "偽る",
        "kana": "いつわる",
        "meaning": "to lie, to cheat, to deceive",
        "level": 41
    },
    {
        "character": "至る",
        "kana": "いたる",
        "meaning": "to arrive at",
        "level": 41
    },
    {
        "character": "侵す",
        "kana": "おかす",
        "meaning": "to invade, to violate, to intrude",
        "level": 41
    },
    {
        "character": "更衣室",
        "kana": "こういしつ",
        "meaning": "changing room, locker room, dressing room",
        "level": 41
    },
    {
        "character": "廃墟",
        "kana": "はいきょ",
        "meaning": "ruins, abandoned building",
        "level": 41
    },
    {
        "character": "蜂",
        "kana": "はち",
        "meaning": "bee, hornet, wasp",
        "level": 41
    },
    {
        "character": "蜂蜜",
        "kana": "はちみつ",
        "meaning": "honey",
        "level": 41
    },
    {
        "character": "躍り",
        "kana": "おどり",
        "meaning": "jumping, leaping",
        "level": 41
    },
    {
        "character": "措置",
        "kana": "そち",
        "meaning": "measures, steps",
        "level": 41
    },
    {
        "character": "瀬",
        "kana": "せ",
        "meaning": "rapids, shallows, current",
        "level": 41
    },
    {
        "character": "辞儀する",
        "kana": "じぎする",
        "meaning": "to bow",
        "level": 41
    },
    {
        "character": "拳銃",
        "kana": "けんじゅう",
        "meaning": "revolver",
        "level": 41
    },
    {
        "character": "早瀬",
        "kana": "はやせ",
        "meaning": "swift currents",
        "level": 41
    },
    {
        "character": "樹皮",
        "kana": "じゅひ",
        "meaning": "tree bark, bark",
        "level": 41
    },
    {
        "character": "措辞",
        "kana": "そじ",
        "meaning": "wording",
        "level": 41
    },
    {
        "character": "拳",
        "kana": "こぶし",
        "meaning": "fist",
        "level": 41
    },
    {
        "character": "徹する",
        "kana": "てっする",
        "meaning": "to devote oneself, to sink in, to penetrate",
        "level": 41
    },
    {
        "character": "徹底",
        "kana": "てってい",
        "meaning": "thoroughness, completeness",
        "level": 41
    },
    {
        "character": "廃棄",
        "kana": "はいき",
        "meaning": "annulment, disposal",
        "level": 41
    },
    {
        "character": "蜜",
        "kana": "みつ",
        "meaning": "honey",
        "level": 41
    },
    {
        "character": "偽装",
        "kana": "ぎそう",
        "meaning": "camouflage",
        "level": 41
    },
    {
        "character": "仁",
        "kana": "じん",
        "meaning": "humanity",
        "level": 41
    },
    {
        "character": "放棄",
        "kana": "ほうき",
        "meaning": "resignation, abandonment",
        "level": 41
    },
    {
        "character": "埋もれる",
        "kana": "うもれる",
        "meaning": "to get buried, to be buried",
        "level": 41
    },
    {
        "character": "麦畑",
        "kana": "むぎばたけ",
        "meaning": "wheat field, barley field",
        "level": 41
    },
    {
        "character": "撤兵",
        "kana": "てっぺい",
        "meaning": "withdrawal of troops",
        "level": 41
    },
    {
        "character": "炭素",
        "kana": "たんそ",
        "meaning": "carbon",
        "level": 41
    },
    {
        "character": "拠る",
        "kana": "よる",
        "meaning": "to be due to, to be caused by",
        "level": 41
    },
    {
        "character": "仁義",
        "kana": "じんぎ",
        "meaning": "humanity and justice, duty",
        "level": 41
    },
    {
        "character": "祝儀",
        "kana": "しゅうぎ",
        "meaning": "celebration, congratulations",
        "level": 41
    },
    {
        "character": "謙遜",
        "kana": "けんそん",
        "meaning": "humble, humility, modesty",
        "level": 41
    },
    {
        "character": "充電する",
        "kana": "じゅうでんする",
        "meaning": "to charge a battery, to recharge, to recharge a battery",
        "level": 41
    },
    {
        "character": "故郷",
        "kana": "こきょう",
        "meaning": "hometown, birthplace",
        "level": 41
    },
    {
        "character": "瀬戸",
        "kana": "せと",
        "meaning": "seto, strait, channel",
        "level": 41
    },
    {
        "character": "社会福祉",
        "kana": "しゃかいふくし",
        "meaning": "social welfare",
        "level": 41
    },
    {
        "character": "包む",
        "kana": "つつむ",
        "meaning": "to wrap",
        "level": 41
    },
    {
        "character": "偽",
        "kana": "にせ",
        "meaning": "fake, imitation",
        "level": 41
    },
    {
        "character": "侵害",
        "kana": "しんがい",
        "meaning": "infringement, violation",
        "level": 41
    },
    {
        "character": "高瀬",
        "kana": "たかせ",
        "meaning": "shallows",
        "level": 41
    },
    {
        "character": "潜む",
        "kana": "ひそむ",
        "meaning": "to lurk, to lie dormant",
        "level": 41
    },
    {
        "character": "石炭",
        "kana": "せきたん",
        "meaning": "coal",
        "level": 41
    },
    {
        "character": "田畑",
        "kana": "たはた",
        "meaning": "field, field of rice, field of crops",
        "level": 41
    },
    {
        "character": "原潜",
        "kana": "げんせん",
        "meaning": "nuclear submarine",
        "level": 41
    },
    {
        "character": "渋谷",
        "kana": "しぶや",
        "meaning": "shibuya",
        "level": 41
    },
    {
        "character": "忠誠",
        "kana": "ちゅうせい",
        "meaning": "loyalty",
        "level": 41
    },
    {
        "character": "包囲",
        "kana": "ほうい",
        "meaning": "siege, encirclement",
        "level": 41
    },
    {
        "character": "誠意",
        "kana": "せいい",
        "meaning": "sincerity, good faith",
        "level": 41
    },
    {
        "character": "投棄",
        "kana": "とうき",
        "meaning": "abandonment",
        "level": 41
    },
    {
        "character": "潜水",
        "kana": "せんすい",
        "meaning": "diving",
        "level": 41
    },
    {
        "character": "偽造",
        "kana": "ぎぞう",
        "meaning": "forgery",
        "level": 41
    },
    {
        "character": "礼儀",
        "kana": "れいぎ",
        "meaning": "manners, courtesy, etiquette",
        "level": 41
    },
    {
        "character": "植樹",
        "kana": "しょくじゅ",
        "meaning": "tree planting",
        "level": 41
    },
    {
        "character": "脱衣",
        "kana": "だつい",
        "meaning": "undressing",
        "level": 41
    },
    {
        "character": "航空母艦",
        "kana": "こうくうぼかん",
        "meaning": "aircraft carrier",
        "level": 41
    },
    {
        "character": "蛍",
        "kana": "ほたる",
        "meaning": "firefly, lightning bug, glowworm",
        "level": 41
    },
    {
        "character": "鉱物",
        "kana": "こうぶつ",
        "meaning": "mineral",
        "level": 41
    },
    {
        "character": "撤去",
        "kana": "てっきょ",
        "meaning": "withdrawal, repeal",
        "level": 41
    },
    {
        "character": "岐阜県",
        "kana": "ぎふけん",
        "meaning": "gifu prefecture",
        "level": 41
    },
    {
        "character": "鉱業",
        "kana": "こうぎょう",
        "meaning": "mining industry",
        "level": 41
    },
    {
        "character": "潜在意識",
        "kana": "せんざいいしき",
        "meaning": "subconscious",
        "level": 41
    },
    {
        "character": "撤回",
        "kana": "てっかい",
        "meaning": "withdrawal, repeal",
        "level": 41
    },
    {
        "character": "鉱山",
        "kana": "こうざん",
        "meaning": "a mine, mine",
        "level": 41
    },
    {
        "character": "衣",
        "kana": "ころも",
        "meaning": "clothes, garment",
        "level": 41
    },
    {
        "character": "艦隊",
        "kana": "かんたい",
        "meaning": "naval fleet, armada",
        "level": 41
    },
    {
        "character": "やり甲斐",
        "kana": "やりがい",
        "meaning": "worth doing",
        "level": 41
    },
    {
        "character": "原爆",
        "kana": "げんばく",
        "meaning": "atomic bomb",
        "level": 41
    },
    {
        "character": "鉱石",
        "kana": "こうせき",
        "meaning": "ore, mineral",
        "level": 41
    },
    {
        "character": "冬至",
        "kana": "とうじ",
        "meaning": "winter solstice",
        "level": 41
    },
    {
        "character": "拳骨",
        "kana": "げんこつ",
        "meaning": "clenched fist, knuckles",
        "level": 41
    },
    {
        "character": "手の甲",
        "kana": "てのこう",
        "meaning": "back of one's hand",
        "level": 41
    },
    {
        "character": "御免なさい",
        "kana": "ごめんなさい",
        "meaning": "sorry, i beg your pardon",
        "level": 41
    },
    {
        "character": "控える",
        "kana": "ひかえる",
        "meaning": "to abstain",
        "level": 41
    },
    {
        "character": "夏至",
        "kana": "げし",
        "meaning": "summer solstice",
        "level": 41
    },
    {
        "character": "侵攻",
        "kana": "しんこう",
        "meaning": "invasion",
        "level": 41
    },
    {
        "character": "必至",
        "kana": "ひっし",
        "meaning": "inevitable, necessary, foregone",
        "level": 41
    },
    {
        "character": "至上",
        "kana": "しじょう",
        "meaning": "supremacy",
        "level": 41
    },
    {
        "character": "誠",
        "kana": "まこと",
        "meaning": "sincerity, truth",
        "level": 41
    },
    {
        "character": "誠実",
        "kana": "せいじつ",
        "meaning": "sincere, honest, faithful",
        "level": 41
    },
    {
        "character": "郷里",
        "kana": "きょうり",
        "meaning": "birthplace, hometown",
        "level": 41
    },
    {
        "character": "帰郷する",
        "kana": "ききょうする",
        "meaning": "to return to one's hometown",
        "level": 41
    },
    {
        "character": "侵入",
        "kana": "しんにゅう",
        "meaning": "intrusion, penetration",
        "level": 41
    },
    {
        "character": "葬儀",
        "kana": "そうぎ",
        "meaning": "funeral",
        "level": 41
    },
    {
        "character": "群れる",
        "kana": "むれる",
        "meaning": "to flock, to crowd",
        "level": 41
    },
    {
        "character": "御手洗",
        "kana": "おてあらい",
        "meaning": "restroom, bathroom, toilet",
        "level": 41
    },
    {
        "character": "逃れる",
        "kana": "のがれる",
        "meaning": "to escape",
        "level": 42
    },
    {
        "character": "袋",
        "kana": "ふくろ",
        "meaning": "sack, bag",
        "level": 42
    },
    {
        "character": "統括",
        "kana": "とうかつ",
        "meaning": "unification",
        "level": 42
    },
    {
        "character": "枢軸",
        "kana": "すうじく",
        "meaning": "axle, pivot",
        "level": 42
    },
    {
        "character": "総括",
        "kana": "そうかつ",
        "meaning": "synthesis, recap",
        "level": 42
    },
    {
        "character": "揺る",
        "kana": "ゆる",
        "meaning": "to shake, to jolt",
        "level": 42
    },
    {
        "character": "括弧",
        "kana": "かっこ",
        "meaning": "parentheses, brackets",
        "level": 42
    },
    {
        "character": "通信網",
        "kana": "つうしんもう",
        "meaning": "communications network",
        "level": 42
    },
    {
        "character": "掛軸",
        "kana": "かけじく",
        "meaning": "hanging scroll",
        "level": 42
    },
    {
        "character": "宿泊",
        "kana": "しゅくはく",
        "meaning": "lodging, stay the night",
        "level": 42
    },
    {
        "character": "親不孝",
        "kana": "おやふこう",
        "meaning": "lack of filial piety, disobedience to parents",
        "level": 42
    },
    {
        "character": "哲学",
        "kana": "てつがく",
        "meaning": "philosophy",
        "level": 42
    },
    {
        "character": "吹き出す",
        "kana": "ふきだす",
        "meaning": "to begin to blow, to breathe out, to burst out laughing",
        "level": 42
    },
    {
        "character": "吹き込む",
        "kana": "ふきこむ",
        "meaning": "to blow in",
        "level": 42
    },
    {
        "character": "口笛を吹く",
        "kana": "くちぶえをふく",
        "meaning": "to whistle",
        "level": 42
    },
    {
        "character": "挑戦",
        "kana": "ちょうせん",
        "meaning": "a challenge, challenge",
        "level": 42
    },
    {
        "character": "分析",
        "kana": "ぶんせき",
        "meaning": "analysis",
        "level": 42
    },
    {
        "character": "解析",
        "kana": "かいせき",
        "meaning": "analysis",
        "level": 42
    },
    {
        "character": "到着",
        "kana": "とうちゃく",
        "meaning": "arrival",
        "level": 42
    },
    {
        "character": "握力",
        "kana": "あくりょく",
        "meaning": "handgrip, grip of the hand",
        "level": 42
    },
    {
        "character": "不孝者",
        "kana": "ふこうもの",
        "meaning": "disobedient child, unfilial child",
        "level": 42
    },
    {
        "character": "克明",
        "kana": "こくめい",
        "meaning": "detailed",
        "level": 42
    },
    {
        "character": "ゴミ袋",
        "kana": "ゴミぶくろ, ごみぶくろ",
        "meaning": "garbage bag, garbage sack",
        "level": 42
    },
    {
        "character": "範",
        "kana": "はん",
        "meaning": "example, model",
        "level": 42
    },
    {
        "character": "焦点",
        "kana": "しょうてん",
        "meaning": "focal point, focus",
        "level": 42
    },
    {
        "character": "暫く",
        "kana": "しばらく",
        "meaning": "in a little while, in a short while, in a moment",
        "level": 42
    },
    {
        "character": "芝草",
        "kana": "しばくさ",
        "meaning": "lawn, turf",
        "level": 42
    },
    {
        "character": "発掘",
        "kana": "はっくつ",
        "meaning": "excavation",
        "level": 42
    },
    {
        "character": "斎場",
        "kana": "さいじょう",
        "meaning": "funeral hall",
        "level": 42
    },
    {
        "character": "双子",
        "kana": "ふたご",
        "meaning": "twins",
        "level": 42
    },
    {
        "character": "肝炎",
        "kana": "かんえん",
        "meaning": "hepatitis",
        "level": 42
    },
    {
        "character": "福袋",
        "kana": "ふくぶくろ",
        "meaning": "mystery bag, mystery sack",
        "level": 42
    },
    {
        "character": "温床",
        "kana": "おんしょう",
        "meaning": "hotbed",
        "level": 42
    },
    {
        "character": "網",
        "kana": "あみ",
        "meaning": "net, netting, web",
        "level": 42
    },
    {
        "character": "不透明",
        "kana": "ふとうめい",
        "meaning": "opacity",
        "level": 42
    },
    {
        "character": "堅い",
        "kana": "かたい",
        "meaning": "solid, tough",
        "level": 42
    },
    {
        "character": "綱",
        "kana": "つな",
        "meaning": "rope, sumo belt",
        "level": 42
    },
    {
        "character": "書斎",
        "kana": "しょさい",
        "meaning": "study, den, library",
        "level": 42
    },
    {
        "character": "暫定",
        "kana": "ざんてい",
        "meaning": "tentative, temporary",
        "level": 42
    },
    {
        "character": "干潟",
        "kana": "ひがた",
        "meaning": "tidal flat, tideland",
        "level": 42
    },
    {
        "character": "柄",
        "kana": "がら, え",
        "meaning": "pattern, design",
        "level": 42
    },
    {
        "character": "荒れる",
        "kana": "あれる",
        "meaning": "to be stormy, to be rough",
        "level": 42
    },
    {
        "character": "吹き飛ばす",
        "kana": "ふきとばす",
        "meaning": "to blow away",
        "level": 42
    },
    {
        "character": "掘る",
        "kana": "ほる",
        "meaning": "to dig",
        "level": 42
    },
    {
        "character": "挑発",
        "kana": "ちょうはつ",
        "meaning": "provocation",
        "level": 42
    },
    {
        "character": "紛らす",
        "kana": "まぎらす",
        "meaning": "to divert, to distract",
        "level": 42
    },
    {
        "character": "東芝",
        "kana": "とうしば",
        "meaning": "toshiba, toushiba",
        "level": 42
    },
    {
        "character": "荒い",
        "kana": "あらい",
        "meaning": "wild, rough",
        "level": 42
    },
    {
        "character": "綱引き",
        "kana": "つなひき",
        "meaning": "tug of war",
        "level": 42
    },
    {
        "character": "横綱",
        "kana": "よこづな, よこずな",
        "meaning": "yokozuna, sumo grand champion",
        "level": 42
    },
    {
        "character": "円弧",
        "kana": "えんこ",
        "meaning": "arc",
        "level": 42
    },
    {
        "character": "中軸",
        "kana": "ちゅうじく",
        "meaning": "axis, pivot",
        "level": 42
    },
    {
        "character": "糾弾",
        "kana": "きゅうだん",
        "meaning": "blame",
        "level": 42
    },
    {
        "character": "中枢",
        "kana": "ちゅうすう",
        "meaning": "center, centre, pivot",
        "level": 42
    },
    {
        "character": "紛糾",
        "kana": "ふんきゅう",
        "meaning": "complication, confusion",
        "level": 42
    },
    {
        "character": "模範",
        "kana": "もはん",
        "meaning": "exemplification, model, example",
        "level": 42
    },
    {
        "character": "範囲",
        "kana": "はんい",
        "meaning": "extent, scope",
        "level": 42
    },
    {
        "character": "芝",
        "kana": "しば",
        "meaning": "lawn, turf",
        "level": 42
    },
    {
        "character": "二泊",
        "kana": "にはく",
        "meaning": "two night's stay",
        "level": 42
    },
    {
        "character": "病床",
        "kana": "びょうしょう",
        "meaning": "sickbed",
        "level": 42
    },
    {
        "character": "携帯電話",
        "kana": "けいたいでんわ",
        "meaning": "portable phone, cell phone, mobile phone",
        "level": 42
    },
    {
        "character": "起床",
        "kana": "きしょう",
        "meaning": "rising, getting out of bed",
        "level": 42
    },
    {
        "character": "双",
        "kana": "そう",
        "meaning": "pair",
        "level": 42
    },
    {
        "character": "駆け込む",
        "kana": "かけこむ",
        "meaning": "to rush into",
        "level": 42
    },
    {
        "character": "駆け出す",
        "kana": "かけだす",
        "meaning": "to rush out",
        "level": 42
    },
    {
        "character": "最新鋭",
        "kana": "さいしんえい",
        "meaning": "state of the art, cutting edge",
        "level": 42
    },
    {
        "character": "駆け回る",
        "kana": "かけまわる",
        "meaning": "to run around",
        "level": 42
    },
    {
        "character": "犠飛",
        "kana": "ぎひ",
        "meaning": "sacrifice fly",
        "level": 42
    },
    {
        "character": "喪失",
        "kana": "そうしつ",
        "meaning": "loss, forfeit",
        "level": 42
    },
    {
        "character": "克服",
        "kana": "こくふく",
        "meaning": "conquest",
        "level": 42
    },
    {
        "character": "喪",
        "kana": "も",
        "meaning": "mourning",
        "level": 42
    },
    {
        "character": "床",
        "kana": "ゆか",
        "meaning": "floor",
        "level": 42
    },
    {
        "character": "括る",
        "kana": "くくる",
        "meaning": "to fasten, to tie up, to tie together, to bind",
        "level": 42
    },
    {
        "character": "一括",
        "kana": "いっかつ",
        "meaning": "all together, batch, one lump",
        "level": 42
    },
    {
        "character": "挑む",
        "kana": "いどむ",
        "meaning": "to challenge someone, to challenge something, to challenge",
        "level": 42
    },
    {
        "character": "揚げる",
        "kana": "あげる",
        "meaning": "to hoist, to fly, to raise, to deep fry",
        "level": 42
    },
    {
        "character": "握る",
        "kana": "にぎる",
        "meaning": "to grasp, to clasp",
        "level": 42
    },
    {
        "character": "握手",
        "kana": "あくしゅ",
        "meaning": "handshake, shaking hands",
        "level": 42
    },
    {
        "character": "動揺",
        "kana": "どうよう",
        "meaning": "jolt",
        "level": 42
    },
    {
        "character": "軸",
        "kana": "じく",
        "meaning": "axis",
        "level": 42
    },
    {
        "character": "国柄",
        "kana": "くにがら",
        "meaning": "national character",
        "level": 42
    },
    {
        "character": "人柄",
        "kana": "ひとがら",
        "meaning": "personal character, personality, character",
        "level": 42
    },
    {
        "character": "一泊",
        "kana": "いっぱく",
        "meaning": "one night's stay",
        "level": 42
    },
    {
        "character": "泊まる",
        "kana": "とまる",
        "meaning": "to stay the night, to stay at",
        "level": 42
    },
    {
        "character": "滑る",
        "kana": "すべる",
        "meaning": "to slide, to slip",
        "level": 42
    },
    {
        "character": "円滑",
        "kana": "えんかつ",
        "meaning": "effortless, smooth",
        "level": 42
    },
    {
        "character": "肝臓",
        "kana": "かんぞう",
        "meaning": "liver",
        "level": 42
    },
    {
        "character": "潟",
        "kana": "かた",
        "meaning": "lagoon",
        "level": 42
    },
    {
        "character": "焦げる",
        "kana": "こげる",
        "meaning": "to be burned, to get burned",
        "level": 42
    },
    {
        "character": "交通網",
        "kana": "こうつうもう",
        "meaning": "traffic network",
        "level": 42
    },
    {
        "character": "肝",
        "kana": "きも",
        "meaning": "liver, chutzpah, courage",
        "level": 42
    },
    {
        "character": "芝生",
        "kana": "しばふ",
        "meaning": "lawn",
        "level": 42
    },
    {
        "character": "取り逃がす",
        "kana": "とりにがす",
        "meaning": "to fail to catch",
        "level": 42
    },
    {
        "character": "親孝行",
        "kana": "おやこうこう",
        "meaning": "filial piety",
        "level": 42
    },
    {
        "character": "双眼鏡",
        "kana": "そうがんきょう",
        "meaning": "binoculars",
        "level": 42
    },
    {
        "character": "薄める",
        "kana": "うすめる",
        "meaning": "to dilute, to water down",
        "level": 42
    },
    {
        "character": "懲罰",
        "kana": "ちょうばつ",
        "meaning": "discipline, punishment",
        "level": 43
    },
    {
        "character": "潜る",
        "kana": "くぐる, もぐる",
        "meaning": "to pass through, to pass under, to evade, to dive underwater, to get in, to go underground",
        "level": 43
    },
    {
        "character": "風潮",
        "kana": "ふうちょう",
        "meaning": "tide, current",
        "level": 43
    },
    {
        "character": "偽物",
        "kana": "にせもの",
        "meaning": "fake, counterfeit",
        "level": 43
    },
    {
        "character": "群がる",
        "kana": "むらがる",
        "meaning": "to flock, to crowd",
        "level": 43
    },
    {
        "character": "奇襲",
        "kana": "きしゅう",
        "meaning": "surprise attack",
        "level": 43
    },
    {
        "character": "国籍",
        "kana": "こくせき",
        "meaning": "citizenship",
        "level": 43
    },
    {
        "character": "分裂",
        "kana": "ぶんれつ",
        "meaning": "split, division",
        "level": 43
    },
    {
        "character": "誰",
        "kana": "だれ",
        "meaning": "who",
        "level": 43
    },
    {
        "character": "垣",
        "kana": "かき",
        "meaning": "fence",
        "level": 43
    },
    {
        "character": "安泰",
        "kana": "あんたい",
        "meaning": "peace, security",
        "level": 43
    },
    {
        "character": "露出",
        "kana": "ろしゅつ",
        "meaning": "exposure, photographic exposure",
        "level": 43
    },
    {
        "character": "沈滞",
        "kana": "ちんたい",
        "meaning": "stagnation, inactivity",
        "level": 43
    },
    {
        "character": "明朗",
        "kana": "めいろう",
        "meaning": "bright, cheerful, clear",
        "level": 43
    },
    {
        "character": "威厳",
        "kana": "いげん",
        "meaning": "dignity, majesty",
        "level": 43
    },
    {
        "character": "牧師",
        "kana": "ぼくし",
        "meaning": "pastor, minister, clergyman",
        "level": 43
    },
    {
        "character": "山岳",
        "kana": "さんがく",
        "meaning": "mountains",
        "level": 43
    },
    {
        "character": "牧草",
        "kana": "ぼくそう",
        "meaning": "pasture, grass",
        "level": 43
    },
    {
        "character": "一斉",
        "kana": "いっせい",
        "meaning": "simultaneous, all at once",
        "level": 43
    },
    {
        "character": "旨い",
        "kana": "うまい",
        "meaning": "delicious, skillful, clever",
        "level": 43
    },
    {
        "character": "壊滅",
        "kana": "かいめつ",
        "meaning": "destruction, annihilation",
        "level": 43
    },
    {
        "character": "刷る",
        "kana": "する",
        "meaning": "to print",
        "level": 43
    },
    {
        "character": "朗報",
        "kana": "ろうほう",
        "meaning": "good news",
        "level": 43
    },
    {
        "character": "満潮",
        "kana": "まんちょう",
        "meaning": "high tide, full tide",
        "level": 43
    },
    {
        "character": "封書",
        "kana": "ふうしょ",
        "meaning": "sealed letter",
        "level": 43
    },
    {
        "character": "沈める",
        "kana": "しずめる",
        "meaning": "to sink",
        "level": 43
    },
    {
        "character": "潮流",
        "kana": "ちょうりゅう",
        "meaning": "tide, tidal current",
        "level": 43
    },
    {
        "character": "泥沼",
        "kana": "どろぬま",
        "meaning": "bog, marsh",
        "level": 43
    },
    {
        "character": "即座",
        "kana": "そくざ",
        "meaning": "immediate, instantaneous",
        "level": 43
    },
    {
        "character": "懇談",
        "kana": "こんだん",
        "meaning": "informal talk",
        "level": 43
    },
    {
        "character": "即死",
        "kana": "そくし",
        "meaning": "instant death",
        "level": 43
    },
    {
        "character": "垣根",
        "kana": "かきね",
        "meaning": "hedge, fence",
        "level": 43
    },
    {
        "character": "慰問",
        "kana": "いもん",
        "meaning": "condolences, sympathy call",
        "level": 43
    },
    {
        "character": "球威",
        "kana": "きゅうい",
        "meaning": "a pitcher's stuff, pitcher's stuff",
        "level": 43
    },
    {
        "character": "懇意",
        "kana": "こんい",
        "meaning": "kindness, intimacy",
        "level": 43
    },
    {
        "character": "高炉",
        "kana": "こうろ",
        "meaning": "blast furnace",
        "level": 43
    },
    {
        "character": "滅亡",
        "kana": "めつぼう",
        "meaning": "downfall, ruin",
        "level": 43
    },
    {
        "character": "幻滅",
        "kana": "げんめつ",
        "meaning": "disillusionment",
        "level": 43
    },
    {
        "character": "柔道",
        "kana": "じゅうどう",
        "meaning": "judo, juudou",
        "level": 43
    },
    {
        "character": "滅ぼす",
        "kana": "ほろぼす",
        "meaning": "to destroy, to annihilate",
        "level": 43
    },
    {
        "character": "沼田",
        "kana": "ぬまた, ぬた",
        "meaning": "marshy rice field, marshy rice paddy",
        "level": 43
    },
    {
        "character": "沼地",
        "kana": "ぬまち",
        "meaning": "marshland, wetland, swampland",
        "level": 43
    },
    {
        "character": "滋養",
        "kana": "じよう",
        "meaning": "nourishment",
        "level": 43
    },
    {
        "character": "撲滅",
        "kana": "ぼくめつ",
        "meaning": "extermination",
        "level": 43
    },
    {
        "character": "原子炉",
        "kana": "げんしろ",
        "meaning": "atomic reactor, nuclear reactor",
        "level": 43
    },
    {
        "character": "決裂",
        "kana": "けつれつ",
        "meaning": "breakdown, rupture",
        "level": 43
    },
    {
        "character": "開封",
        "kana": "かいふう",
        "meaning": "unsealed letter",
        "level": 43
    },
    {
        "character": "浴衣",
        "kana": "ゆかた",
        "meaning": "yukata",
        "level": 43
    },
    {
        "character": "石垣",
        "kana": "いしがき",
        "meaning": "stone wall",
        "level": 43
    },
    {
        "character": "潮",
        "kana": "しお",
        "meaning": "tide, current",
        "level": 43
    },
    {
        "character": "軍艦島",
        "kana": "ぐんかんじま",
        "meaning": "battleship island, gunkanjima",
        "level": 43
    },
    {
        "character": "沼",
        "kana": "ぬま",
        "meaning": "bog, swamp",
        "level": 43
    },
    {
        "character": "朗らか",
        "kana": "ほがらか",
        "meaning": "brightness, cheerfulness",
        "level": 43
    },
    {
        "character": "暖炉",
        "kana": "だんろ",
        "meaning": "fireplace, hearth, stove",
        "level": 43
    },
    {
        "character": "炉心",
        "kana": "ろしん",
        "meaning": "nuclear reactor core",
        "level": 43
    },
    {
        "character": "裂く",
        "kana": "さく",
        "meaning": "to tear, to rip up",
        "level": 43
    },
    {
        "character": "包み",
        "kana": "つつみ",
        "meaning": "bundle, package, parcel",
        "level": 43
    },
    {
        "character": "珍味",
        "kana": "ちんみ",
        "meaning": "delicacy",
        "level": 43
    },
    {
        "character": "相撲",
        "kana": "すもう",
        "meaning": "sumo wrestling, sumou wrestling, sumo, sumou",
        "level": 43
    },
    {
        "character": "沼沢",
        "kana": "しょうたく",
        "meaning": "swamp, marsh",
        "level": 43
    },
    {
        "character": "貢献",
        "kana": "こうけん",
        "meaning": "contribution",
        "level": 43
    },
    {
        "character": "懇親",
        "kana": "こんしん",
        "meaning": "friendship",
        "level": 43
    },
    {
        "character": "逆襲",
        "kana": "ぎゃくしゅう",
        "meaning": "counterattack",
        "level": 43
    },
    {
        "character": "筒",
        "kana": "つつ",
        "meaning": "pipe, cylinder",
        "level": 43
    },
    {
        "character": "絶滅",
        "kana": "ぜつめつ",
        "meaning": "destruction, extinction",
        "level": 43
    },
    {
        "character": "趣味",
        "kana": "しゅみ",
        "meaning": "hobby",
        "level": 43
    },
    {
        "character": "慰安",
        "kana": "いあん",
        "meaning": "solace, relaxation",
        "level": 43
    },
    {
        "character": "論旨",
        "kana": "ろんし",
        "meaning": "point of an argument",
        "level": 43
    },
    {
        "character": "即効",
        "kana": "そっこう",
        "meaning": "immediate effect, instant effect",
        "level": 43
    },
    {
        "character": "印刷",
        "kana": "いんさつ",
        "meaning": "printing",
        "level": 43
    },
    {
        "character": "珍",
        "kana": "ちん",
        "meaning": "rare, curious, strange",
        "level": 43
    },
    {
        "character": "即日",
        "kana": "そくじつ",
        "meaning": "same day",
        "level": 43
    },
    {
        "character": "伺い",
        "kana": "うかがい",
        "meaning": "inquiry, enquiry, question",
        "level": 43
    },
    {
        "character": "封",
        "kana": "ふう",
        "meaning": "seal",
        "level": 43
    },
    {
        "character": "距離",
        "kana": "きょり",
        "meaning": "distance, range",
        "level": 43
    },
    {
        "character": "暴露",
        "kana": "ばくろ",
        "meaning": "disclosure, exposure",
        "level": 43
    },
    {
        "character": "誠に",
        "kana": "まことに",
        "meaning": "indeed, really, absolutely",
        "level": 43
    },
    {
        "character": "珍しい",
        "kana": "めずらしい",
        "meaning": "rare, unusual, curious",
        "level": 43
    },
    {
        "character": "即〜",
        "kana": "そく",
        "meaning": "immediate, instant",
        "level": 43
    },
    {
        "character": "誰か",
        "kana": "だれか",
        "meaning": "someone",
        "level": 43
    },
    {
        "character": "襲う",
        "kana": "おそう",
        "meaning": "to attack",
        "level": 43
    },
    {
        "character": "襲撃",
        "kana": "しゅうげき",
        "meaning": "attack, assault",
        "level": 43
    },
    {
        "character": "空襲",
        "kana": "くうしゅう",
        "meaning": "air raid, air attack",
        "level": 43
    },
    {
        "character": "威張る",
        "kana": "いばる",
        "meaning": "to be proud, to be arrogant",
        "level": 43
    },
    {
        "character": "趣",
        "kana": "おもむき",
        "meaning": "gist, vibe",
        "level": 43
    },
    {
        "character": "戸籍",
        "kana": "こせき",
        "meaning": "family register, census",
        "level": 43
    },
    {
        "character": "露骨",
        "kana": "ろこつ",
        "meaning": "frank, blunt",
        "level": 43
    },
    {
        "character": "露店",
        "kana": "ろてん",
        "meaning": "street stall, stand, booth",
        "level": 43
    },
    {
        "character": "牧野",
        "kana": "ぼくや, まきの",
        "meaning": "pasture land, ranch",
        "level": 43
    },
    {
        "character": "牧場",
        "kana": "ぼくじょう",
        "meaning": "livestock farm, ranch, station",
        "level": 43
    },
    {
        "character": "即興",
        "kana": "そっきょう",
        "meaning": "improvisation",
        "level": 43
    },
    {
        "character": "権威",
        "kana": "けんい",
        "meaning": "authority",
        "level": 43
    },
    {
        "character": "封建主義",
        "kana": "ほうけんしゅぎ",
        "meaning": "feudalism",
        "level": 43
    },
    {
        "character": "柔和",
        "kana": "にゅうわ",
        "meaning": "gentleness",
        "level": 43
    },
    {
        "character": "封筒",
        "kana": "ふうとう",
        "meaning": "envelope",
        "level": 43
    },
    {
        "character": "岳",
        "kana": "たけ",
        "meaning": "peak, mountain",
        "level": 43
    },
    {
        "character": "慰謝",
        "kana": "いしゃ",
        "meaning": "consolation",
        "level": 43
    },
    {
        "character": "慰める",
        "kana": "なぐさめる",
        "meaning": "to console",
        "level": 43
    },
    {
        "character": "懇話",
        "kana": "こんわ",
        "meaning": "friendly chat, friendly talk",
        "level": 43
    },
    {
        "character": "懲りる",
        "kana": "こりる",
        "meaning": "to learn by experience",
        "level": 43
    },
    {
        "character": "摩擦",
        "kana": "まさつ",
        "meaning": "friction",
        "level": 43
    },
    {
        "character": "擦れる",
        "kana": "すれる",
        "meaning": "to chafe, to rub",
        "level": 43
    },
    {
        "character": "旨",
        "kana": "むね",
        "meaning": "gist, principle",
        "level": 43
    },
    {
        "character": "要旨",
        "kana": "ようし",
        "meaning": "point, essentials",
        "level": 43
    },
    {
        "character": "柔らかい",
        "kana": "やわらかい",
        "meaning": "gentle, flexible, soft, tender",
        "level": 43
    },
    {
        "character": "沈む",
        "kana": "しずむ",
        "meaning": "to sink",
        "level": 43
    },
    {
        "character": "琴",
        "kana": "こと",
        "meaning": "koto, japanese harp, harp",
        "level": 43
    },
    {
        "character": "僕",
        "kana": "ぼく",
        "meaning": "i, me",
        "level": 44
    },
    {
        "character": "荒波",
        "kana": "あらなみ",
        "meaning": "stormy seas, raging waves",
        "level": 44
    },
    {
        "character": "涙",
        "kana": "なみだ",
        "meaning": "tears, tear, teardrop",
        "level": 44
    },
    {
        "character": "竜巻",
        "kana": "たつまき",
        "meaning": "tornado",
        "level": 44
    },
    {
        "character": "縁談",
        "kana": "えんだん",
        "meaning": "marriage proposal",
        "level": 44
    },
    {
        "character": "右翼",
        "kana": "うよく",
        "meaning": "right wing",
        "level": 44
    },
    {
        "character": "吉",
        "kana": "きち",
        "meaning": "good omen",
        "level": 44
    },
    {
        "character": "忍ぶ",
        "kana": "しのぶ",
        "meaning": "to endure",
        "level": 44
    },
    {
        "character": "桃",
        "kana": "もも",
        "meaning": "peach",
        "level": 44
    },
    {
        "character": "俺たち",
        "kana": "おれたち",
        "meaning": "we",
        "level": 44
    },
    {
        "character": "辛子",
        "kana": "からし",
        "meaning": "mustard",
        "level": 44
    },
    {
        "character": "姫様",
        "kana": "ひめさま",
        "meaning": "princess",
        "level": 44
    },
    {
        "character": "粒",
        "kana": "つぶ",
        "meaning": "grain, bead, counter for grains",
        "level": 44
    },
    {
        "character": "雷",
        "kana": "かみなり",
        "meaning": "thunder",
        "level": 44
    },
    {
        "character": "砂丘",
        "kana": "さきゅう",
        "meaning": "sand dune",
        "level": 44
    },
    {
        "character": "縁起",
        "kana": "えんぎ",
        "meaning": "omen",
        "level": 44
    },
    {
        "character": "泊まり",
        "kana": "とまり",
        "meaning": "stay, stopover",
        "level": 44
    },
    {
        "character": "荒々しい",
        "kana": "あらあらしい",
        "meaning": "wild, rough, desolate",
        "level": 44
    },
    {
        "character": "喪服",
        "kana": "もふく",
        "meaning": "mourning dress, mourning clothes",
        "level": 44
    },
    {
        "character": "寸",
        "kana": "すん",
        "meaning": "sun, three point zero three centimeters, three centimeters, three point oh three centimeters",
        "level": 44
    },
    {
        "character": "大砲",
        "kana": "たいほう",
        "meaning": "cannon",
        "level": 44
    },
    {
        "character": "匹",
        "kana": "ひき",
        "meaning": "small animal counter, counter for small animals",
        "level": 44
    },
    {
        "character": "朱",
        "kana": "あけ",
        "meaning": "vermillion, scarlet red, blood",
        "level": 44
    },
    {
        "character": "香辛料",
        "kana": "こうしんりょう",
        "meaning": "spices",
        "level": 44
    },
    {
        "character": "感涙",
        "kana": "かんるい",
        "meaning": "tears of gratitude",
        "level": 44
    },
    {
        "character": "手袋",
        "kana": "てぶくろ",
        "meaning": "gloves",
        "level": 44
    },
    {
        "character": "揺れる",
        "kana": "ゆれる",
        "meaning": "to be shaken, to be jolted",
        "level": 44
    },
    {
        "character": "魚雷",
        "kana": "ぎょらい",
        "meaning": "torpedo",
        "level": 44
    },
    {
        "character": "塔",
        "kana": "とう",
        "meaning": "tower, pagoda",
        "level": 44
    },
    {
        "character": "無縁",
        "kana": "むえん",
        "meaning": "unrelated",
        "level": 44
    },
    {
        "character": "辛い",
        "kana": "からい, つらい",
        "meaning": "spicy, hot, difficult, painful",
        "level": 44
    },
    {
        "character": "釣る",
        "kana": "つる",
        "meaning": "to fish",
        "level": 44
    },
    {
        "character": "辛勝",
        "kana": "しんしょう",
        "meaning": "narrow victory",
        "level": 44
    },
    {
        "character": "謎",
        "kana": "なぞ",
        "meaning": "riddle, a mystery, mystery",
        "level": 44
    },
    {
        "character": "謎々",
        "kana": "なぞなぞ",
        "meaning": "riddle, puzzle, enigma",
        "level": 44
    },
    {
        "character": "缶ビール",
        "kana": "かんびーる, かんビール",
        "meaning": "can beer, canned beer",
        "level": 44
    },
    {
        "character": "揺さぶる",
        "kana": "ゆさぶる",
        "meaning": "to shake, to jolt",
        "level": 44
    },
    {
        "character": "挑戦者",
        "kana": "ちょうせんしゃ",
        "meaning": "a challenger, challenger",
        "level": 44
    },
    {
        "character": "エッフェル塔",
        "kana": "えっふぇるとう, エッフェルとう",
        "meaning": "eiffel tower",
        "level": 44
    },
    {
        "character": "絶叫",
        "kana": "ぜっきょう",
        "meaning": "exclamation, scream, shout",
        "level": 44
    },
    {
        "character": "揚げ",
        "kana": "あげ",
        "meaning": "fried",
        "level": 44
    },
    {
        "character": "本棚",
        "kana": "ほんだな",
        "meaning": "bookcase, bookshelf",
        "level": 44
    },
    {
        "character": "叫ぶ",
        "kana": "さけぶ",
        "meaning": "to shout, to scream",
        "level": 44
    },
    {
        "character": "俺ら",
        "kana": "おれら",
        "meaning": "we",
        "level": 44
    },
    {
        "character": "紛れる",
        "kana": "まぎれる",
        "meaning": "to be diverted, to be distracted",
        "level": 44
    },
    {
        "character": "刃物",
        "kana": "はもの",
        "meaning": "edged tool, cutlery, kitchen cutlery",
        "level": 44
    },
    {
        "character": "刃先",
        "kana": "はさき",
        "meaning": "edge of blade, blade edge",
        "level": 44
    },
    {
        "character": "四匹",
        "kana": "よんひき",
        "meaning": "four small animals",
        "level": 44
    },
    {
        "character": "叱る",
        "kana": "しかる",
        "meaning": "to scold",
        "level": 44
    },
    {
        "character": "斗",
        "kana": "と",
        "meaning": "big dipper, measure of volume, eighteen liters, eighteen litres",
        "level": 44
    },
    {
        "character": "紛らわしい",
        "kana": "まぎらわしい",
        "meaning": "confusing, misleading",
        "level": 44
    },
    {
        "character": "手堅い",
        "kana": "てがたい",
        "meaning": "solid, steady, firm",
        "level": 44
    },
    {
        "character": "忍者",
        "kana": "にんじゃ",
        "meaning": "ninja",
        "level": 44
    },
    {
        "character": "朱印",
        "kana": "しゅいん",
        "meaning": "red seal",
        "level": 44
    },
    {
        "character": "揺する",
        "kana": "ゆする",
        "meaning": "to shake, to jolt",
        "level": 44
    },
    {
        "character": "恐竜",
        "kana": "きょうりゅう",
        "meaning": "dinosaur",
        "level": 44
    },
    {
        "character": "丘",
        "kana": "おか",
        "meaning": "hill, knoll",
        "level": 44
    },
    {
        "character": "髪",
        "kana": "かみ",
        "meaning": "hair, head hair, hair on your head",
        "level": 44
    },
    {
        "character": "竜",
        "kana": "りゅう",
        "meaning": "dragon",
        "level": 44
    },
    {
        "character": "哲学者",
        "kana": "てつがくしゃ",
        "meaning": "philosopher",
        "level": 44
    },
    {
        "character": "娯楽",
        "kana": "ごらく",
        "meaning": "pleasure, amusement",
        "level": 44
    },
    {
        "character": "左翼",
        "kana": "さよく",
        "meaning": "left wing",
        "level": 44
    },
    {
        "character": "網戸",
        "kana": "あみど",
        "meaning": "screen door",
        "level": 44
    },
    {
        "character": "梨",
        "kana": "なし",
        "meaning": "pear",
        "level": 44
    },
    {
        "character": "不吉",
        "kana": "ふきつ",
        "meaning": "ominous, sinister, bad luck, ill omen",
        "level": 44
    },
    {
        "character": "克服する",
        "kana": "こくふくする",
        "meaning": "to conquer",
        "level": 44
    },
    {
        "character": "侍",
        "kana": "さむらい",
        "meaning": "samurai",
        "level": 44
    },
    {
        "character": "芽",
        "kana": "め",
        "meaning": "sprout, bud",
        "level": 44
    },
    {
        "character": "刃",
        "kana": "は",
        "meaning": "blade, sharp edge",
        "level": 44
    },
    {
        "character": "笠",
        "kana": "かさ",
        "meaning": "conical hat, bamboo hat",
        "level": 44
    },
    {
        "character": "缶",
        "kana": "かん",
        "meaning": "tin can, can, tin",
        "level": 44
    },
    {
        "character": "戸棚",
        "kana": "とだな",
        "meaning": "cupboard",
        "level": 44
    },
    {
        "character": "嵐",
        "kana": "あらし",
        "meaning": "storm, tempest",
        "level": 44
    },
    {
        "character": "釣り",
        "kana": "つり",
        "meaning": "fishing",
        "level": 44
    },
    {
        "character": "翼",
        "kana": "つばさ",
        "meaning": "wing, political wing",
        "level": 44
    },
    {
        "character": "俺",
        "kana": "おれ",
        "meaning": "i, me",
        "level": 44
    },
    {
        "character": "一匹",
        "kana": "いっぴき",
        "meaning": "one small animal",
        "level": 44
    },
    {
        "character": "桃色",
        "kana": "ももいろ",
        "meaning": "peach color, peach colour",
        "level": 44
    },
    {
        "character": "粒子",
        "kana": "りゅうし",
        "meaning": "particle, grain, atomic particle",
        "level": 44
    },
    {
        "character": "バベルの塔",
        "kana": "ばべるのとう, バベルのとう",
        "meaning": "tower of babel",
        "level": 44
    },
    {
        "character": "金髪",
        "kana": "きんぱつ",
        "meaning": "blonde",
        "level": 44
    },
    {
        "character": "髪の毛",
        "kana": "かみのけ",
        "meaning": "head hair",
        "level": 44
    },
    {
        "character": "荒らす",
        "kana": "あらす",
        "meaning": "to lay waste, to devastate",
        "level": 44
    },
    {
        "character": "髪型",
        "kana": "かみがた",
        "meaning": "hairstyle, hair style, hairdo",
        "level": 44
    },
    {
        "character": "空き缶",
        "kana": "あきかん",
        "meaning": "empty can",
        "level": 44
    },
    {
        "character": "辛抱",
        "kana": "しんぼう",
        "meaning": "patience, endurance",
        "level": 44
    },
    {
        "character": "缶コーヒー",
        "kana": "かんこーひー, かんコーヒー",
        "meaning": "canned coffee, can coffee",
        "level": 44
    },
    {
        "character": "姫",
        "kana": "ひめ",
        "meaning": "princess, noble girl",
        "level": 44
    },
    {
        "character": "棚",
        "kana": "たな",
        "meaning": "shelf",
        "level": 44
    },
    {
        "character": "雷雨",
        "kana": "らいう",
        "meaning": "thunderstorm",
        "level": 44
    },
    {
        "character": "管制塔",
        "kana": "かんせいとう",
        "meaning": "control tower",
        "level": 44
    },
    {
        "character": "寝床",
        "kana": "ねどこ",
        "meaning": "bed, crib",
        "level": 44
    },
    {
        "character": "握り",
        "kana": "にぎり",
        "meaning": "grip",
        "level": 44
    },
    {
        "character": "見逃す",
        "kana": "みのがす",
        "meaning": "to overlook",
        "level": 44
    },
    {
        "character": "携帯ストラップ",
        "kana": "けいたいストラップ, けいたいすとらっぷ",
        "meaning": "cell phone strap, mobile phone strap",
        "level": 44
    },
    {
        "character": "泊める",
        "kana": "とめる",
        "meaning": "to let someone stay over, to let someone stay the night",
        "level": 44
    },
    {
        "character": "滑り台",
        "kana": "すべりだい",
        "meaning": "playground slide, slide",
        "level": 44
    },
    {
        "character": "焦る",
        "kana": "あせる",
        "meaning": "to be in a hurry, to be impatient",
        "level": 44
    },
    {
        "character": "焦がす",
        "kana": "こがす",
        "meaning": "to burn, to scorch",
        "level": 44
    },
    {
        "character": "井戸",
        "kana": "いど",
        "meaning": "well",
        "level": 45
    },
    {
        "character": "翔ける",
        "kana": "かける",
        "meaning": "to fly, to soar",
        "level": 45
    },
    {
        "character": "溝",
        "kana": "みぞ",
        "meaning": "gutter, ditch, drain",
        "level": 45
    },
    {
        "character": "眺める",
        "kana": "ながめる",
        "meaning": "to stare at, to look at, to view, to gaze at",
        "level": 45
    },
    {
        "character": "いつ頃",
        "kana": "いつごろ",
        "meaning": "about when, how soon",
        "level": 45
    },
    {
        "character": "凶悪",
        "kana": "きょうあく",
        "meaning": "atrocious, fiendish",
        "level": 45
    },
    {
        "character": "細菌",
        "kana": "さいきん",
        "meaning": "bacteria",
        "level": 45
    },
    {
        "character": "襲撃する",
        "kana": "しゅうげきする",
        "meaning": "to attack, to assault",
        "level": 45
    },
    {
        "character": "滝",
        "kana": "たき",
        "meaning": "waterfall",
        "level": 45
    },
    {
        "character": "潮時",
        "kana": "しおどき",
        "meaning": "tidal hour, the right time",
        "level": 45
    },
    {
        "character": "肌触り",
        "kana": "はだざわり",
        "meaning": "the touch of, feel of, texture",
        "level": 45
    },
    {
        "character": "小舟",
        "kana": "こぶね",
        "meaning": "boat, small craft",
        "level": 45
    },
    {
        "character": "暦",
        "kana": "こよみ",
        "meaning": "calendar, almanac",
        "level": 45
    },
    {
        "character": "可也",
        "kana": "かなり",
        "meaning": "considerably, fairly, quite",
        "level": 45
    },
    {
        "character": "凶器",
        "kana": "きょうき",
        "meaning": "dangerous weapon, lethal weapon",
        "level": 45
    },
    {
        "character": "肌",
        "kana": "はだ",
        "meaning": "human skin, skin",
        "level": 45
    },
    {
        "character": "脚",
        "kana": "あし",
        "meaning": "leg, foot",
        "level": 45
    },
    {
        "character": "澄む",
        "kana": "すむ",
        "meaning": "to become clear, to become transparent",
        "level": 45
    },
    {
        "character": "年頃",
        "kana": "としごろ",
        "meaning": "approximate age",
        "level": 45
    },
    {
        "character": "呪い",
        "kana": "のろい",
        "meaning": "curse",
        "level": 45
    },
    {
        "character": "肌色",
        "kana": "はだいろ",
        "meaning": "flesh colored, skin colored",
        "level": 45
    },
    {
        "character": "狩り",
        "kana": "かり",
        "meaning": "hunting",
        "level": 45
    },
    {
        "character": "近頃",
        "kana": "ちかごろ",
        "meaning": "lately, recently",
        "level": 45
    },
    {
        "character": "近距離",
        "kana": "きんきょり",
        "meaning": "short distance",
        "level": 45
    },
    {
        "character": "呪う",
        "kana": "のろう",
        "meaning": "to curse, to put a curse on",
        "level": 45
    },
    {
        "character": "引き裂く",
        "kana": "ひきさく",
        "meaning": "to tear up, to tear off, to split",
        "level": 45
    },
    {
        "character": "西暦",
        "kana": "せいれき",
        "meaning": "christian era",
        "level": 45
    },
    {
        "character": "塾",
        "kana": "じゅく",
        "meaning": "cram school, coaching school, juku",
        "level": 45
    },
    {
        "character": "無菌",
        "kana": "むきん",
        "meaning": "sterilized, sterilised, pasteurised, pasteurized",
        "level": 45
    },
    {
        "character": "霊園",
        "kana": "れいえん",
        "meaning": "cemetery",
        "level": 45
    },
    {
        "character": "ばい菌",
        "kana": "ばいきん",
        "meaning": "germ",
        "level": 45
    },
    {
        "character": "曇る",
        "kana": "くもる",
        "meaning": "to get cloudy, to become cloudy",
        "level": 45
    },
    {
        "character": "裸",
        "kana": "はだか",
        "meaning": "naked",
        "level": 45
    },
    {
        "character": "曇り",
        "kana": "くもり",
        "meaning": "cloudiness, cloudy weather",
        "level": 45
    },
    {
        "character": "賭け",
        "kana": "かけ",
        "meaning": "betting, gambling, a gamble, a bet",
        "level": 45
    },
    {
        "character": "排水溝",
        "kana": "はいすいこう",
        "meaning": "drainage",
        "level": 45
    },
    {
        "character": "疲労",
        "kana": "ひろう",
        "meaning": "fatigue, weariness",
        "level": 45
    },
    {
        "character": "半裸",
        "kana": "はんら",
        "meaning": "half naked, half nude",
        "level": 45
    },
    {
        "character": "賭ける",
        "kana": "かける",
        "meaning": "to gamble, to bet, to stake, to risk",
        "level": 45
    },
    {
        "character": "塾生",
        "kana": "じゅくせい",
        "meaning": "cram school student",
        "level": 45
    },
    {
        "character": "加湿器",
        "kana": "かしつき",
        "meaning": "humidifier",
        "level": 45
    },
    {
        "character": "黒潮",
        "kana": "くろしお",
        "meaning": "japan current, kuroshio current",
        "level": 45
    },
    {
        "character": "海溝",
        "kana": "かいこう",
        "meaning": "ocean trench",
        "level": 45
    },
    {
        "character": "磨く",
        "kana": "みがく",
        "meaning": "to polish, to shine, to brush your teeth",
        "level": 45
    },
    {
        "character": "湿地",
        "kana": "しっち",
        "meaning": "wetlands",
        "level": 45
    },
    {
        "character": "亡霊",
        "kana": "ぼうれい",
        "meaning": "ghost, the dead",
        "level": 45
    },
    {
        "character": "湿気",
        "kana": "しっけ",
        "meaning": "moisture, humidity",
        "level": 45
    },
    {
        "character": "嫁",
        "kana": "よめ",
        "meaning": "bride, wife",
        "level": 45
    },
    {
        "character": "嫁ぐ",
        "kana": "とつぐ",
        "meaning": "to marry",
        "level": 45
    },
    {
        "character": "狂気",
        "kana": "きょうき",
        "meaning": "madness, insanity",
        "level": 45
    },
    {
        "character": "若い頃",
        "kana": "わかいころ",
        "meaning": "one's youth, early life",
        "level": 45
    },
    {
        "character": "擦る",
        "kana": "する, こする",
        "meaning": "to rub, to scrub",
        "level": 45
    },
    {
        "character": "塊",
        "kana": "かたまり",
        "meaning": "lump, mass, bundle",
        "level": 45
    },
    {
        "character": "磨き",
        "kana": "みがき",
        "meaning": "polish, shine",
        "level": 45
    },
    {
        "character": "義塾",
        "kana": "ぎじゅく",
        "meaning": "private school",
        "level": 45
    },
    {
        "character": "滝川",
        "kana": "たきがわ",
        "meaning": "rapids",
        "level": 45
    },
    {
        "character": "先頃",
        "kana": "さきごろ",
        "meaning": "recently, the other day",
        "level": 45
    },
    {
        "character": "硬直",
        "kana": "こうちょく",
        "meaning": "rigidity, stiffening, stiffness",
        "level": 45
    },
    {
        "character": "硬い",
        "kana": "かたい",
        "meaning": "stiff, hard",
        "level": 45
    },
    {
        "character": "魂",
        "kana": "たましい",
        "meaning": "soul",
        "level": 45
    },
    {
        "character": "頃",
        "kana": "ころ, ごろ",
        "meaning": "approximate time, around, about, approximate",
        "level": 45
    },
    {
        "character": "卓",
        "kana": "たく",
        "meaning": "table, desk",
        "level": 45
    },
    {
        "character": "核分裂",
        "kana": "かくぶんれつ",
        "meaning": "nuclear fission, karyokinesis",
        "level": 45
    },
    {
        "character": "〜魂",
        "kana": "こん",
        "meaning": "spirit",
        "level": 45
    },
    {
        "character": "遠距離",
        "kana": "えんきょり",
        "meaning": "long distance",
        "level": 45
    },
    {
        "character": "短距離",
        "kana": "たんきょり",
        "meaning": "short distance",
        "level": 45
    },
    {
        "character": "入籍",
        "kana": "にゅうせき",
        "meaning": "entry in family register",
        "level": 45
    },
    {
        "character": "一斉に",
        "kana": "いっせいに",
        "meaning": "simultaneously, all at once",
        "level": 45
    },
    {
        "character": "滅びる",
        "kana": "ほろびる",
        "meaning": "to be destroyed, to be annihilated",
        "level": 45
    },
    {
        "character": "稼ぐ",
        "kana": "かせぐ",
        "meaning": "to earn income, to make money",
        "level": 45
    },
    {
        "character": "矛",
        "kana": "ほこ",
        "meaning": "halberd",
        "level": 45
    },
    {
        "character": "鳥肌",
        "kana": "とりはだ",
        "meaning": "goosebumps",
        "level": 45
    },
    {
        "character": "元凶",
        "kana": "がんきょう",
        "meaning": "ringleader, main culprit",
        "level": 45
    },
    {
        "character": "舟",
        "kana": "ふね",
        "meaning": "boat",
        "level": 45
    },
    {
        "character": "鐘",
        "kana": "かね",
        "meaning": "bell, chime",
        "level": 45
    },
    {
        "character": "警鐘",
        "kana": "けいしょう",
        "meaning": "alarm bell, fire bell",
        "level": 45
    },
    {
        "character": "狩人",
        "kana": "かりゅうど",
        "meaning": "hunter",
        "level": 45
    },
    {
        "character": "この頃",
        "kana": "このごろ",
        "meaning": "recently, nowadays, these days",
        "level": 45
    },
    {
        "character": "脚本",
        "kana": "きゃくほん",
        "meaning": "script, screenplay",
        "level": 45
    },
    {
        "character": "天井",
        "kana": "てんじょう",
        "meaning": "ceiling",
        "level": 45
    },
    {
        "character": "旧暦",
        "kana": "きゅうれき",
        "meaning": "lunisolar calendar, traditional japanese calendar, japanese calendar",
        "level": 45
    },
    {
        "character": "眺望",
        "kana": "ちょうぼう",
        "meaning": "prospect, view",
        "level": 45
    },
    {
        "character": "全裸",
        "kana": "ぜんら",
        "meaning": "completely nude, totally nude, completely naked, totally naked",
        "level": 45
    },
    {
        "character": "殺菌",
        "kana": "さっきん",
        "meaning": "sterilization, sterilisation",
        "level": 45
    },
    {
        "character": "疲れる",
        "kana": "つかれる",
        "meaning": "to be exhausted, to be tired",
        "level": 45
    },
    {
        "character": "電卓",
        "kana": "でんたく",
        "meaning": "calculator",
        "level": 45
    },
    {
        "character": "食卓",
        "kana": "しょくたく",
        "meaning": "dining table",
        "level": 45
    },
    {
        "character": "卓球",
        "kana": "たっきゅう",
        "meaning": "table tennis, ping pong",
        "level": 45
    },
    {
        "character": "陰",
        "kana": "かげ",
        "meaning": "shadow, shade",
        "level": 45
    },
    {
        "character": "陰気",
        "kana": "いんき",
        "meaning": "gloom, melancholy",
        "level": 45
    },
    {
        "character": "悪霊",
        "kana": "あくりょう",
        "meaning": "evil spirit",
        "level": 45
    },
    {
        "character": "霊感",
        "kana": "れいかん",
        "meaning": "inspiration",
        "level": 45
    },
    {
        "character": "湿る",
        "kana": "しめる",
        "meaning": "to be damp, to be moist, to be wet",
        "level": 45
    },
    {
        "character": "狂う",
        "kana": "くるう",
        "meaning": "to go mad, to go crazy",
        "level": 45
    },
    {
        "character": "包み紙",
        "kana": "つつみがみ",
        "meaning": "wrapping paper",
        "level": 45
    },
    {
        "character": "悪趣味",
        "kana": "あくしゅみ",
        "meaning": "bad habit, bad taste",
        "level": 45
    },
    {
        "character": "阻害",
        "kana": "そがい",
        "meaning": "obstruction, inhibition",
        "level": 46
    },
    {
        "character": "気泡",
        "kana": "きほう",
        "meaning": "air bubble",
        "level": 46
    },
    {
        "character": "庄園",
        "kana": "しょうえん",
        "meaning": "manor",
        "level": 46
    },
    {
        "character": "土俵",
        "kana": "どひょう",
        "meaning": "arena, sumo arena",
        "level": 46
    },
    {
        "character": "幽霊",
        "kana": "ゆうれい",
        "meaning": "ghost, specter, spectre, phantom",
        "level": 46
    },
    {
        "character": "瞳孔",
        "kana": "どうこう",
        "meaning": "pupil, pupillary",
        "level": 46
    },
    {
        "character": "眼孔",
        "kana": "がんこう",
        "meaning": "eye socket",
        "level": 46
    },
    {
        "character": "瞬き",
        "kana": "まばたき",
        "meaning": "a blink, a wink, wink, blink",
        "level": 46
    },
    {
        "character": "零下",
        "kana": "れいか",
        "meaning": "below zero, sub zero",
        "level": 46
    },
    {
        "character": "魔法",
        "kana": "まほう",
        "meaning": "magic, witchcraft",
        "level": 46
    },
    {
        "character": "瞬時",
        "kana": "しゅんじ",
        "meaning": "moment, instant",
        "level": 46
    },
    {
        "character": "涼風",
        "kana": "りょうふう",
        "meaning": "cool breeze, refreshing breeze",
        "level": 46
    },
    {
        "character": "泡",
        "kana": "あわ",
        "meaning": "bubble, foam",
        "level": 46
    },
    {
        "character": "穏やか",
        "kana": "おだやか",
        "meaning": "calm, mild",
        "level": 46
    },
    {
        "character": "俵",
        "kana": "たわら",
        "meaning": "sack, straw bag, bale",
        "level": 46
    },
    {
        "character": "担架",
        "kana": "たんか",
        "meaning": "stretcher, litter",
        "level": 46
    },
    {
        "character": "帝国",
        "kana": "ていこく",
        "meaning": "empire",
        "level": 46
    },
    {
        "character": "誇張",
        "kana": "こちょう",
        "meaning": "exaggeration",
        "level": 46
    },
    {
        "character": "鈍感",
        "kana": "どんかん",
        "meaning": "thickheadedness, insensitivity",
        "level": 46
    },
    {
        "character": "黙る",
        "kana": "だまる",
        "meaning": "to shut up, to be silent",
        "level": 46
    },
    {
        "character": "瞬く",
        "kana": "またたく",
        "meaning": "to blink, to flicker, to twinkle",
        "level": 46
    },
    {
        "character": "二十歳",
        "kana": "はたち",
        "meaning": "twenty years old",
        "level": 46
    },
    {
        "character": "寸暇",
        "kana": "すんか",
        "meaning": "moment's leisure, free minute",
        "level": 46
    },
    {
        "character": "不穏",
        "kana": "ふおん",
        "meaning": "unrest, turbulence",
        "level": 46
    },
    {
        "character": "発泡",
        "kana": "はっぽう",
        "meaning": "foaming",
        "level": 46
    },
    {
        "character": "稲穂",
        "kana": "いなほ",
        "meaning": "head of rice, ear of rice",
        "level": 46
    },
    {
        "character": "幽閉",
        "kana": "ゆうへい",
        "meaning": "confinement, imprisonment",
        "level": 46
    },
    {
        "character": "病棟",
        "kana": "びょうとう",
        "meaning": "hospital ward",
        "level": 46
    },
    {
        "character": "吾輩",
        "kana": "わがはい",
        "meaning": "i, me, myself",
        "level": 46
    },
    {
        "character": "零点",
        "kana": "れいてん",
        "meaning": "zero points, zero marks",
        "level": 46
    },
    {
        "character": "癖",
        "kana": "くせ",
        "meaning": "bad habit, habit",
        "level": 46
    },
    {
        "character": "皇帝",
        "kana": "こうてい",
        "meaning": "emperor",
        "level": 46
    },
    {
        "character": "焦り",
        "kana": "あせり",
        "meaning": "impatience",
        "level": 46
    },
    {
        "character": "帝",
        "kana": "みかど",
        "meaning": "japanese emperor, emperor of japan",
        "level": 46
    },
    {
        "character": "鍛える",
        "kana": "きたえる",
        "meaning": "to forge, to temper, to train, to discipline",
        "level": 46
    },
    {
        "character": "囲碁",
        "kana": "いご",
        "meaning": "go, go board game",
        "level": 46
    },
    {
        "character": "黙殺",
        "kana": "もくさつ",
        "meaning": "ignoring",
        "level": 46
    },
    {
        "character": "一瞬",
        "kana": "いっしゅん",
        "meaning": "an instant, a moment",
        "level": 46
    },
    {
        "character": "碁会所",
        "kana": "ごかいじょ",
        "meaning": "go parlor, go playing parlor",
        "level": 46
    },
    {
        "character": "紛れもない",
        "kana": "まぎれもない",
        "meaning": "certain, unmistaken, obvious",
        "level": 46
    },
    {
        "character": "素粒子",
        "kana": "そりゅうし",
        "meaning": "elementary particle, particle",
        "level": 46
    },
    {
        "character": "綿布",
        "kana": "めんぷ",
        "meaning": "cotton cloth, cotton material",
        "level": 46
    },
    {
        "character": "白菊",
        "kana": "しらぎく",
        "meaning": "white chrysanthemum",
        "level": 46
    },
    {
        "character": "穏当",
        "kana": "おんとう",
        "meaning": "proper, reasonable",
        "level": 46
    },
    {
        "character": "お握り",
        "kana": "おにぎり",
        "meaning": "onigiri, rice ball",
        "level": 46
    },
    {
        "character": "揚げ出し",
        "kana": "あげだし",
        "meaning": "deep fried",
        "level": 46
    },
    {
        "character": "租税",
        "kana": "そぜい",
        "meaning": "taxes, taxation",
        "level": 46
    },
    {
        "character": "租界",
        "kana": "そかい",
        "meaning": "concession, settlement",
        "level": 46
    },
    {
        "character": "叫び",
        "kana": "さけび",
        "meaning": "shout, scream, a shout, a scream",
        "level": 46
    },
    {
        "character": "魔術",
        "kana": "まじゅつ",
        "meaning": "black magic, sorcery",
        "level": 46
    },
    {
        "character": "墨",
        "kana": "すみ",
        "meaning": "ink, black ink",
        "level": 46
    },
    {
        "character": "入れ墨",
        "kana": "いれずみ",
        "meaning": "tattoo",
        "level": 46
    },
    {
        "character": "鳩",
        "kana": "はと",
        "meaning": "pigeon, dove",
        "level": 46
    },
    {
        "character": "鈍器",
        "kana": "どんき",
        "meaning": "blunt weapon",
        "level": 46
    },
    {
        "character": "斬殺",
        "kana": "ざんさつ",
        "meaning": "killing with a sword, putting to the sword",
        "level": 46
    },
    {
        "character": "清涼",
        "kana": "せいりょう",
        "meaning": "cool, refreshing",
        "level": 46
    },
    {
        "character": "〜歳",
        "kana": "さい",
        "meaning": "years old",
        "level": 46
    },
    {
        "character": "猿",
        "kana": "さる",
        "meaning": "monkey",
        "level": 46
    },
    {
        "character": "瞳",
        "kana": "ひとみ",
        "meaning": "pupil",
        "level": 46
    },
    {
        "character": "零時",
        "kana": "れいじ",
        "meaning": "midnight, twelve o'clock",
        "level": 46
    },
    {
        "character": "零",
        "kana": "れい",
        "meaning": "zero",
        "level": 46
    },
    {
        "character": "猿真似",
        "kana": "さるまね",
        "meaning": "monkey see monkey do",
        "level": 46
    },
    {
        "character": "叫び声",
        "kana": "さけびごえ",
        "meaning": "shout, yell, scream",
        "level": 46
    },
    {
        "character": "新芽",
        "kana": "しんめ",
        "meaning": "sprout, bud, shoot",
        "level": 46
    },
    {
        "character": "墨絵",
        "kana": "すみえ",
        "meaning": "ink painting",
        "level": 46
    },
    {
        "character": "平穏",
        "kana": "へいおん",
        "meaning": "calm, tranquil",
        "level": 46
    },
    {
        "character": "鈍い",
        "kana": "にぶい, のろい",
        "meaning": "dull",
        "level": 46
    },
    {
        "character": "歳暮",
        "kana": "せいぼ",
        "meaning": "end of the year, year end gift, end of year gift",
        "level": 46
    },
    {
        "character": "悪魔",
        "kana": "あくま",
        "meaning": "devil, demon, satan",
        "level": 46
    },
    {
        "character": "魔女",
        "kana": "まじょ",
        "meaning": "witch",
        "level": 46
    },
    {
        "character": "寮",
        "kana": "りょう",
        "meaning": "dormitory, hostel",
        "level": 46
    },
    {
        "character": "寮生",
        "kana": "りょうせい",
        "meaning": "boarding student, boarder",
        "level": 46
    },
    {
        "character": "お盆",
        "kana": "おぼん",
        "meaning": "obon, obon festival, lantern festival",
        "level": 46
    },
    {
        "character": "寧ろ",
        "kana": "むしろ",
        "meaning": "rather, better, instead",
        "level": 46
    },
    {
        "character": "丁寧",
        "kana": "ていねい",
        "meaning": "polite, courteous",
        "level": 46
    },
    {
        "character": "斬新",
        "kana": "ざんしん",
        "meaning": "novel idea, original, novel, original idea",
        "level": 46
    },
    {
        "character": "斬る",
        "kana": "きる",
        "meaning": "to cut down, to slice off, to lop off",
        "level": 46
    },
    {
        "character": "椅子",
        "kana": "いす",
        "meaning": "chair",
        "level": 46
    },
    {
        "character": "歳月",
        "kana": "さいげつ",
        "meaning": "time, years",
        "level": 46
    },
    {
        "character": "万歳",
        "kana": "ばんざい",
        "meaning": "banzai",
        "level": 46
    },
    {
        "character": "歳入",
        "kana": "さいにゅう",
        "meaning": "annual revenue",
        "level": 46
    },
    {
        "character": "涼しい",
        "kana": "すずしい",
        "meaning": "cool, refreshing",
        "level": 46
    },
    {
        "character": "鍵",
        "kana": "かぎ",
        "meaning": "key, lock",
        "level": 46
    },
    {
        "character": "零す",
        "kana": "こぼす",
        "meaning": "to spill, to drop, to shed tears",
        "level": 46
    },
    {
        "character": "碁",
        "kana": "ご",
        "meaning": "go, go boardgame",
        "level": 46
    },
    {
        "character": "碁盤",
        "kana": "ごばん",
        "meaning": "go board",
        "level": 46
    },
    {
        "character": "水泡",
        "kana": "すいほう",
        "meaning": "foam, bubble",
        "level": 46
    },
    {
        "character": "口癖",
        "kana": "くちぐせ",
        "meaning": "favorite phrase, catchphrase",
        "level": 46
    },
    {
        "character": "鍛錬",
        "kana": "たんれん",
        "meaning": "tempering, forging",
        "level": 46
    },
    {
        "character": "錬金術",
        "kana": "れんきんじゅつ",
        "meaning": "alchemy",
        "level": 46
    },
    {
        "character": "穂",
        "kana": "ほ",
        "meaning": "head of plant, ear of plant",
        "level": 46
    },
    {
        "character": "帝政",
        "kana": "ていせい",
        "meaning": "imperial government, imperialism",
        "level": 46
    },
    {
        "character": "瞬間",
        "kana": "しゅんかん",
        "meaning": "an instant, instant",
        "level": 46
    },
    {
        "character": "沈黙",
        "kana": "ちんもく",
        "meaning": "silence, hush, awkward silence",
        "level": 46
    },
    {
        "character": "誇大",
        "kana": "こだい",
        "meaning": "exaggeration, hyperbole",
        "level": 46
    },
    {
        "character": "誇る",
        "kana": "ほこる",
        "meaning": "to be proud of, to boast of",
        "level": 46
    },
    {
        "character": "阻む",
        "kana": "はばむ",
        "meaning": "to thwart, to hamper, to prevent",
        "level": 46
    },
    {
        "character": "阻止",
        "kana": "そし",
        "meaning": "obstruction, hinderance",
        "level": 46
    },
    {
        "character": "綿",
        "kana": "わた, めん",
        "meaning": "cotton, cotton plant",
        "level": 46
    },
    {
        "character": "架設",
        "kana": "かせつ",
        "meaning": "construction, building",
        "level": 46
    },
    {
        "character": "書架",
        "kana": "しょか",
        "meaning": "bookshelf, bookcase",
        "level": 46
    },
    {
        "character": "砕く",
        "kana": "くだく",
        "meaning": "to smash, to break",
        "level": 47
    },
    {
        "character": "化粧",
        "kana": "けしょう",
        "meaning": "makeup, cosmetics",
        "level": 47
    },
    {
        "character": "欺く",
        "kana": "あざむく",
        "meaning": "to deceive, to swindle, to delude",
        "level": 47
    },
    {
        "character": "愛憎",
        "kana": "あいぞう",
        "meaning": "love and hate",
        "level": 47
    },
    {
        "character": "墜落",
        "kana": "ついらく",
        "meaning": "falling, crashing",
        "level": 47
    },
    {
        "character": "塀",
        "kana": "へい",
        "meaning": "wall, fence",
        "level": 47
    },
    {
        "character": "塊魂",
        "kana": "かたまりだましい",
        "meaning": "katamari damacy",
        "level": 47
    },
    {
        "character": "唇",
        "kana": "くちびる",
        "meaning": "lips",
        "level": 47
    },
    {
        "character": "畳",
        "kana": "たたみ",
        "meaning": "tatami mat, tatami",
        "level": 47
    },
    {
        "character": "胴体",
        "kana": "どうたい",
        "meaning": "body, trunk, torso",
        "level": 47
    },
    {
        "character": "霧",
        "kana": "きり",
        "meaning": "fog, mist",
        "level": 47
    },
    {
        "character": "詐取",
        "kana": "さしゅ",
        "meaning": "exploitation, fraud, swindle",
        "level": 47
    },
    {
        "character": "朝霧",
        "kana": "あさぎり",
        "meaning": "morning fog",
        "level": 47
    },
    {
        "character": "花柳",
        "kana": "かりゅう",
        "meaning": "red light district",
        "level": 47
    },
    {
        "character": "伊達",
        "kana": "だて",
        "meaning": "elegance, dandyism, sophistication",
        "level": 47
    },
    {
        "character": "巻尺",
        "kana": "まきじゃく",
        "meaning": "tape measure, measuring tape",
        "level": 47
    },
    {
        "character": "澄ます",
        "kana": "すます",
        "meaning": "to clear, to make clear",
        "level": 47
    },
    {
        "character": "疲れ",
        "kana": "つかれ",
        "meaning": "tiredness, fatigue",
        "level": 47
    },
    {
        "character": "お陰で",
        "kana": "おかげで",
        "meaning": "thanks to",
        "level": 47
    },
    {
        "character": "箸",
        "kana": "はし",
        "meaning": "chopsticks",
        "level": 47
    },
    {
        "character": "明瞭",
        "kana": "めいりょう",
        "meaning": "clarity, clearness",
        "level": 47
    },
    {
        "character": "扉",
        "kana": "とびら",
        "meaning": "front door",
        "level": 47
    },
    {
        "character": "お婆さん",
        "kana": "おばあさん",
        "meaning": "grandmother, old woman, old lady",
        "level": 47
    },
    {
        "character": "粘土",
        "kana": "ねんど",
        "meaning": "clay",
        "level": 47
    },
    {
        "character": "崖",
        "kana": "がけ",
        "meaning": "cliff",
        "level": 47
    },
    {
        "character": "〜畳",
        "kana": "じょう",
        "meaning": "counter for tatami mats",
        "level": 47
    },
    {
        "character": "大佐",
        "kana": "たいさ",
        "meaning": "colonel, navy captain",
        "level": 47
    },
    {
        "character": "門扉",
        "kana": "もんぴ",
        "meaning": "doors of a gate, gate doors",
        "level": 47
    },
    {
        "character": "補佐",
        "kana": "ほさ",
        "meaning": "aid, help, assistance",
        "level": 47
    },
    {
        "character": "裸足",
        "kana": "はだし",
        "meaning": "barefoot",
        "level": 47
    },
    {
        "character": "詐欺",
        "kana": "さぎ",
        "meaning": "fraud",
        "level": 47
    },
    {
        "character": "掌握",
        "kana": "しょうあく",
        "meaning": "grasping, seizing, holding",
        "level": 47
    },
    {
        "character": "粘る",
        "kana": "ねばる",
        "meaning": "to be sticky, to persevere",
        "level": 47
    },
    {
        "character": "湿らせる",
        "kana": "しめらせる",
        "meaning": "to moisten, to dampen",
        "level": 47
    },
    {
        "character": "伊勢",
        "kana": "いせ",
        "meaning": "ise",
        "level": 47
    },
    {
        "character": "水滴",
        "kana": "すいてき",
        "meaning": "drop of water, water drop",
        "level": 47
    },
    {
        "character": "扇風機",
        "kana": "せんぷうき",
        "meaning": "electric fan, electronic fan",
        "level": 47
    },
    {
        "character": "挿話",
        "kana": "そうわ",
        "meaning": "episode",
        "level": 47
    },
    {
        "character": "雑巾",
        "kana": "ぞうきん",
        "meaning": "dust cloth, house cloth",
        "level": 47
    },
    {
        "character": "憩う",
        "kana": "いこう",
        "meaning": "to rest, to relax",
        "level": 47
    },
    {
        "character": "お嬢さん",
        "kana": "おじょうさん",
        "meaning": "young lady, daughter",
        "level": 47
    },
    {
        "character": "稼ぎ",
        "kana": "かせぎ",
        "meaning": "earnings",
        "level": 47
    },
    {
        "character": "滴る",
        "kana": "したたる",
        "meaning": "to drip",
        "level": 47
    },
    {
        "character": "悲哀",
        "kana": "ひあい",
        "meaning": "sorrow, grief, sadness",
        "level": 47
    },
    {
        "character": "欠如",
        "kana": "けつじょ",
        "meaning": "lack, deficiency",
        "level": 47
    },
    {
        "character": "中佐",
        "kana": "ちゅうさ",
        "meaning": "lieutenant colonel, navy commander",
        "level": 47
    },
    {
        "character": "車掌",
        "kana": "しゃしょう",
        "meaning": "train conductor",
        "level": 47
    },
    {
        "character": "少佐",
        "kana": "しょうさ",
        "meaning": "major, lieutenant commander",
        "level": 47
    },
    {
        "character": "詐称",
        "kana": "さしょう",
        "meaning": "misrepresentation, false statement",
        "level": 47
    },
    {
        "character": "貨幣",
        "kana": "かへい",
        "meaning": "money, currency, coinage",
        "level": 47
    },
    {
        "character": "土塀",
        "kana": "どべい",
        "meaning": "mud wall, earthen wall",
        "level": 47
    },
    {
        "character": "老婆",
        "kana": "ろうば",
        "meaning": "old woman, elderly woman",
        "level": 47
    },
    {
        "character": "哀れ",
        "kana": "あわれ",
        "meaning": "pity, sorrow, grief",
        "level": 47
    },
    {
        "character": "虹",
        "kana": "にじ",
        "meaning": "rainbow",
        "level": 47
    },
    {
        "character": "虹色",
        "kana": "にじいろ",
        "meaning": "rainbow colored, rainbow coloured",
        "level": 47
    },
    {
        "character": "点滴",
        "kana": "てんてき",
        "meaning": "raindrops, falling drops of water, intravenous drip, iv drip",
        "level": 47
    },
    {
        "character": "砕石",
        "kana": "さいせき",
        "meaning": "rubble, broken stone",
        "level": 47
    },
    {
        "character": "上唇",
        "kana": "うわくちびる",
        "meaning": "upper lip, top lip",
        "level": 47
    },
    {
        "character": "粉砕",
        "kana": "ふんさい",
        "meaning": "pulverization, smashing",
        "level": 47
    },
    {
        "character": "休憩",
        "kana": "きゅうけい",
        "meaning": "rest, break, recess, intermission",
        "level": 47
    },
    {
        "character": "炊飯器",
        "kana": "すいはんき",
        "meaning": "rice cooker",
        "level": 47
    },
    {
        "character": "尺",
        "kana": "しゃく",
        "meaning": "shaku, japanese foot",
        "level": 47
    },
    {
        "character": "粘々",
        "kana": "ねばねば",
        "meaning": "stickiness, sticky",
        "level": 47
    },
    {
        "character": "芯",
        "kana": "しん",
        "meaning": "wick, marrow, stapler staple, pencil lead, stuffing, core",
        "level": 47
    },
    {
        "character": "柳",
        "kana": "やなぎ",
        "meaning": "willow, weeping willow",
        "level": 47
    },
    {
        "character": "撃墜",
        "kana": "げきつい",
        "meaning": "shooting down, shooting down an aircraft",
        "level": 47
    },
    {
        "character": "突如",
        "kana": "とつじょ",
        "meaning": "suddenly, all of a sudden",
        "level": 47
    },
    {
        "character": "黒い霧",
        "kana": "くろいきり",
        "meaning": "thick fog",
        "level": 47
    },
    {
        "character": "〜狩り",
        "kana": "かり, がり",
        "meaning": "hunting",
        "level": 47
    },
    {
        "character": "粘着",
        "kana": "ねんちゃく",
        "meaning": "cohesion, adhesion",
        "level": 47
    },
    {
        "character": "矛先",
        "kana": "ほこさき",
        "meaning": "point of spear, spearpoint, brunt",
        "level": 47
    },
    {
        "character": "下唇",
        "kana": "したくちびる",
        "meaning": "lower lip, bottom lip",
        "level": 47
    },
    {
        "character": "躍如",
        "kana": "やくじょ",
        "meaning": "lifelike, vivid",
        "level": 47
    },
    {
        "character": "布巾",
        "kana": "ふきん",
        "meaning": "dish cloth, tea towel",
        "level": 47
    },
    {
        "character": "帽子",
        "kana": "ぼうし",
        "meaning": "hat, cap",
        "level": 47
    },
    {
        "character": "扇ぐ",
        "kana": "あおぐ",
        "meaning": "to fan",
        "level": 47
    },
    {
        "character": "紙幣",
        "kana": "しへい",
        "meaning": "paper money, notes, bills",
        "level": 47
    },
    {
        "character": "恨む",
        "kana": "うらむ",
        "meaning": "to hold a grudge",
        "level": 47
    },
    {
        "character": "可哀想",
        "kana": "かわいそう",
        "meaning": "pitiful, poor, pitiable, pathetic",
        "level": 47
    },
    {
        "character": "憎む",
        "kana": "にくむ",
        "meaning": "to hate, to detest",
        "level": 47
    },
    {
        "character": "扇子",
        "kana": "せんす",
        "meaning": "folding fan, traditional paper fan, paper fan",
        "level": 47
    },
    {
        "character": "挿絵",
        "kana": "さしえ",
        "meaning": "book illustration",
        "level": 47
    },
    {
        "character": "挿入",
        "kana": "そうにゅう",
        "meaning": "insertion",
        "level": 47
    },
    {
        "character": "掌",
        "kana": "てのひら",
        "meaning": "palm of one's hand, palm",
        "level": 47
    },
    {
        "character": "炊く",
        "kana": "たく",
        "meaning": "to cook, to boil, to cook grains",
        "level": 47
    },
    {
        "character": "自炊",
        "kana": "じすい",
        "meaning": "cooking for oneself",
        "level": 47
    },
    {
        "character": "炊事",
        "kana": "すいじ",
        "meaning": "cooking, culinary arts",
        "level": 47
    },
    {
        "character": "歯を磨く",
        "kana": "はをみがく",
        "meaning": "to brush one's teeth",
        "level": 47
    },
    {
        "character": "爽やか",
        "kana": "さわやか",
        "meaning": "refreshing, fresh, invigorating, eloquent",
        "level": 47
    },
    {
        "character": "割り箸",
        "kana": "わりばし",
        "meaning": "splittable chopsticks, splittable wood chopsticks",
        "level": 47
    },
    {
        "character": "胴",
        "kana": "どう",
        "meaning": "torso, abdomen, waist",
        "level": 47
    },
    {
        "character": "川柳",
        "kana": "せんりゅう",
        "meaning": "comic haiku",
        "level": 47
    },
    {
        "character": "眺め",
        "kana": "ながめ",
        "meaning": "scene, view, prospect",
        "level": 47
    },
    {
        "character": "痛恨",
        "kana": "つうこん",
        "meaning": "regret, regretful",
        "level": 47
    },
    {
        "character": "踊る",
        "kana": "おどる",
        "meaning": "to dance",
        "level": 48
    },
    {
        "character": "培養",
        "kana": "ばいよう",
        "meaning": "cultivation, nurture",
        "level": 48
    },
    {
        "character": "踊り場",
        "kana": "おどりば",
        "meaning": "dance hall, dance floor",
        "level": 48
    },
    {
        "character": "貯蓄",
        "kana": "ちょちく",
        "meaning": "savings",
        "level": 48
    },
    {
        "character": "盾",
        "kana": "たて",
        "meaning": "shield",
        "level": 48
    },
    {
        "character": "後ろ盾",
        "kana": "うしろだて",
        "meaning": "backing, support, backer, supporter",
        "level": 48
    },
    {
        "character": "貼る",
        "kana": "はる",
        "meaning": "to paste, to stick",
        "level": 48
    },
    {
        "character": "闇",
        "kana": "やみ",
        "meaning": "darkness, the dark",
        "level": 48
    },
    {
        "character": "隙",
        "kana": "すき",
        "meaning": "crevice, gap, space",
        "level": 48
    },
    {
        "character": "鉢",
        "kana": "はち",
        "meaning": "bowl, pot, basin",
        "level": 48
    },
    {
        "character": "蛇",
        "kana": "へび",
        "meaning": "snake",
        "level": 48
    },
    {
        "character": "踊り",
        "kana": "おどり",
        "meaning": "dance",
        "level": 48
    },
    {
        "character": "未遂",
        "kana": "みすい",
        "meaning": "attempt",
        "level": 48
    },
    {
        "character": "水溶性",
        "kana": "すいようせい",
        "meaning": "water soluble",
        "level": 48
    },
    {
        "character": "麻酔",
        "kana": "ますい",
        "meaning": "anesthesia, anaesthesia",
        "level": 48
    },
    {
        "character": "水彩画",
        "kana": "すいさいが",
        "meaning": "watercolor painting",
        "level": 48
    },
    {
        "character": "光輝",
        "kana": "こうき",
        "meaning": "brightness, splendor",
        "level": 48
    },
    {
        "character": "辱める",
        "kana": "はずかしめる",
        "meaning": "to humiliate, to embarass",
        "level": 48
    },
    {
        "character": "家畜",
        "kana": "かちく",
        "meaning": "domestic animals, livestock, cattle",
        "level": 48
    },
    {
        "character": "火鉢",
        "kana": "ひばち",
        "meaning": "brazier",
        "level": 48
    },
    {
        "character": "畜生",
        "kana": "ちくしょう",
        "meaning": "damn it, beast, son of a bitch",
        "level": 48
    },
    {
        "character": "溶岩",
        "kana": "ようがん",
        "meaning": "lava",
        "level": 48
    },
    {
        "character": "記帳",
        "kana": "きちょう",
        "meaning": "registry, entry",
        "level": 48
    },
    {
        "character": "班",
        "kana": "はん",
        "meaning": "squad, group, party, team",
        "level": 48
    },
    {
        "character": "遅咲き",
        "kana": "おそざき",
        "meaning": "late flower, late blooming",
        "level": 48
    },
    {
        "character": "遂行",
        "kana": "すいこう",
        "meaning": "accomplishment, execution",
        "level": 48
    },
    {
        "character": "癖に",
        "kana": "くせに",
        "meaning": "and yet, though, in spite of",
        "level": 48
    },
    {
        "character": "塗布",
        "kana": "とふ",
        "meaning": "application, coating",
        "level": 48
    },
    {
        "character": "畜産",
        "kana": "ちくさん",
        "meaning": "animal husbandry",
        "level": 48
    },
    {
        "character": "盆踊り",
        "kana": "ぼんおどり",
        "meaning": "bon festival dance, bon odori, lantern festival dance",
        "level": 48
    },
    {
        "character": "脇",
        "kana": "わき",
        "meaning": "armpit, under one's arm",
        "level": 48
    },
    {
        "character": "麻",
        "kana": "あさ",
        "meaning": "cannabis, hemp",
        "level": 48
    },
    {
        "character": "返り咲き",
        "kana": "かえりざき",
        "meaning": "comeback, second bloom",
        "level": 48
    },
    {
        "character": "咲く",
        "kana": "さく",
        "meaning": "to bloom, to blossom",
        "level": 48
    },
    {
        "character": "飢える",
        "kana": "うえる",
        "meaning": "to starve, to thirst, to be hungry",
        "level": 48
    },
    {
        "character": "培う",
        "kana": "つちかう",
        "meaning": "to cultivate, to foster",
        "level": 48
    },
    {
        "character": "耐える",
        "kana": "たえる",
        "meaning": "to endure, to withstand",
        "level": 48
    },
    {
        "character": "塗る",
        "kana": "ぬる",
        "meaning": "to paint, to plaster, to lacquer",
        "level": 48
    },
    {
        "character": "塗装",
        "kana": "とそう",
        "meaning": "coating, painting",
        "level": 48
    },
    {
        "character": "暗闇",
        "kana": "くらやみ",
        "meaning": "darkness, the dark",
        "level": 48
    },
    {
        "character": "霜",
        "kana": "しも",
        "meaning": "frost",
        "level": 48
    },
    {
        "character": "理不尽",
        "kana": "りふじん",
        "meaning": "unreasonable, irrational",
        "level": 48
    },
    {
        "character": "賢人",
        "kana": "けんじん",
        "meaning": "wise man",
        "level": 48
    },
    {
        "character": "魔法使い",
        "kana": "まほうつかい",
        "meaning": "wizard, magician, sorcerer",
        "level": 48
    },
    {
        "character": "賢い",
        "kana": "かしこい",
        "meaning": "clever, intelligent",
        "level": 48
    },
    {
        "character": "尽力",
        "kana": "じんりょく",
        "meaning": "efforts, assistance",
        "level": 48
    },
    {
        "character": "輝度",
        "kana": "きど",
        "meaning": "luminance, brightness, clearness",
        "level": 48
    },
    {
        "character": "隙間",
        "kana": "すきま",
        "meaning": "crevice, crack, gap, opening",
        "level": 48
    },
    {
        "character": "耐火",
        "kana": "たいか",
        "meaning": "fireproof",
        "level": 48
    },
    {
        "character": "餓死",
        "kana": "がし",
        "meaning": "death from starvation, starving to death",
        "level": 48
    },
    {
        "character": "屈辱",
        "kana": "くつじょく",
        "meaning": "disgrace, humiliation",
        "level": 48
    },
    {
        "character": "耐久性",
        "kana": "たいきゅうせい",
        "meaning": "durability",
        "level": 48
    },
    {
        "character": "鉢巻",
        "kana": "はちまき",
        "meaning": "headband",
        "level": 48
    },
    {
        "character": "備蓄",
        "kana": "びちく",
        "meaning": "emergency stores",
        "level": 48
    },
    {
        "character": "殴打",
        "kana": "おうだ",
        "meaning": "hit, strike, blow",
        "level": 48
    },
    {
        "character": "帝国主義",
        "kana": "ていこくしゅぎ",
        "meaning": "imperialism",
        "level": 48
    },
    {
        "character": "斜め",
        "kana": "ななめ",
        "meaning": "diagonal, slanting, tilted",
        "level": 48
    },
    {
        "character": "忍耐",
        "kana": "にんたい",
        "meaning": "endurance, perseverance",
        "level": 48
    },
    {
        "character": "記憶",
        "kana": "きおく",
        "meaning": "memory, recollection",
        "level": 48
    },
    {
        "character": "油彩",
        "kana": "ゆさい",
        "meaning": "oil painting",
        "level": 48
    },
    {
        "character": "脇見",
        "kana": "わきみ",
        "meaning": "looking from the side, looking aside",
        "level": 48
    },
    {
        "character": "手帳",
        "kana": "てちょう",
        "meaning": "notebook, memo pad",
        "level": 48
    },
    {
        "character": "塗料",
        "kana": "とりょう",
        "meaning": "paints, painting material",
        "level": 48
    },
    {
        "character": "後悔",
        "kana": "こうかい",
        "meaning": "regret, repentance",
        "level": 48
    },
    {
        "character": "飢餓",
        "kana": "きが",
        "meaning": "starvation, famine, hunger",
        "level": 48
    },
    {
        "character": "街灯",
        "kana": "がいとう",
        "meaning": "streetlight, street lamp",
        "level": 48
    },
    {
        "character": "脇役",
        "kana": "わきやく",
        "meaning": "supporting actor, supporting role, minor role",
        "level": 48
    },
    {
        "character": "電話帳",
        "kana": "でんわちょう",
        "meaning": "telephone book, telephone directory",
        "level": 48
    },
    {
        "character": "脅し",
        "kana": "おどし",
        "meaning": "threat, a threat",
        "level": 48
    },
    {
        "character": "矛盾",
        "kana": "むじゅん",
        "meaning": "contradiction",
        "level": 48
    },
    {
        "character": "騎馬",
        "kana": "きば",
        "meaning": "horse riding",
        "level": 48
    },
    {
        "character": "迷彩",
        "kana": "めいさい",
        "meaning": "camouflage, disguise",
        "level": 48
    },
    {
        "character": "脅迫",
        "kana": "きょうはく",
        "meaning": "threat, menace",
        "level": 48
    },
    {
        "character": "涼む",
        "kana": "すずむ",
        "meaning": "to cool oneself, to cool off",
        "level": 48
    },
    {
        "character": "蓄える",
        "kana": "たくわえる",
        "meaning": "to amass, to store, to lay in stock, to have a beard, to grow a beard",
        "level": 48
    },
    {
        "character": "蚊",
        "kana": "か",
        "meaning": "mosquito",
        "level": 48
    },
    {
        "character": "蚊帳",
        "kana": "かや",
        "meaning": "mosquito net",
        "level": 48
    },
    {
        "character": "メモ帳",
        "kana": "めもちょう, メモちょう",
        "meaning": "memo book, memo pad, notebook, notepad, scratchpad",
        "level": 48
    },
    {
        "character": "恥辱",
        "kana": "ちじょく",
        "meaning": "disgrace, shame",
        "level": 48
    },
    {
        "character": "無闇に",
        "kana": "むやみに",
        "meaning": "unreasonably, absurdly",
        "level": 48
    },
    {
        "character": "迅速",
        "kana": "じんそく",
        "meaning": "quick, fast, rapid, swift",
        "level": 48
    },
    {
        "character": "溶かす",
        "kana": "とかす",
        "meaning": "to melt something, to melt",
        "level": 48
    },
    {
        "character": "騎士",
        "kana": "きし",
        "meaning": "knight",
        "level": 48
    },
    {
        "character": "騎手",
        "kana": "きしゅ",
        "meaning": "horse rider",
        "level": 48
    },
    {
        "character": "騎兵",
        "kana": "きへい",
        "meaning": "cavalry",
        "level": 48
    },
    {
        "character": "彩る",
        "kana": "いろどる",
        "meaning": "to color something, to colour something, to color, to colour",
        "level": 48
    },
    {
        "character": "色彩",
        "kana": "しきさい",
        "meaning": "color, colour",
        "level": 48
    },
    {
        "character": "車椅子",
        "kana": "くるまいす",
        "meaning": "wheelchair",
        "level": 48
    },
    {
        "character": "憶測",
        "kana": "おくそく",
        "meaning": "guess, speculation",
        "level": 48
    },
    {
        "character": "耐熱",
        "kana": "たいねつ",
        "meaning": "heat resisting, heat resistant",
        "level": 48
    },
    {
        "character": "賢明",
        "kana": "けんめい",
        "meaning": "wisdom, intelligence",
        "level": 48
    },
    {
        "character": "輝く",
        "kana": "かがやく",
        "meaning": "to shine, to glitter, to sparkle",
        "level": 48
    },
    {
        "character": "大麻",
        "kana": "たいま",
        "meaning": "hemp, cannabis, shinto paper offerings",
        "level": 48
    },
    {
        "character": "灯り",
        "kana": "あかり",
        "meaning": "lamp, light, torch",
        "level": 48
    },
    {
        "character": "電灯",
        "kana": "でんとう",
        "meaning": "electric light, lamp",
        "level": 48
    },
    {
        "character": "悔しい",
        "kana": "くやしい",
        "meaning": "regrettable, vexing, annoying",
        "level": 48
    },
    {
        "character": "首班",
        "kana": "しゅはん",
        "meaning": "head, leader",
        "level": 48
    },
    {
        "character": "尽きる",
        "kana": "つきる",
        "meaning": "to be exhausted, to be used up, to exhaust, to use up",
        "level": 48
    },
    {
        "character": "班長",
        "kana": "はんちょう",
        "meaning": "squad leader, honcho, team leader, group leader",
        "level": 48
    },
    {
        "character": "斜面",
        "kana": "しゃめん",
        "meaning": "slant, slope",
        "level": 48
    },
    {
        "character": "斜体",
        "kana": "しゃたい",
        "meaning": "italics, italic font style",
        "level": 48
    },
    {
        "character": "殴る",
        "kana": "なぐる",
        "meaning": "to punch, to strike, to hit",
        "level": 48
    },
    {
        "character": "収穫",
        "kana": "しゅうかく",
        "meaning": "harvest, crop",
        "level": 48
    },
    {
        "character": "土俵際",
        "kana": "どひょうぎわ",
        "meaning": "edge of a sumo ring, sumo ring edge, edge, sumo ring",
        "level": 48
    },
    {
        "character": "紛れ",
        "kana": "まぐれ, まぎれ",
        "meaning": "fluke, chance",
        "level": 48
    },
    {
        "character": "抽象",
        "kana": "ちゅうしょう",
        "meaning": "abstract",
        "level": 49
    },
    {
        "character": "隔週",
        "kana": "かくしゅう",
        "meaning": "every other week",
        "level": 49
    },
    {
        "character": "粘り",
        "kana": "ねばり",
        "meaning": "stickiness",
        "level": 49
    },
    {
        "character": "桑原",
        "kana": "くわばら",
        "meaning": "mulberry field",
        "level": 49
    },
    {
        "character": "仏壇",
        "kana": "ぶつだん",
        "meaning": "buddhist altar",
        "level": 49
    },
    {
        "character": "抽出",
        "kana": "ちゅうしゅつ",
        "meaning": "extraction, selection, sampling, abstraction",
        "level": 49
    },
    {
        "character": "征服",
        "kana": "せいふく",
        "meaning": "conquest, subjugation",
        "level": 49
    },
    {
        "character": "隔月",
        "kana": "かくげつ",
        "meaning": "every other month",
        "level": 49
    },
    {
        "character": "陰謀",
        "kana": "いんぼう",
        "meaning": "conspiracy",
        "level": 49
    },
    {
        "character": "衰退",
        "kana": "すいたい",
        "meaning": "decline, decay",
        "level": 49
    },
    {
        "character": "拘置",
        "kana": "こうち",
        "meaning": "detention, confinement",
        "level": 49
    },
    {
        "character": "侵食",
        "kana": "しんしょく",
        "meaning": "erosion, corrosion",
        "level": 49
    },
    {
        "character": "開拓",
        "kana": "かいたく",
        "meaning": "reclamation, cultivation, pioneering",
        "level": 49
    },
    {
        "character": "壇",
        "kana": "だん",
        "meaning": "podium, platform",
        "level": 49
    },
    {
        "character": "遠征",
        "kana": "えんせい",
        "meaning": "expedition, campaign",
        "level": 49
    },
    {
        "character": "扇",
        "kana": "おうぎ",
        "meaning": "folding fan",
        "level": 49
    },
    {
        "character": "民俗",
        "kana": "みんぞく",
        "meaning": "folk customs, ethnic customs",
        "level": 49
    },
    {
        "character": "概念",
        "kana": "がいねん",
        "meaning": "general idea, concept, notion",
        "level": 49
    },
    {
        "character": "大概",
        "kana": "たいがい",
        "meaning": "in general, mainly, mostly",
        "level": 49
    },
    {
        "character": "憎らしい",
        "kana": "にくらしい",
        "meaning": "hateful",
        "level": 49
    },
    {
        "character": "劣等感",
        "kana": "れっとうかん",
        "meaning": "inferiority complex",
        "level": 49
    },
    {
        "character": "詐欺師",
        "kana": "さぎし",
        "meaning": "swindler",
        "level": 49
    },
    {
        "character": "浸る",
        "kana": "ひたる",
        "meaning": "to be soaked in, to be submerged, to be flooded",
        "level": 49
    },
    {
        "character": "草刈り",
        "kana": "くさかり",
        "meaning": "mowing, mower",
        "level": 49
    },
    {
        "character": "淡い",
        "kana": "あわい",
        "meaning": "faint, pale",
        "level": 49
    },
    {
        "character": "王妃",
        "kana": "おうひ",
        "meaning": "queen",
        "level": 49
    },
    {
        "character": "概算",
        "kana": "がいさん",
        "meaning": "approximation, rough estimate",
        "level": 49
    },
    {
        "character": "憎い",
        "kana": "にくい",
        "meaning": "hateful, abominable, detestable",
        "level": 49
    },
    {
        "character": "お婆ちゃん",
        "kana": "おばあちゃん",
        "meaning": "granny, grandma, old lady, old woman",
        "level": 49
    },
    {
        "character": "尼",
        "kana": "あま",
        "meaning": "nun",
        "level": 49
    },
    {
        "character": "覚悟",
        "kana": "かくご",
        "meaning": "resolution, readiness, preparedness, resignation",
        "level": 49
    },
    {
        "character": "休憩所",
        "kana": "きゅうけいじょ",
        "meaning": "rest area, rest stop",
        "level": 49
    },
    {
        "character": "転覆",
        "kana": "てんぷく",
        "meaning": "capsizing, overturn",
        "level": 49
    },
    {
        "character": "珠算",
        "kana": "しゅざん",
        "meaning": "calculation with abacus",
        "level": 49
    },
    {
        "character": "覆面",
        "kana": "ふくめん",
        "meaning": "mask",
        "level": 49
    },
    {
        "character": "唯物論",
        "kana": "ゆいぶつろん",
        "meaning": "materialism",
        "level": 49
    },
    {
        "character": "勘弁",
        "kana": "かんべん",
        "meaning": "pardon, forgiveness",
        "level": 49
    },
    {
        "character": "桑畑",
        "kana": "くわばたけ",
        "meaning": "mulberry field, mulberry plantation",
        "level": 49
    },
    {
        "character": "桑",
        "kana": "くわ",
        "meaning": "mulberry tree, mulberry",
        "level": 49
    },
    {
        "character": "真珠",
        "kana": "しんじゅ",
        "meaning": "pearl",
        "level": 49
    },
    {
        "character": "勘",
        "kana": "かん",
        "meaning": "intuition, perception, hunch",
        "level": 49
    },
    {
        "character": "陶器",
        "kana": "とうき",
        "meaning": "pottery, ceramics",
        "level": 49
    },
    {
        "character": "鶴",
        "kana": "つる",
        "meaning": "crane",
        "level": 49
    },
    {
        "character": "抽選",
        "kana": "ちゅうせん",
        "meaning": "lottery, raffle",
        "level": 49
    },
    {
        "character": "浸透",
        "kana": "しんとう",
        "meaning": "permeation, soaking, osmosis",
        "level": 49
    },
    {
        "character": "憎しみ",
        "kana": "にくしみ",
        "meaning": "hatred",
        "level": 49
    },
    {
        "character": "挿入する",
        "kana": "そうにゅうする",
        "meaning": "to insert",
        "level": 49
    },
    {
        "character": "尼僧",
        "kana": "にそう",
        "meaning": "nun, priestess",
        "level": 49
    },
    {
        "character": "概要",
        "kana": "がいよう",
        "meaning": "outline, summary",
        "level": 49
    },
    {
        "character": "煮る",
        "kana": "にる",
        "meaning": "to boil, to simmer",
        "level": 49
    },
    {
        "character": "刈る",
        "kana": "かる",
        "meaning": "to prune, to mow, to cut",
        "level": 49
    },
    {
        "character": "劣る",
        "kana": "おとる",
        "meaning": "to be inferior to",
        "level": 49
    },
    {
        "character": "悟る",
        "kana": "さとる",
        "meaning": "to realize",
        "level": 49
    },
    {
        "character": "潤う",
        "kana": "うるおう",
        "meaning": "to be moist, to be damp, to be watered",
        "level": 49
    },
    {
        "character": "謀る",
        "kana": "はかる",
        "meaning": "to conspire, to plot",
        "level": 49
    },
    {
        "character": "隔てる",
        "kana": "へだてる",
        "meaning": "to isolate, to partition, to separate",
        "level": 49
    },
    {
        "character": "気概",
        "kana": "きがい",
        "meaning": "strong spirit, backbone",
        "level": 49
    },
    {
        "character": "紫外線",
        "kana": "しがいせん",
        "meaning": "ultra violet rays",
        "level": 49
    },
    {
        "character": "数珠",
        "kana": "じゅず",
        "meaning": "rosary, prayer beads",
        "level": 49
    },
    {
        "character": "奨学金",
        "kana": "しょうがくきん",
        "meaning": "scholarship, stipend",
        "level": 49
    },
    {
        "character": "一概に",
        "kana": "いちがいに",
        "meaning": "unconditionally, as a rule",
        "level": 49
    },
    {
        "character": "剛健",
        "kana": "ごうけん",
        "meaning": "vigor, vigour, virility",
        "level": 49
    },
    {
        "character": "唯一",
        "kana": "ゆいつ, ゆいいつ",
        "meaning": "only, sole, unique",
        "level": 49
    },
    {
        "character": "妃",
        "kana": "ひ",
        "meaning": "princess",
        "level": 49
    },
    {
        "character": "勘案",
        "kana": "かんあん",
        "meaning": "taking into consideration, giving consideration",
        "level": 49
    },
    {
        "character": "誓約",
        "kana": "せいやく",
        "meaning": "written vow, pledge, covenant",
        "level": 49
    },
    {
        "character": "紫",
        "kana": "むらさき",
        "meaning": "purple",
        "level": 49
    },
    {
        "character": "無謀",
        "kana": "むぼう",
        "meaning": "reckless, thoughtless, unpremeditated",
        "level": 49
    },
    {
        "character": "老衰",
        "kana": "ろうすい",
        "meaning": "senility, senile decay",
        "level": 49
    },
    {
        "character": "浸水",
        "kana": "しんすい",
        "meaning": "submersion, flood",
        "level": 49
    },
    {
        "character": "花柳界",
        "kana": "かりゅうかい",
        "meaning": "red light district, pleasure quarters, world of the geisha",
        "level": 49
    },
    {
        "character": "哀れむ",
        "kana": "あわれむ",
        "meaning": "to pity, to have mercy on",
        "level": 49
    },
    {
        "character": "恨み",
        "kana": "うらみ",
        "meaning": "grudge, resentment, malice",
        "level": 49
    },
    {
        "character": "雑煮",
        "kana": "ぞうに",
        "meaning": "new year's dish, mochi soup",
        "level": 49
    },
    {
        "character": "陛下",
        "kana": "へいか",
        "meaning": "your majesty, his majesty, her majesty",
        "level": 49
    },
    {
        "character": "煮物",
        "kana": "にもの",
        "meaning": "boiled foods, stewed foods",
        "level": 49
    },
    {
        "character": "覆る",
        "kana": "くつがえる",
        "meaning": "to capsize, to topple over, to be overturned",
        "level": 49
    },
    {
        "character": "陶芸",
        "kana": "とうげい",
        "meaning": "ceramic art, ceramics",
        "level": 49
    },
    {
        "character": "隔離",
        "kana": "かくり",
        "meaning": "isolation, quarantine",
        "level": 49
    },
    {
        "character": "貨幣価値",
        "kana": "かへいかち",
        "meaning": "currency value",
        "level": 49
    },
    {
        "character": "俗語",
        "kana": "ぞくご",
        "meaning": "colloquialism, colloquial language",
        "level": 49
    },
    {
        "character": "割り勘",
        "kana": "わりかん",
        "meaning": "splitting the cost, splitting the bill",
        "level": 49
    },
    {
        "character": "俗",
        "kana": "ぞく",
        "meaning": "slang, local manners, local customs",
        "level": 49
    },
    {
        "character": "憩い",
        "kana": "いこい",
        "meaning": "rest",
        "level": 49
    },
    {
        "character": "紫色",
        "kana": "むらさきいろ",
        "meaning": "violet, purple",
        "level": 49
    },
    {
        "character": "推奨",
        "kana": "すいしょう",
        "meaning": "recommendation, endorsement",
        "level": 49
    },
    {
        "character": "皇太子妃",
        "kana": "こうたいしひ",
        "meaning": "crown princess",
        "level": 49
    },
    {
        "character": "劣化",
        "kana": "れっか",
        "meaning": "deterioration, degredation",
        "level": 49
    },
    {
        "character": "劣悪",
        "kana": "れつあく",
        "meaning": "inferiority, coarseness",
        "level": 49
    },
    {
        "character": "不明瞭",
        "kana": "ふめいりょう",
        "meaning": "dimness, obscurity, unclear, unintelligible",
        "level": 49
    },
    {
        "character": "勘違い",
        "kana": "かんちがい",
        "meaning": "misunderstanding, wrong guess",
        "level": 49
    },
    {
        "character": "衰える",
        "kana": "おとろえる",
        "meaning": "to decline, to decay, to become weak, to wither",
        "level": 49
    },
    {
        "character": "団扇",
        "kana": "うちわ",
        "meaning": "fan",
        "level": 49
    },
    {
        "character": "駒",
        "kana": "こま",
        "meaning": "chess piece, shogi piece",
        "level": 49
    },
    {
        "character": "誓い",
        "kana": "ちかい",
        "meaning": "vow, oath",
        "level": 49
    },
    {
        "character": "礎",
        "kana": "いしずえ",
        "meaning": "foundation",
        "level": 49
    },
    {
        "character": "基礎",
        "kana": "きそ",
        "meaning": "foundation, fundamentals",
        "level": 49
    },
    {
        "character": "利潤",
        "kana": "りじゅん",
        "meaning": "profit, returns",
        "level": 49
    },
    {
        "character": "刈り取る",
        "kana": "かりとる",
        "meaning": "to mow, to reap, to harvest",
        "level": 49
    },
    {
        "character": "間隔",
        "kana": "かんかく",
        "meaning": "small gap",
        "level": 49
    },
    {
        "character": "お疲れ様",
        "kana": "おつかれさま",
        "meaning": "thank you, that's enough for today, good work",
        "level": 49
    },
    {
        "character": "唯",
        "kana": "ただ",
        "meaning": "ordinary, common, free of charge, only, merely, just",
        "level": 49
    },
    {
        "character": "淡水",
        "kana": "たんすい",
        "meaning": "fresh water",
        "level": 49
    },
    {
        "character": "花壇",
        "kana": "かだん",
        "meaning": "flower bed",
        "level": 49
    },
    {
        "character": "尽くす",
        "kana": "つくす",
        "meaning": "to exhaust, to run out, to do to exhaustion",
        "level": 50
    },
    {
        "character": "溶ける",
        "kana": "とける",
        "meaning": "to melt, to dissolve, to thaw",
        "level": 50
    },
    {
        "character": "表彰",
        "kana": "ひょうしょう",
        "meaning": "public acknowledgement, public recognition",
        "level": 50
    },
    {
        "character": "輝き",
        "kana": "かがやき",
        "meaning": "radiance",
        "level": 50
    },
    {
        "character": "峰",
        "kana": "みね",
        "meaning": "summit, peak, ridge",
        "level": 50
    },
    {
        "character": "風邪",
        "kana": "かぜ",
        "meaning": "cold, common cold",
        "level": 50
    },
    {
        "character": "漂着",
        "kana": "ひょうちゃく",
        "meaning": "drifting ashore",
        "level": 50
    },
    {
        "character": "把",
        "kana": "わ",
        "meaning": "counter for bundles",
        "level": 50
    },
    {
        "character": "堰",
        "kana": "せき",
        "meaning": "dam",
        "level": 50
    },
    {
        "character": "感銘",
        "kana": "かんめい",
        "meaning": "deep impression",
        "level": 50
    },
    {
        "character": "液晶",
        "kana": "えきしょう",
        "meaning": "liquid crystal",
        "level": 50
    },
    {
        "character": "免疫",
        "kana": "めんえき",
        "meaning": "immunity, immunization",
        "level": 50
    },
    {
        "character": "信仰",
        "kana": "しんこう",
        "meaning": "religious faith",
        "level": 50
    },
    {
        "character": "漂流",
        "kana": "ひょうりゅう",
        "meaning": "drifting, drift",
        "level": 50
    },
    {
        "character": "仰天",
        "kana": "ぎょうてん",
        "meaning": "taken aback, amazed, horrified, flabbergasted",
        "level": 50
    },
    {
        "character": "飢え",
        "kana": "うえ",
        "meaning": "hunger, starvation",
        "level": 50
    },
    {
        "character": "漫才",
        "kana": "まんざい",
        "meaning": "comic dialogue, two man comedy act",
        "level": 50
    },
    {
        "character": "壮行",
        "kana": "そうこう",
        "meaning": "rousing",
        "level": 50
    },
    {
        "character": "偶然",
        "kana": "ぐうぜん",
        "meaning": "by chance, unexpectedly",
        "level": 50
    },
    {
        "character": "偶に",
        "kana": "たまに",
        "meaning": "occasionally, once in a while",
        "level": 50
    },
    {
        "character": "連峰",
        "kana": "れんぽう",
        "meaning": "mountain range",
        "level": 50
    },
    {
        "character": "運搬",
        "kana": "うんぱん",
        "meaning": "transport, carriage",
        "level": 50
    },
    {
        "character": "仰々しい",
        "kana": "ぎょうぎょうしい",
        "meaning": "pompous, exaggerated",
        "level": 50
    },
    {
        "character": "検疫",
        "kana": "けんえき",
        "meaning": "quarantine",
        "level": 50
    },
    {
        "character": "諮る",
        "kana": "はかる",
        "meaning": "to consult with, to discuss, to confer",
        "level": 50
    },
    {
        "character": "翻る",
        "kana": "ひるがえる",
        "meaning": "to flip, to turn over, to flip over",
        "level": 50
    },
    {
        "character": "漂う",
        "kana": "ただよう",
        "meaning": "to drift",
        "level": 50
    },
    {
        "character": "悔やむ",
        "kana": "くやむ",
        "meaning": "to regret, to mourn, to lament",
        "level": 50
    },
    {
        "character": "麻布",
        "kana": "あさぬの",
        "meaning": "hemp cloth, linen",
        "level": 50
    },
    {
        "character": "搬出",
        "kana": "はんしゅつ",
        "meaning": "carry out",
        "level": 50
    },
    {
        "character": "帳簿",
        "kana": "ちょうぼ",
        "meaning": "account book, register",
        "level": 50
    },
    {
        "character": "鰐",
        "kana": "わに",
        "meaning": "alligator, crocodile",
        "level": 50
    },
    {
        "character": "伯母",
        "kana": "おば",
        "meaning": "aunt",
        "level": 50
    },
    {
        "character": "洞",
        "kana": "ほら",
        "meaning": "cave, den",
        "level": 50
    },
    {
        "character": "空洞",
        "kana": "くうどう",
        "meaning": "cave, hollow, cavity",
        "level": 50
    },
    {
        "character": "翻意",
        "kana": "ほんい",
        "meaning": "change one's mind, change your mind",
        "level": 50
    },
    {
        "character": "法廷",
        "kana": "ほうてい",
        "meaning": "courtroom",
        "level": 50
    },
    {
        "character": "蟹",
        "kana": "かに",
        "meaning": "crab",
        "level": 50
    },
    {
        "character": "水晶",
        "kana": "すいしょう",
        "meaning": "crystal",
        "level": 50
    },
    {
        "character": "銘々",
        "kana": "めいめい",
        "meaning": "each, individual",
        "level": 50
    },
    {
        "character": "鬱気",
        "kana": "うっき",
        "meaning": "gloomy, melancholy, gloominess",
        "level": 50
    },
    {
        "character": "堤防",
        "kana": "ていぼう",
        "meaning": "embankment, bank, levee",
        "level": 50
    },
    {
        "character": "堤",
        "kana": "つつみ",
        "meaning": "embankment, bank, dike",
        "level": 50
    },
    {
        "character": "無駄",
        "kana": "むだ",
        "meaning": "futility, uselessness, pointlessness",
        "level": 50
    },
    {
        "character": "邪魔",
        "kana": "じゃま",
        "meaning": "hinderance, intrusion",
        "level": 50
    },
    {
        "character": "墳墓",
        "kana": "ふんぼ",
        "meaning": "grave, tomb",
        "level": 50
    },
    {
        "character": "壮大",
        "kana": "そうだい",
        "meaning": "magnificent, grand, epic",
        "level": 50
    },
    {
        "character": "疫病",
        "kana": "えきびょう",
        "meaning": "infectious disease, plague, epidemic",
        "level": 50
    },
    {
        "character": "巧妙",
        "kana": "こうみょう",
        "meaning": "ingenious, skillful",
        "level": 50
    },
    {
        "character": "皇后",
        "kana": "こうごう",
        "meaning": "japanese empress",
        "level": 50
    },
    {
        "character": "〜亭",
        "kana": "てい",
        "meaning": "restaurant, traditional japanese restaurant",
        "level": 50
    },
    {
        "character": "改訂版",
        "kana": "かいていばん",
        "meaning": "revised edition",
        "level": 50
    },
    {
        "character": "翻訳",
        "kana": "ほんやく",
        "meaning": "translation",
        "level": 50
    },
    {
        "character": "搬送",
        "kana": "はんそう",
        "meaning": "transportation",
        "level": 50
    },
    {
        "character": "邪",
        "kana": "よこしま",
        "meaning": "wicked, evil",
        "level": 50
    },
    {
        "character": "奮起",
        "kana": "ふんき",
        "meaning": "stirring, rousing oneself",
        "level": 50
    },
    {
        "character": "殴り込み",
        "kana": "なぐりこみ",
        "meaning": "raid",
        "level": 50
    },
    {
        "character": "生涯",
        "kana": "しょうがい",
        "meaning": "one's lifetime, one's career",
        "level": 50
    },
    {
        "character": "悪賢い",
        "kana": "わるがしこい",
        "meaning": "devious, cunning, crafty, wily",
        "level": 50
    },
    {
        "character": "鬱陶しい",
        "kana": "うっとうしい",
        "meaning": "gloomy, gloomy mood, depressing",
        "level": 50
    },
    {
        "character": "脅す",
        "kana": "おどす",
        "meaning": "to threaten",
        "level": 50
    },
    {
        "character": "巧い",
        "kana": "うまい",
        "meaning": "adept, skillful, clever",
        "level": 50
    },
    {
        "character": "下駄",
        "kana": "げた",
        "meaning": "geta, japanese wooden clogs",
        "level": 50
    },
    {
        "character": "唐突",
        "kana": "とうとつ",
        "meaning": "sudden, unexpected",
        "level": 50
    },
    {
        "character": "訂正",
        "kana": "ていせい",
        "meaning": "correction, revision",
        "level": 50
    },
    {
        "character": "宮廷",
        "kana": "きゅうてい",
        "meaning": "imperial court, royal court",
        "level": 50
    },
    {
        "character": "壮年",
        "kana": "そうねん",
        "meaning": "prime of life",
        "level": 50
    },
    {
        "character": "名簿",
        "kana": "めいぼ",
        "meaning": "register of names, list of names, roll",
        "level": 50
    },
    {
        "character": "漫画",
        "kana": "まんが",
        "meaning": "manga, japanese comics",
        "level": 50
    },
    {
        "character": "軌道",
        "kana": "きどう",
        "meaning": "orbit, trajectory",
        "level": 50
    },
    {
        "character": "銘柄",
        "kana": "めいがら",
        "meaning": "brand, make",
        "level": 50
    },
    {
        "character": "洞穴",
        "kana": "どうけつ",
        "meaning": "cave, den",
        "level": 50
    },
    {
        "character": "軌跡",
        "kana": "きせき",
        "meaning": "tire track, path one has taken",
        "level": 50
    },
    {
        "character": "興奮",
        "kana": "こうふん",
        "meaning": "excitement, stimulation",
        "level": 50
    },
    {
        "character": "仰ぐ",
        "kana": "あおぐ",
        "meaning": "to look up at, to look up to",
        "level": 50
    },
    {
        "character": "伯",
        "kana": "はく",
        "meaning": "chief, count, earl",
        "level": 50
    },
    {
        "character": "把握",
        "kana": "はあく",
        "meaning": "grasp, catch",
        "level": 50
    },
    {
        "character": "彩り",
        "kana": "いろどり",
        "meaning": "coloring, colouring, color scheme, makeup",
        "level": 50
    },
    {
        "character": "配偶者",
        "kana": "はいぐうしゃ",
        "meaning": "spouse, partner",
        "level": 50
    },
    {
        "character": "淀川",
        "kana": "よどがわ",
        "meaning": "yodogawa",
        "level": 50
    },
    {
        "character": "古墳",
        "kana": "こふん",
        "meaning": "ancient tomb, ancient mound",
        "level": 50
    },
    {
        "character": "遂げる",
        "kana": "とげる",
        "meaning": "to accomplish, to achieve, to carry out",
        "level": 50
    },
    {
        "character": "殴り合い",
        "kana": "なぐりあい",
        "meaning": "fistfight, fist fight",
        "level": 50
    },
    {
        "character": "駄目",
        "kana": "だめ",
        "meaning": "not good, hopeless, cannot, not allowed",
        "level": 50
    },
    {
        "character": "諮問",
        "kana": "しもん",
        "meaning": "question, enquiry",
        "level": 50
    }
]
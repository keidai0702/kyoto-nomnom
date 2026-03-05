// === ぱくてく京都 - Kyoto Trip Map App ===

// === DATA ===
const HOTELS = [
  {
    id: 'hotel-1',
    name: 'The Hotel Seiryu Kyoto Kiyomizu',
    nameJa: 'ザ・ホテル青龍 京都清水',
    day: 1,
    category: 'hotel',
    description: '1930年代の小学校をリノベーションしたラグジュアリーホテル。清水寺を望むロケーション。',
    lat: 34.9975684,
    lng: 135.7794647,
    instagram: null
  },
  {
    id: 'hotel-2',
    name: 'Daiwa Roynet Hotel Kyoto Terrace Hachijo',
    nameJa: 'ダイワロイネットホテル京都テラス八条',
    day: 2,
    category: 'hotel',
    description: '京都駅八条東口から徒歩2分。観光にもアクセス抜群のモダンホテル。',
    lat: 34.9842238,
    lng: 135.7614466,
    instagram: null
  }
];

const STORES = [
  // --- RESTAURANTS ---
  {
    id: 'dupree',
    name: 'DUPREE',
    category: 'restaurant',
    subcategory: 'French Bistro',
    description: '琵琶湖疏水沿いの京町家フレンチビストロ。蓮華農園の食材を使った炭火焼き料理とワイン。予約必須の隠れ家。',
    lat: 35.0150167,
    lng: 135.7797573,
    instagram: 'https://www.instagram.com/dupreekyoto/'
  },
  {
    id: 'koke',
    name: 'KOKE',
    category: 'restaurant',
    subcategory: 'Innovative Fine Dining',
    description: 'ミシュラン一つ星。京都-沖縄-神戸-エスパニョールの融合。13皿のコースとカウンター越しのオープンキッチン。',
    lat: 35.0125587,
    lng: 135.7582241,
    instagram: 'https://www.instagram.com/kokekyoto/'
  },
  {
    id: 'tona',
    name: 'TONA',
    category: 'restaurant',
    subcategory: 'Wine Bistro',
    description: '築150年の京町家ワインビストロ。旬の食材を使ったフレンチとワインペアリング。コース¥6,600〜。',
    lat: 34.9994175,
    lng: 135.7661641,
    instagram: 'https://www.instagram.com/tona_kyoto/'
  },
  {
    id: 'baitarusain',
    name: 'Baitarusain',
    nameJa: 'バイタルサイン',
    category: 'restaurant',
    subcategory: 'Organic / Natural Wine',
    description: '京都静原の有機野菜とナチュラルワインの小さなレストラン。野菜中心の6皿コース¥5,800。',
    lat: 35.0023835,
    lng: 135.7699938,
    instagram: 'https://www.instagram.com/baitarusain_kyoto/'
  },
  {
    id: 'sunset-beach',
    name: 'The Sunset Beach',
    nameJa: 'ザサンセットビーチ',
    category: 'restaurant',
    subcategory: 'Izakaya',
    description: '木屋町エリアのレコードが流れる居酒屋。刺身、和牛など旬の素材を使ったおまかせスタイル。',
    lat: 34.9988128,
    lng: 135.7683625,
    instagram: 'https://www.instagram.com/the_sunsetbeach/'
  },
  {
    id: 'ikariya-shokudou',
    name: 'Ikariya Shokudou',
    nameJa: 'いかりや食堂',
    category: 'restaurant',
    subcategory: 'French Bistro',
    description: '築100年超の京町家フレンチビストロ。名物コンフィチキンとスフレフロマージュ。鴨川沿い。',
    lat: 35.0019250,
    lng: 135.7702922,
    instagram: 'https://www.instagram.com/ikariya.shokudou/'
  },
  {
    id: 'kacto',
    name: 'KACTO',
    category: 'restaurant',
    subcategory: 'Modern American',
    description: '団栗橋西の鴨川沿い京町家。バターミルクパンケーキ、和牛バーガー。Tysons & Company系列。',
    lat: 35.0022585,
    lng: 135.7704950,
    instagram: 'https://www.instagram.com/kacto.kyoto/'
  },
  {
    id: 'ietiem',
    name: 'ietiem',
    nameJa: 'イエティアム',
    category: 'restaurant',
    subcategory: 'Izakaya',
    description: '高瀬川沿いのスタイリッシュ居酒屋。旬の野菜と創作和食。1Fスタンディング、2Fテーブル席。',
    lat: 35.0018743,
    lng: 135.7697063,
    instagram: 'https://www.instagram.com/ietiem.kyoto/'
  },
  {
    id: 'amore',
    name: 'Amore Kiyamachi',
    category: 'restaurant',
    subcategory: 'Italian',
    description: '京町家の南イタリアン。大窯で焼くナポリピッツァ、パスタ、肉料理。鴨川ビュー。',
    lat: 35.0006681,
    lng: 135.7692678,
    instagram: 'https://www.instagram.com/amore_kiyamachi/'
  },
  {
    id: 'aje',
    name: 'Aje Kyoto Hoso',
    nameJa: '焼肉 あじぇ 木屋町団栗',
    category: 'restaurant',
    subcategory: 'Yakiniku',
    description: '新鮮ホルモン焼肉。名物の近江牛ホソ(小腸)塩¥750。毎日仕入れの鮮度が自慢。行列必至。',
    lat: 35.0016992,
    lng: 135.7698642,
    instagram: 'https://www.instagram.com/aje_kyoto_hoso/'
  },
  {
    id: 'ishigama',
    name: 'Ishigama Bar CENTRO',
    nameJa: '石窯バル CENTRO',
    category: 'restaurant',
    subcategory: 'Pizza / Bar',
    description: '京都駅徒歩3分。石窯で焼くピッツァ、肉、パスタ。スパニッシュバルスタイル。',
    lat: 34.9893489,
    lng: 135.7584738,
    instagram: 'https://www.instagram.com/ishigama_official/'
  },
  {
    id: 'sumi',
    name: 'SUMI',
    nameJa: 'スミ',
    category: 'restaurant',
    subcategory: 'Wine Bar / Creative',
    description: 'セルフサービスワインベンディング。クラフトビール、ナチュラルワイン、コーヒーも楽しめるスタイリッシュ空間。',
    lat: 34.9989685,
    lng: 135.7684477,
    instagram: 'https://www.instagram.com/sumi.kyoto/'
  },
  {
    id: 'sui',
    name: 'Sui.',
    category: 'restaurant',
    subcategory: 'Creative Fine Dining',
    description: 'ジャンルレスな創作料理とペアリング。Stand Umineko系列。2024年6月オープン。',
    lat: 35.0024913,
    lng: 135.7655435,
    instagram: 'https://www.instagram.com/sui.kyoto2024/'
  },
  {
    id: 'cicon',
    name: 'CICON by NOHGA HOTEL',
    category: 'restaurant',
    subcategory: 'Italian',
    description: 'NOHGA HOTEL KIYOMIZU KYOTO 1Fのイタリアン。ルーフトップバー&ベーカリー併設。五条エリア。',
    lat: 34.9949487,
    lng: 135.7740211,
    instagram: 'https://www.instagram.com/cicon_by_nohgahotel/'
  },
  {
    id: 'sodoh',
    name: 'THE SODOH HIGASHIYAMA KYOTO',
    category: 'restaurant',
    subcategory: 'Italian',
    description: '東山の歴史的邸宅イタリアン。庭園を望むラグジュアリーな空間。Sushi Azabu Higashiyama併設。',
    lat: 34.9988958,
    lng: 135.7796677,
    instagram: 'https://www.instagram.com/kyoto_thesodoh/'
  },
  {
    id: 'etto',
    name: 'Etto',
    category: 'restaurant',
    subcategory: 'Italian',
    description: '京町家リノベーションのイタリアン。静かな住宅街に佇むミシュランガイド掲載レストラン。',
    lat: 35.0215202,
    lng: 135.7537460,
    instagram: 'https://www.instagram.com/etto.kyoto/'
  },
  {
    id: 'severance',
    name: 'Severance',
    category: 'restaurant',
    subcategory: 'Western / Wine',
    description: '三条大橋東のクリエイティブ洋食。旬の食材とセレクトワイン。三条駅すぐ。',
    lat: 35.0093657,
    lng: 135.7740036,
    instagram: 'https://www.instagram.com/severance_kyoto/'
  },
  {
    id: 'snn',
    name: 'SNN',
    category: 'restaurant',
    subcategory: 'Dining Bar',
    description: '二条城前エリアのダイニングバー。上京区の落ち着いた雰囲気で楽しむ食事とお酒。',
    lat: 35.0178945,
    lng: 135.7490263,
    instagram: 'https://www.instagram.com/snn_kyoto/'
  },
  {
    id: 'ondorio',
    name: 'OndoriO',
    category: 'restaurant',
    subcategory: 'Italian / Genre-less',
    description: '築100年の町家で楽しむジャンルレス料理とセイボリーカクテル。清水五条駅徒歩8分。',
    lat: 34.9933614,
    lng: 135.7715090,
    instagram: 'https://www.instagram.com/ondorio_kyoto/'
  },
  {
    id: 'bistro-yanagihara',
    name: 'Bistro Yanagihara',
    nameJa: 'ビストロ ヤナギハラ',
    category: 'restaurant',
    subcategory: 'French Bistro',
    description: 'アルザスで修行したシェフのビストロ。ミシュランビブグルマン。京都市役所前駅徒歩5分。',
    lat: 35.0136485,
    lng: 135.7687876,
    instagram: 'https://www.instagram.com/bistro_yanagihara/'
  },
  {
    id: 'ikariya523',
    name: 'Ikariya 523',
    nameJa: 'イカリヤ523',
    category: 'restaurant',
    subcategory: 'French Bistro',
    description: '三条木屋町のフレンチビストロ。いかりや食堂の姉妹店。三条駅徒歩3分。',
    lat: 35.0099159,
    lng: 135.7707066,
    instagram: 'https://www.instagram.com/ikariya523/'
  },

  // --- CAFES ---
  {
    id: 'rustsabi',
    name: 'RustSabi',
    nameJa: '然美',
    category: 'cafe',
    subcategory: 'Tea Room',
    description: '祇園の茶寮。日本の古来の美を現代に蘇らせるお茶と和菓子のペアリングコース。',
    lat: 35.0019682,
    lng: 135.7743702,
    instagram: 'https://www.instagram.com/rustsabi/'
  },
  {
    id: 'flow-nozy',
    name: 'Flow by Nozy Coffee',
    category: 'cafe',
    subcategory: 'Specialty Coffee',
    description: '東京NOZY COFFEE京都初出店。築約280年の町家をリノベーション。高瀬川と鴨川の間、テラス席あり。',
    lat: 35.0021205,
    lng: 135.7703741,
    instagram: 'https://www.instagram.com/flow_by_nozycoffee/'
  },
  {
    id: 'ace-cafe',
    name: 'Ace Cafe',
    category: 'cafe',
    subcategory: 'Cafe / Bar',
    description: '木屋町三条のエンパイヤビル10F。京都の街を見下ろすカクテル&カフェ。三条駅徒歩3分。',
    lat: 35.0101172,
    lng: 135.7706484,
    instagram: 'https://www.instagram.com/acecafe_kyoto/'
  },
  {
    id: 'amahare',
    name: 'Sabo KYO Amahare',
    nameJa: '茶房 居雨',
    category: 'cafe',
    subcategory: 'Teahouse',
    description: '築130年の町家のクラフトギャラリー&茶房。季節の和菓子とお茶。11:00-19:00、水曜定休。',
    lat: 35.0060597,
    lng: 135.7645568,
    instagram: 'https://www.instagram.com/sabo.kyo_amahare/'
  },
  {
    id: 'moku',
    name: 'moku',
    nameJa: '沐',
    category: 'cafe',
    subcategory: 'Izakaya / Cafe',
    description: '東山エリア。和とイタリアンの融合居酒屋。季節の食材を使った創作料理。',
    lat: 34.9957265,
    lng: 135.7711115,
    instagram: 'https://www.instagram.com/moku.kyoto/'
  },

  {
    id: 'coquelicot',
    name: 'Coquelicot Blanc',
    category: 'cafe',
    subcategory: 'Artisan Bakery',
    description: '八坂の塔近くのアルチザンベーカリー。幾何学模様のパンとクロワッサン。Black Swan Coffee併設。2023年12月オープン。',
    lat: 34.9986146,
    lng: 135.7790095,
    instagram: 'https://www.instagram.com/coquelicotblanc_jp/'
  },
  {
    id: 'salon-de-muge',
    name: 'Salon de Muge',
    nameJa: '無碍山房',
    category: 'cafe',
    subcategory: 'Japanese Sweets',
    description: '菊乃井プロデュースの和カフェ。季節のパフェ、時雨弁当、作りたてのわらび餅。緑に囲まれた上質空間。',
    lat: 35.0017930,
    lng: 135.7815521,
    instagram: 'https://www.instagram.com/salon_de_muge/'
  },
  {
    id: 'panel-cafe',
    name: 'Panel Cafe',
    category: 'cafe',
    subcategory: 'Pancake Cafe',
    description: '白川沿いテラス席のカフェ。スフレパンケーキ、クロッフル、ティラミスが人気。祇園四条駅徒歩2分。',
    lat: 35.0051486,
    lng: 135.7726433,
    instagram: 'https://www.instagram.com/panelcafe_kyoto/'
  },
  {
    id: 'leun-akagane',
    name: 'LE UN AKAGANE RESORT',
    category: 'restaurant',
    subcategory: 'French',
    description: '大正時代の銅王邸宅(1925年築)フレンチレストラン。五感で楽しむBeauty & Healthyフレンチ。東山の圧巻の雰囲気。',
    lat: 34.9989229,
    lng: 135.7785746,
    instagram: 'https://www.instagram.com/leun_akagane/'
  },
  {
    id: 'rigoletto',
    name: 'RIGOLETTO SMOKE GRILL & BAR',
    category: 'restaurant',
    subcategory: 'Spanish-Italian',
    description: '祇園・花見小路の元お茶屋リノベ。スモーク&グリル料理、タパス、ピッツァ。2Fオープンキッチン。',
    lat: 35.0024367,
    lng: 135.7761667,
    instagram: 'https://www.instagram.com/rigoletto_kyoto/'
  },
  {
    id: 'blue-bottle',
    name: 'Blue Bottle Studio Kyoto',
    category: 'cafe',
    subcategory: 'Coffee Studio',
    description: 'ブルーボトルコーヒー京都スタジオ。蹴上の築100年超の京町家。完全予約制コーヒーフルコース。',
    lat: 35.0113612,
    lng: 135.7894734,
    instagram: 'https://www.instagram.com/p/DOqfayNkkaA/?img_index=1'
  },

  // --- WINE BARS ---
  {
    id: 'estre',
    name: 'wine&beer ESTRE',
    nameJa: 'ワイン&ビア エストレ',
    category: 'restaurant',
    subcategory: 'Wine & Beer Bar',
    description: '東山三条のナチュラルワイン&クラフトビールバル。夫婦経営。自家製パスタとアペタイザーが人気。',
    lat: 35.00906257,
    lng: 135.77824401,
    instagram: 'https://www.instagram.com/wine_beer_estre/'
  },
  {
    id: 'espace',
    name: 'Bistro & Wine espace',
    nameJa: 'ビストロ&ワイン エスパス',
    category: 'restaurant',
    subcategory: 'Bistro / Wine Bar',
    description: '三条京阪のビストロ&ワインバー。自家製ビストロ料理とオーガニック・ナチュラルワイン。三条駅徒歩3分。',
    lat: 35.00911934,
    lng: 135.77532398,
    instagram: 'https://www.instagram.com/espace.kh/'
  },
  {
    id: 'kuma-wine',
    name: 'Kuma no Wine House',
    nameJa: 'くまのワインハウス',
    category: 'restaurant',
    subcategory: 'Natural Wine Bar',
    description: '神宮丸太町のナチュラルワインバー。ボトル4,000〜5,000円台。ビストロメニューも充実。',
    lat: 35.01760335,
    lng: 135.77683313,
    instagram: 'https://www.instagram.com/kwh_info/'
  },
  {
    id: 'harmonika',
    name: 'Harmonika',
    nameJa: 'ハーモニカ',
    category: 'cafe',
    subcategory: 'Dessert Specialty',
    description: '元フレンチシェフによるデセール専門店。清水五条エリア。カウンター8席。Instagram DMで予約推奨。',
    lat: 34.99821504,
    lng: 135.77217377,
    instagram: 'https://www.instagram.com/harmonika_kyoto/'
  },
  {
    id: 'komorebino',
    name: 'komorebino',
    nameJa: 'コモレビーノ',
    category: 'restaurant',
    subcategory: 'Natural Wine Bar',
    description: '祇園の隠れ家ナチュラルワインバー。世界中から厳選した約1,000本。二十四節気に合わせワインリスト更新。グラス1,000円〜。',
    lat: 35.00433506,
    lng: 135.77498202,
    instagram: 'https://www.instagram.com/komorebino/'
  },
  {
    id: 'soma',
    name: 'SOMA',
    nameJa: 'ソーマ',
    category: 'restaurant',
    subcategory: 'Italian / Wine',
    description: '鴨川沿いのカジュアルイタリアン。和牛、京丹波ポーク、契約農家の野菜。ナチュラルワイン&クラフトビール。川床あり。',
    lat: 34.99954784,
    lng: 135.76901184,
    instagram: 'https://www.instagram.com/soma.kyoto/'
  },
  {
    id: 'plein',
    name: 'WINE BISTRO by plein',
    nameJa: 'ワインビストロ バイ プラン 京都祇園',
    category: 'restaurant',
    subcategory: 'French Bistro / Wine',
    description: '銀座PLEINグループ関西初出店。花見小路沿い。1,000本超のワインセラー、関西最大級カウンター。炭火フレンチ。2024年3月開店。',
    lat: 35.00488812,
    lng: 135.77527401,
    instagram: 'https://www.instagram.com/bistroplein.kyotogion/'
  },

  // --- SPOTS (観光) ---
  {
    id: 'kinkakuji',
    name: 'Kinkaku-ji',
    nameJa: '金閣寺',
    category: 'spot',
    subcategory: 'Temple',
    description: '正式名称は鹿苑寺。金箔で覆われた舎利殿が鏡湖池に映る姿は京都のシンボル。世界遺産。拝観料500円。',
    lat: 35.0394,
    lng: 135.7292,
    instagram: 'https://www.instagram.com/explore/tags/金閣寺/'
  },
  {
    id: 'fushimi-inari',
    name: 'Fushimi Inari Taisha',
    nameJa: '伏見稲荷大社',
    category: 'spot',
    subcategory: 'Shrine',
    description: '千本鳥居で有名な稲荷神社の総本社。山頂まで約2時間のハイキングコース。拝観無料・24時間開放。',
    lat: 34.9671,
    lng: 135.7727,
    instagram: 'https://www.instagram.com/explore/tags/伏見稲荷大社/'
  },
  {
    id: 'kiyomizudera',
    name: 'Kiyomizu-dera',
    nameJa: '清水寺',
    category: 'spot',
    subcategory: 'Temple',
    description: '「清水の舞台」で有名な世界遺産。崖の上に張り出した本堂からの眺望は圧巻。早朝拝観がおすすめ。拝観料400円。',
    lat: 34.9949,
    lng: 135.7850,
    instagram: 'https://www.instagram.com/explore/tags/清水寺/'
  },
  {
    id: 'arashiyama',
    name: 'Arashiyama Bamboo Grove',
    nameJa: '嵐山竹林の小径',
    category: 'spot',
    subcategory: 'Nature',
    description: '天に向かって伸びる竹林のトンネル。風で竹が揺れる音は「日本の音風景100選」。早朝が人が少なくおすすめ。',
    lat: 35.0170,
    lng: 135.6713,
    instagram: 'https://www.instagram.com/explore/tags/嵐山竹林/'
  },
  {
    id: 'gion',
    name: 'Gion District',
    nameJa: '祇園',
    category: 'spot',
    subcategory: 'Historic District',
    description: '京都を代表する花街。花見小路通りの石畳、町家、お茶屋の風景。夕方以降に舞妓さんに出会えることも。',
    lat: 35.0037,
    lng: 135.7756,
    instagram: 'https://www.instagram.com/explore/tags/祇園/'
  },
  {
    id: 'nijo-castle',
    name: 'Nijo Castle',
    nameJa: '二条城',
    category: 'spot',
    subcategory: 'Castle',
    description: '徳川家康が築城。鶯張りの廊下と二の丸御殿の障壁画が見事。世界遺産。入城料800円。',
    lat: 35.0142,
    lng: 135.7481,
    instagram: 'https://www.instagram.com/explore/tags/二条城/'
  },
  {
    id: 'philosopher-path',
    name: "Philosopher's Path",
    nameJa: '哲学の道',
    category: 'spot',
    subcategory: 'Walk',
    description: '銀閣寺から南禅寺へ続く約2kmの疏水沿いの散歩道。桜と紅葉の名所。途中にカフェや小さなお寺も点在。',
    lat: 35.0215,
    lng: 135.7942,
    instagram: 'https://www.instagram.com/explore/tags/哲学の道/'
  },
  {
    id: 'jonangu',
    name: 'Jonangu Shrine',
    nameJa: '城南宮',
    category: 'spot',
    subcategory: 'Shrine',
    description: '方除けの大社。しだれ梅と椿が有名な神苑「楽水苑」は圧巻。春の梅まつりは必見。拝観料800円。',
    lat: 34.9509,
    lng: 135.7470,
    instagram: 'https://www.instagram.com/explore/tags/城南宮/'
  },
  {
    id: 'yasaka',
    name: 'Yasaka Shrine',
    nameJa: '八坂神社',
    category: 'spot',
    subcategory: 'Shrine',
    description: '祇園祭の本拠地。朱塗りの西楼門は祇園のランドマーク。縁結びのパワースポット。24時間参拝可。',
    lat: 35.0036,
    lng: 135.7785,
    instagram: 'https://www.instagram.com/explore/tags/八坂神社/'
  },
  {
    id: 'nanzenji',
    name: 'Nanzen-ji',
    nameJa: '南禅寺',
    category: 'spot',
    subcategory: 'Temple',
    description: '日本最高位の禅寺。三門からの絶景、赤レンガの水路閣がフォトスポット。方丈庭園も見事。境内無料。',
    lat: 35.0112,
    lng: 135.7927,
    instagram: 'https://www.instagram.com/explore/tags/南禅寺/'
  },
  {
    id: 'higashiyama',
    name: 'Ninenzaka & Sannenzaka',
    nameJa: '二年坂・三年坂',
    category: 'spot',
    subcategory: 'Historic Street',
    description: '清水寺への参道。石畳の坂道に町家の土産物店やカフェが並ぶ。転ぶと不運が続くという言い伝えも。',
    lat: 34.9983,
    lng: 135.7808,
    instagram: 'https://www.instagram.com/explore/tags/二寧坂/'
  },
  {
    id: 'nishiki',
    name: 'Nishiki Market',
    nameJa: '錦市場',
    category: 'spot',
    subcategory: 'Market',
    description: '「京の台所」と呼ばれる約400mのアーケード商店街。130以上の店舗で漬物、抹茶スイーツ、食べ歩きを楽しめる。',
    lat: 35.0050,
    lng: 135.7643,
    instagram: 'https://www.instagram.com/explore/tags/錦市場/'
  },
  {
    id: 'toji',
    name: 'To-ji',
    nameJa: '東寺',
    category: 'spot',
    subcategory: 'Temple',
    description: '日本一高い木造の五重塔（55m）がシンボル。世界遺産。毎月21日は「弘法市」の骨董市が開催。京都駅から徒歩15分。',
    lat: 34.9804,
    lng: 135.7477,
    instagram: 'https://www.instagram.com/explore/tags/東寺/'
  }
];

// === SVG ICONS ===
const ICONS = {
  hotel: '<svg viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>',
  restaurant: '<svg viewBox="0 0 24 24"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>',
  cafe: '<svg viewBox="0 0 24 24"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z"/></svg>',
  spot: '<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',
  other: '<svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>'
};

// === MAP INITIALIZATION ===
const KYOTO_CENTER = [35.000, 135.770];
const DEFAULT_ZOOM = 14;

const map = L.map('map', {
  center: KYOTO_CENTER,
  zoom: DEFAULT_ZOOM,
  zoomControl: false,
  attributionControl: false,
  maxZoom: 19,
  minZoom: 11
});

// Esri World Imagery (satellite)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri',
  maxZoom: 19
}).addTo(map);

// Add labels overlay for street names
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 19,
  opacity: 0.6
}).addTo(map);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 19,
  opacity: 0.5
}).addTo(map);

// Zoom control (top-right, below header)
L.control.zoom({ position: 'topright' }).addTo(map);

// Attribution
L.control.attribution({ position: 'bottomright', prefix: false })
  .addAttribution('Tiles &copy; Esri | ぱくてく京都')
  .addTo(map);

// === MARKER MANAGEMENT ===
const allMarkers = [];

function createMarkerIcon(type, category) {
  const el = document.createElement('div');
  if (type === 'hotel') {
    el.className = 'marker marker--hotel';
    el.innerHTML = ICONS.hotel;
  } else {
    el.className = `marker marker--store marker--${category}`;
    const iconType = category === 'restaurant' ? 'restaurant' : category === 'cafe' ? 'cafe' : category === 'spot' ? 'spot' : 'other';
    el.innerHTML = ICONS[iconType];
  }
  return el;
}

function addHotelMarkers() {
  HOTELS.forEach(hotel => {
    const el = createMarkerIcon('hotel');
    const dayLabel = document.createElement('span');
    dayLabel.className = 'day-label';
    dayLabel.textContent = `Day ${hotel.day}`;
    el.appendChild(dayLabel);

    const icon = L.divIcon({
      html: el.outerHTML,
      className: 'marker-wrapper',
      iconSize: [48, 48],
      iconAnchor: [24, 24]
    });

    const marker = L.marker([hotel.lat, hotel.lng], { icon, zIndexOffset: 1000 }).addTo(map);
    marker.on('click', () => showPopup(hotel));
    allMarkers.push({ marker, data: hotel, type: 'hotel' });
  });
}

function addStoreMarkers() {
  STORES.forEach(store => {
    const el = createMarkerIcon('store', store.category);

    const icon = L.divIcon({
      html: el.outerHTML,
      className: 'marker-wrapper',
      iconSize: [34, 34],
      iconAnchor: [17, 17]
    });

    const marker = L.marker([store.lat, store.lng], { icon }).addTo(map);
    marker.on('click', () => showPopup(store));
    allMarkers.push({ marker, data: store, type: 'store' });
  });
}

// === FAVORITES (localStorage) ===
const FAV_KEY = 'pakuteku-kyoto-favs';
function getFavorites() {
  try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; }
  catch { return []; }
}
function saveFavorites(favs) {
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
}
function isFavorite(id) { return getFavorites().includes(id); }
function toggleFavorite(id) {
  const favs = getFavorites();
  const idx = favs.indexOf(id);
  if (idx >= 0) favs.splice(idx, 1); else favs.push(id);
  saveFavorites(favs);
  return idx < 0; // returns true if now favorited
}

// === UTILITY ===
function getCategoryColor(cat) {
  switch(cat) {
    case 'hotel': return 'var(--color-hotel)';
    case 'restaurant': return 'var(--color-restaurant)';
    case 'cafe': return 'var(--color-cafe)';
    case 'spot': return 'var(--color-spot)';
    default: return 'var(--color-other)';
  }
}

// === HASHIGO ALGORITHM ===
// Haversine distance in meters
function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const toRad = d => d * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Walking time in minutes (~80m/min)
function walkMinutes(meters) { return Math.round(meters / 80); }

// Subcategory "heaviness" for meal progression (5=heavy meal, 1=light/dessert)
function getHeaviness(item) {
  const sub = (item.subcategory || '').toLowerCase();
  if (/dessert|sweets|pancake|patisserie|bakery|coffee/i.test(sub)) return 1;
  if (/tea|teahouse/i.test(sub)) return 1.5;
  if (/cocktail|bar(?!\s*\w)|speakeasy/i.test(sub)) return 2;
  if (/cafe|izakaya/i.test(sub)) return 2.5;
  if (/wine|beer|natural wine/i.test(sub)) return 3;
  if (/italian|spanish|tapas/i.test(sub)) return 3.5;
  if (/bistro|french|grill/i.test(sub)) return 4;
  if (/fine dining|innovative|yakiniku/i.test(sub)) return 5;
  if (item.category === 'cafe') return 2;
  if (item.category === 'restaurant') return 3.5;
  return 3;
}

// "Vibe" tags for compatibility matching
function getVibeTags(item) {
  const sub = (item.subcategory || '').toLowerCase();
  const desc = (item.description || '').toLowerCase();
  const tags = new Set();
  if (/wine|ワイン|ナチュラル/i.test(sub + desc)) tags.add('wine');
  if (/beer|ビール|クラフト/i.test(sub + desc)) tags.add('beer');
  if (/cocktail|カクテル/i.test(sub + desc)) tags.add('cocktail');
  if (/french|フレンチ|bistro|ビストロ/i.test(sub + desc)) tags.add('french');
  if (/italian|イタリアン|パスタ|ピッツァ/i.test(sub + desc)) tags.add('italian');
  if (/japanese|和|茶|抹茶|わらび/i.test(sub + desc)) tags.add('japanese');
  if (/町家|築|リノベ|レトロ/i.test(desc)) tags.add('heritage');
  if (/鴨川|川床|テラス|ビュー/i.test(desc)) tags.add('scenic');
  if (/隠れ家|カウンター|席/i.test(desc)) tags.add('intimate');
  if (/dessert|デザート|デセール|パフェ|スイーツ/i.test(sub + desc)) tags.add('dessert');
  if (/coffee|コーヒー/i.test(sub + desc)) tags.add('coffee');
  return tags;
}

function vibeOverlap(tagsA, tagsB) {
  let overlap = 0;
  tagsA.forEach(t => { if (tagsB.has(t)) overlap++; });
  return overlap;
}

function computeHashigoScore(current, candidate) {
  if (candidate.id === current.id) return -Infinity;
  if (candidate.category === 'hotel' || candidate.category === 'spot') return -Infinity;

  const dist = haversine(current.lat, current.lng, candidate.lat, candidate.lng);
  const walk = walkMinutes(dist);

  // 1. Distance score (0-35): walkable is king
  let distScore;
  if (dist < 200) distScore = 35;
  else if (dist < 400) distScore = 32;
  else if (dist < 600) distScore = 28;
  else if (dist < 900) distScore = 22;
  else if (dist < 1300) distScore = 15;
  else if (dist < 2000) distScore = 8;
  else distScore = 2;

  // 2. Meal progression score (0-25): prefer lighter after heavier
  const hCurrent = getHeaviness(current);
  const hCandidate = getHeaviness(candidate);
  let progressionScore;
  const diff = hCurrent - hCandidate;
  if (diff >= 1.5) progressionScore = 25;       // going nicely lighter
  else if (diff >= 0.5) progressionScore = 22;   // slightly lighter
  else if (Math.abs(diff) < 0.5) progressionScore = 18; // same level OK
  else if (diff >= -1) progressionScore = 12;    // slightly heavier, OK
  else progressionScore = 5;                     // much heavier = unusual

  // 3. Category diversity (0-20): different is better
  let diversityScore;
  const sameCat = current.category === candidate.category;
  const sameSub = (current.subcategory || '') === (candidate.subcategory || '');
  if (!sameCat) diversityScore = 20;
  else if (!sameSub) diversityScore = 12;
  else diversityScore = 4;

  // 4. Vibe compatibility (0-15): related vibes = good pairing
  const vibesA = getVibeTags(current);
  const vibesB = getVibeTags(candidate);
  const overlap = vibeOverlap(vibesA, vibesB);
  const totalUnique = new Set([...vibesA, ...vibesB]).size;
  // Some overlap is good (compatible), but not 100% (too similar)
  let vibeScore;
  if (totalUnique === 0) vibeScore = 8;
  else {
    const ratio = overlap / totalUnique;
    if (ratio > 0.7) vibeScore = 8;       // too similar
    else if (ratio > 0.3) vibeScore = 15;  // nicely related
    else if (ratio > 0) vibeScore = 12;    // some connection
    else vibeScore = 6;                    // totally different
  }

  // 5. Favorite bonus (0-5)
  const favBonus = isFavorite(candidate.id) ? 5 : 0;

  const total = distScore + progressionScore + diversityScore + vibeScore + favBonus;
  return total;
}

function getHashigoRecommendations(current, count = 3) {
  const scored = STORES.map(s => ({
    data: s,
    score: computeHashigoScore(current, s),
    dist: haversine(current.lat, current.lng, s.lat, s.lng)
  }))
  .filter(s => s.score > 0)
  .sort((a, b) => b.score - a.score)
  .slice(0, count);
  return scored;
}

function getHashigoTag(current, candidate) {
  const hC = getHeaviness(current);
  const hN = getHeaviness(candidate);
  const diff = hC - hN;
  if (diff >= 1.5) return 'ライトに';
  if (diff >= 0.5) return '少し軽めに';
  if (Math.abs(diff) < 0.5) return '同じ雰囲気';
  if (diff >= -1) return 'しっかり';
  return 'ガッツリ';
}

// === POPUP / BOTTOM SHEET ===
const popupSheet = document.getElementById('popup-sheet');
const popupOverlay = document.getElementById('popup-overlay');
const popupName = document.getElementById('popup-name');
const popupCategory = document.getElementById('popup-category');
const popupSubcategory = document.getElementById('popup-subcategory');
const popupDescription = document.getElementById('popup-description');
const popupInstagram = document.getElementById('popup-instagram');
const popupClose = document.getElementById('popup-close');
const popupFav = document.getElementById('popup-fav');
const hashigoSection = document.getElementById('hashigo-section');
const hashigoList = document.getElementById('hashigo-list');

let currentPopupData = null;

function showPopup(data) {
  currentPopupData = data;
  popupName.textContent = data.nameJa ? `${data.name} (${data.nameJa})` : data.name;

  const cat = data.category;
  popupCategory.textContent = cat === 'hotel' ? 'Hotel' : cat === 'restaurant' ? 'Restaurant' : cat === 'cafe' ? 'Cafe' : cat === 'spot' ? 'Spot' : 'Other';
  popupCategory.className = `category-badge ${cat}`;

  popupSubcategory.textContent = data.subcategory || (data.day ? `Day ${data.day}` : '');
  popupDescription.textContent = data.description || '';

  if (data.instagram) {
    popupInstagram.href = data.instagram;
    popupInstagram.classList.remove('hidden');
    // Change link text for spots (hashtag search) vs stores (profile)
    const linkLabel = popupInstagram.querySelector('.ig-label');
    if (linkLabel) linkLabel.textContent = data.category === 'spot' ? 'Instagramで写真を見る' : 'Instagramを見る';
  } else {
    popupInstagram.classList.add('hidden');
  }

  // Favorite button
  popupFav.classList.toggle('active', isFavorite(data.id));

  // Hashigo recommendations (only for stores, not hotels)
  if (data.category !== 'hotel' && data.category !== 'spot') {
    const recs = getHashigoRecommendations(data);
    hashigoList.innerHTML = '';
    recs.forEach((rec, i) => {
      const walk = walkMinutes(rec.dist);
      const tag = getHashigoTag(data, rec.data);
      const li = document.createElement('li');
      li.className = 'hashigo-item';
      li.innerHTML = `
        <span class="hashigo-rank">${i + 1}</span>
        <span class="hashigo-dot" style="background:${getCategoryColor(rec.data.category)}"></span>
        <div class="hashigo-info">
          <div class="hashigo-name">${rec.data.name}</div>
          <div class="hashigo-meta">
            <span class="hashigo-walk">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/></svg>
              ${walk}分
            </span>
            <span>${rec.data.subcategory || rec.data.category}</span>
            <span class="hashigo-tag">${tag}</span>
          </div>
        </div>
      `;
      li.addEventListener('click', (e) => {
        e.stopPropagation();
        li.classList.add('tapped');
        const target = rec.data;
        setTimeout(() => {
          hidePopup();
          map.flyTo([target.lat, target.lng], 17, { duration: 0.8 });
          setTimeout(() => showPopup(target), 600);
        }, 200);
      });
      hashigoList.appendChild(li);
    });
    hashigoSection.classList.remove('hidden');
  } else {
    hashigoSection.classList.add('hidden');
  }

  popupSheet.classList.add('active');
  popupOverlay.classList.add('active');

  // Pan map to marker with offset to account for bottom sheet
  const targetLatLng = L.latLng(data.lat, data.lng);
  map.panTo(targetLatLng, { animate: true });
}

function hidePopup() {
  popupSheet.classList.remove('active');
  popupOverlay.classList.remove('active');
  currentPopupData = null;
}

// Favorite toggle with animation
popupFav.addEventListener('click', (e) => {
  e.stopPropagation();
  if (!currentPopupData) return;
  const nowFav = toggleFavorite(currentPopupData.id);
  popupFav.classList.toggle('active', nowFav);
  // Pop animation
  popupFav.classList.remove('pop');
  void popupFav.offsetWidth; // force reflow
  popupFav.classList.add('pop');
  // Re-apply filter if fav filter is active
  if (activeFilter === 'fav') applyFilter();
});

popupClose.addEventListener('click', hidePopup);
popupOverlay.addEventListener('click', hidePopup);

// Swipe down to close (only from handle area, not content)
let touchStartY = 0;
let touchStartX = 0;
const popupHandle = document.querySelector('.popup-handle');

popupSheet.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
  touchStartX = e.touches[0].clientX;
});

popupSheet.addEventListener('touchmove', (e) => {
  const diffY = e.touches[0].clientY - touchStartY;
  const diffX = Math.abs(e.touches[0].clientX - touchStartX);
  // Only close on downward swipe (not sideways scroll), and only when scrolled to top
  if (diffY > 80 && diffX < 40 && popupSheet.scrollTop <= 0) {
    hidePopup();
  }
});

// === FILTERS ===
let activeFilter = 'all';
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;
    if (category === activeFilter) return;

    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = category;
    applyFilter();
  });
});

function applyFilter() {
  const visibleLatLngs = [];
  allMarkers.forEach(({ marker, data, type }) => {
    if (type === 'hotel') {
      visibleLatLngs.push([data.lat, data.lng]);
      return;
    }
    let show;
    if (activeFilter === 'all') show = true;
    else if (activeFilter === 'fav') show = isFavorite(data.id);
    else show = data.category === activeFilter;
    if (show) {
      if (!map.hasLayer(marker)) marker.addTo(map);
      visibleLatLngs.push([data.lat, data.lng]);
    } else {
      if (map.hasLayer(marker)) map.removeLayer(marker);
    }
  });
  // Fit map to visible markers when filtering specific category
  if (activeFilter !== 'all' && visibleLatLngs.length > 1) {
    map.fitBounds(L.latLngBounds(visibleLatLngs), { padding: [60, 60], maxZoom: 16, animate: true });
  }
}

// === DAY NAVIGATION ===
const dayBtns = document.querySelectorAll('.day-btn');

dayBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const day = parseInt(btn.dataset.day);
    const hotel = HOTELS.find(h => h.day === day);
    if (hotel) {
      map.flyTo([hotel.lat, hotel.lng], 16, { duration: 1.2 });
      dayBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setTimeout(() => showPopup(hotel), 800);
    }
  });
});

// === SEARCH ===
const searchToggle = document.getElementById('search-toggle');
const searchPanel = document.getElementById('search-panel');
const searchInput = document.getElementById('search-input');
const searchClear = document.getElementById('search-clear');
const searchResults = document.getElementById('search-results');

// Romaji / Katakana / Hiragana conversion tables
const ROMAJI_TO_KANA = {
  'a':'ア','i':'イ','u':'ウ','e':'エ','o':'オ',
  'ka':'カ','ki':'キ','ku':'ク','ke':'ケ','ko':'コ',
  'sa':'サ','si':'シ','shi':'シ','su':'ス','se':'セ','so':'ソ',
  'ta':'タ','ti':'チ','chi':'チ','tsu':'ツ','tu':'ツ','te':'テ','to':'ト',
  'na':'ナ','ni':'ニ','nu':'ヌ','ne':'ネ','no':'ノ',
  'ha':'ハ','hi':'ヒ','fu':'フ','hu':'フ','he':'ヘ','ho':'ホ',
  'ma':'マ','mi':'ミ','mu':'ム','me':'メ','mo':'モ',
  'ya':'ヤ','yu':'ユ','yo':'ヨ',
  'ra':'ラ','ri':'リ','ru':'ル','re':'レ','ro':'ロ',
  'wa':'ワ','wi':'ヰ','we':'ヱ','wo':'ヲ','n':'ン',
  'ga':'ガ','gi':'ギ','gu':'グ','ge':'ゲ','go':'ゴ',
  'za':'ザ','zi':'ジ','ji':'ジ','zu':'ズ','ze':'ゼ','zo':'ゾ',
  'da':'ダ','di':'ヂ','du':'ヅ','de':'デ','do':'ド',
  'ba':'バ','bi':'ビ','bu':'ブ','be':'ベ','bo':'ボ',
  'pa':'パ','pi':'ピ','pu':'プ','pe':'ペ','po':'ポ',
  'kya':'キャ','kyu':'キュ','kyo':'キョ',
  'sha':'シャ','shu':'シュ','sho':'ショ',
  'cha':'チャ','chu':'チュ','cho':'チョ',
  'nya':'ニャ','nyu':'ニュ','nyo':'ニョ',
  'hya':'ヒャ','hyu':'ヒュ','hyo':'ヒョ',
  'mya':'ミャ','myu':'ミュ','myo':'ミョ',
  'rya':'リャ','ryu':'リュ','ryo':'リョ',
  'gya':'ギャ','gyu':'ギュ','gyo':'ギョ',
  'ja':'ジャ','ju':'ジュ','jo':'ジョ',
  'bya':'ビャ','byu':'ビュ','byo':'ビョ',
  'pya':'ピャ','pyu':'ピュ','pyo':'ピョ'
};

function katakanaToHiragana(str) {
  return str.replace(/[\u30A1-\u30F6]/g, ch =>
    String.fromCharCode(ch.charCodeAt(0) - 0x60)
  );
}

function hiraganaToKatakana(str) {
  return str.replace(/[\u3041-\u3096]/g, ch =>
    String.fromCharCode(ch.charCodeAt(0) + 0x60)
  );
}

function romajiToKatakana(str) {
  let result = '';
  let i = 0;
  const s = str.toLowerCase();
  while (i < s.length) {
    // Double consonant (っ)
    if (i + 1 < s.length && s[i] === s[i+1] && 'bcdfghjklmpqrstvwxyz'.includes(s[i])) {
      result += 'ッ';
      i++;
      continue;
    }
    let matched = false;
    for (let len = 3; len >= 1; len--) {
      const chunk = s.substring(i, i + len);
      if (ROMAJI_TO_KANA[chunk]) {
        result += ROMAJI_TO_KANA[chunk];
        i += len;
        matched = true;
        break;
      }
    }
    if (!matched) {
      result += s[i];
      i++;
    }
  }
  return result;
}

function buildSearchText(item) {
  const parts = [
    item.name,
    item.nameJa || '',
    item.category,
    item.subcategory || '',
    item.description || ''
  ];
  const text = parts.join(' ').toLowerCase();
  const katakana = katakanaToHiragana(text);
  return text + ' ' + katakana;
}

// Pre-build search index
const allItems = [...HOTELS, ...STORES];
const searchIndex = allItems.map(item => ({
  data: item,
  text: buildSearchText(item)
}));

function doSearch(query) {
  searchResults.innerHTML = '';
  if (!query.trim()) return;

  const q = query.trim().toLowerCase();
  // Convert query to hiragana for matching
  const qHira = katakanaToHiragana(q);
  // Also try romaji -> katakana -> hiragana
  const qFromRomaji = katakanaToHiragana(romajiToKatakana(q));

  const results = searchIndex.filter(({ text }) => {
    return text.includes(q) || text.includes(qHira) || text.includes(qFromRomaji);
  });

  results.forEach(({ data }) => {
    const li = document.createElement('li');
    li.className = 'search-result-item';
    li.innerHTML = `
      <span class="search-result-dot" style="background:${getCategoryColor(data.category)}"></span>
      <div class="search-result-info">
        <div class="search-result-name">${data.name}${data.nameJa ? ' (' + data.nameJa + ')' : ''}</div>
        <div class="search-result-sub">${data.subcategory || data.category}</div>
      </div>
    `;
    li.addEventListener('click', () => {
      closeSearch();
      map.flyTo([data.lat, data.lng], 17, { duration: 0.8 });
      setTimeout(() => showPopup(data), 500);
    });
    searchResults.appendChild(li);
  });
}

function openSearch() {
  searchPanel.classList.add('active');
  searchToggle.classList.add('active');
  setTimeout(() => searchInput.focus(), 300);
}

function closeSearch() {
  searchPanel.classList.remove('active');
  searchToggle.classList.remove('active');
  searchInput.value = '';
  searchClear.classList.remove('visible');
  searchResults.innerHTML = '';
}

searchToggle.addEventListener('click', () => {
  if (searchPanel.classList.contains('active')) {
    closeSearch();
  } else {
    openSearch();
  }
});

searchInput.addEventListener('input', () => {
  const val = searchInput.value;
  searchClear.classList.toggle('visible', val.length > 0);
  doSearch(val);
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchClear.classList.remove('visible');
  searchResults.innerHTML = '';
  searchInput.focus();
});

// Close search on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && searchPanel.classList.contains('active')) {
    closeSearch();
  }
});

// === INIT ===
addHotelMarkers();
addStoreMarkers();

// Fit map to show all markers
const allLatLngs = [...HOTELS, ...STORES].map(d => [d.lat, d.lng]);
const bounds = L.latLngBounds(allLatLngs);
map.fitBounds(bounds, { padding: [60, 40] });

// === Kyotoもぐもぐ - Kyoto Trip Map App ===

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

  // --- OTHER ---
  {
    id: 'blue-bottle',
    name: 'Blue Bottle Studio Kyoto',
    category: 'other',
    subcategory: 'Coffee Studio',
    description: 'ブルーボトルコーヒー京都スタジオ。蹴上の築100年超の京町家。完全予約制コーヒーフルコース。',
    lat: 35.0113612,
    lng: 135.7894734,
    instagram: 'https://www.instagram.com/p/DOqfayNkkaA/?img_index=1'
  }
];

// === SVG ICONS ===
const ICONS = {
  hotel: '<svg viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>',
  restaurant: '<svg viewBox="0 0 24 24"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>',
  cafe: '<svg viewBox="0 0 24 24"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z"/></svg>',
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
  .addAttribution('Tiles &copy; Esri | Kyotoもぐもぐ')
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
    const iconType = category === 'restaurant' ? 'restaurant' : category === 'cafe' ? 'cafe' : 'other';
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

// === POPUP / BOTTOM SHEET ===
const popupSheet = document.getElementById('popup-sheet');
const popupOverlay = document.getElementById('popup-overlay');
const popupName = document.getElementById('popup-name');
const popupCategory = document.getElementById('popup-category');
const popupSubcategory = document.getElementById('popup-subcategory');
const popupDescription = document.getElementById('popup-description');
const popupInstagram = document.getElementById('popup-instagram');
const popupClose = document.getElementById('popup-close');

function showPopup(data) {
  popupName.textContent = data.nameJa ? `${data.name} (${data.nameJa})` : data.name;

  const cat = data.category;
  popupCategory.textContent = cat === 'hotel' ? 'Hotel' : cat === 'restaurant' ? 'Restaurant' : cat === 'cafe' ? 'Cafe' : 'Other';
  popupCategory.className = `category-badge ${cat}`;

  popupSubcategory.textContent = data.subcategory || (data.day ? `Day ${data.day}` : '');
  popupDescription.textContent = data.description || '';

  if (data.instagram) {
    popupInstagram.href = data.instagram;
    popupInstagram.classList.remove('hidden');
  } else {
    popupInstagram.classList.add('hidden');
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
}

popupClose.addEventListener('click', hidePopup);
popupOverlay.addEventListener('click', hidePopup);

// Swipe down to close
let touchStartY = 0;
popupSheet.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
});

popupSheet.addEventListener('touchmove', (e) => {
  const diff = e.touches[0].clientY - touchStartY;
  if (diff > 80) {
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
  allMarkers.forEach(({ marker, data, type }) => {
    if (type === 'hotel') return; // Hotels always visible
    if (activeFilter === 'all' || data.category === activeFilter) {
      if (!map.hasLayer(marker)) marker.addTo(map);
    } else {
      if (map.hasLayer(marker)) map.removeLayer(marker);
    }
  });
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

// === INIT ===
addHotelMarkers();
addStoreMarkers();

// Fit map to show all markers
const allLatLngs = [...HOTELS, ...STORES].map(d => [d.lat, d.lng]);
const bounds = L.latLngBounds(allLatLngs);
map.fitBounds(bounds, { padding: [60, 40] });

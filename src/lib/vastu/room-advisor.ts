/**
 * Vastu Room Advisor
 *
 * Provides room-by-room Vastu recommendations based on
 * room type, direction, and purpose.
 */

interface BilingualText {
  en: string;
  hi: string;
}

export type RoomType =
  | 'bedroom'
  | 'kitchen'
  | 'living-room'
  | 'bathroom'
  | 'pooja-room'
  | 'study'
  | 'dining'
  | 'entrance'
  | 'staircase';

export type Direction =
  | 'north'
  | 'south'
  | 'east'
  | 'west'
  | 'north-east'
  | 'north-west'
  | 'south-east'
  | 'south-west'
  | 'center';

export interface RoomAdvisorInput {
  roomType: RoomType;
  currentDirection: Direction;
}

export interface DirectionSuitability {
  direction: Direction;
  directionName: BilingualText;
  suitability: 'ideal' | 'good' | 'acceptable' | 'avoid';
  reason: BilingualText;
}

export interface ColorRecommendation {
  color: BilingualText;
  hexCode: string;
  reason: BilingualText;
}

export interface PlacementTip {
  item: BilingualText;
  placement: BilingualText;
  reason: BilingualText;
}

export interface Remedy {
  issue: BilingualText;
  remedy: BilingualText;
  priority: 'high' | 'medium' | 'low';
}

export interface RoomAdvisorResult {
  roomType: RoomType;
  roomName: BilingualText;
  currentDirection: Direction;
  currentDirectionName: BilingualText;
  currentSuitability: 'ideal' | 'good' | 'acceptable' | 'avoid';
  currentSuitabilityReason: BilingualText;
  idealDirections: DirectionSuitability[];
  avoidDirections: DirectionSuitability[];
  colors: {
    recommended: ColorRecommendation[];
    avoid: ColorRecommendation[];
  };
  placementTips: PlacementTip[];
  remedies: Remedy[];
  dosList: BilingualText[];
  dontsList: BilingualText[];
  overallScore: number; // 0-100
}

// Direction names in both languages
const DIRECTION_NAMES: Record<Direction, BilingualText> = {
  north: { en: 'North', hi: 'उत्तर' },
  south: { en: 'South', hi: 'दक्षिण' },
  east: { en: 'East', hi: 'पूर्व' },
  west: { en: 'West', hi: 'पश्चिम' },
  'north-east': { en: 'North-East', hi: 'उत्तर-पूर्व (ईशान)' },
  'north-west': { en: 'North-West', hi: 'उत्तर-पश्चिम (वायव्य)' },
  'south-east': { en: 'South-East', hi: 'दक्षिण-पूर्व (आग्नेय)' },
  'south-west': { en: 'South-West', hi: 'दक्षिण-पश्चिम (नैऋत्य)' },
  center: { en: 'Center (Brahmasthan)', hi: 'केंद्र (ब्रह्मस्थान)' },
};

// Room names
const ROOM_NAMES: Record<RoomType, BilingualText> = {
  bedroom: { en: 'Bedroom', hi: 'शयनकक्ष' },
  kitchen: { en: 'Kitchen', hi: 'रसोईघर' },
  'living-room': { en: 'Living Room', hi: 'बैठक कक्ष' },
  bathroom: { en: 'Bathroom/Toilet', hi: 'स्नानघर/शौचालय' },
  'pooja-room': { en: 'Pooja Room', hi: 'पूजा कक्ष' },
  study: { en: 'Study/Office', hi: 'अध्ययन कक्ष/कार्यालय' },
  dining: { en: 'Dining Room', hi: 'भोजन कक्ष' },
  entrance: { en: 'Main Entrance', hi: 'मुख्य प्रवेश द्वार' },
  staircase: { en: 'Staircase', hi: 'सीढ़ियां' },
};

// Room-specific Vastu data
interface RoomVastuData {
  idealDirections: Direction[];
  goodDirections: Direction[];
  acceptableDirections: Direction[];
  avoidDirections: Direction[];
  recommendedColors: Array<{ color: BilingualText; hex: string }>;
  avoidColors: Array<{ color: BilingualText; hex: string }>;
  placementTips: PlacementTip[];
  dos: BilingualText[];
  donts: BilingualText[];
}

const ROOM_VASTU_DATA: Record<RoomType, RoomVastuData> = {
  bedroom: {
    idealDirections: ['south-west'],
    goodDirections: ['south', 'west'],
    acceptableDirections: ['north-west'],
    avoidDirections: ['north-east', 'south-east', 'center'],
    recommendedColors: [
      { color: { en: 'Light Pink', hi: 'हल्का गुलाबी' }, hex: '#FFB6C1' },
      { color: { en: 'Light Blue', hi: 'हल्का नीला' }, hex: '#ADD8E6' },
      { color: { en: 'Light Green', hi: 'हल्का हरा' }, hex: '#90EE90' },
      { color: { en: 'Cream', hi: 'क्रीम' }, hex: '#FFFDD0' },
    ],
    avoidColors: [
      { color: { en: 'Red', hi: 'लाल' }, hex: '#FF0000' },
      { color: { en: 'Black', hi: 'काला' }, hex: '#000000' },
      { color: { en: 'Dark Blue', hi: 'गहरा नीला' }, hex: '#00008B' },
    ],
    placementTips: [
      {
        item: { en: 'Bed', hi: 'बिस्तर' },
        placement: { en: 'Head towards South or West wall', hi: 'सिर दक्षिण या पश्चिम दीवार की ओर' },
        reason: { en: 'Promotes restful sleep and positive energy flow', hi: 'आरामदायक नींद और सकारात्मक ऊर्जा प्रवाह को बढ़ावा देता है' },
      },
      {
        item: { en: 'Wardrobe', hi: 'अलमारी' },
        placement: { en: 'South-West or South wall', hi: 'दक्षिण-पश्चिम या दक्षिण दीवार' },
        reason: { en: 'Keeps heavy items in the correct zone', hi: 'भारी वस्तुओं को सही क्षेत्र में रखता है' },
      },
      {
        item: { en: 'Mirror', hi: 'दर्पण' },
        placement: { en: 'North or East wall, not facing bed', hi: 'उत्तर या पूर्व दीवार, बिस्तर की ओर नहीं' },
        reason: { en: 'Avoids disturbed sleep and negative reflections', hi: 'अशांत नींद और नकारात्मक प्रतिबिंब से बचाता है' },
      },
    ],
    dos: [
      { en: 'Keep bedroom clutter-free', hi: 'शयनकक्ष को अव्यवस्था मुक्त रखें' },
      { en: 'Use soft, soothing lighting', hi: 'मुलायम, सुखदायक प्रकाश का उपयोग करें' },
      { en: 'Place fresh flowers for positive energy', hi: 'सकारात्मक ऊर्जा के लिए ताजे फूल रखें' },
      { en: 'Keep windows clean for natural light', hi: 'प्राकृतिक प्रकाश के लिए खिड़कियां साफ रखें' },
    ],
    donts: [
      { en: 'Avoid mirror facing the bed', hi: 'बिस्तर की ओर दर्पण न रखें' },
      { en: 'Avoid beam directly above bed', hi: 'बिस्तर के ठीक ऊपर बीम न हो' },
      { en: 'Avoid electronics near sleeping area', hi: 'सोने की जगह के पास इलेक्ट्रॉनिक्स न रखें' },
      { en: 'Avoid storing items under the bed', hi: 'बिस्तर के नीचे सामान न रखें' },
    ],
  },
  kitchen: {
    idealDirections: ['south-east'],
    goodDirections: ['north-west'],
    acceptableDirections: ['east', 'south'],
    avoidDirections: ['north-east', 'south-west', 'north', 'center'],
    recommendedColors: [
      { color: { en: 'Orange', hi: 'नारंगी' }, hex: '#FFA500' },
      { color: { en: 'Yellow', hi: 'पीला' }, hex: '#FFFF00' },
      { color: { en: 'Rose Pink', hi: 'गुलाबी' }, hex: '#FF007F' },
      { color: { en: 'Chocolate Brown', hi: 'चॉकलेट ब्राउन' }, hex: '#7B3F00' },
    ],
    avoidColors: [
      { color: { en: 'Black', hi: 'काला' }, hex: '#000000' },
      { color: { en: 'Blue', hi: 'नीला' }, hex: '#0000FF' },
      { color: { en: 'Grey', hi: 'धूसर' }, hex: '#808080' },
    ],
    placementTips: [
      {
        item: { en: 'Stove/Gas', hi: 'चूल्हा/गैस' },
        placement: { en: 'South-East corner, face East while cooking', hi: 'दक्षिण-पूर्व कोना, खाना बनाते समय पूर्व की ओर मुख करें' },
        reason: { en: 'Fire element belongs to South-East (Agni corner)', hi: 'अग्नि तत्व दक्षिण-पूर्व (आग्नेय कोण) से संबंधित है' },
      },
      {
        item: { en: 'Sink/Water', hi: 'सिंक/पानी' },
        placement: { en: 'North-East corner of kitchen', hi: 'रसोई के उत्तर-पूर्व कोने में' },
        reason: { en: 'Water element belongs to North-East', hi: 'जल तत्व उत्तर-पूर्व से संबंधित है' },
      },
      {
        item: { en: 'Refrigerator', hi: 'फ्रिज' },
        placement: { en: 'South-West, West, or North direction', hi: 'दक्षिण-पश्चिम, पश्चिम, या उत्तर दिशा' },
        reason: { en: 'Keeps appliances away from fire zone', hi: 'उपकरणों को अग्नि क्षेत्र से दूर रखता है' },
      },
    ],
    dos: [
      { en: 'Keep kitchen clean and organized', hi: 'रसोई को साफ और व्यवस्थित रखें' },
      { en: 'Ensure good ventilation', hi: 'अच्छा वेंटिलेशन सुनिश्चित करें' },
      { en: 'Store grains in South-West', hi: 'दक्षिण-पश्चिम में अनाज रखें' },
      { en: 'Use exhaust fan for smoke removal', hi: 'धुएं को हटाने के लिए एग्जॉस्ट फैन का उपयोग करें' },
    ],
    donts: [
      { en: 'Avoid placing stove and sink adjacent', hi: 'चूल्हा और सिंक को साथ-साथ न रखें' },
      { en: 'Avoid kitchen under or above toilet', hi: 'शौचालय के नीचे या ऊपर रसोई न बनाएं' },
      { en: 'Avoid black granite countertops', hi: 'काले ग्रेनाइट काउंटरटॉप से बचें' },
      { en: 'Avoid cooking facing South', hi: 'दक्षिण की ओर मुख करके खाना न बनाएं' },
    ],
  },
  'living-room': {
    idealDirections: ['north', 'east', 'north-east'],
    goodDirections: ['north-west'],
    acceptableDirections: ['west'],
    avoidDirections: ['south-west', 'south-east'],
    recommendedColors: [
      { color: { en: 'White', hi: 'सफेद' }, hex: '#FFFFFF' },
      { color: { en: 'Light Yellow', hi: 'हल्का पीला' }, hex: '#FFFFE0' },
      { color: { en: 'Light Green', hi: 'हल्का हरा' }, hex: '#90EE90' },
      { color: { en: 'Blue', hi: 'नीला' }, hex: '#0000FF' },
    ],
    avoidColors: [
      { color: { en: 'Red', hi: 'लाल' }, hex: '#FF0000' },
      { color: { en: 'Black', hi: 'काला' }, hex: '#000000' },
    ],
    placementTips: [
      {
        item: { en: 'Sofa', hi: 'सोफा' },
        placement: { en: 'South or West wall, facing North or East', hi: 'दक्षिण या पश्चिम दीवार, उत्तर या पूर्व की ओर मुख करें' },
        reason: { en: 'Promotes positive conversations and prosperity', hi: 'सकारात्मक बातचीत और समृद्धि को बढ़ावा देता है' },
      },
      {
        item: { en: 'Television', hi: 'टेलीविजन' },
        placement: { en: 'South-East corner', hi: 'दक्षिण-पूर्व कोना' },
        reason: { en: 'Electronic equipment belongs to fire element zone', hi: 'इलेक्ट्रॉनिक उपकरण अग्नि तत्व क्षेत्र से संबंधित हैं' },
      },
      {
        item: { en: 'Main Door', hi: 'मुख्य द्वार' },
        placement: { en: 'North, East, or North-East', hi: 'उत्तर, पूर्व, या उत्तर-पूर्व' },
        reason: { en: 'Invites positive energy and prosperity', hi: 'सकारात्मक ऊर्जा और समृद्धि को आमंत्रित करता है' },
      },
    ],
    dos: [
      { en: 'Keep the room well-lit and airy', hi: 'कमरे को अच्छी तरह प्रकाशित और हवादार रखें' },
      { en: 'Place indoor plants in corners', hi: 'कोनों में इनडोर पौधे रखें' },
      { en: 'Use bright, welcoming colors', hi: 'उज्ज्वल, स्वागत योग्य रंगों का उपयोग करें' },
      { en: 'Keep center area open', hi: 'केंद्रीय क्षेत्र खुला रखें' },
    ],
    donts: [
      { en: 'Avoid clutter and broken items', hi: 'अव्यवस्था और टूटी वस्तुओं से बचें' },
      { en: 'Avoid heavy furniture in North-East', hi: 'उत्तर-पूर्व में भारी फर्नीचर न रखें' },
      { en: 'Avoid sitting under beams', hi: 'बीम के नीचे न बैठें' },
      { en: 'Avoid dark corners', hi: 'अंधेरे कोनों से बचें' },
    ],
  },
  bathroom: {
    idealDirections: ['north-west'],
    goodDirections: ['west'],
    acceptableDirections: ['south'],
    avoidDirections: ['north-east', 'south-west', 'center', 'east'],
    recommendedColors: [
      { color: { en: 'White', hi: 'सफेद' }, hex: '#FFFFFF' },
      { color: { en: 'Light Blue', hi: 'हल्का नीला' }, hex: '#ADD8E6' },
      { color: { en: 'Light Grey', hi: 'हल्का धूसर' }, hex: '#D3D3D3' },
    ],
    avoidColors: [
      { color: { en: 'Red', hi: 'लाल' }, hex: '#FF0000' },
      { color: { en: 'Black', hi: 'काला' }, hex: '#000000' },
      { color: { en: 'Dark Brown', hi: 'गहरा भूरा' }, hex: '#654321' },
    ],
    placementTips: [
      {
        item: { en: 'Toilet Seat', hi: 'टॉयलेट सीट' },
        placement: { en: 'West or North-West, face North or South', hi: 'पश्चिम या उत्तर-पश्चिम, उत्तर या दक्षिण की ओर मुख करें' },
        reason: { en: 'Proper disposal of negative energy', hi: 'नकारात्मक ऊर्जा का उचित निपटान' },
      },
      {
        item: { en: 'Shower/Bathing Area', hi: 'शॉवर/स्नान क्षेत्र' },
        placement: { en: 'East or North-East of bathroom', hi: 'बाथरूम के पूर्व या उत्तर-पूर्व में' },
        reason: { en: 'Water element placement', hi: 'जल तत्व स्थापन' },
      },
      {
        item: { en: 'Mirror', hi: 'दर्पण' },
        placement: { en: 'North or East wall', hi: 'उत्तर या पूर्व दीवार' },
        reason: { en: 'Reflects positive energy', hi: 'सकारात्मक ऊर्जा को प्रतिबिंबित करता है' },
      },
    ],
    dos: [
      { en: 'Keep bathroom clean and dry', hi: 'बाथरूम को साफ और सूखा रखें' },
      { en: 'Ensure proper ventilation', hi: 'उचित वेंटिलेशन सुनिश्चित करें' },
      { en: 'Use air fresheners or plants', hi: 'एयर फ्रेशनर या पौधों का उपयोग करें' },
      { en: 'Keep door closed when not in use', hi: 'उपयोग में न होने पर दरवाजा बंद रखें' },
    ],
    donts: [
      { en: 'Avoid bathroom in North-East', hi: 'उत्तर-पूर्व में बाथरूम न बनाएं' },
      { en: 'Avoid bathroom above kitchen or pooja room', hi: 'रसोई या पूजा कक्ष के ऊपर बाथरूम न बनाएं' },
      { en: 'Avoid leaking taps and pipes', hi: 'टपकते नल और पाइप से बचें' },
      { en: 'Avoid clutter in bathroom', hi: 'बाथरूम में अव्यवस्था से बचें' },
    ],
  },
  'pooja-room': {
    idealDirections: ['north-east'],
    goodDirections: ['east', 'north'],
    acceptableDirections: ['west'],
    avoidDirections: ['south', 'south-east', 'south-west', 'center'],
    recommendedColors: [
      { color: { en: 'White', hi: 'सफेद' }, hex: '#FFFFFF' },
      { color: { en: 'Light Yellow', hi: 'हल्का पीला' }, hex: '#FFFFE0' },
      { color: { en: 'Light Orange', hi: 'हल्का नारंगी' }, hex: '#FFD580' },
      { color: { en: 'Cream', hi: 'क्रीम' }, hex: '#FFFDD0' },
    ],
    avoidColors: [
      { color: { en: 'Black', hi: 'काला' }, hex: '#000000' },
      { color: { en: 'Grey', hi: 'धूसर' }, hex: '#808080' },
      { color: { en: 'Dark Blue', hi: 'गहरा नीला' }, hex: '#00008B' },
    ],
    placementTips: [
      {
        item: { en: 'Idols/Pictures', hi: 'मूर्तियां/चित्र' },
        placement: { en: 'East or West wall, face East while praying', hi: 'पूर्व या पश्चिम दीवार, पूजा करते समय पूर्व की ओर मुख करें' },
        reason: { en: 'Receives first rays of sun, divine energy', hi: 'सूर्य की पहली किरणें, दिव्य ऊर्जा प्राप्त करता है' },
      },
      {
        item: { en: 'Diya/Lamp', hi: 'दीया/लैंप' },
        placement: { en: 'South-East corner of pooja room', hi: 'पूजा कक्ष के दक्षिण-पूर्व कोने में' },
        reason: { en: 'Fire element in Agni corner', hi: 'आग्नेय कोण में अग्नि तत्व' },
      },
      {
        item: { en: 'Water/Gangajal', hi: 'जल/गंगाजल' },
        placement: { en: 'North-East corner', hi: 'उत्तर-पूर्व कोने में' },
        reason: { en: 'Water element placement', hi: 'जल तत्व स्थापन' },
      },
    ],
    dos: [
      { en: 'Keep pooja room clean and sacred', hi: 'पूजा कक्ष को साफ और पवित्र रखें' },
      { en: 'Light lamp daily', hi: 'प्रतिदिन दीपक जलाएं' },
      { en: 'Place fresh flowers regularly', hi: 'नियमित रूप से ताजे फूल रखें' },
      { en: 'Ensure natural light and ventilation', hi: 'प्राकृतिक प्रकाश और वेंटिलेशन सुनिश्चित करें' },
    ],
    donts: [
      { en: 'Avoid pooja room under staircase', hi: 'सीढ़ियों के नीचे पूजा कक्ष न बनाएं' },
      { en: 'Avoid toilet adjacent to or above pooja room', hi: 'पूजा कक्ष के बगल में या ऊपर शौचालय न हो' },
      { en: 'Avoid storing non-religious items', hi: 'गैर-धार्मिक वस्तुओं को न रखें' },
      { en: 'Avoid broken idols', hi: 'टूटी मूर्तियों से बचें' },
    ],
  },
  study: {
    idealDirections: ['north-east', 'north', 'east'],
    goodDirections: ['west'],
    acceptableDirections: ['north-west'],
    avoidDirections: ['south', 'south-west', 'south-east'],
    recommendedColors: [
      { color: { en: 'Light Green', hi: 'हल्का हरा' }, hex: '#90EE90' },
      { color: { en: 'Light Yellow', hi: 'हल्का पीला' }, hex: '#FFFFE0' },
      { color: { en: 'White', hi: 'सफेद' }, hex: '#FFFFFF' },
      { color: { en: 'Violet', hi: 'बैंगनी' }, hex: '#EE82EE' },
    ],
    avoidColors: [
      { color: { en: 'Red', hi: 'लाल' }, hex: '#FF0000' },
      { color: { en: 'Black', hi: 'काला' }, hex: '#000000' },
      { color: { en: 'Dark Grey', hi: 'गहरा धूसर' }, hex: '#A9A9A9' },
    ],
    placementTips: [
      {
        item: { en: 'Study Table', hi: 'अध्ययन मेज' },
        placement: { en: 'Face East or North while studying', hi: 'पढ़ते समय पूर्व या उत्तर की ओर मुख करें' },
        reason: { en: 'Enhances concentration and learning', hi: 'एकाग्रता और सीखने को बढ़ाता है' },
      },
      {
        item: { en: 'Bookshelf', hi: 'किताबों की अलमारी' },
        placement: { en: 'East, North, or North-East wall', hi: 'पूर्व, उत्तर, या उत्तर-पूर्व दीवार' },
        reason: { en: 'Knowledge and wisdom zone', hi: 'ज्ञान और बुद्धि क्षेत्र' },
      },
      {
        item: { en: 'Computer/Laptop', hi: 'कंप्यूटर/लैपटॉप' },
        placement: { en: 'South-East corner', hi: 'दक्षिण-पूर्व कोना' },
        reason: { en: 'Electronics in fire element zone', hi: 'अग्नि तत्व क्षेत्र में इलेक्ट्रॉनिक्स' },
      },
    ],
    dos: [
      { en: 'Keep study area clutter-free', hi: 'अध्ययन क्षेत्र को अव्यवस्था मुक्त रखें' },
      { en: 'Ensure good lighting', hi: 'अच्छी रोशनी सुनिश्चित करें' },
      { en: 'Place Saraswati idol or picture', hi: 'सरस्वती मूर्ति या चित्र रखें' },
      { en: 'Keep inspirational quotes visible', hi: 'प्रेरणादायक उद्धरण दृश्यमान रखें' },
    ],
    donts: [
      { en: 'Avoid mirror in study room', hi: 'अध्ययन कक्ष में दर्पण न रखें' },
      { en: 'Avoid studying facing wall', hi: 'दीवार की ओर मुख करके न पढ़ें' },
      { en: 'Avoid bedroom being used as study', hi: 'शयनकक्ष को अध्ययन के रूप में उपयोग न करें' },
      { en: 'Avoid toilet door visible from study', hi: 'अध्ययन से शौचालय का दरवाजा दिखाई न दे' },
    ],
  },
  dining: {
    idealDirections: ['west'],
    goodDirections: ['east', 'north'],
    acceptableDirections: ['south'],
    avoidDirections: ['south-east', 'south-west', 'center'],
    recommendedColors: [
      { color: { en: 'Light Orange', hi: 'हल्का नारंगी' }, hex: '#FFD580' },
      { color: { en: 'Light Pink', hi: 'हल्का गुलाबी' }, hex: '#FFB6C1' },
      { color: { en: 'Light Green', hi: 'हल्का हरा' }, hex: '#90EE90' },
      { color: { en: 'Cream', hi: 'क्रीम' }, hex: '#FFFDD0' },
    ],
    avoidColors: [
      { color: { en: 'Black', hi: 'काला' }, hex: '#000000' },
      { color: { en: 'Grey', hi: 'धूसर' }, hex: '#808080' },
    ],
    placementTips: [
      {
        item: { en: 'Dining Table', hi: 'डाइनिंग टेबल' },
        placement: { en: 'West or East part of house, rectangular or square shape', hi: 'घर के पश्चिम या पूर्व भाग में, आयताकार या वर्गाकार' },
        reason: { en: 'Promotes family harmony and prosperity', hi: 'पारिवारिक सामंजस्य और समृद्धि को बढ़ावा देता है' },
      },
      {
        item: { en: 'Head of Family Seat', hi: 'परिवार के मुखिया की सीट' },
        placement: { en: 'East or North-facing seat', hi: 'पूर्व या उत्तर की ओर मुख वाली सीट' },
        reason: { en: 'Auspicious direction for the head', hi: 'मुखिया के लिए शुभ दिशा' },
      },
    ],
    dos: [
      { en: 'Eat facing East or North', hi: 'पूर्व या उत्तर की ओर मुख करके खाएं' },
      { en: 'Keep dining area clean', hi: 'भोजन क्षेत्र साफ रखें' },
      { en: 'Use pleasant, light colors', hi: 'सुखद, हल्के रंगों का उपयोग करें' },
      { en: 'Place fresh fruit bowl on table', hi: 'मेज पर ताजे फलों का कटोरा रखें' },
    ],
    donts: [
      { en: 'Avoid eating facing South', hi: 'दक्षिण की ओर मुख करके न खाएं' },
      { en: 'Avoid TV in dining area', hi: 'भोजन क्षेत्र में टीवी न रखें' },
      { en: 'Avoid toilet door visible while eating', hi: 'खाते समय शौचालय का दरवाजा दिखाई न दे' },
      { en: 'Avoid clutter on dining table', hi: 'डाइनिंग टेबल पर अव्यवस्था से बचें' },
    ],
  },
  entrance: {
    idealDirections: ['north', 'east', 'north-east'],
    goodDirections: ['north-west', 'west'],
    acceptableDirections: ['south-east'],
    avoidDirections: ['south', 'south-west'],
    recommendedColors: [
      { color: { en: 'White', hi: 'सफेद' }, hex: '#FFFFFF' },
      { color: { en: 'Light Wood', hi: 'हल्की लकड़ी' }, hex: '#DEB887' },
      { color: { en: 'Light Blue', hi: 'हल्का नीला' }, hex: '#ADD8E6' },
      { color: { en: 'Light Green', hi: 'हल्का हरा' }, hex: '#90EE90' },
    ],
    avoidColors: [
      { color: { en: 'Black', hi: 'काला' }, hex: '#000000' },
      { color: { en: 'Red', hi: 'लाल' }, hex: '#FF0000' },
    ],
    placementTips: [
      {
        item: { en: 'Main Door', hi: 'मुख्य द्वार' },
        placement: { en: 'North, East, or North-East facing', hi: 'उत्तर, पूर्व, या उत्तर-पूर्व मुखी' },
        reason: { en: 'Invites prosperity and positive energy', hi: 'समृद्धि और सकारात्मक ऊर्जा को आमंत्रित करता है' },
      },
      {
        item: { en: 'Nameplate', hi: 'नेमप्लेट' },
        placement: { en: 'Right side of entrance at eye level', hi: 'प्रवेश द्वार के दाईं ओर आंखों की ऊंचाई पर' },
        reason: { en: 'Welcomes good fortune', hi: 'सौभाग्य का स्वागत करता है' },
      },
      {
        item: { en: 'Threshold', hi: 'दहलीज' },
        placement: { en: 'Slightly elevated from outside', hi: 'बाहर से थोड़ा ऊंचा' },
        reason: { en: 'Prevents negative energy from entering', hi: 'नकारात्मक ऊर्जा को प्रवेश से रोकता है' },
      },
    ],
    dos: [
      { en: 'Keep entrance well-lit', hi: 'प्रवेश द्वार को अच्छी तरह प्रकाशित रखें' },
      { en: 'Place auspicious symbols (Om, Swastik)', hi: 'शुभ चिह्न (ॐ, स्वस्तिक) लगाएं' },
      { en: 'Keep entrance clean and welcoming', hi: 'प्रवेश द्वार साफ और स्वागत योग्य रखें' },
      { en: 'Use quality wood for main door', hi: 'मुख्य द्वार के लिए गुणवत्तापूर्ण लकड़ी का उपयोग करें' },
    ],
    donts: [
      { en: 'Avoid shoe rack at entrance', hi: 'प्रवेश द्वार पर जूते रखने की रैक न रखें' },
      { en: 'Avoid broken or squeaky door', hi: 'टूटे या चरमराते दरवाजे से बचें' },
      { en: 'Avoid obstruction in front of door', hi: 'दरवाजे के सामने रुकावट न हो' },
      { en: 'Avoid dark entrance', hi: 'अंधेरे प्रवेश द्वार से बचें' },
    ],
  },
  staircase: {
    idealDirections: ['south', 'south-west', 'west'],
    goodDirections: ['south-east', 'north-west'],
    acceptableDirections: ['east'],
    avoidDirections: ['north-east', 'center', 'north'],
    recommendedColors: [
      { color: { en: 'Light Brown', hi: 'हल्का भूरा' }, hex: '#D2B48C' },
      { color: { en: 'White', hi: 'सफेद' }, hex: '#FFFFFF' },
      { color: { en: 'Cream', hi: 'क्रीम' }, hex: '#FFFDD0' },
    ],
    avoidColors: [
      { color: { en: 'Red', hi: 'लाल' }, hex: '#FF0000' },
      { color: { en: 'Black', hi: 'काला' }, hex: '#000000' },
    ],
    placementTips: [
      {
        item: { en: 'Staircase Direction', hi: 'सीढ़ियों की दिशा' },
        placement: { en: 'Climb from East to West or North to South', hi: 'पूर्व से पश्चिम या उत्तर से दक्षिण चढ़ें' },
        reason: { en: 'Follows natural energy flow', hi: 'प्राकृतिक ऊर्जा प्रवाह का पालन करता है' },
      },
      {
        item: { en: 'Number of Steps', hi: 'सीढ़ियों की संख्या' },
        placement: { en: 'Odd number preferred (ending in 1, 3, 5, 7, 9)', hi: 'विषम संख्या को प्राथमिकता (1, 3, 5, 7, 9 पर समाप्त)' },
        reason: { en: 'Odd numbers are auspicious', hi: 'विषम संख्याएं शुभ होती हैं' },
      },
    ],
    dos: [
      { en: 'Keep staircase well-lit', hi: 'सीढ़ियों को अच्छी तरह प्रकाशित रखें' },
      { en: 'Use sturdy handrails', hi: 'मजबूत रेलिंग का उपयोग करें' },
      { en: 'Keep steps clean and clear', hi: 'सीढ़ियों को साफ और खाली रखें' },
      { en: 'Clockwise rotation preferred', hi: 'दक्षिणावर्त घुमाव को प्राथमिकता' },
    ],
    donts: [
      { en: 'Avoid staircase in center of house', hi: 'घर के केंद्र में सीढ़ियां न बनाएं' },
      { en: 'Avoid broken or damaged steps', hi: 'टूटी या क्षतिग्रस्त सीढ़ियों से बचें' },
      { en: 'Avoid spiral staircases if possible', hi: 'यदि संभव हो तो सर्पिल सीढ़ियों से बचें' },
      { en: 'Avoid staircase facing main door', hi: 'मुख्य द्वार के सामने सीढ़ियां न हों' },
    ],
  },
};

/**
 * Get direction suitability for a room
 */
function getDirectionSuitability(
  roomType: RoomType,
  direction: Direction
): { suitability: 'ideal' | 'good' | 'acceptable' | 'avoid'; reason: BilingualText } {
  const data = ROOM_VASTU_DATA[roomType];

  if (data.idealDirections.includes(direction)) {
    return {
      suitability: 'ideal',
      reason: {
        en: `${DIRECTION_NAMES[direction].en} is the ideal direction for ${ROOM_NAMES[roomType].en}`,
        hi: `${DIRECTION_NAMES[direction].hi} ${ROOM_NAMES[roomType].hi} के लिए आदर्श दिशा है`,
      },
    };
  }
  if (data.goodDirections.includes(direction)) {
    return {
      suitability: 'good',
      reason: {
        en: `${DIRECTION_NAMES[direction].en} is a good direction for ${ROOM_NAMES[roomType].en}`,
        hi: `${DIRECTION_NAMES[direction].hi} ${ROOM_NAMES[roomType].hi} के लिए अच्छी दिशा है`,
      },
    };
  }
  if (data.acceptableDirections.includes(direction)) {
    return {
      suitability: 'acceptable',
      reason: {
        en: `${DIRECTION_NAMES[direction].en} is acceptable for ${ROOM_NAMES[roomType].en} with some remedies`,
        hi: `${DIRECTION_NAMES[direction].hi} कुछ उपायों के साथ ${ROOM_NAMES[roomType].hi} के लिए स्वीकार्य है`,
      },
    };
  }
  return {
    suitability: 'avoid',
    reason: {
      en: `${DIRECTION_NAMES[direction].en} should be avoided for ${ROOM_NAMES[roomType].en}. Remedies recommended.`,
      hi: `${ROOM_NAMES[roomType].hi} के लिए ${DIRECTION_NAMES[direction].hi} से बचना चाहिए। उपाय अनुशंसित हैं।`,
    },
  };
}

/**
 * Calculate overall score based on direction suitability
 */
function calculateScore(suitability: 'ideal' | 'good' | 'acceptable' | 'avoid'): number {
  switch (suitability) {
    case 'ideal':
      return 95;
    case 'good':
      return 75;
    case 'acceptable':
      return 55;
    case 'avoid':
      return 30;
  }
}

/**
 * Main function to get room Vastu advice
 */
export function getRoomVastuAdvice(input: RoomAdvisorInput): RoomAdvisorResult {
  const { roomType, currentDirection } = input;
  const data = ROOM_VASTU_DATA[roomType];

  // Get current direction suitability
  const { suitability, reason } = getDirectionSuitability(roomType, currentDirection);

  // Build ideal directions list
  const idealDirections: DirectionSuitability[] = [
    ...data.idealDirections,
    ...data.goodDirections,
  ].map((dir) => ({
    direction: dir,
    directionName: DIRECTION_NAMES[dir],
    ...getDirectionSuitability(roomType, dir),
  }));

  // Build avoid directions list
  const avoidDirections: DirectionSuitability[] = data.avoidDirections.map((dir) => ({
    direction: dir,
    directionName: DIRECTION_NAMES[dir],
    ...getDirectionSuitability(roomType, dir),
  }));

  // Build color recommendations
  const colors = {
    recommended: data.recommendedColors.map((c) => ({
      color: c.color,
      hexCode: c.hex,
      reason: {
        en: `${c.color.en} promotes positive energy in ${ROOM_NAMES[roomType].en}`,
        hi: `${c.color.hi} ${ROOM_NAMES[roomType].hi} में सकारात्मक ऊर्जा को बढ़ावा देता है`,
      },
    })),
    avoid: data.avoidColors.map((c) => ({
      color: c.color,
      hexCode: c.hex,
      reason: {
        en: `${c.color.en} may create negative energy in ${ROOM_NAMES[roomType].en}`,
        hi: `${c.color.hi} ${ROOM_NAMES[roomType].hi} में नकारात्मक ऊर्जा बना सकता है`,
      },
    })),
  };

  // Build remedies if current direction is not ideal
  const remedies: Remedy[] = [];
  if (suitability === 'avoid' || suitability === 'acceptable') {
    remedies.push({
      issue: {
        en: `${ROOM_NAMES[roomType].en} is in ${DIRECTION_NAMES[currentDirection].en}`,
        hi: `${ROOM_NAMES[roomType].hi} ${DIRECTION_NAMES[currentDirection].hi} में है`,
      },
      remedy: {
        en: `Use recommended colors and ensure proper placement of items as per tips below`,
        hi: `अनुशंसित रंगों का उपयोग करें और नीचे दिए गए सुझावों के अनुसार वस्तुओं का उचित स्थान सुनिश्चित करें`,
      },
      priority: suitability === 'avoid' ? 'high' : 'medium',
    });

    if (roomType === 'bathroom' && (currentDirection === 'north-east' || currentDirection === 'south-west')) {
      remedies.push({
        issue: { en: 'Bathroom in sensitive direction', hi: 'संवेदनशील दिशा में बाथरूम' },
        remedy: {
          en: 'Keep bathroom door closed, use rock salt in corners, and ensure exhaust ventilation',
          hi: 'बाथरूम का दरवाजा बंद रखें, कोनों में सेंधा नमक रखें, और एग्जॉस्ट वेंटिलेशन सुनिश्चित करें',
        },
        priority: 'high',
      });
    }

    if (roomType === 'kitchen' && currentDirection === 'north-east') {
      remedies.push({
        issue: { en: 'Kitchen in North-East', hi: 'उत्तर-पूर्व में रसोई' },
        remedy: {
          en: 'Place Vastu pyramid in kitchen, use yellow/orange colors, keep South-East corner heavy',
          hi: 'रसोई में वास्तु पिरामिड रखें, पीले/नारंगी रंगों का उपयोग करें, दक्षिण-पूर्व कोना भारी रखें',
        },
        priority: 'high',
      });
    }
  }

  return {
    roomType,
    roomName: ROOM_NAMES[roomType],
    currentDirection,
    currentDirectionName: DIRECTION_NAMES[currentDirection],
    currentSuitability: suitability,
    currentSuitabilityReason: reason,
    idealDirections,
    avoidDirections,
    colors,
    placementTips: data.placementTips,
    remedies,
    dosList: data.dos,
    dontsList: data.donts,
    overallScore: calculateScore(suitability),
  };
}

/**
 * Get all room types
 */
export function getAllRoomTypes(): Array<{ type: RoomType; name: BilingualText }> {
  return Object.entries(ROOM_NAMES).map(([type, name]) => ({
    type: type as RoomType,
    name,
  }));
}

/**
 * Get all directions
 */
export function getAllDirections(): Array<{ direction: Direction; name: BilingualText }> {
  return Object.entries(DIRECTION_NAMES).map(([direction, name]) => ({
    direction: direction as Direction,
    name,
  }));
}

/**
 * Indian Cities Database
 * 75+ major cities with coordinates for astronomical calculations
 */

export interface City {
  id: string;
  name: { en: string; hi: string };
  lat: number;
  lon: number;
}

export const INDIAN_CITIES: City[] = [
  // Metro Cities (sorted by population)
  { id: 'delhi', name: { en: 'Delhi (NCR)', hi: 'दिल्ली (एनसीआर)' }, lat: 28.6139, lon: 77.2090 },
  { id: 'mumbai', name: { en: 'Mumbai', hi: 'मुंबई' }, lat: 19.0760, lon: 72.8777 },
  { id: 'bangalore', name: { en: 'Bangalore', hi: 'बेंगलुरु' }, lat: 12.9716, lon: 77.5946 },
  { id: 'chennai', name: { en: 'Chennai', hi: 'चेन्नई' }, lat: 13.0827, lon: 80.2707 },
  { id: 'kolkata', name: { en: 'Kolkata', hi: 'कोलकाता' }, lat: 22.5726, lon: 88.3639 },
  { id: 'hyderabad', name: { en: 'Hyderabad', hi: 'हैदराबाद' }, lat: 17.3850, lon: 78.4867 },

  // Major Cities (A-Z)
  { id: 'agra', name: { en: 'Agra', hi: 'आगरा' }, lat: 27.1767, lon: 78.0081 },
  { id: 'ahmedabad', name: { en: 'Ahmedabad', hi: 'अहमदाबाद' }, lat: 23.0225, lon: 72.5714 },
  { id: 'ajmer', name: { en: 'Ajmer', hi: 'अजमेर' }, lat: 26.4499, lon: 74.6399 },
  { id: 'aligarh', name: { en: 'Aligarh', hi: 'अलीगढ़' }, lat: 27.8974, lon: 78.0880 },
  { id: 'allahabad', name: { en: 'Prayagraj (Allahabad)', hi: 'प्रयागराज' }, lat: 25.4358, lon: 81.8463 },
  { id: 'amritsar', name: { en: 'Amritsar', hi: 'अमृतसर' }, lat: 31.6340, lon: 74.8723 },
  { id: 'aurangabad', name: { en: 'Aurangabad', hi: 'औरंगाबाद' }, lat: 19.8762, lon: 75.3433 },
  { id: 'ayodhya', name: { en: 'Ayodhya', hi: 'अयोध्या' }, lat: 26.7922, lon: 82.1998 },

  { id: 'bhopal', name: { en: 'Bhopal', hi: 'भोपाल' }, lat: 23.2599, lon: 77.4126 },
  { id: 'bhubaneswar', name: { en: 'Bhubaneswar', hi: 'भुवनेश्वर' }, lat: 20.2961, lon: 85.8245 },
  { id: 'bikaner', name: { en: 'Bikaner', hi: 'बीकानेर' }, lat: 28.0229, lon: 73.3119 },

  { id: 'chandigarh', name: { en: 'Chandigarh', hi: 'चंडीगढ़' }, lat: 30.7333, lon: 76.7794 },
  { id: 'coimbatore', name: { en: 'Coimbatore', hi: 'कोयंबटूर' }, lat: 11.0168, lon: 76.9558 },
  { id: 'cuttack', name: { en: 'Cuttack', hi: 'कटक' }, lat: 20.4625, lon: 85.8830 },

  { id: 'dehradun', name: { en: 'Dehradun', hi: 'देहरादून' }, lat: 30.3165, lon: 78.0322 },
  { id: 'dhanbad', name: { en: 'Dhanbad', hi: 'धनबाद' }, lat: 23.7957, lon: 86.4304 },
  { id: 'durgapur', name: { en: 'Durgapur', hi: 'दुर्गापुर' }, lat: 23.5204, lon: 87.3119 },
  { id: 'dwarka', name: { en: 'Dwarka', hi: 'द्वारका' }, lat: 22.2442, lon: 68.9685 },

  { id: 'faridabad', name: { en: 'Faridabad', hi: 'फरीदाबाद' }, lat: 28.4089, lon: 77.3178 },

  { id: 'gaya', name: { en: 'Gaya', hi: 'गया' }, lat: 24.7914, lon: 85.0002 },
  { id: 'gorakhpur', name: { en: 'Gorakhpur', hi: 'गोरखपुर' }, lat: 26.7606, lon: 83.3732 },
  { id: 'gurgaon', name: { en: 'Gurugram', hi: 'गुरुग्राम' }, lat: 28.4595, lon: 77.0266 },
  { id: 'guwahati', name: { en: 'Guwahati', hi: 'गुवाहाटी' }, lat: 26.1445, lon: 91.7362 },
  { id: 'gwalior', name: { en: 'Gwalior', hi: 'ग्वालियर' }, lat: 26.2183, lon: 78.1828 },

  { id: 'haridwar', name: { en: 'Haridwar', hi: 'हरिद्वार' }, lat: 29.9457, lon: 78.1642 },
  { id: 'howrah', name: { en: 'Howrah', hi: 'हावड़ा' }, lat: 22.5958, lon: 88.2636 },

  { id: 'indore', name: { en: 'Indore', hi: 'इंदौर' }, lat: 22.7196, lon: 75.8577 },

  { id: 'jabalpur', name: { en: 'Jabalpur', hi: 'जबलपुर' }, lat: 23.1815, lon: 79.9864 },
  { id: 'jaipur', name: { en: 'Jaipur', hi: 'जयपुर' }, lat: 26.9124, lon: 75.7873 },
  { id: 'jalandhar', name: { en: 'Jalandhar', hi: 'जालंधर' }, lat: 31.3260, lon: 75.5762 },
  { id: 'jammu', name: { en: 'Jammu', hi: 'जम्मू' }, lat: 32.7266, lon: 74.8570 },
  { id: 'jamshedpur', name: { en: 'Jamshedpur', hi: 'जमशेदपुर' }, lat: 22.8046, lon: 86.2029 },
  { id: 'jodhpur', name: { en: 'Jodhpur', hi: 'जोधपुर' }, lat: 26.2389, lon: 73.0243 },

  { id: 'kanpur', name: { en: 'Kanpur', hi: 'कानपुर' }, lat: 26.4499, lon: 80.3319 },
  { id: 'kochi', name: { en: 'Kochi (Cochin)', hi: 'कोच्चि' }, lat: 9.9312, lon: 76.2673 },
  { id: 'kota', name: { en: 'Kota', hi: 'कोटा' }, lat: 25.2138, lon: 75.8648 },

  { id: 'lucknow', name: { en: 'Lucknow', hi: 'लखनऊ' }, lat: 26.8467, lon: 80.9462 },
  { id: 'ludhiana', name: { en: 'Ludhiana', hi: 'लुधियाना' }, lat: 30.9010, lon: 75.8573 },

  { id: 'madurai', name: { en: 'Madurai', hi: 'मदुरै' }, lat: 9.9252, lon: 78.1198 },
  { id: 'mathura', name: { en: 'Mathura', hi: 'मथुरा' }, lat: 27.4924, lon: 77.6737 },
  { id: 'meerut', name: { en: 'Meerut', hi: 'मेरठ' }, lat: 28.9845, lon: 77.7064 },
  { id: 'moradabad', name: { en: 'Moradabad', hi: 'मुरादाबाद' }, lat: 28.8386, lon: 78.7733 },
  { id: 'mysore', name: { en: 'Mysore', hi: 'मैसूर' }, lat: 12.2958, lon: 76.6394 },

  { id: 'nagpur', name: { en: 'Nagpur', hi: 'नागपुर' }, lat: 21.1458, lon: 79.0882 },
  { id: 'nashik', name: { en: 'Nashik', hi: 'नासिक' }, lat: 19.9975, lon: 73.7898 },
  { id: 'noida', name: { en: 'Noida', hi: 'नोएडा' }, lat: 28.5355, lon: 77.3910 },

  { id: 'patna', name: { en: 'Patna', hi: 'पटना' }, lat: 25.5941, lon: 85.1376 },
  { id: 'pondicherry', name: { en: 'Puducherry', hi: 'पुडुचेरी' }, lat: 11.9416, lon: 79.8083 },
  { id: 'pune', name: { en: 'Pune', hi: 'पुणे' }, lat: 18.5204, lon: 73.8567 },
  { id: 'puri', name: { en: 'Puri', hi: 'पुरी' }, lat: 19.8135, lon: 85.8312 },

  { id: 'raipur', name: { en: 'Raipur', hi: 'रायपुर' }, lat: 21.2514, lon: 81.6296 },
  { id: 'rajkot', name: { en: 'Rajkot', hi: 'राजकोट' }, lat: 22.3039, lon: 70.8022 },
  { id: 'ranchi', name: { en: 'Ranchi', hi: 'रांची' }, lat: 23.3441, lon: 85.3096 },
  { id: 'rishikesh', name: { en: 'Rishikesh', hi: 'ऋषिकेश' }, lat: 30.0869, lon: 78.2676 },

  { id: 'shimla', name: { en: 'Shimla', hi: 'शिमला' }, lat: 31.1048, lon: 77.1734 },
  { id: 'siliguri', name: { en: 'Siliguri', hi: 'सिलीगुड़ी' }, lat: 26.7271, lon: 88.3953 },
  { id: 'solapur', name: { en: 'Solapur', hi: 'सोलापुर' }, lat: 17.6599, lon: 75.9064 },
  { id: 'srinagar', name: { en: 'Srinagar', hi: 'श्रीनगर' }, lat: 34.0837, lon: 74.7973 },
  { id: 'surat', name: { en: 'Surat', hi: 'सूरत' }, lat: 21.1702, lon: 72.8311 },

  { id: 'thane', name: { en: 'Thane', hi: 'ठाणे' }, lat: 19.2183, lon: 72.9781 },
  { id: 'thiruvananthapuram', name: { en: 'Thiruvananthapuram', hi: 'तिरुवनंतपुरम' }, lat: 8.5241, lon: 76.9366 },
  { id: 'tirupati', name: { en: 'Tirupati', hi: 'तिरुपति' }, lat: 13.6288, lon: 79.4192 },
  { id: 'trichy', name: { en: 'Tiruchirappalli', hi: 'तिरुचिरापल्ली' }, lat: 10.7905, lon: 78.7047 },

  { id: 'udaipur', name: { en: 'Udaipur', hi: 'उदयपुर' }, lat: 24.5854, lon: 73.7125 },
  { id: 'ujjain', name: { en: 'Ujjain', hi: 'उज्जैन' }, lat: 23.1765, lon: 75.7885 },

  { id: 'vadodara', name: { en: 'Vadodara', hi: 'वडोदरा' }, lat: 22.3072, lon: 73.1812 },
  { id: 'varanasi', name: { en: 'Varanasi', hi: 'वाराणसी' }, lat: 25.3176, lon: 82.9739 },
  { id: 'vijayawada', name: { en: 'Vijayawada', hi: 'विजयवाड़ा' }, lat: 16.5062, lon: 80.6480 },
  { id: 'visakhapatnam', name: { en: 'Visakhapatnam', hi: 'विशाखापत्तनम' }, lat: 17.6868, lon: 83.2185 },
  { id: 'vrindavan', name: { en: 'Vrindavan', hi: 'वृंदावन' }, lat: 27.5530, lon: 77.6993 },
];

// Default city (Capital of India)
export const DEFAULT_CITY_ID = 'delhi';

// Helper function to get city by ID
export function getCityById(id: string): City | undefined {
  return INDIAN_CITIES.find(city => city.id === id);
}

// Helper function to get default city
export function getDefaultCity(): City {
  return INDIAN_CITIES[0]; // Delhi
}

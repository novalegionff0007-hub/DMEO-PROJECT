export interface District {
  id: string;
  nameBn: string;
  nameEn: string;
  division: string;
}

export const BANGLADESH_DISTRICTS: District[] = [
  // Dhaka Division
  { id: 'dhaka', nameBn: 'ঢাকা', nameEn: 'Dhaka', division: 'ঢাকা' },
  { id: 'gazipur', nameBn: 'গাজীপুর', nameEn: 'Gazipur', division: 'ঢাকা' },
  { id: 'narayanganj', nameBn: 'নারায়ণগঞ্জ', nameEn: 'Narayanganj', division: 'ঢাকা' },
  { id: 'tangail', nameBn: 'টাঙ্গাইল', nameEn: 'Tangail', division: 'ঢাকা' },
  { id: 'faridpur', nameBn: 'ফরিদপুর', nameEn: 'Faridpur', division: 'ঢাকা' },
  { id: 'kishoreganj', nameBn: 'কিশোরগঞ্জ', nameEn: 'Kishoreganj', division: 'ঢাকা' },
  { id: 'manikganj', nameBn: 'মানিকগঞ্জ', nameEn: 'Manikganj', division: 'ঢাকা' },
  { id: 'munshiganj', nameBn: 'মুন্সীগঞ্জ', nameEn: 'Munshiganj', division: 'ঢাকা' },
  { id: 'narsingdi', nameBn: 'নরসিংদী', nameEn: 'Narsingdi', division: 'ঢাকা' },
  { id: 'gopalganj', nameBn: 'গোপালগঞ্জ', nameEn: 'Gopalganj', division: 'ঢাকা' },
  { id: 'madaripur', nameBn: 'মাদারীপুর', nameEn: 'Madaripur', division: 'ঢাকা' },
  { id: 'rajbari', nameBn: 'রাজবাড়ী', nameEn: 'Rajbari', division: 'ঢাকা' },
  { id: 'shariatpur', nameBn: 'শরীয়তপুর', nameEn: 'Shariatpur', division: 'ঢাকা' },

  // Chattogram Division
  { id: 'chattogram', nameBn: 'চট্টগ্রাম', nameEn: 'Chattogram', division: 'চট্টগ্রাম' },
  { id: 'coxsbazar', nameBn: 'কক্সবাজার', nameEn: "Cox's Bazar", division: 'চট্টগ্রাম' },
  { id: 'cumilla', nameBn: 'কুমিল্লা', nameEn: 'Cumilla', division: 'চট্টগ্রাম' },
  { id: 'feni', nameBn: 'ফেনী', nameEn: 'Feni', division: 'চট্টগ্রাম' },
  { id: 'brahmanbaria', nameBn: 'ব্রাহ্মণবাড়িয়া', nameEn: 'Brahmanbaria', division: 'চট্টগ্রাম' },
  { id: 'noakhali', nameBn: 'নোয়াখালী', nameEn: 'Noakhali', division: 'চট্টগ্রাম' },
  { id: 'chandpur', nameBn: 'চাঁদপুর', nameEn: 'Chandpur', division: 'চট্টগ্রাম' },
  { id: 'lakshmipur', nameBn: 'লক্ষ্মীপুর', nameEn: 'Lakshmipur', division: 'চট্টগ্রাম' },
  { id: 'rangamati', nameBn: 'রাঙ্গামাটি', nameEn: 'Rangamati', division: 'চট্টগ্রাম' },
  { id: 'bandarban', nameBn: 'বান্দরবান', nameEn: 'Bandarban', division: 'চট্টগ্রাম' },
  { id: 'khagrachhari', nameBn: 'খাগড়াছড়ি', nameEn: 'Khagrachhari', division: 'চট্টগ্রাম' },

  // Sylhet Division
  { id: 'sylhet', nameBn: 'সিলেট', nameEn: 'Sylhet', division: 'সিলেট' },
  { id: 'moulvibazar', nameBn: 'মৌলভীবাজার', nameEn: 'Moulvibazar', division: 'সিলেট' },
  { id: 'habiganj', nameBn: 'হবিগঞ্জ', nameEn: 'Habiganj', division: 'সিলেট' },
  { id: 'sunamganj', nameBn: 'সুনামগঞ্জ', nameEn: 'Sunamganj', division: 'সিলেট' },

  // Rajshahi Division
  { id: 'rajshahi', nameBn: 'রাজশাহী', nameEn: 'Rajshahi', division: 'রাজশাহী' },
  { id: 'bogura', nameBn: 'বগুড়া', nameEn: 'Bogura', division: 'রাজশাহী' },
  { id: 'pabna', nameBn: 'পাবনা', nameEn: 'Pabna', division: 'রাজশাহী' },
  { id: 'sirajganj', nameBn: 'সিরাজগঞ্জ', nameEn: 'Sirajganj', division: 'রাজশাহী' },
  { id: 'naogaon', nameBn: 'নওগাঁ', nameEn: 'Naogaon', division: 'রাজশাহী' },
  { id: 'natore', nameBn: 'নাটোর', nameEn: 'Natore', division: 'রাজশাহী' },
  { id: 'chapai_nawabganj', nameBn: 'চাঁপাইনবাবগঞ্জ', nameEn: 'Chapai Nawabganj', division: 'রাজশাহী' },
  { id: 'joypurhat', nameBn: 'জয়পুরহাট', nameEn: 'Joypurhat', division: 'রাজশাহী' },

  // Khulna Division
  { id: 'khulna', nameBn: 'খুলনা', nameEn: 'Khulna', division: 'খুলনা' },
  { id: 'jashore', nameBn: 'যশোর', nameEn: 'Jashore', division: 'খুলনা' },
  { id: 'kushtia', nameBn: 'কুষ্টিয়া', nameEn: 'Kushtia', division: 'খুলনা' },
  { id: 'jhenaidah', nameBn: 'ঝিনাইদহ', nameEn: 'Jhenaidah', division: 'খুলনা' },
  { id: 'satkhira', nameBn: 'সাতক্ষীরা', nameEn: 'Satkhira', division: 'খুলনা' },
  { id: 'chuadanga', nameBn: 'চুয়াডাঙ্গা', nameEn: 'Chuadanga', division: 'খুলনা' },
  { id: 'bagerhat', nameBn: 'বাগেরহাট', nameEn: 'Bagerhat', division: 'খুলনা' },
  { id: 'magura', nameBn: 'মাগুরা', nameEn: 'Magura', division: 'খুলনা' },
  { id: 'meherpur', nameBn: 'মেহেরপুর', nameEn: 'Meherpur', division: 'খুলনা' },
  { id: 'narail', nameBn: 'নড়াইল', nameEn: 'Narail', division: 'খুলনা' },

  // Barishal Division
  { id: 'barishal', nameBn: 'বরিশাল', nameEn: 'Barishal', division: 'বরিশাল' },
  { id: 'patuakhali', nameBn: 'পটুয়াখালী', nameEn: 'Patuakhali', division: 'বরিশাল' },
  { id: 'bhola', nameBn: 'ভোলা', nameEn: 'Bhola', division: 'বরিশাল' },
  { id: 'pirojpur', nameBn: 'পিরোজপুর', nameEn: 'Pirojpur', division: 'বরিশাল' },
  { id: 'barguna', nameBn: 'বরগুনা', nameEn: 'Barguna', division: 'বরিশাল' },
  { id: 'jhalokati', nameBn: 'ঝালকাঠি', nameEn: 'Jhalokati', division: 'বরিশাল' },

  // Rangpur Division
  { id: 'rangpur', nameBn: 'রংপুর', nameEn: 'Rangpur', division: 'রংপুর' },
  { id: 'dinajpur', nameBn: 'দিনাজপুর', nameEn: 'Dinajpur', division: 'রংপুর' },
  { id: 'gaibandha', nameBn: 'গাইবান্ধা', nameEn: 'Gaibandha', division: 'রংপুর' },
  { id: 'kurigram', nameBn: 'কুড়িগ্রাম', nameEn: 'Kurigram', division: 'রংপুর' },
  { id: 'nilphamari', nameBn: 'নীলফামারী', nameEn: 'Nilphamari', division: 'রংপুর' },
  { id: 'thakurgaon', nameBn: 'ঠাকুরগাঁও', nameEn: 'Thakurgaon', division: 'রংপুর' },
  { id: 'panchagarh', nameBn: 'পঞ্চগড়', nameEn: 'Panchagarh', division: 'রংপুর' },
  { id: 'lalmonirhat', nameBn: 'লালমনিরহাট', nameEn: 'Lalmonirhat', division: 'রংপুর' },

  // Mymensingh Division
  { id: 'mymensingh', nameBn: 'ময়মনসিংহ', nameEn: 'Mymensingh', division: 'ময়মনসিংহ' },
  { id: 'jamalpur', nameBn: 'জামালপুর', nameEn: 'Jamalpur', division: 'ময়মনসিংহ' },
  { id: 'netrokona', nameBn: 'নেত্রকোণা', nameEn: 'Netrokona', division: 'ময়মনসিংহ' },
  { id: 'sherpur', nameBn: 'শেরপুর', nameEn: 'Sherpur', division: 'ময়মনসিংহ' },
];

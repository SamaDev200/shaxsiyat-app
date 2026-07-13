export type PersonalityType = {
  code: string;
  name: string;
  motto: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  careers: { title: string; reason: string }[];
  recommendations: string[];
};

export const personalityTypes: Record<string, PersonalityType> = {
  INTJ: {
    code: "INTJ",
    name: "Strategik Fikrlovchi",
    motto: "\"Har bir muammo uchun optimal yechim mavjud.\"",
    description: "INTJ — mustaqil, chuqur fikrlaydigan va uzoqni ko'ra biladigan strateglar. Ular murakkab tizimlarni tushunish va kelajakka yo'naltirilgan rejalar tuzishda tengsiz. Ichki dunyolari boy va ular doimo o'zlarini rivojlantirishga intilishadi.",
    strengths: ["Strategik fikrlash qobiliyati", "Mustaqillik va dadillik", "Kuchli analitik aql", "Maqsadga yo'naltirilganlik"],
    weaknesses: ["Haddan tashqari tanqidchilik", "Hissiyotlarni ifoda etishda qiyinchilik", "Boshqalarning fikrlarini e'tiborsiz qoldirish", "Perfeksionizm"],
    careers: [
      { title: "💻 Dasturiy ta'minot arxitektori", reason: "Murakkab tizimlarni loyihalash va strategik texnologik qarorlar qabul qilish qobiliyati" },
      { title: "🔬 Ilmiy tadqiqotchi", reason: "Chuqur tahlil va uzoq muddatli loyihalar bilan ishlash ishtiyoqi" },
      { title: "📊 Moliyaviy tahlilchi", reason: "Analitik fikrlash va katta hajmdagi ma'lumotlarni qayta ishlash qobiliyati" },
      { title: "📈 Biznes-strateg", reason: "Kelajakni bashorat qilish va strategik rejalar tuzish mahorati" }
    ],
    recommendations: [
      "Hissiyotlaringizni ifoda etishni mashq qiling — bu munosabatlarni mustahkamlaydi.",
      "Boshqalarning g'oyalarini ham tinglashga sabr qiling.",
      "Ba'zan \"yetarlicha yaxshi\" ham mukammal bo'lishi mumkinligini unutmang.",
      "Jamoaviy ishlarda boshqalarga ham imkoniyat bering."
    ]
  },
  INTP: {
    code: "INTP",
    name: "Mantiqiy Tadqiqotchi",
    motto: "\"Haqiqatni aniqlashning eng yaxshi yo'li — savol berish.\"",
    description: "INTP — kuchli analitik fikrga ega, bilimga chanqoq va nazariy masalalarni yechishni yaxshi ko'radigan shaxslar. Ular dunyoni tushunish va yangi bilimlar kashf etishga intilishadi.",
    strengths: ["Analitik va mantiqiy fikrlash", "Ijodiy muammolarni hal qilish", "Ochiq fikrlilik", "Bilimga chanqoqlik"],
    weaknesses: ["Ijtimoiy vaziyatlarda noqulaylik", "Loyihalarni oxirigacha yetkazmay qo'yish", "Hissiyotlarga befarqlik", "Ortiqcha o'ylash"],
    careers: [
      { title: "🧑‍💻 Dasturchi / Backend Developer", reason: "Mantiqiy masalalarni yechish va murakkab algoritmlar yaratish qobiliyati" },
      { title: "📉 Ma'lumotlar tahlilchisi", reason: "Katta hajmdagi ma'lumotlarda qonuniyatlarni topish mahorati" },
      { title: "🧪 Fizik yoki matematik", reason: "Nazariy masalalar ustida chuqur fikrlash va tadqiqot qilish ishtiyoqi" },
      { title: "✍️ Falsafachi yoki yozuvchi", reason: "G'oyalarni chuqur tahlil qilish va original fikrlash qobiliyati" }
    ],
    recommendations: [
      "Boshlagan ishlaringizni oxirigacha yetkazish odatini shakllantiring.",
      "Boshqalarning hissiyotlariga ko'proq e'tibor qarating.",
      "Nazariyadan amaliyotga o'tish ko'nikmalarini rivojlantiring.",
      "Ijtimoiy aloqalarni mustahkamlashga vaqt ajrating."
    ]
  },
  ENTJ: {
    code: "ENTJ",
    name: "Buyuk Qo'mondon",
    motto: "\"Yetakchilik — bu mas'uliyatni o'z zimmasiga olish.\"",
    description: "ENTJ — tabiiy liderlar bo'lib, ular katta maqsadlar qo'yadi va atrofidagilarni shu maqsadga yetaklaydi. Ular samaradorlik va natijaga yo'naltirilgan, juda qarorkor va dadil shaxslardir.",
    strengths: ["Tabiiy yetakchilik qobiliyati", "Samaradorlik va maqsadga intilish", "Strategik rejalashtirish", "O'ziga ishonch"],
    weaknesses: ["Sabrsizlik", "Haddan tashqari talabchanlik", "Boshqalarning hissiyotlarini e'tiborsiz qoldirish", "Murosaga kelishda qiyinchilik"],
    careers: [
      { title: "🏢 Kompaniya rahbari (CEO)", reason: "Tabiiy yetakchilik va strategik fikrlash qobiliyati" },
      { title: "📋 Loyiha menejeri", reason: "Jamoani boshqarish va natijaga erishish mahorati" },
      { title: "⚖️ Huquqshunos / Advokat", reason: "Dadillik, mantiqiy munozara va ishontirish qobiliyati" },
      { title: "🚀 Tadbirkor", reason: "Risk olish tayorligi va strategik qarorlar qabul qilish mahorati" }
    ],
    recommendations: [
      "Jamoangiz a'zolarining hissiyotlarini ham hisobga oling.",
      "Ba'zan nazoratni boshqalarga topshirishni o'rganing.",
      "Sabr — kuchli yetakchining eng muhim xususiyati ekanini unutmang.",
      "O'z-o'zingizni tanqid qilishni ham o'rganing."
    ]
  },
  ENTP: {
    code: "ENTP",
    name: "Zukko Munozarachi",
    motto: "\"Har bir qoida — sinash uchun yaratilgan.\"",
    description: "ENTP — g'oyalar generatori bo'lib, ular yangi imkoniyatlarni ko'rish va ularni muhokama qilishni yaxshi ko'radilar. Tezkor fikrlay olishlari va muammolarga nostandart yondashuv topish qobiliyatlari bilan ajralib turadi.",
    strengths: ["G'oyalar generatsiyasi", "Tez fikrlash va topqirlik", "Moslashuvchanlik", "Ishontirish qobiliyati"],
    weaknesses: ["Boshlagan ishni tashlab ketish", "Rutinadan zerikish", "Ba'zan tortishuvchilik", "Diqqatni jamlashda qiyinchilik"],
    careers: [
      { title: "💡 Tadbirkor / Startup asoschisi", reason: "Yangi g'oyalarni amalga oshirish va innovatsion fikrlash qobiliyati" },
      { title: "📢 Marketing strategi", reason: "Ijodiy kampaniyalar yaratish va auditoriyani jalb qilish mahorati" },
      { title: "🤝 Konsultant", reason: "Turli sohalarda muammolarga nostandart yechim topish qobiliyati" },
      { title: "📰 Jurnalist / Yozuvchi", reason: "Mavzularni chuqur o'rganish va qiziqarli tarzda yoritish mahorati" }
    ],
    recommendations: [
      "Bir vaqtda bir loyihaga e'tibor qarating va uni oxirigacha yetkazing.",
      "Rutinani qabul qilishni o'rganing — bu hayotning zaruriy qismi.",
      "Boshqalarning fikrlariga hurmat bilan munosabatda bo'ling.",
      "Uzoq muddatli maqsadlar uchun intizom shakllantiring."
    ]
  },
  INFJ: {
    code: "INFJ",
    name: "Himoyachi Bilim Beruvchi",
    motto: "\"Dunyo yaxshilik uchun o'zgartirilishi kerak.\"",
    description: "INFJ — eng noyob shaxsiyat turlaridan biri bo'lib, chuqur empatiya, kuchli intuitsiya va kelajak haqidagi aniq tasavvurga ega. Ular boshqalarga yordam berish va dunyoni yaxshiroq joyga aylantirish uchun yashaydilar.",
    strengths: ["Chuqur empatiya va tushunish", "Kuchli intuitsiya", "Ijodkorlik", "Maqsadga sodiqlik"],
    weaknesses: ["Ortiqcha idealizm", "O'zini emotsional jihatdan charchatish", "Tanqidni og'ir qabul qilish", "Perfeksionizm"],
    careers: [
      { title: "🛋️ Psixolog / Maslahatchi", reason: "Chuqur empatiya va insonlarni tushunish qobiliyati" },
      { title: "✒️ Yozuvchi / Muallif", reason: "Boy ichki dunyo va hissiyotlarni so'z bilan ifodalash mahorati" },
      { title: "🧑‍🏫 O'qituvchi / Murabbiy", reason: "Boshqalarga ilhom berish va ularning rivojlanishiga hissa qo'shish ishtiyoqi" },
      { title: "🤝 Ijtimoiy xodim", reason: "Zaif guruhlarga yordam berish va jamiyatni yaxshilash istagi" }
    ],
    recommendations: [
      "O'zingizga g'amxo'rlik qilishni unutmang — avval o'z holatlaringizga e'tibor bering.",
      "Hamma muammoni yolg'iz hal qilishga urinmang.",
      "Tanqidni shaxsiy hujum sifatida emas, o'sish uchun imkoniyat sifatida qabul qiling.",
      "Ba'zan realizmga ham joy bering — ideallar muhim, ammo haqiqat ham muhim."
    ]
  },
  INFP: {
    code: "INFP",
    name: "Idealist Shoir",
    motto: "\"Har bir inson o'ziga xos va qimmatli.\"",
    description: "INFP — chuqur hissiyotli, ijodiy va qadriyatlariga sodiq shaxslar. Ular ichki dunyolari juda boy va ular haqiqiy ma'no izlaydilar. Boshqalarga nisbatan g'amxo'r va tushunuvchan bo'lishadi.",
    strengths: ["Chuqur hissiyotli va empatik", "Ijodiy fikrlash", "Qadriyatlarga sodiqlik", "Moslashuvchanlik"],
    weaknesses: ["Ortiqcha hayal bastarlik", "O'zini izolyatsiya qilish", "Amaliy masalalarda qiyinchilik", "O'ta sezgirlik"],
    careers: [
      { title: "🎨 Grafik dizayner", reason: "Ijodiy tasavvur va go'zallikni yaratish qobiliyati" },
      { title: "📝 Yozuvchi / Shoir", reason: "Chuqur hissiyotlarni so'z orqali ifodalash mahorati" },
      { title: "🛋️ Psixoterapevt", reason: "Insonlarni tushunish va ularning ichki dunyosiga kirib borish qobiliyati" },
      { title: "🎵 Musiqa yoki san'at sohasida faoliyat", reason: "Hissiyotlarni san'at orqali ifodalash va boshqalarga ilhom berish" }
    ],
    recommendations: [
      "Xayolparastlikdan amaliy qadamlarga o'tishni mashq qiling.",
      "O'z chegaralaringizni aniqlash va ularni himoya qilishni o'rganing.",
      "Kichik maqsadlar qo'yib, ularni bajarishdan quvonch oling.",
      "Tanqidni shaxsiy qabul qilmaslikka harakat qiling."
    ]
  },
  ENFJ: {
    code: "ENFJ",
    name: "Ilhomchi Yetakchi",
    motto: "\"Yaxshilik tarqatish — eng ulug' maqsad.\"",
    description: "ENFJ — ilhomlovchi, hamdard va boshqalarni motivatsiya qilish qobiliyatiga ega bo'lgan tabiiy yetakchilar. Ular insonlar bilan ishlashni va jamiyatga foydali bo'lishni yaxshi ko'radilar.",
    strengths: ["Kuchli empatiya", "Ilhom berish qobiliyati", "Tashkilotchilik", "Odamlarni jipslashtirish"],
    weaknesses: ["O'zini boshqalar uchun fido qilish", "Yo'q deyishda qiyinchilik", "O'ta idealistlik", "O'z ehtiyojlarini e'tiborsiz qoldirish"],
    careers: [
      { title: "👥 HR menejeri", reason: "Insonlarni tushunish va jamoani boshqarish mahorati" },
      { title: "🎓 O'qituvchi / Professor", reason: "Ilhom berish va bilim ulashish ishtiyoqi" },
      { title: "🌍 Ijtimoiy tadbirkor", reason: "Jamiyat uchun foyda keltiradigan loyihalarni boshqarish qobiliyati" },
      { title: "🤝 Diplomatik xodim", reason: "Muzokaralar olib borish va insonlar o'rtasida ko'prik bo'lish mahorati" }
    ],
    recommendations: [
      "O'z ehtiyojlaringizga ham e'tibor bering — avval o'zingizga g'amxo'rlik qiling.",
      "Ba'zan 'yo'q' deyishni o'rganing — bu boshqalarga ham foydali.",
      "Hamma kishini o'zgartira olmasligingizni qabul qiling.",
      "Tanqidni konstruktiv qabul qilishni mashq qiling."
    ]
  },
  ENFP: {
    code: "ENFP",
    name: "Ilhomli Sayohatchi",
    motto: "\"Hayotda eng muhimi — yangi tajribalar!\"",
    description: "ENFP — energiyaga to'la, ijodiy va optimistik shaxslar. Ular yangi g'oyalar, odamlar va tajribalar bilan o'zlarini boyitishni yaxshi ko'radilar. Ularning ishtiyoqi va energiyasi atrofdagilarga ham yuqadi.",
    strengths: ["Ijodiy energiya", "Odamlarga ilhom berish", "Moslashuvchanlik", "Optimizm va ishtiyoq"],
    weaknesses: ["Diqqatni jamlashda qiyinchilik", "O'ta hissiy bo'lish", "Tez zerikish", "Ishlarni oxirigacha yetkazmaslik"],
    careers: [
      { title: "📱 Kontent yaratuvchi / Bloger", reason: "Ijodiy fikrlash va auditoriyani jalb qilish qobiliyati" },
      { title: "🎯 Marketing menejeri", reason: "Odamlar bilan ishlash va yangi g'oyalar yaratish mahorati" },
      { title: "🎭 Aktyor / San'atkor", reason: "Hissiyotlarni ifodalash va auditoriya bilan aloqa o'rnatish qobiliyati" },
      { title: "🚀 Tadbirkor", reason: "Ishtiyoq, moslashuvchanlik va yangilik yaratishga bo'lgan intilish" }
    ],
    recommendations: [
      "Diqqatingizni jamlash uchun kundalik tartib o'rnating.",
      "Boshlagan loyihalaringizni oxirigacha yetkazing — natija beradi.",
      "Ba'zan chuqurroq fikrlang — sirt ko'rinish aldashi mumkin.",
      "O'z hissiyotlaringizni boshqarishni o'rganing."
    ]
  },
  ISTJ: {
    code: "ISTJ",
    name: "Ishonchli Tashkilotchi",
    motto: "\"Tartib va intizom — muvaffaqiyat kaliti.\"",
    description: "ISTJ — ishonchli, mas'uliyatli va tartibli shaxslar. Ular an'analar va qoidalarga hurmat bilan qarashadi. Har qanday ishni puxta va sifatli bajarishga intiladi.",
    strengths: ["Ishonchlilik va mas'uliyat", "Tartiblilik", "Puxtalik va sifatga intilish", "Amaliy fikrlash"],
    weaknesses: ["O'zgarishlarga moslashishda qiyinchilik", "Haddan tashqari qatʼiylik", "Hissiyotlarni ifoda etishda qiyinchilik", "Yangiliklarga shubha bilan qarash"],
    careers: [
      { title: "🧮 Buxgalter / Moliyachi", reason: "Raqamlar bilan aniq va tartibli ishlash qobiliyati" },
      { title: "⚖️ Huquqshunos", reason: "Qonun va qoidalarga bo'lgan hurmat va puxta tahlil qilish mahorati" },
      { title: "⚙️ Muhandis", reason: "Amaliy masalalarni aniq va sifatli hal qilish qobiliyati" },
      { title: "📁 Ma'muriy boshqaruvchi", reason: "Tashkilotchilik va tartibni saqlash mahorati" }
    ],
    recommendations: [
      "Yangiliklarga ochiqroq bo'ling — o'zgarish har doim yomon emas.",
      "Hissiyotlaringizni yaqinlaringiz bilan baham ko'rishni o'rganing.",
      "Ba'zan qoidalardan tashqari fikrlash ham foydali bo'lishi mumkin.",
      "Moslashuvchanlikni rivojlantiring — hayot kutilmagan o'zgarishlarga boy."
    ]
  },
  ISFJ: {
    code: "ISFJ",
    name: "Sodiq Himoyachi",
    motto: "\"Yaxshi ish — jimgina qilingan ish.\"",
    description: "ISFJ — g'amxo'r, ishonchli va sadoqatli shaxslar. Ular boshqalar uchun g'amxo'rlik qilish va xavfsiz muhit yaratishni yaxshi ko'radilar. Ko'pincha jimgina, lekin juda katta hissa qo'shuvchi insonlar.",
    strengths: ["G'amxo'rlik va sadoqat", "Ishonchlilik", "Puxta kuzatuvchanlik", "Sabr-toqat"],
    weaknesses: ["O'zini kam baholash", "Yo'q deyishda qiyinchilik", "O'zgarishlarga qarshilik", "O'z ehtiyojlarini e'tiborsiz qoldirish"],
    careers: [
      { title: "🩺 Tibbiyot hamshirasi / Shifokor", reason: "G'amxo'rlik va bemorlarga diqqat bilan yondashish qobiliyati" },
      { title: "🏫 O'qituvchi (boshlang'ich sinf)", reason: "Sabr-toqat va bolalarga g'amxo'rlik qilish mahorati" },
      { title: "📚 Kutubxonachi / Arxivarius", reason: "Tartiblilik va ma'lumotlarni saqlash qobiliyati" },
      { title: "🤝 Ijtimoiy xodim", reason: "Boshqalarga yordam berish va ularning ehtiyojlarini tushunish" }
    ],
    recommendations: [
      "O'z qadriyatingizni tan oling — siz ko'p narsaga loyiqsiz.",
      "O'z ehtiyojlaringizni boshqalar ehtiyojidan ustun qo'yishni o'rganing.",
      "Yangi tajribalarga ochiq bo'ling — qo'rqmasdan sinab ko'ring.",
      "Maqtovni qabul qilishni o'rganing — siz bunga loyiqsiz."
    ]
  },
  ESTJ: {
    code: "ESTJ",
    name: "Qat'iyatli Boshqaruvchi",
    motto: "\"Qoidalar barchaga teng amal qilishi kerak.\"",
    description: "ESTJ — tashkilotchi, qat'iyatli va an'anaviy qadriyatlarga sodiq yetakchilar. Ular tartib o'rnatish va uni saqlashda juda mohir. Jamoani boshqarish va natijaga erishish ularning kuchli tomoni.",
    strengths: ["Tashkilotchilik", "Mas'uliyatlilik", "Amaliy yondashuv", "Yetakchilik qobiliyati"],
    weaknesses: ["O'ta qat'iylik", "Yangiliklarga qarshilik", "Boshqalarning hissiyotlarini e'tiborsiz qoldirish", "Moslashuvchanlik yetishmasligi"],
    careers: [
      { title: "🏢 Biznes boshqaruvchisi", reason: "Tashkilotchilik va jamoani natijaga yetaklash qobiliyati" },
      { title: "🎖️ Harbiy xodim", reason: "Intizom, tartib va mas'uliyatga bo'lgan sadoqat" },
      { title: "💰 Moliyaviy boshqaruvchi", reason: "Resurslarni samarali taqsimlash va nazorat qilish mahorati" },
      { title: "⚖️ Sudya / Prokuror", reason: "Adolat va qonun ustuvorligiga bo'lgan sadoqat" }
    ],
    recommendations: [
      "Boshqalarning fikr va hissiyotlarini tinglashga vaqt ajrating.",
      "Moslashuvchanlikni o'rganing — hamma vaziyatda bitta yondashuv ishlamaydi.",
      "Yangi g'oyalarga ochiqroq bo'ling.",
      "Tanqid qilishdan oldin rag'batlantiring."
    ]
  },
  ESFJ: {
    code: "ESFJ",
    name: "Mehribon Diplomat",
    motto: "\"Hamma uchun yaxshi bo'lish — mening vazifam.\"",
    description: "ESFJ — ijtimoiy, g'amxo'r va boshqalarga yordam berishni yaxshi ko'radigan shaxslar. Ular jamoa ruhini mustahkamlash va harmoniyani saqlashda juda mohir.",
    strengths: ["Ijtimoiylik va muloqotchanlik", "G'amxo'rlik", "Ishonchlilik", "Jamoa ruhini mustahkamlash"],
    weaknesses: ["Boshqalarning fikriga haddan tashqari bog'liqlik", "Tanqidni og'ir qabul qilish", "O'zgarishlarga moslashishda qiyinchilik", "O'z manfaatlarini e'tiborsiz qoldirish"],
    careers: [
      { title: "🏥 Tibbiyot xodimi", reason: "G'amxo'rlik va bemorlarga shaxsiy yondashuv mahorati" },
      { title: "🎉 Tadbirlarni tashkil etuvchi", reason: "Ijtimoiy munosabatlar va tashkilotchilik qobiliyati" },
      { title: "🎧 Mijozlar bilan ishlash menejeri", reason: "Odamlar bilan muloqot va muammolarni hal qilish qobiliyati" },
      { title: "🧑‍🏫 O'qituvchi", reason: "G'amxo'rlik va o'quvchilarga individual yondashish mahorati" }
    ],
    recommendations: [
      "O'z fikr va ehtiyojlaringizni ham bildirishni o'rganing.",
      "Hamma kishiga yoqish mumkin emasligini qabul qiling.",
      "O'zingiz uchun ham vaqt ajrating.",
      "Tanqidni konstruktiv qabul qilishga harakat qiling."
    ]
  },
  ISTP: {
    code: "ISTP",
    name: "Mohir Usta",
    motto: "\"Amaliyotda sinash — eng yaxshi o'rganish usuli.\"",
    description: "ISTP — amaliy, mantiqiy va mexanizmlarni tushunishga qiziquvchi shaxslar. Ular qo'llari bilan ishlashni va muammolarni amaliy yo'l bilan hal qilishni yaxshi ko'radilar.",
    strengths: ["Amaliy mahorat", "Muammolarni tez hal qilish", "Moslashuvchanlik", "Sovuqqon fikrlash"],
    weaknesses: ["Hissiyotlarni ifoda etishda qiyinchilik", "Uzoq muddatli majburiyatlarga nisbatan befarqlik", "Qoidalarga qarshilik", "Sabrsizlik"],
    careers: [
      { title: "🔧 Muhandis / Mexanik", reason: "Mexanizmlarni tushunish va amaliy muammolarni hal qilish qobiliyati" },
      { title: "💻 Dasturchi", reason: "Mantiqiy fikrlash va texnologiyalar bilan ishlash mahorati" },
      { title: "✈️ Pilot / Haydovchi", reason: "Tez qaror qabul qilish va texnik ko'nikmalar" },
      { title: "🕵️ Kriminalist / Tergovchi", reason: "Dalillarni tahlil qilish va mantiqiy xulosalar chiqarish qobiliyati" }
    ],
    recommendations: [
      "Hissiyotlaringizni yaqinlaringiz bilan baham ko'rishga harakat qiling.",
      "Uzoq muddatli maqsadlar qo'yishni o'rganing.",
      "Jamoaviy ishlarda ko'proq ishtirok eting.",
      "Sabr-toqatni rivojlantiring."
    ]
  },
  ISFP: {
    code: "ISFP",
    name: "Ozod San'atkor",
    motto: "\"Go'zallik — hayotning eng muhim qismi.\"",
    description: "ISFP — sezgir, ijodiy va hozirgi lahzada yashashni yaxshi ko'radigan shaxslar. Ular go'zallikni his qilish va yaratishda tengsiz. Erkinlik va o'z-o'zini ifoda etish ular uchun juda muhim.",
    strengths: ["Ijodiy sezgirlik", "Moslashuvchanlik", "G'amxo'rlik va hamdardlik", "Estetik did"],
    weaknesses: ["Nizolarga qarshilik", "O'zini kam baholash", "Uzoq muddatli rejalashtirishda qiyinchilik", "O'ta sezgirlik"],
    careers: [
      { title: "🎨 Dizayner (grafik, ichki dizayn)", reason: "Estetik did va go'zallikni yaratish qobiliyati" },
      { title: "🎹 Musiqa ijodkori", reason: "Hissiyotlarni musiqa orqali ifodalash mahorati" },
      { title: "📸 Fotograf", reason: "Go'zallikni ko'rish va uni qayd etish qobiliyati" },
      { title: "🐾 Veterinar", reason: "Hayvonlarga g'amxo'rlik va tabiiy muhitda ishlash ishtiyoqi" }
    ],
    recommendations: [
      "O'z qiymatlaringizni tan oling va ularni baland ovozda ifodalang.",
      "Kelajak uchun rejalar tuzishni o'rganing.",
      "Nizolardan qochmasdan, ularni konstruktiv hal qilishga harakat qiling.",
      "O'z iste'dodingizni dunyoga ko'rsatishdan qo'rqmang."
    ]
  },
  ESTP: {
    code: "ESTP",
    name: "Dovyurak Tadbirkor",
    motto: "\"Hayot — bu harakat, o'tirib qolmaslik kerak!\"",
    description: "ESTP — energiyaga to'la, risk olishni yoqtiradigan va hozirgi lahzada yashashni afzal ko'radigan shaxslar. Ular amaliy muammolarni tez hal qilish va odamlarga ta'sir ko'rsatishda juda mohir.",
    strengths: ["Tezkor qaror qabul qilish", "Amaliy muammolarni hal qilish", "Ijtimoiy moslashuvchanlik", "Energiya va ishtiyoq"],
    weaknesses: ["Sabrsizlik", "Risk olishga moyillik", "Uzoq muddatli rejalarni tuzishda qiyinchilik", "Boshqalar hissiyotlariga befarqlik"],
    careers: [
      { title: "🤝 Savdo menejeri", reason: "Odamlarni ishontirish va tezkor qaror qabul qilish qobiliyati" },
      { title: "🏅 Sportchi / Trener", reason: "Jismoniy faollik va raqobatga bo'lgan ishtiyoq" },
      { title: "🚒 Favqulodda vaziyatlar xodimi", reason: "Stress ostida tez qaror qabul qilish qobiliyati" },
      { title: "💼 Tadbirkor", reason: "Risk olish tayorligi va amaliy yondashuv" }
    ],
    recommendations: [
      "Qarorlaringizning uzoq muddatli oqibatlarini o'ylab ko'ring.",
      "Sabr-toqatni rivojlantiring.",
      "Boshqalarning hissiyotlariga ko'proq e'tibor qarating.",
      "Uzoq muddatli maqsadlar qo'yish va ularga sodiq qolishni o'rganing."
    ]
  },
  ESFP: {
    code: "ESFP",
    name: "Shou Yulduzi",
    motto: "\"Hayotdan zavq olish — eng muhim san'at!\"",
    description: "ESFP — hayotsevar, ijtimoiy va energetik shaxslar. Ular atrofdagilarni quvontirish va hayotdan to'liq zavq olishni yaxshi ko'radilar. Ularning energiyasi va optimizmi hammaga yuqadi.",
    strengths: ["Ijtimoiy ko'nikmalar", "Optimizm va ishtiyoq", "Amaliy fikrlash", "Moslashuvchanlik"],
    weaknesses: ["Uzoq muddatli rejalarni tuzishda qiyinchilik", "Diqqatni jamlashda muammo", "Jiddiy mavzularga befarqlik", "Xarajatlarni nazorat qilishda qiyinchilik"],
    careers: [
      { title: "🎬 Aktyor / Artist", reason: "Auditoriya oldida chiqish va e'tiborni tortish qobiliyati" },
      { title: "🏨 Mehmondo'stlik sohasi menejeri", reason: "Odamlar bilan muloqot va xushmuomalalik" },
      { title: "🎊 Tadbirlarni tashkil etuvchi", reason: "Energiya, ijtimoiylik va tashkilotchilik qobiliyati" },
      { title: "🛍️ Savdo mutaxassisi", reason: "Ishontirish va odamlar bilan tez til topish mahorati" }
    ],
    recommendations: [
      "Moliyaviy rejalashtirish va tejamkorlikni o'rganing.",
      "Ba'zan jiddiy mavzularga vaqt ajrating.",
      "Uzoq muddatli maqsadlar qo'ying va ularga intiling.",
      "O'z hissiyotlaringiz bilan yuzlashishni o'rganing — hamma narsa kulgi bilan hal bo'lmaydi."
    ]
  }
};

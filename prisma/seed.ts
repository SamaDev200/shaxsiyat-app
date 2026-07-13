import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const questions = [
  {id:1,text:"Siz tez-tez yangi doʻstlar orttirib turasiz.",axis:"EI",direction:1},
  {id:2,text:"Murakkab va noodatiy gʻoyalar sizni oddiy va tushunarli g'oyalardan koʻra koʻproq qiziqtiradi.",axis:"SN",direction:-1},
  {id:3,text:"Qaror qabul qilishda faktik dalillarga qaraganda, his-tuyg'ularingizga mos keladigan fikrlarga ko'proq ishonasiz.",axis:"TF",direction:-1},
  {id:4,text:"Yashash va ish joyingiz doimo toza hamda tartibli.",axis:"JP",direction:1},
  {id:5,text:"Odatda, hatto kuchli ruhiy bosim ostida ham xotirjamlikni saqlay olasiz.",axis:"AT",direction:1},
  {id:6,text:"Notanish odamlar davrasida oʻzingizni tanishtirish yoki suhbat boshlash gʻoyasi sizni choʻchitadi.",axis:"EI",direction:-1},
  {id:7,text:"Vazifalaringizni samarali rejalashtirasiz va ularni koʻpincha belgilangan muddatdan ancha oldin bajarasiz.",axis:"JP",direction:1},
  {id:8,text:"Siz uchun insonlarning taqdiri va his-tuygʻulari raqamlar yoki quruq maʼlumotlardan koʻra muhimroq.",axis:"TF",direction:-1},
  {id:9,text:"Kuningizni tartibga solishda turli jadvallar va roʻyxatlardan foydalanishni afzal koʻrasiz.",axis:"JP",direction:1},
  {id:10,text:"Hatto kichik bir xatolik ham oʻz qobiliyatingiz va bilimingizga shubha qilishga sabab boʻladi.",axis:"AT",direction:-1},
  {id:11,text:"Oʻzingizga qiziqarli koʻringan notanish odamning yoniga borib, osongina suhbat boshlay olasiz.",axis:"EI",direction:1},
  {id:12,text:"Sanʼat asarlarini turli xil talqin qilish boʻyicha bahs-munozaralarga unchalik qiziqmaysiz.",axis:"SN",direction:1},
  {id:13,text:"Biror ishga kirishishda insonlarning his-tuygʻularidan koʻra faktlarni ustun qoʻyasiz.",axis:"TF",direction:1},
  {id:14,text:"Koʻpincha kuningizni hech qanday rejasiz, oʻz oqimi boʻyicha oʻtishiga yoʻl qoʻyasiz.",axis:"JP",direction:-1},
  {id:15,text:"Yangi tanishgan odamlarda qanday taassurot qoldirganingiz haqida kamdan-kam tashvishlanasiz.",axis:"AT",direction:1},
  {id:16,text:"Jamoaviy tadbirlarda ishtirok etish sizga zavq bagʻishlaydi.",axis:"EI",direction:1},
  {id:17,text:"Yangi va sinovdan oʻtmagan yondashuvlarni sinab koʻrish sizga yoqadi.",axis:"SN",direction:-1},
  {id:18,text:"Insonlarga nisbatan mutlaqo rostgoʻy boʻlishdan koʻra, ularning koʻngliga ogʻriq bermaslikni (xushmuomala boʻlikni) afzal koʻrasiz.",axis:"TF",direction:-1},
  {id:19,text:"Doimo yeni tajribalar orttirish va turli bilim sohalarini oʻrganishga intilasiz.",axis:"SN",direction:-1},
  {id:20,text:"Vaziyat eng yomon tomonga oʻzgarib ketishi haqida tez-tez xavotirlanasiz.",axis:"AT",direction:-1},
  {id:21,text:"Jamoaviy mashgʻulotlardan koʻra, yolgʻiz bajariladigan sevimli mashgʻulotlarni ma'qul ko'rasiz.",axis:"EI",direction:-1},
  {id:22,text:"Tirikchilik qilish uchun fantastik hikoyalar yozishni tasavvur ham qila olmaysiz.",axis:"SN",direction:1},
  {id:23,text:"Qaror qabul qilishda, garchi ba'zi hissiy jihatlarni e'tiborga olmaslikka to'g'ri kelsa ham, samaradorlikni birinchi o'ringa qo'yasiz.",axis:"TF",direction:1},
  {id:24,text:"O'zingizga dam olishga ruxsat berishdan oldin barcha uy yumushlarini yoki vazifalarni bajarib olishni afzal ko'rasiz.",axis:"JP",direction:1},
  {id:25,text:"Bahs-munozaralarda boshqalarning ko'nglini og'ritmaslikdan ko'ra, o'z nuqtai nazaringizni isbotlashni afzal ko'rasiz.",axis:"TF",direction:1},
  {id:26,text:"Mehmonchilik yoki yig'inlarda odatda birinchi bo'lib boshqalar o'zini tanishtirishini kutib turasiz.",axis:"EI",direction:-1},
  {id:27,text:"Kayfiyatingiz juda tez o'zgarib turadi.",axis:"AT",direction:-1},
  {id:28,text:"Hissiyotlarga tayanib aytilgan dalillar bilan sizni ishontirish qiyin.",axis:"TF",direction:1},
  {id:29,text:"Ko'pincha ishlaringizni so'nggi daqiqalarda bajarasiz.",axis:"JP",direction:-1},
  {id:30,text:"Axloqiy muammolar va dilemmalar ustida bahslashishni yaxshi ko'rasiz.",axis:"SN",direction:-1},
  {id:31,text:"Odatda yolg'iz qolishdan ko'ra, odamlar davrasida bo'lishni afzal ko'rasiz.",axis:"EI",direction:1},
  {id:32,text:"Suhbat haddan tashqari nazariy bo'lib ketganda zerikasiz yoki qiziqishingiz yo'qoladi.",axis:"SN",direction:1},
  {id:33,text:"Faktlar va tuyg'ular to'qnash kelganda, odatda yuragingiz amriga quloq solasiz.",axis:"TF",direction:-1},
  {id:34,text:"Doimiy ish yoki o'qish rejimiga amal qilish siz uchun qiyin.",axis:"JP",direction:-1},
  {id:35,text:"Qabul qilgan qarorlaringiz va tanlovlaringizga kamdan-kam shubha qilasiz.",axis:"AT",direction:1},
  {id:36,text:"Do'stlaringiz sizni faol va kirishimli odam deb ta'riflashadi.",axis:"EI",direction:1},
  {id:37,text:"Siz ijodkorlikning turli shakllariga (masalan, yozuvchilikka) qiziqasiz.",axis:"SN",direction:-1},
  {id:38,text:"Qarorlaringizni hissiy taassurotlarga emas, obyektiv faktlarga asoslaysiz.",axis:"TF",direction:1},
  {id:39,text:"Har bir kun uchun qilinishi kerak bo'lgan ishlar ro'yxatini yozib borishni ma'qul ko'rasiz.",axis:"JP",direction:1},
  {id:40,text:"O'zingizga bo'lgan ishonchsizlikni juda kamdan-kam hollarda his qilasiz.",axis:"AT",direction:1},
  {id:41,text:"Telefon orqali qo'ng'iroq qilishdan qochasiz.",axis:"EI",direction:-1},
  {id:42,text:"Noma'lum g'oyalar va fikrlarni o'rganish siz uchun qiziqarli.",axis:"SN",direction:-1},
  {id:43,text:"Yangi tanishgan odamlar bilan tezda yaqin muloqot o'rnatib ketasiz.",axis:"EI",direction:1},
  {id:44,text:"Agar rejalaringiz buzilsa, birinchi navbatda ularni tezroq avvalgi holatiga qaytarishga harakat qilasiz.",axis:"JP",direction:1},
  {id:45,text:"Uzoq vaqt oldin qilgan xatolaringiz sizni hali ham bezovta qiladi.",axis:"AT",direction:-1},
  {id:46,text:"Kelajakda dunyo qanday ko'rinishga ega bo'lishi haqidagi nazariy muhokamalarga unchalik qiziqmaysiz.",axis:"SN",direction:1},
  {id:47,text:"Hissiyotlaringiz sizni oʻzingiz ularni boshqarganingizdan koʻra koʻproq nazorat qiladi.",axis:"AT",direction:-1},
  {id:48,text:"Qaror qabul qilishda, nima eng mantiqiy yoki samarali ekanidan ko'ra, u odamlarning his-tuyg'ulariga qanday ta'sir qilishiga ko'proq e'tibor berasiz.",axis:"TF",direction:-1},
  {id:49,text:"Shaxsiy ish uslubingiz tartiblangan va izchil harakatlardan ko'ra, ko'proq tasodifiy kuchli ilhomga asoslangan.",axis:"JP",direction:-1},
  {id:50,text:"Agar kimdir siz haqingizda yuqori fikrda bo'lsa, uning sizdan hafsalasi pir bo'lishi uchun qancha vaqt ketishi haqida o'ylaysiz.",axis:"AT",direction:-1},
  {id:51,text:"Ko'p vaqt yolg'iz ishlashni talab qiladigan kasbda bajonidil ishlagan bo'lardingiz.",axis:"EI",direction:-1},
  {id:52,text:"Mavhum falsafiy savollar ustida bosh qotirishni vaqtni behuda sarflash deb hisoblaysiz.",axis:"SN",direction:1},
  {id:53,text:"Tinch va sokin joylardan ko'ra, gavjum va faol muhitlarni afzal ko'rasiz.",axis:"EI",direction:1},
  {id:54,text:"Agar biror qaror ich-ichingizdan to'g'ri tuyulsa, qo'shimcha isbotlarsiz ham uni amalga oshiraverasiz.",axis:"TF",direction:-1},
  {id:55,text:"Tez-tez o'zingizni toliqib qolgan yoki haddan tashqari yuklama ostida qolgandek his qilasiz.",axis:"AT",direction:-1},
  {id:56,text:"Ishlarni hech qanday bosqichni o'tkazib yubormasdan, tartibli ravishda yakunlaysiz.",axis:"JP",direction:1},
  {id:57,text:"Muayyan bosqichlarga rioya qilishdan ko'ra, ko'proq ijodiy yechimlar talab qiladigan vazifalarni afzal ko'rasiz.",axis:"SN",direction:-1},
  {id:58,text:"Qaror qabul qilishda mantiqiy fikrlashga qaraganda ko'proq ichki hissiy sezgingizga ishonasiz.",axis:"TF",direction:-1},
  {id:59,text:"Sizda ishlarni belgilangan muddatda topshirish (deadline) borasida qiyinchiliklar bor.",axis:"JP",direction:-1},
  {id:60,text:"Kelajakda hammasi siz uchun yaxshi bo'lishiga ishonasiz.",axis:"AT",direction:1},
];

async function main() {
  console.log("Seeding questions...");
  
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    await prisma.question.upsert({
      where: { id: q.id },
      update: { text: q.text, axis: q.axis, direction: q.direction, orderNum: i + 1 },
      create: { text: q.text, axis: q.axis, direction: q.direction, orderNum: i + 1 },
    });
  }

  console.log(`Seeded ${questions.length} questions.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

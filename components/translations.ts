import { HomePageTranslations } from '../routes/index.tsx';
import { ThankYouPageTranslations } from '../routes/thanks.tsx';

export const LanguageParameter = 'lang';
export const Japanese = 'jp';

export const enHomePageTranslations: HomePageTranslations = {
  titleTag: 'Ole & Nae | Save the date',
  metaDescription: "Save the date for Ole and Nae's wedding on July 1st 2023.",
  mainHeading: 'Ole & Nae',
  headingSub: 'are getting married!',
  date: 'July 1st 2023',
  location: 'Osaka Geihinkan, Japan',
  invitationToFollow: 'Invitation to follow.',
  sendUsYourEmail: 'Send us your email so we know how to reach you.',
  firstName: 'First name',
  lastName: 'Last name',
  email: 'E-mail',
  submit: 'Submit',
  weHopeYouCanAttend: "We hope you're able to attend",
};

export const jpHomePageTranslations: HomePageTranslations = {
  titleTag: 'Ole & Nae | Save the date',
  metaDescription: "Save the date for Ole and Nae's wedding on July 1st 2023.",
  mainHeading: 'Ole & Nae',
  headingSub: 'are getting married!',
  date: '令和5年 7月1日',
  location: '大阪城西の丸庭園  \b 大阪迎賓館',
  invitationToFollow: '正式な招待状は後日改めて送付させていたただきます。',
  sendUsYourEmail:
    'つきましては招待状の送信先に希望されるメールアドレスをご記入ください。',
  firstName: '姓',
  lastName: '名',
  email: 'メールアドレス',
  submit: '送信する',
  weHopeYouCanAttend: '皆様にお会いできることを楽しみにしております。',
};

export const enThankYouPageTranslations: ThankYouPageTranslations = {
  titleTag: 'Ole & Nae | Thank you!',
  mainHeading: 'Thank you!',
  invitationWillBeSentTo: 'Your invitation will be sent to:',
};

export const jpThankYouPageTranslations: ThankYouPageTranslations = {
    titleTag: 'Ole & Nae | Thank you!',
    mainHeading: 'ありがとうございます！',
    invitationWillBeSentTo: '招待状はこちらのメールアドレスに送信させていただきます。',
  };

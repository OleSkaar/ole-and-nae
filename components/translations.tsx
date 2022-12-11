import { HomePageTranslations } from "../routes/index.tsx";
import { InvitationPageTranslations } from "../routes/invitation/[id].tsx";
import { ThankYouPageTranslations } from "../routes/thanks.tsx";

export const LanguageParameter = "lang";
export const Japanese = "jp";

export const enHomePageTranslations: HomePageTranslations = {
  titleTag: "Ole & Nae | Save the date",
  metaDescription: "Save the date for Ole and Nae's wedding on July 1st 2023.",
  mainHeading: "Ole & Nae",
  headingSub: "are getting married!",
  date: "July 1st 2023",
  locationLine1: "Osaka Geihinkan, Japan",
  invitationToFollow: "Invitation to follow.",
  sendUsYourEmail: "Send us your email so we know how to reach you.",
  firstName: "First name",
  lastName: "Last name",
  email: "E-mail",
  submit: "Submit",
  weHopeYouCanAttend: "We hope you're able to attend.",
};

export const jpHomePageTranslations: HomePageTranslations = {
  titleTag: "Ole & Nae | Save the date",
  metaDescription: "Save the date for Ole and Nae's wedding on July 1st 2023.",
  mainHeading: "Ole & Nae",
  headingSub: "are getting married!",
  date: "令和5年 7月1日",
  locationLine1: "大阪城西の丸庭園",
  locationLine2: "大阪迎賓館",
  invitationToFollow: "正式な招待状は後日改めて送付させていたただきます。",
  sendUsYourEmail: "つきましては招待状の送信先に希望されるメールアドレスをご記入ください。",
  firstName: "姓",
  lastName: "名",
  email: "メールアドレス",
  submit: "送信する",
  weHopeYouCanAttend: "皆様にお会いできることを楽しみにしております。",
};

export const enThankYouPageTranslations: ThankYouPageTranslations = {
  titleTag: "Ole & Nae | Thank you!",
  mainHeading: "Thank you!",
  invitationWillBeSentTo: "Your invitation will be sent to:",
};

export const jpThankYouPageTranslations: ThankYouPageTranslations = {
  titleTag: "Ole & Nae | Thank you!",
  mainHeading: "ありがとうございます！",
  invitationWillBeSentTo: "招待状はこちらのメールアドレスに送信させていただきます。",
};

export const enInvitationPageTranslations: InvitationPageTranslations = {
  titleTag: "Ole & Nae | Invitation",
  metaDescription: "",
  mainHeading: "Ole & Nae",
  headingSub: "are getting married!",
  personalizedIntro: (name: string) =>
    `Dear ${name}, you're invited to our wedding on July 1 2023.`,
  firstName: "",
  lastName: "",
  email: "",
  submit: "Send",
  plusOne: "Are you bringing a guest? If so, write their name here.",
  dietaryRequirements:
    "Please let us know here if you have any dietary requirements",
  children: "Are you bringing any children?",
  welcomeParty: "I'm attending the welcome party",
  afterParty: "I'm attending the afterparty",
  greetings:
    "Drop a greeting to the other guests, and we will post it on this website :)",
  yesAttending: "Yes, I'm attending",
  notAttending: "No, unfortunately I can't attend",
  plusOnePlaceholder: "Guest's name",
};

export const jpInvitationPageTranslations: InvitationPageTranslations = {
  titleTag: "",
  metaDescription: "",
  mainHeading: "Ole & Nae",
  headingSub: "are getting married!",
  personalizedIntro: (name: string) =>
    `Dear ${name}, you're invited to our wedding on 令和5年 7月1日`,
  firstName: "",
  lastName: "",
  email: "",
  submit: "",
  plusOne: "",
  dietaryRequirements: "",
  children: "",
  welcomeParty: "",
  afterParty: "",
  greetings: "",
  yesAttending: "",
  notAttending: "",
  plusOnePlaceholder: "",
};

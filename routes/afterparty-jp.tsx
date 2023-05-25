import { asset, Head } from "https://deno.land/x/fresh@1.1.1/runtime.ts";
import Layout from "../components/Layout.tsx";

export default function AfterpartyJp() {
  const description = "Information about Ole and Nae's wedding";
  const title = "Ole and Nae | Information";
  const image = "/osaka-castle.webp";

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href={asset("/invitation.css")} />
        <link rel="stylesheet" href={asset("/jp-utils.css")} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`https://oleandnae2023.com${image}`}
        />
      </Head>
      <Layout renderHeader={false} mainClass="invitation">
        <div class="parallax bw-background"></div>
        <div class="frame">
          <h1 class="decorative-heading">Ole & Nae</h1>
          <p class="heading-sub">are getting married!</p>
          <p>
            謹啓
          </p>

          <p>
            皆様におかれましては ますますご清祥のこととお慶び申し上げます
          </p>

          <p>このたび 私たちウーレ・スコールと西村奈恵は結婚をすることになりました</p>

          <p>
            つきましては 日頃お世話になっております皆様に
          </p>
          <p>
            感謝を込めて ささやかな小宴を催したく存じます
          </p>

          <p>ご多用中 誠に恐縮ではございますが</p>
          <p>ぜひご出席をいただきたく ご案内申し上げます</p>

          <p>
            謹白
          </p>
          <p>令和５年５月吉日</p>
          <p>
            ウーレ・ヨハネス・スコール

            <br />西村奈恵
          </p>
        </div>
        <div class="frame">
          <h2>Afterparty</h2>
          <p>結婚式二次会</p>
          <h3>
            Date
          </h3>
          <p>令和5 年7月1日 土曜日</p>
          <p>受付開始時間 20:30</p>
          <p>開宴時間 21:00</p>
          <h3>Location & Address</h3>
          <address>
            Restaurant TOSA THE BOLY OSAKA1F<br />

            〒541-0041大阪府大阪市中央区北浜2-1-16<br />

            THE BOLY OSAKA 1F
          </address>
          <p>
            <a href="https://www.google.com/maps/place/THE+BOLY+OSAKA/@34.6922229,135.5023483,17z/data=!3m2!4b1!5s0x6000e6e70c14a41f:0x92ab8a48bcd41bc4!4m9!3m8!1s0x6000e7abb1c0938b:0xc33f17e3fe6f29e5!5m2!4m1!1i2!8m2!3d34.6922185!4d135.5049232!16s%2Fg%2F11gyb5ds1_?entry=tts&shorturl=1">
              The Boly on Google Maps
            </a>
          </p>
          <h3>Phone</h3>
          <p>
            Tel: <a href="tel:0644004024">06 - 4400 - 4024</a>
          </p>
          <h3>How to get there</h3>
          <p>
            交通機関から会場までの最短アクセス方法<br />

            大阪メトロ・京阪「淀屋橋駅」「北浜駅」より徒歩5分京阪<br />「なにわ橋駅」より徒歩5分
          </p>
          <h3>Party fee</h3>
          <p>会費：７０００円</p>
          <p>
            ご列席の皆様のご負担や当日の混雑を避けるべく<br />

            会費の事前受付をお願いいたします
          </p>
          <p>
            当日受付での会費受け渡しが不要となりますので<br />

            よろしければ当日までにこちらの銀行口座まで<br />
            お振り込みよろしくお願いいたします
          </p>
          <p>
            振込先：<br />

            三井住友銀行 玉造支店 普通 6698433 <br />

            ニシムラ ナエ <br />
          </p>
        </div>
        <div class="frame">
          <h3>RSVP</h3>
          <p>
            お手数ながらご都合の程6月14日までにウェブサイトより
          </p>

          <p>
            ご一報お願い申し上げます
          </p>
          <form action={"/afterparty-jp-response"} method="POST">
            <input name="name" placeholder="お名前" required />
            <input name="message" placeholder="メッセージ" />
            <div class="radio-buttons">
              <div class="radio-button">
                <input
                  name="attending"
                  type="radio"
                  id="yesAttending"
                  value="yes"
                  required
                >
                </input>
                <label for="attending">
                  {"ご出席"}
                </label>
              </div>
            
            <div class="radio-button">
              <input
                name="attending"
                type="radio"
                id="notAttending"
                value="no"
              >
              </input>
              <label for="attending">
                {"ご欠席"}
              </label>
            </div>
            </div>
            <button type="submit">{"Send"}</button>
          </form>
        </div>
      </Layout>
    </>
  );
}

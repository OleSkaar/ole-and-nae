interface InformationProps {
  isJapanese: boolean;
}

export default function Information({
  isJapanese,
}: InformationProps) {
  return (
    <div class="information">
      <h2>Information</h2>
      {isJapanese
        ? (
          <div class="jp-padding">
             <p>皆様</p>

            <p>いかがお過ごしでしょうか？</p>

            <p>
              ご多用の中ご参列くださり、誠にありがとうございます。<br />

              いよいよ結婚式が近づいてまいりました。<br />

              皆様に大阪でお会いできることを楽しみにしております。<br />

              当日のスケジュールなどのインフォメーションを<br />
              
              こちらでご案内させていただきます。<br />

              ご不明点・ご質問などございましたら、ご遠慮なくご連絡くださいませ。<br />
            </p>

            <h3>挙式・披露宴</h3>
            <p>日時：７月１日土曜日</p>
            <p>
              会場：大阪城西の丸庭園　大阪迎賓館<br />

              住所： 〒540-0002

              大阪府 大阪市 中央区 大阪城 2（大阪城西の丸庭園内）<br />

              タクシーでお越しになられるお客様は乗車時にこちらのご案内をご提示ください。<br />

              <a href="https://www.osakacastle.jp/pdf/taxi_wedding.pdf">
                https://www.osakacastle.jp/pdf/taxi_wedding.pdf
              </a>
              <br />
            </p>
            <p>
              大阪城公園　【京橋口】

              ※最寄駅：大阪メトロ谷町線/天満橋駅 3番出口
            </p>

            <h3>Schedule</h3>
            <p>
              15時半よりご来館いただけます。<br />

              挙式の始まる１６時半まで茶室『豊松庵』にてお飲み物をご用意いたしておりますので、大阪城を眺めながらごゆっくりお寛ぎくださいませ。
            </p>

            <p>
              １５：３０〜１６：００　ご来館<br />

              １６：００　受付開始<br />

              １６：３０　挙式<br />

              １７：３０　披露宴<br />

              ２０：００　お開き
            </p>

            {/*<h3>Dresscode</h3>
            <p>フォーマル/カクテル。</p>

            <h3>Welcome Party</h3>

            <p>
              結婚式前夜にカジュアルな懇親会を開きます。<br />

              ウェルカムドリンクとフィンガーフードをご用意しておりますので、お気軽にお越しください。皆様のお越しをお待ちしております。
            </p>

            <p>
              日時：６月３０日金曜日　１６時〜１８時<br />

              会場：The Lively Bar ザ・ライブリー 大阪本町
            </p>

            <p>
              住所：THE LIVELY 大阪本町（ザ・ライブリー大阪本町）<br />

              〒541-0054 大阪府大阪市中央区南本町1-5-11<br />

              中央線・堺筋線「堺筋本町駅」駅より徒歩1分 5番出口 <br />

              中央線・御堂筋線・四つ橋線「本町」駅より徒歩10分 <br />

              大阪道頓堀よりタクシーで5分
            </p>

            <h3>Afterparty</h3>

            <p>
              披露宴の後、二次会に参加してくださるお客様は迎賓館より二次会会場までシャトルバスにて送迎させていただきます。<br />

              二次会会場：

              Riverside Sushi Bar TOSA<br />

              住所：The BOLY OSAKA<br />

              〒541-0041大阪府大阪市中央区北浜2-1-16<br />

              THE BOLY OSAKA 1F大阪メトロ・京阪「淀屋橋駅」「北浜駅」より徒歩5分<br />

              京阪「なにわ橋駅」より徒歩5分<br />
            </p> */}
          </div>
        )
        : (
          <>
            <h3>Location</h3>
            <p>
              The wedding will take place at Osaka Gehihinkan, next to Osaka
              Castle.
            </p>
            <address>
              2 Osakajo, Chuo Ward, Osaka, 540-0002, Japan.
            </address>
            <p>
              <a
                href="https://www.google.com/maps/place/OSAKA+GEIHINKAN+(+Former+Guest+House+)+in+the+lush+grounds+of+Nishinomaru+Garden+of+Osaka+Castle+Park/@34.6833253,135.5318128,15.42z/data=!4m13!1m7!3m6!1s0x6000e6553406e2e1:0xc55bc16ee46a2fe7!2sOsaka,+Japan!3b1!8m2!3d34.6937249!4d135.5022535!3m4!1s0x6000e72cf78fffff:0x2914f59b07aac290!8m2!3d34.6881267!4d135.5228987"
                target="_blank"
              >
                Osaka Geihinkan
              </a>
            </p>
            <p>
              We recommend that you take a taxi if possible, as there is a 10-15
              minutes walk to the nearest subway station, and it will likely be
              hot outside around this time. If you take a taxi, you can tell the
              driver to use this address, which will take you to the venu's taxi
              entrance:
            </p>
            <address>
              "Osakajo, Kyobashigushi", 3-11 Osakajo, Chuo Ward, Osaka, 540-0002
            </address>
            {
              /* <h3>Plus one</h3>
            <p>
              You may bring a guest with you. Let us know in the RSVP form
              below.
            </p> */
            }
            <h3>Schedule</h3>
            The doors will open at 15:30, one hour before the ceremony. All
            guests are invited to a tea ceremony in the Japanese garden by the
            venue.
            <h4>Welcome Party</h4>
            <time>Friday June 30, 16:00 - 18:00</time>
            <p>
              <a href="https://www.livelyhotels.com/en/thelivelyosaka/">
                The Lively Osaka
              </a>
            </p>
            <address>
              1 Chome-5-11 Minamihonmachi, Chuo Ward, Osaka, 541-0054, Japan
            </address>
            <p>The party will take place at the rooftop bar of The Lively.</p>
            <p>
              This will be a small get-together the night before the wedding.
              There will be some light snacks and refreshments.
            </p>
            <h4>Afterparty</h4>
            <p>
              For the guests that want to continue the party after the
              reception. After the ceremony and dinner, around 20:00, there will
              be a shuttle bus taking guests to{" "}
              <a href="https://theboly.com/en/">The Boly</a>, where the party
              will continue with drinks, food, and music.
            </p>
            <h3>Dress code</h3>
            <p>Formal/cocktail attire.</p>
            <h3>Accommodations</h3>
            <p>
              With the wedding taking place in central Osaka, there are many
              options for accommodations. We recommend looking for hotels or
              AirBnbs in the area - search for Tamatsukuri.
            </p>
            <h3>Visa and travel information</h3>
            <p>
              Japan has visa-free entry for travelers from Norway, U.S., the
              U.K., and{" "}
              <a href="https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html">
                a number of other countries
              </a>
              .
            </p>
            <p>
              As of May 8, it is no longer necessary to have a vaccination
              certificate or a pre-departure Covid-19 test.
            </p>
            <p>
              <a href="https://www.mofa.go.jp/ca/cp/page22e_000925.html">
                Measures for Cross-Border Travel
              </a>
            </p>
            <p>
              To make your arrival smoother, we recommend filling out
              immigration and customs forms ahead of time online. This can be
              done at{" "}
              <a href="https://vjw-lp.digital.go.jp/en/">
                Visit Japan Web
              </a>
              .
            </p>
            <p>
              <em>
                <small>Last updated: June 5 2023</small>
              </em>
            </p>
            <h3>Things you can't miss in Osaka</h3>
            <ul>
              <li>
                <a href="https://jw-webmagazine.com/okonomiyaki-6-osakas-best-dishes-486879847a3f/">
                  Osaka's soul food
                </a>
              </li>
              <li>
                <a href="https://osaka-info.jp/en/spot/tombori-riverwalk/">
                  Dotombori riverwalk
                </a>
              </li>
              <li>
                <a href="https://osaka-info.jp/en/spot/nakanoshima/">
                  Nakanoshima island
                </a>
              </li>
            </ul>
            <h3>Registry</h3>
            <p>
              We don't have a registry or wishlist, but if you'd like to give a
              gift we'd be very happy for a contribution to our honeymoon next
              year.
            </p>
            <details>
              <summary>Details</summary>
              <ul>
                <li>Paypal: nae.lovefamily@gmail.com</li>
                <li>Vipps: 91900863</li>
                <li>
                  IBAN:
                  <ul>
                    <li>BIC: DNBANOKKXXX</li>
                    <li>Electronic IBAN account number: NO8312242386394</li>
                  </ul>
                </li>
              </ul>
            </details>
          </>
        )}
    </div>
  );
}

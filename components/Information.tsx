interface InformationProps {
  isJapanese: boolean;
}

export default function Information({ isJapanese }: InformationProps) {
  return (
    <div class="information">
      <h2>Information</h2>
      {isJapanese
        ? (
          <>
            <h3>LOCATION</h3>
            <p>場所</p>
            <p>
              大阪城西の丸庭園　大阪迎賓館
            </p>
            <address>
              〒540-0002
            </address>
            <p>大阪府　大阪市　中央区　大阪城２</p>
            <p>(大阪城西ノ丸庭園内)</p>
            <h3>SCHEDULE</h3>
            <p>15時半より開場いたします。</p>
            <p>ゲストの皆様には茶室『豊松庵』にて</p>
            <p>挙式の時間までお茶を楽しんでいただけます。</p>
            <p>挙式は１６時半より開始予定です。</p>
            <h4>二次会 (AFTERPARTY)</h4>
            <p>披露宴の後に二次会（アフターパーティー）を予定しております。</p>
            <p>２１時ごろより皆様と音楽やダンスを</p>
            <p>楽しめる時間にできたらと思っております。</p>
            <p>場所はおってお知らせさせていただきます。</p>
            <h4>ウェルカムパーティー <br/>(WELCOME PARTY)</h4>
            <p>私たちのウェディングには世界各国よりゲストの皆さんがいらっしゃいます。</p>
            <p>大切な友人、家族と少しでも素敵な時間を過ごしていただきたく、結婚式前夜に小さなパーティーを開きたいと思います。</p>
            <p>日時 ６月３０日</p>
            <p>詳細はまた後日お知らせいたします。</p>
            <h4>ドレスコード (DRESS CODE)</h4>
            <p>フォーマル/ カクテル</p>
          </>
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
            <h3>Plus one</h3>
            <p>
              You may bring a guest with you. Let us know in the RSVP form
              below.
            </p>
            <h3>Schedule</h3>
            The doors will open at 15:30, one hour before the ceremony. All
            guests are invited to a tea ceremony in the Japanese garden by the
            venue.
            <h4>Afterparty</h4>
            <p>
              For the guests that want to continue the party after the
              reception. We will head over to a nearby location, where there
              will be drinks, music, and dancing. Details will follow.
            </p>
            <h4>Welcome Party</h4>
            <p>
              We appreciate that you all traveled from around the world for our
              big day, so we'd like to invite you to a small get-together the
              evening before the wedding. This will be on June 30, more details
              to follow.
            </p>
            <h3>Dress code</h3>
            <p>Formal/cocktail attire.</p>
            <h3>Accommodations</h3>
            <p>
              With the wedding taking place in central Osaka, there are many
              options for accommodations. We haven't reserved any locations, but
              we recommend looking for hotels or AirBnbs in the area - search
              for Tamatsukuri.
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
              To be allowed entry, you have to have either three doses of a
              valid COVID-19 vaccine, or a negative test taken within 72 hours
              prior to departing.
            </p>
            <p>
              All travelers to Japan also have to fill out a questionnaire. This
              can be done ahead of time online.
            </p>
            <a href="https://www.mhlw.go.jp/stf/covid-19/bordercontrol.html">
              Current Japan border measures
            </a>
            <p>
              <em>
                <small>Last updated: December 22 2022</small>
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
              </ul>
            </details>
          </>
        )}
    </div>
  );
}

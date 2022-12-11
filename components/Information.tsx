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
            <h3>Location</h3>
            <p>
              The wedding will take place at Osaka Gehihinkan, next to Osaka
              Castle.
            </p>
            <address>2 Osakajo, Chuo Ward, Osaka, 540-0002, Japan.</address>
            <p>
              <a
                href="https://www.google.com/maps/place/OSAKA+GEIHINKAN+(+Former+Guest+House+)+in+the+lush+grounds+of+Nishinomaru+Garden+of+Osaka+Castle+Park/@34.6833253,135.5318128,15.42z/data=!4m13!1m7!3m6!1s0x6000e6553406e2e1:0xc55bc16ee46a2fe7!2sOsaka,+Japan!3b1!8m2!3d34.6937249!4d135.5022535!3m4!1s0x6000e72cf78fffff:0x2914f59b07aac290!8m2!3d34.6881267!4d135.5228987"
                target="_blank"
              >
                Osaka Geihinkan
              </a>
            </p>
          </>
        )
        : (
          <>
            <h3>Location</h3>
            <p>
              The wedding will take place at Osaka Gehihinkan, next to Osaka
              Castle.
            </p>
            <address>2 Osakajo, Chuo Ward, Osaka, 540-0002, Japan.</address>
            <p>
              <a
                href="https://www.google.com/maps/place/OSAKA+GEIHINKAN+(+Former+Guest+House+)+in+the+lush+grounds+of+Nishinomaru+Garden+of+Osaka+Castle+Park/@34.6833253,135.5318128,15.42z/data=!4m13!1m7!3m6!1s0x6000e6553406e2e1:0xc55bc16ee46a2fe7!2sOsaka,+Japan!3b1!8m2!3d34.6937249!4d135.5022535!3m4!1s0x6000e72cf78fffff:0x2914f59b07aac290!8m2!3d34.6881267!4d135.5228987"
                target="_blank"
              >
                Osaka Geihinkan
              </a>
            </p>
            <h3>Schedule</h3>
            <p>
              The wedding itself will be on{" "}
              <time>July 1, 2023, at 16:30 (4:30 p.m.).</time>{" "}
              Guests are invited a to a tea ceremony in the garden before the
              service starts.
            </p>
            <p>
              Dinner will be served at{" "}
              <time>17:00 (5:00 p.m.)</time>, and we will be at the Geihinkan
              until 20:00 (8 p.m.).
            </p>
            <h4>Welcome Party</h4>
            <p>
              Since most of our guests are traveling from far away, we'd like to
              invite you to a little welcome party the day before the wedding.
            </p>
            <p>
              This will take place on the evening of <time>June 30</time>.
            </p>
            <h4>Afterparty</h4>
            <p>
              For the guests that want to continue the party after we've had
              dinner. We will head over to a nearby location, where there will
              be drinks, music, and dancing.
            </p>
            <h3>Dress code</h3>
            <p>Dark suits, eventing attire.</p>
            <h3>Accommodations</h3>
            <p>
              With the wedding taking place in central Osaka, there are many
              options for accommodations. We haven't reserved any locations, but
              we recommend looking for AirBnbs in the area (search for
              Tamatsukuri). We can also recommend these hotels:
            </p>
            <ul>
              <li>Hotel</li>
              <li>Hotel</li>
              <li>Hotel</li>
            </ul>
            <h3>Visa and travel information</h3>
            <p>
              Japan has visa-free entry for travelers from Norway, U.S., the
              U.K., and{" "}
              <a href="https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html">
                a number of other countries
              </a>.
            </p>
            <p>
              To be allowed entry, you have to have either three doses of a
              valid COVID-19 vaccine, or a negative test taken within 72 hours
              prior to departing:{" "}
              <a href="https://www.mofa.go.jp/ca/fna/page4e_001053.html">
                Japan Border measures.
              </a>
            </p>
            <h3>Things to do around Osaka</h3>
            <p>Takoyaki</p>
            <p>Go to Nara</p>
            <h3>Gifts</h3>
            <p>
              Since you're all traveling from far away to attend our wedding, we
              don't want you to to worry about bringing presents. However if
              you'd like, we'd be very happy for a small contribution to our
              honeymoon next year.
            </p>
          </>
        )}
    </div>
  );
}

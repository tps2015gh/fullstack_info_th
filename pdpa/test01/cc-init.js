// const config = {}

const config = {
    current_lang: "th",
    autorun: true,
    autoclear_cookies: true,
    languages: {
      en: {
        consent_modal: {
          title: "เพจนี้เราใช้คุกกี้- We use cookies!",
          description:
            'สวัสดีเว็บไซต์นี้ใช้คุกกี้ที่จําเป็นเพื่อให้แน่ใจว่าการทํางานที่เหมาะสมและคุกกี้ติดตามเพื่อทําความเข้าใจว่าคุณโต้ตอบกับมันอย่างไร หลังจะถูกตั้งค่าหลังจากได้รับความยินยอมเท่านั้น <button type="button" data-cc="c-settings" class="cc-link">ให้ฉันเลือก</button> <br>  Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
          primary_btn: {
            text: "ยอมรับทั้งหมด <br> Accept all",
            role: "accept_all", // 'accept_selected' or 'accept_all'
          },
          secondary_btn: {
            text: "ปฏิเสธทั้งหมด <br> Reject all",
            role: "accept_necessary", // 'settings' or 'accept_necessary'
          },
        },
        settings_modal: {
          title: "การกําหนดลักษณะ Cookie <br> Cookie preferences ",
          save_settings_btn: "บันทึกการตั้งค่า <br> Save settings",
          accept_all_btn: "ยอมรับทั้งหมด <br> Accept all",
          reject_all_btn: "ปฏิเสธทั้งหมด <br>Reject all",
          close_btn_label: "ปิด <br>Close",
          cookie_table_headers: [
            { col1: "Name" },
            { col2: "Domain" },
            { col3: "Expiration" },
            { col4: "Description" },
          ],
          blocks: [
            {
              title: "การใช้งาน Cookie <br> Cookie usage 📢",
              description:
                'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.',
            },
            {
              title: "Strictly necessary cookies",
              description:
                "These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly",
              toggle: {
                value: "necessary",
                enabled: true,
                readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
              },
            },
            {
              title: "Performance and Analytics cookies",
              description:
                "These cookies allow the website to remember the choices you have made in the past",
              toggle: {
                value: "analytics", // your cookie category
                enabled: false,
                readonly: false,
              },
              cookie_table: [
                // list of all expected cookies
                {
                  col1: "^_ga", // match all cookies starting with "_ga"
                  col2: "google.com",
                  col3: "2 years",
                  col4: "description ...",
                  is_regex: true,
                },
                {
                  col1: "_gid",
                  col2: "google.com",
                  col3: "1 day",
                  col4: "description ...",
                },
              ],
            },
            {
              title: "Advertisement and Targeting cookies",
              description:
                "These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you",
              toggle: {
                value: "targeting",
                enabled: false,
                readonly: false,
              },
            },
            {
              title: "ข้อมูลเพิ่มเติม <br> More information",
              description:
                'หากมีข้อสงสัยเกี่ยวกับนโยบายของเราเกี่ยวกับคุกกี้และตัวเลือกของคุณโปรด <a class="cc-link" href="#yourcontactpage">ติดต่อเรา</a> <hr> For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.',
            },
          ],
        },
      },
    },
  };
  
let cc = initCookieConsent();
cc.run(config);

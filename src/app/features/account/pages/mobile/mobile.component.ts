import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent {

  readonly scriptAndroid: string = `
    class MainActivity : AppCompatActivity() {

      override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        web_view.settings.javaScriptEnabled = true
        web_view.webViewClient = WebViewClient()

        // Escribimos el código HTML dentro de un string multi línea
        // y lo cargamos dentro del Web View a través del método loadData

        val unencodedHtml = """
          <html>
            <body>
              <ibk-account
                jwt="__JWT__"
                commerce-id="__COMMERCE_ID__"
                subscription-key="__SUBSCRIPTION_KEY__">
              </ibk-account>

              <script
                type="module"
                src="https://web-dev.digital.interbank.pe/bindings/js/accounts@0.0.1/ibk-account/ibk-account.esm.js">
              </script>
            </body>
          </html>
        """

        val encodedHtml = Base64.encodeToString(unencodedHtml.getBytes(), Base64.NO_PADDING);
        webView.loadData(encodedHtml, "text/html", "base64");
      }
    }
  `;

  readonly scriptIos: string = `
    import UIKit
    import WebKit

    class ViewController: UIViewController {
      override func viewDidLoad() {
        super.viewDidLoad()

        let html = """
        <html>
          <body>
            <ibk-account
              id="account-wc"
              jwt="__JWT__"
              commerce-id="__COMMERCE_ID__"
              subscription-key="__SUBSCRIPTION_KEY__">
            </ibk-account>

            <script
              type="module"
              src="https://web-qa.digital.interbank.pe/bindings/js/accounts@0.0.1/ibk-account/ibk-account.esm.js">
            </script>

            <script>
              const element = document.getElementById('account-wc');

              element.addEventListener('accountCreated', event => {
                // El objeto emitido dentro del detalle del evento
                console.log(event.detail);
                // {
                //   accountCorrelationId: 'correlation-id',
                //   accountDataSharing: true,
                //   cci: 'account-cci',
                //   accountId: 'account-id',
                // }
              });
            </script>
          </body>
        </html>
        """

        let webView = WKWebView(frame: view.frame)
        webView.loadHTMLString(html, baseURL: nil)
        view.addSubview(webView)
      }
    }
  `;
}

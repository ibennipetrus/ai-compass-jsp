import React from "react";
import Footer from "../components/Footer";

export default function Datenschutz() {
  return (
    <>
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-16 text-gray-800">
        <div className="max-w-3xl w-full">
          <div className="mt-4 mb-8">
            <button
              onClick={() => window.history.back()}
              className="bg-gray-800 transition hover:bg-green-600 text-white px-8 py-3 rounded-md shadow-lg flex items-center gap-2"
            >
              Zurück
            </button>
          </div>
          <h1 className="max-w-3xl w-full text-4xl font-bold mb-8 text-left">
            Datenschutzerklärung
          </h1>

          {/* Abschnitt 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold font-thin mb-4">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-xl font-semibold mb-2">Allgemeine Hinweise</h3>
            <p className="text-md leading-relaxed mb-4 text-justify">
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche
              Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              Datenerfassung auf dieser Website
            </h3>
            <p className="text-lg leading-relaxed mb-2 text-justify">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </p>
            <p className="text-lg leading-relaxed mb-2 text-justify">
              Die Datenverarbeitung erfolgt durch den Websitebetreiber. Dessen
              Kontaktdaten finden Sie im Abschnitt „Hinweis zur Verantwortlichen
              Stelle“.
            </p>
            <h3 className="text-xl font-semibold mb-2">
              Wie erfassen wir Ihre Daten?
            </h3>
            <p className="text-lg leading-relaxed mb-2 text-justify">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
              ein Kontaktformular eingeben. <br /> Andere Daten werden
              automatisch oder nach Ihrer Einwilligung beim Besuch der Website
              durch unsere IT- Systeme erfasst. Das sind vor allem technische
              Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
              Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
              sobald Sie diese Website betreten.
            </p>
            <h3 className="text-xl font-semibold mb-2">
              Wofür nutzen wir Ihre Daten?
            </h3>
            <p className="text-lg leading-relaxed mb-2 text-justify">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gewährleisten. Andere Daten können
              zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
            <h3 className="text-xl font-semibold mb-2">
              Welche Rechte haben Sie bezüglich Ihrer Daten?
            </h3>
            <p className="text-lg leading-relaxed mb-2 text-justify">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie
              eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie
              diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem
              haben Sie das Recht, unter bestimmten Umständen die Einschränkung
              der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
              Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu.
            </p>
            <p className="text-lg leading-relaxed mb-2 text-justify">
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
              sich jederzeit an uns wenden
            </p>
            <h3 className="text-xl font-semibold mb-2">
              Analyse-Tools und Tools von Drittanbietern
            </h3>
            <p className="text-lg leading-relaxed mb-2 text-justify">
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
              ausgewertet werden. Das geschieht vor allem mit sogenannten
              Analyseprogrammen. <br /> Detaillierte Informationen zu diesen
              Analyseprogrammen finden Sie in der folgenden
              Datenschutzerklärung.
            </p>
          </section>

          {/* Abschnitt 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold font-thin mb-4">
              2. Hosting
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              <strong>
                GitHub, Inc. 88 Colin P Kelly Jr St, San Francisco, CA 94107,
                USA
              </strong>
            </p>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              GitHub ist ein Dienst zum Hosten von Webseiten (GitHub Pages).
              Beim Besuch dieser Website werden personenbezogene Daten, wie
              IP-Adresse, Zugriffszeitpunkt und Browserinformationen, von GitHub
              verarbeitet.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Die Datenverarbeitung erfolgt auf Grundlage unseres berechtigten
              Interesses an der Bereitstellung und Sicherheit unserer Website
              (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen
              sowie gegen Direktwerbung (Art. 21 DSGVO)
            </p>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Weitere Informationen zum Datenschutz bei GitHub finden Sie hier:
            </p>

            <p className="text-lg leading-relaxed mb-4 text-justify">
              https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement
            </p>

            <p className="text-lg leading-relaxed mb-4 text-justify">
              Eine Auftragsverarbeitung im klassischen Sinne wird nicht
              abgeschlossen, da GitHub ein eigenständiger Verantwortlicher ist.
            </p>
          </section>

          {/* Abschnitt 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold font-thin mb-4">
              3. Allgemeine Hinweise und Pflichtinformationen Datenschutz
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Wenn Sie diese Website benutzen, werden verschiedene
              personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
              mit denen Sie persönlich identifiziert werden können. Die
              vorliegende Datenschutzerklärung erläutert, welche Daten wir
              erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu
              welchem Zweck das geschieht.
              <br /> Wir weisen darauf hin, dass die Datenübertragung im
              Internet (z. B. bei der Kommunikation per E- Mail)
              Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten
              vor dem Zugriff durch Dritte ist nicht möglich.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>
            <p className="text-lg leading-relaxed mb-4 whitespace-pre-line">
              Confias AI Solutions GmbH{"\n"}
              Lange Reihe 15{"\n"}
              20099 Hamburg{"\n"}
              Telefon: +49 40 2805 3399{"\n"}
              E-Mail: info@confias.ai
            </p>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Verantwortliche Stelle ist die natürliche oder juristische Person,
              die allein oder gemeinsam mit anderen über die Zwecke und Mittel
              der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-
              Mail-Adressen o. Ä.) entscheidet.
            </p>

            <h3 className="text-xl font-semibold mb-2">Speicherdauer</h3>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere
              Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
              Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
              Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
              gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für
              die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer-
              oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten
              Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung
              auf dieser Website
            </h3>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Sofern Sie in die Datenverarbeitung eingewilligt haben,
              verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von
              Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern
              besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet
              werden. Im Falle einer ausdrücklichen Einwilligung in die
              Übertragung personenbezogener Daten in Drittstaaten erfolgt die
              Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a
              DSGVO. Sofern Sie in die Speicherung von Cookies oder in den
              Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-
              Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung
              zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung
              ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung
              oder zur Durchführung vorvertraglicher Maßnahmen erforderlich,
              verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b
              DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur
              Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf
              Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung
              kann ferner auf Grundlage unseres berechtigten Interesses nach
              Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im
              Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden
              Absätzen dieser Datenschutzerklärung informiert.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten
            </h3>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den
              USA oder sonstigen datenschutzrechtlich nicht sicheren
              Drittstaaten. Wenn diese Tools aktiv sind, können Ihre
              personenbezogene Daten in diese Drittstaaten übertragen und dort
              verarbeitet werden. Wir weisen darauf hin, dass in diesen Ländern
              kein mit der EU vergleichbares Datenschutzniveau garantiert werden
              kann. Beispielsweise sind US-Unternehmen dazu verpflichtet,
              personenbezogene Daten an Sicherheitsbehörden herauszugeben, ohne
              dass Sie als Betroffener hiergegen gerichtlich vorgehen könnten.
              Es kann daher nicht ausgeschlossen werden, dass US-Behörden (z. B.
              Geheimdienste) Ihre auf US-Servern befindlichen Daten zu
              Überwachungszwecken verarbeiten, auswerten und dauerhaft
              speichern. Wir haben auf diese Verarbeitungstätigkeiten keinen
              Einfluss.
            </p>
            <h3 className="text-xl font-semibold mb-2">
              ​Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte
              Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
              unberührt.
            </p>
            <h3 className="text-xl font-semibold mb-2">
              Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen
              sowie gegen Direktwerbung (Art. 21 DSGVO)
            </h3>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e
              oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen,
              die sich aus Ihrer besonderen Situation ergeben, gegen die
              Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen;
              dies gilt auch für ein auf diese Bestimmungen gestütztes
              Profiling. Die jeweilige Rechtsgrundlage, auf denen eine
              Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung.
              Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen
              personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir
              können zwingende schutzwürdige Gründe für die Verarbeitung
              nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen
              oder die Verarbeitung dient der Geltendmachung, Ausübung oder
              Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1
              DSGVO).
            </p>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung
              zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen
              die Verarbeitung Sie betreffender personenbezogenen Daten zum
              Zwecke derartiger Werbung einzulegen; dies gilt auch für das
              Profiling, soweit es mit solcher Direktwerbung in Verbindung
              steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten
              anschließend nicht mehr zum Zwecke der Direktwerbung verwendet
              (Widerspruch nach Art. 21 Abs. 2 DSGVO).
            </p>
            <h3 className="text-xl font-semibold mb-2">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h3>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
              Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
              Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
              oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
              besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
              gerichtlicher Rechtsbehelfe.
            </p>
            <h3 className="text-xl font-semibold mb-2">
              Recht auf Datenübertragbarkeit
            </h3>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
              Einwilligung oder in Erfüllung eines Vertrags automatisiert
              verarbeiten, an sich oder an einen Dritten in einem gängigen,
              maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
              direkte Übertragung der Daten an einen anderen Verantwortlichen
              verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>
            <h3 className="text-xl font-semibold mb-2">
              Auskunft, Berichtigung und Löschung
            </h3>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
              jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
              auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
              weiteren Fragen zum Thema personenbezogene Daten können Sie sich
              jederzeit an uns wenden.
            </p>
            <h3 className="text-xl font-semibold mb-2">
              Recht auf Einschränkung der Verarbeitung
            </h3>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen. Hierzu können Sie sich
              jederzeit an uns wenden. Das Recht auf Einschränkung der
              Verarbeitung besteht in folgenden Fällen:
            </p>
            <p className="text-lg ml-5 leading-relaxed mb-4 text-justify">
              Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
              personenbezogenen Daten bestreiten, benötigen wir in der Regel
              Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie
              das Recht, die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen.
            </p>
            <p className="text-lg ml-5 leading-relaxed mb-4 text-justify">
              Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
              geschah/geschieht, können Sie statt der Löschung die Einschränkung
              der Datenverarbeitung verlangen.
            </p>
            <p className="text-lg ml-5 leading-relaxed mb-4 text-justify">
              Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie
              sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von
              Rechtsansprüchen benötigen, haben Sie das Recht, statt der
              Löschung die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen.
            </p>
            <p className="text-lg ml-5 leading-relaxed mb-4 text-justify">
              Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
              haben, muss eine Abwägung zwischen Ihren und unseren Interessen
              vorgenommen werden. Solange noch nicht feststeht, wessen
              Interessen überwiegen, haben Sie das Recht, die Einschränkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
              eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung
              abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
              Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz
              der Rechte einer anderen natürlichen oder juristischen Person oder
              aus Gründen eines wichtigen öffentlichen Interesses der
              Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
            </p>
            <h3 className="text-xl font-semibold mb-2">
              SSL- bzw. TLS-Verschlüsselung
            </h3>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
              oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
              SSL- bzw. TLS- Verschlüsselung. Eine verschlüsselte Verbindung
              erkennen Sie daran, dass die Adresszeile des Browsers von
              „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in
              Ihrer Browserzeile.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
              Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
              werden.
            </p>
            <h3 className="text-xl font-semibold mb-2">
              Widerspruch gegen Werbe-E-Mails
            </h3>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
              Kontaktdaten zur Übersendung
            </p>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              von nicht ausdrücklich angeforderter Werbung und
              Informationsmaterialien wird hiermit widersprochen. Die Betreiber
              der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle
              der unverlangten Zusendung von Werbeinformationen, etwa durch
              Spam-E-Mails, vor.
            </p>
          </section>

          {/* Abschnitt 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold font-thin mb-4">
              4. Datenerfassung auf dieser Website{" "}
            </h2>
            <h3 className="text-xl font-semibold mb-2">Kontaktformular</h3>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
              Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
              DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
              sofern diese abgefragt wurde; die Einwilligung ist jederzeit
              widerrufbar.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
              uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
              Speicherung widerrufen oder der Zweck für die Datenspeicherung
              entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
              Zwingende gesetzliche Bestimmungen – insbesondere
              Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              Anfrage per E-Mail, Telefon oder Telefax
            </h3>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
              Ihre Anfrage inklusive aller daraus hervorgehenden
              personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung
              Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
              Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
              DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
              sofern diese abgefragt wurde; die Einwilligung ist jederzeit
              widerrufbar.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Die von Ihnen an uns per Kontaktanfragen übersandten Daten
              verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
              Einwilligung zur Speicherung widerrufen oder der Zweck für die
              Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung
              Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
              insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold font-thin mb-4">
              5. Plug Ins und Tools{" "}
            </h2>
            <h3 className="text-xl font-semibold mb-2">
              Google Fonts und Adobe Fonts{" "}
            </h3>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Diese Website verwendet Schriftartendateien von Google Fonts und
              Adobe Fonts, um Schriftarten anzuzeigen und die Website korrekt
              darzustellen. Beim Besuch dieser Website können diese
              Drittanbieter personenbezogene Daten über Sie sammeln, darunter:
            </p>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Informationen über Ihren Browser, Ihr Netzwerk oder Ihr Gerät.
              <br />
              Informationen über diese Website und die Seite, die Sie auf der
              Website besuchen.
              <br />
              Ihre IP-Adresse.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Diese Daten werden von Google Fonts und Adobe Fonts erfasst, um
              die Schriftarten korrekt anzuzeigen und die Qualität unserer
              Website zu verbessern. Bitte beachten Sie, dass die Datenerfassung
              und -verarbeitung durch diese Drittanbieter ihren eigenen
              Datenschutzbestimmungen und -richtlinien unterliegt.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Weitere Informationen zum Datenschutz bei Google Fonts finden Sie
              in den Datenschutzbestimmungen von Google:
              https://policies.google.com/privacy.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Weitere Informationen zum Datenschutz bei Adobe Fonts finden Sie
              in den Datenschutzbestimmungen von Adobe:
              https://www.adobe.com/privacy/policies/adobe-fonts.html.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Die Nutzung erfolgt im Interesse einer einheitlichen und
              ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein
              berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO
              dar.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-justify">
              Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine
              Standardschrift von Ihrem Computer genutzt.
            </p>
          </section>

          {/* Weitere Abschnitte folgen hier (Punkte 4, 5, 6...) */}
        </div>
      </main>
      <Footer />
    </>
  );
}
<Footer />;

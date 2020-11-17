import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.scss']
})
export class BlogPreviewComponent implements OnInit {
  content = [`Când mediul în care te afli validează vădit sau subtil inegalitățile pe bază de gen, discriminarea e următorul pas.`,

    `„De ce iubim femeile?”, se-ntreba Mircea Cărtărescu în bestsellerul său național. Mi-ar plăcea să fie și „De ce respectăm femeile?” la fel de întrebat în librării. „Femeile sunt sexul slab!”, „Locul femeii e la bucătărie!”, „O femeie trebuie să pună pe masă!”, „Știu femeile să vorbească despre altceva decât shopping și copii?” - din păcate, aceste stereotipuri există în societate sub forme diverse, de la cele mai subtile până la cele mai agresive. E timpul să ne descotorosim de aceste vechi obiceiuri. Ne-am săturat de ele. Schimbările ne-au provocat pe toți laolaltă. Ne-am adaptat la cerințele vremurilor și am excelat în multitasking cot la cot. Mediul de afaceri a fost anevoios atât pentru bărbați cât și pentru femei. În timp, însă, femeile au demonstrat că sunt capabile să jongleze simultan cu mai multe sarcini: să dezvolte o afacere, să aibă un job zilnic și să fie pe deplin prezente în viața de familie. `,

    `Vreau să discutăm despre potențialul feminin în afaceri și cum am ajuns să dezvolt platforma Izarra. Așadar, să începem cu noutăți bune. Numărul femeilor antreprenoare și a afacerilor conduse de femei este în creștere. În 2017, 33,9% din întreprinderi au fost deținute sau gestionate de femei în comparație cu 27,5% în 2009, conform rezultatelor cercetării privind dezvoltarea mediului de afaceri realizată de către Biroul Național de Statistică, 2018. În timp ce scriu rândurile acestea, am citit că antreprenoriatul feminin reprezintă o prioritate națională inclusă conștiincios în Strategia Națională de Dezvoltare a Țării „Moldova 2030”. `,

    `Toate bune și frumoase până aici, însă subaprecierea potențialului antreprenorial feminin și stereotipurile sociale continuă să încolțească, chiar dacă legislația națională prevede accesul egal la activitatea de antreprenoriat. Prin inițiativa mea de a susține femeile, nu încerc să subminez sexul masculin, pentru că nu privesc femeile și bărbații ca adversari într-o competiție, ci dimpotrivă, completându-se unii pe alții în toate formele pe care le ia o societate. Diversitatea de gen în mediul antreprenorial nu numai că este productivă, dar și necesară. Vreau să înțelegem că promovarea antreprenoriatului feminin contribuie la creșterea mai rapidă a numărului locurilor de muncă în economia națională.`,

    `Am început să schițez în minte ideea de Izarra ca un spațiu online unde femeile antreprenoare ar putea să vorbească deschis despre experiențele lor de business, să-și găsească o parteneră de afaceri, să conceapă noi proiecte împreună și să se ajute reciproc.`,

    `Astfel Izarra a ajuns să fie o punte prinsă între două dorințe:`, ,

    `- de a deveni, la rândul meu, o antreprenoare de succes la mine-n țară.`,
    `- de a trăi într-o societate în care regretele pe care le-am simțit în glasul multor femei să nu mai reverbereze: că n-au plecat din țară, că le e frică să înceapă o afacere, că nu acces la o rețea de mentori și că stereotipurile sexiste le descurajează. `,

    `În acest context, sunt gata să mă fac luntre și punte pentru a servi acestei comunități subreprezentate. Sub umbrela platformei Izarra vreau să adun toate femeile antreprenoare și împreună să luptăm pentru reprezentativitate.`,

    `Sunt cinci lucruri pe care aș vrea să le înțelegeți despre comunitatea Izarra:`,
    `1. Scopul primar al platformei este de a le oferi femeilor oportunitatea de a-și promova afacerile lor, creând astfel o bază de date de companii verificate.`,
    `2. Fiecare femeie va putea să o folosească și ca instrument de căutare a unui loc de muncă.`,
    `3. Pe termen lung, platforma devine o rețea în care femeile de afaceri au acces la cursuri, forumuri și posibilitatea de a recruta potențiali angajați online.`,
    `4. Izarra va funcționa, de asemenea, ca o platformă de schimb de cunoștințe cu acces la o rețea de mentori.`,
    `5. Unul dintre obiectivele finale este de a deveni platforma în care femeile își pot găsi un partener de afaceri, investitor sau cofondator pentru afacerea lor.`,
    `Femeile sunt și pot fi antreprenoare de succes sau partenere de afaceri care pot asigura o competiție de calitate pe piață. Îmi doresc ca Izzara să devină locul în care afacerile femeilor să fie validate, susținute, promovate și propulsate. Cu alte cuvinte, un loc în care tu, dragă cititoare, să nu te simți niciodată singură în dezvoltarea afacerii tale.`,

    `Am nevoie de susținerea voastră în acest drum lung,`,
    `Olga Graur, fondatoare Izarra`];
  constructor() { }

  ngOnInit(): void {
  }

}

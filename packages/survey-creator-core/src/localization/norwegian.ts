//Uncomment this line on creating a translation file
import { editorLocalization, defaultStrings } from "../editorLocalization";

export var nbStrings = {
  //survey templates
  survey: {
    edit: "Rediger",
    externalHelpLink: "Se og lær hvordan å opprette nye skjema",
    externalHelpLinkUrl:
      "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Dra og slipp et spørsmål her fra Verktøylisten til venstre.",
    addLogicItem: "Opprett en regel for å skreddersy skjemaflyten",
    copy: "Kopier",
    addToToolbox: "Legg til verktøylisten",
    deletePanel: "Slett panel",
    deleteQuestion: "Slett spørsmål",
    convertTo: "Konverter til",
    drag: "Dra element",
  },
  //questionTypes
  qt: {
    default: "Standard",
    checkbox: "Sjekkboks",
    comment: "Kommentar",
    imagepicker: "Bildevelger",
    image: "Bilde",
    dropdown: "Nedtrekksliste",
    file: "Fil",
    html: "Html",
    matrix: "Matrise (enkelvalg)",
    matrixdropdown: "Matrise (flervalg)",
    matrixdynamic: "Matrise (dynamiske rader)",
    multipletext: "Flerlinjetekst",
    panel: "Panel",
    paneldynamic: "Panel (dynamiske paneler)",
    radiogroup: "Radiogruppe",
    rating: "Rangering",
    text: "Enkel tekst",
    boolean: "Boolean",
    expression: "Formel",
    signaturepad: "Signatur",
    flowpanel: "Flytpanel",
  },
  //Strings in Editor
  ed: {
    defaultLocale: "Standard ({0})",
    survey: "Skjema",
    settings: "Skjemainnstillinger",
    settingsTooltip: "Åpne skjemainnstillinger",
    //opjectPropertiesHeader: "Advanced",
    //showObjectProperties: "Show Object Properties",
    //hideObjectProperties: "Hide Object Properties",
    showPanel: "Vis panel",
    hidePanel: "Skjul panel",
    // editSurvey: "Rediger skjema",
    addNewPage: "Legg til ny side",
    moveRight: "Bla til høyre",
    moveLeft: "Bla til venstre",
    deletePage: "Slett side",
    editPage: "Rediger side",
    edit: "Rediger",
    newPageName: "side",
    newQuestionName: "spørsmål",
    newPanelName: "panel",
    newTextItemName: "tekst",
    testSurvey: "Test skjema",
    testSurveyAgain: "Test skjema igjen",
    testSurveyWidth: "Skjemabredde: ",
    navigateToMsg: "Du måtte navigere til:",
    logic: "Skjemalogikk",
    embedSurvey: "Integrer skjema",
    translation: "Oversettelse",
    saveSurvey: "Lagre skjema",
    saveSurveyTooltip: "Lagre skjema",
    designer: "Skjemadesigner",
    jsonEditor: "JSON-redigering",
    undo: "Angre",
    redo: "Gjenta",
    undoTooltip: "Angre siste endring",
    redoTooltip: "Gjør om siste endring",
    copy: "Kopier",
    cut: "Kutt",
    paste: "Lim innn",
    copyTooltip: "Kopier valgt seksjon inn i utklippstavla",
    cutTooltip: "Kutt valgt seksjon inn i utklippstavla",
    pasteTooltip: "Lim inn fra utklippstavla",
    options: "Alternativer",
    generateValidJSON: "Lag gyldig JSON",
    generateReadableJSON: "Lag lesbar JSON",
    toolbox: "Verktøyliste",
    "property-grid": "Innstillinger",
    toolboxGeneralCategory: "Generelt",
    // delSelObject: "Slett valgte elementer",
    // editSelObject: "Rediger valgte elementer",
    correctJSON: "Vennligst korriger JSON.",
    surveyResults: "Skjemaresultat: ",
    surveyResultsTable: "Som tabell",
    surveyResultsJson: "Som JSON",
    resultsTitle: "Spørsmålstittel",
    resultsName: "Spørsmålsnavn",
    resultsValue: "Svar",
    resultsDisplayValue: "Vist verdi",
    modified: "Endret",
    saving: "Lagrer",
    saved: "Lagret",
    propertyEditorError: "Feil:",
    saveError: "Feil! Skjema innhold er ikke lagret.",
    translationAddLanguage: "Velg språk for oversetting",
    translationShowAllStrings: "Vis alle strenger",
    translationShowAllPages: "Vis alle sider",
    translationNoStrings:
      "Ingen strenger å oversette. Vennligst endre filteret.",
    translationExportToSCVButton: "Eksporter til CSV",
    translationImportFromSCVButton: "Importer fra CSV",
    translationMergeLocaleWithDefault: "Flett {0} med standard språk",
    bold: "Fet",
    italic: "Kursiv",
    underline: "Underlinjet",
    fpAddQuestion: "Legg til spørsmål...",
    selectPage: "Velg side...",
    chooseElement: "Velg element...",
    //completedHtmlOnConditionItemText: "Show if:",
    lg: {
      addNewItem: "Legg til ny regel",
      //Logic tab strings
      page_visibilityName: "Sidesynlighet",
      panel_visibilityName: "Panelsynlighet",
      panel_enableName: "Panel aktivere/deaktivere",
      question_visibilityName: "Spørsmålssynlghet",
      question_enableName: "Spørsmål aktivere/deaktivere",
      question_requireName: "Spørsmål valgfritt/påkrevd",
      trigger_completeName: "Fullfør skjema",
      trigger_setvalueName: "Angi spørsmålsnavn",
      trigger_copyvalueName: "Kopier spørsmålsverdi",
      trigger_skipName: "Hopp til spørsmål",
      trigger_runExpressionName: "Kjør tilpasset formel",
      completedHtmlOnConditionName: "Tilpasset 'Takk-side' tekst",

      page_visibilityDescription:
        "Gjør siden synlig når formelen evalueres til 'sann', og holder den ellers usynlig.",
      panel_visibilityDescription:
        "Gjør panelet synlig når formelen evalueres til 'sann', og holder den ellers usynlig.",
      panel_enableDescription:
        "Aktiverer panelet, og alle elementer inni, når formelen evalueres til 'sann'. I andre tilfeller holdes de deaktivert.",
      question_visibilityDescription:
        "Gjør spørsmålet synlig når formelen evalueres til 'sann', og holder den ellers usynlig.",
      question_enableDescription:
        "Aktiverer spørsmålet når formelen evalueres til 'sann', og holder den ellers deaktivert.",
      question_requireDescription:
        "Spørmsålet blir påkrevd når formelen evalueres til 'sann'.",
      trigger_completeDescription:
        "Når formelen evalueres til 'sann' fullføres skjemaet og sluttbrukeren ser 'Takk-siden'.",
      trigger_setvalueDescription:
        "Når spørsmålsverdier som er brukt i formelen endres, og formelen evalueres som 'sann', vil verdien settes i det valgte spørsmålet.",
      trigger_copyvalueDescription:
        "Når spørsmålsverdier som er brukt i formelen endres, og formelen evalueres som 'sann', vil verdien i et valgt spørsmål kopieres til et annet valgt spørsmål.",
      trigger_skipDescription:
        "Når formelen evalueres til 'sann' vil skjemaet hoppe til/fokusere på valgt spørsmål.",
      trigger_runExpressionDescription:
        "Når formelen evauleres til 'sann' vil den tilpassede formelen utføres. Du kan valgfritt sette formelens resultat inn i det valgte spørsmålet.",
      completedHtmlOnConditionDescription:
        "Hvis formelen evalueres til 'sann' vil standardteksten på 'Takk siden' endres til den gitte teksten.",

      itemExpressionText: "Når formelen: '{0}' evalueres til 'sann':", //{0} - vil uttrykket
      page_visibilityText: "Gjøre side {0} synlig", //{0} sidenavn
      panel_visibilityText: "Gjør panel {0} synlig", //{0} panelnavn
      panel_enableText: "Gjør panel {0} aktivert", //{0} panelnavn
      question_visibilityText: "Gjør spørsmål {0} synlig", //{0} spørsmålsnavn
      question_enableText: "Gjør spørsmål {0} aktivert", //{0} spørsmålsnavn
      question_requireText: "Gjør spørsmål {0} påkrevd", //{0} spørsmålsnavn
      trigger_completeText: "Skjemaet blir fullført",
      trigger_setvalueText: "Sett inn: {0} verdi {1}", //{0} spørsmålsnavn, {1} settVerdi
      trigger_copyvalueText: "Kopier inn: {0} verdi fra spørsmål {1}", //{0} og {1} spørsmålsnavn
      trigger_skipText: "Hopp til spørsmål {0}", //{0} spørsmålsnavn
      trigger_runExpressionText1: "Kjør formel: '{0}'", //{0} uttryket
      trigger_runExpressionText2: " og sett inn resultatet i spørsmål: {0}", //{0} spørsmålsnavn
      completedHtmlOnConditionText: "Vis tilpasset tekst for 'Takk-siden'.",

      conditions: "Vilkår",
      actions: "Handling(er)",
      expressionEditorTitle: "Definer vilkår",
      actionsEditorTitle: "Definer handling(er)",

      deleteAction: "Slett handling",
      addNewAction: "Legg til handling",
      selectedActionCaption: "Velg handling som skal legges til...",

      expressionInvalid:
        "Formelen er tom eller ugyldig. Vennligst korriger den.",
      noActionError: "Vennligst legg til minst en handling",
      actionInvalid: "Vennligst korriger problemer med handlingen.",
      expressionSetup: "",
      actionsSetup: "",
    },
  },
  //Property names in table headers
  // pel: {
  //   isRequired: "Nødvendig?",
  // },
  //Property Editors
  pe: {
    apply: "Bruk",
    ok: "OK",
    save: "Lagre",
    saveTooltip: "Lagre",
    cancel: "Avbryt",
    reset: "Tilbakestill",
    refresh: "Last inn på nytt",
    // close: "Lukk",
    delete: "Slett",
    add: "Legg til",
    addNew: "Legg til ny",
    addItem: "Klikk for å legge til...",
    addOther: "Annet",
    addSelectAll: "Velg alt",
    addNone: "Ingen",
    removeAll: "Fjern alt",
    edit: "Rediger",
    back: "Gå tilbake uten å lagre",
    backTooltip: "Gå tilbake uten å lagre",
    saveAndBack: "Lagre og gå tilbake",
    saveAndBackTooltip: "Lagre og gå tilbake",
    // itemValueEdit: "Synlig hvis",
    editChoices: "Rediger valg",
    showChoices: "Vis valg",
    move: "Flytt",
    empty: "<tom>",
    // notEmpty: "<rediger verdi>",
    fastEntry: "Rask innfylling",
    formEntry: "Innfylling i skjema",
    testService: "Sjekk tjenesten",
    itemSelectorEmpty: "Vennligst velg elementet",
    conditionActionEmpty: "Velg handlingen",
    conditionSelectQuestion: "Velg spørsmål...",
    conditionSelectPage: "Velg side...",
    conditionSelectPanel: "Velg panel...",
    conditionValueQuestionTitle: "Vennligst skriv inn/velg verdi",
    // conditionHelp: "Skriv inn en boolsk formel. Det burde returnere SANN for å gjøre spørsmål/side synlig. For eksempel: {question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
    expressionHelp:
      "Vennligst skriv inn en formel. Du kan bruke klammeparenteser for å få tilgang til spørsmålsverdiene: '{question1} + {question2}', '({price}*{quantity}) * (100 - {discount})'",
    aceEditorHelp: "Trykk ctrl+mellomrom for å få hint til å fullføre formler",
    aceEditorRowTitle: "Gjeldende rad",
    aceEditorPanelTitle: "Gjeldende panel",
    showMore: "For mer detaljer - se dokumentasjonen",
    // conditionShowMoreUrl: "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
    assistantTitle: "Tilgjengelige spørsmål:",
    cellsEmptyRowsColumns: "Det må være minst 1 kolonne eller rad",

    propertyIsEmpty: "Vennligst fyll inn en verdi",
    propertyNameIsNotUnique: "Vennligst fyll inn et unikt navn",
    listIsEmpty: "Legg til nytt element",
    expressionIsEmpty: "Formelen er tom",
    value: "Verdi",
    text: "Tekst",
    rowid: "Rad-ID",
    imageLink: "Bildelenke",
    columnEdit: "Rediger kolonne: {0}",
    itemEdit: "Rediger element: {0}",

    url: "URL",
    path: "Sti",
    valueName: "Verdinavn",
    titleName: "Tittelnavn",
    titlePlaceholder: "Skriv tittel her",
    surveyTitlePlaceholder: "Skriv skjematittel her",
    pageTitlePlaceholder: "Skriv sidetittel her",
    descriptionPlaceholder: "Skriv beskrivelse",
    surveyDescriptionPlaceholder: "Skriv skjema-beskrivelse",
    pageDescriptionPlaceholder: "Skriv side-beskrivelse",

    hasOther: "Har annet element",
    otherText: "Annet element-tekst",
    hasNone: "Har velg ingen",
    noneText: "Velg ingen-tekst",
    hasSelectAll: "Har velg alt-element",
    selectAllText: "Velg alt elememt-tekst",
    choicesMin: "Minsteverdi for auto-genererte elementer",
    choicesMax: "Maksverdi for auto-genererte elementer",
    choicesStep: "Forskjellene mellom auto-genererte elementer",
    name: "Navn",
    title: "Tittel",
    cellType: "Celletype",
    colCount: "Antall kolonner",
    choicesOrder: "Velg rekkefølge på valg",
    visible: "Er synlig?",
    isRequired: "Er nødvendig?",
    isAllRowRequired: "Nødvendig svar for alle rader",
    requiredErrorText: "Nødvendig feilmelding",
    startWithNewLine: "Må starte med ny linje?",
    rows: "Antall rader",
    cols: "Antall kolonner",
    placeHolder: "Hjelpetekst",
    showPreview: "Er forhåndsvisning av bilde vist?",
    storeDataAsText: "Lagre filinnhold i JSON-resultat som tekst",
    maxSize: "Maksimum filstørrelse i bytes",
    imageHeight: "Bildehøyde",
    imageWidth: "Bildebredde",
    rowCount: "Antall rader",
    columnLayout: "Antall kolonner",
    addRowLocation: "Legg til rad knapp-plassering",
    addRowText: "Legg til rad knapp-tekst",
    removeRowText: "Fjern rad knapp-tekst",
    rateMin: "Minimum sats",
    rateMax: "Maksimum sats",
    rateStep: "Sats steg",
    minRateDescription: "Beskrivelse minimumsvudering",
    maxRateDescription: "Beskrivelse maksimumsvurdering",
    inputType: "Inndata-type",
    optionsCaption: "Tekst for alternativer",
    defaultValue: "Standardverdi",
    cellsDefaultRow: "Standard celletekster",

    surveyEditorTitle: "Rediger skjemainnstillinger",
    qEditorTitle: "Rediger: {0}",

    maxLength: "Maksimum lengde",

    buildExpression: "Bygg",
    editExpression: "Rediger",
    and: "Og",
    or: "Eller",
    remove: "Fjern",
    addCondition: "Legg til",

    //survey
    showTitle: "Vis/skjul tittel",
    expandCollapseTitle: "Utvid/krymp tittel",
    locale: "Standard språk",
    simulator: "Velg enhet",
    landscapeOrientation: "Liggende",
    mode: "Modus (rediger/kun lesbart)",
    clearInvisibleValues: "Fjern usynlige verdier",
    cookieName:
      "Informasjonskapsel navn (for å hindre bruk av skjema to ganger lokalt)",
    sendResultOnPageNext: "Send skjema resultat ved neste side",
    storeOthersAsComment: "Lagre 'andre' verdier i et separat felt",
    showPageTitles: "Vis sidetittel",
    showPageNumbers: "Vis sidenummer",
    pagePrevText: "Forrige side knapp tekst",
    pageNextText: "Neste side knapp tekst",
    completeText: "Fullfør knapp tekst",
    previewText: "Forhåndsvisning knapp tekst",
    editText: "Rediger knapp tekst",
    startSurveyText: "Start knapp tekst",
    showNavigationButtons: "Vis navigasjonsknapper (standard navigering)",
    showPrevButton: "Vis forrige knapp (bruker kan gå til forrige side)",
    firstPageIsStarted: "Den første siden i skjema er startside.",
    showCompletedPage: "Vis ferdigsiden på slutten (completedHtml)",
    goNextPageAutomatic:
      "Når en har svart alle spørsmål, gå til neste side automatisk",
    showProgressBar: "Vis fremdriftslinje",
    questionTitleLocation: "Spørsmål tittel plassering",
    requiredText: "Svar nødvendig symbol(er)",
    questionStartIndex: "Spørsmål startindeks (1, 2 eller 'A', 'a')",
    showQuestionNumbers: "Vis spørsmålsnummer",
    questionTitleTemplate:
      "Spørsmål tittel mal, standard er: '{no}. {require} {title}'",
    questionErrorLocation: "Spørsmål feil plassering",
    focusFirstQuestionAutomatic:
      "Sett fokus på første spørsmål når en endrer side",
    questionsOrder: "Rekkefølge på elementer på siden",
    maxTimeToFinish: "Maks tid for å gjøre ferdig skjema",
    maxTimeToFinishPage: "Maks tid til å gjøre ferdig en side i skjema",
    showTimerPanel: "Vis tidtaking",
    showTimerPanelMode: "Vis tidtaking-modus",
    renderMode: "Gjengivelse modus",
    allowAddPanel: "Tillat å legge til panel",
    allowRemovePanel: "Tillat å fjerne panel",
    panelAddText: "Legg til panel tekst",
    panelRemoveText: "Fjern panel tekst",
    isSinglePage: "Vis alle elementer på en side",
    html: "HTML",
    expression: "Formel",

    minValue: "Minimumsverdi",
    maxValue: "Maksimal verdi",
    minLength: "Minimum lengde",
    allowDigits: "Tillat tall",
    minCount: "Minimum count",
    maxCount: "Maximum count",
    regex: "Regular expression",

    totalText: "Total tekst",
    totalType: "Total type",
    totalExpression: "Total formel",
    totalDisplayStyle: "Total visningsstil",
    totalCurrency: "Total valuta",
    totalFormat: "Total format",

    // Header  adorner
    logoPosition: "Logo-posisjon",
    addLogo: "Legg til logo...",
    changeLogo: "Bytt logo...",
    logoPositions: {
      none: "Fjern logo",
      left: "Venstre",
      right: "Høyre",
      top: "Topp",
      bottom: "Bunn",
    },

    tabs: {
      general: "Generelt",
      fileOptions: "Valg",
      html: "HTML-editor",
      columns: "Kolonner",
      rows: "Rader",
      choices: "Valg",
      items: "Elementer",
      visibleIf: "Synlig hvis",
      enableIf: "Tilgjengelig hvis",
      requiredIf: "Nødvendig hvis",
      rateValues: "Rangering verdier",
      choicesByUrl: "Valg fra web",
      matrixChoices: "Standardvalg",
      multipleTextItems: "Tekst inndata",
      numbering: "Nummerering",
      validators: "Valideringer",
      navigation: "Navigering",
      question: "Spørsmål",
      pages: "Sider",
      completedHtml: "Fullført HTML",
      completedHtmlOnCondition: "Fullført HTML på betingelse",
      loadingHtml: "Laster HTML",
      timer: "Tidtaker/Quiz",
      calculatedValues: "Beregnede verdier",
      triggers: "Triggere",
      templateTitle: "Mal-tittel",
      totals: "Totaler",
      logic: "Logikk",
      layout: "Oppsett",
      data: "Data",
      validation: "Validering",
      cells: "Celler",
      showOnCompleted: "Vis når ferdig",
      logo: "Logo i skjematittel",
      slider: "Slider",
      others: "Andre",
    },
    editProperty: "Rediger verdi '{0}'",
    items: "[ Elementer: {0} ]",

    enterNewValue: "Vennligst fyll inn verdien.",
    noquestions: "Det er ingen spørsmål i skjemaet.",
    createtrigger: "Vennligst lag en trigger",
    titleKeyboardAdornerTip: "Trykk enter-tasten for å redigere",
    keyboardAdornerTip:
      "Trykk enter-tasten for å redigere elementet, trykk slette-tasten for å slette elementet, trykk Alt + pil opp/ned for å flytte elementet",
    triggerOn: "På ",
    triggerMakePagesVisible: "Gjør sider synlige:",
    triggerMakeQuestionsVisible: "Gjør elementer synlige:",
    triggerCompleteText: "Fullfør skjema dersom vellykket.",
    triggerNotSet: "Trigger er ikke satt",
    triggerRunIf: "Kjør dersom",
    triggerSetToName: "Endre verdien av: ",
    triggerFromName: "Kopier verdi fra: ",
    triggerRunExpression: "Kjør denne formelen:",
    triggerSetValue: "til: ",
    triggerGotoName: "Gå til spørsmål:",
    triggerIsVariable: "Ikke legg variabelen i resultatet.",
    triggerRunExpressionEmpty: "Vennligst fyll inn en gyldig formel",

    noFile: "Ingen fil valgt",
  },
  //Property values
  pv: {
    true: "true",
    false: "false",
    inherit: "inherit",
    show: "show",
    hide: "hide",
    default: "default",
    initial: "initial",
    random: "random",
    collapsed: "collapsed",
    expanded: "expanded",
    none: "none",
    asc: "ascending",
    desc: "descending",
    indeterminate: "indeterminate",
    decimal: "decimal",
    currency: "currency",
    percent: "percent",
    firstExpanded: "firstExpanded",
    off: "off",
    onPanel: "onPanel",
    onSurvey: "onSurvey",
    list: "list",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "top",
    bottom: "bottom",
    topBottom: "top and bottom",
    both: "both",
    left: "left",
    color: "color",
    date: "date",
    datetime: "datetime",
    "datetime-local": "datetime-local",
    email: "email",
    month: "month",
    number: "number",
    password: "password",
    range: "range",
    tel: "tel",
    text: "text",
    time: "time",
    url: "url",
    week: "week",
    hidden: "hidden",
    on: "on",
    onPage: "onPage",
    edit: "edit",
    display: "display",
    onComplete: "onComplete",
    onHidden: "onHidden",
    all: "all",
    page: "page",
    survey: "survey",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged",
    singlePage: "single page",
    standard: "standard",
    questionPerPage: "question per page",
    noPreview: "no preview",
    showAllQuestions: "show preview with all questions",
    showAnsweredQuestions: "show preview with answered questions",
  },
  //Operators
  op: {
    empty: "er tom",
    notempty: "er ikke tom",
    equal: "er lik",
    notequal: "er ikke lik",
    contains: "inneholder",
    notcontains: "inneholder ikke",
    anyof: "noen av",
    allof: "alle av",
    greater: "større enn",
    less: "mindre enn",
    greaterorequal: "større eller lik",
    lessorequal: "mindre eller lik",
    and: "og",
    or: "eller",
  },
  //Embed window
  ew: {
    angular: "Bruk Angular-versjon",
    jquery: "Bruk jQuery-versjon",
    knockout: "Bruk Knockout-versjon",
    react: "Bruk React-versjon",
    vue: "Bruk Vue-versjon",
    bootstrap: "For Bootstrap-rammeverk",
    standard: "Ikke Bootstrap",
    showOnPage: "Vis skjema på en side",
    showInWindow: "Vis skjema i et vindu",
    loadFromServer: "Last skjemadefinisjon som JSON fra server",
    titleScript: "Skript og stiler",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript",
  },
  //Preview (Survey)
  ts: {
    selectPage: "Velg side:",
    showInvisibleElements: "Vis usynlige elementer",
  },
  validators: {
    answercountvalidator: "antall svar",
    emailvalidator: "e-post",
    expressionvalidator: "formel",
    numericvalidator: "numerisk",
    regexvalidator: "regex",
    textvalidator: "tekst",
  },
  triggers: {
    completetrigger: "complete skjema",
    setvaluetrigger: "set value",
    copyvaluetrigger: "copy value",
    skiptrigger: "hopp til spørsmål",
    runexpressiontrigger: "kjør formel",
    visibletrigger: "endre synlighet (deprecated)",
  },
  //Properties
  p: {
    name: "name",
    title: {
      name: "title",
      title: "La den være tom, dersom den skal være samme som navnet",
    },

    navigationButtonsVisibility: "navigationButtonsVisibility",
    questionsOrder: "questionsOrder",
    maxTimeToFinish: "maxTimeToFinish",

    visible: "visible",
    visibleIf: "visibleIf",
    questionTitleLocation: "questionTitleLocation",
    description: "description",
    state: "state",
    isRequired: "isRequired",
    requiredIf: "requiredIf",
    indent: "indent",
    requiredErrorText: "requiredErrorText",
    startWithNewLine: "startWithNewLine",
    innerIndent: "innerIndent",
    page: "page",

    width: "width",

    commentText: "commentText",
    valueName: "valueName",
    enableIf: "enableIf",
    defaultValue: "defaultValue",
    correctAnswer: "correctAnswer",
    readOnly: "readOnly",
    validators: "validators",
    titleLocation: "titleLocation",

    hasComment: "hasComment",
    hasOther: "hasOther",
    choices: "choices",
    choicesOrder: "choicesOrder",
    choicesByUrl: "choicesByUrl",
    otherText: "otherText",
    otherErrorText: "otherErrorText",
    storeOthersAsComment: "storeOthersAsComment",

    label: "label",
    showTitle: "showTitle",
    valueTrue: "valueTrue",
    valueFalse: "valueFalse",

    cols: "cols",
    rows: "rows",
    placeHolder: "placeHolder",

    optionsCaption: "optionsCaption",

    expression: "expression",
    format: "format",
    displayStyle: "displayStyle",
    currency: "currency",
    useGrouping: "useGrouping",

    showPreview: "showPreview",
    allowMultiple: "allowMultiple",
    imageHeight: "imageHeight",
    imageWidth: "imageWidth",
    storeDataAsText: "storeDataAsText",
    maxSize: "maxSize",

    html: "html",

    columns: "columns",
    cells: "cells",
    isAllRowRequired: "isAllRowRequired",

    horizontalScroll: "horizontalScroll",
    cellType: "cellType",
    columnsLayout: "columnsLayout",
    columnColCount: "columnColCount",
    columnMinWidth: "columnMinWidth",

    rowCount: "rowCount",
    minRowCount: "minRowCount",
    maxRowCount: "maxRowCount",
    keyName: "keyName",
    keyDuplicationError: "keyDuplicationError",
    confirmDelete: "confirmDelete",
    confirmDeleteText: "confirmDeleteText",
    addRowLocation: "addRowLocation",
    addRowText: "addRowText",
    removeRowText: "removeRowText",

    items: "items",
    itemSize: "itemSize",
    colCount: "colCount",

    templateTitle: "templateTitle",
    templateDescription: "templateDescription",
    allowAddPanel: "allowAddPanel",
    allowRemovePanel: "allowRemovePanel",
    panelCount: "panelCount",
    minPanelCount: "minPanelCount",
    maxPanelCount: "maxPanelCount",
    panelsState: "panelsState",
    panelAddText: "panelAddText",
    panelRemoveText: "panelRemoveText",
    panelPrevText: "panelPrevText",
    panelNextText: "panelNextText",
    showQuestionNumbers: "showQuestionNumbers",
    showRangeInProgress: "showRangeInProgress",
    renderMode: "renderMode",
    templateTitleLocation: "templateTitleLocation",

    rateValues: "rateValues",
    rateMin: "rateMin",
    rateMax: "rateMax",
    rateStep: "rateStep",
    minRateDescription: "minRateDescription",
    maxRateDescription: "maxRateDescription",

    inputType: "inputType",
    size: "size",

    locale: "locale",
    focusFirstQuestionAutomatic: "focusFirstQuestionAutomatic",
    completedHtml: "completedHtml",
    completedBeforeHtml: "completedBeforeHtml",
    loadingHtml: "loadingHtml",
    triggers: "triggers",
    cookieName: "cookieName",
    sendResultOnPageNext: "sendResultOnPageNext",
    showNavigationButtons: "showNavigationButtons",
    showPrevButton: "showPrevButton",
    showPageTitles: "showPageTitles",
    showCompletedPage: "showCompletedPage",
    showPageNumbers: "showPageNumbers",
    questionErrorLocation: "questionErrorLocation",
    showProgressBar: "showProgressBar",
    mode: "mode",
    goNextPageAutomatic: "goNextPageAutomatic",
    checkErrorsMode: "checkErrorsMode",
    clearInvisibleValues: "clearInvisibleValues",
    startSurveyText: "startSurveyText",
    pagePrevText: "pagePrevText",
    pageNextText: "pageNextText",
    completeText: "completeText",
    requiredText: "requiredText",
    questionStartIndex: "questionStartIndex",
    questionTitleTemplate: "questionTitleTemplate",
    firstPageIsStarted: "firstPageIsStarted",
    isSinglePage: "isSinglePage",
    maxTimeToFinishPage: "maxTimeToFinishPage",
    showTimerPanel: "showTimerPanel",
    showTimerPanelMode: "showTimerPanelMode",

    defaultPanelValue: "defaultPanelValue",
    defaultRowValue: "defaultRowValue",
    hasNone: "hasNone",
    noneText: "noneText",

    text: "text",
  },
};
//Uncomment this line on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
editorLocalization.locales["nb"] = nbStrings;

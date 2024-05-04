import bcrypt from "bcryptjs";

export const categoryList = [
  {
    label: "Печі та пароконвектомати",
    category: "ovens",
    src: "/catalog/ovens",
    imageURL: "/images/productsCategoryImageURL/steamCombiOvens.jpg",
    subCategory: [
      {
        label: "Конвекційні печі",
        src: "/catalog/ovens/convectionOvens",
        imageURL: "/images/productsCategoryImageURL/convectionOvens.jpg",
      },
      {
        label: "Пароконвектомати",
        src: "/catalog/ovens/steamCombiOvens",
        imageURL: "/images/productsCategoryImageURL/steamCombiOvens.jpg",
      },
    ],
  },
  {
    label: "Теплове обладнання",
    category: "thermal",
    src: "/catalog/thermal",
    imageURL: "/images/productsCategoryImageURL/inductionPlates.jpg",
    subCategory: [
      {
        label: "Індукційні плити",
        src: "/catalog/thermal/inductionPlates",
        imageURL: "/images/productsCategoryImageURL/inductionPlates.jpg",
      },
      {
        label: "Печі для піци",
        src: "/catalog/thermal/pizzaOvens",
        imageURL: "/images/productsCategoryImageURL/pizzaOvens.jpg",
      },
      {
        label: "Апарати Sous-Vide",
        src: "/catalog/thermal/sousVideDevices",
        imageURL: "/images/productsCategoryImageURL/sousVideDevices.jpg",
      },
      {
        label: "Грилі контактні професійні",
        src: "/catalog/thermal/contactGrills",
        imageURL: "/images/productsCategoryImageURL/contactGrills.jpg",
      },
      {
        label: "Фритюрниці професійні",
        src: "/catalog/thermal/fryers",
        imageURL: "/images/productsCategoryImageURL/fryers.jpg",
      },
      {
        label: "Рисоварки професійні",
        src: "/catalog/thermal/riceCookers",
        imageURL: "/images/productsCategoryImageURL/riceCookers.jpg",
      },
      {
        label: "Грилі для шаурми",
        src: "/catalog/thermal/shawarmaGrills",
        imageURL: "/images/productsCategoryImageURL/shawarmaGrills.jpg",
      },
      {
        label: "Макароноварки",
        src: "/catalog/thermal/pastaCookers",
        imageURL: "/images/productsCategoryImageURL/pastaCookers.jpg",
      },
      {
        label: "Розстійні шафи",
        src: "/catalog/thermal/spaceSavingCabinets",
        imageURL: "/images/productsCategoryImageURL/spaceSavingCabinets.jpg",
      },
      {
        label: "Роликові грилі",
        src: "/catalog/thermal/rollerGrills",
        imageURL: "/images/productsCategoryImageURL/rollerGrills.jpg",
      },
      {
        label: "Підігрівачі настільні",
        src: "/catalog/thermal/tableHeaters",
        imageURL: "/images/productsCategoryImageURL/tableHeaters.jpg",
      },
      {
        label: "Електричні плити промислові",
        src: "/catalog/thermal/electricStoves",
        imageURL: "/images/productsCategoryImageURL/electricStoves.jpg",
      },
      {
        label: "Газові плити професійні",
        src: "/catalog/thermal/gasStoves",
        imageURL: "/images/productsCategoryImageURL/gasStoves.jpg",
      },
      {
        label: "Печі на вугіллі та дровах",
        src: "/catalog/thermal/coalAndWoodStoves",
        imageURL: "/images/productsCategoryImageURL/coalAndWoodStoves.jpg",
      },
      {
        label: "Дров'яні печі для піци",
        src: "/catalog/thermal/woodOvensForPizza",
        imageURL: "/images/productsCategoryImageURL/woodOvensForPizza.jpg",
      },
      {
        label: "Поверхні для смаження",
        src: "/catalog/thermal/surfacesForFrying",
        imageURL: "/images/productsCategoryImageURL/surfacesForFrying.jpg",
      },
      {
        label: "Вапо-грилі",
        src: "/catalog/thermal/vapoGrills",
        imageURL: "/images/productsCategoryImageURL/vapoGrills.jpg",
      },
      {
        label: "Теплові вітрини",
        src: "/catalog/thermal/thermalShowcases",
        imageURL: "/images/productsCategoryImageURL/thermalShowcases.jpg",
      },
      {
        label: "Грилі Salamandra",
        src: "/catalog/thermal/salamandraGrills",
        imageURL: "/images/productsCategoryImageURL/salamandraGrills.jpg",
      },
      {
        label: "Вафельниці професійні",
        src: "/catalog/thermal/waffleMakers",
        imageURL: "/images/productsCategoryImageURL/waffleMakers.jpg",
      },
      {
        label: "Дегідратори",
        src: "/catalog/thermal/dehydrators",
        imageURL: "/images/productsCategoryImageURL/dehydrators.jpg",
      },
      {
        label: "Котли варочні",
        src: "/catalog/thermal/cookingBoilers",
        imageURL: "/images/productsCategoryImageURL/cookingBoilers.jpg",
      },
      {
        label: "Марміти",
        src: "/catalog/thermal/marmite",
        imageURL: "/images/productsCategoryImageURL/marmite.jpg",
      },
      {
        label: "Паназійська кухня",
        src: "/catalog/thermal/panAsianCuisine",
        imageURL: "/images/productsCategoryImageURL/panAsianCuisine.jpg",
      },
      {
        label: "Грилі лавові",
        src: "/catalog/thermal/lavaGrills",
        imageURL: "/images/productsCategoryImageURL/lavaGrills.jpg",
      },
      {
        label: "Печі мікрохвильові професійні",
        src: "/catalog/thermal/microwaveOvens",
        imageURL: "/images/productsCategoryImageURL/microwaveOvens.jpg",
      },
      {
        label: "Апарати для попкорну",
        src: "/catalog/thermal/popcornMachines",
        imageURL: "/images/productsCategoryImageURL/popcornMachines.jpg",
      },
      {
        label: "Апарати для солодкої вати",
        src: "/catalog/thermal/apparatusForCottonCandy",
        imageURL:
          "/images/productsCategoryImageURL/apparatusForCottonCandy.jpg",
      },
      {
        label: "Сковороди перекидні",
        src: "/catalog/thermal/flipPans",
        imageURL: "/images/productsCategoryImageURL/flipPans.jpg",
      },
      {
        label: "Тостери професійні",
        src: "/catalog/thermal/toasters",
        imageURL: "/images/productsCategoryImageURL/toasters.jpg",
      },
    ],
  },
  {
    label: "Холодильне обладнання",
    category: "refrigeration",
    src: "/catalog/refrigeration",
    imageURL:
      "/images/productsCategoryImageURL/refrigeratorsAndFreezersTables.jpg",
    subCategory: [
      {
        label: "Холодильні та морозильні шафи",
        src: "/catalog/refrigeration/refrigerators",
        imageURL:
          "/images/productsCategoryImageURL/refrigeratorsAndFreezers.jpg",
      },
      {
        label: "Холодильні та морозильні столи",
        src: "/catalog/refrigeration/tables",
        imageURL:
          "/images/productsCategoryImageURL/refrigeratorsAndFreezersTables.jpg",
      },
      {
        label: "Шафи шокової заморозки",
        src: "/catalog/refrigeration/shockFreezing",
        imageURL:
          "/images/productsCategoryImageURL/cabinetsOfShockFreezing.jpg",
      },
      {
        label: "Саладети",
        src: "/catalog/refrigeration/salads",
        imageURL: "/images/productsCategoryImageURL/salads.jpg",
      },
      {
        label: "Льодогенератори",
        src: "/catalog/refrigeration/iceMakers",
        imageURL: "/images/productsCategoryImageURL/iceMakers.jpg",
      },
      {
        label: "Барні холодильники",
        src: "/catalog/refrigeration/barFridges",
        imageURL: "/images/productsCategoryImageURL/barFridges.jpg",
      },
      {
        label: "Шафи для вина",
        src: "/catalog/refrigeration/wineCabinets",
        imageURL: "/images/productsCategoryImageURL/wineCabinets.jpg",
      },
      {
        label: "Кондитерські вітрини",
        src: "/catalog/refrigeration/showcases",
        imageURL: "/images/productsCategoryImageURL/confectioneryShowcases.jpg",
      },
      {
        label: "Холодильні вітрини настільні",
        src: "/catalog/refrigeration/showcasesTabletop",
        imageURL:
          "/images/productsCategoryImageURL/refrigeratedShowcasesTabletop.jpg",
      },
      {
        label: "Холодильні вітрини-надставки",
        src: "/catalog/refrigeration/showcasesExtensions",
        imageURL:
          "/images/productsCategoryImageURL/refrigeratedShowcasesExtensions.jpg",
      },
      {
        label: "Апарати для виготовлення морозива",
        src: "/catalog/refrigeration/iceCreamMachines",
        imageURL: "/images/productsCategoryImageURL/iceCreamMachines.jpg",
      },
    ],
  },
  {
    label: "Електромеханічне обладнання",
    category: "electromechanicalEquipment",
    src: "/catalog/electromechanicalEquipment",
    imageURL: "/images/productsCategoryImageURL/doughMixers.jpg",
    subCategory: [
      {
        label: "М'ясорубки промислові",
        src: "/catalog/electromechanicalEquipment/meatGrindersIndustrial",
        imageURL: "/images/productsCategoryImageURL/meatGrindersIndustrial.jpg",
      },
      {
        label: "Тістоміси промислові",
        src: "/catalog/electromechanicalEquipment/doughMixers",
        imageURL: "/images/productsCategoryImageURL/doughMixers.jpg",
      },
      {
        label: "Слайсери промислові",
        src: "/catalog/electromechanicalEquipment/slicers",
        imageURL: "/images/productsCategoryImageURL/slicers.jpg",
      },
      {
        label: "Овочерізки професійні",
        src: "/catalog/electromechanicalEquipment/vegetableChopper",
        imageURL: "/images/productsCategoryImageURL/vegetableChopper.jpg",
      },
      {
        label: "Планетарні міксери",
        src: "/catalog/electromechanicalEquipment/planetaryMixers",
        imageURL: "/images/productsCategoryImageURL/planetaryMixers.jpg",
      },
      {
        label: "Ручні міксери професійні",
        src: "/catalog/electromechanicalEquipment/handMixers",
        imageURL: "/images/productsCategoryImageURL/handMixers.jpg",
      },
      {
        label: "Кутери професійні",
        src: "/catalog/electromechanicalEquipment/cutters",
        imageURL: "/images/productsCategoryImageURL/cutters.jpg",
      },
      {
        label: "Картоплечистки промислові",
        src: "/catalog/electromechanicalEquipment/potatoPeelers",
        imageURL: "/images/productsCategoryImageURL/potatoPeelers.jpg",
      },
      {
        label: "Тісторозкаточні машини",
        src: "/catalog/electromechanicalEquipment/doughRoMachines",
        imageURL: "/images/productsCategoryImageURL/doughRoMachines.jpg",
      },
      {
        label: "Преси для піци та гамбургерів",
        src: "/catalog/electromechanicalEquipment/pizzaAndHamburgerPresses",
        imageURL:
          "/images/productsCategoryImageURL/pizzaAndHamburgerPresses.jpg",
      },
      {
        label: "Шприці ковбасні",
        src: "/catalog/electromechanicalEquipment/sausageSyringes",
        imageURL: "/images/productsCategoryImageURL/sausageSyringes.jpg",
      },
      {
        label: "Пили для м'яса",
        src: "/catalog/electromechanicalEquipment/meatSaw",
        imageURL: "/images/productsCategoryImageURL/meatSaw.jpg",
      },
      {
        label: "Подрібнювачі спецій",
        src: "/catalog/electromechanicalEquipment/spiceGrinders",
        imageURL: "/images/productsCategoryImageURL/spiceGrinders.jpg",
      },
      {
        label: "Подрібнювачі відходів",
        src: "/catalog/electromechanicalEquipment/wasteShredders",
        imageURL: "/images/productsCategoryImageURL/wasteShredders.jpg",
      },
      {
        label: "Хліборізки промислові",
        src: "/catalog/electromechanicalEquipment/breadCutters",
        imageURL: "/images/productsCategoryImageURL/breadCutters.jpg",
      },
      {
        label: "Фаршемішалки",
        src: "/catalog/electromechanicalEquipment/meatGrinders",
        imageURL: "/images/productsCategoryImageURL/meatGrinders.jpg",
      },
    ],
  },
  {
    label: "Пакувальне обладнання",
    category: "packagingEquipment",
    src: "/catalog/packagingEquipment",
    imageURL: "/images/productsCategoryImageURL/vacuumPackers.jpg",
    subCategory: [
      {
        label: "Вакуумні пакувальники",
        src: "/catalog/packagingEquipment/vacuumPackers",
        imageURL: "/images/productsCategoryImageURL/vacuumPackers.jpg",
      },
      {
        label: "Апарати термопакувальні",
        src: "/catalog/packagingEquipment/thermalPackaging",
        imageURL: "/images/productsCategoryImageURL/thermalPackaging.jpg",
      },
    ],
  },
  {
    label: "Посудомийне обладнання",
    category: "dishwasher",
    src: "/catalog/dishwasher",
    imageURL: "/images/productsCategoryImageURL/tunnelDishwashers.jpg",
    subCategory: [
      {
        label: "Тунельні посудомийні машини",
        src: "/catalog/dishwasher/tunnelDishwashers",
        imageURL: "/images/productsCategoryImageURL/tunnelDishwashers.jpg",
      },
      {
        label: "Фронтальні посудомийні машини",
        src: "/catalog/dishwasher/frontDishwashers",
        imageURL: "/images/productsCategoryImageURL/frontDishwashers.jpg",
      },
      {
        label: "Купольні посудомийні машини",
        src: "/catalog/dishwasher/domeDishwashers",
        imageURL: "/images/productsCategoryImageURL/domeDishwashers.jpg",
      },
      {
        label: "Котломийні машини",
        src: "/catalog/dishwasher/boilerWashingMachines",
        imageURL: "/images/productsCategoryImageURL/boilerWashingMachines.jpg",
      },
      {
        label: "Фільтри для води",
        src: "/catalog/dishwasher/filtersForWater",
        imageURL: "/images/productsCategoryImageURL/filtersForWater.jpg",
      },
    ],
  },
  {
    label: "Обладнання для барів",
    category: "barsEquipment",
    src: "/catalog/barsEquipment",
    imageURL: "/images/productsCategoryImageURL/coffeeMachines.jpg",
    subCategory: [
      {
        label: "Блендери професійні",
        src: "/catalog/barsEquipment/blenders",
        imageURL: "/images/productsCategoryImageURL/blenders.jpg",
      },
      {
        label: "Соковитискалки",
        src: "/catalog/barsEquipment/juicers",
        imageURL: "/images/productsCategoryImageURL/juicers.jpg",
      },
      {
        label: "Кавомашини професійні",
        src: "/catalog/barsEquipment/coffeeMachines",
        imageURL: "/images/productsCategoryImageURL/coffeeMachines.jpg",
      },
      {
        label: "Подрібнювачі льоду",
        src: "/catalog/barsEquipment/iceCrushers",
        imageURL: "/images/productsCategoryImageURL/iceCrushers.jpg",
      },
      {
        label: "Електрокип'ятильники",
        src: "/catalog/barsEquipment/electricBoilers",
        imageURL: "/images/productsCategoryImageURL/electricBoilers.jpg",
      },
      {
        label: "Кавомолки професійні",
        src: "/catalog/barsEquipment/coffeeGrinders",
        imageURL: "/images/productsCategoryImageURL/coffeeGrinders.jpg",
      },
      {
        label: "Міксери для молочних коктейлей",
        src: "/catalog/barsEquipment/milkshakesMixers",
        imageURL: "/images/productsCategoryImageURL/milkshakesMixers.jpg",
      },
    ],
  },
  {
    label: "Обладнання для пралень",
    category: "laundryEquipment",
    src: "/catalog/laundryEquipment",
    imageURL: "/images/productsCategoryImageURL/ironingEquipment.jpg",
    subCategory: [
      {
        label: "Пральні машини промислові",
        src: "/catalog/laundryEquipment/washingMachines",
        imageURL: "/images/productsCategoryImageURL/washingMachines.jpg",
      },
      {
        label: "Сушильні машини промислові",
        src: "/catalog/laundryEquipment/dryers",
        imageURL: "/images/productsCategoryImageURL/dryers.jpg",
      },
      {
        label: "Прасувальні машини",
        src: "/catalog/laundryEquipment/ironingMachines",
        imageURL: "/images/productsCategoryImageURL/ironingMachines.jpg",
      },
      {
        label: "Прасувальне обладнання",
        src: "/catalog/laundryEquipment/ironingEquipment",
        imageURL: "/images/productsCategoryImageURL/ironingEquipment.jpg",
      },
    ],
  },
  {
    label: "Обладнання для пекарень",
    category: "bakeriesEquipment",
    src: "/catalog/bakeriesEquipment",
    imageURL: "/images/productsCategoryImageURL/rotaryOvens.jpg",
    subCategory: [
      {
        label: "Печі ротаційні",
        src: "/catalog/bakeriesEquipment/rotaryOvens",
        imageURL: "/images/productsCategoryImageURL/rotaryOvens.jpg",
      },
      {
        label: "Печі подові",
        src: "/catalog/bakeriesEquipment/podOvens",
        imageURL: "/images/productsCategoryImageURL/podOvens.jpg",
      },
      {
        label: "Камери розстійні",
        src: "/catalog/bakeriesEquipment/spacedCameras",
        imageURL: "/images/productsCategoryImageURL/spacedCameras.jpg",
      },
      {
        label: "Планетарні міксери пекарські",
        src: "/catalog/bakeriesEquipment/bakeryMixers",
        imageURL: "/images/productsCategoryImageURL/bakeryMixers.jpg",
      },
      {
        label: "Тістоміси пекарські",
        src: "/catalog/bakeriesEquipment/bakingDoughBowls",
        imageURL: "/images/productsCategoryImageURL/bakingDoughBowls.jpg",
      },
      {
        label: "Тісторозкатки пекарські",
        src: "/catalog/bakeriesEquipment/bakingDoughRolls",
        imageURL: "/images/productsCategoryImageURL/bakingDoughRolls.jpg",
      },
      {
        label: "Тісторозподілювачі пекарські",
        src: "/catalog/bakeriesEquipment/bakeryDoughDividers",
        imageURL: "/images/productsCategoryImageURL/bakeryDoughDividers.jpg",
      },
      {
        label: "Багетоформувальники пекарськi",
        src: "/catalog/bakeriesEquipment/bakerBaguetteFormers",
        imageURL: "/images/productsCategoryImageURL/bakerBaguetteFormers.jpg",
      },
      {
        label: "Ферментатори пекарськi",
        src: "/catalog/bakeriesEquipment/bakeryFermenters",
        imageURL: "/images/productsCategoryImageURL/bakeryFermenters.jpg",
      },
    ],
  },
  {
    label: "Обладнання для м'ясного цеху",
    category: "meatShopEquipment",
    src: "/catalog/meatShopEquipment",
    imageURL: "/images/productsCategoryImageURL/meatMixers.jpg",
    subCategory: [
      {
        label: "М'ясорубки виробничі",
        src: "/catalog/meatShopEquipment/meatGrinders2",
        imageURL: "/images/productsCategoryImageURL/meatGrinders2.jpg",
      },
      {
        label: "Слайсери виробничі",
        src: "/catalog/meatShopEquipment/slicersIndustrial",
        imageURL: "/images/productsCategoryImageURL/slicersIndustrial.jpg",
      },
      {
        label: "Фаршемiшалки виробничі",
        src: "/catalog/meatShopEquipment/meatMixers",
        imageURL: "/images/productsCategoryImageURL/meatMixers.jpg",
      },
      {
        label: "Подрібнювачі м'яса виробничі",
        src: "/catalog/meatShopEquipment/meatGrindersIndustrial2",
        imageURL:
          "/images/productsCategoryImageURL/meatGrindersIndustrial2.jpg",
      },
      {
        label: "Пили для різки м'яса виробничі",
        src: "/catalog/meatShopEquipment/cuttingMeatSaws",
        imageURL: "/images/productsCategoryImageURL/cuttingMeatSaws.jpg",
      },
      {
        label: "Стерилізатори для ножів",
        src: "/catalog/meatShopEquipment/knivesSterilizers",
        imageURL: "/images/productsCategoryImageURL/knivesSterilizers.jpg",
      },
      {
        label: "Інсектицидні лампи",
        src: "/catalog/meatShopEquipment/insecticidalLamps",
        imageURL: "/images/productsCategoryImageURL/insecticidalLamps.jpg",
      },
      {
        label: "Розрихлювач для м'яса",
        src: "/catalog/meatShopEquipment/meatTenderizer",
        imageURL: "/images/productsCategoryImageURL/meatTenderizer.jpg",
      },
      {
        label: "Шприцi ковбаснi виробничі",
        src: "/catalog/meatShopEquipment/sausageSyringesIndustrial",
        imageURL:
          "/images/productsCategoryImageURL/sausageSyringesIndustrial.jpg",
      },
      {
        label: "Вакууматори виробничі",
        src: "/catalog/meatShopEquipment/vacuumators",
        imageURL: "/images/productsCategoryImageURL/vacuumators.jpg",
      },
    ],
  },
];

const data = {
  users: [
    {
      name: "Admin",
      email: "test@test.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
  ],
  products: [
    {
      category: "Пароконвектомати",
      name: "Пароконвектомат Apach AP20QT",
      slug: "apach-ap20qt",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714486879/Brands/apach-ap20qt_k6xwcw.jpg",
      price: 506346,
      brand: "Apach (Італія)",
      description:
        "Піч пароконвекційна на 20 рівнів ( на 20 гастроємностей типу GN 1/1, з відстанню 70 мм). У комплекті вкатний візок з направляючими GN 1/1. Сенсорний рідкокришталевий дисплей із діагоналлю 5-дюймів. 3 робочі режимами: пар, гаряче повітря, комбінований режим. Передбачена можливість збереження до 120 програм, 40 з них встановлені, 80 вільні для запису. Кожна програма може містити до 6 етапів приготування. Авто реверс, 2 швидкості обертання, тормощуп, USB порт. Функції: попередній нагрів; multilevel; All in; All out; Delta T; регенерація; расстойка; відкладений старт; швидке охолодження камери. 2 програми автоматичної мийки, програма ополіскування без миючого  асобу. Регулювання витяжки за допомогою повітряного клапана з електроприводом. Вбудоване в двері світлодіодне підсвічування. 380В. Споживана потужність: 28.5кВт. Габарити: 1051*938*1900мм.",
    },
    {
      category: "Пароконвектомати",
      name: "Пароконвектомат APACH AP10QT",
      slug: "apach-ap10qt",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714820701/apach-ap10qt_tgwc5q.jpg",
      price: 259787,
      brand: "Apach (Італія)",
      description:
        "Піч пароконвекційна на 10 рівнів (універсальні на 10 гастроємностей типу GN 1/1 або 600*400). Сенсорний рідкокристалічний дисплей із діагоналлю 5-дюймів. 3 робочі режимами: пар, гаряче повітря, комбінований режим. 5 робочих підрежимів: пар + гаряче повітря, контроль вологості, температурний зонд, регулювання швидкостей вентилятору, авто реверс. Спеціальні цикли: multilevel mix, регенерація, нічне приготування, охолодження камери. 120 програм, кожна з яких має етап попереднього нагріву та три етапи подальшого приготування. Запис програм приготування страв до пам’яті печі через USB-інтерфейс. Автоматична система мийки. Тип парозволоження: інжекторний. Габарити: 937*827*1211 мм. Потужніть: 15.7 кВт. Напруга/частота: 380 В - 3N/50-60. Вага: 135 кг.",
    },
    {
      category: "Пароконвектомати",
      name: "Пароконвектомат APACH AP7QT",
      slug: "apach-ap7qt",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714820681/apach-ap7qt_iiavug.jpg",
      price: 202033,
      brand: "Apach (Італія)",
      description:
        "Піч пароконвекційна на 7 рівнів (універсальні на 7 гастроємностей типу GN 1/1 або 600*400). Сенсорний рідкокришталічний дисплей із діагоналлю 5-дюймів. 3 робочі режимами: пар, гаряче повітря, комбінований режим. 5 робочих підрежимів: пар + гаряче повітря, контроль вологості, температурний зонд, регулювання швидкостей вентилятору, авто реверс. Спеціальні цикли: multilevel mix, регенерація, нічне приготування, охолодження камери. 120 програм, кожна з яких має етап попереднього нагріву та три етапи подальшого приготування. Запис програм приготування страв до пам’яті печі через USB-інтерфейс. Автоматична система мийки. Габарити: 937*821*875 мм. Потужність: 10.5 кВт. Напруга/частота: 380 В - 3N/50-60. Вага: 117 кг.",
    },
    {
      category: "Пароконвектомати",
      name: "Пароконвектомат APACH AP5QT",
      slug: "apach-ap5qt",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714820660/apach-ap5qt_qloaqs.jpg",
      price: 179060,
      brand: "Apach (Італія)",
      description:
        "Піч пароконвекційна на 5 рівнів (універсальні на 5 гастроємностей типу GN 1/1 або 600*400). Сенсорний рідкокристалічний дисплей із діагоналлю 5-дюймів. 3 робочі режими: пар, гаряче повітря, комбінований режим. 5 робочих підрежимів: пар + гаряче повітря, контроль вологості, термощуп, регулювання швидкостей вентилятора, авто реверс. Спеціальні цикли: multilevel mix, регенерація, нічне приготування, охолодження камери. 120 програм, кожна з яких має етап попереднього нагріву та три етапи подальшого приготування. Запис програм приготування страв у піч через USB-інтерфейс. Автоматична система миття. Габарити: 937х821х715 мм. Потужність: 10.5 кВт. Напруга/частота: 380 В - 3N/50-60. Вага: 89 кг.",
    },
    {
      category: "Пароконвектомати",
      name: "Пароконвектомат TATRA TPI 07 M.V",
      slug: "tatra-tpi07mv",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714820722/tatra-tpi07mv_hmoel1.jpg",
      price: 106277,
      brand: "Tatra (Туреччина)",
      description:
        "Пароконвектомат на 7 рівнів. Тип направляючих: GN 1/1. Відстань між направляючими: 7*67 мм. Пароконвектомат з електроним управлінням. Інжекторне парозволоження. Реверс вентиляторів. Кількість вентиляторів: 2 од. Швидкість: 1. Максимальна температура 280°С. Габарити: 817*883*972 мм. Підключення: 10.5 кВт, 230/380 В. Вага: 98 кг.",
    },
    {
      category: "Пароконвектомати",
      name: "Пароконвектомат TATRA TPI 10 M.V",
      slug: "tatra-tpi10mv",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714820746/tatra-tpi10mv_lswotd.jpg",
      price: 149302,
      brand: "Tatra (Туреччина)",
      description:
        "Пароконвектомат на 10 рівнів. Тип пароутворення: інжекторний. Кількість вентиляторів: 3. Кількість швидкостей вентилятора: 1. Температура приготування: +30...+280 °C. Матеріал варильної камери: AISI304 нержавіюча сталь. Відкриття дверей: ручка праворуч. Зволоження: пряме впорскування. Відстань між рівнями: 80 мм. Реверс вентиляторів: в наявності. Механічне керування: так. Тип гастроємностей: GN 1/1 та противні 600*400 мм. Максимальне навантаження на полку: 4 кг. Вхід води для зволоження: 3/4” M. Злив води: 30 мм. Максимальна жорсткість води: 5°f. Необхідний тиск води min-max: 150-200 кПа. Максимальна витрата: 22.4 л/год. Парозволоження з можливістю підключення до водогону: так. Потужність: 15.5 кВт. Частота: 50/60 Гц. Підключення до мережі: 220 / 380-415 В 3N ~. Сила струму: 25.2 А. Необхідний шнур живлення: 5G4. Габарити: 817*888*1308 мм. Вага одиниці: 128 кг.",
    },
    {
      category: "Конвекційні печі",
      name: "Піч конвекційна APACH AP10QM",
      slug: "apach-ap10qm",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714487292/Brands/apach-ap10qm_njgfgh.jpg",
      price: 196888,
      brand: "Apach (Італія)",
      description:
        "Піч конвекційна: 10 рівнів. Тип направляючих: GN 1/1 + 600x400. Піч конвекційна з механічним управлінням. Інжекторне парозволоження. Реверс вентиляторів. Тип вентиляторів: турбіна. В комплекті 4 дека. Відстань між направляючими: 80 мм. Діапазон температур: 30-280°С. Габарити: 937*827*1211мм. Підключення: 15.7кВт, 380В.",
    },
    {
      category: "Індукційні плити",
      name: "Плита індукційна HURAKAN HKN-D35FX4S PRO",
      slug: "hurakan-hkn-d35fx4s-pro",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714487710/Brands/hurakan-hkn-d35fx4s-pro_hao5t1.jpg",
      price: 44424,
      brand: "Hurakan (Китай)",
      description:
        "Кількість конфорок: 4. Матеріал корпусу: нержавіюча сталь. Температурний режим: +60...240 °С. 4 зони нагріву. Захист від перегріву. Без шнура живлення. Тип управління: цифрове з джойстиком. Габарити:792*900*170 (911) мм. Підключення: 14кВт, 380В. Вага: 40.85кг.",
    },
    {
      category: "Печі для піци",
      name: "Піч для піци APACH AML44X",
      slug: "apach-aml44x",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714488139/Brands/apach-aml44x_xgpwya.jpg",
      price: 75089,
      brand: "Apach (Італія)",
      description:
        "Місткість: піци 4 + 4. Діаметр піци (см): 36. Розміри камери (ш*г*в): 720*720x140мм. Зовнішні розміри (ш*г*в): 1010*850*750мм. Напруга (В/Гц) 400/50 В/Гц. Потужність 12кВт. Робоча температура 50-500°С. Маса 165 кг.",
    },
    {
      category: "Апарати Sous-Vide",
      name: "Апарат низькотемпературного приготування SIRMAN SOFTCOOKER XP",
      slug: "sirman-softcooker-xp",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714488525/Brands/sirman-softcooker-xp_lpxshm.jpg",
      price: 38386,
      brand: "Sirman (Італія)",
      description:
        "Апарат Су-Від. Максимальна робоча глибина - 16.5 см. Оптимальний робочий об'єм - 50 літрів. Автоматичне відключення при /холостому/ використанні. Циркуляційна помпа забезпечує задану температуру по всьому об'єму. Автоматичний захист від перевантаження і перегріву. Захист структури з нержавіючої сталі по рейтингу IP X3. Зажим для закріплення ємності . 20 програм налаштування (замість 8 попередніх). Нова панель керування (кнопка Eco замінена кнопкою Display). Можливість врегулювати відкладений старт. Робоча температура 20-95C. Габаритні розміри 130*260*380 мм. Напруга 220В. Потужність 2.2кВт. Вага нетто 4.5 кг.",
    },
    {
      category: "Апарати Sous-Vide",
      name: "Апарат низькотемпературного приготування HURAKAN HKN-SV40",
      slug: "hurakan-hkn-sv40",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714488836/Brands/hurakan-hkn-sv40_drnyuc.jpg",
      price: 17683,
      brand: "Hurakan (Китай)",
      description:
        "Робоча температура: 25-90 °С. Оптимальний робочий об'єм: 40 л. Цифрова панель управління. РК-дисплей. Універсальне кріплення. Габарити: 150*70*340мм. Підключення: 1.5кВт, 220В. Вага: 4.1кг.",
    },
    {
      category: "Грилі контактні професійні",
      name: "Гриль контактний HURAKAN HKN-PE22R одинарний ребро",
      slug: "hurakan-hkn-pe22r",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714489318/Brands/hurakan-hkn-pe22r_vgldkc.jpg",
      price: 5391,
      brand: "Hurakan (Китай)",
      description:
        "Розмір верхньої поверхні 215*215 мм. Розмір нижньої поверхні 220*230 мм. Робочі поверхні з чавуну, вкритого емаллю. Тип робочих поверхонь: рифлені. Матеріал корпусу: нержавіюча сталь. Діапазон температур від 50 до 300 ° С. Габарити: 310*370*210мм. Підключення: 1.8 кВт, 220 В. Вага: 14.2 кг.",
    },
    {
      category: "Грилі контактні професійні",
      name: "Гриль контактний HURAKAN HKN-PE34R одинарний ребро",
      slug: "hurakan-hkn-pe34r",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714489595/Brands/hurakan-hkn-pe34r_jzlyyu.jpg",
      price: 6901,
      brand: "Hurakan (Китай)",
      description:
        "Розмір верхньої поверхні 340*220 мм. Розмір нижньої поверхні 340*230 мм. Робочі поверхні з чавуну, вкритого емаллю. Тип робочих поверхонь: рифлені. Матеріал корпусу: нержавіюча сталь. Діапазон температур від 50 до 300 ° С. Габарити: 430*370х210мм. Підключення: 2.2 кВт, 220 В. Вага: 20 кг.",
    },
    {
      category: "Грилі контактні професійні",
      name: "Гриль контактний HURAKAN HKN-PE44R ПОДВІЙНИЙ РЕБРО",
      slug: "hurakan-hkn-pe44r",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714489825/Brands/hurakan-hkn-pe44r_evs6sc.jpg",
      price: 14664,
      brand: "Hurakan (Китай)",
      description:
        "Розмір верхньої поверхні: 2*215*215 мм. Розмір нижньої поверхні: 475*230 мм. Робочі поверхні з чавуну, вкритого емаллю. Тип робочих поверхонь: рифлені. Діапазон температур від 50 до 300 °С. Матеріал корпусу: нержавіюча сталь. Габарити: 570*370*210мм. Підключення: 3.6 кВт, 220 В. Вага: 27.2 кг.",
    },
    {
      category: "Грилі контактні професійні",
      name: "Гриль контактний TATRA EMP.102",
      slug: "tatra-emp-102",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714490177/Brands/tatra-emp-102_g3x8jh.jpg",
      price: 27344,
      brand: "Tatra (Туреччина)",
      description:
        "Габарити: 540*300*210мм. Вага 33 кг. Розмір робочої поверхні 500*24.5 мм. Потужність 1.95кВт. Енергія 220 В 50 Гц. Може працювати як гриль. Гігієнічно і безпечно. Корпус з нержавіючої сталі.",
    },
    {
      category: "Грилі контактні професійні",
      name: "Гриль контактний TATRA ATM-2745",
      slug: "tatra-atm-2745",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714490439/Brands/tatra-atm-2745_gtq9c0.jpg",
      price: 24239,
      brand: "Tatra (Туреччина)",
      description:
        "Гриль контактний. Розміри 510*500*300мм. Вага 31 кг. Розмір робочої поверхні 450*270мм. Потужність 3кВт. Напруга 230В.",
    },
    {
      category: "Грилі контактні професійні",
      name: "Гриль SIRMAN ELIO R прижимний",
      slug: "sirman-elio-r",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714490855/Brands/sirman-elio-r_n40ugq.jpg",
      price: 18330,
      brand: "Sirman (Італія)",
      description:
        "Гриль прижимний електричний. Кількість робочих поверхонь: 1, форма поверхні - рифлена. Корисна площа робочої поверхні 250*255мм, матеріал - чавун. Габарити моделі (ш*г*в): 260*435*235мм. Вага 16кг. Потужність 1.55кВт. Електрична мережа: однофазна, 220В, 50Гц.",
    },
    {
      category: "Грилі контактні професійні",
      name: "Гриль SIRMAN ELIO L прижимний",
      slug: "sirman-elio-l",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714491013/Brands/sirman-elio-l_jvat6p.jpg",
      price: 18330,
      brand: "Sirman (Італія)",
      description:
        "Гриль прижимний електричний. Кількість робочих поверхонь: 1, форма поверхні - рифлена. Корисна площа робочої поверхні 250*255 мм, матеріал - чавун. Габарити моделі (ш*г*в): 260*435*235мм. Вага 16 кг. Потужність 1.55 кВт. Електрична мережа: однофазна, 220 В, 50 Гц.",
    },
    {
      category: "Грилі контактні професійні",
      name: "Гриль SIRMAN CORT L прижимний",
      slug: "sirman-cort-l",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714491344/Brands/sirman-cort-l_uwlnxl.jpg",
      price: 23075,
      brand: "Sirman (Італія)",
      description:
        "Гриль притискний електричний. Кількість робочих поверхонь: 1. Поверхня: комбінована. Корисна площа робочої поверхні: 355*255мм. Матеріал: чавун. Габарити моделі (ш*г*в): 380*435*235мм. Потужність: 2.1кВт. Електрична мережа: однофазна, 220В, 50Гц. Вага: 22кг.",
    },
    {
      category: "Грилі контактні професійні",
      name: "Гриль SIRMAN CORT R прижимний",
      slug: "sirman-cort-r",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714491595/Brands/sirman-cort-r_onk1ol.jpg",
      price: 23075,
      brand: "Sirman (Італія)",
      description:
        "Гриль прижимний електричний. Кількість робочих поверхонь: 1. Форма поверхні - рифлена. Корисна площа робочої поверхні 355*255мм. Матеріал - чавун. Габарити моделі (ш*г*в): 380*435*235мм. Потужність 2.1кВт. Електрична мережа: однофазна, 220В, 50Гц . Вага 22кг.",
    },
    {
      category: "Грилі контактні професійні",
      name: "Гриль SIRMAN PD LR-RR прижимний",
      slug: "sirman-pd-lr-rr",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714491861/Brands/sirman-pd-lr-rr_tzuab9.jpg",
      price: 32779,
      brand: "Sirman (Італія)",
      description:
        "Гриль прижимний електричний. Кількість робочих поверхонь: 2. Форма поверхні: рифлена/гладка. Корисна площа робочої поверхні: 500*255мм. Матеріал: чавун. Габарити моделі (ш*г*в): 515*435*235мм. Вага: 28кг. Потужність: 3кВт. Електрична мережа: однофазна, 220В, 50Гц.",
    },
    {
      category: "Блендери професійні",
      name: "Блендер CEADO В185",
      slug: "ceado-b185",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714724545/ceado-b185_wsjnfc.jpg",
      price: 20611,
      brand: "Ceado (Італія)",
      description:
        "Барний блендер. 2-швидкісний двигун. Стакан ємністю 1.5 л з полікарбонату. Леза Dynamic Spin, виготовлені із загартованої нержавіючої сталі. Імпульсний режим роботи. Максимальна швидкість обертання, об/хв 15000/23000. Потужність: 1.30 кВт. Напруга підключення: 220 В. Габарити: 195*180*470 мм. Вага: 4.9 кг.",
    },
    {
      category: "Блендери професійні",
      name: "Блендер CEADO В280",
      slug: "ceado-b280",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714724566/ceado-b280_mphinp.jpg",
      price: 40364,
      brand: "Ceado (Італія)",
      description:
        "Блендер. Кількість чаш: 1. Об'єм чаші: 1.5 л. Матеріал чаші: полікарбонат. Електронна панель керування (15000/23000 об/хв). Матеріал корпусу блендера - сталь, кришки - пластик. Леза Dynamic Spin, виготовлені із загартованої нержавіючої сталі. Імпульсний режим роботи. Габарити 195*180*450 мм. Потужність: 1.7 кВт. Напруга підключення: 220 В. Габарити: 195*180*450 мм. Вага: 4.9 кг.",
    },
    {
      category: "Блендери професійні",
      name: "Блендер CEADO В285",
      slug: "ceado-b285",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714724582/ceado-b285_dkv9sw.jpg",
      price: 69778,
      brand: "Ceado (Італія)",
      description:
        "Блендер. Кількість чаш: 1. Об'єм чаші: 1.5 л. Матеріал чаші: полікарбонат. Електронна панель керування (6000/28000 об/хв). Матеріал корпусу блендера - сталь, кришки - пластик.  Потужність: 1.3 кВт. Напруга підключення: 220 В. Габарити: 195*220*485 мм. Вага: 8.8 кг.",
    },
    {
      category: "Блендери професійні",
      name: "Блендер HURAKAN HKN-BLW2",
      slug: "hurakan-hkn-blw2",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714724601/hurakan-hkn-blw2_j6sgjj.jpg",
      price: 3221,
      brand: "Hurakan (Китай)",
      description:
        "Блендер. Ємність чаші: 2 л. Матеріал чаші: пластик. Матеріал корпусу: пластик. Плавне регулювання швидкості. Режим пульсації. Швидкість обертання: 23000-26000 об/хв. Потужність: 1.2 кВт. Напруга підключення: 220 В. Габарити: 205*230*510 мм. Вага: 3.5 кг.",
    },
    {
      category: "Блендери професійні",
      name: "Блендер HURAKAN HKN-BLW2 RED",
      slug: "hurakan-hkn-blw2red",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714724622/hurakan-hkn-blw2red_sdwdm4.jpg",
      price: 3221,
      brand: "Hurakan (Китай)",
      description:
        "Блендер. Колір корпусу: червоний. Ємність чаші: 2 л. Матеріал чаші: пластик. Матеріал корпусу: пластик. Плавне регулювання швидкості. Режим пульсації. Швидкість обертання: 23000-26000 об/хв. Потужність: 1.2 кВт. Напруга підключення: 220 В. Габарити: 205*230*510 мм. Вага: 3.5 кг.",
    },
    {
      category: "Блендери професійні",
      name: "Блендер HURAKAN HKN-HBH850M PRO",
      slug: "hurakan-hkn-hbh850mpro",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714724666/hurakan-hkn-hbh850mpro_mvinad.jpg",
      price: 8373,
      brand: "Hurakan (Китай)",
      description:
        "Блендер. Ємність чаші: 1.5 л. Матеріал чаші: пластик. Матеріал корпусу: пластик. Автотаймер на 3 режими: 35, 60 та 90 секунд. Режим пульсації. Швидкість обертання: 38000 об/хв. Потужність: 0.95 кВт. Напруга підключення: 220 В. Габарити: 420*200*240 мм. Вага: 4 кг.",
    },
    {
      category: "Блендери професійні",
      name: "Блендер HURAKAN HKN-BLW3",
      slug: "hurakan-hkn-blw3",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714724640/hurakan-hkn-blw3_xkucd6.jpg",
      price: 5368,
      brand: "Hurakan (Китай)",
      description:
        "Блендер. Ємність чаші: 2.5 л. Матеріал чаші: пластик. Матеріал корпусу: пластик. Автотаймер. Режим пульсації. Швидкість обертання: до 26000 об/хв. Потужність: 2.2 кВт. Напруга підключення: 220 В. Габарити: 280*275*535 мм. Вага: 3.5 кг.",
    },
    {
      category: "Соковитискачі",
      name: "Соковитискач HURAKAN HKN-CFV60",
      slug: "hurakan-hkncfv60",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714729302/hurakan-hkncfv60_ex38h3.jpg",
      price: 4938,
      brand: "Hurakan (Китай)",
      description:
        "Комплектація: контейнер для соку (1.5 л), контейнер для відходів (2.2 л). Матеріал корпусу: нержавіюча сталь. Матеріал кришки: пластик. Дві швидкості. Максимальна швидкість обертання: 12000 об/хв. Потужність: 0.8 кВт. Напруга підключення: 220 В. Габарити: 230*310*450 мм. Вага: 4.3 кг.",
    },
    {
      category: "Соковитискачі",
      name: "Соковитискач ROBOT COUPE J80 Ultra",
      slug: "robotcoupe-j80ultra",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714729407/robotcoupe-j80ultra_kbfxr8.jpg",
      price: 87383,
      brand: "Robot Coupe (Франція)",
      description:
        "Соковитискач з 2 швидкостями. Максимальна швидкість - 3000 об/хв. Чаша і сито з нержавіючої сталі. Асинхронний двигун. Безперервне скидання м'якоті. Запатентована форма автоматичної воронки діаметром 79 мм. Корпус з нержавіючої сталі. Сітчастий мікрофільтр з нержавіючої сталі. Контейнер для віджатої м'якоті об'ємом 6.5 літрів. Потужність: 0.55 кВт. Напруга підключення: 220 В. Габарити: 505*235*420 мм. Вага: 10 кг.",
    },
    {
      category: "Соковитискачі",
      name: "Соковитискач CEADO SL98",
      slug: "ceado-sl98",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714729272/ceado-sl98_gqsedj.jpg",
      price: 32205,
      brand: "Ceado (Італія)",
      description:
        "Соковитискач для цитрусових з пресом. Матеріал корпусу: легкий сплав. Чаша і сито з нержавіючої сталі. Швидкість обертання: 1400 об/хв. Потужність: 0.3 кВт. Напруга підключення: 220 В. Габарити: 230*200*350 мм. Вага: 8.5 кг.",
    },
    {
      category: "Соковитискачі",
      name: "Соковитискач HURAKAN HKN-CFV90",
      slug: "hurakan-hkncfv90",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714729325/hurakan-hkncfv90_creyii.jpg",
      price: 17176,
      brand: "Hurakan (Китай)",
      description:
        "Соковитискач універсальний. Швидкість обертання: 2800 об/хв. Матеріал корпусу - нержавіюча сталь. Матеріал кришки - нержавіюча сталь. Штовкач для фруктів та овочів в комплекті. Потужність: 0.37 кВт. Напруга підключення: 220 В. Габарити: 320*345*380 мм. Вага: 12.4 кг.",
    },
    {
      category: "Соковитискачі",
      name: "Соковитискач шнековий HURAKAN HKN-CS600H",
      slug: "hurakan-hkncs600h",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714729349/hurakan-hkncs600h_b1cbtq.jpg",
      price: 8760,
      brand: "Hurakan (Китай)",
      description:
        "Соковитискач шнековий. Швидкість обертання: 45 об/хв. Комплектація: чаша, штовхач, шнек, сито. Можливість самоочищення. Потужність: 0.3 кВт. Напруга підключення: 220 В. Габарити: 170*290*460 мм. Вага: 6.8 кг.",
    },
    {
      category: "Соковитискачі",
      name: "Соковитискач BARTSCHER COMBI JUICER",
      slug: "bartscher-combijuicer",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714729094/bartscher-combijuicer_l7iuwl.jpg",
      price: 6570,
      brand: "Bartscher (Німеччина)",
      description:
        "Соковитискач. Комплект: соковитискач для твердих овочів і фруктів + міксер. Корпус: нержавіюча сталь. У комплекті пластикова чаша для соковижималки ємністю 1 л і скляний стакан для блендера ємністю 1.8 л. Ножі: нержавіюча сталь. 2 ступеня швидкості: 20000 об/хв. Потужність: 0.8 кВт. Напруга підключення: 220 В. Габарити соковитискача: 290*240*430 мм. Габарити міксера: 240*300*450 мм. Вага: 6.5 кг.",
    },
    {
      category: "Соковитискачі",
      name: "Соковитискач BARTSCHER Power fresh",
      slug: "bartscher-powerfresh",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714729156/bartscher-powerfresh_lfchpy.jpg",
      price: 45302,
      brand: "Bartscher (Німеччина)",
      description:
        "Соковитискач. Діаметр заправного вала 80 мм. Призначений для м'яких і твердих фруктів і овочів. Аварійний вимикач, кнопка управління перемикачем. Швидкість обертання макс. 3000 об/хв (50 Гц). Регулювання швидкості: 1 рівень. Шахта заповнення розміру XXL для цілих фруктів (наприклад, яблук) або овочів. Висота зливу: 210 мм. Обсяг ємності для м'якоті: 7 л. Тонке сито з високоякісної сталі. Потужний безшумний двигун. Навісні деталі можна мити в посудомийній машині (за винятком базового блоку). В комплекті 1 щітка для чистки. Матеріал: пластик, нержавіюча сталь. Потужність: 0.7 кВт. Напруга підключення: 230 В. Частота 50/60 Гц. Габарити (ш*г*в):  260*450*505 мм. Вага: 12.9 кг.",
    },
    {
      category: "Соковитискачі",
      name: "Соковитискач SIRMAN APOLLO CHROME",
      slug: "sirman-apollochrome",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714729433/sirman-apollochrome_h0ke0i.jpg",
      price: 17820,
      brand: "Sirman (Італія)",
      description:
        "Соковитискач для цитрусових з пресом. Робоча ємність виконана з нержавіючої сталі, корпус з пластику сріблястого кольору. Зйомне сито з конусами двох розмірів для використання з цитрусовими всіх видів. Швидкість обертання: 320 об/хв. Потужність: 0.15 кВт. Напруга підключення: 220 В. Габарити: 210*210*280 мм. Вага 3 кг.",
    },
    {
      category: "Соковитискачі",
      name: "Соковитискач BARTSCHER PRO",
      slug: "bartscher-pro",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714729180/bartscher-pro_tbsxwr.jpg",
      price: 45302,
      brand: "Bartscher (Німеччина)",
      description:
        "Соковитискач. Призначений для м'яких та твердих фруктів або овочів. Швидкість: 3000 об/хв. Діаметр завантажувального отвору: 83 мм. Матеріал корпусу: сталь + пластик. Пластикова чаша для жмиху об'ємом 7 л. Дрібне сито з високоякісної сталі. Потужність: 0.7 кВт. Напруга підключення: 220 В. Габарити: 430*530*260 мм. Вага: 12.8 кг.",
    },
    {
      category: "Соковитискачі",
      name: "Соковитискач BARTSCHER TOP JUICER",
      slug: "bartscher-topjuicer",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714729201/bartscher-topjuicer_c6knat.jpg",
      price: 6012,
      brand: "Bartscher (Німеччина)",
      description:
        "Соковитискач. Корпус з нержавіючої сталі. Дрібне сито з високоякісної сталі. Пластикова чаша об'ємом 1 л, 2 швидкості. Максимальна швидкість - 18000 об/хв. Діаметр завантажувального отвору: 75 мм. Потужність: 0.7 кВт. Напруга підключення: 220 В.  Габарити: 310*210*400 мм. Вага: 4.4 кг.",
    },
    {
      category: "Соковитискачі",
      name: "Соковитискач HURAKAN HKN-SPM",
      slug: "hurakan-hknspm",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714729381/hurakan-hknspm_ib1ipb.jpg",
      price: 5582,
      brand: "Hurakan (Китай)",
      description:
        "Соковитискач для цитрусових (без пресу). Швидкість обертання: 1800 об/хв. Матеріал корпусу: алюміній. Матеріал чаші, конуса та решітки: харчовий пластик. Потужність: 0.18 кВт. Напруга підключення: 220 В. Габарити: 230*340*365 мм. Вага: 5 кг.",
    },
    {
      category: "Соковитискачі",
      name: "Соковитискач CEADO S98",
      slug: "ceado-s98",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714729250/ceado-s98_luaeoi.jpg",
      price: 22544,
      brand: "Ceado (Італія)",
      description:
        "Соковитискач для цитрусових без пресу. Матеріал корпусу: легкий сплав. Чаша і сито з нержавіючої сталі. Швидкість обертання: 1400 об/хв. Потужність: 0.25 кВт. Напруга підключення: 220 В. Габарити: 240*200*370 мм. Вага: 6.5 кг.",
    },
    {
      category: "Соковитискачі",
      name: "Соковитискач BARTSCHER CS1",
      slug: "bartscher-cs1",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714729121/bartscher-cs1_mmlcge.jpg",
      price: 16532,
      brand: "Bartscher (Німеччина)",
      description:
        "Соковитискач для цитрусових з пресом. Конус з ситом підходить для лимонів, апельсинів, грейпфрутів. Корпус з литого алюмінію, знімні частини можна мити в посудомийній машині. Притискна кришка з важелем. Автоматичне включення та виключення при натисканні та відпусканні важеля. Контейнер для соку, притискний конус, насадки з нержавіючої сталі. Швидкість обертання: 980 об/хв. Потужність: 0.23 кВт. Напруга підключення: 220 В. Габарити: 220*330*375 мм. Вага: 8.6 кг.",
    },
    {
      category: "Соковитискачі",
      name: "Соковитискач SIRMAN APOLLO CROMATO",
      slug: "sirman-apollocromato",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714729473/sirman-apollocromato_ctivw5.jpg",
      price: 17176,
      brand: "Sirman (Італія)",
      description:
        "Соковитискач для цитрусових з пресом. Робоча ємність виконана з нержавіючої сталі, корпус з пластику сріблого кольору. Зйомне сито з конусами двох розмірів для використання з цитрусовими всіх видів. Швидкість обертання: 320 об/хв. Потужність: 0.15 кВт. Напруга підключення: 220 В. Габарити: 210*265*330/365 мм. Вага 3.5 кг.",
    },
    {
      category: "Соковитискачі",
      name: "Соковитискач CEADO ES500",
      slug: "ceado-es500",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714729221/ceado-es500_w4hwup.jpg",
      price: 74501,
      brand: "Ceado (Італія)",
      description:
        "Соковитискач універсальний. Матеріал корпусу, чаша і сито з нержавіючої сталі. Швидкість обертання: 3000 об/хв. Діаметр отвору завантаження: 75мм. Потужність: 0.7 кВт. Напруга підключення: 220 В. Габарити: 242*385*512 мм. Вага: 14.5 кг.",
    },
    {
      category: "Кавомашини професійні",
      name: "Кавомашина BEZZERA ARCADIA DE/BLACK",
      slug: "bezzera-arcadiadeblack",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714731868/bezzera-arcadiadeblack_thyzsi.jpg",
      price: 183139,
      brand: "Bezzera (Італія)",
      description:
        "Кавомашина автоматична двопостова. Котел із міді, забезпечує відмінну продуктивність пари та гарячої води; рівні у бойлері автоматично контролюються електронним блоком керування. Теплообмінники: завдяки системі теплообмінників, що живляться гідравлічним контуром окремо від бойлера, кава завжди вариться за допомогою потоку прісної води. Подвійна безпека котла гарантується захисним термостатом та гідравлічним клапаном надлишкового тиску. Об'єм бойлера: 11 л. Діаметр портафільтра: 58 мм. Потужність: 3.45 кВт. Напруга підключення: 220 В. Габарити: 824*565*525 мм. Вага: 75 кг.",
    },
    {
      category: "Кавомашини професійні",
      name: "Кавомашина BEZZERA B2016 DE/WHITE",
      slug: "bezzera-b2016dewhite",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714731900/bezzera-b2016dewhite_kdydbi.jpg",
      price: 142131,
      brand: "Bezzera (Італія)",
      description:
        "Кавомашина автоматична двопостова. Корпус виготовлений із сталі AISI 304. Блок керування дозуванням кави, запрограмованою користувачем. Теплообмінники працюють із гідравлічним контуром, відокремленим від бойлера. Подвійна система безпеки, що забезпечується високотемпературним термостатом котла та гідравлічним клапаном надлишкового тиску. Мідний котел споживає оптимальну продуктивність пари та гарячої води; рівні автоматично керуються блоком керування. Об'єм бойлера: 11 л. Потужність: 3 кВт. Напруга підключення: 220 В. Габарити: 750*550*515 мм. Вага: 54 кг.",
    },
    {
      category: "Кавомашини професійні",
      name: "Кавомашина BEZZERA B2016 PM/WHITE",
      slug: "bezzera-b2016pmwhite",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714731922/bezzera-b2016pmwhite_kpwuy0.jpg",
      price: 128391,
      brand: "Bezzera (Італія)",
      description:
        "Кавомашина напівавтоматична двопостова. Корпус виготовлений із нержавіючої сталі AISI 304. Подача кави керується кнопкою увімкнення/вимкнення. Теплообмінники працюють із гідравлічним контуром, відокремленим від бойлера. Подвійна система безпеки, що забезпечується високотемпературним термостатом котла та гідравлічним клапаном надлишкового тиску. Мідний котел забезпечує оптимальну продуктивність пари та гарячої води; рівні автоматично керуються блоком керування. Об'єм бойлера: 11 л. Потужність: 3.6 кВт. Напруга підключення: 220 В. Габарити: 770*560*540 мм. Вага: 72 кг.",
    },
    {
      category: "Кавомашини професійні",
      name: "Кавомашина HURAKAN HKN-ME717",
      slug: "hurakan-hknme717",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714731968/hurakan-hknme717_nlztlc.jpg",
      price: 34996,
      brand: "Hurakan (Китай)",
      description:
        "Кавомашина. 5 ступенів помолу. Сенсорне меню. Вбудований капучинатор. Налаштування температура кави 60-90 °C. Режим подвійної кави. Автоматичне збивання молока, підігрів молока, води. Лічильник порцій. Регулювання помолу. Можливість подачі гарячої води. Підігрів чашок. Автоматичне очищення від накипу. Бункер для відходів на 15 чашок. Налаштовуваний носик 80-140 мм. Захист від перегріву. Потужність: 1.25 кВт. Напруга підключення: 220 В. Габарити: 422*280*380 мм. Вага: 11 кг.",
    },
    {
      category: "Кавомашини професійні",
      name: "Кавомашина BEZZERA VICTORIA RED VICTODE2",
      slug: "bezzera-victoriared",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714731943/bezzera-victoriared_k22uxp.jpg",
      price: 375296,
      brand: "Bezzera (Італія)",
      description:
        "Кавомашина двопостова. Бойлер: 2*6 л. Підключення води: 3/8”. Зливне з'єднання: 3/4”. Номінальна потужність, кВт: 7.3. Електроживлення, В/Гц: 230-415/50-60. Габарити: 820*680*560 мм. Вага (нетто), кг: 100. Вага (брутто), кг: 140.",
    },
    {
      category: "Подрібнювачі льоду",
      name: "Подрібнювач льоду HURAKAN HKN-TR65",
      slug: "hurakan-hkntr65",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714733864/hurakan-hkntr65_z1885k.jpg",
      price: 2362,
      brand: "Hurakan (Китай)",
      description:
        "Подрібнювач льоду. Об'єм контейнера: 0.7 л. Швидкість обертання ножів: 2000 об/хв. Матеріал корпусу: пластик. Матеріал завантажувального контейнера для льоду: нержавіюча сталь. Матеріал ємкості для льоду: нержавіюча сталь. Потужність: 0.3 кВт. Напруга підключення: 220 В. Габарити: 200*425*305 мм. Вага: 5 кг.",
    },
    {
      category: "Подрібнювачі льоду",
      name: "Подрібнювач льоду SIRMAN NORDKAPP",
      slug: "sirman-nordkapp",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714733890/sirman-nordkapp_g5jozn.jpg",
      price: 26193,
      brand: "Sirman (Італія)",
      description:
        "Подрібнювач льоду. Матеріал корпусу: нержавіюча сталь. Обсяг бункера: 3 л. Потужність: 0.15 кВт. Напруга підключення: 220 В. Габарити: 205*285*491 мм. Вага (нетто), кг: 5.2.",
    },
    {
      category: "Подрібнювачі льоду",
      name: "Подрібнювач льоду SIRMAN TRITON",
      slug: "sirman-triton",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714733913/sirman-triton_yugzhm.jpg",
      price: 38217,
      brand: "Sirman (Італія)",
      description:
        "Подрібнювач льоду. Швидкість обертання ножів: 1500 об/хв. Велика знімна воронка. Знімний контейнер. Захисний мікровимикач на горловині завантаження. Захисний мікровимикач на чаші для льоду. Горловина з блискучого алюмінію. Компоненти і дрібні деталі з нержавіючої сталі. Несуча структура з алюмінію і сталі. Обсяг бункера: 2 л. Потужність: 0.35 кВт. Напруга підключення: 220 В. Габарити: 540*270*310 мм.",
    },
    {
      category: "Подрібнювачі льоду",
      name: "Подрібнювач льоду BARTSCHER",
      slug: "bartscher-icecrusher",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714733819/bartscher-icecrusher_rhn0xl.jpg",
      price: 4079,
      brand: "Bartscher (Німеччина)",
      description:
        "Подрібнювач льоду настільний. Вертикальний тип загрузки. Продуктивність: 15 кг/годину. Об'єм контейнера для подрібненого льда: 1.75 кг. Потужність: 0.12 кВт. Напруга підключення, В: 220. Габарити: 172*290*460 мм. Вага: 3.5 кг.",
    },
    {
      category: "Подрібнювачі льоду",
      name: "Подрібнювач льоду CEADO V90",
      slug: "ceado-v90",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714733842/ceado-v90_lxhngl.jpg",
      price: 29199,
      brand: "Ceado (Італія)",
      description:
        "Подрібнювач льоду. Матеріал чаші: нержавіюча сталь. Матеріал корпусу: легкий сплав. Об'єм чаші: 3 л. Подрібнення льоду: 2 кг/хв. Швидкість обертання ножів: 900 об/хв. Потужність: 0.15 кВт. Напруга підключення, В: 220. Габарити: 230*460*210 мм. Вага: 3.9 кг.",
    },
    {
      category: "Електрокип'ятильники",
      name: "Кип'ятильник HURAKAN HKN-HVN10",
      slug: "hurakan-hknhvn10",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714738741/hurakan-hknhvn_cd3wzx.jpg",
      price: 4079,
      brand: "Hurakan (Китай)",
      description:
        "Кип'ятильник електричний. Корисний об'єм: 7.6 л. Матеріал корпусу: нержавіюча сталь. Закритий нагрівальний елемент. Терморегулятор: 30-110 °С. Індикатор нагрівання. Шкала рівня води (два показники – min та max). Продуктивність, л/хвилин: 10/31. Потужність: 2 кВт. Напруга підключення: 220 В. Габарити: 330*310*420 мм. Вага: 2.8 кг.",
    },
    {
      category: "Електрокип'ятильники",
      name: "Кип'ятильник HURAKAN HKN-HVN20",
      slug: "hurakan-hknhvn20",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714738741/hurakan-hknhvn_cd3wzx.jpg",
      price: 5153,
      brand: "Hurakan (Китай)",
      description:
        "Кип'ятильник електричний. Корисний об'єм: 17.3 л. Матеріал корпусу: нержавіюча сталь. Тип подачі води: заливний. Закритий нагрівальний елемент. Терморегулятор: 30-110 °С. Індикатор нагрівання. Шкала рівня води (два показники – min та max). Продуктивність, л/хвилин: 20/48. Потужність: 2.5 кВт. Напруга підключення: 220 В. Габарити: 370*350*550 мм. Вага: 3.6 кг.",
    },
    {
      category: "Електрокип'ятильники",
      name: "Кип'ятильник HURAKAN HKN-HVZ25M",
      slug: "hurakan-hknhvz25m",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714738798/hurakan-hknhvz25m_eovy07.jpg",
      price: 9447,
      brand: "Hurakan (Китай)",
      description:
        "Кип'ятильник проточний. Об'єм: 8 літрів. Продуктивність: 25 л/год. Матеріал корпусу: нержавіюча сталь. Тип подачі води: підключення до водопроводу. Автоматичний контроль рівня і температури води. Індикатори нагріву. Блокування роботи без води. Функція захисту від перегріву. Функція попередження про помилки. Потужність: 2.5 кВт. Напруга підключення: 220 В. Габарити: 190*240*490 мм. Вага: 6.3 кг.",
    },
    {
      category: "Електрокип'ятильники",
      name: "Кип'ятильник HURAKAN HKN-HVZ35M",
      slug: "hurakan-hknhvz35m",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714738865/hurakan-hknhvz35_zatf7m.jpg",
      price: 9662,
      brand: "Hurakan (Китай)",
      description:
        "Кип'ятильник проточний. Об'єм: 12 літрів. Продуктивність: 35 л/год. Матеріал корпусу: нержавіюча сталь. Тип подачі води: підключення до водопроводу. Автоматичний контроль рівня і температури води. Індикатори нагріву. Блокування роботи без води. Функція захисту від перегріву. Функція попередження про помилки. Потужність: 2.5 кВт. Напруга підключення: 220 В. Габарити: 190*240*580 мм. Вага: 7.2 кг.",
    },
    {
      category: "Електрокип'ятильники",
      name: "Кип'ятильник HURAKAN HKN-HVB12",
      slug: "hurakan-hknhvb12",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714738693/hurakan-hknhvb_emaief.jpg",
      price: 3006,
      brand: "Hurakan (Китай)",
      description:
        "Кип'ятильник з подвійними стінками. Корисний об'єм: 9 л. Матеріал корпусу: нержавіюча сталь. Подвійні стінки. Тип подачі води: заливний. Автоматичний контроль температури води. Показник рівня напою в баку. Індикатор нагріву. Потужність: 1.8 кВт. Напруга підключення: 220 В. Габарити: 265*265*390 мм. Вага: 3.1 кг.",
    },
    {
      category: "Електрокип'ятильники",
      name: "Кип'ятильник HURAKAN HKN-HVB15",
      slug: "hurakan-hknhvb15",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714738693/hurakan-hknhvb_emaief.jpg",
      price: 3221,
      brand: "Hurakan (Китай)",
      description:
        "Кип'ятильник з подвійними стінками. Корисний об'єм: 13 л. Матеріал корпусу: нержавіюча сталь. Подвійні стінки. Тип подачі води: заливний. Автоматичний контроль температури води. Показник рівня напою в баку. Індикатор нагріву. Потужність: 1.8 кВт. Напруга підключення: 220 В. Габарити: 265*265*465 мм. Вага: 3.5 кг.",
    },
    {
      category: "Електрокип'ятильники",
      name: "Кип'ятильник HURAKAN HKN-HVB20",
      slug: "hurakan-hknhvb20",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714738693/hurakan-hknhvb_emaief.jpg",
      price: 3435,
      brand: "Hurakan (Китай)",
      description:
        "Кип'ятильник з подвійними стінками. Корисний об'єм: 16 л. Матеріал корпусу: нержавіюча сталь. Подвійні стінки. Тип подачі води: заливний. Автоматичний контроль температури води. Показник рівня напою в баку. Індикатор нагріву. Потужність: 1.8 кВт. Напруга підключення: 220 В. Габарити: 265*265*520 мм. Вага: 3.7 кг.",
    },
    {
      category: "Електрокип'ятильники",
      name: "Кип'ятильник HURAKAN HKN-HVB25",
      slug: "hurakan-hknhvb25",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714738693/hurakan-hknhvb_emaief.jpg",
      price: 3650,
      brand: "Hurakan (Китай)",
      description:
        "Кип'ятильник з подвійними стінками. Корисний об'єм: 18.5 л. Матеріал корпусу: нержавіюча сталь. Подвійні стінки. Тип подачі води: заливний. Автоматичний контроль температури води. Показник рівня напою в баку. Індикатор нагріву. Потужність: 1.8 кВт. Напруга підключення: 220 В. Габарити: 315*315*465 мм. Вага: 4.2 кг.",
    },
    {
      category: "Електрокип'ятильники",
      name: "Кип'ятильник HURAKAN HKN-HVB30",
      slug: "hurakan-hknhvb30",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714738693/hurakan-hknhvb_emaief.jpg",
      price: 4380,
      brand: "Hurakan (Китай)",
      description:
        "Кип'ятильник з подвійними стінками. Корисний об'єм: 24 л. Матеріал корпусу: нержавіюча сталь. Подвійні стінки. Тип подачі води: заливний. Автоматичний контроль температури води. Показник рівня напою в баку. Індикатор нагріву. Потужність: 2.8 кВт. Напруга підключення: 220 В. Габарити: 315*315*520 мм. Вага: 4.5 кг.",
    },
    {
      category: "Електрокип'ятильники",
      name: "Кип'ятильник HURAKAN HKN-HVB8",
      slug: "hurakan-hknhvb8",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714738693/hurakan-hknhvb_emaief.jpg",
      price: 2791,
      brand: "Hurakan (Китай)",
      description:
        "Кип'ятильник з подвійними стінками. Корисний об'єм: 5.6 л. Матеріал корпусу: нержавіюча сталь. Подвійні стінки. Тип подачі води: заливний. Автоматичний контроль температури води. Показник рівня напою в баку. Індикатор нагріву. Потужність: 1.8 кВт. Напруга підключення: 220 В. Габарити: 205*205*390 мм. Вага: 2.6 кг.",
    },
    {
      category: "Електрокип'ятильники",
      name: "Кип'ятильник HURAKAN HKN-HVZ35",
      slug: "hurakan-hknhvz35",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714738865/hurakan-hknhvz35_zatf7m.jpg",
      price: 9662,
      brand: "Hurakan (Китай)",
      description:
        "Кип'ятильник проточний. Об'єм: 10 літрів. Продуктивність: 35 л/год. Матеріал корпусу: нержавіюча сталь. Тип подачі води: підключення до водопроводу. Автоматичний контроль рівня і температури води. Індикатори нагріву. Блокування роботи без води. Функція захисту від перегріву. Функція попередження про помилки. Потужність: 2.5 кВт. Напруга підключення: 220 В. Габарити: 190*360*640 мм. Вага: 10  кг.",
    },
    {
      category: "Електрокип'ятильники",
      name: "Кип'ятильник HURAKAN HKN-HVZ22",
      slug: "hurakan-hknhvz22",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714738775/hurakan-hknhvz22_heakk5.jpg",
      price: 9876,
      brand: "Hurakan (Китай)",
      description:
        "Кип'ятильник проточний. Об'єм: 5 літрів. Продуктивність: 22 л/год. Матеріал корпусу: нержавіюча сталь. Тип подачі води: підключення до водопроводу. Автоматичний контроль рівня і температури води. Індикатори нагріву. Блокування роботи без води. Функція захисту від перегріву. Функція попередження про помилки. Потужність: 2.5 кВт. Напруга підключення: 220 В. Габарити: 190*360*420 мм. Вага: 9 кг.",
    },
    {
      category: "Кавомолки професійні",
      name: "Кавомолка CEADO E37S",
      slug: "ceado-e37s",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714740634/ceado-e37s_dvwbbw.jpg",
      price: 65698,
      brand: "Ceado (Італія)",
      description:
        "Кавомолка прямого помолу. Діаметр жорна: 83 мм. Швидкість обертання: 1480/1700 об/хв. Ємність бункера для зерен: 1.6 кг. Сталеві плоскі жорна великого діаметру. Потужність: 0.5 кВт. Напруга підключення: 220 В. Габарити: 212*309*557 мм. Вага: 12.3 кг.",
    },
    {
      category: "Кавомолки професійні",
      name: "Кавомолка APACH ACG 1",
      slug: "apach-acg1",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714740538/apach-acg1_tmt56s.jpg",
      price: 20869,
      brand: "Apach (Італія)",
      description:
        "Кавомолка бункерна з дозатором. Діаметр жорна: 58 мм. Швидкість обертання: 1400 об/хв. Ємність бункера для зерен: 0.6 кг. Ємність дозатора меленої кави: 0.2 кг. Покрокове мікрометричне регулювання помолу. Сталеві плоскі жорна великого діаметру. Вбудований темпер. Вбудований лічильник порцій. Потужність: 0.25 кВт. Напруга підключення: 220 В. Габарити: 190*310*470 мм. Вага: 9 кг.",
    },
    {
      category: "Кавомолки професійні",
      name: "Кавомолка BEZZERA M80A",
      slug: "bezzera-m80a",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714740567/bezzera-m80a_gwdzxa.jpg",
      price: 39505,
      brand: "Bezzera (Італія)",
      description:
        "Кавомолка бункерна. Автоматична версія з автоматичною активацією та зупинкою помелу. Оснащена дозатором меленої кави на 250 г, що регулюється від 5 до 9 г на одну порцію. Електроживлення 220-240 В / 50-60 Гц. Потужність двигуна: 0.42 кВт. Напруга підключення: 220 В. Обертів/хв: 1600/60. Пласкі жорна діаметром 63 мм. Бункер 1 кг. Габарити 340*225*580 мм. Вага (нетто):  11.4 кг. Вага (брутто): 13 кг.",
    },
    {
      category: "Кавомолки професійні",
      name: "Кавомолка BEZZERA M80E",
      slug: "bezzera-m80e",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714740589/bezzera-m80e_zo8itv.jpg",
      price: 44658,
      brand: "Bezzera (Італія)",
      description:
        "Кавомолка прямого помолу. Версія Time без дозатора кави дозволяє встановити 3 порції, регулюючи час помолу. Кавові зерна перемелюється прямо у фільтротримач. Електроживлення 220-240 В / 50-60 Гц. Потужність двигуна: 0.42 кВт. Обертів/хв: 1600/60. Пласкі жерна діаметром 63 мм. Бункер 1 кг. Габарити 340*225*580 мм. Вага (нетто): 11.4 кг. Вага (брутто): 13 кг.",
    },
    {
      category: "Кавомолки професійні",
      name: "Кавомолка BEZZERA SIRIOQTE0",
      slug: "bezzera-sirioqte0",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714740611/bezzera-sirioqte0_g6gizr.jpg",
      price: 193874,
      brand: "Bezzera (Італія)",
      description:
        "Кавомолка прямого помолу. Електроживлення: 220-240 В / 50-60 Гц. Потужність двигуна: 0.4 кВт, Обертів/хв: 900-1200-1500. Пліскі задирки діаметром 77 мм. Бункер: 0.5 кг. Габарити: 200*390*630 мм. Вага (нетто): 20.5 кг. Вага (брутто): 24.5 кг.",
    },
    {
      category: "Міксери для молочних коктейлей",
      name: "Міксер CEADO M98",
      slug: "ceado-m98",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714742013/ceado-m98_sg3qtv.jpg",
      price: 15029,
      brand: "Ceado (Італія)",
      description:
        "Міксер. Матеріал стакана: нержавіюча сталь. Матеріал корпусу: легкий сплав. Об'єм стакана: 0.9 л. Швидкість обертання: 15000 об/хв. Потужність: 0.3 кВт. Напруга підключення: 220 В. Габарити: 180*210*485 мм. Вага: 3.7 кг.",
    },
    {
      category: "Міксери для молочних коктейлей",
      name: "Міксер SIRMAN SIRIO 2 VV CE",
      slug: "sirman-sirio2vvce",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714742085/sirman-sirio2vvce_oe1tzn.jpg",
      price: 23832,
      brand: "Sirman (Італія)",
      description:
        "Міксер для молочних коктейлів двопостовий з регулятором обертів. Два стакани з нержавіючої сталі об'ємом 2*900 мл. Матеріал корпусу - пресований алюміній. Швидкість обертання - 14000 об/хв. Потужність: 0.32 кВт. Напруга підключення: 220 В. Габарити: 300х195х530 мм. Вага: 6 кг.",
    },
    {
      category: "Міксери для молочних коктейлей",
      name: "Міксер CEADO M98/2",
      slug: "ceado-m982",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714742040/ceado-m982_gfgoqj.jpg",
      price: 29414,
      brand: "Ceado (Італія)",
      description:
        "Міксер подвійний. Матеріал стакана: нержавіюча сталь. Матеріал корпусу: легкий сплав. Об'єм стакана: 0.9 л. Швидкість обертання: 15000 об/хв. Потужність: 0.60 кВт. Напруга підключення: 220 В. Габарити: 310*210*485 мм. Вага: 6.7 кг.",
    },
    {
      category: "Міксери для молочних коктейлей",
      name: "Міксер SIRMAN SIRIO 1 CE",
      slug: "sirman-sirio1ce",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714742062/sirman-sirio1ce_hhyflk.jpg",
      price: 10950,
      brand: "Sirman (Італія)",
      description:
        "Міксер для молочних коктейлів однопостовий. Стакан з нержавіючої сталі об'ємом 900 мл. Матеріал корпусу - пресований алюміній. Швидкість обертання - 14000 об/хв. Потужність: 0.12 кВт. Напруга підключення: 220 В. Габарити: 150*195*530 мм. Вага: 3 кг.",
    },
    {
      category: "Вакуумні пакувальники",
      name: "Вакуумний пакувальник APACH AVM 254",
      slug: "apach-avm254",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714805409/apach-avm_ucsqpk.jpg",
      price: 71495,
      brand: "Apach (Італія)",
      description:
        "Вакуумний пакувальник. Продуктивність вакуумної помпи: 4 куб. м/годину. Довжина зварювальної планки: 250 мм. Можливість програмування для категорій продуктів. Максимальна ширина пакету: 250 мм. Потужність: 0.35 кВт. Напруга підключення: 220 В. Габарити: 357*475*335 мм. Вага: 23.6 кг.",
    },
    {
      category: "Вакуумні пакувальники",
      name: "Вакуумний пакувальник HURAKAN HKN-VAC260",
      slug: "hurakan-hknvac260",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714805462/hurakan-hknvac260_puegq7.jpg",
      price: 42296,
      brand: "Hurakan (Китай)",
      description:
        "Вакуумний пакувальник, 260 мм планка.  Ширина шову: 5 мм. Довжина шову: 260 мм. Потужність помпи: 14.4 куб. м/годину. Ступінь вакууму: 1 Бар. Габарити камери: 385*280*50 мм. Матеріал корпусу: нержавіюча сталь. Потужність: 0.37 кВт. Напруга підключення: 220 В. Габаритні розміри: 330*502*380 мм. Вага: 37.2 кг.",
    },
    {
      category: "Вакуумні пакувальники",
      name: "Вакуумний пакувальник APACH AVM 308",
      slug: "apach-avm308",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714805409/apach-avm_ucsqpk.jpg",
      price: 85451,
      brand: "Apach (Італія)",
      description:
        "Продуктивність вакуумної помпи: 8 куб. м/годину. Довжина зварювальної планки: 310 мм. Можливість програмування для категорій продуктів. Максимальна ширина пакету: 300 мм. Функція заповнення інертним газом. Потужність: 0.45 кВт. Напруга підключення: 220 В. Габарити: 395*470*370 мм. Вага: 31 кг.",
    },
    {
      category: "Вакуумні пакувальники",
      name: "Вакуумний пакувальник APACH AVM 412",
      slug: "apach-avm412",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714805409/apach-avm_ucsqpk.jpg",
      price: 106921,
      brand: "Apach (Італія)",
      description:
        "Продуктивність вакуумної помпи: 12 куб. м/годину. Довжина зварювальної планки: 410 мм. Можливість програмування для категорій продуктів. Максимальна ширина пакету: 400 мм. Потужність: 0.75 кВт. Функція заповнення інертним газом.  Напруга підключення: 220 В. Габарити камери: 435*435*180 мм. Габарити: 510*585*435 мм. Вага: 46 кг.",
    },
    {
      category: "Вакуумні пакувальники",
      name: "Вакуумний пакувальник APACH AVM 420",
      slug: "apach-avm420",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714805409/apach-avm_ucsqpk.jpg",
      price: 119803,
      brand: "Apach (Італія)",
      description:
        "Продуктивність вакуумної помпи: 20 куб. м/годину. Довжина зварювальної планки: 410 мм. Можливість програмування для категорій продуктів. Максимальна ширина пакету: 400 мм. Потужність: 0.75 кВт. Функція заповнення інертним газом. Напруга підключення: 220 В. Габарити камери: 435*435*180 мм. Габарити: 510*585*435 мм. Вага: 51 кг.",
    },
    {
      category: "Вакуумні пакувальники",
      name: "Вакуумний пакувальник HURAKAN HKN-VAC400",
      slug: "hurakan-hknvac400",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714805482/hurakan-hknvac400_vrruba.jpg",
      price: 51743,
      brand: "Hurakan (Китай)",
      description:
        "Вакуумний пакувальник, 390 мм планка.  Ширина шову: 10 мм. Довжина шову: 390 мм. Потужність помпи: 20 куб. м/годину. Габарити камери: 440*420*70 мм. Матеріал корпусу: нержавіюча сталь. Потужність: 0.9 кВт. Напруга підключення: 220 В. Габаритні розміри: 490*540*500 мм. Вага: 62.5 кг.",
    },
    {
      category: "Вакуумні пакувальники",
      name: "Вакуумний пакувальник APACH AVM 312",
      slug: "apach-avm312",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714805409/apach-avm_ucsqpk.jpg",
      price: 96830,
      brand: "Apach (Італія)",
      description:
        "Продуктивність вакуумної помпи: 12 куб. м/годину. Довжина зварювальної планки: 310 мм. Можливість програмування для категорій продуктів. Максимальна ширина пакету: 300 мм. Функція заповнення інертним газом. Потужність: 0.75 кВт. Напруга підключення: 220 В. Габарити камери: 343*434*175 мм. Габарити: 514*585*400 мм. Вага: 35 кг.",
    },
    {
      category: "Вакуумні пакувальники",
      name: "Вакуумний пакувальник APACH AVM 425",
      slug: "apach-avm425",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714805409/apach-avm_ucsqpk.jpg",
      price: 191083,
      brand: "Apach (Італія)",
      description:
        "Продуктивність вакуумної помпи: 25 куб. м/годину. Довжина зварювальної планки: 455 мм. Можливість програмування для категорій продуктів. Максимальна ширина пакету: 400 мм. Функція заповнення інертним газом. Потужність: 1.2 кВт. Напруга підключення: 220 В. Габарити камери: 485*550*175 мм. Габарити: 600*710*500 мм. Вага: 96 кг.",
    },
    {
      category: "Вакуумні пакувальники",
      name: "Вакуумний пакувальник HURAKAN HKN-V333",
      slug: "hurakan-hknv333",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714805446/hurakan-hknv333_spntxk.jpg",
      price: 5368,
      brand: "Hurakan (Китай)",
      description:
        "Вакуумний пакувальник безкамерний. Час вакуумування 10-20 сек. Ширина шову: 300 мм. Матеріал корпусу: пластик. Пакет для вакуумування в рулоні шириною 20 см - 1шт. у комплекті. Пакети розміром 23*28 см - 5 од. у комплекті. Потужність: 0.1 кВт. Напруга підключення: 220 В. Габаритні розміри: 408*201*87 мм. Вага: 2 кг.",
    },
    {
      category: "Апарати термопакувальні",
      name: "Термопакувальний апарат HURAKAN HKN-CNW430",
      slug: "hurakan-hkncnw430",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714807271/hurakan-hkncnw430_apjsrj.jpg",
      price: 2405,
      brand: "Hurakan (Китай)",
      description:
        "Термопакувальний апарат. Габарити 430*660*155 мм. Потужність: 0.12 кВт. Напруга підключення: 220 В. Вага: 7 кг.",
    },
    {
      category: "Апарати термопакувальні",
      name: "Термопакувальний апарат HURAKAN HKN-CNW460 PRO",
      slug: "hurakan-hkncnw460pro",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714807290/hurakan-hkncnw460pro_flavis.jpg",
      price: 5582,
      brand: "Hurakan (Китай)",
      description:
        "Термопакувальний апарат. Габарити 465*650*150 мм. Потужність: 0.32 кВт. Напруга підключення: 220 В. Вага: 7 кг.",
    },
    {
      category: "Апарати термопакувальні",
      name: "Термопакувальний апарат SIRMAN 40M СЕ",
      slug: "sirman-40mce",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714807307/sirman-40mce_adjchn.jpg",
      price: 21470,
      brand: "Sirman (Італія)",
      description:
        "Термопакувальний апарат. Для упаковки таких продуктів харчування як м'ясо, сир, макаронні вироби, фрукти і овочі; апарати працюють швидко і гігієнічно в супермаркетах, м'ясних і гастрономічних магазинах. Підігрів поверхні: 29*165 мм. Матеріал корпусу - нержавіюча сталь. Габарити: 465*500*290 мм. Потужність: 0.115 кВт. Напруга підключення: 220 В. Вага: 12.5 кг.",
    },
    {
      category: "Апарати термопакувальні",
      name: "Термопакувальний апарат SIRMAN 45К СЕ",
      slug: "sirman-45kce",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714807324/sirman-45kce_bb8gme.jpg",
      price: 11379,
      brand: "Sirman (Італія)",
      description:
        "Пакувальний стіл. Підігрів поверхні: 385*125 мм. Тефлонове покриття столу. Матеріал корпусу - нержавіюча сталь. Габарити: 485*600*140 мм. Потужність: 0.65 кВт. Напруга підключення: 220 В. Вага: 12.5 кг.",
    },
    {
      category: "Пральні машини промислові",
      name: "Машина пральна FAGOR LA-14 TP2 E",
      slug: "fagor-la14tp2e",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714662871/fagor-la14tp2e_dhf1yf.jpg",
      price: 539201,
      brand: "Fagor (Іспанія)",
      description:
        "Підресорна пральна машина з високошвидкісним віджимом. Максимальне завантаження: 14 кг. Номінальне завантаження: 13 кг. Нагрів: електричний. G-фактор: 450. Максимальний віджим: 1138 об/хв. Об'єм барабана: 130 л. Діаметр/глибина барабана: 620/430 мм. Діаметр дверцят: 373 мм. Управління: Touch Plus. Сенсорний дисплей: 7 дюймів, 29 встановлених програм. Можливість програмування, експорту, імпорту за допомогою USB. Кількість програм не обмежена. Режим аквачистки. 8 сигналів системи дозування. Лоток для миючих засобів з 4 відсіками: для попереднього прання, прання, відбілювання та ополіскування. Система допомоги під час завантаження. Контролює подачу води та обертання барабана під час завантаження білизни. Три підведення води (гаряча вода, холодна вода, пом'якшена вода). Барабан та зовнішній бак із нержавіючої сталі. Не потрібні фіксації до підлоги. Підведення води: 3/4”. Діаметр зливу: 76мм. Інверторний двигун. Потужність: 1.1 кВт. Потужність електричного нагріву: 9 кВт. Максимальна потужність: 9.4 кВт. Напруга підключення: 380 В 3L+N+T. Габарити: 788*869*1307 мм. Вага нетто: 250 кг.",
    },
    {
      category: "Пральні машини промислові",
      name: "Машина пральна FAGOR COMPACT LAP-10 TP2 E P",
      slug: "fagor-compact-lap10tp2ep",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714662829/fagor-compact-lap10tp2ep_rjweno.jpg",
      price: 255863,
      brand: "Fagor (Іспанія)",
      description:
        "Професійна пральна машина з високошвидкісним віджимом. Максимальне завантаження: 11 кг. Номінальне завантаження: 10 кг. Нагрів: електричний. G-фактор: 450. Максимальний віджим: 1250 об/хв. Об'єм барабана: 100 л. Управління: Touch Plus. Сенсорний дисплей 4.3 дюйми, 29 встановлених програм. Можливість програмування, експорту, імпорту за допомогою USB. Кількість програм не обмежена. Режим аквачистки. 8 сигналів системи дозування. Лоток для миючих засобів з 4 відсіками: для попереднього прання, прання, відбілювання та ополіскування. Два підведення води (гаряча вода, холодна вода). Барабан та зовнішній бак із нержавіючої сталі. Не потрібні фіксації до підлоги. Підведення води: 3/4”. Зливна помпа. Діаметр зливу: 50 мм. Потужність двигуна: 0.75 кВт. Потужність електричного нагріву: 6 кВт. Максимальна потужність: 6.25 кВт. Напруга підключення: 380 В 3L+N+T. Габарити: 680*742*1040 мм. Вага нетто: 150 кг.",
    },
    {
      category: "Пральні машини промислові",
      name: "Машина пральна FAGOR LN-35C TP2 E",
      slug: "fagor-ln35ctp2e",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714663065/fagor-ln35ctp2e_t2ktba.jpg",
      price: 707272,
      brand: "Fagor (Іспанія)",
      description:
        "Непідресорена низькошвидкісна пральна машина. Максимальне завантаження: 39 кг. Номінальне завантаження: 35 кг. Нагрів: електричний. G-фактор: 200. Максимальний віджим: 644 об/хв. Об'єм барабана: 350 л. Діаметр/глибина барабана: 860/602 мм. Діаметр дверцят: 560 мм. Управління: Touch Plus. Сенсорний дисплей 7 дюймів. 29 встановлених програм. Можливість програмування, експорту, імпорту за допомогою USB. Кількість програм не обмежена. Режим аквачистки. 8 сигналів системи дозування. Лоток для миючих засобів з 4 відсіками: для попереднього прання, прання, відбілювання та ополіскування. Система допомоги під час завантаження. Контролює подачу води та обертання барабана під час завантаження білизни. Три підведення води (гаряча вода, холодна вода, пом'якшена вода). Барабан та зовнішній бак із нержавіючої сталі. Потрібно анкерне кріплення та встановлення на фундамент. Підведення води: 3/4”. Діаметр зливу: 76 мм. Інверторний двигун. Потужність двигуна: 4 кВт. Потужність електричного нагріву: 21 кВт. Максимальна потужність: 25 кВт. Напруга підключення: 380 В 3L+N+T. Габарити: 979*1066*1411 мм. Вага нетто: 473 кг.",
    },
    {
      category: "Пральні машини промислові",
      name: "Машина пральна FAGOR LN-45C TP2 E",
      slug: "fagor-ln45ctp2e",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714663091/fagor-ln45ctp2e_atjzlu.jpg",
      price: 860961,
      brand: "Fagor (Іспанія)",
      description:
        "Непідресорена низькошвидкісна пральна машина. Максимальне завантаження: 47 кг. Номінальне завантаження: 42 кг. Нагрів: електричний. G-фактор: 200. Максимальний віджим: 644 об/хв. Об'єм барабана: 420 л. Діаметр дверцят: 560 мм. Управління: Touch Plus. Сенсорний дисплей 7 дюймів, 29 встановлених програм. Можливість програмування, експорту, імпорту за допомогою USB. Кількість програм не обмежена. Режим аквачистки. 8 сигналів системи дозування. Лоток для миючих засобів з 4 відсіками: для попереднього прання, прання, відбілювання та ополіскування. Система допомоги під час завантаження. Контролює подачу води та обертання барабана під час завантаження білизни. Три підведення води (гаряча вода, холодна вода, пом'якшена вода). Барабан та зовнішній бак із нержавіючої сталі. Потрібно анкерне кріплення та встановлення на фундамент. Підведення води: 3/4”. Діаметр зливу: 76 мм. Інверторний двигун. Потужність двигуна: 6 кВт. Потужність електричного нагріву: 21 кВт. Максимальна потужність: 23 кВт. Напруга підключення: 380 В 3L+N+T. Габарити: 979*1200*1411 мм. Вага нетто: 523 кг.",
    },
    {
      category: "Пральні машини промислові",
      name: "Машина пральна FAGOR LN-60C TP2 E",
      slug: "fagor-ln60ctp2e",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714663107/fagor-ln60ctp2e_ndwcic.jpg",
      price: 1085700,
      brand: "Fagor (Іспанія)",
      description:
        "Непідресорена низькошвидкісна пральна машина. Максимальне завантаження: 67 кг. Номінальне завантаження: 60 кг. Нагрів: електричний. G-фактор: 150. Максимальний віджим: 505 об/хв. Об'єм барабана: 600 л. Діаметр/глибина барабана: 1048/684 мм. Діаметр дверцят: 560 мм. Управління: Touch Plus. Сенсорний дисплей 7 дюймів. 29 встановлених програм. Можливість програмування, експорту, імпорту за допомогою USB. Кількість програм не обмежена. Режим аквачистки. 8 сигналів системи дозування. Лоток для миючих засобів з 4 відсіками: для попереднього прання, прання, відбілювання та ополіскування. Система допомоги під час завантаження. Контролює подачу води та обертання барабана під час завантаження білизни. Три підведення води (гаряча вода, холодна вода, пом'якшена вода). Барабан та зовнішній бак із нержавіючої сталі. Потрібно анкерне кріплення та встановлення на фундамент. Підведення води: 1``. Діаметр зливу: 76 мм. Інверторний двигун. Потужність двигуна: 5.5 кВт. Потужність електричного нагріву: 36 кВт. Максимальна потужність: 41.5 квт. Напруга підключення: 380 В 3L+N+T. Габарити: 1225*1279*1640 мм. Вага нетто: 930 кг.",
    },
    {
      category: "Пральні машини промислові",
      name: "Машина пральна FAGOR LA-18 TP2 E",
      slug: "fagor-la18tp2e",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714662889/fagor-la18tp2e_q0ce1b.jpg",
      price: 665200,
      brand: "Fagor (Іспанія)",
      description:
        "Підресорна пральна машина з високошвидкісним віджимом. Максимальне завантаження: 20 кг. Номінальне завантаження: 18 кг. Нагрів: електричний. G-фактор: 450. Максимальний віджим: 1071 об/хв. Об'єм барабана: 180 л. Діаметр/глибина барабана: 700/470 мм. Діаметр дверцят: 460 мм. Управління: Touch Plus. Сенсорний дисплей 7 дюймів. 29 встановлених програм. Можливість програмування, експорту, імпорту за допомогою USB. Кількість програм не обмежена. Режим аквачистки. 8 сигналів системи дозування. Лоток для миючих засобів з 4 відсіками: для попереднього прання, прання, відбілювання та ополіскування. Система допомоги під час завантаження. Контролює подачу води та обертання барабана під час завантаження білизни. Три підведення води (гаряча вода, холодна вода, пом'якшена вода). Барабан та зовнішній бак із нержавіючої сталі. Не потрібні фіксації до підлоги. Підведення води: 3/4”. Діаметр зливу: 76 мм. Інверторний двигун. Потужність двигуна: 2.2 кВт. Потужність електричного нагріву: 12 кВт. Максимальна потужність: 12.75 квт. Напруга підключення: 380 В 3L+N+T. Габарити: 884*913*1415 мм. Вага нетто: 360 кг.",
    },
    {
      category: "Пральні машини промислові",
      name: "Машина пральна FAGOR LA-28 TP2 E",
      slug: "fagor-la28tp2e",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714662914/fagor-la28tp2e_wcwoto.jpg",
      price: 875557,
      brand: "Fagor (Іспанія)",
      description:
        "Підресорна пральна машина з високошвидкісним віджимом. Максимальне завантаження: 31 кг. Номінальне завантаження: 28 кг. Нагрів: електричний. G-фактор: 450. Максимальний віджим: 1024 об/хв. Об'єм барабана: 280 л. Діаметр/глибина барабана: 770/585 мм. Діаметр дверцят: 460 мм. Управління: Touch Plus. Сенсорний дисплей 7 дюймів. 29 встановлених програм. Можливість програмування, експорту, імпорту за допомогою USB. Кількість програм не обмежена. Режим аквачистки. 8 сигналів системи дозування. Лоток для миючих засобів з 4 відсіками: для попереднього прання, прання, відбілювання та ополіскування. Система допомоги при завантаженні. Контролює подачу води та обертання барабана під час завантаження білизни. Три підведення води (гаряча вода, холодна вода, пом'якшена вода). Барабан та зовнішній бак із нержавіючої сталі. Не потрібні фіксації до підлоги. Підведення води: 3/4”. Діаметр зливу: 76 мм. Інверторний двигун. Потужність двигуна: 4 кВт. Потужність електричного нагріву: 18 кВт. Максимальна потужність: 19.2 кВт. Напруга підключення: 380 В 3L+N+T. Габарити: 979*1070*1553 мм. Вага нетто: 540 кг.",
    },
    {
      category: "Пральні машини промислові",
      name: "Машина пральна FAGOR LA-35C TP2 E",
      slug: "fagor-la35сtp2e",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714662934/fagor-la35%D1%81tp2e_k8maph.jpg",
      price: 1128200,
      brand: "Fagor (Іспанія)",
      description:
        "Підресорна пральна машина з високошвидкісним віджимом. Максимальне завантаження: 39 кг. Номінальне завантаження: 35 кг. Нагрів: електричний. G-фактор: 450. Максимальний віджим: 966 об/хв. Об'єм барабана: 350 л. Діаметр/глибина барабана: 860/602 мм. Діаметр дверцят: 560 мм. Управління: Touch Plus. Сенсорний дисплей 7 дюймів. 29 встановлених програм. Можливість програмування, експорту, імпорту за допомогою USB. Кількість програм не обмежена. Режим аквачистки. 8 сигналів системи дозування. Лоток для миючих засобів з 4 відсіками: для попереднього прання, прання, відбілювання та ополіскування. Система допомоги під час завантаження. Контролює подачу води та обертання барабана під час завантаження білизни. Три підведення води (гаряча вода, холодна вода, пом'якшена вода). Внутрішній та зовнішній бак із нержавіючої сталі. Не потрібні фіксації до підлоги. Підведення води: 3/4”. Діаметр зливу: 76 мм. Інверторний двигун. Потужність двигуна: 6 кВт. Потужність електричного нагріву: 21 кВт. Максимальна потужність: 23 кВт. Напруга підключення: 380 В 3L+N+T. Габарити: 1095*1184*1598 мм. Вага нетто: 750 кг.",
    },
    {
      category: "Пральні машини промислові",
      name: "Машина пральна FAGOR LBS-27 TP2 E",
      slug: "fagor-lbs27tp2e",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714663001/fagor-lbs27tp2e_ufsftc.jpg",
      price: 1965121,
      brand: "Fagor (Іспанія)",
      description:
        "Пральна машина бар'єрного типу. Максимальне завантаження: 30 кг. Номінальне завантаження: 27 кг. Нагрів: електричний. G-фактор: 375. Максимальний віджим: 920 об/хв. Об'єм барабана: 266 л. Діаметр/глибина барабана: 800/530 мм. Двері: 480x515 мм. Висота завантаження: 800 мм. Управління: Touch Plus. Сенсорний дисплей 7 дюймів на стороні завантаження, інформаційний дисплей на стороні розвантаження. Можливість програмування, експорту, імпорту за допомогою USB. Кількість програм не обмежена. Режим аквачистки. 8 сигналів системи дозування. Система допомоги під час завантаження. Три підведення води (гаряча вода, холодна вода, пом'якшена вода). Барабан та зовнішній бак із нержавіючої сталі. Не потрібні фіксації до підлоги. Підведення води: 1``. Діаметр зливу: 76 мм. Інверторний двигун. Потужність двигуна: 4 кВт. Потужність електричного нагріву: 18 кВт. Максимальна потужність: 22 кВт. Напруга підключення: 380 В 3L+N+T. Габарити: 1201*1098*1581 мм. Вага нетто: 886 кг.",
    },
    {
      category: "Пральні машини промислові",
      name: "Машина пральна FAGOR LRB-18 TP2 E",
      slug: "fagor-lrb18tp2e",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714663127/fagor-lrb18tp2e_cqpfzw.jpg",
      price: 823827,
      brand: "Fagor (Іспанія)",
      description:
        "Пральна машина бар'єрного типу. Розташування дверей: завантаження-розвантаження 90º. Максимальне завантаження: 20 кг. Номінальне завантаження: 18 кг. Нагрів: електричний. G-фактор: 300. Максимальний віджим: 874 об/хв. Об'єм барабана: 180 л. Діаметр дверцят: 460 мм. Управління: Touch Plus. Сенсорний дисплей 7 дюймів, на стороні завантаження. Можливість програмування, експорту, імпорту за допомогою USB. Кількість програм не обмежена. Режим аквачистки. 8 сигналів системи дозування. Лоток для миючих засобів з 4 відсіками: для попереднього прання, прання, відбілювання та ополіскування. Система допомоги під час завантаження. Контролює подачу води та обертання барабана під час завантаження білизни. Три підведення води (гаряча вода, холодна вода, пом'якшена вода). Барабан та зовнішній бак із нержавіючої сталі. Потрібно анкерне кріплення та встановлення на фундамент. Підведення води: 3/4”. Діаметр зливу: 76 мм. Інверторний двигун. Потужність двигуна: 2.2 кВт. Потужність електричного нагріву: 12 кВт. Максимальна потужність: 12.75 кВт. Напруга підключення: 380 В 3L+N+T. Габарити: 788*840*1307 мм. Вага нетто: 360 кг.",
    },
    {
      category: "Пральні машини промислові",
      name: "Машина пральна FAGOR LAP-8 TP2 E P",
      slug: "fagor-lap8tp2e",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714662956/fagor-lap8tp2e_ftmdhf.jpg",
      price: 245774,
      brand: "Fagor (Іспанія)",
      description:
        "Професійна пральна машина з високошвидкісним віджиманням. Максимальне завантаження: 9 кг. Номінальне завантаження: 8 кг. Нагрів: електричний. G-фактор: 450. Максимальний віджим: 1250 об/хв. Об'єм барабана: 100 л. Управління: Touch Plus. Сенсорний дисплей 4.3 дюйми. 29 встановлених програм. Можливість програмування, експорту, імпорту за допомогою USB. Кількість програм не обмежена. Режим аквачистки. 8 сигналів системи дозування. Лоток для миючих засобів з 4 відсіками: для попереднього прання, прання, відбілювання та ополіскування. Два підведення води (гаряча вода, холодна вода). Барабан та зовнішній бак із нержавіючої сталі. Не потрібні фіксації до підлоги. Підведення води: 3/4”. Зливна помпа. Діаметр зливу: 50 мм. Потужність двигуна: 0.75 кВт. Потужність електричного нагріву: 6 кВт. Максимальна потужність: 6.25 кВт. Напруга підключення: 380 В 3L+N+T. Габарити: 680*698*1040 мм. Вага нетто: 140 кг.",
    },
    {
      category: "Пральні машини промислові",
      name: "Машина пральна FAGOR LN-18 TP2 E",
      slug: "fagor-ln18tp2e",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714663024/fagor-ln18tp2e_rscq2a.jpg",
      price: 413201,
      brand: "Fagor (Іспанія)",
      description:
        "Непідресорна низькошвидкісна пральна машина. Максимальне завантаження: 20 кг. Номінальне завантаження: 18 кг. Нагрів: електричний. G-фактор: 200. Максимальний віджим: 714 об/хв. Об'єм барабана: 180 л. Діаметр/глибина барабана: 700/470 мм. Діаметр дверцят: 460 мм. Управління: Touch Plus. Сенсорний дисплей 7 дюймів. 29 встановлених програм. Можливість програмування, експорту, імпорту за допомогою USB. Кількість програм не обмежена. Режим аквачистки. 8 сигналів системи дозування. Лоток для миючих засобів з 4 відсіками: для попереднього прання, прання, відбілювання та ополіскування. Система допомоги під час завантаження. Контролює подачу води та обертання барабана під час завантаження білизни. Три підведення води (гаряча вода, холодна вода, пом'якшена вода). Барабан та зовнішній бак із нержавіючої сталі. Потрібно анкерне кріплення та встановлення на фундамент. Підведення води: 3/4”. Діаметр зливу: 76 мм. Інверторний двигун. Потужність двигуна: 2.2 кВт. Потужність електричного нагріву: 12 кВт. Максимальна потужність: 12.75 кВт. Напруга підключення: 380 В 3L+N+T. Габарити: 788*840*1307 мм. Вага нетто: 281 кг.",
    },
    {
      category: "Сушильні машини промислові",
      name: "Сушильна машина FAGOR SCP-10 M E 1P Compact Concept",
      slug: "fagor-scp10me1pcc",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714714981/fagor-scp10me1pcc_kxyko7.jpg",
      price: 142957,
      brand: "Fagor (Іспанія)",
      description:
        "Професійна сушильна машина. Серія Economic Line. Максимальне завантаження: 11 кг. Номінальне завантаження: 10 кг. Нагрів: електричний. Об'єм барабана 200 л. Діаметр/глибина барабана: 590/690 мм. Корпус пофарбований у білий колір. Глухі двері. Мікроконтролер (М), вибір часу та температури сушіння. Повнорозмірний висувний фільтр ворсу. Витяжний вентилятор: 300 куб. м/годину. Діаметр витяжки: 100 мм. Потужність нагріву: 4.5 кВт. Максимальна потужність: 4.92 кВт. Напруга підключення: 220 В. Габарити: 680*775*1056 мм. Вага: 93 кг.",
    },
    {
      category: "Сушильні машини промислові",
      name: "Сушильна машина FAGOR SRP-10 TP2 E Compact Advance",
      slug: "fagor-srp10tp2eca",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714715235/fagor-srp10tp2eca_moyqc4.jpg",
      price: 180735,
      brand: "Fagor (Іспанія)",
      description:
        "Професійна сушильна машина. Серія Advance. Максимальне завантаження: 11 кг. Номінальне завантаження: 10 кг. Нагрів: електричний. Об'єм барабана 200 л. Діаметр/глибина барабана: 590/690 мм. Алюмінієві двері зі склом. Діаметр дверей: 588 мм. Програмований мікроконтролер Touch Plus 2. Сенсорний дисплей 4.3 дюйми. Повнорозмірний висувний фільтр ворсу. Витяжний вентилятор: 300 куб. м/годину. Діаметр витяжки: 100 мм. Дві потужності нагріву: 4.5 та 6.75 кВт. Максимальна потужність: 7.17 кВт. Напруга підключення: 380 В, 3L+N+T. Габарити: 680*775*1056 мм. Вага: 93 кг.",
    },
    {
      category: "Сушильні машини промислові",
      name: "Сушильна машина FAGOR SRP-10 M E Compact Concept",
      slug: "fagor-srp10mecc",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714715190/fagor-srp10mecc_uo5nby.jpg",
      price: 164851,
      brand: "Fagor (Іспанія)",
      description:
        "Професійна сушильна машина. Серія Concept. Максимальне завантаження: 11 кг. Номінальне завантаження: 10 кг. Нагрів: електричний. Об'єм барабана 200 л. Діаметр/глибина барабана: 590/690 мм. Алюмінієві двері зі склом. Діаметр дверей: 588 мм. Мікроконтролер (М), вибір часу та температури сушіння. Панель керування: електромеханічна. Повнорозмірний висувний фільтр ворсу. Витяжний вентилятор: 300 куб. м/годину. Діаметр витяжки: 100 мм. Дві потужності нагріву: 4.5 та 6.75 кВт. Максимальна потужність: 7.17 квт. Напруга підключення: 380 В, 3L+N+T. Габарити: 680*775*1056 мм. Вага 93 кг.",
    },
    {
      category: "Сушильні машини промислові",
      name: "Сушильна машина FAGOR SC-2-14 M E",
      slug: "fagor-sс214me",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714715265/fagor-s%D1%81214me_vwhrjj.jpg",
      price: 479528,
      brand: "Fagor (Іспанія)",
      description:
        "Промислова сушильна машина із двома барабанами. Максимальне завантаження: 2*15 кг. Номінальне завантаження: 2*14 кг. Продуктивність: 34.4 кг/год. Нагрів: електричний. Об'єм барабана: 269 + 269 л. Алюмінієві двері зі склом. Діаметр дверей: 574 мм. Управління: Easy Control Processor (M), контроль часу та температури. Автоматичний реверс барабана. Система проти складок. Барабан: оцинкована сталь. Корпус пофарбований у білий колір. Інверторний двигун. Витяжний вентилятор: 500 + 500 куб. м/год.  Діаметр витяжки: 200 мм. Потужність нагріву: 12+12 кВт. Максимальна потужність: 25.34 кВт. Напруга підключення: 380 В, 3L+N+T. Габарити: 785*1106*1980 мм. Вага: 275 кг.",
    },
    {
      category: "Сушильні машини промислові",
      name: "Сушильна машина FAGOR SC-2-18 M E",
      slug: "fagor-sс218me",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714715284/fagor-s%D1%81218me_tebzzn.jpg",
      price: 492407,
      brand: "Fagor (Іспанія)",
      description:
        "Промислова сушильна машина із двома барабанами. Максимальне завантаження: 2*18 кг. Номінальне завантаження: 2*17 кг. Продуктивність: 36.2 кг/год. Нагрів: електричний. Об'єм барабана: 330 + 330 л. Алюмінієві двері зі склом. Діаметр дверей: 574 мм. Управління: Easy Control Processor (M), контроль часу та температури. Автоматичний реверс барабана. Система проти складок. Барабан: оцинкована сталь. Корпус пофарбований у білий колір. Інверторний двигун. Витяжний вентилятор: 500+500 куб. м/год. Діаметр витяжки: 200 мм. Потужність нагріву: 12+12 кВт. Максимальна потужність: 25.34 кВт. Напруга підключення: 380 В, 3L+N+T. Габарити: 785*1242*1980 мм. Вага: 290 кг.",
    },
    {
      category: "Сушильні машини промислові",
      name: "Сушильна машина FAGOR SR-14 TP2 E",
      slug: "fagor-sr14tp2e",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714715088/fagor-sr14tp2e_dudajs.jpg",
      price: 266228,
      brand: "Fagor (Іспанія)",
      description:
        "Промислова сушильна машина. Максимальне завантаження: 15 кг. Номінальне завантаження: 14 кг. Продуктивність: 30 кг/год. Нагрів: електричний. Об'єм барабана: 270 л. Алюмінієві двері зі склом. Діаметр дверей: 574 мм. Програмований мікроконтролер Touch Plus 2. Сенсорний дисплей 7 дюймів. Підключення USB. Mixed Flow – змішаний аксіально-радіальний потік повітря. Автоматичний реверс барабана. Система проти складок. Барабан: нержавіюча сталь. Корпус пофарбований спеціальною фарбою Skinplate (відсутність відбитків пальців, легке очищення). Інверторний двигун. Витяжний вентилятор: 850 куб. м/год. Діаметр витяжки: 200 мм. Потужність нагріву: 18 кВт. Максимальна потужність: 18.67 кВт. Напруга підключення: 380 В, 3L+N+T. Габарити: 785*989*1694 мм. Вага: 180 кг.",
    },
    {
      category: "Сушильні машини промислові",
      name: "Сушильна машина FAGOR SR-18 TP2 Plus HPi",
      slug: "fagor-sr18tp2phpi",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714715116/fagor-sr18tp2phpi_lawnnt.jpg",
      price: 807916,
      brand: "Fagor (Іспанія)",
      description:
        "Промислова сушильна машина з тепловим насосом. Максимальне завантаження: 18 кг. Номінальне завантаження: 17 кг. Продуктивність: 15 кг/год. Нагрів: Heat pump (тепловий насос). Об'єм барабана: 330 л. Двері з подвійним склінням. Діаметр дверей: 574 мм. Програмований мікроконтролер Touch Plus 2. Сенсорний дисплей 7 дюймів. Підключення USB. Mixed Flow – змішаний аксіально-радіальний потік повітря. Автоматичний реверс барабана. Система проти складок. Система iDry – контроль вологості. Барабан: нержавіюча сталь. Корпус пофарбований спеціальною фарбою Skinplate (відсутність відбитків пальців, легке очищення). 100 % рециркуляція повітря, що не вимагає підключення до витяжки. Потрібне підключення до холодної води та каналізації. Потужність теплового насосу 3.8 кВт. Максимальна потужність: 4.77 кВт. Напруга підключення: 380 В, 3L+N+T. Габарити: 785*1125*1694 мм. Вага: 357 кг.",
    },
    {
      category: "Сушильні машини промислові",
      name: "Сушильна машина FAGOR SR-22 M E",
      slug: "fagor-sr22me",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714715138/fagor-sr22me_qi4qph.jpg",
      price: 287269,
      brand: "Fagor (Іспанія)",
      description:
        "Промислова сушильна машина. Максимальне завантаження: 24 кг. Номінальне завантаження: 22 кг. Продуктивність: 34 кг/год. Нагрів: електричний. Об'єм барабана: 438 л. Алюмінієві двері зі склом. Діаметр дверей: 574 мм. Управління: Easy Control Processor (M), контроль часу та температури. Аксіально-радіальний потік повітря. Автоматичний реверс барабана. Система проти складок. Барабан: нержавіюча сталь. Корпус пофарбований спеціальною фарбою Skinplate (відсутність відбитків пальців, легке очищення). Інверторний двигун. Витяжний вентилятор: 1200 куб. м/год. Діаметр витяжки: 200 мм. Потужність нагріву: 24 кВт. Максимальна потужність: 24.97 кВт. Напруга підключення: 380 В, 3L+N+T. Габарити: 890*1255*1812 мм. Вага: 210 кг.",
    },
    {
      category: "Сушильні машини промислові",
      name: "Сушильна машина FAGOR SR-28 M E",
      slug: "fagor-sr28me",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714715154/fagor-sr28me_kxbsmw.jpg",
      price: 339011,
      brand: "Fagor (Іспанія)",
      description:
        "Промислова сушильна машина. Максимальне завантаження: 31 кг. Номінальне завантаження: 27 кг. Продуктивність: 48.4 кг/год. Нагрів: електричний. Об'єм барабана: 549 л. Алюмінієві двері зі склом. Діаметр дверей: 802 мм. Управління: Easy Control Processor (M), контроль часу та температури. Аксіально-радіальний потік повітря. Автоматичний реверс барабана. Система проти складок. Барабан: нержавіюча сталь. Корпус пофарбований спеціальною фарбою Skinplate (відсутність відбитків пальців, легке очищення). Інверторний двигун. Витяжний вентилятор: 1200 куб. м/год. Діаметр витяжки: 200 мм. Потужність нагріву: 30 кВт. Максимальна потужність: 31.15 кВт. Напруга підключення: 380 В, 3L+N+T. Габарити: 985*1054*1975 мм. Вага: 230 кг.",
    },
    {
      category: "Сушильні машини промислові",
      name: "Сушильна машина FAGOR SRP-8 M E Compact Concept",
      slug: "fagor-srp8mecc",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714715173/fagor-srp8mecc_zkjyso.jpg",
      price: 155443,
      brand: "Fagor (Іспанія)",
      description:
        "Професійна сушильна машина. Серія Concept. Максимальне завантаження: 9 кг. Номінальне завантаження: 8 кг. Нагрів: електричний. Об'єм барабана 160 л. Діаметр/глибина барабана: 590/585 мм. Алюмінієві двері зі склом. Діаметр дверей: 588 мм. Мікроконтролер (М), вибір часу та температури сушіння. Панель керування: електромеханічна. Повнорозмірний висувний фільтр ворсу. Витяжний вентилятор: 300 куб. м/год. Діаметр витяжки: 100 мм. Дві потужності нагріву: 4.5 та 6.75 кВт. Максимальна потужність: 7.17 кВт. Напруга підключення: 380 В, 3L+N+T. Габарити: 680*722*1056 мм. Вага: 93 кг.",
    },
    {
      category: "Прасувальні машини",
      name: "Каландр прасувальний FAGOR PS-20/160 M E",
      slug: "fagor-ps20160me",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714717919/fagor-ps20160me_wux76z.jpg",
      price: 453017,
      brand: "Fagor (Іспанія)",
      description:
        "Каландр прасувальний. Сушіння та прасування за одну операцію. Фронтальна подача та доставка білизни. Панелі з нержавіючої сталі та сірого кольору. Довжина ролика 1600 мм. Продуктивність 13÷15 кг/годину. Габарити: 2128*444*1110 мм. Потужність: 12.34 кВт. Напруга підключення: 380 В. Вага: 203 кг.",
    },
    {
      category: "Прасувальні машини",
      name: "Каландр прасувальний FAGOR PS-20/200 M E",
      slug: "fagor-ps20200me",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714717941/fagor-ps20200me_tnnnm3.jpg",
      price: 486510,
      brand: "Fagor (Іспанія)",
      description:
        "Каландр прасувальний. Сушіння та прасування за одну операцію. Фронтальна подача та доставка білизни. Панелі з нержавіючої сталі та сірого кольору. Довжина ролика 2000 мм. Продуктивність 19÷21 кг/годину. Габарити: 2478*444*1110 мм. Потужність: 18.37 кВт. Напруга підключення: 380 В. Вага: 237 кг.",
    },
    {
      category: "Прасувальні машини",
      name: "Каландр прасувальний FAGOR PS-35/160 MP-E",
      slug: "fagor-ps35160mpe",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714717956/fagor-ps35160mpe_a0d4ab.jpg",
      price: 719245,
      brand: "Fagor (Іспанія)",
      description:
        "Каландр прасувальний. Довжина ролика 1600 мм. Діаметр ролика 325 мм. Зовнішній корпус сталь покрита лаком. Продуктивність 20-25 кг/годину. Регулятор обертів. Система захисту рук. Габарити: 2192*660*1112 мм. Потужність: 16.5 кВт. Напруга підключення: 380 В. Вага: 550 кг.",
    },
    {
      category: "Прасувальні машини",
      name: "Каландр прасувальний FAGOR PS-35/200 M PLUS E",
      slug: "fagor-ps35200mpluse",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714717972/fagor-ps35200mpluse_hnju81.jpg",
      price: 980964,
      brand: "Fagor (Іспанія)",
      description:
        "Каландр прасувальний. Сушіння та прасування за одну операцію. Фронтальна подача та доставка білизни. Панелі з нержавіючої сталі та сірого кольору. Довжина ролика 2000 мм. Продуктивність 40÷50 кг/годину. Габарити: 2552*686*1112 мм. Потужність: 32.02 кВт. Напруга підключення: 380 В. Вага: 435 кг.",
    },
    {
      category: "Прасувальні машини",
      name: "Каток прасувальний FAGOR P-25/140 M E",
      slug: "fagor-p25140me",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714717876/fagor-p25140me_qfv8hk.jpg",
      price: 273743,
      brand: "Fagor (Іспанія)",
      description:
        "Каток прасувальний. Панелі з сірої обшивки, верхня панель з нержавіючої сталі. Розмір рулону: 250 мм. Електронний мікропроцесор з цифровим екраном, який дозволяє легко контролювати температуру прасування машини. Електричний підігрів. Стандартна модель: рулонне покриття з поліестеру та бавовняного повсті. Швидкість: 4.2 м/хв. Продуктивність: 30 кг/год. Габарити: 1862*484*985 мм. Потужність: 7 кВт. Напруга підключення: 380 В. Вага: 134 кг.",
    },
    {
      category: "Прасувальні машини",
      name: "Каток прасувальний FAGOR P-25/200 M E",
      slug: "fagor-p25200me",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714717896/fagor-p25200me_yo30g8.jpg",
      price: 351035,
      brand: "Fagor (Іспанія)",
      description:
        "Каток прасувальний. Панелі з сірої обшивки, верхня панель з нержавіючої сталі. Розмір рулону: 250 мм. Електронний мікропроцесор з цифровим екраном, який дозволяє легко контролювати температуру прасування машини. Електричний підігрів. Стандартна модель: рулонне покриття з поліестеру та бавовняного повсті. Швидкість: 4.2 м/хв. Продуктивність: 35 кг/год. Габарити: 2462*484*985 мм. Потужність: 12.18 кВт. Напруга підключення: 380 В. Вага: 150 кг.",
    },
    {
      category: "Прасувальні машини",
      name: "Прасувальна система FAGOR P 18/100 M",
      slug: "fagor-p18100m",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714717837/fagor-p18100m_uqkh0j.jpg",
      price: 189365,
      brand: "Fagor (Іспанія)",
      description:
        "Професійний прасувальний каток. Діаметр вала: 180 мм. Довжина валу: 1000 мм. Швидкість прасування: 2.02 м/хв. Продуктивність: 15 кг/год. Підігрів: електричний. Електронне управління. Покриття валу: поліестер. Завантаження та видача білизни з лицьового боку. Пристрій для захисту пальців. Запуск прасування педаллю. Потужність нагріву: 3.3 кВт. Максимальна потужність: 3.33 кВт. Напруга підключення: 220 В, 1L + N + T. Габарити: 1370*400*952 мм. Вага: 74 кг.",
    },
    {
      category: "Прасувальні машини",
      name: "Каток прасувальний FAGOR P-18/120 M E",
      slug: "fagor-p18120me",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714717858/fagor-p18120me_f9szwf.jpg",
      price: 196451,
      brand: "Fagor (Іспанія)",
      description:
        "Каток прасувальний. Продуктивність 20 кг/год. Завантаження з максимальною вологістю 20-25 %. Зовнішній корпус з нержавіючої пофарбованої сталі. Лоток з анодованого алюмінію. Обмотка вала поліестером (опція: NOMEX). Запуск за допомогою педалі. Фронтальне завантаження і вивантаження білизни. Система захисту рук. Електронний мікропроцесор для контролю за температурою. Запобіжний термостат. Система електричного нагріву. Довжина ролика 1200 мм, діаметр ролика 180 мм. Потужність: 4,03 кВт. Напруга підключення: 220 В, 1L + N + T. Габарити: 1486*430*970 мм. Вага: 108 кг.",
    },
    {
      category: "Прасувальне обладнання",
      name: "Стіл прасувальний SIDI S931/SV",
      slug: "sidi-s931sv",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714721850/sidi-s931sv_p47xgh.jpg",
      price: 409004,
      brand: "Sidi (Італія)",
      description:
        "Стіл прасувальний (з опціями). Стандартні характеристики включають: стандартний вузол парової праски GFV з електричною паровою праскою та захистом для рук, трифазний вакуумний двигун, ізольований вентиляційний димохід, пристрій UP-STEAMING, який включає два нагрівальні елементи для розподілу пари, підставку для праски з нержавіючої сталі 304. Готовий до встановлення 2-х рук із формами. Готовий до підключення до зовнішнього паропостачання. Габарити: 600*1800*1000 мм. Потужнiсть: 4 кВт. Напруга підключення: 380 В. Вага: 155 кг.",
    },
    {
      category: "Прасувальне обладнання",
      name: "Пароманекен SIDI M781",
      slug: "sidi-m781",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714721769/sidi-m781_flu4lf.jpg",
      price: 345796,
      brand: "Sidi (Італія)",
      description:
        "Універсальний фінішер з парою. Всі деталі корпусу, що контактують з парою, виготовлені з нержавіючої сталі 304. Стандартні функції включають: мікропроцесор і дисплей з 10 програмами, які можна зберегти, перемикач для вибору між ручним і автоматичним циклом, запуск циклу педаллю та регульований потік гарячого повітря. Готовий до підключення до зовнішнього паропостачання. Версія з вбудованим бойлером має металевий корпус. Габарити: 650*650*980 мм. Потужнiсть: 1.5 кВт. Напруга підключення: 380 В. Вага: 75 кг.",
    },
    {
      category: "Прасувальне обладнання",
      name: "Стіл прасувальний SIDI FVC-902",
      slug: "sidi-fvc902",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714721719/sidi-fvc902_zdgmyf.jpg",
      price: 191942,
      brand: "Sidi (Італія)",
      description:
        "Стіл прасувальний. Універсальні міцні та надійні столи для прасування, з яких складається дана серія, позиціонуються як “entry-level” у сегменті столів з піддувом і відрізняються чудовим співвідношенням ціна/якість. У серійному оснащенні укомплектовані паровою праскою, аспіратором і вбудованим автоматичним електричним бойлером, який дає можливість живити від нього другу праску, розташовану на столі, що стоїть поруч. Вакуумна, поворотна рука з формою рукава мод. F.3. Поворотний тримач для парового шланга та кабелю. Потужнiсть: 3.3 кВт. Напруга підключення: 380 В. Габарити: 1100*380*230 мм. Вага: 100 кг.",
    },
    {
      category: "Прасувальне обладнання",
      name: "Пароманекен SIDI SIRIO 291",
      slug: "sidi-sirio291",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714721880/sidi-sirio291_u1a94i.jpg",
      price: 400845,
      brand: "Sidi (Італія)",
      description:
        "Пароманекен. Прасування верхнього одягу, штанів, спідниць та жіночих суконь (комплектується відповідними формами для верхнього одягу та пристроєм натягу пояса). Новий мікропроцесор з 10 програмами, що заносяться в пам'ять, з яких 2 основні для піджаків і штанів, що автоматично чергуються для прискорення роботи. Повторне використання гарячого повітря для швидкого розігріву кабіни. Відмінна термоізоляція дверей. Мінімальні розміри на підлозі. Простота в обслуговуванні. Подано у версії з бойлером або для підключення до джерела пари. Потужнiсть: 0.75 кВт. Напруга підключення: 220 В. Габарити: 1060*1180 мм. Вага: 165 кг.",
    },
    {
      category: "Прасувальне обладнання",
      name: "Пароманекен SIDI М 951",
      slug: "sidi-m951",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714721792/sidi-m951_ncagxe.jpg",
      price: 361555,
      brand: "Sidi (Італія)",
      description:
        "Пароманекен. Розроблений для цеху хімчистки, що має намір автоматизувати та прискорити прасування сорочок з обмеженими інвестиціями, M 951 являє собою першу стадію процесу мотивування сервісу прання сорочок у цеху хімчистки, що може бути доповнено в майбутньому використанням спеціалізованого преса для комірців та манжетів. Sidi CT-PC, замість їх прасування праскою. Ідеальний для невеликої кількості сорочок, наприклад, 50/60 сорочок на 3 години роботи на день, M 951, тим не менш, можна прасувати 20 сорочок/годину, і використовувати його для верхнього одягу (піджаків, пальт  тощо) в час, що залишився; для верхнього одягу продуктивність може сягнути 80 виробів/год. Потужнiсть: 1.27 кВт. Напруга підключення: 380 В. Габарити: 1100*2050*1650 мм. Вага: 135 кг.",
    },
    {
      category: "Прасувальне обладнання",
      name: "Пароманекен SIDI ТТ",
      slug: "sidi-tt",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714721928/sidi-tt_elsxcr.jpg",
      price: 213841,
      brand: "Sidi (Італія)",
      description:
        "Пароманекен. Брючний манекен з ручним натягом пояса та ручними затискачами для закриття штанів. Стандартні функції включають: мікропроцесор і дисплей з 10 програмами, що зберігаються, автоматичні цикли з педальним управлінням. Готовий до підключення до зовнішнього джерела пари. Робочий тиск пари: 4÷6 bar. Потужнiсть: 0.75 кВт. Напруга підключення: 380 В. Габарити: 1150*570*1870 мм. Вага: 120 кг.",
    },
    {
      category: "Прасувальне обладнання",
      name: "Прасувальний прес SIDI AT-770",
      slug: "sidi-at770",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714721667/sidi-at770_idqfar.jpg",
      price: 455593,
      brand: "Sidi (Італія)",
      description:
        "Прасувальний прес. Професійні характеристики зі швидким рухом верхньої поверхні та регульованим тиском притиску. AT-770 відкриття верхньої поверхні можливе з кутом до 60 градусів. Миттєве та потужне відпарювання завдяки пневматичним клапанам розподілу пари. Легкий доступ до керування з педальним блоком, що має бажання. Робочий тиск повітря: 8÷10 bar. Робочий тиск пари: 5.5 bar. Потужність: 1.5 кВт. Напруга підключення: 380 В. Габарити: 1250*1150 мм. Вага: 374 кг.",
    },
    {
      category: "Прасувальне обладнання",
      name: "Прасувальний прес SIDI LV-800",
      slug: "sidi-lv800",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714721744/sidi-lv800_wluc3v.jpg",
      price: 390110,
      brand: "Sidi (Італія)",
      description:
        "Прасувальні преси пневматичної дії для одягу після вологого чищення. Верхня глянсова нікельована поверхня з паровим нагріванням, нижня поверхня з паровим нагріванням. Без аспірації. Регульований тиск притиску. Відкриття верхньої поверхні під кутом 50 градусів. Робочий тиск пари: 5÷6 bar. Робочий тиск повітря: 8÷10 bar. Потужність: 1.85 кВт. Напруга підключення: 380 В. Габарити: 1250*1050 мм. Вага: 255 кг.",
    },
    {
      category: "Прасувальне обладнання",
      name: "Прасувальний прес SIDI ST-702",
      slug: "sidi-st702",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714721901/sidi-st702_xgwbcg.jpg",
      price: 348458,
      brand: "Sidi (Італія)",
      description:
        "Ручні преси для прасування з мінімальним техобслуговуванням. Спуск верхньої поверхні здійснюється за допомогою натискання на педаль. Верхня оббита і поверхня, що відпарює, або глянсова нікельована; нижня поверхня з відпарюванням та аспірацією. Обидві поверхні мають паровий нагрів. Робочий тиск пари: 5 bar. Потужність: 0.75 кВт. Напруга підключення: 380 В. Габарити: 1250*1050 мм. Вага: 355 кг.",
    },
    {
      category: "Прасувальне обладнання",
      name: "Прасувальний прес SIDI СТ-750",
      slug: "sidi-ct750",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714721693/sidi-ct750_pdiovw.jpg",
      price: 389251,
      brand: "Sidi (Італія)",
      description:
        "Прасувальні преси пневматичної дії з хорошими експлуатаційними характеристиками за прийнятною ціною. Верхня оббита і поверхня, що відпарює, або глянсова нікельована; нижня поверхня з відпарюванням та аспірацією, на запит, також з піддувом. Регульований тиск притиску. Обидві поверхні мають паровий нагрів. Відкриття верхньої поверхні під кутом 50 градусів. Доступні у незалежній версії або для підключення до централізованого джерела пари, аспірації та стисненого повітря. Робочий тиск пари: 5 bar. Робочий тиск повітря: 8÷10 bar. Потужність: 1.50 кВт. Напруга підключення: 380 В. Габарити: 1250*1060 мм. Вага: 280 кг.",
    },
    {
      category: "Прасувальне обладнання",
      name: "Стіл прасувальний SIDI NOVA",
      slug: "sidi-nova",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714721810/sidi-nova_vuthxe.jpg",
      price: 142346,
      brand: "Sidi (Італія)",
      description:
        "Вакуумний прасувальний стіл із видатними механічними та естетичними характеристиками, який ще більше відповідає вимогам наших клієнтів щодо якості та конкурентоспроможності. Вбудований 3-фазний вакуумний двигун забезпечує швидку та потужну роботу вакууму. Стіл можна налаштувати для роботи «вказівка наліво» або «вказівка направо» та забезпечити його двома поворотними кронштейнами для фінішної обробки. Перемикач може змінювати функції вакууму/видування ножних педалей. Потужність: 3.30 кВт. Напруга підключення: 380 В. Габарити: 1840*700*1300 мм. Вага: 120 кг.",
    },
    {
      category: "Прасувальне обладнання",
      name: "Стіл прасувальний SIDI NOVA VAPOR",
      slug: "sidi-novavapor",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714721832/sidi-novavapor_cexm6e.jpg",
      price: 260861,
      brand: "Sidi (Італія)",
      description:
        "Прасувальний стіл з аспірацією, піддувом та відпарюванням з фіксованим або регульованим по висоті столом. Прасувальна стільниця забезпечує широку робочу поверхню, ідеальну для прасування штанів і, завдяки піддуву, прискорює операції прасування навіть найделікатніших виробів, з уникненням блиску та відбитків. Трифазний мотор аспіратора гарантує потужну та миттєву аспірацію. Можна гладити з обох боків столу та оснастити машину двома кронштейнами для встановлення форм. Продуктивність пари: 4÷6 bar (без котла). Потужність: 4 кВт. Напруга підключення: 380 В. Габарити: 1840*700*1300 мм. Вага: 120 кг.",
    },
    {
      category: "Печі ротаційні",
      name: "Піч ротаційна APACH B46E EMPTA",
      slug: "apach-b46eempta",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714558186/apach-b46eempta_tyiqjy.jpg",
      price: 643968,
      brand: "Apach (Італія)",
      description:
        "Піч ротаційна електрична. Під аркуш 400*600мм. Система обертання візка за допомогою гаку. 2 швидкості вентилятора. Високопродуктивний парогенератор зі скороченим часом відновлення. Електромеханічна панель керування. Внутрішнє і зовнішнє оздоблення з нержавіючої сталі. Всі операції з технічного обслуговування можуть бути виконані зверху, спереду або всередині печі (можна встановлювати між 3 стінами). Ручний паровий клапан, козирьок з витяжкою, поставляється в повній збірці. Габарити: 950*1240*2340 мм. Підключення: 24кВт + 1.5 кВт, 400 В. Вага: 450 кг.",
    },
    {
      category: "Печі ротаційні",
      name: "Піч ротаційна APACH B46E-FS DPTA",
      slug: "apach-b46efsdpta",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714558227/apach-b46efsdpta_wxpyv7.jpg",
      price: 1042535,
      brand: "Apach (Італія)",
      description:
        "Піч ротаційна електрична. Під аркуш 400*600мм. Система обертання візка за допомогою гаку. 2 швидкості вентилятора. Високопродуктивний парогенератор зі скороченим часом відновлення. Цифрова панель керування. Внутрішнє і зовнішнє оздоблення з нержавіючої сталі. Всі операції з технічного обслуговування можуть бути виконані зверху, спереду або всередині печі (можна встановлювати між 3 стінами). FS версія дозволяє скоротити споживання електроенергії на 33% або 66% при неповному завантаженні візка. Ручний паровий клапан, козирьок з витяжкою, поставляється в повній збірці. Габарити: 950*1240*2340 мм. Підключення: 24кВт + 1.5 кВт, 400 В. Вага: 450 кг.",
    },
    {
      category: "Печі ротаційні",
      name: "Піч ротаційна APACH G46E AP2M",
      slug: "apach-g46eap2m",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714558251/apach-g46eap2m_hrw33q.jpg",
      price: 1100155,
      brand: "Apach (Італія)",
      description:
        "Піч ротаційна електрична. Під аркуш 400*600мм. Система обертання візка за допомогою гаку. 2 швидкості вентилятора. Високопродуктивний парогенератор зі скороченим часом відновлення. Автоматична панель керування. Внутрішнє і зовнішнє оздоблення з нержавіючої сталі. Полегшена система зачинення дверей, що не вимагає значних фізичних зусиль. Доступ до нагрівальних елементів з лівого боку. Козирьок з витяжкою, поставляється в 2 модулях. Габарити: 1000*1420*2340 мм. Підключення: 24кВт + 1.5 кВт, 400 В. Вага: 650 кг.",
    },
    {
      category: "Печі подові",
      name: "Піч подова APACH E2K1L DP з підставкою без направляючих",
      slug: "apach-e2k1ldp",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714564502/apach-e2k1ldp_gr7xhx.jpg",
      price: 629950,
      brand: "Apach (Італія)",
      description:
        "Піч подова з підставкою без направляючих. Розмір пода: 60*80см (2 од.). Висота: пода (корисна) 180мм (2 од.), підставки - 940 мм. 2 ізоляційні модулі 100 мм. Козирьок з витяжкою: 355 мм. Панель керування, незалежна для кожного пода, керована цифровою клавіатурою, з ЖК-екраном і вбудованим світлодіодним дисплеєм, інтелектуальне управління з 1 температурою і 3 зонами потужності на дисплеї (% ВЕРХ -% НИЗ -% ФРОНТ), 30 програм в пам'яті. Основа з цементного агломерату висотою 20 мм з металевим каркасом. Габарити: 1040*1235*1735мм. Підключення: 5 кВт * 2 + 0.5 кВт. Напруга підключення: 380 В. Вага: 425 кг.",
    },
    {
      category: "Печі подові",
      name: "Піч подова APACH E2K2L DP з підставкою без направляючих",
      slug: "apach-e2k2ldp",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714564523/apach-e2k2ldp_ic1kyk.jpg",
      price: 861720,
      brand: "Apach (Італія)",
      description:
        "Піч подова з підставкою без направляючих. Розмір пода 60*80см (3 од.). Висота: пода (корисна) 180 мм (3 од.), підставки - 740 мм. 2 ізоляційні модулі 100 мм. Козирьок з витяжкою: 355 мм. Панель керування, незалежна для кожного пода, керована цифровою клавіатурою, з ЖК-екраном і вбудованим світлодіодним дисплеєм, інтелектуальне управління з 1 температурою і 3 зонами потужності на дисплеї (% ВЕРХ -% НИЗ -% ФРОНТ), 30 програм в пам'яті. Основа з цементного агломерату висотою 20 мм з металевим каркасом. Габарити: 1040*1235*2120 мм. Потужність підключення: (5кВт*3) + 0.5 кВт. Напруга підключення: 380 В. Вага: 575 кг.",
    },
    {
      category: "Камери розстійні",
      name: "Камера розстійна APACH RP40601P2C",
      slug: "apach-rp40601p2c",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714566602/apach-rp40601p2c_mpyh8u.jpg",
      price: 670585,
      brand: "Apach (Італія)",
      description:
        "Камера розстійна з перериванням бродіння без підлоги. Конструкція ізотермічних і модульних панелей сендвіч-типу товщиною 60 мм з поліуретану. Двері в комплекті з ручкою, ключем і ручкою безпеки всередині. Камера для двох візків під листи 400*600 мм, 1 двері, без підлоги. Габарити: 950*1350*2290 мм. Робочі габарити 830*1230*2230 мм. Підключення: 6 кВт. Напруга підключення: 380 В. Вага: 360 кг.",
    },
    {
      category: "Камери розстійні",
      name: "Камера розстійна APACH RP60801P2C",
      slug: "apach-rp60801p2c",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714566666/apach-rp60801p2c_mhtbhy.jpg",
      price: 553539,
      brand: "Apach (Італія)",
      description:
        "Камера розстійна з перериванням бродіння без підлоги. Конструкція ізотермічних і модульних панелей сендвіч-типу товщиною 60 мм з поліуретану. Двері в комплекті з ручкою, ключем і ручкою безпеки всередині. Камера для двох візків під листи 600*800 мм, 1 двері, без підлоги. Габарити: 1150*1750*2290 мм. Робочі габарити 1030*1630*2230. Підключення: 6 кВт. Напруга підключення: 380 В. Вага: 420 кг.",
    },
    {
      category: "Камери розстійні",
      name: "Камера розстійна APACH P40601P2CB",
      slug: "apach-rp40601p2cb",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714566638/apach-rp40601p2cb_e9vujv.jpg",
      price: 322070,
      brand: "Apach (Італія)",
      description:
        "Камера розстійна з підлогою та вікнами. Пофарбовані алюмінієві двері зі скляним ілюмінатором, 1 пара/опалення група розміщена на верхній частині прувера (поза зоною пари) керується за допомогою програмованої цифрової панелі керування температури та вологості, у комплекті з тижневим програмуванням система запалювання, рециркуляційний вентилятор/и, внутрішнє освітлення. Стиль BASIC – алюмінієві вхідні двері № 1 з ілюмінатором - DIGIT панель керування. Місткість: 2 стійки 400*600 мм,  h = 1670 мм. Розміри (ш*г*в): 800*1600*2000 мм + 280 мм. Потужність: 4 кВт (потужність 8 кВт)*. Напруга підключення: 380 В. Вага: 232 кг. ",
    },
    {
      category: "Камери розстійні",
      name: "Камера розстійна APACH P40602P4CB",
      slug: "apach-p40602p4cb",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714566533/apach-p40602p4cb_eyuofs.jpg",
      price: 314459,
      brand: "Apach (Італія)",
      description:
        "Камера розстійна з підлогою. Алюмінієва конструкція камери складається з ізотермічних і модульних панелей сендвіч-типу товщиною 40 мм, виготовлених з поліуретану з алюмінієвим покриттям. Камера для чотирьох візків під листи 400*600 мм, 2 двері, з підлогою. Габарити: 1330*1600*2300 мм. Робочі габарити 1210*1320*2000 мм. Потужність: 5 кВт. Напруга підключення: 380 В. Вага: 290 кг.",
    },
    {
      category: "Камери розстійні",
      name: "Камера розстійна APACH P60802P2CB",
      slug: "apach-p60802p2cb",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714566567/apach-p60802p2cb_gdw8m0.jpg",
      price: 351310,
      brand: "Apach (Італія)",
      description:
        "Камера розстійна з підлогою та вікнами. Алюмінієва конструкція камери складається з ізотермічних і модульних панелей сендвіч-типу товщиною 40 мм, виготовлених з поліуретану з алюмінієвим покриттям. Камера для двох візків під листи 600*800 мм, 2 двері, з підлогою та вікнами. Габарити: 1700*1140*2300 мм. Робочі габарити: 1580*880*2000 мм. Потужність: 6 кВт. Напруга підключення: 380 В. Вага: 288 кг.",
    },
    {
      category: "Планетарні міксери пекарські",
      name: "Міксер планетарний APACH APL 20",
      slug: "apach-apl20",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714568413/apach-apl_vvcqid.jpg",
      price: 154370,
      brand: "Apach (Італія)",
      description:
        "Міксер планетарний. Підлоговий. Електронне табло. Об'єм чаші: 20 л. Швидкість збивання вінчика: 100-450 об/хв. З'ємна чаша та захисна решітка з нержавіючої сталі. Варіатор швидкості. Міксер має 3 насадки: вінчик, гак та лопатку. Габарити: 630*670*1130 мм. Підключення: 0.75 кВт, 380 В. Вага: 120 кг.",
    },
    {
      category: "Планетарні міксери пекарські",
      name: "Міксер планетарний APACH APL 30",
      slug: "apach-apl30",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714568413/apach-apl_vvcqid.jpg",
      price: 236715,
      brand: "Apach (Італія)",
      description:
        "Міксер планетарний. Підлоговий. Об'єм чаші: 30 л. Швидкість збивання вінчика: 100-450 об/хв. З'ємна чаша та захисна решітка з нержавіючої сталі. Міксер має 3 насадки: вінчик, гак та лопатку. Габарити: 740*870*1330 мм. Підключення: 1.1 кВт, 380 В. Вага: 160 кг.",
    },
    {
      category: "Планетарні міксери пекарські",
      name: "Міксер планетарний APACH APL 40",
      slug: "apach-apl40",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714568413/apach-apl_vvcqid.jpg",
      price: 268535,
      brand: "Apach (Італія)",
      description:
        "Міксер планетарний. Підлоговий. Об'єм чаші: 40 л. Швидкість збивання вінчика: 100-450 об/хв. З'ємна чаша та захисна решітка з нержавіючої сталі. Міксер має 3 насадки: вінчик, гак та лопатку. Габарити: 810*900*1500 мм. Підключення: 1.5 кВт, 380 В. Вага: 245 кг.",
    },
    {
      category: "Планетарні міксери пекарські",
      name: "Міксер планетарний APACH APL 60",
      slug: "apach-apl60",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714568413/apach-apl_vvcqid.jpg",
      price: 290035,
      brand: "Apach (Італія)",
      description:
        "Міксер планетарний. Підлоговий. Об'єм чаші: 60 л. Швидкість збивання вінчика: 100-450 об/хв. З'ємна чаша та захисна решітка з нержавіючої сталі. Міксер має 3 насадки: вінчик, гак та лопатку. Габарити: 810*900*1500 мм. Підключення: 2.2 кВт, 380 В. Вага: 265 кг.",
    },
    {
      category: "Планетарні міксери пекарські",
      name: "Міксер планетарний APACH APL 80",
      slug: "apach-apl80",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714568413/apach-apl_vvcqid.jpg",
      price: 351783,
      brand: "Apach (Італія)",
      description:
        "Міксер планетарний. Підлоговий. Об'єм чаші: 80 л. Швидкість збивання вінчика: 100-450 об/хв. З'ємна чаша на колесах та захисна решітка з нержавіючої сталі. Міксер має 3 насадки: вінчик, гак та лопатку. Габарити: 830*1030*1500 мм. Підключення: 3 кВт, 380 В. Вага: 280 кг.",
    },
    {
      category: "Тістоміси пекарські",
      name: "Тістоміс APACH TW40 дворучний",
      slug: "apach-tw40",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714632625/apach-tw40_xsvwci.jpg",
      price: 362115,
      brand: "Apach (Італія)",
      description:
        "Тістоміс дворучний. Захисна прозора кришка. Фіксована діжа з нержавіючої сталі. Одна рука регулюється по висоті, щоб було легше виймати тісто з діжі. Панель керування механічна на боковій підставці. Місильний орган: 2. 2 швидкості (1 - 40 об/хв, 2 - 60 об/хв). 2 таймера. Місткість тіста: 40 кг. Місткість борошна: 2-27 кг. Об'єм діжі 67 л. Габарити: 690*870*1320 мм. Підключення: 1.1/1.6 кВт, 380 В. Вага: 265 кг.",
    },
    {
      category: "Тістоміси пекарські",
      name: "Тістоміс APACH TW60 дворучний",
      slug: "apach-tw60",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714632644/apach-tw60_zrfelc.jpg",
      price: 426552,
      brand: "Apach (Італія)",
      description:
        "Тістоміс дворучний. Захисна прозора кришка. Фіксована діжа з нержавіючої сталі. Одна рука регулюється по висоті, щоб було легше виймати тісто з діжі. Панель керування механічна на боковій підставці. Місильний орган: 2. 2 швидкості (1 - 40 об/хв, 2 - 60 об/хв). 2 таймера. Місткість тіста: 60 кг. Місткість борошна: 2-38 кг. Об'єм діжі 95 л. Габарити: 690*870*1420 мм. Підключення: 1.1/1.6 кВт, 380 В. Вага: 272 кг.",
    },
    {
      category: "Тістоміси пекарські",
      name: "Тістоміс спіральний APACH V-R 120",
      slug: "apach-vr120",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714632736/apach-vr120_uo7rpo.jpg",
      price: 637940,
      brand: "Apach (Італія)",
      description:
        "Тістоміс спіральний. Діжа, спіраль, центральний відсікач з нержавіючої сталі високої міцності. Подвійна трансмісія. Місильний орган: 1. Панель керування: електронна. Підходить для більш тугого тіста. 2 мотора, 2 швидкості, 2 таймера. Реверс діжі на першій швидкості. Об'єм діжі - 188 л. Місткість тіста (мін/макс) - 8/120 кг. Габарити: 779*1251*1502 мм. Підключення: 6.2 + 0.55 кВт. Вага: 545 кг.",
    },
    {
      category: "Тістоміси пекарські",
      name: "Тістоміс спіральний APACH V-R 160",
      slug: "apach-vr160",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714632758/apach-vr160_vfxzd6.jpg",
      price: 619995,
      brand: "Apach (Італія)",
      description:
        "Тістоміс спіральний. Діжа, спіраль, центральний відсікач з нержавіючої сталі високої міцності. Подвійна трансмісія. Місильний орган: 1. Панель керування: електронна. Підходить для більш тугого тіста. 2 мотора, 2 швидкості, 2 таймера. Реверс діжі на першій швидкості. Об'єм діжі - 266 л. Місткість тіста (мін/макс) - 10/160 кг. Габарити: 879*1497*1582 мм. Підключення: 12 + 0.75 кВт. Вага: 745 кг.",
    },
    {
      category: "Тістоміси пекарські",
      name: "Тістоміс спіральний APACH V-R 80",
      slug: "apach-vr80",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714632718/apach-vr80_drn6ir.jpg",
      price: 586853,
      brand: "Apach (Італія)",
      description:
        "Тістоміс спіральний. Діжа, спіраль, центральний відсікач з нержавіючої сталі високої міцності. Подвійна трансмісія. Місильний орган: 1. Панель керування: електронна. Підходить для більш тугого тіста. 2 мотора, 2 швидкості, 2 таймера. Реверс діжі на першій швидкості. Об'єм діжі - 131 л. Місткість тіста (мін/макс) - 5/80 кг. Габарити: 698*1126*1385 мм. Підключення: 5.2 + 0.55 кВт. Вага: 390 кг.",
    },
    {
      category: "Тістоміси пекарські",
      name: "Тістоміс спіральний APACH V 120",
      slug: "apach-v120",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714632690/apach-v120_ekeweb.jpg",
      price: 617333,
      brand: "Apach (Італія)",
      description:
        "Тістоміс спіральний. Діжа, спіраль, центральний відсікач з нержавіючої сталі високої міцності. Ремінна передача. Місильний орган: 1. Панель керування: механічна. 2 мотора, 2 швидкості, 2 таймера. Реверс діжі на першій швидкості. Об'єм діжі - 188 л. Місткість тіста (мін/макс) - 8/120 кг. Габарити: 779*1251*1502 мм. Підключення: 5.2 + 0.55кВт. Вага: 505 кг.",
    },
    {
      category: "Тістоміси пекарські",
      name: "Тістоміс спіральний APACH V 160",
      slug: "apach-v160",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714632704/apach-v160_a4ekd9.jpg",
      price: 545597,
      brand: "Apach (Італія)",
      description:
        "Тістоміс спіральний. Діжа, спіраль, центральний відсікач з нержавіючої сталі високої міцності. Ремінна передача. Місильний орган: 1. Панель керування: механічна. 2 мотора, 2 швидкості, 2 таймера. Реверс діжі на першій швидкості. Об'єм діжі - 266 л. Місткість тіста (мін/макс) - 10/160 кг. Габарити: 879*1497*1582 мм. Підключення: 10.3 + 0.75кВт. Вага: 695 кг.",
    },
    {
      category: "Тістоміси пекарські",
      name: "Тістоміс спіральний APACH V 60",
      slug: "apach-v60",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714632663/apach-v60_txgxur.jpg",
      price: 462785,
      brand: "Apach (Італія)",
      description:
        "Тістоміс спіральний. Діжа, спіраль, центральний відсікач з нержавіючої сталі високої міцності. Ремінна передача. Місильний орган: 1. Панель керування: механічна. 2 мотора, 2 швидкості, 2 таймера. Реверс діжі на першій швидкості. Об'єм діжі - 117 л. Місткість тіста (мін/макс) - 4/60 кг. Габарити: 698*1126*1385 мм. Підключення: 3.7 + 0.55 кВт. Вага: 345 кг.",
    },
    {
      category: "Тістоміси пекарські",
      name: "Тістоміс спіральний APACH L-R 120 з підкатною діжею",
      slug: "apach-lr120",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714632604/apach-lr120_evcb9u.jpg",
      price: 1087202,
      brand: "Apach (Італія)",
      description:
        "Тістоміс спіральний з підкатною діжею. Має 3 мотора (на спіраль, на діжу, на гідравлічний механізм), 2 швидкості у спіралі і одна у діжі з можливістю реверсу на першій швидкості. 2 таймера. Подвійна трансмісія. Підходить для більш тугого тіста. Підкатний механізм легко керований, підняття і опускання голови здійснюється автоматично. Електричний блок і панель управління розташований збоку. Місильний орган: 1. Панель керування: механічна. Об'єм діжі - 188 л. Місткість тіста (мін/макс) - 8/120 кг. Габарити: 1235х1960х1450 мм, з піднятою головою - 1840 мм. Підключення: 4.0 / 8.0 + 0.75 кВт. Вага: 870 кг.",
    },
    {
      category: "Тістоміси пекарські",
      name: "Тістоміс спіральний APACH L 80 з підкатною діжею",
      slug: "apach-l80",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714632582/apach-l80_ojusbg.jpg",
      price: 1367321,
      brand: "Apach (Італія)",
      description:
        "Тістоміс спіральний з підкатною діжею. Має 3 мотора (на спіраль, на діжу, на гідравлічний механізм), 2 швидкості у спіралі і одна у діжі з можливістю реверсу на першій швидкості. 2 таймера. Підкатний механізм легко керований, підняття і опускання голови здійснюється автоматично. Електричний блок і панель управління розташований збоку. Місильний орган: 1. Панель керування: механічна. Об'єм діжі - 154 л. Місткість тіста (мін/макс) - 5/80 кг. Габарити: 1235*1960*1840 мм, з піднятою головою - 1840 мм. Підключення: 4.0 / 8.0 + 0.75 кВт. Вага: 800 кг.",
    },
    {
      category: "Тісторозкатки пекарські",
      name: "Тісторозкатка SINMAG SM-520F",
      slug: "sinmag-sm520f",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714637257/sinmag-sm520f_vu44jy.jpg",
      price: 256936,
      brand: "Sinmag (Бельгія)",
      description:
        "Тісторозкатка підлогова. Ширина стрічки: 520 мм. Максимальна товщина тіста: 30 мм. Габарити:1030*2610*1170 мм. Підключення: 0.55 кВт, 380 В. Вага: 168 кг.",
    },
    {
      category: "Тісторозкатки пекарські",
      name: "Тісторозкатка APACH ASF 500-700",
      slug: "apach-asf500-700",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714637226/apach-asf500-700_rmyrty.jpg",
      price: 269386,
      brand: "Apach (Італія)",
      description:
        "Тісторозкатка підлогова. Ширина стрічки: 500 мм. Діаметр роликів: 70 мм. Максимальна товщина тіста: 35 мм. Габарити: 2200*1180*1270 мм. Підключення: 0.55 кВт, 380 В. Вага: 220 кг.",
    },
    {
      category: "Тісторозкатки пекарські",
      name: "Тісторозкатка APACH ASF 500-1000",
      slug: "apach-asf500-1000",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714637284/apach-asf500-1000_rlb46f.jpg",
      price: 278186,
      brand: "Apach (Італія)",
      description:
        "Тісторозкатка підлогова. Ширина стрічки: 500 мм. Діаметр роликів: 70 мм. Максимальна товщина тіста: 35 мм. Габарити: 2800х1180х1270 мм. Підключення: 0.55 кВт, 380 В. Вага: 230 кг.",
    },
    {
      category: "Тісторозкатки пекарські",
      name: "Тісторозкатка APACH ASF 600-1250",
      slug: "apach-asf600-1250",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714637304/apach-asf600-1250_zkphuk.jpg",
      price: 305447,
      brand: "Apach (Італія)",
      description:
        "Тісторозкатка підлогова. Ширина стрічки: 600 мм. Діаметр роликів: 70 мм. Максимальна товщина тіста: 35 мм. Габарити: 3050*1280*1270 мм. Підключення: 0.55 кВт, 380 В. Вага: 265 кг.",
    },
    {
      category: "Тісторозкатки пекарські",
      name: "Тісторозкатка APACH ASF 600-1500",
      slug: "apach-asf600-1500",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714637320/apach-asf600-1500_ilug2r.jpg",
      price: 312101,
      brand: "Apach (Італія)",
      description:
        "Тісторозкатка підлогова. Ширина стрічки: 600 мм. Діаметр роликів: 70 мм. Максимальна товщина тіста: 35 мм. Габарити: 3550*1280*1270 мм. Підключення: 0.55 кВт, 380 В. Вага: 280 кг.",
    },
    {
      category: "Тісторозкатки пекарські",
      name: "Тісторозкатка APACH ASH 500-700",
      slug: "apach-ash500-700",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714637347/apach-ash500-700_v2z1z7.jpg",
      price: 209498,
      brand: "Apach (Італія)",
      description:
        "Тестораскатка підлогова. Корпус виготовлений із забарвленої сталі. Джойстик керування. Захисні решітки. Колеса для зручного пересування. Ширина стрічки: 500 мм. Діаметр роликів: 60 мм. Товщина розкочування тіста: 0.1 - 34 мм. Габарити: 955*2050*1280 мм. Підключення: 0.55 кВт, 380 В. Вага: 152 кг.",
    },
    {
      category: "Тісторозкатки пекарські",
      name: "Тісторозкатка APACH ASH 600-1200",
      slug: "apach-ash600-1200",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714637366/apach-ash600-1200_jehaq2.jpg",
      price: 221519,
      brand: "Apach (Італія)",
      description:
        "Тісторозкатка підлогова. Корпус виготовлений з пофарбованої сталі. Джойстик керування. Захисні решітки. Колеса для зручного пересування. Ширина стрічки: 600 мм. Діаметр роликів: 60 мм. Товщина розкатки тіста: 0.1 - 34 мм. Габарити: 2850*1055*1280 мм. Підключення: 0.55 кВт, 380 В. Вага: 184 кг.",
    },
    {
      category: "Тісторозподілювачі пекарські",
      name: "Тісторозподілювач SINMAG Divobun 430",
      slug: "sinmag-divobun430",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714642262/sinmag-divobun430_gs3fpb.jpg",
      price: 371345,
      brand: "Sinmag (Бельгія)",
      description:
        "Тісторозподілювач-округлювач. Рівномірно розподіляє тісто. Ідеальне округлення тістових заготовок. Ножі з нержавіючої сталі. Легке регулювання для різної ваги тіста. Машина рухома. Положення для чищення ножів. Ідеально підходить для невеликих булочок і округлення тіста для піци. Кількість заготовок - 30. Кількість формувальних плит - 3. Діапазон ваги тіста - 40 - 120 г. Потужність двигуна - 0.55 кВт. Напруга - 230/380 В, 3 фази, 50 Гц. Габарити: 600*700*2200 мм. Вага нетто машини - 340 кг.",
    },
    {
      category: "Тісторозподілювачі пекарські",
      name: "Тісторозподілювач APACH SDT100 SA",
      slug: "apach-sdt100sa",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714642368/apach-sdt100sa_fnauul.jpg",
      price: 534049,
      brand: "Apach (Італія)",
      description:
        "Тісторозділювач вакуумний поршневий. Циліндр з нержавіючої сталі INOX на 30 кг. Електронне регулювання швидкості. Ручне регулювання ваги заготовок. Транспортна стрічка з регулюванням висоти. Корпус пофарбований у білий колір лаком. Діаметр поршня: 100 мм. Вага заготовки тіста: 50-700 г. Габарити: 536*1802*1405 мм. Підключення: 2.2 кВт, 380 В. Вага: 520 кг.",
    },
    {
      category: "Тісторозподілювачі пекарські",
      name: "Тісторозподілювач APACH  SQ A20",
      slug: "apach-sqa20",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714642530/apach-sqa20_bzbkqn.jpg",
      price: 347218,
      brand: "Apach (Італія)",
      description:
        "Тісторозділювач автоматичний. Машина з гідравлічним приводом, з циліндром подвійної дії для пресування і розрізання. Панель керування з можливістю регулювання часу пресування і розрізання. Кнопка очищення ножів. Можливість зберегти до 9 різних програм. Ножі та решітки з нержавіючої сталі 304. Внутрішня поверхня з харчового поліетилену. Прямокутна діжа. Місткість 20кг, 20 шматків тіста з масою від 150 до 1000 гр. Продуктивність: 2400 од/годину. Габарити: 660*700*1100 мм. Висота з відкритою кришкою: 1600 мм. Підключення: 0.75 кВт. Напруга: 380 В. Вага: 230 кг.",
    },
    {
      category: "Тісторозподілювачі пекарські",
      name: "Тісторозподілювач APACH  SQ A40",
      slug: "apach-sqa40",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714642589/apach-sqa40_wqhnvr.jpg",
      price: 376925,
      brand: "Apach (Італія)",
      description:
        "Тісторозділювач автоматичний. Машина з гідравлічним приводом, з циліндром подвійної дії для пресування і розрізання. Панель керування з можливістю регулювання часу пресування і розрізання. Кнопка очищення ножів. Можливість зберегти до 9 різних програм. Ножі та решітки з нержавіючої сталі 304. Внутрішня поверхня з харчового поліетилену. Прямокутна діжа. Місткість 20 кг, 40 шматків тіста з масою від 80 до 500 гр. Продуктивність: 4800 од/годину. Габарити: 660*700*1100мм. Висота з відкритою кришкою: 1600 мм. Підключення: 0.75 кВт. Напруга: 400 В. Вага: 230 кг.",
    },
    {
      category: "Тісторозподілювачі пекарські",
      name: "Тісторозподілювач APACH  SQ A60",
      slug: "apach-sqa60",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714642617/apach-sqa60_nyzwrz.jpg",
      price: 396802,
      brand: "Apach (Італія)",
      description:
        "Тісторозділювач автоматичний. Машина з гідравлічним приводом, з циліндром подвійної дії для пресування і розрізання. Панель керування з можливістю регулювання часу пресування і розрізання. Кнопка очищення ножів. Можливість зберегти до 9 різних програм. Ножі та решітки з нержавіючої сталі 304, внутрішня поверхня з харчового поліетилену. Прямокутна діжа. Місткість 20 кг, 60 шматків тіста з масою від 50 до 330 гр. Продуктивність - 7200 од/годину. Габарити: 660*700*1100 мм. Висота з відкритою кришкою: 1600 мм. Підключення: 0.75 кВт. Напруга: 380 В. Вага: 230 кг.",
    },
    {
      category: "Тісторозподілювачі пекарські",
      name: "Тісторозподілювач APACH  SDT80 SA",
      slug: "apach-sdt80sa",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714642339/apach-sdt80sa_icq1xt.jpg",
      price: 534049,
      brand: "Apach (Італія)",
      description:
        "Тісторозділювач вакуумний поршневий. Циліндр з нержавіючої сталі INOX на 30 кг. Електронне регулювання швидкості. Ручне регулювання ваги заготовок. Транспортна стрічка з регулюванням висоти. Корпус пофарбований у білий колір лаком. Діаметр поршня: 80 мм. Вага заготовки тіста: 30 - 370 г. Габарити: 536*1802*1405 мм. Підключення: 2.2 кВт. Напруга: 380 В. Вага: 520 кг.",
    },
    {
      category: "Тісторозподілювачі пекарські",
      name: "Тісторозподілювач APACH  SD100 SA",
      slug: "apach-sd100sa",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714642293/apach-sd100sa_r8eviu.jpg",
      price: 582131,
      brand: "Apach (Італія)",
      description:
        "Тісторозділювач вакуумний поршневий з округлюючим пристроєм. Циліндр з нержавіючої сталі INOX на 30 кг. Електронне регулювання швидкості. Ручне регулювання ваги заготовок з округлюючим пристроєм. Транспортна стрічка з регулюванням висоти. Корпус пофарбований у білий колір лаком. Діаметр поршня 100 мм. Вага заготовки тіста: 50 - 700 г. Габарити: 703*1803*1405 мм. Підключення: 2.2 кВт. Напруга: 380 В. Вага: 520 кг.",
    },
    {
      category: "Тісторозподілювачі пекарські",
      name: "Тісторозподілювач APACH  SD130 SA",
      slug: "apach-sd130sa",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714642320/apach-sd130sa_hwemid.jpg",
      price: 582131,
      brand: "Apach (Італія)",
      description:
        "Тісторозділювач вакуумний поршневий з округлюючим пристроєм. Циліндр з нержавіючої сталі INOX на 30 кг. Електронне регулювання швидкості. Ручне регулювання ваги заготовок з округлюючим пристроєм. Транспортна стрічка з регулюванням висоти. Корпус пофарбований у білий колір лаком. Діаметр поршня 130 мм. Вага заготовки тіста: 130 - 1200 г. Габарити: 703*1803*1405 мм. Підключення: 2.2 кВт. Напруга: 380 В. Вага: 520 кг.",
    },
    {
      category: "Тісторозподілювачі пекарські",
      name: "Тісторозподілювач APACH  SE M19",
      slug: "apach-sem19",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714642403/apach-sem19_synuzd.jpg",
      price: 272820,
      brand: "Apach (Італія)",
      description:
        "Тісторозділювач ручний. Машина з механічним приводом. Всі функції пресування, розрізання і очищення ножів доступні за допомогою важелів. Ножі та решітки з нержавіючої сталі 304, внутрішня поверхня з харчового поліетилену. Шестикутна діжа. Місткість 6 кг, 19 шматків тіста з масою від 90 до 300 гр. Продуктивність: 1200 од/годину. Габарити: 700*1060x1100 мм. Висота з відкритою кришкою: 1500 мм. Вага: 210 кг.",
    },
    {
      category: "Тісторозподілювачі пекарські",
      name: "Тісторозподілювач APACH  SQ M20",
      slug: "apach-sqm20",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714642644/apach-sqm20_vvvmhi.jpg",
      price: 188463,
      brand: "Apach (Італія)",
      description:
        "Тісторозділювач ручний. Машина з механічним приводом. Всі функції пресування, розрізання і очищення ножів доступні за допомогою важелів. Ножі та решітки з нержавіючої сталі 304, внутрішня поверхня з харчового поліетилену. Прямокутна діжа. Місткість 7 кг, 20 шматків тіста з масою від 80 до 350 гр. Продуктивність: 1200 од/годину. Габарити: 700*1060*1100 мм. Висота з відкритою кришкою: 1500 мм. Вага: 200 кг.",
    },
    {
      category: "Тісторозподілювачі пекарські",
      name: "Тісторозподілювач APACH  SQ M42",
      slug: "apach-sqm42",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714642669/apach-sqm42_dvtrbl.jpg",
      price: 0,
      brand: "Apach (Італія)",
      description:
        "Тісторозділювач ручний. Машина з механічним приводом. Всі функції пресування, розрізання і очищення ножів доступні за допомогою важелів. Ножі та решітки з нержавіючої сталі 304, внутрішня поверхня з харчового поліетилену. Прямокутна діжа. Місткість 7 кг, 42 шматків тіста з масою від 40 до 170 гр. Продуктивність: 1200 од/годину. Габарити: 700*1060*1100 мм. Висота з відкритою кришкою: 1500 мм. Вага: 200 кг.",
    },
    {
      category: "Тісторозподілювачі пекарські",
      name: "Тісторозподілювач APACH  SPA A15",
      slug: "apach-spaa15",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714642433/apach-spaa15_sfiio2.jpg",
      price: 629912,
      brand: "Apach (Італія)",
      description:
        "Тісторозділювач-округлювач автоматичний. Машина з гідравлічним приводом, з двома циліндрами для пресування, одним циліндром для розрізання і одним - для округлення. Панель керування з можливістю регулювання часу пресування, округлення і відкриття формувальної камери. Кнопка очищення ножів. Можливість зберегти до 9 різних програм. Ножі та решітки з нержавіючої сталі 304, внутрішня поверхня з харчового поліетилену. Кругла діжа. Місткість 5.5 кг, 15 шматків тіста з масою від 150 до 360 гр. Продуктивність: 1800 од/годину. Габарити: 660*700*1450 мм. Підключення: 1.3 кВт. Напруга: 380 В. Вага: 245 кг.",
    },
    {
      category: "Тісторозподілювачі пекарські",
      name: "Тісторозподілювач APACH  SPA A22",
      slug: "apach-spaa22",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714642452/apach-spaa22_mw8zwu.jpg",
      price: 629912,
      brand: "Apach (Італія)",
      description:
        "Тісторозділювач-округлювач автоматичний. Машина з гідравлічним приводом, з двома циліндрами для пресування, одним циліндром для розрізання і одним - для округлення. Панель керування з можливістю регулювання часу пресування, округлення і відкриття формувальної камери. Кнопка очищення ножів. Можливість зберегти до 9 різних програм. Ножі та решітки з нержавіючої сталі 304, внутрішня поверхня з харчового поліетилену. Кругла діжа. Місткість 5 кг, 22 шматків тіста з масою від 60 до 220 гр. Продуктивність: 2600 од/годину. Габарити: 660*700*1450 мм. Підключення: 1.3 кВт. Напруга: 380 В. Вага: 245 кг.",
    },
    {
      category: "Тісторозподілювачі пекарські",
      name: "Тісторозподілювач APACH  SPA SA15",
      slug: "apach-spasa15",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714642470/apach-spasa15_of45oi.jpg",
      price: 577409,
      brand: "Apach (Італія)",
      description:
        "Тісторозділювач-округлювач напівавтоматичний. Машина з гідравлічним приводом, з двома циліндрами для пресування, одним циліндром для розрізання і одним - для округлення. Панель керування з можливістю регулювання часу пресування, округлення і відкриття формувальної камери. Кнопка очищення ножів. Округлення здійснюється за допомогою важеля. Можливість зберегти до 9 різних програм. Ножі та решітки з нержавіючої сталі 304, внутрішня поверхня з харчового поліетилену. Кругла діжа. Місткість 5.5 кг, 15 шматків тіста з масою від 150 до 360 гр. Продуктивність: 1800 од/годину. Габарити: 750*700*1450 мм. Підключення: 1.3 кВт. Напруга: 380 В. Вага: 245 кг.",
    },
    {
      category: "Тісторозподілювачі пекарські",
      name: "Тісторозподілювач APACH  SPA SA18",
      slug: "apach-spasa18",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714642490/apach-spasa18_myfr5a.jpg",
      price: 577409,
      brand: "Apach (Італія)",
      description:
        "Тісторозділювач-округлювач напівавтоматичний. Машина з гідравлічним приводом, з двома циліндрами для пресування, одним циліндром для розрізання і одним - для округлення. Панель управління з можливістю регулювання часу пресування, округлення і відкриття формувальної камери. Кнопка очищення ножів. Округлення здійснюється за допомогою важеля. Можливість зберегти до 9 різних програм. Ножі та решітки з нержавіючої сталі 304, внутрішня поверхня з харчового поліетилену. Кругла діжа. Місткість 5 кг,  шматків тіста з масою від 120 до 280 гр. Продуктивність: 2100 од/годину. Габарити: 750*700*1450 мм. Підключення: 1.3 кВт. Напруга: 380 В. Вага: 245 кг.",
    },
    {
      category: "Тісторозподілювачі пекарські",
      name: "Тісторозподілювач APACH  SPA SA30",
      slug: "apach-spasa30",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714642508/apach-spasa30_o9nts3.jpg",
      price: 577409,
      brand: "Apach (Італія)",
      description:
        "Тісторозділювач-округлювач напівавтоматичний. Машина з гідравлічним приводом, з двома циліндрами для пресування, одним циліндром для розрізання і одним - для округлення. Панель управління з можливістю регулювання часу пресування, округлення і відкриття формувальної камери. Кнопка очищення ножів. Округлення здійснюється за допомогою важеля. Можливість зберегти до 9 різних програм. Ножі та решітки з нержавіючої сталі 304, внутрішня поверхня з харчового поліетилену. Кругла діжа. Місткість 4 кг, 30 шматків тіста з масою від 40 до 135 гр. Продуктивність: 3600 од/годину. Габарити: 750*700*1450 мм. Підключення: 1.3 кВт. Напруга: 380 В. Вага: 245 кг.",
    },
    {
      category: "Багетоформувальники пекарськi",
      name: "Багетоформувач MAC.PAN MBA/2C",
      slug: "macpan-mba2c",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714645167/macpan-mba2c_njpxvf.jpg",
      price: 311243,
      brand: "Mac.Pan (Італія)",
      description:
        "Багетоформувач, 2 регульованих валика, що забезпечують високий ступінь точності. Обсяг тіста: 50 - 2000 грам. Довжина вала: 700 мм. Діаметр: 63.5 мм. Відстань між циліндрами: 0 - 20 мм. Швидка заміна ременя без розбору машини. Виготовлений зі сталі. Габарити: 1050*981*1484 мм. Потужність: 0.55 КВт. Напруга: 380 В. Вага: 216 кг.",
    },
    {
      category: "Багетоформувальники пекарськi",
      name: "Багетоформувач MAC.PAN MBA/3C",
      slug: "macpan-mba3c",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714645189/macpan-mba3c_tsmcff.jpg",
      price: 331420,
      brand: "Mac.Pan (Італія)",
      description:
        "Багетоформувач, 3 регульованих валика, що забезпечують високий ступінь точності. Обсяг тіста: 50 - 2000 грам. Довжина вала: 700 мм. Діаметр: 63.5 мм. Відстань між циліндрами: 0 - 20 мм. Швидка заміна ременя без розбору машини. Виготовлений зі сталі. Габарити: 1050*981*1484 мм. Потужність: 0.55 КВт. Напруга: 380 В. Вага: 216 кг.",
    },
    {
      category: "Ферментатори пекарськi",
      name: "Ферментатор APACH M15",
      slug: "apach-m15",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714646266/apach-m15_zgwpsp.jpg",
      price: 401782,
      brand: "Apach (Італія)",
      description:
        "Ферментатор настільний. Об'єм чаші 17 л. Робочий об'єм 10 кг. Контроль температури продукту і чаші за допомогою датчиків. У разі перепаду електроенергії програма продовжить виконувати цикл з того моменту, коли цикл був перерваний. Автоматичний контроль температури холодильного агрегату / нагрівального елементу. Корпус, ємність і інструменти з нержавіючої сталі. Холодильник з пиловим фільтром. Внутрішні стінки чаші з протиобморожувальною системою. Змінна швидкість обертання місильного органу інструмента з інвертором. Датчик відкриття кришки зупиняє двигун при відкриванні. Габарити: 540*960*680 мм. Потужність: 0.6 кВт. Напруга: 220 В. Вага: 74 кг.",
    },

    {
      category: "Ферментатори пекарськi",
      name: "Ферментатор APACH M30",
      slug: "apach-m30",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714646292/apach-m30_l6op31.jpg",
      price: 619995,
      brand: "Apach (Італія)",
      description:
        "Ферментатор підлоговий. Об'єм чаші 30 л. Робочий об'єм 17.5 кг. Контроль температури продукту і чаші за допомогою датчиків. У разі перепаду електроенергії програма продовжить виконувати цикл з того моменту, коли цикл був перерваний. Автоматичний контроль температури холодильного агрегату / нагрівального елементу. Корпус, ємність і інструменти з нержавіючої сталі. Холодильник з пиловим фільтром. Внутрішні стінки чаші з протиобморожувальною системою. Змінна швидкість обертання місильного органу інструмента з інвертором. Датчик відкриття кришки зупиняє двигун при відкриванні. Габарити: 650*770*1170 мм. Потужність: 1 кВт. Напруга: 220 В. Вага: 107 кг.",
    },
    {
      category: "Ферментатори пекарськi",
      name: "Ферментатор APACH M120",
      slug: "apach-m120",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714646314/apach-m120_iq1epl.jpg",
      price: 900714,
      brand: "Apach (Італія)",
      description:
        "Ферментатор підлоговий. Об'єм чаші 120 л. Робочий об'єм 80 кг. Контроль температури продукту і чаші за допомогою датчиків. У разі перепаду електроенергії програма продовжить виконувати цикл з того моменту, коли цикл був перерваний. Автоматичний контроль температури холодильного агрегату / нагрівального елементу. Корпус, ємність і інструменти з нержавіючої сталі. Холодильник з пиловим фільтром. Внутрішні стінки чаші з протиобморожувальною системою. Змінна швидкість обертання місильного органу інструмента з інвертором. Датчик відкриття кришки зупиняє двигун при відкриванні. Габарити: 870*990*1530 мм. Потужність: 2 кВт. Напруга: 220 В. Вага: 252 кг.",
    },
    {
      category: "М'ясорубки виробничі",
      name: "М'ясорубка SIRMAN TC 32 BUFFALO S Hp 4 Tf TOTAL UNGER",
      slug: "sirman-tc-32-buffalo-s",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714493219/Brands/sirman-tc-32-buffalo-s_lmtuun.jpg",
      price: 141466,
      brand: "Sirman (Італія)",
      description:
        "М'ясорубка повний унгер. Продуктивність, кг/год: 700. Матеріал корпусу: алюміній. Габарити, мм: 625*538*592мм. Потужність, кВт: 2.94. Напруга, В: 380. Вага, кг: 70.",
    },
    {
      category: "М'ясорубки виробничі",
      name: "М'ясорубка SIRMAN MASTER 30 Y12 FULL CONTROL TOTAL UNGER",
      slug: "sirman-master-30y12fctu",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714493467/Brands/sirman-master-30y12fctu_kwct5x.jpg",
      price: 440789,
      brand: "Sirman (Італія)",
      description:
        "Продуктивність, кг/год: 600-850. Матеріал корпусу: алюміній. Габарити, мм: 658*752*1477. Потужність, кВт: 1.10. Напруга, В: 220. Вага, кг: 140.",
    },
    {
      category: "М'ясорубки виробничі",
      name: "М'ясорубка SIRMAN TC 22 BARCELLONA Q 400V TU CE",
      slug: "sirman-tc-22-barcellona-q400vtuce",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714493708/Brands/sirman-tc-22-barcellona-q400vtuce_oxpyuj.jpg",
      price: 95749,
      brand: "Sirman (Італія)",
      description:
        "Продуктивність, кг/год: 350. Матеріал корпусу: алюміній. Габарити, мм: 252*484*645. Потужність, кВт: 1.10. Напруга, В: 380. Вага, кг: 31.",
    },
    {
      category: "М'ясорубки виробничі",
      name: "М'ясорубка SIRMAN TC 22 BARCELLONA Q ICE + TOTAL UNGER",
      slug: "sirman-tc-22-barcellona-qice-tu",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714493915/Brands/sirman-tc-22-barcellona-qice-tu_xoqbwp.jpg",
      price: 95749,
      brand: "Sirman (Італія)",
      description:
        "М'ясорубка повний унгер. Охолоджуюча система з термоелектричним модулем. Охолодження горловини. Цифровий термометр контролю. Зйомний сталевий бункер та квадратна горловина виходу готової продукції для швидкої очистки. Продуктивність 350 кг/год. Решітка 4.5 мм. Габарити 310*350*615мм. Підключення: 1.5кВт, 380В. Вага 34 кг.",
    },
    {
      category: "М'ясорубки виробничі",
      name: "М'ясорубка SIRMAN TC 22 BARCELLONA Q ICE + TOTAL UNGER 230/50/1",
      slug: "sirman-tc-22-barcellona-qice-tu-230-50-1",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714494192/Brands/sirman-tc-22-barcellona-qice-tu-230-50-1_vaybl6.jpg",
      price: 151386,
      brand: "Sirman (Італія)",
      description:
        "М'ясорубка повний унгер. Охолоджуюча система з термоелектричним модулем. Охолодження горловини. Цифровий термометр контролю. Зйомний сталевий бункер та квадратна горловина виходу готової продукції для швидкої очистки. Продуктивність 650 кг/год. Решітка 4.5 мм. Габарити 335*500*690мм. Підключення: 1.84кВт, 380В. Вага 42 кг.",
    },
    {
      category: "М'ясорубки виробничі",
      name: "М'ясорубка SIRMAN TC 42 MONTANA HP7 + TOTAL UNGER",
      slug: "sirman-tc-42-montana-hp7-tu",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714494426/Brands/sirman-tc-42-montana-hp7-tu_j6u5ao.jpg",
      price: 248644,
      brand: "Sirman (Італія)",
      description:
        "М'ясорубка повний унгер. Продуктивність (технічна): 1200-1300 кг/год. Діаметр сталевих грат: 6 мм. Самозагострювальний ніж з нержавіючої сталі. Конструкція повністю з нержавіючої сталі AISI 304, миється під струменем води. Габарити: 562*970*800мм. Потужність: 5.1 кВт Напруга: 380В.",
    },
    {
      category: "Слайсери виробничі",
      name: "Слайсер SIRMAN MANTEGNA 350 BS1 Top",
      slug: "sirman-mantegna-350bs1top",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714540249/sirman-mantegna-350bs1top_wrmwlh.jpg",
      price: 110844,
      brand: "Sirman (Італія)",
      description:
        "Діаметр леза 350 мм. Товщина нарізки 29 мм. Хід каретки 310 мм. Лоток 300*270 мм. Відстань між лезом і голівкою 46.8 мм. Габарити: 870*840*750мм. Потужність: 0.37кВт. Напруга: 220В.",
    },
    {
      category: "Слайсери виробничі",
      name: "Слайсер SIRMAN LEONARDO 370VCS",
      slug: "sirman-leonardo-370vsc",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714540644/sirman-leonardo-370vsc_ypf7hr.jpg",
      price: 152650,
      brand: "Sirman (Італія)",
      description:
        "Діаметр леза 370 мм. Товщина нарізки 0-25 мм. Хід каретки 370 мм. Лоток 430*300мм. Плавний силует без кутів і видимих болтових з'єднань. Хромований і шліфований стрижень. Втулки ковзання з лакованого чавуну. Всі дрібні деталі з нержавіючої сталі. Герметична непроникність шківа. Відстань між лезом і голівкою 70 мм. Точило з нижнім захисним кожухом. Відокремлювач жиру по всі довжині робочої панелі, легко демонтується. Габарити: 840*720*630мм. Потужність: 0.52кВт. Напруга: 380В.",
    },
    {
      category: "Слайсери виробничі",
      name: "Слайсер MANTEGNA 350 VCO top CE Prof",
      slug: "sirman-mantegna-350vco-topceprof",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714540937/sirman-mantegna-350vco-topceprof_wibspp.jpg",
      price: 108145,
      brand: "Sirman (Італія)",
      description:
        "Слайсер для гастрономіі. Діаметр леза 350 мм. Товщина нарізки 0-29 мм. Ход каретки 310 мм. Матеріал корпусу: алюміній. Матеріал леза і комплектуючих: нержавіюча сталь. Габарити: 600*750*500мм. Напруга: 220В. Потужність 0.275кВт.",
    },
    {
      category: "Слайсери виробничі",
      name: "Слайсер SIRMAN MANTEGNA 350 VCS Top",
      slug: "sirman-mantegna-350vcs-top",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714541309/sirman-mantegna-350vcs-top_b2d61t.jpg",
      price: 117175,
      brand: "Sirman (Італія)",
      description:
        "Діаметр леза,мм: 350. Товщина нарізки,мм: 24. Хід каретки,мм: 310. Лоток,мм: 340*250. Габарити, мм: 685*720*560. Потужність,кВт: 0,275. Напруга,В: 220/380. Вага нетто,кг: 38.",
    },
    {
      category: "Слайсери виробничі",
      name: "Слайсер SIRMAN TIZIANO 350 EVO BS1 TOP",
      slug: "sirman-tiziano-350evo-bs1-top",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714541624/sirman-tiziano-350evo-bs1-top_c2y4bn.jpg",
      price: 121690,
      brand: "Sirman (Італія)",
      description:
        "Діаметр леза: 350 мм. Товщина вирізки: до 25мм. Хід каретки: 355мм. Розмір лотка: 305*295мм. Габарити: 640*610*420мм. Напруга: 220В. Потужність: 0.38кВт. Вага: 41.5кг.",
    },
    {
      category: "Фаршемiшалки виробничі",
      name: "Фаршемiшалка SIRMAN P 180 XP BA 400V",
      slug: "sirman-p180xpba400v",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714543338/sirman-p180xpba400v_uaucnx.jpg",
      price: 310245,
      brand: "Sirman (Італія)",
      description:
        "Завантаження діжі, л/кг: 250/180. Розмір ванни, мм: 995*550. Обсяг, л: 250. Конструкція з нержавіючої сталі AISI304. Потужний двигун. Герметичний редуктор з зубчастими колесами на масляній бані, виготовленими з шліфованої і загартованої сталі. Запобіжна система зубчастої передачі з подвійним сальником. Кришка із запобіжним мікровимикачем. Лопать нержавіючої сталі Aisi 304 легко знімається, без інструментів. Супорт відкривається ємності для вилучення лопаті для перемішування фаршу. Габаритні розміри, мм: 1422*700*1030. Потужність, кВт: 1.1. Напруга, В: 380. Вага, кг: 152.",
    },
    {
      category: "Фаршемiшалки виробничі",
      name: "Фаршемiшалка SIRMAN IP 50 XP BA",
      slug: "sirman-ip50xpba",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714543409/sirman-ip50xpba_xnt1li.gif",
      price: 229835,
      brand: "Sirman (Італія)",
      description:
        "Завантаження діжі, л/кг: 88/50. Розмір ванни, мм: 420*500. Обсяг, л: 88. Конструкція з нержавіючої сталі AISI304. Потужний двигун. Герметичний редуктор з зубчастими колесами на масляній бані, виготовленими з шліфованої і загартованої сталі. Запобіжна система зубчастої передачі з подвійним сальником. Кришка із запобіжним мікровимикачем. Мінімальне завантаження 40% місткості ванни. Лопать нержавіючої сталі Aisi 304 легко знімається, без інструментів. Габаритні розміри, мм: 810*630*1030. Потужність, кВт: 0.37. Напруга, В: 220. Вага, кг: 85.",
    },
    {
      category: "Фаршемiшалки виробничі",
      name: "Фаршемiшалка SIRMAN IP 80 XP BA 400/50/3 (3PH)",
      slug: "sirman-ip80xpba3ph",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714543480/sirman-ip80xpba3ph_bvtviu.gif",
      price: 242090,
      brand: "Sirman (Італія)",
      description:
        "Завантаження діжі, л/кг: 110/80. Розмір ванни, мм: 620*500. Обсяг, л: 110. Конструкція з нержавіючої сталі AISI304. Потужний двигун. Герметичний редуктор з зубчастими колесами на масляній бані, виготовленими з шліфованої і загартованої сталі. Запобіжна система зубчастої передачі з подвійним сальником. Кришка із запобіжним мікровимикачем. Лопать нержавіючої сталі Aisi 304 легко знімається, без інструментів. Супорт відкривається ємності для вилучення лопаті для перемішування фаршу. Габаритні розміри, мм: 1000*630*1030. Потужність, кВт: 0.55. Напруга, В: 380. Вага, кг: 90.",
    },
    {
      category: "Подрібнювачі м'яса виробничі",
      name: "Кутер SIRMAN KATANA 12 VV CE",
      slug: "sirman-katana12vvce",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714545182/sirman-katana12vvce_zugurb.jpg",
      price: 181890,
      brand: "Sirman (Італія)",
      description:
        "Обладнання призначене для подрібнення м'яса, риби, овочів в пастоподібну масу. Повністю виготовлено з нержавіючої сталі AISI 304. Ножі управляються потужним асинхронним двигуном з вентиляцією. Чаша з'ємна. Об'єм бункера, л: 12. Швидкість,об/хв: 600/2600. Габарити (з піднятою кришкою),мм: 902*680*785. Потужність,кВт: 1.6. Напруга,В: 380. Вага, кг 75.",
    },
    {
      category: "Подрібнювачі м'яса виробничі",
      name: "Кутер SIRMAN KATANA 20 VV CE",
      slug: "sirman-katana20vvce",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714545201/sirman-katana20vvce_tuhrqu.jpg",
      price: 227040,
      brand: "Sirman (Італія)",
      description:
        "Обладнання призначено для подрібнення м'яса, риби, овочів в пастоподібну масу. Повністю виготовлено з нержавіючої сталі AISI 304. Ножі управляються потужним асинхронним двигуном з вентиляцією. Чаша з'ємна. Об'єм бункера, л: 20. Швидкість, об/хв: 600/2600. Габарити (з піднятою кришкою),мм: 1013*822*945. Потужність,кВт: 2.2. Напруга,В: 380. Вага, кг 92.",
    },
    {
      category: "Подрібнювачі м'яса виробничі",
      name: "Підлоговий кутер-м’ясорубка ROBOT COUPE R60",
      slug: "robotcoupe-r60",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714545219/robotcoupe-r60_cg3ctu.png",
      price: 1325045,
      brand: "Robot Coupe (Франція)",
      description:
        "Асинхронний двигун. Панель керування: IP65 із цифровим таймером. Чаша 60 л із нержавіючої сталі. Скребок для кришки. Повністю із нержавіючої сталі, 3 знімних та  регульованих гладких леза. Потужність,  кВт: 11. Напруга,  В/фаза: 380/3. Швидкість 1500-3000 об/хв.",
    },
    {
      category: "Пили для різки м'яса виробничі",
      name: "Пила для м'яса SIRMAN SO 2020 INOX CE підлогова",
      slug: "sirman-so2020inoxce",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714547624/sirman-so2020inoxce_zos9t8.gif",
      price: 169635,
      brand: "Sirman (Італія)",
      description:
        "Різак, мм: 2020; 1400 об/хв. Діаметр шкиву, мм: 250. Робоча поверхня, мм: 475*490. Габарити, мм: 560*568*1030. Напруга підключення, В: 380. Потужність, кВт: 2. Вага, кг: 61.",
    },
    {
      category: "Пили для різки м'яса виробничі",
      name: "Пила для м'яса TATRA TBS2145ST",
      slug: "tatra-tbs2145st",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714547647/tatra-tbs2145st_d9pjve.png",
      price: 105350,
      brand: "Tatra (Туреччина)",
      description:
        "Робоча поверхня та лезо з нержавіючої сталі. Легко регульований тримач м'яса. Аварійна зупинка. Потужність двигуна, кВт: 1.5. 1400 об/хв. Напруга живлення, В: 220. Довжина стрічки, мм: 2145. Корисна висота зрізу, мм: 350. Корисна глибина пропилу, мм: 230. Габарити робочого столу, мм: 465*545.",
    },
    {
      category: "Стерилізатори для ножів",
      name: "Стерилізатор ножів HURAKAN HKN-UVA10",
      slug: "hurakan-hknuva10",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714548619/hurakan-hknuva10_a96z0m.jpg",
      price: 7869,
      brand: "Hurakan (Китай)",
      description:
        "Габарити,мм: 420*210*590. Температурний режим: до 60 °С. Час стерилізації,хв: 30. Місткість ножів,од: 10. Напруга живлення,В: 220. Потужність,кВт: 0.06. Вага,кг: 6.",
    },
    {
      category: "Стерилізатори для ножів",
      name: "Стерилізатор ножів SIRMAN U.V.A. 16 W",
      slug: "sirman-uva16w",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714548638/sirman-uva16w_m0jydv.jpg",
      price: 20640,
      brand: "Sirman (Італія)",
      description:
        "Матеріал корпусу нержавіюча сталь AISI 430. Дверцята з матового органічного скла. Стерилізація 15-20 ножів. Ртутні UV-лампи. Захисний мікровимикач. Довжина леза ножа: 310мм. Таймер до 120мин. Тип установки настільний. Споживана потужність,кВт: 0.7. Габарити(д*ш*в),мм: 400*140*620. Номінальна напруга,В: 220.",
    },
    {
      category: "Інсектицидні лампи",
      name: "Ловушка інсектицидна HURAKAN HKN-MID180M на 180 м2",
      slug: "hurakan-hkn-mid180m",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714551137/hurakan-hkn-mid180m_vkkasx.jpg",
      price: 3440,
      brand: "Hurakan (Китай)",
      description:
        "Електрична ловушка-лампа від комах. Матеріал корпусу: фарбований метал. Комахи гинуть під розрядом електричного струму у 2000-2500 В. З'ємний лоток для збору. Максимальний діапазон дії: 180 м². Підвішується на ланцюгах або ставиться на поверхню. Габарити,мм: 670*180*320. Потужність,кВт: 0.03. Напруга,В: 220. Вага,кг: 3.7.",
    },
    {
      category: "Інсектицидні лампи",
      name: "Ловушка інсектицидна HURAKAN HKN-LIN50 на 50 м2",
      slug: "hurakan-hkn-lin50m",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714551050/hurakan-hkn-lin50m_drln3h.jpg",
      price: 1505,
      brand: "Hurakan (Китай)",
      description:
        "Електрична ловушка-лампа від комах. Матеріал корпусу: фарбований метал. Комахи гинуть під розрядом електричного струму у 2000-2500 В. З'ємний лоток для збору. Максимальний діапазон дії: 50 м². Підвішується на ланцюгах або ставиться на поверхню. Габарити,мм: 345*75*265. Потужність,кВт: 0.02. Напруга,В: 220. Вага,кг: 2.2.",
    },
    {
      category: "Інсектицидні лампи",
      name: "Ловушка інсектицидна HURAKAN HKN-MID50 на 50 м2",
      slug: "hurakan-hkn-mid50m",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714551099/hurakan-hkn-mid50m_yspegi.jpg",
      price: 1526,
      brand: "Hurakan (Китай)",
      description:
        "Електрична ловушка-лампа від комах. Матеріал корпусу: фарбований метал. Комахи гинуть під розрядом електричного струму у 2000-2500 В. З'ємний лоток для збору. Максимальний діапазон дії: 50 м². Підвішується на ланцюгах або ставиться на поверхню. Габарити,мм: 360*100*290. Потужність,кВт: 0.02. Напруга,В: 220. Вага,кг: 2.8.",
    },
    {
      category: "Інсектицидні лампи",
      name: "Ловушка інсектицидна HURAKAN HKN-LIN80 на 80 м2",
      slug: "hurakan-hkn-lin80m",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714551077/hurakan-hkn-lin80m_xddblq.jpg",
      price: 2129,
      brand: "Hurakan (Китай)",
      description:
        "Електрична ловушка-лампа від комах. Матеріал корпусу: фарбований метал. Комахи гинуть під розрядом електричного струму у 2000-2500 В. З'ємний лоток для збору. Максимальний діапазон дії: 80 м². Підвішується на ланцюгах або ставиться на поверхню. Габарити,мм: 385*75*265. Потужність,кВт: 0.02. Напруга,В: 220. Вага,кг: 2.7.",
    },
    {
      category: "Інсектицидні лампи",
      name: "Ловушка інсектицидна HURAKAN HKN-MID80M на 80 м2",
      slug: "hurakan-hkn-mid80m",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714551116/hurakan-hkn-mid80m_b2vqti.jpg",
      price: 2150,
      brand: "Hurakan (Китай)",
      description:
        "Електрична ловушка-лампа від комах. Матеріал корпусу: фарбований метал. Комахи гинуть під розрядом електричного струму у 2000-2500 В. З'ємний лоток для збору. Максимальний діапазон дії: 80 м². Підвішується на ланцюгах або ставиться на поверхню. Габарити,мм: 410*100*310. Потужність,кВт: 0.03. Напруга,В: 220. Вага,кг: 3.2.",
    },
    {
      category: "Розрихлювач для м'яса",
      name: "Розрихлювач для м'яса SIRMAN DRAKE",
      slug: "sirman-drake",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714552734/sirman-drake_tovtro.jpg",
      price: 78045,
      brand: "Sirman (Італія)",
      description:
        "Конструкція з нержавіючої сталі AISI 304. Легко знімна кришка для очищення. Ножові барабани легко знімаються для більш глибокої дезінфекції Леза докуповуються опціонально: додатково можна замовити 96 лез для розрихлювання, 48 лез (10 мм) та 32 лез (15 мм) для нарізання Габарити, мм:480*345*509. Напруга підключення, В: 220. Потужність, кВт: 0.37. Вага, кг: 35.",
    },
    {
      category: "Розрихлювач для м'яса",
      name: "Тендерайзер SIRMAN T-REX automec (автоматичний)",
      slug: "sirman-trex",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714552769/sirman-trex_b8qeq6.jpg",
      price: 245960,
      brand: "Sirman (Італія)",
      description:
        "Розміри набору лез/h, мм: 212*80/62. Корпус і деталі з нержавіючої сталі. Повністю закриті пружини захищені від бруду та рідини. Швидке розбирання леза для легкого очищення. Мобільна поліетиленова обробна дошка. Габарити, мм: 519*616*968. Напруга підключення, В: 380. Потужність, кВт: 0.55. Вага, кг: 85.",
    },
    {
      category: "Шприцi ковбаснi виробничі",
      name: "Шприц SIRMAN IS V 25 IDRA INOX 230/50/1",
      slug: "sirman-isv25idrainox230",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714554135/sirman-isv25idrainox230_y9ueie.jpg",
      price: 193070,
      brand: "Sirman (Італія)",
      description:
        "Шприц ковбасний. Обсяг, л: 25. Довжина циліндра, мм: 460. Діаметр циліндра, мм: 260. Крок поршня, мм: 380. Мінімальна швидкість спорожнювання: 2'02''. Максимальна швидкість спорожнювання, сек: 51. Швидкість повернення поршня, сек: 32. Діаметр воронок, що додаються, мм:10-18-25. Герметичний захист гідравлічного циліндра. Стрижень поршня з нержавіючої сталі. Циліндр із полірованої нержавіючої сталі. Потужний і безшумний вентильований двигун негайної дії на 2800 оборотів. Автоматичне повернення поршня з зупинкою двигуна. Пульт керування IP 67. Регулятор потоку олії високої точності. Габарити, мм: 565*450*1160. Напруга підключення, В: 220. Потужність, кВт: 0.56. Вага, кг: 91.",
    },
    {
      category: "Шприцi ковбаснi виробничі",
      name: "Шприц SIRMAN IS V25 IDRA INOX 400/50/3 CE",
      slug: "sirman-isv25idrainox400ce",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714554163/sirman-isv25idrainox400ce_yshjwk.jpg",
      price: 189200,
      brand: "Sirman (Італія)",
      description:
        "Шприц ковбасний. Обсяг, л: 25. Матеріал корпусу: нержавіюча сталь. Підлогове виконання. Прості і функціональні вертикальні гідравлічні машини для набивання фаршем IDRA розраховані на потужний гідравлічний пристрій, що працює при тиску 120 Бар. Виконані з нержавіючої сталі, повністю демонтуються для чищення без допомоги інструментів. Потужний і безшумний вентильований мотор негайної дії на 2800 обертів, автоматичне повернення поршня з зупинкою двигуна. Регулятор потоку масла високої точності. Габарити, мм: 565*450*1160. Напруга підключення, В: 220. Потужність, кВт: 0,52. Вага, кг: 91.",
    },
    {
      category: "Шприцi ковбаснi виробничі",
      name: "Шприц SIRMAN IS V35 IDRA INOX",
      slug: "sirman-isv35idrainox",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714554188/sirman-isv35idrainox_kbijiy.jpg",
      price: 265310,
      brand: "Sirman (Італія)",
      description:
        "Шприц ковбасний. Обсяг, л: 35. Матеріал корпусу: нержавіюча сталь. Підлогове виконання. Прості і функціональні вертикальні гідравлічні машини для набивання фаршем IDRA розраховані на потужний гідравлічний пристрій, що працює при тиску 120 Бар. Виконані з нержавіючої сталі, повністю демонтуються для чищення без допомоги інструментів. Потужний і безшумний вентильований мотор негайної дії на 2800 обертів, автоматичне повернення поршня з зупинкою двигуна. Регулятор потоку масла високої точності. Габарити, мм: 640*480*1160. Напруга підключення, В: 220. Потужність, кВт: 0,56. Вага, кг: 101.",
    },
    {
      category: "Вакууматори виробничі",
      name: "Вакуумний пакувальник APACH AVM 425 F",
      slug: "apach-avm425f",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714555122/apach-avm425f_zf2l5m.jpg",
      price: 215215,
      brand: "Apach (Італія)",
      description:
        "Вакуумний пакувальник. Продуктивність вакуумної помпи: 25 куб. м/год. Довжина зварювальної планки: 455 мм. Можливість програмування для категорій продуктів. Максимальна ширина пакету: 400 мм. Функція заповнення інертним газом. Розміри камери: 485*550*175 мм. Габарити: 600*710*1035 мм. Напруга підключення: 220 В. Потужність: 1.2 кВт. Вага: 116 кг.",
    },
    {
      category: "Вакууматори виробничі",
      name: "Вакуумний пакувальник APACH AVM 660 F",
      slug: "apach-avm660f",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714555144/apach-avm660f_gafo4c.jpg",
      price: 334325,
      brand: "Apach (Італія)",
      description:
        "Вакуумний пакувальник. Продуктивність вакуумної помпи: 60 куб. м/год. Довжина зварювальної планки: 2*620 мм. Можливість програмування для категорій продуктів. Максимальна ширина пакету: 600 мм. Функція заповнення інертним газом - опціонально. Розміри камери: 650*535*200 мм. Габарити: 765*710*1050 мм. Напруга підключення: 380 В. Потужність: 1.5 кВт. Вага: 167 кг.",
    },
    {
      category: "Тунельні посудомийні машини",
      name: "Посудомийна машина конвеєрна EMPERO EMP.2000-SAG-R",
      slug: "empero-emp2000sagr",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714809032/empero-emp2000sagr_tdiyti.jpg",
      price: 454949,
      brand: "Empero (Туреччина)",
      description:
        "Посудомийна машина конвеєрного типу. Двошвидкісний конвеєр. Два пральні мотори. Стандартний дренажний насос. Економія води, миючих засобів та енергії споживання. Розмір кошика: 500*500 мм. Опори з нержавіючої сталі. Датчик безпеки магнітної кришки. Температура води для миття 55-60°C. Температура води для ополіскування 80-85°C. Загальна потужність сушильного агрегату: 9 кВт. Потужність нагріву мийного бака: 12 кВт. Потужність нагрівача промивного котла: 24 кВт. Загальна потужність машини: 48 кВт. Напруга підключення: 380 В. Габарити: 1900*837*2000 мм. Вага: 317 кг.",
    },
    {
      category: "Тунельні посудомийні машини",
      name: "Посудомийна машина конвеєрна APACH ARC100",
      slug: "apach-arc100",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714809017/apach-arc100_ddu1hp.jpg",
      price: 554055,
      brand: "Apach (Італія)",
      description:
        "Посудомийна машина конвеєрного типу. Продуктивність: 50-100 касет/годину (1800 тарілок/годину). Має 2 швидкості руху транспортера. Корпус машини має подвійні стінки, виконані з високоякісної нержавіючої сталі марки AISI 304. Обсяг бойлера: 17 л. Розмір касет: 500*500 мм. Висота завантажувального вікна: 400 мм. Максимальна висота келихів: 370 мм. Діаметр тарілок: 400 мм. 2 робочих цикли: 120/180 сек. Панель керування: електромеханічна. У комплекті: 2 касети, 1 контейнер-вставка для столових приборів. Габарити: 1150*770*1565 мм. Потужність: 13.3 кВт (при підключенні до гарячої води) або 22 кВт (при підключенні до холодної води). Напруга підключення: 380 В. Вага: 220 кг.",
    },
    {
      category: "Тунельні посудомийні машини",
      name: "Посудомийна машина конвеєрна EMPERO EMP.3000-SOL-L",
      slug: "empero-emp3000soll",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714809048/empero-emp3000soll_hilnza.jpg",
      price: 584843,
      brand: "Empero (Туреччина)",
      description:
        "Посудомийна машина конвеєрного типу. Двошвидкісний конвеєр. Два пральні мотори. Стандартний дренажний насос. Економія води, миючих засобів та енергії споживання. Розмір кошика: 500*500 мм. Опори з нержавіючої сталі. Датчик безпеки магнітної кришки. Температура води для миття 55-60°C. Температура води для ополіскування 80-85°C. Загальна потужність сушильного агрегату: 9 кВт. Потужність нагріву мийного бака: 12 кВт. Потужність нагрівача промивного котла: 24 кВт. Загальна потужність машини: 48 кВт. Напруга підключення: 380 В. Вага: 405 кг.",
    },
    {
      category: "Фронтальні посудомийні машини",
      name: "Машина посудомийна APACH AF400 DD",
      slug: "apach-af400dd",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714811956/apach-af400dd_dm66ol.jpg",
      price: 59257,
      brand: "Apach (Італія)",
      description:
        "Барна посудомийна машина фронтального типу. Продуктивність: 30/40 касет/годину. Розмір касети: 390*390 мм. Висота завантажувального вікна: 320 мм. Максимальна висота посуду/келихів: 300 мм. Мийний цикл: 120 сек. Вбудований дозатор для миючого та ополіскуючого засобу. Панель керування: електромеханічна. У комплекті: 2 касети і 1 контейнер-вставка для столових приборів. Підключення до гарячої/холодної води. Обсяг танкера: 8 л. Обсяг бойлера: 2.6 л. Габарити: 436*535*670 мм. Підключення: 3.5 кВт, 220 В. Вага: 31кг.",
    },
    {
      category: "Фронтальні посудомийні машини",
      name: "Машина посудомийна APACH AF500DIG DD",
      slug: "apach-af500digdd",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714811978/apach-af500digdd_qqeiza.jpg",
      price: 101553,
      brand: "Apach (Італія)",
      description:
        "Барна посудомийна машина фронтального типу. Продуктивність: 30/40 касет/годину. Розмір касети: 500*500 мм. Висота завантажувального вікна: 365 мм. Максимальна висота келихів: 325 мм. Діаметр тарілок: 330 мм. Мийний цикл: 60/90/120сек./продовжений. Вбудований дозатор для миючого та ополіскуючого засобу. Панель керування: електронна. У комплекті: 2 касети і 1 контейнер-вставка для столових приборів. Підключення до гарячої/холодної води. Обсяг танкера: 20 л. Обсяг бойлера: 6 л. Габарити: 575*605*820 мм. Підключення: 3.5 кВт, 220 В. Вага: 56 кг.",
    },
    {
      category: "Фронтальні посудомийні машини",
      name: "Машина посудомийна ADLER ECO 50 DP PD",
      slug: "adler-eco50dppd",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714811918/adler-eco50_bgk3vu.jpg",
      price: 79654,
      brand: "Adler (Італія)",
      description:
        "Посудомийна машина фронтального типу. Продуктивність: 40/50 касет/годину. Розмір касети: 500*500 мм. Висота завантажувального вікна: 355 мм. Діаметр тарілок: 340 мм. Мийний цикл: 60/120/180/240/300 сек. Вбудований дозатор для миючого та ополіскуючого засобу. Панель керування: електромеханічна. У комплекті: 2 касети і 1 контейнер-вставка для столових приборів. Дренажна помпа в комплекті. Підключення до гарячої/холодної води. Обсяг танкера: 17 л. Обсяг бойлера: 7 л. Габарити: 575*600*805 мм. Підключення: 3.4 кВт, 220 В. Вага: 60 кг.",
    },
    {
      category: "Фронтальні посудомийні машини",
      name: "Машина посудомийна ADLER ECO 50 PD",
      slug: "adler-eco50pd",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714811918/adler-eco50_bgk3vu.jpg",
      price: 77292,
      brand: "Adler (Італія)",
      description:
        "Посудомийна машина фронтального типу. Продуктивність: 40/50 касет/годину. Розмір касети: 500*500 мм. Висота завантажувального вікна: 355 мм. Витрати води на полоскання за 1 цикл: 2.8 л. Мийний цикл: 60/180 сек. Режим миття/ополіскування: 60°С/85°С. Вбудований дозатор для миючого та ополіскуючого засобу. Панель керування: електромеханічна. У комплекті: 2 касети і 1 контейнер-вставка для столових приборів. Підключення до гарячої/холодної води. Обсяг танкера: 17 л. Обсяг бойлера: 7 л. Габарити: 575*600*805 мм. Підключення: 3.4 кВт, 220 В. Вага: 60 кг.",
    },
    {
      category: "Фронтальні посудомийні машини",
      name: "Машина посудомийна ADLER EVO 50 PD",
      slug: "adler-evo50pd",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714811941/adler-evo50_ldjpcg.jpg",
      price: 81586,
      brand: "Adler (Італія)",
      description:
        "Посудомийна машина фронтального типу. Продуктивність: 40/50 касет/годину. Розмір касети: 500*500 мм. Висота завантажувального вікна: 355 мм. Діаметр тарілок: 340 мм. Мийний цикл: 60/120/180/240/300 сек. Вбудований дозатор для миючого та ополіскуючого засобу. Панель керування: електронна. У комплекті: 2 касети і 1 контейнер-вставка для столових приборів. Підключення до гарячої/холодної води. Обсяг танкера: 17 л. Обсяг бойлера: 7 л. Габарити: 575*600*805 мм. Підключення: 3.4 кВт, 220 В. Вага: 60 кг.",
    },
    {
      category: "Фронтальні посудомийні машини",
      name: "Машина посудомийна DIHR GS 50 ECO DDE TS",
      slug: "dihr-gs50ecoddets",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714811996/dihr-gs50ecoddets_pkpdt8.jpg",
      price: 75446,
      brand: "Dihr (Італія)",
      description:
        "Посудомийна фронтальна машина. Продуктивність: 30 касет/годину. Розмір касет: 500*500 мм. Максимальна висота завантаження: 345 мм. Мийний цикл: 120 сек. Режим миття/ополіскування: 60-85°С. Об'єм бойлера: 5.7 л. Об'єм бункера: 29 л. Вбудований електронний дозатор для ополіскуючих та миючих засобів. Панель керування: електромеханічна. Габарити: 590*600*850 мм. Підключення: 3.6 кВт, 220 В. Вага: 57 кг.",
    },
    {
      category: "Фронтальні посудомийні машини",
      name: "Машина посудомийна FAGOR COP-504 DD",
      slug: "fagor-cop504dd",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714812016/fagor-cop504dd_nhquqy.jpg",
      price: 159093,
      brand: "Fagor (Іспанія)",
      description:
        "Машина посудомийна фронтальна з елетронним управлінням та дозатором миючого засобу. Максимальна продуктивність: 40 касет/годину. Розмір касет: 500*500 мм. Висота навантажувального вікна: 380 мм. Робочий цикл: 60/90/180 сек. Режим мийки: 55°С. Режим ополіскування: 85°С. Витрати води на цикл 2.4 л. Об'єм танкера 20 л. Об'єм бойлеру 7 л . Підходить для GN 1/1 (потрібна спеціальна корзина). Вбудовані дозатори миючих та ополіскуючих засобів. Контроль тиску ополіскування (вбудований бустерний насос ополіскування). Система термостоп. Габарити: 600*600*830 мм. Підключення: 6.2 кВт, 220/380 В. Вага: 68 кг.",
    },
    {
      category: "Фронтальні посудомийні машини",
      name: "Машина посудомийна FAGOR FIR-30-DD",
      slug: "fagor-fir30dd",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714812083/fagor-fir30dd_ognkyr.jpg",
      price: 72998,
      brand: "Fagor (Іспанія)",
      description:
        "Машина посудомийна фронтальна. Продуктивність: 30 касет/годину. Розмір касет: 500*500 мм. Максимальна висота завантаження: 320 мм. Витрати води на полоскання за 1 цикл: 2.7 л. Мийний цикл: 120 сек. Режим миття/ополіскування: 60/85°С. Об'єм бойлера: 7 л. Об'єм бункера: 25 л. Вбудований електронний дозатор для ополіскуючих та миючих засобів. Підключення до холодної та гарячої води (не більше + 50 °С). Панель керування: електромеханічна. У комплекті: касета для тарілок, касета для келихів, корзина для столових приборів. Габарити: 600*600*820 мм. Підключення: 3.4 кВт, 220 В. Вага: 51.7 кг.",
    },
    {
      category: "Фронтальні посудомийні машини",
      name: "Машина посудомийна TATRA TW.F50+DR+DD",
      slug: "tatra-twf50drdd",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714812098/tatra-twf50drdd_ygyhdy.jpg",
      price: 80513,
      brand: "Tatra (Туреччина)",
      description:
        "Машина посудомийна фронтальна. Продуктивність: 30 касет/годину. Розмір касет: 500*500 мм. Максимальна висота завантаження: 320 мм. Мийний цикл: 60/90/120/180 сек. Режим миття/ополіскування: 60/85°С. Об'єм бойлера: 5.5 л. Об'єм бункера: 14 л. Вбудований електронний дозатор для ополіскуючих та миючих засобів. Панель керування: електромеханічна. Підключення: 5.2 кВт, 220 В. Габарити 590*610*830 мм. Вага: 60 кг.",
    },
    {
      category: "Купольні посудомийні машини",
      name: "Посудомийна машина купольна APACH AC800DIG DD",
      slug: "apach-ac800digdd",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714815454/apach-ac800digdd_q1hlln.jpg",
      price: 165104,
      brand: "Apach (Італія)",
      description:
        "Посудомийна машина купольного типу. Продуктивність: 45/60 касет/годину. Продуктивність по тарілках: 480/960 тарілок/годину. Цикл мийки: 60/120 сек. Розмір касети: 500*500 мм. Максимальний діаметр тарілок 440 мм. Максимальна висота склянок: 425 мм. Вбудований дозатор для миючого та ополіскуючого засобу. Панель керування: електронна. У комплекті: 2 касети і 1 контейнер-вставка для столових приборів. Підключення до гарячої/холодної води. Витрата води за 1 цикл: 2.4 л. Об'єм бойлера: 7 л. Габарити: 724(634)*818(744)*1529(1990) мм. Підключення: 8.5 кВт, 380 В. Вага: 90 кг.",
    },
    {
      category: "Купольні посудомийні машини",
      name: "Посудомийна машина купольна ADLER EVO 1000 PD",
      slug: "adler-evo1000pd",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714815428/adler-evo1000pd_dibr7d.jpg",
      price: 134188,
      brand: "Adler (Італія)",
      description:
        "Посудомийна машина купольного типу. Продуктивність: 45/60 касет/годину. Цикл мийки 60/120/180/240/300 сек. Розмір касети: 500*500 мм. Висота завантажувального вікна: 420 мм. Вбудований дозатор для миючого та ополіскуючого засобу. Панель керування: електронна. У комплекті: 2 касети і 1 контейнер-вставка для столових приборів. Підключення до гарячої/холодної води. Витрата води за 1 цикл: 1.5 л. Об'єм бойлера: 10 л. Габарити: 630*744*1491(1980) мм. Підключення: 9.8 кВт, 380 В. Вага: 90 кг.",
    },
    {
      category: "Купольні посудомийні машини",
      name: "Посудомийна машина купольна FAGOR FIR-80-RD-DD",
      slug: "fagor-fir80rddd",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714815517/fagor-fir80rddd_ut6wpp.jpg",
      price: 131611,
      brand: "Fagor (Іспанія)",
      description:
        "Посудомийна машина купольна з електричним дозатором для миючих засобів. Продуктивність: 40 касет/годину. Розмір касет: 500*500 мм. Максимальна висота завантаження: 420 мм. Витрати води на полоскання за 1 цикл: 3 л. Мийний цикл: 90/180 сек. Режим миття/ополіскування: 60/85°С. Об'єм бойлера: 7 л. Об'єм бункера: 45 л. Система фільтрації: нержавіюча сталь. Вбудований електричний дозатор для миючих засобів, що ополіскують і миють. Підключення до холодної та гарячої води (не більше +50°С). Панель керування: електромеханічна. У комплекті: касета для тарілок, касета для келихів, кошик для столових приладів. Габарити: 675*675*1420 мм. Підключення: 11.1 кВт, 380 В. Вага: 105.5 кг.",
    },
    {
      category: "Купольні посудомийні машини",
      name: "Посудомийна машина купольна TATRA TW.H50+DR+DD",
      slug: "tatra-twh50drdd",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714815543/tatra-twh50drdd_acrmba.jpg",
      price: 112932,
      brand: "Tatra (Туреччина)",
      description:
        "Посудомийна машина купольна. Продуктивність: 60 касет/годину. Розмір касет: 500*500 мм. Максимальна висота завантаження: 400 мм. Мийний цикл: 60/90/120/180 сек. Режим миття/ополіскування: 60/85 °С. Об'єм бойлера: 7 л. Об'єм бункера: 45л. Вбудований електронний дозатор для ополіскуючих та миючих засобів. Панель управління: електромеханічна. Габарити 690*800*1900 мм. Підключення: 9.7 кВт, 380 В. Вага: 90 кг.",
    },
    {
      category: "Купольні посудомийні машини",
      name: "Посудомийна машина купольна ADLER ECO 1000 PD",
      slug: "adler-eco1000pd",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714815428/adler-evo1000pd_dibr7d.jpg",
      price: 125600,
      brand: "Adler (Італія)",
      description:
        "Посудомийна машина купольна. Продуктивність: 40/50 касет/годину. Розмір касет: 500*500 мм. Максимальна висота завантаження: 420 мм. Витрати води за 1 цикл: 1.5 л. Мийний цикл: 60/180/240 сек. Режим миття/ополіскування: 60/85°С. Об'єм бойлера: 10 л. Об'єм бункера: 20 л. Вбудований електричний дозатор для миючих засобів. Підключення до холодної та гарячої води (не більше +50°С). Панель керування: електромеханічна. У комплекті: 2 касети і 1 контейнер-вставка для столових приборів. Габарити: 747*630*1491 мм. Підключення: 9.8 кВт, 380 В. Вага: 130 кг.",
    },
    {
      category: "Купольні посудомийні машини",
      name: "Посудомийна машина купольна DIHR HT 11 ECO DDE TS",
      slug: "dihr-ht11ecoddets",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714815474/dihr-ht11ecoddets_cc6y1k.jpg",
      price: 130752,
      brand: "Dihr (Італія)",
      description:
        "Посудомийна машина купольна. Продуктивність: 46 касет/годину. Розмір касет: 500*500 мм. Максимальна висота завантаження: 410 мм. Мийний цикл: 50/180 сек. Режим миття/ополіскування: 60/85 °С. Об'єм бойлера: 10 л. Об'єм бункера: 30 л. Система фільтраціі: нержавіюча сталь. Вбудований електронний дозатор для ополіскуючих та миючих засобів. Панель керування: електромеханічна. Габарити: 720*735*1445 мм. Підключення: 6.9 кВт, 380 В. Вага: 80 кг.",
    },
    {
      category: "Котломийні машини",
      name: "Котломийна машина APACH АК 901",
      slug: "apach-ak901",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714816354/apach-ak901_bjnxjj.jpg",
      price: 303801,
      brand: "Apach (Італія)",
      description:
        "Посудомийна машина котломийного типу. Розмір касети: 550*610 мм. Висота завантажувального вікна: 650 мм. Мийний цикл: 2/4/8 хвилин. Вбудований дозатор для миючого та ополіскуючого засобу. Панель керування: електромеханічна. Фронтальна дверцята розділена на 2 частини і спроектована таким чином, що при відкритті вона служить стільницею для завантаження і вивантаження кошиків. За один цикл мийки машина використовує 4 літри холодної води. Габарити: 720*780*1760 мм. Підключення: 7.4 кВт, 380В. Вага: 126 кг.",
    },
    {
      category: "Котломийні машини",
      name: "Котломийна машина APACH АК 902",
      slug: "apach-ak902",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714816376/apach-ak902_bxd3mg.jpg",
      price: 353182,
      brand: "Apach (Італія)",
      description:
        "Посудомийна машина котломийного типу. Мийний цикл: 120/240/360/720 сек. Висота завантажувального вікна: 850 мм. Розмір касети: 550*610 мм. 1 металева корзина в комплекті. Дозатори миючого та ополіскуючого засобів. Панель управління: електромеханічна. Фронтальна дверцята розділена на 2 частини і спроектована таким чином, що при відкритті вона служить стільницею для завантаження і вивантаження кошиків. За один цикл мийки машина використовує 3 літри холодної води. Габарити: 720*780*1960 мм. Підключення: 8 кВт, 380 В. Вага: 148 кг.",
    },
    {
      category: "Котломийні машини",
      name: "Котломийна машина APACH АК 924",
      slug: "apach-ak924",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714816392/apach-ak924_i2nl5s.jpg",
      price: 845918,
      brand: "Apach (Італія)",
      description:
        "Посудомийна машина котломийного типу. Мийний цикл: 120/240/360/720 сек. Висота завантажувального вікна: 850 мм. Розмір касети: 1320*700 мм. За один цикл мийки машина використовує 7 літрів холодної води. Об'єм бака - 17 л. 1 металева корзина в комплекті. Панель керування: електромеханічна. Фронтальна дверцята розділена на 2 частини і спроектована таким чином, що при відкритті вона служить стільницею для завантаження і вивантаження кошиків. Габарити: 1465*850*1960 мм. Підключення: 15.5 кВт, 380 В. Вага: 295 кг.",
    },
    {
      category: "Фільтри для води",
      name: "Пом'якшувач води ASTORIA LT. 8",
      slug: "astoria-lt8",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714817004/astoria-lt_a9uamf.jpg",
      price: 5368,
      brand: "Astoria (Італія)",
      description:
        "Пом'якшувач води механічний, ємністю 8 літрів. Фільтрує солі жорсткості Ca2+, Mg2+. Обсяг смоли, що міститься в фільтрі: 5.8 л. Ресурс 1000 л води. Діапазон тиску: 1.5-8.0 бар. Габарити моделі (д*г*в): 200*280*415 мм. Вага: 6 кг.",
    },
    {
      category: "Фільтри для води",
      name: "Пом'якшувач води ASTORIA LT. 12",
      slug: "astoria-lt12",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714817004/astoria-lt_a9uamf.jpg",
      price: 5582,
      brand: "Astoria (Італія)",
      description:
        "Пом'якшувач води механічний, ємністю 12 літрів. Фільтрує солі жорсткості Ca2+, Mg2+. Обсяг смоли, що міститься в фільтрі: 9 л. Пом'якшує 1500 л води за t = 30 °С. Діапазон тиску: 1.5-8.0 бар.  Габарити моделі (д*г*в): 200*280*515 мм. Вага: 7 кг.",
    },
  ],
};

export default data;

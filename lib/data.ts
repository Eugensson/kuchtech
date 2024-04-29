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
      categoryGroup: "Печі та пароконвектомати",
      category: "Пароконвектомати",
      brand: "Apach",
      country: "Італія",
      name: "Пароконвектомат APACH AP20QT",
      slug: "apach-ap20qt",
      image:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1714389086/kuchtech/apach-ap20qt_t90rql.jpg",
      price: 505759,
      description:
        "Піч пароконвекційна на 20 рівнів (на 20 гастроємностей типу GN 1/1, з відстанню 70 мм). У комплекті вкатний візок з направляючими GN 1/1. Сенсорний рідкокришталевий дисплей із діагоналлю 5-дюймів. 3 робочі режимами: пар, гаряче повітря, комбінований режим. Передбачена можливість збереження до 120 програм, 40 з них встановлені, 80 вільні для запису. Кожна програма може містити до 6 етапів приготування. Авто реверс, 2 швидкості обертання, тормощуп, USB порт. Функції: попередній нагрів; multilevel; All in; All out; Delta T; регенерація; расстойка; відкладений старт; швидке охолодження камери. 2 програми автоматичної мийки, програма ополіскування без миючого засобу. Регулювання витяжки за допомогою повітряного клапана з електроприводом. Вбудоване в двері світлодіодне підсвічування. 380В. Споживана потужність: 28.5 кВт. Габарити: 1051*938*1900мм.",
      voltage: 380,
      power: 28.6,
      weight: 310,
      numberOfLevels: 20,
      connectionType: "Електрика",
      controlPanel: "Сенсорна",
      dimensions: "1051*938*1900",
      humidification: "Інжекторний",
    },
    {
      categoryGroup: "Печі та пароконвектомати",
      category: "Конвекційні печі",
      brand: "Apach",
      country: "Італія",
      name: "Піч конвекційна Apach AP7QM",
      slug: "apach-ap7qm",
      image:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1714396798/kuchtech/apach-ap7qm_uyd4dw.jpg",
      price: 143672,
      description:
        "Місткість: 7 рівнів, тип направляючих: GN1/1 + 600*400 мм. Відстань між направляючими: 70 мм. Піч конвекційна з механічним управлінням. Інжекторне парозволоження. Реверс вентиляторів. Тип вентиляторів: турбіна. В комплекті 3 дека. Діапазон температур: 30°С - 280°С. Габарити: 937*885*875 мм. Підключення: 10.5 кВт, 380 В.",
      voltage: 380,
      power: 10.5,
      weight: 99,
      numberOfLevels: 7,
      connectionType: "Електрика",
      controlPanel: "Механічна",
      dimensions: "937*885*875",
      humidification: "Інжекторний",
    },
  ],
};

export default data;

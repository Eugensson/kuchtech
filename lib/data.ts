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
      brand: "HURAKAN (Китай)",
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
      brand: "APACH (Італія)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "HURAKAN (Китай)",
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
      brand: "HURAKAN (Китай)",
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
      brand: "HURAKAN (Китай)",
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
      brand: "HURAKAN (Китай)",
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
      brand: "TATRA (Туреччина",
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
      brand: "TATRA (Туреччина",
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
      brand: "SIRMAN (Італія)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "SIRMAN (Італія)",
      description:
        "Гриль прижимний електричний. Кількість робочих поверхонь: 2. Форма поверхні: рифлена/гладка. Корисна площа робочої поверхні: 500*255мм. Матеріал: чавун. Габарити моделі (ш*г*в): 515*435*235мм. Вага: 28кг. Потужність: 3кВт. Електрична мережа: однофазна, 220В, 50Гц.",
    },
    {
      category: "М'ясорубки виробничі",
      name: "М'ясорубка SIRMAN TC 32 BUFFALO S Hp 4 Tf TOTAL UNGER",
      slug: "sirman-tc-32-buffalo-s",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714493219/Brands/sirman-tc-32-buffalo-s_lmtuun.jpg",
      price: 141466,
      brand: "SIRMAN (Італія)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "SIRMAN (Італія)",
      description:
        "М'ясорубка повний унгер. Продуктивність (технічна): 1200-1300 кг/год. Діаметр сталевих грат: 6 мм. Самозагострювальний ніж з нержавіючої сталі. Конструкція повністю з нержавіючої сталі AISI 304, миється під струменем води. Габарити: 562*970*800мм. Потужність: 5.1 кВт Напруга: 380В.",
    },
  ],
};

export default data;

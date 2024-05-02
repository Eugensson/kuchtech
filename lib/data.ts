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
    //
    {
      category: "Печі ротаційні",
      name: "Піч ротаційна APACH B46E EMPTA",
      slug: "apach-b46eempta",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714558186/apach-b46eempta_tyiqjy.jpg",
      price: 643968,
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "SINMAG (Бельгія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "SINMAG(Бельгія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "MAC.PAN (Італія)",
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
      brand: "MAC.PAN (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
      description:
        "Ферментатор підлоговий. Об'єм чаші 120 л. Робочий об'єм 80 кг. Контроль температури продукту і чаші за допомогою датчиків. У разі перепаду електроенергії програма продовжить виконувати цикл з того моменту, коли цикл був перерваний. Автоматичний контроль температури холодильного агрегату / нагрівального елементу. Корпус, ємність і інструменти з нержавіючої сталі. Холодильник з пиловим фільтром. Внутрішні стінки чаші з протиобморожувальною системою. Змінна швидкість обертання місильного органу інструмента з інвертором. Датчик відкриття кришки зупиняє двигун при відкриванні. Габарити: 870*990*1530 мм. Потужність: 2 кВт. Напруга: 220 В. Вага: 252 кг.",
    },
    //
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
    {
      category: "Слайсери виробничі",
      name: "Слайсер SIRMAN MANTEGNA 350 BS1 Top",
      slug: "sirman-mantegna-350bs1top",
      image:
        "https://res.cloudinary.com/duyol05ga/image/upload/v1714540249/sirman-mantegna-350bs1top_wrmwlh.jpg",
      price: 110844,
      brand: "SIRMAN (Італія)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "ROBOT COUPE (Франція)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "TATRA (Туреччина)",
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
      brand: "HURAKAN (Китай)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "HURAKAN(Китай)",
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
      brand: "HURAKAN(Китай)",
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
      brand: "HURAKAN(Китай)",
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
      brand: "HURAKAN(Китай)",
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
      brand: "HURAKAN(Китай)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "SIRMAN (Італія)",
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
      brand: "APACH (Італія)",
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
      brand: "APACH (Італія)",
      description:
        "Вакуумний пакувальник. Продуктивність вакуумної помпи: 60 куб. м/год. Довжина зварювальної планки: 2*620 мм. Можливість програмування для категорій продуктів. Максимальна ширина пакету: 600 мм. Функція заповнення інертним газом - опціонально. Розміри камери: 650*535*200 мм. Габарити: 765*710*1050 мм. Напруга підключення: 380 В. Потужність: 1.5 кВт. Вага: 167 кг.",
    },
  ],
};

export default data;

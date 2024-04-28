import bcrypt from "bcryptjs";

export const navLinks = [
  { label: "Каталог", src: "/catalog" },
  { label: "Про нас", src: "/about" },
  { label: "Сервіс", src: "/service" },
  { label: "Оплата/доставка", src: "/payment" },
  { label: "Контакти", src: "/contact" },
];

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

export const brandList = [
  { name: "Adler", imageURL: "/images/logos/adler.svg" },
  { name: "Arris", imageURL: "/images/logos/arris.svg" },
  { name: "Astoria", imageURL: "/images/logos/astoria.svg" },
  { name: "Bartscher", imageURL: "/images/logos/bartscher.svg" },
  { name: "Brema", imageURL: "/images/logos/brema.svg" },
  { name: "Casta", imageURL: "/images/logos/casta.svg" },
  { name: "Ceado", imageURL: "/images/logos/ceado.svg" },
  { name: "Cold", imageURL: "/images/logos/cold.svg" },
  { name: "Conti", imageURL: "/images/logos/conti.svg" },
  { name: "Cuppone", imageURL: "/images/logos/cuppone.svg" },
  { name: "Dihr", imageURL: "/images/logos/dihr.svg" },
  { name: "Elettrobar", imageURL: "/images/logos/elettrobar.svg" },
  { name: "Empero", imageURL: "/images/logos/empero.svg" },
  { name: "Europa", imageURL: "/images/logos/europa.svg" },
  { name: "Fama", imageURL: "/images/logos/fama.svg" },
  { name: "Hoshizaki", imageURL: "/images/logos/hoshizaki.svg" },
  { name: "Josper", imageURL: "/images/logos/josper.svg" },
  { name: "Kopa", imageURL: "/images/logos/kopa.svg" },
  { name: "Mac-Pan", imageURL: "/images/logos/macpan.svg" },
  { name: "MBM", imageURL: "/images/logos/mbm.svg" },
  { name: "Morello-Forni", imageURL: "/images/logos/morelloforni.svg" },
  { name: "NTF", imageURL: "/images/logos/ntf.svg" },
  { name: "Orved", imageURL: "/images/logos/orved.svg" },
  { name: "Pavesi", imageURL: "/images/logos/pavesi.svg" },
  { name: "Prisma-Food", imageURL: "/images/logos/prismafood.svg" },
  { name: "Rational", imageURL: "/images/logos/rational.svg" },
  { name: "RobotCoupe", imageURL: "/images/logos/robotcoupe.svg" },
  { name: "ScanDomestic", imageURL: "/images/logos/scandomestic.svg" },
  { name: "Sidi", imageURL: "/images/logos/sidi.svg" },
  { name: "Silko", imageURL: "/images/logos/silko.svg" },
  { name: "SinMag", imageURL: "/images/logos/sinmag.svg" },
  { name: "Sirman", imageURL: "/images/logos/sirman.svg" },
  { name: "Tecnodom", imageURL: "/images/logos/tecnodom.svg" },
  { name: "Venix", imageURL: "/images/logos/venix.svg" },
  { name: "XTS", imageURL: "/images/logos/xts.svg" },
  { name: "Zernike", imageURL: "/images/logos/zernike.svg" },
];

const data = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
  ],
  products: [
    {
      name: "Free Shirt",
      slug: "free-shirt",
      category: "Shirts",
      image: "/images/shirt1.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
      isFeatured: true,
      banner: "/images/banner1.jpg",
    },
    {
      name: "Fit Shirt",
      slug: "fit-shirt",
      category: "Shirts",
      image: "/images/shirt2.jpg",
      price: 80,
      brand: "Adidas",
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
      isFeatured: true,
      banner: "/images/banner2.jpg",
    },
    {
      name: "Slim Shirt",
      slug: "slim-shirt",
      category: "Shirts",
      image: "/images/shirt3.jpg",
      price: 90,
      brand: "Raymond",
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Golf Pants",
      slug: "golf-pants",
      category: "Pants",
      image: "/images/pants1.jpg",
      price: 90,
      brand: "Oliver",
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description: "Smart looking pants",
    },
    {
      name: "Fit Pants",
      slug: "fit-pants",
      category: "Pants",
      image: "/images/pants2.jpg",
      price: 95,
      brand: "Zara",
      rating: 3.5,
      numReviews: 7,
      countInStock: 20,
      description: "A popular pants",
    },
    {
      name: "Classic Pants",
      slug: "classic-pants",
      category: "Pants",
      image: "/images/pants3.jpg",
      price: 75,
      brand: "Casely",
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: "A popular pants",
    },
  ],
};

export default data;

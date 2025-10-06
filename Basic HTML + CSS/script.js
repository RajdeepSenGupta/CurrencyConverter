const productsData = [
    { "name": "Wireless Bluetooth Headphones", "category": "Electronics", "price": 6639.17 },
    { "name": "Smart Fitness Watch", "category": "Electronics", "price": 16599.17 },
    { "name": "Ergonomic Laptop Stand", "category": "Electronics", "price": 3776.5 },
    { "name": "Stainless Steel Coffee Maker", "category": "Home & Garden", "price": 7469.17 },
    { "name": "Premium Yoga Mat", "category": "Sports", "price": 2904.17 },
    { "name": "Running Shoes - Men's", "category": "Clothing", "price": 9959.17 },
    { "name": "LED Desk Lamp", "category": "Home & Garden", "price": 2489.17 },
    { "name": "Insulated Water Bottle", "category": "Sports", "price": 2074.17 },
    { "name": "Travel Backpack", "category": "Clothing", "price": 4979.17 },
    { "name": "Silicone Phone Case", "category": "Electronics", "price": 1078.17 },
    { "name": "Portable Bluetooth Speaker", "category": "Electronics", "price": 4149.17 },
    { "name": "Heart Rate Fitness Tracker", "category": "Sports", "price": 7469.17 },
    { "name": "RGB Gaming Mouse", "category": "Electronics", "price": 4564.17 },
    { "name": "Mechanical Keyboard", "category": "Electronics", "price": 10789.17 },
    { "name": "27-inch Monitor", "category": "Electronics", "price": 24899.17 },
    { "name": "10-inch Tablet", "category": "Electronics", "price": 29049.17 },
    { "name": "DSLR Camera", "category": "Electronics", "price": 66399.17 },
    { "name": "Camera Tripod", "category": "Electronics", "price": 3319.17 },
    { "name": "USB Condenser Microphone", "category": "Electronics", "price": 5809.17 },
    { "name": "USB-C Charging Cable", "category": "Electronics", "price": 1244.17 },
    { "name": "20000mAh Power Bank", "category": "Electronics", "price": 3734.17 },
    { "name": "Polarized Sunglasses", "category": "Clothing", "price": 7469.17 },
    { "name": "Leather Watch", "category": "Clothing", "price": 12449.17 },
    { "name": "Genuine Leather Wallet", "category": "Clothing", "price": 4149.17 },
    { "name": "Designer Belt", "category": "Clothing", "price": 3319.17 },
    { "name": "Winter Beanie Hat", "category": "Clothing", "price": 1659.17 },
    { "name": "Cashmere Scarf", "category": "Clothing", "price": 6639.17 },
    { "name": "Touchscreen Gloves", "category": "Clothing", "price": 2074.17 },
    { "name": "Athletic Socks Pack", "category": "Clothing", "price": 1410.17 },
    { "name": "Cotton T-Shirt", "category": "Clothing", "price": 2074.17 },
    { "name": "Slim Fit Jeans", "category": "Clothing", "price": 5809.17 },
    { "name": "Leather Jacket", "category": "Clothing", "price": 24899.17 },
    { "name": "Canvas Sneakers", "category": "Clothing", "price": 4564.17 },
    { "name": "Hiking Boots", "category": "Clothing", "price": 11619.17 },
    { "name": "Comfort Sandals", "category": "Clothing", "price": 2904.17 },
    { "name": "Fleece Blanket", "category": "Home & Garden", "price": 3319.17 },
    { "name": "Memory Foam Pillow", "category": "Home & Garden", "price": 3734.17 },
    { "name": "Bath Towel Set", "category": "Home & Garden", "price": 4149.17 },
    { "name": "Blackout Curtains", "category": "Home & Garden", "price": 4979.17 },
    { "name": "Area Rug 5x7", "category": "Home & Garden", "price": 10789.17 },
    { "name": "Table Lamp", "category": "Home & Garden", "price": 2904.17 },
    { "name": "Wall Clock", "category": "Home & Garden", "price": 2489.17 },
    { "name": "Photo Picture Frame", "category": "Home & Garden", "price": 1659.17 },
    { "name": "Ceramic Vase", "category": "Home & Garden", "price": 2074.17 },
    { "name": "Full Length Mirror", "category": "Home & Garden", "price": 7469.17 },
    { "name": "Smoothie Blender", "category": "Home & Garden", "price": 5394.17 },
    { "name": "4-Slice Toaster", "category": "Home & Garden", "price": 4149.17 },
    { "name": "Electric Kettle", "category": "Home & Garden", "price": 3319.17 },
    { "name": "Non-Stick Frying Pan", "category": "Home & Garden", "price": 2904.17 },
    { "name": "Stainless Steel Pot Set", "category": "Home & Garden", "price": 9959.17 },
    { "name": "Chef Knife Set", "category": "Home & Garden", "price": 6639.17 },
    { "name": "Bamboo Cutting Board", "category": "Home & Garden", "price": 2074.17 },
    { "name": "Storage Box Set", "category": "Home & Garden", "price": 2489.17 },
    { "name": "Drawer Organizer", "category": "Home & Garden", "price": 1659.17 },
    { "name": "Wicker Basket", "category": "Home & Garden", "price": 1908.17 },
    { "name": "Hardcover Notebook", "category": "Books", "price": 1244.17 },
    { "name": "Premium Pen Set", "category": "Books", "price": 2489.17 },
    { "name": "Canvas Pencil Case", "category": "Books", "price": 1078.17 },
    { "name": "Heavy Duty Stapler", "category": "Books", "price": 1410.17 },
    { "name": "Precision Scissors", "category": "Books", "price": 829.17 },
    { "name": "Tape Dispenser", "category": "Books", "price": 746.17 },
    { "name": "Expandable File Folder", "category": "Books", "price": 1244.17 },
    { "name": "3-Ring Binder", "category": "Books", "price": 995.17 },
    { "name": "Scientific Calculator", "category": "Books", "price": 2074.17 },
    { "name": "Mesh Desk Organizer", "category": "Books", "price": 1659.17 },
    { "name": "Ceramic Plant Pot", "category": "Home & Garden", "price": 1493.17 },
    { "name": "Gardening Tool Set", "category": "Home & Garden", "price": 3319.17 },
    { "name": "Watering Can", "category": "Home & Garden", "price": 1410.17 },
    { "name": "Vegetable Seeds Pack", "category": "Home & Garden", "price": 829.17 },
    { "name": "Organic Fertilizer", "category": "Home & Garden", "price": 1659.17 },
    { "name": "Professional Tennis Racket", "category": "Sports", "price": 12449.17 },
    { "name": "Official Basketball", "category": "Sports", "price": 2489.17 },
    { "name": "Pro Soccer Ball", "category": "Sports", "price": 2904.17 },
    { "name": "Adjustable Dumbbells", "category": "Sports", "price": 16599.17 },
    { "name": "Resistance Bands Set", "category": "Sports", "price": 2074.17 },
    { "name": "Speed Jump Rope", "category": "Sports", "price": 1244.17 },
    { "name": "Stability Exercise Ball", "category": "Sports", "price": 2489.17 },
    { "name": "High Density Foam Roller", "category": "Sports", "price": 2904.17 },
    { "name": "Mountain Bicycle", "category": "Sports", "price": 41499.17 },
    { "name": "Safety Helmet", "category": "Sports", "price": 3734.17 },
    { "name": "Bestselling Novel", "category": "Books", "price": 1410.17 },
    { "name": "Professional Cookbook", "category": "Books", "price": 2489.17 },
    { "name": "Fashion Magazine Subscription", "category": "Books", "price": 3319.17 },
    { "name": "Graphic Comic Book", "category": "Books", "price": 1078.17 },
    { "name": "Leather Journal", "category": "Books", "price": 2074.17 },
    { "name": "1000 Piece Jigsaw Puzzle", "category": "Toys", "price": 1659.17 },
    { "name": "Strategy Board Game", "category": "Toys", "price": 3734.17 },
    { "name": "Collectible Action Figure", "category": "Toys", "price": 2489.17 },
    { "name": "Fashion Doll", "category": "Toys", "price": 2074.17 },
    { "name": "Creative Building Blocks", "category": "Toys", "price": 4149.17 },
    { "name": "Acrylic Paint Set", "category": "Toys", "price": 2904.17 },
    { "name": "Artist Paint Brushes", "category": "Toys", "price": 1659.17 },
    { "name": "Stretched Canvas Pack", "category": "Toys", "price": 2489.17 },
    { "name": "Spiral Sketchbook", "category": "Toys", "price": 1244.17 },
    { "name": "Colored Pencils 72-Pack", "category": "Toys", "price": 2074.17 },
    { "name": "Moisturizing Shampoo", "category": "Beauty", "price": 1410.17 },
    { "name": "Repairing Conditioner", "category": "Beauty", "price": 1576.17 },
    { "name": "Hydrating Body Wash", "category": "Beauty", "price": 1078.17 },
    { "name": "Anti-Aging Face Cream", "category": "Beauty", "price": 4149.17 },
    { "name": "Himalaya Facewash", "category": "Beauty", "price": 2489.17 }
];

const currencySymbols = {
    'INR': '₹',
    'USD': '$',
    'EUR': '€',
    'GBP': '£',
    'JPY': '¥',
    'AUD': 'A$',
    'CAD': 'C$',
    'CHF': 'CHF',
    'CNY': '¥',
    'SGD': 'S$',
    'AED': 'د.إ',
    'SAR': '﷼',
    'MYR': 'RM',
    'THB': '฿',
    'KRW': '₩'
};

const currencies = [
    { "name": "United Arab Emirates Dirham", "code": "AED", "symbol": "د.إ" },
    { "name": "Afghan Afghani", "code": "AFN", "symbol": "؋" },
    { "name": "Albanian Lek", "code": "ALL", "symbol": "L" },
    { "name": "Armenian Dram", "code": "AMD", "symbol": "֏" },
    { "name": "Netherlands Antillean Guilder", "code": "ANG", "symbol": "ƒ" },
    { "name": "Angolan Kwanza", "code": "AOA", "symbol": "Kz" },
    { "name": "Argentine Peso", "code": "ARS", "symbol": "$" },
    { "name": "Australian Dollar", "code": "AUD", "symbol": "A$" },
    { "name": "Aruban Florin", "code": "AWG", "symbol": "ƒ" },
    { "name": "Azerbaijani Manat", "code": "AZN", "symbol": "₼" },
    { "name": "Bosnia-Herzegovina Convertible Mark", "code": "BAM", "symbol": "KM" },
    { "name": "Barbadian Dollar", "code": "BBD", "symbol": "Bds$" },
    { "name": "Bangladeshi Taka", "code": "BDT", "symbol": "৳" },
    { "name": "Bulgarian Lev", "code": "BGN", "symbol": "лв" },
    { "name": "Bahraini Dinar", "code": "BHD", "symbol": ".د.ب" },
    { "name": "Burundian Franc", "code": "BIF", "symbol": "FBu" },
    { "name": "Bermudian Dollar", "code": "BMD", "symbol": "$" },
    { "name": "Brunei Dollar", "code": "BND", "symbol": "B$" },
    { "name": "Bolivian Boliviano", "code": "BOB", "symbol": "Bs." },
    { "name": "Brazilian Real", "code": "BRL", "symbol": "R$" },
    { "name": "Bahamian Dollar", "code": "BSD", "symbol": "B$" },
    { "name": "Bhutanese Ngultrum", "code": "BTN", "symbol": "Nu." },
    { "name": "Botswana Pula", "code": "BWP", "symbol": "P" },
    { "name": "Belarusian Ruble", "code": "BYN", "symbol": "Br" },
    { "name": "Belize Dollar", "code": "BZD", "symbol": "BZ$" },
    { "name": "Canadian Dollar", "code": "CAD", "symbol": "C$" },
    { "name": "Congolese Franc", "code": "CDF", "symbol": "FC" },
    { "name": "Swiss Franc", "code": "CHF", "symbol": "CHF" },
    { "name": "Chilean Peso", "code": "CLP", "symbol": "$" },
    { "name": "Chinese Yuan", "code": "CNY", "symbol": "¥" },
    { "name": "Colombian Peso", "code": "COP", "symbol": "$" },
    { "name": "Costa Rican Colón", "code": "CRC", "symbol": "₡" },
    { "name": "Cuban Peso", "code": "CUP", "symbol": "₱" },
    { "name": "Cape Verdean Escudo", "code": "CVE", "symbol": "$" },
    { "name": "Czech Koruna", "code": "CZK", "symbol": "Kč" },
    { "name": "Djiboutian Franc", "code": "DJF", "symbol": "Fdj" },
    { "name": "Danish Krone", "code": "DKK", "symbol": "kr" },
    { "name": "Dominican Peso", "code": "DOP", "symbol": "RD$" },
    { "name": "Algerian Dinar", "code": "DZD", "symbol": "دج" },
    { "name": "Egyptian Pound", "code": "EGP", "symbol": "£" },
    { "name": "Eritrean Nakfa", "code": "ERN", "symbol": "Nfk" },
    { "name": "Ethiopian Birr", "code": "ETB", "symbol": "Br" },
    { "name": "Euro", "code": "EUR", "symbol": "€" },
    { "name": "Fijian Dollar", "code": "FJD", "symbol": "FJ$" },
    { "name": "Falkland Islands Pound", "code": "FKP", "symbol": "£" },
    { "name": "British Pound Sterling", "code": "GBP", "symbol": "£" },
    { "name": "Georgian Lari", "code": "GEL", "symbol": "₾" },
    { "name": "Ghanaian Cedi", "code": "GHS", "symbol": "₵" },
    { "name": "Gibraltar Pound", "code": "GIP", "symbol": "£" },
    { "name": "Gambian Dalasi", "code": "GMD", "symbol": "D" },
    { "name": "Guinean Franc", "code": "GNF", "symbol": "FG" },
    { "name": "Guatemalan Quetzal", "code": "GTQ", "symbol": "Q" },
    { "name": "Guyanese Dollar", "code": "GYD", "symbol": "G$" },
    { "name": "Hong Kong Dollar", "code": "HKD", "symbol": "HK$" },
    { "name": "Honduran Lempira", "code": "HNL", "symbol": "L" },
    { "name": "Croatian Kuna", "code": "HRK", "symbol": "kn" },
    { "name": "Haitian Gourde", "code": "HTG", "symbol": "G" },
    { "name": "Hungarian Forint", "code": "HUF", "symbol": "Ft" },
    { "name": "Indonesian Rupiah", "code": "IDR", "symbol": "Rp" },
    { "name": "Israeli New Shekel", "code": "ILS", "symbol": "₪" },
    { "name": "Indian Rupee", "code": "INR", "symbol": "₹" },
    { "name": "Iraqi Dinar", "code": "IQD", "symbol": "ع.د" },
    { "name": "Iranian Rial", "code": "IRR", "symbol": "﷼" },
    { "name": "Icelandic Króna", "code": "ISK", "symbol": "kr" },
    { "name": "Jamaican Dollar", "code": "JMD", "symbol": "J$" },
    { "name": "Jordanian Dinar", "code": "JOD", "symbol": "د.ا" },
    { "name": "Japanese Yen", "code": "JPY", "symbol": "¥" },
    { "name": "Kenyan Shilling", "code": "KES", "symbol": "KSh" },
    { "name": "Kyrgyzstani Som", "code": "KGS", "symbol": "с" },
    { "name": "Cambodian Riel", "code": "KHR", "symbol": "៛" },
    { "name": "South Korean Won", "code": "KRW", "symbol": "₩" },
    { "name": "Kuwaiti Dinar", "code": "KWD", "symbol": "د.ك" },
    { "name": "Kazakhstani Tenge", "code": "KZT", "symbol": "₸" },
    { "name": "Lao Kip", "code": "LAK", "symbol": "₭" },
    { "name": "Lebanese Pound", "code": "LBP", "symbol": "ل.ل" },
    { "name": "Sri Lankan Rupee", "code": "LKR", "symbol": "Rs" },
    { "name": "Liberian Dollar", "code": "LRD", "symbol": "L$" },
    { "name": "Lesotho Loti", "code": "LSL", "symbol": "L" },
    { "name": "Libyan Dinar", "code": "LYD", "symbol": "ل.د" },
    { "name": "Moroccan Dirham", "code": "MAD", "symbol": "د.م." },
    { "name": "Moldovan Leu", "code": "MDL", "symbol": "L" },
    { "name": "Malagasy Ariary", "code": "MGA", "symbol": "Ar" },
    { "name": "Macedonian Denar", "code": "MKD", "symbol": "ден" },
    { "name": "Burmese Kyat", "code": "MMK", "symbol": "Ks" },
    { "name": "Mongolian Tögrög", "code": "MNT", "symbol": "₮" },
    { "name": "Macanese Pataca", "code": "MOP", "symbol": "MOP$" },
    { "name": "Mauritian Rupee", "code": "MUR", "symbol": "₨" },
    { "name": "Maldivian Rufiyaa", "code": "MVR", "symbol": "Rf" },
    { "name": "Malawian Kwacha", "code": "MWK", "symbol": "MK" },
    { "name": "Mexican Peso", "code": "MXN", "symbol": "Mex$" },
    { "name": "Malaysian Ringgit", "code": "MYR", "symbol": "RM" },
    { "name": "Mozambican Metical", "code": "MZN", "symbol": "MT" },
    { "name": "Namibian Dollar", "code": "NAD", "symbol": "N$" },
    { "name": "Nigerian Naira", "code": "NGN", "symbol": "₦" },
    { "name": "Nicaraguan Córdoba", "code": "NIO", "symbol": "C$" },
    { "name": "Norwegian Krone", "code": "NOK", "symbol": "kr" },
    { "name": "Nepalese Rupee", "code": "NPR", "symbol": "₨" },
    { "name": "New Zealand Dollar", "code": "NZD", "symbol": "NZ$" },
    { "name": "Omani Rial", "code": "OMR", "symbol": "﷼" },
    { "name": "Panamanian Balboa", "code": "PAB", "symbol": "B/." },
    { "name": "Peruvian Sol", "code": "PEN", "symbol": "S/." },
    { "name": "Papua New Guinean Kina", "code": "PGK", "symbol": "K" },
    { "name": "Philippine Peso", "code": "PHP", "symbol": "₱" },
    { "name": "Pakistani Rupee", "code": "PKR", "symbol": "₨" },
    { "name": "Polish Złoty", "code": "PLN", "symbol": "zł" },
    { "name": "Paraguayan Guaraní", "code": "PYG", "symbol": "₲" },
    { "name": "Qatari Riyal", "code": "QAR", "symbol": "ر.ق" },
    { "name": "Romanian Leu", "code": "RON", "symbol": "lei" },
    { "name": "Serbian Dinar", "code": "RSD", "symbol": "дин" },
    { "name": "Russian Ruble", "code": "RUB", "symbol": "₽" },
    { "name": "Rwandan Franc", "code": "RWF", "symbol": "FRw" },
    { "name": "Saudi Riyal", "code": "SAR", "symbol": "﷼" },
    { "name": "Seychellois Rupee", "code": "SCR", "symbol": "₨" },
    { "name": "Sudanese Pound", "code": "SDG", "symbol": "ج.س." },
    { "name": "Swedish Krona", "code": "SEK", "symbol": "kr" },
    { "name": "Singapore Dollar", "code": "SGD", "symbol": "S$" },
    { "name": "Saint Helena Pound", "code": "SHP", "symbol": "£" },
    { "name": "Sierra Leonean Leone", "code": "SLL", "symbol": "Le" },
    { "name": "Somali Shilling", "code": "SOS", "symbol": "Sh.So." },
    { "name": "Surinamese Dollar", "code": "SRD", "symbol": "SRD$" },
    { "name": "Swazi Lilangeni", "code": "SZL", "symbol": "L" },
    { "name": "Thai Baht", "code": "THB", "symbol": "฿" },
    { "name": "Tajikistani Somoni", "code": "TJS", "symbol": "ЅМ" },
    { "name": "Turkmenistani Manat", "code": "TMT", "symbol": "T" },
    { "name": "Tunisian Dinar", "code": "TND", "symbol": "د.ت" },
    { "name": "Turkish Lira", "code": "TRY", "symbol": "₺" },
    { "name": "Trinidad and Tobago Dollar", "code": "TTD", "symbol": "TT$" },
    { "name": "New Taiwan Dollar", "code": "TWD", "symbol": "NT$" },
    { "name": "Tanzanian Shilling", "code": "TZS", "symbol": "TSh" },
    { "name": "Ukrainian Hryvnia", "code": "UAH", "symbol": "₴" },
    { "name": "Ugandan Shilling", "code": "UGX", "symbol": "USh" },
    { "name": "United States Dollar", "code": "USD", "symbol": "$" },
    { "name": "Uruguayan Peso", "code": "UYU", "symbol": "$U" },
    { "name": "Uzbekistani So'm", "code": "UZS", "symbol": "лв" },
    { "name": "Venezuelan Bolívar Soberano", "code": "VES", "symbol": "Bs.S" },
    { "name": "Vietnamese Đồng", "code": "VND", "symbol": "₫" },
    { "name": "Central African CFA Franc", "code": "XAF", "symbol": "FCFA" },
    { "name": "East Caribbean Dollar", "code": "XCD", "symbol": "EC$" },
    { "name": "West African CFA Franc", "code": "XOF", "symbol": "CFA" },
    { "name": "CFP Franc", "code": "XPF", "symbol": "₣" },
    { "name": "South African Rand", "code": "ZAR", "symbol": "R" },
    { "name": "Zambian Kwacha", "code": "ZMW", "symbol": "ZK" }
];

const baseCurrencyCode = 'USD';
const exchangeRateApi = `https://api.exchangerate-api.com/v4/latest/${baseCurrencyCode}`;
const fetchIPApi = 'https://ipinfo.io/json';

let exchangeRates = {};
let currentCurrencyCode = baseCurrencyCode;
let lastFetchTime = null;
let userCurrencyCode = '';

// #region Initialize on page load

setTimeout(() => {
    initializeData();
}, 10);

async function initializeData() {
    generateCurrencyDropdownList();
    await fetchExchangeRates();
    //await getCurrencyFromIP();
    generateProducts();
}

function generateCurrencyDropdownList() {
    const select = document.createElement("select");
    select.id = "currency";

    // Loop through the JSON array and create <option> elements
    currencies.forEach(currency => {
        const option = document.createElement("option");
        option.value = currency.code;
        option.textContent = `${currency.code} - ${currency.name} (${currency.symbol})`;
        option.selected = currency.code === baseCurrencyCode;
        select.appendChild(option);
    });

    // Set onChange event
    select.onchange = updateCurrency;

    // Append the <select> to the page
    document.getElementById("dropdown-container").appendChild(select);
}

// #endregion

// #region Fetch products and Generate table data

function generateProducts() {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    const currentCurrencyDetails = currencies.filter(x => x.code === currentCurrencyCode)[0];
    const symbol = currentCurrencyDetails ? currentCurrencyDetails.symbol : currentCurrencyCode;
    let totalPrice = 0;

    productsData.forEach((product, index) => {
        const convertedPrice = convertPrice(product.price);
        totalPrice += convertedPrice;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td><span class="category ${getCategoryCssClass(product.category)}">${product.category}</span></td>
            <td class="price">${symbol}${convertedPrice.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
    });

    // Update stats
    const avgPrice = totalPrice / productsData.length;
    document.getElementById('totalProducts').textContent = productsData.length;
    document.getElementById('avgPrice').textContent = `${symbol}${avgPrice.toFixed(2)}`;
    document.getElementById('totalValue').textContent = `${symbol}${totalPrice.toFixed(2)}`;
}

function getCategoryCssClass(category) {
    const map = {
        'Electronics': 'category-electronics',
        'Clothing': 'category-clothing',
        'Home & Garden': 'category-home',
        'Sports': 'category-sports',
        'Books': 'category-books',
        'Toys': 'category-toys',
        'Beauty': 'category-beauty',
        'Food & Beverage': 'category-food'
    };

    return map[category] || 'category-electronics';
}

// #endregion

// #region Currency and Conversion related methods

async function fetchExchangeRates() {
    try {
        const response = await fetch(exchangeRateApi);
        const data = await response.json();

        exchangeRates = data.rates;
        lastFetchTime = new Date();

        updateExchangeInfo();
        generateProducts();

        return true;
    }
    catch (error) {
        document.getElementById('exchangeInfo').textContent = 'Failed to load exchange rates';

        return false;
    }
}

function updateExchangeInfo() {
    if (lastFetchTime && currentCurrencyCode !== baseCurrencyCode) {
        const rate = exchangeRates[currentCurrencyCode];
        const timeString = lastFetchTime.toLocaleTimeString();

        document.getElementById('exchangeInfo').textContent = `1 ${baseCurrencyCode} = ${rate.toFixed(4)} ${currentCurrencyCode} (Updated: ${timeString})`;
    }
    else if (currentCurrencyCode === baseCurrencyCode) {
        document.getElementById('exchangeInfo').textContent = `Base currency (${currentCurrencyCode})`;
    }
}

async function updateCurrency() {
    const select = document.getElementById('currency');
    currentCurrencyCode = select.value;

    if (currentCurrencyCode !== baseCurrencyCode) {
        const needsFetch = !lastFetchTime || (new Date() - lastFetchTime) > 3600000;
        if (needsFetch || !exchangeRates[currentCurrencyCode]) {
            document.getElementById('exchangeInfo').textContent = 'Loading rates...';
            await fetchExchangeRates();
        }
    }

    updateExchangeInfo();
    generateProducts();
}

function convertPrice(priceINR) {
    if (currentCurrencyCode === baseCurrencyCode) {
        return priceINR;
    }

    const rate = exchangeRates[currentCurrencyCode] || 1;

    return priceINR * rate;
}

async function refreshExchangeRates() {
    await fetchExchangeRates();
}

async function getCurrencyFromIP() {
    userCurrencyCode = baseCurrencyCode;

    try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        userCurrencyCode = data.currency;

        return true;
    }
    catch (err) {
        console.error("Location fetch error:", err);

        return false;
    }
}

// #endregion
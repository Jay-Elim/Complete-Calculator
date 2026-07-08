// ===== CONFIGURATION =====
const CONFIG = {
    API_KEY: '361c02283e8ac0707dfa44e1',
    BASE_CURRENCY: 'USD',
    UPDATE_INTERVAL: 300000, // 5 minutes
};

// ===== UNIT DEFINITIONS =====
const UNITS = {
    forex: {
        label: 'Currency',
        units: {
            USD: { label: 'USD - US Dollar' },
            EUR: { label: 'EUR - Euro' },
            GBP: { label: 'GBP - British Pound' },
            JPY: { label: 'JPY - Japanese Yen' },
            CAD: { label: 'CAD - Canadian Dollar' },
            AUD: { label: 'AUD - Australian Dollar' },
            CHF: { label: 'CHF - Swiss Franc' },
            CNY: { label: 'CNY - Chinese Yuan' },
            INR: { label: 'INR - Indian Rupee' },
            BRL: { label: 'BRL - Brazilian Real' },
            ZAR: { label: 'ZAR - South African Rand' },
            NGN: { label: 'NGN - Nigerian Naira' },
            KES: { label: 'KES - Kenyan Shilling' },
            EGP: { label: 'EGP - Egyptian Pound' },
            GHS: { label: 'GHS - Ghanaian Cedi' },
            MXN: { label: 'MXN - Mexican Peso' },
            SGD: { label: 'SGD - Singapore Dollar' },
            NZD: { label: 'NZD - New Zealand Dollar' },
            SEK: { label: 'SEK - Swedish Krona' },
            NOK: { label: 'NOK - Norwegian Krone' },
            DKK: { label: 'DKK - Danish Krone' },
            PLN: { label: 'PLN - Polish Zloty' },
            THB: { label: 'THB - Thai Baht' },
            MYR: { label: 'MYR - Malaysian Ringgit' },
            PHP: { label: 'PHP - Philippine Peso' },
            IDR: { label: 'IDR - Indonesian Rupiah' },
            VND: { label: 'VND - Vietnamese Dong' },
            RUB: { label: 'RUB - Russian Ruble' },
            TRY: { label: 'TRY - Turkish Lira' },
            ILS: { label: 'ILS - Israeli Shekel' },
            SAR: { label: 'SAR - Saudi Riyal' },
            AED: { label: 'AED - UAE Dirham' },
            HKD: { label: 'HKD - Hong Kong Dollar' },
            TWD: { label: 'TWD - Taiwan Dollar' },
            KRW: { label: 'KRW - South Korean Won' },
            PKR: { label: 'PKR - Pakistani Rupee' },
            BDT: { label: 'BDT - Bangladeshi Taka' },
            LKR: { label: 'LKR - Sri Lankan Rupee' },
            NPR: { label: 'NPR - Nepalese Rupee' },
            UAH: { label: 'UAH - Ukrainian Hryvnia' },
            RON: { label: 'RON - Romanian Leu' },
            BGN: { label: 'BGN - Bulgarian Lev' },
            HRK: { label: 'HRK - Croatian Kuna' },
            CZK: { label: 'CZK - Czech Koruna' },
            HUF: { label: 'HUF - Hungarian Forint' },
            SOS: { label: 'SOS - Somali Shilling' },
            TZS: { label: 'TZS - Tanzanian Shilling' },
            UGX: { label: 'UGX - Ugandan Shilling' },
            XAF: { label: 'XAF - Central African CFA' },
            XOF: { label: 'XOF - West African CFA' },
            MAD: { label: 'MAD - Moroccan Dirham' },
            DZD: { label: 'DZD - Algerian Dinar' },
            TND: { label: 'TND - Tunisian Dinar' },
            LYD: { label: 'LYD - Libyan Dinar' },
            SDG: { label: 'SDG - Sudanese Pound' },
            ETB: { label: 'ETB - Ethiopian Birr' },
        },
        convert: (value, from, to, rates) => {
            if (from === to) return value;
            const fromRate = rates[from] || 1;
            const toRate = rates[to] || 1;
            return (value / fromRate) * toRate;
        },
        getRate: (from, to, rates) => {
            const fromRate = rates[from] || 1;
            const toRate = rates[to] || 1;
            return toRate / fromRate;
        }
    },
    length: {
        label: 'Length',
        units: {
            meter: { label: 'Meter', toBase: 1 },
            kilometer: { label: 'Kilometer', toBase: 1000 },
            centimeter: { label: 'Centimeter', toBase: 0.01 },
            millimeter: { label: 'Millimeter', toBase: 0.001 },
            mile: { label: 'Mile', toBase: 1609.344 },
            yard: { label: 'Yard', toBase: 0.9144 },
            foot: { label: 'Foot', toBase: 0.3048 },
            inch: { label: 'Inch', toBase: 0.0254 },
            nautical_mile: { label: 'Nautical Mile', toBase: 1852 },
        },
        convert: (value, from, to) => {
            const baseValue = value * UNITS.length.units[from].toBase;
            return baseValue / UNITS.length.units[to].toBase;
        },
        getRate: (from, to) => {
            return UNITS.length.units[from].toBase / UNITS.length.units[to].toBase;
        }
    },
    weight: {
        label: 'Weight',
        units: {
            kilogram: { label: 'Kilogram', toBase: 1 },
            gram: { label: 'Gram', toBase: 0.001 },
            milligram: { label: 'Milligram', toBase: 0.000001 },
            pound: { label: 'Pound (lb)', toBase: 0.453592 },
            ounce: { label: 'Ounce (oz)', toBase: 0.0283495 },
            stone: { label: 'Stone', toBase: 6.35029 },
            ton: { label: 'Ton (metric)', toBase: 1000 },
            us_ton: { label: 'US Ton', toBase: 907.185 },
            carat: { label: 'Carat', toBase: 0.0002 },
        },
        convert: (value, from, to) => {
            const baseValue = value * UNITS.weight.units[from].toBase;
            return baseValue / UNITS.weight.units[to].toBase;
        },
        getRate: (from, to) => {
            return UNITS.weight.units[from].toBase / UNITS.weight.units[to].toBase;
        }
    },
    temperature: {
        label: 'Temperature',
        units: {
            celsius: { label: 'Celsius (°C)' },
            fahrenheit: { label: 'Fahrenheit (°F)' },
            kelvin: { label: 'Kelvin (K)' },
        },
        convert: (value, from, to) => {
            // Convert to Celsius first
            let celsius;
            if (from === 'celsius') celsius = value;
            else if (from === 'fahrenheit') celsius = (value - 32) * 5/9;
            else if (from === 'kelvin') celsius = value - 273.15;

            // Convert from Celsius to target
            if (to === 'celsius') return celsius;
            else if (to === 'fahrenheit') return (celsius * 9/5) + 32;
            else if (to === 'kelvin') return celsius + 273.15;
            return value;
        },
        getRate: (from, to) => {
            // Rates don't apply to temperature
            return null;
        }
    },
    area: {
        label: 'Area',
        units: {
            sq_meter: { label: 'Square Meter', toBase: 1 },
            sq_kilometer: { label: 'Square Kilometer', toBase: 1e6 },
            sq_mile: { label: 'Square Mile', toBase: 2.59e6 },
            sq_yard: { label: 'Square Yard', toBase: 0.836127 },
            sq_foot: { label: 'Square Foot', toBase: 0.092903 },
            sq_inch: { label: 'Square Inch', toBase: 0.00064516 },
            hectare: { label: 'Hectare', toBase: 10000 },
            acre: { label: 'Acre', toBase: 4046.86 },
        },
        convert: (value, from, to) => {
            const baseValue = value * UNITS.area.units[from].toBase;
            return baseValue / UNITS.area.units[to].toBase;
        },
        getRate: (from, to) => {
            return UNITS.area.units[from].toBase / UNITS.area.units[to].toBase;
        }
    },
    volume: {
        label: 'Volume',
        units: {
            liter: { label: 'Liter', toBase: 1 },
            milliliter: { label: 'Milliliter', toBase: 0.001 },
            gallon_us: { label: 'Gallon (US)', toBase: 3.78541 },
            gallon_uk: { label: 'Gallon (UK)', toBase: 4.54609 },
            quart_us: { label: 'Quart (US)', toBase: 0.946353 },
            pint_us: { label: 'Pint (US)', toBase: 0.473176 },
            cup_us: { label: 'Cup (US)', toBase: 0.236588 },
            fluid_ounce_us: { label: 'Fluid Ounce (US)', toBase: 0.0295735 },
            cubic_meter: { label: 'Cubic Meter', toBase: 1000 },
            cubic_foot: { label: 'Cubic Foot', toBase: 28.3168 },
            cubic_inch: { label: 'Cubic Inch', toBase: 0.0163871 },
        },
        convert: (value, from, to) => {
            const baseValue = value * UNITS.volume.units[from].toBase;
            return baseValue / UNITS.volume.units[to].toBase;
        },
        getRate: (from, to) => {
            return UNITS.volume.units[from].toBase / UNITS.volume.units[to].toBase;
        }
    },
    speed: {
        label: 'Speed',
        units: {
            m_s: { label: 'Meters per second', toBase: 1 },
            km_h: { label: 'Kilometers per hour', toBase: 0.277778 },
            mph: { label: 'Miles per hour', toBase: 0.44704 },
            knot: { label: 'Knot', toBase: 0.514444 },
            ft_s: { label: 'Feet per second', toBase: 0.3048 },
        },
        convert: (value, from, to) => {
            const baseValue = value * UNITS.speed.units[from].toBase;
            return baseValue / UNITS.speed.units[to].toBase;
        },
        getRate: (from, to) => {
            return UNITS.speed.units[from].toBase / UNITS.speed.units[to].toBase;
        }
    }
};

// ===== STATE =====
let state = {
    category: 'forex',
    fromUnit: 'USD',
    toUnit: 'EUR',
    forexRates: {},
    lastUpdate: null,
    history: JSON.parse(localStorage.getItem('converterHistory')) || [],
};

// ===== DOM REFS =====
const elements = {
    fromValue: document.getElementById('fromValue'),
    toValue: document.getElementById('toValue'),
    fromUnit: document.getElementById('fromUnit'),
    toUnit: document.getElementById('toUnit'),
    resultDisplay: document.getElementById('resultDisplay'),
    resultLabel: document.getElementById('resultLabel'),
    rateInfo: document.getElementById('rateInfo'),
    rateFromLabel: document.getElementById('rateFromLabel'),
    rateToLabel: document.getElementById('rateToLabel'),
    rateValue: document.getElementById('rateValue'),
    swapBtn: document.getElementById('swapBtn'),
    categoryTabs: document.getElementById('categoryTabs'),
    converterTitle: document.getElementById('converterTitle'),
    historyList: document.getElementById('historyList'),
    clearHistory: document.getElementById('clearHistory'),
};

// ===== API FUNCTIONS =====
async function fetchForexRates() {
    try {
        const response = await fetch(
            `https://api.exchangerate-api.com/v4/latest/${CONFIG.BASE_CURRENCY}`
        );
        if (!response.ok) throw new Error('Failed to fetch rates');
        const data = await response.json();
        state.forexRates = data.rates;
        state.lastUpdate = new Date();
        console.log('✅ Forex rates updated:', Object.keys(state.forexRates).length, 'currencies');
        return state.forexRates;
    } catch (error) {
        console.error('Error fetching forex rates:', error);
        // Fallback rates if API fails
        if (Object.keys(state.forexRates).length === 0) {
            state.forexRates = {
                USD: 1, EUR: 0.92, GBP: 0.79, JPY: 149.5,
                CAD: 1.36, AUD: 1.52, CHF: 0.89, CNY: 7.24,
                INR: 83.2, BRL: 4.98, ZAR: 19.1, NGN: 1480,
                KES: 145, EGP: 48.5, GHS: 12.8, MXN: 16.9,
                SGD: 1.35, NZD: 1.65, SEK: 10.5, NOK: 10.7,
                DKK: 6.88, PLN: 4.02, THB: 36.2, MYR: 4.75,
                PHP: 56.2, IDR: 15700, VND: 24800, RUB: 92.5,
                TRY: 31.8, ILS: 3.72, SAR: 3.75, AED: 3.67,
                HKD: 7.82, TWD: 31.5, KRW: 1330, PKR: 278,
                BDT: 109, LKR: 308, NPR: 133, UAH: 38.2,
                RON: 4.58, BGN: 1.80, HRK: 7.04, CZK: 23.2,
                HUF: 358, SOS: 570, TZS: 2500, UGX: 3800,
                XAF: 605, XOF: 605, MAD: 10.1, DZD: 134.5,
                TND: 3.12, LYD: 4.82, SDG: 580, ETB: 56.5
            };
        }
        return state.forexRates;
    }
}

// ===== UNIT SELECTION =====
function populateUnits(category, fromUnit, toUnit) {
    const unitData = UNITS[category];
    if (!unitData) return;

    const units = unitData.units;
    const fromSelect = elements.fromUnit;
    const toSelect = elements.toUnit;

    // Clear existing options
    fromSelect.innerHTML = '';
    toSelect.innerHTML = '';

    // Add options
    Object.keys(units).forEach(key => {
        const option1 = document.createElement('option');
        option1.value = key;
        option1.textContent = units[key].label;
        fromSelect.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = key;
        option2.textContent = units[key].label;
        toSelect.appendChild(option2);
    });

    // Set values
    if (fromUnit && units[fromUnit]) fromSelect.value = fromUnit;
    else fromSelect.value = Object.keys(units)[0];

    if (toUnit && units[toUnit]) toSelect.value = toUnit;
    else toSelect.value = Object.keys(units)[1] || Object.keys(units)[0];
}

// ===== CONVERSION LOGIC =====
function convert() {
    const fromUnit = elements.fromUnit.value;
    const toUnit = elements.toUnit.value;
    const value = parseFloat(elements.fromValue.value) || 0;
    const category = state.category;
    const unitData = UNITS[category];

    let result, rate;

    if (category === 'forex') {
        const rates = state.forexRates;
        if (Object.keys(rates).length === 0) {
            elements.toValue.value = 'Loading...';
            elements.resultDisplay.textContent = 'Loading rates...';
            return;
        }
        result = unitData.convert(value, fromUnit, toUnit, rates);
        rate = unitData.getRate(fromUnit, toUnit, rates);
    } else if (category === 'temperature') {
        result = unitData.convert(value, fromUnit, toUnit);
        rate = null;
    } else {
        result = unitData.convert(value, fromUnit, toUnit);
        rate = unitData.getRate(fromUnit, toUnit);
    }

    // Display result
    const formattedResult = Number.isFinite(result) ? result.toFixed(6) : '0';
    elements.toValue.value = formattedResult;
    elements.resultDisplay.textContent = formattedResult;

    // Update rate info
    if (category === 'forex') {
        const fromLabel = UNITS.forex.units[fromUnit]?.label || fromUnit;
        const toLabel = UNITS.forex.units[toUnit]?.label || toUnit;
        elements.rateFromLabel.textContent = fromUnit;
        elements.rateToLabel.textContent = toUnit;
        if (rate !== null && rate !== undefined && isFinite(rate)) {
            elements.rateValue.textContent = rate.toFixed(6);
        } else {
            elements.rateValue.textContent = '—';
        }
        elements.resultLabel.textContent = `${value} ${fromUnit} = ${formattedResult} ${toUnit}`;
    } else if (category === 'temperature') {
        elements.resultLabel.textContent = `${value}°${fromUnit} = ${formattedResult}°${toUnit}`;
        elements.rateInfo.textContent = `🌡️ ${UNITS.temperature.units[fromUnit]?.label} → ${UNITS.temperature.units[toUnit]?.label}`;
    } else {
        const fromLabel = unitData.units[fromUnit]?.label || fromUnit;
        const toLabel = unitData.units[toUnit]?.label || toUnit;
        elements.resultLabel.textContent = `${value} ${fromLabel} = ${formattedResult} ${toLabel}`;
        if (rate !== null && rate !== undefined && isFinite(rate)) {
            elements.rateInfo.textContent = `📊 1 ${fromUnit} = ${rate.toFixed(6)} ${toUnit}`;
        } else {
            elements.rateInfo.textContent = `📊 ${fromUnit} → ${toUnit}`;
        }
    }

    // Add to history
    if (value > 0 && result !== 0) {
        addHistory(value, fromUnit, toUnit, formattedResult, category);
    }
}

// ===== HISTORY =====
function addHistory(value, from, to, result, category) {
    const entry = {
        value,
        from,
        to,
        result,
        category,
        timestamp: new Date().toISOString()
    };
    state.history.unshift(entry);
    if (state.history.length > 20) state.history.pop();
    localStorage.setItem('converterHistory', JSON.stringify(state.history));
    renderHistory();
}

function renderHistory() {
    const list = elements.historyList;
    if (state.history.length === 0) {
        list.innerHTML = '<div class="history-item"><span class="text-gray-600">No conversions yet</span></div>';
        return;
    }
    list.innerHTML = state.history.slice(0, 10).map(entry => {
        const emoji = entry.category === 'forex' ? '💱' : '📐';
        return `<div class="history-item">
            <span>${emoji} ${entry.value} ${entry.from} → ${entry.to}</span>
            <span class="value">${entry.result}</span>
        </div>`;
    }).join('');
}

function clearHistory() {
    state.history = [];
    localStorage.setItem('converterHistory', JSON.stringify(state.history));
    renderHistory();
}

// ===== SWAP =====
function swapUnits() {
    const fromVal = elements.fromUnit.value;
    const toVal = elements.toUnit.value;
    elements.fromUnit.value = toVal;
    elements.toUnit.value = fromVal;
    // Also swap the from/to unit state
    state.fromUnit = toVal;
    state.toUnit = fromVal;
    convert();
}

// ===== CATEGORY SWITCH =====
function switchCategory(category) {
    state.category = category;
    const unitData = UNITS[category];

    // Update tabs
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === category);
    });

    // Update title
    elements.converterTitle.textContent = `${unitData.label} Converter`;

    // Determine default units
    const unitKeys = Object.keys(unitData.units);
    let fromDefault = unitKeys[0];
    let toDefault = unitKeys[1] || unitKeys[0];

    // Preserve forex selections
    if (category === 'forex') {
        fromDefault = state.fromUnit || 'USD';
        toDefault = state.toUnit || 'EUR';
        if (!unitData.units[fromDefault]) fromDefault = 'USD';
        if (!unitData.units[toDefault]) toDefault = 'EUR';
    }

    populateUnits(category, fromDefault, toDefault);
    elements.fromValue.value = 1;
    state.fromUnit = fromDefault;
    state.toUnit = toDefault;

    // Fetch forex rates if needed
    if (category === 'forex' && Object.keys(state.forexRates).length === 0) {
        fetchForexRates().then(() => convert());
    } else {
        convert();
    }
}

// ===== EVENT LISTENERS =====
// Input changes
elements.fromValue.addEventListener('input', convert);
elements.fromUnit.addEventListener('change', () => {
    state.fromUnit = elements.fromUnit.value;
    convert();
});
elements.toUnit.addEventListener('change', () => {
    state.toUnit = elements.toUnit.value;
    convert();
});

// Swap
elements.swapBtn.addEventListener('click', swapUnits);

// Category tabs
document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        switchCategory(tab.dataset.category);
    });
});

// Clear history
elements.clearHistory.addEventListener('click', clearHistory);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') convert();
});

// ===== INITIALIZATION =====
async function init() {
    // Load history
    renderHistory();

    // Fetch forex rates
    await fetchForexRates();

    // Initialize with forex
    switchCategory('forex');

    // Periodic updates
    setInterval(async () => {
        if (state.category === 'forex') {
            await fetchForexRates();
            convert();
        }
    }, CONFIG.UPDATE_INTERVAL);

    console.log('💱 Universal Converter loaded!');
    console.log('📊 Categories:', Object.keys(UNITS).join(', '));
    console.log('🔄 Forex rates updated:', Object.keys(state.forexRates).length, 'currencies');
    console.log('🧮 Calculator ready!');
}

// Start the app
init();
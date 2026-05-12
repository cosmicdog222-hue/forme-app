// ============================================
// FORME - APP LOGIC
// ============================================

// ============================================
// SIZE CHART REFERENCE
// ============================================
const sizeCharts = {
    men: {
        tops: {
            XS: { chest: [81, 86], shoulders: [38, 40], waist: [66, 71] },
            S:  { chest: [86, 96], shoulders: [40, 43], waist: [71, 76] },
            M:  { chest: [96, 106], shoulders: [43, 46], waist: [76, 86] },
            L:  { chest: [106, 116], shoulders: [46, 49], waist: [86, 96] },
            XL: { chest: [116, 126], shoulders: [49, 52], waist: [96, 106] },
            XXL:{ chest: [126, 136], shoulders: [52, 55], waist: [106, 116] }
        },
        pants: {
            28: { waist: [68, 73], inseam: [74, 76], hips: [86, 91] },
            30: { waist: [73, 78], inseam: [76, 79], hips: [91, 96] },
            32: { waist: [78, 83], inseam: [79, 81], hips: [96, 101] },
            34: { waist: [83, 88], inseam: [81, 84], hips: [101, 106] },
            36: { waist: [88, 94], inseam: [84, 86], hips: [106, 112] },
            38: { waist: [94, 100], inseam: [86, 89], hips: [112, 117] }
        }
    },
    women: {
        tops: {
            XS: { chest: [76, 81], shoulders: [35, 37], waist: [58, 63] },
            S:  { chest: [81, 86], shoulders: [37, 39], waist: [63, 68] },
            M:  { chest: [86, 96], shoulders: [39, 42], waist: [68, 76] },
            L:  { chest: [96, 106], shoulders: [42, 45], waist: [76, 86] },
            XL: { chest: [106, 116], shoulders: [45, 48], waist: [86, 96] },
            XXL:{ chest: [116, 126], shoulders: [48, 51], waist: [96, 106] }
        },
        pants: {
            2:  { waist: [58, 63], hips: [83, 88], inseam: [74, 76] },
            4:  { waist: [63, 68], hips: [88, 93], inseam: [76, 79] },
            6:  { waist: [68, 73], hips: [93, 98], inseam: [79, 81] },
            8:  { waist: [73, 78], hips: [98, 103], inseam: [79, 81] },
            10: { waist: [78, 83], hips: [103, 108], inseam: [81, 84] },
            12: { waist: [83, 88], hips: [108, 114], inseam: [81, 84] },
            14: { waist: [88, 94], hips: [114, 119], inseam: [81, 84] }
        },
        dresses: {
            XS: { chest: [76, 81], waist: [58, 63], hips: [83, 88] },
            S:  { chest: [81, 86], waist: [63, 68], hips: [88, 93] },
            M:  { chest: [86, 96], waist: [68, 76], hips: [93, 103] },
            L:  { chest: [96, 106], waist: [76, 86], hips: [103, 113] },
            XL: { chest: [106, 116], waist: [86, 96], hips: [113, 123] },
            XXL:{ chest: [116, 126], waist: [96, 106], hips: [123, 133] }
        }
    }
};

// ============================================
// SIZE RECOMMENDATION ENGINE
// ============================================
function recommendSize(measurements, gender, category) {
    const genderKey = gender === 'male' ? 'men' : 'women';
    const catKey = ['pants', 'jeans', 'shorts', 'skirts'].includes(category) ? 'pants'
                 : ['dresses'].includes(category) ? 'dresses'
                 : 'tops';

    const chart = sizeCharts[genderKey]?.[catKey];
    if (!chart) return null;

    let bestSize = null;
    let bestScore = -1;

    for (const [size, ranges] of Object.entries(chart)) {
        let score = 0;
        let checks = 0;

        for (const [key, [min, max]] of Object.entries(ranges)) {
            const val = measurements[key];
            if (!val || isNaN(val)) continue;
            checks++;
            if (val >= min && val <= max) {
                score += 2;
            } else {
                const miss = val < min ? min - val : val - max;
                score += Math.max(0, 2 - miss / 10);
            }
        }

        if (checks === 0) continue;
        const avg = score / checks;
        if (avg > bestScore) {
            bestScore = avg;
            bestSize = size;
        }
    }

    return bestSize;
}

// ============================================
// GOOGLE SEARCH QUERY BUILDER
// ============================================
function buildSearchQuery(measurements, gender, categories, color, material, style, priceRange) {
    const genderLabel = gender === 'male' ? 'mens' : gender === 'female' ? 'womens' : '';
    const categoryLabel = categories.length > 0 ? categories.join(' OR ') : 'clothing';
    const colorLabel = color !== 'all' ? color : '';
    const materialLabel = material !== 'all' ? material : '';
    const styleLabel = style !== 'all' ? style : '';

    // Determine recommended sizes
    const sizeLabels = [];
    const cats = categories.length > 0 ? categories : ['tops', 'pants'];
    for (const cat of cats) {
        const sz = recommendSize(measurements, gender, cat);
        if (sz && !sizeLabels.includes(sz)) sizeLabels.push(sz);
    }

    // Build search query parts
    const parts = [];
    if (genderLabel) parts.push(genderLabel);
    if (colorLabel) parts.push(colorLabel);
    if (materialLabel) parts.push(materialLabel);
    if (styleLabel) parts.push(styleLabel);
    parts.push(categoryLabel);
    if (sizeLabels.length > 0) parts.push('size ' + sizeLabels.join(' '));
    parts.push('buy online');

    return parts.filter(Boolean).join(' ');
}

// Build Google Shopping search URL
function buildGoogleShoppingURL(query, priceRange) {
    let url = `https://www.google.com/search?tbm=shop&q=${encodeURIComponent(query)}`;
    if (priceRange && priceRange !== 'all') {
        const [min, max] = priceRange.split('-');
        if (min) url += `&tbs=mr:1,price:1,ppr_min:${min}`;
        if (max && max !== '+') url += `,ppr_max:${max}`;
    }
    return url;
}

// Build retailer-specific search URLs
function buildRetailerURLs(measurements, gender, categories, color, material, style, priceRange) {
    const genderLabel = gender === 'male' ? 'mens' : gender === 'female' ? 'womens' : '';
    const catLabel = categories.length > 0 ? categories[0] : 'clothing';
    const colorLabel = color !== 'all' ? color : '';

    const cats = categories.length > 0 ? categories : ['tops', 'pants'];
    const sizeParts = [];
    for (const cat of cats) {
        const sz = recommendSize(measurements, gender, cat);
        if (sz && !sizeParts.includes(sz)) sizeParts.push(sz);
    }
    const sizeLabel = sizeParts.length > 0 ? sizeParts.join('-') : '';

    const baseQuery = [genderLabel, colorLabel, style !== 'all' ? style : '', catLabel].filter(Boolean).join(' ');
    const q = encodeURIComponent(baseQuery);
    const sz = encodeURIComponent(sizeLabel);

    return [
        {
            name: 'ASOS',
            logo: '🛍️',
            url: `https://www.asos.com/search/?q=${q}`,
            color: '#2d2d2d'
        },
        {
            name: 'H&M',
            logo: '🏬',
            url: `https://www2.hm.com/en_us/search-results.html?q=${q}`,
            color: '#e50010'
        },
        {
            name: 'Zara',
            logo: '✨',
            url: `https://www.zara.com/us/en/search?searchTerm=${q}`,
            color: '#1a1a1a'
        },
        {
            name: 'Nordstrom',
            logo: '💎',
            url: `https://www.nordstrom.com/sr?origin=keywordsearch&keyword=${q}`,
            color: '#1a5276'
        },
        {
            name: 'Macy\'s',
            logo: '⭐',
            url: `https://www.macys.com/shop/featured/${encodeURIComponent(baseQuery)}`,
            color: '#e11b22'
        },
        {
            name: 'Amazon Fashion',
            logo: '📦',
            url: `https://www.amazon.com/s?k=${q}+${sz}&rh=n%3A7141123011`,
            color: '#ff9900'
        },
        {
            name: 'Google Shopping',
            logo: '🔍',
            url: buildGoogleShoppingURL(baseQuery + (sizeLabel ? ' size ' + sizeLabel : ''), priceRange),
            color: '#4285f4'
        },
        {
            name: 'eBay Fashion',
            logo: '🏷️',
            url: `https://www.ebay.com/sch/i.html?_nkw=${q}+${sz}&_sacat=11450`,
            color: '#e53238'
        }
    ];
}

// ============================================
// GLOBAL STATE
// ============================================
let currentMeasurements = {};
let currentSearchParams = {};

// ============================================
// INIT
// ============================================
window.addEventListener('DOMContentLoaded', () => {
    loadSavedData();
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('measurementForm').addEventListener('submit', searchClothing);
    document.getElementById('saveDataBtn').addEventListener('click', saveMeasurements);
    document.getElementById('clearDataBtn').addEventListener('click', clearSavedData);
}

// ============================================
// SAVE / LOAD
// ============================================
function saveMeasurements() {
    const form = document.getElementById('measurementForm');
    const data = {};
    form.querySelectorAll('input, select').forEach(el => {
        if (el.name || el.id) data[el.id || el.name] = el.type === 'radio' || el.type === 'checkbox' ? el.checked : el.value;
    });
    data.gender = document.querySelector('input[name="gender"]:checked')?.value;
    data.savedAt = new Date().toLocaleString();
    localStorage.setItem('forme_measurements', JSON.stringify(data));
    document.getElementById('savedInfo').style.display = 'block';
    document.getElementById('savedDate').textContent = data.savedAt;
    alert('✓ Measurements saved!');
}

function loadSavedData() {
    try {
        const saved = JSON.parse(localStorage.getItem('forme_measurements') || '{}');
        if (!saved.savedAt) return;
        Object.keys(saved).forEach(key => {
            const el = document.getElementById(key);
            if (el && el.type !== 'radio' && el.type !== 'checkbox') el.value = saved[key];
        });
        if (saved.gender) {
            const radio = document.querySelector(`input[name="gender"][value="${saved.gender}"]`);
            if (radio) radio.checked = true;
        }
        document.getElementById('savedInfo').style.display = 'block';
        document.getElementById('savedDate').textContent = saved.savedAt;
    } catch(e) {}
}

function clearSavedData() {
    if (confirm('Clear saved measurements?')) {
        localStorage.removeItem('forme_measurements');
        document.getElementById('savedInfo').style.display = 'none';
        document.getElementById('measurementForm').reset();
        document.getElementById('resultsContainer').innerHTML = '';
        document.getElementById('resultsCount').textContent = '0';
        showEmptyState();
    }
}

// ============================================
// MAIN SEARCH
// ============================================
function searchClothing(event) {
    if (event) event.preventDefault();

    const gender = document.querySelector('input[name="gender"]:checked').value;
    const categories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
    const color = document.getElementById('color').value;
    const material = document.getElementById('material').value;
    const style = document.getElementById('style').value;
    const priceRange = document.getElementById('priceRange').value;

    const measurements = {
        chest:     parseFloat(document.getElementById('chest').value)     || null,
        waist:     parseFloat(document.getElementById('waist').value)     || null,
        hips:      parseFloat(document.getElementById('hips').value)      || null,
        inseam:    parseFloat(document.getElementById('inseam').value)    || null,
        shoulders: parseFloat(document.getElementById('shoulders').value) || null,
        neck:      parseFloat(document.getElementById('neck').value)      || null,
        armLength: parseFloat(document.getElementById('armLength').value) || null,
        bicep:     parseFloat(document.getElementById('bicep').value)     || null,
        thigh:     parseFloat(document.getElementById('thigh').value)     || null,
        legLength: parseFloat(document.getElementById('legLength').value) || null
    };

    currentMeasurements = measurements;
    currentSearchParams = { gender, categories, color, material, style, priceRange };

    showResults(measurements, gender, categories, color, material, style, priceRange);
}

// ============================================
// DISPLAY RESULTS
// ============================================
function showResults(measurements, gender, categories, color, material, style, priceRange) {
    const container = document.getElementById('resultsContainer');
    const countElement = document.getElementById('resultsCount');

    // Determine recommended sizes
    const hasMeasurements = Object.values(measurements).some(v => v !== null);
    const recommendedSizes = {};
    if (hasMeasurements) {
        const cats = categories.length > 0 ? categories : ['tops', 'pants', 'dresses'];
        for (const cat of cats) {
            const sz = recommendSize(measurements, gender, cat);
            if (sz) recommendedSizes[cat] = sz;
        }
    }

    // Build search query
    const searchQuery = buildSearchQuery(measurements, gender, categories, color, material, style, priceRange);
    const retailers = buildRetailerURLs(measurements, gender, categories, color, material, style, priceRange);

    // Build size summary
    const sizeSummaryHTML = Object.keys(recommendedSizes).length > 0
        ? `<div class="size-summary">
               <p class="size-summary-title">📐 Your Recommended Sizes</p>
               <div class="size-tags">
                   ${Object.entries(recommendedSizes).map(([cat, sz]) =>
                       `<span class="size-tag"><strong>${sz}</strong> in ${cat}</span>`
                   ).join('')}
               </div>
           </div>`
        : `<div class="size-summary no-measurements">
               <p>💡 Enter your measurements above for personalized size recommendations.</p>
           </div>`;

    // Build search summary
    const filterParts = [];
    if (color !== 'all') filterParts.push(color);
    if (material !== 'all') filterParts.push(material);
    if (style !== 'all') filterParts.push(style);
    if (categories.length > 0) filterParts.push(...categories);
    const filterSummary = filterParts.length > 0 ? filterParts.join(', ') : 'all styles';

    // Build HTML
    container.innerHTML = `
        <div class="results-wrapper">

            ${sizeSummaryHTML}

            <div class="search-summary">
                <p>Searching for <strong>${filterSummary}</strong> in <strong>${gender === 'male' ? "men's" : gender === 'female' ? "women's" : "all"}</strong> clothing
                ${Object.keys(recommendedSizes).length > 0 ? ' · sizes matched to your measurements' : ''}</p>
            </div>

            <div class="google-search-bar">
                <span class="search-icon">🔍</span>
                <input type="text" id="googleSearchInput" class="google-input" value="${searchQuery}" placeholder="Search for clothing...">
                <button class="google-search-btn" onclick="openGoogleSearch()">Search Google</button>
            </div>

            <h3 class="retailers-heading">Shop by Retailer</h3>
            <p class="retailers-subheading">Each link is pre-filled with your size and style preferences.</p>

            <div class="retailers-grid">
                ${retailers.map(r => `
                    <a href="${r.url}" target="_blank" rel="noopener" class="retailer-card" style="--retailer-color: ${r.color}">
                        <span class="retailer-logo">${r.logo}</span>
                        <span class="retailer-name">${r.name}</span>
                        <span class="retailer-arrow">→</span>
                    </a>
                `).join('')}
            </div>

            <div class="tips-section">
                <h3>💡 How to Use These Results</h3>
                <ul>
                    <li>Click any retailer above — your size and preferences are pre-loaded into their search</li>
                    <li>Use the search bar to refine the query and open Google Shopping</li>
                    <li>Enter more measurements on the left for better size accuracy</li>
                    <li>Try Google Shopping for the widest range of products and prices</li>
                </ul>
            </div>
        </div>
    `;

    countElement.textContent = retailers.length;
}

function openGoogleSearch() {
    const query = document.getElementById('googleSearchInput').value;
    const priceRange = currentSearchParams.priceRange || 'all';
    const url = buildGoogleShoppingURL(query, priceRange);
    window.open(url, '_blank');
}

// ============================================
// EMPTY STATE
// ============================================
function showEmptyState() {
    const container = document.getElementById('resultsContainer');
    container.innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">📐</div>
            <h3>Ready to Find Your Forme?</h3>
            <p>Enter your measurements and preferences on the left, then click "Find My Forme" to get personalized clothing recommendations and size-matched shopping links.</p>
        </div>
    `;
}

// Initialize empty state on load
document.addEventListener('DOMContentLoaded', showEmptyState);

let newProductList = [
    {
        productName: 'Soy Face Cleanser',
        brand:'FRESH',
        price: 385,
        category: ['cleanser & exfoliator', 'facial cleanser'],
        image: '../product-image/skincare-product-image/skincare-cleanser&exfoliator-facialcleanser.webp',
        description: 'A gentle, non-stripping face wash that is proven to remove makeup & impurities while softening, hydrating, and balancing all skin types & tones.'
    },

    {
        productName: 'Invisimatte Blotting Paper Refill',
        brand:'FENTY BEAUTY',
        price: 45,
        category: ['cleanser & exfoliator', 'blotting paper'],
        image: '../product-image/skincare-product-image/skincare-cleanser&exfoliator-blottingpaper.webp',
        description: 'Take it from Rihanna, blotting is key to keeping your makeup looking fresh. Super-compact and straight-up chic, Invisimatte Blotting Paper lifts away shine while leaving makeup perfectly in tact. Made with natural botanical fibers in the same expert technique as traditional Japanese paper, it’s as absorbent as it is silky smooth and a continuous pinky-nude scroll let’s you choose your perfect-sized sheet every time. The best part? It works in stealth mode—no glaring residue—with a refillable lipstick-shaped compact that’s small enough to fit in the palm of your hand. So go for it: De-sheen and be seen anywhere you roll.'
    },

    {
        productName: 'Clarifying Lotion 3 - Combination Oily Skin',
        brand:'CLINIQUE',
        price: 225,
        category: ['cleanser & exfoliator', 'scrub & exfoliator'],
        image: '../product-image/skincare-product-image/skincare-cleanser&exfoliator-scrub&exfoliator.webp',
        description: 'This gentle, refreshing formula is the difference-maker for healthy skin. It sweeps away pollution, grime, dulling flakes to reveal smoother, clearer skin. It also preps the skin for moisturiser—exfoliated skin is more receptive to hydration and treatment products. For oilier skins, twice-daily exfoliation helps minimise excess oil and keep pores clear. For drier skins, twice-daily exfoliation helps remove surface flakes that can be a barrier to moisture absorption. It even helps fine dry lines disappear.'
    },

    {
        productName: 'Vitamin Enriched Face Base - Moisturizer and Primer',
        brand:'BOBBI BROWN',
        price: 465,
        category: ['moisturiser', 'day moisturiser'],
        image: '../product-image/skincare-product-image/skincare-moisturiser-daymoisturiser.webp',
        description: 'This formula combines the moisturising power of shea butter with vitamins B, C and E. Grapefruit and geranium fragrances leave a light, uplifting scent on the skin. With daily use, skin looks and feels its best. Rich in feel, but never greasy, this advanced formula, with shea butter, instantly hydrates, softens and cushions skin.'
    },

    {
        productName: 'Bakuchiol Moisturizer',
        brand:'THE INKEY LIST',
        price: 78,
        category: ['moisturiser', 'night cream'],
        image: '../product-image/skincare-product-image/skincare-moisturiser-nightcream.webp',
        description: 'Bakuchiol is a natural alternative to Retinol, packing all the anti-ageing punch by helping target fine lines and wrinkles and smooth skin texture. Formulated with Omega-3 rich Inchi Oil and squalane, this light-weight moisturiser will keep the skin supple and hydrated and can be used both morning and night.'
    },

    {
        productName: 'Beauty Elixir',
        brand:'CAUDALIE',
        price: 215,
        category: ['moisturiser', 'facial mist'],
        image: '../product-image/skincare-product-image/skincare-moisturiser-facialmist.webp',
        description: 'The same 100 percent natural formula in a brand-new bottle. This iconic face mist is loved by celebrities and makeup artists for its many different uses: prep skin, set makeup, glow, and more with this all-in-one mist. The natural scent of mint, rose, and rosemary essential oils, like a spa in a bottle, invigorate and refresh throughout the day. It’s also perfect for travel.'
    },

    {
        productName: 'Clear Improvement® Active Charcoal Mask To Clear Pores',
        brand:'ORIGINS',
        price: 130,
        category: ['mask & treatments', 'mask'],
        image: '../product-image/skincare-product-image/skincare-mask&treatments-mask.webp',
        description: 'This mask deeply detoxes, absorbs environmental toxins and dissolves impurities. Formulated with Bamboo Charcoal & White China Clay, this charcoal mask acts like a magnet to deep clean and draw out deep-dwelling pore-cloggers, impurities & debris.'
    },

    {
        productName: 'Night Switch PHA/AHA 10% Serum',
        brand:'LIXIRSKIN',
        price: 142,
        category: ['mask & treatments', 'peel'],
        image: '../product-image/skincare-product-image/skincare-mask&treatments-peel.webp',
        description: 'Lixir NIGHT SWITCH is designed to target fine lines, wrinkles, pores, blackheads and spots overnight. Carefully formulated with three different acids - one to reduce oxidative stress, one to hydrate and one to detoxify the skin - the overall effect is one of restorative renewal. Dead skin cells are stripped away, leaving you with softer, smoother skin and a glowing, even-toned complexion.'
    },

    {
        productName: 'Golden Haze Face Oil',
        brand:'ALPHA-H',
        price: 156,
        category: ['mask & treatments', 'face oil'],
        image: '../product-image/skincare-product-image/skincare-mask&treatments-faceoil.webp',
        description: 'This luxurious blend of nutrient-rich Australian botanical oils is rich in Omega Fatty Acids designed to plump, soothe and nourish the skin. This blend combines 9 potent oils in one lightweight formula including antioxidant-rich Watermelon Seed, Jojoba and Camellia Seed Oils to protect against free-radical damage and moisture loss that cause premature ageing. This fast-absorbing, rejuvenating formula locks in moisture, strengthens your skins natural barrier and boosts radiance for juicy, healthy skin.​'
    },

    {
        productName: 'Mineral Mattescreen SPF 40 PA+++',
        brand:'SUPERGOOP!',
        price: 195,
        category: ['sun care', 'face sunscreen'],
        image: '../product-image/skincare-product-image/skincare-suncare-facesunscreen.webp',
        description: 'This new-and-improved formula smooths skin, minimises the look of pores, offers broad spectrum SPF 40 and helps protect against blue light. Use it as a makeup-gripping primer under foundation when you want more coverage, or on its own if you want a more natural look with shine control.'
    }, 

    {
        productName: 'Sunny Honey Bali Bronzing Foam',
        brand:'COCO & EVE',
        price: 150,
        category: ['sun care', 'self tanner'],
        image: '../product-image/skincare-product-image/skincare-suncare-selftanner.webp',
        description: 'Bronze up with this tropical self tanner packed full of hydrating Balinese ingredients for a long-lasting, natural glow in a range of olive based shades.'
    }, 

    {
        productName: 'Perfect Renew 5D Sun Protector Essence SPF 50+ PA++++',
        brand:'LANEIGE',
        price: 180,
        category: ['sun care', 'after sun care'],
        image: '../product-image/skincare-product-image/skincare-suncare-aftersuncare.webp',
        description: 'This anti-ageing essence offers high UV protection that provides broad spectrum protection through five different UV filters. Infused sun protection for a visibly youthful complexion, it is suitable for sensitive skin.'
    }
]
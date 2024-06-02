let newProductList = [
    {
        productName: 'Sauvage Eau De Toilette',
        brand:'DIOR',
        price: 575,
        category: ['men'],
        image: '../product-image/fragrance-product-image/fragrance-men-1.webp',
        description: 'This fragrance features Ambroxan, derived from precious Ambergris, that unleashes a powerfully woody trail. It is an act of creation inspired by wide-open spaces and an ozone blue sky sprawled above a rocky landscape, white-hot beneath the desert sun. That was the way François Demachy, Dior perfumer-creator, wanted it: raw and noble all at once. Natural ingredients, selected with extreme care, prevail in excessive doses. Radiant top notes burst with the juicy freshness of Reggio Di Calabria Bergamot.'
    },

    {
        productName: 'Eros Parfum',
        brand:'Eros Parfum',
        price: 700,
        category: ['men'],
        image: '../product-image/fragrance-product-image/fragrance-men-2.webp',
        description: 'This fragrance has an aromatic heart with an oriental profile made even deeper and more delightful. Mystic woody notes bring richness and addiction to the fragrance for a real, intensified sensuality. The liaison among the ingredients is vibrant and strong. The magnificent perfumer’s calligraphy created a luminous trail to contrast the mysterious woods. A melody enhancing each and every single note and bringing the fragrance to its climax.'
    },

    {
        productName: 'Explorer Eau De Parfum',
        brand:'MONTBLANC',
        price: 545,
        category: ['men'],
        image: '../product-image/fragrance-product-image/fragrance-men-3.webp',
        description: 'A woody, leathery, aromatic fragrance inspired by exploring a fantastic journey, giving an opportunity to discover the rarest ingredients and manufacturing methods that combine craftsmanship with the latest technology.'
    },

    {
        productName: 'Myslf Eau De Parfum',
        brand:'YVES SAINT LAURENT',
        price: 580,
        category: ['men'],
        image: '../product-image/fragrance-product-image/fragrance-men-4.webp',
        description: 'A statement of modern masculinity, embracing all his facets and emotions, this is the first YSL Beauty woody floral for a contrasted trail of modernity. At first is a fresh and vibrant accord made of bergamot heart from Calabria and vert de bergamot. At the heart is a raw and beating orange blossom absolute heart from Tunisia crafted for YSL Beauty. At last is a sensual and textured woods accord made of Indonesian patchouli heart and Ambrofix™.'
    },



    {
        productName: 'Black Opium Eau de Parfum',
        brand:'YVES SAINT LAURENT',
        price: 635,
        category: ['women'],
        image: '../product-image/fragrance-product-image/fragrance-women-1.webp',
        description: 'Black Opium Eau de Parfum is a modern glam rock version of a classic feminine scent. Designed like a shot of adrenalin, this fragrance will stop them intensely in their tracks.'
    },

    {
        productName: "J'adore Eau De Parfum",
        brand:'DIOR',
        price: 825,
        category: ['women'],
        image: '../product-image/fragrance-product-image/fragrance-women-2.webp',
        description: 'Essence of Ylang-Ylang from the Comoros unfurls its floral-fruity notes and instills a soft exotic touch. Damascus Rose, sophisticated and exuberant, then comes to warm the senses. Last but not least, a duo of Jasmines echo one another in a perfect embrace. Jasmine Grandiflorum from Grasse, the quintessence of a noble floral, exudes its delicate sensuality, tinged with fruit and sun to lend it a jammy character. It works in harmony with the more carnal quality of Indian Jasmine Sambac, "flower of the gods", with its warm facets of incredibly sensual and enveloping orange blossom.'
    },

    {
        productName: 'Kate Spade New York Eau De Parfum',
        brand:'KATE SPADE',
        price: 525,
        category: ['women'],
        image: '../product-image/fragrance-product-image/fragrance-women-3.webp',
        description: 'This fragrance is housed in a bottle that highlights Kate Spade’s iconic codes with the enamel ring at the base of the cap revealing the brand’s signature pink tone and spade. Feminine and elegant, the bottle is clean and modern with soft, curvy lines.'
    },

    {
        productName: 'Floral Eau De Parfum',
        brand:'COACH',
        price: 558,
        category: ['women'],
        image: '../product-image/fragrance-product-image/fragrance-women-4.webp',
        description: 'This fragrance evokes the warmth of a sunny day spent in a field of wildflowers.'
    },



    {
        productName: 'English Pear & Freesia Diffuser',
        brand:'JO MALONE LONDON',
        price: 500,
        category: ['home'],
        image: '../product-image/fragrance-product-image/fragrance-home-1.webp',
        description: 'Fill the room with orchards steeped in golden sunshine, warming the russet curves of luscious pears. The sensuous freshness of the just-ripe fruit wrapped in elegant white freesias. Includes 10 rattan reeds to release scent continuously for approx. 4-5 months. For optimum effect use all 10 simultaneously.'
    },

    {
        productName: "Pure Lavender Essential Oil Room Spray",
        brand:'HUSH CANDLE',
        price: 80,
        category: ['home'],
        image: '../product-image/fragrance-product-image/fragrance-home-2.webp',
        description: 'Enjoy a blissful night of relaxation and deep sleep. This particular species of South African Lavender has a deeper herbaceous scent without being overly sharp or sweet. The result is a soothing, deeply comforting, and truly authentic Lavender scent that is guaranteed to delight the senses. It is hand-blended and crafted in Singapore.'
    },


    {
        productName: 'Lost Cherry Candle',
        brand:'TOM FORD BEAUTY',
        price: 580,
        category: ['home'],
        image: '../product-image/fragrance-product-image/fragrance-home-3.webp',
        description: 'Luscious, tempting, and insatiable—innocence intersects indulgence in this fragrance. The opening captures the classic perfection of the exotic cherry fruit. Black cherry’s ripe flesh dripping in cherry liqueur glistens with a teasing touch of bitter almond. The heart bursts forth in cherry waves of sweetness and tartness. Griotte syrup expresses the textured maceration of voluptuous fruits while breathtaking florals—Turkish rose and jasmine sambac—penetrate the senses and soul. Peru balsam and roasted Tonka at the drydown suggest a new portrait of an iconic symbol. When blended with an unexpected mélange of sandalwood, vetiver, and cedar, the finish reaches fantasy-inspiring levels of insatiability'
    },

    {
        productName: 'Grapefruit & Hinoki Scented Candle',
        brand:'SALT & STONE',
        price: 242,
        category: ['home'],
        image: '../product-image/fragrance-product-image/fragrance-home-4.webp',
        description: 'Introducing Salt & Stone Grapefruit & Hinoki Scented Candle – a fragrant masterpiece that transports you to a world of olfactive delight. Immerse yourself, and your surroundings, in the captivating fusion of Grapefruit and Hinoki, as this scented saviour weaves an aromatic tapestry that is both invigorating and calming.'
    }]

    
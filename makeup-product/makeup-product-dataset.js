let newProductList = [
    {
        productName: 'Nudies Glow All Over Face Color Bronze & Glow',
        brand:'NUDESTIX',
        price: 167,
        category: ['face', 'contour'],
        image: '../product-image/makeup-product-image/makeup-face-contour.webp',
        description: 'A dewy, skin brightening highlighter balm for the cheeks, eyes and lips. Dab on highpoints of face for a dewy highlight. This multi-tasking balm has a removable blending brush for applying conveniently on-the-go.'
    },

    {
        productName: 'Poudre De Beauté Mat Naturel Beauty Powder',
        brand:'GUCCI BEAUTY',
        price: 260,
        category: ['face', 'foundation'],
        image: '../product-image/makeup-product-image/makeup-face-foundation.webp',
        description: 'Gucci Beautys Poudre de Beauté Mat Naturel is a buildable face powder offering a lightweight, visibly smooth texture, that creates a unified complexion to look naturally perfected. Available in 14 shades and suitable for all skin types.'
    },

    {
        productName: 'Soft Pinch Luminous Powder Blush',
        brand:'RARE BEAUTY',
        price: 136,
        category: ['face', 'blush'],
        image: '../product-image/makeup-product-image/makeup-face-blush.webp',
        description: 'Incredibly smooth and weightless, this powder blush gives a pinch-perfect flush that seems to radiate from within. Its highly pigmented base is packed with shimmering pearls for natural dimension that’s easy to blend, build, or diffuse for a softer effect (without ever looking chalky or ashy).'
    },

    {
        productName: 'Smudge Stick Waterproof Eye Liner',
        brand:'STILA',
        price: 112,
        category: ['eyes', 'eyeliner'],
        image: '../product-image/makeup-product-image/makeup-eyes-eyeliner.webp',
        description: 'These sticks are available in an array of matte and shimmer formulas that stay — not stray — for reliable colour payoff that’s second to none. Moisturising ingredients ensure colour glides on smooth and the formula ensures colour won’t budge or fade. Use as a classic pencil liner or a smudgy eye shadow. With smouldering, intense jade or a smudge of charcoal smoke, these vivid shades add alluring depth to any eye look. They feature a cocktail of moisturising ingredients that ensure colour glides on smoothly (no tugging or pulling) and smudges with ease then stays put all day.'
    },

    {
        productName: 'Maracuja Juicy Eye & Cheek Palette',
        brand:'TARTE',
        price: 176,
        category: ['eyes', 'eyeshadow'],
        image: '../product-image/makeup-product-image/makeup-eyes-eyeshadow.webp',
        description: 'These 12 rosy, bronze and neutral lid, line and crease shades allow you to mix and match matte, shimmer and sheen finishes. This palette features 2 cream blushes and 1 cream contour shade. Choose the palette that’s right for you.'
    },

    {
        productName: "L'Interdit Volumizing & Lengthening Mascara",
        brand:'GIVENCHY',
        price: 170,
        category: ['eyes', 'mascara'],
        image: '../product-image/makeup-product-image/makeup-eyes-mascara.webp',
        description: 'The new Givenchys L’Interdit Mascara Couture Volume instantly intensifies your eyes with the most sophisticated volume: +177% volume increase and XXL length for a result that defies convention.'
    },

    {
        productName: "Addict Lip Glow Lip Balm",
        brand:'DIOR',
        price: 175,
        category: ['lips', 'lip balm'],
        image: '../product-image/makeup-product-image/makeup-lips-lipbalm.webp',
        description: 'The first Dior lip balm formulated with 97% natural-origin ingredients that subtly revives the natural colour of lips with a custom glow for 6 hours and hydration for 24 hours. A new couture case features a unique formula made with natural-origin ingredients infused with cherry oil, and shades to suit all skin tones: the essential Dior Addict Lip Glow lip balm has been reinvented with an as always sensorial texture for lips that are both beautified and protected from dryness. Multi-use, Dior Addict Lip Glow can be worn on its own as a lip balm or as a primer under lipstick.'
    },

    {
        productName: "Powder Kiss Lipstick",
        brand:'MAC COSMETICS',
        price: 120,
        category: ['lips', 'lipstick'],
        image: '../product-image/makeup-product-image/makeup-lips-lipstick.webp',
        description: 'This lipstick is matte, totally reinvented. Delivering a romantic blur of soft-focus colour, this weightless moisture-matte lipstick was developed to replicate a backstage technique: blending out edges of matte lipstick for a hazy effect. Its groundbreaking formula contains moisture-coated powder pigments that condition and give long-term hydration to the lips. The result is the zero-shine look of a matte lipstick with the cushiony, lightweight feel of a balm. Fall for this all-new soft-touch, misty matte kiss of colour.'
    },

    {
        productName: "Afterglow Lip Balm",
        brand:'NARS',
        price: 130,
        category: ['lips', 'lip gloss'],
        image: '../product-image/makeup-product-image/makeup-lips-lipgloss.webp',
        description: 'This lip balm allows you to indulge your lips in inviting shine, featuring Monoï Hydrating Complex for smooth, supple comfort, and a blend of antioxidants to help protect lips. Swipe on a hint of high-shine color. Saturate with a surge of hydration.' 
    },

    {
        productName: "Gel Effect Nail Polish",
        brand:'NAILS INC.',
        price: 69,
        category: ['nails', 'nail polish'],
        image: '../product-image/makeup-product-image/makeup-nails-nailpolish.webp',
        description: 'This long-lasting, high-gloss nail polish creates a plumping effect and is formulated with plasticizer technology to give your mani a glossy, pro-finish. Infused with a rare flower extract that works to condition and strengthen your nails, its extra wide brush allows the polish to glide on easily.'
    },

    {
        productName: "Quick Slip Revitalizing Nail & Cuticle Oil",
        brand:'BUTTER LONDON',
        price: 111,
        category: ['nails', 'nail treatments'],
        image: '../product-image/makeup-product-image/makeup-nails-nailtreatments.webp',
        description: 'A brand new cuticle oil formulation with enhanced user experience that softens and provides instant, lasting hydration to cuticles thanks to safflower, jojoba and coconut oils in a convenient travel size tube, perfect for manicures on the go.'
    },

    {
        productName: "Lacquer Lock Extreme Long Wear Top Coat",
        brand:'NAILS INC.',
        price: 69,
        category: ['nails', 'base & top coat'],
        image: '../product-image/makeup-product-image/makeup-nails-base&topcoat.webp',
        description: 'Just as your gel manicure is cured by UV light, this revolutionary top coat features sunlight curing technology, using natural UV rays to lock in your nail colour for extended wear for up to 14 days. The result is blinding shine and gloss. Wear over any polish to create a long-wear result that is resistant to breakage and chipping.'
    },
]


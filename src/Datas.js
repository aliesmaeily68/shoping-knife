let AllProduct = [
    {
        MainCategory: { id: 1, title: 'چاقوی زنجان', imgName: '1.png' },
        Info: [
            {
                CategoryTitle: 'چاقوی آشپزخانه',
                MainInfo: [
                    { id: 1, title: ' چاقوی جوجه زن ', price: 150_000, imgName: '0.jpeg', stock: 1, conter: 0, discount: 10 },
                    { id: 2, title: ' چاقوی جوجه زن ', price: 50_000, imgName: '2.jpeg', stock: 12, conter: 0, discount: 12 },
                    { id: 3, title: ' چاقوی جوجه زن ', price: 50_000, imgName: '1.png', stock: 12, conter: 0, discount: 12 },
                    { id: 4, title: ' چاقوی جوجه زن ', price: 50_000, imgName: '2.jpeg', stock: 12, conter: 0, discount: 12 },

                ]
            },
            {
                CategoryTitle: 'چاقوی جیبی',
                MainInfo: [
                    { id: 1, title: ' چاقوی دنده ای  ', price: 100_000, imgName: '3.jpeg', stock: 5, conter: 0, discount: 15 },
                    { id: 2, title: ' چاقوی ساطور  ', price: 1_050_000, imgName: '4.jpeg', stock: 8, conter: 0, discount: 10 },
                ]
            },
            {
                CategoryTitle: 'چاقوی سفارشی',
                MainInfo: [
                    { id: 1, title: ' تبر   ', price: 250_000, imgName: '5.jpeg', stock: 11, conter: 0, discount: 20 },
                    { id: 2, title: ' چاقوی کبابی  ', price: 180_000, imgName: '6.jpeg', stock: 10, conter: 0, discount: 17 },
                ]
            },
        ]
    },

    {
        MainCategory: { id: 2, title: 'مس زنجان', imgName: '35.png' },
        Info: [
            {
                CategoryTitle: 'لوازم آشپزخانه',
                MainInfo: [
                    { id: 1, title: '  قابلمه  ', price: 150_000, imgName: '7.jpg', stock: 9, conter: 0, discount: 7 },
                    { id: 2, title: '  سینی  ', price: 15_000, imgName: '8.jpg', stock: 4, conter: 0, discount: 14 },

                ]
            },
            {
                CategoryTitle: 'لوازم تزئینی مسی',
                MainInfo: [
                    { id: 1, title: ' گلدان   ', price: 100_000, imgName: '9.jpg', stock: 2, conter: 0, discount: 8 },
                    { id: 2, title: ' گل   ', price: 1_050_000, imgName: '10.jpg', stock: 5, conter: 0, discount: 20 },
                    { id: 3, title: ' قندان   ', price: 50_000, imgName: '11.jpg', stock: 7, conter: 0, discount: 16 },
                    { id: 4, title: ' شکلاتخوری   ', price: 180_000, imgName: '12.jpg', stock: 9, conter: 0, discount: 10 },
                    { id: 5, title: ' شکلاتخوری   ', price: 180_000, imgName: '12.jpg', stock: 9, conter: 0, discount: 10 },
                    { id: 6, title: ' شکلاتخوری   ', price: 180_000, imgName: '12.jpg', stock: 9, conter: 0, discount: 10 },
                ]
            },
        ]
    },


    {
        MainCategory: { id: 3, title: 'میناکاری ', imgName: '34.png' },
        Info: [
            {
                CategoryTitle: 'لوازم تزئینی ',
                MainInfo: [
                    { id: 1, title: ' تابلو   ', price: 150_000, imgName: '13.jpg', stock: 15, conter: 0, discount: 10 },
                    { id: 2, title: ' قندان    ', price: 100_000, imgName: '19.jpg', stock: 12, conter: 0, discount: 13 },
                    { id: 3, title: '  سینی  ', price: 50_000, imgName: '15.jpg', stock: 7, conter: 0, discount: 19 },
                    { id: 4, title: ' گلدان   ', price: 15_000, imgName: '16.jpg', stock: 2, conter: 0, discount: 17 },
                    { id: 5, title: ' پارچ   ', price: 1_050_000, imgName: '17.jpg', stock: 3, conter: 0, discount: 11 },
                    { id: 6, title: ' آجیل خوری   ', price: 250_000, imgName: '18.jpg', stock: 15, conter: 0, discount: 6 },
                    { id: 7, title: ' آجیل خوری   ', price: 250_000, imgName: '18.jpg', stock: 15, conter: 0, discount: 6 },
                    { id: 8, title: ' آجیل خوری   ', price: 250_000, imgName: '18.jpg', stock: 15, conter: 0, discount: 6 },

                ]
            },

        ]
    },
]

let ProposalProducts = [
    {
        MainProposalProduct: [
            { id: 1, title: '  قابلمه  ', price: 150_000, imgName: '7.jpg', stock: 9, conter: 0, discount: 7 },
            { id: 2, title: ' چاقوی جوجه زن ', price: 50_000, imgName: '2.jpeg', stock: 12, conter: 0, discount: 12 },
            { id: 3, title: ' قندان   ', price: 50_000, imgName: '11.jpg', stock: 7, conter: 0, discount: 16 },
            { id: 4, title: ' تبر   ', price: 250_000, imgName: '5.jpeg', stock: 11, conter: 0, discount: 20 },
        ],
        AllProposalProduct: [
            { id: 1, title: ' تابلو   ', price: 150_000, imgName: '13.jpg', stock: 15, conter: 0, discount: 10 },
            { id: 2, title: ' قندان    ', price: 100_000, imgName: '19.jpg', stock: 12, conter: 0, discount: 13 },
            { id: 3, title: '  سینی  ', price: 50_000, imgName: '15.jpg', stock: 7, conter: 0, discount: 19 },
            { id: 4, title: ' گلدان   ', price: 15_000, imgName: '16.jpg', stock: 2, conter: 0, discount: 17 },
            { id: 5, title: ' پارچ   ', price: 1_050_000, imgName: '17.jpg', stock: 3, conter: 0, discount: 11 },
            { id: 6, title: '  قابلمه  ', price: 150_000, imgName: '7.jpg', stock: 9, conter: 0, discount: 7 },
            { id: 7, title: '  سینی  ', price: 15_000, imgName: '8.jpg', stock: 4, conter: 0, discount: 14 },
            { id: 8, title: ' آجیل خوری   ', price: 250_000, imgName: '18.jpg', stock: 15, conter: 0, discount: 6 },
            { id: 9, title: ' آجیل خوری   ', price: 250_000, imgName: '18.jpg', stock: 15, conter: 0, discount: 6 },
            { id: 10, title: ' آجیل خوری   ', price: 250_000, imgName: '18.jpg', stock: 15, conter: 0, discount: 6 },
        ],
    }
]

export { AllProduct, ProposalProducts }
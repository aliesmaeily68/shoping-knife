
let AllProduct = [
    {
        MainCategory: { id: 1, title: 'چاقوی زنجان', imgName: '1.png',imgName2:'چاقوی کلکسیونی دوتیغه.png' },
        Info: [
            {
                CategoryTitle: 'چاقوی آشپزخانه',
                MainInfo: [
                    { id: 1,Category:'آشپزی و سرآشپز', title: ' چاقوی جوجه زن ', price: 150_000, imgName: '0.jpeg', stock: 0, conter: 0, discount: 10,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },
                    { id: 2,Category:'چوپانی', title: ' چاقوی جوجه زن ', price: 50_000, imgName: '2.jpeg', stock: 12, conter: 0, discount: 12,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },
                    { id: 3,Category:'ضامن دار', title: ' چاقوی جوجه زن ', price: 50_000, imgName: '1.png', stock: 12, conter: 0, discount: 12,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },
                    { id: 4,Category:'چوپانی', title: ' چاقوی جوجه زن ', price: 50_000, imgName: '2.jpeg', stock: 12, conter: 0, discount: 12,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },

                ]
            },
            {
                CategoryTitle: 'چاقوی جیبی',
                MainInfo: [
                    { id: 5,Category:'آشپزی و سرآشپز', title: ' چاقوی دنده ای  ', price: 100_000, imgName: '3.jpeg', stock: 5, conter: 0, discount: 15,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },
                    { id:6,Category:'میوه خوری', title: ' چاقوی ساطور  ', price: 1_050_000, imgName: '4.jpeg', stock: 8, conter: 0, discount: 10,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },
                ]
            },
            {
                CategoryTitle: 'چاقوی سفارشی',
                MainInfo: [
                    { id: 7,Category:'ضامن دار', title: ' تبر   ', price: 250_000, imgName: '5.jpeg', stock: 0, conter: 0, discount: 20,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },
                    { id: 8,Category:'چوپانی', title: ' چاقوی کبابی  ', price: 180_000, imgName: '6.jpeg', stock: 10, conter: 0, discount: 17,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },
                ]
            },
        ]
    },

    {
        MainCategory: { id: 2, title: 'مس زنجان', imgName: 'لیوان مسی دسته دار.png',imgName2:'لیوان مسی دسته دار.png'  },
        Info: [
            {
                CategoryTitle: 'لوازم آشپزخانه',
                MainInfo: [
                    { id: 10,Category:'آجیل خوری', title: '  قابلمه  ', price: 150_000, imgName: '7.jpg', stock: 9, conter: 0, discount: 7,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },
                    { id: 11,Category:'سینی', title: ' سینی ', price: 15_000, imgName: '8.jpg', stock: 4, conter: 0, discount: 14,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },

                ]
            },
            {
                CategoryTitle: 'لوازم تزئینی مسی',
                MainInfo: [
                    { id: 12,Category:'سینی', title: ' گلدان   ', price: 100_000, imgName: '9.jpg', stock: 2, conter: 0, discount: 8,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },
                    { id: 13,Category:'پارچ', title: ' گل   ', price: 1_050_000, imgName: '10.jpg', stock: 5, conter: 0, discount: 20,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },
                    { id: 14,Category:'پارچ', title: ' قندان   ', price: 50_000, imgName: '11.jpg', stock: 7, conter: 0, discount: 16,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },
                    { id: 15,Category:'قابلمه', title: ' شکلاتخوری   ', price: 180_000, imgName: '12.jpg', stock: 9, conter: 0, discount: 10,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },
                    { id: 16,Category:'قابلمه', title: ' شکلاتخوری   ', price: 180_000, imgName: '12.jpg', stock: 0, conter: 0, discount: 10,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },
                    { id: 17,Category:'آجیل خوری', title: ' شکلاتخوری   ', price: 180_000, imgName: '12.jpg', stock: 9, conter: 0, discount: 10,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },
                ]
            },
        ]
    },


    {
        MainCategory: { id: 3, title: 'مینا کاری', imgName: "آجیل خوری مینا کاری.png",imgName2:"آجیل خوری مینا کاری.png"  },
        Info: [
            {
                CategoryTitle: 'لوازم تزئینی',
                MainInfo: [
                    { id: 18,Category:'آجیل خوری', title: ' تابلو   ', price: 150_000, imgName: '13.jpg', stock: 15, conter: 0, discount: 10,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },
                    { id: 19,Category:'تابلو', title: ' قندان    ', price: 100_000, imgName: '19.jpg', stock: 12, conter: 0, discount: 13,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },
                    { id: 20,Category:'تابلو', title: ' سینی ', price: 50_000, imgName: '15.jpg', stock: 7, conter: 0, discount: 19,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },
                    { id: 21,Category:'گلدان', title: 'گلدان  ', price: 15_000, imgName: '16.jpg', stock: 2, conter: 0, discount: 17,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },
                    { id: 22,Category:'گلدان', title: 'پارچ  ', price: 1_050_000, imgName: '17.jpg', stock: 3, conter: 0, discount: 11,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },
                    { id: 23,Category:'آجیل خوری', title: ' آجیل خوری   ', price: 250_000, imgName: '18.jpg', stock: 15, conter: 0, discount: 6,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },
                    { id: 24,Category:'دکوری', title: ' آجیل خوری   ', price: 250_000, imgName: '18.jpg', stock: 15, conter: 0, discount: 6,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },
                    { id: 25,Category:'دکوری', title: ' آجیل خوری   ', price: 250_000, imgName: '18.jpg', stock: 15, conter: 0, discount: 6,Weight:20,genus:'آلومینیومی',usage:'مصرف آشپزخانه',Producer:'استاد تاران' },
                ]
            },

        ]
    },
]

let ProposalProducts = [
    {
        MainProposalProduct: [
            { id: 26, title: ' قابلمه ', price: 150_000, imgName: '7.jpg', stock: 9, conter: 0, discount: 7 },
            { id: 27, title: ' چاقوی جوجه زن ', price: 50_000, imgName: '2.jpeg', stock: 12, conter: 0, discount: 12 },
            { id: 28, title: ' قندان   ', price: 50_000, imgName: '11.jpg', stock: 7, conter: 0, discount: 16 },
            { id: 29, title: ' تبر   ', price: 250_000, imgName: '5.jpeg', stock: 11, conter: 0, discount: 20 },
        ],
        AllProposalProduct: [
            { id: 30, title: 'تابلو  ', price: 150_000, imgName: '13.jpg', stock: 15, conter: 0, discount: 10 },
            { id: 31, title: ' قندان    ', price: 100_000, imgName: '19.jpg', stock: 12, conter: 0, discount: 13 },
            { id: 32, title: ' سینی ', price: 50_000, imgName: '15.jpg', stock: 7, conter: 0, discount: 19 },
            { id: 33, title: ' گلدان   ', price: 15_000, imgName: '16.jpg', stock: 2, conter: 0, discount: 17 },
            { id: 34, title: 'پارچ  ', price: 1_050_000, imgName: '17.jpg', stock: 3, conter: 0, discount: 11 },
            { id: 35, title: '  قابلمه  ', price: 150_000, imgName: '7.jpg', stock: 9, conter: 0, discount: 7 },
            { id: 36, title: ' سینی ', price: 15_000, imgName: '8.jpg', stock: 4, conter: 0, discount: 14 },
            { id: 37, title: ' آجیل خوری   ', price: 250_000, imgName: '18.jpg', stock: 15, conter: 0, discount: 6 },
            { id: 38, title: ' آجیل خوری   ', price: 250_000, imgName: '18.jpg', stock: 15, conter: 0, discount: 6 },
            { id: 39, title: ' آجیل خوری   ', price: 250_000, imgName: '18.jpg', stock: 15, conter: 0, discount: 6 },
        ],
    }
]
const FullProduct = []
AllProduct.map(data => data.Info.map(productInfo => productInfo.MainInfo.map(product => {
    FullProduct.push(product)
})))
ProposalProducts.map(products=>{
    products.MainProposalProduct.map(product => FullProduct.push(product))
    products.AllProposalProduct.map(product => FullProduct.push(product))
})

const ContactAnswerQuestionData=[
    {
        id:1,
        answer:'لورم ایپسوم متن ساختگی برای ایجاد (1)',
        question:'لورم ایپسوم متن ساختگی برای ایجاد  لورم ایپسوم متن ساختگی برای ایجاد (1)'
    },
    {
        id:2,
        answer:'لورم ایپسوم متن ساختگی برای ایجاد (2)',
        question:'لورم ایپسوم متن ساختگی برای ایجاد  لورم ایپسوم متن ساختگی برای ایجاد (2)'
    },
    {
        id:3,
        answer:'لورم ایپسوم متن ساختگی برای ایجاد (3)',
        question:'لورم ایپسوم متن ساختگی برای ایجاد  لورم ایپسوم متن ساختگی برای ایجاد (3)'
    },
    {
        id:4,
        answer:'لورم ایپسوم متن ساختگی برای ایجاد (4)',
        question:'لورم ایپسوم متن ساختگی برای ایجاد  لورم ایپسوم متن ساختگی برای ایجاد (4)'
    },
]

export { AllProduct, ProposalProducts, FullProduct,ContactAnswerQuestionData }
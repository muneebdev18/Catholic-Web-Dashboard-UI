import Cat1 from '../../../../assets/images/category/exp-cate1.webp'
import Cat2 from '../../../../assets/images/category/exp-cate2.webp'
import Cat3 from '../../../../assets/images/category/exp-cate3.webp'
import Cat4 from '../../../../assets/images/category/exp-cate4.webp'
import Cat5 from '../../../../assets/images/category/exp-cate5.webp'
import Cat6 from '../../../../assets/images/category/exp-cate6.webp'
import Cat7 from '../../../../assets/images/category/exp-cate7.webp'
import Cat8 from '../../../../assets/images/category/exp-cate8.webp'

const ExploreCategories = () => {
    const exploreCategoriesData = [
        {
            id: 1,
            img: Cat1,
            title: "Services",
            details: "Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna."
        },
        {
            id: 2,
            img: Cat2,
            title: "Speakers",
            details: "Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna."
        },
        {
            id: 3,
            img: Cat3,
            title: "Ministries",
            details: "Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna."
        },
        {
            id: 4,
            img: Cat4,
            title: "Education",
            details: "Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna."
        },
        {
            id: 5,
            img: Cat5,
            title: "Media",
            details: "Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna."
        },
        {
            id: 6,
            img: Cat6,
            title: "Lodging",
            details: "Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna."
        },
        {
            id: 7,
            img: Cat7,
            title: "Events",
            details: "Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna."
        },
        {
            id: 8,
            img: Cat8,
            title: "Fundraising",
            details: "Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna."
        },

    ]

    return (
        <div className="xl:mx-[26px] lg:mx-[26px] md:mx-[26px] sm:mx-[15px] xxxsm:mx-[15px] bg-[#12440D] xl:py-[103px] xl:px-[80px] xsm:px-[30px] xxxsm:px-[20px] sm:py-[70px] xsm:py-[50px] xxxsm:py-[40px] xl:rounded-[50px] md:rounded-[35px] xsm:rounded-[28px] xxxsm:rounded-[25px] mt-[120px] mb-[30px]">
            <div className="flex flex-col justify-center items-center  text-white mb-[30px]">
                <h2 className="2xl:text-[55px] lg:text-[45px] sm:text-[40px] xxxsm:text-[33px] font-fontMedium font-semibold tracking-wide ">Explore Categories</h2>
                <p className="xl:text-[20px] sm:text-[18px] xxxsm:text-[16px] text-center  font-extralight tracking-wide">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1 object-contain gap-[56px]">
                {exploreCategoriesData.map((item) => {
                    return (
                        <div key={item.id} >
                            <div className='overflow-hidden rounded-xl hover:rounded-xl'>
                                <img src={item.img} alt="Category-1" className='h-[258px] w-full rounded-[10px] transition duration-300 hover:scale-110' />
                            </div>
                            <h4 className='font-fontMedium font-bold xl:text-[32px] md:text-[27px] xxxsm:text-[25px] text-white mt-2'>{item.title}</h4>
                            <p className='xl:text-[22px] md:text-[20px] sm:text-[18px] xxxsm:text-[16px]  xl:leading-9 md:leading-7 xxxsm:leading-6 text-white '>{item.details}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ExploreCategories
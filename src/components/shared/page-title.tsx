// 'use client'

// import React, { useRef, useEffect, useState } from 'react';

// const PageTitle = ({ title }: { title: string }) => {
//     const titleRef = useRef<HTMLDivElement>(null);
//     const [isInTop, setIsInTop] = useState(false);

//     useEffect(() => {
//         const checkIsInTop = () => {
//             if (titleRef.current) {
//                 const rect = titleRef.current.getBoundingClientRect();
//                 // You can adjust the threshold based on your needs
//                 console.log(rect.top);

//                 const isInTop = rect.top > 0;
//                 setIsInTop(isInTop);
//             }
//         };

//         // Attach the event listener to the window scroll event
//         window.addEventListener('scroll', checkIsInTop);

//         // Call the handleScroll function once to check the initial position
//         checkIsInTop();

//         // Clean up the event listener on component unmount
//         return () => {
//             window.removeEventListener('scroll', checkIsInTop);
//         };
//     }, []);


//     return (
//         <div ref={titleRef} className={`
//         sticky top-0 py-4 flex flex-col justify-center items-start gap-y-2 w-full mt-[15vh]
//         ${!isInTop ? 'bg-accent-color-light  dark:bg-accent-color-dark ' : ''}`
//         }>
//             <h1 className='text-2xl lg:text-4xl'>
//                 {/* <span>{title.split(' ')[0]}</span> */}
//                 {/* {title} */}
//                 {isInTop ? 'Component is in view!' : 'Component is not in view.'}
//             </h1>
//             <span className='h-[3px] rounded-full w-[15%] bg-primary-color'></span>
//         </div>
//     )
// }

// export default PageTitle


const PageTitle = ({ title }: { title: string }) => {

    const [firstWord, ...restOfTitle] = title.split(' ');

    return (
        <div className='flex flex-col justify-center items-start gap-y-2 w-full mt-[5vh] lg:mt-[15vh]'>
            <h1 className='font-bold text-2xl lg:text-4xl'>
                <span className="text-primary-color">{firstWord + ' '}</span>
                {restOfTitle.join(' ')}
            </h1>
            <span className='h-[3px] rounded-full w-[15%] bg-primary-color'></span>
        </div>
    )
}

export default PageTitle
// import Image from "next/image";

// export function CardRec({ dataRec }: RecProps) {
//     type RecProps ={
//         dataRec: {
//           title: string;
//           description: string;
//           price: string;
//           imgSrc: string;
//           subtitle: string;
//           imgTime: string;
//           imgPrice: string;
//         }
//       }
   
//     const { title, description, imgSrc, price, subtitle, imgPrice, imgTime } = dataRec;
//     return (
//       <div className="flex flex-col gap-2 rounded-lg max-w-xs p-6 hover:shadow-md text-black bg-[#F8F8F8]">
//         <div className="relative h-60 ">
//           <Image
//             className="object-cover rounded-2xl "
//             src={imgSrc}
//             alt={title}
//             width={250}
//             height={250}
//           />
//         </div>
//         <div className="py-3">
//           <h2 className="text-xl h-12 w-[250px]">{title}</h2>
//           <div className="flex justify-between py-3">
//             <p className="text-xs text-gray-700">{description}</p>
//             <div className="flex gap-2">
//               <Image src={imgIcon} alt={title} width={25} height={25} />
//               <p>{rating}</p>
//             </div>
//           </div>
//           <div className="flex justify-between">
//             <div className="flex gap-2">
//               <Image src={imgTime} alt={title} width={25} height={25} />
//               <h4 className="text-md text-gray-700">{subtitle}</h4>
//             </div>
//             <div className="flex gap-2">
//               <Image src={imgPeople} alt={title} width={25} height={25} />
//               <div className="text-end">{price}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
//   export function recList() {
//     return (
//       <div className="flex flex-wrap gap-4 max-w-2xl xs:justify-center">
//         {dataRec.map((item, index) => (
//           <CardRec key={index} data={item} />
//         ))}
//       </div>
//     );
//   }
//   const dataRec = [
//     {
//       imgSrc: menu3.src,
//       title: "Swap - Diet Meal Box",
//       description: "Healthy Food, Salads",
//       price: "222",
//       subtitle: "40 minutes",
//       imgTime: timeIcon.src,
//       imgPrice: peopleIcon.src,
//     },
//     {
//       imgSrc: menu3.src,
//       title: "Swap - Diet Meal Box",
//       description: "Healthy Food, Salads",
//       price: "250",
//       subtitle: "40 minutes",
//       imgTime: timeIcon.src,
//       imgPrice: peopleIcon.src,
//     },
//     {
//       imgSrc: menu3.src,
//       title: "Swap - Diet Meal Box",
//       description: "Healthy Food, Salads",
//       price: "250",
//       subtitle: "40 minutes",
//       imgTime: timeIcon.src,
//       imgPrice: peopleIcon.src,
//     },
//     {
//       imgSrc: menu3.src,
//       title: "Swap - Diet Meal Box",
//       description: "Healthy Food, Salads",
//       price: "200",
//       subtitle: "40 minutes",
//       imgTime: timeIcon.src,
//       imgPrice: peopleIcon.src,
//     },
//   ];
  
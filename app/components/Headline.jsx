export default function Headline({number, content}){
    return(
        
        <h1 className="text-[20px] md:text-[28px] font-barlow uppercase text-center md:text-start text-white mt-40 mb-10 md:mb-20 md:ml-12 lg:ml-[15%]"><strong className="text-gray-500 mr-5">{number}</strong> {content} </h1>
        
    )
}
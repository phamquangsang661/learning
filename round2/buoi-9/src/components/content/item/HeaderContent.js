import { useState } from 'react'
function HeaderContent(props) {
    const { content } = props;
    const [textSplit] = useState(content.split(" "))
    return <div className="font-[600] text-[20px]  p-3 border-b border-gray-200">
        <div className="w-fit h-fit relative">
            <div className="z-[2] relative w-full ">
                {textSplit.map((word, index) => {
                    if (index === 0) {
                        if (textSplit.length === 1) {
                            return (
                                <>
                                    <span className="text-[#78CC6D]">{word[0]}</span>
                                    {word.slice(1)}
                                </>
                            )
                        }

                        return (
                            <span className="text-[#78CC6D]">{word}{" "}</span>
                        )
                    }
                    return word + " "
                })}
            </div>
            <div className="bg-[#F0F9EF] w-5 h-5 rounded-[50%] z-[1] absolute bottom-[0px] left-[-5px]" />

        </div>

    </div>
}

export default HeaderContent
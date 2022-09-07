import Header from './components/header/Header'
import Slice from './components/slide/Slice'
import MovieSection from './components/movie/MovieSection'
import MovieCard from './components/movie/MovieCard'
import { useState } from 'react'
const App = () => {
    let i = 0
    let [value, setValue] = useState(0)
    let [phone, setPhone] = useState('')
    const onButtonClick = () => {
        console.log(i, value)
        i = i + 1
        setValue(value + 1)
    }
    console.log("COMPONENT BỊ RENDER LẠI")

    return <div className="flex flex-col gap-3 text-[30px] justify-center items-center w-screen h-screen">
        <div>Số: {i}</div>
        <div>Số (State):{value} </div>

        <input onChange={(e) => {
            setPhone(e.target.value)
        }} className="border border-black" />

        Số điện thoại là: <span className="text-red-400">{phone}</span>
        <button
            className="bg-black hover:bg-[rgba(0,0,0,0.5)]
         text-white p-3 rounded-[8px]"
            onClick={onButtonClick}
        >Tăng dần</button>





















        {/* <Header></Header>
        <Slice></Slice>
        <div className="flex flex-col w-full bg-[#111111] h-fit py-[60px] overflow-hidden">
            <MovieSection title="Netflix Originals">
                <MovieCard imgSrc={"https://image.tmdb.org/t/p/original//dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg"}></MovieCard>
                <MovieCard imgSrc={"https://image.tmdb.org/t/p/original//AsdjYB61U8zVAsEyQgOebAjCoUN.jpg"}></MovieCard>
                <MovieCard imgSrc={"https://image.tmdb.org/t/p/original//8j12tohv1NBZNmpU93f47sAKBbw.jpg"}></MovieCard>
                <MovieCard imgSrc={"https://image.tmdb.org/t/p/original//reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"}></MovieCard>
                <MovieCard imgSrc="https://image.tmdb.org/t/p/original//jfmQPOHnuARC7YxGYC1vMMph3vp.jpg"></MovieCard>
            </MovieSection>
            <MovieSection title="Netflix Originals">
                <MovieCard imgSrc={"https://image.tmdb.org/t/p/original//dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg"}></MovieCard>
                <MovieCard imgSrc={"https://image.tmdb.org/t/p/original//AsdjYB61U8zVAsEyQgOebAjCoUN.jpg"}></MovieCard>
                <MovieCard imgSrc={"https://image.tmdb.org/t/p/original//8j12tohv1NBZNmpU93f47sAKBbw.jpg"}></MovieCard>
                <MovieCard imgSrc={"https://image.tmdb.org/t/p/original//reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"}></MovieCard>
                <MovieCard imgSrc="https://image.tmdb.org/t/p/original//jfmQPOHnuARC7YxGYC1vMMph3vp.jpg"></MovieCard>
            </MovieSection>
            <MovieSection title="Netflix Originals">
                <MovieCard imgSrc={"https://image.tmdb.org/t/p/original//dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg"}></MovieCard>
                <MovieCard imgSrc={"https://image.tmdb.org/t/p/original//AsdjYB61U8zVAsEyQgOebAjCoUN.jpg"}></MovieCard>
                <MovieCard imgSrc={"https://image.tmdb.org/t/p/original//8j12tohv1NBZNmpU93f47sAKBbw.jpg"}></MovieCard>
                <MovieCard imgSrc={"https://image.tmdb.org/t/p/original//reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"}></MovieCard>
                <MovieCard imgSrc="https://image.tmdb.org/t/p/original//jfmQPOHnuARC7YxGYC1vMMph3vp.jpg"></MovieCard>
            </MovieSection>
        </div> */}
    </div>
}
export default App
import Header from './components/header/Header'
import Slice from './components/slide/Slice'
import MovieSection from './components/movie/MovieSection'
import MovieCard from './components/movie/MovieCard'
const App = () => {
    return <div>
        <Header></Header>
        <Slice></Slice>
        <div className="flex flex-col w-full bg-[#111111] h-fit py-[60px]">
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
        </div>
    </div>
}
export default App
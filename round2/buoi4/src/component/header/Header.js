import './style.css'
import HeaderButton from './HeaderButton'
const Header = (props) => {
    const { test } = props
    return (
        <div className="header">
            <div className="header-left">
                <img width="30" src="/assets/logo-react.png"></img>
                <div>{test}</div>
            </div>
            <div className="header-center">
                <HeaderButton >Docs</HeaderButton>
                <HeaderButton></HeaderButton>
                <HeaderButton></HeaderButton>
                <HeaderButton></HeaderButton>
            </div>
            <div>Input here</div>
            <div className="header-right">
                <div>v18.2.0</div>
                <div>Language</div>
                <div>GitHub</div>
            </div>
        </div>
    )
}

export default Header
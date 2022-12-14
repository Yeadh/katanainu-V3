import { Outlet, Link, NavLink } from "react-router-dom"

const Navs  = () => {
    return (
        <>
            <nav className="menu-nav">
                <div className="logo">
                    <Link to="/">
                        <img src="assets/img/logo/logo.png" alt="Logo" />
                    </Link>
                </div>
                <div className="navbar-wrap main-menu d-none d-lg-flex">
                <ul className="navigation">
                    <li className="menu-item-has-children">
                        <a href="# " className="active"><span>About</span></a>
                        <ul className="submenu">
                            <li>
                                <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>The Game</NavLink>
                            </li>
                            <li>
                                <NavLink to="/team" className={({isActive}) => isActive ? 'active' : ''}>Team</NavLink>
                            </li>
                            <li>
                                <NavLink to="/problem-solution" className={({isActive}) => isActive ? 'active' : ''}>Problem/Solution</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="# "><span>Buy NFTs</span></a>
                        <ul className="submenu">
                            <li><a href="https://mint.katanainu.com/" target="_blank" rel="noreferrer">To Mint Page</a></li>
                            <li><a href="# ">To Marketplace</a></li>
                            <li><a href="# ">Characters</a></li>
                            <li><a href="# ">Weapons</a></li>
                            <li><a href="# ">Assets</a></li>
                            <li><a href="# ">Partner Programe</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="# "><span>Documents</span></a>
                        <ul className="submenu">
                            <li><a href="assets/resources/katanainuwhitepaper.pdf" target="_blank" rel="noreferrer">Whitepaper</a></li>
                            <li><a href="assets/resources/roadmap.png" target="_blank" rel="noreferrer">Roadmap</a></li>
                            <li><a href="assets/resources/katanainutokenomics.pdf" target="_blank" rel="noreferrer">Tokenomics</a></li>
                            <li><a href="# ">NFT Ecosystem</a></li>
                            <li><a href="# ">Pitchdeck</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="# "><span>Game</span></a>
                        <ul className="submenu">
                            <li><a href="# ">Play Katana Inu</a></li>
                            <li><a href="# ">How the game works?</a></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/faq" className={({isActive}) => isActive ? 'active' : ''}>FAQ</NavLink>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="# "><span>Social Media</span></a>
                        <ul className="submenu">
                            <li><a href="https://twitter.com/katanainu" target="_blank" rel="noreferrer">Twitter</a></li>
                            <li><a href="https://instagram.com/katanainu" target="_blank" rel="noreferrer">Instagram</a></li>
                            <li><a href="https://www.facebook.com/Katanainu-104918325117822" target="_blank" rel="noreferrer">Facebook</a></li>
                            <li><a href="https://www.discord.gg/katanainu" target="_blank" rel="noreferrer">Discord</a></li>
                            <li><a href="https://www.reddit.com/r/katanainu" target="_blank" rel="noreferrer">Reddit</a></li>
                            <li><a href="https://medium.com/@katanainu/katana-inu-a-great-play2earn-battle-royale-pc-game-with-nft-marketplace-on-layer-2-a56f9bbcce79" target="_blank" rel="noreferrer">Medium</a></li>
                        </ul>
                    </li>
                </ul>
                </div>
                <div className="header-action">
                <ul>
                    <li className="header-btn"><a href="https://opensea.io/collection/katanainu-takeru" target="_blank"  rel="noreferrer" className="btn">Opensea</a></li>
                </ul>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}

export default Navs

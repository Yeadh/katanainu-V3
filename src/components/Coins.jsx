const Coin = () =>{
    return (
        <>
        {/* coin-area */}
        <section className="coin-area pb-100">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-xxl-8 col-xl-9 col-lg-10">
                <div className="section-title text-center">
                    <h5 className="sub-title paroller" data-paroller-factor=".05" data-paroller-type="foreground" data-paroller-direction="horizontal">THE ULTIMATE UTILITY</h5>
                    <h2 className="title paroller" data-paroller-factor="-.05" data-paroller-type="foreground" data-paroller-direction="horizontal">$KATA token</h2>
                    <p>The best way to purchase the Katana Token. Please make sure you Copy and Paste the correct Contract, below when adding the token to your ETH Wallet or BSC Wallet when you're purchasing Katana on Uniswap or Pancake Swap.</p>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <div className="coin-slider-wrap">
                    <div className="coin-slider-active owl-carousel">
                    <div className="coin-slider-item">
                        <h4 className="title">Load Up!</h4>
                        <p>$KATA facilitates the trading of all in-game items within the Katana Inu ecosystem.</p>
                        {/* <a href="# " className="coin-btn">BUY $KATA</a> */}
                        <div className="wow fadeInRight" data-wow-delay=".8s" data-animation="fadeInRight"><a href="# " className="btn">BUY $KATA</a></div>
                    </div>
                    <div className="coin-slider-item">
                        <h4 className="title">Load Up!</h4>
                        <p>$KATA facilitates the trading of all in-game items within the Katana Inu ecosystem.</p>
                        <div className="wow fadeInRight" data-wow-delay=".8s" data-animation="fadeInRight"><a href="# " className="btn">BUY $KATA</a></div>
                    </div>
                    <div className="coin-slider-item">
                        <h4 className="title">Load Up!</h4>
                        <p>$KATA facilitates the trading of all in-game items within the Katana Inu ecosystem.</p>
                        <div className="wow fadeInRight" data-wow-delay=".8s" data-animation="fadeInRight"><a href="# " className="btn">BUY $KATA</a></div>
                    </div>
                    <div className="coin-slider-item">
                        <h4 className="title">Load Up!</h4>
                        <p>$KATA facilitates the trading of all in-game items within the Katana Inu ecosystem.</p>
                        <div className="wow fadeInRight" data-wow-delay=".8s" data-animation="fadeInRight"><a href="# " className="btn">BUY $KATA</a></div>
                    </div>
                    </div>
                    <div className="coin-img">
                    <img src="assets/img/images/coin.png" alt="" />
                    </div>
                </div>
                </div>
            </div>
            <div className="coin-items-wrapper">
                <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="coin-item">
                    <div className="coin-icon">
                        <img src="assets/img/icons/coin_icon01.png" alt="" />
                    </div>
                    <div className="coin-content">
                        <h5 className="title">In-Game Trade</h5>
                        <p>Random text goes here for explanation. which will help generate.</p>
                    </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="coin-item">
                    <div className="coin-icon">
                        <img src="assets/img/icons/coin_icon02.png" alt="" />
                    </div>
                    <div className="coin-content">
                        <h5 className="title">Staking Rewards</h5>
                        <p>Random text goes here for explanation. which will help generate.</p>
                    </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="coin-item">
                    <div className="coin-icon">
                        <img src="assets/img/icons/coin_icon03.png" alt="" />
                    </div>
                    <div className="coin-content">
                        <h5 className="title">Tournaments</h5>
                        <p>Random text goes here for explanation. which will help generate.</p>
                    </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="coin-item">
                    <div className="coin-icon">
                        <img src="assets/img/icons/coin_icon04.png" alt="" />
                    </div>
                    <div className="coin-content">
                        <h5 className="title">NFT Trade</h5>
                        <p>Random text goes here for explanation. which will help generate.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* coin-area-end */}
        </>
    )
}

export default Coin
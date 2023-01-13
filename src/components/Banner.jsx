function Banner({ bannerLocation, children }) {
    return (
        <section className={`banner banner--${bannerLocation}`}>
            <div className="banner__container">{children}</div>
        </section>
    );
}

export default Banner;

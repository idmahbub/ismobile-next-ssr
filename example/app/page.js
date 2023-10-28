import isMobile from "ismobile-next-ssr"
export const metadata = {
    title: "Welcome to CoolNomad Travel Blog",
    description: "coolnomad travel blog - read our travel stories"
}
export default async function Home() {
    return (
        <>
            <section className='min-h-screen'>
                {isMobile() ? (
                    <HomeMobilePage />
                ):(
                    <HomeDesktopPage />
                )}
            </section>
        </>
    )
}
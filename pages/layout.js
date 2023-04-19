import Header from "@/pages/components/header";

export default function Layout({children}) {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>
    )
}

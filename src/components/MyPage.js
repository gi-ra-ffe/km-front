import Cards from "./Cards";

const FlexList = ({ children }) => {
    return (<>
        <section className="mt-[24px]">
            {children}
        </section>
    </>);
}

const MyPage = ({ username }) => {
    return (<>
        <main className="">
            <h2 className="text-lg mt-[16px]">{username}</h2>
            <FlexList>
                <p>コーディネート一覧</p>
                <Cards />
            </FlexList>
            <FlexList>
                <p>アイテム一覧</p>
                <Cards />
            </FlexList>
        </main>
    </>);
}
export default MyPage;
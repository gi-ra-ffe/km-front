const Card = () => {
    return (<>
        <li className="w-[184px] mb-[16px] mr-[16px]">
            {/* <p><img src="" alt="" /></p> */}
            <p className="dammyImg flex justify-center items-center bg-slate-50 text-gray-600 w-[160px] h-[160px]">仮画像</p>
            <p>名前</p>
        </li>
    </>);
}

const Cards = () => {
    return (<>
        <ul className="flex overflow-hidden mb-[40px] shrink-[0]">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </ul>
    </>);
}

export default Cards;
export const FooterHasButton = ({ children }) => {
    return (
        <footer className="fixed left-[50%] translate-x-[-50%] bottom-0 w-[100%] max-w-[calc(900px_+_4em)] m-auto text-right right-[2em] px-[1em]">
            <div className="
            ml-[auto] w-[100%] 
            sm:w-[50%] sm:pl-[.5em]
            md:w-[calc((100%_-_2em)_/_3)] md:pl-0
            ">
                {children}
            </div>
        </footer>)
}
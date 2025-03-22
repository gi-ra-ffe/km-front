export const CustomForm = ({ children, onSubmit }) => {
    return (<form onSubmit={onSubmit} className="max-w-[400px] m-auto mt-[40px] p-[8px]">
        {children}
    </form>)
}

export const InputText = ({ value, placeholder, onChange }) => {
    return (<input type="text" value={value} placeholder={placeholder} onChange={onChange} className="w-[100%] mb-[28px] p-[8px] border-slate-200 border-[1px] border-solid" />)
};
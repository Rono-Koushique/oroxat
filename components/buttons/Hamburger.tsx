interface Props {
    open: boolean;
    setOpen: Function;
    className?: string;
}

export default function Hamburger({ open, setOpen, className }: Props) {
    return (
        <div
            className={`h-5 w-8 flex flex-col space-y-2 text-white overflow-hidden cursor-pointer ${className}`}
            onClick={() => setOpen((prev: boolean) => !prev)}
        >
            <div className={`w-full h-1/3 bg-black self-end ${open ? '-translate-x-[100%]':''}
                        transition duration-100 ease-in-out`}></div>
            <div className={`w-full h-1/3 bg-black ${open ? '-translate-x-[100%]':''}
                        transition delay-100 duration-100 ease-in-out`}></div>
            <div className={`w-full h-1/3 bg-black ${open ? '-translate-x-[100%]':''}
                        transition delay-200 duration-100 ease-in-out`}></div>
        </div>
    );
}

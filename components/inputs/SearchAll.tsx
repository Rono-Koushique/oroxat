import { Icon } from "@iconify/react";

type Props = {
    className?: string;
};

export default function SearchAll({ className }: Props) {
    return (
        <div
            className={`flex items-center justify-between border h-fit w-full 
                    px-4 py-2 bg-neutral-50 ${className!}`}
        >
            <input
                className="text-sm outline-none bg-transparent"
                placeholder="search..."
            />
            <Icon
                className="text-xl text-neutral-700"
                icon="material-symbols:search"
            />
        </div>
    );
}

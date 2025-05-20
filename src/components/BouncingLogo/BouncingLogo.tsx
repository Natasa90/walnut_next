import Image from "next/image";

export const BouncingLogo = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/50">
            <div className="w-40 h-50 animate-bounce-sassy relative">
                <Image
                    src="/images/Logo_trans.webp"
                    alt="Loading logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
};

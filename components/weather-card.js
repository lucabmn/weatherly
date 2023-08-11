import WeatherPage from "./weather-list-card";

export default async function WeatherCard() {
    return (
        <div className="flex font-sans bg-slate-200 drop-shadow-lg rounded-2xl">
            <div className="flex-none w-56 relative drop-shadow-2xl blur-[1px]">
                <img
                    src="/bg.jpg"
                    alt="Background Img"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    loading="lazy"
                />
            </div>
            <div className="flex-auto p-6">
                <div className="flex flex-wrap">
                    <div className="flex-auto font-medium text-slate-900">Sunny</div>
                    <div className="flex-auto font-medium text-slate-900">09.08.2023</div>
                    <div className="flex justify-end font-medium text-slate-400">Berlin, DE</div>
                    <div className="w-full pt-8 flex-auto text-4xl font-medium text-slate-900">21°C</div>
                    <div className="grid grid-cols-1 gap-1 pt-2">
                        <div className="flex justify-between items-center space-x-8">
                            <span className="font-medium text-slate-900">WIND SPEED</span>
                            <span className="font-medium text-slate-400">10 km/h</span>
                        </div>
                        <div className="flex justify-between items-center space-x-8">
                            <span className="font-medium text-slate-900">HUMIDITY</span>
                            <span className="font-medium text-slate-400">21 %</span>
                        </div>
                        <div className="flex justify-between items-center space-x-8">
                            <span className="font-medium text-slate-900">PRECIPITATION</span>
                            <span className="font-medium text-slate-400">5 %</span>
                        </div>
                    </div>

                    <WeatherPage />

                    <div className="w-full pt-40 flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
                        ~ Weatherly
                    </div>
                </div>
            </div>
        </div>
    );
}

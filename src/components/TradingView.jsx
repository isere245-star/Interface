import { useEffect, useRef, useState } from "react";
import {
    createChart,
    CandlestickSeries,
    createSeriesMarkers,
} from "lightweight-charts";

export default function TradingView() {

    const chartContainerRef = useRef(null);
    const [infos, setInfos] = useState([])

    useEffect(() => {
        if (!chartContainerRef.current) return;

        // 1. Création du graphique
        const chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: 450,

            layout: {
                background: {
                    color: "#0D0F14",
                },
                textColor: "#D1D4DC",
            },

            grid: {
                vertLines: {
                    color: "#1B1F2A",
                },
                horzLines: {
                    color: "#1B1F2A",
                },
            },

            rightPriceScale: {
                borderColor: "#363A45",
            },

            timeScale: {
                borderColor: "#363A45",
                timeVisible: true,
                secondsVisible: false,
            },
        });

        // 2. Création de la série de chandeliers
        const candles = chart.addSeries(CandlestickSeries, {
            upColor: "#00C853",
            downColor: "#FF3D00",
            borderUpColor: "#00C853",
            borderDownColor: "#FF3D00",
            wickUpColor: "#00C853",
            wickDownColor: "#FF3D00",
        });

        // 3. Données fictives
        /*const data = [
            { time: "2026-10-08", "open": 90, "high": 106, "low": 98, "close": 104 },
            { time: "2026-10-09", open: 104, high: 108, low: 101, close: 102 },
            { time: "2026-10-10", open: 102, high: 110, low: 101, close: 109 },
            { time: "2026-10-11", open: 109, high: 112, low: 105, close: 106 },
            { time: "2026-10-12", open: 106, high: 107, low: 99, close: 101 },
            { time: "2026-10-13", open: 101, high: 108, low: 100, close: 107 },
            { time: "2026-10-14", open: 107, high: 115, low: 105, close: 113 },
            { time: "2026-10-15", open: 113, high: 116, low: 109, close: 110 },
            { time: "2026-10-16", open: 110, high: 118, low: 108, close: 117 },
            { time: "2026-10-17", open: 117, high: 120, low: 112, close: 114 },
            { time: "2026-10-18", open: 114, high: 116, low: 106, close: 108 },
            { time: "2026-10-19", open: 108, high: 115, low: 107, close: 114 },
        ];*/
        const data = [
            {"time":"2006-10-20","open":599.2,"high":602.0,"low":590.5,"close":591.1},{"time":"2006-10-23","open":590.5,"high":592.6,"low":579.2,"close":580.7},{"time":"2006-10-24","open":581.5,"high":586.7,"low":572.2,"close":585.2},{"time":"2006-10-25","open":584.6,"high":591.5,"low":579.5,"close":591.2},{"time":"2006-10-26","open":591.7,"high":598.2,"low":589.6,"close":596.0},{"time":"2006-10-27","open":596.2,"high":599.7,"low":591.5,"close":599.2},{"time":"2006-10-30","open":598.2,"high":610.6,"low":598.2,"close":603.6},{"time":"2006-10-31","open":603.6,"high":607.2,"low":597.6,"close":606.1},{"time":"2006-11-01","open":606.0,"high":619.2,"low":605.1,"close":616.7},{"time":"2006-11-02","open":616.0,"high":625.6,"low":613.7,"close":624.2},{"time":"2006-11-03","open":623.6,"high":629.0,"low":617.1,"close":626.9},{"time":"2006-11-06","open":628.2,"high":629.3,"low":622.2,"close":623.0},{"time":"2006-11-07","open":624.1,"high":628.7,"low":621.2,"close":624.0},{"time":"2006-11-08","open":624.1,"high":626.5,"low":612.7,"close":615.7},{"time":"2006-11-09","open":615.6,"high":635.2,"low":614.6,"close":634.7},{"time":"2006-11-10","open":634.0,"high":636.2,"low":624.7,"close":628.2},{"time":"2006-11-13","open":628.2,"high":632.2,"low":620.1,"close":624.6},{"time":"2006-11-14","open":626.5,"high":628.7,"low":618.7,"close":620.7},{"time":"2006-11-15","open":621.6,"high":624.2,"low":615.0,"close":622.2},{"time":"2006-11-16","open":623.0,"high":627.7,"low":617.5,"close":618.2},{"time":"2006-11-17","open":617.5,"high":622.1,"low":614.2,"close":621.2},{"time":"2006-11-20","open":620.7,"high":626.7,"low":619.7,"close":622.2},{"time":"2006-11-21","open":623.2,"high":628.7,"low":621.7,"close":627.7},{"time":"2006-11-22","open":627.2,"high":634.2,"low":625.7,"close":627.9},{"time":"2006-11-27","open":640.5,"high":641.6,"low":636.2,"close":640.5},{"time":"2006-11-28","open":640.7,"high":640.7,"low":632.5,"close":639.7},{"time":"2006-11-29","open":638.7,"high":645.7,"low":634.2,"close":636.6},{"time":"2006-11-30","open":636.2,"high":648.2,"low":636.2,"close":647.2},{"time":"2006-12-01","open":646.1,"high":649.6,"low":643.2,"close":645.0},{"time":"2006-12-04","open":647.0,"high":647.6,"low":640.1,"close":645.7},{"time":"2006-12-05","open":645.6,"high":648.2,"low":638.2,"close":641.2},{"time":"2006-12-06","open":639.1,"high":640.6,"low":627.2,"close":630.7},{"time":"2006-12-07","open":629.2,"high":633.6,"low":624.5,"close":632.2},{"time":"2006-12-08","open":631.7,"high":637.7,"low":622.7,"close":624.6},{"time":"2006-12-11","open":625.0,"high":630.2,"low":622.7,"close":629.2},{"time":"2006-12-12","open":629.6,"high":630.7,"low":626.2,"close":629.0},{"time":"2006-12-13","open":629.1,"high":630.1,"low":623.1,"close":628.2},{"time":"2006-12-14","open":628.0,"high":628.7,"low":624.7,"close":628.5},{"time":"2006-12-15","open":625.5,"high":628.7,"low":614.1,"close":614.7},{"time":"2006-12-18","open":615.6,"high":617.7,"low":611.1,"close":614.7},{"time":"2006-12-19","open":616.2,"high":622.7,"low":614.7,"close":622.2},{"time":"2006-12-20","open":621.7,"high":624.2,"low":618.2,"close":621.1},{"time":"2006-12-21","open":620.2,"high":622.1,"low":617.5,"close":618.1},{"time":"2006-12-22","open":618.7,"high":621.5,"low":618.0,"close":619.2},{"time":"2006-12-26","open":624.5,"high":629.1,"low":623.2,"close":624.1},{"time":"2006-12-27","open":624.2,"high":628.7,"low":623.6,"close":627.2},{"time":"2006-12-28","open":626.6,"high":635.5,"low":626.2,"close":633.7},{"time":"2006-12-29","open":634.0,"high":636.2,"low":631.6,"close":636.1},{"time":"2007-01-02","open":638.2,"high":640.7,"low":636.6,"close":640.2},{"time":"2007-01-03","open":640.0,"high":644.7,"low":624.7,"close":627.1},{"time":"2007-01-04","open":627.2,"high":630.2,"low":620.2,"close":621.7},{"time":"2007-01-05","open":622.6,"high":625.7,"low":601.5,"close":606.7},{"time":"2007-01-08","open":608.2,"high":610.5,"low":603.2,"close":608.5},{"time":"2007-01-09","open":609.7,"high":615.2,"low":605.6,"close":613.5},{"time":"2007-01-10","open":612.6,"high":613.2,"low":605.2,"close":611.0},{"time":"2007-01-11","open":610.5,"high":615.7,"low":608.6,"close":611.5},{"time":"2007-01-12","open":611.5,"high":627.2,"low":609.2,"close":626.5},{"time":"2007-01-15","open":625.6,"high":627.7,"low":623.7,"close":626.1},{"time":"2007-01-16","open":626.2,"high":627.7,"low":622.5,"close":624.6},{"time":"2007-01-17","open":623.2,"high":633.2,"low":619.7,"close":632.2},{"time":"2007-01-18","open":632.6,"high":636.2,"low":626.2,"close":627.1},{"time":"2007-01-19","open":627.7,"high":636.1,"low":627.0,"close":634.7},{"time":"2007-01-22","open":635.2,"high":639.5,"low":631.6,"close":632.7},{"time":"2007-01-23","open":633.5,"high":647.5,"low":633.2,"close":645.6},{"time":"2007-01-24","open":645.6,"high":648.7,"low":638.5,"close":647.7},{"time":"2007-01-25","open":647.0,"high":654.2,"low":644.7,"close":645.6},{"time":"2007-01-26","open":645.1,"high":647.7,"low":640.6,"close":645.5},{"time":"2007-01-29","open":647.1,"high":647.6,"low":640.7,"close":643.0},{"time":"2007-01-30","open":642.1,"high":647.2,"low":640.7,"close":646.0},{"time":"2007-01-31","open":646.6,"high":654.2,"low":641.7,"close":652.7},{"time":"2007-02-01","open":652.5,"high":661.0,"low":651.5,"close":657.0},{"time":"2007-02-02","open":656.6,"high":659.2,"low":642.7,"close":647.2},{"time":"2007-02-05","open":648.6,"high":651.7,"low":645.7,"close":647.7},{"time":"2007-02-06","open":647.7,"high":658.1,"low":647.6,"close":652.7},{"time":"2007-02-07","open":653.1,"high":656.2,"low":649.7,"close":651.5},{"time":"2007-02-08","open":651.2,"high":660.7,"low":647.5,"close":659.2},{"time":"2007-02-09","open":660.1,"high":668.6,"low":656.7,"close":666.2},{"time":"2007-02-12","open":666.6,"high":666.7,"low":659.6,"close":660.6},{"time":"2007-02-13","open":660.6,"high":668.7,"low":660.2,"close":663.7},{"time":"2007-02-14","open":663.7,"high":671.5,"low":663.7,"close":668.3},{"time":"2007-02-15","open":668.5,"high":670.1,"low":662.0,"close":669.2},{"time":"2007-02-16","open":668.2,"high":669.5,"low":662.5,"close":668.5},{"time":"2007-02-19","open":667.7,"high":672.8,"low":667.2,"close":670.1},{"time":"2007-02-20","open":670.6,"high":671.6,"low":655.3,"close":657.2},{"time":"2007-02-21","open":659.3,"high":682.1,"low":656.7,"close":678.2},{"time":"2007-02-22","open":677.8,"high":680.7,"low":674.7,"close":676.8},{"time":"2007-02-23","open":673.8,"high":688.0,"low":672.3,"close":682.0},{"time":"2007-02-26","open":683.3,"high":687.7,"low":682.1,"close":686.1},{"time":"2007-02-27","open":686.3,"high":688.1,"low":657.7,"close":664.6},{"time":"2007-02-28","open":665.7,"high":677.2,"low":660.8,"close":669.1},{"time":"2007-03-01","open":673.2,"high":677.0,"low":661.2,"close":664.0},{"time":"2007-03-02","open":659.3,"high":663.8,"low":639.1,"close":642.0},{"time":"2007-03-05","open":643.2,"high":644.6,"low":632.8,"close":635.8},{"time":"2007-03-06","open":632.7,"high":647.5,"low":632.5,"close":646.3},{"time":"2007-03-07","open":647.5,"high":651.2,"low":642.3,"close":649.2},{"time":"2007-03-08","open":647.2,"high":655.5,"low":647.2,"close":652.1},{"time":"2007-03-09","open":652.3,"high":657.7,"low":647.2,"close":648.7},{"time":"2007-03-12","open":650.1,"high":653.5,"low":645.2,"close":649.8},{"time":"2007-03-13","open":649.2,"high":651.8,"low":641.2,"close":643.3},{"time":"2007-03-14","open":642.7,"high":645.6,"low":636.5,"close":643.7}
        ]

        const info = async () => {
            const res = await fetch("http://localhost:8000/trade")
            const data = await res.json()
            //console.log(data)
            setInfos(data) 
        }
        info()

        candles.setData(data);

        const markerss = [
            {
                time: "2006-12-12",
                position: "aboveBar",
                color: "#FF3D00",
                shape: "arrowDown",
                text: "Avalement baissier",
            },
            {
                time: "2006-12-19",
                position: "belowBar",
                color: "#00C853",
                shape: "arrowUp",
                text: "Avalement haussier",
            },
            {
                time: "2006-12-26",
                position: "aboveBar",
                color: "#FF3D00",
                shape: "arrowDown",
                text: "Avalement baissier",
            },
            {
                time: "2006-12-27",
                position: "belowBar",
                color: "#00C853",
                shape: "arrowUp",
                text: "Avalement haussier",
            },
            {
                time: "2007-01-18",
                position: "aboveBar",
                color: "#FF3D00",
                shape: "arrowDown",
                text: "Avalement baissier",
            },
            {
                time: "2007-01-19",
                position: "belowBar",
                color: "#00C853",
                shape: "arrowUp",
                text: "Avalement haussier",
            },
            {
                time: "2007-01-22",
                position: "aboveBar",
                color: "#FF3D00",
                shape: "arrowDown",
                text: "Avalement baissier",
            },
            {
                time: "2007-01-23",
                position: "belowBar",
                color: "#00C853",
                shape: "arrowUp",
                text: "Avalement haussier",
            },
            {
                time: "2007-02-07",
                position: "aboveBar",
                color: "#FF3D00",
                shape: "arrowDown",
                text: "Avalement baissier",
            },
            {
                time: "2007-02-12",
                position: "aboveBar",
                color: "#FF3D00",
                shape: "arrowDown",
                text: "Avalement baissier",
            },
            {
                time: "2007-02-21",
                position: "belowBar",
                color: "#00C853",
                shape: "arrowUp",
                text: "Avalement haussier",
            },
            {
                time: "2007-03-09",
                position: "aboveBar",
                color: "#FF3D00",
                shape: "arrowDown",
                text: "Avalement baissier",
            },
        ]

        // 4. Ajout des marqueurs de patterns
        const markers = [
            {
                time: "2026-10-10",
                position: "belowBar",
                color: "#00C853",
                shape: "arrowUp",
                text: "Bullish Engulfing",
            },
            {
                time: "2026-10-12",
                position: "aboveBar",
                color: "#FF3D00",
                shape: "arrowDown",
                text: "Bearish Engulfing",
            },
            {
                time: "2026-10-14",
                position: "belowBar",
                color: "#00C853",
                shape: "arrowUp",
                text: "BUY",
            },
            {
                time: "2026-10-17",
                position: "aboveBar",
                color: "#FF3D00",
                shape: "arrowDown",
                text: "SELL",
            },
        ];

        createSeriesMarkers(candles, markerss/*, markers*/);

        // 5. Ajustement automatique de l'affichage
        chart.timeScale().fitContent();

        // 6. Adaptation à la largeur de la fenêtre
        const resizeObserver = new ResizeObserver(() => {
            if (chartContainerRef.current) {
                chart.applyOptions({
                    width: chartContainerRef.current.clientWidth,
                });
            }
        });

        resizeObserver.observe(chartContainerRef.current);

        // 7. Nettoyage du graphique
        return () => {
            resizeObserver.disconnect();
            chart.remove();
        };
    }, []);

    return (
        <section className="w-full rounded-xl border border-[#1B1F2A] bg-[#0D0F14] p-4">
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-semibold text-white">
                        BTCUSDT
                    </h2>

                    <p className="text-sm text-gray-400">
                        Graphique de test · Données fictives
                    </p>
                    <p>
                        {/* JSON.stringify(infos) */}
                    </p>
                    
                </div>

                <div className="flex gap-3 text-xs">
                    <span className="text-[#00C853]">↑ BUY</span>
                    <span className="text-[#FF3D00]">↓ SELL</span>
                </div>
            </div>

            <div
                ref={chartContainerRef}
                className="w-full"
            />
        </section>
    );
}


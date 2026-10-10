import { useRef } from "react"
import {useEffect} from "react"

export default function TradingView() {

    const chartRef = useRef(null)

    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/tv.js"
    script.async = true

    useEffect(() => {

        script.onload = () => {

            new window.TradingView.widget({
                container_id: chartRef.current.id,
                width: "100%",
                height: 300,
                symbol: "FX:EURUSD",
                interval: "60",
                theme: "dark",

            })
        }
    }, [])

    document.body.appendChild(script)

    return (
        <section className="" >

            <div className="w-full" id="tradingview_chart"  ref={chartRef}></div>

        </section>
    )
}
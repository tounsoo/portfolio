import Link from 'next/link'
import { unstable_ViewTransition as ViewTransition } from "react";

export default function portfolioHome() {
    return (
        <div style={{ padding: 400 }}>
            <ViewTransition name="title--portfolio">
                <Link href="/">
                    portfolio home
                </Link>
            </ViewTransition>
        </div>
    )
}

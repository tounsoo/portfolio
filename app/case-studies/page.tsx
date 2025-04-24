import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function portfolioHome() {
    return (
        <div style={{ padding: 400 }}>
            <ViewTransition name="title--case-studies">
                <Link href="/">
                    Case studies
                </Link>
            </ViewTransition>
        </div>
    )
}

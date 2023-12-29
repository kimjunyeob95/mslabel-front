import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: {
        default: "라벨인쇄.한국",
        template: "라벨인쇄.한국 - %s"
    }
}

export default function NoneRouteLayout({
  children,
}: {
  children: React.ReactNode,
}) {
    return (
        <>
            <header style={{
                backgroundColor: "aqua",
                padding: 50,
                fontSize: 20
            }}>
                header
            </header>
            <ul>
                <li>
                    <Link href="/about">With Layout About Page</Link>
                </li>
                <li>
                    <Link href="/member">With Layout Member Page</Link>
                </li>
                <li>
                    <Link href="/none-about">None Layout About Page</Link>
                </li>
                <li>
                    <Link href="/none-member">None Layout Member Page</Link>
                </li>
            </ul>
            <div>
                {children}
            </div>
            <footer style={{
                backgroundColor: "aquamarine",
                padding: 50,
                fontSize: 20
            }}>
                footer
            </footer>
        </>
    )
}

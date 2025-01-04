import Head from "next/head";
import Layout from "../components/layouts";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Diabetes Care</title>
                <meta
                    name="description"
                    content="Diabetes - Know your risk, know your response"
                />
            </Head>
        </Layout>
    );
}

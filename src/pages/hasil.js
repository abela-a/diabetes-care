import Head from "next/head";
import Layout from "../components/layouts";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Hasil() {
    const router = useRouter();

    let risk = false;
    if (typeof window !== "undefined" && typeof document !== "undefined") {
        risk = localStorage.getItem("risk");
    }

    const checkRisk = () => {
        localStorage.removeItem("risk");
        router.push("/skrining");
    };

    return (
        <Layout>
            <Head>
                <title>Hasil Skrining - Diabetes Care</title>
            </Head>

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 md:py-24 py-12 items-center justify-center">
                    <div className="flex flex-col md:items-start md:text-justify mb-16 md:mb-0 items-center text-left">
                        <div
                            className={`w-full max-w-md ${
                                risk ? "block" : "hidden"
                            }`}
                        >
                            <h2 className="text-2xl font-bold mb-5 text-center">
                                Risiko Diabetes Anda <br />
                                <div
                                    className={`bg-red-500 py-3 px-6 mt-3 rounded-lg text-white ${
                                        risk === "high"
                                            ? "inline-block"
                                            : "hidden"
                                    }`}
                                    id="high-risk-label"
                                >
                                    Tinggi
                                </div>
                                <div
                                    className={`bg-yellow-500 py-3 px-6 mt-3 rounded-lg text-white ${
                                        risk === "medium"
                                            ? "inline-block"
                                            : "hidden"
                                    }`}
                                    id="medium-risk-label"
                                >
                                    Sedang
                                </div>
                                <div
                                    className={`bg-emerald-500 py-3 px-6 mt-3 rounded-lg text-white ${
                                        risk === "low"
                                            ? "inline-block"
                                            : "hidden"
                                    }`}
                                    id="low-risk-label"
                                >
                                    Rendah
                                </div>
                            </h2>

                            <p className="mb-5">
                                Berdasarkan hasil skrining yang telah dilakukan,
                                kami merekomendasikan Anda untuk segera
                                berkonsultasi dengan dokter atau tenaga medis
                                terkait untuk pemeriksaan lebih lanjut.
                            </p>

                            <p className="mb-5">
                                Selain itu, Anda juga dapat melakukan beberapa
                                langkah pencegahan berikut:
                            </p>

                            <div
                                className={`card bg-white shadow-lg ${
                                    risk === "high" ? "block" : "hidden"
                                }`}
                                id="high-risk-card"
                            >
                                <div className="card-body">
                                    <ol className="list-decimal list-inside">
                                        <li className="mb-2">
                                            <span className="font-bold">
                                                Pemeriksaan Rutin :
                                            </span>
                                            <ul className="list-disc p-5">
                                                <li className="mb-2">
                                                    Cek gula darah minimal
                                                    setiap 3 bulan
                                                </li>
                                                <li className="mb-2">
                                                    Pemeriksaan HbA1C setiap 6
                                                    bulan
                                                </li>
                                                <li className="mb-2">
                                                    Cek tekanan darah setiap
                                                    bulan
                                                </li>
                                                <li className="mb-2">
                                                    Pemeriksaan fungsi ginjal
                                                    tahunan
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="mb-2">
                                            <span className="font-bold">
                                                Modifikasi Gaya Hidup :
                                            </span>
                                            <ul className="list-disc p-5">
                                                <li className="mb-2">
                                                    Program penurunan berat
                                                    badan intensif
                                                </li>
                                                <li className="mb-2">
                                                    Olahraga minimal 150 menit
                                                    per minggu
                                                </li>
                                                <li className="mb-2">
                                                    Diet ketat rendah gula dan
                                                    karbohidrat
                                                </li>
                                                <li className="mb-2">
                                                    Pantau kalori harian
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="mb-2">
                                            <span className="font-bold">
                                                Konsultasi Kesehatan :
                                            </span>
                                            <ul className="list-disc p-5">
                                                <li className="mb-2">
                                                    Konsultasi rutin dengan
                                                    dokter
                                                </li>
                                                <li className="mb-2">
                                                    Pendampingan ahli gizi
                                                </li>
                                                <li className="mb-2">
                                                    Evaluasi kesehatan berkala
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>

                            <div
                                className={`card bg-white shadow-lg ${
                                    risk === "medium" ? "block" : "hidden"
                                }`}
                                id="medium-risk-card"
                            >
                                <div className="card-body">
                                    <ol className="list-decimal list-inside">
                                        <li className="mb-2">
                                            <span className="font-bold">
                                                Pemantauan Kesehatan :
                                            </span>
                                            <ul className="list-disc p-5">
                                                <li className="mb-2">
                                                    Cek gula darah setiap 6
                                                    bulan
                                                </li>
                                                <li className="mb-2">
                                                    Pemeriksaan tekanan darah
                                                    setiap 3 bulan
                                                </li>
                                                <li className="mb-2">
                                                    Evaluasi berat badan rutin
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="mb-2">
                                            <span className="font-bold">
                                                Pola Hidup Sehat :
                                            </span>
                                            <ul className="list-disc p-5">
                                                <li className="mb-2">
                                                    Olahraga teratur 30 menit
                                                    per hari
                                                </li>
                                                <li className="mb-2">
                                                    Makan teratur 3 kali sehari
                                                </li>
                                                <li className="mb-2">
                                                    Kontrol porsi makan
                                                </li>
                                                <li className="mb-2">
                                                    Manajemen stres
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="mb-2">
                                            <span className="font-bold">
                                                Edukasi :
                                            </span>
                                            <ul className="list-disc p-5">
                                                <li className="mb-2">
                                                    Pemahaman tentang gizi
                                                    seimbang
                                                </li>
                                                <li className="mb-2">
                                                    Pengetahuan tentang diabetes
                                                </li>
                                                <li className="mb-2">
                                                    Pentingnya aktivitas fisik
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>

                            <div
                                className={`card bg-white shadow-lg ${
                                    risk === "low" ? "block" : "hidden"
                                }`}
                                id="low-risk-card"
                            >
                                <div className="card-body">
                                    <ol className="list-decimal list-inside">
                                        <li className="mb-2">
                                            <span className="font-bold">
                                                Pemeriksaan Rutin :
                                            </span>
                                            <ul className="list-disc p-5">
                                                <li className="mb-2">
                                                    Cek kesehatan umum tahunan
                                                </li>
                                                <li className="mb-2">
                                                    Pemeriksaan gula darah
                                                    tahunan
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="mb-2">
                                            <span className="font-bold">
                                                Mempertahankan Gaya Hidup Sehat
                                                :
                                            </span>
                                            <ul className="list-disc p-5">
                                                <li className="mb-2">
                                                    Pertahankan berat badan
                                                    ideal
                                                </li>
                                                <li className="mb-2">
                                                    Konsumsi makanan seimbang
                                                </li>
                                                <li className="mb-2">
                                                    Aktivitas fisik teratur
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="mb-2">
                                            <span className="font-bold">
                                                Edukasi Berkelanjutan :
                                            </span>
                                            <ul className="list-disc p-5">
                                                <li className="mb-2">
                                                    Pemahaman faktor risiko
                                                    diabetes
                                                </li>
                                                <li className="mb-2">
                                                    Pengenalan gejala awal
                                                </li>
                                                <li className="mb-2">
                                                    Pentingnya pencegahan dini
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>

                            <div className="my-10 text-center">
                                <button
                                    type="button"
                                    onClick={checkRisk}
                                    className="btn btn-primary w-full max-w-xs shadow-lg"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                                        />
                                    </svg>
                                    Cek Ulang Risiko
                                </button>
                            </div>
                        </div>

                        <div
                            className={`w-full max-w-md ${
                                !risk ? "block" : "hidden"
                            }`}
                        >
                            <h2 className="text-3xl font-bold text-primary mb-5 text-center">
                                Anda belum melakukan skrining risiko diabetes.
                            </h2>

                            <Image
                                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Medical Research"
                                className="w-full rounded-md my-12"
                                width={1772}
                                height={1181}
                            />

                            <p className="mb-5">
                                Silakan lakukan skrining risiko diabetes
                                terlebih dahulu untuk mengetahui hasilnya.
                                Kemudian kami akan memberikan saran dan edukasi
                                sesuai dengan hasil skrining Anda.
                            </p>

                            <div className="my-10 text-center">
                                <Link
                                    className="btn bg-emerald-500 text-white hover:bg-emerald-600 w-full max-w-xs border-emerald-500 shadow-lg hover:border-emerald-700"
                                    href="/skrining"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                        />
                                    </svg>
                                    Cek Risiko Diabetes
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
